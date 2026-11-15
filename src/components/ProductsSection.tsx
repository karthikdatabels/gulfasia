import { useState } from 'react';
import { ArrowUpRight, Layers } from 'lucide-react';
import {
  BARITE_HIGHLIGHTS,
  OTHER_MINERALS,
  type MineralProduct,
} from '../data/brochureData';

interface ProductsSectionProps {
  onSelectMineralForQuote: (mineralName: string) => void;
}

type BariteFormTab = 'ore' | 'powder';
type CategoryFilter =
  | 'All Minerals'
  | 'Drilling & Oilfield'
  | 'Ceramics & Glass'
  | 'Construction & Metallurgy';

const CATEGORY_FILTERS: CategoryFilter[] = [
  'All Minerals',
  'Drilling & Oilfield',
  'Ceramics & Glass',
  'Construction & Metallurgy',
];

export function ProductsSection({ onSelectMineralForQuote }: ProductsSectionProps) {
  const [bariteTab, setBariteTab] = useState<BariteFormTab>('ore');
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('All Minerals');
  const [samplesImgError, setSamplesImgError] = useState(false);
  const [bariteImgError, setBariteImgError] = useState(false);

  const filteredMinerals =
    categoryFilter === 'All Minerals'
      ? OTHER_MINERALS
      : OTHER_MINERALS.filter((item) => item.category === categoryFilter);

  const activeBariteImage =
    bariteTab === 'ore'
      ? '/assets/images/barite-ore.jpg'
      : '/assets/images/barite-powder.jpg';

  return (
    <section id="products" className="border-t border-slate-200 bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        {/* Flagship Product: Barite API Spec 13A */}
        <div className="overflow-hidden rounded-xl bg-[#13343E] text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:items-stretch">
            <div className="p-8 lg:col-span-7 lg:p-12">
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-300">
                <span className="text-[#E2877C] font-semibold">Flagship Product</span>
                <span aria-hidden="true">·</span>
                <span>API Spec 13A Compliant</span>
                <span aria-hidden="true">·</span>
                <span>Barium Sulfate (BaSO₄)</span>
              </div>

              <h2
                className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl"
                style={{ textWrap: 'balance' }}
              >
                Indian Barite Ore &amp; Pulverized Powder
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
                {BARITE_HIGHLIGHTS.etymology} {BARITE_HIGHLIGHTS.globalPosition}
              </p>

              {/* Interactive Product Form Switcher */}
              <div
                role="tablist"
                aria-label="Barite Product Form"
                className="mt-7 inline-flex rounded-lg bg-[#0B2229] p-1"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={bariteTab === 'ore'}
                  onClick={() => {
                    setBariteTab('ore');
                    setBariteImgError(false);
                  }}
                  className={`rounded-md px-4 py-2 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                    bariteTab === 'ore'
                      ? 'bg-[#9D4B41] text-white'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Barite Ore (Lumps)
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={bariteTab === 'powder'}
                  onClick={() => {
                    setBariteTab('powder');
                    setBariteImgError(false);
                  }}
                  className={`rounded-md px-4 py-2 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                    bariteTab === 'powder'
                      ? 'bg-[#9D4B41] text-white'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Barite Powder (API 13A)
                </button>
              </div>

              <div className="mt-5 rounded-lg border border-white/10 bg-[#0F2A33] p-5">
                <h3 className="font-display text-base font-semibold text-white">
                  {bariteTab === 'ore'
                    ? 'Grey Barite Ore — Onshore & Offshore Drilling Supply'
                    : 'Barite Powder — 4.20 & 4.10 SG Minimum Guaranteed'}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {bariteTab === 'ore'
                    ? BARITE_HIGHLIGHTS.oreDescription
                    : BARITE_HIGHLIGHTS.powderDescription}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-5 border-t border-white/10 pt-4 text-xs text-slate-300">
                  <span>
                    Grades:{' '}
                    <strong className="font-mono text-white tabular-nums">
                      4.20 SG / 4.10 SG Min.
                    </strong>
                  </span>
                  <span>
                    {bariteTab === 'ore' ? 'Max Lump Size:' : '75 Micron Residue:'}{' '}
                    <strong className="font-mono text-white tabular-nums">
                      {bariteTab === 'ore' ? '200 mm' : '2.1% Typical'}
                    </strong>
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      onSelectMineralForQuote(
                        bariteTab === 'ore' ? 'Barite Ore' : 'Barite Powder'
                      )
                    }
                    className="ml-auto inline-flex items-center gap-1.5 font-medium text-[#E89B91] hover:text-white cursor-pointer whitespace-nowrap"
                  >
                    <span>
                      Inquire for {bariteTab === 'ore' ? 'Barite Ore' : 'Barite Powder'}
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>

            <div className="relative min-h-[280px] bg-[#0B2229] lg:col-span-5">
              {!bariteImgError ? (
                <img
                  src={activeBariteImage}
                  alt={
                    bariteTab === 'ore'
                      ? 'Grey Barite Ore mineral lumps'
                      : 'Fine pulverized API Spec 13A Barite Powder'
                  }
                  referrerPolicy="no-referrer"
                  onError={() => setBariteImgError(true)}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center p-8 text-center">
                  <Layers className="mb-2 h-8 w-8 text-slate-400" aria-hidden="true" />
                  <p className="text-sm font-medium text-slate-200">
                    {bariteTab === 'ore' ? 'Grey Barite Ore' : 'API 13A Barite Powder'}
                  </p>
                </div>
              )}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent px-6 py-4">
                <p className="font-mono text-xs text-slate-200 tabular-nums">
                  {bariteTab === 'ore'
                    ? 'SPEC: 4.20 / 4.10 SG · BaSO4 90% / 85% MIN'
                    : 'TYPICAL RESULT: 4.22 / 4.12 SG · <6μm 22.8% / 24.59%'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Industrial Minerals & Cement Portfolio */}
        <div className="mt-16 lg:mt-20">
          <div className="grid grid-cols-1 gap-8 border-b border-slate-200 pb-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="text-xs font-semibold tracking-wide text-[#9D4B41]">
                Industrial Mineral Portfolio
              </p>
              <h2
                className="mt-2 font-display text-2xl font-bold tracking-tight text-[#0F242C] sm:text-3xl"
                style={{ textWrap: 'balance' }}
              >
                Comprehensive mineral &amp; cement supply
              </h2>
              <p className="mt-2 max-w-[65ch] text-sm leading-relaxed text-slate-600">
                Beyond API Spec 13A Barite, Gulfasia Trade Engineering sources, crushes, pulverizes, and exports a broad range of industrial minerals and cement grades tailored to buyer specifications.
              </p>
            </div>

            <div className="flex items-center gap-4 lg:col-span-4 lg:justify-end">
              <div className="h-20 w-24 shrink-0 overflow-hidden rounded-md border border-slate-200 bg-slate-100">
                {!samplesImgError ? (
                  <img
                    src="/assets/images/mineral-samples.jpg"
                    alt="Assorted processed mineral powder and lump samples"
                    referrerPolicy="no-referrer"
                    onError={() => setSamplesImgError(true)}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-slate-400">
                    <Layers className="h-5 w-5" aria-hidden="true" />
                  </div>
                )}
              </div>
              <div className="text-xs text-slate-600">
                <p className="font-semibold text-[#0F242C]">10 Core Mineral Lines</p>
                <p className="mt-0.5">Crushed, pulverized, or lump form</p>
              </div>
            </div>
          </div>

          {/* Interactive Category Filter */}
          <div className="mt-6 flex flex-wrap items-center gap-2">
            {CATEGORY_FILTERS.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategoryFilter(cat)}
                className={`min-h-[40px] rounded-md px-3.5 py-2 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                  categoryFilter === cat
                    ? 'bg-[#13343E] text-white'
                    : 'border border-slate-200 bg-[#F7F8F9] text-slate-700 hover:border-slate-300 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredMinerals.map((mineral: MineralProduct) => (
              <article
                key={mineral.id}
                className="flex flex-col justify-between rounded-lg border border-slate-200 bg-white p-5 transition-colors duration-150 hover:border-slate-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs text-slate-500">
                    <span>{mineral.category}</span>
                    <span className="font-mono text-slate-600">{mineral.formulaOrType}</span>
                  </div>
                  <h3 className="mt-2 font-display text-lg font-semibold text-[#0F242C]">
                    {mineral.name}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                    {mineral.summary}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3.5">
                  <span className="truncate text-xs text-slate-500 max-w-[65%]">
                    {mineral.applications}
                  </span>
                  <button
                    type="button"
                    onClick={() => onSelectMineralForQuote(mineral.name)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#9D4B41] hover:text-[#7A352D] whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <span>Inquire</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
