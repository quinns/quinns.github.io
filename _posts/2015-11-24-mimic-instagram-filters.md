---
layout: post
title: Mimic Instagram's filters using only CSS
category: CSS
tags: sweet
custom_css:
- cssgram.min
- lenna
---

[A tiny library](http://una.im/CSSgram/){:target="_blank"} for recreating Instagram filters with CSS filters and blend modes.

<div class="lenna container">
	<div class="row ">
		{% assign filters = "no filter, aden, reyes, perpetua, inkwell, earlybird, toaster, walden, hudson, gingham, mayfair, lofi, xpro2, _1977, brooklyn, nashville, lark, moon" | split: ", " %}
		{% for item in filters %}
		 		<div class="thumbnail col-xs-4 col-sm-3 col-md-2">
		 			<img src="/img/lenna.jpg" class="{{ item | replace:'no filter','' }}">
		 			<div class="caption small">
		 				{{ item | replace:'_','' }}
		 			</div>
		 		</div>	
		{% endfor %}	
	</div>
</div>

By the way, the image is "[Lenna](https://en.wikipedia.org/wiki/Lenna){:target="_blank"}", a standard test in image processing work since 1973, and an [interesting story](https://www.cs.cmu.edu/~chuck/lennapg/){:target="_blank"} in its own right.