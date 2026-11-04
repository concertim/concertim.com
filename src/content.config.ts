import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    hero: z
      .object({
        kicker: z.string().optional(),
        headline: z.string(),
        sub: z.string().optional(),
      })
      .optional(),
  }),
});

// Each offering is one markdown file. Structured data (matrix row, dial
// position, one-liner, pitch) lives in front matter; long-form prose is the
// body. This keeps everything about an offering in one editable file.
const offerings = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/offerings" }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    label: z.string(),
    dial: z.enum(["you", "shared", "we"]),
    oneLiner: z.string(),
    pitch: z.string(),
    matrix: z.record(z.string(), z.string()),
  }),
});

// Notes are timestamp-free explorations of how we think about running HPC
// services. No dates on purpose: posts stay evergreen and can be edited
// without looking stale. `kicker` is the theme tag shown in the lists.
// `order` controls their position in the notes list, like offerings.
const notes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/notes" }),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    description: z.string().optional(),
    kicker: z.string().optional(),
  }),
});

export const collections = { pages, offerings, notes };