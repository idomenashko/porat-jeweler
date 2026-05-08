import { client } from './client';

export async function getSiteSettings() {
  return client.fetch(`*[_type == "siteSettings"][0]`);
}

export async function getHomepage() {
  return client.fetch(`*[_type == "homepage"][0]`);
}

export async function getNavigation() {
  return client.fetch(`*[_type == "navigation"][0]`);
}

export async function getServices() {
  return client.fetch(
    `*[_type == "service" && visible == true] | order(sortOrder asc)`
  );
}

export async function getServiceBySlug(slug: string) {
  return client.fetch(
    `*[_type == "service" && slug.current == $slug][0]`,
    { slug }
  );
}

export async function getGalleryItems(featured?: boolean) {
  const featuredFilter = featured ? `&& featured == true` : '';
  return client.fetch(
    `*[_type == "galleryItem" ${featuredFilter}] | order(sortOrder asc)`
  );
}

export async function getGalleryItemBySlug(slug: string) {
  return client.fetch(
    `*[_type == "galleryItem" && slug.current == $slug][0]`,
    { slug }
  );
}

export async function getArticles() {
  return client.fetch(
    `*[_type == "article"] | order(publishedAt desc)`
  );
}

export async function getArticleBySlug(slug: string) {
  return client.fetch(
    `*[_type == "article" && slug.current == $slug][0]`,
    { slug }
  );
}

export async function getTestimonials() {
  return client.fetch(
    `*[_type == "testimonial" && visible == true] | order(sortOrder asc)`
  );
}

export async function getFaqs() {
  return client.fetch(
    `*[_type == "faq" && visible == true] | order(sortOrder asc)`
  );
}

export async function getContactFormSettings() {
  return client.fetch(`*[_type == "contactFormSettings"][0]`);
}
