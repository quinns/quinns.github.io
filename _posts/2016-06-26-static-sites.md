---
layout: page
title: Getting started with Jekyll and GitHub Pages
date: 2016-06-26
---

>TL;DR: Static sites are simpler, more secure, and way faster than dynamic sites and you should totally use them!

## What is a static site generator?

In the old days, we wrote web sites entirely by hand, using simple tools like NotePad, and life was good. <!--more--> Simple sites that consisted of just a small number of interlinked pages were easy to create and maintain. However, over time people wanted to be able to manage larger and more complex sites. We started creating large collections of HTML pages, each one which had to be carefully hand-edited. Layout markup and content got intermingled and things became difficult to manage. Somewhat later, templates were introduced using "server side includes", which allowed at least a bit of separation between presentation and content. But includes were difficult to manage and not every server would support them.

Eventually, someone had the idea of connecting a database to the back-end of a website to store content, and to generate web pages dynamically on the fly, using a server-side programming language such as PHP or Perl. This led to the development of a wide variety of "Content Management Systems", as well as products such as shopping carts, forums, social networks, and many more. It was genius, actually: Databases had been developed over prior decades and had a lot of industrial-strength features and could hold and organize extremely vast amounts of data. When database-backed websites came on the scene, pretty much every web developer jumped on board because the advantages were obvious and quite real.

These "web applications" also added features over time making it easier for less-technical users and editors to write content, add media such as images, etc., using familiar word-processing and page-layout tools. Many people, especially business owners who paid a developer to build a site for them, never even looked at the HTML their onboard WYSIWYG editor was generating!

These were all amazing inventions but somewhere along the way, database-backed web applications and CMSes started to show their weaknesses. Not only were these programs increasingly complex, hard to understand and use, they also could be very resource-heavy and slow  if they weren't tuned right and didn't have enough server resources to properly support them.

A larger problem also developed: Just about any complex CMS or web application may have security vulnerabilities allowing them to be hacked. Malicious folks figured out how to exploit these weaknesses to inject malware, send large amounts of spam, steal user data, and all kinds of other nasty business. 

If you've ever built and maintained a WordPress, Drupal, or Joomla site you probably have experienced some of these issues yourself. You get a lot of power and flexibility to build cool stuff, but you're also on a never-ending upgrade treadmill and constantly have to be worrying about the security of your site (at least, you should be constantly worried).

## It's time to step back from the tyranny of the Content Management System

**There is a simpler way**

Imagine if there was a way to get a lot of the benefits of a complex CMS without any of the security problems, need for constant upgrades, complexity, and server requirments. A way that still let a designer/developer create a custom designed site, using all the modern front-end frameworks and tools, and could quickly populate that site with content in a fairly easy to use system.

Imagine that this system included some smarts, so you could include sophisticated logic into your templates to perform calculations, interpret variables, output loops, and render different types of structured data in a wide variety of ways.

Imagine that it was fast as a rocket, incredibly lightweight, and basically unhackable.

Oh, and imagine that you could publish your sites entirely for free, with no hosting or bandwidth costs.

Well, such a thing does exist, and it's called **[Jekyll](https://jekyllrb.com/)**. The Jekyll [documentation](https://jekyllrb.com/docs/home/) gives a succinct summary:

>Jekyll is a simple, blog-aware, static site generator. It takes a template directory containing raw text files in various formats, runs it through a converter (like Markdown) and our Liquid renderer, and spits out a complete, ready-to-publish static website suitable for serving with your favorite web server. Jekyll also happens to be the engine behind GitHub Pages, which means you can use Jekyll to host your project’s page, blog, or website from GitHub’s servers for free.

Once you install Jekyll on your workstation,  you can just start it up and have it generate a site for you. It will automatically create a set of simple templates that you can start editing. You can tweak the provided templates a little bit, or replace them entirely with your own design. Your content will be injected into specific regions that you define. Even better, Jekyll includes a *local web server*, so you can quickly preview your work and iterate your design without even having to upload your content to the internet. And of course once you've built your site (or created some new content for it), you can easily publish it using a variety of methods, to just about any hosting environment in the world. Remember, it's all HTML, CSS, and Javascript (plus your images and other media assets)!

## Formats

With Jekyll, you can write your content in a variety of formats, including but not limited to:

