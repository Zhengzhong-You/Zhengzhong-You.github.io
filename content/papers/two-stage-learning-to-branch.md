---
title: "Two-Stage Learning to Branch in Branch-Price-and-Cut Algorithms for Solving Vehicle Routing Problems Exactly"
date: 2026-02-24
author:
  - "Ricky Zhengzhong You"
  - "Yu Yang"
  - "Xinshang Wang"
  - "Wotao Yin"
summary: >-
  Branching is one of the most important components in branch-price-and-cut
  (BPC) algorithms for solving vehicle routing problems (VRPs) exactly.
  However, learning to branch is much more challenging in BPC than in
  branch-and-cut algorithms that are used for solving general mixed integer
  programs. To address such challenges, we propose the first effective
  learning-to-branch framework in BPC algorithms, leading to a novel
  two-stage learning-based branching (2LBB) strategy.
tags:
  - "learning to branch"
  - "column generation"
  - "exact methods"
  - "vehicle routing"
---

Published in *Operations Research*.

- DOI: [10.1287/opre.2023.0615](https://pubsonline.informs.org/doi/10.1287/opre.2023.0615)
- Preprint: [PDF](/papers/2lbb_preprint.pdf)
- Code and replication resources: [RouteOpt repository](https://github.com/Zhengzhong-You/RouteOpt)

Branching is one of the most important components in branch-price-and-cut (BPC) algorithms for solving vehicle routing problems (VRPs) exactly. However, learning to branch is much more challenging in BPC than in branch-and-cut algorithms that are used for solving general mixed integer programs because branching is generally performed by adding a dense constraint to the restricted master problem, while the variables in the restricted master problem change constantly. To address such challenges, we propose the first effective *learning-to-branch framework* in BPC algorithms, leading to a novel *two-stage learning-based branching* (2LBB) strategy. This serves as an innovative learning-based enhancement for the cutting-edge three-phase branching strategy for column-generation-based algorithms. In the 2LBB, the first stage focuses on narrowing down the list of promising candidates using computationally cheap features, thereby lessening dependence on LP testing. The second stage, meanwhile, diminishes the burden on heuristic testing through an innovative partial testing approach. Moreover, we propose a novel theoretical model characterizing the fundamental trade-off between time spent making a single branching decision and the resulting branching quality. A formula derived from the model for dynamically adjusting the number of candidates to select for the second stage achieves consistently superior performance to ones obtained from trial-and-error tuning. Through an extensive numerical study, we demonstrate that a dynamic version of the 2LBB, denoted by 2LBB-dy, achieves approximately 45% and 50% time reduction, respectively, compared to the state-of-the-art hand-crafted branching strategy in solving the capacitated vehicle routing problem (CVRP) and vehicle routing problem with time windows (VRPTW). In addition, **RouteOpt**, when equipped with the 2LBB-dy, achieves a 47% time reduction compared to the state-of-the-art VRPSolver for the CVRP.

<!--more-->
