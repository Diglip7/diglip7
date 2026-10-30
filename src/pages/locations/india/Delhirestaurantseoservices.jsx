import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../../../components/SEO";
import {
  ArrowRight,
  ArrowUp,
  ChevronDown,
  ChevronRight,
  AlertTriangle,
  Home,
  MapPin,
  Search,
  Smartphone,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Utensils,
  BarChart3,
  Settings,
  FileText,
  Users,
} from "lucide-react";

// ===========================================================================
// Shared building blocks (same patterns as the existing site pages)
// ===========================================================================

const inlineLink =
  "text-teal-800 font-semibold underline hover:text-[#c89d5a] transition-colors";

// 3D Interactive Card
const Card3D = ({ children, className = "" }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRotateX((y - rect.height / 2) / 14);
    setRotateY((rect.width / 2 - x) / 14);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      className={`transform-gpu ${className}`}
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
    >
      {children}
    </motion.div>
  );
};

// Floating Animation
const FloatingElement = ({ children, delay = 0 }) => (
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 3, repeat: Infinity, delay }}
  >
    {children}
  </motion.div>
);

const SectionHeading = ({ children, color = "text-gray-900", className = "mb-4" }) => (
  <FloatingElement>
    <h2 className={`text-3xl md:text-4xl font-bold ${color} ${className}`}>{children}</h2>
  </FloatingElement>
);

// Scroll progress bar (top of page)
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 origin-left bg-gradient-to-r from-teal-600 to-[#c89d5a] z-[60] pointer-events-none"
      style={{ scaleX }}
    />
  );
};

