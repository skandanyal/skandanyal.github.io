---
layout: note
title: "Warp Divergence in GPU Reductions"
date: 2026-06-26
category: "CUDA GPGPU"
---

In CUDA reduction algorithms, naive stride loops suffer from massive warp divergence.

```cpp
// Bad pattern causing warp divergence
if (tid % (2 * s) == 0) {
    sdata[tid] += sdata[tid + s];
}
```

Because threads in a warp ($32$ consecutive threads) execute different branches of the `if` condition, the warp must serialize execution paths. 

Replacing this with a contiguous index address pattern preserves SIMD execution parity:

```cpp
// Optimized: contiguous threads are active
int index = 2 * s * tid;
if (index < blockDim.x) {
    sdata[index] += sdata[index + s];
}
```

This simple contiguous change resulted in a $2.4\times$ throughput scaling on a Pascal-generation GPU.
