// Shared design tokens & components for FLAMAX deck.
// Tokens are MUTABLE — tweaks panel rewrites them and triggers a re-render
// via a root-level key bump in App. Components must read THEME.* at render time.

const THEME = window.THEME = window.THEME || {
  mood: 'industrial',
  density: 'editorial',
  accent: 'block',
  COLORS: { ...MOOD_PRESETS.industrial.colors },
  TYPE_SCALE: { ...DENSITY_PRESETS.editorial.typeScale },
  SPACING: { ...DENSITY_PRESETS.editorial.spacing }
};

function applyTheme({ mood, density, accent } = {}) {
  if (mood && MOOD_PRESETS[mood]) {
    THEME.mood = mood;
    Object.assign(THEME.COLORS, MOOD_PRESETS[mood].colors);
  }
  if (density && DENSITY_PRESETS[density]) {
    THEME.density = density;
    Object.assign(THEME.TYPE_SCALE, DENSITY_PRESETS[density].typeScale);
    Object.assign(THEME.SPACING, DENSITY_PRESETS[density].spacing);
  }
  if (accent) THEME.accent = accent;
}
window.applyTheme = applyTheme;

// Convenience getters — components destructure these at the top of each render.
const C = () => THEME.COLORS;
const T = () => THEME.TYPE_SCALE;
const S = () => THEME.SPACING;

// =========================================================================
// Accent primitives — vary visual vocabulary by THEME.accent
// =========================================================================

// A solid bar / hairline rule / diagonal wedge — used as the slide accent stripe.
function AccentStripe({ orient = 'vertical', color, length = '100%', thickness = 8 }) {
  const c = color || C().red;
  const a = THEME.accent;
  const isV = orient === 'vertical';
  if (a === 'hairline') {
    return (
      <div style={{
        position: 'absolute', top: 0, left: 0,
        width: isV ? 2 : length,
        height: isV ? length : 2,
        background: c
      }} />);

  }
  if (a === 'cut') {
    return (
      <div style={{
        position: 'absolute', top: 0, left: 0,
        width: isV ? thickness * 2.4 : length,
        height: isV ? length : thickness * 2.4,
        background: c,
        clipPath: isV ?
        'polygon(0 0, 100% 0, 30% 100%, 0 100%)' :
        'polygon(0 0, 100% 0, 100% 30%, 0 100%)'
      }} />);

  }
  // block (default)
  return (
    <div style={{
      position: 'absolute', top: 0, left: 0,
      width: isV ? thickness : length,
      height: isV ? length : thickness,
      background: c
    }} />);

}

// An accent dot / open ring / triangle — used inline (e.g. wordmark, eyebrow).
function AccentMark({ color, size = 8, style }) {
  const c = color || C().red;
  const a = THEME.accent;
  if (a === 'hairline') {
    return <span style={{
      display: 'inline-block', width: size, height: size,
      border: `1.5px solid ${c}`, borderRadius: '50%',
      background: 'transparent', ...style
    }} />;
  }
  if (a === 'cut') {
    return <span style={{
      display: 'inline-block', width: 0, height: 0,
      borderLeft: `${size / 2}px solid transparent`,
      borderRight: `${size / 2}px solid transparent`,
      borderBottom: `${size}px solid ${c}`,
      ...style
    }} />;
  }
  return <span style={{
    display: 'inline-block', width: size, height: size,
    background: c, ...style
  }} />;
}

// An accent eyebrow lead-in (the short red bar before mono text)
function AccentLead({ color }) {
  const c = color || C().red;
  const a = THEME.accent;
  if (a === 'hairline') {
    return <span style={{
      display: 'inline-block', width: 36, height: 0,
      borderTop: `1px solid ${c}`
    }} />;
  }
  if (a === 'cut') {
    return <span style={{
      display: 'inline-block', width: 28, height: 10,
      background: c,
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 30% 100%)'
    }} />;
  }
  return <span style={{
    display: 'inline-block', width: 28, height: 2, background: c
  }} />;
}

// =========================================================================
// Building blocks
// =========================================================================

