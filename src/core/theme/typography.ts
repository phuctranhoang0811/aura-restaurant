// For Phase 1 we will use system fonts until custom fonts are loaded.
// Once Expo font loading is verified, we can switch families.
export const typography = {
  heroXL: { fontSize: 48, lineHeight: 56, fontWeight: '700' as const },
  heroLG: { fontSize: 36, lineHeight: 44, fontWeight: '400' as const },
  heading: { fontSize: 28, lineHeight: 36, fontWeight: '700' as const },
  subhead: { fontSize: 20, lineHeight: 28, fontWeight: '400' as const },
  body: { fontSize: 15, lineHeight: 24, fontWeight: '400' as const },
  label: { fontSize: 11, letterSpacing: 2, textTransform: 'uppercase' as const, fontWeight: '600' as const },
  price: { fontSize: 16, color: '#d4af37', fontWeight: '400' as const },
};
