import React, { useState, useMemo, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
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
  BarChart3,
  TrendingUp,
  Layers,
  Link2,
  Cpu,
  Star,
  Zap,
  Smartphone,
  Code2,
  ShoppingCart,
  Phone,
  Navigation,
  Building2,
  HeartPulse,
  GraduationCap,
  Briefcase,
  UtensilsCrossed,
  ShieldCheck,
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

// Animated city skyline (decorative)
const SkylineArt = () => {
  const buildings = [38, 62, 48, 90, 70, 110, 58, 82, 44, 66, 96, 52];
  return (
    <div aria-hidden="true" className="relative max-w-3xl mx-auto h-36 flex items-end justify-center gap-1.5">
      {buildings.map((h, i) => (
        <motion.span
          key={i}
          className="w-6 sm:w-9 rounded-t-md bg-gradient-to-t from-teal-700 to-teal-400 origin-bottom relative overflow-hidden"
          style={{ height: h }}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: i * 0.07 }}
        >
          <span className="absolute inset-x-1 top-2 grid grid-cols-2 gap-1">
            {[0, 1, 2, 3].map((w) => (
              <motion.span
                key={w}
                className="h-1.5 rounded-sm bg-yellow-200"
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: (i + w) * 0.3 }}
              />
            ))}
          </span>
        </motion.span>
      ))}
    </div>
  );
};

// Local listing mock frame around an image
const ListingFrame = ({ image }) => (
  <Card3D>
    <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
      <Img image={image} className="w-full object-cover bg-gray-50" />
      <div aria-hidden="true" className="flex items-center justify-between gap-4 p-4">
        <div className="flex gap-1">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.span
              key={i}
              initial={{ scale: 0, rotate: -40 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.12, type: "spring" }}
            >
              <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
            </motion.span>
          ))}
        </div>
        <div className="flex gap-3">
          <span className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center">
            <Phone className="w-5 h-5 text-teal-700" />
          </span>
          <span className="w-10 h-10 rounded-full bg-teal-700 flex items-center justify-center">
            <Navigation className="w-5 h-5 text-white" />
          </span>
        </div>
      </div>
    </div>
  </Card3D>
);

// Image with an animated audit scan line
const ScanImage = ({ image }) => (
  <Card3D>
    <div className="relative overflow-hidden rounded-2xl shadow-xl">
      <Img image={image} className="w-full object-cover bg-gray-50" />
      <motion.span
        aria-hidden="true"
        className="absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-teal-400/40 to-transparent border-b-2 border-teal-300"
        animate={{ top: ["-15%", "100%"] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
      />
    </div>
  </Card3D>
);

// Image with pulsing annotation markers
const AnnotatedImage = ({ image }) => (
  <Card3D>
    <div className="relative">
      <Img image={image} />
      {[
        { l: "18%", t: "22%" },
        { l: "62%", t: "34%" },
        { l: "40%", t: "70%" },
        { l: "80%", t: "74%" },
      ].map((m, i) => (
        <span key={i} aria-hidden="true" className="absolute" style={{ left: m.l, top: m.t }}>
          <motion.span
            className="absolute -inset-2 rounded-full bg-[#c89d5a]/60"
            animate={{ scale: [1, 2], opacity: [0.8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.4 }}
          />
          <span className="relative block w-4 h-4 rounded-full bg-[#c89d5a] border-2 border-white shadow" />
        </span>
      ))}
    </div>
  </Card3D>
);

// Parallax image inside a frame
const ParallaxImage = ({ image }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  return (
    <div ref={ref} className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white">
      <motion.div style={{ y, scale: 1.2 }}>
        <Img image={image} className="w-full object-cover bg-gray-50" />
      </motion.div>
      <motion.span
        aria-hidden="true"
        className="absolute bottom-4 right-4 w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-600 to-teal-900 shadow-xl flex items-center justify-center"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2.6, repeat: Infinity }}
      >
        <Smartphone className="w-6 h-6 text-white" />
      </motion.span>
    </div>
  );
};

// Decorative drawing tree (architecture)
const TreeArt = () => (
  <div aria-hidden="true" className="w-full max-w-sm mx-auto">
    <svg viewBox="0 0 240 200" className="w-full">
      {[
        "M120 36 L120 70 M120 70 L50 100 M120 70 L120 100 M120 70 L190 100",
        "M50 100 L30 150 M50 100 L70 150 M120 100 L120 150 M190 100 L170 150 M190 100 L210 150",
      ].map((d, i) => (
        <motion.path
          key={i}
          d={d}
          fill="none"
          stroke="#0f766e"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, delay: i * 0.8 }}
        />
      ))}
      {[
        [120, 24, 14, "#115e59"],
        [50, 100, 11, "#0f766e"],
        [120, 100, 11, "#0f766e"],
        [190, 100, 11, "#0f766e"],
        [30, 158, 9, "#c89d5a"],
        [70, 158, 9, "#c89d5a"],
        [120, 158, 9, "#c89d5a"],
        [170, 158, 9, "#c89d5a"],
        [210, 158, 9, "#c89d5a"],
      ].map(([cx, cy, r, f], i) => (
        <motion.circle
          key={i}
          cx={cx}
          cy={cy}
          r={r}
          fill={f}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          style={{ originX: `${cx}px`, originY: `${cy}px` }}
          transition={{ delay: 0.2 + i * 0.18, type: "spring" }}
        />
      ))}
    </svg>
  </div>
);

