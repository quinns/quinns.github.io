---
title: Equalize your responsive grids
layout: post
---

I've been looking for some time for the perfect solution to creating Bootstrap grids that have the same column-height for every "cell" in the grid, within the same row.  <!--more--> I've found a few possible solutions, but none of them allow all the following:

1. Must not have explicitly-defined number of items per row (needs to be flexible and properly wrap on any screen size)
2. Compatible with IE 9 (sorry, flexbox)
3. Not break the responsiveness of the grid (this is the problem with Bootstrap's [suggested solution](http://getbootstrap.com.vn/examples/equal-height-columns/))

So I've settled on [a jQuery plugin that handles it nicely](https://github.com/Sam152/Javascript-Equal-Height-Responsive-Rows). I'd like to do this with pure CSS, but this works for now. (If you know how, [please share](mailto:quinn@quinnsupplee.com)!)





