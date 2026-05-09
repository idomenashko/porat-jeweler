'use client';

import dynamic from 'next/dynamic';

const Studio = dynamic(() => import('./StudioInner'), { ssr: false });

export default function StudioClient() {
  return <Studio />;
}
