import React, { useState, useEffect, Component, type ReactNode } from "react";
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

const VALID_PAGE_IDS: PageId[] = [
  "home",
  "about",
  "gardens",
  "partners",
  "services",
  "sample-request",
  "contact",
];

const getPageFromPath = (pathname: string): PageId => {
  const normalizedPath = pathname.replace(/\/+$/, "") || "/";
  const page = VALID_PAGE_IDS.find(
    (pageId) => (pageId === "home" ? "/" : `/${pageId}`) === normalizedPath
  );

  return page ?? "home";
};

class AppErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.error("Pallavi app render error:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-white px-6">
          <div className="max-w-md text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">Pallavi Tea</p>
            <h1 className="mt-3 text-3xl font-serif font-black text-black">Something went wrong</h1>
            <p className="mt-3 text-sm text-neutral-600">
              The section navigation hit an unexpected render issue. Please refresh the page or return home.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-black px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#D4AF37] cursor-pointer"
            >
              Reload page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(() =>
    getPageFromPath(window.location.pathname)
  );
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

  const scrollToTop = () => {
    if (typeof window === "undefined") return;

    try {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    } catch {
      try {
        window.scrollTo(0, 0);
      } catch {
        // no-op
      }
    }
  };

  const handleAcceptTerms = () => {
    try {
      localStorage.setItem("pallavi_terms_accepted", "true");
    } catch {
      // Gracefully bypass if localStorage access is prohibited under sandboxed iframes
    }
    setTermsAccepted(true);
  };

  const handleRevokeTerms = () => {
    try {
      localStorage.removeItem("pallavi_terms_accepted");
    } catch {}
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
      if (typeof window === "undefined") return;
      setIsScrolled(window.scrollY > 30);
      setShowScrollTop(window.scrollY > 400);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPageFromPath(window.location.pathname));
      setMobileMenuOpen(false);

      if (window.location.hash === "#location") {
        window.setTimeout(() => {
          document.getElementById("corporate-location-section")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 0);
      } else {
        scrollToTop();
      }
    };

    handlePopState();
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigateTo = (page: string) => {
    if (page === "location") {
      window.history.pushState(null, "", "/contact#location");
      setCurrentPage("contact");
      setMobileMenuOpen(false);

      window.setTimeout(() => {
        try {
          const locationSection = document.getElementById("corporate-location-section");
          if (locationSection) {
            locationSection.scrollIntoView({ behavior: "smooth", block: "start" });
          } else {
            scrollToTop();
          }
        } catch {
          scrollToTop();
        }
      }, 120);
      return;
    }

    const safePage = VALID_PAGE_IDS.includes(page as PageId) ? (page as PageId) : "home";
    const nextPath = safePage === "home" ? "/" : `/${safePage}`;
    if (window.location.pathname !== nextPath || window.location.hash) {
      window.history.pushState(null, "", nextPath);
    }
    setCurrentPage(safePage);
    setMobileMenuOpen(false);

    if (typeof window !== "undefined") {
      requestAnimationFrame(() => {
        scrollToTop();
      });
    }
  };

  const handleSelectSampleRequest = (gardenName: string) => {
    setPrefilledGardenName(gardenName);
    navigateTo("sample-request");
  };

  const handleInquirePartner = (partnerName: string) => {
    setPrefilledMessage(
      `Dear Pallavi Tea & Trading Co., we are interested in exploring bulk sourcing options and seasonal catalogs for your partner estate, "${partnerName}". We would appreciate it if you could supply the relevant trade details and pricing schedule.`
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
    <AppErrorBoundary>
      <div className="min-h-screen bg-white font-sans text-brand-charcoal flex flex-col justify-between selection:bg-brand-sage/30 selection:text-[#D4AF37]">
        <div className="sticky top-0 z-50 w-full transition-all duration-300 py-2 sm:py-4 px-4 sm:px-6">
          <header 
            className={`mx-auto transition-all duration-500 ${
              isScrolled 
                ? "max-w-6xl rounded-[30px] sm:rounded-[50px] bg-neutral-100/85 backdrop-blur-md border border-neutral-300/60 shadow-[0_12px_30px_rgba(0,0,0,0.06)] px-5 sm:px-8 py-2.5" 
                : "w-full bg-neutral-100/40 backdrop-blur-md border-b border-neutral-250/30 px-6 py-4"
            }`}
          >
            <div className="max-w-6xl mx-auto flex justify-between items-center">
              <div
                onClick={() => navigateTo("home")}
                className="flex items-center gap-2.5 cursor-pointer group"
              >
                <div className="relative w-9 h-9 bg-black border border-neutral-800 text-[#D4AF37] rounded-xl flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.12)] group-hover:scale-[1.02] transition-transform duration-200">
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

        <main className="flex-grow w-full">
          {renderPage()}
        </main>

        <footer className="bg-white text-neutral-600 border-t border-neutral-200">
          <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-4 space-y-4">
              <div className="flex items-center gap-2.5">
                <h3 className="text-2xl font-serif font-black tracking-widest text-black">PALLAVI TEA & TRADING CO.</h3>
              </div>
              <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed">
                Serving the Assam merchant community with premium teas and customized blends sourced directly from renowned regional estates. Every batch is carefully curated to ensure authenticity and trade integrity.
              </p>
              <div className="flex gap-3 pt-3">
                <a href="https://www.facebook.com/share/18qrxpXpD6/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 bg-neutral-50 border border-neutral-200 hover:bg-black hover:text-white rounded-full flex items-center justify-center text-neutral-600 duration-200">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://www.instagram.com/pallaviteatrading?igsh=MjFqNTJ4bDMxNGU4" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 bg-neutral-50 border border-neutral-200 hover:bg-black hover:text-white rounded-full flex items-center justify-center text-neutral-600 duration-200">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://www.linkedin.com/in/pallaviteatrading-0b8178416/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 bg-neutral-50 border border-neutral-200 hover:bg-black hover:text-white rounded-full flex items-center justify-center text-neutral-600 duration-200">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

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
                      Pallavi Tea & Trading Co., House No. 10, Bylane no. 1, Rehabari, Guwahati, Assam - 781008, India
                    </span>
                    <span className="block text-[11px] font-bold text-neutral-800 mt-1 uppercase tracking-wider">
                      📍 Open Live Location ↗
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>

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

        {!termsAccepted && (
          <div 
            id="terms-consent-banner" 
            className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-sm bg-white border border-neutral-205 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-5 z-40 duration-300"
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
                    className="px-3.5 py-1.5 bg-black text-[#D4AF37] hover:bg-neutral-800 text-[10px] font-bold uppercase tracking-widest rounded-lg cursor-pointer duration-150 transition-all shadow-sm"
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

        {showTermsModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs font-sans">
            <div 
              id="terms-of-trade-modal"
              className="bg-white border border-neutral-200 rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden"
            >
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

              <div className="p-6 overflow-y-auto space-y-6 text-xs text-neutral-600 leading-relaxed text-left estimation-scroll">
                <section className="space-y-2">
                  <h4 className="font-serif font-black text-sm text-black">1. Governance and Brokerage Framework</h4>
                  <p>
                    Pallavi Tea and Trading Company (established 1999) operates as a premier registered tea broking and trading organization headquartered in Assam, India. All brokerage protocols, sourcing relationships, and lot certifications are governed with a focus on integrity, fair trade, and client confidentiality.
                  </p>
                </section>

                <section className="space-y-2">
                  <h4 className="font-serif font-black text-sm text-black">2. Sample Appraisals, Vetting and Dispatch</h4>
                  <p>
                    To protect the commercial integrity of our partner estates, all requests submitted through our sampling registry are strictly vetted by our dispatch office. Samples are provided on a first-verified basis and are dispatched only after evaluation of buyer intent, grade fit, and trade legitimacy.
                  </p>
                </section>

                <section className="space-y-2">
                  <h4 className="font-serif font-black text-sm text-black">3. Pricing Indices & Financial Settlement</h4>
                  <p>
                    All catalogued price indications are represented in Indian Rupees (INR) per kilogram, reflecting current market conditions and private treaty negotiations. Orders depend on final confirmation and may be revised based on lot quality and seasonal availability.
                  </p>
                </section>

                <section className="space-y-2">
                  <h4 className="font-serif font-black text-sm text-black">4. Delivery, Storage & Estate Origin Guarantees</h4>
                  <p>
                    Bulk logistics are cleared directly from regional storage warehouses in Guwahati, Assam. Standard delivery parameters are processed on ex-warehouse or Free On Board (FOB) terms with full origin traceability maintained for each lot dispatch.
                  </p>
                </section>
              </div>

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
                      className="flex-1 sm:flex-initial px-4 py-2 bg-black text-[#D4AF37] hover:bg-neutral-800 text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer duration-150 shadow-sm"
                    >
                      Accept & Agree
                    </button>
                  )}
                  <button
                    onClick={() => setShowTermsModal(false)}
                    className="flex-1 sm:flex-initial px-4 py-2 bg-neutral-200 text-neutral-700 hover:bg-neutral-300 text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer duration-150"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {showPrivacyModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs font-sans">
            <div 
              id="privacy-policy-modal"
              className="bg-white border border-neutral-200 rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden"
            >
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

              <div className="p-6 overflow-y-auto space-y-6 text-xs text-neutral-600 leading-relaxed text-left estimation-scroll">
                <section className="space-y-2">
                  <h4 className="font-serif font-black text-sm text-black">1. Organizational Sourcing & Data Protection</h4>
                  <p>
                    At Pallavi Tea and Trading Company, we are comprehensively committed to maintaining the confidentiality of your organizational telemetry. When you submit customized trade inquiries, our staff uses those details solely for quality validation, price discussion, or dispatch planning.
                  </p>
                </section>

                <section className="space-y-2">
                  <h4 className="font-serif font-black text-sm text-black">2. Sample Request Data & Secure Transit</h4>
                  <p>
                    Corporate contact parameters collected via the sample request engine—including buyer name, phone coordinates, email addresses, target price-grade indexes, and geographic delivery details—are handled with strict data minimization and secure routing.
                  </p>
                </section>

                <section className="space-y-2">
                  <h4 className="font-serif font-black text-sm text-black">3. Non-Disclosure & Anti-Commercialization Clause</h4>
                  <p>
                    We enforce strict non-disclosure policies regarding tea-mark preferences, bulk target volumes, or merchant inquiry patterns. Pallavi Tea and Trading Company will never sell, lease, or publicize your confidential business data without your explicit consent.
                  </p>
                </section>

                <section className="space-y-2">
                  <h4 className="font-serif font-black text-sm text-black">4. Controller Contact & Compliance Rights</h4>
                  <p>
                    Registered procurement officers and domestic wholesalers retain full administrative authority to request detailed summaries of their catalogued transaction records, update distribution preferences, or withdraw future contact consent at any time.
                  </p>
                </section>
              </div>

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
                      className="flex-1 sm:flex-initial px-4 py-2 bg-black text-[#D4AF37] hover:bg-neutral-800 text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer duration-150 shadow-sm"
                    >
                      Accept & Agree
                    </button>
                  )}
                  <button
                    onClick={() => setShowPrivacyModal(false)}
                    className="flex-1 sm:flex-initial px-4 py-2 bg-neutral-200 text-neutral-700 hover:bg-neutral-300 text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer duration-150"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {showScrollTop && (
          <button
            id="scroll-to-top-button"
            onClick={() => scrollToTop()}
            className="fixed bottom-6 right-6 p-3 bg-black border border-neutral-800 hover:bg-neutral-900 text-white hover:text-neutral-200 rounded-full shadow-lg duration-300 z-50 cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </div>
    </AppErrorBoundary>
  );
}
