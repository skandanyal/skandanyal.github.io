---
layout: default
title: Portfolio
---

<section id="about">
  <span class="section-label mono">01 // Identity</span>
  <h1>Skandan C Yalagach</h1>
  <p class="intro-text">
    Computer Science undergraduate focusing on <strong>performance-critical numerical kernels</strong> and <strong>systems-ML 
    engineering</strong>.
  </p>
  <div class="social-links mono">
    <a href="https://github.com/skandanyal">GitHub</a>
    <a href="https://linkedin.com/in/skandan-cy/">LinkedIn</a>
    <a href="mailto:skandanyalagach@gmail.com">Email</a>
  </div>
</section>

<section id="projects">
  <span class="section-label mono">02 // Technical Work</span>

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
  <span class="section-label mono">03 // From Math to Machines</span>
  <div class="blog-list">
    {% for post in site.posts limit:5 %}
    <a href="{{ post.url | relative_url }}" class="blog-item">
      <span class="blog-date">{{ post.date | date: "%Y . %m . %d" }}</span>
      <div class="blog-details">
        <h3>{{ post.title }}</h3>
        <div class="blog-meta">
          <span>{{ post.reading_time }}</span>
          {% if post.tags %}
          <span>·</span>
          <div class="blog-tags">
            {% for tag in post.tags %}
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


