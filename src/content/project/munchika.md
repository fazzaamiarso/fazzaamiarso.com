---
name: "Munchika"
description: "Leveraging the power of music and community to find and share musics that truly help and relatable to people. Made for Hashnode x Netlify hackathon held in February."
cover: "https://res.cloudinary.com/dkiqn0gqg/image/upload/f_auto/q_auto/v1720465840/fazzaamiarso.com-astro/projects/munchika/munchika-cover_dxont3.png"
publishedDate: 2022-03-01
githubUrl: "https://github.com/fazzaamiarso/munchika"
# siteUrl: "https://munchika.netlify.app/"
type: "hackathon"
tools: ["remix", "supabase", "tailwind", "vitest", "cypress"]
role: "Frontend"
relatedProjects:
  - foodhunt
  - product-feedback
thumbnail: https://res.cloudinary.com/dkiqn0gqg/image/upload/c_thumb,w_200,g_face/v1720383403/fazzaamiarso.com-astro/projects/munchika/munchika-logo_fkk7qa.svg
---

## Background, sorta...

I came with this app idea quite a long time ago, but as you know imposter syndrome kicks in and I keep delaying and procrastinating by just watching tutorials on everything, whether it is database, javascript, react, react framework. I still can go on but let's stop here because the point is there is no progress made😫.

Fortunately, as I was finally trying to start making this app, I found this hackathon on the internet. What a great opportunity, right? Soo.. I decided "Let's do it with tools that I never used before but I want to learn" for this hackathon. I don't know whether it is a good idea or not because I started on February 18th. Even I speedrunned this article because I was so annoyed by this one bug last minute that I still cant figure out until the end. And then I remember what my role model said

