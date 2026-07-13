// Central place for site-wide identity. Edit these as Paul's details firm up.
export const SITE = {
  name: 'Paul Antony',
  role: 'Security Engineering Leader',
  // One-line positioning statement shown in the hero.
  tagline: 'I help enterprises move fast without breaking trust — securing cloud at scale, where deep technical security meets the business.',
  email: '', // e.g. 'paul@example.com' — leave '' to hide
  location: '', // e.g. 'London, UK'
  socials: {
    github: '', // hidden — few public contributions yet; the real building is private (home lab, Airbnb ops)
    linkedin: 'https://www.linkedin.com/in/paul-antony-36310a105/',
    twitter: '', // e.g. 'https://x.com/paulantony'
  },
} as const;

// Prefix an internal path with the deploy base (import.meta.env.BASE_URL, e.g. '/welcome/').
// Astro auto-prefixes bundled assets but NOT hand-written hrefs — use this for every internal link
// so the site works whether base is '/' (user site) or '/welcome/' (project site).
export function href(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return path === '/' ? `${base}/` : `${base}/${path.replace(/^\//, '')}`;
}
