import { useState } from 'react';
import { AboutCapabilities } from './components/AboutCapabilities';
import { ContactSection, type QuotePrefill } from './components/ContactSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { LogisticsSection } from './components/LogisticsSection';
import { Navbar } from './components/Navbar';
import { ProductsSection } from './components/ProductsSection';
import { TechnicalSpecsSection } from './components/TechnicalSpecsSection';

export default function App() {
  const [quotePrefill, setQuotePrefill] = useState<QuotePrefill | null>(null);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectMineralForQuote = (mineralName: string) => {
    setQuotePrefill({
      product: mineralName,
      grade:
        mineralName.includes('Barite')
          ? '4.20 SG Min.'
          : 'Custom Buyer Specification',
      quantityMt: '270',
      shippingMode: "20' HD FCL (27 MT/container)",
      nonce: Date.now(),
    });
    scrollToContact();
  };

  const handleApplyLoadToQuote = (params: {
    product: string;
    grade: string;
    quantityMt: string;
    shippingMode: string;
  }) => {
    setQuotePrefill({
      ...params,
      nonce: Date.now(),
    });
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#F7F8F9] text-[#0F242C]">
      <Navbar onRequestQuote={scrollToContact} />
      <main>
        <HeroSection onRequestQuote={scrollToContact} />
        <AboutCapabilities />
        <ProductsSection onSelectMineralForQuote={handleSelectMineralForQuote} />
        <TechnicalSpecsSection />
        <LogisticsSection onApplyLoadToQuote={handleApplyLoadToQuote} />
        <ContactSection prefill={quotePrefill} />
      </main>
      <Footer />
    </div>
  );
}
