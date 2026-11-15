import { useEffect, useState, type FormEvent } from 'react';
import { CheckCircle2, Download, Globe, Mail, MapPin, Phone } from 'lucide-react';
import { COMPANY_INFO, OTHER_MINERALS } from '../data/brochureData';

export interface QuotePrefill {
  product: string;
  grade: string;
  quantityMt: string;
  shippingMode: string;
  nonce: number;
}

interface ContactSectionProps {
  prefill: QuotePrefill | null;
}

const PRODUCT_OPTIONS = [
  'Barite Powder',
  'Barite Ore',
  ...OTHER_MINERALS.map((m) => m.name),
];

export function ContactSection({ prefill }: ContactSectionProps) {
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [product, setProduct] = useState('Barite Powder');
  const [grade, setGrade] = useState('4.20 SG Min.');
  const [quantityMt, setQuantityMt] = useState('270');
  const [shippingMode, setShippingMode] = useState("20' HD FCL (27 MT/container)");
  const [destinationNotes, setDestinationNotes] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  useEffect(() => {
    if (!prefill) return;
    if (prefill.product) setProduct(prefill.product);
    if (prefill.grade) setGrade(prefill.grade);
    if (prefill.quantityMt) setQuantityMt(prefill.quantityMt);
    if (prefill.shippingMode) setShippingMode(prefill.shippingMode);
    setSubmittedRef(null);
  }, [prefill]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    const trimmedEmail = email.trim();
    const trimmedPhone = phone.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!companyName.trim() || !contactName.trim()) {
      setErrorMsg('Please enter your company name and primary contact person.');
      return;
    }

    if (!emailPattern.test(trimmedEmail)) {
      setErrorMsg('Please provide a valid business email address.');
      return;
    }

    if (trimmedPhone.length < 7) {
      setErrorMsg('Please provide a valid telephone or WhatsApp number.');
      return;
    }

    const referenceCode = `GTE-${new Date().getFullYear()}-${String(
      Math.floor(1000 + Math.random() * 9000)
    )}`;
    setSubmittedRef(referenceCode);
  };

  return (
    <section
      id="contact"
      className="border-t border-slate-200 bg-[#F7F8F9] py-16 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Direct Trade Desk Details */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-wide text-[#9D4B41]">
              Trade &amp; Export Desk
            </p>
            <h2
              className="mt-2 font-display text-2xl font-bold tracking-tight text-[#0F242C] sm:text-3xl"
              style={{ textWrap: 'balance' }}
            >
              Request specifications, FOB/CIF pricing, or vessel schedules
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Share your target specific gravity, packing preference, and destination port. Our export operations desk responds with grade availability and freight options.
            </p>

            <div className="mt-8 space-y-6 border-t border-slate-200 pt-6">
              <div className="flex items-start gap-3.5">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#9D4B41]" aria-hidden="true" />
                <div>
                  <div className="text-xs font-medium text-slate-500">Direct Export Line</div>
                  <a
                    href={COMPANY_INFO.phoneHref}
                    className="mt-0.5 inline-block font-mono text-lg font-semibold text-[#0F242C] hover:text-[#9D4B41] tabular-nums"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#9D4B41]" aria-hidden="true" />
                <div>
                  <div className="text-xs font-medium text-slate-500">Email</div>
                  <a
                    href={COMPANY_INFO.emailHref}
                    className="mt-0.5 inline-block font-mono text-sm font-semibold text-[#0F242C] hover:text-[#9D4B41]"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Globe className="mt-0.5 h-5 w-5 shrink-0 text-[#9D4B41]" aria-hidden="true" />
                <div>
                  <div className="text-xs font-medium text-slate-500">Website</div>
                  <a
                    href={COMPANY_INFO.websiteHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-0.5 inline-block font-mono text-sm font-semibold text-[#0F242C] hover:text-[#9D4B41]"
                  >
                    {COMPANY_INFO.website}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#9D4B41]" aria-hidden="true" />
                <div>
                  <div className="text-xs font-medium text-slate-500">
                    Registered Office
                  </div>
                  <div className="mt-0.5 text-sm font-medium text-[#0F242C]">
                    {COMPANY_INFO.legalName}
                  </div>
                  <address className="mt-1 not-italic text-sm leading-relaxed text-slate-600">
                    {COMPANY_INFO.addressLines.map((line) => (
                      <div key={line}>{line}</div>
                    ))}
                  </address>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={COMPANY_INFO.brochurePath}
                  download="Gulfasia_Trade_Engineering_Brochure.pdf"
                  className="inline-flex min-h-[42px] items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2 text-xs font-medium text-[#13343E] transition-colors hover:border-[#13343E] hover:bg-slate-50"
                >
                  <Download className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Download Official Company Brochure (PDF)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Validated Trade Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
              {submittedRef ? (
                <div className="py-8">
                  <div className="flex items-center gap-3 text-[#13343E]">
                    <CheckCircle2 className="h-6 w-6 text-[#18424F]" aria-hidden="true" />
                    <h3 className="font-display text-xl font-bold text-[#0F242C]">
                      Trade Inquiry Prepared
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    Reference <span className="font-mono font-semibold text-[#0F242C]">{submittedRef}</span> has been logged for{' '}
                    <span className="font-medium text-[#0F242C]">{quantityMt} MT</span> of{' '}
                    <span className="font-medium text-[#0F242C]">{product}</span> ({grade}) via{' '}
                    <span className="font-medium text-[#0F242C]">{shippingMode}</span>.
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    For urgent chartering or container allocation, email us at{' '}
                    <a
                      href={COMPANY_INFO.emailHref}
                      className="font-mono font-semibold text-[#9D4B41] underline underline-offset-2"
                    >
                      {COMPANY_INFO.email}
                    </a>{' '}
                    or call{' '}
                    <a
                      href={COMPANY_INFO.phoneHref}
                      className="font-mono font-semibold text-[#9D4B41] underline underline-offset-2"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                    .
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <a
                      href={`mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(
                        `Trade Inquiry (${submittedRef}): ${quantityMt} MT ${product}`
                      )}&body=${encodeURIComponent(
                        `Reference: ${submittedRef}\nCompany: ${companyName}\nContact: ${contactName}\nEmail: ${email}\nPhone: ${phone}\nProduct: ${product}\nGrade: ${grade}\nQuantity: ${quantityMt} MT\nShipping Mode: ${shippingMode}\n\nNotes:\n${destinationNotes}`
                      )}`}
                      className="inline-flex min-h-[42px] items-center rounded-md bg-[#9D4B41] px-4 py-2 text-xs font-medium text-white hover:bg-[#843D34]"
                    >
                      Send via Email Client
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmittedRef(null)}
                      className="inline-flex min-h-[42px] items-center rounded-md border border-slate-300 bg-white px-4 py-2 text-xs font-medium text-[#0F242C] hover:bg-slate-50 cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="border-b border-slate-100 pb-4">
                    <h3 className="font-display text-lg font-semibold text-[#0F242C]">
                      Trade &amp; Bulk Commodity Inquiry
                    </h3>
                  </div>

                  {errorMsg && (
                    <div
                      role="alert"
                      className="rounded-md border border-[#9D4B41]/30 bg-[#9D4B41]/10 px-4 py-3 text-xs font-medium text-[#843D34]"
                    >
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="rfq-company"
                        className="block text-xs font-medium text-slate-700"
                      >
                        Company / Organization *
                      </label>
                      <input
                        id="rfq-company"
                        type="text"
                        required
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="e.g. Horizon Drilling Fluids Ltd"
                        className="mt-1.5 w-full min-h-[42px] rounded-md border border-slate-300 px-3 py-2 text-sm text-[#0F242C] focus:border-[#13343E] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="rfq-contact"
                        className="block text-xs font-medium text-slate-700"
                      >
                        Contact Person *
                      </label>
                      <input
                        id="rfq-contact"
                        type="text"
                        required
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="Full name"
                        className="mt-1.5 w-full min-h-[42px] rounded-md border border-slate-300 px-3 py-2 text-sm text-[#0F242C] focus:border-[#13343E] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="rfq-email"
                        className="block text-xs font-medium text-slate-700"
                      >
                        Business Email *
                      </label>
                      <input
                        id="rfq-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="procurement@company.com"
                        className="mt-1.5 w-full min-h-[42px] rounded-md border border-slate-300 px-3 py-2 text-sm text-[#0F242C] focus:border-[#13343E] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="rfq-phone"
                        className="block text-xs font-medium text-slate-700"
                      >
                        Phone / WhatsApp *
                      </label>
                      <input
                        id="rfq-phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98XXX XXXXX"
                        className="mt-1.5 w-full min-h-[42px] rounded-md border border-slate-300 px-3 py-2 font-mono text-sm text-[#0F242C] focus:border-[#13343E] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="rfq-product"
                        className="block text-xs font-medium text-slate-700"
                      >
                        Product / Mineral
                      </label>
                      <select
                        id="rfq-product"
                        value={product}
                        onChange={(e) => setProduct(e.target.value)}
                        className="mt-1.5 w-full min-h-[42px] rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-[#0F242C] focus:border-[#13343E] focus:outline-none"
                      >
                        {PRODUCT_OPTIONS.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="rfq-grade"
                        className="block text-xs font-medium text-slate-700"
                      >
                        Grade / Specification
                      </label>
                      <select
                        id="rfq-grade"
                        value={grade}
                        onChange={(e) => setGrade(e.target.value)}
                        className="mt-1.5 w-full min-h-[42px] rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-[#0F242C] focus:border-[#13343E] focus:outline-none"
                      >
                        <option value="4.20 SG Min.">4.20 SG Min. (API Spec 13A)</option>
                        <option value="4.10 SG Min.">4.10 SG Min. (API Spec 13A)</option>
                        <option value="Custom Buyer Specification">
                          Custom Buyer Specification
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="rfq-quantity"
                        className="block text-xs font-medium text-slate-700"
                      >
                        Required Quantity (MT)
                      </label>
                      <input
                        id="rfq-quantity"
                        type="number"
                        min={1}
                        value={quantityMt}
                        onChange={(e) => setQuantityMt(e.target.value)}
                        className="mt-1.5 w-full min-h-[42px] rounded-md border border-slate-300 px-3 py-2 font-mono text-sm text-[#0F242C] tabular-nums focus:border-[#13343E] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="rfq-shipping"
                        className="block text-xs font-medium text-slate-700"
                      >
                        Packing &amp; Shipment Mode
                      </label>
                      <select
                        id="rfq-shipping"
                        value={shippingMode}
                        onChange={(e) => setShippingMode(e.target.value)}
                        className="mt-1.5 w-full min-h-[42px] rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-[#0F242C] focus:border-[#13343E] focus:outline-none"
                      >
                        <option value="20' HD FCL (27 MT/container)">
                          20&apos; HD FCL (27 MT / 18 × 1.50 MT Big Bags)
                        </option>
                        <option value="Break-bulk vessel">Break-bulk vessel</option>
                        <option value="Custom packing / Domestic">
                          Custom packing / Domestic delivery
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="rfq-notes"
                      className="block text-xs font-medium text-slate-700"
                    >
                      Destination Port &amp; Technical Requirements
                    </label>
                    <textarea
                      id="rfq-notes"
                      rows={3}
                      value={destinationNotes}
                      onChange={(e) => setDestinationNotes(e.target.value)}
                      placeholder="Specify destination port (FOB / CIF), custom bagging weights, or delivery timeline..."
                      className="mt-1.5 w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-[#0F242C] focus:border-[#13343E] focus:outline-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="inline-flex min-h-[44px] w-full items-center justify-center rounded-md bg-[#9D4B41] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#843D34] cursor-pointer sm:w-auto"
                    >
                      Submit Trade Inquiry
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
