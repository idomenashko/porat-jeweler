import { defineType, defineField } from 'sanity';

export const faq = defineType({
  name: 'faq',
  title: 'שאלה ותשובה',
  type: 'document',
  fields: [
    defineField({ name: 'question', title: 'שאלה', type: 'string' }),
    defineField({
      name: 'answer',
      title: 'תשובה',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({ name: 'relatedPage', title: 'עמוד קשור', type: 'string' }),
    defineField({ name: 'sortOrder', title: 'סדר מיון', type: 'number' }),
    defineField({ name: 'visible', title: 'מוצג', type: 'boolean', initialValue: true }),
  ],
});
