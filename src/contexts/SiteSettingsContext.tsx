'use client';

import { createContext, useContext } from 'react';
import type { SiteSettings } from '@/types/sanity';

// Hardcoded defaults — matches current hardcoded values in the codebase
const DEFAULTS = {
  phone: '050-000-0000',
  whatsapp: 'https://wa.me/972500000000',
  email: '',
  description: 'סטודיו פרטי לעיצוב והפקה של תכשיטים — טבעות אירוסין, יהלומים, זהב וכסף — בכל רחבי ישראל, בתיאום מראש בלבד.',
  social: {
    instagram: '#',
    facebook: '#',
    tiktok: '#',
  },
};

type MergedSettings = {
  phone: string;
  whatsapp: string;
  email: string;
  description: string;
  social: { instagram: string; facebook: string; tiktok: string };
};

const SiteSettingsContext = createContext<MergedSettings>(DEFAULTS);

interface SiteSettingsProviderProps {
  settings: SiteSettings | null;
  children: React.ReactNode;
}

export function SiteSettingsProvider({ settings, children }: SiteSettingsProviderProps): React.JSX.Element {
  const merged: MergedSettings = {
    phone: settings?.phone ?? DEFAULTS.phone,
    whatsapp: settings?.whatsapp ?? DEFAULTS.whatsapp,
    email: settings?.email ?? DEFAULTS.email,
    description: settings?.description ?? DEFAULTS.description,
    social: {
      instagram: settings?.social?.instagram ?? DEFAULTS.social.instagram,
      facebook: settings?.social?.facebook ?? DEFAULTS.social.facebook,
      tiktok: settings?.social?.tiktok ?? DEFAULTS.social.tiktok,
    },
  };

  return (
    <SiteSettingsContext.Provider value={merged}>
      {children}
    </SiteSettingsContext.Provider>
  );
}

export function useSiteSettings(): MergedSettings {
  return useContext(SiteSettingsContext);
}
