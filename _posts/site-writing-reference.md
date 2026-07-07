---
layout: post
title: "Site Writing Reference"
date: 2026-07-07
tags: [reference, meta]
description: A complete reference for every formatting feature supported on this site — admonitions, LaTeX, code blocks, tables, and everything in between.
---

This post documents every formatting construct the site supports. Use it as a reference when writing new posts.

---

## Admonitions

Admonitions are written as raw HTML `<div>` blocks with the class `admonition` followed by a type class. The label is injected automatically by CSS.

<div class="admonition note">
This is a <strong>note</strong>. Use it for background context, definitions, or supplementary information that the reader should be aware of but that isn't critical to the main argument.
</div>

<div class="admonition tip">
This is a <strong>tip</strong>. Use it for best practices, useful shortcuts, or actionable advice that improves efficiency or correctness.
</div>

<div class="admonition warning">
This is a <strong>warning</strong>. Use it for subtle pitfalls, non-obvious gotchas, or behavior that can silently produce wrong results.
</div>

<div class="admonition danger">
This is a <strong>danger</strong> callout. Reserve it for things that will break the build, corrupt data, cause undefined behavior, or have irreversible consequences.
</div>

The HTML syntax is:

```html
<div class="admonition tip">
  Your message here.
</div>
```

---

## LaTeX

LaTeX is rendered client-side using **KaTeX**. Both inline and display (block) math are supported.

### Inline Math

Use single `$...$` delimiters for inline expressions. The kinetic energy is $E_k = \frac{1}{2}mv^2$ and the rest energy is $E_0 = mc^2$.

The gradient of a scalar field $f : \mathbb{R}^n \to \mathbb{R}$ is the vector $\nabla f = \left(\frac{\partial f}{\partial x_1}, \ldots, \frac{\partial f}{\partial x_n}\right)$.

### Display Math

Use `$$...$$` for block equations:

$$
\mathbf{W}_{t+1} = \mathbf{W}_t - \eta \nabla_{\mathbf{W}} \mathcal{L}(\mathbf{W}_t)
$$

The Roofline bound on attainable performance:

$$
P_{\text{attainable}} = \min\left(\pi,\; \beta \times I\right)
$$

Where $\pi$ is peak compute throughput (FLOPs/sec), $\beta$ is memory bandwidth (GB/s), and $I$ is arithmetic intensity (FLOPs/byte).

A more complex identity — the matrix determinant lemma:

$$
\det\!\left(A + UV^T\right) = \det\!\left(I + V^T A^{-1} U\right)\det(A)
$$

The softmax function over a vector $\mathbf{z} \in \mathbb{R}^K$:

$$
\sigma(\mathbf{z})_j = \frac{e^{z_j}}{\displaystyle\sum_{k=1}^{K} e^{z_k}}, \quad j = 1, \ldots, K
$$

---

## Code Blocks

Code blocks use **Rouge** syntax highlighting. Hover over a block to reveal the copy button.

### C++

```cpp
#include <immintrin.h>
#include <cstddef>

// AVX-512 dot product over two float arrays of length n (n must be multiple of 16)
float dot_avx512(const float* __restrict__ a, const float* __restrict__ b, std::size_t n) {
    __m512 acc = _mm512_setzero_ps();
    for (std::size_t i = 0; i < n; i += 16) {
        __m512 va = _mm512_loadu_ps(a + i);
        __m512 vb = _mm512_loadu_ps(b + i);
        acc = _mm512_fmadd_ps(va, vb, acc);  // fused multiply-add
    }
    return _mm512_reduce_add_ps(acc);
}
```

### Python