function SlideFrame({ children, bg, color, style }) {
  const COLORS = C(),SPACING = S();
  return (
    <div style={{
      width: '100%', height: '100%',
      background: bg ?? COLORS.paper, color: color ?? COLORS.ink,
      paddingTop: SPACING.paddingTop,
      paddingBottom: SPACING.paddingBottom,
      paddingLeft: SPACING.paddingX,
      paddingRight: SPACING.paddingX,
      display: 'flex', flexDirection: 'column',
      fontFamily: '"Inter", system-ui, sans-serif',
      letterSpacing: '-0.005em',
      position: 'relative',
      overflow: 'hidden',
      ...style
    }}>
      {children}
    </div>);

}

function HeaderBar({ section, number, total, color }) {
  const COLORS = C(),TYPE_SCALE = T(),SPACING = S();
  const c = color ?? COLORS.ink;
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      fontFamily: '"JetBrains Mono", ui-monospace, monospace',
      fontSize: TYPE_SCALE.micro,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: c, opacity: 0.7,
      marginBottom: SPACING.titleGap
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <FlamaxMark color={c} />
        <span style={{ opacity: 0.55 }}>/</span>
        <span>{section}</span>
      </div>
      <div>{String(number).padStart(2, '0')} / {String(total).padStart(2, '0')}</div>
    </div>);

}

function FlamaxMark({ color, size = 24 }) {
  const COLORS = C();
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 0,
      fontFamily: '"Inter Tight", "Inter", sans-serif',
      fontWeight: 800,
      fontSize: size,
      letterSpacing: '0.18em',
      color: color ?? COLORS.ink
    }}>
      <span>FLAMAX</span>
      <AccentMark color={COLORS.red} size={8} style={{ marginLeft: 6 }} />
    </div>);

}

function BigTitle({ children, color, size, style }) {
  const COLORS = C(),TYPE_SCALE = T();
  return (
    <h1 style={{
      fontFamily: '"Inter Tight", "Inter", sans-serif',
      fontWeight: 700,
      fontSize: size ?? TYPE_SCALE.title,
      lineHeight: 1.02,
      letterSpacing: '-0.025em',
      color: color ?? COLORS.ink,
      margin: 0,
      textWrap: 'balance',
      ...style
    }}>
      {children}
    </h1>);

}

function Eyebrow({ children, color }) {
  const COLORS = C(),TYPE_SCALE = T();
  const c = color ?? COLORS.red;
  return (
    <div style={{
      fontFamily: '"JetBrains Mono", ui-monospace, monospace',
      fontSize: TYPE_SCALE.micro,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: c,
      marginBottom: 24,
      display: 'flex', alignItems: 'center', gap: 14
    }}>
      <AccentLead color={c} />
      {children}
    </div>);

}

function Placeholder({ label, ratio = '4/3', tone = 'dark', style }) {
  const COLORS = C(),TYPE_SCALE = T();
  const dark = tone === 'dark';
  return (
    <div style={{
      aspectRatio: ratio,
      background: dark ? COLORS.ink : COLORS.paperDeep,
      backgroundImage: dark ?
      'repeating-linear-gradient(135deg, rgba(255,255,255,0.04) 0 2px, transparent 2px 14px)' :
      'repeating-linear-gradient(135deg, rgba(0,0,0,0.05) 0 2px, transparent 2px 14px)',
      color: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.55)',
      display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-start',
      padding: 24,
      fontFamily: '"JetBrains Mono", ui-monospace, monospace',
      fontSize: TYPE_SCALE.micro,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      ...style
    }}>
      <span>// {label}</span>
    </div>);

}

