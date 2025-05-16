---
layout: post
title:  "Dev Diary #2"
date:   2024-3-2 11:41:00 am
tags: [meteorjs, oss]
---

Another month, another set of updates. This month hasn't been filled with much PRs compared to the last month partially due to the fact I've already migrated most of the packages we use at our company. But hey quality not quantity, right? :D 

My most prominent work of this month is migration of [SteveJobs](https://github.com/msavin/SteveJobs/pull/112) package. It required a considerable amount of work, I also tried my best to update the tests. Max [responded](https://github.com/msavin/SteveJobs/pull/112#issuecomment-1973440521) back and he's about to try things out, so please give it a try and report any issues you find and I'll gladly fix it.

I searched for an alternative for [meteor-persistent-session](https://github.com/cult-of-coders/meteor-persistent-session) since it still relies on amplify which is a [deprecated](https://github.com/meteor/meteor/tree/devel/packages/deprecated/amplify) package making the migration to 3.0 impossible but thankfuly I found an alternative that required little to no work - [itgenio/meteor-persistent-session](https://github.com/itgenio/meteor-persistent-session/pull/1). 

Also, I attempted to try to migrate [simple-schema](https://github.com/Meteor-Community-Packages/meteor-simple-schema/pull/741) but unfortunately this is not a simple task and requires a considerable amount of work so after a while I had to subside it in favour of other endeavours. You're welcome to give it a try since Jan is busy with other stuff for the time being.

Lastly, a good portion of my OSS time went to writing this month as I worked on this [article](https://dev.to/meteor/genesis-of-a-framework-unveiling-the-meteor-story-50dd). I was honestly quite delighted and *humbled* by the fact that the Meteor team decided to reach out to me, so shout out to Tatiana and Gabriel. It was a nice gesture of them. Hopefully this opens up the path to more collaboration in the future.

That's it for this month and as always thank you for [sponsoring](https://github.com/sponsors/harryadel) me, till next time. Bye! 👋