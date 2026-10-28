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
  Cpu,
  Clock,
  Layers,
  ShieldCheck,
  FileText,
  BarChart3,
  Settings,
  Sparkles,
  Users,
  Eye,
  Globe,
  CheckCircle2,
  Target,
  Link2,
} from "lucide-react";

// ===========================================================================
// Shared building blocks (same patterns as the existing site pages)
// ===========================================================================

const inlineLink =
  "text-teal-800 font-semibold underline hover:text-[#c89d5a] transition-colors";

// Split "Label: rest" at the first colon
const splitLead = (text) => {
  const i = text.indexOf(": ");
  return i > -1 && i < 80 ? [text.slice(0, i + 1), text.slice(i + 2)] : [null, text];
};

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
const LandingHero = ({
  breadcrumb,
  titleDark,
  titleGradient,
  paragraphs,
  ctaLabel,
  afterParagraphs = [],
  image,
}) => {
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
                className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 mt-4 mb-3"
              >
                {p}
              </p>
            ))}

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6">
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

            {afterParagraphs.map((p, i) => (
              <p
                key={i}
                className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 mt-6"
              >
                {p}
              </p>
            ))}
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

// Process (blue line + icon circles) - 4 columns for 8 stages
const ProcessSection = ({ title, intro, steps }) => (
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

/* [Extended Image Div Fix] - Reusable image helper with responsive container height & graceful error fallback */
const Img = ({
  image,
  className = "",
  containerClassName = "w-full aspect-[16/9]",
  fallbackIcon: FallbackIcon = BarChart3,
}) => {
  const [hasError, setHasError] = useState(false);
  const fileName = image?.src ? image.src.split("/").pop() : "";

  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl bg-slate-100 shadow-xl border border-gray-100 flex items-center justify-center ${containerClassName}`}
    >
      {!hasError ? (
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading="lazy"
          decoding="async"
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02] ${className}`}
        />
      ) : (
        <div className="w-full h-full p-6 sm:p-8 flex flex-col items-center justify-center text-center bg-gradient-to-br from-slate-50 via-teal-50/40 to-slate-100 border-2 border-dashed border-teal-200/80 rounded-2xl select-none">
          <div className="w-14 h-14 rounded-2xl bg-teal-100/90 text-teal-800 flex items-center justify-center mb-3 shadow-xs">
            <FallbackIcon className="w-7 h-7" />
          </div>
          <p className="text-xs sm:text-sm font-bold text-gray-800 max-w-sm mb-1.5 leading-snug">
            {image.alt}
          </p>
          <span className="text-[11px] font-mono text-teal-800 bg-teal-100/70 px-2.5 py-0.5 rounded-full border border-teal-300/50">
            {fileName}
          </span>
        </div>
      )}
    </div>
  );
};

