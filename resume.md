---
layout: default
title: Resume
permalink: /resume/
---

<article class="post-container" style="max-width: 800px; margin: var(--space-lg) auto;">
  <div class="resume-meta">
    <div>
      <span class="section-label mono">Engineering Specs</span>
      <h1 class="post-title" style="margin-bottom: 4px;">Skandan C Yalagach</h1>
      <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 0;">skandanyalagach@gmail.com · Bengaluru, India</p>
    </div>
    <a href="{{ '/assets/resume.pdf' | relative_url }}" class="btn" style="margin-top: 0;">Download PDF Resume</a>
  </div>

  <div class="prose">
    <section class="resume-section">
      <div class="resume-section-title">Education</div>
      
      <div class="resume-item">
        <div class="resume-header">
          <span class="resume-item-title">Undergraduate in Computer Science & Engineering</span>
          <span class="resume-date">2022 — Present</span>
        </div>
        <div class="resume-item-subtitle">Focus: Parallel Computing, Numerical Methods, Systems-ML</div>
      </div>
    </section>

    <section class="resume-section">
      <div class="resume-section-title">Technical Expertise</div>
      
      <div class="resume-item">
        <p>
          <strong>Languages:</strong> C++20, CUDA, C, Python, x86 Assembly (AVX2), SQL.
        </p>
        <p>
          <strong>Systems & Tooling:</strong> Linux, OpenMP, OpenBLAS, Eigen, Git, perf, NVIDIA Nsight, GDB.
        </p>
        <p>
          <strong>Core Knowledge:</strong> Micro-architectural optimization, Roofline modeling, Cache hierarchies, GPU thread execution blocks.
        </p>
      </div>
    </section>

    <section class="resume-section">
      <div class="resume-section-title">Projects</div>

      <div class="resume-item">
        <div class="resume-header">
          <span class="resume-item-title">Glacier.ML (C++20 Header-Only ML Library)</span>
          <a href="https://github.com/skandanyal/Glacier.ML" style="font-family: var(--font-mono); font-size: 0.75rem;">Source Code</a>
        </div>
        <ul class="resume-details">
          <li>Implemented stable vector-mapped SGD solvers for Multiple Linear and Logistic regression.</li>
          <li>Refactored data representation from nested vectors to contiguous 1D float arrays, minimizing pointer chasing and reducing cache misses.</li>
          <li>Enforced compiler auto-vectorization (SIMD) on arithmetic reduction operations.</li>
        </ul>
      </div>

      <div class="resume-item">
        <div class="resume-header">
          <span class="resume-item-title">Glacier.HPC (Micro-Benchmarking sandbox)</span>
          <a href="https://github.com/skandanyal/Glacier.HPC" style="font-family: var(--font-mono); font-size: 0.75rem;">Source Code</a>
        </div>
        <ul class="resume-details">
          <li>Executed empirical Roofline scaling models mapping GFLOPs/sec against Arithmetic Intensity for distance kernels.</li>
          <li>Measured hardware performance counters using the `perf` profiler under Linux to trace cache locality bottlenecks.</li>
          <li>Optimized L2 Euclidean distance loops using explicit loop unrolling and AVX2 intrinsics.</li>
        </ul>
      </div>
    </section>

    <section class="resume-section">
      <div class="resume-section-title">Interests</div>
      <div class="resume-item">
        <p style="margin-bottom: 0;">
          Compiler code generation, cache-friendly algorithms, GPGPU shared memory scaling, distributed training topologies (InfiniBand & Ring All-Reduce dynamics).
        </p>
      </div>
    </section>
  </div>
</article>
