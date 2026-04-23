import { DurableObject } from "cloudflare:workers";

function corsHeaders(origin) {
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    "Vary": "Origin",
  };
}

function json(data, { status = 200, headers = {} } = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      ...headers,
    },
  });
}

function resolveAllowedOrigin(request, configuredOrigin) {
  const requestOrigin = request.headers.get("Origin");
  if (requestOrigin && requestOrigin === configuredOrigin) return requestOrigin;
  return configuredOrigin;
}

export class PetCounter extends DurableObject {
  constructor(ctx, env) {
    super(ctx, env);
    this.ctx = ctx;
  }

  async readCount() {
    const count = await this.ctx.storage.get("count");
    return typeof count === "number" && Number.isFinite(count) ? count : 0;
  }

  async incrementCount() {
    const current = await this.readCount();
    const next = current + 1;
    await this.ctx.storage.put("count", next);
    return next;
  }

  async fetch(request) {
    const url = new URL(request.url);

    if (request.method === "GET" && url.pathname === "/count") {
      return json({ count: await this.readCount() });
    }

    if (request.method === "POST" && url.pathname === "/pet") {
      return json({ count: await this.incrementCount() });
    }

    return json({ error: "Not found" }, { status: 404 });
  }
}

export default {
  async fetch(request, env) {
    const origin = resolveAllowedOrigin(request, env.ALLOWED_ORIGIN);

    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders(origin),
      });
    }

    const url = new URL(request.url);

    if (url.pathname === "/health") {
      return json({ ok: true }, { headers: corsHeaders(origin) });
    }

    let targetPath = null;
    let targetMethod = null;

    if (url.pathname === "/api/maomao/count" && request.method === "GET") {
      targetPath = "/count";
      targetMethod = "GET";
    }

    if (url.pathname === "/api/maomao/pet" && request.method === "POST") {
      targetPath = "/pet";
      targetMethod = "POST";
    }

    if (!targetPath) {
      return json({ error: "Not found" }, {
        status: 404,
        headers: corsHeaders(origin),
      });
    }

    const id = env.PET_COUNTER.idFromName("global-maomao-counter");
    const stub = env.PET_COUNTER.get(id);
    const upstream = await stub.fetch(new Request(`https://pet-counter${targetPath}`, {
      method: targetMethod,
    }));
    const body = await upstream.text();

    return new Response(body, {
      status: upstream.status,
      headers: {
        ...corsHeaders(origin),
        "content-type": "application/json; charset=utf-8",
      },
    });
  },
};

