---
title: Portfolio Devlog
published: 2024-03-01
description: 'A devlog (a vlog but coding) for my portfolio coded in Astro'
image: ''
tags: [Blogging, Coding]
category: 'Coding'
draft: false 
---

# What's that?
Well, in this article, you'll follow me into coding this portfolio. I'll probably say a lot
of things unrelated on the way there cuz I'll be only talking and explaining, but I love, love,
LOVE devlogs *(btw, devlogs are like vlogs, but for coding)*.
Consider this like, uhhh, a git repository with commits?
> *Date format in DD/MM/YYYY*

## Integrating Boycott API [01/03/2024]
So with what's happening in Gaza, I got the idea of 
implementing a page for [Israel's Boycott list](/other/boycott).
* [X] **Step 1**: Get the API's data, it was a bit easy, because you only have to use
the `fetch` function to get the data.
* [X] **Step 2**: Make the **"Reload API"** actually get the API's data and display it.
    * This by using `addEventListener` then using the `click` event, attach it to a function 
    *(anonymous function of course)*, in this function we change the `<p>` element's style
    parameter `display` to `block`. Technically, we're just saying: "Hey! Show me that paragraph!"
    *(I think a `div` would be better)*.

And DONE! It's ugly, but it works! A bit... With no error handling... And didn't even try it.......