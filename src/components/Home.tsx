import { useRef } from "react";
import {
  ArrowDown,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Clock,
  Globe,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { motion } from "motion/react";
import { SERVICES, TOP_GARDENS } from "../data";
import type { Garden, PageId, ServiceItem } from "../types";
import PallaviBrandLogo from "./PallaviBrandLogo";
import teawebBg from "../images/teaweb.jpg";

interface HomeProps {
  onNavigate: (page: PageId) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScrollToAbout = () => {
    document.getElementById("home-about-section")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollGardens = (direction: -1 | 1) => {
    const container = scrollContainerRef.current;

    if (container) {
      container.scrollBy({
        left: direction * container.clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="relative flex min-h-[92vh] items-center justify-center overflow-hidden bg-cover bg-center text-white sm:min-h-screen"
        style={{ backgroundImage: `url(${teawebBg})` }}
      >
        <div className="pointer-events-none absolute inset-0 bg-black/45" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/65" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center rounded-3xl border border-white/10 bg-black/30 px-6 py-10 shadow-2xl backdrop-blur-sm sm:px-12 sm:py-14"
          >
            <PallaviBrandLogo color="white" />

            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-lg">
              Connecting Assam&apos;s finest tea gardens with buyers around the
              world through trusted sourcing and decades of experience.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <button
                onClick={() => onNavigate("gardens")}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-bold text-black transition-colors hover:bg-[#e2c45c]"
              >
                Explore Our Gardens
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={() => onNavigate("contact")}
                className="rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Talk to Our Team
              </button>
            </div>

            <button
              onClick={handleScrollToAbout}
              aria-label="Scroll to learn about Pallavi"
              className="mt-10 rounded-full p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              <ArrowDown className="h-5 w-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="home-about-section"
        className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center"
      >
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B8860B]">
            Since 1999 · Assam, India
          </span>

          <h1 className="mt-3 font-serif text-3xl font-bold leading-tight text-brand-green sm:text-4xl">
            A trusted partner in the world of tea
          </h1>

          <p className="mt-5 text-sm leading-relaxed text-neutral-600 sm:text-base">
            Pallavi Tea &amp; Trading brings producers and buyers together with
            reliable sourcing, careful quality evaluation, and a deep
            understanding of the tea trade.
          </p>

          <button
            onClick={() => onNavigate("about")}
            className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-green transition-colors hover:text-[#B8860B]"
          >
            Discover our story
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl bg-brand-green p-6 text-white">
            <Clock className="h-6 w-6 text-[#D4AF37]" />
            <p className="mt-4 font-serif text-3xl font-bold">27+</p>
            <p className="mt-1 text-xs text-white/75">Years of experience</p>
          </div>

          <div className="rounded-2xl bg-neutral-100 p-6 text-brand-green">
            <MapPin className="h-6 w-6 text-[#B8860B]" />
            <p className="mt-4 font-serif text-3xl font-bold">128</p>
            <p className="mt-1 text-xs text-neutral-600">Associated gardens</p>
          </div>

          <div className="col-span-2 rounded-2xl border border-neutral-200 p-6">
            <div className="flex items-start gap-4">
              <Globe className="mt-1 h-6 w-6 shrink-0 text-[#B8860B]" />

              <div>
                <h2 className="font-serif text-lg font-bold text-brand-green">
                  Assam tea, connected to the world
                </h2>

                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  From garden relationships to dependable delivery, our team
                  supports every step of the trade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tea Gardens Section */}
      <section className="bg-neutral-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B8860B]">
                Our network
              </span>

              <h2 className="mt-2 font-serif text-3xl font-bold text-brand-green">
                Featured tea gardens
              </h2>

              <p className="mt-2 max-w-xl text-sm text-neutral-600">
                Discover quality and character from trusted tea partners across
                Assam.
              </p>
            </div>

            <div className="hidden gap-2 sm:flex">
              <button
                onClick={() => scrollGardens(-1)}
                aria-label="Scroll gardens left"
                className="rounded-full border border-neutral-300 p-2 text-brand-green transition-colors hover:bg-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                onClick={() => scrollGardens(1)}
                aria-label="Scroll gardens right"
                className="rounded-full border border-neutral-300 p-2 text-brand-green transition-colors hover:bg-white"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div
            ref={scrollContainerRef}
            className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4"
          >
            {TOP_GARDENS.slice(0, 6).map((garden: Garden) => (
              <article
                key={garden.id}
                className="min-w-[82%] snap-start rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:min-w-[44%] lg:min-w-[31%]"
              >
                <span className="text-3xl" aria-hidden="true">
                  {garden.emoji}
                </span>

                <h3 className="mt-4 font-serif text-xl font-bold text-brand-green">
                  {garden.name}
                </h3>

                <p className="mt-1 flex items-center gap-1 text-xs font-semibold text-[#B8860B]">
                  <MapPin className="h-3.5 w-3.5" />
                  {garden.location}
                </p>

                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-neutral-600">
                  {garden.description}
                </p>

                <button
                  onClick={() => onNavigate("gardens")}
                  className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-brand-green hover:text-[#B8860B]"
                >
                  Explore gardens
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </article>
            ))}
          </div>

          <button
            onClick={() => onNavigate("gardens")}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-green px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-brown"
          >
            View all gardens
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B8860B]">
            What we do
          </span>

          <h2 className="mt-2 font-serif text-3xl font-bold text-brand-green">
            Tea trade, handled with care
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.slice(0, 3).map((service: ServiceItem) => (
            <article
              key={service.id}
              className="rounded-2xl border border-neutral-200 p-6 transition-shadow hover:shadow-lg"
            >
              <span className="text-2xl" aria-hidden="true">
                {service.icon}
              </span>

              <h3 className="mt-4 font-serif text-lg font-bold text-brand-green">
                {service.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => onNavigate("services")}
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-green hover:text-[#B8860B]"
          >
            See all services
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="bg-brand-green px-6 py-16 text-center text-white">
        <Mail className="mx-auto h-7 w-7 text-[#D4AF37]" />

        <h2 className="mt-4 font-serif text-2xl font-bold sm:text-3xl">
          Let&apos;s find the right tea for your business
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/75">
          Talk with our team about sourcing, samples, or your next tea
          requirement.
        </p>

        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            onClick={() => onNavigate("contact")}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-bold text-black hover:bg-[#e2c45c]"
          >
            <Phone className="h-4 w-4" />
            Contact our team
          </button>

          <button
            onClick={() => onNavigate("sample-request")}
            className="rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            Request a sample
          </button>
        </div>
      </section>
    </div>
  );
}
