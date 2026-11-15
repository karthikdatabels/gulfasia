import { useState } from 'react';
import { Download, Printer } from 'lucide-react';
import {
  ORE_POWDER_SPECS,
  POWDER_SUPPLY_RESULTS,
} from '../data/brochureData';

type SpecTab = 'ore-powder' | 'powder-results';
type GradeFilter = 'all' | '4.20' | '4.10';

export function TechnicalSpecsSection() {
  const [activeTab, setActiveTab] = useState<SpecTab>('ore-powder');
  const [gradeFilter, setGradeFilter] = useState<GradeFilter>('all');

  const handleDownloadCsv = () => {
    let csvContent = '';
    let filename = '';

    if (activeTab === 'ore-powder') {
      const headers = ['No.', 'Property', 'Unit'];
      if (gradeFilter !== '4.10') headers.push('4.20 SG Min. Requirement');
      if (gradeFilter !== '4.20') headers.push('4.10 SG Min. Requirement');

      const rows = ORE_POWDER_SPECS.map((row) => {
        const cols = [String(row.no), `"${row.property}"`, `"${row.unit}"`];
        if (gradeFilter !== '4.10') cols.push(`"${row.sg420}"`);
        if (gradeFilter !== '4.20') cols.push(`"${row.sg410}"`);
        return cols.join(',');
      });

      csvContent = [headers.join(','), ...rows].join('\n');
      filename = 'gulfasia-barite-ore-powder-spec.csv';
    } else {
      const headers = ['No.', 'Property', 'Unit'];
      if (gradeFilter !== '4.10') {
        headers.push('4.20 SG Min. Requirement', '4.20 SG Min. Typical Result');
      }
      if (gradeFilter !== '4.20') {
        headers.push('4.10 SG Min. Requirement', '4.10 SG Min. Typical Result');
      }

      const rows = POWDER_SUPPLY_RESULTS.map((row) => {
        const cols = [String(row.no), `"${row.property}"`, `"${row.unit}"`];
        if (gradeFilter !== '4.10') cols.push(`"${row.sg420Req}"`, `"${row.sg420Result}"`);
        if (gradeFilter !== '4.20') cols.push(`"${row.sg410Req}"`, `"${row.sg410Result}"`);
        return cols.join(',');
      });

      csvContent = [headers.join(','), ...rows].join('\n');
      filename = 'gulfasia-barite-powder-typical-results.csv';
    }

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section
      id="specifications"
      className="border-t border-slate-200 bg-[#F7F8F9] py-16 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-semibold tracking-wide text-[#9D4B41]">
              Laboratory &amp; Quality Assurance
            </p>
            <h2
              className="mt-2 font-display text-2xl font-bold tracking-tight text-[#0F242C] sm:text-3xl"
              style={{ textWrap: 'balance' }}
            >
              API Spec 13A Technical Data Sheets
            </h2>
            <p className="mt-2 max-w-[64ch] text-sm leading-relaxed text-slate-600">
              Verified chemical and physical parameters for both 4.20 SG Min. and 4.10 SG Min. supply grades, including typical laboratory results for pulverized Barite Powder.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 no-print">
            <button
              type="button"
              onClick={handleDownloadCsv}
              className="inline-flex min-h-[40px] items-center gap-2 rounded-md border border-slate-300 bg-white px-3.5 py-2 text-xs font-medium text-[#13343E] transition-colors hover:border-[#13343E] hover:bg-slate-50 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Download className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Download CSV</span>
            </button>

            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex min-h-[40px] items-center gap-2 rounded-md border border-slate-300 bg-white px-3.5 py-2 text-xs font-medium text-[#13343E] transition-colors hover:border-[#13343E] hover:bg-slate-50 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Printer className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Print Sheet</span>
            </button>
          </div>
        </div>

        {/* Interactive Sheet & Grade Controls */}
        <div className="mt-8 flex flex-col justify-between gap-4 border-b border-slate-200 pb-4 sm:flex-row sm:items-center no-print">
          <div
            role="tablist"
            aria-label="Specification Sheet Selector"
            className="inline-flex rounded-lg border border-slate-200 bg-white p-1"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'ore-powder'}
              onClick={() => setActiveTab('ore-powder')}
              className={`rounded-md px-4 py-2 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'ore-powder'
                  ? 'bg-[#13343E] text-white'
                  : 'text-slate-600 hover:text-[#0F242C]'
              }`}
            >
              Barite Ore / Powder Spec (11 Params)
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'powder-results'}
              onClick={() => setActiveTab('powder-results')}
              className={`rounded-md px-4 py-2 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'powder-results'
                  ? 'bg-[#13343E] text-white'
                  : 'text-slate-600 hover:text-[#0F242C]'
              }`}
            >
              Barite Powder Typical Supply Results
            </button>
          </div>

          <div
            role="group"
            aria-label="Filter by Specific Gravity Grade"
            className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white p-1"
          >
            {(
              [
                { id: 'all', label: 'Both Grades' },
                { id: '4.20', label: '4.20 SG Min.' },
                { id: '4.10', label: '4.10 SG Min.' },
              ] as const
            ).map((g) => (
              <button
                key={g.id}
                type="button"
                onClick={() => setGradeFilter(g.id)}
                className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  gradeFilter === g.id
                    ? 'bg-[#9D4B41] text-white'
                    : 'text-slate-600 hover:text-[#0F242C]'
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>
        </div>

        {/* Data Table Container */}
        <div className="mt-6 overflow-hidden rounded-lg border border-slate-200 bg-white">
          <div className="border-b border-slate-200 bg-[#F2F5F7] px-5 py-3.5 flex flex-wrap items-center justify-between gap-2">
            <h3 className="font-display text-sm font-semibold text-[#0F242C]">
              {activeTab === 'ore-powder'
                ? 'Technical Data Sheet — Barite Ore / Powder'
                : 'Product Data Sheet — Barite Powder (Typical Results of Supply)'}
            </h3>
            <span className="font-mono text-xs text-slate-600">
              API SPEC 13A · {gradeFilter === 'all' ? '4.20 & 4.10 SG' : `${gradeFilter} SG MIN.`}
            </span>
          </div>

          <div className="overflow-x-auto">
            {activeTab === 'ore-powder' ? (
              <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-[#13343E] text-white">
                    <th className="w-14 px-4 py-3 font-mono text-xs font-semibold">No.</th>
                    <th className="px-4 py-3 text-xs font-semibold">Property</th>
                    <th className="px-4 py-3 text-xs font-semibold">Unit</th>
                    {gradeFilter !== '4.10' && (
                      <th className="px-4 py-3 text-right font-mono text-xs font-semibold">
                        4.20 SG Min. Requirement
                      </th>
                    )}
                    {gradeFilter !== '4.20' && (
                      <th className="px-4 py-3 text-right font-mono text-xs font-semibold">
                        4.10 SG Min. Requirement
                      </th>
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {ORE_POWDER_SPECS.map((row, idx) => (
                    <tr
                      key={row.no}
                      className={idx % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFB]'}
                    >
                      <td className="px-4 py-3 font-mono text-xs text-slate-500 tabular-nums">
                        {String(row.no).padStart(2, '0')}
                      </td>
                      <td className="px-4 py-3 font-medium text-[#0F242C]">
                        {row.property}
                      </td>
                      <td className="px-4 py-3 font-mono text-xs text-slate-600">
                        {row.unit}
                      </td>
                      {gradeFilter !== '4.10' && (
                        <td className="px-4 py-3 text-right font-mono text-sm font-medium text-[#13343E] tabular-nums">
                          {row.sg420}
                        </td>
                      )}
                      {gradeFilter !== '4.20' && (
                        <td className="px-4 py-3 text-right font-mono text-sm font-medium text-[#18424F] tabular-nums">
                          {row.sg410}
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <table className="w-full min-w-[680px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-white/15 bg-[#13343E] text-white">
                    <th rowSpan={2} className="w-14 px-4 py-3 font-mono text-xs font-semibold">
                      No.
                    </th>
                    <th rowSpan={2} className="px-4 py-3 text-xs font-semibold">
                      Property
                    </th>
                    <th rowSpan={2} className="px-4 py-3 text-xs font-semibold">
                      Unit
                    </th>
                    {gradeFilter !== '4.10' && (
                      <th
                        colSpan={2}
                        className="border-l border-white/15 px-4 py-2 text-center font-mono text-xs font-semibold"
                      >
                        4.20 SG Min.
                      </th>
                    )}
                    {gradeFilter !== '4.20' && (
                      <th
                        colSpan={2}
                        className="border-l border-white/15 px-4 py-2 text-center font-mono text-xs font-semibold"
                      >
                        4.10 SG Min.
                      </th>
                    )}
                  </tr>
                  <tr className="border-b border-slate-200 bg-[#1B4552] text-slate-100">
                    {gradeFilter !== '4.10' && (
                      <>
                        <th className="border-l border-white/15 px-4 py-2 text-right font-mono text-xs font-medium">
                          Requirement
                        </th>
                        <th className="px-4 py-2 text-right font-mono text-xs font-semibold text-[#F4B4AC]">
                          Results
                        </th>
                      </>
                    )}
                    {gradeFilter !== '4.20' && (
                      <>
                        <th className="border-l border-white/15 px-4 py-2 text-right font-mono text-xs font-medium">
                          Requirement
                        </th>
                        <th className="px-4 py-2 text-right font-mono text-xs font-semibold text-[#F4B4AC]">
                          Results
                        </th>
                      </>
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {POWDER_SUPPLY_RESULTS.map((row, idx) => (
                    <tr
                      key={row.no}
                      className={idx % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFB]'}
                    >
                      <td className="px-4 py-3.5 font-mono text-xs text-slate-500 tabular-nums">
                        {String(row.no).padStart(2, '0')}
                      </td>
                      <td className="px-4 py-3.5 font-medium text-[#0F242C]">
                        {row.property}
                      </td>
                      <td className="px-4 py-3.5 font-mono text-xs text-slate-600">
                        {row.unit}
                      </td>
                      {gradeFilter !== '4.10' && (
                        <>
                          <td className="border-l border-slate-100 px-4 py-3.5 text-right font-mono text-sm text-slate-600 tabular-nums">
                            {row.sg420Req}
                          </td>
                          <td className="px-4 py-3.5 text-right font-mono text-sm font-semibold text-[#13343E] tabular-nums">
                            {row.sg420Result}
                          </td>
                        </>
                      )}
                      {gradeFilter !== '4.20' && (
                        <>
                          <td className="border-l border-slate-100 px-4 py-3.5 text-right font-mono text-sm text-slate-600 tabular-nums">
                            {row.sg410Req}
                          </td>
                          <td className="px-4 py-3.5 text-right font-mono text-sm font-semibold text-[#13343E] tabular-nums">
                            {row.sg410Result}
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
