import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaCheckCircle,
  FaExclamationCircle,
  FaSpinner,
  FaBullhorn,
  FaCode,
  FaPaintBrush,
  FaSearchDollar,
  FaPaperPlane,
  FaArrowDown,
  FaClock,
} from "react-icons/fa";
import bgImage from "../images/contact.png";
import d7 from "../images/D7.jpeg";
import axios from "axios";
import SEO from "../components/SEO";

// Structured Service Categories and their specific services
const SERVICE_CATEGORIES = [
  {
    id: "marketing",
    label: "Digital Marketing",
    icon: FaBullhorn,
    color: "from-teal-600 to-emerald-600",
    services: [
      "SEO (Search Engine Optimization)",
      "PPC & Google Ads",
      "Social Media Marketing (SMM)",
      "Content & Email Marketing",
      "Online Reputation Management (ORM)",
      "Local SEO & Google Business",
      "Performance & AI Marketing",
    ],
  },
  {
    id: "development",
    label: "Web & App Development",
    icon: FaCode,
    color: "from-blue-600 to-teal-600",
    services: [
      "Custom Web Development",
      "E-Commerce Development (Shopify/MERN)",
      "Mobile App Development (iOS & Android)",
      "Custom Software & SaaS",
      "CMS Development (WordPress / Headless)",
      "API Development & Integration",
      "Cloud Application Development",
    ],
  },
  {
    id: "design",
    label: "UI/UX & Branding",
    icon: FaPaintBrush,
    color: "from-purple-600 to-indigo-600",
    services: [
      "UI/UX Product Design",
      "Website & Landing Page Design",
      "Brand Identity & Logo Design",
      "Graphic & Marketing Creatives",
    ],
  },
  {
    id: "consultation",
    label: "Consultation & Audit",
    icon: FaSearchDollar,
    color: "from-amber-600 to-orange-600",
    services: [
      "General Consultation",
      "SEO & Website Performance Audit",
      "Digital Marketing Strategy & Roadmap",
      "Brand Growth & Conversion Consultation",
    ],
  },
];

