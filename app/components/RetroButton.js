export function RetroButton({ children, variant = 'primary', className = '', ...props }) {
  const variants = {
    primary: {
      background: 'var(--retro-navy)',
      color:      'var(--retro-cream)',
      border:     '2.5px solid var(--retro-navy)',
      boxShadow:  'var(--retro-shadow)',
    },
    danger: {
      background: 'var(--retro-red)',
      color:      'var(--retro-cream)',
      border:     '2.5px solid var(--retro-red)',
      boxShadow:  '4px 4px 0px var(--retro-red)',
    },
    ghost: {
      background: 'transparent',
      color:      'var(--retro-navy)',
      border:     '2.5px solid var(--retro-navy)',
      boxShadow:  'var(--retro-shadow)',
    },
    gold: {
      background: 'var(--retro-gold)',
      color:      'var(--retro-ink)',
      border:     '2.5px solid var(--retro-gold)',
      boxShadow:  '4px 4px 0px var(--retro-gold)',
    },
  };

  return (
    <button
      className={className}
      style={{
        ...variants[variant] ?? variants.primary,
        padding:       '0.6rem 1.4rem',
        borderRadius:  '2px',
        fontFamily:    'var(--font-oswald), Impact, sans-serif',
        fontWeight:    '700',
        fontSize:      '0.95rem',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        cursor:        'pointer',
        display:       'inline-block',
        transition:    'transform 0.08s, box-shadow 0.08s',
      }}
      onMouseDown={e => {
        e.currentTarget.style.transform = 'translate(3px, 3px)';
        e.currentTarget.style.boxShadow = 'none';
      }}
      onMouseUp={e => {
        e.currentTarget.style.transform = '';
        e.currentTarget.style.boxShadow = variants[variant]?.boxShadow ?? variants.primary.boxShadow;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = '';
        e.currentTarget.style.boxShadow = variants[variant]?.boxShadow ?? variants.primary.boxShadow;
      }}
      {...props}
    >
      {children}
    </button>
  );
}
