export function AtAGlance({ facts, stateName }) {
  if (!facts) return null;

  const items = [
    {
      label:  'Security Deposit Cap',
      value:  facts.depositCap,
      accent: 'var(--retro-navy)',
    },
    {
      label:  'Return Timeline',
      value:  facts.returnTimeline,
      accent: 'var(--retro-gold)',
    },
    {
      label:  'Notice to Enter',
      value:  facts.noticeToEnter,
      accent: 'var(--retro-red)',
    },
    {
      label:  'Late Fee Cap',
      value:  facts.lateFee,
      accent: 'var(--retro-green)',
    },
  ];

  return (
    <div style={{
      background:   'var(--retro-navy)',
      borderBottom: '3px solid var(--retro-gold)',
      padding:      '1.5rem',
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <span className="retro-stamp retro-stamp-gold" style={{ fontSize: '0.65rem' }}>
            At a Glance
          </span>
          <span style={{
            fontFamily:    'var(--font-oswald), Impact, sans-serif',
            fontWeight:    '600',
            fontSize:      '0.85rem',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color:         'var(--retro-cream)',
            opacity:       0.7,
          }}>
            {stateName} Quick Facts
          </span>
        </div>

        {/* Facts grid */}
        <div style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap:                 '0.75rem',
        }}>
          {items.map(({ label, value, accent }) => (
            <div key={label} style={{
              background:   'var(--retro-cream)',
              border:       '2px solid rgba(255,255,255,0.15)',
              borderTop:    `4px solid ${accent}`,
              borderRadius: '2px',
              padding:      '0.75rem',
            }}>
              <div style={{
                fontFamily:    'var(--font-oswald), Impact, sans-serif',
                fontWeight:    '700',
                fontSize:      '0.65rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color:         accent === 'var(--retro-gold)' ? 'var(--retro-ink)' : accent,
                marginBottom:  '0.35rem',
              }}>
                {label}
              </div>
              <div style={{
                fontFamily: 'Georgia, Cambria, serif',
                fontSize:   '0.85rem',
                lineHeight: '1.4',
                color:      'var(--retro-ink)',
                fontWeight: '600',
              }}>
                {value}
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p style={{
          fontFamily: 'Georgia, serif',
          fontSize:   '0.72rem',
          color:      'var(--retro-cream)',
          opacity:    0.5,
          margin:     '0.75rem 0 0',
        }}>
          Last verified May 2026. Laws change — always confirm with your state Attorney General.
        </p>

      </div>
    </div>
  );
}
