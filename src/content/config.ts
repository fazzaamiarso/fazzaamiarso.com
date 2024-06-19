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
  }),
});

export const collections = {
  oss,
  project,
};
