import { defineType, defineField } from 'sanity';

export const galleryItem = defineType({
  name: 'galleryItem',
  title: 'פריט גלריה',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'שם', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'category', title: 'קטגוריה', type: 'string' }),
    defineField({ name: 'images', title: 'תמונות', type: 'array', of: [{ type: 'image', options: { hotspot: true } }] }),
    defineField({ name: 'materials', title: 'חומרים', type: 'string' }),
    defineField({ name: 'description', title: 'תיאור', type: 'text' }),
    defineField({ name: 'featured', title: 'מוצג בדף הבית', type: 'boolean', initialValue: false }),
    defineField({ name: 'seo', title: 'SEO', type: 'seo' }),
    defineField({ name: 'sortOrder', title: 'סדר מיון', type: 'number' }),
  ],
});
