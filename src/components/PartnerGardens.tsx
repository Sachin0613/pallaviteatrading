import React from "react";
import { PARTNER_GARDENS } from "../data";
import { PageId } from "../types";
import { MapPin, Sparkles, Send } from "lucide-react";
import { motion } from "motion/react";

import logo1 from "../images/logo1.jpg";
import logo2 from "../images/logo2.jpg";
import logo3 from "../images/logo3.jpg";
import logo4 from "../images/logo4.jpg";
import logo5 from "../images/logo5.jpg";
import logo6 from "../images/logo6.jpg";




interface PartnerGardensProps {
  onInquire: (partnerName: string) => void;
}
const ESTATE_IMAGES: Record<string, string> = {
  "laluk-tea-factory": logo1,
  "habung-tea-industries": logo2,
  "maibelia-tea-industry": logo3,
  "kanchan-tea-industry": logo4,
  "gangmou-tea-growers": logo5,
  "belseri-tea-estate": logo6,
};
export default function PartnerGardens({ onInquire }: PartnerGardensProps) {
  return (
    <div className="w-full bg-white">
      {/* HERO SECTION */}
      <section className="bg-brand-green py-16 sm:py-24 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,155,123,0.15),transparent_60%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <span className="text-brand-gold uppercase text-xs font-semibold tracking-widest block mb-2">Our Trading Network</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">Partner Gardens</h1>
          <p className="text-brand-cream/80 text-base sm:text-lg max-w-xl mx-auto">
            A carefully certified collective of traditional family estates and high-altitude growers adhering to premium trading codes.
          </p>
        </div>
      </section>

      {/* CARDS GRID */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-gold font-sans font-semibold tracking-wider uppercase text-sm">Collective Alliance</span>
          <h2 className="text-3xl font-serif font-bold text-brand-green mt-2">Estates and Cooperatives</h2>
          <div className="w-12 h-0.5 bg-brand-gold mx-auto mt-4" />
          <p className="text-brand-charcoal/70 text-sm mt-4 max-w-lg mx-auto">
            Through sustained partnerships with these esteemed estates, we secure pristine harvests during key seasonal flushes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PARTNER_GARDENS.map((partner, idx) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-brand-cream/10 hover:bg-brand-cream/30 border border-brand-cream/50 rounded-xl overflow-hidden flex flex-col justify-between hover:shadow-xl duration-300 group"
            >
              {/* TOP CARD CONTENT */}
              <div className="p-6">
                {/* Visual accent header with Floating Curved Triangle Photo */}
                <div className="relative w-full h-44 flex items-center justify-center mb-6 bg-white/50 rounded-lg p-2 overflow-hidden border border-brand-cream/30">
                  {/* Local Clip Path specifically for this partner card */}
                  <svg className="absolute w-0 h-0" width="0" height="0">
                    <defs>
                      <clipPath id={`partner-clip-${partner.id}`} clipPathUnits="objectBoundingBox">
                        <path d="M 0.5,0.05 C 0.75,0.08 0.95,0.42 0.92,0.72 C 0.88,0.92 0.65,0.90 0.5,0.90 C 0.35,0.90 0.12,0.92 0.08,0.72 C 0.05,0.42 0.25,0.08 0.5,0.05 Z" />
                      </clipPath>
                    </defs>
                  </svg>

                  {/* Gentle float wrapper */}
                  <motion.div 
                    animate={{ y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                    className="relative w-32 h-32 flex items-center justify-center z-10"
                  >
                    {/* Shadow / Glow backdrop */}
                    <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-[#D4AF37]/20 to-brand-green/10 blur-xl opacity-90 pointer-events-none" />

                    {/* Gray shadow background layer */}
                    <div 
                      className="absolute inset-1 bg-neutral-250/60 pointer-events-none shadow-md"
                      style={{ clipPath: `url(#partner-clip-${partner.id})` }}
                    />

                    {/* Photo with fine details */}
                    <div 
                      className="relative w-full h-full bg-white overflow-hidden shadow-lg transition-transform duration-500 ease-out scale-100 group-hover:scale-105"
                      style={{ 
                        clipPath: `url(#partner-clip-${partner.id})`,
                        filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.12))"
                      }}
                    >
                      <img
  src={ESTATE_IMAGES[partner.id] ?? "https://picsum.photos/seed/harvest/400/400"}
  alt={partner.name}
  className="w-full h-full object-cover"
  onError={(e) => {
    e.currentTarget.src = "https://picsum.photos/seed/harvest/400/400";
  }}
/>
                    </div>
                  </motion.div>

                  {/* Badges container floating on the card header */}
                  
                  
                 
                </div>

                <div className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-xl font-serif font-bold text-brand-green group-hover:text-brand-gold duration-200">
                      {partner.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-brand-charcoal/60">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span>{partner.location}</span>
                    </div>
                  </div>

                  <p className="text-brand-charcoal/75 text-sm leading-relaxed italic">
                    "{partner.description}"
                  </p>

                  <div className="pt-4 border-t border-brand-cream/40">
                    <span className="text-xs font-semibold text-brand-charcoal/60 uppercase tracking-wider block mb-2">Key Crop Focus:</span>
                    <div className="flex flex-wrap gap-1">
                      {partner.teaTypes.map((type) => (
                        <span key={type} className="px-2 py-0.5 bg-brand-sage/10 text-brand-green/90 text-xs font-medium rounded border border-brand-sage/20">
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* CARD BOTTOM BUTTON */}
              <div className="p-6 border-t border-brand-cream/20 bg-brand-cream/5">
                <button
                  id={`inquire-partner-${partner.id}`}
                  onClick={() => onInquire(partner.name)}
                  className="w-full py-2.5 bg-transparent group-hover:bg-brand-green hover:bg-brand-brown group-hover:text-white border-2 border-brand-green/80 text-brand-green hover:border-transparent font-sans font-semibold text-xs rounded tracking-widest uppercase flex items-center justify-center gap-2 duration-300 cursor-pointer"
                >
                  Inquire Now
                  <Send className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
