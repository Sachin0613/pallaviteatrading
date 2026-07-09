import React from "react";
import { Award, Leaf, Shield, HeartHandshake, History, Users, TrendingUp, HelpCircle } from "lucide-react";
import { motion } from "motion/react";
import aboutImage from "../images/about.jpg";

export default function About() {
  const strengths = [
    {
      title: "27+ Years of Sourcing",
      desc: "Since 1999, we have built strong industry experience that helps us understand the market and deliver quality service.",
      icon: <History className="w-5 h-5 text-[#D4AF37]" />
    },
    {
      title: "Trusted by Industry Leaders",
      desc: "Strong relationships with iconic market names including Tata, Hindustan Lever, and Wagh Bakri.",
      icon: <Award className="w-5 h-5 text-[#D4AF37]" />
    },
    {
      title: "128 Associated Gardens",
      desc: "We work closely with tea gardens to ensure good quality, reliable supply, and fair value directly from the source.",
      icon: <Leaf className="w-5 h-5 text-[#D4AF37]" />
    },
    {
      title: "High-Volume Execution",
      desc: "Proven capability to handle premium specialty micro-grades alongside high-volume trade transactions.",
      icon: <TrendingUp className="w-5 h-5 text-[#D4AF37]" />
    },
    {
      title: "4 Lakh KG Daily Sales Sourcing Capacity",
      desc: "We can handle large orders easily and supply big buyers smoothly and reliably.",
      icon: <Shield className="w-5 h-5 text-[#D4AF37]" />
    },
    {
      title: "Warehousing",
      desc: "Well supported warehousing and stocking capacity to ensure efficient handling, storage, and timely movement of tea.",
      icon: <Leaf className="w-5 h-5 text-[#D4AF37]" />
    }
    
  ];

  return (
    <div className="w-full bg-white text-left">
      {/* HEADER HERO */}
      <section className="bg-black py-20 sm:py-28 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(212,175,55,0.08),transparent)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-4">
          <span className="text-[#D4AF37] uppercase text-xs font-bold tracking-[0.25em] block">Our Heritage</span>
          <h1 className="text-4xl sm:text-6xl font-serif font-black tracking-tight mb-4">About Pallavi Tea & Trading</h1>
          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto font-sans leading-relaxed">
            Connecting prestigious tea estates with premium distributors, packeters, and exporters since 1999 from the capital of the tea universe, Assam.
          </p>
        </div>
      </section>


      {/* DETAILED LEGACY SECTION */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Legacy Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-[#D4AF37]">
              <History className="w-5 h-5" />
              <span className="font-sans font-bold text-xs uppercase tracking-widest">Est. 1999 | Assam Headquartered</span>
            </div>
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="bg-white border-2 border-black p-4 rounded-3xl shadow-2xl max-w-sm w-full">
                <img
                  src={aboutImage}
                  alt="Ashok Saboo and Govind Saboo"
                  className="w-full h-auto rounded-2xl object-cover"
                />

                <div className="text-center mt-4">
                  <h3 className="text-lg font-serif font-bold text-black">
                    Ashok Saboo & Govind Saboo
                  </h3>
                  <p className="text-sm text-neutral-500 mt-1">
                    Directors, Pallavi Tea & Trading Company
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-black text-black leading-tight">
              A Legacy of Trust and Expertise in Tea Broking
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
              <p>
                <strong>Pallavi Tea and Trading Company is a trusted name in the tea broking industry. It is known for its experience, honesty, and strong connections in the market. The company was started in 1999 and is based in Assam, the heart of India’s tea industry. Over the past 27 years, it has grown steadily under the leadership of Ashok Saboo and Govind Saboo.</strong>.
              </p>
              <p>
                With a strong understanding of the Assam tea market, the company helps connect top tea producers with major buyers across India and other countries.
              </p>

            </div>



            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-neutral-100">
              <div className="space-y-1.5">
                <h4 className="font-serif font-bold text-sm text-black">Our Expertise</h4>
                <p className="text-neutral-500 text-xs leading-relaxed">
                  We specialize in tea broking, helping tea estates connect easily with buyers such as packeters, wholesalers, and exporters. Along with broking, we also provide tea testing and valuation to check quality and ensure fair pricing in every deal. We handle both premium quality teas and large-volume orders, allowing us to meet different market needs with accuracy and consistency.
                </p>
              </div>
              <div className="space-y-1.5">
                <h4 className="font-serif font-bold text-sm text-black">Market Presence</h4>
                <p className="text-neutral-500 text-xs leading-relaxed">
                  Our strength comes from working directly and closely with top tea gardens and factories across Assam. By staying connected at the source, we make transactions between producers and buyers smooth and efficient. This helps us offer better prices, maintain good quality, and build strong, long-term relationships across the tea supply chain.
                </p>
              </div>
            </div>
          </div>

          {/* Golden Floating UI Widget Box */}
          <div className="lg:col-span-5 flex justify-center items-center relative py-6">
            <div className="absolute inset-4 rounded-3xl bg-neutral-100 blur-3xl opacity-50 pointer-events-none" />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative w-full max-w-sm bg-neutral-50 border border-neutral-200 p-8 rounded-3xl shadow-xl z-10 space-y-6"
            >
              <div className="flex justify-between items-center">
                <div className="w-8 h-8 rounded-lg bg-black text-[#D4AF37] flex items-center justify-center font-serif font-bold text-sm">
                  P
                </div>
                <span className="text-[10px] text-neutral-400 font-mono tracking-widest uppercase">MERCANTILE RECORD</span>
              </div>

              <div className="space-y-4">
                <div className="border-b border-neutral-200/60 pb-3">
                  <span className="text-[10px] text-neutral-400 font-sans tracking-widest uppercase block">Estates Assosiated</span>
                  <span className="text-3xl font-serif font-bold text-black">128 Gardens & Factories</span>
                </div>
                <div className="border-b border-neutral-200/60 pb-3">
                  <span className="text-[10px] text-neutral-400 font-sans tracking-widest uppercase block">Daily Sales Volume</span>
                  <span className="text-3xl font-serif font-bold text-black">2.5 Lakh Kgs</span>
                </div>
                <div>
                  <span className="text-[10px] text-neutral-400 font-sans tracking-widest uppercase block">Establishment Year</span>
                  <span className="text-3xl font-serif font-bold text-black">1999</span>
                </div>
              </div>

              <div className="bg-white border border-neutral-200/80 p-3.5 rounded-2xl flex items-center gap-3">
                <div className="p-1.5 bg-neutral-50 rounded-lg text-[#D4AF37]">
                  <Shield className="w-4 h-4" />
                </div>
                
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CORE APPROACH & STRENGTHS */}
      <section className="bg-neutral-50 py-20 px-6 border-y border-neutral-200">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl mb-12">
            <span className="text-[#D4AF37] font-sans font-bold tracking-widest uppercase text-xs">Our Advantage</span>
            <h2 className="text-3xl font-serif font-black text-black mt-1">Our Strengths & Attributes</h2>
            <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed mt-2">
              Our growth over the years is based on reliable service, strong relationships with tea sources, and maintaining high quality standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strengths.map((str, idx) => (
              <div
                key={idx}
                className="bg-white p-6 border border-neutral-200 rounded-2xl shadow-xs transition-all duration-300 hover:shadow-md hover:border-neutral-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center mb-4 text-[#D4AF37]">
                    {str.icon}
                  </div>
                  <h3 className="text-sm font-serif font-bold text-black mb-1.5">{str.title}</h3>
                  <p className="text-neutral-500 text-xs leading-relaxed">{str.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH & VISION CARDS */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-neutral-200 p-8 rounded-2xl space-y-3 shadow-xs">
            <span className="text-lg font-serif font-bold text-black block">Our Approach</span>
            <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed font-sans">
              At Pallavi Tea and Trading Company, we believe trust and transparency are key to good business. We focus on building long-term relationships, following honest practices, and understanding the local tea environment in a practical way.
            </p>
          </div>

          <div className="bg-white border border-neutral-200 p-8 rounded-2xl space-y-3 shadow-xs">
            <span className="text-lg font-serif font-bold text-black block">Our Vision</span>
            <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed font-sans">
              Our vision is to grow and expand our presence while remaining a trusted and respected name in the tea broking industry. We aim to maintain high standards and stay aligned with market needs in everything we do.
            </p>
          </div>
        </div>

        {/* EPILOGUE STATEMENT */}
        <div className="mt-16 text-center max-w-2xl mx-auto border-t border-neutral-200 pt-10">
          <p className="text-neutral-700 italic font-serif text-sm sm:text-base leading-relaxed">
            "At Pallavi Tea and Trading Company, we don’t just broker tea; we build enduring partnerships that move the industry forward."
          </p>
          <div className="flex gap-2.5 items-center justify-center mt-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold">Ashok Saboo & Govind Saboo</span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
          </div>
        </div>
      </section>
    </div>
  );
}