function Contact() {
  // Active Category tab state
  const [activeCategory, setActiveCategory] = useState("marketing");

  // Form input state (Company field removed as requested)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "SEO (Search Engine Optimization)",
    message: "",
    website_hp: "", // Honeypot spam trap
  });

  // UI state for loading, error, and success alerts
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });

  // Handle standard text inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error message when user starts typing
    if (statusMessage.type === "error") {
      setStatusMessage({ type: "", text: "" });
    }
  };

  // Handle service selection
  const handleSelectService = (serviceName) => {
    setFormData((prev) => ({ ...prev, service: serviceName }));
  };

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic frontend validations
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.name.trim()) {
      setStatusMessage({ type: "error", text: "Please enter your full name." });
      return;
    }
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      setStatusMessage({ type: "error", text: "Please provide a valid work or personal email address." });
      return;
    }
    if (!formData.message.trim()) {
      setStatusMessage({ type: "error", text: "Please write a brief summary of your project or requirements." });
      return;
    }

    setIsSubmitting(true);
    setStatusMessage({ type: "", text: "" });

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/contact`,
        formData
      );

      if (response.data && response.data.success !== false) {
        setStatusMessage({
          type: "success",
          text: response.data.msg || "Thank you! Your message has been received. Our team will get back to you within 2-4 business hours.",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "SEO (Search Engine Optimization)",
          message: "",
          website_hp: "",
        });
      } else {
        setStatusMessage({
          type: "error",
          text: response.data.msg || "Unable to send message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Contact form error:", error);
      const errorMessage =
        error.response?.data?.msg ||
        error.response?.data?.message ||
        "Something went wrong! Please try again or email us directly at Admin@diglip7.com.";
      setStatusMessage({ type: "error", text: errorMessage });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Currently active category object
  const currentCategoryObj =
    SERVICE_CATEGORIES.find((cat) => cat.id === activeCategory) ||
    SERVICE_CATEGORIES[0];

  return (
    <div className="w-full bg-white font-sans">
      <SEO
        title="Contact Us – Get a Free Growth & Digital Audit"
        description="Contact DigLip7 for expert SEO, PPC, web development, and ORM consultation. Visit our Noida office or call +91 9650608788 for immediate support."
        canonical="https://diglip7.com/contact"
        keywords="contact DigLip7, digital marketing consultation, hire SEO agency Noida, web development inquiry"
      />

      {/* ================= TOP HERO BANNER (Enhanced Clear Contact Identification) ================= */}
      <section
        className="w-full min-h-[500px] lg:min-h-[560px] bg-no-repeat bg-cover bg-right relative flex items-center py-12 lg:py-20"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Soft readable gradient scrim for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 md:via-white/60 to-transparent pointer-events-none"></div>

        <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <motion.div
            className="max-w-2xl p-2 md:p-6 text-center md:text-left space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Clear "Contact Us" Header Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100 text-teal-900 text-xs font-bold uppercase tracking-wider shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-teal-600 animate-ping"></span>
              <span>Contact Us • Free Growth Consultation</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-800 leading-tight tracking-tight">
              Let’s Connect & Elevate Your Digital Presence
            </h1>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-xl">
              Have a question, need a tailored project estimate, or want an expert audit? Connect directly with our Noida team or submit your inquiry below.
            </p>

            {/* Quick Action Buttons Directly in Hero */}
            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3">
              <a
                href="#inquiry-form"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-150 flex items-center gap-2 cursor-pointer"
              >
                <span>Fill Inquiry Form</span>
                <FaArrowDown className="text-xs animate-bounce" />
              </a>

              <a
                href="https://wa.me/919650608788?text=Hello%20DigLip7%20Team%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-white hover:bg-emerald-50 text-emerald-800 font-bold text-sm border border-emerald-300 shadow-sm transition flex items-center gap-2 cursor-pointer"
              >
                <FaWhatsapp className="text-emerald-600 text-base" />
                <span>Instant WhatsApp</span>
              </a>

              <a
                href="tel:+919650608788"
                className="px-4 py-3 rounded-xl bg-white/80 hover:bg-white text-gray-700 font-semibold text-sm border border-gray-200 transition flex items-center gap-2"
              >
                <FaPhoneAlt className="text-teal-700 text-xs" />
                <span>+91 9650608788</span>
              </a>
            </div>

            {/* Trust Badges & Google Rating */}
            <div className="pt-3 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-gray-600 border-t border-gray-200/80">
              <div className="flex items-center space-x-1.5 bg-white/90 px-3 py-1.5 rounded-lg border border-gray-200 shadow-2xs">
                <img
                  src={d7}
                  alt="DigLip7 Google Verified"
                  className="w-5 h-5 object-contain"
                />
                <span className="text-yellow-500 font-bold text-sm">★★★★★</span>
                <span className="text-gray-800 font-bold">4.5</span>
                <span className="text-gray-500 text-[11px]">(Google Verified)</span>
              </div>

              <div className="flex items-center gap-1.5 text-teal-800 font-medium">
                <FaClock className="text-teal-600" />
                <span>2–4 Hr Fast Response</span>
              </div>

              <div className="flex items-center gap-1.5 text-gray-600 font-medium">
                <FaMapMarkerAlt className="text-orange-500" />
                <span>Sector-2 Noida</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= DISTINCTIVE MODERN FORM & CONTACT SECTION ================= */}
      <section id="inquiry-form" className="w-full bg-gradient-to-b from-teal-50/70 via-slate-50 to-emerald-50/50 py-16 sm:py-24 border-t border-teal-100 scroll-mt-10">
        <div className="w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
          
          {/* Section Sub-Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-2.5 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-600 animate-pulse"></span>
              Let's Connect
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 tracking-normal">
              Get in Touch with Our Specialists
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2.5 leading-relaxed">
              Explore our full range of growth services below, select the one tailored to your business goals, and send us your query.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start">
            
            {/* ---------------- LEFT COLUMN: EXPANSIVE CONTACT & CONNECT HUB (5 Cols) ---------------- */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-5"
            >
              {/* Card 1: Direct Contact Channels */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-md border border-teal-100 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <h3 className="font-bold text-gray-800 text-base sm:text-lg">Direct Reachout</h3>
                  <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    Active Now
                  </span>
                </div>

                {/* Email Box */}
                <a
                  href="mailto:Admin@diglip7.com"
                  className="flex items-center gap-3.5 p-3 rounded-2xl bg-teal-50/50 hover:bg-teal-100/60 border border-teal-100 transition group cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-xl bg-teal-700 text-white flex items-center justify-center shrink-0 text-lg shadow-2xs group-hover:scale-105 transition">
                    <FaEnvelope />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Email Inquiry</p>
                    <p className="font-semibold text-gray-800 text-sm sm:text-base truncate group-hover:text-teal-800 transition">
                      Admin@diglip7.com
                    </p>
                  </div>
                </a>

                {/* Phone Call Box */}
                <a
                  href="tel:+919650608788"
                  className="flex items-center gap-3.5 p-3 rounded-2xl bg-slate-50 hover:bg-emerald-50/60 border border-slate-200/80 hover:border-emerald-200 transition group cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 text-lg shadow-2xs group-hover:scale-105 transition">
                    <FaPhoneAlt />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Direct Hotline</p>
                    <p className="font-semibold text-gray-800 text-sm sm:text-base font-mono group-hover:text-emerald-800 transition">
                      +91 9650608788
                    </p>
                  </div>
                </a>

                {/* Instant WhatsApp Card (Authentic WhatsApp Branding) */}
                <a
                  href="https://wa.me/919650608788?text=Hello%20DigLip7%20Team%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-sm hover:shadow-md transition duration-200 group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-xl group-hover:rotate-6 transition">
                      <FaWhatsapp />
                    </div>
                    <div>
                      <p className="font-bold text-sm sm:text-base leading-tight">Instant WhatsApp Chat</p>
                      <p className="text-emerald-100 text-xs mt-0.5">Connect directly with a growth expert</p>
                    </div>
                  </div>
                  <span className="text-lg font-bold group-hover:translate-x-1 transition">&rarr;</span>
                </a>
              </div>

              {/* Card 2: Noida Headquarters */}
              <div className="bg-white rounded-3xl p-6 shadow-md border border-teal-100 space-y-3">
                <div className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 text-lg shadow-2xs">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-gray-800 text-base">DigLip7 Tech Headquarters</h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      A-55, A Block, Sector-2 Noida, Uttar Pradesh, 201301, India
                    </p>
                    <p className="text-[11px] text-gray-400 font-medium pt-0.5">
                      🕒 Mon – Sat: 9:30 AM – 7:00 PM IST
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3: 2-4 Hour SLA Guarantee */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-teal-800 to-teal-900 text-white shadow-sm space-y-1">
                <div className="flex items-center gap-2 text-teal-200 font-semibold text-xs sm:text-sm">
                  <FaCheckCircle className="text-teal-300" />
                  <span>2–4 Hour Response Guarantee</span>
                </div>
                <p className="text-teal-100 text-xs leading-relaxed">
                  Every inquiry is evaluated by our specialized technical & marketing leads to give you actionable insights.
                </p>
              </div>

              {/* Card 4: Official Social Presence with Authentic Brand Colors */}
              <div className="bg-white rounded-3xl p-4 sm:p-5 shadow-sm border border-teal-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Connect on Socials:
                </span>
                <div className="flex items-center gap-3">
                  {/* Instagram (Official Brand Gradient) */}
                  <a
                    href="https://www.instagram.com/diglip7?stkn=a2RyNmU2ZDMzMHVt"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Instagram - @diglip7"
                    className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] via-[#cc2366] to-[#bc1888] text-white flex items-center justify-center text-base shadow-sm hover:scale-110 transition duration-200"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </a>

                  {/* LinkedIn (Official Brand Blue #0A66C2) */}
                  <a
                    href="https://www.linkedin.com/company/diglip7"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn - DigLip7"
                    className="w-9 h-9 rounded-xl bg-[#0A66C2] hover:bg-[#084e96] text-white flex items-center justify-center text-base shadow-sm hover:scale-110 transition duration-200"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin />
                  </a>

                  {/* Facebook (Official Brand Blue #1877F2) */}
                  <a
                    href="https://www.facebook.com/DigLip7/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Facebook - DigLip7"
                    className="w-9 h-9 rounded-xl bg-[#1877F2] hover:bg-[#1565cf] text-white flex items-center justify-center text-base shadow-sm hover:scale-110 transition duration-200"
                    aria-label="Facebook"
                  >
                    <FaFacebook />
                  </a>

                  {/* WhatsApp Direct */}
                  <a
                    href="https://wa.me/919650608788?text=Hello%20DigLip7%20Team"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="WhatsApp"
                    className="w-9 h-9 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center text-base shadow-sm hover:scale-110 transition duration-200"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* ---------------- RIGHT COLUMN: EXPANSIVE STEP-BY-STEP INQUIRY FORM (7 Cols) ---------------- */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg border border-teal-100 relative"
            >
              {/* Form Title */}
              <div className="mb-6 pb-4 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <span className="text-xs font-semibold text-orange-600 uppercase tracking-widest block mb-1">
                    Project Consultation
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                    Send Your Requirements
                  </h3>
                </div>
                <span className="text-xs text-teal-800 font-medium bg-teal-50 border border-teal-200 px-3 py-1 rounded-full self-start sm:self-center">
                  Quick 1-Min Form
                </span>
              </div>

              {/* Status Alert Banner (Success / Error) */}
              {statusMessage.text && (
                <div
                  className={`mb-6 p-4 rounded-2xl text-sm flex items-center gap-3 transition-all ${
                    statusMessage.type === "error"
                      ? "bg-red-50 text-red-700 border border-red-200"
                      : "bg-emerald-50 text-emerald-900 border border-emerald-200 shadow-sm"
                  }`}
                >
                  {statusMessage.type === "error" ? (
                    <FaExclamationCircle className="text-red-500 text-xl shrink-0" />
                  ) : (
                    <FaCheckCircle className="text-emerald-600 text-xl shrink-0" />
                  )}
                  <span className="leading-relaxed font-medium">{statusMessage.text}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-7">
                {/* Honeypot hidden anti-spam field */}
                <input
                  type="text"
                  name="website_hp"
                  value={formData.website_hp}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                {/* ================= STEP 1: CATEGORY SELECTION DECK ================= */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-xs font-bold text-gray-800 uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-5 h-5 rounded-full bg-teal-700 text-white flex items-center justify-center text-[11px] font-bold">
                        1
                      </span>
                      Choose Domain Category <span className="text-orange-500">*</span>
                    </label>
                    <span className="text-[11px] text-gray-400">4 Specializations</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {SERVICE_CATEGORIES.map((cat) => {
                      const Icon = cat.icon;
                      const isActive = activeCategory === cat.id;
                      return (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => {
                            setActiveCategory(cat.id);
                            if (cat.services && cat.services.length > 0) {
                              setFormData((prev) => ({ ...prev, service: cat.services[0] }));
                            }
                          }}
                          className={`p-3.5 rounded-2xl text-left border transition-all duration-200 cursor-pointer flex flex-col justify-between gap-3 ${
                            isActive
                              ? "bg-teal-800 text-white border-teal-800 shadow-md shadow-teal-900/10 scale-[1.02]"
                              : "bg-gray-50/80 text-gray-700 border-gray-200 hover:bg-teal-50/80 hover:border-teal-300"
                          }`}
                        >
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm ${
                            isActive ? "bg-teal-700/80 text-teal-100" : "bg-white text-teal-700 border border-gray-200"
                          }`}>
                            <Icon />
                          </div>
                          <div>
                            <span className="text-xs font-bold leading-snug block">{cat.label}</span>
                            <span className={`text-[10px] block mt-0.5 ${isActive ? "text-teal-200" : "text-gray-400"}`}>
                              {cat.services.length} services
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* ================= STEP 2: SPECIFIC SERVICE SELECTION PILLS ================= */}
                <div className="p-5 rounded-2xl bg-teal-50/60 border border-teal-200/70 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <label className="text-xs font-bold text-teal-950 uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-5 h-5 rounded-full bg-teal-700 text-white flex items-center justify-center text-[11px] font-bold">
                        2
                      </span>
                      Select Specific Service
                    </label>
                    <span className="text-xs font-semibold text-teal-900">
                      Selected: <strong className="text-teal-950 font-bold bg-white px-2 py-0.5 rounded-md border border-teal-200 shadow-2xs">{formData.service}</strong>
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 pt-1">
                    {currentCategoryObj.services.map((serviceName) => {
                      const isSelected = formData.service === serviceName;
                      return (
                        <button
                          key={serviceName}
                          type="button"
                          onClick={() => handleSelectService(serviceName)}
                          className={`p-2.5 rounded-xl text-xs transition-all duration-150 cursor-pointer text-left flex items-center gap-2 border ${
                            isSelected
                              ? "bg-teal-700 text-white font-bold border-teal-700 shadow-xs"
                              : "bg-white text-gray-700 border-gray-200 hover:bg-teal-100/70 hover:border-teal-300 hover:text-teal-950"
                          }`}
                        >
                          <span className={`w-3.5 h-3.5 rounded-full flex items-center justify-center shrink-0 text-[9px] ${
                            isSelected ? "bg-white text-teal-800" : "border border-gray-300"
                          }`}>
                            {isSelected ? "✓" : ""}
                          </span>
                          <span className="truncate">{serviceName}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* ================= STEP 3: CONTACT INFORMATION ================= */}
                <div className="space-y-4">
                  <label className="text-xs font-bold text-gray-800 uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-teal-700 text-white flex items-center justify-center text-[11px] font-bold">
                      3
                    </span>
                    Your Information & Requirements <span className="text-orange-500">*</span>
                  </label>

                  {/* Name & Email 2-Column Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Amit Kumar"
                        required
                        className="w-full px-4 py-3 text-sm bg-gray-50/60 border border-gray-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. amit@example.com"
                        required
                        className="w-full px-4 py-3 text-sm bg-gray-50/60 border border-gray-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="block text-xs font-semibold text-gray-700">
                        Phone Number / WhatsApp
                      </label>
                      <span className="text-[11px] text-gray-400">Optional (for faster callback)</span>
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 9650608788"
                      className="w-full px-4 py-3 text-sm bg-gray-50/60 border border-gray-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                    />
                  </div>

                  {/* Message Box */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="block text-xs font-semibold text-gray-700">
                        Project Goals & Description <span className="text-red-500">*</span>
                      </label>
                      <span className="text-[11px] text-gray-400 font-mono">
                        {formData.message.length} characters
                      </span>
                    </div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us what you're looking to achieve (e.g. target keywords, website requirements, monthly growth goals)..."
                      rows="3"
                      required
                      className="w-full px-4 py-3 text-sm bg-gray-50/60 border border-gray-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition resize-y"
                    ></textarea>
                  </div>
                </div>

                {/* ================= SUBMIT BUTTON ================= */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
                  className={`w-full py-4 px-6 rounded-2xl font-bold text-sm sm:text-base tracking-wide flex items-center justify-center gap-2.5 transition-all shadow-md cursor-pointer ${
                    isSubmitting
                      ? "bg-gray-400 text-white cursor-not-allowed"
                      : "bg-gradient-to-r from-orange-500 via-orange-600 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white shadow-orange-500/25"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="animate-spin text-lg" />
                      <span>Sending Query...</span>
                    </>
                  ) : (
                    <>
                      <span>Get Free Consultation for {formData.service}</span>
                      <FaPaperPlane className="text-xs" />
                    </>
                  )}
                </motion.button>

                <p className="text-[11px] text-center text-gray-500 flex items-center justify-center gap-1.5">
                  <span>🔒</span>
                  <span>100% Confidential. No spam. Fast 2–4 hr response guarantee.</span>
                </p>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;



