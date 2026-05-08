import { defineType, defineField } from 'sanity';

export const contactFormSettings = defineType({
  name: 'contactFormSettings',
  title: 'הגדרות טופס יצירת קשר',
  type: 'document',
  fields: [
    defineField({ name: 'formTitle', title: 'כותרת הטופס', type: 'string' }),
    defineField({
      name: 'topicOptions',
      title: 'אפשרויות נושא',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({ name: 'consentText', title: 'טקסט הסכמה', type: 'text' }),
    defineField({ name: 'successMessage', title: 'הודעת הצלחה', type: 'text' }),
    defineField({ name: 'errorMessage', title: 'הודעת שגיאה', type: 'text' }),
  ],
});
