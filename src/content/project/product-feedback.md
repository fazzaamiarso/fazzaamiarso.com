---
name: "Product Feedback"
description: "An app to request and give feedback to a product. Part of Frontendmentor.io Guru challenge"
cover: "https://res.cloudinary.com/dkiqn0gqg/image/upload/v1660770336/product-feedback-frontendmentor.png"
publishedDate: 2022-05-27
githubUrl: "https://github.com/fazzaamiarso/product-feedback-next-trpc-prisma"
# siteUrl: "https://product-feedback-next-trpc-prisma.vercel.app/"
tools: [
"Next.js",
"Planetscale",
"Tailwind",
"Prisma",
"Trpc",
]
type: "personal"
role: "Develop the UI and functionality of the app based on the Figma design"
relatedProjects:
  - munchika
  - requestd
---

## Overview

This app was made for [Frontendmentor's Guru level challenge](https://www.frontendmentor.io/challenges/product-feedback-app-wbvUYqjR6/hub/product-feedback-app-1FrgsEUQci). The challenge give us a figma desgin and
design system to work with. This app is still not considered 100% finished yet by me, although all criterion of the challenge has been met. A lot of improvements
can be done.

## Techs used

I use next.js + trpc for the first time which turned out great.

- next.js
- planetscale
- tailwind
- prisma
- trpc

Some notable techs I use:

- **react-hook-form**. Handle form submission.
- **next-auth**. Handle auth with Google.
- **headless-ui**. Handle creating accessible components.

## Demo

<!-- <YoutubeEmbed id='AFLs6YS4LGs' title='Product Feedback Demo' /> -->

## Lessons Learned

The hardest challenge for me was working with Trpc on the server. But, when I realize that it just an API handler built on
top of Next.js api route, it made sense for me.

While building this app, I realized how hard it is to handle form submission that have a lot of different form elements.
So, I reached for react-hook-form which handle form using uncontrolled component. That worked most of the time, but when
there is a lot of component nesting, form types (e.g radio and checkbox), and 3rd party library. I learned to handle a mix of
controlled and uncontrolled form components.

I also learn to setup a simple design system with tailwind and a responsive layout that changes layout often. Headless UI
make my life easier on creating accessible components, although we must make adjusments and styling.

## Conclusion

Although this app is still not perfect and have a lot of room for improvements, it become a stepping stone for me to learn
tech that I'm not comfortable with. It's definetly rewarding to breakout of comfort zone.
