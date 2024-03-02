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
* [X] **Step 1**: Get the API's data. It was a bit easy, because you only have to use
the `fetch` function to get the data.
* [X] **Step 2**: Make the **"Reload API"** button actually get the API's data and display it.
    * This by using `addEventListener` then using the `click` event, attach it to a function, 
    in this function we change the `<p>` element's style
    parameter `display` to `block`. Technically, we're just saying: "Hey! Show me that paragraph!"
    *(I think a `div` would be better)*.
* And DONE! It's ugly, but it works! A bit... With no error handling... And didn't even try it...

* Update! Now the thing works. Instead of using a `<p>` I use a `<div>`. 
And now, if you press that reload button, then it prints a little message
that tells you the state of the "API fetching", and if it's good, it prints the collected data,
if there was a problem, then it would write that it failed, and guess what! If it fails....
It becomes red. That's it.
    * Btw all of this took me until now like 2 hours maybe. I should be studying right now.

## Finishing Boycott API [02/03/2024]
Uhhh, guess what. The API wasn't working cuz I didn't add that `https://` at the benningin...
But at least now it works! Left me to show the actual content (title, image... etc).