// Animated sparkline (decorative)
const Sparkline = () => (
  <div aria-hidden="true" className="mt-6 rounded-2xl bg-gradient-to-br from-teal-800 to-teal-900 p-5 shadow-xl">
    <svg viewBox="0 0 300 80" className="w-full">
      <motion.path
        d="M0 62 C 30 58, 40 40, 70 44 S 120 66, 150 38 S 210 22, 240 28 S 280 8, 300 10"
        fill="none"
        stroke="#fde68a"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2.2 }}
      />
      <motion.circle
        cx="300"
        cy="10"
        r="5"
        fill="#fff"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 2.2 }}
      />
    </svg>
  </div>
);

// Card with a spinning conic-gradient border
const SpinBorderCard = ({ children, delay = 0 }) => (
  <motion.div
    className="relative rounded-3xl p-[2px] overflow-hidden shadow-lg"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ y: -6 }}
  >
    <motion.span
      aria-hidden="true"
      className="absolute -inset-[60%]"
      style={{
        background:
          "conic-gradient(from 0deg, transparent 0 60%, #0f766e 75%, #c89d5a 90%, transparent 100%)",
      }}
      animate={{ rotate: 360 }}
      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
    />
    <div className="relative h-full rounded-[calc(1.5rem-2px)] bg-white p-6">{children}</div>
  </motion.div>
);

// ===========================================================================
// Page constants
// ===========================================================================

const pageUrl = "https://diglip7.com/india/mumbai/seo-services/";
const metaTitle = "SEO Services in Mumbai | DigLip7";
const metaDescription =
  "Improve your website's search visibility with SEO services in Mumbai from DigLip7. Explore technical SEO, local SEO, keyword research and content optimization.";

const breadcrumbTrail = [
  { label: "Home", href: "/" },
  { label: "SEO Services in Mumbai", href: "/india/mumbai/seo-services/" },
];

const images = {
  hero: {
    src: "/images/seo-services-mumbai.webp",
    alt: "SEO specialists reviewing website search visibility and organic performance",
    width: 1600,
    height: 900,
  },
  local: {
    src: "/images/local-seo-google-business-profile.webp",
    alt: "Local business listing appearing in map search results",
    width: 1200,
    height: 675,
  },
  technical: {
    src: "/images/technical-seo-website-audit.webp",
    alt: "Technical SEO audit being reviewed on a laptop",
    width: 1200,
    height: 675,
  },
  keyword: {
    src: "/images/keyword-research-competitor-analysis.webp",
    alt: "Keyword research and competitor analysis planning",
    width: 1200,
    height: 675,
  },
  onpage: {
    src: "/images/on-page-seo-optimization.webp",
    alt: "Web page layout with optimized headings and content",
    width: 1200,
    height: 675,
  },
  mobile: {
    src: "/images/mobile-seo-responsive-website.webp",
    alt: "Website shown on mobile and desktop screens",
    width: 1200,
    height: 675,
  },
  reporting: {
    src: "/images/seo-performance-analytics-reporting.webp",
    alt: "SEO performance report being reviewed",
    width: 1200,
    height: 675,
  },
};

// ===========================================================================
// Content data (verbatim from the page copy)
// ===========================================================================

