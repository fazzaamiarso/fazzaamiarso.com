import { defineCollection, reference, z } from "astro:content";

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
    githubUrl: z.string().url().optional(),
    siteUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
    tools: z.array(z.string()),
    role: z.string(),
    type: z.enum(["hackathon", "personal", "submission", "freelance", "work"]),
    scope: z.string().optional(),
    thumbnail: z.string().url(),
    relatedProjects: z.array(reference("project")).optional(),
  }),
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    publishedDate: z.date(),
    updatedDate: z.date(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  oss,
  project,
  blog,
};
