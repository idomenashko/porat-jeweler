import { client } from './client';
import type {
  SiteSettings,
  Homepage,
  Navigation,
  Service,
  GalleryItem,
  Article,
  Testimonial,
  Faq,
  ContactFormSettings,
} from '@/types/sanity';

export async function getSiteSettings(): Promise<SiteSettings | null> {
  return client.fetch<SiteSettings | null>(`*[_type == "siteSettings"][0]`);
}

export async function getHomepage(): Promise<Homepage | null> {
  return client.fetch<Homepage | null>(`*[_type == "homepage"][0]`);
}

export async function getNavigation(): Promise<Navigation | null> {
  return client.fetch<Navigation | null>(`*[_type == "navigation"][0]`);
}

export async function getServices(): Promise<Service[]> {
  return client.fetch<Service[]>(
    `*[_type == "service" && visible == true] | order(sortOrder asc)`
  );
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  return client.fetch<Service | null>(
    `*[_type == "service" && slug.current == $slug][0]`,
    { slug }
  );
}

export async function getGalleryItems(featured?: boolean): Promise<GalleryItem[]> {
  const featuredFilter = featured ? `&& featured == true` : '';
  return client.fetch<GalleryItem[]>(
    `*[_type == "galleryItem" ${featuredFilter}] | order(sortOrder asc)`
  );
}

export async function getGalleryItemBySlug(slug: string): Promise<GalleryItem | null> {
  return client.fetch<GalleryItem | null>(
    `*[_type == "galleryItem" && slug.current == $slug][0]`,
    { slug }
  );
}

export async function getArticles(): Promise<Article[]> {
  return client.fetch<Article[]>(
    `*[_type == "article"] | order(publishedAt desc)`
  );
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  return client.fetch<Article | null>(
    `*[_type == "article" && slug.current == $slug][0]`,
    { slug }
  );
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return client.fetch<Testimonial[]>(
    `*[_type == "testimonial" && visible == true] | order(sortOrder asc)`
  );
}

export async function getFaqs(): Promise<Faq[]> {
  return client.fetch<Faq[]>(
    `*[_type == "faq" && visible == true] | order(sortOrder asc)`
  );
}

export async function getContactFormSettings(): Promise<ContactFormSettings | null> {
  return client.fetch<ContactFormSettings | null>(`*[_type == "contactFormSettings"][0]`);
}
