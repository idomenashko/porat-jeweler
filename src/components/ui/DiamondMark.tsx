interface DiamondMarkProps {
  size?: number;
  color?: string;
  opacity?: number;
}

export function DiamondMark({ size = 6, color = 'var(--gold)', opacity = 1 }: DiamondMarkProps) {
  return (
    <span
      style={{
        width: size,
        height: size,
        display: 'inline-block',
        background: color,
        transform: 'rotate(45deg)',
        flexShrink: 0,
        opacity,
      }}
    />
  );
}
