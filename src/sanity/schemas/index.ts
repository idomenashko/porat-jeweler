import { siteSettings } from './siteSettings';
import { homepage } from './homepage';
import { navigation } from './navigation';
import { contactFormSettings } from './contactFormSettings';
import { service } from './service';
import { galleryItem } from './galleryItem';
import { article } from './article';
import { testimonial } from './testimonial';
import { faq } from './faq';
import { lead } from './lead';
import { seo } from './objects/seo';
import { cta } from './objects/cta';

export const schemaTypes = [
  // Singletons
  siteSettings,
  homepage,
  navigation,
  contactFormSettings,
  // Documents
  service,
  galleryItem,
  article,
  testimonial,
  faq,
  lead,
  // Objects
  seo,
  cta,
];
