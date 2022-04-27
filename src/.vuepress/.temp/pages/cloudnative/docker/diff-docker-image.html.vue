<template><h1 id="alpine-slim-stretch-buster-jessie-bullseye-—-what-are-the-differences-in-docker-images" tabindex="-1"><a class="header-anchor" href="#alpine-slim-stretch-buster-jessie-bullseye-—-what-are-the-differences-in-docker-images" aria-hidden="true">#</a> Alpine, Slim, Stretch, Buster, Jessie, Bullseye — What are the Differences in Docker Images?</h1>
<blockquote>
<p>转载自：<a href="https://medium.com/swlh/alpine-slim-stretch-buster-jessie-bullseye-bookworm-what-are-the-differences-in-docker-62171ed4531d" target="_blank" rel="noopener noreferrer">Alpine, Slim, Stretch, Buster, Jessie, Bullseye — What are the Differences in Docker Images?<ExternalLinkIcon/></a></p>
</blockquote>
<p>And which one should I choose?</p>
<p>If you are like me, the first time you went to create a Dockerfile and had to choose an image from the DockerHub page, you were thoroughly confused. Sometimes choices like this can freeze us up from acting, so maybe we just go with the standard image and avoid looking into it further, so that we can move forward with our project.</p>
<p>But it’s a good idea to understand the differences between the types of Docker images so that you choose the right one for your application or script.</p>
<p>In short, the difference between docker images is the underlying operating system. Here is a summary of each.</p>
<p>And be aware that this decision is not permanent. You can always change the image in your Dockerfile and rebuild your images. Just be sure to test thoroughly before deploying to production.</p>
<h2 id="full-official-image" tabindex="-1"><a class="header-anchor" href="#full-official-image" aria-hidden="true">#</a> Full official image</h2>
<p>I’ll use python and node as examples because these are my most used docker images, but this applies to any image. According to DockerHub, this is the de-facto image and the one you should use if you are unsure.</p>
<p><strong>python:3.8.3</strong></p>
<p><strong>node:14.1.1</strong></p>
<p>These images are based on the most recent stable Debian operating system release. I usually start with one of these when trying to get a project up and running quickly, and I am not yet concerned about the size of the resulting image.</p>
<p>The full image is the safest choice.</p>
<h2 id="stretch-buster-jessie" tabindex="-1"><a class="header-anchor" href="#stretch-buster-jessie" aria-hidden="true">#</a> stretch/buster/jessie</h2>
<p>Images tagged with stretch, buster, or jessie are codenames for different <a href="https://wiki.debian.org/DebianReleases" target="_blank" rel="noopener noreferrer">Debian releases<ExternalLinkIcon/></a>. At the time of this writing, the stable Debian release is 10.4, and its codename is “Buster.” “Stretch” was the codename for all version 9 variations, and “Jessie” was the codename for all version 8 variations.</p>
<p>Future versions in development, but not yet stable, are “Bullseye” and “Bookworm.” You may start seeing these tags in the list of image versions on DockerHub.</p>
<p>Choose one of these images if your code is compatible with a specific version of the Debian operating system. You rarely will need to use older versions of Debian when starting a new project.</p>
<h2 id="slim" tabindex="-1"><a class="header-anchor" href="#slim" aria-hidden="true">#</a> -slim</h2>
<p>The slim image is a paired down version of the full image. This image generally only installs the minimal packages needed to run your particular tool. In the case of python, that’s the minimum packages to run python and the same for node.js.</p>
<p>By leaving out lesser-used tools, the image is smaller. Use this image if you have space constraints and do not need the full version.</p>
<p>But be sure to test thoroughly when using this image! If you run into unexplained errors, try switching to the full image and see if that resolves it.</p>
<h2 id="alpine" tabindex="-1"><a class="header-anchor" href="#alpine" aria-hidden="true">#</a> -alpine</h2>
<p>Alpine images are based on the <a href="https://alpinelinux.org/" target="_blank" rel="noopener noreferrer">Alpine Linux Project<ExternalLinkIcon/></a>, which is an operating system that was built specifically for use inside of containers. For a long time, these were the most popular image variations due to their tiny size.</p>
<p>However, some teams are moving away from alpine because these images can cause compatibility issues that are hard to debug. Specifically, if using python images, some wheels are built to be compatible with Debian and will need to be recompiled to work with an Apline-based image.</p>
<p>The main reason to use an Alpine image is to make your resulting image as small as possible. The base image will be smaller than 5MB. The python base image (adding python to the base alpine image) is currently 78.9MB. That’s still very small.</p>
<p>This image is the most highly recommended if space is a concern.</p>
<p>The disadvantage is that it does not contain some packages that you might need. Mainly, it uses a slimmer <strong>musl</strong> lib instead of <strong>glibc</strong>. You may run into issues if your application has specific <strong>libc</strong> requirements.</p>
<p>If you find the Alpine image is lacking in something you need, you can always install it directly in your Dockerfile. This keeps the image to only what you need. Be aware that your Dockerfile will change if you are installing external packages. The main difference is that you will use <code>apk</code> instead of <code>apt-get</code> to install packages.</p>
<p>There have been concerns regarding -alpine images, so you need to be aware of them. Read about some of them <a href="https://dev.to/asyazwan/moving-away-from-alpine-30n4" target="_blank" rel="noopener noreferrer">here<ExternalLinkIcon/></a> and <a href="https://medium.com/@stschindler/the-problem-with-docker-and-alpines-package-pinning-18346593e891" target="_blank" rel="noopener noreferrer">here<ExternalLinkIcon/></a> and do your own research. Again, if you are experiencing an unexplained issue in building your Dockerfile, try switching to the full image to see if that cures it.</p>
<h2 id="windowsservercore" tabindex="-1"><a class="header-anchor" href="#windowsservercore" aria-hidden="true">#</a> -windowsservercore</h2>
<p>I rarely use windows, I am firmly in the Mac / Linux camp now, but if your application runs only on Windows or Windows Server, this is the image for you.</p>
<h2 id="but-this-still-doesn-t-help-me-which-one-do-i-choose" tabindex="-1"><a class="header-anchor" href="#but-this-still-doesn-t-help-me-which-one-do-i-choose" aria-hidden="true">#</a> But this still doesn’t help me. Which one do I choose?</h2>
<p>Here are some general guidelines I use:</p>
<ul>
<li>If I need to get something up and running quickly, have no space constraints, and don’t have time to test much, I start with the de-facto image. My main concern here is that the image has everything I need to work out of the box, and I don’t have to worry much. This image, however, will be the largest.</li>
<li>If space is a concern and I know I need only the minimal packages for running a particular language like python, I go with -slim.</li>
<li>For some projects that I have time to test thoroughly, and have extreme space constraints, I will use the Alpine images. But be aware that this can lead to longer build times and obscure bugs. If you are having trouble porting your docker containers to new environments, or something breaks as you add new packages, it may be because of the Alpine image.</li>
<li>Lastly, always scroll to the bottom of the <a href="https://hub.docker.com/_/python" target="_blank" rel="noopener noreferrer">DockerHub page<ExternalLinkIcon/></a> for a particular image and read about suggestions for choosing an image.</li>
</ul>
<h2 id="comparing-docker-image-sizes" tabindex="-1"><a class="header-anchor" href="#comparing-docker-image-sizes" aria-hidden="true">#</a> Comparing docker image sizes</h2>
<p>If you want to inspect docker images yourself and compare, try this.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker pull --quiet python:3.8
docker pull --quiet python:3.8.3
docker pull --quiet python:3.8.3-slim
docker pull --quiet python:3.8.3-alpine
docker images
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>You will see there are vast differences between de-facto images and -slim and -alpine versions.</p>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/diff-image.png" alt="diff-image" loading="lazy"></p>
<h2 id="a-note-on-versions" tabindex="-1"><a class="header-anchor" href="#a-note-on-versions" aria-hidden="true">#</a> A note on versions</h2>
<p>Don’t ever use <image>:latest in a production Dockerfile. Doing this will always pull the latest image, and your application’s dependencies may not be compatible with future versions.</p>
<p>When starting a new project, I generally start with the most recent tagged version, test thoroughly and then upgrade as needed and test thoroughly before pushing to production.</p>
</template>
