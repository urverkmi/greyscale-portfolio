import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const imageSchema = z.object({
  src: z.string(),
  alt: z.string().default(""),
  caption: z.string().optional(),
  fullHeight: z.boolean().default(false),
});

const blockSchema = z.object({
  html: z.string().optional(),
  image: imageSchema.optional(),
});

const sectionSchema = z.object({
  title: z.string(),
  variant: z.enum(["rail", "circle"]).default("rail"),
  accent: z.string().default("#000"),
  dark: z.boolean().default(false),
  blocks: z.array(blockSchema).default([]),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    heroImage: z.string(),
    sponsor: z
      .object({
        name: z.string(),
        url: z.string().optional(),
      })
      .optional(),
    intro: z.string(),
    badge: z.string().optional(),
    sections: z.array(sectionSchema).default([]),
  }),
});

export const collections = { projects };
