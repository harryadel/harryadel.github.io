---
layout: post
title: "Why Meteor"
date: 2026-10-05 
tags: [meteorjs, oss]
description: "Eight years in, an honest and personal answer to the question I get asked the most: why did I stick with Meteor, and what has it taught me?"
---


If you're coming into this article expecting a lot of developer jargon and three-letter acronyms like MVC or MVP, then this article isn't for you.

This is more of a down-to-earth conversation, with myself first and foremost, and then with others who might be looking at me and my decisions a bit bizarrely lol. So let's get to it. Why Meteor, you may ask? Ahh, if I had a penny for every time. It's one of the questions I've been asked most often ever since the dawn of my professional career.

Let me intrigue you with some trivia first. I was first introduced to Meteor at [Fixed Solutions](https://solutions.fixed.global/en), my first ever official job. I was instantly amazed by the freedom and by how quickly you could get things done, and that joy of creation is what first drew me to it. I always say it was the stack: Blaze, Tabular, AutoForm, Collection2 & simpl-schema, and FlowRouter. Come to think of it, most web applications are nothing but tables and forms, and Meteor made those trivial so you could focus on your application logic. Mind you, my initial skills were geared towards the front-end, so offering such an easy entry into back-end and full-stack development is an underrated power of Meteor.

Doubling down on Meteor early in my career set me apart from my peers, possibly to their dismay, since they chose to keep generalizing and diversifying their skillsets rather than digging deeper. In this article I'd like to shed light on why I chose Meteor and on the lessons I've picked up along the way.

### I Like it

There's no way around it. I just like it, pure and simple. Could it be because it was my first love and my first introduction to back-end development? Possibly. Could it be because I can't let it go? That's possible too. Looking back on my life decisions, there are some things I've held on to until it hurt me, things I needed to let go of earlier but couldn't. Regardless, I like Meteor and there's no way around it.


### We'Re prObLeM SolVeRS dUuDdEEee

This used to be the knee-jerk response I got from my peers. Don't get attached to the tools, get attached to the problem. We're problem solvers after all. You're supposed to hop from one technology to another in an instant. Yeah, there's a kernel of truth in that for sure, but it always nagged me that there's *highly* specific knowledge in the tools and frameworks we use that takes years to build. You can't take a core Rails developer, for instance, drop them into Express, and expect them to hit the ground running with the same velocity and cadence. It takes time to get accustomed to our tools, and I believe it's equally important for builders to get acquainted with their tools and to treat them with respect in order to get the best out of them.

### Did you hear about [insert latest library that dropped]?

This is another affliction of the modern-day developer's life. It used to be called JS fatigue at some point. I understand why people like shiny new things, but this constant, never-ending chase of what's new and trendy is so damn tiring. Don't we want to build web applications? We already have the tools for that. No need to constantly reinvent the wheel. Those new libraries are solving their authors' problems; let's focus on ours. People also tend to conflate "I moved on" with "it's dead" and declare technologies dead just because they chose to move to greener pastures. [Jan Küster](https://github.com/jankapunkt) wrote an amazing [article](https://dev.to/meteor/dead-or-not-dead-exploring-the-term-and-why-meteorjs-is-super-alive-4j2c) on that term and what it truly means for a technology to be obsolete.

### Taste & Character

I'm not trying to say I'm different or parade as eccentric, but if I had to pick between two developers, one who treats whatever a mega corporation shat out of its system as a divine gift, and another who made a decision, is willing to stick to their guns, and can eloquently reason about why they made it, I'd pick the latter. I don't want spineless folks on my team who can't back their decisions, no matter how weird or quirky those decisions are. I'd like developers with some character whom I can argue with until we reach the best solution. [You got to do something](https://www.youtube.com/watch?v=tfKDHtnfeQ0).


### Lifelong lessons

As you've read so far, I'm against this constant hopping, because you've got to stick to one place and see it through its many phases. One of the most important ways to learn in life is to make decisions and then stick around long enough to see how they pan out. Let me bestow upon you one of the many lessons I've learned during my time with Meteor.

[tools/cordova/index.js](https://github.com/meteor/meteor/blob/ac3f471f4af5c8aec737e20ccd168bfc7cc1a49e/tools/cordova/index.js#L26)
```js
const CORDOVA_ANDROID_VERSION = "15.1.0";

export const CORDOVA_DEV_BUNDLE_VERSIONS = {
  'cordova-lib': '13.0.0',
  'cordova-common': '6.0.0',
  'cordova-create': '2.0.0',
  'cordova-registry-mapper': '1.1.15',
  'cordova-android': CORDOVA_ANDROID_VERSION,
};

export const CORDOVA_PLATFORM_VERSIONS = {
  'android': CORDOVA_ANDROID_VERSION,
  'ios': '7.1.1',
};
```

From early on, Meteor wanted to offer the best DX possible by taking on as much responsibility as it could and making many decisions on behalf of the developer. But by pinning the Android and iOS versions inside the framework itself, Meteor always lagged behind whenever a new version was released, and a PR had to be submitted to upgrade the underlying libraries. Essentially, Meteor had shot itself in the foot. The lesson: when you take on responsibility for dependencies you don't control, you inherit their release schedule, and every release becomes your chore. [Nacho](https://github.com/nachocodoner) has caught on to this problem and, in his new Capacitor design, intends to free Meteor from that responsibility. You wouldn't get to learn this without being around long enough to witness the migration from Cordova to Capacitor and the problems they had to deal with before it.

This is merely one of the many lessons I get to learn daily while working with Meteor, not in terms of the code but in terms of the decisions made to keep this framework alive and breathing. Here's another lesson on [framework choice](https://forums.meteor.com/t/express-vs-fastify/64531/4) and another on community and [governance](https://github.com/meteor/meteor/pull/14426). I could write a book about these lessons, no joke.

### Fish in a Pond or Shark in the Sea

Now, I'm not saying my decisions were without repercussions. It's a pretty niche technology. The companies using Meteor are mostly the ones that got on it early; there aren't many new companies picking it up. There are so few companies working with Meteor that I even compiled a [list of them](https://github.com/harryadel/awesome-meteor-jobs). [weworkmeteor.com/jobs](https://weworkmeteor.com/jobs) is a wasteland with tumbleweeds all over it. Which of these companies are hiring, and which of them are open to hiring a remote developer from Egypt? I'm not fear-mongering, but these are decisions I live with every day. When I'm in an interview for a regular Node.js job and I tell them about the cool things I've done, it just falls on deaf ears. Oh, so you're saying you've spent 8 years on this dying technology that no one uses but you? An immediate red flag for them! But hey, I wear it proudly nonetheless.

The upside to this story is that when I do find a company looking for a Meteor developer, I immediately stand out thanks to my expertise and skills. That's the trade I made: rather than being one more shark in a sea full of generalists, I chose to be a big fish in a small pond. The pond has fewer fish to catch, but when one comes along, I'm the one they're looking for.


### Closing thoughts

Many of the points mentioned here might change due to the ongoing revolution in LLMs and how developers work nowadays. Does the choice of language or framework even matter when a human isn't the one writing the code? [DHH's Rails World 2026 opening keynote](https://www.youtube.com/watch?v=vDjW_dRyKXY) got me thinking about this again. My take, for now, is that it matters more, not less. Someone still has to read that code, review it, debug it at 2 AM, and own the decisions behind it. A framework with strong conventions and an integrated stack leaves less room for an LLM to go astray, and the years of tool-specific knowledge I talked about earlier are exactly what let you tell good generated code from plausible-looking garbage. When anyone can produce code, taste and judgment are what's left, and those come from sticking with something long enough to understand it.

I'm quite glad to have stumbled upon the Meteor framework. It's a big part of, dare I say, my life and not just my career. I'm even more fortunate for the people I've met along the way. The community is a tight-knit family of hardcore fans like me who work diligently on forever improving it, and I'm glad to be part of it.
