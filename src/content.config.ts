import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const imageSchema = z.object({
  src: z.string(),
  alt: z.string().default(""),
  caption: z.string().optional(),
  fullHeight: z.boolean().default(false),
  // relative share of the stack's height when this image is part of a
  // block's `images` list (see blockSchema below) — e.g. 40/60 vs 1/1.5,
  // any positive numbers work since they're used as flex proportions, not
  // required to sum to 100. Ignored for a lone `image`.
  sizePercent: z.number().positive().optional(),
});

const blockSchema = z.object({
  html: z.string().optional(),
  image: imageSchema.optional(),
  // multiple images stacked vertically within this one block/column (as
  // opposed to `image`, a single image filling the whole column)
  images: z.array(imageSchema).optional(),
});

const sectionSchema = z.object({
  title: z.string(),
  variant: z.enum(["rail", "circle"]).default("rail"),
  accent: z.string().default("#000"),
  // `dark` alone still picks the old fixed #454545 (see ProjectSection's
  // .section.dark) and switches text to white — `background` overrides
  // that with any CSS color, e.g. to match a section's own image (dark
  // still controls the white text switch, since an arbitrary background
  // could be light or dark).
  dark: z.boolean().default(false),
  background: z.string().optional(),
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