// More realistic CSS rendering of a cylindrical bolted-steel tank.
// Avoids the schematic flat-line look — uses gradients to suggest cylinder
// volume, horizontal banding for plate courses, vertical seams, a domed cap,
// a ladder, and a foundation shadow. Still a stylized illustration, not a photo.
function TankDiagram({ color, accent, width = 520, labels = true }) {
  const COLORS = C();
  const stroke = color ?? COLORS.ink;
  const acc = accent ?? COLORS.red;
  const onDark = stroke !== COLORS.ink;

  const W = width;
  const H = W * 1.05;
  const tankW = W * 0.62;
  const tankH = H * 0.7;
  const tankX = (W - tankW) / 2;
  const tankY = H * 0.16;
  const courses = 5; // horizontal plate courses

  // Cylinder shading — light edges, darker center? No, opposite for a metallic
  // matte cylinder under overcast sky: highlight band slightly off-center.
  const cylinderGrad = onDark ?
  `linear-gradient(90deg,
        rgba(255,255,255,0.05) 0%,
        rgba(255,255,255,0.18) 35%,
        rgba(255,255,255,0.08) 55%,
        rgba(0,0,0,0.20) 100%)` :
  `linear-gradient(90deg,
        rgba(0,0,0,0.18) 0%,
        rgba(255,255,255,0.55) 35%,
        rgba(255,255,255,0.20) 55%,
        rgba(0,0,0,0.28) 100%)`;
  const baseFill = onDark ? '#3a3a3a' : '#bcbcbc';

  return (
    <div style={{
      position: 'relative',
      width: W, height: H,
      fontFamily: '"Inter Tight", sans-serif'
    }}>
      {/* horizon ground shadow */}
      <div style={{
        position: 'absolute',
        left: tankX - 20, right: W - (tankX + tankW) - 20,
        bottom: H - (tankY + tankH) - 8,
        height: 24,
        background: `radial-gradient(ellipse at 50% 0%, ${onDark ? 'rgba(0,0,0,0.55)' : 'rgba(0,0,0,0.28)'} 0%, transparent 70%)`,
        filter: 'blur(2px)'
      }} />

      {/* domed roof — stretched ellipse with shadow underside */}
      <div style={{
        position: 'absolute',
        left: tankX, top: tankY - 24,
        width: tankW, height: 56,
        background: baseFill,
        backgroundImage: cylinderGrad,
        borderRadius: '50%',
        boxShadow: onDark ?
        'inset 0 -6px 12px rgba(0,0,0,0.5)' :
        'inset 0 -8px 14px rgba(0,0,0,0.25)'
      }} />

      {/* roof apex vent / ladder finial */}
      <div style={{
        position: 'absolute',
        left: tankX + tankW * 0.5 - 4,
        top: tankY - 44,
        width: 8, height: 26,
        background: stroke
      }} />
      <div style={{
        position: 'absolute',
        left: tankX + tankW * 0.5 - 9,
        top: tankY - 50,
        width: 18, height: 8,
        background: acc
      }} />

      {/* tank body */}
      <div style={{
        position: 'absolute',
        left: tankX, top: tankY,
        width: tankW, height: tankH,
        background: baseFill,
        backgroundImage: cylinderGrad,
        borderTop: `1px solid ${onDark ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.25)'}`,
        overflow: 'hidden'
      }}>
        {/* horizontal plate courses (banding) */}
        {Array.from({ length: courses }).map((_, i) =>
        <div key={'h' + i} style={{
          position: 'absolute', left: 0, right: 0,
          top: `${(i + 1) / courses * 100}%`,
          height: 2,
          background: onDark ?
          'linear-gradient(90deg, rgba(0,0,0,0.45), rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.55))' :
          'linear-gradient(90deg, rgba(0,0,0,0.35), rgba(0,0,0,0.10) 50%, rgba(0,0,0,0.40))',
          boxShadow: onDark ?
          '0 1px 0 rgba(255,255,255,0.10)' :
          '0 1px 0 rgba(255,255,255,0.55)'
        }} />
        )}
        {/* rivet line along each course top */}
        {Array.from({ length: courses }).map((_, i) =>
        <div key={'r' + i} style={{
          position: 'absolute', left: 0, right: 0,
          top: `calc(${(i + 1) / courses * 100}% - 6px)`,
          height: 2,
          backgroundImage: `radial-gradient(circle, ${onDark ? 'rgba(0,0,0,0.6)' : 'rgba(0,0,0,0.45)'} 0 1px, transparent 1.5px)`,
          backgroundSize: '12px 2px',
          backgroundRepeat: 'repeat-x',
          opacity: 0.7
        }} />
        )}
        {/* vertical seam */}
        <div style={{
          position: 'absolute', left: '38%', top: 0, bottom: 0, width: 1,
          background: onDark ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.22)'
        }} />
        <div style={{
          position: 'absolute', left: '72%', top: 0, bottom: 0, width: 1,
          background: onDark ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.22)'
        }} />

        {/* service ladder, right side */}
        <div style={{
          position: 'absolute',
          right: '14%', top: '4%', bottom: '4%',
          width: 14
        }}>
          <div style={{
            position: 'absolute', left: 0, top: 0, bottom: 0, width: 2,
            background: stroke, opacity: onDark ? 0.7 : 0.85
          }} />
          <div style={{
            position: 'absolute', right: 0, top: 0, bottom: 0, width: 2,
            background: stroke, opacity: onDark ? 0.7 : 0.85
          }} />
          {Array.from({ length: 14 }).map((_, i) =>
          <div key={i} style={{
            position: 'absolute', left: 0, right: 0,
            top: `${i / 14 * 100}%`,
            height: 1.5, background: stroke,
            opacity: onDark ? 0.55 : 0.7
          }} />
          )}
        </div>

        {/* outlet pipe stub, lower left */}
        <div style={{
          position: 'absolute', left: -16, bottom: '12%',
          width: 28, height: 18,
          background: stroke,
          borderRight: `2px solid ${acc}`
        }} />
        <div style={{
          position: 'absolute', left: -2, bottom: 'calc(12% + 5px)',
          width: 4, height: 8,
          background: acc
        }} />
      </div>

      {/* foundation slab */}
      <div style={{
        position: 'absolute',
        left: tankX - 10, top: tankY + tankH,
        width: tankW + 20, height: 14,
        background: onDark ? '#1f1f1f' : '#a4a09a',
        borderTop: `1px solid ${onDark ? 'rgba(0,0,0,0.6)' : 'rgba(0,0,0,0.3)'}`
      }} />
      <div style={{
        position: 'absolute',
        left: tankX - 24, top: tankY + tankH + 14,
        width: tankW + 48, height: 6,
        background: onDark ? '#141414' : '#8a857d'
      }} />

      {/* labels */}
      {labels &&
      <React.Fragment>
          <div style={{
          position: 'absolute',
          left: 0, top: tankY + tankH - 14,
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: 22, color: stroke, opacity: 0.7,
          display: 'flex', alignItems: 'center', gap: 10
        }}>
            <span>Ø base</span>
            <span style={{ width: 22, height: 1, background: stroke, opacity: 0.5 }} />
          </div>
          <div style={{
          position: 'absolute',
          left: tankX - 60, top: tankY + tankH * 0.88 - 30,
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: 20, color: acc,
          textTransform: 'lowercase'
        }}>outlet

        </div>
        </React.Fragment>
      }
    </div>);

}