const introParas = [
  "Someone in Andheri needs a physiotherapist this week. A founder in Powai is comparing accountants. A shop owner in Dadar wants to know why competitors appear above his website. In each case the first step is usually a search, and the businesses shown in the results get the first chance to be considered. Our SEO services in Mumbai are built to help eligible businesses earn that visibility in a sustainable way.",
  "Mumbai's commercial environment is diverse, from small neighbourhood outlets to large service companies, and customers use search engines to find local businesses, professional services, products, healthcare providers and educational institutions. SEO brings together technical improvements, relevant content, keyword research, website optimization and local search strategy.",
  "DigLip7 Tech Pvt Ltd offers SEO support for businesses that want steady organic visibility rather than short-term tricks. The right plan depends on what you sell, who you serve and how your website currently performs.",
];

const obstacles = [
  "Limited visibility for relevant Google searches",
  "Competitors appearing above important business pages",
  "Service pages that do not match what customers are searching for",
  "Traffic that arrives but does not turn into enquiries",
  "Weak local search visibility and outdated or duplicate content",
  "Technical issues that affect indexing, and poor mobile experiences",
  "Difficulty measuring organic search performance",
];

const services = [
  { icon: Search, label: "SEO website audits.", text: "Review crawl, indexing, content and structure issues so priorities are clear." },
  { icon: Target, label: "SEO keyword research.", text: "Identify the searches your customers actually use and map them to pages." },
  { icon: FileText, label: "On-page SEO.", text: "Improve titles, headings, content and URLs so pages match search intent." },
  { icon: Cpu, label: "Technical SEO.", text: "Fix crawlability, indexing, redirects and rendering problems that hide content." },
  { icon: Link2, label: "Off-page SEO.", text: "Support credibility through relevant, legitimate mentions and links, never manipulative schemes." },
  { icon: MapPin, label: "Local SEO.", text: "Strengthen visibility for location-based searches, ideal for businesses with real premises or service areas." },
  { icon: Star, label: "Google Business Profile optimization.", text: "Where applicable, keep listings accurate, complete and consistent." },
  { icon: FileText, label: "Content optimization.", text: "Refresh and expand pages so they answer customer questions properly." },
  { icon: Layers, label: "SEO-friendly website architecture.", text: "Organize pages so users and search engines can follow the structure." },
  { icon: Link2, label: "Internal linking.", text: "Connect related pages with descriptive links." },
  { icon: ShoppingCart, label: "E-commerce SEO.", text: "Optimize product and category pages for online stores." },
  { icon: Zap, label: "Website speed optimization.", text: "Reduce loading delays that frustrate visitors." },
  { icon: Smartphone, label: "Mobile SEO.", text: "Make the mobile experience usable and consistent with desktop." },
  { icon: Code2, label: "Structured data implementation.", text: "Add markup that reflects visible, verified content." },
  { icon: Eye, label: "Competitor SEO analysis.", text: "Understand who ranks for your target searches and why." },
  { icon: BarChart3, label: "Performance monitoring and reporting.", text: "Track what changes and what it means for enquiries." },
];

const bentoSpans = [
  "lg:col-span-2",
  "",
  "",
  "",
  "",
  "lg:col-span-2",
  "",
  "",
  "",
  "lg:col-span-2",
  "",
  "",
  "",
  "",
  "lg:col-span-2",
  "",
];

const industries = [
  { icon: HeartPulse, label: "Healthcare and clinics.", text: "Treatment and service pages, local visibility, doctor and practitioner information, educational content, appointment enquiry tracking and responsibly reviewed medical information." },
  { icon: Building2, label: "Real estate.", text: "Property category and listing SEO, location-based content, project landing pages and enquiry optimization." },
  { icon: ShoppingCart, label: "E-commerce and retail.", text: "Product and category SEO, product information, shopping-related visibility and technical SEO for large inventories." },
  { icon: GraduationCap, label: "Education and training.", text: "Course pages, educational content, location-specific visibility and admission enquiry tracking." },
  { icon: Briefcase, label: "Professional services.", text: "Service page SEO, local SEO, professional profile content, informative articles and lead-focused landing pages." },
  { icon: UtensilsCrossed, label: "Hospitality and restaurants.", text: "Local visibility, menu and service pages, accurate location information, relevant reviews and website usability." },
];

const processSteps = [
  { icon: Users, title: "Understand the business, services, audience and objectives." },
  { icon: ShieldCheck, title: "Audit the existing website." },
  { icon: Search, title: "Research relevant keywords and search intent." },
  { icon: Eye, title: "Review competitors and search results." },
  { icon: Cpu, title: "Identify technical SEO issues." },
  { icon: FileText, title: "Prioritize on-page improvements." },
  { icon: Target, title: "Develop a relevant content strategy." },
  { icon: Layers, title: "Improve website architecture and internal linking." },
  { icon: MapPin, title: "Implement suitable local SEO improvements." },
  { icon: TrendingUp, title: "Monitor performance and refine the strategy." },
];

