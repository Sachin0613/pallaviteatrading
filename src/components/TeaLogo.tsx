import React from "react";
import { motion } from "motion/react";

interface TeaLogoProps {
  className?: string;
  size?: number;
  variant?: "header" | "footer" | "hero";
}

export default function TeaLogo({ className = "", size = 48, variant = "header" }: TeaLogoProps) {
  // SVG size scale factors
  const widthHeight = variant === "hero" ? 120 : size;

  return (
    <motion.div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <svg
        width={widthHeight}
        height={widthHeight}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-white filter drop-shadow-md"
      >
        {/* Glowing Ambient Background Ring (Slightly transparent gold/cream) */}
        <motion.circle
          cx="60"
          cy="60"
          r="48"
          className="stroke-brand-gold/35"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />

        {/* Circular organic leafy frame boundary */}
        <path
          d="M 60 10 C 85 10 108 30 108 60 C 108 85 88 108 60 108 C 32 108 12 85 12 60 C 12 35 32 12 60 10"
          className="stroke-brand-gold/60"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Background sunray / energy rays */}
        <line x1="60" y1="12" x2="60" y2="20" className="stroke-brand-gold/50" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="108" y1="60" x2="100" y2="60" className="stroke-brand-gold/50" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="60" y1="108" x2="60" y2="100" className="stroke-brand-gold/50" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="12" y1="60" x2="20" y2="60" className="stroke-brand-gold/50" strokeWidth="1.5" strokeLinecap="round" />

        {/* --- CUSTOM DESIGNED TEA-TREE LETTERS --- */}
        {/* 1. Root structure at the bottom of the word-tree */}
        <path
          d="M 40 85 C 38 92 32 98 22 101"
          className="stroke-white"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M 46 87 C 46 95 49 102 54 105"
          className="stroke-white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M 43 85 C 41 93 42 99 43 103"
          className="stroke-white"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* 2. THE LETTER 'T' (Central primary trunk growing straight upwards with sprouts) */}
        {/* Vertical T Stem */}
        <path
          d="M 43 85 L 43 38"
          className="stroke-white"
          strokeWidth="4"
          strokeLinecap="round"
        />
        {/* T-bar branch curving like natural tree limbs */}
        <path
          d="M 22 42 C 30 38 38 38 43 38 C 48 38 58 38 68 44"
          className="stroke-white"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        
        {/* Elegant leaves sprouting from the T design */}
        {/* Top-Left Leaf */}
        <path
          d="M 22 42 C 16 34 22 28 26 31 C 28 33 28 38 22 42"
          fill="currentColor"
          className="text-brand-gold fill-current"
        />
        <path
          d="M 22 42 C 16 34 22 28 26 31 C 28 33 28 38 22 42"
          className="stroke-white"
          strokeWidth="1"
        />
        
        {/* Top-Right Leaf */}
        <path
          d="M 68 44 C 74 38 78 44 74 48 C 71 51 66 48 68 44"
          fill="currentColor"
          className="text-brand-gold fill-current"
        />
        <path
          d="M 68 44 C 74 38 78 44 74 48 C 71 51 66 48 68 44"
          className="stroke-white"
          strokeWidth="1"
        />

        {/* Middle Sprouts on the Trunk */}
        <path
          d="M 43 62 C 36 60 33 55 35 52 C 38 49 41 54 43 62"
          fill="currentColor"
          className="text-brand-gold fill-current"
        />
        <path
          d="M 43 62 C 36 60 33 55 35 52 C 38 49 41 54 43 62 M 43 62"
          className="stroke-white"
          strokeWidth="1.2"
        />

        {/* 3. THE LETTER 'e' (Looping vine growing from the right of the trunk) */}
        {/* Connection vine branching from the T-stem */}
        <path
          d="M 43 68 C 50 68 53 60 55 58"
          className="stroke-white"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Looping body of the letter 'e' shaped like an opening tea shoot */}
        <path
          d="M 55 58 C 58 52 68 50 71 58 M 71 58 C 72 63 67 69 57 70 C 51 71 49 68 51 61 C 53 54 62 50 71 58"
          className="stroke-white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Growing leaf on top of the loop of 'e' */}
        <path
          d="M 66 52 C 68 44 76 46 74 51 C 72 55 68 54 66 52"
          fill="currentColor"
          className="text-brand-gold fill-current"
        />
        <path
          d="M 66 52 C 68 44 76 46 74 51 C 72 55 68 54 66 52"
          className="stroke-white"
          strokeWidth="1"
        />

        {/* 4. THE LETTER 'a' (Curled leaf vine nested next to the 'e') */}
        {/* Connection node/vine */}
        <path
          d="M 68 66 C 73 66 76 64 78 61"
          className="stroke-white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* The round body of 'a' curved beautifully */}
        <path
          d="M 87 61 C 87 53 77 53 77 61 C 77 68 87 68 87 61 Z"
          className="stroke-white"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* The vertical trunk anchor bar of 'a' curving into a flourishing root tail */}
        <path
          d="M 87 54 L 87 68 C 87 72 90 73 95 72"
          className="stroke-white"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* A beautiful fresh leaf bud sprouting from the tail of 'a' */}
        <path
          d="M 95 72 C 102 70 102 77 98 79 C 94 81 92 75 95 72"
          fill="currentColor"
          className="text-brand-gold fill-current"
        />
        <path
          d="M 95 72 C 102 70 102 77 98 79 C 94 81 92 75 95 72"
          className="stroke-white"
          strokeWidth="1"
        />
        {/* Secondary crown leaf growing off the top right of 'a' stem */}
        <path
          d="M 87 54 C 88 47 96 46 94 51 C 92 56 88 55 87 54"
          fill="currentColor"
          className="text-brand-gold fill-current"
        />
        <path
          d="M 87 54 C 88 47 96 46 94 51 C 92 56 88 55 87 54"
          className="stroke-white"
          strokeWidth="1"
        />

        {/* Cute tea dewdrop hanging below the letters */}
        <motion.circle
          cx="60"
          cy="85"
          r="1.5"
          className="fill-brand-gold"
          animate={{ y: [0, 4, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </motion.div>
  );
}
