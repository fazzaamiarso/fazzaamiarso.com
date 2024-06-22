import { defineCollection, z } from "astro:content";

const oss = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    tech: z.array(z.string()),
    url: z.string().url(),
  }),
});

const project = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    description: z.string(),
    publishedDate: z.date(),
    cover: z.string().url(),
    githubUrl: z.string().url(),
    siteUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
    tools: z.array(z.string()),
    role: z.string(),
    type: z.enum(["hackathon", "personal", "submission"]),
  }),
});

export const collections = {
  oss,
  project,
};
