import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const faq = z.object({ q: z.string(), a: z.string() });

const paket = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/paket' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(200),
    cover: z.string().optional(),
    alt: z.string().optional(),
    category: z.string(),
    location: z.string().optional(),
    duration: z.string(),
    participantRange: z.string(),
    priceFrom: z.number().nullable().default(null),
    priceUnit: z.string().default('per peserta'),
    suitableFor: z.array(z.string()).default([]),
    activities: z.array(z.string()).default([]),
    facilities: z.array(z.string()).default([]),
    notIncluded: z.array(z.string()).default([]),
    notes: z.array(z.string()).default([]),
    faqs: z.array(faq).default([]),
    relatedWisata: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    published: z.boolean().default(true),
    updatedDate: z.coerce.date().optional(),
  }),
});

const wisata = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/wisata' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(200),
    cover: z.string().optional(),
    alt: z.string().optional(),
    area: z.string(),
    location: z
      .object({
        address: z.string().optional(),
        locality: z.string().optional(),
        region: z.string().optional(),
        latitude: z.number().nullable().default(null),
        longitude: z.number().nullable().default(null),
      })
      .default({ latitude: null, longitude: null }),
    activities: z.array(z.string()).default([]),
    facilities: z.array(z.string()).default([]),
    access: z.string().optional(),
    openingHours: z.string().nullable().default(null),
    faqs: z.array(faq).default([]),
    featured: z.boolean().default(false),
    published: z.boolean().default(true),
    updatedDate: z.coerce.date().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(200),
    cover: z.string().optional(),
    alt: z.string().optional(),
    author: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().nullable().default(null),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    readingTime: z.number().optional(),
    relatedPaket: z.array(z.string()).default([]),
    relatedWisata: z.array(z.string()).default([]),
    sources: z.array(z.object({ title: z.string(), url: z.string().url() })).default([]),
    featured: z.boolean().default(false),
    published: z.boolean().default(true),
  }),
});

export const collections = { paket, wisata, blog };