> ["Perfect is the enemy of shipped"](https://twitter.com/kentcdodds/status/1205607926997479424?s=20&t=mjLiGXCHWgYFVp-mNJXWzQ) ~Kent C. Dodds

So, that is a short story on how this app was born to the world..

## What Problem It Solve?

A lot of people are going through hard times, especially in pandemic. There are unimaginable different things that people can do to go through it. One of them is by listening to music. For some people, Music can be healing in some ways, such as lyrics that reflect to their life and sometimes it can be motivating. I have seen some comments on Youtube that a certain song help them to go through hard times and give them a moment of reflection.

But, music come in many different languages and background, which is a problem because if someone is looking for a song by keywords such as stress or anxiety, they got the songs and recommendations but most of the time there is no context in it. It is just a song and they have to actually listen until the end and search through its lyrics to really find what they are looking for.

Another problem is the song that they are meant to find, possibly (high probability actually) exist in other language make it unreachable to them because they simply overlooked it because they dont understand the language or doesn't even ever reach their search.

On the flip side, I found it problematic for me too is there are a lot of people that would like to share their thought on social media about how a song truly helped them, but when they uploaded it, not that many people care and people sometimes prejudiced by the song coming from another language and culture ( that came from my own experience actually, it truly sucks ). A lot of them believe in power of music, but it doesn't seem like it to me😪. I don't think that it is terrible or something, someone can have different taste, but what if we can just share it in a platform where people truly care to look at it and want to find it because it can be a help to them.

I build this app using a stack that I want to learn, so keep in mind that I still learning these tools. Hope this can give you some heads-up.

### Deployment

- **Netlify**. Honestly, I always used netlify to host my react projects before and love the experience. But, I never host fullstack app hosted here entirely with the server. With this hackathon I discovered netlify serverless functions that make it possible to host fullstack app. My experience with Netlify and Remix is really great, it literally just BAM, BAM, and my are deployed in under 3 minutes serverlessly. I followed this [tutorial](https://www.youtube.com/watch?v=tCGEoheZFfQ) to deploy it. Netlify is dope 🔥🔥

### Front end

- **Remix.run (React Framework)**. I want to learn this framework after previously work with Next.js for couple of times but I just see and listen to Kent C. Dodds talk about Remix all the time so I just give it a try and it turns out that I like it so much because it just give you an API on top of web API to work with so if you use Remix, you will end up keep turning back to MDN to read more about web to understand how to work with Remix. I felt like I became a lot more comfortable on Web development basics after using Remix.
- **Tailwind CSS**. I decided to use tailwind because it is easy to setup and I really enjoy the colocation of the css and html so I dont need to switch tabs very often. Tailwind also have a lot of great contents provided by its creator so I it make more appreciated towards tailwind.

### Backend

- **Postgresql + Supabase**. Having working with MongoDB and Firebase before, I surprised by how easy and cool it is to query complex data with SQL when I learned it. As a first timer working with SQL database, I struggled a lot finding provider to host my database. Eventually, I came across Supabase with its great database hosting and client sdk.
- **Genius API**. If you have read from my solution explanation, you will know that this app is greatly dependent on this [Genius's API](https://docs.genius.com/) to pull all the song datas that I need for this app. It music collection is complete and you dont need user's authorization to use this API.
- **Dicebear API**. I use this great [API](https://avatars.dicebear.com/) to generate the avatars for users when they are signing up. It has a lot of styles and variation. Moreover it is completely free, but with some term and conditions you have to oblige.

### Design

I did the wireframe on pen and paper initally, then I transfer it to Figma. I don't do full design because it takes a lot of time and I am not that great of a designer😆.

![Munchika Figma Wireframe](https://cdn.hashnode.com/res/hashnode/image/upload/v1646086512142/9Wj94mxrq.png)

## How It Solves the Problem?

You might be thinking, WOW that is a lot of problems to solve. I don't think you can. Lucky you, I stayed up all night and finally came with it. Combining the power of music, power of community and magic (A lot of Javascript, HTML, and CSS😅).

### Find and discover songs

In this app, say you looking a song that associated with dealing with stress, so you search for keyword 'stress' and all the post that have it will show up with the song someone associated it with. Heck, they can even give you the lyrics that is related to their thought so you can just read their thought and get how it had helped them.

![Search post](https://cdn.hashnode.com/res/hashnode/image/upload/v1646089433745/7kHKYg8nA.png)

Ok, after you are a little bit assured about listening to a song you want to find out more people who have thought about it too. Just click on the song's card and it will direct you to the song's feed with all the associated thought with it🤩. You can even checkout the song on Genius.com. There is still no sorting or filter because my I ran out of time, Sorry 😢.

![Song details](https://cdn.hashnode.com/res/hashnode/image/upload/v1646089554360/KUZErG_0r.png)

Want to search for specific song's feed, you can do that of course. Go to the browse tab and click on song and start searching. It will display you all the song that matched with your search term from Genius.com. Yes, you can get all songs with the infinite scroll that I try so hard to implement and fix the annoying bugs so please use it HEHE.

![search](https://cdn.hashnode.com/res/hashnode/image/upload/v1646089995342/avrt-K7nt.png)

### Sharing thoughts

What if you are the one who is looking to share thought? No worries, as I said before you can post your own thought and it will be publicly available to people. Just click the add thought button and it will direct you to pick a song you have in mind.

![Song search](https://cdn.hashnode.com/res/hashnode/image/upload/v1646089674544/iHTh861Cm.png)

After picking a song, you will be directed to the actual form (you have to sign up first so I can save all your thoughts later ) to dump all your thoughts and you can even have lyrics you wish to feature.

![Form](https://cdn.hashnode.com/res/hashnode/image/upload/v1646089859429/g-0wkoecc.png)

You forgot the lyrics? I got your back, there is a link that will open a link to that song's details in Genius.com and you can just get it from there. If you are done, just hit that post button and it will be posted.

![genius lyrics](https://cdn.hashnode.com/res/hashnode/image/upload/v1646089926477/oZnOD7j4H.png)

### Limitations

This app is still in progress and I will continue to develop this app after the hackathon to further improve its feature and my skills. There is still a lot of features that I couldnt develop in time, bugs to fix, and code to refactor 😣.
Some feature's are:

- Sorting and filtering searches
- Changing avatars
- Confirmation modals
- Sharing posts links
- Saving tracks and commenting on posts
- Viewing other's profile and many more

## Conclusion

To close this, I would say that maybe I will continue to make a more technical side article about my app.
Thank you very much for all of you who have stick with me till the end. I deeply appreciate your time. This hackathon have give me a lot of learning experience and most importantly a community to share.
