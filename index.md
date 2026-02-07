
---
layout: default
title: Portfolio
---

<section id="about">
  <span class="section-label mono">01 // Identity</span>
  <h1>Skandan C Yalagach</h1>
  <p class="text-lg" style="font-size: 1.25rem; line-height: 1.5; color: #111; max-width: 90%;">
    Computer Science undergraduate, actively working on <strong>Performance-critical Numerical Kernels</strong> and <strong>Systems-ML 
    engineering projects</strong>.
  </p>
  <div class="mono" style="display: flex; gap: 2rem; margin-top: var(--space-md);">
    <a href="https://github.com/skandanyal" style="color: black; text-decoration: none; border-bottom: 1px solid black;">Github</a>
    <a href="https://linkedin.com/skandan-c-y" style="color: black; text-decoration: none; border-bottom: 1px solid black;">LinkedIn</a>
    <a href="mailto:skandanyalagach@gmail.com" style="color: black; text-decoration: none; border-bottom: 1px solid black;">Email</a>
  </div>
</section>

<section id="projects">
  <span class="section-label mono">02 // Selected Technical Work</span>

  <div class="project-list">
    {% for project in site.data.projects %}
    <article class="project-item">

      <header class="project-header">
        <h3 class="project-title">{{ project.title }}</h3>

        <div class="project-tags">
          {% for tag in project.tags %}
          <span class="tag mono">{{ tag }}</span>
          {% endfor %}
        </div>
      </header>

      <p class="project-description">
        {{ project.description }}
      </p>

      <a href="{{ project.github }}" class="btn mono">
        View Source →
      </a>

    </article>
    {% endfor %}
  </div>
</section>
                                                          

<section id="blogs">
  <span class="section-label mono">03 // Technical Blogs</span>
  <div class="blog-list">
    {% for post in site.posts limit:5 %}
    <a href="{{ post.url | relative_url }}" class="blog-item">
      <span class="blog-date">{{ post.date | date: "%Y . %m . %d" }}</span>
      <h3>{{ post.title }}</h3>
    </a>
    {% endfor %}
  </div>
  <a href="{{ '/archive/' | relative_url }}" class="btn" style="margin-top: var(--space-md);">Archive // All Posts</a>
</section>

