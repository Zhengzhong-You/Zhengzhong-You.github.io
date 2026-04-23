+++
title = "RouteOpt: An Open-Source Modular Exact Solver for Vehicle Routing Problems"
date = 2026-04-04
author = ["Ricky Zhengzhong You", "Yu Yang"]
journal = "INFORMS Journal on Computing"
summary = "Despite significant advancements in exact methods for vehicle routing problems (VRPs) over the past three decades, there remains a lack of high-performing and accessible open-source solvers for researchers and practitioners. To bridge this gap, we introduce RouteOpt, the first open-source modular exact solver for VRPs, delivering state-of-the-art performance while maintaining a flexible and extensible structure. RouteOpt achieves the best performance reported in the literature on both the capacitated vehicle routing problem (CVRP) and vehicle routing problem with time windows (VRPTW)."
tags = ["vehicle routing", "open-source exact solver", "modular design"]
listFigure = "/publication-figures/routeopt-classdiagram.png"
listFigureAlt = "Simplified RouteOpt class diagram"
+++

Article accepted by *INFORMS Journal on Computing*.

- DOI: [10.1287/ijoc.2025.1415](https://pubsonline.informs.org/doi/10.1287/ijoc.2025.1415)
- Preprint: [PDF](/papers/routeopt_preprint.pdf)
- Repository: [GitHub](https://github.com/Zhengzhong-You/RouteOpt)
- Documentation: [RouteOpt Docs](https://zhengzhong-you.github.io/RouteOpt-Docs/)
- Replication archive: [INFORMSJoC/2025.1415](https://github.com/INFORMSJoC/2025.1415)

Despite significant advancements in exact methods for vehicle routing problems (VRPs) over the past three decades, there remains a lack of high-performing and accessible open-source solvers for researchers and practitioners. To bridge this gap, we introduce RouteOpt, the first open-source modular exact solver for VRPs, delivering state-of-the-art performance while maintaining a flexible and extensible structure. RouteOpt achieves the best performance reported in the literature on both the capacitated vehicle routing problem (CVRP) and vehicle routing problem with time windows (VRPTW). Crucially, its modular design allows users to develop and integrate customized branching, cutting plane, and variable reduction modules to tackle a broad range of VRP variants. Furthermore, RouteOpt introduces a novel node restoration mechanism, enabling efficient parallel processing of a branch-and-bound tree. Leveraging this feature, we have, for the first time, proven the optimality of three open CVRP instances. By combining modularity, efficiency, and open accessibility, RouteOpt establishes itself as an invaluable platform for both academic research and real-world applications.

<!--more-->
