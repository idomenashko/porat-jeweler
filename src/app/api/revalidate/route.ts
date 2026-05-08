import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret');
  if (secret !== process.env.SANITY_WEBHOOK_SECRET) {
    return NextResponse.json({ error: 'Invalid secret' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { _type } = body;

    // Revalidate relevant paths based on document type
    switch (_type) {
      case 'homepage':
      case 'siteSettings':
        revalidatePath('/');
        break;
      case 'service':
        revalidatePath('/services');
        revalidatePath('/services/[slug]', 'page');
        break;
      case 'galleryItem':
        revalidatePath('/gallery');
        revalidatePath('/gallery/[slug]', 'page');
        break;
      case 'article':
        revalidatePath('/articles');
        revalidatePath('/articles/[slug]', 'page');
        break;
      default:
        revalidatePath('/');
    }

    return NextResponse.json({ revalidated: true });
  } catch {
    return NextResponse.json({ error: 'Revalidation failed' }, { status: 500 });
  }
}
