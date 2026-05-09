export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      id="sanity-studio-root"
      dir="ltr"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        isolation: 'isolate',
      }}
    >
      {children}
    </div>
  );
}
