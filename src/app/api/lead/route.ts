import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const LeadSchema = z.object({
  name: z.string().min(2, 'שם חייב להכיל לפחות 2 תווים'),
  phone: z.string().min(9, 'מספר טלפון לא תקין'),
  topic: z.string(),
  msg: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = LeadSchema.parse(body);

    // Write to Sanity if token available
    if (process.env.SANITY_API_TOKEN && process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== 'placeholder') {
      const { writeClient } = await import('@/sanity/client');
      await writeClient.create({
        _type: 'lead',
        name: data.name,
        phone: data.phone,
        topic: data.topic,
        message: data.msg || '',
        status: 'new',
        submittedAt: new Date().toISOString(),
      });
    } else {
      console.log('[LEAD]', new Date().toISOString(), data);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues }, { status: 400 });
    }
    return NextResponse.json({ error: 'שגיאה פנימית' }, { status: 500 });
  }
}
