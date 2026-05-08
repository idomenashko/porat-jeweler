import { defineType, defineField } from 'sanity';

export const homepage = defineType({
  name: 'homepage',
  title: 'דף הבית',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({ name: 'headline', title: 'כותרת ראשית', type: 'string' }),
        defineField({ name: 'subheadline', title: 'תת-כותרת', type: 'text' }),
        defineField({ name: 'image', title: 'תמונה', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'primaryCta', title: 'CTA ראשי', type: 'cta' }),
        defineField({ name: 'secondaryCta', title: 'CTA משני', type: 'cta' }),
        defineField({ name: 'show', title: 'הצג', type: 'boolean', initialValue: true }),
      ],
    }),
    defineField({
      name: 'intro',
      title: 'Intro Section',
      type: 'object',
      fields: [
        defineField({ name: 'headline', title: 'כותרת', type: 'string' }),
        defineField({ name: 'body', title: 'גוף הטקסט', type: 'text' }),
        defineField({ name: 'show', title: 'הצג', type: 'boolean', initialValue: true }),
      ],
    }),
    defineField({
      name: 'services',
      title: 'Services Section',
      type: 'object',
      fields: [
        defineField({ name: 'headline', title: 'כותרת', type: 'string' }),
        defineField({ name: 'show', title: 'הצג', type: 'boolean', initialValue: true }),
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
});
