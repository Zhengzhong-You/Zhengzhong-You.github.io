---
title: "PrecPack: An Efficient Open-Source Exact Solver for Bin Packing with Generalized Precedence Constraints"
date: 2026-09-15
author:
  - "Sunkanghong Wang"
  - "Zhengzhong Ricky You"
  - "Roberto Baldacci"
  - "Baichuan Mo"
  - "Hu Qin"
  - "Lijun Wei"
  - "Zhou Xu"
journal: "INFORMS Journal on Computing (Under Review)"
summary: >-
  An open-source exact solver for bin packing with generalized precedence
  constraints, combining branch-bound-and-remember search with valid
  column-generation bounds and independently checked solutions.
tags:
  - "working paper"
  - "bin packing"
  - "generalized precedence constraints"
  - "assembly line balancing"
  - "branch-bound-and-remember"
  - "open-source exact solver"
listFigure: "/publication-figures/precpack-cover.svg"
listFigureAlt: "PrecPack: precedence-linked items and their ordered bin assignment, from the project GitHub repository"
---

Under review at *INFORMS Journal on Computing*.

- arXiv: [2609.17368](https://arxiv.org/abs/2609.17368)
- Preprint: [PDF](https://arxiv.org/pdf/2609.17368)
- Repository: [GitHub](https://github.com/Sunkanghong-Wang/PrecPack)

PrecPack is an open-source exact solver for bin packing with generalized precedence constraints, including assembly line balancing and precedence-constrained bin packing as special cases. It extends branch-bound-and-remember search to arbitrary nonnegative precedence weights, retaining restrictions that remain active across future bins. The solver combines dominance rules and conflict-aware lower bounds with optional root column generation, using fixed-point arithmetic to obtain numerically valid bounds. Its C++ implementation provides programming and command-line interfaces, independent solution checking, explicit termination statuses, and reproducible batch execution. Same-machine, single-threaded comparisons show improved solution times and more optimality proofs than leading source-available BBR implementations on classical assembly-line benchmarks. The core search requires no commercial optimization software.

<!--more-->
