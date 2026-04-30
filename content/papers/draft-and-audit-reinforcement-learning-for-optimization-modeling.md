---
title: "Draft-and-Audit Reinforcement Learning for Optimization Modeling"
date: 2026-04-30T12:17:00-04:00
author:
  - "Zeping Min"
  - "Weihang Xu"
  - "Ricky Zhengzhong You"
  - "Wotao Yin"
  - "Xinshang Wang"
journal: "ICML 2026"
summary: >-
  Natural language to optimization requires translating unstructured text into
  executable mathematical models. Beyond simple syntax errors, this task suffers
  from silent modeling failures, where incorrect formulations execute
  successfully but yield invalid results. We propose Draft-and-Audit RL
  (DA-RL), a framework that learns optimization modeling as a two-step iterative
  workflow.
tags:
  - "reinforcement learning"
  - "optimization modeling"
  - "large language models"
  - "ICML"
listFigure: "/publication-figures/draft-and-audit-pipeline.png"
listFigureAlt: "Draft-and-Audit RL pipeline overview"
---

Accepted as a regular paper at *ICML 2026*.

- OpenReview: [forum](https://openreview.net/forum?id=3rzJANFrMp)
- OpenReview PDF: [paper](https://openreview.net/pdf?id=3rzJANFrMp)

Natural language to optimization requires translating unstructured text into executable mathematical models. Beyond simple syntax errors, this task suffers from silent modeling failures, where incorrect formulations execute successfully but yield invalid results. We propose Draft-and-Audit RL (DA-RL), a framework that learns optimization modeling as a two-step iterative workflow. Unlike inference-time scaffolds that rely on intermediate solver feedback to guide repairs, DA-RL optimizes a shared-parameter policy using terminal-only verification: the model is rewarded solely based on the execution of the final audited program. This constraint forces the model to internalize rubric-guided revision as a learned capability and encourages the emergence of cross-turn synergy, where the policy learns to generate drafts that are structurally amenable to self-correction.

<!--more-->
