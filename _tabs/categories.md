---
layout: page
title: Categories
icon: fas fa-stream
order: 1
permalink: /categories/
---

{% assign blog_categories = site.data.blog_categories %}

<div class="categories">
  {% for category in blog_categories %}
    <div class="card mb-3">
      <div class="card-body">
        <h3 class="card-title mb-2">
          {{ category.name }}
        </h3>

        {% assign matching_posts = "" | split: "," %}
        {% for post in site.posts %}
          {% if post.categories contains category.name %}
            {% assign matching_posts = matching_posts | push: post %}
          {% endif %}
        {% endfor %}

        <p class="card-text text-muted mb-0">
          {{ matching_posts.size }}
          {% if matching_posts.size == 1 %}post{% else %}posts{% endif %}
        </p>

        {% if matching_posts.size > 0 %}
          <ul class="mt-3">
            {% for post in matching_posts %}
              <li>
                <a href="{{ post.url | relative_url }}">
                  {{ post.title }}
                </a>
              </li>
            {% endfor %}
          </ul>
        {% endif %}
      </div>
    </div>
  {% endfor %}
</div>