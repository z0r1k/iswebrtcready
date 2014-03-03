# Appear.in API

While we explore the possibilites and limitations present in what exists now, we only provide an API for our sub-project [iswebrtcready.appear.in](http://iswebrtcready.appear.in). With this API you can determine whether or not the client browser is capable of running appear.in, that is: *does the browser you run at this very moment support the technologies we (and other services like ours) require?*




## Why it was made

As developers of [appear.in](https://appear.in), we are receiving a lot of feedback from users. A whole lot of them is (quite naturally) concerned with browser support. To be able to troubleshoot our customers' browsers quickly, and test the capabilities of new browsers quickly ourselves, we made a public page that everyone can use. This can be found on [iswebrtcready.appear.in](http://iswebrtcready.appear.in). This page has proven to be quite useful, and we have even seen the test page sent between browser vendors as a thing to be used to be able to recognize the capabilities of their browsers.

We have now made the service even more available by creating an API that can be used in your applications. We are already in process of integrating it ourselves on [appear.in](https://appear.in).





## How it works
It starts by embedding a small `iframe` object in the code, which loads up a small version of the [iswebrtcready.appear.in](http://iswebrtcready.appear.in) page, including the JavaScript code that runs on the full site (which is built using the same API (not the large picture, but it soon will be)).

When the iframed page has loaded, it will start responding to the methods found in our  script file, called from your code. The provided `api.js` **rename this** file exposes methods that lets you respond to an incompatible client browser, allowing for graceful degradation of the user experience. These tests (soon) forms the basis for the feature detection on [appear.in](https://appear.in).



## Embeddability
[appear.in](https://appear.in) rooms are already embeddable, but not in a way that is as easy as we want it to be. We are working on improving the usability of this process, by creating an embeddable widget that can be used anywhere on the web. For now, append the URL string with '?lite' for a cleaner version of [appear.in](https://appear.in) created for the purpose of embedding.



## Is this open source?
Sure. Do however keep in mind that the code is rather unfinished, and *it will change*, but can have a look at it if you want. It lives among our other open source efforts on [our Github page](http://github.com/appearin). We are also looking into the feasability to include these tests into dedicated feature detection frameworks such as [modernizr](http://modernizr.com/). We want the world to benefit from the fruits of our labour.



## Is this the appear.in API?
Yes. Well, almost. Soon. This is not the full [appear.in](https://appear.in) API, but rather a sneak developer preview for those who are interested in building apps today. We have built a couple of example apps that can provide you with some inspiration. All of the example applications are realized using code that is available to everyone today.



## Example applications
[Githut](http://appearin.github.com/githut)
[appearoulette](http://appearoulette.com)




## The future of the API
Our first priority for the evolution of the API is the creation of a proper API for [appear.in](https://appear.inc). What this entails, exactly, is still a matter of internal debate. One example of something that will be included in this API is the ability to have us handle the naming and creation of a room. [appear.in](https://appear.in) today allows for conjuring rooms into existence whenever needed by allowing for any randomly generated string being a room name, these room names are not guaranteed to be unique and the room might thus already be taken. Highly improbable (one might even say statistically impossible), but not guaranteed. An API provided by us would generate rooms guaranteed to be available and unique. More snassy naming scheme provided by us might also be preferrable to the output of you generic random string generator.








## Interested?
Please let us know! Send us an email at <feedback@appear.in> and we'll let you know of drastic changes.

During these early stages, the API is rather volatile, and evolving rapidly. This means that the methods and tests available might (and will) change without much notice. If you would like to be informed when this happens, leave us your email address and we promise to do our very best. Similarly, we are still exploring what is neccessary for services to build upon [appear.in](https://appear.in), and while we have a general idea, we need your help to develop these ideas into a final API. If you as a developer has feature requests or ideas, please let us know, and we will be ever grateful.

