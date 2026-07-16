---
title: "Learned Pairwise Deep Dual-Optimal Inequalities for Stabilizing Column Generation"
date: 2026-07-15
author:
  - "Ricky Zhengzhong You"
  - "Bo Tang"
  - "Haoran Liu"
  - "Baichuan Mo"
journal: "INFORMS Journal on Computing (submitted)"
summary: >-
  Column generation is central to many large-scale optimization algorithms,
  but unstable dual solutions can substantially slow its convergence. We
  introduce learned pairwise deep dual-optimal inequalities, a learning
  framework that predicts pairwise orderings between dual variables and
  incorporates their primal counterparts directly into the master problem.
tags:
  - "working paper"
  - "column generation"
  - "deep dual-optimal inequalities"
  - "dual stabilization"
  - "machine learning"
  - "vehicle routing"
listFigure: "/publication-figures/l-pddois-pipeline.png"
listFigureAlt: "Prediction and postprocessing pipeline for learned pairwise deep dual-optimal inequalities"
---

Submitted to *INFORMS Journal on Computing*.

- arXiv: [2607.13373](https://arxiv.org/abs/2607.13373)
- Preprint: [PDF](/papers/l-pddois-preprint.pdf)

Column generation (CG) is central to many large-scale optimization algorithms, including branch-price-and-cut methods for vehicle routing problems, but unstable dual solutions can substantially slow its convergence. Existing deep dual-optimal inequalities can reduce this instability by restricting the dual space. Their construction, however, typically relies on problem-specific exchange arguments that are difficult to establish for routing problems with capacity limits, time windows, and other resource constraints. We introduce learned pairwise deep dual-optimal inequalities (L-PDDOIs), a learning framework that predicts pairwise orderings between dual variables and incorporates their primal counterparts directly into the master problem. To construct training labels, the framework samples optimal dual solutions and selects pairwise order relations that hold simultaneously on a sufficiently large common subset of the samples. A classifier then assigns a score to each candidate relation. Because conflicts and redundancies among the predicted relations can impair performance, graph-based postprocessing filters and compresses the candidate set before deployment. We further introduce a recovery procedure that selectively relaxes learned inequalities and provides a certificate when the baseline CG bound has been restored. On the main test sets for the capacitated vehicle routing problem and the vehicle routing problem with time windows, direct deployment of L-PDDOIs reduces the geometric mean root CG time by 89.7% and 93.9%, respectively, while incurring mean bound losses of only 1.3% and 0.5%. The recovery procedure retains corresponding time reductions of 54.8% and 83.1%, respectively, while guaranteeing no loss in the CG bound.

<!--more-->
