---
title: Keeping your Drupal links fresh
layout: post
date: 2010-06-24
category: drupal
tags: link-checking
---

<div class="alert alert-danger" role="alert">Note: This content is several years old and has been imported from a previous version of this site. The information presented here may be out of date, and there may be some layout issues with this page.</div>

Here are a couple of really useful modules I've been using to help ensure my Drupal sites don't have broken links, and that embedded URL aliases are kept current automatically:

1. [Pathologic](http://drupal.org/project/pathologic){:target="_blank}
2. [Link Checker](http://drupal.org/project/linkchecker){:target="_blank}

From their respective Drupal project descriptions:

## Pathologic

[Pathologic](http://drupal.org/project/pathologic){:target="_blank} is an input filter which can correct paths in links and images in your Drupal content in situations which would otherwise cause them to “break;” for example, if the URL of the site changes, or the content was moved to a different server. Pathologic can also solve the problem of missing images and broken links in your site’s RSS feeds.

## Link Checker

The [Link checker](http://drupal.org/project/linkchecker){:target="_blank} module extracts links from your content when saved and periodically tries to detect broken hypertext links by checking the remote sites and evaluating the HTTP response codes. It shows all broken links in the reports/logs section and on the content edit page if a link check has been failed. An author specific broken links report is also available in "My Account" (D6+ only).

In addition, it's a good idea to tweak your setup for automatic alias generation. When you edit a node and change the node title, the alias for that node may be updated based on your new title. This can cause existing embedded links to break. If you set this behavior to "Create a new alias. Leave the existing alias functioning.", or "Create a new alias. Redirect from old alias." you can ensure that even if paths change the node will still be reachable by either alias.