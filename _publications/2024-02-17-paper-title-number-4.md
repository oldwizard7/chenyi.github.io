---
title: "TOAST: Multi-Agent Collaborative System for Symbolic Regression"
collection: publications
category: conferences
permalink: /publication/toast-symbolic-regression/
excerpt: "Submitted to ACL ARR (January 2026)."
date: 2026-01-05
venue: "ACL ARR (January 2026)"
pubstate: "submitted"
paperurl: ""   # /files/TOAST.pdf  or OpenReview PDF link
---

This paper studies the problem of symbolic regression, which aims to recover an explicit equation directly from data. Current approaches typically rely on genetic programming or task-specific trained models, which often face a huge search space and can be fragile under noise attack, resulting in limited regression accuracy. Towards this end, we propose a novel framework named Tool-attended Multi-Agent Collaborative System (TOAST) for Symbolic Regression. The core idea of our TOAST is to integrate tool use into a systemic collaboration framework with specialized agents driven by large language models (LLMs). In particular, we first utilize a data portrait to summarize key numeric patterns and flag possible domain risks using basic numeric tools, while retrieving information from a prior library. Next, a structure generator iteratively proposes candidate equation forms guided by these hints, and a parameter fitter uses an external optimization tool to estimate coefficients. To ensure stable optimization, a feedback consultant reviews evaluation results and updates the priors and search strategy, forming an iterative ``generate, fit, check, revise'' loop. Extensive experiments on benchmark datasets validate the effectiveness of the proposed TOAST in compared with competing baselines.



