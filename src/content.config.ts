import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // Not available with legacy API

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    postedDate: z.date(),
    updatedDate: z.date().optional(),
  }),
});

export const collections = { blog };
