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

      <div class="d-flex justify-content-between align-items-center px-3 py-2">
        <span>
          <i class="fas fa-folder me-2"></i>
          {{ category.name }}
        </span>

        <span class="text-muted">
          {{ matching_posts.size }}
        </span>
      </div>

      {% unless forloop.last %}
        <hr class="my-1">
      {% endunless %}

    {% endfor %}

  </div>
</div>