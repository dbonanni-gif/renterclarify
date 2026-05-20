export function RetroCard({ children, accent = 'navy', className = '' }) {
  const accents = {
    navy:  'var(--retro-navy)',
    red:   'var(--retro-red)',
    gold:  'var(--retro-gold)',
    green: 'var(--retro-green)',
  };

  return (
    <div
      className={`retro-card ${className}`}
      style={{ borderTop: `6px solid ${accents[accent] ?? accents.navy}` }}
    >
      {children}
    </div>
  );
}
