---
layout: page
title: About
permalink: /about/
---

This is a test<br>

{%- assign latest_post = site.posts[0] -%}
Latest post: <a href="{{ latest_post.url }}">{{ latest_post.title }}</a>
<h1>Latest Posts</h1>

<ul>
  {% for post in site.posts %}
    <li>
      <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>