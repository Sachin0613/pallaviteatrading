import React, { useState, useEffect } from "react";
import { TOP_GARDENS } from "../data";
import { SampleRequest } from "../types";
import { Mail, Phone, MapPin, CheckCircle, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface SampleRequestFormProps {
  prefilledGardenName?: string;
  onClearPrefill?: () => void;
}

const initialFormState: SampleRequest = {
  name: "",
  phone: "",
  email: "",
  address: "",
  sampleName: "",
  grade: "",
  priceRange: "",
  preferredLocationMark: "",
  notes: ""
};

export default function SampleRequestForm({
  prefilledGardenName,
  onClearPrefill
}: SampleRequestFormProps) {
  const [formData, setFormData] = useState<SampleRequest>(initialFormState);
  const [errors, setErrors] = useState<Partial<Record<keyof SampleRequest, string>>>({});
  const [showSuccess, setShowSuccess] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // If a prefilled garden is passed (e.g. from the top gardens page), set it in the dropdown!
  useEffect(() => {
    if (prefilledGardenName) {
      setFormData((prev) => ({ ...prev, sampleName: prefilledGardenName }));
    }
  }, [prefilledGardenName]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error as they type
    if (errors[name as keyof SampleRequest]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof SampleRequest, string>> = {};
    
    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[0-9+\s\-().]{8,25}$/.test(formData.phone.trim())) {
      newErrors.phone = "Enter a valid phone number (at least 8 digits).";
    }
    
    // Email is optional, but if entered, validate its format
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.address.trim()) newErrors.address = "Delivery address is required.";
    if (!formData.grade.trim()) newErrors.grade = "Grade is required.";
    if (!formData.priceRange) newErrors.priceRange = "Price range selection is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("https://formspree.io/f/xaqzldyw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email || "Not Provided",
          sample_plantation: formData.sampleName,
          leaf_grade: formData.grade,
          target_price_range: formData.priceRange,
          preferred_location_mark: formData.preferredLocationMark || "None",
          delivery_address: formData.address,
          additional_notes: formData.notes || "None"
        })
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData(initialFormState);
        if (onClearPrefill) onClearPrefill();
      } else {
        const data = await response.json();
        setSubmitError(data.error || "There was a problem submitting your request. Please try again.");
      }
    } catch (err) {
      // In case of offline error, we show a success placeholder or a informative message.
      // We will fall back gracefully or show an error.
      setSubmitError("Failed to connect to the server. Please verify your internet connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-white">
      {/* HERO SECTION */}
      <section className="bg-brand-green py-16 sm:py-24 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,155,123,0.15),transparent_60%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <span className="text-brand-gold uppercase text-xs font-semibold tracking-widest block mb-2">Evaluate Quality First</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">Request Tea Samples</h1>
          <p className="text-brand-cream/80 text-base sm:text-lg max-w-xl mx-auto">
            We happily supply airtight curated evaluation kits directly to registered merchants and procurement divisions worldwide.
          </p>
        </div>
      </section>

      {/* FORM AND DESCRIPTION PANEL */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT SIDE INFO */}
          <div className="lg:col-span-5 space-y-8 bg-brand-cream/30 border border-brand-cream p-8 rounded-2xl">
            <div className="space-y-2">
              <h2 className="text-2xl font-serif font-bold text-brand-green">Sampling Process</h2>
              <p className="text-brand-charcoal/70 text-xs sm:text-sm leading-relaxed">
                We believe premium leaves are the signature of premium brand promises. Our step-by-step dispatch ensures you verify flavor consistency before entering bulk procurement agreements.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded bg-brand-gold/20 flex items-center justify-center text-brand-gold font-bold shrink-0">1</div>
                <div>
                  <h4 className="text-sm font-serif font-bold text-brand-green">Submit Requests</h4>
                  <p className="text-brand-charcoal/60 text-xs mt-1">Specify your garden origin, targeted leaf grade, and recipient delivery coordinates.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded bg-brand-gold/20 flex items-center justify-center text-brand-gold font-bold shrink-0">2</div>
                <div>
                  <h4 className="text-sm font-serif font-bold text-brand-green">Quality Valuation Check</h4>
                  <p className="text-brand-charcoal/60 text-xs mt-1">Our lab team draws the current seasonal lot, vacuum-seals 50g-100g bags, and issues courier tickets.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded bg-brand-gold/20 flex items-center justify-center text-brand-gold font-bold shrink-0">3</div>
                <div>
                  <h4 className="text-sm font-serif font-bold text-brand-green">Savor & Confirm</h4>
                  <p className="text-brand-charcoal/60 text-xs mt-1">Brew, assess color yield, capture aroma bloom, and consult our advisory panel on price schedules.</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white rounded-lg border border-brand-cream flex items-center gap-3">
              <span className="text-3xl">🫖</span>
              <p className="text-brand-charcoal/70 text-xs">
                <strong>Standard Kit Includes:</strong> Approx. 50g vacuumed leaf, brewing profiles, and certified lot analysis reporting.
              </p>
            </div>
          </div>

          {/* MAIN FORM */}
          <div className="lg:col-span-7 bg-white border border-brand-cream p-8 rounded-2xl shadow-sm relative">
            <AnimatePresence>
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute inset-0 bg-white/95 z-20 flex flex-col justify-center items-center p-6 text-center rounded-2xl"
                >
                  <CheckCircle className="w-16 h-16 text-emerald-600 mb-4 filter drop-shadow animate-bounce" />
                  <h3 className="text-2xl font-serif font-black text-emerald-600 mb-2">Sample Request Send!</h3>
                  <p className="text-black/80 text-sm max-w-sm mb-6 font-semibold bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-3">
                    ✓ sample request send, will touch in soon
                  </p>
                  <button
                    id="close-success-message-button"
                    onClick={() => setShowSuccess(false)}
                    className="px-6 py-2.5 bg-black hover:bg-neutral-800 duration-200 text-[#D4AF37] font-sans font-bold text-xs rounded-xl tracking-wider uppercase cursor-pointer transition-all shadow-md"
                  >
                    Request Another
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-xl font-serif font-bold text-brand-green border-b border-brand-cream pb-3">Sample Request Form</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="block text-xs font-semibold text-brand-charcoal/80 uppercase tracking-wider">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="E.g., John Wick"
                    className={`w-full px-4 py-2.5 bg-brand-cream/10 border ${
                      errors.name ? "border-red-400 focus:border-red-400" : "border-brand-cream focus:border-brand-gold"
                    } rounded text-sm text-brand-charcoal outline-none focus:ring-1 focus:ring-brand-gold/20 duration-200`}
                  />
                  {errors.name && (
                    <div className="flex items-center gap-1 text-xs text-red-500 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </div>
                  )}
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="block text-xs font-semibold text-brand-charcoal/80 uppercase tracking-wider">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="E.g., +91 0000000000"
                    className={`w-full px-4 py-2.5 bg-brand-cream/10 border ${
                      errors.phone ? "border-red-400 focus:border-red-400" : "border-brand-cream focus:border-brand-gold"
                    } rounded text-sm text-brand-charcoal outline-none focus:ring-1 focus:ring-brand-gold/20 duration-200`}
                  />
                  {errors.phone && (
                    <div className="flex items-center gap-1 text-xs text-red-500 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.phone}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Email (Optional) */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="block text-xs font-semibold text-brand-charcoal/80 uppercase tracking-wider">
                  Email Address <span className="text-brand-charcoal/40 text-[10px] font-normal italic">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="E.g., merchant@company.com"
                  className={`w-full px-4 py-2.5 bg-brand-cream/10 border ${
                    errors.email ? "border-red-400 focus:border-red-400" : "border-brand-cream focus:border-brand-gold"
                  } rounded text-sm text-brand-charcoal outline-none focus:ring-1 focus:ring-brand-gold/20 duration-200`}
                />
                {errors.email && (
                  <div className="flex items-center gap-1 text-xs text-red-500 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.email}</span>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                

                {/* Grade/Type (BOP, BOPSM, BO, BP, OF, PD, DUST, SECONDARY) */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="grade" className="block text-xs font-bold text-neutral-700 uppercase tracking-wider">
                    Leaf Grade Selection <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="grade"
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 bg-white border ${
                      errors.grade ? "border-red-400 focus:border-red-400" : "border-neutral-300 focus:border-black"
                    } rounded-xl text-sm text-black outline-none focus:ring-1 focus:ring-black/20 duration-200 cursor-pointer`}
                  >
                    <option value="">-- Select Grade --</option>
                    <option value="BOP">BOP (Broken Orange Pekoe)</option>
                    <option value="BOPSM">BOPSM (Broken Orange Pekoe Souchong Madam)</option>
                    <option value="BO">BO (Broken Orange)</option>
                    <option value="BP">BP (Broken Pekoe)</option>
                    <option value="OF">OF (Orange Fannings)</option>
                    <option value="PD">PD (Pekoe Dust)</option>
                    <option value="DUST">DUST (Finest Dust)</option>
                    <option value="SECONDARY">SECONDARY (Secondary Grade)</option>
                    <option value="OTHER">Other Custom Request</option>
                  </select>
                  {errors.grade && (
                    <div className="flex items-center gap-1 text-xs text-red-500 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.grade}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Price Range (BELOW 200, 200-250, 250-300, 300+) */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="priceRange" className="block text-xs font-bold text-neutral-700 uppercase tracking-wider">
                    Target Price Range (INR/kg) <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="priceRange"
                    name="priceRange"
                    value={formData.priceRange || ""}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 bg-white border ${
                      errors.priceRange ? "border-red-400 focus:border-red-400" : "border-neutral-300 focus:border-black"
                    } rounded-xl text-sm text-black outline-none focus:ring-1 focus:ring-black/20 duration-200 cursor-pointer`}
                  >
                    <option value="">-- Choose Price Range --</option>
                    <option value="BELOW 200">BELOW 200</option>
                    <option value="200-250">200 - 250</option>
                    <option value="250-300">250 - 300</option>
                    <option value="300+">300+</option>
                  </select>
                  {errors.priceRange && (
                    <div className="flex items-center gap-1 text-xs text-red-500 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.priceRange}</span>
                    </div>
                  )}
                </div>

                {/* Any Preferred Location Mark (If any) */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="preferredLocationMark" className="block text-xs font-bold text-neutral-700 uppercase tracking-wider">
                    Preferred Location Mark <span className="text-neutral-400 text-[10px] font-normal italic"></span>
                  </label>
                  <input
                    type="text"
                    id="preferredLocationMark"
                    name="preferredLocationMark"
                    value={formData.preferredLocationMark || ""}
                    onChange={handleChange}
                    placeholder="E.g., Upper Assam, Halmari estate tag"
                    className="w-full px-4 py-2.5 bg-white border border-neutral-300 focus:border-black rounded-xl text-sm text-black outline-none focus:ring-1 focus:ring-black/20 duration-200"
                  />
                </div>
              </div>

              {/* Delivery Address */}
              <div className="space-y-1.5">
                <label htmlFor="address" className="block text-xs font-semibold text-brand-charcoal/80 uppercase tracking-wider">
                  Full Delivery Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="address"
                  name="address"
                  rows={3}
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter full recipient street, company name, city, postal code and country..."
                  className={`w-full px-4 py-2.5 bg-brand-cream/10 border ${
                    errors.address ? "border-red-400 focus:border-red-400" : "border-brand-cream focus:border-brand-gold"
                  } rounded text-sm text-brand-charcoal outline-none focus:ring-1 focus:ring-brand-gold/20 duration-200 resize-none`}
                />
                {errors.address && (
                  <div className="flex items-center gap-1 text-xs text-red-500 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.address}</span>
                  </div>
                )}
              </div>

              {/* Additional Notes (Optional) */}
              <div className="space-y-1.5">
                <label htmlFor="notes" className="block text-xs font-semibold text-brand-charcoal/80 uppercase tracking-wider">
                  Additional Blend Specifications <span className="text-brand-charcoal/40 text-[10px] font-normal italic">(Optional)</span>
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  value={formData.notes || ""}
                  onChange={handleChange}
                  placeholder="Describe your target cup flavor, water parameters, packaging requests, or timing preferences here..."
                  className="w-full px-4 py-2.5 bg-brand-cream/10 border border-brand-cream focus:border-brand-gold rounded text-sm text-brand-charcoal outline-none focus:ring-1 focus:ring-brand-gold/20 duration-200 resize-none"
                />
              </div>

              {Object.keys(errors).some(k => errors[k as keyof SampleRequest]) && (
                <div className="p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl space-y-1">
                  <div className="flex items-center gap-2 font-bold font-sans">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                    <span>Please correct the following fields before submission:</span>
                  </div>
                  <ul className="list-disc pl-5 space-y-0.5 font-sans font-medium text-[11px]">
                    {Object.entries(errors).map(([key, msg]) => msg ? (
                      <li key={key}>{msg}</li>
                    ) : null)}
                  </ul>
                </div>
              )}

              {submitError && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-xs rounded-xl flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span className="font-sans font-medium">{submitError}</span>
                </div>
              )}

              <div className="pt-4">
                <button
                  id="request-sample-submit-button"
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3.5 ${
                    isSubmitting ? "bg-neutral-400 cursor-not-allowed" : "bg-brand-green hover:bg-brand-brown"
                  } text-white font-sans font-bold text-sm rounded-xl tracking-widest uppercase shadow transition-all duration-300 cursor-pointer`}
                >
                  {isSubmitting ? "Sending Request..." : "Submit Sample Request"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
