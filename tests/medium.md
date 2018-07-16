---
path: /blog/fluid-widths-in-responsive-websites-2a02499295d9/
title: "Fluid widths in responsive websites."
description: "Front End Design Principle Rambles #1"
url: "https://medium.com/@psyked/fluid-widths-in-responsive-websites-2a02499295d9"
image: "https://cdn-images-1.medium.com/max/1200/1*Key4MifVtUocntQlHnMM9g.jpeg"
src: "https://cdn-images-1.medium.com/max/1200/1*Key4MifVtUocntQlHnMM9g.jpeg"
author: "https://medium.com/@psyked"
type: "article"
card: "summary_large_image"
published_time: 2018-07-11T11:11:46.274Z
creator: "@psyked"
date: 2018-07-11T11:11:46.274Z
---

# Fluid widths in responsive websites.

## Front End Design Principle Rambles #1

I’ve recently worked with the team behind the Derby University website \[[https://www.derby.ac.uk/](https://www.derby.ac.uk/)\] and one of the details that I really like about the implementation of the design is that it features more than just fluid widths, it also features fluid font sizes. I’ll get onto what that means in another post, but for now I want to talk a little about using fluid widths.

### Fluid widths — Pros & Cons

#### Pros

There more variations to device size than can be reasonably handled with media queries and fixed or pixel-based widths, so fluid widths are a more practical and thus more useful for website layout and making the best use of the screen viewport.

Using fluid widths you can reasonably expect your layout to remain as intended, and expand or shrink elements predictably, even if you haven’t designed the website for a specific resolution.

#### Cons

When fluid and fixed width elements meet there are issues. A commonplace and difficult issue to resolve is consistently achieving readable and balanced text within a fluid width design. Fixed font sizes equate to a fixed height, with individual variable character widths.

[**Readability: the Optimal Line Length**  
_Having the right amount of characters on each line is key to the readability of your text. It shouldn’t merely be your…_baymard.com](https://baymard.com/blog/line-length-readability "https://baymard.com/blog/line-length-readability")[](https://baymard.com/blog/line-length-readability)

Maximum and minimum text line lengths are recommended for readability, but sticking to these has the effect of setting fixed width upper and lower width bounds for any block of text, even if you’re aiming for a fluid layout.

Media queries and fluid gutters between elements are popular strategies for coping with the challenge of matching fluid widths and fixed font sizes, but they’re often just clever tricks to fill the gaps with whitespace. Wouldn’t it be nicer if the font sizes scaled with the page instead?

![](1*Key4MifVtUocntQlHnMM9g.jpeg)

Photo by [chuttersnap](https://unsplash.com/photos/xjZl9zm6Sds?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/search/photos/whitespace?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)