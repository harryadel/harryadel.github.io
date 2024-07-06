---
layout: post
title:  "Dev Diary #6"
date:   2024-7-06 4:47:00 pm
categories: [meteorjs, oss]
---

Hello, this month was much more fruitful in terms of open source contributions and overall activities. We released a new version of [collection-2](https://github.com/Meteor-Community-Packages/meteor-collection2/pull/449) that's compliant with the latest RC, including a minor code [fix](https://github.com/Meteor-Community-Packages/meteor-collection2/issues/448).

I also helped push efforts for [collection-hooks](https://github.com/Meteor-Community-Packages/meteor-collection-hooks/pull/306), fixing tests and giving a little push to get things released. This package needs thorough testing, as I suspect there are still lingering bugs and issues. Please give it a try and let us know your findings.

In my hunt for minor community improvements, I added GitHub CI to the [meteor-user-status](https://github.com/Meteor-Community-Packages/meteor-user-status/pull/186) package.

I'm excited to present the new [Kadira/Monti APM docs](https://docs.montiapm.com/introduction). I helped improve them, and although it took a while to see the light of day, I'm super pumped about the result. The docs have been reworked to fit the latest changes in the Meteor community. It's now the prime destination for diving deeper into Meteor internals and improving your application's efficiency.

Lastly, I want to highlight this [issue](https://github.com/meteor/meteor/issues/12932) with the current RC. When building a Meteor application, it crashes due to a permission problem. It's a unique issue, and I reckon it's probably the last one blocking 3.0. Once it's resolved, I believe 3.0 will be truly ready. Please take a look and chime in – your input would greatly help us.