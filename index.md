---
layout: default
title: Portfolio
---

<div class="hero">
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <h1 class="hero-name">Skandan C Yalagach</h1>
    <p class="hero-desc">
      Computer Science undergraduate focusing on Performance-critical numerical kernels and Systems-ML engineering.
    </p>
    <div class="hero-links">
      <a href="https://github.com/skandanyal">GitHub</a>
      <a href="https://linkedin.com/in/skandan-cy/">LinkedIn</a>
      <a href="mailto:skandanyalagach@gmail.com">Email</a>
    </div>
  </div>
</div>

<div class="container">
  {% include header.html %}

  <main>
    <section id="about">
      <span class="section-label mono">01 // About</span>
      <p class="intro-text">
        My work focuses on mapping mathematical theory onto consumer hardware constraints. I measure where algorithms hit memory bandwidth or cache limits, then restructure them for the architecture rather than the textbook.
      </p>
      <!-- <p>
        Currently, I am designing and benchmarking supervised machine learning algorithms at the CPU stage. I am interested in cache-friendly matrix algorithms, SIMD auto-vectorization, thread scheduling overheads, and GPU-driven mini-batch execution profiles.
      </p> -->
    </section>

    <section id="projects">
      <span class="section-label mono">02 // Featured Projects</span>
      <div class="project-list">
        <article class="project-item">
          <header class="project-header">
            <h3 class="project-title">Glacier.ML</h3>
            <!-- <span class="project-status">Active</span> -->
          </header>
          <p class="project-description">
            A header-only C++20 numerical algorithms library designed for implementing machine learning algorithms from first principles with direct hardware control.
          </p>
          <div class="project-tags" style="margin-bottom: var(--space-xs);">
            <span class="tag">C++20</span>
            <span class="tag">Eigen</span>
            <span class="tag">OpenBLAS</span>
            <span class="tag">Linear Algebra</span>
          </div>
          <div style="display: flex; gap: var(--space-sm);">
            <a href="https://github.com/skandanyal/Glacier.ML" class="btn">GitHub</a>
            <a href="{{ '/projects/glacier-ml/' | relative_url }}" class="btn">Documentation</a>
          </div>
        </article>

        <article class="project-item">
          <header class="project-header">
            <h3 class="project-title">Glacier.HPC</h3>
            <!-- <span class="project-status">Active</span> -->
          </header>
          <p class="project-description">
            Micro-benchmarking, profiling, and Roofline analysis of core numerical kernels (such as GEMM and distance calculations) on consumer CPU and GPU architectures.
          </p>
          <div class="project-tags" style="margin-bottom: var(--space-xs);">
            <span class="tag">C++20</span>
            <span class="tag">CUDA</span>
            <span class="tag">OpenMP</span>
            <span class="tag">perf</span>
            <span class="tag">Roofline Modeling</span>
          </div>
          <div style="display: flex; gap: var(--space-sm);">
            <a href="https://github.com/skandanyal/Glacier.HPC" class="btn">GitHub</a>
            <a href="{{ '/projects/glacier-hpc/' | relative_url }}" class="btn">Documentation</a>
          </div>
        </article>
      </div>
    </section>

    <section id="blogs">
      <span class="section-label mono">03 // Writing</span>
      <div class="blog-list">
        {% for post in site.posts limit:5 %}
        <a href="{{ post.url | relative_url }}" class="blog-item">
          <span class="blog-date">{{ post.date | date: "%Y.%m.%d" }}</span>
          <div class="blog-details">
            <h3>{{ post.title }}</h3>
            <div class="blog-meta">
              <span>{{ post.reading_time }}</span>
              {% if post.tags %}
              <span>·</span>
              <div class="blog-tags">
                {% for tag in post.tags limit:3 %}
                <span class="tag">{{ tag }}</span>
                {% endfor %}
              </div>
              {% endif %}
            </div>
          </div>
        </a>
        {% endfor %}
      </div>
      <a href="{{ '/from_math_to_machines/' | relative_url }}" class="btn archive-btn">Archive // All Posts</a>
    </section>
  </main>

  {% include footer.html %}
</div>
