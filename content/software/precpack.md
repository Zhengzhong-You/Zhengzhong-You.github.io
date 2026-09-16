---
title: "PrecPack"
date: 2026-09-15
summary: "An efficient open-source exact solver for bin packing with generalized precedence constraints."
tags: ["software", "bin packing", "branch-bound-and-remember", "open source"]
listFigure: "/publication-figures/precpack-cover.svg"
listFigureAlt: "PrecPack: precedence-linked items and their ordered bin assignment, from the project GitHub repository"
---

PrecPack is an efficient open-source exact solver for bin packing with generalized precedence constraints.

- Repository: [github.com/Sunkanghong-Wang/PrecPack](https://github.com/Sunkanghong-Wang/PrecPack)
- Paper: [arXiv:2609.17368](https://arxiv.org/abs/2609.17368)

The solver handles generalized precedence-constrained bin packing together with assembly line balancing and precedence-constrained bin packing as special cases. Its C++ implementation combines branch-bound-and-remember search, dominance rules, conflict-aware lower bounds, optional column-generation strengthening, independent solution checking, and reproducible batch execution.
