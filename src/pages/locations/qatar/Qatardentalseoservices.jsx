import React, { useState, useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../../../components/SEO";
import {
  ArrowRight,
  ArrowUp,
  ChevronDown,
  ChevronLeft,
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
  Languages,
  Smartphone,
  HeartPulse,
  Code2,
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

// Icon cards with optional bold lead-in (text before the first colon)
const ServiceFactorGrid = ({ items }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {items.map((item, index) => {
      const colon = item.text.indexOf(": ");
      const hasLead = colon > -1 && colon < 70;
      const lead = hasLead ? item.text.slice(0, colon + 1) : null;
      const rest = hasLead ? item.text.slice(colon + 2) : item.text;
      return (
        <motion.div
          key={item.text}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
          viewport={{ once: true }}
        >
          <Card3D className="h-full">
            <div className="bg-gray-50 rounded-2xl p-6 h-full border border-gray-100 shadow-md hover:shadow-xl transition-all flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-4 text-teal-700">
                <item.icon className="w-6 h-6" />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                {lead && <strong className="block text-gray-900 text-base mb-1">{lead}</strong>}
                <span className={lead ? "" : "text-gray-800 font-medium text-base"}>{rest}</span>
              </p>
            </div>
          </Card3D>
        </motion.div>
      );
    })}
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
    } items-stretch gap-8 lg:gap-14 mb-20 rounded-3xl p-6 sm:p-10 lg:p-12 border border-gray-100`}
  >
    <motion.div
      className="w-full md:w-5/12 lg:w-1/2 flex flex-col"
      initial={{ opacity: 0, x: reverse ? 40 : -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Card3D className="w-full h-full flex flex-col">
        <div className="w-full h-full min-h-[440px] sm:min-h-[500px] lg:min-h-[540px] rounded-2xl overflow-hidden bg-gray-100 shadow-xl border border-gray-200">
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </div>
      </Card3D>
    </motion.div>
    <div className="flex-1 flex flex-col justify-center text-center md:text-left py-2">
      <FloatingElement>
        <h2 className="text-2xl sm:text-3xl font-bold leading-tight mb-4">
          {renderHeadingWithAccent(title)}
        </h2>
      </FloatingElement>
      <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">{children}</div>
    </div>
  </div>
);

// NEW: tabbed topics (all panels stay in the DOM, only the active one is shown)
const TabbedTopics = ({ topics }) => {
  const [active, setActive] = useState(0);
  const tabsRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    if (tabsRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabsRef.current;
      setCanScrollLeft(scrollLeft > 6);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 6);
    }
  };

  useEffect(() => {
    const check = () => checkScroll();
    check();
    const timer = setTimeout(check, 100);
    const el = tabsRef.current;
    if (el) {
      el.addEventListener("scroll", check, { passive: true });
      window.addEventListener("resize", check);
    }
    return () => {
      clearTimeout(timer);
      if (el) el.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [topics]);

  const scrollTabs = (direction) => {
    if (tabsRef.current) {
      const scrollAmount = direction === "left" ? -240 : 240;
      tabsRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleTabClick = (index) => {
    setActive(index);
    const tabBtn = document.getElementById(`dental-tab-${index}`);
    if (tabBtn && tabsRef.current) {
      tabBtn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  };

  return (
    <div className="max-w-7xl mx-auto mb-20 rounded-3xl bg-gradient-to-br from-gray-50 to-teal-50/30 border border-gray-100 shadow-md p-5 sm:p-10">
      <div className="relative mb-6">
        {/* Transparent Left Arrow */}
        <button
          type="button"
          onClick={() => scrollTabs("left")}
          disabled={!canScrollLeft}
          aria-label="Scroll topics left"
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-2.5 rounded-full bg-white/75 hover:bg-white text-teal-900 shadow-md backdrop-blur-md border border-teal-100 transition-all duration-200 cursor-pointer -ml-2 sm:-ml-3 ${
            canScrollLeft ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Scrollable Tabs List without scrollbar */}
        <div
          ref={tabsRef}
          role="tablist"
          aria-label="Dental SEO topics"
          className="flex gap-3 overflow-x-auto no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden scroll-smooth py-1 px-3 lg:justify-center"
        >
          {topics.map((t, i) => (
            <button
              key={t.title}
              type="button"
              role="tab"
              id={`dental-tab-${i}`}
              aria-selected={active === i}
              aria-controls={`dental-panel-${i}`}
              onClick={() => handleTabClick(i)}
              className={`shrink-0 flex items-center gap-2 px-5 py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 cursor-pointer ${
                active === i
                  ? "bg-gradient-to-r from-teal-700 to-teal-900 text-white shadow-lg"
                  : "bg-white text-gray-700 border border-teal-100 hover:bg-teal-50"
              }`}
            >
              <t.icon className="w-4 h-4" />
              {t.title}
            </button>
          ))}
        </div>

        {/* Transparent Right Arrow */}
        <button
          type="button"
          onClick={() => scrollTabs("right")}
          disabled={!canScrollRight}
          aria-label="Scroll topics right"
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-2.5 rounded-full bg-white/75 hover:bg-white text-teal-900 shadow-md backdrop-blur-md border border-teal-100 transition-all duration-200 cursor-pointer -mr-2 sm:-mr-3 ${
            canScrollRight ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"
          }`}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {topics.map((t, i) => (
        <motion.div
          key={t.title}
          role="tabpanel"
          id={`dental-panel-${i}`}
          aria-labelledby={`dental-tab-${i}`}
          hidden={active !== i}
          animate={{ opacity: active === i ? 1 : 0, y: active === i ? 0 : 20 }}
          transition={{ duration: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-start">
            <div className="hidden md:flex w-20 h-20 rounded-3xl bg-gradient-to-br from-teal-600 to-teal-900 items-center justify-center shadow-xl">
              <t.icon className="w-9 h-9 text-white" />
            </div>
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 border-l-4 border-l-teal-600 shadow-lg">
              <FloatingElement>
                <h2 className="text-2xl sm:text-3xl font-bold leading-tight mb-4">
                  {renderHeadingWithAccent(t.title)}
                </h2>
              </FloatingElement>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                {t.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// NEW: decorative animated bars (no text, purely visual)
const BarsArt = () => {
  const bars = [35, 55, 42, 70, 58, 82, 95];
  return (
    <div
      aria-hidden="true"
      className="w-full max-w-md mx-auto rounded-3xl bg-gradient-to-br from-teal-800 to-teal-900 p-8 shadow-xl relative overflow-hidden"
    >
      <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-[#c89d5a]/25 blur-2xl" />
      <div className="relative flex items-end justify-between gap-3 h-56">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-t-xl bg-gradient-to-t from-teal-400 to-white/90"
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: i * 0.1 }}
          />
        ))}
      </div>
      <div className="relative mt-4 h-1.5 rounded-full bg-white/20 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-yellow-300 to-white"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.6 }}
        />
      </div>
    </div>
  );
};

// ===========================================================================
// Page constants
// ===========================================================================

const pageUrl = "https://diglip7.com/qatar/dental-seo-services/";
const metaTitle = "Dental SEO Services Qatar | DigLip7";
const metaDescription =
  "Improve your dental clinic’s online visibility with dental SEO services in Qatar, including local SEO, dental website optimization, keyword research and technical SEO.";
const metaKeywords =
  "Dental SEO Services in Qatar, Dental SEO Qatar, Dental SEO Agency Qatar, Dental Clinic SEO Qatar, Dentist SEO Services Qatar, SEO for Dentists Qatar, Dental Website SEO Qatar, Local SEO for Dentists Qatar, Dental Marketing Services Qatar, Dental Practice SEO Qatar";

const breadcrumbTrail = [
  { label: "Home", href: "/" },
  { label: "Qatar", href: "/qatar/" },
  { label: "Dental SEO Services", href: "/qatar/dental-seo-services/" },
];

const images = {
  hero: {
    src: "/images/dental-seo-services-qatar.webp",
    alt: "Digital marketing team reviewing dental clinic website search visibility and SEO performance",
    width: 1600,
    height: 900,
  },
  website: {
    src: "/images/dental-clinic-website-optimization.webp",
    alt: "Example layout of a dental clinic service page with treatment information and enquiry button",
    width: 1200,
    height: 750,
  },
  local: {
    src: "/images/dental-local-seo-performance-review.webp",
    alt: "Local search performance report being reviewed for a dental practice",
    width: 1200,
    height: 675,
  },
  mobile: {
    src: "/images/dental-website-mobile-usability.webp",
    alt: "Smartphone displaying a dental clinic website with a call button",
    width: 1000,
    height: 1000,
  },
};

// ===========================================================================
// Content data (verbatim from the content package)
// ===========================================================================

const heroParagraphs = [
  "A person with a toothache or a chipped tooth doesn't browse; they search. They look for a dentist nearby, compare a few clinic websites and call or send an enquiry through the one that seems clear and trustworthy. If a clinic's website is hard for search engines to understand, or its treatment pages say very little, that person may never see it.",
  <>
    Dental SEO services in Qatar focus on helping search engines discover and understand a clinic's website, treatment pages, location information and educational content, so the right patients can find accurate information.{" "}
    <span className="font-semibold text-blue-700">DigLip7</span> offers dental SEO as a digital marketing service for dental clinics and practices seeking relevant organic visibility in Qatar. It covers audits, keyword research, page optimization, local SEO, technical fixes and reporting.
  </>,
  "It is worth being clear about scope. We work on a clinic's search visibility, not on dental treatment or clinical advice. Anything clinical on the site should come from, and be reviewed by, qualified dental professionals.",
];

const problems = [
  "Service pages with limited organic visibility.",
  "Websites that don't explain treatments clearly.",
  "Location pages that lack accurate clinic details.",
  "Poor mobile usability.",
  "Duplicate or thin treatment pages.",
  "Little visibility for relevant dentist and dental service searches.",
  "Incomplete tracking of calls and appointment enquiries.",
  "Heavy dependence on paid advertising.",
];

const services = [
  { icon: Search, text: "Website SEO audit: a prioritized review of structure, content, indexing and tracking." },
  { icon: Target, text: "Keyword research: search terms matched to services the clinic really provides." },
  { icon: FileText, text: "Clinic website and treatment page optimization: clearer, more useful pages." },
  { icon: MapPin, text: "Local SEO and Google Business Profile optimization, where the clinic is eligible." },
  { icon: Cpu, text: "Technical SEO: crawling, indexing, redirects, duplicates and errors." },
  { icon: Link2, text: "Content planning, internal linking and Arabic and English SEO planning." },
  { icon: Smartphone, text: "Mobile optimization and structured data." },
  { icon: BarChart3, text: "Organic performance reporting." },
];

const tabbedTopics = [
  {
    icon: HeartPulse,
    title: "SEO for Dental Treatment Pages",
    paragraphs: [
      "Treatment pages should answer what patients actually wonder about: what the treatment is, who it may suit, what to expect and how to enquire. Good pages use clear headings, accurate service information and patient-friendly terminology, mention eligibility and limitations where clinically relevant, include useful FAQs and enquiry options, and link to related services.",
      "A separate page for a treatment should exist only when it offers distinct, useful information. Creating several near-identical pages for minor keyword variations dilutes quality and risks thin content. We don't invent benefits, success rates, recovery timelines or guaranteed outcomes, and any dental claim must be supported by reliable sources and reviewed by a qualified professional.",
    ],
  },
  {
    icon: Code2,
    title: "Technical SEO for Dental Websites",
    paragraphs: [
      "Technical SEO helps search engines access and understand the pages that matter. We review crawlability and indexability, XML sitemaps, robots.txt, canonical URLs, redirects, broken links, duplicate pages, site architecture, mobile usability, JavaScript rendering where relevant, structured data, HTTPS and ongoing error monitoring.",
      "Not every issue has the same priority, and not every fix is worth making. We rank problems by their likely effect on visibility and usability. We don't recommend blocking useful treatment pages, or automatically indexing every URL the website generates.",
    ],
  },
  {
    icon: FileText,
    title: "Dental Content Marketing Strategy",
    paragraphs: [
      "Helpful content can answer genuine patient questions and explain a clinic's services: treatment FAQs, patient education articles, oral health information, location details and clear service explanations. All of it should be accurate, kept up to date and reviewed by qualified dental professionals, with contextual links to the relevant service pages.",
      "We avoid misleading advice, exaggerated benefits, unsupported health claims and fear-based marketing. Content shouldn't be produced merely to target large numbers of keywords. When it is useful and accurate, it supports visibility and helps patients understand what the clinic offers.",
    ],
  },
  {
    icon: Languages,
    title: "Arabic and English Dental SEO",
    paragraphs: [
      "Clinics in Qatar may serve people searching in Arabic, English or both, and the right strategy depends on the clinic's actual audience. We don't assume every patient prefers the same language, and we don't recommend a bilingual website unless it fits the clinic's audience and services.",
      "Where both languages matter, the work includes separate keyword research, natural localization, accurate dental terminology, language-specific metadata, suitable URL structures, correct hreflang implementation, internal links between versions, consistent clinic information and good translation quality. Duplicated or automatically translated low-value pages are avoided.",
    ],
  },
];

const processSteps = [
  { icon: Users, title: "Understand the clinic's business goals and actual services." },
  { icon: Eye, title: "Review the website and existing search visibility." },
  { icon: ShieldCheck, title: "Conduct a technical SEO audit." },
  { icon: Search, title: "Research relevant dental keywords." },
  { icon: Compass, title: "Map search intent to existing pages." },
  { icon: FileText, title: "Optimize important treatment and clinic pages." },
  { icon: MapPin, title: "Review local SEO and business information." },
  { icon: Link2, title: "Improve internal linking and site architecture." },
  { icon: Code2, title: "Implement appropriate structured data." },
  { icon: BarChart3, title: "Monitor search visibility and website performance." },
  { icon: Settings, title: "Prioritize improvements based on measured results." },
];

const faqs = [
  {
    question: "What are dental SEO services in Qatar?",
    answer:
      "They are SEO services tailored to dental clinic websites, helping search engines find and understand a clinic's service pages, location details and educational content. The work typically combines keyword research, page optimization, technical fixes, local search and reporting, shaped by the clinic's actual services and audience.",
  },
  {
    question: "How can SEO help dental clinics in Qatar?",
    answer:
      "It can help people searching for dentists or dental services find accurate clinic information, such as services, locations and enquiry options. SEO also reduces dependence on paid advertising over time. Results depend on competition, website quality and local search conditions, so no particular outcome can be promised.",
  },
  {
    question: "What does a dental SEO agency provide?",
    answer:
      "Typically a website audit, keyword research, treatment page and content optimization, technical SEO, local SEO, internal linking, structured data and reporting. The exact scope depends on the clinic's website and goals, and some work may need the clinic's developers or dental professionals for clinical review.",
  },
  {
    question: "How long does dental SEO take to show results?",
    answer:
      "There is no fixed timeline. It depends on competition, the website's current condition, how quickly changes are implemented and how search engines respond. Some technical fixes may show effects sooner than content or local work. Treat any promise of rankings within a set number of days with caution.",
  },
  {
    question: "Does dental SEO include Google Business Profile optimization?",
    answer:
      "It can, where the clinic is eligible under Google's rules. We can review the profile's accuracy, categories, services, hours and consistency with the website. We don't create fake locations, duplicate profiles or fake reviews, and optimization doesn't guarantee map rankings or appointments.",
  },
  {
    question: "Can SEO help dentists improve local search visibility?",
    answer:
      "Yes, it can support local visibility when a clinic has accurate business information, a well-maintained profile, relevant location content and genuine reviews. Local results depend on proximity, competition and Google's own systems, so SEO can improve the signals a clinic controls without guaranteeing a position.",
  },
  {
    question: "Is Arabic and English SEO important for dental clinics in Qatar?",
    answer:
      "It depends on who the clinic serves. If patients search in both languages, separate keyword research and well-localized pages are usually worthwhile, with correct hreflang and consistent clinic details. If the audience mainly uses one language, a single-language website may be enough.",
  },
  {
    question: "How can dental clinics measure SEO performance?",
    answer:
      "Use Google Search Console for clicks, impressions, queries and indexing, and GA4 for organic landing pages and events such as form submissions or click-to-call, where tracking is configured. Keep search visibility, website visits, enquiries and actual appointments as separate measures.",
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
    "@id": "https://diglip7.com/qatar/dental-seo-services/#webpage",
    url: "https://diglip7.com/qatar/dental-seo-services/",
    name: "Dental SEO Services Qatar | DigLip7",
    description: metaDescription,
    isPartOf: { "@id": "https://diglip7.com/#website" },
    about: { "@id": "https://diglip7.com/qatar/dental-seo-services/#service" },
    breadcrumb: { "@id": "https://diglip7.com/qatar/dental-seo-services/#breadcrumb" },
    inLanguage: "en",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://diglip7.com/qatar/dental-seo-services/#service",
    name: "Dental SEO Services in Qatar",
    serviceType: "Dental SEO",
    description:
      "Dental SEO services for dental clinics and practices targeting Qatar, including website audits, keyword research, treatment page optimization, local SEO, technical SEO and performance reporting.",
    url: "https://diglip7.com/qatar/dental-seo-services/",
    provider: { "@id": "https://diglip7.com/#organization" },
    areaServed: { "@type": "Country", name: "Qatar" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://diglip7.com/qatar/dental-seo-services/#breadcrumb",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://diglip7.com/" },
      { "@type": "ListItem", position: 2, name: "Qatar", item: "https://diglip7.com/qatar/" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Dental SEO Services",
        item: "https://diglip7.com/qatar/dental-seo-services/",
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

function QatarDentalSEOServices() {
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
          titleDark="Dental SEO Services in Qatar"
          titleGradient="for Dental Clinics"
          paragraphs={heroParagraphs}
          ctaLabel="Discuss Your Dental SEO Requirements"
          image={images.hero}
        />

        <div className="bg-white">
          <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 w-full">
            {/* Why Dental Clinics Need SEO */}
            <div className="max-w-7xl mx-auto mb-20">
              <div className="text-center max-w-5xl mx-auto mb-12">
                <SectionHeading>Why Dental Clinics | Need SEO</SectionHeading>
                <p className="text-gray-700 leading-relaxed">
                  Most clinics have a website, but many don't get much from it. Typical problems include:
                </p>
              </div>
              <ProblemGrid items={problems} />
              <div className="mt-10 max-w-5xl mx-auto bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 border-l-4 border-[#c89d5a] shadow-sm">
                <p className="text-gray-700 leading-relaxed">
                  SEO can help prospective patients find relevant clinic information through organic search, provided that information is accurate: services, locations, opening hours and enquiry options. Results depend on competition, website quality, local search conditions and implementation. We don't guarantee rankings, patient numbers, bookings or revenue.
                </p>
              </div>
            </div>

            {/* Dental SEO Services We Provide */}
            <div className="max-w-7xl mx-auto mb-20">
              <div className="text-center max-w-5xl mx-auto mb-12">
                <SectionHeading>Dental SEO Services | We Provide</SectionHeading>
                <p className="text-gray-700 leading-relaxed">
                  Each service addresses a specific visibility problem. Content optimization improves how pages explain services. Technical implementation makes the site accessible and consistent for search engines. Local search work supports discovery in a clinic's actual service area.
                </p>
              </div>
              <ServiceFactorGrid items={services} />
              <p className="text-gray-700 leading-relaxed text-center max-w-5xl mx-auto mt-10">
                Not every service is included in every engagement. Scope depends on the website, the clinic's services and who can implement changes, and we confirm that when scoping the work.
              </p>
            </div>

            {/* Dental Website and Service Page Optimization */}
            <SpotlightRow title="Dental Website and | Service Page Optimization" image={images.website}>
              <p>
                A clinic website should help someone understand what the clinic offers and how to get in touch. That means clear service descriptions, descriptive titles and headings, logical page organization, accurate clinic information, useful explanations of treatments, visible enquiry options, descriptive image alt text and relevant internal links.
              </p>
              <p>
                Each service page should say something genuinely useful about the service, not simply repeat a keyword. Copied dental descriptions and near-identical pages give search engines little reason to prefer a site, and give patients little reason to trust it. Information should also stay consistent across the site: services, hours and contact details shouldn't contradict one another.
              </p>
              <p>
                We don't write medical claims or promise outcomes. If a page discusses treatments, the clinical details should be reviewed by an appropriately qualified dental professional before publication.
              </p>
            </SpotlightRow>

            {/* Keyword Research for Dental Clinics in Qatar */}
            <div className="max-w-7xl mx-auto mb-20">
              <div className="text-center max-w-5xl mx-auto mb-10">
                <SectionHeading className="mb-4 sm:mb-6">
                  Keyword Research for Dental Clinics | in Qatar
                </SectionHeading>
                <p className="text-gray-700 leading-relaxed">
                  Dental keyword research identifies the terms patients use and matches them to what a clinic actually offers. We look at dentist and dental clinic searches, treatment-specific searches, location-based searches and appointment-related searches. English research is standard, with Arabic added where relevant. Competitor search results, search intent mapping and keyword-to-page assignment follow, and priorities reflect relevance and business goals.
                </p>
              </div>
              <div className="max-w-5xl mx-auto rounded-2xl border-2 border-dashed border-[#c89d5a]/60 bg-amber-50/40 p-6 sm:p-8">
                <p className="text-gray-700 leading-relaxed">
                  Examples such as "dental clinic in Doha", a dentist in an area the clinic serves, or a treatment the clinic provides are illustrative only, not validated opportunities. We don't quote search volumes or demand without evidence, and we don't recommend targeting services or locations the clinic doesn't offer.
                </p>
              </div>
            </div>

            {/* Local SEO for Dental Clinics */}
            <SpotlightRow title="Local SEO for | Dental Clinics" image={images.local} reverse>
              <p>
                Local SEO helps eligible clinics become more discoverable in the area they actually serve. It starts with an accurate clinic name, verified address and phone details, relevant service descriptions and location-specific website content. Consistent information across trusted directories, genuine patient reviews with appropriate replies, local landing pages and measurement of local search performance complete the picture.
              </p>
              <p>
                Everything must reflect the clinic's real location and coverage. We don't recommend fake locations, duplicate business profiles, misleading addresses, fake reviews or keyword-stuffed business names. A clinic also doesn't automatically qualify for a Google Business Profile; it must meet Google's eligibility requirements.
              </p>
            </SpotlightRow>

            {/* Google Business Profile Optimization */}
            <div className="max-w-7xl mx-auto mb-20">
              <div className="text-center mb-10">
                <SectionHeading>Google Business Profile | Optimization</SectionHeading>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card3D className="h-full">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-teal-100 h-full">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-700 mb-4">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      For an eligible clinic, an accurate Google Business Profile helps people make informed decisions. We review business name accuracy, primary and additional categories, address and contact details, opening and holiday hours, services, genuine clinic photographs, review management, website links and appointment links where supported and available.
                    </p>
                  </div>
                </Card3D>
                <Card3D className="h-full">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-teal-100 h-full">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-700 mb-4">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      The profile needs regular maintenance, since outdated hours or details frustrate patients. We never fabricate addresses, hours, review counts, ratings, treatment availability or appointment links, and profile optimization does not guarantee map rankings or additional appointments.
                    </p>
                  </div>
                </Card3D>
              </div>
            </div>

            {/* Tabbed topics: treatment pages, technical, content, Arabic & English */}
            <TabbedTopics topics={tabbedTopics} />

            {/* Dental Website Mobile Optimization */}
            <SpotlightRow title="Dental Website | Mobile Optimization" image={images.mobile}>
              <p>
                Many patients search and enquire on their phones, so a clinic site needs to be easy to use on a small screen. We review responsive design, mobile navigation, readable service information, enquiry forms, click-to-call links, image optimization, page loading, unnecessary scripts and Core Web Vitals, and we test on real mobile templates.
              </p>
              <p>
                A usable mobile site helps prospective patients reach the information they need. No particular speed score guarantees higher rankings or more appointments.
              </p>
            </SpotlightRow>

            {/* Our Dental SEO Process */}
            <ProcessSection
              title="Our Dental SEO | Process"
              steps={processSteps}
              closing="Scope depends on the website's condition, the clinic's services, location coverage and implementation resources. We don't promise rankings within a fixed number of days."
            />

            {/* SEO Reporting and Performance Measurement */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center mb-20 bg-gray-50 rounded-3xl p-8 sm:p-12 border border-gray-100">
              <BarsArt />
              <div className="text-center md:text-left">
                <FloatingElement>
                  <h2 className="text-2xl sm:text-3xl font-bold leading-tight mb-4">
                    {renderHeadingWithAccent("SEO Reporting and | Performance Measurement")}
                  </h2>
                </FloatingElement>
                <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                  <p>
                    Search visibility is not the same as appointments, so we report them separately. Where access and tracking allow, we review organic clicks, impressions, queries and average positions, indexed and excluded pages, service page performance, organic landing page traffic, enquiry submissions, click-to-call events, contact form tracking, attribution, technical issue resolution and Core Web Vitals.
                  </p>
                  <p>
                    Google Search Console shows how the site appears in search, and GA4 shows what visitors do afterwards, if tracking is configured. Reliable conversion measurement depends on proper implementation and good data quality.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <FaqSection title="Frequently Asked | Questions" faqs={faqs} />

          {/* Contact */}
          <CtaSection
            headingLead="Contact"
            headingAccent="DigLip7"
            text="If you run a dental clinic or practice and want better organic search visibility in Qatar, we'd be glad to talk. A discussion can help identify website challenges, local search priorities, treatment page requirements and your business objectives, so any recommendations fit your clinic."
            ctaLabel="Discuss Your Dental SEO Requirements"
          />
        </div>
      </main>
    </div>
  );
}

export default QatarDentalSEOServices;