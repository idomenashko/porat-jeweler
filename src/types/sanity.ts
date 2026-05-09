export type SanityImage = {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
};

export type SanityBlock = {
  _type: 'block';
  _key: string;
  style?: string;
  children?: Array<{
    _type: 'span';
    _key: string;
    text?: string;
    marks?: string[];
  }>;
  markDefs?: Array<{
    _type: string;
    _key: string;
    href?: string;
  }>;
};

export type Cta = {
  label?: string;
  href?: string;
};

export type Seo = {
  title?: string;
  description?: string;
  image?: SanityImage;
};

export type SiteSettings = {
  _id?: string;
  _type?: 'siteSettings';
  title?: string;
  description?: string;
  phone?: string;
  whatsapp?: string;
  email?: string;
  social?: {
    instagram?: string;
    facebook?: string;
    tiktok?: string;
  };
  logo?: SanityImage;
  defaultSeo?: Seo;
};

export type Service = {
  _id?: string;
  _type?: 'service';
  title?: string;
  slug?: { current: string };
  englishTitle?: string;
  number?: string;
  description?: string;
  content?: SanityBlock[];
  images?: SanityImage[];
  cta?: Cta;
  seo?: Seo;
  sortOrder?: number;
  visible?: boolean;
};

export type GalleryItem = {
  _id?: string;
  _type?: 'galleryItem';
  title?: string;
  slug?: { current: string };
  category?: string;
  images?: SanityImage[];
  materials?: string;
  description?: string;
  featured?: boolean;
  seo?: Seo;
  sortOrder?: number;
};

export type Article = {
  _id?: string;
  _type?: 'article';
  title?: string;
  slug?: { current: string };
  excerpt?: string;
  body?: Array<SanityBlock | SanityImage>;
  image?: SanityImage;
  category?: string;
  readTime?: string;
  seo?: Seo;
  publishedAt?: string;
};

export type Testimonial = {
  _id?: string;
  _type?: 'testimonial';
  name?: string;
  initials?: string;
  role?: string;
  text?: string;
  rating?: number;
  sortOrder?: number;
  visible?: boolean;
};

export type Faq = {
  _id?: string;
  _type?: 'faq';
  question?: string;
  answer?: SanityBlock[];
  relatedPage?: string;
  sortOrder?: number;
  visible?: boolean;
};

export type ContactFormSettings = {
  _id?: string;
  _type?: 'contactFormSettings';
  formTitle?: string;
  topicOptions?: string[];
  consentText?: string;
  successMessage?: string;
  errorMessage?: string;
};

export type NavLink = {
  label?: string;
  href?: string;
  show?: boolean;
};

export type Navigation = {
  _id?: string;
  _type?: 'navigation';
  headerLinks?: NavLink[];
};

export type Homepage = {
  _id?: string;
  _type?: 'homepage';
  hero?: {
    headline?: string;
    subheadline?: string;
    image?: SanityImage;
    primaryCta?: Cta;
    secondaryCta?: Cta;
    show?: boolean;
  };
  intro?: {
    headline?: string;
    body?: string;
    show?: boolean;
  };
  services?: {
    headline?: string;
    show?: boolean;
  };
  seo?: Seo;
};