// Back-to-top button
const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-teal-700 to-teal-900 text-white shadow-2xl hover:shadow-teal-500/50 flex items-center justify-center cursor-pointer"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// Hero (same structure as existing pages, with visible breadcrumb)
const LandingHero = ({ breadcrumb, titleDark, titleGradient, ctaLabel, image }) => {
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 3 + Math.random() * 2,
        delay: Math.random() * 2,
      })),
    []
  );

  return (
    <>
      {/* Breadcrumb (visible) */}
      <div className="pt-24 sm:pt-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-100 via-pink-100 to-white">
        <nav
          aria-label="Breadcrumb"
          className="max-w-7xl mx-auto flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-gray-600 pb-2"
        >
          {breadcrumb.map((crumb, i) => (
            <span key={crumb.label} className="flex items-center gap-1.5">
              {i === 0 ? (
                <Home className="w-3.5 h-3.5 text-teal-700" />
              ) : (
                <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              )}
              {i === breadcrumb.length - 1 ? (
                <span className="font-semibold text-teal-900">{crumb.label}</span>
              ) : (
                <Link to={crumb.href} className="hover:text-teal-700 transition-colors">
                  {crumb.label}
                </Link>
              )}
            </span>
          ))}
        </nav>
      </div>

      <div className="pt-6 sm:pt-8 pb-16 lg:pb-20 bg-gradient-to-r from-purple-100 via-pink-100 to-white min-h-[85vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 xl:px-12 relative overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-16 h-16 bg-white/20 rounded-full blur-xl pointer-events-none"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-20 h-20 bg-white/20 rounded-full blur-xl pointer-events-none"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        <div className="flex flex-col lg:flex-row items-center w-full max-w-7xl mx-auto gap-8 lg:gap-12 relative z-10">
          {/* Left Section */}
          <div className="w-full lg:w-[58%] text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-gray-900">{titleDark} </span>
              <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                {titleGradient}
              </span>
            </h1>

            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
              <Link to="/contact" className="inline-block">
                <motion.button
                  className="group px-7 sm:px-9 py-3.5 sm:py-4 bg-gradient-to-r from-teal-700 to-teal-900 text-white text-base sm:text-lg font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {ctaLabel}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </div>
          </div>

          {/* Right Section - 3D Hero Image (eager, LCP) */}
          <motion.div
            className="w-full lg:w-[42%] flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card3D className="w-full max-w-md lg:max-w-none">
              <Img
                image={image}
                className="rounded-2xl shadow-xl w-full max-w-md lg:max-w-none h-auto object-cover bg-gray-50"
              />
            </Card3D>
          </motion.div>
        </div>

        <div className="absolute inset-0 pointer-events-none">
          {particles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{ left: `${p.left}%`, top: `${p.top}%` }}
              animate={{ y: [0, -100, 0], opacity: [0, 1, 0] }}
              transition={{ duration: p.duration, repeat: Infinity, delay: p.delay }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

// Process (blue line + icon circles), 4 columns
const ProcessSection = ({ title, steps, closing }) => (
  <div className="bg-white py-12 px-2 text-center mb-20">
    <div className="max-w-5xl mx-auto mb-12">
      <FloatingElement>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
      </FloatingElement>
    </div>

    <div className="relative max-w-7xl mx-auto">
      <div className="hidden lg:block absolute top-10 left-0 w-full border-t-4 border-blue-100 z-0"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <div className="relative flex items-center justify-center w-16 h-16 rounded-full border-4 border-blue-300 bg-white shadow-md mb-4">
              <step.icon className="w-8 h-8 text-blue-600" />
              <span className="absolute -top-2 -right-2 bg-teal-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full shadow">
                {index + 1}
              </span>
            </div>

            <h3 className="font-semibold text-gray-900 text-sm sm:text-base leading-snug">
              {step.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </div>

    {closing && (
      <p className="text-gray-600 mt-12 text-sm sm:text-base max-w-4xl mx-auto leading-relaxed">
        {closing}
      </p>
    )}
  </div>
);

// FAQ accordion
const FaqSection = ({ title, faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-teal-50/30 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <FloatingElement>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-700 mb-4">{title}</h2>
          </FloatingElement>
        </motion.div>

        <div className="space-y-4 sm:space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (index % 4) * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="m-0">
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                  className="w-full flex justify-between items-center text-left p-4 sm:p-6 hover:bg-gray-50 transition-colors duration-200 group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-900 to-teal-700 text-white text-base sm:text-lg font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-102 cursor-pointer"
                >
                  <span className="font-semibold pr-4">
                    {index + 1}. {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-white" />
                  </motion.div>
                </button>
              </h3>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="border-t border-gray-100"
                  >
                    <div className="p-4 sm:p-6 text-gray-600 leading-relaxed text-xs sm:text-sm lg:text-base">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA banner (primary + secondary buttons)
const CtaSection = ({ headingLead, headingAccent, text, buttons }) => {
  const circles = useMemo(
    () =>
      Array.from({ length: 15 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 4 + Math.random() * 2,
        delay: Math.random() * 2,
      })),
    []
  );

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-teal-700 to-[#c89d5a] overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {circles.map((c, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 border border-white/20 rounded-full"
            style={{ left: `${c.left}%`, top: `${c.top}%` }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: c.duration, repeat: Infinity, delay: c.delay }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <FloatingElement>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
              {headingLead}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white">
                {headingAccent}
              </span>
            </h2>
          </FloatingElement>
          <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            {text}
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
            {buttons.map((label, i) => {
              const buttonInner = (
                <motion.button
                  className={
                    i === 0
                      ? "px-6 sm:px-8 py-3 sm:py-4 bg-white text-teal-700 font-semibold rounded-full shadow-xl hover:shadow-2xl hover:bg-gray-50 transition-all duration-300 text-sm sm:text-base cursor-pointer inline-flex items-center"
                      : "px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 text-sm sm:text-base cursor-pointer inline-flex items-center"
                  }
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {label}
                  {i === 0 && <Sparkles className="inline-block ml-2 w-4 h-4 sm:w-5 sm:h-5" />}
                </motion.button>
              );

              if (i === 0) {
                return (
                  <a
                    key={label}
                    href="https://wa.me/919650608788?text=Hello%20DigLip7%20Team%2C%20I%20would%20like%20to%20discuss%20Restaurant%20SEO%20Services%20for%20my%20business%20in%20Delhi."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {buttonInner}
                  </a>
                );
              }

              return (
                <Link to="/contact" key={label}>
                  {buttonInner}
                </Link>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Image helper (lazy by default with graceful error fallback)
const Img = ({
  image,
  className = "rounded-2xl shadow-xl w-full object-cover bg-gray-50",
  aspect = "aspect-[16/9]",
  fallbackIcon: FallbackIcon = Utensils,
}) => {
  const [hasError, setHasError] = useState(false);
  const fileName = image?.src ? image.src.split("/").pop() : "";

  if (hasError || !image?.src) {
    return (
      <div className={`p-6 text-center text-sm font-medium text-slate-700 select-none flex flex-col items-center justify-center gap-3 w-full bg-gradient-to-b from-white to-teal-50/50 border-2 border-dashed border-teal-300/80 rounded-2xl shadow-md ${aspect}`}>
        <div className="w-12 h-12 rounded-xl bg-teal-100/90 text-teal-800 flex items-center justify-center shadow-xs">
          <FallbackIcon className="w-6 h-6" />
        </div>
        <div className="space-y-1 max-w-sm">
          <span className="block leading-snug text-xs sm:text-sm font-bold text-slate-900">
            {image?.alt}
          </span>
          <span className="inline-block font-mono text-[11px] text-teal-800 bg-teal-100/70 px-2.5 py-0.5 rounded-full border border-teal-300/60 font-semibold">
            {fileName}
          </span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      loading="lazy"
      decoding="async"
      onError={() => setHasError(true)}
      className={className}
    />
  );
};

// ===========================================================================
// New layout components unique to this page
// ===========================================================================

// Speech bubble with tail
const Bubble = ({ children, side = "left", tone = "teal", delay = 0 }) => {
  const tones = {
    teal: "bg-gradient-to-br from-teal-700 to-teal-900 text-white",
    light: "bg-white text-gray-700 border border-teal-100",
  };
  return (
    <motion.div
      className={`relative rounded-3xl p-6 sm:p-8 shadow-lg ${tones[tone]} ${
        side === "left" ? "md:mr-10" : "md:ml-10"
      }`}
      initial={{ opacity: 0, x: side === "left" ? -50 : 50, scale: 0.95 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.7, delay }}
    >
      <span
        aria-hidden="true"
        className={`absolute top-8 w-5 h-5 rotate-45 ${
          side === "left" ? "-left-2.5" : "-right-2.5"
        } ${tone === "teal" ? "bg-teal-800" : "bg-white border-l border-b border-teal-100"}`}
      />
      <p className="relative leading-relaxed text-base sm:text-lg">{children}</p>
    </motion.div>
  );
};

// Laptop-style device frame around an image
const DeviceFrame = ({ image }) => (
  <div className="relative">
    <Card3D>
      <div className="rounded-3xl bg-gray-900 p-3 sm:p-4 shadow-2xl">
        <div className="flex items-center gap-1.5 px-2 pb-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
        <Img image={image} className="rounded-xl w-full object-cover bg-gray-50" />
      </div>
      <div className="mx-auto h-3 w-2/3 rounded-b-3xl bg-gray-300 shadow-md" />
    </Card3D>
    <motion.span
      aria-hidden="true"
      className="absolute -bottom-5 -right-3 w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-600 to-teal-900 shadow-xl flex items-center justify-center"
      animate={{ y: [0, -12, 0], rotate: [0, 6, 0] }}
      transition={{ duration: 3.5, repeat: Infinity }}
    >
      <Smartphone className="w-7 h-7 text-white" />
    </motion.span>
  </div>
);

// Menu-board service list item
const MenuItem = ({ number, title, text, index }) => (
  <motion.div
    className="group"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-30px" }}
    transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
  >
    <div className="flex items-end gap-3">
      <span className="w-9 h-9 shrink-0 rounded-full bg-gradient-to-br from-teal-600 to-teal-900 text-white text-sm font-bold flex items-center justify-center shadow group-hover:scale-110 transition-transform">
        {number}
      </span>
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-teal-700 transition-colors">
        {title}
      </h3>
      <span className="flex-1 border-b-2 border-dotted border-[#c89d5a]/60 mb-1.5 group-hover:border-teal-600 transition-colors" />
    </div>
    <p className="mt-2 ml-12 text-gray-600 text-sm sm:text-base leading-relaxed">{text}</p>
  </motion.div>
);

// ===========================================================================
// Page constants
// ===========================================================================

const pageUrl = "https://diglip7.com/india/restaurant-seo-services-delhi/";
const metaTitle = "Restaurant SEO Services in Delhi | DigLip7";
const metaDescription =
  "Improve your restaurant's online visibility with Restaurant SEO Services in Delhi from DigLip7. Explore local SEO, Google Business Profile optimization and website improvements.";
const ogImage =
  "https://diglip7.com/images/india/restaurant-seo-delhi/restaurant-seo-services-delhi.webp";

const breadcrumbTrail = [
  { label: "Home", href: "/" },
  { label: "India SEO Services", href: "/india/seo-services" },
  { label: "Restaurant SEO Services in Delhi", href: "/india/restaurant-seo-services-delhi/" },
];

const imgBase = "/images/india/restaurant-seo-delhi/";
const images = {
  hero: {
    src: `${imgBase}restaurant-seo-services-delhi.webp`,
    alt: "Restaurant owner reviewing online visibility and website performance",
    width: 1600,
    height: 900,
  },
  local: {
    src: `${imgBase}restaurant-local-seo-delhi.webp`,
    alt: "Restaurant team checking location details on a digital map",
    width: 1600,
    height: 900,
  },
  keyword: {
    src: `${imgBase}restaurant-keyword-research-delhi.webp`,
    alt: "Marketing specialist reviewing restaurant search trends on a laptop",
    width: 1600,
    height: 900,
  },
  website: {
    src: `${imgBase}restaurant-website-optimization-delhi.webp`,
    alt: "Designer reviewing a mobile-friendly restaurant menu website",
    width: 1600,
    height: 900,
  },
  content: {
    src: `${imgBase}restaurant-content-marketing-delhi.webp`,
    alt: "Restaurant team planning food photography and menu content",
    width: 1600,
    height: 900,
  },
  technical: {
    src: `${imgBase}restaurant-technical-seo-delhi.webp`,
    alt: "Specialist analyzing website structure and technical performance",
    width: 1600,
    height: 900,
  },
  reporting: {
    src: `${imgBase}restaurant-seo-reporting-delhi.webp`,
    alt: "Marketing team reviewing organic search and enquiry trends",
    width: 1600,
    height: 900,
  },
};

// ===========================================================================
// Content data (verbatim from the content package)
// ===========================================================================

const menuServices = [
  { title: "Restaurant SEO Audit", text: "We review indexing, crawlability, site structure, metadata, internal links, mobile usability, page speed and existing organic performance, so fixes are based on evidence rather than guesswork. The audit also shows which existing pages already have potential, which often matters more than adding new ones." },
  { title: "Restaurant Keyword Research", text: "We identify searches related to cuisine, restaurant type, location, menu items, dining occasions and customer intent, and map them to the pages that should answer them. A search for a family dining option calls for a different page than a search for a specific dish, and each should be matched to the right one." },
  { title: "Google Business Profile Optimization", text: "We review categories, address, phone number, opening hours, menu links, photographs, attributes and other eligible information, so the profile is accurate and complete. We also check that the profile and the website agree with each other, because mismatched hours or phone numbers confuse both diners and search systems." },
  { title: "Local SEO for Restaurants in Delhi", text: "This improves location relevance, consistency of business information, appropriate local landing pages and visibility for relevant nearby searches. For a restaurant with a single outlet this may mean one well-built location page; for a group, it means one for each real branch." },
  { title: "Restaurant Website SEO", text: "Page titles, headings, internal links, image optimization, navigation and technical accessibility all affect how well search engines and diners understand the site." },
  { title: "Menu Page Optimization", text: "Menus should be readable by users and search engines: clear HTML content, descriptive dish names, suitable headings and accurate, current information. A menu locked inside an image or a hard-to-load PDF is easy to miss, and slow to use on a phone. Prices and availability should be kept current, since outdated menus frustrate diners." },
  { title: "Cuisine and Category Landing Pages", text: "Where a restaurant genuinely offers something distinct, such as vegetarian dining, North Indian or South Indian food, a café or bakery range, or family dining, a dedicated page can help. We create these only when the business supports them, and we never publish near-identical pages for cuisines or areas the restaurant does not actually serve." },
  { title: "Multi-Location Restaurant SEO", text: "Restaurant brands with several physical branches need a clear, accurate structure of location pages, profiles and internal links, with each page describing a real branch, its address, hours, contact details and how to reach it." },
  { title: "Restaurant Content Marketing", text: "Useful content around menus, dining experiences, events, cuisine and customer questions can support discovery. We avoid repetitive or thin articles, and focus on topics where the restaurant has real knowledge to share." },
  { title: "Review and Reputation Support", text: "We help businesses build a compliant process for requesting genuine reviews and responding professionally. We never fabricate or buy reviews, and we do not recommend review gating. Professional, polite responses to both praise and criticism show future diners how a restaurant treats people." },
  { title: "Technical SEO and Structured Data", text: "We assess relevant structured data, canonical tags, XML sitemaps, indexation, mobile performance and duplicate content." },
  { title: "SEO Reporting and Measurement", text: "Reporting covers organic visibility, relevant queries, engagement, calls, menu visits, direction requests where available and measurable conversions." },
];

const localBullets = [
  "Correct restaurant name, address and telephone details.",
  "Accurate opening hours and holiday schedules.",
  "Appropriate business categories.",
  "Current photographs and menu information.",
  "Genuine customer reviews and professional replies.",
  "Consistent information across reputable directories.",
  "Relevant location details on the website.",
  "Clear contact, reservation and directions options.",
];

const contentNotes = [
  "Seasonal menu updates.",
  "Explanations of signature dishes.",
  "Cuisine guides.",
  "Genuine event and catering information.",
  "Practical dining guides relevant to the restaurant's actual area.",
  "Answers to common menu, booking and dietary questions.",
];

const noteStyles = [
  "bg-amber-100 -rotate-2",
  "bg-teal-100 rotate-1",
  "bg-white rotate-2 border border-gray-200",
  "bg-[#c89d5a]/25 -rotate-1",
  "bg-teal-50 rotate-2",
  "bg-amber-50 -rotate-2 border border-amber-200",
];

const processSteps = [
  { icon: Users, title: "Understand the restaurant's business model, target diners, locations and objectives, so the plan fits a family restaurant differently from a delivery-only kitchen." },
  { icon: ShieldCheck, title: "Audit the website and available search-performance data." },
  { icon: Search, title: "Research relevant keywords and competing search results." },
  { icon: Settings, title: "Prioritise technical fixes and local SEO improvements, starting with whatever most affects whether diners can find correct information." },
  { icon: FileText, title: "Improve important website, menu and location pages." },
  { icon: Sparkles, title: "Develop useful content where there is a genuine information gap, such as unanswered booking, menu or dietary questions." },
  { icon: BarChart3, title: "Measure results and refine the strategy using evidence." },
];

const faqs = [
  {
    question: "What are Restaurant SEO Services in Delhi?",
    answer:
      "They are services that help a restaurant's website and online listings become easier for search engines to understand and for nearby diners to find, covering local SEO, Google Business Profile, menu and location pages, technical health and measurement.",
  },
  {
    question: "How can SEO help a restaurant become easier to discover online?",
    answer:
      "SEO makes sure search engines can read your menu, location, hours and offerings, and that your information is accurate and consistent. That helps relevant diners find you; it cannot control Google's rankings or guarantee bookings.",
  },
  {
    question: "What is the difference between restaurant SEO and restaurant digital marketing?",
    answer:
      "SEO focuses on organic and local search visibility. Restaurant digital marketing is broader and can include paid advertising, social media, email and delivery-platform promotions. SEO is one part of it.",
  },
  {
    question: "How does local SEO work for restaurants in Delhi?",
    answer:
      "Search platforms weigh relevance, distance and prominence when showing nearby results. Accurate listings, correct categories, genuine reviews, consistent details and clear location pages help your restaurant be understood for the right searches.",
  },
  {
    question: "Can SEO help a café or cloud kitchen?",
    answer:
      "Yes, within platform rules. Cafés benefit from accurate profiles and menu pages, while cloud kitchens need clear cuisine pages and honest brand information. Eligibility rules for business profiles must be followed, with no fake storefronts.",
  },
  {
    question: "How important is Google Business Profile optimization for restaurants?",
    answer:
      "It is often central to local discovery, because the profile shows your address, hours, menu link, photos and reviews. Optimization improves accuracy and completeness, but cannot guarantee a Google Maps position.",
  },
  {
    question: "How long can restaurant SEO take to show meaningful changes?",
    answer:
      "There is no fixed timeline. Corrections to listings and technical issues may show sooner, while stronger visibility depends on competition, website condition, reviews and implementation. No ranking or date can be guaranteed.",
  },
  {
    question: "What should a restaurant SEO package include?",
    answer:
      "Look for an audit, keyword research, Google Business Profile review, website and menu page improvements, local SEO, technical fixes, content where needed and clear reporting. Deliverables should be defined in writing.",
  },
  {
    question: "Can restaurant SEO help businesses with multiple branches?",
    answer:
      "Yes, if each branch is a real location. Separate location pages, matching profiles and consistent contact details help diners and search engines tell branches apart. Copied pages for places without a branch do not.",
  },
  {
    question: "How can restaurant owners measure SEO performance?",
    answer:
      "Track search impressions and clicks, landing-page performance, profile metrics, calls, menu visits, direction requests and reservation or order enquiries where tracking works, ideally per location.",
  },
];

// ===========================================================================
// JSON-LD (Organization, WebPage, BreadcrumbList, Service, FAQPage)
// ===========================================================================

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://diglip7.com/#organization",
    name: "DigLip7",
    legalName: "DigLip7 Tech Private Limited",
    url: "https://diglip7.com/",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://diglip7.com/india/restaurant-seo-services-delhi/#webpage",
    url: "https://diglip7.com/india/restaurant-seo-services-delhi/",
    name: "Restaurant SEO Services in Delhi | DigLip7",
    description: metaDescription,
    inLanguage: "en-IN",
    publisher: { "@id": "https://diglip7.com/#organization" },
    about: { "@id": "https://diglip7.com/india/restaurant-seo-services-delhi/#service" },
    breadcrumb: { "@id": "https://diglip7.com/india/restaurant-seo-services-delhi/#breadcrumb" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://diglip7.com/india/restaurant-seo-services-delhi/#breadcrumb",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://diglip7.com/" },
      {
        "@type": "ListItem",
        position: 2,
        name: "India SEO Services",
        item: "https://diglip7.com/india/seo-services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Restaurant SEO Services in Delhi",
        item: "https://diglip7.com/india/restaurant-seo-services-delhi/",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://diglip7.com/india/restaurant-seo-services-delhi/#service",
    name: "Restaurant SEO Services in Delhi",
    serviceType: "Restaurant search engine optimization",
    url: "https://diglip7.com/india/restaurant-seo-services-delhi/",
    description:
      "SEO services for restaurants, cafes, cloud kitchens and food businesses in Delhi, covering local SEO, Google Business Profile optimization, menu and website optimization, technical SEO and reporting.",
    areaServed: { "@type": "City", name: "Delhi" },
    provider: { "@id": "https://diglip7.com/#organization" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://diglip7.com/india/restaurant-seo-services-delhi/#faq",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  },
];

// ===========================================================================
// Page
// ===========================================================================

function DelhiRestaurantSEOServices() {
  const [cloudActive, setCloudActive] = useState(0);
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 768 : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="overflow-x-hidden bg-white w-full">
      <SEO
        title={metaTitle}
        description={metaDescription}
        canonical={pageUrl}
        ogType="website"
        ogImage={ogImage}
        schema={jsonLd}
      />
      <ScrollProgress />
      <BackToTop />

      <main>
        {/* Hero */}
        <LandingHero
          breadcrumb={breadcrumbTrail}
          titleDark="Restaurant SEO Services in Delhi"
          titleGradient="to Improve Local Search Visibility"
          ctaLabel="Discuss Restaurant SEO for Your Business in Delhi"
          image={images.hero}
        />

        <div className="bg-white">
          <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 w-full">
            {/* How Diners Discover Restaurants Online */}
            <div className="max-w-6xl mx-auto mb-24">
              <div className="text-center mb-12">
                <SectionHeading color="text-teal-700">How Diners Discover Restaurants Online</SectionHeading>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-8 items-stretch">
                <motion.div
                  className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-700 to-teal-900 p-8 sm:p-10 shadow-2xl"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <Utensils className="absolute -right-6 -bottom-6 w-44 h-44 text-white/10" />
                  <p className="relative text-white/95 text-base sm:text-lg leading-relaxed">
                    Before booking a table or ordering in, people search. They look for a cuisine, a neighbourhood, an occasion, a budget or simply somewhere open nearby. What they see is a mix of organic results, Google Maps listings, restaurant websites, menus, photographs and reviews, and they tend to trust whichever source gives accurate, current information. A diner who finds the wrong closing time, a missing menu or an outdated phone number will usually move on to the next option rather than call to check.
                  </p>
                </motion.div>
                <motion.div
                  className="rounded-3xl bg-white p-8 sm:p-10 shadow-xl border border-[#c89d5a]/40 border-dashed border-2"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    Restaurant SEO Services in Delhi exist to make that information easy to find and easy to trust. SEO is a long-term process that helps search engines understand a restaurant's location, offerings, website and relevance to what customers are searching for. It supports discovery, but it does not control Google's rankings, and nothing here promises bookings or revenue. What it can do is reduce friction: help the right people find you, and make sure what they find is correct.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Why Restaurant SEO Matters in Delhi */}
            <div className="max-w-6xl mx-auto mb-24">
              <div className="text-center mb-12">
                <SectionHeading>Why Restaurant SEO Matters in Delhi</SectionHeading>
              </div>
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  "Delhi's dining market is varied and intensely local. A diner in Saket is rarely comparing the same options as someone in Rohini, and competition often plays out neighbourhood by neighbourhood. Areas such as Connaught Place, Hauz Khas, Karol Bagh, Rajouri Garden, Dwarka and Lajpat Nagar each have their own mix of restaurants, cafés and delivery brands.",
                  "Search visibility can help restaurants be found in those local contexts. But location targeting must reflect where a business genuinely operates and which areas it genuinely serves. Not every restaurant serves every neighbourhood, and claiming otherwise helps nobody. A Dwarka café with one outlet, for example, should build its pages around Dwarka and the areas it truly serves, not a list of distant neighbourhoods. Cloud kitchens and delivery-focused brands have their own considerations, covered below.",
                ].map((p, i) => (
                  <motion.div
                    key={i}
                    className="relative rounded-3xl bg-gradient-to-br from-gray-50 to-teal-50/40 p-8 border border-teal-100 shadow-lg hover:shadow-2xl transition-shadow"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.7, delay: i * 0.15 }}
                  >
                    <motion.span
                      aria-hidden="true"
                      className="absolute -top-5 left-8 w-11 h-11 rounded-full bg-gradient-to-br from-teal-600 to-teal-900 shadow-lg flex items-center justify-center"
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.4 }}
                    >
                      <MapPin className="w-5 h-5 text-white" />
                    </motion.span>
                    <p className="text-gray-700 leading-relaxed pt-3">{p}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* What Is Included in Our Restaurant SEO Services in Delhi? (menu board) */}
            <div className="max-w-7xl mx-auto mb-24">
              <motion.div
                className="relative rounded-[2rem] p-[3px] bg-gradient-to-br from-[#c89d5a] via-teal-600 to-[#c89d5a] shadow-2xl"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="rounded-[calc(2rem-3px)] bg-gradient-to-b from-amber-50 to-white p-6 sm:p-12">
                  <div className="text-center mb-12">
                    <Utensils className="w-10 h-10 text-[#c89d5a] mx-auto mb-3" />
                    <SectionHeading color="text-teal-800">
                      What Is Included in Our Restaurant SEO Services in Delhi?
                    </SectionHeading>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-9">
                    {menuServices.map((s, i) => (
                      <MenuItem key={s.title} number={i + 1} title={s.title} text={s.text} index={i} />
                    ))}
                  </div>
                  <motion.p
                    className="mt-12 max-w-4xl mx-auto text-center text-gray-700 leading-relaxed bg-white rounded-2xl p-6 border border-[#c89d5a]/40 shadow-sm"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    Seasonality matters too. Festival periods, wedding seasons, weather and school holidays can all change how people search for food, so information such as special timings, holiday menus and catering options should be kept up to date rather than left to go stale.
                  </motion.p>
                </div>
              </motion.div>
            </div>

            {/* Local SEO for Restaurants in Delhi */}
            <div className="max-w-7xl mx-auto mb-24">
              <div className="text-center mb-10">
                <SectionHeading color="text-teal-700">Local SEO for Restaurants in Delhi</SectionHeading>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <Card3D>
                    <Img image={images.local} />
                  </Card3D>
                  {[
                    { l: "8%", t: "-18px", d: 0 },
                    { l: "46%", t: "-26px", d: 0.6 },
                    { l: "84%", t: "-14px", d: 1.2 },
                  ].map((p, i) => (
                    <motion.span
                      key={i}
                      aria-hidden="true"
                      className="absolute w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center"
                      style={{ left: p.l, top: p.t }}
                      animate={{ y: [0, -12, 0] }}
                      transition={{ duration: 2.2, repeat: Infinity, delay: p.d }}
                    >
                      <MapPin className="w-5 h-5 text-teal-700" />
                    </motion.span>
                  ))}
                  <p className="mt-8 text-gray-700 leading-relaxed bg-gray-50 rounded-2xl p-6 border-l-4 border-teal-600">
                    Local visibility depends on relevance, distance, prominence, accurate information and other factors controlled by search platforms. A restaurant cannot control the ranking systems, but it can improve what it does control: the quality and consistency of its information. That includes:
                  </p>
                </motion.div>
                <div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {localBullets.map((b, i) => (
                      <motion.li
                        key={b}
                        className="group relative flex items-start gap-3 bg-white rounded-2xl p-5 border border-gray-100 shadow-md hover:shadow-xl transition-shadow"
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        transition={{ delay: (i % 4) * 0.08, duration: 0.5 }}
                      >
                        <span className="relative w-9 h-9 shrink-0 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center group-hover:bg-teal-700 group-hover:text-white transition-colors">
                          <span className="absolute inset-0 rounded-full bg-teal-400/40 scale-100 group-hover:scale-150 group-hover:opacity-0 transition-all duration-700" />
                          <MapPin className="relative w-4 h-4" />
                        </span>
                        <span className="text-gray-800 text-sm sm:text-base leading-relaxed">{b}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <p className="mt-6 text-gray-700 leading-relaxed bg-amber-50/60 rounded-2xl p-6 border-l-4 border-[#c89d5a]">
                    We do not promise top-three Google Maps placement, and we never suggest fake addresses, virtual offices, keyword-stuffed business names or duplicate profiles. Those tactics risk suspension and mislead diners.
                  </p>
                </div>
              </div>
            </div>

            {/* Restaurant Keyword Research and Search Intent (speech bubbles) */}
            <div className="max-w-7xl mx-auto mb-24 bg-gray-50 rounded-3xl p-8 sm:p-12 border border-gray-100">
              <div className="text-center mb-10">
                <SectionHeading>Restaurant Keyword Research and Search Intent</SectionHeading>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <Card3D>
                    <Img image={images.keyword} />
                  </Card3D>
                  <div
                    aria-hidden="true"
                    className="mt-6 flex items-center gap-3 bg-white rounded-full px-5 py-3 shadow-lg border border-teal-100"
                  >
                    <Search className="w-5 h-5 text-teal-700" />
                    <span className="flex-1 h-2 rounded-full bg-gray-100 overflow-hidden">
                      <motion.span
                        className="block h-full rounded-full bg-gradient-to-r from-teal-600 to-[#c89d5a]"
                        initial={{ width: "0%" }}
                        whileInView={{ width: ["0%", "75%", "40%", "90%"] }}
                        viewport={{ once: true }}
                        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                      />
                    </span>
                  </div>
                </motion.div>
                <div className="space-y-8">
                  <Bubble side="left" tone="teal">
                    Good keyword selection matches what a diner is trying to do: find somewhere nearby, choose a cuisine, plan an occasion, check a menu or place an order. Illustrative searches might include a restaurant in Saket, a family restaurant in Dwarka, a vegetarian restaurant in South Delhi, a café in Hauz Khas, a North Indian restaurant in Delhi or a bakery near Karol Bagh. These are examples only, not verified search-volume data or guaranteed ranking opportunities.
                  </Bubble>
                  <Bubble side="right" tone="light" delay={0.15}>
                    We prioritise keywords by relevance, search intent, competition, business location and what the restaurant genuinely offers. A highly searched phrase is worthless if it does not describe your food or your location. We never invent keyword volumes, difficulty scores or ranking estimates, and where numbers are needed they come from current research.
                  </Bubble>
                </div>
              </div>
            </div>

            {/* Restaurant Website Optimization (device frame) */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
              <div>
                <FloatingElement>
                  <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-6 leading-tight">
                    Restaurant Website Optimization
                  </h2>
                </FloatingElement>
                <div className="space-y-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                  <motion.p
                    className="border-l-4 border-teal-600 pl-5"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    A restaurant website should let visitors quickly see what is served, where it is, when it is open, how to view the menu, how to book or order if those options exist, and how to make contact.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                  >
                    That means mobile usability, page speed, clear navigation, accessible content, descriptive image alt text, HTTPS, sensible internal links and useful page titles. We do not recommend adding ordering or reservation features that the business does not actually offer. If table booking runs through a third-party link, that link should be easy to find and correct.
                  </motion.p>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 50, rotate: 2 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
              >
                <DeviceFrame image={images.website} />
              </motion.div>
            </div>

            {/* SEO for Cloud Kitchens and Delivery-Focused Restaurants (expanding panels) */}
            <div className="max-w-7xl mx-auto mb-24">
              <div className="text-center mb-10">
                <SectionHeading color="text-teal-700">
                  SEO for Cloud Kitchens and Delivery-Focused Restaurants
                </SectionHeading>
              </div>
              <div className="flex flex-col md:flex-row gap-6">
                {[
                  <p key="a" className="leading-relaxed text-base sm:text-lg">
                    Cloud kitchens can improve discoverability through clear cuisine pages, accurate brand information, useful menus and location-relevant content. They must follow platform eligibility requirements and Google's applicable business-profile guidelines. We do not recommend misleading storefronts, fake addresses or ineligible profiles.
                  </p>,
                  <p key="b" className="leading-relaxed text-base sm:text-lg">
                    It also helps to separate organic website SEO from paid delivery-platform promotions and{" "}
                    <Link to="/digital-market/PPC-Advertising" className="underline font-semibold text-[#c89d5a] hover:text-white transition-colors">
                      paid advertising
                    </Link>
                    . They serve different purposes and are measured differently. Organic SEO builds assets on your own website and profile, while paid promotions rent visibility for as long as the budget lasts.
                  </p>,
                ].map((content, i) => (
                  <motion.div
                    key={i}
                    tabIndex={0}
                    onMouseEnter={() => setCloudActive(i)}
                    onFocus={() => setCloudActive(i)}
                    onClick={() => setCloudActive(i)}
                    className={`relative overflow-hidden rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl cursor-pointer w-full ${
                      i === 0
                        ? "bg-gradient-to-br from-teal-700 to-teal-900 text-white"
                        : "bg-gradient-to-br from-gray-800 to-gray-900 text-white/90"
                    }`}
                    animate={
                      isDesktop
                        ? {
                            flexGrow: cloudActive === i ? 1.5 : 1,
                            opacity: cloudActive === i ? 1 : 0.88,
                          }
                        : {
                            opacity: 1,
                          }
                    }
                    style={isDesktop ? { flexBasis: 0 } : { flexBasis: "auto" }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.span
                      aria-hidden="true"
                      className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#c89d5a]/25 blur-2xl pointer-events-none"
                      animate={{ scale: cloudActive === i ? 1.4 : 1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="relative">{content}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Content Marketing for Restaurants (mood board) */}
            <div className="max-w-7xl mx-auto mb-24">
              <div className="text-center mb-10">
                <SectionHeading>Content Marketing for Restaurants</SectionHeading>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
                <motion.div
                  className="relative mx-auto w-full max-w-lg"
                  initial={{ opacity: 0, rotate: -6, y: 40 }}
                  whileInView={{ opacity: 1, rotate: -2, y: 0 }}
                  whileHover={{ rotate: 0, scale: 1.03 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="bg-white p-3 pb-8 rounded-md shadow-2xl border border-gray-100">
                    <Img image={images.content} className="w-full object-cover bg-gray-50" />
                  </div>
                  <span
                    aria-hidden="true"
                    className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-[#c89d5a]/60 rotate-2 rounded-sm"
                  />
                </motion.div>
                <div>
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-6">
                    The best restaurant content comes from real experience. Useful examples include:
                  </p>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {contentNotes.map((n, i) => (
                      <motion.li
                        key={n}
                        className={`relative p-5 pt-7 shadow-lg text-gray-800 text-sm sm:text-base font-medium leading-snug rounded-sm cursor-default ${noteStyles[i]}`}
                        initial={{ opacity: 0, y: -40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ rotate: 0, y: -8, scale: 1.06 }}
                        transition={{ delay: i * 0.1, type: "spring", stiffness: 120 }}
                      >
                        <span
                          aria-hidden="true"
                          className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-teal-700 shadow"
                        />
                        {n}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="mt-12 text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
                We avoid mass-producing near-identical neighbourhood pages. Every landing page must offer distinct information and genuine value. A short page that only swaps one Delhi neighbourhood name for another does not help diners and is unlikely to help the restaurant.
              </p>
            </div>

            {/* Technical SEO for Restaurant Websites (overlapping banner) */}
            <div className="max-w-7xl mx-auto mb-24">
              <div className="text-center mb-10">
                <SectionHeading color="text-teal-700">Technical SEO for Restaurant Websites</SectionHeading>
              </div>
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
              >
                <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-teal-500/30 via-transparent to-[#c89d5a]/30 blur-xl" />
                <Img image={images.technical} className="relative rounded-3xl shadow-2xl w-full object-cover bg-gray-50" />
                <motion.div
                  className="relative lg:-mt-24 lg:ml-auto lg:mr-8 lg:w-[68%] mt-6 rounded-3xl bg-white/95 backdrop-blur p-8 sm:p-10 shadow-2xl border border-teal-100 space-y-4 text-gray-700 leading-relaxed"
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.2 }}
                >
                  <p>
                    Technical health determines whether good pages can be found at all. We look at crawlability and indexability, logical URL structure, XML sitemaps and canonical tags, redirects and broken links, image file size and loading performance, mobile-first usability, appropriate structured data and the correct handling of menu, location and branch pages. Slow image-heavy pages are a frequent problem on restaurant sites, so compressing photographs without ruining their quality is often an early win.
                  </p>
                  <p>
                    Structured data should describe the business accurately. Restaurant, LocalBusiness, Organization, BreadcrumbList and WebSite may be relevant where they fit, and Menu properties only where current Schema.org specifications support them. Structured data does not promise rich results or higher rankings.
                  </p>
                </motion.div>
              </motion.div>
            </div>

            {/* How We Approach Restaurant SEO at DigLip7 */}
            <ProcessSection
              title="How We Approach Restaurant SEO at DigLip7"
              steps={processSteps}
              closing={
                <>
                  Each stage is based on evidence from your own website and search data rather than assumptions. The approach sits within our wider{" "}
                  <Link to="/india/seo-services" className={inlineLink}>
                    India SEO services
                  </Link>
                  , and we do not claim proprietary tools or results we cannot verify.
                </>
              }
            />

            {/* How to Measure Restaurant SEO Performance (hub layout) */}
            <div className="max-w-7xl mx-auto mb-24">
              <div className="text-center mb-12">
                <SectionHeading>How to Measure Restaurant SEO Performance</SectionHeading>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr_1fr] gap-8 items-center">
                <motion.div
                  className="relative rounded-3xl bg-white p-7 shadow-xl border border-teal-100"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.span
                    aria-hidden="true"
                    className="hidden lg:block absolute top-1/2 -right-2 w-4 h-4 rounded-full bg-teal-600"
                    animate={{ scale: [1, 1.6, 1], opacity: [1, 0.4, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <p className="text-gray-700 leading-relaxed">
                    Useful measures include search impressions, clicks and query trends, organic landing-page performance, non-branded visibility, Google Business Profile metrics where available, calls, reservation and order enquiries where tracking is supported, website engagement and conversion events, and performance across individual locations.
                  </p>
                </motion.div>

                <motion.div
                  className="relative"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.span
                    aria-hidden="true"
                    className="absolute -inset-4 rounded-[2rem] border-2 border-teal-300"
                    animate={{ scale: [1, 1.04, 1], opacity: [0.8, 0.3, 0.8] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <Card3D>
                    <Img image={images.reporting} />
                  </Card3D>
                </motion.div>

                <div className="space-y-6">
                  {[
                    "It also helps to separate what search can show from what only the restaurant can confirm. A call or a directions request is an enquiry, not a confirmed table, and reports should keep that distinction clear, especially across several branches.",
                    "Rankings, traffic, enquiries and bookings can vary with competition, location, seasonality, reviews and website quality, so we avoid guaranteed results or unsupported percentage improvements. Tracking should be validated first, so you can trust what the reports show.",
                  ].map((p, i) => (
                    <motion.div
                      key={i}
                      className="relative rounded-3xl bg-gradient-to-br from-teal-700 to-teal-900 p-7 shadow-xl text-white/95"
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.15 }}
                    >
                      <motion.span
                        aria-hidden="true"
                        className="hidden lg:block absolute top-1/2 -left-2 w-4 h-4 rounded-full bg-[#c89d5a]"
                        animate={{ scale: [1, 1.6, 1], opacity: [1, 0.4, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                      />
                      <p className="leading-relaxed">{p}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Choosing a Restaurant SEO Agency in Delhi */}
            <div className="max-w-6xl mx-auto mb-12">
              <div className="text-center mb-12">
                <SectionHeading color="text-teal-700">Choosing a Restaurant SEO Agency in Delhi</SectionHeading>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card3D className="h-full">
                  <motion.div
                    className="h-full rounded-3xl bg-gradient-to-br from-teal-50 to-white p-8 shadow-xl border border-teal-200"
                    initial={{ opacity: 0, y: 50, rotate: -2 }}
                    whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <span className="w-14 h-14 rounded-2xl bg-teal-700 text-white flex items-center justify-center mb-5">
                      <CheckCircle2 className="w-7 h-7" />
                    </span>
                    <p className="text-gray-700 leading-relaxed">
                      When assessing any provider, ask whether it can explain its strategy in plain language, understands local SEO and restaurant websites, reports transparently, avoids fake reviews and misleading listings, defines deliverables and responsibilities clearly, distinguishes SEO from paid advertising and sets realistic expectations rather than guaranteeing rankings.
                    </p>
                  </motion.div>
                </Card3D>
                <Card3D className="h-full">
                  <motion.div
                    className="h-full rounded-3xl bg-gradient-to-br from-amber-50 to-white p-8 shadow-xl border border-amber-200"
                    initial={{ opacity: 0, y: 50, rotate: 2 }}
                    whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                  >
                    <span className="w-14 h-14 rounded-2xl bg-amber-500 text-white flex items-center justify-center mb-5">
                      <AlertTriangle className="w-7 h-7" />
                    </span>
                    <p className="text-gray-700 leading-relaxed">
                      Be cautious of anyone who promises first-page rankings or a set number of bookings, offers to buy reviews, or suggests creating extra profiles for the same restaurant. These practices can damage a business's listing and reputation. DigLip7 is one option to consider on those terms. We do not claim to be the best or leading agency, and we would rather you compare providers carefully.
                    </p>
                  </motion.div>
                </Card3D>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <FaqSection
            title="Frequently Asked Questions About Restaurant SEO Services in Delhi"
            faqs={faqs}
          />

          {/* Closing CTA */}
          <CtaSection
            headingLead="Discuss Restaurant SEO for Your"
            headingAccent="Business in Delhi"
            text="If you would like to talk through your website, locations, target customers and search visibility goals, DigLip7 is happy to start the conversation. Restaurant SEO Services in Delhi work best when they match your actual business, so there are no guaranteed outcomes, just a clear and honest discussion."
            buttons={["Discuss Restaurant SEO for Your Business in Delhi", "Contact DigLip7"]}
          />
        </div>
      </main>
    </div>
  );
}

export default DelhiRestaurantSEOServices;