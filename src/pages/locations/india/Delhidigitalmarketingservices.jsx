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
  Sparkles,
  Users,
  Eye,
  Target,
  FileText,
  Settings,
  Megaphone,
  Share2,
  BarChart3,
  TrendingUp,
  Heart,
  MessageCircle,
  MousePointerClick,
  Globe,
  Layers,
  ShieldCheck,
  Building2,
  GraduationCap,
  ShoppingCart,
  Briefcase,
  HeartPulse,
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
              <img
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading="eager"
                fetchpriority="high"
                decoding="async"
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
const ProcessSection = ({ title, intro, steps, closing }) => (
  <div className="bg-white py-12 px-2 text-center mb-20">
    <div className="max-w-5xl mx-auto mb-12">
      <FloatingElement>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
      </FloatingElement>
      {intro && <p className="text-gray-600 mt-3 text-sm sm:text-base">{intro}</p>}
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

// CTA banner
const CtaSection = ({ headingLead, headingAccent, text, ctaLabel }) => {
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

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <motion.button
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-teal-700 font-semibold rounded-full shadow-xl hover:shadow-2xl hover:bg-gray-50 transition-all duration-300 text-sm sm:text-base cursor-pointer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {ctaLabel}
                <Sparkles className="inline-block ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Image helper (lazy by default)
const Img = ({ image, className = "rounded-2xl shadow-xl w-full object-cover bg-gray-50" }) => (
  <img
    src={image.src}
    alt={image.alt}
    width={image.width}
    height={image.height}
    loading="lazy"
    decoding="async"
    className={className}
  />
);

// ===========================================================================
// New layout components unique to this page
// ===========================================================================

// Decorative rotating orbit of channel icons
const OrbitArt = () => {
  const icons = [Search, Megaphone, Share2, FileText, Globe];
  return (
    <div aria-hidden="true" className="relative w-60 h-60 sm:w-72 sm:h-72 mx-auto">
      <span className="absolute inset-4 rounded-full border-2 border-dashed border-teal-200" />
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {icons.map((Icon, i) => {
          const angle = (i / icons.length) * Math.PI * 2;
          const x = 50 + 42 * Math.cos(angle);
          const y = 50 + 42 * Math.sin(angle);
          return (
            <motion.span
              key={i}
              className="absolute w-12 h-12 -ml-6 -mt-6 rounded-full bg-white shadow-lg border border-teal-100 flex items-center justify-center"
              style={{ left: `${x}%`, top: `${y}%` }}
              animate={{ rotate: -360 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            >
              <Icon className="w-5 h-5 text-teal-700" />
            </motion.span>
          );
        })}
      </motion.div>
      <motion.div
        className="absolute inset-1/4 rounded-full bg-gradient-to-br from-teal-600 to-teal-900 shadow-xl flex items-center justify-center"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <TrendingUp className="w-10 h-10 text-white" />
      </motion.div>
    </div>
  );
};

// Interactive service tabs (all panels stay in the DOM; only the active one is shown)
const ServiceTabs = ({ items }) => {
  const [active, setActive] = useState(0);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-6 lg:gap-10 items-start">
      <div
        role="tablist"
        aria-orientation="vertical"
        aria-label="Digital marketing services"
        className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0"
      >
        {items.map((it, i) => (
          <button
            key={it.label}
            type="button"
            role="tab"
            id={`dm-tab-${i}`}
            aria-selected={active === i}
            aria-controls={`dm-panel-${i}`}
            onClick={() => setActive(i)}
            className={`shrink-0 flex items-center gap-3 text-left px-4 py-3 rounded-2xl text-sm sm:text-base font-semibold transition-all duration-300 cursor-pointer ${
              active === i
                ? "bg-gradient-to-r from-teal-700 to-teal-900 text-white shadow-lg lg:translate-x-2"
                : "bg-white text-gray-700 border border-teal-100 hover:bg-teal-50"
            }`}
          >
            <span
              className={`w-7 h-7 shrink-0 rounded-full text-xs font-bold flex items-center justify-center ${
                active === i ? "bg-white/20 text-white" : "bg-teal-50 text-teal-800"
              }`}
            >
              {i + 1}
            </span>
            <span className="whitespace-nowrap lg:whitespace-normal">{it.label}</span>
          </button>
        ))}
      </div>

      <div>
        {items.map((it, i) => (
          <motion.div
            key={it.label}
            role="tabpanel"
            id={`dm-panel-${i}`}
            aria-labelledby={`dm-tab-${i}`}
            hidden={active !== i}
            animate={{ opacity: active === i ? 1 : 0, x: active === i ? 0 : 30 }}
            transition={{ duration: 0.4 }}
          >
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-teal-50/40 p-8 sm:p-10 shadow-xl border border-teal-100 border-l-4 border-l-[#c89d5a]">
              <span
                aria-hidden="true"
                className="absolute -top-6 right-4 text-9xl font-extrabold text-teal-700/10 select-none"
              >
                {i + 1}
              </span>
              <h3 className="relative text-2xl font-bold text-teal-800 mb-4">
                {it.href ? (
                  <Link to={it.href} className={inlineLink}>
                    {it.label}
                  </Link>
                ) : (
                  it.label
                )}
              </h3>
              <p className="relative text-gray-700 leading-relaxed text-base sm:text-lg">{it.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Expanding cards (hover / focus / tap to expand)
const ExpandingCards = ({ items }) => {
  const [active, setActive] = useState(0);
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      {items.map((it, i) => (
        <motion.div
          key={it.label}
          tabIndex={0}
          onMouseEnter={() => setActive(i)}
          onFocus={() => setActive(i)}
          onClick={() => setActive(i)}
          animate={{ flexGrow: active === i ? 2.4 : 1 }}
          style={{ flexBasis: 0 }}
          transition={{ duration: 0.5 }}
          className={`relative min-w-0 overflow-hidden rounded-3xl p-6 shadow-lg cursor-pointer border ${
            active === i
              ? "bg-gradient-to-br from-teal-700 to-teal-900 text-white border-transparent"
              : "bg-white text-gray-700 border-gray-100"
          }`}
        >
          <span
            className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-colors ${
              active === i ? "bg-white/20 text-white" : "bg-teal-50 text-teal-700"
            }`}
          >
            <it.icon className="w-6 h-6" />
          </span>
          <h3 className={`text-lg font-bold mb-2 ${active === i ? "text-white" : "text-gray-900"}`}>
            {it.label}
          </h3>
          <p className={`text-sm leading-relaxed ${active === i ? "text-white/90" : "text-gray-600"}`}>
            {it.text}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

// ===========================================================================
// Page constants
// ===========================================================================

const pageUrl = "https://diglip7.com/india/delhi/digital-marketing-services/";
const metaTitle = "Digital Marketing Services in Delhi | DigLip7";
const metaDescription =
  "Explore digital marketing services in Delhi from DigLip7, including SEO, Google Ads, social media marketing, PPC advertising and content marketing.";

const breadcrumbTrail = [
  { label: "Home", href: "/" },
  { label: "Digital Marketing Services in Delhi", href: "/india/delhi/digital-marketing-services/" },
];

const images = {
  hero: {
    src: "/images/digital-marketing-services-delhi.webp",
    alt: "Digital marketing team reviewing SEO, paid advertising and online campaign performance",
    width: 1600,
    height: 900,
  },
  seo: {
    src: "/images/seo-organic-search-strategy.webp",
    alt: "Illustration of organic search strategy planning",
    width: 1200,
    height: 675,
  },
  ppc: {
    src: "/images/google-ads-ppc-campaign-management.webp",
    alt: "Planning a Google Ads search campaign",
    width: 1200,
    height: 675,
  },
  social: {
    src: "/images/social-media-content-planning.webp",
    alt: "Social media content calendar being planned",
    width: 1200,
    height: 675,
  },
  website: {
    src: "/images/website-conversion-optimization.webp",
    alt: "Website layout with clear calls to action",
    width: 1200,
    height: 675,
  },
  reporting: {
    src: "/images/digital-marketing-analytics-reporting.webp",
    alt: "Marketing performance report being reviewed",
    width: 1200,
    height: 675,
  },
  local: {
    src: "/images/local-seo-business-visibility.webp",
    alt: "Local business visibility on a map search",
    width: 1200,
    height: 675,
  },
};

// ===========================================================================
// Content data (verbatim from the page copy)
// ===========================================================================

const supportParas = [
  "A business can have a good product, a capable team and a well-built website, and still be hard to find. Customers search on Google, compare options on social platforms, read reviews and ask for recommendations before they call anyone. If your business is missing from those moments, or appears without a clear reason to choose it, enquiries suffer. Our digital marketing services in Delhi are designed to close that gap.",
  "DigLip7 Tech Pvt Ltd offers structured online marketing support that combines organic search, paid advertising, social media, content and website optimization. Each channel does a different job. SEO builds visibility over time, paid campaigns reach people who are searching right now, social media keeps a brand in front of its audience, and content answers the questions buyers actually ask.",
  "No single plan suits every company. The right approach depends on your business model, target audience, competition, marketing budget and commercial goals. A neighbourhood clinic, a B2B consultancy and an online store need different priorities, so we start by understanding which one you are.",
];

const delhiProblems = [
  "Limited visibility in relevant Google search results",
  "Difficulty reaching customers who are actively searching for services",
  "High competition in paid advertising and poorly targeted campaigns",
  "Inconsistent social media engagement and no steady content plan",
  "Websites that attract visitors but generate few enquiries",
  "Limited tracking of which channels produce enquiries",
];

const services = [
  { label: "Search Engine Optimization (SEO).", text: "Improves organic visibility through keyword research, content and technical fixes. It suits businesses that rely on people searching for their services and works best as a long-term investment." },
  { label: "Local SEO.", text: "Helps businesses with real premises or defined service areas appear in map and neighbourhood searches, which matters for clinics, schools, salons and service providers." },
  { label: "Google Ads management.", text: "Search campaigns that place your business in front of people actively looking for a service, useful when you need visibility sooner than organic search can provide." },
  { label: "Pay-per-click (PPC) advertising.", text: "Broader paid work, including remarketing where appropriate, to re-engage visitors who did not enquire the first time." },
  { label: "Social media marketing.", text: "Planning, content and community management on the platforms your audience actually uses, building recognition between purchases." },
  { label: "Social media advertising.", text: "Paid campaigns on Instagram, Facebook and LinkedIn aimed at defined audiences, helpful for promotions, events and lead generation." },
  { label: "Content marketing.", text: "Service pages, articles and guides that answer real customer questions and support the buying decision." },
  { label: "Website optimization.", text: "Improves speed, structure, mobile usability and navigation so visitors can find what they need." },
  { label: "Landing page optimization.", text: "Focused pages for specific campaigns, so the message after the click matches the advertisement or search." },
  { label: "Online reputation management.", href: "/online-repulation-management", text: "Monitoring and responding to public reviews and brand mentions, valuable where trust drives enquiries." },
  { label: "E-commerce marketing.", text: "Product page SEO, shopping campaign planning and feed optimization for online stores." },
  { label: "Marketing analytics and reporting.", text: "Conversion tracking and reports that show which activity leads to calls, forms and purchases." },
];

const industries = [
  { icon: HeartPulse, label: "Healthcare and clinics.", text: "Local search visibility, treatment and service page optimization, relevant educational content, appointment enquiry tracking and accurate healthcare information." },
  { icon: Building2, label: "Real estate.", text: "Property-related landing pages, location-specific content, lead generation campaigns, search and social advertising, and website enquiry optimization." },
  { icon: GraduationCap, label: "Education and training.", text: "Course page optimization, search advertising, admission enquiry campaigns, educational content and lead tracking." },
  { icon: ShoppingCart, label: "E-commerce and retail.", text: "Product page SEO, shopping campaign planning, product feed optimization, category page content and purchase conversion tracking." },
  { icon: Briefcase, label: "Professional services.", text: "Service page SEO, local visibility, lead-focused landing pages, thought leadership content and relevant PPC campaigns." },
];

const processSteps = [
  { icon: Users, title: "Understand your business, services, audience and objectives." },
  { icon: Eye, title: "Review your existing website and online presence." },
  { icon: Search, title: "Research keywords and relevant competitors." },
  { icon: Target, title: "Identify technical and marketing opportunities." },
  { icon: FileText, title: "Develop a suitable digital marketing strategy." },
  { icon: Settings, title: "Prioritize SEO and website improvements." },
  { icon: Megaphone, title: "Plan relevant paid advertising campaigns." },
  { icon: Share2, title: "Develop social media and content activities where required." },
  { icon: BarChart3, title: "Configure appropriate conversion tracking." },
  { icon: TrendingUp, title: "Monitor performance and refine the strategy." },
];

const faqs = [
  {
    question: "What are digital marketing services in Delhi?",
    answer:
      "Digital marketing services in Delhi are online promotion activities for businesses targeting Delhi audiences. They typically include SEO, local SEO, Google Ads, social media marketing, content marketing, website optimization and analytics. The right mix depends on the business, its customers, its competition and its goals.",
  },
  {
    question: "How can digital marketing help businesses in Delhi?",
    answer:
      "Digital marketing can help a business become easier to find, communicate with relevant audiences and track the enquiries that marketing generates. It does not guarantee leads or sales. Results depend on competition, demand, budget, website quality and how well campaigns are planned and managed.",
  },
  {
    question: "What services does a digital marketing agency provide?",
    answer:
      "A digital marketing agency may provide SEO, Google Ads management, social media marketing, content creation, landing page and website optimization, reputation management and performance reporting. Not every business needs every service, so a good agency recommends channels based on your objectives and resources.",
  },
  {
    question: "How much do digital marketing services cost in Delhi?",
    answer:
      "Costs vary with the services required, market competition, campaign scope, advertising budget and business objectives. Management fees and ad spend are separate considerations for paid campaigns. We do not publish fixed prices because a sensible estimate needs a discussion of your goals and current online presence.",
  },
  {
    question: "How long does SEO take to show results?",
    answer:
      "SEO is a long-term process, and no honest provider can promise a fixed timeline or ranking. Progress depends on competition, website condition, content quality and the changes implemented. Early signals such as better indexing or impressions may appear sooner, while consistent traffic growth usually takes longer.",
  },
  {
    question: "Are Google Ads and SEO both necessary for a business?",
    answer:
      "Not always. Google Ads can reach people searching now, while SEO builds organic visibility over time. Many businesses benefit from both, but the right balance depends on budget, competition, sales cycle and goals. Paid advertising complements SEO; it is not a replacement for it.",
  },
  {
    question: "Can digital marketing help small businesses in Delhi?",
    answer:
      "Yes, when the plan is realistic. Small businesses often benefit from focused work such as local SEO, a well-optimized Google Business Profile, targeted search ads and useful website content. Starting with one or two channels and measuring them carefully is usually more sensible than spreading a limited budget thinly.",
  },
  {
    question: "How can I measure the performance of digital marketing campaigns?",
    answer:
      "Track the actions that matter to your business, such as enquiry form submissions, calls and purchases, alongside traffic and clicks. Google Search Console, Google Analytics 4, Google Ads reporting and platform analytics show different parts of the picture. Compare these against your own records of qualified leads and sales.",
  },
];

// ===========================================================================
// JSON-LD (Organization, WebPage, Service, BreadcrumbList, FAQPage)
// ===========================================================================

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://diglip7.com/#organization",
    name: "DigLip7 Tech Pvt Ltd",
    url: "https://diglip7.com/",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://diglip7.com/india/delhi/digital-marketing-services/#webpage",
    url: "https://diglip7.com/india/delhi/digital-marketing-services/",
    name: "Digital Marketing Services in Delhi | DigLip7",
    description: metaDescription,
    isPartOf: { "@id": "https://diglip7.com/#website" },
    about: { "@id": "https://diglip7.com/india/delhi/digital-marketing-services/#service" },
    publisher: { "@id": "https://diglip7.com/#organization" },
    inLanguage: "en-IN",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://diglip7.com/india/delhi/digital-marketing-services/#service",
    name: "Digital Marketing Services in Delhi",
    serviceType: "Digital marketing",
    description:
      "Digital marketing services including SEO, local SEO, Google Ads and PPC management, social media marketing, content marketing, website optimization and analytics for businesses targeting Delhi.",
    url: "https://diglip7.com/india/delhi/digital-marketing-services/",
    provider: { "@id": "https://diglip7.com/#organization" },
    areaServed: { "@type": "AdministrativeArea", name: "Delhi, India" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://diglip7.com/" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Digital Marketing Services in Delhi",
        item: "https://diglip7.com/india/delhi/digital-marketing-services/",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
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

function DelhiDigitalMarketingServices() {
  return (
    <div className="overflow-x-hidden bg-white w-full">
      <SEO
        title={metaTitle}
        description={metaDescription}
        canonical={pageUrl}
        ogType="website"
        schema={jsonLd}
      />
      <ScrollProgress />
      <BackToTop />

      <main>
        {/* Hero */}
        <LandingHero
          breadcrumb={breadcrumbTrail}
          titleDark="Digital Marketing Services in Delhi"
          titleGradient="to Help Businesses Grow Online"
          ctaLabel="Discuss Your Digital Marketing Requirements"
          image={images.hero}
        />

        <div className="bg-white">
          <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 w-full">
            {/* Digital Marketing Support Built Around Your Business */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-12 lg:gap-16 items-center mb-24">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <OrbitArt />
              </motion.div>
              <div>
                <FloatingElement>
                  <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-6 leading-tight">
                    Digital Marketing Support Built Around Your Business
                  </h2>
                </FloatingElement>
                <div className="space-y-4">
                  {supportParas.map((p, i) => (
                    <motion.p
                      key={i}
                      className={`leading-relaxed text-base sm:text-lg rounded-2xl p-5 ${
                        i === 0
                          ? "bg-gradient-to-br from-teal-700 to-teal-900 text-white shadow-xl"
                          : "bg-gray-50 text-gray-700 border border-gray-100"
                      }`}
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.12, duration: 0.6 }}
                    >
                      {p}
                    </motion.p>
                  ))}
                </div>
              </div>
            </div>

            {/* Why Businesses in Delhi Need Digital Marketing (staircase) */}
            <div className="max-w-7xl mx-auto mb-24">
              <div className="text-center max-w-5xl mx-auto mb-12">
                <SectionHeading>Why Businesses in Delhi Need Digital Marketing</SectionHeading>
                <p className="text-gray-700 leading-relaxed">
                  Delhi is a large and crowded market. A customer in Dwarka, Rohini or South Delhi can compare several providers within minutes, and businesses compete for the same search results and ad auctions. Companies in a market this size commonly run into problems such as:
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {delhiProblems.map((p, i) => (
                  <motion.div
                    key={p}
                    className={`group flex items-start gap-3 rounded-2xl p-6 bg-gradient-to-br from-amber-50/70 to-white border border-amber-100 shadow-md hover:shadow-xl transition-shadow ${
                      i % 3 === 1 ? "md:mt-8" : i % 3 === 2 ? "md:mt-16" : ""
                    }`}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -6 }}
                    transition={{ delay: (i % 3) * 0.12, duration: 0.6 }}
                  >
                    <span className="w-9 h-9 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                      <AlertTriangle className="w-4 h-4" />
                    </span>
                    <p className="text-gray-800 text-sm sm:text-base leading-relaxed">{p}</p>
                  </motion.div>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:mt-8">
                <motion.p
                  className="bg-white rounded-3xl p-8 shadow-lg border border-teal-100 text-gray-700 leading-relaxed"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  The need looks different by sector. A clinic wants to appear when someone searches for a treatment nearby. An education provider needs admission enquiries. A real estate business wants serious buyers rather than casual clicks. Retailers and e-commerce stores need product visibility and purchase tracking, and professional services firms need credibility and relevant leads.
                </motion.p>
                <motion.p
                  className="bg-gray-50 rounded-3xl p-8 shadow-lg border-l-4 border-[#c89d5a] text-gray-700 leading-relaxed"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  An integrated strategy matches each channel to a goal and measures what happens next. Outcomes still depend on competition, demand, budget, website quality and campaign execution, so we do not promise guaranteed leads, sales, rankings or fixed returns.
                </motion.p>
              </div>
            </div>

            {/* Digital Marketing Services We Provide (tabs) */}
            <div className="max-w-7xl mx-auto mb-24 rounded-3xl bg-gradient-to-br from-gray-50 to-teal-50/30 p-6 sm:p-12 border border-gray-100 shadow-md">
              <div className="text-center max-w-4xl mx-auto mb-10">
                <SectionHeading>Digital Marketing Services We Provide</SectionHeading>
                <p className="text-gray-700 leading-relaxed">
                  Our service areas are listed below. They are not all included in every engagement; the scope is agreed after we understand your needs.
                </p>
              </div>
              <ServiceTabs items={services} />
              <p className="text-gray-700 leading-relaxed text-center max-w-4xl mx-auto mt-10">
                The distinction between channels matters. Organic marketing earns visibility gradually, paid advertising buys attention for as long as the budget runs, and social media engagement builds familiarity through conversation. They support one another, but they are not interchangeable.
              </p>
            </div>

            {/* Search Engine Optimization for Delhi Businesses */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-24">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Card3D>
                  <Img image={images.seo} />
                </Card3D>
              </motion.div>
              <div>
                <FloatingElement>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    Search Engine Optimization for Delhi Businesses
                  </h2>
                </FloatingElement>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  {[
                    "When someone in Connaught Place searches for a business service, or a patient in Dwarka looks for a healthcare provider, search engines try to show the most relevant and useful result. SEO helps your website earn that visibility honestly.",
                    "The work begins with keyword research and search intent analysis, so pages match what people want: information, comparison or a provider ready to hire. On-page SEO covers titles, headings and service content. Technical SEO covers crawlability, mobile optimization, page speed and internal linking. Local SEO and Google Business Profile optimization support location-specific queries where a business is eligible, and organic performance is tracked through Search Console.",
                    "The locations mentioned here are illustrations, not validated keyword opportunities. Real targets come from research. SEO is a long-term process, and rankings depend on competition, website quality and many other factors.",
                  ].map((p, i) => (
                    <motion.p
                      key={i}
                      className="pl-5 border-l-4 border-teal-600"
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.12 }}
                    >
                      {p}
                    </motion.p>
                  ))}
                </div>
              </div>
            </div>

            {/* Google Ads and PPC Advertising in Delhi */}
            <div className="max-w-7xl mx-auto mb-24 rounded-3xl bg-gradient-to-br from-teal-800 to-teal-900 p-8 sm:p-12 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#c89d5a]/20 blur-3xl pointer-events-none" />
              <div className="relative">
                <div className="text-center mb-10">
                  <SectionHeading color="text-white">Google Ads and PPC Advertising in Delhi</SectionHeading>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <div
                      aria-hidden="true"
                      className="flex items-center gap-3 bg-white rounded-full px-5 py-3 shadow-lg mb-5"
                    >
                      <Search className="w-5 h-5 text-teal-700" />
                      <span className="flex-1 h-2 rounded-full bg-gray-100 overflow-hidden">
                        <motion.span
                          className="block h-full rounded-full bg-gradient-to-r from-teal-600 to-[#c89d5a]"
                          animate={{ width: ["10%", "85%", "45%", "95%"] }}
                          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
                        />
                      </span>
                      <Megaphone className="w-5 h-5 text-[#c89d5a]" />
                    </div>
                    <Card3D>
                      <Img image={images.ppc} />
                    </Card3D>
                  </motion.div>
                  <div className="space-y-4">
                    {[
                      "Paid search lets a business appear when people search for a relevant product or service. Good campaigns begin with a clear account structure, careful keyword selection and an understanding of search intent and match types. Negative keyword management keeps spend away from irrelevant searches, while ad copy, location targeting and audience targeting, where appropriate, shape who sees the advertisement.",
                      "Landing page relevance matters as much as the ad. Conversion tracking should measure meaningful actions such as calls, enquiry submissions, purchases and qualified leads, not just clicks. Budgets are monitored and campaigns refined on an ongoing basis.",
                      "PPC complements SEO rather than replacing it. Paid campaigns can deliver earlier visibility, while organic work builds a lasting foundation. We do not guarantee ad positions, a fixed cost per lead or advertising returns.",
                    ].map((p, i) => (
                      <motion.p
                        key={i}
                        className="bg-white/10 backdrop-blur rounded-2xl p-5 border border-white/20 text-white/95 leading-relaxed hover:bg-white/20 transition-colors"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15, duration: 0.6 }}
                      >
                        {p}
                      </motion.p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Marketing and Advertising */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
              <div className="order-2 lg:order-1">
                <FloatingElement>
                  <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-6 leading-tight">
                    Social Media Marketing and Advertising
                  </h2>
                </FloatingElement>
                <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                  <p>
                    Social platforms help businesses share useful content, communicate with audiences and build recognition. Strategy starts with platform selection: not every business needs to be active everywhere. Instagram may suit visual consumer brands, Facebook can support community and local audiences, and LinkedIn is often more relevant for B2B services.
                  </p>
                  <p>
                    Our work can include content calendars, creative planning, audience segmentation, paid campaign management, engagement monitoring and performance reporting. B2B and B2C businesses need different approaches, since a company selling to other businesses usually has longer decision cycles than a consumer brand. We do not promise viral content, follower numbers or guaranteed engagement.
                  </p>
                </div>
              </div>
              <motion.div
                className="order-1 lg:order-2 relative"
                initial={{ opacity: 0, y: 40, rotate: 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
              >
                <div aria-hidden="true" className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                  <div className="flex items-center gap-3 p-4">
                    <span className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-600 to-[#c89d5a]" />
                    <span className="flex-1">
                      <span className="block h-2.5 w-1/3 rounded bg-gray-200" />
                      <span className="block h-2 w-1/4 rounded bg-gray-100 mt-1.5" />
                    </span>
                  </div>
                  <Img image={images.social} className="w-full object-cover bg-gray-50" />
                  <div className="flex items-center gap-4 p-4">
                    <motion.span animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1.6, repeat: Infinity }}>
                      <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />
                    </motion.span>
                    <MessageCircle className="w-6 h-6 text-teal-700" />
                    <Share2 className="w-6 h-6 text-teal-700" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Content Marketing and Brand Visibility */}
            <div className="max-w-6xl mx-auto mb-24">
              <div className="text-center mb-10">
                <SectionHeading>Content Marketing and Brand Visibility</SectionHeading>
                <motion.span
                  aria-hidden="true"
                  className="block h-1 rounded-full bg-gradient-to-r from-teal-600 to-[#c89d5a] mx-auto"
                  initial={{ width: 0 }}
                  whileInView={{ width: 160 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                />
              </div>
              <motion.div
                className="md:columns-2 gap-12 text-gray-700 leading-relaxed text-base sm:text-lg bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <p className="mb-6 first-letter:text-6xl first-letter:font-bold first-letter:text-teal-700 first-letter:float-left first-letter:mr-3 first-letter:leading-none">
                  Informative content helps customers discover a business and understand its services before they make contact. That can mean website service pages, educational articles, industry-specific guides, product descriptions, landing page copy, social content and video planning, along with a plan for how each piece is distributed and later improved.
                </p>
                <p>
                  Quality matters more than volume. We emphasize original writing, clear communication and editorial review for factual accuracy, and we avoid keyword stuffing, copied text and mass-produced low-value articles. Good content supports SEO, educates customers and moves visitors toward an enquiry.
                </p>
              </motion.div>
            </div>

            {/* Local SEO and Google Business Profile Optimization */}
            <div className="max-w-7xl mx-auto mb-24">
              <div className="text-center mb-10">
                <SectionHeading color="text-teal-700">
                  Local SEO and Google Business Profile Optimization
                </SectionHeading>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-center">
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
                  <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="absolute w-24 h-24 rounded-full border-2 border-white/80"
                        animate={{ scale: [0.6, 2.2], opacity: [0.9, 0] }}
                        transition={{ duration: 3, repeat: Infinity, delay: i * 1 }}
                      />
                    ))}
                    <span className="relative w-12 h-12 rounded-full bg-teal-700 shadow-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </span>
                  </div>
                </motion.div>
                <div className="space-y-4">
                  {[
                    "Local SEO helps eligible businesses become discoverable in relevant geographical searches, such as a salon in Karol Bagh, a tutor in Janakpuri or a clinic in Rohini. It starts with accurate, consistent business name, address and phone details, appropriate Google Business Profile categories, clear service descriptions, correct operating hours and genuine photographs.",
                    "Customer reviews and professional responses build trust, and relevant location pages can help when they offer real, distinct information. Local search performance is tracked over time.",
                    "Location targeting must reflect actual service coverage, and Google Business Profile eligibility depends on Google's guidelines and real-world operations. We do not recommend fake locations, duplicate profiles, misleading addresses or fabricated reviews.",
                  ].map((p, i) => (
                    <motion.div
                      key={i}
                      className="flex gap-4 bg-white rounded-2xl p-5 shadow-md border border-gray-100 hover:shadow-xl transition-shadow"
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.12, duration: 0.6 }}
                    >
                      <span className="w-9 h-9 shrink-0 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center">
                        <MapPin className="w-4 h-4" />
                      </span>
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{p}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Website Design and Conversion Rate Optimization */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24 bg-gray-50 rounded-3xl p-8 sm:p-12 border border-gray-100">
              <div>
                <FloatingElement>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    Website Design and Conversion Rate Optimization
                  </h2>
                </FloatingElement>
                <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                  <p>
                    Visitors who arrive from search engines, advertisements or social media need a useful and accessible experience. That means responsive layouts, clear navigation, service-specific landing pages, descriptive headlines and relevant calls to action. Enquiry forms should be easy to complete, mobile usability should be tested and pages should load reasonably fast.
                  </p>
                  <p>
                    Trust information and clear contact details help visitors decide, and conversion tracking shows whether the page is doing its job. Landing page relevance shapes the experience of people arriving from both paid and organic campaigns. No design can guarantee conversions, but a clearer page removes avoidable obstacles.
                  </p>
                </div>
              </div>
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Card3D>
                  <Img image={images.website} />
                </Card3D>
                <div aria-hidden="true" className="absolute right-[12%] bottom-[14%] pointer-events-none">
                  <motion.span
                    className="absolute -inset-3 rounded-full bg-[#c89d5a]/50"
                    animate={{ scale: [1, 1.8], opacity: [0.7, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                  />
                  <motion.span
                    className="relative w-12 h-12 rounded-full bg-gradient-to-br from-teal-600 to-teal-900 shadow-xl flex items-center justify-center"
                    animate={{ y: [0, -8, 0], x: [0, 6, 0] }}
                    transition={{ duration: 2.2, repeat: Infinity }}
                  >
                    <MousePointerClick className="w-6 h-6 text-white" />
                  </motion.span>
                </div>
              </motion.div>
            </div>

            {/* Digital Marketing for Different Industries */}
            <div className="max-w-7xl mx-auto mb-24">
              <div className="text-center max-w-4xl mx-auto mb-10">
                <SectionHeading color="text-teal-700">Digital Marketing for Different Industries</SectionHeading>
                <p className="text-gray-700 leading-relaxed">
                  Strategy changes with the industry, audience, sales cycle and objectives. The following are potential applications, not claims of completed DigLip7 client projects.
                </p>
              </div>
              <ExpandingCards items={industries} />
            </div>

            {/* A Location-Aware Strategy for Delhi's Local Market */}
            <div className="max-w-6xl mx-auto mb-24">
              <div className="text-center mb-12">
                <SectionHeading>A Location-Aware Strategy for Delhi's Local Market</SectionHeading>
              </div>
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
                <svg
                  aria-hidden="true"
                  className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-10 z-10"
                  viewBox="0 0 160 40"
                >
                  <motion.path
                    d="M0 20 C 40 0, 120 40, 160 20"
                    fill="none"
                    stroke="#c89d5a"
                    strokeWidth="3"
                    strokeDasharray="6 8"
                    strokeLinecap="round"
                    animate={{ strokeDashoffset: [0, -28] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  />
                </svg>
                {[
                  "Reaching local audiences does not mean creating a page for every neighbourhood. We begin with your actual service areas and research how people in those areas search. Competitor analysis shows where the market is crowded and where there is room to be useful.",
                  "Location-specific landing pages are created only where they offer distinct, helpful information. We do not build doorway pages or near-identical location pages just to capture extra keywords. Local SEO, geographical PPC targeting, local content planning and enquiry and call tracking then work together. We also do not assume every business serves the whole of Delhi NCR; a business in Dwarka and one in South Delhi may need quite different targeting.",
                ].map((p, i) => (
                  <motion.div
                    key={i}
                    className="relative rounded-3xl bg-gradient-to-br from-teal-50 to-white p-8 pt-10 shadow-xl border border-teal-100"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.7, delay: i * 0.15 }}
                  >
                    <motion.span
                      aria-hidden="true"
                      className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-gradient-to-br from-teal-600 to-teal-900 shadow-lg flex items-center justify-center"
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.5 }}
                    >
                      <MapPin className="w-6 h-6 text-white" />
                    </motion.span>
                    <p className="text-gray-700 leading-relaxed">{p}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Integrated SEO, PPC and Social Media Strategy */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center mb-24">
              <div>
                <FloatingElement>
                  <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-6 leading-tight">
                    Integrated SEO, PPC and Social Media Strategy
                  </h2>
                </FloatingElement>
                <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                  <p className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm">
                    Channels work better when they are coordinated. SEO supports long-term organic visibility, PPC offers targeted paid search exposure, social media supports audience communication, content marketing educates customers and website optimization improves the experience. Analytics ties them together.
                  </p>
                  <p className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm">
                    Insights travel between channels. Paid search data can reveal which queries lead to enquiries and inform organic keyword research, and a strong website page can serve organic, paid and social traffic at once. Channel selection should follow business priorities, resources and measurable objectives. Not every business needs every channel.
                  </p>
                </div>
              </div>
              <div aria-hidden="true" className="relative w-64 h-64 sm:w-72 sm:h-72 mx-auto">
                {[
                  { Icon: Search, cls: "left-0 top-4", c: "bg-teal-500/30", d: 0 },
                  { Icon: Megaphone, cls: "right-0 top-4", c: "bg-[#c89d5a]/40", d: 0.7 },
                  { Icon: Share2, cls: "left-1/2 -translate-x-1/2 bottom-0", c: "bg-teal-900/30", d: 1.4 },
                ].map(({ Icon, cls, c, d }, i) => (
                  <motion.span
                    key={i}
                    className={`absolute w-40 h-40 rounded-full ${c} ${cls} flex items-center justify-center backdrop-blur-sm`}
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 4, repeat: Infinity, delay: d }}
                  >
                    <Icon className="w-9 h-9 text-teal-900" />
                  </motion.span>
                ))}
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-teal-700" />
                </span>
              </div>
            </div>

            {/* Our Digital Marketing Process */}
            <ProcessSection
              title="Our Digital Marketing Process"
              intro="Our workflow is designed to be transparent:"
              steps={processSteps}
              closing="The process depends on project scope, available resources, website condition and campaign requirements. We do not promise a specific ranking or results within a fixed number of days."
            />

            {/* Performance Tracking and Reporting */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-24">
              <div>
                <FloatingElement>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    Performance Tracking and Reporting
                  </h2>
                </FloatingElement>
                <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                  <p>
                    Useful reporting starts with the right questions. For organic search, that means clicks, impressions, search queries and average positions. For paid campaigns, it means impressions, clicks, cost per click, conversion rates and cost per acquisition. Beyond that, businesses should watch website sessions, enquiry form submissions, click-to-call actions, social engagement, e-commerce purchases and, where revenue data is reliable, return on advertising spend.
                  </p>
                  <p>
                    Google Search Console, Google Analytics 4, Google Ads reporting and social platform analytics each show part of the picture. It also helps to separate traffic, enquiries, qualified leads and completed sales, because more visitors do not automatically mean more customers.
                  </p>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Card3D>
                  <Img image={images.reporting} />
                </Card3D>
                <div aria-hidden="true" className="mt-6 flex justify-center gap-6">
                  {[0.85, 0.6, 0.95].map((v, i) => (
                    <svg key={i} viewBox="0 0 48 48" className="w-16 h-16 -rotate-90">
                      <circle cx="24" cy="24" r="19" fill="none" stroke="#ccfbf1" strokeWidth="6"/>
                      <motion.circle
                        cx="24"
                        cy="24"
                        r="19"
                        fill="none"
                        stroke={i === 1 ? "#c89d5a" : "#0f766e"}
                        strokeWidth="6"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: v }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.6, delay: i * 0.25 }}
                      />
                    </svg>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Why Choose DigLip7 for Digital Marketing Services in Delhi? */}
            <div className="max-w-6xl mx-auto mb-12">
              <motion.div
                className="relative overflow-hidden rounded-3xl bg-white p-8 sm:p-12 shadow-xl border border-gray-100"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <ShieldCheck className="absolute -right-8 -top-8 w-52 h-52 text-teal-50" />
                <div className="relative">
                  <FloatingElement>
                    <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-6 leading-tight">
                      Why Choose DigLip7 for Digital Marketing Services in Delhi?
                    </h2>
                  </FloatingElement>
                  <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                    <p>
                      When evaluating any provider, look for clear marketing objectives, relevant service selection, genuine search and advertising knowledge, transparent communication, structured campaign planning, data-based optimization, appropriate reporting and ethical practices.
                    </p>
                    <p className="bg-gradient-to-br from-teal-50 to-white rounded-2xl p-5 border-l-4 border-teal-600">
                      DigLip7 Tech Pvt Ltd is a digital marketing and technology service provider. We focus on business-relevant outcomes rather than vanity metrics, explain what we recommend and why, and avoid unsupported claims about rankings or results.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* FAQ */}
          <FaqSection title="Frequently Asked Questions" faqs={faqs} />

          {/* Contact */}
          <CtaSection
            headingLead="Contact"
            headingAccent="DigLip7"
            text="If you are looking for digital marketing support targeting Delhi, a conversation is a practical place to start. We can discuss your website's visibility, marketing objectives, relevant channels, search opportunities, advertising requirements, campaign performance and target audiences."
            ctaLabel="Discuss Your Digital Marketing Requirements"
          />
        </div>
      </main>
    </div>
  );
}

export default DelhiDigitalMarketingServices;