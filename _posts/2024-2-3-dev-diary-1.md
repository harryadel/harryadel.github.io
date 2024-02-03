---
layout: post
title:  "Dev Diary #1"
date:   2024-2-3 1:40:00 am
categories: [meteorjs, oss]
---

Hi, I intend now to publish a mini-blog post at the end of each month to illustrate what I've been working on and to communicate to my sponsors my plans.

Thanks to [Daniel](https://github.com/DanielDornhardt) & [Trusted Care](https://trusted.care/) I was able to migrate many packages to async that we use in our application:

- Building upon Quave's PR to update the original [synced-cron](https://github.com/percolatestudio/meteor-synced-cron/pull/150)
- Asyncify [meteor-keyvaluestore](https://github.com/theduke/meteor-keyvalstore/pull/2)
- Modernize [meteor-simple-schema-mixin](https://github.com/rhettlivingston/meteor-simple-schema-mixin/pull/6)
- Asyncify [reactive-table](https://github.com/aslagle/reactive-table/pull/495)
- Modernize [template-controller](https://github.com/meteor-space/template-controller/pull/37) 
- Modernize [anti:methods](https://github.com/anticoders/meteor-methods/pull/7) 

I also managed to contribute some more into the docs:

- My most [infamous Meteor contribution](https://github.com/meteor/meteor/pull/12975), yet
- [Replacing validated-method with jam:method](https://github.com/meteor/meteor/pull/12961) 
- Adding a note about [mtest](https://github.com/meteor/meteor/pull/12962)
- Replace a reference of [HTTP with fetch](https://github.com/meteor/meteor/pull/12976)

While nothing major to the core but hey I try my best and whenever I see something worth improving I do my best.

That's it for this month. If there's anything you'd like me to pay more attention to, let me know. 

Finally, please consider sponsoring me on [Github](https://github.com/sponsors/harryadel) if you haven't yet as this allows me to put more time into Meteor and OSS in general. I'm taking it more serious now and trying to dedicate at least a full day worth of work a week if not more.