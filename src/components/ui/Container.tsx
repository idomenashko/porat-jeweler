import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  narrow?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function Container({ children, narrow, className, style }: ContainerProps) {
  return (
    <div
      className={className}
      style={{
        maxWidth: narrow ? 980 : 1320,
        margin: '0 auto',
        paddingInline: 'clamp(20px, 4vw, 64px)',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
