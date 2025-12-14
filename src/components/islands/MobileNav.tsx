import type { NavCta, NavLink } from '../../config/nav';
import { useEffect, useRef, useState } from 'react';

type MobileNavProps = {
  links: NavLink[];
  cta: NavCta;
};

export default function MobileNav({ links, cta }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target as Node) &&
        !buttonRef.current?.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm font-medium text-foreground/90 shadow-sm transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="mr-2 text-xs uppercase tracking-[0.2em] text-muted">Menu</span>
        <span aria-hidden className="text-lg">{open ? '✕' : '☰'}</span>
      </button>

      <div
        id="mobile-menu"
        ref={panelRef}
        role="dialog"
        aria-modal={open}
        aria-hidden={!open}
        className={`${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        } absolute left-4 right-4 top-20 z-40 rounded-2xl border border-white/10 bg-surface/95 p-4 shadow-2xl transition-opacity backdrop-blur-xl`}
      >
        <nav aria-label="Mobile">
          <ul className="space-y-2 text-base font-medium text-foreground/90">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  className="flex items-center justify-between rounded-xl px-3 py-3 transition hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  <span>{link.label}</span>
                  <span aria-hidden className="text-sm text-muted">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-4 border-t border-white/10 pt-4">
          <a
            className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-surface shadow-lg shadow-primary/20 transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            href={cta.href}
            onClick={() => setOpen(false)}
          >
            {cta.label}
          </a>
        </div>
      </div>
    </div>
  );
}
