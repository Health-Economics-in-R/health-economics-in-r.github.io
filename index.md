---
layout: home
---

<div class="jumbotron">
  <h1 class="display-4">{{ site.title }} <span markdown="1">
                                         ![image-title-here](/assets/images/logo_transparent.jpg){:height="100px" width="100px"}
                                         </span></h1>
  <p class="lead">{{ site.description }}</p>
</div>

## Aim

* Provide easy to use tools for standard health economics methods
* Enhance current tools functionality
* Speed-up analysis time
* Reduce errors
* Improve reproducability

<h2>Latest news</h2>
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
