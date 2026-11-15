import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/brochureData';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Products', href: '#products' },
  { label: 'Specifications', href: '#specifications' },
  { label: 'Logistics', href: '#logistics' },
];

interface NavbarProps {
  onRequestQuote: () => void;
}

export function Navbar({ onRequestQuote }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  const handleQuoteClick = () => {
    setMobileOpen(false);
    onRequestQuote();
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-sm no-print">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-8 px-6 py-3.5 lg:px-8">
        <a
          href="#top"
          className="font-display text-lg font-bold tracking-tight text-[#13343E] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9D4B41]"
        >
          {COMPANY_INFO.shortName}
        </a>

        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap shrink-0 py-1 transition-colors duration-150 hover:text-[#13343E] hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9D4B41]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={handleQuoteClick}
            className="hidden sm:inline-flex items-center justify-center rounded-md bg-[#9D4B41] px-4 py-2 text-sm font-medium text-white transition-colors duration-150 hover:bg-[#843D34] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9D4B41]"
          >
            Request Quote
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 text-[#13343E] md:hidden cursor-pointer hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-[#9D4B41]"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-4 md:hidden">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="flex min-h-[44px] items-center rounded-md px-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-[#13343E]"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={handleQuoteClick}
              className="mt-3 flex min-h-[44px] w-full items-center justify-center rounded-md bg-[#9D4B41] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#843D34] cursor-pointer"
            >
              Request Quote
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