function Rule({ color, width = '100%', height = 1, style }) {
  const COLORS = C();
  return <div style={{ width, height, background: color ?? COLORS.rule, ...style }} />;
}

function SpecRow({ label, value, color }) {
  const COLORS = C(),TYPE_SCALE = T();
  const onDark = color === COLORS.white;
  return (
    <div style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
      paddingTop: 18, paddingBottom: 18,
      borderTop: `1px solid ${onDark ? COLORS.ruleLight : COLORS.rule}`,
      fontSize: TYPE_SCALE.body,
      color: color ?? COLORS.ink
    }}>
      <span style={{
        fontFamily: '"JetBrains Mono", ui-monospace, monospace',
        fontSize: TYPE_SCALE.small,
        letterSpacing: '0.04em',
        opacity: 0.6
      }}>{label}</span>
      <span style={{ fontFamily: '"Inter Tight", sans-serif', fontWeight: 600 }}>{value}</span>
    </div>);

}

Object.assign(window, {
  THEME, applyTheme, C, T, S,
  SlideFrame, HeaderBar, FlamaxMark, BigTitle, Eyebrow,
  Placeholder, TankDiagram, Rule, SpecRow,
  AccentStripe, AccentMark, AccentLead,
  // Live aliases — slides.jsx reads these by name; they point to THEME's
  // mutable objects so a token rewrite propagates without rebinding.
  COLORS: THEME.COLORS,
  TYPE_SCALE: THEME.TYPE_SCALE,
  SPACING: THEME.SPACING
});