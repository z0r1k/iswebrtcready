# Appear.in API


While we explore the possibilites and limitations present in what exists now, we only provide an API for our sub-project [iswebrtcready.appear.in](iswebrtcready.appear.in). With this API you can determine whether or not the client browser is capable of running appear.in, that is: *does the browser you run at this very moment support the technologies we (and other services like ours) require?*




## How it works
It starts by embedding a small `iframe` object in the code, which loads up a small version of the [iswebrtcready.appear.in](http://iswebrtcready.appear.in) page, including the JavaScript code that runs on the full site (which is built using the same API (not the large picture, but it soon will be)).

When the iframed page has loaded, it will start responding to the methods found in our  script file, called from your code. The provided `api.js` **rename this** file exposes methods that lets you respond to an incompatible client browser, allowing for graceful degradation of the user experience. These tests (soon) forms the basis for the feature detection on [appear.in](https://appear.in).




## Why it was made

As developers of [appear.in](https://appear.in), we are receiving a lot of feedback from users. A whole lot of them is (quite naturally) concerned with browser support. To both ease our workload


Be able to troubleshoot our customers browsers by sending them to a ...
, also ourselves be able to quickly see if new browsers (happens quite often acutally, especially on handheld devices) are capable of running [appear.in](https://appear.in)

We also have seen the test page sent between browser vendors as a thing to be used to be able to recognize the capabilities of their browsers.


Maxthon on Macs can communicate with Chrome, but nothing else. An experimental browser from Ericsson Research is webRTC capable, but is utilizing a different technology stack than [appear.in](https://appear.in). Incidents like these are a lot easier to test with a specialized test page with a test battery that tests for everything that we need to properly function, and generate a lot of useful data.



## Licencing
Will this be open source. Maybe.
What about testing frameworks such as [modernizr](http://modernizr.com/). We are looking into the feasability to include these tests into the framework.

### Is this the appear.in?
This is not the full [appear.in](https://appear.in) API, but rather a sneak developer preview for those who are interested in building apps today. We have built a couple of example apps that can provide you with some inspiration. All of the example applications are realized using code that is available to everyone today.




## Example applications
[Githut](path/to/githut)
[appearoulette](http://appearoulette.com)



## The future of the API
Our first priority for the evolution of the API is the creation of a proper API for [appear.in](https://appear.inc). What this entails, exactly, is still a matter of internal debate. One example of something that most probably will be included in this API is the ability to have us handle the creation of a room. While the current way [appear.in](https://appear.in) today allows programmatic 



## Interested?
Please let us know! We will keep you in the loop.

During these early stages, the API is rather volatile, and evolving rapidly. This means that the methods and ... available might (and will) change without much notice. If you would like to be informed when this happens, leave us your email address and we promise to do our very best. Similarly, we are still exploring what is neccessary for services to build upon [appear.in](https://appear.in), and while we have a general idea, we need your help to develop these ideas into a final API. If you as a developer has feature requests or ideas, please let us know, and we will be ever grateful.












# Blogpost
Writing it here so it won't be gone

## Introducing the appear.in API!
lolololol


