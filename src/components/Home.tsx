import React, { useRef } from "react";
import { Garden, PageId, ServiceItem } from "../types";
import { TOP_GARDENS, SERVICES } from "../data";
import { MapPin, ArrowRight, Phone, Mail, Clock, Globe, ArrowDown, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import PallaviBrandLogo from "./PallaviBrandLogo";
import teawebBg from "../images/teaweb.jpg";

interface HomeProps {
  onNavigate: (page: PageId) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("home-about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      // Scroll by exactly one viewport width (e.g. 1 card on mobile, 2 cards on desktop)
      scrollContainerRef.current.scrollBy({ left: -scrollContainerRef.current.clientWidth, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      // Scroll by exactly one viewport width (e.g. 1 card on mobile, 2 cards on desktop)
      scrollContainerRef.current.scrollBy({ left: scrollContainerRef.current.clientWidth, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full">
      {/* 1. HERO SECTION (100vh full height luxury design in Black & White / Silver theme) */}
      <section 
        className="relative overflow-hidden min-h-[92vh] sm:min-h-screen flex items-center justify-center text-black bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${teawebBg})` 
         
        }}
      >
        {/* Dark warm overlay keeps the tea image visible while preserving title contrast */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
        <div className="absolute inset-0 bg-linear-to-b from-black/45 via-black/10 to-black/35 pointer-events-none" />

        {/* Soft warm highlights to keep the golden title prominent */}
        <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-amber-300/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-emerald-100/10 blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center rounded-3xl bg-black/20 px-6 sm:px-10 py-10 sm:py-12 border border-white/10 shadow-2xl backdrop-blur-[2px]"
          >
            {/* Bold golden brand title with absolutely nothing in the background */}
            <div className="mb-4">
              <h1 className="text-5xl sm:text-8xl md:text-9xl font-serif font-black tracking-[0.12em] text-[#D4AF37] select-none leading-none drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)]">
                PALLAVI
              </h1>
            </div>

            {/* Subtitle in elegant black */}
            <span className="text-[13px] sm:text-[17px] font-sans text-white/90 font-bold tracking-[0.35em] uppercase mb-4 block">
              Tea & Trading Company
            </span>

            {/* Tagline in crisp premium format */}
            <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto mb-10 leading-relaxed font-sans tracking-wider font-medium">
              Premium Tea From India's Finest Gardens
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-sm justify-center items-center">
              <button
                id="hero-request-sample-button"
                onClick={() => onNavigate("sample-request")}
                className="w-full px-8 py-3.5 bg-white hover:bg-neutral-100 text-black duration-300 rounded-lg font-sans font-bold shadow-lg hover:shadow-black/15 flex items-center justify-center gap-2 group cursor-pointer border border-white/80 transition-all"
              >
                Sample
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 duration-300 text-black" />
              </button>
              <button
                id="hero-contact-button"
                onClick={() => onNavigate("contact")}
                className="w-full px-8 py-3.5 bg-white hover:bg-neutral-100 duration-300 rounded-lg font-sans font-bold text-black border-2 border-white/80 hover:border-neutral-200 cursor-pointer transition-all shadow-lg hover:shadow-black/10 flex items-center justify-center group"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 duration-300 text-black" />
              </button>
            </div>

            {/* Scroll Down Button Indicator */}
            <div className="mt-16 sm:mt-24 flex justify-center">
              <button
                id="hero-scroll-down-button"
                onClick={handleScrollToAbout}
                className="flex flex-col items-center gap-2 text-neutral-600 hover:text-black duration-200 transition-colors group cursor-pointer focus:outline-none"
              >
                <span className="text-[10px] tracking-widest font-sans uppercase font-bold text-neutral-500">Scroll Down</span>
                <ArrowDown className="w-4 h-4 text-black animate-bounce group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. ABOUT US PREVIEW */}
      <section id="home-about-section" className="bg-brand-cream py-20 px-6 scroll-mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[#D4AF37] font-sans font-bold tracking-wider uppercase text-xs">Discover Our Legacy</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-black mt-2 mb-6">Expertise, Integrity, and Solid Networks</h2>
          
          <div className="text-brand-charcoal/85 space-y-4 max-w-3xl mx-auto text-center leading-relaxed font-sans text-sm sm:text-base">
            <p>Pallavi Tea and Trading Company, established in 1999, is a trusted tea broking firm based in Assam with over 27 years of experience in the tea industry. The company works closely with 128+ tea gardens, factories and specializes in handling both premium quality teas and large volume orders. It ensures reliable, smooth, and transparent transactions across the tea market.
            </p>
          </div>

          <div className="mt-8">
            <button
              id="about-read-more-button"
              onClick={() => onNavigate("about")}
              className="inline-flex items-center gap-2 font-sans font-bold text-black hover:text-[#D4AF37] duration-300 group cursor-pointer"
            >
              Read Our History & Sourcing Advantage
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. TOP GARDENS SECTION WITH SINGLE SQUARE viewport */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-brand-gold font-sans font-semibold tracking-wider uppercase text-sm">Hand-Curated Estates</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-green mt-2">Top Tea Gardens</h2>
            <div className="w-16 h-1 bg-brand-gold mx-auto mt-4 rounded-full" />
            <p className="text-brand-charcoal/70 mt-4 max-w-xl mx-auto">
              Explore our carefully selected tea gardens, each known for its unique growing conditions and years of expert cultivation.
            </p>
          </div>          {/* The wide box viewport holding self-scrollable List of Gardens (exactly 2 side-by-side on desktop) */}
          <div className="w-full max-w-4xl mx-auto bg-brand-cream/35 border-2 border-brand-green/15 rounded-3xl shadow-xl flex flex-col p-6 sm:p-8 relative overflow-hidden group min-h-[460px]">
            
            {/* Abs pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(184,134,11,0.06),transparent_65%)] pointer-events-none" />

            {/* Portal header inside wide box */}
            <div className="text-center pb-4 border-b border-brand-green/10 mb-4 shrink-0 relative z-10">
              <span className="text-brand-gold uppercase text-[10px] tracking-widest font-bold">Press controls to explore</span>
              <h3 className="text-lg font-serif font-bold text-brand-green mt-0.5">Top Estates Chamber</h3>
            </div>

            {/* Inner Content Area containing Scroll elements and navigation triggers */}
            <div className="relative flex-grow flex items-center min-h-0 px-2 lg:px-4">
              
              {/* Left Arrow button (<) */}
              <button
                type="button"
                onClick={handleScrollLeft}
                className="absolute left-1 z-20 w-11 h-11 bg-white border border-brand-cream text-brand-green hover:bg-brand-gold hover:text-white rounded-full flex items-center justify-center shadow-md active:scale-95 duration-200 cursor-pointer focus:outline-none transition-all"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
              </button>

              {/* The actual horizontal scroll container (hidden scrollbar) */}
              <div
                ref={scrollContainerRef}
                className="w-full h-full overflow-x-auto overflow-y-hidden flex flex-row gap-5 pb-2 snap-x snap-mandatory select-text relative z-10 scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              >
                {TOP_GARDENS.map((garden) => (
                  <div
                    key={garden.id}
                    className="snap-start bg-white p-5 rounded-2xl border border-brand-cream shadow-xs hover:border-brand-gold/30 hover:shadow-sm duration-300 flex flex-col justify-between w-full md:w-[calc((100%-20px)/2)] shrink-0 select-text"
                  >
                    <div>
                      {/* Small badge/emoji */}
                      <div className="flex justify-between items-start mb-3">
                        <div className="w-12 h-12 shrink-0 bg-brand-cream rounded-xl flex items-center justify-center text-2xl shadow-inner">
                          {garden.emoji}
                        </div>
                        <div className="flex items-center gap-1 text-brand-gold text-[10px] font-bold uppercase tracking-wider bg-brand-cream/40 px-2.5 py-1 rounded-md">
                          <MapPin className="w-3 h-3" />
                          <span>{garden.location}</span>
                        </div>
                      </div>
                      
                      <h4 className="font-serif font-bold text-brand-green text-base mt-2 line-clamp-1">{garden.name}</h4>
                      <p className="text-brand-charcoal/70 text-xs mt-1.5 leading-relaxed line-clamp-3">{garden.description}</p>
                      
                      <div className="flex flex-wrap gap-1 mt-3">
                        {garden.teaTypes.map((type) => (
                          <span key={type} className="px-2 py-0.5 bg-brand-sage/10 text-brand-green rounded text-[9px] font-semibold border border-brand-sage/5">
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3.5 border-t border-brand-cream mt-4 flex flex-col gap-2 shrink-0">
                      <span className="text-[10px] font-medium text-brand-charcoal/50 italic leading-none">Specialty: {garden.production}</span>
                      <button
                        id={`garden-chamber-btn-${garden.id}`}
                        onClick={() => onNavigate("gardens")}
                        className="w-full py-2 bg-brand-green hover:bg-brand-gold text-white font-sans font-semibold text-[10px] uppercase rounded tracking-wider duration-200 cursor-pointer text-center"
                      >
                        Know More
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Arrow button (>) */}
              <button
                type="button"
                onClick={handleScrollRight}
                className="absolute right-1 z-20 w-11 h-11 bg-white border border-brand-cream text-brand-green hover:bg-brand-gold hover:text-white rounded-full flex items-center justify-center shadow-md active:scale-95 duration-200 cursor-pointer focus:outline-none transition-all"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-6 h-6 stroke-[2.5]" />
              </button>

            </div>

            {/* Hint footer */}
            <div className="pt-3 border-t border-brand-green/10 text-center shrink-0 flex items-center justify-between text-[11px] text-brand-charcoal/40 font-medium relative z-10 mt-2">
              <span className="flex items-center gap-1">Click arrows to browse estates</span>
              <span className="font-mono text-[9px] uppercase tracking-widest">{TOP_GARDENS.length} Estates Loaded</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES PREVIEW */}
      <section className="bg-brand-cream/60 py-20 px-6 border-y border-brand-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-brand-gold font-sans font-semibold tracking-wider uppercase text-sm">Professional Solutions</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-green mt-2">Our B2B services</h2>
            <div className="w-16 h-1 bg-brand-gold mx-auto mt-4 rounded-full" />
            <p className="text-brand-charcoal/70 mt-4 max-w-xl mx-auto">
              From sourcing to final delivery, our professional services cover all your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white p-6 rounded-lg border border-brand-cream shadow-sm hover:shadow-md duration-300"
              >
                <div className="text-4xl mb-4 p-3 bg-brand-cream w-fit rounded-lg">{service.icon}</div>
                <h3 className="text-lg font-serif font-bold text-brand-green mb-2">{service.title}</h3>
                <p className="text-brand-charcoal/70 text-sm leading-relaxed mb-4">{service.description}</p>
                <button
                  id={`service-learn-more-${service.id}`}
                  onClick={() => onNavigate("services")}
                  className="inline-flex items-center gap-1.5 text-xs text-brand-gold font-bold uppercase tracking-wider hover:text-brand-green duration-200 cursor-pointer"
                >
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CONTACT PREVIEW */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto rounded-2xl bg-brand-green overflow-hidden relative shadow-2xl text-white">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(184,134,11,0.15),transparent_60%)] pointer-events-none" />
          
          <div className="p-8 sm:p-12 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-brand-gold font-sans font-bold uppercase text-xs tracking-wider">Ready to elevate your supply?</span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold mt-2 mb-4">Partner with India's Tea Experts</h2>
                <p className="text-brand-cream/80 text-sm leading-relaxed mb-6">
                 Contact our team to check tea grades, request custom packaging, or order the quantity you need. We deliver reliable value.
                </p>

                <div className="space-y-3.5 text-sm">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4.5 h-4.5 text-brand-gold shrink-0" />
                    <span className="text-brand-cream font-medium">91-7896556453</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4.5 h-4.5 text-brand-gold shrink-0" />
                    <span className="text-brand-cream font-medium">govindsaboo1@gmail.com</span>
                  </div>
                  <a 
                    href="https://maps.app.goo.gl/juRUhJqHVkDiePJ2A" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-3 hover:opacity-85 duration-200 group/maps cursor-pointer"
                  >
                    <MapPin className="w-4.5 h-4.5 text-brand-gold shrink-0" />
                    <div>
                      <span className="text-brand-cream font-medium group-hover/maps:underline">Guwahati, Assam - India</span>
                      <span className="block text-[9px] text-brand-gold/80 font-bold uppercase tracking-wider mt-0.5">Click for Live Location ↗</span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row md:flex-col gap-3 justify-center">
                <button
                  id="home-contact-send-message-button"
                  onClick={() => onNavigate("contact")}
                  className="w-full px-6 py-3 bg-brand-gold hover:bg-brand-gold/90 text-white font-sans font-semibold rounded text-sm text-center duration-200 cursor-pointer shadow-md"
                >
                  Send Message
                </button>
                <button
                  id="home-contact-view-location-button"
                  onClick={() => {
                    onNavigate("contact");
                    setTimeout(() => {
                      const el = document.getElementById("corporate-location-section");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }, 200);
                  }}
                  className="w-full px-6 py-3 bg-transparent border border-white hover:bg-white/15 text-white font-sans font-semibold rounded text-sm text-center duration-200 cursor-pointer"
                >
                  View Location
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
