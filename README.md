# Vanilla Crypt

* **./src** for modules
* **./test** consists unit tests for zigzag matrix read algorithm
* **./test-images** sample images that are used to test the algorithm
_**Warning:** Start off by using "*-small" version of the images. Otherwise, it could take long according to the client specs._
* **./demo-ss** contains several manual test run's screenshots with distinguish inputs and outputs. 
* **./demo** includes different applications of the algorithm, which could be used to test it. Hence, the name... Demo.
* Console logs are left open in case you wanna check out how it's running. If performance is imperative, just disable them through modules codes.

## How to use/run

* First off, if you want to run it (even only the demo) you have to use certain local web server instance to get it working. It is due to the latest browser security measures. Sure you can still directly open demo's or other files in a browser, but you'll run into CORS problem. Either disable CORS or just use a web server **(nodejs, visual code built-in live preview, apache, WebStorm browser stuff, PhpStorm browser stuff... you name it)**.
* Use a browser _(duh)_
* Open up some demos right from the ./demo (e.g ./demo/image-encryption/index.html)
* You can always tweak around with the sample that is used. For example, in image-encryption demo: just change the img tag's src.

 

