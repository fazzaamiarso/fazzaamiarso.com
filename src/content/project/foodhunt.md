---
name: "Foodhunt"
description: "A restaurant catalog application where users can find and search for their favorite restaurants. This project is a final project submission for Dicoding Frontend Expert Class."
cover: "https://i.imgur.com/jjJiZSg.jpg"
publishedDate: 2023-03-04
githubUrl: "https://github.com/fazzaamiarso/dicoding-FE-Expert"
siteUrl: "https://foodhunt-fz.netlify.app/#skip-content"
featured: true
role: "Built the whole app end to end. Ensuring submission's criteria are implemented."
type: "submission"
tools:
  [
    "Typescript",
    "Lit Element",
    "SCSS",
    "Webpack",
    "Zod",
    "IndexedDB",
    "Workbox(PWA)",
    "Playwright",
    "Vitest",
  ]
---

## Challenges and Learning

### Building A Full-fledged app with Native Capability

One criterion is to build a web app that supports Native Capability by implementing Progressive Web App. PWA is unfamiliar to me and seems complicated. But I got through it in the end.
I learned that many big companies implemented PWAs into their app and services to improve their site and user experiences. I was interested in making my app as excellent and refined as theirs. I learned about Service Worker and its cache handling to make the app work offline.

### Performance Optimization

In this class, there's an emphasis on web performance to make apps as quick and usable as possible. When I was learning about web performance, there were many ways to improve something on the web. What got me keen on improving my app is the effect on users when using the app. By improving performance, users' experience on our app will be better and more convenient. Although tools can audit some improvements, I learned that we must view other aspects from an actual user perspective. I also learned a valuable lesson in the end: no matter how good our app is, it eventually comes back to how usable and convenient it is for users.

### Using Webpack as Bundler

Prior to this project, I had never used Webpack for my projects. Its notoriety for requiring tedious and complicated boilerplate just to get a minimal project setup running was a challenge. Nevertheless, as I became more familiar with Webpack, I realized that I had taken for granted the convenience of bundlers like Vite and Parcel.
By using Webpack, I gained a deeper understanding of the intricacies of how a bundler works within frameworks like Next.js, React, and other frameworks. I began to appreciate how frameworks abstract away many implementation details, making our work easier.

### Create Own Implementation of 3rd party Library

Since this project uses Vanilla JavaScript, there are fewer available libraries compared to frameworks like React that I'm used to. Finding a suitable and compatible library can be challenging.
Feeling frustrated, I decided to implement some of the features myself. The most notable feature was lazy loading images. Although there is a popular library for it, it cannot penetrate shadow DOM. Therefore, I created my own lazy loading component that uses shadow DOM and supports native lazy loading capability.

I also created my own client-side router. I was not satisfied with how the class's module implemented the router, and there are no suitable libraries available in Vanilla JavaScript. To my surprise, I had a lot of fun creating things on my own, although dealing with bugs was tough rather than improving the app.
