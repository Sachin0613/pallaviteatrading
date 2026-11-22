import { useRef } from "react";
import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Globe2,
  Handshake,
  Leaf,
  Mail,
  MapPin,
  PackageCheck,
  Phone,
  Scale,
  ShieldCheck,
  Warehouse,
} from "lucide-react";
import { motion } from "motion/react";
import { SERVICES, TOP_GARDENS } from "../data";
import type { Garden, PageId, ServiceItem } from "../types";
import teawebBg from "../images/teaweb.jpg";

interface HomeProps {
  onNavigate: (page: PageId) => void;
}

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.55, ease: "easeOut" as const },
};

export default function Home({ onNavigate }: HomeProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    document.getElementById("home-about-section")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollGardens = (direction: -1 | 1) => {
    scrollContainerRef.current?.scrollBy({
      left: direction * scrollContainerRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  const businessOpportunities = [
    {
      title: "B2B Tea Sourcing",
      description: "Source tea from trusted gardens for wholesale, packing and distribution.",
      icon: <Leaf className="h-5 w-5" />,
    },
    {
      title: "Private Label Tea",
      description: "Build a tea brand with support for sourcing, blending and packaging.",
      icon: <PackageCheck className="h-5 w-5" />,
    },
    {
      title: "Quality & Valuation",
      description: "Make informed buying decisions with tasting, grading and valuation.",
      icon: <Scale className="h-5 w-5" />,
    },
    {
      title: "Global Tea Trade",
      description: "Connect Indian tea producers with suitable buyers and distributors.",
      icon: <Globe2 className="h-5 w-5" />,
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Understand your requirement",
      description: "We discuss your grade, origin, flavour, quantity, packaging and target price.",
    },
    {
      number: "02",
      title: "Shortlist the right tea",
      description: "Our team identifies suitable gardens and current lots from our market network.",
    },
    {
      number: "03",
      title: "Review quality",
      description: "You can evaluate samples and verify colour, aroma, liquor, strength and taste.",
    },
    {
      number: "04",
      title: "Complete the supply",
      description: "We coordinate pricing, stock, packing and delivery with clear communication.",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section
        className="relative flex min-h-[92vh] items-center justify-center overflow-hidden bg-cover bg-center text-white sm:min-h-screen"
        style={{ backgroundImage: `url(${teawebBg})` }}
      >
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/70" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mx-auto flex max-w-4xl flex-col items-center"
          >
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-[#F2D675]">
              Tea sourcing · Broking · Supply
            </p>
            <h1 className="font-serif text-5xl font-bold leading-none tracking-[0.12em] sm:text-7xl">
              PALLAVI
            </h1>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.38em] text-[#D4AF37] sm:text-sm">
              Tea &amp; Trading
            </p>

            <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/90 sm:text-xl">
              Trusted tea sourcing and trading connections from Assam to
              buyers across India and the world.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => onNavigate("gardens")}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-7 py-3.5 text-sm font-bold text-black transition-colors hover:bg-[#E8C85A]"
              >
                Explore tea gardens <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => onNavigate("contact")}
                className="rounded-full border border-white/70 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Talk to our team
              </button>
            </div>

            <button
              onClick={scrollToAbout}
              aria-label="Scroll to learn about Pallavi"
              className="mt-12 rounded-full p-2 text-white/75 transition-colors hover:bg-white/10 hover:text-white"
            >
              <ArrowDown className="h-6 w-6" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Company overview */}
      <section
        id="home-about-section"
        className="mx-auto grid max-w-6xl scroll-mt-32 gap-12 px-6 py-24 md:grid-cols-2 md:items-center"
      >
        <motion.div {...reveal}>
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#B8860B]">
            Our company
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-brand-green sm:text-5xl">
            A dependable partner in the tea trade
          </h2>
          <p className="mt-6 text-base leading-relaxed text-neutral-600">
            Pallavi Tea &amp; Trading brings tea gardens and buyers together.
            Established in 1999, we combine Assam market knowledge with
            practical sourcing, quality evaluation and reliable coordination.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-neutral-600">
            We work with packeters, wholesalers, exporters and other tea
            businesses. Our aim is to make every transaction clear, informed
            and dependable for both the producer and the buyer.
          </p>
          <button
            onClick={() => onNavigate("about")}
            className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-brand-green hover:text-[#B8860B]"
          >
            Read our complete story <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>

        <motion.div {...reveal} className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl bg-brand-green p-6 text-white">
            <ShieldCheck className="h-6 w-6 text-[#D4AF37]" />
            <p className="mt-5 font-serif text-4xl font-bold">27+</p>
            <p className="mt-2 text-sm text-white/75">Years of market experience</p>
          </div>
          <div className="rounded-2xl bg-neutral-100 p-6 text-brand-green">
            <Leaf className="h-6 w-6 text-[#B8860B]" />
            <p className="mt-5 font-serif text-4xl font-bold">128</p>
            <p className="mt-2 text-sm text-neutral-600">Associated gardens</p>
          </div>
          <div className="col-span-2 rounded-2xl border border-neutral-200 p-6">
            <div className="flex gap-4">
              <Globe2 className="mt-1 h-6 w-6 shrink-0 text-[#B8860B]" />
              <div>
                <h3 className="font-serif text-xl font-bold text-brand-green">
                  Local knowledge. Wide market reach.
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  From garden relationships to buyer requirements, we help tea
                  move through the supply chain with care and transparency.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* What we offer */}
      <section className="border-y border-neutral-200 bg-neutral-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div {...reveal} className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#B8860B]">
              What we do
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-brand-green sm:text-4xl">
              Tea trade, handled with care
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
              Our services cover sourcing, evaluation and supply from the
              garden level to the final buyer.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service: ServiceItem, index) => (
              <motion.article
                key={service.id}
                {...reveal}
                transition={{ ...reveal.transition, delay: index * 0.04 }}
                className="rounded-2xl border border-neutral-200 bg-white p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-cream text-xl">
                  {service.icon}
                </div>
                <h3 className="mt-5 font-serif text-xl font-bold text-brand-green">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {service.description}
                </p>
              </motion.article>
            ))}
          </div>

          <div className="mt-9">
            <button
              onClick={() => onNavigate("services")}
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-green hover:text-[#B8860B]"
            >
              View all services <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Featured gardens */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-end justify-between gap-6">
            <motion.div {...reveal} className="max-w-xl">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#B8860B]">
                Our garden network
              </span>
              <h2 className="mt-3 font-serif text-3xl font-bold text-brand-green sm:text-4xl">
                Featured tea gardens
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                Explore a selection of trusted garden partners across Assam,
                each with its own character and processing strengths.
              </p>
            </motion.div>

            <div className="hidden gap-2 sm:flex">
              <button
                onClick={() => scrollGardens(-1)}
                aria-label="Scroll gardens left"
                className="rounded-full border border-neutral-300 p-3 text-brand-green hover:bg-neutral-50"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => scrollGardens(1)}
                aria-label="Scroll gardens right"
                className="rounded-full border border-neutral-300 p-3 text-brand-green hover:bg-neutral-50"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div
            ref={scrollContainerRef}
            className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-5"
          >
            {TOP_GARDENS.map((garden: Garden) => (
              <article
                key={garden.id}
                className="min-w-[82%] snap-start rounded-2xl border border-neutral-200 p-6 sm:min-w-[44%] lg:min-w-[31%]"
              >
                <span className="text-3xl" aria-hidden="true">{garden.emoji}</span>
                <h3 className="mt-5 font-serif text-xl font-bold text-brand-green">
                  {garden.name}
                </h3>
                <p className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-[#B8860B]">
                  <MapPin className="h-3.5 w-3.5" />
                  {garden.location}
                </p>
                <p className="mt-4 min-h-20 text-sm leading-relaxed text-neutral-600">
                  {garden.description}
                </p>
                <button
                  onClick={() => onNavigate("sample-request")}
                  className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-brand-green hover:text-[#B8860B]"
                >
                  Request a sample <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </article>
            ))}
          </div>

          <button
            onClick={() => onNavigate("gardens")}
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-brand-green px-5 py-3 text-sm font-bold text-brand-green hover:bg-brand-green hover:text-white"
          >
            View all gardens <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* Process */}
      <section className="bg-brand-green py-24 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div {...reveal} className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#D4AF37]">
              How we work
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">
              A simple, transparent process
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
              Each requirement is handled clearly, from the first discussion
              to the final supply.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <motion.article
                key={step.number}
                {...reveal}
                transition={{ ...reveal.transition, delay: index * 0.06 }}
                className="bg-brand-green p-7"
              >
                <span className="font-serif text-3xl text-[#D4AF37]">{step.number}</span>
                <h3 className="mt-8 font-serif text-lg font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {step.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Quality commitment */}
      <section className="py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-12 md:items-center">
          <motion.div {...reveal} className="md:col-span-7">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#B8860B]">
              Quality before quantity
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-brand-green sm:text-4xl">
              Every order is reviewed for the right fit
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-neutral-600 sm:text-base">
              Quality is not only about grade. It also means consistency,
              correct pricing, reliable packing and tea that suits your market.
              Our team evaluates both the product and the requirements before
              confirming a supply.
            </p>
          </motion.div>

          <motion.div {...reveal} className="grid gap-4 md:col-span-5">
            {[
              { icon: <CheckCircle2 className="h-5 w-5" />, text: "Colour, aroma and liquor evaluation" },
              { icon: <Handshake className="h-5 w-5" />, text: "Clear communication between both sides" },
              { icon: <PackageCheck className="h-5 w-5" />, text: "Suitable packing and dispatch planning" },
              { icon: <Warehouse className="h-5 w-5" />, text: "Organised stock and delivery support" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-4 rounded-xl border border-neutral-200 p-4">
                <span className="text-[#B8860B]">{item.icon}</span>
                <p className="text-sm font-semibold text-neutral-700">{item.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Business opportunities */}
      <section className="border-y border-neutral-200 bg-neutral-50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div {...reveal} className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#B8860B]">
              Grow with Pallavi
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-brand-green sm:text-4xl">
              Business opportunities
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
              Build new relationships across sourcing, branding, quality,
              distribution and international tea trade.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {businessOpportunities.map((item) => (
              <motion.article
                key={item.title}
                {...reveal}
                className="rounded-2xl border border-neutral-200 bg-white p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green text-[#D4AF37]">
                  {item.icon}
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-brand-green">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>

          <button
            onClick={() => onNavigate("contact")}
            className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-brand-green hover:text-[#B8860B]"
          >
            Discuss a business opportunity <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-brand-green px-6 py-24 text-center text-white">
        <motion.div {...reveal} className="mx-auto max-w-3xl">
          <Mail className="mx-auto h-8 w-8 text-[#D4AF37]" />
          <h2 className="mt-5 font-serif text-3xl font-bold sm:text-4xl">
            Let&apos;s find the right tea for your business
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
            Speak with our team about sourcing, samples, grades, pricing or
            your next bulk requirement.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              onClick={() => onNavigate("contact")}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-7 py-3.5 text-sm font-bold text-black hover:bg-[#E8C85A]"
            >
              <Phone className="h-4 w-4" /> Contact our team
            </button>
            <button
              onClick={() => onNavigate("sample-request")}
              className="rounded-full border border-white/50 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              Request a sample
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
