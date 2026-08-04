---
title: "Bulk Service Queueing for Transit Resilience under Short Random Service Suspensions"
date: 2026-07-21
author:
  - "Baichuan Mo"
  - "Li Jin"
  - "Zhengzhong Ricky You"
  - "Zuo-Jun Max Shen"
  - "Haris N. Koutsopoulos"
  - "Jinhua Zhao"
journal: "Transportation Science (submitted)"
submitted: true
summary: >-
  Short service suspensions are common in public transit systems, but their
  operational impacts remain difficult to quantify. We develop an analytical
  framework for measuring the resilience of a transit line under short random
  service suspensions. Vehicle movement is represented by a two state process
  in which vehicles either travel normally or stop during a suspension, and
  the induced stochastic headways enter a bulk service queueing model with
  finite vehicle capacity and passenger carryover.
tags:
  - "public transit resilience"
  - "service suspension"
  - "headway variability"
  - "bulk service queueing"
  - "stability"
listFigure: "/publication-figures/transit-resilience-single-route.png"
listFigureAlt: "Single transit route with a transportation hub, boarding and alighting passengers, and vehicles serving successive stations"
---

Under review at *Transportation Science*.

- arXiv: [2301.00918](https://arxiv.org/abs/2301.00918)
- Preprint: [PDF](/papers/bulk-service-queueing-transit-resilience-preprint.pdf)

Short service suspensions are common in public transit systems, but their operational impacts remain difficult to quantify. We develop an analytical framework for measuring the resilience of a transit line under short random service suspensions. Vehicle movement is represented by a two state process in which vehicles either travel normally or stop during a suspension, and the induced stochastic headways enter a bulk service queueing model with finite vehicle capacity and passenger carryover. The model yields two classes of resilience indicators. Stability conditions determine whether station queues remain bounded, while closed form expressions characterize the mean and variance of station level queue length and waiting time. We construct an independent renewal approximation for headways whose common marginal distribution is obtained by taking the positive part of a raw headway formed from the incident adjusted scheduled headway and the difference between two independent compound Poisson exponential variables. The renewal approximation preserves the marginal effects of short suspensions while omitting serial dependence and delay propagation across multiple vehicles. Combining the resulting passenger arrival distribution with a Markov representation of passenger loads across stations allows the resilience indicators to be computed sequentially along the route. The stability condition identifies how incident frequency, incident duration, passenger demand, scheduled headway, vehicle capacity, and downstream available capacity jointly determine whether a station becomes unstable. Numerical experiments show that short suspensions disproportionately affect congested stations and that changes in incident duration and scheduled headway can dominate comparable changes in vehicle capacity. A recursive first in, first out simulation assesses the analytical approximations and clarifies the role of headway variability. The framework provides a tractable way to assess capacity, scheduled headway, and incident mitigation decisions for improving the resilience of transit lines exposed to frequent short disruptions.

<!--more-->
