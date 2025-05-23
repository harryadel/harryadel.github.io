---
layout: post
title: "Meteor's Hidden Auto Publications: The Free Data You Never Asked For"
date: 2025-05-23 12:16:00 am
tags: [meteorjs, oss]
---


While working on my previous article about Meteor's login mechanism, I discovered another interesting aspect of how Meteor works: **auto publications**. These are publications that Meteor automatically creates and maintains without you explicitly defining them. They're essentially "free" data subscriptions embedded into your codebase that you might not even know exist.

*Note: I'm excluding publications from the autopublish package since it's not typically used in production applications.*


### 1. Current user publication (null)

```js
https://github.com/meteor/meteor/blob/6bf558ccd410a0266368d1e0500ec58a8bf61b09/packages/accounts-base/accounts_server.js#L790
this._server.publish(null, function () {
        if (this.userId) {
          return users.find({
            _id: this.userId
          }, {
            fields,
          });
        } else {
          return null;
        }
      }, /*suppress autopublish warning*/{is_auto: true});
    });
```
This publication is what makes `Meteor.user()` work in your codebase—a utility that's often taken for granted. The publication automatically sends the current user's data to the client whenever someone is logged in.


#### Customizing User Fields
You can control which fields get published by default using Accounts.setDefaultPublishFields():

```js
// To replace the default fields entirely
Accounts.setDefaultPublishFields({
  profile: 1,
  username: 1,
  emails: 1,
  // Add your custom fields here
  customField: 1,
  'services.github.username': 1  // You can publish nested fields
});

// To exclude certain fields
Accounts.setDefaultPublishFields({
  profile: 0,
  'services.password': 0
});
```

### 2. meteor.loginServiceConfiguration
```js
https://github.com/meteor/meteor/blob/6bf558ccd410a0266368d1e0500ec58a8bf61b09/packages/accounts-base/accounts_server.js#L769
this._server.publish("meteor.loginServiceConfiguration", function() {
      if (Package['service-configuration']) {
        const { ServiceConfiguration } = Package['service-configuration'];
        return ServiceConfiguration.configurations.find({}, {fields: {secret: 0}});
      }
      this.ready();
    }, {is_auto: true}); // not technically autopublish, but stops the warning.
```
This authentication-related publication operates behind the scenes when you add the `service-configuration` package. It automatically publishes all OAuth service configurations (excluding secret fields), allowing clients to know which OAuth services are available and how to interact with them.


### 3. autoupdate package
```js
https://github.com/meteor/meteor/blob/6bf558ccd410a0266368d1e0500ec58a8bf61b09/packages/autoupdate/autoupdate_server.js#L108
Meteor.publish(
  "meteor_autoupdate_clientVersions",
  function (appId) {
    // `null` happens when a client doesn't have an appId and passes
    // `undefined` to `Meteor.subscribe`. `undefined` is translated to
    // `null` as JSON doesn't have `undefined.
    check(appId, Match.OneOf(String, undefined, null));

    // Don't notify clients using wrong appId such as mobile apps built with a
    // different server but pointing at the same local url
    if (Autoupdate.appId && appId && Autoupdate.appId !== appId)
      return [];

    const stop = clientVersions.watch((version, isNew) => {
      (isNew ? this.added : this.changed)
        .call(this, "meteor_autoupdate_clientVersions", version._id, version);
    });

    this.onStop(() => stop());
    this.ready();
  },
  {is_auto: true}
);
```

This publication handles application version updates and hot code reloading. Unlike typical MongoDB observers, it uses `clientVersions.watch()`, a specialized reactive mechanism designed for this specific use case.

The mechanism works like this:
- The publication watches the clientVersions collection for changes
- When you deploy new code, the server updates this collection with new version identifiers
- Connected clients receive these updates through this publication
- The client-side of the autoupdate package detects the version change
- The client then triggers a full page reload (not HMR)

### 4. facts-base Package

```js
https://github.com/meteor/meteor/blob/6bf558ccd410a0266368d1e0500ec58a8bf61b09/packages/facts-base/facts_base_server.js#L59
Meteor.publish(FACTS_PUBLICATION, function () {
    const sub = this;
    if (!userIdFilter(this.userId)) {
      sub.ready();
      return;
    }

    activeSubscriptions.push(sub);
    Object.keys(factsByPackage).forEach(function (pkg) {
      sub.added(FACTS_COLLECTION, pkg, factsByPackage[pkg]);
    });
    sub.onStop(function () {
      activeSubscriptions =
        activeSubscriptions.filter(activeSub => activeSub !== sub);
    });
    sub.ready();
  }, {is_auto: true});
```

This specialized publication comes from the `facts-base` package, used internally by packages like `livedata` for metrics collection. Unlike the other auto publications, this one:

- Only serves authorized clients
- Updates in real-time as metrics change
- Requires manual subscription (not automatically subscribed)  

Most packages utilize it in such manner:

```js
Package['facts-base'] && Package['facts-base'].Facts.incrementServerFact(
  "packageName", "metricName", incrementValue);
```


## Conclusion

These auto publications demonstrate Meteor's philosophy of convention over configuration. While they provide convenient functionality out of the box, it's important to understand what data is being automatically published, especially for security considerations. Being aware of these hidden publications helps you make informed decisions about your application's data flow and security model.