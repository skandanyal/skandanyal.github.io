---
layout: default
title: Notes
permalink: /notes/
---

<article class="post-container" style="max-width: 800px; margin: var(--space-lg) auto;">
  <!-- <span class="section-label mono">Observation Index</span> -->
  <h1 class="post-title">Notes</h1>
  
  <p class="intro-text" style="color: var(--text-muted); font-size: 1rem; margin-bottom: var(--space-md);">
    A collection of short observations, micro-benchmarks, implementation experiments, and hardware discoveries. These are intentionally informal and focused.
  </p>

  <div class="notes-list">
    {% assign sorted_notes = site.notes | sort: 'date' | reverse %}
    {% for note in sorted_notes %}
    <article class="note-item">
      <header class="note-meta">
        <span>{{ note.date | date: "%Y-%m-%d" }}</span>
        <span>·</span>
        <span>{{ note.category }}</span>
      </header>
      <h3 style="margin-top: 0; margin-bottom: var(--space-xs); font-size: 1.15rem;">
        <a href="{{ note.url | relative_url }}" style="color: var(--text); text-decoration: none; transition: color 0.15s ease;">
          {{ note.title }}
        </a>
      </h3>
      <div class="note-content">
        {{ note.content | strip_html | truncatewords: 40 }}
      </div>
    </article>
    {% endfor %}
  </div>
</article>
