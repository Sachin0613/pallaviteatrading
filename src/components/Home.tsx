import React, { useRef } from "react";
import { Garden, PageId, ServiceItem } from "../types";
import { TOP_GARDENS, SERVICES } from "../data";
import {
  MapPin,
  ArrowRight,
  Phone,
  Mail,
  Clock,
  Globe,
  ArrowDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion } from "motion/react";
import PallaviBrandLogo from "./PallaviBrandLogo";
import teawebBg from "../images/teaweb.jpg";

interface HomeProps {
  onNavigate: (page: PageId) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);


  // =========================
  // SCROLL TO ABOUT
  // =========================
  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("home-about-section");

    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  // =========================
  // GARDEN SCROLL LEFT
  // =========================
  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -scrollContainerRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  // =========================
  // GARDEN SCROLL RIGHT
  // =========================
  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollContainerRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full">


      {/* =====================================================
          1. HERO SECTION
          ===================================================== */}
      <section
        className="relative overflow-hidden min-h-[92vh] sm:min-h-screen flex items-center justify-center text-black bg-cover bg-center"
        style={{
          backgroundImage: `url(${teawebBg})`,
        }}
      >
        {/* Dark warm overlay */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />

        <div className="absolute inset-0 bg-linear-to-b from-black/45 via-black/10 to-black/35 pointer-events-none" />

        {/* Soft warm highlights */}
        <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-amber-300/10 blur-3xl pointer-events-none" />

        <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-emerald-100/10 blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="flex flex-col items-center rounded-3xl bg-black/20 px-6 sm:px-10 py-10 sm:py-12 border border-white/10 shadow-2xl backdrop-blur-[2px]"
          >
