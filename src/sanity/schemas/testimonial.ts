import { defineType, defineField } from 'sanity';

export const testimonial = defineType({
  name: 'testimonial',
  title: 'המלצה',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'שם', type: 'string' }),
    defineField({ name: 'initials', title: 'ראשי תיבות', type: 'string' }),
    defineField({ name: 'role', title: 'תפקיד / נושא', type: 'string' }),
    defineField({ name: 'text', title: 'טקסט', type: 'text' }),
    defineField({ name: 'rating', title: 'דירוג', type: 'number', initialValue: 5 }),
    defineField({ name: 'sortOrder', title: 'סדר מיון', type: 'number' }),
    defineField({ name: 'visible', title: 'מוצג', type: 'boolean', initialValue: true }),
  ],
});
