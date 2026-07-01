---
layout: post
title: Roofline Analysis for Evaluating Computational Kernels
date: 2026-06-30 12:00:00 +0530
tags: [HPC, Performance, Optimization]
description: Introducing the Roofline performance model, calculating arithmetic intensity, and diagnosing compute-bound vs memory-bound bottlenecks in scientific computing.
---

## Introduction

Evaluating the performance of high-performance computing (HPC) kernels requires more than just counting runtime seconds. To know whether a kernel is running at its absolute limit, we must analyze it against the hardware's physical capabilities. This is where the **Roofline Model** becomes invaluable.

The Roofline Model provides a simple, visual representation of a system's peak performance boundaries as a function of the kernel's arithmetic intensity.

## Mathematical Formulation

The achieved performance $P$ of a kernel is mathematically bounded by the hardware's peak performance ($\pi$) and its memory bandwidth ($\beta$) multiplied by the kernel's arithmetic intensity ($I$):

$$ P \le \min \left( \pi, \beta \times I \right) $$

Let's break down these variables:
* **Performance ($P$)**: Measured in GFLOPS (Giga-FLOPs per second).
* **Peak Performance ($\pi$)**: The maximum floating-point operations the hardware can execute per second.
* **Memory Bandwidth ($\beta$)**: The maximum rate at which data can be loaded from or stored to main memory (GB/sec).
* **Arithmetic Intensity ($I$)**: The ratio of floating-point operations to memory bytes transferred:

$$ I = \frac{\text{Total Floating-Point Operations}}{\text{Total DRAM Bytes Transferred}} $$

## Compute-Bound vs. Memory-Bound

Based on where a kernel lies relative to the "ridge point" of the roofline curve, it falls into one of two categories:

### Memory-Bound Kernels

If $I < \frac{\pi}{\beta}$, performance is constrained by how fast data can be fetched from memory. Examples include:
* Vector addition ($y = a \cdot x + y$)
* Sparse matrix-vector multiplication (SpMV)

For these kernels, optimizing computational operations will yield minimal speedups. Instead, focus on reducing memory traffic through loop tiling, cache blocking, or changing precision (e.g., FP32 to FP16).

### Compute-Bound Kernels

If $I > \frac{\pi}{\beta}$, performance is limited by the CPU's vector execution units. Examples include:
* Matrix-Matrix Multiplication (GEMM)
* High-order stencil calculations

To speed up compute-bound kernels, you must focus on improving instruction throughput, loop unrolling, avoiding pipeline stalls, and using SIMD/FMA vector instructions.

## A Practical Example: Vector Scale

Let's calculate the Arithmetic Intensity of a vector scale operation:

```cpp
void scale(float* A, float factor, int N) {
    for (int i = 0; i < N; ++i) {
        A[i] = factor * A[i];
    }
}
```

For each loop iteration:
1. **Flops**: 1 multiplication.
2. **Bytes Transferred**: 1 read (4 bytes) and 1 write (4 bytes) to DRAM, totaling 8 bytes.

Thus, the arithmetic intensity is:

$$ I = \frac{1 \text{ FLOP}}{8 \text{ bytes}} = 0.125 \text{ FLOPs/byte} $$

If our hardware has a peak performance $\pi = 128 \text{ GFLOPS}$ and a memory bandwidth $\beta = 32 \text{ GB/s}$, the ridge point is:

$$ \frac{128}{32} = 4.0 \text{ FLOPs/byte} $$

Since $0.125 \ll 4.0$, this vector scale kernel is heavily **memory-bound**. The maximum performance we can hope to achieve is:

$$ P \le 32 \text{ GB/s} \times 0.125 \text{ FLOPs/byte} = 4.0 \text{ GFLOPS} $$

This is a mere $3.1\%$ of the processor's peak capacity. This analysis saves developer time by indicating that restructuring the arithmetic pipeline will not yield benefits; only caching optimizations or merging operations (fusing loops) will help.

## Summary

The Roofline Model provides a diagnostic map for performance tuning. By calculating your kernel's arithmetic intensity, you can immediately identify whether your bottlenecks are computational or bandwidth-related, steering your optimization efforts in the correct direction.
