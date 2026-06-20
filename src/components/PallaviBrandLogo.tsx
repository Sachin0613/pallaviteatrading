import React from "react";
import { motion } from "motion/react";

interface PallaviBrandLogoProps {
  className?: string;
  color?: "gold" | "white" | "dark";
  showSubtitle?: boolean;
  scale?: number;
}

export default function PallaviBrandLogo({
  className = "",
  color = "gold",
  showSubtitle = true,
  scale = 1
}: PallaviBrandLogoProps) {
  // P and I are always styled in premium gold gradient to accentuate the brand's unique signature,
  // while other letters (A, L, L, A, V) follow the requested ambient theme (white/gold/dark).
  const goldStroke = "url(#text-gradient)";
  const otherStroke = color === "dark" ? "#2F5D3A" : color === "white" ? "#FFFFFF" : "url(#text-gradient)";
  const leafFill = color === "dark" ? "url(#leaf-gradient-dark)" : "url(#leaf-gradient)";
  const leafStroke = color === "dark" ? "#2E6B2F" : "#4C6A2F";

  return (
    <motion.div
      className={`inline-flex flex-col items-center justify-center select-none ${className}`}
      style={{ transform: `scale(${scale})` }}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <svg
        width="480"
        height="95"
        viewBox="0 0 480 95"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-w-[325px] sm:max-w-[480px] drop-shadow-[0_10px_25px_rgba(0,0,0,0.25)]"
      >
        <defs>
          {/* Suttle golden glow behind the brand mark */}
          <radialGradient id="logo-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#d4af37" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
          </radialGradient>
          
          {/* Rich double-layered metallic gold gradient for the signature P and I */}
          <linearGradient id="text-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FFF4C2" />
            <stop offset="35%" stopColor="#F2C94C" />
            <stop offset="70%" stopColor="#D4A017" />
            <stop offset="100%" stopColor="#8B5E00" />
          </linearGradient>

          {/* Premium organic leaf gradients */}
          <linearGradient id="leaf-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="40%" stopColor="#82AD4C" />
            <stop offset="75%" stopColor="#2E6B2F" />
            <stop offset="100%" stopColor="#123414" />
          </linearGradient>
          
          <linearGradient id="leaf-gradient-dark" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7AA65C" />
            <stop offset="50%" stopColor="#3F6D39" />
            <stop offset="100%" stopColor="#244A23" />
          </linearGradient>

          {/* High-quality soft dropping shadow for layered visual look */}
          <filter id="soft-shadow" x="-20%" y="-20%" width="140%" height="160%">
            <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#0c180c" floodOpacity="0.3" />
          </filter>
        </defs>

        <rect width="480" height="95" fill="none" />
        <ellipse cx="240" cy="48" rx="175" ry="30" fill="url(#logo-glow)" />

        <g filter="url(#soft-shadow)">
          {/* Beautiful background luxury leaf cluster on the far left */}
          <path d="M 18 38 C 10 24, 18 10, 32 14 C 42 17, 44 29, 34 39 C 28 45, 24 46, 18 38 Z" fill={leafFill} stroke={leafStroke} strokeWidth="1.2" />
          <path d="M 26 18 C 29 14, 34 17, 34 23" stroke="#FFF4C2" strokeWidth="1.1" strokeLinecap="round" />
          <path d="M 24 35 C 26 26, 32 23, 38 15" stroke="#FFF4C2" strokeWidth="1.1" strokeLinecap="round" opacity="0.65" />

          {/* Double leaf sprouts nesting behind P (drawn first so P overrides them cleanly) */}
          <path d="M 42 40 C 28 38, 22 26, 26 22 C 30 18, 36 30, 42 40" fill={leafFill} stroke={leafStroke} strokeWidth="1.6" />
          <path d="M 42 40 C 28 38, 22 26, 26 22" stroke={goldStroke} strokeWidth="1.6" strokeLinecap="round" />

          {/* 1. LETTER 'P' (Highlighted in Premium Signature Gold - Full height & uninterrupted) */}
          <path d="M 42 15 L 42 75" stroke={goldStroke} strokeWidth="6.8" strokeLinecap="round" />
          <path d="M 34 15 L 50 15" stroke={goldStroke} strokeWidth="3.8" strokeLinecap="round" />
          <path d="M 32 75 L 52 75" stroke={goldStroke} strokeWidth="4.2" strokeLinecap="round" />
          <path d="M 42 15 C 61 15, 71 26, 68 40 C 65 52, 54 56, 42 56" stroke={goldStroke} strokeWidth="6.8" strokeLinecap="round" strokeLinejoin="round" />

          {/* 2. LETTER 'A' */}
          <path d="M 82 75 L 101 15 L 120 75" stroke={otherStroke} strokeWidth="4.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 75 75 L 89 75" stroke={otherStroke} strokeWidth="2.6" />
          <path d="M 113 75 L 127 75" stroke={otherStroke} strokeWidth="2.6" />
          {/* Custom golden leaf crossbar for A */}
          <path d="M 93 50 C 101 41, 110 41, 111 50 C 110 58, 100 58, 93 50 Z" fill={leafFill} stroke={leafStroke} strokeWidth="1" />
          <path d="M 93 50 C 101 41, 110 41, 111 50" stroke={otherStroke} strokeWidth="1" />

          {/* 3. LETTER 'L' */}
          <path d="M 149 15 L 149 75 H 175" stroke={otherStroke} strokeWidth="4.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 141 15 H 157" stroke={otherStroke} strokeWidth="2.6" />
          <path d="M 175 70 V 75" stroke={otherStroke} strokeWidth="3" />

          {/* 4. LETTER 'L' */}
          <path d="M 201 15 L 201 75 H 227" stroke={otherStroke} strokeWidth="4.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 193 15 H 209" stroke={otherStroke} strokeWidth="2.6" />
          <path d="M 227 70 V 75" stroke={otherStroke} strokeWidth="3" />

          {/* 5. LETTER 'A' */}
          <path d="M 255 75 L 274 15 L 293 75" stroke={otherStroke} strokeWidth="4.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 248 75 L 262 75" stroke={otherStroke} strokeWidth="2.6" />
          <path d="M 300 75 L 286 75" stroke={otherStroke} strokeWidth="2.6" />
          {/* Custom golden leaf crossbar for second A */}
          <path d="M 265 50 C 274 41, 282 41, 283 50 C 282 58, 272 58, 265 50 Z" fill={leafFill} stroke={leafStroke} strokeWidth="1" />
          <path d="M 265 50 C 274 41, 282 41, 283 50" stroke={otherStroke} strokeWidth="1" />

          {/* 6. LETTER 'V' */}
          <path d="M 321 15 L 339 75 L 357 15" stroke={otherStroke} strokeWidth="4.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 313 15 H 329" stroke={otherStroke} strokeWidth="2.6" />
          <path d="M 349 15 H 365" stroke={otherStroke} strokeWidth="2.6" />

          {/* 7. LETTER 'I' (Highlighted in Premium Signature Gold - Full height 15-75 with elevated Leaf Accent) */}
          <path d="M 389 15 L 389 75" stroke={goldStroke} strokeWidth="6.8" strokeLinecap="round" />
          <path d="M 381 75 H 397" stroke={goldStroke} strokeWidth="4.0" />
          <path d="M 381 15 H 397" stroke={goldStroke} strokeWidth="3.6" />
          
          {/* Beautiful elevated Tea Leaf sprout crowning 'I' delicately (acting as the leaf-tittle, non-obscuring) */}
          <path d="M 389 11 C 399 1, 407 3, 404 15 C 400 23, 392 17, 389 11 Z" fill={leafFill} stroke={leafStroke} strokeWidth="1.5" />
          <path d="M 389 11 C 399 1, 407 3, 404 15" stroke={goldStroke} strokeWidth="1.5" strokeLinecap="round" />
        </g>
      </svg>

      {showSubtitle && (
        <motion.div
          className="text-center tracking-[0.45em] text-[11px] sm:text-sm font-sans uppercase font-bold mt-2.5 bg-gradient-to-r from-brand-cream/90 via-brand-gold to-brand-cream/90 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Tea and Trading
        </motion.div>
      )}
    </motion.div>
  );
}
