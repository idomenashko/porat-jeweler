import { defineType, defineField } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'הגדרות האתר',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'שם האתר', type: 'string' }),
    defineField({ name: 'description', title: 'תיאור', type: 'text' }),
    defineField({ name: 'phone', title: 'טלפון', type: 'string' }),
    defineField({ name: 'whatsapp', title: 'WhatsApp URL', type: 'url' }),
    defineField({ name: 'email', title: 'דוא"ל', type: 'string' }),
    defineField({
      name: 'social',
      title: 'רשתות חברתיות',
      type: 'object',
      fields: [
        defineField({ name: 'instagram', title: 'Instagram', type: 'url' }),
        defineField({ name: 'facebook', title: 'Facebook', type: 'url' }),
        defineField({ name: 'tiktok', title: 'TikTok', type: 'url' }),
      ],
    }),
    defineField({ name: 'logo', title: 'לוגו', type: 'image' }),
    defineField({
      name: 'defaultSeo',
      title: 'SEO ברירת מחדל',
      type: 'seo',
    }),
  ],
});