*	**HTML**	
	The grand-daddy of all formats. You can just write plain old [HTML](https://en.wikipedia.org/wiki/HTML) and not worry about any fancy formats. However, HTML tends to be more verbose and it can be easy to forget to close a tag or have other syntax errors that may cause rendering issues.

* **Markdown**	
	[Markdown](https://daringfireball.net/projects/markdown/) is probably the most common format for writing content in static site generators. It is sort of a shorthand way of writing HTML. Once you get used to it, it's fast and easy to work with.
	
* **Liquid**	
	[Liquid](https://shopify.github.io/liquid/) is a templating language created by the e-commerce company Shopify, based on the Ruby language. It provides a lot of logic functionality to your Jekyll templates. Control flow, iterators, and much more are available using an intuitive syntax. 
		
* **Textile**	
	[Textile](https://en.wikipedia.org/wiki/Textile_(markup_language)) is another lightweight markup syntax similar to Markdown.
	
## Other nice features
	
* **Built-in version control with GitHub**   
If you're using [GitHub](http://github.com) to host your site, you get built-in version control automatically. This means every single change you ever make to your site layout or page content is tracked and recorded. You can easily go back in time and undo changes, whenever you want! 

* **Drafts**			
Jekyll gives you a special directory to keep [draft/unpublished](https://jekyllrb.com/docs/drafts/) posts, letting you work on stuff in private before publishing to your site.
	
* **Integtrated Sass compiling**			
If you use the Sass CSS pre-processor (and you really should be!), you'll love that Jekyll will [recognize your Sass structure](https://jekyllrb.com/docs/assets/#sassscss) and automatically compile your CSS every time you do a build.
	
* **Permalinks**	
You can easily create a variety of custom URL structures for your pages. You can build page paths automatically based on your directory structure, or define custom paths for any page.

* **Front matter**	
"[Front matter](https://jekyllrb.com/docs/frontmatter/)" refers to any metadata you may apply to your site's pages and posts. This includes items like the page title, publication date, and any categories or tags you've defined. You can also define variables that are then used throughout the page or post. Smart use of Front Matter can handily approximate a lot of stuff you'd normally use a dynamic website for.

## What are the disadvantages?

For all the amazing things that a static site generator can do for you, there are certainly some limitations. Let's review the things that we can't easily do, and a few ways to work around tehse limitations or find acceptable alternatives:

* **No database**	
Obviously by definition, a static site has no database backend component. This means that it's difficult or impossible to natively support user-generated content. You can't really do a shopping cart, message board, or other social features. However, you *can* run Javascript! So this means you can easily add comments to your blog posts using a third-party system like [Disqus](https://disqus.com/) or [Facebook Comments](https://developers.facebook.com/products/social-plugins/comments/). And if you want to have a shopping cart, you'll need to use a third-party platform such as [Shopify](https://www.shopify.com/) or [Ecwid](https://www.ecwid.com/).
	
* **No server-side dynamic processing**     
Again, there's no backend. You can't really have user-customized features such as logged-in user-specific content. You can't show a widget of "who's online now", etc. What Jekyll does provide, however, is a pretty solid platform for blogging (or just organizing and sorting pages or posts of various types). Jekyll will automatically generate a reverse-chronological summary of your posts, and if you add a new post, it will automatically regenerate all the pagination as needed. You can also automatically create topic or section pages based on category keywords. For a lot of sites, that's really the only processing that's needed.
	
* **No onboard search engine**    
You're not going to get a nice built-in local search tool with Jekyll. Remember, there's no database! You can certainly integrate a [Google Custom Search](https://cse.google.com/) onto your site, if you don't mind giving up some layout control and letting your search look Googly. There are also some more [advanced](http://frontendcollisionblog.com/javascript/jekyll/tutorial/2015/03/26/getting-started-with-a-search-engine-for-your-site-no-server-required.html) [techniques](https://botleg.com/stories/implement-elasticsearch-in-jekyll-blog/) for adding a more fully-integrated search engine to your site.
	
* **No built-in WYSIWYG or CMS**		
By default, when you work with Jekyll, you're dealing with a collection of simple text files. You won't get a fancy rich-text editing interface, or built-in multimedia libraries. There are some tools that can help with making editing a little easier, though:
	* There's a paid service called [CloudCannon](http://cloudcannon.com) that provides a very slick front-end, inline editing interface. This might be a great solution for an agency that wants to provide static sites for clients but wants to give them a familiar and intuitive editing interface.
	* Not exactly a WYSIWYG but there's a quite nice free service called [Prose](http://prose.io) that gives you a rich-text editing interface for Jekyll sites. You can drag-and-drop images right into the interface, and even push your changes directly to GitHub Pages without ever needing to activate your own local Jekyll server. 

## How can I publish my site?

Because your Jekyll engine will generate your site every time you save new content into it, you can easily just upload the contents of the output directory to any web server using familiar tools such as SFTP. It's really that easy. However, there's an even *easier* way: [GitHub Pages](https://pages.github.com/). 


GitHub Pages is a service from GitHub that provides free hosting for static websites. Every GitHub account gets a single "Organization" project, which will be associated with your GitHub username, but you can also create an _unlimited_ number of "Project" pages. The publish method is slightly different for each but it basically consists of two steps:

1. Commit your latest changes to your repository's publishing branch
2. Jekyll publishes your site to GitHub pages. 

That's literally all you need to do to publish new content to your site!

An Organization site will by default be published at `http://{username}.github.io`. You can easily use a custom domain name, though, and make your site totally custom and remove the GitHub branding.

You can use GitHub + GitHub pages to host and maintain your site, for free. (I personally use this method to host the page you are reading right now!) 
