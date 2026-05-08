import type { MetadataRoute } from 'next';

const BASE_URL = 'https://porat-jeweler.co.il';

const SERVICE_SLUGS = [
  'bespoke-engagement',
  'wedding-bands',
  'diamonds',
  'custom-jewelry',
  'gold-silver',
  'stone-setting',
  'engraving',
  'restoration',
  'buy-sell',
  'ready-to-wear',
];

const GALLERY_SLUGS = [
  'solitaire-eden',
  'trois-pierres',
  'avigail-set',
  'halo-infinity',
  'eternity-band',
  'sketch-42',
];

const ARTICLE_SLUGS = [
  'how-to-choose-engagement-ring',
  'gold-14k-vs-18k',
  'how-to-choose-diamond',
  'custom-jewelry-process',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    '/',
    '/about',
    '/services',
    '/engagement-rings',
    '/wedding-rings',
    '/custom-jewelry',
    '/diamonds',
    '/gallery',
    '/process',
    '/articles',
    '/contact',
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = SERVICE_SLUGS.map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  const galleryRoutes: MetadataRoute.Sitemap = GALLERY_SLUGS.map((slug) => ({
    url: `${BASE_URL}/gallery/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  const articleRoutes: MetadataRoute.Sitemap = ARTICLE_SLUGS.map((slug) => ({
    url: `${BASE_URL}/articles/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...galleryRoutes, ...articleRoutes];
}
