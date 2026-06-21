---
layout: post
title: "Unwritten Rules of OSS"
date: 2026-06-21
tags: [oss]
---

![[screenshot-2026-06-21_20-58-46.png]]

[https://github.com/Meteor-Community-Packages/meteor-simple-schema/pull/755](https://github.com/Meteor-Community-Packages/meteor-simple-schema/pull/755)

While I was conducting my usual monthly run of Meteor-related contributions, I had a pretty cool interaction that piqued my interest and got me thinking about OSS and what it entails.

Let me make this clear before continuing: I don’t want to turn this into a feud. I want to use this interaction as an illustration of the conflicting expectations that happen every day between maintainers and contributors, and as a jumping-off point to set a few rules that will hopefully help OSS enthusiasts later on.

The situation started when I decided to close out two PRs started by two different contributors and create [one final PR](https://github.com/Meteor-Community-Packages/meteor-simple-schema/pull/756) with the sum of the changes from both. In fairness, [Matthew’s PR](https://github.com/Meteor-Community-Packages/meteor-simple-schema/pull/755) was much more refined and closer to the end goal.

I ran the PR changes through Codex with a prompt, and it squashed everything into one final result without preserving references to the prior work of either contributor. This, of course, started things off badly.

Closing Matthew’s PR notified him, so he jumped in with a comment about how dead the Meteor framework was. He quickly deleted it once he noticed that the needle was actually moving. Yet things quickly turned into full-blown anger when he learned that his fork/PR had been discarded after he had waited for months, and he lamented that “it was working fine”.

I responded with:

> Welcome to OSS 🤷‍♂️

I meant it as a hint at the no-strings-attached nature of OSS: submitting a PR does not entitle you to anything. More on that later.

He quickly recognized that the package was being moved forward, but then got angry again when he learned that he was not listed as a contributor:

> I'm not even in the contributors you scab

In his view, I had “stolen” his work without acknowledging him.

This frustrated me, because none of this work is something I am obligated to do. Even taking the time to close out his PR — no matter how unfortunate that was for him — still took personal time of my own. I don’t expect praise, but I also don’t want hostility for work I’m doing for free.

Lastly, he commented on how long it had taken him and said he was going to maintain his fork from now on. I decided not to respond any further, both to avoid adding fuel to the fire and to preserve what little energy I still have for contributing to OSS.

I took time to think about all of this and decided to [rework the new PR](https://github.com/Meteor-Community-Packages/meteor-simple-schema/pull/756#issuecomment-4643318642) and “unsquash” it so that he and [Victor Parpoil](https://github.com/vparpoil) would receive proper credit for their work.

So what do we learn from all of this, kids?

That contributing to OSS is a waste of time.

I mean, it can be, but that’s for another time. 😁

["Vendoritis"](https://world.hey.com/dhh/the-open-source-gift-exchange-2171e0f0) is real and should be treated with the same strictness we used during Covid.

Ding ding ding. Correct answer.

At the root of this interaction are unmanaged expectations between maintainers and contributors. So here I’m laying out the unwritten rules of OSS in plain terms for all the young OSS enthusiasts out there.

## 1. You’re not entitled to anything, aka “Open Source is a Gift”

Understanding this simple point is essential to understanding almost everything about OSS culture.

You are not entitled to a working tool. You are not even entitled to a safe and secure tool. The tool can be abandoned, broken, insecure, or moved in a direction you do not like. The maintainer can drop it at any time simply because they no longer feel like maintaining it.

Imagine someone gives you a gift. It is not glamorous. It is cheap and rusty. Yet you still cannot call them out for it as if they owed you something.

Why?

Because they were not obligated to give it to you in the first place.

## 2. Providing meaningful contribution still does not entitle you to anything

Opening a PR that adds a much-needed feature requested by many does not entitle you to anything.

Creating a detailed issue for a noisy bug, with a step-by-step guide on how to reproduce it, does not entitle you to anything.

Spending weeks or months migrating a package to a newer version does not entitle you to anything.

These examples are a quick snapshot of the noble efforts routinely made by contributors to improve the tools they use every day. Yet the pitfall many contributors fall into is assuming that, because they invested their time helping a project, the maintainers are now required to chip in, respect that time, and allocate time of their own.

That deep frustration a contributor feels when their perfect PR is left to languish — or even outright rejected — is the same frustration maintainers feel daily while providing their services and tools free of charge.

So, consider that next time.

## 3. You are free to reject it

This is the most logical conclusion from the previous two rules.

If you do not like the gift, or if you feel that you put effort into improving it and it is still not what you want, you can very well walk away.

The maintainer, in turn, cannot oblige you to use their tool, no matter how awesome it is, no matter how much time they invested in it, and no matter how badly they want people to adopt it or pay for it.

_This single principle cuts both ways: neither the maintainer nor the contributor is obliged to the other in any shape or form._

## 4. Be grateful

Considering everything above, if someone took time out of their day to share a cool project they have been working on, be grateful.

If someone decided to submit a PR fixing that pesky bug that has been in the library for years, be grateful.

Be grateful for one another: the maintainer for the contributor, and the contributor for the maintainer.

“Do unto others as you would have them do unto you.”

This is indeed the golden rule.

## 5. Rules might not apply

OSS is a weird mix of ever-shifting quicksand. Now you have big companies coming in and outright bankrolling entire OSS projects.

_Cough cough_ Bun.

Having a dedicated team of professionals on payroll to maintain your favorite tool does indeed change the dynamic. Each case can vary, so you need to be careful about which rulebook you apply to which situation.

But for the average maintainer/contributor relationship, the baseline should remain simple:

No entitlement. No resentment. Clear expectations. Gratitude when people give their time.