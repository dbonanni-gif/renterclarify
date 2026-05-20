export function RetroBadge({ children, level = 'info', rotate = false }) {
  const levels = {
    high:   { background: 'var(--retro-red)',   color: 'var(--retro-cream)' },
    medium: { background: 'var(--retro-gold)',  color: 'var(--retro-ink)'   },
    low:    { background: 'var(--retro-green)', color: 'var(--retro-cream)' },
    info:   { background: 'var(--retro-navy)',  color: 'var(--retro-cream)' },
  };

  return (
    <span
      style={{
        ...levels[level] ?? levels.info,
        display:       'inline-block',
        fontFamily:    'var(--font-oswald), Impact, sans-serif',
        fontWeight:    '700',
        fontSize:      '0.7rem',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        padding:       '0.2rem 0.6rem',
        borderRadius:  '2px',
        transform:     rotate ? `rotate(${Math.random() > 0.5 ? '-1' : '1'}deg)` : 'none',
        border:        '1.5px solid rgba(0,0,0,0.15)',
      }}
    >
      {children}
    </span>
  );
}
