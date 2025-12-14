export type NavLink = {
  label: string;
  href: string;
};

export type NavCta = {
  label: string;
  href: string;
};

export const navConfig = {
  links: [
    { label: 'Features', href: '#features' },
    { label: 'Metrics', href: '#metrics' },
    { label: 'Pricing', href: '#pricing' },
  ],
  cta: { label: 'Get started', href: '#cta' } satisfies NavCta,
};
