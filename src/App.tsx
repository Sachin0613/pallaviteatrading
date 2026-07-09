import React, { useState, useEffect } from "react";
import { PageId } from "./types";
import Home from "./components/Home";
import About from "./components/About";
import TopGardens from "./components/TopGardens";
import PartnerGardens from "./components/PartnerGardens";
import Services from "./components/Services";
import SampleRequestForm from "./components/SampleRequestForm";
import Contact from "./components/Contact";
import TeaLogo from "./components/TeaLogo";
import PallaviBrandLogo from "./components/PallaviBrandLogo";
import { Leaf, Menu, X, Phone, Mail, MapPin, ArrowUp, Facebook, Instagram, Linkedin, MessageSquare, Globe, Shield, FileText, Check } from "lucide-react";

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Interactive modal states & Terms of Trade Acceptance tracker
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(() => {
    try {
      return localStorage.getItem("pallavi_terms_accepted") === "true";
    } catch {
      return false;
    }
  });

  const handleAcceptTerms = () => {
    try {
      localStorage.setItem("pallavi_terms_accepted", "true");
    } catch (e) {
      // Gracefully bypass if localStorage access is prohibited under sandboxed iframes
    }
    setTermsAccepted(true);
  };

  const handleRevokeTerms = () => {
    try {
      localStorage.removeItem("pallavi_terms_accepted");
    } catch (e) {}
    setTermsAccepted(false);
  };

  // Cross-page state variables to provide a seamless UX:
  const [prefilledGardenName, setPrefilledGardenName] = useState<string | undefined>(undefined);
  const [prefilledMessage, setPrefilledMessage] = useState<string | undefined>(undefined);

  // Scroll and Back to top helpers
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateTo = (page: string) => {
    if (page === "location") {
      setCurrentPage("contact");
      setMobileMenuOpen(false);
      setTimeout(() => {
        const locationSection = document.getElementById("corporate-location-section");
        if (locationSection) {
          locationSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300);
      return;
    }
    
    setCurrentPage(page as PageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const handleSelectSampleRequest = (gardenName: string) => {
    setPrefilledGardenName(gardenName);
    navigateTo("sample-request");
  };

  const handleInquirePartner = (partnerName: string) => {
    setPrefilledMessage(
      `Dear Pallavi Tea & Trading Co., we are interested in exploring bulk sourcing options and seasonal catalogs for your partner estate, "${partnerName}". We would appreciate it if you could supply pricing parameters. Thank you.`
    );
    navigateTo("contact");
  };

  const handleInquireService = (serviceName: string) => {
    setPrefilledMessage(
      `Dear Pallavi Tea & Trading Co., we would like to schedule an expert query session and receive standard quotes regarding your B2B service: "${serviceName}". We look forward to your guidance.`
    );
    navigateTo("contact");
  };

  const handleClearPrefilledSample = () => {
    setPrefilledGardenName(undefined);
  };

  const handleClearPrefilledContact = () => {
    setPrefilledMessage(undefined);
  };

  // Switcher to render correct page component
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home onNavigate={navigateTo} />;
      case "about":
        return <About />;
      case "gardens":
        return <TopGardens onSelectSampleRequest={handleSelectSampleRequest} />;
      case "partners":
        return <PartnerGardens onInquire={handleInquirePartner} />;
      case "services":
        return <Services onInquireService={handleInquireService} />;
      case "sample-request":
        return (
          <SampleRequestForm
            prefilledGardenName={prefilledGardenName}
            onClearPrefill={handleClearPrefilledSample}
          />
        );
      case "contact":
        return (
          <Contact
            prefilledMessage={prefilledMessage}
            onClearPrefill={handleClearPrefilledContact}
          />
        );
      default:
        return <Home onNavigate={navigateTo} />;
    }
  };

  // Define nav links inside the component mapping
  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "gardens", label: "Top Gardens" },
    { id: "partners", label: "Gardens We Work With" },
    { id: "services", label: "Services" },
    { id: "sample-request", label: "Sample Request" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-brand-charcoal flex flex-col justify-between selection:bg-brand-sage/30 selection:text-[#D4AF37]">
      
      {/* GLOBAL HEADER/NAVBAR */}
      <div className="sticky top-0 z-50 w-full transition-all duration-300 py-2 sm:py-4 px-4 sm:px-6">
        <header 
          className={`mx-auto transition-all duration-500 ${
            isScrolled 
              ? "max-w-6xl rounded-[30px] sm:rounded-[50px] bg-neutral-100/85 backdrop-blur-md border border-neutral-300/60 shadow-[0_12px_30px_rgba(0,0,0,0.06)] px-5 sm:px-8 py-2.5" 
              : "w-full bg-neutral-100/40 backdrop-blur-md border-b border-neutral-250/30 px-6 py-4"
          }`}
        >
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            
            {/* Elegant Left-Side Logo & Small Brand Name */}
            <div
              onClick={() => navigateTo("home")}
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              {/* Stylized leaf badge */}
              <div className="relative w-9 h-9 bg-black border border-neutral-800 text-[#D4AF37] rounded-xl flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.12)] group-hover:scale-105 duration-300 shrink-0">
                <Leaf className="w-4 h-4 fill-[#D4AF37]/20 -rotate-12" />
                <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-emerald-500 rounded-full border border-black animate-ping" />
                <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-emerald-500 rounded-full border border-black" />
              </div>

              <div className="flex flex-col text-left">
                <h2 className="text-base sm:text-lg font-serif font-black tracking-[0.12em] text-black leading-none select-none duration-200">
                  PALLAVI
                </h2>
                <span className="text-[8px] font-sans font-bold uppercase tracking-[0.2em] text-neutral-500 leading-none mt-0.5">
                  Tea & Trading
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links on Top-Right */}
            <nav className="hidden lg:flex items-center gap-1.5 xl:gap-3">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    id={`nav-link-${link.id}`}
                    onClick={() => navigateTo(link.id)}
                    className={`relative px-3 py-1.5 rounded-full text-xs font-sans font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                      isActive 
                        ? "text-black bg-neutral-200/80 shadow-xs" 
                        : "text-neutral-600 hover:text-black hover:bg-neutral-100/60"
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>

            {/* Mobile Hamburger Toggle */}
            <div className="lg:hidden flex items-center">
              <button
                id="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 text-neutral-800 hover:text-black hover:bg-neutral-200/50 rounded-full shrink-0 duration-150 focus:outline-none cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-black" /> : <Menu className="w-5 h-5 text-neutral-800" />}
              </button>
            </div>

          </div>

          {/* Mobile Dropdown Menu with Translucent Gray styling */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-3 bg-neutral-100/95 backdrop-blur-md rounded-2xl border border-neutral-300/40 py-3 px-3 space-y-1 text-left shadow-2xl">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    id={`mobile-nav-link-${link.id}`}
                    onClick={() => {
                      navigateTo(link.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`block w-full py-2 px-3 text-xs font-semibold tracking-wider uppercase text-left rounded-lg duration-200 cursor-pointer ${
                      isActive
                        ? "text-black bg-neutral-200 border-l-4 border-l-black font-bold"
                        : "text-neutral-700 hover:text-black hover:bg-neutral-100"
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>
          )}

        </header>
      </div>

      {/* CORE PAGE CONTENT OUTLET */}
      <main className="flex-grow w-full">
        {renderPage()}
      </main>

        {/* FOOTER */}
        <footer className="bg-white text-neutral-600 border-t border-neutral-200">
          
          {/* Main Footer Block */}
          <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-12 gap-10">
            
            {/* Col 1: Brand & Logo */}
            <div className="md:col-span-4 space-y-4">
              <div className="flex items-center gap-2.5">
                <h3 className="text-2xl font-serif font-black tracking-widest text-black">PALLAVI</h3>
              </div>
              <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed">
                Serving the Assam merchant community with premium teas and customized blends sourced directly from renowned regional estates. Every batch is carefully curated to ensure authenticity and consistent client standards.
                 </p>
              <div className="flex gap-3 pt-3">
                <a href="https://www.facebook.com/share/18qrxpXpD6/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 bg-neutral-50 border border-neutral-200 hover:bg-black hover:text-white text-neutral-600 rounded-lg flex items-center justify-center cursor-pointer duration-300 shadow-xs">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://www.instagram.com/pallaviteatrading?igsh=MjFqNTJ4bDMxNGU4" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 bg-neutral-50 border border-neutral-200 hover:bg-black hover:text-white text-neutral-600 rounded-lg flex items-center justify-center cursor-pointer duration-300 shadow-xs">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://www.linkedin.com/in/pallaviteatrading-0b8178416/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 bg-neutral-50 border border-neutral-200 hover:bg-black hover:text-white text-neutral-600 rounded-lg flex items-center justify-center cursor-pointer duration-300 shadow-xs font-sans">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Col 2: Fast Navigation links */}
            <div className="md:col-span-4 space-y-4">
              <h4 className="text-black font-sans font-bold text-xs uppercase tracking-widest">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    id={`footer-link-${link.id}`}
                    onClick={() => navigateTo(link.id)}
                    className="text-left py-1 hover:text-black duration-150 cursor-pointer text-neutral-500 font-sans font-medium"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Col 3: Contact Details */}
            <div className="md:col-span-4 space-y-4">
              <h4 className="text-black font-sans font-bold text-xs uppercase tracking-widest">Corporate Contact</h4>
              <div className="space-y-3.5 text-xs sm:text-sm text-neutral-600">
                
                <div className="flex gap-2.5 items-start">
                  <Phone className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                  <span className="text-neutral-800 font-medium">+91-7896556453</span>
                </div>

                <div className="flex gap-2.5 items-start">
                  <Mail className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                  <span className="text-neutral-800 font-medium">govindsaboo1@gmail.com</span>
                </div>

                <a 
                  href="https://maps.app.goo.gl/juRUhJqHVkDiePJ2A" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex gap-2.5 items-start hover:opacity-85 duration-150 group/footermap cursor-pointer block"
                >
                  <MapPin className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5 group-hover/footermap:text-black" />
                  <div>
                    <span className="text-neutral-605 block leading-snug group-hover/footermap:underline">
                      Pallavi Tea & Trading Co., House no. 10, Bylane no. 1, Rehabari, Guwahati, Assam - 781008, India
                    </span>
                    <span className="block text-[11px] font-bold text-neutral-800 mt-1 uppercase tracking-wider">
                      📍 Open Live Location ↗
                    </span>
                  </div>
                </a>

              </div>
            </div>

          </div>

          {/* Bottom copyright segment */}
          <div className="border-t border-neutral-200 bg-neutral-50 py-6 px-6 text-center text-xs text-neutral-500">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
              <span>
                &copy; {new Date().getFullYear()} Pallavi Tea and Trading Company. All Rights Reserved.
              </span>
              <div className="flex flex-wrap justify-center items-center gap-3">
                <button 
                  onClick={() => setShowTermsModal(true)} 
                  className="hover:text-black duration-150 cursor-pointer font-sans bg-transparent border-none p-0 text-xs text-neutral-500 hover:underline"
                >
                  Terms of Trade
                </button>
                <span className="text-neutral-300">|</span>
                <button 
                  onClick={() => setShowPrivacyModal(true)} 
                  className="hover:text-black duration-150 cursor-pointer font-sans bg-transparent border-none p-0 text-xs text-neutral-500 hover:underline"
                >
                  Privacy Policy
                </button>
                
                {termsAccepted && (
                  <>
                    <span className="text-neutral-300">|</span>
                    <span className="inline-flex items-center gap-1 text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                      <Check className="w-3 h-3 shrink-0" /> Approved
                    </span>
                    <button 
                      onClick={handleRevokeTerms}
                      className="text-[9px] text-neutral-400 hover:text-red-500 hover:underline cursor-pointer bg-transparent border-none p-0"
                      title="Clear Accepted Status"
                    >
                      (Reset)
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>

        </footer>

      {/* FLOATING TERMS COMPLIANCE/CONSENT BANNER */}
      {!termsAccepted && (
        <div 
          id="terms-consent-banner" 
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-sm bg-white border border-neutral-205 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-5 z-40 duration-300 font-sans"
        >
          <div className="flex items-start gap-3">
            <div className="p-2 bg-neutral-100 rounded-xl text-black shrink-0">
              <Shield className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div className="space-y-1.5 text-left">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">Trade Integrity</h4>
              <h3 className="text-sm font-serif font-black text-black">Accept Sourcing Terms & Policies</h3>
              <p className="text-[11px] leading-relaxed text-neutral-500">
                To guarantee optimal sourcing standards, trade telemetry, and custom first-flush evaluations, please agree to our corporate terms.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <button
                  id="banner-accept-terms-btn"
                  onClick={handleAcceptTerms}
                  className="px-3.5 py-1.5 bg-black text-[#D4AF37] hover:bg-neutral-800 text-[10px] font-bold uppercase tracking-widest rounded-lg cursor-pointer duration-150 transition-all shadow-xs"
                >
                  Accept Terms
                </button>
                <button
                  id="banner-read-terms-btn"
                  onClick={() => setShowTermsModal(true)}
                  className="px-3 py-1.5 bg-neutral-100 text-neutral-700 hover:bg-neutral-200 text-[10px] font-bold uppercase tracking-widest rounded-lg cursor-pointer duration-150 transition-all"
                >
                  Read terms
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TERMS OF TRADE DIALOG */}
      {showTermsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs font-sans">
          <div 
            id="terms-of-trade-modal"
            className="bg-white border border-neutral-200 rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="p-5 border-b border-neutral-150 flex justify-between items-center bg-neutral-50">
              <div className="flex items-center gap-2.5">
                <FileText className="w-5 h-5 text-[#D4AF37]" />
                <div className="text-left">
                  <h3 className="font-serif font-black text-base text-black">Terms of Trade & Bulk Sourcing</h3>
                  <p className="text-[9px] text-neutral-500 uppercase tracking-widest font-semibold">Active Catalog Season Guarantee</p>
                </div>
              </div>
              <button 
                onClick={() => setShowTermsModal(false)}
                className="p-1.5 opacity-60 hover:opacity-100 hover:bg-neutral-200 rounded-full duration-150 cursor-pointer"
              >
                <X className="w-5 h-5 text-black" />
              </button>
            </div>
            
            {/* Content scrolling */}
            <div className="p-6 overflow-y-auto space-y-6 text-xs text-neutral-600 leading-relaxed text-left estimation-scroll">
              <section className="space-y-2">
                <h4 className="font-serif font-black text-sm text-black">1. Governance and Brokerage Framework</h4>
                <p>
                  Pallavi Tea and Trading Company (established 1999) operates as a premier registered tea broking and trading organization headquartered in Assam, India. All brokerage protocols, sample evaluations, and bulk sales align fully with the Tea Board of India, private treaty frameworks, and the official operational guidelines of the Guwahati Tea Auction Centre (GTAC). Facilitation covers ex-garden cataloging, public auction clearing, and customized private-label sourcing contracts.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-serif font-black text-sm text-black">2. Sample Appraisals, Vetting and Dispatch</h4>
                <p>
                  To protect the commercial integrity of our partner estates, all requests submitted through our sampling registry are strictly vetted by our dispatch office. Samples of specific leaf grades (including BOP, BOPSM, BP, OF, PD, DUST, and Secondary) are supplied strictly for commercial trading evaluations. Physical samples cannot be resold or diverted for alternative retail packaging without written merchant approvals. For real-time updates regarding sample dispatch or to amend your submission, please contact our broking desk at <strong>+91-7896556453</strong>.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-serif font-black text-sm text-black">3. Pricing Indices & Financial Settlement</h4>
                <p>
                  All catalogued price indications are represented in Indian Rupees (INR) per Kilogram, reflecting real-time garden auction rates or private treaty negotiations. Orders depend on certified bank clearing drafts, irrevocable Letters of Credit (L/C), or structured payment terms verified by our credit division. Inquiries regarding payment channels, tax invoicing, or custom tea blends should be directed to our official mailbox at <strong>govindsaboo1@gmail.com</strong>.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-serif font-black text-sm text-black">4. Delivery, Storage & Estate Origin Guarantees</h4>
                <p>
                  Bulk logistics are cleared directly from regional storage warehouses in Guwahati, Assam. Standard delivery parameters are processed on ex-warehouse or Free On Board (FOB) terms unless specified otherwise in the transactional service level agreement. Every batch is guaranteed to originate directly from the catalogued plantation source, preserving leaf grade, flavor spectrum, and estate-mark purity.
                </p>
              </section>
            </div>

            {/* Footer buttons */}
            <div className="p-4 border-t border-neutral-100 bg-neutral-50 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                {termsAccepted ? (
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                    <Check className="w-3.5 h-3.5" /> Terms Approved
                  </span>
                ) : (
                  <span className="text-[10px] text-neutral-400 font-medium">Please accept to confirm compliance.</span>
                )}
              </div>
              <div className="flex gap-2 w-full sm:w-auto justify-end">
                {!termsAccepted && (
                  <button
                    id="modal-accept-terms-btn"
                    onClick={() => {
                      handleAcceptTerms();
                      setShowTermsModal(false);
                    }}
                    className="flex-1 sm:flex-initial px-4 py-2 bg-black text-[#D4AF37] hover:bg-neutral-800 text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer duration-150 shadow-xs text-nowrap"
                  >
                    Accept & Agree
                  </button>
                )}
                <button
                  onClick={() => setShowTermsModal(false)}
                  className="flex-1 sm:flex-initial px-4 py-2 bg-neutral-200 text-neutral-700 hover:bg-neutral-300 text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer duration-150 text-nowrap"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PRIVACY POLICY DIALOG */}
      {showPrivacyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs font-sans">
          <div 
            id="privacy-policy-modal"
            className="bg-white border border-neutral-200 rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="p-5 border-b border-neutral-150 flex justify-between items-center bg-neutral-50">
              <div className="flex items-center gap-2.5">
                <Shield className="w-5 h-5 text-[#D4AF37]" />
                <div className="text-left">
                  <h3 className="font-serif font-black text-base text-black">Privacy Protection & Trade Telemetry</h3>
                  <p className="text-[9px] text-neutral-500 uppercase tracking-widest font-semibold">Mercantile Integrity Compliance</p>
                </div>
              </div>
              <button 
                onClick={() => setShowPrivacyModal(false)}
                className="p-1.5 opacity-60 hover:opacity-100 hover:bg-neutral-200 rounded-full duration-150 cursor-pointer"
              >
                <X className="w-5 h-5 text-black" />
              </button>
            </div>
            
            {/* Content scrolling */}
            <div className="p-6 overflow-y-auto space-y-6 text-xs text-neutral-600 leading-relaxed text-left estimation-scroll">
              <section className="space-y-2">
                <h4 className="font-serif font-black text-sm text-black">1. Organizational Sourcing & Data Protection</h4>
                <p>
                  At Pallavi Tea and Trading Company, we are comprehensively committed to maintaining the ultimate confidentiality of your organizational telemetry. When you submit customized trade requests, specify target price guidelines, or choose sample blends, all company identifiers are archived within safeguarded internal database architectures. We do not maintain public indices of our sourcing buyers or associate transaction logs with public profiles.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-serif font-black text-sm text-black">2. Sample Request Data & Secure Transit</h4>
                <p>
                  Corporate contact parameters collected via the sample request engine—including buyer name, phone coordinates, active email addresses, target price-grade indexes, and geographical delivery marks—are transmitted securely via encrypted end-to-end industry pathways (such as Formspree servers). This information is exclusively utilized by our logistics, customs clearance, and courier partners based out of our Rehabari, Guwahati, Assam headquarters to formulate and deliver your physical evaluation packages.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-serif font-black text-sm text-black">3. Non-Disclosure & Anti-Commercialization Clause</h4>
                <p>
                  We enforce strict non-disclosure policies regarding tea-mark preferences, bulk target volumes, or merchant inquiry patterns. Pallavi Tea and Trading Company will never sell, lease, or license buyer histories, custom tea blend configurations, or delivery channels to third-party telemarketing networks, advertising lists, or commercial databases. All information serves standard, direct business-to-business corporate tea trade operations exclusively.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-serif font-black text-sm text-black">4. Controller Contact & Compliance Rights</h4>
                <p>
                  Registered procurement officers and domestic wholesalers retain full administrative authority to request detailed summaries of their catalogued transaction records, update distribution coordinates, or completely purge their client entries from our systems. For all legal queries, data-erasure mandates, or operational requests, please contact our records manager directly via phone at <strong>+91-7896556453</strong> or send an authenticated email to <strong>govindsaboo1@gmail.com</strong>.
                </p>
              </section>
            </div>

            {/* Footer buttons */}
            <div className="p-4 border-t border-neutral-100 bg-neutral-50 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                {termsAccepted ? (
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                    <Check className="w-3.5 h-3.5" /> Privacy Configured
                  </span>
                ) : (
                  <span className="text-[10px] text-neutral-400 font-medium">Please accept terms to consent fully.</span>
                )}
              </div>
              <div className="flex gap-2 w-full sm:w-auto justify-end">
                {!termsAccepted && (
                  <button
                    id="modal-accept-privacy-btn"
                    onClick={() => {
                      handleAcceptTerms();
                      setShowPrivacyModal(false);
                    }}
                    className="flex-1 sm:flex-initial px-4 py-2 bg-black text-[#D4AF37] hover:bg-neutral-800 text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer duration-150 shadow-xs text-nowrap"
                  >
                    Accept & Agree
                  </button>
                )}
                <button
                  onClick={() => setShowPrivacyModal(false)}
                  className="flex-1 sm:flex-initial px-4 py-2 bg-neutral-200 text-neutral-700 hover:bg-neutral-300 text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer duration-150 text-nowrap"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FLOAT BACK TO TOP BUTTON */}
      {showScrollTop && (
        <button
          id="scroll-to-top-button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 p-3 bg-black border border-neutral-800 hover:bg-neutral-900 text-white hover:text-neutral-200 rounded-full shadow-lg duration-300 z-50 cursor-pointer transition-all"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
}
