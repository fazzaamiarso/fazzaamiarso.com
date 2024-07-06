---
name: "Invoys"
description: "Open source and self-hostable invoice management app built with Next.js. Made to be free of cost."
cover: "https://i.imgur.com/jjJiZSg.jpg"
publishedDate: 2022-11-06
githubUrl: "https://github.com/fazzaamiarso/invoys"
# siteUrl: "https://invoys.fzworld.xyz/"
featured: true
role: "Developed and designed the whole app end to end."
type: "hackathon"
tools:
  [
    "Next.js",
    "Typescript",
    "TRPC",
    "Prisma",
    "Planetscale(MySQL)",
    "TailwindCSS",
    "Courier",
    "Docker",
    "Cypress",
    "Vitest",
  ]
relatedProjects:
  - foodhunt
  - munchika
---

## Inspiration

On the internet, a lot of open-source Invoice management apps are built with Laravel. As a Javascript developer, I want to build the "React Solution" for devs that are familiar with React and Javascript.

## Features

- Freely customize the code.
- Create invoice and manage clients.
- Send Invoice link to email.
- Download invoice to PDF.
- Export datas to CSV.
- Invite team members.
- Magic Link Authentication.

## Project Gallery

|                                                    |                                                   |
| :------------------------------------------------: | :-----------------------------------------------: |
|   ![Dashboard](https://i.imgur.com/fdeh97j.png)    |  ![New invoice](https://i.imgur.com/1EulVHE.png)  |
| ![clients table](https://i.imgur.com/T42iGGj.png)  | ![client detail](https://i.imgur.com/RjOkcBE.png) |
| ![invoice detail](https://i.imgur.com/V2DpeLV.png) | ![invoice batch](https://i.imgur.com/rpDor0M.gif) |
|     ![login](https://i.imgur.com/lHY7BmH.png)      |

## Demo

<YoutubeEmbed id='Val51f1x4mY' title='invoys demo' />

## Challenges

### Defining schema in Prisma and Making the Entity Relationship Diagram

Database is not my strong side although I have learned a bit before, my understanding is still hazy. I kept hitting foreign Key problem and ended up finding out that the problem is with the Prisma Planetscale support.

Planning and designing ERD is not an easy task for me, such as thinking about the relationship of tables, how is the best to connect fields, when to migrate or push a schema, and of course planning the architecture of the app.

### Setup a Proper Open Source Repository

This is my first time setting up a repo in github properly. When using other's project, I took it for granted and didn't realize the efforts put into making a good repo for others to contribute.

Writing documentation id unexpectedly challenging as we must make sure contributors able to understand and contribute to our project properly regardless of environment. Setting up linting and styling rules is tedious because there are lot of configurations, rules, conventions, and opinions that make it hard to just implement. Now, I get it why developers created templates and plugins.

### Creating and Manipulating Tables

In this project, I'm building tables and I need to make some of its row as an input field. After thinking and evaluating, it's not as easy as I would like, there a lot of states that changes often and need syncrhronization with server. Structuring the table content was pretty easy, the hard part comes when I need to manipulate and extract datas from the table. Fortunately, I found out about [tanstack table](https://tanstack.com/table/v8) that helped with managing datas. As a note, the API was kind of confusing for me, but it starts to make sense now.

### Designing UI/UX

First of, I'm bad at design although decent at basic UI fundamentals. Picking colors and making things looking good is not my forte. So, I spent a lot of time searching for refrences and ideas on the internet.

### Testing Complex Interface

Testing a fully authenticated and complex interactions is very difficult. I was stuck on working around network requests and database while E2E testing.

**Testing Email Magic Link**. I know how to test this flow, but it's confusing as I don't know how to verify the verification email in an automated testing environment.

### Continuous Integration with Github Action

Another point of confusion was running the tests in CI. I had a rough idea on how to do it. Oh boy.. it's quite a journey until I can safely build the workflow environment and run all checks. It also come with some frustrated git commit message (sorry for future contributor 😅).

## What I've Learned

### Documenting project

Writing about how your projects built or works clearly is crucial, I had to revise and rethink a lot of time. Taking screenshots or GIF of UI/UX can boosts the understanding of your upcoming contributor or user. Guide users on steps to contribute and setup the project locally.

### Managing Server State and Client State

By building things, I finally making sense what Kent C. Dodds meant [in this blog post](https://kentcdodds.com/blog/application-state-management-with-react). A lot of times, data that we worked on only make sense in server side. Copying server state to client can lead to bugs, such as state out of sync. Separating both of them, leads to a more robust app.

### Utilize Docker

I thought Docker wasn't a necessary technology for me to learn. Thankfully, I've been proven wrong as Docker helped me to develop with many kind of technologies. Especially for this project, docker helped to build isolated local and test database which enables me to test without mocking a database connection. I also learned that Github Actions is basically running a docker container, which blows my mind.

### Testing with Cypress and Vitest

With the complexity of the project, I was able to learn to test users flows with all the interactions and network requests. Initially, I was testing with Playwright, but I couldn't get around on mocking login session. Frustrated, I switch to Cypress and still have the same problem, but I found a workaround that I am proud of.

Also, the environment needed in testing is different from development so it kinda throw me off, especially on mocking the database and mocking trpc's endpoint is still hard to do. I managed separate the database for different environments by switching from hosted database in Planetscale to Docker and it worked greatly.

Honestly, unit testing is not really hard, granted that I didn't test all of the components in this project, I still need to look into it. A benefit of unit testing that I really like is when I want to refactor a certain function, I am able to get feedback and catch bugs quickly.

### Continuous Integration (CI).

I learned to setup testing suite in github action which I've given up before. Thankfully, I kept going for this project maintainablity. I learned a lot from Kent C. Dodds CI flow.

### Tables and Virtualization

I never thought that table would be a beast to deal with. I think it's also because I use tanstack-table which is a headless library that gives me APIs that gives a lot of control, but require more setup and markup. I learned on how to manage states on table.

Virtualization is necessary as the table grows which can cause performance problem with loading and rendering a lot of items on a page.

### Integrating with 3rd Party Vendor

This project integrates Courier API to send invoices to users email. I have to learn the Courier platform, connecting with the project, and making sure it works without a problem.

### Building UI/UX

I learned a lot on building UI/UX by watching [Gary Simon's Design Course](https://www.youtube.com/c/DesignCourse). Watching him fixing UI and give feedback live gives me insights on how to think about designing accessible UI/UX that looks good. Designing an inclusive UX is also important to make sure users don't get confused while using an app. I took a lot of design inspiration from [Tailwind UI](https://tailwindui.com/).

## Takeaway

An important takeaway is just try to build it first, if stuck then put it off for later. Before that, I was doing too much calculations before trying something (e.g. library), it turns out by trying I can learn and fail much faster.
