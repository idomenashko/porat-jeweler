import { defineType, defineField } from 'sanity';

export const lead = defineType({
  name: 'lead',
  title: 'פניות',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'שם', type: 'string', readOnly: true }),
    defineField({ name: 'phone', title: 'טלפון', type: 'string', readOnly: true }),
    defineField({ name: 'topic', title: 'נושא', type: 'string', readOnly: true }),
    defineField({ name: 'message', title: 'הודעה', type: 'text', readOnly: true }),
    defineField({ name: 'status', title: 'סטטוס', type: 'string', options: { list: ['new', 'contacted', 'closed'] }, initialValue: 'new' }),
    defineField({ name: 'submittedAt', title: 'נשלח בתאריך', type: 'datetime', readOnly: true }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'phone' },
  },
});