// Image + text row (heading level configurable)
const SpotlightRow = ({ title, image, reverse, as: Tag = "h2", children }) => (
  <div
    className={`max-w-7xl mx-auto flex flex-col ${
      reverse ? "md:flex-row-reverse bg-white shadow-sm" : "md:flex-row bg-gray-50"
    } items-center gap-10 lg:gap-14 mb-16 rounded-3xl p-8 sm:p-12 border border-gray-100`}
  >
    <motion.div
      className="w-full md:w-1/2 flex flex-col items-center"
      initial={{ opacity: 0, x: reverse ? 40 : -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Card3D className="w-full max-w-lg">
        {/* [Extended Image Div Fix] Standardized height preventing collapse */}
        <Img image={image} containerClassName="w-full h-[280px] sm:h-[340px] lg:h-[380px]" />
      </Card3D>
    </motion.div>
    <div className="flex-1 text-center md:text-left">
      <FloatingElement>
        <Tag className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{title}</Tag>
      </FloatingElement>
      <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">{children}</div>
    </div>
  </div>
);

// Service card grid (h3 headings)
const ServiceCardGrid = ({ items }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-left max-w-7xl mx-auto">
    {items.map((service, index) => (
      <motion.div
        key={service.title}
        className="group relative bg-gray-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all cursor-pointer border border-gray-100 overflow-hidden"
        whileHover={{ scale: 1.03 }}
        animate={{ scale: [1, 1.01, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: (index % 3) * 0.4 }}
      >
        <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal-600 to-[#c89d5a] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
        <div className="flex justify-center mb-4">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-teal-100 to-[#c89d5a]/20">
            <service.icon className="text-teal-600 w-8 h-8" />
          </div>
        </div>
        <h3 className="font-semibold text-gray-900 text-lg mb-2 text-center">{service.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{service.text}</p>
      </motion.div>
    ))}
  </div>
);

// Services in document order: spotlight rows for items with images, card grids for the rest
const ServicesBlock = ({ services }) => {
  const out = [];
  let pending = [];
  const flush = (key) => {
    if (!pending.length) return;
    out.push(
      <div key={`grid-${key}`} className="mb-16">
        <ServiceCardGrid items={pending} />
      </div>
    );
    pending = [];
  };

  let featured = 0;
  services.forEach((s, idx) => {
    if (s.image) {
      flush(idx);
      const reverse = featured % 2 === 1;
      featured += 1;
      out.push(
        <SpotlightRow key={s.title} title={s.title} image={s.image} reverse={reverse} as="h3">
          <p>{s.text}</p>
        </SpotlightRow>
      );
    } else {
      pending.push(s);
    }
  });
  flush("end");
  return <>{out}</>;
};

// Generic animated data table (real <table> with header cells)
const DataTable = ({ headers, rows, headClass }) => (
  <motion.div
    className="overflow-x-auto rounded-2xl border border-gray-200 shadow-lg"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
  >
    <table className="w-full min-w-[680px] text-left text-sm sm:text-base border-collapse">
      <thead>
        <tr className={headClass}>
          {headers.map((h) => (
            <th key={h} scope="col" className="p-4 sm:p-5 font-semibold">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <motion.tr
            key={row[0]}
            className={`${i % 2 ? "bg-gray-50/70" : "bg-white"} hover:bg-teal-50/70 transition-colors`}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
          >
            {row.map((cell, j) =>
              j === 0 ? (
                <th
                  key={j}
                  scope="row"
                  className="p-4 sm:p-5 text-teal-900 font-bold border-t border-gray-100 align-top"
                >
                  <span className="inline-flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#c89d5a]" />
                    {cell}
                  </span>
                </th>
              ) : (
                <td key={j} className="p-4 sm:p-5 text-gray-700 border-t border-gray-100 align-top">
                  {cell}
                </td>
              )
            )}
          </motion.tr>
        ))}
      </tbody>
    </table>
  </motion.div>
);

// Decorative animated gauge (no text)
const GaugeArt = () => (
  <div aria-hidden="true" className="w-full max-w-xs mx-auto">
    <svg viewBox="0 0 200 120" className="w-full">
      <path d="M20 100 A80 80 0 0 1 180 100" fill="none" stroke="#ccfbf1" strokeWidth="16" strokeLinecap="round" />
      <motion.path
        d="M20 100 A80 80 0 0 1 180 100"
        fill="none"
        stroke="url(#gaugeGrad)"
        strokeWidth="16"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 0.72 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      />
      <defs>
        <linearGradient id="gaugeGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0f766e" />
          <stop offset="100%" stopColor="#c89d5a" />
        </linearGradient>
      </defs>
      <motion.g
        style={{ originX: "100px", originY: "100px" }}
        initial={{ rotate: -80 }}
        whileInView={{ rotate: 30 }}
        viewport={{ once: true }}
        transition={{ duration: 2, type: "spring", stiffness: 40 }}
      >
        <line x1="100" y1="100" x2="100" y2="38" stroke="#115e59" strokeWidth="4" strokeLinecap="round" />
      </motion.g>
      <circle cx="100" cy="100" r="9" fill="#115e59" />
    </svg>
  </div>
);

// ===========================================================================
// Page constants
// ===========================================================================

const pageUrl = "https://diglip7.com/india/manufacturing-seo-services/";
const metaTitle = "Manufacturing SEO Services India | DigLip7";
const metaDescription =
  "Improve your industrial website's visibility with Manufacturing SEO Services India from DigLip7. Explore product SEO, technical optimization and B2B lead generation.";
const ogImage = "https://diglip7.com/images/manufacturing-seo-services-india-hero.webp";

const breadcrumbTrail = [
  { label: "Home", href: "/" },
  { label: "SEO Services India", href: "/india/seo-services" },
  { label: "Manufacturing SEO Services India", href: "/india/manufacturing-seo-services/" },
];

const images = {
  hero: {
    src: "/images/manufacturing-seo-services-india-hero.webp",
    alt: "Precision industrial machinery with abstract digital discovery pathways",
    width: 1920,
    height: 1080,
  },
  keyword: {
    src: "/images/industrial-keyword-research-engineering-models.webp",
    alt: "Engineering models surrounded by abstract clusters of connected data points",
    width: 1920,
    height: 1080,
  },
  product: {
    src: "/images/product-seo-industrial-components-specification-panels.webp",
    alt: "Industrial components beside abstract structured specification panels",
    width: 1920,
    height: 1080,
  },
  technical: {
    src: "/images/technical-seo-website-architecture-connected-pages.webp",
    alt: "Connected website architecture shown as a layered network of pages",
    width: 1920,
    height: 1080,
  },
  buyers: {
    src: "/images/b2b-procurement-professional-evaluating-components.webp",
    alt: "Procurement professional evaluating technical components at a desk",
    width: 1920,
    height: 1080,
  },
  international: {
    src: "/images/international-manufacturing-global-digital-connections.webp",
    alt: "Global network of digital connections linking manufacturing sites",
    width: 1920,
    height: 1080,
  },
  results: {
    src: "/images/industrial-lead-generation-analytics-enquiry-pathways.webp",
    alt: "Abstract enquiry pathways converging into a single qualified lead",
    width: 1920,
    height: 1080,
  },
};

// ===========================================================================
// Content data (verbatim from the content package)
// ===========================================================================

const whyParas = [
  { icon: Search, text: "Industrial buying rarely starts with a sales call. Before an engineer, purchase manager or project head contacts a supplier, they usually search: for a component that meets a material standard, a machine suited to an application, or a manufacturer that can handle a custom job. If your website does not answer those searches clearly, buyers move on to suppliers whose information is easier to find and easier to trust." },
  { icon: Cpu, text: "Manufacturing searches are technical. Buyers use part names, material grades, dimensions, standards and application terms rather than broad marketing phrases. They compare several suppliers, share shortlists with colleagues and often return to a site more than once before sending an RFQ. A page with accurate specifications, capabilities and supported industries can serve every one of those visits." },
  { icon: Clock, text: "Sales cycles are also long. A buyer researching a custom component may spend weeks or months validating options, and several people may be involved: design, quality, purchase and finance. SEO supports each stage by making product information, capability details, catalogues and enquiry routes discoverable when each person needs them." },
  { icon: Layers, text: "SEO also builds an asset you own. Trade-portal listings, referrals and exhibitions remain useful, but your website keeps presenting your products to relevant buyers between those channels. Results depend on competition, website quality and target markets, and no honest agency can promise a ranking date. A well-structured, accurate site simply gives your business a fair chance of being considered." },
];

const whyCardStyles = [
  "bg-white text-gray-700 border-gray-100",
  "bg-teal-50 text-gray-700 border-teal-100",
  "bg-amber-50 text-gray-700 border-amber-100",
  "bg-gradient-to-br from-teal-700 to-teal-900 text-white border-transparent",
];

const services = [
  {
    icon: Search,
    title: "Industrial Keyword Research",
    text: "We study how buyers describe products, materials, processes and applications, then group searches by intent and map each group to the page that should answer it. Illustrative examples, not verified volumes, include “CNC machining company in India” and “stainless steel component manufacturer”.",
    image: images.keyword,
  },
  {
    icon: Cpu,
    title: "Technical SEO and Website Architecture",
    text: "We review crawlability, indexation, site speed, mobile usability, URL structure, internal links and duplicate content. A logical hierarchy of categories, products, capabilities and applications helps search engines and buyers navigate large catalogues.",
    image: images.technical,
  },
  {
    icon: FileText,
    title: "Product and Category Page Optimization",
    text: "We refine titles, headings, descriptions, specification tables, images and calls to action so each page reflects what you actually make. Category pages are structured to support comparison, filtering and clear routes to an RFQ.",
    image: images.product,
  },
  {
    icon: Settings,
    title: "Manufacturing Capability Pages",
    text: "Buyers often search for a process rather than a product. Capability pages explain equipment, materials, tolerances you can genuinely hold, batch sizes and quality processes, using details your team can verify.",
  },
  {
    icon: Layers,
    title: "Industry and Application Pages",
    text: "Where you serve distinct sectors or use cases, dedicated pages show how your products fit each requirement. We recommend these only when there is real, specific content to support them.",
  },
  {
    icon: FileText,
    title: "Technical Specifications and Catalogue Optimization",
    text: "Specifications are central to industrial search. We make them readable as HTML, make PDF catalogues and datasheets discoverable and keep naming, units and values consistent across the site.",
  },
  {
    icon: Target,
    title: "Local SEO for Eligible Manufacturing Businesses",
    text: "Where you have a staffed location that buyers can visit or where local supplier searches matter, we optimize Google Business Profile details and location content. This applies only to businesses that meet the eligibility guidelines.",
  },
  {
    icon: Globe,
    title: "International SEO for Exporters",
    text: "We help exporters structure content for target countries, address export-related buyer questions and, where multiple languages or regions are used, implement hreflang and regional targeting correctly.",
    image: images.international,
  },
  {
    icon: Users,
    title: "B2B Content Marketing",
    text: "We plan guides, comparisons, selection checklists and application articles that answer real buyer questions, developed with input from your engineering and sales teams so content stays accurate.",
  },
  {
    icon: Link2,
    title: "Ethical Authority Building and Digital PR",
    text: "We pursue relevant mentions, industry directories, associations and publications through legitimate outreach. We do not buy links or use schemes that conflict with search engine guidelines.",
  },
  {
    icon: BarChart3,
    title: "RFQ and Conversion Optimization",
    text: "We review enquiry forms, calls to action, file upload options, contact routes and thank-you pages, and set up tracking so you can see which pages produce RFQs.",
  },
];

const sectorRows = [
  ["Components", "Part type, material, standard, dimensions", "Structured specification content, clear category hierarchy, downloadable drawings or datasheets where available"],
  ["Machinery", "Machine type, capacity, application", "Model and series pages, application content, technical documentation, demo or enquiry routes"],
  ["Fabrication", "Process, material, industry served", "Process capability pages, equipment and capacity details, project examples shared with permission"],
  ["OEMs", "Part type, volume, standards, OEM supplier", "Quality and process content, supplier-qualification information, application and industry pages"],
  ["Contract manufacturing", "Service type, capacity, compliance", "Capability pages, process descriptions, quality systems you actually hold, onboarding information"],
  ["Industrial supplies", "Product, brand, availability, location", "Catalogue structure, consolidation of duplicate listings, crawlable filters, location pages where relevant"],
  ["Exporters", "Product plus country or export terms", "International structure, export-readiness content, language and market targeting"],
];

const buyerRows = [
  ["Product", "Stainless steel component manufacturer", "Clear product range, materials, finishes and an RFQ route"],
  ["Specification", "[material grade] [part type] [standard]", "Accurate, consistent specification data in readable text"],
  ["Capability", "CNC machining company in India", "Equipment, processes, materials, quality checks and capacity"],
  ["Application", "Industrial pump manufacturer for [specific application]", "Application-specific selection guidance and relevant products"],
  ["Supplier", "OEM component manufacturer in India", "Company profile, process overview, certifications you hold and contact details"],
  ["Location", "Custom metal fabrication services near [city]", "Location details and local relevance, where eligible"],
  ["Export intent", "[product] exporter from India", "Export markets served, logistics information and international enquiry options"],
];

const processSteps = [
  { icon: Search, title: "Discovery", description: "We learn your products, buyers, markets, competitors and sales process, and agree what counts as a qualified enquiry." },
  { icon: ShieldCheck, title: "Audit", description: "We assess technical health, content, catalogue structure, existing rankings and enquiry tracking." },
  { icon: Target, title: "Keyword mapping", description: "We group industrial searches by intent and assign each group to an existing or planned page." },
  { icon: Cpu, title: "Technical improvements", description: "We prioritize fixes for crawling, indexation, speed, mobile use, structured data and site structure." },
  { icon: FileText, title: "Content", description: "We plan and write product, capability, application and guide content with input from your technical team." },
  { icon: Settings, title: "Implementation", description: "Changes are applied with your developers or CMS team and checked before release." },
  { icon: BarChart3, title: "Tracking", description: "We configure analytics, search reporting and RFQ conversion tracking." },
  { icon: Eye, title: "Refinement", description: "We review performance, buyer feedback and enquiry quality, then adjust priorities." },
];

const resultsItems = [
  "Organic visibility: impressions, clicks and ranking trends for mapped keyword groups.",
  "Product-page visits: organic sessions to product, category and capability pages.",
  "Catalogue downloads: brochure, datasheet and catalogue requests.",
  "RFQs: form submissions, calls, email and messaging enquiries attributed to organic search.",
  "Qualified enquiries: enquiries that match your products, volumes and markets, as judged by your sales team.",
  "Sales opportunities: pipeline and orders connected to organic enquiries, where your CRM allows attribution.",
];

const paceItems = [
  "Current website health, indexation and content quality.",
  "Competition for your target products and markets.",
  "Catalogue size and how much accurate content is available.",
  "How quickly recommendations are implemented.",
  "Search engine changes outside anyone’s control.",
];

const paidRows = [
  ["Speed", "Gradual; builds over time", "Can start generating visits soon after launch"],
  ["Cost pattern", "Ongoing effort and content investment", "Ongoing media spend plus management"],
  ["Durability", "Pages can keep attracting visits without per-click fees", "Visibility generally stops when spend stops"],
  ["Control", "Influence, not control, over rankings", "Direct control of targeting, budget and messaging"],
  ["Best suited to", "Evergreen product, capability and application searches", "Launches, short-term campaigns and testing demand"],
];

const mistakes = [
  "Duplicate pages: near-identical product or location pages compete with each other and weaken the site.",
  "Inaccurate specifications: wrong or inconsistent values damage buyer trust and can lead to unsuitable enquiries.",
  "Thin content: pages with a product name and a photo rarely answer a technical buyer’s questions.",
  "Inaccessible catalogues: catalogues locked in image-only files or hidden behind barriers can be hard for search engines and buyers to use.",
  "Weak enquiry tracking: without tracking, you cannot see which pages generate RFQs or which enquiries are qualified.",
];

const whyDiglipItems = [
  "Buyer-first planning: we start from how your buyers search and what they need to decide.",
  "Technical and content together: site structure, product data and content are handled as one plan.",
  "Subject-matter input: we work with your engineers and sales team to keep technical content accurate.",
  "Clear reporting: we focus reporting on enquiries and opportunities, not only rankings.",
  "Honest expectations: we do not guarantee rankings or invent results, and we explain trade-offs openly.",
];

const faqs = [
  {
    question: "What are manufacturing SEO services?",
    answer:
      "Manufacturing SEO services improve how a manufacturer’s website appears in relevant searches. They typically cover keyword research, technical fixes, product and capability pages, content, authority building and enquiry tracking.",
  },
  {
    question: "Why do manufacturing companies need SEO?",
    answer:
      "Industrial buyers research suppliers online before making contact. SEO helps your products, capabilities and specifications appear during that research, supporting enquiries alongside referrals, trade portals and exhibitions.",
  },
  {
    question: "How much do manufacturing SEO services cost in India?",
    answer:
      "Fees depend on website size, product catalogue complexity, competition, target markets, content requirements and scope. We recommend a short discovery and audit so a proposal reflects your actual needs rather than a generic price.",
  },
  {
    question: "How long does manufacturing SEO take?",
    answer:
      "It varies. Technical fixes may show effects sooner, while competitive rankings and enquiry growth usually take longer. No one can honestly guarantee a ranking date.",
  },
  {
    question: "What is industrial SEO?",
    answer:
      "Industrial SEO is search optimization for industrial businesses such as manufacturers, suppliers and engineering firms. It addresses technical search terms, specification-heavy pages, long buying cycles and B2B enquiry paths.",
  },
  {
    question: "Can SEO generate qualified RFQs?",
    answer:
      "It can support them. When pages match real buyer searches and offer clear enquiry options, visitors with genuine requirements are more likely to get in touch. Results are not guaranteed and depend on competition and website quality.",
  },
  {
    question: "How should manufacturers optimize product pages?",
    answer:
      "Use a clear, descriptive title and heading, accurate specifications in readable text, applications, materials, images with useful alt text, relevant downloads and a visible RFQ option. Avoid copying manufacturer descriptions across many pages.",
  },
  {
    question: "Can SEO help Indian manufacturers reach international buyers?",
    answer:
      "Yes, it can help overseas buyers discover your products when content targets their searches and markets. Exporters may need clear export information and, for multiple languages or regions, correct international targeting.",
  },
  {
    question: "What is B2B manufacturing SEO?",
    answer:
      "B2B manufacturing SEO targets business buyers such as engineers and procurement teams. It focuses on technical queries, supplier evaluation and RFQs rather than consumer purchases.",
  },
  {
    question: "Should every product have a separate page?",
    answer:
      "Not necessarily. Give a product its own page when it has distinct specifications, demand and enough useful content. Minor variants are often better grouped on one page to avoid thin or duplicate content.",
  },
  {
    question: "How can manufacturers measure SEO performance?",
    answer:
      "Track organic visibility, product-page visits, catalogue downloads, RFQs and qualified enquiries. Where your CRM supports it, connect these to sales opportunities.",
  },
  {
    question: "Is technical SEO important for manufacturing websites?",
    answer:
      "Yes. Large catalogues, filters, PDFs and many similar pages can create crawling, indexation and duplication problems. Sound technical foundations help search engines find and understand your products.",
  },
];

// ===========================================================================
// JSON-LD (WebPage, BreadcrumbList, Service + sitewide Organization/WebSite)
// FAQPage markup is intentionally not included (per the SEO documentation).
// ===========================================================================

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://diglip7.com/india/manufacturing-seo-services/#webpage",
        url: "https://diglip7.com/india/manufacturing-seo-services/",
        name: "Manufacturing SEO Services India | DigLip7",
        description: metaDescription,
        inLanguage: "en-IN",
        isPartOf: { "@id": "https://diglip7.com/#website" },
        about: { "@id": "https://diglip7.com/india/manufacturing-seo-services/#service" },
        breadcrumb: { "@id": "https://diglip7.com/india/manufacturing-seo-services/#breadcrumb" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://diglip7.com/india/manufacturing-seo-services/#breadcrumb",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://diglip7.com/" },
          {
            "@type": "ListItem",
            position: 2,
            name: "SEO Services India",
            item: "https://diglip7.com/india/seo-services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Manufacturing SEO Services India",
            item: "https://diglip7.com/india/manufacturing-seo-services/",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://diglip7.com/india/manufacturing-seo-services/#service",
        name: "Manufacturing SEO Services India",
        serviceType: "Manufacturing SEO",
        url: "https://diglip7.com/india/manufacturing-seo-services/",
        description:
          "SEO services for Indian manufacturers, industrial suppliers, OEMs, engineering companies, contract manufacturers and exporters, covering industrial keyword research, technical SEO, product and capability page optimization, international SEO and RFQ conversion tracking.",
        provider: { "@id": "https://diglip7.com/#organization" },
        areaServed: { "@type": "Country", name: "India" },
        audience: {
          "@type": "BusinessAudience",
          audienceType:
            "Manufacturers, industrial suppliers, OEMs, engineering companies, contract manufacturers and exporters",
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://diglip7.com/#organization",
        name: "DigLip7",
        legalName: "DigLip7 Tech Private Limited",
        url: "https://diglip7.com/",
      },
      {
        "@type": "WebSite",
        "@id": "https://diglip7.com/#website",
        url: "https://diglip7.com/",
        name: "DigLip7",
        inLanguage: "en-IN",
        publisher: { "@id": "https://diglip7.com/#organization" },
      },
    ],
  },
];

// ===========================================================================
// Page
// ===========================================================================

function IndiaManufacturingSEOServices() {
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
          titleDark="Manufacturing SEO Services India"
          titleGradient="for B2B Growth"
          paragraphs={[
            "DigLip7 helps Indian manufacturers, industrial suppliers, OEMs and exporters get found by buyers who are already searching for products, specifications and capable suppliers, and turns that visibility into qualified enquiries and requests for quotation (RFQs).",
          ]}
          ctaLabel="Discuss Your Manufacturing SEO Strategy"
          afterParagraphs={[
            "Our Manufacturing SEO Services India focus on technical product discovery, relevant industrial search intent and sustainable organic visibility, not traffic for its own sake.",
          ]}
          image={images.hero}
        />

        <div className="bg-white">
          <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 w-full">
            {/* Why Manufacturing Businesses Need SEO */}
            <div className="max-w-7xl mx-auto mb-24">
              <div className="text-center mb-12">
                <SectionHeading>Why Manufacturing Businesses Need SEO</SectionHeading>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {whyParas.map((w, i) => (
                  <motion.div
                    key={i}
                    className={`relative overflow-hidden rounded-3xl p-8 sm:p-10 shadow-xl border ${whyCardStyles[i]} flex flex-col justify-between`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                  >
                    <span
                      aria-hidden="true"
                      className={`absolute -top-4 right-4 text-8xl font-extrabold select-none ${
                        i === 3 ? "text-white/10" : "text-teal-700/10"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <div className="relative flex items-start gap-5">
                      <span
                        className={`w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center shadow-sm ${
                          i === 3 ? "bg-white/20 text-white" : "bg-teal-700 text-white"
                        }`}
                      >
                        <w.icon className="w-6 h-6" />
                      </span>
                      <p className="leading-relaxed text-base sm:text-lg">{w.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* What Is Manufacturing SEO? */}
            <div className="max-w-7xl mx-auto mb-24">
              <div className="text-center mb-10">
                <SectionHeading color="text-teal-700">What Is Manufacturing SEO?</SectionHeading>
              </div>
              <motion.div
                className="relative rounded-3xl p-[3px] bg-gradient-to-r from-teal-600 via-[#c89d5a] to-teal-600 shadow-2xl"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="rounded-[calc(1.5rem-2px)] bg-white p-8 sm:p-12 lg:p-16">
                  <p className="text-gray-800 text-lg sm:text-2xl font-medium leading-relaxed text-center max-w-5xl mx-auto">
                    Manufacturing SEO is the practice of improving how a manufacturer’s website appears in search results for product, specification, capability and supplier searches. It combines technical optimization, accurate product and category pages, application content and enquiry tracking, so engineers and procurement teams can find relevant products, assess suppliers with confidence and send qualified RFQs.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Our Manufacturing SEO Services */}
            <div className="max-w-7xl mx-auto mb-12">
              <div className="text-center max-w-5xl mx-auto mb-12">
                <SectionHeading>Our Manufacturing SEO Services</SectionHeading>
                <p className="text-gray-700 leading-relaxed">
                  Our Manufacturing SEO Services India are scoped to your catalogue, markets and competition rather than sold as a fixed package. Our{" "}
                  <Link to="/india/seo-services" className={inlineLink}>
                    SEO services
                  </Link>{" "}
                  for industrial businesses can include the following.
                </p>
              </div>
            </div>
            <ServicesBlock services={services} />

            {/* SEO for Different Manufacturing Sectors */}
            <div className="max-w-7xl mx-auto mb-24">
              <div className="text-center max-w-5xl mx-auto mb-10">
                <SectionHeading color="text-teal-700">SEO for Different Manufacturing Sectors</SectionHeading>
                <p className="text-gray-700 leading-relaxed">
                  Search behavior differs between sectors, so priorities differ too.
                </p>
              </div>
              <DataTable
                headers={["Sector", "Typical search focus", "SEO priorities"]}
                rows={sectorRows}
                headClass="bg-gradient-to-r from-teal-800 to-teal-900 text-white"
              />
              <p className="text-gray-700 leading-relaxed text-center max-w-4xl mx-auto mt-8">
                These sectors often overlap. A contract manufacturer may also export, and a machinery builder may supply OEMs. During discovery we decide which pages deserve priority based on where your most valuable enquiries are likely to come from, not on a template.
              </p>
            </div>

            {/* How Industrial Buyers Search */}
            <div className="max-w-7xl mx-auto mb-24">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-10">
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <Card3D>
                    {/* [Extended Image Div Fix] Standardized height */}
                    <Img image={images.buyers} containerClassName="w-full h-[280px] sm:h-[340px] lg:h-[380px]" fallbackIcon={Users} />
                  </Card3D>
                </motion.div>
                <div>
                  <FloatingElement>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight">
                      How Industrial Buyers Search
                    </h2>
                  </FloatingElement>
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg border-l-4 border-teal-600 pl-5">
                    Industrial buyers move between several types of search as they research. The examples below are illustrative; they are not verified high-volume keywords.
                  </p>
                </div>
              </div>
              <DataTable
                headers={["Search type", "Illustrative example", "What the page should provide"]}
                rows={buyerRows}
                headClass="bg-gradient-to-r from-teal-700 to-[#c89d5a] text-white"
              />
              <p className="text-gray-700 leading-relaxed text-center max-w-4xl mx-auto mt-8">
                We map each keyword group to the most relevant page. Product, capability, application or specification pages are published only when you have accurate information and meaningful content for them. We avoid mass-producing near-identical pages, which can dilute quality and confuse search engines.
              </p>
            </div>

            {/* Our SEO Process */}
            <ProcessSection
              title="Our SEO Process"
              intro="Our process is deliberately practical. Each stage produces something your team can review, question and approve, so technical and commercial knowledge from your side shapes the work throughout."
              steps={processSteps}
            />

            {/* Measuring Results */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start mb-24 bg-gray-50 rounded-3xl p-8 sm:p-12 border border-gray-100">
              <motion.div
                className="lg:sticky lg:top-28"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Card3D>
                  {/* [Extended Image Div Fix] Height matches the 6 business outcome cards on the right */}
                  <Img
                    image={images.results}
                    containerClassName="w-full h-[460px] sm:h-[540px] lg:h-[660px] xl:h-[720px]"
                    fallbackIcon={BarChart3}
                  />
                </Card3D>
              </motion.div>
              <div>
                <FloatingElement>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Measuring Results</h2>
                </FloatingElement>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Rankings alone do not tell you whether SEO is working. We report on measures connected to business outcomes.
                </p>
                <ul className="space-y-3">
                  {resultsItems.map((item, i) => {
                    const [label, rest] = splitLead(item);
                    return (
                      <motion.li
                        key={label}
                        className="bg-white rounded-2xl p-5 border border-gray-100 border-l-4 border-l-teal-600 shadow-sm hover:shadow-lg transition-shadow"
                        style={{ marginLeft: i * 10 }}
                        whileHover={{ x: 6 }}
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 }}
                      >
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                          <strong className="text-gray-900">{label}</strong> {rest}
                        </p>
                      </motion.li>
                    );
                  })}
                </ul>
                <p className="text-gray-700 leading-relaxed mt-6">
                  Attribution depends on your tracking setup. Offline conversations and long sales cycles can make some outcomes difficult to link back to search.
                </p>
              </div>
            </div>

            {/* How Long Does Manufacturing SEO Take? */}
            <div className="max-w-7xl mx-auto mb-24">
              <div className="text-center mb-10">
                <SectionHeading color="text-teal-700">How Long Does Manufacturing SEO Take?</SectionHeading>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <motion.div
                  className="lg:col-span-5 bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-teal-100 h-full flex flex-col justify-between"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  <p className="text-gray-700 leading-relaxed mb-6 text-base sm:text-lg">
                    There is no fixed timeline, and no one can guarantee a ranking date. Technical fixes and improved page clarity may be reflected sooner, while competitive product keywords, new content and authority usually take longer to mature. In many cases meaningful change builds over several months rather than weeks.
                  </p>
                  <p className="text-teal-900 font-bold text-lg border-l-4 border-teal-600 pl-3">The pace depends on:</p>
                </motion.div>
                <div className="lg:col-span-2 flex justify-center py-4">
                  <GaugeArt />
                </div>
                <motion.ul
                  className="lg:col-span-5 space-y-3.5"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  {paceItems.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-3.5 bg-gradient-to-br from-gray-50 to-teal-50/40 rounded-2xl p-4 sm:p-5 border border-teal-100 hover:shadow-md transition-shadow"
                    >
                      <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                      <span className="text-gray-800 text-sm sm:text-base font-medium">{p}</span>
                    </li>
                  ))}
                </motion.ul>
              </div>
            </div>

            {/* Manufacturing SEO vs Paid Advertising */}
            <div className="max-w-7xl mx-auto mb-24">
              <div className="text-center max-w-4xl mx-auto mb-10">
                <SectionHeading>Manufacturing SEO vs Paid Advertising</SectionHeading>
                <p className="text-gray-700 leading-relaxed">
                  SEO and paid advertising serve different purposes, and many manufacturers use both.
                </p>
              </div>
              <DataTable
                headers={["Factor", "Manufacturing SEO", "Paid advertising"]}
                rows={paidRows}
                headClass="bg-gradient-to-r from-teal-800 via-teal-700 to-[#c89d5a] text-white"
              />
              <p className="text-gray-700 leading-relaxed text-center max-w-4xl mx-auto mt-8">
                A balanced approach can use paid campaigns for immediate demand while SEO builds lasting visibility. If that suits your goals, explore our{" "}
                <Link to="/PPC-Advertising" className={inlineLink}>
                  PPC advertising services
                </Link>
                .
              </p>
            </div>

            {/* Common Manufacturing SEO Mistakes */}
            <div className="max-w-7xl mx-auto mb-24">
              <div className="text-center mb-12">
                <SectionHeading>Common Manufacturing SEO Mistakes</SectionHeading>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {mistakes.map((m, i) => {
                  const [label, rest] = splitLead(m);
                  return (
                    <motion.div
                      key={label}
                      className="group relative overflow-hidden rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-amber-50/70 via-white to-amber-50/30 border border-amber-200/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      <span
                        aria-hidden="true"
                        className="absolute -top-3 -right-2 text-7xl font-extrabold text-amber-200/40 select-none group-hover:text-amber-300/60 transition-colors"
                      >
                        0{i + 1}
                      </span>
                      <div className="relative">
                        <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4 shadow-xs group-hover:bg-amber-600 group-hover:text-white transition-colors">
                          <AlertTriangle className="w-6 h-6" />
                        </div>
                        <h3 className="text-gray-900 font-bold text-lg mb-2">{label}</h3>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{rest}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              <p className="text-gray-700 leading-relaxed text-center max-w-4xl mx-auto mt-10">
                Most of these problems are fixable. A technical and content audit usually shows which ones affect your site and which should be addressed first.
              </p>
            </div>

            {/* Why Consider DigLip7 */}
            <div className="max-w-7xl mx-auto relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-800 to-teal-900 p-8 sm:p-12 mb-12">
              <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#c89d5a]/20 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-16 w-72 h-72 rounded-full bg-white/10 blur-3xl pointer-events-none" />
              <div className="relative">
                <div className="text-center max-w-4xl mx-auto mb-10">
                  <SectionHeading color="text-white">Why Consider DigLip7</SectionHeading>
                  <p className="text-white/90 leading-relaxed">
                    DigLip7 Tech Pvt Ltd is a digital marketing company offering SEO and PPC services. For manufacturing clients, our approach is built around the following working methods.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
                  {whyDiglipItems.map((item, i) => {
                    const [label, rest] = splitLead(item);
                    return (
                      <motion.div
                        key={label}
                        className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-colors"
                        whileHover={{ y: -6 }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
                      >
                        <CheckCircle2 className="w-6 h-6 text-[#e6c88f] mb-3" />
                        <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                          <strong className="block text-white text-lg mb-1">{label}</strong>
                          {rest}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
                <p className="text-white/90 leading-relaxed text-center max-w-4xl mx-auto">
                  Whether you are a component maker, a machinery builder, a fabricator or an exporter, we approach manufacturing SEO as a long-term discipline that rewards accurate information and useful content. If you are comparing a manufacturing SEO company or agency in India, we suggest asking each one how they would measure qualified enquiries for your business, and we are happy to answer that question for ours.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <FaqSection title="Frequently Asked Questions" faqs={faqs} />

          {/* Final CTA */}
          <CtaSection
            headingLead="Discuss Your Manufacturing SEO"
            headingAccent="Strategy"
            text={
              <>
                Tell us about your products, target markets and the enquiries you want more of. We will review your website, explain what is helping or holding back your search visibility, and recommend a practical, honest plan for your industrial business.{" "}
                <Link to="/contact" className="underline font-semibold text-white hover:text-yellow-200 transition-colors">
                  Contact DigLip7
                </Link>{" "}
                to start the conversation.
              </>
            }
            ctaLabel="Discuss Your Manufacturing SEO Strategy"
          />
        </div>
      </main>
    </div>
  );
}

export default IndiaManufacturingSEOServices;