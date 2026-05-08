import { defineType, defineField } from 'sanity';

export const article = defineType({
  name: 'article',
  title: 'מאמר',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'כותרת', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'excerpt', title: 'תקציר', type: 'text' }),
    defineField({
      name: 'body',
      title: 'גוף המאמר',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }],
    }),
    defineField({ name: 'image', title: 'תמונת נושא', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'category', title: 'קטגוריה', type: 'string' }),
    defineField({ name: 'readTime', title: 'זמן קריאה', type: 'string' }),
    defineField({ name: 'seo', title: 'SEO', type: 'seo' }),
    defineField({ name: 'publishedAt', title: 'תאריך פרסום', type: 'datetime' }),
  ],
});
