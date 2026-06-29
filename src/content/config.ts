import { defineCollection, z } from 'astro:content';

const notebook = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    category: z.string(),
    cover: z.string().optional(),
    lang: z.enum(['en', 'es']).default('en'),
    draft: z.boolean().default(false),
    // Syndication links — where else this piece lives
    substackUrl: z.string().url().optional(),
    mediumUrl: z.string().url().optional(),
    linkedinUrl: z.string().url().optional(),
  }),
});

export const collections = { notebook };
