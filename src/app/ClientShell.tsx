'use client';

// Future optimization: wrap with <LazyMotion features={domAnimation}> from "framer-motion"
// and replace all motion.div in Reveal.tsx with m.div to enable tree-shaking of Framer Motion.
// Currently using motion.div directly, which is fully functional but includes the full bundle.

import { useState } from 'react';
import { NavBar } from '@/components/layout/NavBar';
import { MobileMenu } from '@/components/layout/MobileMenu';
import { WhatsAppFab } from '@/components/layout/WhatsAppFab';
import type { ReactNode } from 'react';

export function ClientShell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <NavBar onMenuOpen={() => setMenuOpen(true)} />
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <main>{children}</main>
      <WhatsAppFab />
    </>
  );
}
