---
layout: default
title: Archive
---

# Technical Log

{% for post in site.posts %}
- **{{ post.date | date: "%Y-%m-%d" }}**  
  [{{ post.title }}]({{ post.url | relative_url }})  
  {{ post.excerpt | strip_html | truncatewords: 15 }}
{% endfor %}

