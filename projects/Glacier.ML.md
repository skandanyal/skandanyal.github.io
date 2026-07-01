---
layout: project
title: Glacier.ML
permalink: /projects/Glacier.ML/
description: A performance-focused C++20 based Numerical Algorithms library, designed to build and experiment with machine learning algorithms while emphasizing efficiency on modern multi-core CPU architectures.
tech: [C++, OpenMP, OpenBLAS, Eigen]
github_url: https://github.com/skandanyal/Glacier.ML
date: 2026-06-25
---

Coming soon

<!-- ## Overview

Glacier.ML is a CPU-focused machine learning library designed from the ground up for consumer hardware. The primary objective is to study performance bottlenecks in modern deep learning training and inference on standard x86 and ARM processors, without relying on GPU acceleration.

<div class="admonition note">
  Glacier.ML is primarily an educational and research-oriented project, but it achieves near-native performance compared to reference PyTorch CPU builds for moderately sized workloads.
</div>

## Core Features

### Custom Autograd Engine

The autograd engine is built using a dynamic computational graph constructed on the fly during the forward pass. Every node in the graph represents a tensor and maintains pointers to its parent nodes, as well as the gradient accumulation functions.

### Matrix Multiplication Kernels

Matrix multiplication (GEMM) is the fundamental operator in neural networks. Glacier.ML utilizes a cache-oblivious matrix multiplication algorithm combined with block tiling and register blocking.

Here is a performance comparison of different GEMM implementations inside Glacier.ML:

| Implementation | Description | GFLOPS (Single Thread) | GFLOPS (Multi-Threaded) |
| :--- | :--- | :--- | :--- |
| Naive | 3 nested loops (i, j, k) | 1.2 | 1.2 |
| Tiled | Cache-friendly tile blocking | 8.5 | 32.1 |
| Vectorized | Tiled + AVX-512 SIMD | 45.2 | 168.4 |
| Eigen Fallback | Reference library | 48.1 | 185.0 |

## Architecture & Code

The following block shows the core tensor structure in Glacier.ML:

```cpp
template <typename T>
class Tensor {
private:
    std::shared_ptr<TensorData<T>> data_;
    std::vector<std::shared_ptr<Tensor<T>>> creators_;
    std::function<void()> backward_fn_;

public:
    Tensor(std::vector<size_t> shape);
    void backward();
    void zero_grad();
};
```

### Backpropagation Walkthrough

When `backward()` is called, we perform a topological sort on the computational graph to resolve dependency order:

1. Perform DFS traversal to order active nodes.
2. Accumulate gradients sequentially.
3. Apply optimizer updates to leaf nodes (weights and biases).

We compute weights updates using standard gradient descent:

$$ \mathbf{W}_{t+1} = \mathbf{W}_t - \eta \nabla_{\mathbf{W}} \mathcal{L} $$

## Future Work

* Integrating OpenMP loop schedules for sparse matrix kernels.
* Compiling to WebAssembly for browser-based client-side execution. -->
