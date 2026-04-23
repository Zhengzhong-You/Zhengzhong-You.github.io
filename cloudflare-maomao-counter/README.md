# Maomao Shared Pet Counter

This Cloudflare Worker turns the homepage `Pet Maomao` count into a shared counter visible to every visitor, instead of a browser-local counter.

## What This Uses

- Cloudflare Workers
- A SQLite-backed Durable Object named `PetCounter`

## Files

- `wrangler.toml`
- `src/index.js`

## Endpoints

- `GET /health`
- `GET /api/maomao/count`
- `POST /api/maomao/pet`

## What You Need To Do

1. Create or log into your Cloudflare account.
2. Install Wrangler or use `npx`:
   - `npm install -g wrangler`
3. Log in:
   - `wrangler login`
4. Deploy from this directory:
   - `cd website_work/cloudflare-maomao-counter`
   - `wrangler deploy`
5. Copy the deployed Worker URL, for example:
   - `https://maomao-pet-counter.<your-subdomain>.workers.dev`
6. Put that URL into `website_work/config.yml`:
   - `petCounterApi: "https://maomao-pet-counter.<your-subdomain>.workers.dev"`
7. Rebuild and push the website repo.

## How To Test

After deployment:

- Open:
  - `https://...workers.dev/health`
- You should get:
  - `{"ok":true}`

Then:

- Open:
  - `https://...workers.dev/api/maomao/count`
- You should get:
  - `{"count":0}`

After one POST to `/api/maomao/pet`, the count should increase globally.

## Notes

- If `petCounterApi` is blank, the website falls back to browser-local counting.
- `ALLOWED_ORIGIN` is already set to `https://zhengzhong-you.github.io`.
