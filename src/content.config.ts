import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    categories: z.array(z.string()).default([]),
    description: z.string().optional(),
    draft: z.boolean().default(false),
    // Optional: set this when migrating an old WordPress URL so it 301s correctly.
    originalSlug: z.string().optional(),
  }),
});

export const collections = { posts };
