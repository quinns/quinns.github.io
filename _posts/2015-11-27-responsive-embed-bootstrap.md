---
layout: post
title: Responsive Youtube embeds with Bootstrap
category: CSS
tags: Bootstrap
---

[Here's a really easy way](http://getbootstrap.com/components/#responsive-embed) to get responsive (flexible) iFrame embeds with Bootstrap 3. Perfect for your Youtube and Vimeo embeds. Included classes are `embed-responsive-4by3` and `embed-responsive-16by9`. <!--more--> 

{% highlight html %}
<div class="embed-responsive embed-responsive-16by9">
    <iframe class="embed-responsive-item" src="//www.youtube.com/embed/TcWPiHjIExA" allowfullscreen></iframe>
</div>
{% endhighlight %}

### Demo

<div class="embed-responsive embed-responsive-16by9">
    <iframe class="embed-responsive-item" src="//www.youtube.com/embed/TcWPiHjIExA" allowfullscreen></iframe>
</div>
