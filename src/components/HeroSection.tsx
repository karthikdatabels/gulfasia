import { useState } from 'react';
import { ArrowRight, Download, Layers } from 'lucide-react';
import { COMPANY_INFO, HERO_METRICS } from '../data/brochureData';

interface HeroSectionProps {
  onRequestQuote: () => void;
}

export function HeroSection({ onRequestQuote }: HeroSectionProps) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <section id="top" className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-12">
          <div className="flex flex-col justify-center lg:col-span-7">
            <div className="mb-5 flex flex-wrap items-center gap-2 text-xs font-medium tracking-wide text-slate-500">
              <span className="text-[#18424F] font-semibold">
                {COMPANY_INFO.legalName}
              </span>
              <span aria-hidden="true">·</span>
              <span>Govt. of India Registered Export Organization</span>
              <span aria-hidden="true">·</span>
              <span>Tamil Nadu, India</span>
            </div>

            <h1
              className="font-display font-bold tracking-tight text-[#0F242C]"
              style={{
                fontSize: 'clamp(2.25rem, 4vw, 3.65rem)',
                lineHeight: 1.08,
                textWrap: 'balance',
              }}
            >
              Precision API 13A Barite &amp; Industrial Mineral Exports
            </h1>

            <p className="mt-5 max-w-[62ch] text-base leading-relaxed text-slate-600 lg:text-[17px]">
              From order confirmation through final delivery at your warehouse or project site, we supply guaranteed 4.20 and 4.10 SG Barite Ore, Barite Powder, and essential industrial minerals backed by in-house pulverizing and global ship chartering.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onRequestQuote}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-md bg-[#9D4B41] px-6 py-3 text-sm font-medium text-white transition-colors duration-150 hover:bg-[#843D34] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9D4B41]"
              >
                <span>Request Trade Quote</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <a
                href={COMPANY_INFO.brochurePath}
                download="Gulfasia_Trade_Engineering_Brochure.pdf"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-[#13343E] transition-colors duration-150 hover:border-[#13343E] hover:bg-slate-50 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#13343E]"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                <span>Download Brochure PDF</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative h-72 overflow-hidden rounded-lg border border-slate-200 bg-[#13343E] sm:h-88 lg:h-full lg:min-h-[380px]">
              {!imgFailed ? (
                <img
                  src="/assets/images/barite-ore.jpg"
                  alt="High-density raw grey Barite Ore lumps supplied by Gulfasia Trade Engineering"
                  referrerPolicy="no-referrer"
                  onError={() => setImgFailed(true)}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#13343E] to-[#1D4A57] p-6 text-center text-white">
                  <Layers className="mb-3 h-10 w-10 text-slate-300" aria-hidden="true" />
                  <p className="font-display text-lg font-semibold">API Spec 13A Barite Ore</p>
                  <p className="mt-1 text-xs text-slate-300">4.20 &amp; 4.10 SG Minimum Guaranteed</p>
                </div>
              )}

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-5 pt-14 text-white">
                <p className="text-xs font-medium tracking-wide text-slate-200">
                  Flagship Export Commodity · API Spec 13A
                </p>
                <p className="mt-1 font-display text-lg font-semibold leading-snug">
                  Grey Barite Ore &amp; Pulverized Powder
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 divide-y divide-slate-200 rounded-lg border border-slate-200 bg-[#F7F8F9] sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {HERO_METRICS.map((metric, idx) => (
            <div
              key={metric.label}
              className={`px-5 py-5 ${
                idx >= 2 ? 'sm:border-t sm:border-slate-200 lg:border-t-0' : ''
              }`}
            >
              <div className="font-mono text-xl font-semibold tracking-tight text-[#13343E] tabular-nums">
                {metric.value}
              </div>
              <div className="mt-1.5 text-xs leading-relaxed text-slate-600">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
