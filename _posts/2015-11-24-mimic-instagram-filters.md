---
layout: post
title: Mimic Instagram's filters using only CSS
category: CSS
tags: sweet
custom_css:
- cssgram.min
- lenna
custom_js:
- bootstrap.min
---

[A tiny library](http://una.im/CSSgram/){:target="_blank"} for recreating Instagram filters with CSS filters and blend modes.

<div class="lenna container">
	<div class="row ">
		{% assign filters = "no filter, aden, reyes, perpetua, inkwell, earlybird, toaster, walden, hudson, gingham, mayfair, lofi, xpro2, _1977, brooklyn, nashville, lark, moon" | split: ", " %}
		{% for item in filters %}
		 		<div class="thumbnail col-xs-4 col-sm-3 col-md-2">
		 			<a data-toggle="modal" data-target="#modal-{{ item | replace:'no filter','' }}"><img src="/img/lenna.jpg" class="{{ item | replace:'no filter','' }}"></a>
		 			<div class="caption small">
		 				{{ item | replace:'_','' }}
		 			</div>
		 		</div>
				<div class="modal fade" id="modal-{{ item | replace:'no filter','' }}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
				  <div class="modal-dialog modal-lg" role="document">
				    <div class="modal-content">
				      <div class="modal-header">
				        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				        <h4 class="modal-title" id="myModalLabel">{{ item | replace:'_','' }}</h4>
				      </div>
				      <div class="modal-body">
							<div class="lenna {{ item | replace:'no filter','' }}"></div>
				      </div>
				    </div>
				  </div>
				</div>
		{% endfor %}	
	</div>
</div>

By the way, the image is "[Lenna](https://en.wikipedia.org/wiki/Lenna){:target="_blank"}", a standard test in image processing work since 1973, and an [interesting story](https://www.cs.cmu.edu/~chuck/lennapg/){:target="_blank"} in its own right.