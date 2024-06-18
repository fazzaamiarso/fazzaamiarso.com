import { defineCollection, z } from "astro:content";

const ossCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    tech: z.array(z.string()),
    url: z.string().url(),
  }),
});

export const collections = {
  oss: ossCollection,
};
