import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../../../components/SEO";
import {
  ArrowRight,
  ArrowUp,
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  Home,
  Search,
  Target,
  Layers,
  ShieldCheck,
  Zap,
  FileText,
  Link2,
  Code2,
  BarChart3,
  Compass,
  Star,
  Eye,
  Sparkles,
  Hotel,
  Smartphone,
  Languages,
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
                className={`text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 ${i === 0 ? "mt-4 mb-3" : i === paragraphs.length - 1 ? "mb-6" : "mb-3"
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
                width="1200"
                height="675"
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

// Process (blue line + icon circles) - 4 columns for 8 steps
const ProcessSection = ({ title, intro, steps }) => (
  <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 text-center mb-20 max-w-7xl mx-auto">
    <div className="max-w-5xl mx-auto mb-12">
      <FloatingElement>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
          {renderHeadingWithAccent(title)}
        </h2>
      </FloatingElement>
      {intro && <p className="text-gray-600 mt-3 text-sm sm:text-base leading-relaxed">{intro}</p>}
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

            <h3 className="font-semibold text-gray-900 text-base">{step.title}</h3>
            <p className="text-gray-600 text-sm mt-2 leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

// FAQ accordion
const FaqSection = ({ title, faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-teal-50/30 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-10 sm:mb-14"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <FloatingElement>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
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

// Icon cards with bold lead-in
const LeadCards = ({ items }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {items.map((item, index) => (
      <motion.div
        key={item.lead}
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
            <p className="text-gray-600 text-sm leading-relaxed">
              <strong className="block text-gray-900 text-base mb-1">{item.lead}</strong>
              {item.text}
            </p>
          </div>
        </Card3D>
      </motion.div>
    ))}
  </div>
);

// Icon cards (text only)
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

// Service card grid
const ServiceCardGrid = ({ items }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-left max-w-7xl mx-auto">
    {items.map((service, index) => (
      <motion.div
        key={service.title}
        className="bg-gray-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all cursor-pointer border border-gray-100 flex flex-col justify-between"
        whileHover={{ scale: 1.03 }}
        animate={{ scale: [1, 1.01, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: (index % 3) * 0.4 }}
      >
        <div>
          <div className="flex justify-center mb-4">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-teal-100 to-[#c89d5a]/20">
              <service.icon className="text-teal-600 w-8 h-8" />
            </div>
          </div>
          <h3 className="font-semibold text-gray-900 text-lg mb-2 text-center">{service.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.text}</p>
        </div>
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
        <div className="w-full h-full min-h-[460px] sm:min-h-[520px] lg:min-h-[560px] rounded-2xl overflow-hidden bg-gray-100 shadow-xl border border-gray-200">
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
      {children}
    </div>
  </div>
);

const CheckList = ({ items }) => (
  <ul className="text-gray-800 space-y-2.5 text-left my-4">
    {items.map((li) => (
      <li key={li} className="flex items-start gap-2">
        <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
        <span>{li}</span>
      </li>
    ))}
  </ul>
);

// ✓ layer cards
const LayerGrid = ({ items }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
    {items.map((layer, i) => (
      <motion.div
        key={layer}
        className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:border-teal-200 hover:shadow-lg transition-all flex items-start gap-3"
        whileHover={{ y: -4 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: (i % 3) * 0.08 }}
      >
        <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center shrink-0 text-teal-800 font-bold text-xs mt-0.5">
          ✓
        </div>
        <span className="text-gray-800 text-xs sm:text-sm font-medium leading-relaxed">{layer}</span>
      </motion.div>
    ))}
  </div>
);

// Interactive tick-off checklist card
const ChecklistCard = ({ title, items }) => {
  const [done, setDone] = useState({});
  const count = Object.values(done).filter(Boolean).length;
  return (
    <div className="bg-white rounded-3xl shadow-xl border border-teal-100 overflow-hidden">
      <div className="px-6 sm:px-8 py-5 bg-gradient-to-r from-teal-900 to-teal-700">
        <p className="text-white font-semibold text-base sm:text-lg">{title}</p>
        <div className="mt-3 h-1.5 rounded-full bg-white/20 overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-yellow-300 to-white"
            animate={{ width: `${(count / items.length) * 100}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </div>
      <ul className="divide-y divide-gray-100">
        {items.map((item) => {
          const checked = !!done[item];
          return (
            <li key={item}>
              <button
                type="button"
                onClick={() => setDone((d) => ({ ...d, [item]: !d[item] }))}
                aria-pressed={checked}
                className="w-full flex items-start gap-3 text-left px-6 sm:px-8 py-4 hover:bg-teal-50/50 transition-colors cursor-pointer"
              >
                <span
                  className={`mt-0.5 w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${checked ? "bg-teal-600 border-teal-600" : "border-teal-300 bg-white"
                    }`}
                >
                  {checked && <CheckCircle2 className="w-4 h-4 text-white" />}
                </span>
                <span
                  className={`text-sm sm:text-base leading-relaxed transition-colors ${checked ? "text-gray-500 line-through" : "text-gray-800"
                    }`}
                >
                  {item}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

// ===========================================================================
// Page constants
// ===========================================================================

const pageUrl = "https://diglip7.com/qatar/hotel-seo-services/";
const metaTitle = "Hotel SEO Services Qatar | DigLip7";
const metaDescription =
  "Improve your hotel's organic search visibility with Hotel SEO Services in Qatar from DigLip7. Explore hotel website optimization, local SEO, keyword research and technical SEO.";
const ogImage = "https://diglip7.com/images/qatar/hotel-seo-services-qatar-og.jpg";

const breadcrumbTrail = [
  { label: "Home", href: "/" },
  { label: "Qatar", href: "/qatar/" },
  { label: "Hotel SEO Services Qatar", href: "/qatar/hotel-seo-services/" },
];

const images = {
  hero: {
    src: "/images/hotel-marketing-manager-reviewing-organic-search-report.jpg",
    alt: "Hotel marketing manager reviewing website search performance on a laptop",
  },
  mobile: {
    src: "/images/traveler-researching-hotel-on-smartphone-in-lobby.jpg",
    alt: "Traveler researching hotel accommodation on a smartphone in a hotel lobby",
  },
  multilingual: {
    src: "/images/hospitality-team-reviewing-multilingual-website-content.jpg",
    alt: "Hospitality marketing team reviewing English and Arabic website content",
  },
};

// ===========================================================================
// Content data (verbatim from the content package)
// ===========================================================================

const heroParagraphs = [
  "A traveler planning a stay rarely goes straight to a hotel's booking page. They search for a place near a business district, compare room types, check whether a property has meeting rooms or family-friendly facilities, read about the neighborhood, and then decide where to book. Every one of those steps happens in search results, and a hotel website that does not answer those questions clearly can lose the visitor to an online travel agency, a directory, or a competitor.",
  "Hotel SEO Services in Qatar help a hotel's website become easier to find through relevant organic searches and easier to understand once visitors arrive. That means accurate room and facility pages, a sound technical foundation, consistent local information, and content that reflects what the property genuinely offers.",
  <>
    <span className="font-semibold text-blue-700">DigLip7 </span>Tech Pvt Ltd provides SEO services, and we can apply that work to hotels and hospitality businesses based on the needs of each property. If you would like to discuss your website and search goals, you can{" "}
    <Link to="/contact" className={inlineLink}>
      contact the DigLip7 team
    </Link>
    .
  </>,
];

const whyHotels = [
  { icon: Search, lead: "Travelers research before they book.", text: "They look for room details, photos, policies, location information, and dining or meeting options." },
  { icon: Target, lead: "Intent is specific.", text: "A search about a business stay near a particular area is different from a search for a family-friendly resort with certain facilities." },
  { icon: Layers, lead: "Competition is broad.", text: "A hotel website competes with online travel agencies, directories, review platforms, and other accommodation providers for the same visibility." },
  { icon: ShieldCheck, lead: "Accurate information builds confidence.", text: "Room pages, amenity descriptions, and policies that are clear and current help visitors evaluate the property." },
  { icon: Zap, lead: "Organic search complements other channels.", text: "It can sit alongside paid advertising and third-party booking platforms rather than replace them." },
];

const services = [
  {
    icon: Search,
    title: "Hotel keyword research and search intent analysis.",
    text: "We identify the terms and questions travelers use, then group them by intent so each page has a clear purpose. The value is a plan based on research rather than guesswork.",
  },
  {
    icon: FileText,
    title: "Hotel website SEO and on-page optimization.",
    text: "We review page titles, headings, copy, images, and internal links so each page explains the property clearly and matches what visitors are looking for.",
  },
  {
    icon: Compass,
    title: "Hotel local SEO.",
    text: (
      <>
        We look at how the property appears for location-based searches, including consistency of name, address, and phone details across the website and listings. Our{" "}
        <Link to="/qatar/local-seo-services/" className={inlineLink}>
          local SEO services in Qatar
        </Link>{" "}
        page explains this work in more detail.
      </>
    ),
  },
  {
    icon: Star,
    title: "Google Business Profile optimization.",
    text: "We help review and improve the hotel's official profile with accurate, complete information.",
  },
  {
    icon: ShieldCheck,
    title: "Technical SEO audits.",
    text: "We check crawling, indexing, site speed, mobile usability, and structured data so recommendations are based on what is actually happening on the site.",
  },
  {
    icon: Hotel,
    title: "Room, suite, amenity, and facilities page optimization.",
    text: "We help each page describe its subject in a unique, useful way.",
  },
  {
    icon: FileText,
    title: "Hotel content strategy.",
    text: "We plan content around genuine traveler questions and the hotel's real offering.",
  },
  {
    icon: Link2,
    title: "Internal linking improvements.",
    text: "We connect room pages, facilities, dining, location information, and booking paths so visitors and search engines can navigate the site easily.",
  },
  {
    icon: Code2,
    title: "Relevant structured data implementation.",
    text: "Where it accurately represents the property, we can recommend and validate markup.",
  },
  {
    icon: Smartphone,
    title: "Mobile usability and website performance improvements.",
    text: "We identify issues that slow pages down or make browsing and booking harder on a phone.",
  },
  {
    icon: BarChart3,
    title: "Organic search reporting and measurement.",
    text: "We set up reporting around the metrics that matter for your goals.",
  },
];

const roomElements = [
  { lead: "Clear page titles and headings.", text: "Each page should state what it covers, such as a room category, a facility, or the location." },
  { lead: "Unique room and suite descriptions.", text: "Describe what is genuinely different about each room type: layout, views, bedding, and included features." },
  { lead: "Accurate amenities and facilities.", text: "List only what the hotel actually offers, and keep the information current." },
  { lead: "Useful photography and image alt text.", text: "Photos should show the real property, with short, descriptive alt text that explains what the image shows." },
  { lead: "Verified property information.", text: "Location, accessibility, dining, meeting facilities, and other details should be confirmed by the hotel." },
  { lead: "Clear booking paths.", text: "Visitors should be able to move from a room page to a booking option without confusion." },
  { lead: "Internal links.", text: "Connect room pages to amenities, dining, and location pages so visitors can explore naturally." },
];

const keywordItems = [
  "Hotel and accommodation searches, where someone is comparing places to stay.",
  "Branded searches, where the traveler already knows the hotel's name and wants details or a booking link.",
  "Location-related searches, tied to areas, landmarks, or transport points the hotel genuinely serves.",
  "Business and leisure intent, which call for different content and emphasis.",
  "Room, suite, meeting, dining, and amenity searches, where relevant to the property.",
  "English and Arabic search behavior, since travelers may search in either language, and phrasing is not always a direct translation.",
  "Informational and booking-oriented searches, which need different pages and different calls to action.",
];

const localItems = [
  "Consistent name, address, and phone details across the website and all listings.",
  "Location-specific website content that explains where the hotel is and what is nearby.",
  "Relevant local citations and directories that are genuine and useful.",
  "Accurate maps and directions so visitors can find the property.",
  "Location and transport information, such as access routes, where verified.",
  "Reviews and reputation management, including thoughtful responses to guest feedback.",
  "Consistency between the website and official business listings, so visitors see the same information everywhere.",
];

const gbpItems = [
  "The correct business name and primary category.",
  "A verified address and contact information.",
  "An accurate website link and booking link.",
  "Current opening or service information, where applicable.",
  "Genuine photographs of the property.",
  "Relevant amenities and attributes, when supported.",
  "Appropriate, courteous responses to reviews.",
  "Regular checks for inaccurate details, since listings can change.",
];

const technicalItems = [
  "Crawlability and indexability, so important pages can be found and unimportant ones do not waste attention.",
  "XML sitemaps and robots directives.",
  "Canonical URLs, which clarify the preferred version of a page.",
  "Redirects and broken links.",
  "Duplicate or near-duplicate pages, which are common when many room or offer pages share similar text.",
  "Core Web Vitals and page loading performance.",
  "Image compression and modern image formats, since hotel sites are often image-heavy.",
  "HTTPS and mobile usability.",
  "JavaScript rendering considerations, where booking widgets or dynamic content may affect how pages are processed.",
  "Structured data validation.",
];

const mobileItems = [
  "Responsive layouts that adapt to different screen sizes.",
  "Readable room descriptions.",
  "Accessible navigation.",
  "Fast-loading images.",
  "Clear contact and booking actions.",
  "Simple movement between room details and booking options.",
  "Consistent information between mobile and desktop.",
  "Booking engine usability, including potential referral tracking limitations when visitors move to a separate booking domain.",
];

const directItems = [
  { icon: FileText, text: "Informative property and room pages." },
  { icon: Link2, text: "Clear booking links." },
  { icon: BarChart3, text: "Accurate rates and availability information, where integrated." },
  { icon: ShieldCheck, text: "Useful policies, cancellation information, and FAQs." },
  { icon: Star, text: "Trust-building information the hotel can substantiate." },
  { icon: Compass, text: "Internal links from informational content to relevant room and booking pages." },
  { icon: Eye, text: "Measurement of organic landing pages and booking-related actions." },
];

const languageItems = [
  "Human-reviewed Arabic and English content, rather than unchecked machine output.",
  "Accurate translation of room descriptions, facilities, and policies.",
  "Language-specific page titles and metadata.",
  "Correct hreflang implementation when separate language versions exist.",
  "Appropriate language-specific URLs.",
  "Canonical handling for translated pages, so each version points to itself as appropriate.",
  "Avoiding literal translations that produce confusing or awkward text.",
];

const contentTopics = [
  "Hotel location and nearby attractions.",
  "Transport and airport access, where verified.",
  "Meeting and event facilities, if offered.",
  "Dining options, if available.",
  "Information for family or business travelers.",
  "Local visitor guides.",
  "Room and amenity explanations.",
  "Frequently asked questions about policies and facilities.",
];

const processSteps = [
  { icon: Search, title: "Discovery and goals.", description: "We learn about the property type, audience, location, website, and business objectives." },
  { icon: ShieldCheck, title: "SEO audit.", description: "We review existing visibility, indexation, technical performance, content, and internal linking." },
  { icon: Layers, title: "Keyword mapping.", description: "We match relevant search intent to suitable pages." },
  { icon: FileText, title: "On-page optimization.", description: "We improve titles, headings, content, images, and internal links." },
  { icon: Compass, title: "Local SEO.", description: "We review the official business profile and relevant local signals." },
  { icon: Code2, title: "Technical improvements.", description: "We prioritize issues by impact and implementation feasibility." },
  { icon: Star, title: "Content planning.", description: "We identify helpful content opportunities tied to the hotel's actual offerings." },
  { icon: BarChart3, title: "Measurement and refinement.", description: "We evaluate performance data and prioritize further improvements." },
];

const reportingItems = [
  "Organic clicks and impressions.",
  "Search queries and average positions.",
  "Organic landing-page performance.",
  "Relevant non-branded search visibility.",
  "Technical indexing issues.",
  "Organic engagement and visitor behavior.",
  "Qualified enquiries and tracked booking-related actions.",
  "Google Business Profile performance, where available.",
  "Conversion data, when tracking is correctly configured.",
];

const faqs = [
  {
    question: "What are Hotel SEO Services in Qatar?",
    answer:
      "They are services that help a hotel's website appear in relevant organic searches and present accurate information to visitors. Typical work includes keyword research, on-page optimization, local SEO, technical audits, content planning, and reporting, tailored to the property and its audience.",
  },
  {
    question: "Why does a hotel need SEO?",
    answer:
      "Travelers often research hotels online before booking, and a hotel competes with travel platforms, directories, and other properties for that attention. SEO helps the official website provide clear, findable information. It supports visibility but does not guarantee rankings or reservations.",
  },
  {
    question: "What does a hotel SEO agency do?",
    answer:
      "An agency reviews the website, researches how travelers search, and recommends improvements to content, technical setup, local listings, and measurement. Depending on scope, it may also help plan content and report on organic performance so decisions rest on data rather than assumptions.",
  },
  {
    question: "How does local SEO help hotels in Qatar?",
    answer:
      "Local SEO helps a hotel appear for searches tied to a location. It focuses on consistent name, address, and phone details, accurate maps, relevant listings, location content, and reviews. Results depend on competition and other factors, so no particular position can be promised.",
  },
  {
    question: "Can hotel SEO help increase direct website bookings?",
    answer:
      "It can support direct booking opportunities by making room pages, policies, and booking links easier to find and understand. However, price, availability, brand recognition, traveler preferences, and the booking platform also influence decisions, so a specific increase cannot be guaranteed.",
  },
  {
    question: "Why is Google Business Profile optimization important for hotels?",
    answer:
      "The profile is often one of the first things a traveler sees. Accurate details, genuine photos, correct links, and thoughtful review responses help visitors confirm the basics quickly. A complete profile does not guarantee a specific Maps position, but errors can create confusion.",
  },
  {
    question: "Is Arabic and English SEO important for hotels in Qatar?",
    answer:
      "It can be, because travelers may search in either language. Human-reviewed content, language-specific titles and metadata, and correct hreflang where separate versions exist help each audience find suitable pages. The right setup depends on the hotel's actual audience and website.",
  },
  {
    question: "How is hotel SEO performance measured?",
    answer:
      "Common measures include organic clicks, impressions, queries, landing-page performance, indexing health, engagement, enquiries, and tracked booking-related actions, using tools such as Google Search Console and Google Analytics. Rankings, traffic, enquiries, and reservations are different measures and should be read separately.",
  },
];

// ===========================================================================
// JSON-LD
// ===========================================================================

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://diglip7.com/#organization",
        name: "DigLip7 Tech Pvt Ltd",
        url: "https://diglip7.com/",
        logo: "https://diglip7.com/images/logo.png",
      },
      {
        "@type": "WebSite",
        "@id": "https://diglip7.com/#website",
        url: "https://diglip7.com/",
        name: "DigLip7",
        publisher: { "@id": "https://diglip7.com/#organization" },
      },
      {
        "@type": "WebPage",
        "@id": "https://diglip7.com/qatar/hotel-seo-services/#webpage",
        url: "https://diglip7.com/qatar/hotel-seo-services/",
        name: "Hotel SEO Services Qatar | DigLip7",
        description: metaDescription,
        inLanguage: "en",
        isPartOf: { "@id": "https://diglip7.com/#website" },
        breadcrumb: { "@id": "https://diglip7.com/qatar/hotel-seo-services/#breadcrumb" },
        primaryImageOfPage: { "@type": "ImageObject", url: ogImage },
      },
      {
        "@type": "Service",
        "@id": "https://diglip7.com/qatar/hotel-seo-services/#service",
        name: "Hotel SEO Services in Qatar",
        serviceType: "Hotel SEO",
        description:
          "SEO services for hotels and hospitality businesses in Qatar, including keyword research, on-page optimization, local SEO, technical SEO and reporting, offered subject to project scope.",
        provider: { "@id": "https://diglip7.com/#organization" },
        areaServed: { "@type": "Country", name: "Qatar" },
        url: "https://diglip7.com/qatar/hotel-seo-services/",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://diglip7.com/qatar/hotel-seo-services/#breadcrumb",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://diglip7.com/" },
          { "@type": "ListItem", position: 2, name: "Qatar", item: "https://diglip7.com/qatar/" },
          {
            "@type": "ListItem",
            position: 3,
            name: "Hotel SEO Services Qatar",
            item: "https://diglip7.com/qatar/hotel-seo-services/",
          },
        ],
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://diglip7.com/qatar/hotel-seo-services/#faq",
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

function HotelSEOServicesQatar() {
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
          titleDark="Hotel SEO Services in Qatar"
          titleGradient="to Improve Online Visibility"
          paragraphs={heroParagraphs}
          ctaLabel="Discuss Your SEO Requirements"
          image={images.hero}
        />

        <div className="bg-white">
          <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 w-full">
            {/* Why Hotels Need SEO in Qatar */}
            <div className="max-w-7xl mx-auto mb-20">
              <div className="text-center max-w-5xl mx-auto mb-12">
                <SectionHeading>Why Hotels Need SEO in Qatar</SectionHeading>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Organic search is one of the main ways travelers research accommodation. Many compare several properties before booking, and the searches they use are specific: a location, a type of stay, a facility, or the name of a hotel they have already heard about.
                </p>
                <p className="text-gray-600 text-sm sm:text-base">
                  SEO matters for hotels because of how those searches work:
                </p>
              </div>
              <LeadCards items={whyHotels} />
              <div className="mt-10 max-w-5xl mx-auto bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 border-l-4 border-[#c89d5a] shadow-sm">
                <p className="text-gray-700 leading-relaxed">
                  It is important to be realistic. SEO supports visibility and discovery, but it does not guarantee rankings, occupancy, or reservations. Search results depend on competition, search behavior, the quality of the website, and many other factors outside any agency's control.
                </p>
              </div>
            </div>

            {/* Hotel SEO Services We Provide */}
            <div className="max-w-7xl mx-auto mb-20">
              <div className="text-center max-w-5xl mx-auto mb-12">
                <SectionHeading>Hotel SEO Services We Provide</SectionHeading>
                <p className="text-gray-700 leading-relaxed">
                  DigLip7 can offer the following services for hotels, subject to project scope. The right combination depends on the property, the current website, and your priorities.
                </p>
              </div>
              <ServiceCardGrid items={services} />
              <p className="text-gray-700 leading-relaxed text-center max-w-5xl mx-auto mt-10">
                These services are offered as part of our broader{" "}
                <Link to="/qatar/seo-services/" className={inlineLink}>
                  SEO services in Qatar
                </Link>{" "}
                and are tailored to each engagement.
              </p>
            </div>

            {/* Hotel Website and Room Page Optimization */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start mb-20 bg-gray-50 rounded-3xl p-8 sm:p-12 border border-gray-100">
              <div className="lg:col-span-2 lg:sticky lg:top-28">
                <FloatingElement>
                  <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                    {renderHeadingWithAccent("Hotel Website and | Room Page Optimization")}
                  </h2>
                </FloatingElement>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A hotel's website should help a traveler understand the property quickly. Optimization is mostly about clarity and accuracy.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6 font-medium">Key elements include:</p>
                <p className="hidden lg:block text-gray-700 text-sm leading-relaxed bg-white rounded-2xl p-5 border border-teal-100 shadow-sm">
                  Copying the same description across several room pages makes each page less useful. Visitors cannot tell the rooms apart, and search engines have little reason to treat the pages as distinct. Even when two room types are similar, the page should explain what sets it apart.
                </p>
              </div>
              <div className="lg:col-span-3">
                <ul className="space-y-3">
                  {roomElements.map((el, i) => (
                    <motion.li
                      key={el.lead}
                      className="group flex items-start gap-4 bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-md hover:shadow-xl transition-shadow"
                      whileHover={{ x: 6 }}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.5 }}
                    >
                      <span className="w-10 h-10 shrink-0 rounded-xl bg-teal-50 text-teal-800 font-bold text-sm flex items-center justify-center group-hover:bg-teal-700 group-hover:text-white transition-colors">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        <strong className="text-gray-900">{el.lead}</strong> {el.text}
                      </p>
                    </motion.li>
                  ))}
                </ul>
                <p className="lg:hidden mt-6 text-gray-700 text-sm leading-relaxed bg-white rounded-2xl p-5 border border-teal-100 shadow-sm">
                  Copying the same description across several room pages makes each page less useful. Visitors cannot tell the rooms apart, and search engines have little reason to treat the pages as distinct. Even when two room types are similar, the page should explain what sets it apart.
                </p>
              </div>
            </div>

            {/* Keyword Research for Qatar's Hospitality Market */}
            <div className="max-w-7xl mx-auto mb-20">
              <div className="text-center max-w-5xl mx-auto mb-12">
                <SectionHeading className="mb-4 sm:mb-6">
                  Keyword Research for Qatar's Hospitality Market
                </SectionHeading>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Good keyword research reflects the type of hotel, its audience, its location, its facilities, and the intent behind each search. A boutique property, a business hotel, and a resort will not share the same keyword map.
                </p>
                <p className="text-gray-600 text-sm sm:text-base">Research usually looks at:</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {keywordItems.map((item, i) => (
                  <motion.div
                    key={item}
                    className="flex items-start gap-3 bg-gradient-to-br from-gray-50 to-teal-50/30 rounded-2xl p-5 border border-teal-100 shadow-sm hover:shadow-lg transition-shadow"
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i % 2) * 0.1 }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <span className="text-gray-800 text-sm sm:text-base leading-relaxed">{item}</span>
                  </motion.div>
                ))}
              </div>
              <div className="max-w-5xl mx-auto rounded-2xl border-2 border-dashed border-[#c89d5a]/60 bg-amber-50/40 p-6 sm:p-8">
                <p className="text-gray-700 leading-relaxed">
                  For illustration only, a search might look like "hotel with meeting rooms near [area]" or "family hotel with pool". These are examples of intent patterns, not verified high-volume keywords. The final keyword map should be built from actual research and the hotel's services, location, and competitive environment.
                </p>
              </div>
            </div>

            {/* Local SEO for Hotels */}
            <div className="max-w-7xl mx-auto mb-20">
              <div className="text-center max-w-5xl mx-auto mb-12">
                <SectionHeading>Local SEO for Hotels in Qatar</SectionHeading>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Local SEO helps a hotel appear for searches tied to a geographic area. For a hotel, the location is part of the product, so accuracy matters.
                </p>
                <p className="text-gray-600 text-sm sm:text-base">Important areas include:</p>
              </div>
              <LayerGrid items={localItems} />
              <p className="text-gray-700 leading-relaxed text-center max-w-5xl mx-auto mt-6">
                Local SEO should reflect where the hotel actually is. We do not recommend creating fake locations, duplicate business profiles, or pages for places where the hotel has no genuine presence.
              </p>
            </div>

            {/* Google Business Profile Optimization */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-20">
              <div className="text-center lg:text-left">
                <FloatingElement>
                  <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                    {renderHeadingWithAccent("Google Business Profile | Optimization")}
                  </h2>
                </FloatingElement>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For many travelers, the hotel's Google Business Profile is one of the first things they see. A complete and accurate profile helps them confirm basic details quickly.
                </p>
                <p className="text-gray-700 leading-relaxed bg-gradient-to-br from-gray-50 to-white rounded-2xl p-5 border-l-4 border-teal-600 shadow-sm text-left">
                  A complete profile does not guarantee a particular position in Maps. We also do not recommend adding keywords to the business name unless they are genuinely part of its real-world name.
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <ChecklistCard title="A review typically covers:" items={gbpItems} />
              </motion.div>
            </div>

            {/* Hotel Website Technical SEO */}
            <div className="max-w-7xl mx-auto relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-800 to-teal-900 p-8 sm:p-12 mb-20">
              <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#c89d5a]/20 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-16 w-72 h-72 rounded-full bg-white/10 blur-3xl pointer-events-none" />
              <div className="relative">
                <div className="text-center max-w-4xl mx-auto mb-10">
                  <FloatingElement>
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4 sm:mb-6 text-white">
                      Hotel Website <span className="text-[#c89d5a]">Technical SEO</span>
                    </h2>
                  </FloatingElement>
                  <p className="text-white/90 leading-relaxed mb-3">
                    Technical SEO makes sure search engines can access and understand the website, and that visitors can use it comfortably.
                  </p>
                  <p className="text-[#e6c88f] font-medium">An audit may cover:</p>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {technicalItems.map((item, i) => (
                    <motion.li
                      key={item}
                      className="flex items-start gap-3 bg-white/10 backdrop-blur rounded-2xl p-5 border border-white/20 hover:bg-white/20 transition-colors"
                      whileHover={{ y: -4 }}
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (i % 2) * 0.1, duration: 0.5 }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#e6c88f] shrink-0 mt-0.5" />
                      <span className="text-white/95 text-sm sm:text-base leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <p className="text-white/90 leading-relaxed text-center max-w-3xl mx-auto">
                  Recommendations should follow an audit of the actual website. We do not assume problems exist before looking.
                </p>
              </div>
            </div>

            {/* Mobile Website and Booking Experience */}
            <SpotlightRow title="Mobile Website & | Booking Experience" image={images.mobile}>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-2">
                Many travelers research accommodation on a phone, so the mobile experience affects how easily they can evaluate a hotel and take the next step.
              </p>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg font-medium">We look at:</p>
              <CheckList items={mobileItems} />
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                We do not claim that any website is mobile-friendly or fast without testing it. Findings come from actual review of the site.
              </p>
            </SpotlightRow>

            {/* Direct Booking SEO Strategy */}
            <div className="max-w-7xl mx-auto mb-20">
              <div className="text-center max-w-5xl mx-auto mb-12">
                <SectionHeading>Direct Booking SEO Strategy</SectionHeading>
                <p className="text-gray-700 leading-relaxed mb-3">
                  A hotel's official website can be more useful to visitors who are considering a direct reservation. SEO supports this by making that information easy to find and easy to trust.
                </p>
                <p className="text-gray-600 text-sm sm:text-base">
                  Elements that support the direct booking journey include:
                </p>
              </div>
              <FactorGrid items={directItems} />
              <p className="text-gray-700 leading-relaxed text-center max-w-5xl mx-auto mt-10">
                Organic SEO may support direct booking opportunities, but price, availability, brand recognition, user preferences, and booking platform functionality also influence the final decision. We do not promise lower acquisition costs, higher occupancy, or a specific number of bookings.
              </p>
            </div>

            {/* Arabic and English Hotel SEO */}
            <SpotlightRow title="Arabic and English Hotel SEO" image={images.multilingual} reverse>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-2">
                Travelers in Qatar may search in Arabic, English, or both. Multilingual SEO helps a hotel serve each audience with content that reads naturally and is easy to find.
              </p>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg font-medium">Good practice includes:</p>
              <CheckList items={languageItems} />
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                We do not assume a hotel's audience, language versions, or current setup. Recommendations depend on the actual website.
              </p>
            </SpotlightRow>

            {/* Hotel Content Marketing */}
            <div className="max-w-7xl mx-auto text-center mb-20">
              <SectionHeading>Hotel Content Marketing Strategy</SectionHeading>
              <p className="text-gray-700 max-w-5xl mx-auto mb-3 leading-relaxed">
                Useful content answers the questions travelers ask while planning a stay. It also gives the hotel's website more ways to be relevant for different searches.
              </p>
              <p className="text-gray-600 text-sm sm:text-base mb-8">
                Potential topics, depending on what the property offers, include:
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {contentTopics.map((topic, i) => (
                  <motion.div
                    key={topic}
                    className="flex items-center gap-2 bg-gradient-to-r from-teal-50 to-[#c89d5a]/10 px-4 py-2.5 rounded-full border border-teal-100 shadow-sm cursor-default"
                    whileHover={{ scale: 1.06, y: -3 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Hotel className="w-4 h-4 text-teal-700 shrink-0" />
                    <span className="text-sm font-medium text-gray-800">{topic}</span>
                  </motion.div>
                ))}
              </div>
              <p className="text-gray-700 max-w-5xl mx-auto leading-relaxed">
                The best hotel content draws on firsthand knowledge of the property, uses accurate details, and is updated regularly. We do not recommend publishing generic articles simply to target large numbers of location keywords.
              </p>
            </div>

            {/* Hotel Schema and Structured Data */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-center mb-20 bg-gradient-to-br from-gray-50 to-teal-50/30 rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-md">
              <motion.div
                className="hidden md:flex w-32 h-32 rounded-3xl bg-gradient-to-br from-teal-600 to-teal-900 items-center justify-center shadow-xl"
                animate={{ rotate: [0, 4, -4, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                <Code2 className="w-14 h-14 text-white" />
              </motion.div>
              <div>
                <FloatingElement>
                  <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                    {renderHeadingWithAccent("Hotel Schema and | Structured Data")}
                  </h2>
                </FloatingElement>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Structured data can help search engines interpret information about a hotel and its website. It should always match visible page content and verified facts.
                  </p>
                  <p>
                    Depending on the site, relevant types may include Organization, WebSite, WebPage, Service, and BreadcrumbList. Hotel-specific types such as Hotel are appropriate only on hotel-owned property pages where the markup accurately represents the property. FAQPage markup should be used only when the corresponding questions and answers are visible on the page and Google's requirements are met.
                  </p>
                  <p>
                    We never fabricate an address, star rating, price, availability, review, or amenity. Markup should be validated before deployment, and it does not guarantee rich results.
                  </p>
                </div>
              </div>
            </div>

            {/* Process */}
            <ProcessSection
              title="Our Hotel SEO | Process"
              intro="The exact approach depends on the initial audit and the hotel's website, and we do not promise fixed timelines or outcomes. A typical process looks like this:"
              steps={processSteps}
            />

            {/* SEO Reporting and Performance Measurement */}
            <div className="max-w-7xl mx-auto mb-20">
              <div className="text-center max-w-5xl mx-auto mb-12">
                <SectionHeading>SEO Reporting & Performance Measurement</SectionHeading>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Progress is best judged with suitable tools and available data, within the agreed scope. Depending on setup, reporting may include:
                </p>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                {reportingItems.map((item, i) => (
                  <motion.li
                    key={item}
                    className="group flex items-start gap-4 bg-white rounded-2xl p-5 border border-gray-100 shadow-md hover:shadow-xl hover:border-teal-200 transition-all"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i % 3) * 0.08, duration: 0.5 }}
                  >
                    <span className="w-10 h-10 shrink-0 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center group-hover:bg-teal-700 group-hover:text-white transition-colors">
                      <BarChart3 className="w-5 h-5" />
                    </span>
                    <span className="text-gray-800 text-sm sm:text-base leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="max-w-5xl mx-auto bg-gray-50 rounded-3xl p-8 border border-gray-100">
                <p className="text-gray-700 leading-relaxed">
                  These measures tell different stories. Rankings show where pages appear, traffic shows visits, enquiries show interest, and completed reservations show business outcomes. One does not automatically lead to the next. Tools such as Google Search Console and Google Analytics may be used where appropriate.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <FaqSection title="Frequently Asked Questions" faqs={faqs} />

          {/* CTA */}
          <CtaSection
            headingLead="Discuss Your Hotel SEO Goals"
            headingAccent="with DigLip7"
            text={
              <>
                Every property has a different audience, location, website, and set of priorities. An initial discussion can help identify which SEO priorities make sense for your hotel, resort, or hospitality business. You can also explore our wider{" "}
                <Link to="/qatar/" className="underline font-semibold text-white hover:text-yellow-200 transition-colors">
                  Qatar services
                </Link>
                .
              </>
            }
            ctaLabel="Discuss Your SEO Requirements"
          />
        </div>
      </main>
    </div>
  );
}

export default HotelSEOServicesQatar;