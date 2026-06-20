import React, { useState, useEffect } from "react";
import { ContactRequest } from "../types";
import { Phone, Mail, MapPin, CheckCircle, AlertCircle, Clock, Compass, ZoomIn, ZoomOut, Info, Facebook, Instagram, Linkedin, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ContactProps {
  prefilledMessage?: string;
  onClearPrefill?: () => void;
}

const initialFormState: ContactRequest = {
  name: "",
  phone: "",
  email: "",
  message: ""
};

export default function Contact({ prefilledMessage, onClearPrefill }: ContactProps) {
  const [formData, setFormData] = useState<ContactRequest>(initialFormState);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactRequest, string>>>({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // States from integrated Location module
  const [zoomLevel, setZoomLevel] = useState(14);

  const handleGetDirections = () => {
    window.open("https://maps.app.goo.gl/juRUhJqHVkDiePJ2A", "_blank");
  };

  useEffect(() => {
    if (prefilledMessage) {
      setFormData((prev) => ({ ...prev, message: prefilledMessage }));
    }
  }, [prefilledMessage]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactRequest]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof ContactRequest, string>> = {};

    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[+]?[0-9\s\-]{8,20}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message content is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitError(null);
      try {
        const response = await fetch("https://formspree.io/f/mgobploz", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            message: formData.message
          })
        });

        if (response.ok) {
          setShowSuccess(true);
          setFormData(initialFormState);
          if (onClearPrefill) onClearPrefill();
          
          setTimeout(() => {
            setShowSuccess(false);
          }, 6000);
        } else {
          const data = await response.json();
          if (data && data.errors) {
            setSubmitError(data.errors.map((err: any) => err.message).join(", "));
          } else {
            setSubmitError("Failed to submit message to Formspree registry. Please try again.");
          }
        }
      } catch (err) {
        setSubmitError("A connection error occurred. Please check your network and try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const socialLinks = [
    { name: "Facebook", icon: <Facebook className="w-3.5 h-3.5" />, href: "https://www.facebook.com/share/18qrxpXpD6/" },
    { name: "Instagram", icon: <Instagram className="w-3.5 h-3.5" />, href: "https://www.instagram.com/pallaviteatrading?igsh=MjFqNTJ4bDMxNGU4" },
    { name: "LinkedIn", icon: <Linkedin className="w-3.5 h-3.5" />, href: "https://www.linkedin.com/in/pallaviteatrading-0b8178416/" }
  ];

  return (
    <div className="w-full bg-white">
      {/* HERO SECTION */}
      <section className="bg-black py-16 sm:py-24 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_60%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 font-sans">
          <span className="text-neutral-400 uppercase text-xs font-bold tracking-widest block mb-1.5 font-sans">Connect Directly</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-black mb-4">Contact Our Offices</h1>
          <p className="text-neutral-300 text-sm sm:text-base max-w-xl mx-auto font-sans">
            Our trade brokers are available to provide quotations, catalog clarifications, or dispatch tracking updates.
          </p>
        </div>
      </section>

      {/* TWO COLUMN CONTENT */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: CONTACT DETAILS */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-10">
            <div className="space-y-3">
              <span className="text-neutral-500 font-sans font-bold text-xs uppercase tracking-widest">Available 24/7</span>
              <h2 className="text-3xl font-serif font-black text-black">Get in Touch</h2>
              <p className="text-neutral-600 text-sm leading-relaxed font-sans">
                Whether you represent a national supermarket line, a localized gift shop chain, or a boutique tea salon, we welcome your inquiries and specifications.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-1 gap-6">
              {/* Phone item */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center text-black shrink-0 shadow-xs border border-neutral-200/50">
                  <Phone className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-widest font-sans ">Phone & Availability</h4>
                  <p className="text-black  font-black text-base mt-0.5">+91-7896556453</p>
                  <p className="text-neutral-500 text-xs mt-0.5 font-sans">Mon-Sat, 9am - 6pm IST</p>
                </div>
              </div>

              {/* Email item */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center text-black shrink-0 shadow-xs border border-neutral-200/50">
                  <Mail className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-widest font-sans">Email Communications</h4>
                  <p className="text-black  font-black text-base mt-2">govindsaboo1@gmail.com</p>
                  <p className="text-neutral-500 text-xs mt-0.5 font-sans font-medium">Broking desk priority inbox</p>
                </div>
              </div>

              {/* Address item */}
              <a 
                href="https://maps.app.goo.gl/juRUhJqHVkDiePJ2A" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex gap-4 hover:opacity-85 duration-200 group/addr cursor-pointer block"
              >
                <div className="w-12 h-12 bg-neutral-100 group-hover/addr:bg-black group-hover/addr:text-white rounded-full flex items-center justify-center text-black shrink-0 shadow-xs border border-neutral-200/50 transition-all">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-widest font-sans">Corporate HQ Address</h4>
                  <p className="text-black  font-black text-[13px] sm:text-sm mt-0.5 group-hover/addr:underline">House no. 10, Bylane no.1</p>
                  <p className="text-neutral-700 text-xs mt-0.5 font-semibold ">Rehabari, Guwahati, Assam - 781008</p>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-neutral-800 mt-1 uppercase tracking-wider hover:underline">
                    View Live Location ↗
                  </span>
                </div>
              </a>
            </div>

            {/* Social media connections */}
            <div className="pt-6 border-t border-brand-cream/80 space-y-3">
              <h5 className="text-xs font-bold text-brand-charcoal/60 uppercase tracking-wider">Social Media Networks</h5>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((s, idx) => (
                  <a
                    key={idx}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-neutral-50 hover:bg-black hover:text-white rounded-lg text-xs font-bold text-black duration-350 font-sans border border-neutral-200 shadow-xs cursor-pointer"
                  >
                    <span>{s.icon}</span>
                    <span>{s.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: CONTACT FORM */}
          <div className="lg:col-span-12 xl:col-span-7 bg-white border border-neutral-200 p-8 rounded-2xl shadow-sm relative">
            <AnimatePresence>
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute inset-0 bg-white/95 z-20 flex flex-col justify-center items-center p-6 text-center rounded-2xl"
                >
                  <CheckCircle className="w-16 h-16 text-black mb-4" />
                  <h3 className="text-2xl font-serif font-black text-black mb-2">Message Sent</h3>
                  <p className="text-neutral-600 text-sm max-w-sm mb-6 font-sans">
                    ✓ Thank you for reaching out. We have received your query, and a broker will get back to you within 24 hours.
                  </p>
                  <button
                    id="close-contact-success-button"
                    onClick={() => setShowSuccess(false)}
                    className="px-6 py-2.5 bg-black hover:bg-neutral-900 duration-200 text-white font-sans font-bold text-xs rounded-xl tracking-wider uppercase cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-xl font-serif font-black text-black border-b border-neutral-200 pb-3">Send Us a Message</h3>

              {/* Name */}
              <div className="space-y-1.5">
                <label htmlFor="name" className="block text-xs font-bold text-neutral-600 uppercase tracking-wider font-sans">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="E.g., John Wick"
                  className={`w-full px-4 py-2.5 bg-neutral-50 border ${
                    errors.name ? "border-red-400 focus:border-red-400" : "border-neutral-200 focus:border-black"
                  } rounded-xl text-sm text-black outline-none focus:ring-1 focus:ring-black/10 duration-200 font-sans`}
                />
                {errors.name && (
                  <div className="flex items-center gap-1 text-xs text-red-500 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.name}</span>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Phone */}
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="block text-xs font-bold text-neutral-600 uppercase tracking-wider font-sans">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="E.g., +91 9876543210"
                    className={`w-full px-4 py-2.5 bg-neutral-50 border ${
                      errors.phone ? "border-red-400 focus:border-red-400" : "border-neutral-200 focus:border-black"
                    } rounded-xl text-sm text-black outline-none focus:ring-1 focus:ring-black/10 duration-200 font-sans`}
                  />
                  {errors.phone && (
                    <div className="flex items-center gap-1 text-xs text-red-500 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.phone}</span>
                    </div>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-xs font-bold text-neutral-600 uppercase tracking-wider font-sans">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="E.g., govindsaboo1@gmail.com"
                    className={`w-full px-4 py-2.5 bg-neutral-50 border ${
                      errors.email ? "border-red-400 focus:border-red-400" : "border-neutral-200 focus:border-black"
                    } rounded-xl text-sm text-black outline-none focus:ring-1 focus:ring-black/10 duration-200 font-sans`}
                  />
                  {errors.email && (
                    <div className="flex items-center gap-1 text-xs text-red-500 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="block text-xs font-bold text-neutral-600 uppercase tracking-wider font-sans">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we assist you? Describe your bulk procurement lot, general blend profiles, or transport inquiries..."
                  className={`w-full px-4 py-2.5 bg-neutral-50 border ${
                    errors.message ? "border-red-400 focus:border-red-400" : "border-neutral-200 focus:border-black"
                  } rounded-xl text-sm text-black outline-none focus:ring-1 focus:ring-black/10 duration-200 resize-none font-sans`}
                />
                {errors.message && (
                  <div className="flex items-center gap-1 text-xs text-red-505 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.message}</span>
                  </div>
                )}
              </div>

               <div>
                {submitError && (
                  <div className="mb-4 p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-500" />
                    <span className="font-sans font-medium">{submitError}</span>
                  </div>
                )}
                <button
                  id="contact-form-submit-button"
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3.5 ${
                    isSubmitting ? "bg-neutral-400 cursor-not-allowed" : "bg-black hover:bg-neutral-900"
                  } text-white font-sans font-bold text-sm rounded-xl tracking-widest uppercase shadow transition-all duration-300 cursor-pointer`}
                >
                  {isSubmitting ? "Sending Message..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>        {/* LOCATION INTEGRATION BELOW CONTACT FORM */}
        <div id="corporate-location-section" className="mt-24 pt-16 border-t border-neutral-200">
          <div className="text-center mb-12">
            <span className="text-neutral-500 uppercase text-xs font-bold tracking-widest block mb-2 font-sans">Find Our physical HQ</span>
            <h2 className="text-3xl font-serif font-black text-black">Guwahati, Assam Headquarters</h2>
            <p className="text-neutral-600 text-sm max-w-xl mx-auto mt-2 font-sans">
              Our main administration office and trade brokerage desk is situated in Rehabari, Guwahati—the gateway to Assam's legendary tea corridors.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* LEFT SIDE: DETAILS & INFORMATION CARDS */}
            <div className="lg:col-span-12 xl:col-span-5 space-y-6">
              
              {/* Address Card */}
              <a 
                href="https://maps.app.goo.gl/juRUhJqHVkDiePJ2A" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block bg-neutral-50 p-6 rounded-xl border border-neutral-200 space-y-3 shadow-xs hover:border-black duration-200 group/hq cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-black shrink-0 mt-0.5 group-hover/hq:scale-110 duration-200" />
                  <div className="w-full">
                    <div className="flex justify-between items-center w-full">
                      <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Corporate Headquarters</h4>
                      <span className="text-[10px] text-neutral-800 font-bold uppercase tracking-wider group-hover/hq:underline">Live Map ↗</span>
                    </div>
                    <p className="text-black font-serif font-black text-base mt-1 font-serif">Pallavi Tea and Trading Company</p>
                    <p className="text-neutral-700 text-sm mt-0.5 font-sans">
                      House no. 10, Bylane no. 1, Rehabari,<br />
                      Guwahati, Assam, India
                    </p>
                    <p className="text-neutral-900 text-sm font-semibold mt-1 font-sans">Postal Code: 781008</p>
                  </div>
                </div>
              </a>

              {/* Hours Card */}
              <div className="bg-white border border-neutral-200 p-6 rounded-xl shadow-xs">
                <div className="flex items-start gap-3 text-sm">
                  <Clock className="w-5 h-5 text-black shrink-0 mt-0.5" />
                  <div className="w-full">
                    <h5 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Operating Hours</h5>
                    <div className="space-y-1.5 text-xs text-neutral-700">
                      <div className="flex justify-between border-b border-neutral-100 pb-1 font-sans">
                        <span>Monday - Saturday</span>
                        <span className="font-semibold">9:00 AM - 6:00 PM IST</span>
                      </div>
                      <div className="flex justify-between text-neutral-400 font-sans">
                        <span>Sunday</span>
                        <span className="italic">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Landmarks Card */}
              <div className="bg-neutral-50 border border-neutral-200 p-6 rounded-xl text-sm">
                <div className="flex items-start gap-3">
                  <Compass className="w-5 h-5 text-black shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Getting Here</h5>
                    <ul className="space-y-1.5 text-neutral-600 text-xs list-disc pl-4 leading-relaxed font-sans">
                      <li>Located in Rehabari, Guwahati, close to major corporate trading hubs.</li>
                      <li>Easy 35-minute drive from Lokpriya Gopinath Bordoloi International Airport (GAU).</li>
                      <li>Walking distance or short drive from Guwahati Railway Station (approx. 1.5 km).</li>
                      <li>Visitor parking spaces are available on-premise at the gate entrance.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Directions Button */}
              <a
                id="get-directions-button"
                href="https://maps.app.goo.gl/juRUhJqHVkDiePJ2A"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-black hover:bg-neutral-900 duration-200 text-white font-sans font-bold text-xs tracking-widest uppercase rounded-xl shadow flex items-center justify-center gap-2 cursor-pointer transition-all text-center"
              >
                Get Live Directions on Google Maps
                <Compass className="w-4 h-4" />
              </a>
            </div>

            {/* RIGHT SIDE: INTERACTIVE MAP */}
            <div className="lg:col-span-12 xl:col-span-7 space-y-6">
              
              {/* Map Holder */}
              <div className="w-full h-[450px] bg-neutral-100 border border-neutral-200 rounded-2xl relative overflow-hidden shadow-md group">
                <iframe
                  id="vantara-map-iframe"
                  src={`https://maps.google.com/maps?q=House%20no%20.10,%20Bylane%20no.1,%20Rehabari,%20Guwahati,%20Assam%2520-%2520781008&t=&z=${zoomLevel}&ie=UTF8&iwloc=&output=embed`}
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                
                {/* Floating controls */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10 bg-white/95 backdrop-blur-xs p-2.5 rounded-xl border border-neutral-250 shadow-sm">
                  <a
                    href="https://maps.app.goo.gl/juRUhJqHVkDiePJ2A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-black text-[#D4AF37] hover:bg-neutral-905 duration-200 text-[10px] font-sans font-bold rounded-full shadow-xs cursor-pointer"
                    title="Click to view Live Location directly in Google Maps application"
                  >
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" /> Open Live Location ↗
                  </a>
                  <div className="flex gap-1">
                    <button
                      type="button"
                      id="zoom-in"
                      onClick={() => setZoomLevel((z) => Math.min(18, z + 1))}
                      className="p-1 px-3 bg-white text-black border border-neutral-200 hover:bg-neutral-50 rounded-md text-xs font-bold duration-150 cursor-pointer shadow-xs"
                      title="Zoom In"
                    >
                      +
                    </button>
                    <button
                      type="button"
                      id="zoom-out"
                      onClick={() => setZoomLevel((z) => Math.max(10, z - 1))}
                      className="p-1 px-3 bg-white text-black border border-neutral-200 hover:bg-neutral-50 rounded-md text-xs font-bold duration-150 cursor-pointer shadow-xs"
                      title="Zoom Out"
                    >
                      -
                    </button>
                  </div>
                </div>

                <a 
                  href="https://maps.app.goo.gl/juRUhJqHVkDiePJ2A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 left-4 right-4 flex justify-between items-center z-10 text-[10px] font-mono text-neutral-800 bg-white/90 hover:bg-black hover:text-white duration-200 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-neutral-200 shadow-xs cursor-pointer"
                  title="Click to view live coordinates on Google Maps"
                >
                  <span>LAT: 26.1730° N</span>
                  <span>LON: 91.7438° E</span>
                  <span className="font-sans font-bold underline text-[9px] uppercase tracking-wider">Direct Link ↗</span>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
