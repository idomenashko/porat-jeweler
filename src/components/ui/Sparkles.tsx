'use client';

import { useMemo } from 'react';

interface SparkleItem {
  x: number;
  y: number;
  d: number;
  delay: number;
  dur: number;
}

interface SparklesProps {
  count?: number;
}

export function Sparkles({ count = 14 }: SparklesProps) {
  const items = useMemo<SparkleItem[]>(
    () =>
      Array.from({ length: count }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        d: 2 + Math.random() * 6,
        delay: Math.random() * 4,
        dur: 3 + Math.random() * 4,
      })),
    [count]
  );

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 1,
      }}
    >
      {items.map((s, i) => (
        <span
          key={i}
          style={{
            position: 'absolute',
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.d,
            height: s.d,
            background: 'var(--gold-glow)',
            transform: 'rotate(45deg)',
            opacity: 0,
            animation: `sparkle ${s.dur}s ease-in-out ${s.delay}s infinite`,
            boxShadow: '0 0 6px rgba(216,182,128,.6)',
          }}
        />
      ))}
    </div>
  );
}
