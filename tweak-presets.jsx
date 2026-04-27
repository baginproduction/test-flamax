// Tweak presets — three expressive axes that reshape the deck's character.

const MOOD_PRESETS = {
  industrial: {
    label: 'Industrial',
    colors: {
      red: '#E30613', redDeep: '#B5040F',
      ink: '#141414', graphite: '#2A2A2A',
      paper: '#F5F2EE', paperDeep: '#EAE4DC',
      white: '#FFFFFF',
      rule: 'rgba(20,20,20,0.14)', ruleLight: 'rgba(255,255,255,0.18)',
      mute: '#7A7670',
    },
  },
  engineering: {
    label: 'Cool Engineering',
    colors: {
      red: '#0057B8', redDeep: '#003E85',
      ink: '#0F1620', graphite: '#22303D',
      paper: '#EEF1F4', paperDeep: '#DDE3EA',
      white: '#FFFFFF',
      rule: 'rgba(15,22,32,0.14)', ruleLight: 'rgba(255,255,255,0.18)',
      mute: '#6E7B89',
    },
  },
  heritage: {
    label: 'Heritage Print',
    colors: {
      red: '#9C2A1A', redDeep: '#6F1C10',
      ink: '#241A12', graphite: '#3B2C1F',
      paper: '#EFE4D2', paperDeep: '#E2D2B8',
      white: '#FBF6EC',
      rule: 'rgba(36,26,18,0.18)', ruleLight: 'rgba(251,246,236,0.22)',
      mute: '#7E6B52',
    },
  },
};

const DENSITY_PRESETS = {
  editorial: {
    label: 'Editorial',
    typeScale: { hero: 120, display: 96, title: 64, subtitle: 44, body: 34, small: 28, micro: 24 },
    spacing:   { paddingTop: 100, paddingBottom: 80, paddingX: 100, titleGap: 52, itemGap: 28 },
  },
  brief: {
    label: 'Technical Brief',
    typeScale: { hero: 88, display: 72, title: 52, subtitle: 36, body: 28, small: 24, micro: 24 },
    spacing:   { paddingTop: 72, paddingBottom: 64, paddingX: 80, titleGap: 36, itemGap: 20 },
  },
  billboard: {
    label: 'Billboard',
    typeScale: { hero: 160, display: 132, title: 92, subtitle: 52, body: 40, small: 32, micro: 26 },
    spacing:   { paddingTop: 120, paddingBottom: 100, paddingX: 120, titleGap: 64, itemGap: 32 },
  },
};

const ACCENT_PRESETS = {
  block:    { label: 'Block' },     // solid red squares & bars (current)
  hairline: { label: 'Hairline' },  // thin red rules + outlined accents only
  cut:      { label: 'Cut' },       // diagonal red wedges, asymmetric clips
};

window.MOOD_PRESETS = MOOD_PRESETS;
window.DENSITY_PRESETS = DENSITY_PRESETS;
window.ACCENT_PRESETS = ACCENT_PRESETS;
