import { defineType, defineField } from 'sanity';

export const cta = defineType({
  name: 'cta',
  title: 'CTA',
  type: 'object',
  fields: [
    defineField({ name: 'label', title: 'Label', type: 'string' }),
    defineField({ name: 'href', title: 'Link', type: 'string' }),
    defineField({
      name: 'variant',
      title: 'Variant',
      type: 'string',
      options: { list: ['primary', 'ghost', 'gold', 'link'] },
    }),
  ],
});
