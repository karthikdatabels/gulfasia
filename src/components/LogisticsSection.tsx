import { useState } from 'react';
import { Anchor, ArrowRight, Package, Ship } from 'lucide-react';
import { PACKING_AND_SHIPPING } from '../data/brochureData';

interface LogisticsSectionProps {
  onApplyLoadToQuote: (params: {
    product: string;
    grade: string;
    quantityMt: string;
    shippingMode: string;
  }) => void;
}

const PRESET_TONNAGES = [27, 135, 540, 2700];

export function LogisticsSection({ onApplyLoadToQuote }: LogisticsSectionProps) {
  const [tonnageInput, setTonnageInput] = useState<string>('270');
  const [selectedForm, setSelectedForm] = useState<'Barite Powder' | 'Barite Ore'>(
    'Barite Powder'
  );
  const [selectedGrade, setSelectedGrade] = useState<'4.20 SG Min.' | '4.10 SG Min.'>(
    '4.20 SG Min.'
  );

  const parsedTonnage = Math.max(0, Number(tonnageInput) || 0);
  const bigBagsNeeded = parsedTonnage > 0 ? Math.ceil(parsedTonnage / 1.5) : 0;
  const fclContainers = parsedTonnage > 0 ? Math.ceil(parsedTonnage / 27) : 0;
  const recommendedMode =
    parsedTonnage >= 1000
      ? "Break-Bulk Vessel Charter (or Multi-Lot 20' HD FCL)"
      : "20' HD FCL Container Load (27 MT / 18 Bags per FCL)";

  return (
    <section id="logistics" className="border-t border-slate-200 bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Packing & Shipments Summary */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-wide text-[#9D4B41]">
              Packing &amp; Maritime Shipments
            </p>
            <h2
              className="mt-2 font-display text-2xl font-bold tracking-tight text-[#0F242C] sm:text-3xl"
              style={{ textWrap: 'balance' }}
            >
              Export packing &amp; global charter logistics
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              From containerized 20&apos; Heavy Duty FCL loads to full break-bulk vessel charters, we coordinate bagging, port handling, and ocean freight to destination ports worldwide.
            </p>

            <div className="mt-8 space-y-6">
              <div className="rounded-lg border border-slate-200 bg-[#F7F8F9] p-5">
                <div className="flex items-center gap-2.5 text-[#13343E]">
                  <Package className="h-4 w-4 text-[#9D4B41]" aria-hidden="true" />
                  <h3 className="font-display text-sm font-semibold">
                    Standard Export Packing
                  </h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {PACKING_AND_SHIPPING.packing.map((item) => (
                    <li key={item} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border border-slate-200 bg-[#F7F8F9] p-5">
                <div className="flex items-center gap-2.5 text-[#13343E]">
                  <Ship className="h-4 w-4 text-[#9D4B41]" aria-hidden="true" />
                  <h3 className="font-display text-sm font-semibold">
                    Shipment &amp; Vessel Modes
                  </h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {PACKING_AND_SHIPPING.shipments.map((item) => (
                    <li key={item} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Interactive Load & Tonnage Estimator */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-slate-200 bg-[#F7F8F9] p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-4">
                <div>
                  <h3 className="font-display text-lg font-semibold text-[#0F242C]">
                    Container &amp; Big Bag Load Estimator
                  </h3>
                  <p className="mt-0.5 text-xs text-slate-600">
                    Based on 1.50 MT Big Bags and 27 MT per 20&apos; HD FCL (18 bags/container)
                  </p>
                </div>
                <Anchor className="h-5 w-5 text-[#18424F]" aria-hidden="true" />
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="calc-form"
                    className="block text-xs font-medium text-slate-700"
                  >
                    Material Form
                  </label>
                  <select
                    id="calc-form"
                    value={selectedForm}
                    onChange={(e) =>
                      setSelectedForm(e.target.value as 'Barite Powder' | 'Barite Ore')
                    }
                    className="mt-1.5 w-full min-h-[42px] rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-[#0F242C] focus:border-[#13343E] focus:outline-none"
                  >
                    <option value="Barite Powder">Barite Powder (API 13A)</option>
                    <option value="Barite Ore">Barite Ore (Lumps)</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="calc-grade"
                    className="block text-xs font-medium text-slate-700"
                  >
                    Specific Gravity Grade
                  </label>
                  <select
                    id="calc-grade"
                    value={selectedGrade}
                    onChange={(e) =>
                      setSelectedGrade(
                        e.target.value as '4.20 SG Min.' | '4.10 SG Min.'
                      )
                    }
                    className="mt-1.5 w-full min-h-[42px] rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-[#0F242C] focus:border-[#13343E] focus:outline-none"
                  >
                    <option value="4.20 SG Min.">4.20 SG Min. (90% BaSO₄ Min.)</option>
                    <option value="4.10 SG Min.">4.10 SG Min. (85% BaSO₄ Min.)</option>
                  </select>
                </div>
              </div>

              <div className="mt-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <label
                    htmlFor="calc-tonnage"
                    className="block text-xs font-medium text-slate-700"
                  >
                    Required Order Volume (Metric Tons)
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {PRESET_TONNAGES.map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => setTonnageInput(String(preset))}
                        className={`rounded px-2.5 py-1 font-mono text-xs transition-colors cursor-pointer tabular-nums ${
                          Number(tonnageInput) === preset
                            ? 'bg-[#13343E] text-white'
                            : 'border border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                        }`}
                      >
                        {preset.toLocaleString()} MT
                      </button>
                    ))}
                  </div>
                </div>

                <input
                  id="calc-tonnage"
                  type="number"
                  min={1}
                  max={100000}
                  step={1}
                  value={tonnageInput}
                  onChange={(e) => setTonnageInput(e.target.value)}
                  className="mt-2 w-full min-h-[44px] rounded-md border border-slate-300 bg-white px-3.5 py-2 font-mono text-base font-medium text-[#0F242C] tabular-nums focus:border-[#13343E] focus:outline-none"
                  placeholder="Enter tonnage in MT"
                />
              </div>

              {/* Calculated Load Output */}
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-lg border border-slate-200 bg-white p-4">
                  <div className="text-xs text-slate-500">1.50 MT Big Bags</div>
                  <div className="mt-1 font-mono text-2xl font-semibold text-[#0F242C] tabular-nums">
                    {bigBagsNeeded.toLocaleString()}
                  </div>
                </div>

                <div className="rounded-lg border border-slate-200 bg-white p-4">
                  <div className="text-xs text-slate-500">20&apos; HD FCL Loads</div>
                  <div className="mt-1 font-mono text-2xl font-semibold text-[#13343E] tabular-nums">
                    {fclContainers.toLocaleString()}
                  </div>
                </div>

                <div className="rounded-lg border border-slate-200 bg-white p-4">
                  <div className="text-xs text-slate-500">Total Net Weight</div>
                  <div className="mt-1 font-mono text-2xl font-semibold text-[#9D4B41] tabular-nums">
                    {parsedTonnage.toLocaleString()} MT
                  </div>
                </div>
              </div>

              <div className="mt-4 flex flex-col justify-between gap-4 border-t border-slate-200 pt-5 sm:flex-row sm:items-center">
                <div className="text-xs leading-relaxed text-slate-600">
                  <span className="font-semibold text-[#0F242C]">Recommended Dispatch:</span>{' '}
                  {recommendedMode}
                </div>

                <button
                  type="button"
                  onClick={() =>
                    onApplyLoadToQuote({
                      product: selectedForm,
                      grade: selectedGrade,
                      quantityMt: String(parsedTonnage || 27),
                      shippingMode:
                        parsedTonnage >= 1000
                          ? 'Break-bulk vessel'
                          : "20' HD FCL (27 MT/container)",
                    })
                  }
                  className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-md bg-[#9D4B41] px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-[#843D34] whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>Apply Load to Quote</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
