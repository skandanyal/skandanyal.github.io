---
layout: note
title: "GEMM Vectorization Compiler Flag Profile"
date: 2026-06-25
category: "Code Generation"
---

When compiling loop-heavy matrix operations using GCC 12, there is a distinct divergence between `-O3` and `-O3 -ffast-math`. 

By default, GCC adheres strictly to IEEE 754 floating-point reassociation constraints. Since floating-point addition is non-associative:

$$(a + b) + c \neq a + (b + c)$$

the compiler cannot reorder additions to execute parallel SIMD reductions. Introducing `-ffast-math` permits reassociation, letting the compiler generate `vfmadd231ps` instructions. This reduced outer-loop overhead by $22\%$ in our local tests.
