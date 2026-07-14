import React from "react";
import { PageId } from "../types";
import { MapPin, Info, Settings, Calendar, ArrowRight } from "lucide-react";
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
import logo10 from "../images/logo10.jpg";



const TOP_GARDENS = [
  {
  id: 1,
  name: "Laluk Tea Factory",
  location: "Mark: Laluk, Lakhimpur",
  image: logo1,
  description: "Known for its strong liquor and consistent quality, Laluk teas offer a bold and dependable cup."
},
{
  id: 2,
  name: "Habung Tea Industries",
  location: "Mark: Habung, Dhemaji",
  image: logo2,
  description: "Produces bright and brisk teas with a clean finish, ideal for refreshing daily blends."
},
{
  id: 3,
  name: "Maibelia Tea Industry",
  location: "Mark: Dissoi Valley, Jorhat",
  image: logo3,
  description: "Offers well-rounded teas with rich aroma and smooth malty character from prime Jorhat estates."
},
{
  id: 4,
  name: "Kanchan Tea Industry",
  location: "Mark: Kanchan, Koliabor",
  image: logo4,
  description: "Known for balanced strength and subtle sweetness, delivering a refined and smooth cup."
},
{
  id: 5,
  name: "Gangmou Tea Growers",
  location: "Mark: Gangmou, Biswanath Charali",
  image: logo5,
  description: "Produces lively teas with vibrant color and a brisk, refreshing taste profile."
},
{
  id: 6,
  name: "Belseri Tea Estate",
  location: "Mark: Belseri, Dekiajuli",
  image: logo6,
  description: "Produces bright, brisk teas with a clean and refreshing finish."
},
  {
  id: 7,
  name: "Puri Premium Tea",
  location: "Mark: Lakhimpur, Assam",
  image: logo7,
  description: "Specializes in high-grade teas with deep color, strong body, and premium consistency."
},
{
  id: 8,
  name: "BTR Tea Industries",
  location: "Mark: Udalguri, Assam",
  image: logo8,
  description: "Known for smooth yet strong teas with a pleasant aroma and balanced flavor."
},
{
  id: 9,
  name: "Patkai Tea Co. (P) Ltd",
  location: "Mark: Tinsukia, Assam",
  image: logo9,
  description: "Delivers bold, full-bodied teas with deep liquor and a lasting malty richness."
}
];

interface TopGardensProps {
  onSelectSampleRequest: (gardenName: string) => void;
}

export default function TopGardens({ onSelectSampleRequest }: TopGardensProps) {
  return (
    <div className="w-full bg-white">
      {/* HERO SECTION */}
      <section className="bg-brand-green py-16 sm:py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-brand-gold uppercase text-xs font-semibold tracking-widest block mb-2">
            Our Network
          </span>

          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">
            Associated Tea Gardens
          </h1>

          <p className="text-brand-cream/80 text-base sm:text-lg max-w-xl mx-auto">
            Trusted partnerships with leading tea estates across Assam.
          </p>
        </div>
      </section>

      {/* GARDENS GRID */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOP_GARDENS.map((garden) => (
            <div
              key={garden.id}
              className="bg-white rounded-3xl border border-neutral-200 shadow-xl overflow-hidden hover:shadow-2xl duration-300"
            >
              <img
                src={garden.image}
                alt={garden.name}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-black">
                  {garden.name}
                </h3>

                <p className="text-[#D4AF37] text-sm font-semibold mt-1">
                  {garden.location}
                </p>

                <p className="text-neutral-600 text-sm mt-3 leading-relaxed">
                  {garden.description}
                </p>

                <button
                  onClick={() => onSelectSampleRequest(garden.name)}
                  className="mt-5 w-full bg-black text-white py-3 rounded-xl hover:bg-neutral-800 duration-300 cursor-pointer"
                >
                  Request Sample
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      
    </div>
  );
}
