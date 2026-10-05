---
layout: post
title: "Why Meteor"
date: 2026-10-05 
tags: [meteorjs, oss]
---


If you're coming into this article expecting to read developer jargon or three letter words like MVC, MVP then this article isn't for you.

This is more of a down to earth conversation for myself and to myself first and foremost then to others who might be looking bizarrely onto me and my decisions lol. so let's get to it. Why Meteor? You may ask. Ahh, If I had a penny. This is one of the questions I get asked often eversince the dawn of my professional career. 

Let me intrigue you with some trivia first. I got first introduced to Meteor at [Fixed Solutions](https://solutions.fixed.global/en) at my first ever official job. I was instantly appalled by the freedom and speed you could things quickly and that joy of creation is what first led me to it. I always say Blaze, tabular, Autoform, collection2 & simpl-schema, flow-router. Come to think of it most web applications are nothing but tables and forms and well Meteor made it trivial so you could focus on your application logic. Mind you, my initial skills were geared towards front-end so allowing such an easy entry to back-end or fullstack development is such an underrated power of Meteor.

Doubling down on Meteor early on in my career led to a divergence and possibly dismay by my peers who chose to carry on with generalizing their skillset and diversifying their skillset rather than digging deeper. In this article I'd like to shed a light on the unique peculiarities that I've met a long the way and possibly why I chose Meteor.

### I Like it

There's no way around it. I just like it, pure and simple. Could it be because it was my first love and first introduction to backed development? Possible. Could it be because I can't let it go? That's possible too. Looking back on my life decisions, there're some things in my life where I've stuck to to the point where it hurt me and I needed to let go earlier but I couldn't. Regardless, I like Meteor and there's no way around.


### We'Re prObLeM SolVeRS dUuDdEEee

This is used to be the knee-jerk response, I get from my peers. Don't get attached to the tools, get attached to the problem. We're problem solvers after all. You're supposed to hop from one technology to another in an instant. Yeah, there's a kernel of truth for that for sure, but it always nagged me that there's a *highly* specific knowledge in the tools and frameworks we use that takes years to build and you can't take a core rails developer for instance and drop him into Express and expect him to hit the ground running with the same velocity and cadence. It takes time to get accustomed to our tools and how we use them and I believe it's equally important for builders to get acquainted with their tools and to treat them with respect in order to get the best out of it.

### Did you hear about [insert latest library that dropped]?

This is another alignment of modern day developer's life. It used be called JS fatigue at some point. I understand why people like new shiny things but this constant never-ending chase of what's new and trendy. It's all so damn tiring. Don't we want to build web applications? We already have the tools for that. No need to be constantly reinvent the wheel. They're solving their own problems, let's focus on ours. Also people tend of confulate and consider many technologies "dead" just because they chose to move to greener pastures. German Jan [We've two Jans] wrote an amazing [article](https://dev.to/meteor/dead-or-not-dead-exploring-the-term-and-why-meteorjs-is-super-alive-4j2c) on such term and what it means to truly consider a technology obsolete.

### Taste & Character

I'm not trying to say I'm different nor parade as eccentric but if I were to pick between two developers one who's treating whatever mega corporate shat out of its system as a divine gift and another who's made a decision and willing to stick to his guns and be able to eloquently reason why he made such decision. I'd be the later. I don't want some spinless folks on my team who can't back their decision no matter how weird or quirky, I'd like some developers with some character who I can argue with and reach the best solution. [You got to do something](https://www.youtube.com/watch?v=tfKDHtnfeQ0).


### Life long lessons

As you read on you'd find that I'm against this constant hopping because you gotta stick to one place and see it through the many phases. One of the most important ways to learn in life is to make decisions and then sticking around long enough to see how they pan out. I'm going to bestow upon you one of the many lessons I learned during my time in Meteor.

https://github.com/meteor/meteor/blob/ac3f471f4af5c8aec737e20ccd168bfc7cc1a49e/tools/cordova/index.js#L26
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

From early on Meteor wanted to offer the best DX possibly by taking as much responsibility and doing many decisions on behalf the developer though by binding the Android and IOS versions down inside the Meteor framework, Meteor always lagged behind when a new version was released and a PR had to be submitted to upgrade the underlying libraries. Essentially Meteor had shot itself in the foot. Though, [Nacho](https://github.com/nachocodoner) has caught on to such problem and intends in his new Capacitor design to free Meteor from this responsibility. You wouldn't get to learn this without being there long enough to even witness the migration from Cordova to Capacitor and the problems they've had to deal with before. 

This was merely one of the many lessons I get to learn daily while working with Meteor, not in terms of the code but rather the decisions made to keep this framework alive and breathing. Here's another lesson on [framework choice](https://forums.meteor.com/t/express-vs-fastify/64531/4) and another on community and [governance](https://github.com/meteor/meteor/pull/14426). I could write a book about these lessons, no joke.

### Fish in a Pond or Shark in the Sea

Now I'm not saying my decisions was without repercussions. It's a pretty niche technology. Companies using Meteor are the ones who got on it but there're not many new companies using it. The amount of companies that're working with Meteor are so small that I even compiled a [list of them](https://github.com/harryadel/awesome-meteor-jobs). weworkmeteor.com/jobs is a waste land with tumbling weeds all over it. Which of these companies are hiring and which of them are open to hiring a remote developer from Egypt? I'm not fear mongering but these decisions I live with everyday. When I'm at an interview for a regular Node.js job and I tell them about these cool things I did. It just falls on deaf ears. Oh so you're saying you've spent 8 years into this dying technology that no one uses but you? An immediate red flag for them! but hey I wear it proudly nonetheless. 

Though the upside to this story is when I indeed find a company looking for a Meteor developer. I immediately stand out due to my expertise and skills. 


### Closing thoughts

Many of the points mentioned here might change due to the ongoing revolutions in LLMs and how developers work nowadays. Does the decision of language or framework matter now when a humans isn't the one writing it? Have you seen [DHH latest keynote](https://www.youtube.com/watch?v=vDjW_dRyKXY?  

I'm quite glad to have stumbled upon the Meteor framework. It's a big part of --dare I say-- my life not just my career. I'm even more fortunate to the people I've met during my Meteor journey and the people I've met. The community is this tight-knit family of hardcore fans like me that work diligently on forever improving it and I'm glad to be part of it. 