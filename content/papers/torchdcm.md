---
title: "TorchDCM: A Unified PyTorch-Native Package for Discrete Choice Modeling"
date: 2026-08-04
author:
  - "Baichuan Mo"
  - "Zhengzhong Ricky You⁎"
  - "Xiqun Michael Chen"
  - "Ruimin Li"
journal: "INFORMS Journal on Computing (Under Review)"
submitted: true
summary: >-
  TorchDCM is a unified PyTorch-native package for discrete choice modeling.
  It supports estimation, inference, prediction, and structured reporting on
  CPU and CUDA devices across principal discrete choice model families.
tags:
  - "discrete choice modeling"
  - "PyTorch"
  - "econometrics"
  - "GPU computing"
  - "open source"
listFigure: "/publication-figures/torchdcm-logo.png"
listFigureAlt: "TorchDCM logo from the project GitHub README"
---

Under review at *INFORMS Journal on Computing*.

⁎ Corresponding author.

- arXiv: [2608.19231](https://arxiv.org/abs/2608.19231)
- Repository: [GitHub](https://github.com/mbc96325/torchdcm)

TorchDCM is a unified PyTorch-native package for discrete choice modeling. It compiles choice data and model specifications into a likelihood engine for estimation, inference, prediction, and structured reporting on CPU and CUDA devices. The package covers multinomial, nested, mixed, ordered, latent-variable, and panel likelihoods, together with constrained parameters, covariance estimation, willingness-to-pay analysis, elasticities, and extensible likelihood components. Aligned synthetic and real-data experiments compare TorchDCM with seven other estimation packages. TorchDCM completes all 45 synthetic cases, runs fastest in every comparable synthetic case, and meets the prespecified final-log-likelihood tolerance whenever at least two comparable solutions are available.

<!--more-->
