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
                Explore Our Gardens <ArrowRight className="h-4 w-4" />
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