const faqs = [
  {
    question: "What are SEO services in Mumbai?",
    answer:
      "SEO services in Mumbai help businesses improve their visibility in organic search results for relevant queries. They typically include website audits, keyword research, on-page and technical optimization, local SEO, content planning and performance reporting. The right mix depends on your website, your customers and your competition.",
  },
  {
    question: "How can SEO help businesses in Mumbai?",
    answer:
      "SEO can make a website easier for search engines to understand and for customers to use, which may improve visibility for relevant searches. It supports discovery, trust and enquiries over time. It does not guarantee rankings, traffic or leads, because results depend on competition, content quality and implementation.",
  },
  {
    question: "How much do SEO services cost in Mumbai?",
    answer:
      "Costs depend on competition, website size, project scope, industry and the SEO activities required. A small local site and a large e-commerce store need very different amounts of work. We do not quote fixed prices without understanding your website and goals, so the best starting point is a discussion.",
  },
  {
    question: "How long does SEO take to show results?",
    answer:
      "SEO is gradual, and no responsible provider can promise a specific timeline or ranking. Technical fixes may be reflected in indexing sooner, while competitive rankings and steady organic traffic usually take longer. Timing depends on website condition, competition, content and how quickly recommendations are implemented.",
  },
  {
    question: "What does an SEO agency in Mumbai do?",
    answer:
      "An SEO agency reviews your website, researches keywords and competitors, fixes technical issues, improves page content and structure, supports local visibility and tracks performance. A good agency explains priorities clearly, works within your resources and reports on enquiries and search performance, not only rankings.",
  },
  {
    question: "Is local SEO important for Mumbai businesses?",
    answer:
      "It is important for businesses that serve customers in specific areas, such as clinics, restaurants, schools and service providers. Local SEO helps them appear in map and location-based searches. It should reflect real premises and genuine service coverage, and Google Business Profile eligibility rules apply.",
  },
  {
    question: "Can SEO help small businesses improve online visibility?",
    answer:
      "Yes, when the approach is realistic. Small businesses often benefit from clear service pages, accurate local information, helpful content and a technically sound website. Focusing on specific services and locations you genuinely cover usually works better than trying to compete for every broad search term.",
  },
  {
    question: "How can I measure the performance of SEO services?",
    answer:
      "Use Google Search Console for clicks, impressions, queries and indexing, and Google Analytics 4 for organic visits and conversions. Track enquiry forms and click-to-call actions as well. Compare these with your own records of qualified leads and completed sales, since traffic alone does not show business impact.",
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
    "@id": "https://diglip7.com/india/mumbai/seo-services/#webpage",
    url: "https://diglip7.com/india/mumbai/seo-services/",
    name: "SEO Services in Mumbai | DigLip7",
    description: metaDescription,
    isPartOf: { "@id": "https://diglip7.com/#website" },
    about: { "@id": "https://diglip7.com/india/mumbai/seo-services/#service" },
    publisher: { "@id": "https://diglip7.com/#organization" },
    inLanguage: "en-IN",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://diglip7.com/india/mumbai/seo-services/#service",
    name: "SEO Services in Mumbai",
    serviceType: "Search engine optimization",
    description:
      "SEO services including website audits, keyword research, on-page SEO, technical SEO, local SEO, e-commerce SEO and performance reporting for businesses targeting Mumbai.",
    url: "https://diglip7.com/india/mumbai/seo-services/",
    provider: { "@id": "https://diglip7.com/#organization" },
    areaServed: { "@type": "City", name: "Mumbai" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://diglip7.com/" },
      {
        "@type": "ListItem",
        position: 2,
        name: "SEO Services in Mumbai",
        item: "https://diglip7.com/india/mumbai/seo-services/",
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

function MumbaiSEOServices() {
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
          titleDark="SEO Services in Mumbai"
          titleGradient="to Improve Your Business Search Visibility"
          ctaLabel="Discuss Your SEO Requirements"
          image={images.hero}
        />

        <div className="bg-white">
          <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 w-full">
            {/* Search Visibility That Fits How Mumbai Businesses Operate (skyline + story cards) */}
            <div className="max-w-7xl mx-auto mb-24">
              <div className="text-center mb-8">
                <SectionHeading color="text-teal-700">
                  Search Visibility That Fits How Mumbai Businesses Operate
                </SectionHeading>
              </div>
              <SkylineArt />
              <div className="h-1.5 max-w-3xl mx-auto rounded-full bg-gradient-to-r from-teal-600 via-[#c89d5a] to-teal-600 mb-10" />
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {introParas.map((p, i) => (
                  <motion.div
                    key={i}
                    className={`relative overflow-hidden rounded-3xl p-8 shadow-xl border ${
                      i === 0
                        ? "bg-gradient-to-br from-teal-700 to-teal-900 text-white border-transparent"
                        : "bg-white text-gray-700 border-gray-100"
                    }`}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.7, delay: i * 0.15 }}
                  >
                    <span
                      aria-hidden="true"
                      className={`absolute -top-3 right-4 text-8xl font-extrabold select-none ${
                        i === 0 ? "text-white/10" : "text-teal-700/10"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <p className="relative leading-relaxed">{p}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Why Businesses in Mumbai Need SEO (scroll-snap carousel) */}
            <div className="max-w-7xl mx-auto mb-24">
              <div className="text-center max-w-5xl mx-auto mb-10">
                <SectionHeading>Why Businesses in Mumbai Need SEO</SectionHeading>
                <p className="text-gray-700 leading-relaxed">
                  Organic search matters most where customers compare options before they buy or enquire. Many businesses run into the same obstacles:
                </p>
              </div>
              <div className="relative">
                <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-6 px-1 [scrollbar-width:thin]">
                  {obstacles.map((o, i) => (
                    <motion.div
                      key={o}
                      className="snap-start shrink-0 w-[260px] sm:w-[300px] rounded-3xl p-7 bg-gradient-to-br from-amber-50/80 to-white border border-amber-100 shadow-lg hover:shadow-2xl transition-shadow"
                      initial={{ opacity: 0, x: 60 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -8 }}
                      transition={{ delay: i * 0.08, duration: 0.5 }}
                    >
                      <span className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-5">
                        <AlertTriangle className="w-6 h-6" />
                      </span>
                      <p className="text-gray-800 leading-relaxed">{o}</p>
                    </motion.div>
                  ))}
                </div>
                <motion.span
                  aria-hidden="true"
                  className="hidden sm:flex absolute -right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-teal-700 to-teal-900 text-white items-center justify-center shadow-lg"
                  animate={{ x: [0, 8, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                <motion.p
                  className="bg-white rounded-3xl p-8 shadow-lg border border-teal-100 text-gray-700 leading-relaxed"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  The examples differ by sector. A restaurant wants to appear for dining searches near a neighbourhood, a clinic for treatment queries, a real estate company for project and location searches, and a retailer for product and category terms. Professional services firms and education providers face similar needs in their own niches.
                </motion.p>
                <motion.p
                  className="bg-gray-50 rounded-3xl p-8 shadow-lg border-l-4 border-[#c89d5a] text-gray-700 leading-relaxed"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  SEO can improve a website's relevance, accessibility and search visibility, but outcomes depend on competition, website condition, content quality, implementation and search demand. We do not promise first-page rankings, guaranteed leads or fixed results.
                </motion.p>
              </div>
            </div>

            {/* SEO Services We Provide (bento grid) */}
            <div className="max-w-7xl mx-auto mb-24">
              <div className="text-center max-w-4xl mx-auto mb-12">
                <SectionHeading color="text-teal-700">SEO Services We Provide</SectionHeading>
                <p className="text-gray-700 leading-relaxed">
                  The services below are available depending on need. They are not all included in every engagement or package.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 [grid-auto-flow:dense]">
                {services.map((s, i) => {
                  const wide = bentoSpans[i];
                  return (
                    <motion.div
                      key={s.label}
                      className={`group relative overflow-hidden rounded-3xl p-6 shadow-lg border transition-shadow hover:shadow-2xl ${wide} ${
                        wide
                          ? "bg-gradient-to-br from-teal-700 to-teal-900 text-white border-transparent sm:col-span-2"
                          : "bg-white text-gray-700 border-gray-100"
                      }`}
                      initial={{ opacity: 0, scale: 0.92 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -6 }}
                      transition={{ delay: (i % 4) * 0.07, duration: 0.5 }}
                    >
                      <s.icon
                        aria-hidden="true"
                        className={`absolute -right-4 -bottom-4 w-24 h-24 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6 ${
                          wide ? "text-white/10" : "text-teal-50"
                        }`}
                      />
                      <span
                        className={`relative w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${
                          wide ? "bg-white/20 text-white" : "bg-teal-50 text-teal-700"
                        }`}
                      >
                        <s.icon className="w-5 h-5" />
                      </span>
                      <p className="relative text-sm leading-relaxed">
                        <strong className={`block text-base mb-1 ${wide ? "text-white" : "text-gray-900"}`}>
                          {s.label}
                        </strong>
                        {s.text}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
              <p className="text-gray-700 leading-relaxed text-center max-w-4xl mx-auto mt-10">
                The categories differ in focus. Technical SEO concerns how search engines access your site, on-page SEO concerns what each page says and how it is organized, off-page SEO concerns external credibility signals, and local SEO concerns visibility for geographic searches.
              </p>
            </div>

            {/* Local SEO Services in Mumbai (listing frame) */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-24">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <ListingFrame image={images.local} />
              </motion.div>
              <div>
                <FloatingElement>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    Local SEO Services in Mumbai
                  </h2>
                </FloatingElement>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  {[
                    "Local SEO helps eligible businesses appear for geographically relevant searches, such as a dentist in Andheri, a boutique in Bandra or a coaching class in Borivali. The foundation is accurate business information: name, address and phone number, relevant categories, clear service descriptions, correct hours and genuine photographs.",
                    "Customer reviews and professional responses build trust, and local landing pages and local keyword research help when they provide genuinely useful information. Consistent details across relevant directories and regular measurement of local search performance complete the picture. Areas such as Powai, Dadar or Malad are illustrative examples. Thane or Navi Mumbai should be targeted only where the business genuinely serves them.",
                    "Local SEO must reflect real locations and real service coverage. Google Business Profile eligibility depends on Google's guidelines and actual operations. We do not recommend fake locations, duplicate profiles, misleading addresses, virtual offices presented as staffed premises or fabricated reviews.",
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

            {/* Keyword Research and Competitor Analysis (image on top, editorial columns) */}
            <div className="max-w-6xl mx-auto mb-24">
              <div className="text-center mb-10">
                <SectionHeading color="text-teal-700">Keyword Research and Competitor Analysis</SectionHeading>
              </div>
              <motion.div
                className="relative mb-10"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-teal-400/30 via-transparent to-[#c89d5a]/30 blur-xl" />
                <Img image={images.keyword} className="relative rounded-3xl shadow-2xl w-full object-cover bg-gray-50" />
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  "Keyword research identifies the terms customers use when looking for services and products. It covers primary and secondary keywords, long-tail phrases, local queries and industry-specific language, and it separates informational searches from commercial and transactional ones. Competitor analysis shows who currently appears for those searches and how.",
                  "The results are turned into a keyword-to-page map and a prioritized list of opportunities. Illustrative examples include SEO services in Mumbai, a dentist in Andheri, a real estate agency in Bandra, a physiotherapy clinic in Powai or a digital marketing company in Mumbai. These are examples, not researched opportunities. Keywords should reflect services you actually offer, real customer intent and realistic competition.",
                ].map((p, i) => (
                  <motion.div
                    key={i}
                    className="relative pt-10"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.7 }}
                  >
                    <span
                      aria-hidden="true"
                      className="absolute top-0 left-0 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-[#c89d5a]"
                    >
                      0{i + 1}
                    </span>
                    <motion.span
                      aria-hidden="true"
                      className="block h-0.5 bg-gradient-to-r from-teal-600 to-transparent mb-4"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 }}
                    />
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">{p}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* On-Page SEO Services (annotated image) */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-24 bg-gray-50 rounded-3xl p-8 sm:p-12 border border-gray-100">
              <div>
                <FloatingElement>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    On-Page SEO Services
                  </h2>
                </FloatingElement>
                <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                  <p>
                    On-page SEO helps search engines understand a page and helps visitors find what they need. It includes SEO titles, meta descriptions, heading structure, content organization, search intent alignment, keyword placement, image optimization and descriptive alt text, internal links, URL structure, canonical tags and page-level calls to action.
                  </p>
                  <p>
                    Different pages need different treatment. A service page explains and persuades, a product page describes and reassures, a category page helps people browse, and an article answers a question. Original, useful content comes first, and we do not write for search engines at the expense of users.
                  </p>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <AnnotatedImage image={images.onpage} />
              </motion.div>
            </div>

            {/* Technical SEO Services in Mumbai (scanner) */}
            <div className="max-w-7xl mx-auto relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-800 to-teal-900 p-8 sm:p-12 mb-24">
              <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#c89d5a]/20 blur-3xl pointer-events-none" />
              <div className="relative">
                <div className="text-center mb-10">
                  <SectionHeading color="text-white">Technical SEO Services in Mumbai</SectionHeading>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <ScanImage image={images.technical} />
                  </motion.div>
                  <div className="space-y-5">
                    {[
                      "Technical SEO supports crawling, indexing, rendering and accessibility. It covers XML sitemaps, robots.txt, canonical URLs, redirects, broken links, duplicate content, JavaScript rendering where relevant, mobile-first indexing, website architecture, structured data, pagination, Core Web Vitals, website security and orphaned pages.",
                      "These issues affect how content is discovered and interpreted. A large e-commerce store may generate thousands of near-duplicate URLs through filters. A service website may have outdated pages competing with each other. A site with many landing pages may leave some unreachable. We review each case before acting, because indexing every URL or blocking entire sections without understanding their purpose can cause harm.",
                    ].map((p, i) => (
                      <motion.p
                        key={i}
                        className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 text-white/95 leading-relaxed hover:bg-white/20 transition-colors"
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

            {/* E-commerce SEO Services */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 items-center mb-24">
              <div aria-hidden="true" className="relative w-44 h-44 mx-auto">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="absolute left-1/2 w-8 h-8 -ml-4 rounded-lg bg-gradient-to-br from-[#c89d5a] to-amber-300 shadow"
                    animate={{ top: ["-10%", "52%"], opacity: [0, 1, 0], rotate: [0, 20, 0] }}
                    transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.8 }}
                  />
                ))}
                <span className="absolute inset-x-0 bottom-0 mx-auto w-28 h-28 rounded-3xl bg-gradient-to-br from-teal-600 to-teal-900 shadow-xl flex items-center justify-center">
                  <ShoppingCart className="w-14 h-14 text-white" />
                </span>
              </div>
              <div>
                <FloatingElement>
                  <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-6 leading-tight">
                    E-commerce SEO Services
                  </h2>
                </FloatingElement>
                <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                  <p>
                    Online stores compete on products and categories, so the work differs from a standard service website. It includes product keyword research, product and category page optimization, unique product descriptions, image optimization, product structured data where eligible and accurate availability information.
                  </p>
                  <p>
                    Larger catalogues also need attention to faceted navigation, duplicate URL management, internal linking, XML sitemaps, mobile shopping experience and ongoing organic performance monitoring. Product details, prices and stock information must always come from the store itself.
                  </p>
                </div>
              </div>
            </div>

            {/* SEO Content Strategy and Optimization (page stack) */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center mb-24 bg-gradient-to-br from-gray-50 to-teal-50/30 rounded-3xl p-8 sm:p-12 border border-gray-100">
              <div>
                <FloatingElement>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    SEO Content Strategy and Optimization
                  </h2>
                </FloatingElement>
                <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                  <p>
                    Useful content supports search visibility and helps customers at each stage of the buying journey. That can include service page content, industry-specific landing pages, educational articles, FAQs, product descriptions, content refreshes and internal links between related topics. Location-specific content is justified only where it adds real value.
                  </p>
                  <p>
                    A content strategy should cover topics thoroughly, match search intent and be checked for accuracy before publication. We favour originality and first-hand knowledge where available, and avoid copied competitor content, thin pages, keyword stuffing and mass-produced location pages.
                  </p>
                </div>
              </div>
              <div aria-hidden="true" className="relative w-52 h-60 mx-auto group">
                {[2, 1, 0].map((n) => (
                  <motion.span
                    key={n}
                    className="absolute inset-x-4 top-4 h-48 rounded-2xl bg-white border border-teal-100 shadow-xl flex items-center justify-center"
                    initial={{ rotate: 0 }}
                    whileInView={{ rotate: (n - 1) * 9, x: (n - 1) * 14 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: (2 - n) * 0.25 }}
                  >
                    {n === 0 && <FileText className="w-14 h-14 text-teal-600" />}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* SEO for Different Industries in Mumbai (spinning border cards) */}
            <div className="max-w-7xl mx-auto mb-24">
              <div className="text-center max-w-4xl mx-auto mb-12">
                <SectionHeading>SEO for Different Industries in Mumbai</SectionHeading>
                <p className="text-gray-700 leading-relaxed">
                  Search behaviour varies by sector. The following are potential applications, not claims of completed DigLip7 projects.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {industries.map((it, i) => (
                  <SpinBorderCard key={it.label} delay={(i % 3) * 0.1}>
                    <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-600 to-teal-900 text-white flex items-center justify-center mb-4">
                      <it.icon className="w-6 h-6" />
                    </span>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      <strong className="block text-gray-900 text-lg mb-1">{it.label}</strong>
                      {it.text}
                    </p>
                  </SpinBorderCard>
                ))}
              </div>
            </div>

            {/* Mobile SEO and Website User Experience (parallax) */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-24">
              <ParallaxImage image={images.mobile} />
              <div>
                <FloatingElement>
                  <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-6 leading-tight">
                    Mobile SEO and Website User Experience
                  </h2>
                </FloatingElement>
                <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                  <p>
                    Many people search for businesses on their phones, often while travelling or comparing options quickly. A useful mobile experience includes responsive layouts, mobile-friendly navigation, readable content, optimized images, fast loading, accessible enquiry forms and click-to-call buttons.
                  </p>
                  <p>
                    Core Web Vitals and consistent content across desktop and mobile support this experience. No particular Lighthouse score guarantees higher rankings, but a site that is easy to use helps visitors arriving from organic search.
                  </p>
                </div>
              </div>
            </div>

            {/* Website Architecture and Internal Linking (tree) */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-12 items-center mb-24">
              <TreeArt />
              <div>
                <FloatingElement>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    Website Architecture and Internal Linking
                  </h2>
                </FloatingElement>
                <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                  <p>
                    A logical structure helps search engines find relevant pages and helps visitors move through a site. Typical paths run from the homepage to primary service pages, from services to subservices, from categories to products and from blog articles to related services. Breadcrumbs, contextual links and descriptive anchor text reinforce these paths.
                  </p>
                  <p className="bg-white rounded-2xl p-6 shadow-lg border border-teal-100">
                    A practical example: Homepage → SEO Services → Local SEO Services → Mumbai Business SEO Information. Architecture should reflect the website's actual services and navigation. We avoid orphaned pages and unnecessary duplicates, and we do not create hundreds of similar location pages just to target keywords.
                  </p>
                </div>
              </div>
            </div>

            {/* Our SEO Process */}
            <ProcessSection
              title="Our SEO Process"
              intro="Our workflow is transparent:"
              steps={processSteps}
              closing="Priorities depend on website condition, development resources, competition and project scope. We do not guarantee a specific ranking or results within a fixed number of days."
            />

            {/* SEO Performance Tracking and Reporting (sparkline) */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-24">
              <div>
                <FloatingElement>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    SEO Performance Tracking and Reporting
                  </h2>
                </FloatingElement>
                <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                  <p>
                    Meaningful reporting covers organic clicks, search impressions, queries, average positions, organic landing page traffic, indexed and excluded pages, keyword visibility and local search performance. It also covers enquiry form submissions, click-to-call actions where tracked, organic conversion rates, technical issue resolution and Core Web Vitals.
                  </p>
                  <p>
                    Google Search Console shows how your site appears in search, while Google Analytics 4 shows what visitors do afterward, provided both are properly configured and accessible. Keep search visibility, organic visits, enquiries, qualified leads and completed sales separate, because progress at one stage does not guarantee the next.
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
                <Sparkline />
              </motion.div>
            </div>

            {/* Why Choose DigLip7 for SEO Services in Mumbai? */}
            <div className="max-w-6xl mx-auto mb-12">
              <motion.div
                className="relative overflow-hidden rounded-3xl bg-white p-8 sm:p-12 shadow-xl border border-gray-100"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <motion.span
                  aria-hidden="true"
                  className="absolute -right-8 -top-8"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                >
                  <ShieldCheck className="w-52 h-52 text-teal-50" />
                </motion.span>
                <div className="relative">
                  <FloatingElement>
                    <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-6 leading-tight">
                      Why Choose DigLip7 for SEO Services in Mumbai?
                    </h2>
                  </FloatingElement>
                  <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                    <p>
                      When choosing an SEO provider, look for clear objectives, relevant keyword research, technical understanding, industry-aware content planning, local search knowledge, ethical practices, transparent communication, data-based decisions and reporting tied to business goals.
                    </p>
                    <p className="bg-gradient-to-br from-teal-50 to-white rounded-2xl p-5 border-l-4 border-teal-600">
                      DigLip7 Tech Pvt Ltd is a digital marketing and technology service provider. We choose SEO activities based on what your website actually needs rather than applying one strategy to every business.
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
            text="If you want SEO support for a business targeting Mumbai, a conversation is a sensible first step. We can talk through website challenges, keyword opportunities, technical priorities, local search requirements and your business objectives."
            ctaLabel="Discuss Your SEO Requirements"
          />
        </div>
      </main>
    </div>
  );
}

export default MumbaiSEOServices;