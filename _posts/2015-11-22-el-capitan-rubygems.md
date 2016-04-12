---
layout: post
title:  "Installing Ruby Gems onto OS X El Capitan"
date:   2015-11-22
category: OS+X
tags: ['OS X', 'Ruby gems', 'programming']
---

If you're having trouble getting Ruby Gems running on OS X El Capitan (things like Sass or Jekyll), [use the following](https://github.com/sass/sass/issues/1769#issuecomment-144662506) instead of the default ```gem install {name}```: 

```sudo gem install -n /usr/local/bin {name}```

