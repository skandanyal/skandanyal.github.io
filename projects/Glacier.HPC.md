---
layout: project
title: Glacier.HPC
permalink: /projects/Glacier.HPC/
description: Profiling, benchmarking and analysis of numerical kernels derived from common supervised machine learning algorithms on consumer grade computing hardware.
tech: [C, OpenMP, perf]
github_url: https://github.com/skandanyal/Glacier.HPC
date: 2026-06-20
---

Coming soon...

<!-- ## Overview

Glacier.HPC is a collection of high-performance computing kernels written for scientific and numerical analysis. It serves as a testing ground for hardware-level optimizations, cache blocking, loop transformations, and architecture-specific vectorization.

<div class="admonition tip">
  Compile with GCC 11+ or Clang 13+ to ensure support for modern AVX-512 compiler intrinsics and auto-vectorization pathways.
</div>

## Optimization Strategies

### Vectorization with AVX-512

To maximize compute density on supported Intel and AMD processors, we employ explicit SIMD vectorization using AVX-512 intrinsics.

### Cache Blocking

We restructure memory accesses to fit inside L1 and L2 caches, drastically reducing latency compared to main memory accesses.

Here is the speedup progression for a 3D stencil computation:

| Optimization Level | Optimizations Applied | Speedup (vs Naive) |
| :--- | :--- | :--- |
| O0 | None (baseline compiler) | 1.0x |
| O3 | Compiler auto-vectorization | 2.4x |
| O3 + OpenMP | Multithreading | 8.8x |
| O3 + OpenMP + AVX-512 | Hand-written vector lanes | 18.2x |
| O3 + OpenMP + AVX-512 + Cache Blocking | Full hierarchy optimizations | 31.5x |

## Code Architecture

Below is a snippet demonstrating our AVX-512 stencil kernel:

```cpp
#include <immintrin.h>

void stencil_kernel_avx512(const float* __restrict__ in, float* __restrict__ out, int N) {
    #pragma omp parallel for collapse(2)
    for (int z = 1; z < N - 1; ++z) {
        for (int y = 1; y < N - 1; ++y) {
            int base = z * N * N + y * N;
            for (int x = 1; x < N - 1; x += 16) {
                __m512 current = _mm512_loadu_ps(&in[base + x]);
                __m512 north   = _mm512_loadu_ps(&in[base + x - N]);
                __m512 south   = _mm512_loadu_ps(&in[base + x + N]);
                __m512 up      = _mm512_loadu_ps(&in[base + x + N * N]);
                __m512 down    = _mm512_loadu_ps(&in[base + x - N * N]);

                __m512 sum = _mm512_add_ps(north, south);
                sum = _mm512_add_ps(sum, up);
                sum = _mm512_add_ps(sum, down);
                sum = _mm512_mul_ps(sum, _mm512_set1_ps(0.25f));

                _mm512_storeu_ps(&out[base + x], sum);
            }
        }
    }
}
```

## Roofline Model Evaluation

To evaluate the operational efficiency of our kernel, we map the performance to the Roofline model:

$$ P = \min \left( \pi, \beta \times I \right) $$

Where:
* $P$ is the achieved performance in GFLOPS.
* $\pi$ is the peak hardware performance (GFLOPS).
* $\beta$ is the memory bandwidth (GB/s).
* $I$ is the arithmetic intensity (FLOPs/byte).

For our cache-blocked implementation, we achieve an arithmetic intensity of $1.5$ FLOPs/byte, placing it near the knee of the Roofline curve on Intel Xeon platforms. -->
