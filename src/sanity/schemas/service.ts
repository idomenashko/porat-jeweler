import { defineType, defineField } from 'sanity';

export const service = defineType({
  name: 'service',
  title: 'שירות',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'שם השירות (עברית)', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'englishTitle', title: 'שם השירות (אנגלית)', type: 'string' }),
    defineField({ name: 'number', title: 'מספר', type: 'string' }),
    defineField({ name: 'description', title: 'תיאור קצר', type: 'text' }),
    defineField({
      name: 'content',
      title: 'תוכן מלא',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({ name: 'images', title: 'תמונות', type: 'array', of: [{ type: 'image', options: { hotspot: true } }] }),
    defineField({ name: 'cta', title: 'CTA', type: 'cta' }),
    defineField({ name: 'seo', title: 'SEO', type: 'seo' }),
    defineField({ name: 'sortOrder', title: 'סדר מיון', type: 'number' }),
    defineField({ name: 'visible', title: 'מוצג', type: 'boolean', initialValue: true }),
  ],
  orderings: [{ title: 'Sort Order', name: 'sortOrderAsc', by: [{ field: 'sortOrder', direction: 'asc' }] }],
});
