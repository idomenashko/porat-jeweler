import { defineType, defineField } from 'sanity';

export const navigation = defineType({
  name: 'navigation',
  title: 'ניווט',
  type: 'document',
  fields: [
    defineField({
      name: 'headerLinks',
      title: 'קישורי תפריט עליון',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'label', title: 'כותרת', type: 'string' }),
          defineField({ name: 'href', title: 'קישור', type: 'string' }),
          defineField({ name: 'show', title: 'הצג', type: 'boolean', initialValue: true }),
        ],
      }],
    }),
  ],
});
