---
layout: page
title: Categories
icon: fas fa-stream
order: 1
permalink: /categories/
---

{% assign blog_categories = site.data.blog_categories %}

<div class="card">
  <div class="card-body p-2">

    {% for category in blog_categories %}

      {% assign matching_posts = "" | split: "," %}
      {% for post in site.posts %}
        {% if post.categories contains category.name %}
          {% assign matching_posts = matching_posts | push: post %}
        {% endif %}
      {% endfor %}

      <a href="{{ '/category/' | append: category.slug | append: '/' | relative_url }}"
         class="d-flex justify-content-between align-items-center px-3 py-3 text-decoration-none">

        <span>
          <i class="fas fa-folder me-2"></i>
          {{ category.name }}
        </span>

        <span class="text-muted">
          {{ matching_posts.size }}
          <i class="fas fa-chevron-right ms-2"></i>
        </span>

      </a>

      {% unless forloop.last %}
        <hr class="my-1">
      {% endunless %}

    {% endfor %}

  </div>
</div>