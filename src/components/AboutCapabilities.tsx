import { COMPANY_INFO, CORE_CAPABILITIES } from '../data/brochureData';

export function AboutCapabilities() {
  return (
    <section id="about" className="bg-[#F7F8F9] py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-wide text-[#9D4B41]">
              About Gulfasia Trade Engineering
            </p>
            <h2
              className="mt-2 font-display text-2xl font-bold tracking-tight text-[#0F242C] sm:text-3xl"
              style={{ textWrap: 'balance' }}
            >
              Tailor-made precision from mine sourcing to port delivery
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              {COMPANY_INFO.aboutParagraph}
            </p>
            <div className="mt-6 border-t border-slate-200 pt-5 text-xs leading-relaxed text-slate-600">
              <span className="font-semibold text-[#13343E]">Registered Office:</span>{' '}
              {COMPANY_INFO.fullAddress}
            </div>
          </div>

          <div id="capabilities" className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {CORE_CAPABILITIES.map((item) => (
                <article
                  key={item.index}
                  className="flex flex-col justify-between rounded-lg border border-slate-200 bg-white p-6 transition-colors duration-150 hover:border-slate-300"
                >
                  <div>
                    <div className="font-mono text-sm font-semibold text-[#9D4B41] tabular-nums">
                      {item.index}.
                    </div>
                    <h3 className="mt-3 font-display text-lg font-semibold text-[#0F242C]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
