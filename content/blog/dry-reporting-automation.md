---
id: 351
title: 'DRY Reporting & A Guide to Report Automation'
date: 2019-02-08T13:09:10+02:00
author: Chris Bailey
excerpt: Too much reporting time is spent on repetitive tasks that add no value. This blog post looks at how and why you need to invest in automating your reports. And no, this does not require some ridiculously expensive BI tool!
permalink: /dry-reporting-automation/
image: /images/uploads/DRY-reporting.png
bg_image: /images/uploads/DRY-reporting.png
categories: ["Digital Analytics"]
description: "this is meta description"
draft: false
type: "post"
---
For those of you that are unfamiliar with the term, DRY is a software development term that stands for “**D**on’t **R**epeat **Y**ourself”. This is a fundamental part of good development that ensures efficiency. It is also something that I have found is often missing from reporting processes.  


I believe that the lack of DRY reporting is two sided. On the one hand, the people compiling reports often lack the required programming experience to automate repetitive tasks. On the other hand, where people do have the programming experience, they see the initial time that needs to be investment as being too high.  


In many cases, this is true &#8211; if it takes 20 hours to automate a 10 minute task, that task needs to be done 120 times before the initial investment pays off. (If it’s a monthly task, that’s 10 years).  


I am going to present my case as to how and why to automate reporting despite the above:

## Simplify

Most reports are over-cluttered and over-complicated. Before you start working on automation, make sure that the data you are looking to automate is [actually necessary.](/why-most-reports-are-waste-of-time/)  


Another effective means of simplifying reports, is to split up one large report into multiple smaller ones. This not only leads to your reports speaking to individual audiences, but also makes automation far easier.  


Simplification is the low hanging fruit of reporting &#8211; it generally requires very little effort and has the biggest impact.

## Economies of scale

Automating reports should always lead to economies of scale. Meaning that as you start automating reports, all subsequent reports can be automated with less effort.  


To explain this, I am going to refer back to the example of investing 20 hours to automate 10 minute task. If you are able to adapt this code to automate 60 different 10 minute tasks, and it only takes you an extra 5 minutes per task, that’s an overall investment of 25 hours. It now only requires 3 repetitions before the investment becomes worth it.  


The best way to do this is by making use of easily understandable, robust, reusable code. It also helps to stick to templates where it makes sense (although I do not personally believe that reporting templates add much value in many scenarios).  


## Upskill

While simplification and economies of scale help to make the automation process easier, I believe that there is a much better method &#8211; Upskilling. In the spirit of _”Give someone a fish, feed them for a day &#8211; teach someone to fish, feed them for a lifetime”_ I believe the person compiling reports should be given the tools and knowledge to automate their own tasks.  


While this may be intimidating at first, here are my suggestions of how one can get started.

##### Google Sheets is your new best friend 🙂

Did you know that you can automate almost any operation in Google Sheets using Google’s AppScipt. This is much like excel VBA macros, just much **much** more user friendly. Here is a link to Google’s documentation.  


These scripts can pull data from Google Analytics, almost any other API (provided you can figure out the authentication) or scrape websites from content.

They can also be used to create pdfs, attach these to emails and send them to a predetermined list of recipients. Sound useful?  


Even better, they can be scheduled to run on daily, weekly, or monthly schedules.

##### Start playing with APIs

Most of the data for your reports comes from some sort of API (Application Programming Interface). While all APIs differ, a bit of practice figuring out how APIs work and how you can bend them to your will is invaluable.

I would suggest starting off with the Google Analytics API. You can start pulling data from this in Google Sheets, or use the [GA-Tools Query Explorer](http://ga-dev-tools.appspot.com/explorer/).

##### Learn some JavaScript basics

Upping your knowledge of JS will stand you in good stead across much more than just automating reports. Nonetheless, Google AppScript is JS based and having a good understanding of objects and arrays and how to iterating over them will definitely help.  


Here are two resources for getting started or improving your JavaScript skills. There are many more that are just a Google away.  


[CodeAcademy JavaScrip Intro](https://www.codecademy.com/learn/introduction-to-javascript)

[JavaScript30 from Wes Bos](https://javascript30.com/)  


If you have any comments or would like some help with automating your reports, just get in touch!