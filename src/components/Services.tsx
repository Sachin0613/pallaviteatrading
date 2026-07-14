import React from "react";
import { SERVICES } from "../data";
import { PageId } from "../types";
import { HelpCircle, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

import logo1 from "../images/logo1.jpg";
import logo2 from "../images/logo2.jpg";
import logo3 from "../images/logo3.jpg";
import logo4 from "../images/logo4.jpg";
import logo5 from "../images/logo5.jpg";
import logo6 from "../images/logo6.jpg";
import logo7 from "../images/logo7.jpg";
import logo8 from "../images/logo8.jpg";
import logo9 from "../images/logo9.jpg";
interface ServicesProps {
  onInquireService: (serviceName: string) => void;
}


const SERVICE_IMAGES: Record<string, string> = {
  "trading": logo1,
  "sampling": logo2,
  "procurement": logo3,
  "inspection": logo4,
  "bulk-supply": logo5,
  "tea-tasting": logo6,
  "tea-consultation": logo7,
  "tea-blending": logo8,
  "warehousing":logo9
};
export default function Services({ onInquireService }: ServicesProps) {
  return (
    <div className="w-full bg-white">
      {/* HERO SECTION */}
      <section className="bg-brand-green py-16 sm:py-24 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(184,134,11,0.1),transparent_60%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <span className="text-brand-gold uppercase text-xs font-semibold tracking-widest block mb-2">B2B Capabilities</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">Our Premium Services</h1>
          <p className="text-brand-cream/80 text-base sm:text-lg max-w-xl mx-auto">
            Providing end-to-end expertise in bulk trading, procurement, and standard-setting evaluation across India's tea hubs.
          </p>
        </div>
      </section>

      {/* SERVICES LIST - ALTERNATING */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="space-y-24 sm:space-y-32">
          {SERVICES.map((service, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center"
              >
                {/* Icon block: Curved Triangle Service Photo with Glow and Floating Shape */}
                <div
                  className={`md:col-span-12 lg:col-span-4 flex justify-center relative py-6 items-center ${
                    isEven ? "md:order-1" : "md:order-2"
                  }`}
                >
                  {/* Inline Clip Path Definition specific to this service card */}
                  <svg className="absolute w-0 h-0" width="0" height="0">
                    <defs>
                      <clipPath id={`service-clip-${service.id}`} clipPathUnits="objectBoundingBox">
                        <path d="M 0.5,0.05 C 0.75,0.08 0.95,0.42 0.92,0.72 C 0.88,0.92 0.65,0.90 0.5,0.90 C 0.35,0.90 0.12,0.92 0.08,0.72 C 0.05,0.42 0.25,0.08 0.5,0.05 Z" />
                      </clipPath>
                    </defs>
                  </svg>

                  {/* Wrapper with subtle float floating motion */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                    className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center z-10"
                  >
                    {/* Golden/Emerald Glow backing */}
                    <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-brand-gold/25 via-brand-cream/15 to-brand-green/20 blur-2xl opacity-90 pointer-events-none" />

                    {/* Background shadow silhouette representing a gray style shadow offset */}
                    <div 
                      className="absolute inset-1.5 bg-neutral-250/70 pointer-events-none shadow-md"
                      style={{ clipPath: `url(#service-clip-${service.id})` }}
                    />

                    {/* Main Photo with sharp clipping */}
                    <div 
                      className="relative w-full h-full bg-white shadow-xl overflow-hidden group cursor-pointer"
                      style={{ 
                        clipPath: `url(#service-clip-${service.id})`,
                        filter: "drop-shadow(0 15px 25px rgba(0,0,0,0.15))"
                      }}
                    >
                      <img 
                        src={SERVICE_IMAGES[service.id] || "https://picsum.photos/seed/service/400/400"} 
                        alt={service.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 ease-out scale-100 group-hover:scale-110"
                      />
                    </div>

                    {/* Hovering circular badge at bottom-right containing the service emoji */}
                   
                  </motion.div>
                </div>

                {/* Content block */}
                <div
                  className={`md:col-span-12 lg:col-span-8 space-y-4 ${
                    isEven ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <div className="space-y-1">
                    <span className="text-brand-gold font-sans font-bold text-xs uppercase tracking-widest">
                      Service 0{idx + 1}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-green">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-brand-charcoal/80 text-sm sm:text-base leading-relaxed">
                    {service.detailedDescription || service.description}
                  </p>

                  <div className="pt-2">
                    <button
                      id={`inquire-service-${service.id}`}
                      onClick={() => onInquireService(service.title)}
                      className="px-5 py-2.5 bg-brand-green hover:bg-brand-brown text-white font-sans font-semibold text-xs rounded tracking-widest uppercase flex items-center justify-center gap-2 duration-200 cursor-pointer shadow"
                    >
                      Inquire About {service.title}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
      

      {/* COMMITMENT SECTION */}
      <section className="bg-brand-cream/40 border-t border-brand-cream py-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <HelpCircle className="w-10 h-10 text-brand-gold mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-green">Need a Tailored Contract?</h2>
          <p className="text-brand-charcoal/70 text-sm max-w-lg mx-auto leading-relaxed">
            We are trusted tea brokers, connecting tea growers and buyers through reliable sourcing, fair deals, and efficient procurement. Get in touch with our advisory team to discuss your tea requirements.
          </p>
          <div>
            <button
              id="services-tailored-contract-button"
              onClick={() => onInquireService("Custom Sourcing Contract")}
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-gold hover:bg-brand-gold/90 text-white font-sans font-semibold rounded text-sm duration-200 cursor-pointer"
            >
              Consult Our Tea Master
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
