---
name: "RequestD"
description: "Collect song requests from people easily, just like ngl.link but integrated with spotify API. Made for Hashnode X Planetscale hackathon"
cover: "https://request-d.vercel.app/logo-on-black.png"
publishedDate: 2022-08-01
githubUrl: "https://github.com/fazzaamiarso/requestD"
siteUrl: "https://request-d.vercel.app/"
featured: true
tools: [
"Next.js",
"Trpc",
"Tailwind",
"Prisma",
"Planetscale",
"Zod",
"NextAuth",
"react-hook-form"
]
type: "hackathon"
role: "Developed and designed the whole app end to end."
relatedProjects:
  - foodhunt
  - invoys
thumbnail: https://res.cloudinary.com/dkiqn0gqg/image/upload/f_auto/v1720383060/fazzaamiarso.com-astro/projects/requestd/requestd-logo_fdwcxy.png
---

## Inspiration

The idea came from the struggle of me and my friends back at high school where we held online events.  
For break time, we want to open a song request submission from attendees. As we use Spotify, there were no integrated platform that can collect song requests easily.

I also draw inspiration from [ngl.link](https://ngl.link) and Theo Browne's [OnAVote](https://github.com/TheoBr/OnAVote/tree/259026b5405b3895914bc739bcfb2ed36d262f68).

> "Currently, this app is ongoing a quota extension request to onboard more user. Which means **only users that are added by me in Spotify developer dashboard can login as admin** for the time being"

You can try this app song live submission here: [request-d.vercel.app/submission/cl69utgmz02190hlg63krtn70](https://request-d.vercel.app/submission/cl69utgmz02190hlg63krtn70)

## Problem

Before this app exists, to collect song requests, we have to do it manually. We also have to use a many different apps, which leads to a lot of back and forth between apps.

Apps we are using were:

- Spotify (Song player)
- Google Form (Submission/request collector)
- Whatsapp (Sharing submission link)

The steps to collect submission were:

1. Make the form in Gform.
2. Share the form on Whatsapp.
3. Make the playlist in Spotify.
4. Go through the submissions on Gform.
5. Search the song in Spotify.
6. Add the song to playlist/queue.
7. Repeat step 5 & 6 indefinitely.

The workflow is inefficient and tiring, especially if there are a lot of requests. It takes a lot of time.

## Solution

RequestD simplify the song request collection process by a lot. This app will do the heavy lifting.

Here is the flow with RequestD.

1. Login with Spotify to RequestD.
2. Create a new submission.
3. Share the submission link on Whatsapp.
4. Wait for the request and accept/reject the requests in RequestD.

![requestD-comparison.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1659295237654/kBxm7Ggl1.png)

As you can see, the workflow is more efficient and clear. We don't need to switch apps often. Moreover, RequestD is integrated with Spotify Public API, so the contents are trusted.

## Demo

Quick RequestD dashboard demo

<!-- <YoutubeEmbed id='7EbzpdQPMAE' title='Requestd admin dashboard demo video' /> -->

## Features

- Control the state of submission (e.g. pause/end submission).
- Set the duration and the limit of request for submission.
- Accept or reject a request.
- Delete a submission.
- Option to create a submission that add requests directly to queue for Spotify premium owner.

## Use Cases

- Create an open submission that can be shared on social media. Just like ngl.link
- Spin up a quick song request submission at an event or in a car with friends.

## Limitations

- We can’t delete the actual playlist in Spotify. The API doesn’t allow it.

## Lessons Learned

I think this app is the most complex app I ever made. There are a lot of things that is new and challenging for me.

**First**, dealing with 3rd party API (Spotify Public API) is so tricky. Since I rely a lot on data from the API, I noticed
that network error can be hard to deal with if not handled properly. Moreover, Typescript can't possibly infer the response
type a fetch. So, I utilize Zod to validate my schema at runtime that will throw error when the schema doesn't match.

**Second**, I never thought that handling auth properly is difficult. There are callbacks, sessions, and cookies that need to
be orchestrated to work. Thankfully, Next.js comes with Middleware that can handle cookies and callback. Also, next-auth
work pretty nicely and I got to learn many things from it, such as auth flow and auth scopes.

**Third**, I got in a lot of trouble trying to prefetch data using trpc on server side and hydrate the data to client.
Eventually, I figure it out by reading the react-query docs as trpc is just using react-query under the hood.

## Next steps

- Option to link an existing playlist when creating new submission.
- For online event, can show a waiting screen that show the song in queue in video meeting.
- Send anonymous message along with the request that can be displayed in the waiting screen.
- Show Spotify playback SDK.
