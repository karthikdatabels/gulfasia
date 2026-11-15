import { COMPANY_INFO } from '../data/brochureData';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#0F242C] text-slate-300 no-print">
      <div className="mx-auto max-w-[1200px] px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="font-display text-base font-bold tracking-tight text-white">
              {COMPANY_INFO.legalName}
            </div>
            <p className="mt-2.5 max-w-[44ch] text-xs leading-relaxed text-slate-400">
              {COMPANY_INFO.registrationNote}. Supplying API Spec 13A Barite Ore, Barite Powder, industrial minerals, and bulk maritime logistics.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs font-semibold text-white">Navigation</div>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Products &amp; Minerals
                </a>
              </li>
              <li>
                <a href="#specifications" className="hover:text-white transition-colors">
                  Technical Data Sheets
                </a>
              </li>
              <li>
                <a href="#logistics" className="hover:text-white transition-colors">
                  Packing &amp; Shipments
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_INFO.brochurePath}
                  download="Gulfasia_Trade_Engineering_Brochure.pdf"
                  className="hover:text-white transition-colors"
                >
                  Download Brochure PDF
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-xs font-semibold text-white">Contact &amp; Office</div>
            <div className="mt-3 space-y-2 text-xs leading-relaxed text-slate-400">
              <div>
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="font-mono text-sm font-medium text-white hover:text-[#E89B91]"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div>
                <a
                  href={COMPANY_INFO.emailHref}
                  className="font-mono text-xs font-medium text-slate-200 hover:text-[#E89B91]"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div>
                <a
                  href={COMPANY_INFO.websiteHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-slate-300 hover:text-[#E89B91]"
                >
                  {COMPANY_INFO.website}
                </a>
              </div>
              <address className="pt-1 not-italic">
                {COMPANY_INFO.fullAddress}
              </address>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-2 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.legalName}. All rights reserved.
          </div>
          <div>Kelambakkam, Tamil Nadu, India</div>
        </div>
      </div>
    </footer>
  );
}
