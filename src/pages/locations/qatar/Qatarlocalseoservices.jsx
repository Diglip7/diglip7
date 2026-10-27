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
  Search,
  Target,
  Layers,
  ShieldCheck,
  FileText,
  Link2,
  Cpu,
  BarChart3,
  Compass,
  Star,
  MapPin,
  Users,
  Settings,
  Eye,
  Sparkles,
} from "lucide-react";

// ===========================================================================
// Shared building blocks (same patterns as the existing site pages)
// ===========================================================================

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

const renderHeadingWithAccent = (titleText) => {
  if (!titleText || typeof titleText !== "string") return titleText;
  if (titleText.includes("|")) {
    const [left, right] = titleText.split("|");
    return (
      <>
        <span className="text-teal-800">{left.trim()}</span> |{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
          {right.trim()}
        </span>
      </>
    );
  }
  const words = titleText.trim().split(" ");
  if (words.length <= 2) {
    return (
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-800 to-[#c89d5a]">
        {titleText}
      </span>
    );
  }
  const accentCount = words.length > 5 ? 2 : 1;
  const main = words.slice(0, words.length - accentCount).join(" ");
  const accent = words.slice(words.length - accentCount).join(" ");
  return (
    <>
      <span className="text-teal-800">{main}</span>{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
        {accent}
      </span>
    </>
  );
};

const SectionHeading = ({ children, color, className = "mb-4 sm:mb-6" }) => (
  <FloatingElement>
    <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight ${className}`}>
      {color ? <span className={color}>{children}</span> : renderHeadingWithAccent(children)}
    </h2>
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
const LandingHero = ({ breadcrumb, titleDark, titleGradient, paragraphs, ctaLabel, image }) => {
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

            {paragraphs.map((p, i) => (
              <p
                key={i}
                className={`text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 ${
                  i === 0 ? "mt-4 mb-3" : i === paragraphs.length - 1 ? "mb-6" : "mb-3"
                }`}
              >
                {p}
              </p>
            ))}

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
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

// Process (blue line + icon circles)
const ProcessSection = ({ title, steps, closing }) => (
  <div className="bg-white py-12 px-2 text-center mb-20 max-w-7xl mx-auto">
    <div className="max-w-7xl mx-auto mb-12">
      <FloatingElement>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
          {renderHeadingWithAccent(title)}
        </h2>
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

            <h3 className="font-semibold text-gray-900 text-sm sm:text-base leading-snug max-w-[240px]">
              {step.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </div>

    {closing && (
      <p className="text-gray-600 mt-12 text-sm sm:text-base max-w-5xl mx-auto leading-relaxed">
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
    <section className="w-full bg-gradient-to-br from-gray-50 to-teal-50/30 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <FloatingElement>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4">
              {renderHeadingWithAccent(title)}
            </h2>
          </FloatingElement>
        </motion.div>

        <div className="space-y-4 sm:space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
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

// Icon cards (text only) on grey cards
const FactorGrid = ({ items }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {items.map((item, index) => (
      <motion.div
        key={item.text}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
        viewport={{ once: true }}
      >
        <Card3D className="h-full">
          <div className="bg-gray-50 rounded-2xl p-6 h-full border border-gray-100 shadow-md hover:shadow-xl transition-all flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-4 text-teal-700">
              <item.icon className="w-6 h-6" />
            </div>
            <p className="text-gray-700 font-medium text-sm sm:text-base leading-relaxed flex-grow">
              {item.text}
            </p>
          </div>
        </Card3D>
      </motion.div>
    ))}
  </div>
);

// Problem cards (amber warning)
const ProblemGrid = ({ items }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {items.map((item, i) => (
      <motion.div
        key={item}
        className="group flex items-start gap-3 rounded-2xl p-5 bg-gradient-to-br from-amber-50/70 to-white border border-amber-100 shadow-sm hover:shadow-lg transition-shadow"
        whileHover={{ y: -5 }}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: (i % 4) * 0.08, duration: 0.5 }}
      >
        <span className="w-9 h-9 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 group-hover:bg-amber-600 group-hover:text-white transition-colors">
          <AlertTriangle className="w-4 h-4" />
        </span>
        <p className="text-gray-800 text-sm sm:text-base leading-relaxed">{item}</p>
      </motion.div>
    ))}
  </div>
);

// Image + text row
const SpotlightRow = ({ title, image, reverse, children }) => (
  <div
    className={`max-w-7xl mx-auto flex flex-col ${
      reverse ? "md:flex-row-reverse bg-white shadow-sm" : "md:flex-row bg-gray-50"
    } items-center gap-10 lg:gap-14 mb-20 rounded-3xl p-8 sm:p-12 border border-gray-100`}
  >
    <motion.div
      className="w-full md:w-1/2 flex flex-col items-center"
      initial={{ opacity: 0, x: reverse ? 40 : -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Card3D className="w-full max-w-md">
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading="lazy"
          decoding="async"
          className="rounded-2xl shadow-xl w-full object-cover bg-gray-50"
        />
      </Card3D>
    </motion.div>
    <div className="flex-1 text-center md:text-left">
      <FloatingElement>
        <h2 className="text-2xl sm:text-3xl font-bold leading-tight mb-4">
          {renderHeadingWithAccent(title)}
        </h2>
      </FloatingElement>
      <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">{children}</div>
    </div>
  </div>
);

// Numbered topic row (icon + heading + two paragraphs)
const TopicRow = ({ number, icon: Icon, title, children }) => (
  <motion.div
    className="max-w-7xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-start"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6 }}
  >
    <div className="hidden md:flex flex-col items-center gap-3 pt-2">
      <div className="relative w-20 h-20 rounded-3xl bg-gradient-to-br from-teal-600 to-teal-900 flex items-center justify-center shadow-xl">
        <Icon className="w-9 h-9 text-white" />
        <span className="absolute -top-2 -right-2 bg-[#c89d5a] text-white text-xs font-bold w-7 h-7 flex items-center justify-center rounded-full shadow">
          {number}
        </span>
      </div>
      <span className="w-px flex-1 min-h-[40px] bg-gradient-to-b from-teal-300 to-transparent" />
    </div>
    <div className="group bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 sm:p-10 border border-gray-100 border-l-4 border-l-teal-600 shadow-md hover:shadow-2xl hover:border-l-[#c89d5a] transition-all">
      <div className="flex items-center gap-3 mb-4 md:hidden">
        <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-600 to-teal-900 flex items-center justify-center text-white">
          <Icon className="w-6 h-6" />
        </span>
      </div>
      <FloatingElement>
        <h2 className="text-2xl sm:text-3xl font-bold leading-tight mb-4">
          {renderHeadingWithAccent(title)}
        </h2>
      </FloatingElement>
      <div className="space-y-4 text-gray-700 leading-relaxed">{children}</div>
    </div>
  </motion.div>
);

// ===========================================================================
// Page constants
// ===========================================================================

const pageUrl = "https://diglip7.com/qatar/local-seo-services/";
const metaTitle = "Local SEO Services in Qatar | DigLip7";
const metaDescription =
  "Improve your local search visibility with Local SEO Services in Qatar from DigLip7. Explore Google Business Profile optimization, local keyword research and website SEO.";
const metaKeywords =
  "Local SEO Services in Qatar, Local SEO Qatar, Local SEO Agency Qatar, Local SEO Company Qatar, Google Maps SEO Qatar, Google Business Profile Optimization Qatar, Local Search Optimization Qatar, Local SEO for Small Businesses Qatar, Local Business SEO Services Qatar, Local SEO Consultant Qatar";

const breadcrumbTrail = [
  { label: "Home", href: "/" },
  { label: "Qatar", href: "/qatar/" },
  { label: "Local SEO Services", href: "/qatar/local-seo-services/" },
];

const images = {
  hero: {
    src: "/images/local-seo-services-qatar.webp",
    alt: "Digital marketing team reviewing local search visibility and business website performance",
    width: 1600,
    height: 900,
  },
  profile: {
    src: "/images/google-business-profile-optimization-review.webp",
    alt: "Example business profile being reviewed for accuracy of hours, categories and contact details",
    width: 1200,
    height: 750,
  },
  keyword: {
    src: "/images/local-keyword-research-analytics.webp",
    alt: "Analytics screen showing location-based search queries being reviewed",
    width: 1200,
    height: 675,
  },
  audit: {
    src: "/images/local-business-website-seo-audit.webp",
    alt: "Website audit checklist for a local business being reviewed",
    width: 1200,
    height: 675,
  },
  reporting: {
    src: "/images/local-search-performance-reporting.webp",
    alt: "Local search performance report with traffic and enquiry trends",
    width: 1200,
    height: 675,
  },
};

// ===========================================================================
// Content data (verbatim from the content package)
// ===========================================================================

const heroParagraphs = [
  "When someone searches for a nearby service, they usually want an answer within a few taps: who offers it, where they are and whether they're open. A business with a vague website, an outdated profile or contact details that differ from one place to the next can lose that moment to a competitor whose information is simply clearer.",
  "Local SEO services in Qatar help search engines understand a business's website, location, services and relevance to local searches. DigLip7 offers local SEO for businesses targeting customers in Qatar, covering audits, local keyword research, Google Business Profile optimization, on-page work, listings, technical fixes and reporting. It can support discovery through organic results and eligible local search features.",
  "Local SEO differs from general SEO in its focus. General SEO aims to make a site visible for topics and services broadly. Local SEO adds the question of where: which locations a business genuinely serves, and how it appears to people searching nearby.",
];

const problems = [
  "Websites with little local organic traffic.",
  "Inaccurate or incomplete information on online platforms.",
  "Service pages that don't explain which areas they serve.",
  "Inconsistent business names, addresses and phone numbers.",
  "Little attention to customer reviews.",
  "Poor mobile usability.",
  "No clear way to measure calls and enquiries.",
];

const services = [
  { icon: Search, text: "Local SEO audits and local keyword research." },
  { icon: MapPin, text: "Google Business Profile optimization." },
  { icon: FileText, text: "Local on-page SEO and landing page optimization." },
  { icon: Link2, text: "Business listing and citation review, and consistency checks." },
  { icon: Star, text: "Review management guidance." },
  { icon: Compass, text: "Google Maps visibility work." },
  { icon: Cpu, text: "Technical SEO for local websites." },
  { icon: Layers, text: "Multiple-location SEO planning and local content strategy." },
  { icon: BarChart3, text: "Performance tracking and reporting." },
];

const processSteps = [
  { icon: Users, title: "Understand the business, services, locations and customer objectives." },
  { icon: Eye, title: "Review the website and existing search visibility." },
  { icon: ShieldCheck, title: "Conduct a local SEO audit." },
  { icon: Search, title: "Research local keywords and search intent." },
  { icon: MapPin, title: "Review Google Business Profile eligibility and information." },
  { icon: Layers, title: "Identify relevant local landing pages." },
  { icon: FileText, title: "Optimize business information and on-page SEO." },
  { icon: Link2, title: "Review citations and relevant business listings." },
  { icon: Settings, title: "Address technical SEO issues." },
  { icon: BarChart3, title: "Monitor local search performance." },
  { icon: Target, title: "Refine the strategy using measured results." },
];

const faqs = [
  {
    question: "What are local SEO services in Qatar?",
    answer:
      "They are services that help a business appear in relevant local searches, covering its website, Google Business Profile, listings, reviews and technical setup. The aim is to make accurate business information easy for people and search engines to find, based on where the business genuinely operates and serves customers.",
  },
  {
    question: "How can local SEO help businesses in Qatar?",
    answer:
      "It can help people searching for nearby services find accurate details such as services, location, hours and contact options. A clear website and well-maintained profile make that information easier to trust. Results depend on competition, eligibility and implementation, so calls and enquiries cannot be guaranteed.",
  },
  {
    question: "What does a local SEO agency provide?",
    answer:
      "Typically an audit, local keyword research, Business Profile optimization, on-page work, listing and citation review, review guidance, technical fixes and reporting. The scope depends on the business, its locations and who can implement changes, and not every service is included in every engagement.",
  },
  {
    question: "How does Google Business Profile optimization work?",
    answer:
      "It involves keeping an eligible profile accurate and complete: name, categories, address or service area, hours, services, photos, website link and review replies. Information must match the real business and follow Google's guidelines. Regular updates matter, and optimization doesn't guarantee Maps rankings.",
  },
  {
    question: "Can local SEO improve Google Maps visibility?",
    answer:
      "It can support it. Accurate profile information, relevant categories, a useful website, genuine reviews and consistent business details all help. Google Maps results also depend on relevance, distance and prominence, and vary by search, location and device, so no agency can promise a particular position.",
  },
  {
    question: "How long does local SEO take to show results?",
    answer:
      "There is no fixed timeline. It depends on competition, the current state of the website and profile, the number of locations and how quickly changes are made. Simple corrections may show effects sooner than building prominence. Be cautious of anyone promising rankings within a set number of days.",
  },
  {
    question: "Is local SEO useful for small businesses in Qatar?",
    answer:
      "Often, especially for businesses that serve customers in specific places and rely on being found by people nearby. A small business can benefit from accurate information and a clear website, but the approach should match its eligibility, budget and goals, with no guaranteed outcome.",
  },
  {
    question: "How can businesses measure local SEO performance?",
    answer:
      "Use Google Search Console for clicks, impressions and queries, GA4 for website behaviour and enquiry events, and Business Profile reporting for profile interactions where available. Treat website traffic, profile interactions, qualified leads and sales as separate measures, and make sure tracking is correctly configured.",
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
    "@id": "https://diglip7.com/qatar/local-seo-services/#webpage",
    url: "https://diglip7.com/qatar/local-seo-services/",
    name: "Local SEO Services in Qatar | DigLip7",
    description: metaDescription,
    isPartOf: { "@id": "https://diglip7.com/#website" },
    about: { "@id": "https://diglip7.com/qatar/local-seo-services/#service" },
    breadcrumb: { "@id": "https://diglip7.com/qatar/local-seo-services/#breadcrumb" },
    inLanguage: "en",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://diglip7.com/qatar/local-seo-services/#service",
    name: "Local SEO Services in Qatar",
    serviceType: "Local SEO",
    description:
      "Local SEO services for businesses targeting customers in Qatar, including local SEO audits, local keyword research, Google Business Profile optimization, local on-page SEO, citation review, technical SEO and performance reporting.",
    url: "https://diglip7.com/qatar/local-seo-services/",
    provider: { "@id": "https://diglip7.com/#organization" },
    areaServed: { "@type": "Country", name: "Qatar" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://diglip7.com/qatar/local-seo-services/#breadcrumb",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://diglip7.com/" },
      { "@type": "ListItem", position: 2, name: "Qatar", item: "https://diglip7.com/qatar/" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Local SEO Services",
        item: "https://diglip7.com/qatar/local-seo-services/",
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

function QatarLocalSEOServices() {
  return (
    <div className="overflow-x-hidden bg-white w-full">
      <SEO
        title={metaTitle}
        description={metaDescription}
        canonical={pageUrl}
        ogType="website"
        keywords={metaKeywords}
        schema={jsonLd}
      />
      <ScrollProgress />
      <BackToTop />

      <main>
        {/* Hero */}
        <LandingHero
          breadcrumb={breadcrumbTrail}
          titleDark="Local SEO Services in Qatar"
          titleGradient="for Better Local Search Visibility"
          paragraphs={heroParagraphs}
          ctaLabel="Discuss Your Local SEO Requirements"
          image={images.hero}
        />

        <div className="bg-white">
          <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 w-full">
            {/* Why Local SEO Matters for Qatar Businesses */}
            <div className="max-w-7xl mx-auto mb-20">
              <div className="text-center max-w-5xl mx-auto mb-12">
                <SectionHeading>Why Local SEO Matters for | Qatar Businesses</SectionHeading>
                <p className="text-gray-700 leading-relaxed">
                  Local visibility matters most for businesses that serve customers in particular places. Common problems include:
                </p>
              </div>
              <ProblemGrid items={problems} />
              <div className="mt-10 max-w-5xl mx-auto bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 border-l-4 border-[#c89d5a] shadow-sm">
                <p className="text-gray-700 leading-relaxed">
                  Local organic search, Google Maps and Google Business Profile are related but are not one ranking system, and each behaves differently. Local SEO can help customers discover accurate business information, but we don't promise rankings, map-pack placement, phone calls or enquiries. Results depend on relevance, competition, business eligibility, website quality and implementation.
                </p>
              </div>
            </div>

            {/* Local SEO Services We Provide */}
            <div className="max-w-7xl mx-auto mb-20">
              <div className="text-center max-w-5xl mx-auto mb-12">
                <SectionHeading>Local SEO Services | We Provide</SectionHeading>
                <p className="text-gray-700 leading-relaxed">
                  A local strategy has three strands: website optimization, Google Business Profile work and third-party listing management. They overlap but need different skills and access. Depending on the business, services can include:
                </p>
              </div>
              <FactorGrid items={services} />
              <p className="text-gray-700 leading-relaxed text-center max-w-5xl mx-auto mt-10">
                Not every service is part of every engagement. Scope depends on the business model, locations and who can make changes, and we confirm it during scoping.
              </p>
            </div>

            {/* Google Business Profile Optimization */}
            <SpotlightRow title="Google Business Profile | Optimization" image={images.profile}>
              <p>
                For an eligible business, an accurate Business Profile helps people decide whether to get in touch. We review the business name, categories, verified address where applicable, phone details, regular and holiday hours, services, website links, genuine photographs, updates, reviews and any appointment or enquiry links Google supports.
              </p>
              <p>
                The profile must match the real business. We don't recommend fake locations, duplicate profiles created to influence rankings, keywords in the business name, fake reviews, misleading addresses, ineligible service-area profiles or invented hours. Eligibility depends on Google's current Business Profile guidelines, and optimization doesn't guarantee Google Maps rankings.
              </p>
            </SpotlightRow>

            {/* Local Keyword Research for Qatar */}
            <SpotlightRow title="Local Keyword Research | for Qatar" image={images.keyword} reverse>
              <p>
                Local keyword research looks at how customers describe what they need and where. We examine service and category searches, problem-and-solution searches, location and neighbourhood terms where relevant, Qatar-specific wording and commercial intent. Competitor search results, intent mapping and keyword-to-page assignment follow, prioritized by business relevance.
              </p>
              <p>
                Examples such as "SEO services in Doha" or a service paired with an area the business actually serves are illustrative only, not researched opportunities. We don't quote search volumes or claim a location has a particular level of demand, and we don't recommend targeting places where the business doesn't operate.
              </p>
            </SpotlightRow>

            {/* Topic rows */}
            <TopicRow number="1" icon={Compass} title="Google Maps SEO and | Local Visibility">
              <p>
                Google Maps and local search features help people find eligible businesses. Visibility draws on accurate profile information, suitable categories, correct location or service-area details, a relevant website, genuine reviews, consistent business details and helpful local landing pages.
              </p>
              <p>
                Google's documentation describes local ranking in terms of relevance, distance and prominence. A business can influence relevance and prominence, but not every factor. Results also vary by query, location and device. Proximity in particular isn't something an agency can guarantee or legitimately manipulate, so we never promise a top-three position or a particular local-pack placement.
              </p>
            </TopicRow>

            <TopicRow number="2" icon={Link2} title="Local Business Listings and | Citation Optimization">
              <p>
                Listings and citations help keep business information accurate across relevant platforms. We check name, address, phone, website and category consistency, find duplicate or incorrect listings and correct or request correction of them, then maintain the data.
              </p>
              <p>
                Quality matters more than volume. We avoid mass submissions to irrelevant directories and don't claim that hundreds of citations improve local rankings. We also don't invent directory partnerships or listing placements.
              </p>
            </TopicRow>

            <TopicRow number="3" icon={FileText} title="Local On-Page | SEO Optimization">
              <p>
                The website needs to show what a business does and where. That means clear service descriptions, relevant titles and headings, location details where appropriate, local service pages, accurate contact information, contextual internal links, useful FAQs and original content.
              </p>
              <p>
                A local landing page should say something genuinely useful about the area it covers. We don't create hundreds of near-identical location pages just to capture keywords, and we avoid implying a business serves every part of Qatar if it doesn't.
              </p>
            </TopicRow>

            <TopicRow number="4" icon={MapPin} title="Business Information and | NAP Consistency">
              <p>
                Name, address and phone details should be reliable wherever customers find them: the website, the Business Profile, directories, location pages and hours. We look for real conflicts, such as old addresses, duplicate listings or different phone numbers, rather than treating every formatting variation as a problem.
              </p>
              <p>
                A small difference like "Street" versus "St." is generally harmless, but outdated or contradictory details can confuse customers and search engines alike. We don't invent addresses, numbers or local office details.
              </p>
            </TopicRow>

            <TopicRow number="5" icon={Star} title="Local Reviews and | Reputation Management">
              <p>
                Genuine reviews help potential customers understand a business's services and experience, and they may contribute to local prominence. No business can guarantee rankings through review volume alone.
              </p>
              <p>
                We advise on asking for reviews through appropriate methods, replying professionally, addressing genuine concerns, monitoring relevant platforms and using feedback to improve service information. We never recommend fake reviews, incentives that break platform policies, review gating or suppressing legitimate negative reviews, and we don't fabricate ratings or testimonials.
              </p>
            </TopicRow>

            <div className="mb-12">
              <TopicRow number="6" icon={Layers} title="Local SEO for Multiple | Business Locations">
                <p>
                  Businesses with several eligible locations need a structure that reflects reality. That can mean separate location pages with unique, useful content, accurate location-specific details, appropriate Business Profiles for each eligible location, consistent contact information, relevant internal links and per-location measurement.
                </p>
                <p>
                  Each location must be a genuine operation. We don't recommend fake branches or profiles for areas without eligible locations, and we don't automatically add a page for every district in Qatar. The strategy follows actual locations and service coverage.
                </p>
              </TopicRow>
            </div>

            {/* Technical SEO for Local Businesses */}
            <div className="max-w-7xl mx-auto relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-800 to-teal-900 p-8 sm:p-12 mb-20">
              <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#c89d5a]/20 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-16 w-72 h-72 rounded-full bg-white/10 blur-3xl pointer-events-none" />
              <div className="relative flex flex-col md:flex-row items-center gap-10 lg:gap-14">
                <motion.div
                  className="w-full md:w-1/2 flex flex-col items-center"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Card3D className="w-full max-w-md">
                    <img
                      src={images.audit.src}
                      alt={images.audit.alt}
                      width={images.audit.width}
                      height={images.audit.height}
                      loading="lazy"
                      decoding="async"
                      className="rounded-2xl shadow-xl w-full object-cover bg-gray-50"
                    />
                  </Card3D>
                </motion.div>
                <div className="flex-1 text-center md:text-left">
                  <FloatingElement>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                      Technical SEO for <span className="text-[#c89d5a]">Local Businesses</span>
                    </h2>
                  </FloatingElement>
                  <div className="space-y-4 text-white/90 leading-relaxed text-base sm:text-lg">
                    <p>
                      Technical issues can quietly limit a local site. We review crawlability, indexability, XML sitemaps, robots.txt, canonical URLs, redirects, broken links, site architecture, mobile usability, page speed, HTTPS, structured data, how easy contact details are to find and JavaScript rendering where relevant.
                    </p>
                    <p>
                      The aim is for search engines to discover and understand the right pages. We avoid unnecessary changes, and we don't assume every local business needs the same configuration.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Local SEO Process */}
            <ProcessSection
              title="Our Local SEO | Process"
              steps={processSteps}
              closing="Scope and timelines depend on the business model, website condition, number of locations, competition and implementation resources. We don't guarantee rankings within a fixed timeframe."
            />

            {/* Local SEO Reporting and Performance Tracking */}
            <SpotlightRow title="Local SEO Reporting & | Performance Tracking" image={images.reporting}>
              <p>
                Website traffic, profile interactions, qualified leads and sales are different things, so we keep them separate. Where tracking and access allow, we review organic clicks, impressions, queries and average positions, local landing page performance, Business Profile performance data, website traffic, calls and enquiry actions, form submissions, local organic conversions, technical fixes and the accuracy of profile information.
              </p>
              <p>
                Google Search Console shows search performance, GA4 shows behaviour on the site and Business Profile reporting shows profile interactions. Accurate reporting depends on correctly configured tracking and reliable data.
              </p>
            </SpotlightRow>
          </div>

          {/* FAQ */}
          <FaqSection title="Frequently Asked | Questions" faqs={faqs} />

          {/* Contact */}
          <CtaSection
            headingLead="Contact"
            headingAccent="DigLip7"
            text="If your business serves customers in Qatar and you want clearer local search visibility, we'd be glad to talk. A discussion can help identify website visibility challenges, Business Profile requirements, local keyword opportunities, location-specific website needs, technical priorities and reporting and conversion tracking requirements."
            ctaLabel="Discuss Your Local SEO Requirements"
          />
        </div>
      </main>
    </div>
  );
}

export default QatarLocalSEOServices;