import { defineCollection, z } from 'astro:content';

const ctaSchema = z.object({
  label: z.string(),
  href: z.string(),
  variant: z.enum(['primary', 'secondary']),
});

const cardSchema = z.object({
  title: z.string(),
  body: z.string(),
});

const faqSchema = z.object({
  question: z.string(),
  answer: z.string(),
});

const sectionSchema = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('cards'),
    heading: z.string(),
    items: z.array(cardSchema),
  }),
  z.object({
    type: z.literal('steps'),
    heading: z.string(),
    items: z.array(cardSchema),
  }),
  z.object({
    type: z.literal('faq'),
    heading: z.string(),
    items: z.array(faqSchema),
  }),
  z.object({
    type: z.literal('callout'),
    heading: z.string(),
    body: z.string(),
  }),
]);

const publicPages = defineCollection({
  type: 'data',
  schema: z.object({
    slug: z.string(),
    navLabel: z.string(),
    title: z.string(),
    description: z.string(),
    sourceDocs: z.array(z.string()),
    todo: z.string().optional(),
    hero: z.object({
      eyebrow: z.string().optional(),
      title: z.string(),
      body: z.string(),
      ctas: z.array(ctaSchema).optional(),
    }),
    sections: z.array(sectionSchema),
  }),
});

export const collections = {
  'public-pages': publicPages,
};