```python
import numpy as np

def roofline_bound(peak_flops: float, bandwidth: float, arith_intensity: float) -> float:
    """Return attainable performance (FLOPs/sec) given hardware parameters."""
    return min(peak_flops, bandwidth * arith_intensity)

# Example: AMD Ryzen 5 6600H
pi   = 614.4e9  # peak SP FLOPs/sec (AVX2 + FMA)
beta = 51.2e9   # measured DRAM bandwidth (GB/s)

for ai in [0.05, 0.5, 5.0, 50.0]:
    print(f"AI = {ai:5.2f} FLOPs/B  →  {roofline_bound(pi, beta, ai) / 1e9:.1f} GFLOPS")
```

### Bash / Shell

```bash
# Profile cache misses on a kernel using perf
perf stat -e cache-misses,cache-references,instructions,cycles \
    ./build/glacier_bench --kernel saxpy --size 1048576 --iter 100
```

### C

```c
/* Naive SAXPY: y[i] = a * x[i] + y[i] */
void saxpy(float a, const float *x, float *y, int n) {
    for (int i = 0; i < n; ++i)
        y[i] = a * x[i] + y[i];
}
```

---

## Tables

Tables are written in standard Markdown pipe syntax. Left-align columns with `:---`.

| Optimization Level | Applied | Speedup vs Naive |
| :--- | :--- | :--- |
| O0 | Baseline | 1.0× |
| O3 | Compiler auto-vectorization | 2.4× |
| O3 + OpenMP | Multi-threading (12 threads) | 8.8× |
| O3 + OpenMP + AVX-512 | Hand-written SIMD lanes | 18.2× |
| O3 + OpenMP + AVX-512 + Blocking | Full cache hierarchy optimization | 31.5× |

---

## Blockquotes

> For example, the STREAM Triad benchmark computes `A[i] = B[i] + scalar * C[i]` — it performs 2 FLOPs per iteration but transfers 24 bytes in double precision, yielding an arithmetic intensity of approximately 0.083 FLOPs/byte. This firmly classifies it as memory-bound.

Multi-paragraph blockquotes work too:

> The goal of performance modeling is not to predict the future.
>
> It is to build a falsifiable hypothesis about *why* a program runs at the speed it does — and then use that hypothesis to guide optimization.

---

## Text Formatting

Standard inline formatting:

- **Bold** with `**text**`
- *Italic* with `*text*`
- **_Bold italic_** with `**_text_**`
- `inline code` with backticks
- ~~Strikethrough~~ with `~~text~~`

Mixing inline code and math in prose: the function `backward()` computes $\nabla_{\mathbf{W}} \mathcal{L}$ by traversing the computational graph in reverse topological order.

---

## Lists

### Unordered

- Cache hierarchy: registers → L1 → L2 → L3 → DRAM
- Each level is ~10× slower and ~10–100× larger than the one above
- Compulsory misses are unavoidable; capacity and conflict misses are not

Nested:

- Optimization strategies
  - Loop transformations
    - Tiling / blocking
    - Loop interchange
    - Loop unrolling
  - Vectorization
    - Auto-vectorization (compiler)
    - Explicit SIMD intrinsics
  - Parallelism
    - OpenMP thread pools
    - SIMD-level parallelism

### Ordered

1. Measure baseline performance with `perf stat`
2. Identify the bottleneck (compute-bound or memory-bound) using the Roofline model
3. Apply the appropriate optimization strategy
4. Re-measure and verify the improvement is real
5. Repeat until the implementation is within 10% of the hardware ceiling

---

## Footnotes

Footnotes are written inline in kramdown using `[^label]` and defined at the bottom.[^1]

The arithmetic intensity ridge point[^2] is the single most important number when optimizing a kernel on a specific machine.

[^1]: Footnote definitions can go anywhere in the document but are rendered at the bottom by the browser.
[^2]: The ridge point is defined as $I_{\text{ridge}} = \pi / \beta$ — the arithmetic intensity at which the roofline transitions from memory-bound to compute-bound.

---

## Horizontal Rules

Use `---` on its own line to produce a horizontal divider. Useful for separating major sections within a post.

---

That covers everything the site renderer supports.
