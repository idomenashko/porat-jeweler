interface SectionEyebrowProps {
  en: string;
  he?: string;
  align?: 'right' | 'center' | 'left';
}

export function SectionEyebrow({ en, he, align = 'right' }: SectionEyebrowProps) {
  return (
    <div
      style={{
        textAlign: align,
        marginBottom: 14,
        display: 'flex',
        alignItems: 'center',
        justifyContent: align === 'center' ? 'center' : 'flex-start',
        gap: 12,
      }}
    >
      <span
        style={{
          width: 6,
          height: 6,
          display: 'inline-block',
          background: 'var(--gold)',
          transform: 'rotate(45deg)',
        }}
      />
      <span
        style={{
          fontFamily: 'var(--serif-en)',
          fontStyle: 'italic',
          fontWeight: 400,
          letterSpacing: '.25em',
          textTransform: 'uppercase' as const,
          fontSize: 12,
          color: 'var(--gold)',
        }}
      >
        {en}
      </span>
      {he && (
        <>
          <span style={{ width: 1, height: 12, background: 'var(--line-deep)' }} />
          <span
            style={{
              fontFamily: 'var(--sans-he)',
              fontWeight: 300,
              letterSpacing: '.42em',
              fontSize: 11,
              color: 'var(--gold-deep)',
            }}
          >
            {he}
          </span>
        </>
      )}
    </div>
  );
}
