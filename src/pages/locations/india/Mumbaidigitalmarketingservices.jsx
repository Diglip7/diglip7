import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import SEO from "../../../components/SEO";
import {
  ArrowRight,
  ArrowUp,
  ChevronDown,
  ChevronRight,
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
  ShoppingCart,
  Star,
  Zap,
  Package,
  CheckCircle2,
  HeartPulse,
  Building2,
  GraduationCap,
  Briefcase,
  UtensilsCrossed,
  Car,
  ShieldCheck,
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
const LandingHero = ({
  breadcrumb,
  titleDark,
  titleGradient,
  ctaLabel,
  image,
  whatsappUrl,
  description,
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

            {/* Direct Answer / Subtitle Paragraphs */}
            {description && (
              <div className="mt-5 space-y-3.5 text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {Array.isArray(description) ? (
                  description.map((para, idx) => (
                    <p key={idx} className={idx === 0 ? "text-gray-800" : "text-gray-600"}>
                      {para}
                    </p>
                  ))
                ) : (
                  <p>{description}</p>
                )}
              </div>
            )}

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

// Process (blue line + icon circles)
const ProcessSection = ({ title, steps, cta }) => (
  <div className="bg-white py-12 px-2 text-center mb-20">
    <div className="max-w-5xl mx-auto mb-12">
      <FloatingElement>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
      </FloatingElement>
    </div>

    <div className="relative max-w-7xl mx-auto">
      <div className="hidden lg:block absolute top-10 left-0 w-full border-t-4 border-blue-100 z-0"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
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
            <p className="text-gray-600 text-sm mt-2 leading-relaxed max-w-sm">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>

    {cta}
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
const CtaSection = ({ headingLead, headingAccent, text, ctaLabel, whatsappUrl }) => {
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

          <div className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed space-y-3">
            {text}
          </div>

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

// Inline mid-page CTA button
const MidCta = ({ label, className = "", href, to = "/contact" }) => {
  const isExternal = href && (href.startsWith("http") || href.startsWith("https"));

  if (isExternal) {
    return (
      <div className={`flex justify-center ${className}`}>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <motion.button
            type="button"
            className="group px-7 sm:px-9 py-3.5 sm:py-4 bg-gradient-to-r from-teal-700 to-teal-900 text-white text-base sm:text-lg font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {label}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </a>
      </div>
    );
  }

  return (
    <div className={`flex justify-center ${className}`}>
      <Link to={to} className="inline-block">
        <motion.button
          type="button"
          className="group px-7 sm:px-9 py-3.5 sm:py-4 bg-gradient-to-r from-teal-700 to-teal-900 text-white text-base sm:text-lg font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {label}
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </Link>
    </div>
  );
};

// ===========================================================================
// New layout components unique to this page
// ===========================================================================

// Image with a hover magnifier lens
const MagnifierImage = ({ image }) => {
  const [pos, setPos] = useState({ x: 50, y: 50, show: false });
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setPos({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
      show: true,
    });
  };
  return (
    <div
      className="relative rounded-2xl overflow-hidden shadow-xl cursor-zoom-in"
      onMouseMove={onMove}
      onMouseLeave={() => setPos((p) => ({ ...p, show: false }))}
    >
      <Img image={image} className="w-full object-cover bg-gray-50" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute w-32 h-32 rounded-full border-4 border-white shadow-2xl transition-opacity duration-200"
        style={{
          left: `${pos.x}%`,
          top: `${pos.y}%`,
          transform: "translate(-50%, -50%)",
          opacity: pos.show ? 1 : 0,
          backgroundImage: `url(${image.src})`,
          backgroundSize: "320% auto",
          backgroundPosition: `${pos.x}% ${pos.y}%`,
        }}
      />
    </div>
  );
};

// Equalizer bars (decorative, paid bidding feel)
const EqualizerBars = () => (
  <div aria-hidden="true" className="mt-5 flex items-end justify-center gap-1.5 h-14 rounded-2xl bg-gradient-to-br from-teal-800 to-teal-900 px-5 py-3 shadow-xl">
    {Array.from({ length: 16 }).map((_, i) => (
      <motion.span
        key={i}
        className="flex-1 rounded-t bg-gradient-to-t from-teal-400 to-yellow-200 origin-bottom"
        style={{ height: "100%" }}
        animate={{ scaleY: [0.2, 1, 0.4, 0.85, 0.3] }}
        transition={{ duration: 2.4 + (i % 4) * 0.4, repeat: Infinity, delay: i * 0.1 }}
      />
    ))}
  </div>
);

// Rising reaction bubbles over an image
const ReactionBubbles = ({ image }) => {
  const icons = [Heart, MessageCircle, Share2, Heart, MessageCircle];
  return (
    <div className="relative">
      <Card3D>
        <Img image={image} />
      </Card3D>
      <div aria-hidden="true" className="absolute bottom-4 right-4 w-16 h-48 pointer-events-none">
        {icons.map((Icon, i) => (
          <motion.span
            key={i}
            className="absolute bottom-0 w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center"
            style={{ right: (i % 3) * 14 }}
            animate={{ y: [0, -170], opacity: [0, 1, 0], scale: [0.6, 1, 0.8] }}
            transition={{ duration: 3.6, repeat: Infinity, delay: i * 0.7 }}
          >
            <Icon className={`w-4 h-4 ${Icon === Heart ? "text-rose-500 fill-rose-500" : "text-teal-700"}`} />
          </motion.span>
        ))}
      </div>
    </div>
  );
};

// Image revealed with a curtain wipe
const CurtainImage = ({ image }) => (
  <motion.div
    className="relative"
    initial={{ clipPath: "inset(0 100% 0 0)" }}
    whileInView={{ clipPath: "inset(0 0% 0 0)" }}
    viewport={{ once: true }}
    transition={{ duration: 1.3, ease: "easeInOut" }}
  >
    <Img image={image} className="rounded-3xl shadow-2xl w-full object-cover bg-gray-50" />
  </motion.div>
);

// Animated funnel (decorative)
const FunnelArt = () => (
  <div aria-hidden="true" className="relative w-64 mx-auto py-4">
    {[100, 74, 52, 32].map((w, i) => (
      <motion.div
        key={i}
        className="mx-auto h-12 rounded-xl mb-2 bg-gradient-to-r from-teal-600 to-teal-800 shadow-md"
        style={{ width: `${w}%`, opacity: 1 - i * 0.12 }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: i * 0.2 }}
      />
    ))}
    {[0, 1, 2].map((i) => (
      <motion.span
        key={i}
        className="absolute left-1/2 w-3 h-3 -ml-1.5 rounded-full bg-[#c89d5a]"
        animate={{ top: ["0%", "88%"], opacity: [0, 1, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.8 }}
      />
    ))}
  </div>
);

// Flipping product tiles (decorative)
const TileFlip = () => {
  const icons = [ShoppingCart, Star, Zap, Heart, Package, TrendingUp];
  return (
    <div aria-hidden="true" className="grid grid-cols-3 gap-3 max-w-xs mx-auto" style={{ perspective: 800 }}>
      {icons.map((Icon, i) => (
        <motion.div
          key={i}
          className={`aspect-square rounded-2xl shadow-lg flex items-center justify-center ${
            i % 2 ? "bg-gradient-to-br from-[#c89d5a] to-amber-300" : "bg-gradient-to-br from-teal-600 to-teal-900"
          }`}
          animate={{ rotateY: [0, 180, 360] }}
          transition={{ duration: 5, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
        >
          <Icon className="w-8 h-8 text-white" />
        </motion.div>
      ))}
    </div>
  );
};

// Interlocking gears (decorative)
const GearsArt = () => (
  <div aria-hidden="true" className="relative w-64 h-64 mx-auto">
    <motion.span
      className="absolute left-0 top-4 w-36 h-36 text-teal-700"
      animate={{ rotate: 360 }}
      transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
    >
      <Settings className="w-full h-full" />
    </motion.span>
    <motion.span
      className="absolute right-0 top-20 w-28 h-28 text-[#c89d5a]"
      animate={{ rotate: -360 }}
      transition={{ duration: 11, repeat: Infinity, ease: "linear" }}
    >
      <Settings className="w-full h-full" />
    </motion.span>
    <motion.span
      className="absolute left-14 bottom-0 w-20 h-20 text-teal-400"
      animate={{ rotate: 360 }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
    >
      <Settings className="w-full h-full" />
    </motion.span>
  </div>
);

// Radar chart (decorative)
const RadarArt = () => {
  const pts = (r) =>
    [0, 1, 2, 3, 4, 5]
      .map((i) => {
        const a = (Math.PI / 3) * i - Math.PI / 2;
        return `${100 + r * Math.cos(a)},${100 + r * Math.sin(a)}`;
      })
      .join(" ");
  const data = [70, 52, 80, 60, 88, 46];
  const dataPts = data
    .map((r, i) => {
      const a = (Math.PI / 3) * i - Math.PI / 2;
      return `${100 + r * Math.cos(a)},${100 + r * Math.sin(a)}`;
    })
    .join(" ");
  return (
    <div aria-hidden="true" className="mt-6 max-w-[16rem] mx-auto">
      <svg viewBox="0 0 200 200" className="w-full">
        {[90, 60, 30].map((r) => (
          <polygon key={r} points={pts(r)} fill="none" stroke="#99f6e4" strokeWidth="1.5" />
        ))}
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const a = (Math.PI / 3) * i - Math.PI / 2;
          return (
            <line key={i} x1="100" y1="100" x2={100 + 90 * Math.cos(a)} y2={100 + 90 * Math.sin(a)} stroke="#99f6e4" strokeWidth="1" />
          );
        })}
        <motion.polygon
          points={dataPts}
          fill="rgba(15,118,110,0.3)"
          stroke="#0f766e"
          strokeWidth="3"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          style={{ originX: "100px", originY: "100px" }}
          transition={{ duration: 1.2, type: "spring" }}
        />
      </svg>
    </div>
  );
};

// ===========================================================================
// Page constants
// ===========================================================================

const pageUrl = "https://diglip7.com/india/mumbai/digital-marketing-services/";
const metaTitle = "Digital Marketing Services in Mumbai | DigLip7";
const metaDescription =
  "Explore digital marketing services in Mumbai from DigLip7. Improve online visibility through SEO, PPC, social media, content marketing and website optimization.";
const breadcrumbTrail = [
  { label: "Home", href: "/" },
  { label: "Digital Marketing Services in Mumbai", href: "/india/mumbai/digital-marketing-services/" },
];

const images = {
  hero: {
    src: "/images/digital-marketing-services-mumbai.webp",
    alt: "Digital marketing team planning online campaigns and business growth strategies",
    width: 1600,
    height: 900,
  },
  seo: {
    src: "/images/seo-services-mumbai.webp",
    alt: "SEO specialists reviewing organic search performance and website optimization",
    width: 1200,
    height: 675,
  },
  ppc: {
    src: "/images/ppc-advertising-mumbai.webp",
    alt: "Digital advertising campaign planning and paid search performance analysis",
    width: 1200,
    height: 675,
  },
  social: {
    src: "/images/social-media-marketing-mumbai.webp",
    alt: "Social media marketing team planning content and audience engagement",
    width: 1200,
    height: 675,
  },
  content: {
    src: "/images/content-marketing-mumbai.webp",
    alt: "Content marketing strategy and editorial planning for business websites",
    width: 1200,
    height: 675,
  },
  analytics: {
    src: "/images/digital-marketing-analytics-mumbai.webp",
    alt: "Digital marketing performance analysis and campaign reporting",
    width: 1200,
    height: 675,
  },
};

// ===========================================================================
// Content data (verbatim from the page copy)
// ===========================================================================

const whyBullets = [
  "Helping customers discover products and services online",
  "Reaching audiences by location, interests and search intent",
  "Supporting both local reach and wider market reach",
  "Building familiarity through useful content and consistent communication",
  "Connecting paid campaigns with organic search strategy",
  "Understanding how website experience affects enquiries and purchases",
  "Using performance data to guide the next decision",
];

const services = [
  { label: "Search Engine Optimization (SEO).", text: "Improves organic visibility for businesses whose customers search before they buy.", link: { text: "SEO services", href: "/digital-market/seoservices/" } },
  { label: "Local SEO.", text: "Helps location-based businesses appear in nearby and map searches." },
  { label: "Google Ads and PPC.", text: "Paid search for businesses needing targeted visibility sooner.", link: { text: "PPC advertising services", href: "/PPC-Advertising" } },
  { label: "Social media marketing.", text: "Builds familiarity and engagement where your audience spends time." },
  { label: "Content marketing.", text: "Pages and articles that educate customers and support decisions." },
  { label: "Website design and development.", text: "A site that supports visitors after they click." },
  { label: "E-commerce marketing.", text: "Product discovery, shopping campaigns and conversion support for online stores." },
  { label: "Online reputation management.", text: "Monitoring and responding to reviews where trust drives enquiries.", link: { text: "Online reputation management", href: "/digital-market/online-repulation-management(ORM)" } },
  { label: "Email marketing.", text: "Relevant communication with existing and prospective customers." },
  { label: "Conversion rate optimization.", text: "Reduces friction between a visit and an enquiry or purchase." },
  { label: "AI-powered digital marketing and answer-focused content.", text: "Clear, structured content that answers questions directly for search and AI-driven discovery, with no claims about guaranteed visibility.", link: { text: "AI-powered digital marketing", href: "/Ai-powered-Digital-Marketing" } },
];

const industries = [
  { icon: HeartPulse, label: "Healthcare and clinics.", text: "Local visibility, service pages, appointment enquiries and accurate information, without misleading medical claims or treatment promises." },
  { icon: Building2, label: "Real estate.", text: "Property-related search intent, project pages, location content, lead forms and campaign measurement." },
  { icon: GraduationCap, label: "Education and training.", text: "Course pages, informational content, search campaigns and enquiry journeys." },
  { icon: ShoppingCart, label: "Retail and e-commerce.", text: "Product discovery, category optimization, social campaigns and purchase journeys." },
  { icon: UtensilsCrossed, label: "Hospitality and restaurants.", text: "Local discovery, menus, booking pathways, reviews and visual content." },
  { icon: Briefcase, label: "Professional and B2B services.", text: "Thought leadership, LinkedIn, industry content, lead generation and longer decision cycles." },
  { icon: Car, label: "Automotive and local services.", text: "Local search visibility, service pages, paid search and call or enquiry tracking." },
];

const stations = [
  { label: "South Mumbai.", text: "Often relevant to professional services, retail, hospitality and established businesses." },
  { label: "Andheri.", text: "Service businesses, offices, healthcare and retail." },
  { label: "Bandra.", text: "Lifestyle, hospitality, professional and consumer-facing brands." },
  { label: "Powai.", text: "Technology, education, professional services and residential businesses." },
  { label: "Lower Parel and BKC.", text: "Corporate, financial, consulting and B2B services." },
  { label: "Navi Mumbai and Thane.", text: "Businesses serving customers across the wider metropolitan region." },
];

const processSteps = [
  { icon: Users, title: "Step 1: Business and website understanding", description: "We review your business model, website, audience and current marketing." },
  { icon: Search, title: "Step 2: Research and audit", description: "We examine search opportunities, competitors, website issues and relevant channels." },
  { icon: Target, title: "Step 3: Strategy development", description: "We prioritize services, audiences, content and campaign objectives." },
  { icon: Settings, title: "Step 4: Implementation", description: "We carry out the agreed SEO, advertising, social, content or website work." },
  { icon: Eye, title: "Step 5: Monitoring", description: "We review metrics and campaign performance." },
  { icon: TrendingUp, title: "Step 6: Refinement", description: "We use findings to improve and plan the next activities. Timelines depend on scope, and we do not promise fixed timelines or outcomes." },
];

const faqs = [
  {
    question: "What do digital marketing services in Mumbai include?",
    answer:
      "They typically include SEO, local SEO, Google Ads and PPC, social media marketing, content marketing, website optimization, e-commerce marketing, email marketing and reporting. Which of these a business needs depends on its goals, audience, budget and current website, so a good provider recommends a focused mix rather than everything.",
  },
  {
    question: "How can digital marketing help a business in Mumbai?",
    answer:
      "Suitable channels can improve online discovery, help you reach relevant audiences, keep customers informed and create more opportunities for enquiries. It cannot guarantee leads or sales. Results depend on competition, website quality, budget, targeting and how well campaigns are planned, run and measured.",
  },
  {
    question: "How do I choose a digital marketing agency in Mumbai?",
    answer:
      "Look for services that match your needs, clear communication, transparent reporting and realistic expectations. Ask what will be measured and how. Be cautious about guaranteed rankings or results, and ask for experience that can be verified rather than relying on bold claims or unnamed success stories.",
  },
  {
    question: "Is SEO or Google Ads better for a Mumbai business?",
    answer:
      "Neither is better in every case. Google Ads can reach people searching now and is controlled by budget, while SEO builds organic visibility gradually and can keep delivering without per-click costs. Many businesses use both, with the balance set by timelines, competition, budget and goals.",
  },
  {
    question: "Can digital marketing help small businesses in Mumbai?",
    answer:
      "Yes, if priorities are realistic. A small business can start with one or two channels that fit its audience and location, such as local SEO, a tidy Google Business Profile or targeted search ads. Measuring what produces enquiries lets the budget move toward what works.",
  },
  {
    question: "Why is local SEO important for Mumbai businesses?",
    answer:
      "Many customers search for services near them, and local SEO helps eligible businesses appear for those searches. It depends on accurate Google Business Profile details, genuine reviews and relevant location information. It does not guarantee placement in Google Maps, and it must reflect real locations.",
  },
  {
    question: "How long does digital marketing take to show results?",
    answer:
      "It varies by channel. Paid campaigns can start generating traffic quickly, while SEO and content usually take longer to build momentum. Timing depends on competition, website condition, budget and implementation. We do not promise a fixed ranking or lead-generation timeline.",
  },
  {
    question: "How can I get started with DigLip7's digital marketing services?",
    answer:
      "Contact us through the contact page and share your website, services, target audience and marketing objectives. We will discuss your current activity and challenges to understand which channels suit your business and what a sensible strategy might involve, without any commitment implied.",
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
    "@id": "https://diglip7.com/india/mumbai/digital-marketing-services/#webpage",
    url: "https://diglip7.com/india/mumbai/digital-marketing-services/",
    name: "Digital Marketing Services in Mumbai | DigLip7",
    description: metaDescription,
    isPartOf: { "@id": "https://diglip7.com/#website" },
    about: { "@id": "https://diglip7.com/india/mumbai/digital-marketing-services/#service" },
    publisher: { "@id": "https://diglip7.com/#organization" },
    inLanguage: "en-IN",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://diglip7.com/india/mumbai/digital-marketing-services/#service",
    name: "Digital Marketing Services in Mumbai",
    serviceType: "Digital marketing",
    description:
      "Digital marketing services including SEO, local SEO, Google Ads and PPC, social media marketing, content marketing, website optimization, e-commerce marketing and measurement for businesses targeting Mumbai.",
    url: "https://diglip7.com/india/mumbai/digital-marketing-services/",
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
        name: "Digital Marketing Services in Mumbai",
        item: "https://diglip7.com/india/mumbai/digital-marketing-services/",
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

function MumbaiDigitalMarketingServices() {
  return (
    <div className="overflow-x-hidden bg-white w-full">
      <SEO
        title={metaTitle}
        description={metaDescription}
        canonical={pageUrl}
        ogType="website"
        ogDescription="Discover digital marketing solutions for Mumbai businesses, including SEO, paid advertising, social media, content marketing and website optimization."
        ogImage={images.hero.src}
        twitterDescription="Discover digital marketing solutions for Mumbai businesses, including SEO, paid advertising, social media, content marketing and website optimization."
        twitterImage={images.hero.src}
        schema={jsonLd}
      />
      <ScrollProgress />
      <BackToTop />

      <main>
        {/* Hero */}
        <LandingHero
          breadcrumb={breadcrumbTrail}
          titleDark="Digital Marketing Services in Mumbai"
          titleGradient="to Help Businesses Grow Online"
          ctaLabel="Discuss Your Requirements"
          image={images.hero}
          description={[
            "Digital marketing services in Mumbai help businesses improve their online visibility, reach relevant audiences and generate enquiries through channels such as SEO, Google Ads, social media, content marketing and website optimization.",
            <>
              At <span className="font-semibold text-blue-700">DigLip7</span>, we connect business objectives with how customers actually search and compare, choosing channels that suit your specific goals rather than applying a generic template.
            </>,
          ]}
        />

        <div className="bg-white">
          <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 w-full">
            {/* Digital Marketing for Mumbai Businesses: Where to Begin (stepping stones) */}
            <div className="max-w-6xl mx-auto mb-24">
              <div className="text-center mb-12">
                <SectionHeading color="text-teal-700">
                  Digital Marketing for Mumbai Businesses: Where to Begin
                </SectionHeading>
              </div>
              <div className="relative">
                <svg
                  aria-hidden="true"
                  className="hidden md:block absolute left-[16%] right-[16%] top-5 w-[68%] h-4"
                  viewBox="0 0 400 16"
                  preserveAspectRatio="none"
                >
                  <motion.line
                    x1="0"
                    y1="8"
                    x2="400"
                    y2="8"
                    stroke="#c89d5a"
                    strokeWidth="3"
                    strokeDasharray="8 10"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.6 }}
                  />
                </svg>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    "Digital marketing services in Mumbai help businesses improve their online visibility, reach relevant audiences and generate enquiries through channels such as SEO, Google Ads, social media, content marketing and website optimization.",
                    "Before choosing a service, most customers search, scroll and compare. They may find a clinic through a map listing, shortlist an interior designer from Instagram or click a search advertisement for an accountant. A useful online presence has to work across all these moments, so it is worth planning rather than reacting.",
                    "At DigLip7, we approach the work in four parts: research, planning, implementation and measurement. We connect business objectives with how customers actually search, and we choose channels because they suit your goals, not because they exist. A business does not need to be on every platform; it needs the right few, done properly.",
                  ].map((p, i) => (
                    <motion.div
                      key={i}
                      className="relative pt-10"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: i * 0.18 }}
                    >
                      <span className="absolute top-0 left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-gradient-to-br from-teal-600 to-teal-900 text-white font-bold flex items-center justify-center shadow-lg border-4 border-white z-10">
                        {i + 1}
                      </span>
                      <div
                        className={`h-full rounded-3xl p-7 pt-9 shadow-lg border hover:-translate-y-2 transition-transform ${
                          i === 0
                            ? "bg-gradient-to-br from-teal-700 to-teal-900 text-white border-transparent"
                            : "bg-white text-gray-700 border-teal-100"
                        }`}
                      >
                        <p className="leading-relaxed">{p}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Why Mumbai Businesses Need Digital Marketing (clipboard checklist) */}
            <div className="max-w-6xl mx-auto mb-24">
              <div className="text-center max-w-4xl mx-auto mb-10">
                <SectionHeading>Why Mumbai Businesses Need Digital Marketing</SectionHeading>
                <p className="text-gray-700 leading-relaxed">
                  Mumbai businesses compete for attention across industries and neighbourhoods, and online channels let them respond in practical ways:
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 items-start">
                <motion.div
                  className="relative rounded-3xl bg-white shadow-2xl border border-gray-200 p-6 sm:p-8 pt-12"
                  initial={{ opacity: 0, rotate: -2, y: 40 }}
                  whileInView={{ opacity: 1, rotate: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <span
                    aria-hidden="true"
                    className="absolute -top-4 left-1/2 -translate-x-1/2 w-28 h-8 rounded-lg bg-gradient-to-r from-teal-700 to-teal-900 shadow-lg"
                  />
                  <ul className="space-y-4">
                    {whyBullets.map((b, i) => (
                      <li key={b} className="flex items-start gap-3">
                        <motion.span
                          aria-hidden="true"
                          className="mt-0.5 w-7 h-7 shrink-0 rounded-md border-2 border-teal-600 flex items-center justify-center"
                          initial={{ backgroundColor: "rgba(255,255,255,0)" }}
                          whileInView={{ backgroundColor: "rgba(13,148,136,1)" }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + i * 0.35 }}
                        >
                          <motion.span
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + i * 0.35, type: "spring" }}
                          >
                            <CheckCircle2 className="w-5 h-5 text-white" />
                          </motion.span>
                        </motion.span>
                        <span className="text-gray-800 leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <div className="space-y-6">
                  <motion.p
                    className="rounded-3xl bg-gradient-to-br from-teal-700 to-teal-900 p-7 text-white/95 leading-relaxed shadow-xl"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    None of this removes the need for good products and service. Digital marketing makes good businesses easier to find and easier to contact.
                  </motion.p>
                  <motion.p
                    className="rounded-3xl bg-amber-50/70 border-l-4 border-[#c89d5a] p-7 text-gray-700 leading-relaxed shadow-md"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                  >
                    It also helps owners make decisions with evidence. Instead of guessing which message, platform or page is working, a business can look at search queries, enquiry sources and campaign data, then adjust. That habit matters more than any single tactic, especially for companies working with a limited budget.
                  </motion.p>
                </div>
              </div>
            </div>

            {/* Digital Marketing Services Offered by DigLip7 (index list) */}
            <div className="max-w-6xl mx-auto mb-24">
              <div className="text-center max-w-4xl mx-auto mb-10">
                <SectionHeading color="text-teal-700">Digital Marketing Services Offered by DigLip7</SectionHeading>
                <p className="text-gray-700 leading-relaxed">
                  Our services are described below. We recommend them according to need, not as a fixed bundle.
                </p>
              </div>
              <ul className="rounded-3xl bg-white shadow-xl border border-gray-100 overflow-hidden divide-y divide-gray-100">
                {services.map((s, i) => (
                  <motion.li
                    key={s.label}
                    className="group relative grid grid-cols-[auto_1fr] md:grid-cols-[auto_minmax(0,1fr)_minmax(0,1.5fr)] gap-x-5 gap-y-1 items-center px-5 sm:px-8 py-5 hover:bg-teal-50/60 transition-colors"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-20px" }}
                    transition={{ delay: (i % 4) * 0.05 }}
                  >
                    <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-600 to-[#c89d5a] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300" />
                    <span className="w-9 h-9 rounded-full bg-teal-50 text-teal-800 text-sm font-bold flex items-center justify-center group-hover:bg-teal-700 group-hover:text-white transition-colors">
                      {i + 1}
                    </span>
                    <strong className="text-gray-900 text-base sm:text-lg group-hover:text-teal-700 transition-colors">
                      {s.label}
                    </strong>
                    <p className="col-span-2 md:col-span-1 md:col-start-3 text-gray-600 text-sm sm:text-base leading-relaxed">
                      {s.text}
                      {s.link && (
                        <>
                          {" "}
                          See{" "}
                          <Link to={s.link.href} className={inlineLink}>
                            {s.link.text}
                          </Link>
                          .
                        </>
                      )}
                    </p>
                  </motion.li>
                ))}
              </ul>
              <MidCta
                label="Explore the Right Marketing Channels"
                href="https://wa.me/919650608788?text=Hello%20DigLip7%20Team%2C%20I%20am%20interested%20in%20exploring%20digital%20marketing%20channels%20for%20my%20business%20in%20Mumbai."
                className="mt-10"
              />
            </div>

            {/* SEO Services in Mumbai (magnifier) */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-24">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <MagnifierImage image={images.seo} />
              </motion.div>
              <div>
                <FloatingElement>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    SEO Services in Mumbai
                  </h2>
                </FloatingElement>
                <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                  <p>
                    SEO helps a website earn organic visibility for the searches that matter to your business. It starts with keyword research based on search intent, followed by technical audits, on-page and content optimization, better website architecture and internal linking, local SEO considerations and competitor analysis. Content planning builds topical relevance, and performance is monitored in analytics tools.
                  </p>
                  <p>
                    SEO is ongoing, and results depend on competition, website condition, content quality and implementation. A separate <Link to="/india/mumbai/seo-services/" className={inlineLink}>Mumbai SEO services</Link> page covers organic search in more depth; here it is one part of a broader marketing mix.
                  </p>
                </div>
              </div>
            </div>

            {/* Local SEO for Mumbai Businesses (map grid) */}
            <div className="max-w-7xl mx-auto mb-24">
              <div className="relative overflow-hidden rounded-3xl border border-teal-100 shadow-xl bg-teal-50 p-6 sm:p-12">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-60"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(13,148,136,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(13,148,136,0.12) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
                <span aria-hidden="true" className="absolute -left-10 top-1/3 w-[130%] h-6 -rotate-6 bg-white/70" />
                <span aria-hidden="true" className="absolute -left-10 top-2/3 w-[130%] h-4 rotate-3 bg-white/60" />
                {[
                  { l: "6%", t: "14%" },
                  { l: "88%", t: "20%" },
                  { l: "12%", t: "82%" },
                  { l: "92%", t: "78%" },
                ].map((p, i) => (
                  <motion.span
                    key={i}
                    aria-hidden="true"
                    className="absolute w-10 h-10 rounded-full bg-gradient-to-br from-teal-600 to-teal-900 shadow-xl flex items-center justify-center"
                    style={{ left: p.l, top: p.t }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.5 }}
                  >
                    <MapPin className="w-5 h-5 text-white" />
                  </motion.span>
                ))}
                <div className="relative">
                  <div className="text-center mb-10">
                    <SectionHeading color="text-teal-800">Local SEO for Mumbai Businesses</SectionHeading>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {[
                      "Local SEO makes eligible businesses easier to find in relevant local searches. It relies on a complete and accurate Google Business Profile, consistent name, address and phone details, appropriate categories, genuine reviews with professional responses, location-relevant website content and reliable local listings.",
                      "Search intent differs by area. Someone searching in Andheri may want a nearby service this afternoon, while a Bandra or Powai search may be comparison-driven. Where possible, track calls, direction requests and website visits. Local SEO does not guarantee placement in Google Maps, and we do not recommend fake addresses, duplicate profiles or misleading service-area claims.",
                    ].map((p, i) => (
                      <motion.p
                        key={i}
                        className="bg-white/90 backdrop-blur rounded-3xl p-7 shadow-lg border border-white text-gray-700 leading-relaxed"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -6 }}
                        transition={{ delay: i * 0.15, duration: 0.6 }}
                      >
                        {p}
                      </motion.p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Google Ads and PPC Advertising in Mumbai (equalizer) */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-24 bg-gray-50 rounded-3xl p-8 sm:p-12 border border-gray-100">
              <div>
                <FloatingElement>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    Google Ads and PPC Advertising in Mumbai
                  </h2>
                </FloatingElement>
                <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                  <p>
                    Paid search can place your business in front of people actively searching for what you offer. Effective campaigns depend on keyword and audience research, sensible campaign and ad-group structure, relevant ad copy, landing page relevance, location and schedule targeting, search-term analysis and negative keywords. Display advertising may support wider awareness where appropriate.
                  </p>
                  <p>
                    Conversion tracking is essential. Clicks and impressions show activity, but qualified enquiries show whether the campaign is useful. Budgets are monitored and campaigns adjusted as data arrives.
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
                  <Img image={images.ppc} />
                </Card3D>
                <EqualizerBars />
              </motion.div>
            </div>

            {/* Social Media Marketing Services (reaction bubbles) */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-24">
              <motion.div
                className="order-2 lg:order-1"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <ReactionBubbles image={images.social} />
              </motion.div>
              <div className="order-1 lg:order-2">
                <FloatingElement>
                  <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-6 leading-tight">
                    Social Media Marketing Services
                  </h2>
                </FloatingElement>
                <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                  <p className="pl-5 border-l-4 border-teal-600">
                    Social media helps businesses communicate with audiences and stay visible. Work may include strategy and platform selection, content calendars, creative development, short-form video planning, community engagement guidelines and Meta advertising for paid social campaigns.
                  </p>
                  <p className="pl-5 border-l-4 border-[#c89d5a]">
                    Instagram and Facebook often suit consumer-facing businesses, while LinkedIn is usually stronger for B2B services. The choice should follow your audience, industry and campaign objective, and performance is measured against those objectives.
                  </p>
                </div>
              </div>
            </div>

            {/* Content Marketing Services (curtain reveal) */}
            <div className="max-w-6xl mx-auto mb-24">
              <div className="text-center mb-10">
                <SectionHeading>Content Marketing Services</SectionHeading>
              </div>
              <CurtainImage image={images.content} />
              <motion.p
                className="relative -mt-10 sm:-mt-16 mx-auto max-w-4xl bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-teal-100 text-gray-700 leading-relaxed text-base sm:text-lg"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Content supports discovery, education and decision-making. That includes service-page content, blog articles, industry guides and resource pages, landing page copy, product and category descriptions, content refreshes, topic research and editorial planning, along with a plan for distribution. We emphasize originality, accuracy, reader value and a clear link to what you actually offer.
              </motion.p>
            </div>

            {/* Website Design, Development and Conversion Optimization (funnel) */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-12 items-center mb-24 bg-gradient-to-br from-gray-50 to-teal-50/30 rounded-3xl p-8 sm:p-12 border border-gray-100">
              <FunnelArt />
              <div>
                <FloatingElement>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    Website Design, Development and Conversion Optimization
                  </h2>
                </FloatingElement>
                <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                  <p>
                    Advertising and search bring visitors, but the website decides what happens next. We look at responsive design, mobile-friendly navigation, page speed, clear service descriptions, contact forms and enquiry pathways, click-to-call and WhatsApp options where appropriate, landing page structure and conversion tracking.
                  </p>
                  <p>
                    No design automatically increases conversions. The aim is to remove avoidable obstacles and learn from user behaviour.
                  </p>
                </div>
              </div>
            </div>

            {/* E-commerce Digital Marketing (flip tiles) */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center mb-24">
              <div>
                <FloatingElement>
                  <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-6 leading-tight">
                    E-commerce Digital Marketing
                  </h2>
                </FloatingElement>
                <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                  <p className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    Online stores can combine several channels: e-commerce SEO, product and category page optimization, useful product descriptions, Google Shopping and paid search where appropriate, social campaigns, product feed quality and retargeting where consent and platform policies allow. Cart and checkout experience also matters, and sales should be measured accurately.
                  </p>
                  <p className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    Strategy should consider product margins, inventory, audience and the customer journey, since promoting a product with thin margins or poor stock availability rarely makes sense.
                  </p>
                </div>
              </div>
              <TileFlip />
            </div>

            {/* Digital Marketing for Different Industries in Mumbai (masonry) */}
            <div className="max-w-7xl mx-auto mb-24">
              <div className="text-center max-w-4xl mx-auto mb-12">
                <SectionHeading>Digital Marketing for Different Industries in Mumbai</SectionHeading>
                <p className="text-gray-700 leading-relaxed">
                  These are potential applications, not claims of completed DigLip7 client work.
                </p>
              </div>
              <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
                {industries.map((it, i) => {
                  const accents = ["border-t-teal-600", "border-t-[#c89d5a]", "border-t-teal-400"];
                  return (
                    <motion.div
                      key={it.label}
                      className={`mb-6 break-inside-avoid rounded-3xl bg-white p-6 shadow-lg border border-gray-100 border-t-4 ${accents[i % 3]} hover:shadow-2xl transition-shadow`}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -6, rotate: i % 2 ? 0.6 : -0.6 }}
                      transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
                    >
                      <span className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center mb-4">
                        <it.icon className="w-6 h-6" />
                      </span>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        <strong className="block text-gray-900 text-lg mb-1">{it.label}</strong>
                        {it.text}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* How Strategy Changes Across Mumbai (metro line) */}
            <div className="max-w-5xl mx-auto mb-24">
              <div className="text-center max-w-4xl mx-auto mb-12">
                <SectionHeading color="text-teal-700">How Strategy Changes Across Mumbai</SectionHeading>
                <p className="text-gray-700 leading-relaxed">
                  Location influences who you are trying to reach. The following are illustrative market contexts, not verified customer locations or DigLip7 office locations.
                </p>
              </div>
              <div className="relative pl-12 sm:pl-16">
                <div aria-hidden="true" className="absolute left-4 sm:left-6 top-0 bottom-0 w-2 rounded-full bg-gradient-to-b from-teal-600 via-[#c89d5a] to-teal-600" />
                <motion.span
                  aria-hidden="true"
                  className="absolute left-[10px] sm:left-[18px] w-6 h-6 rounded-full bg-white border-4 border-teal-700 shadow-lg z-10"
                  animate={{ top: ["0%", "96%", "0%"] }}
                  transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="space-y-6">
                  {stations.map((s, i) => (
                    <motion.div
                      key={s.label}
                      className="relative group"
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-30px" }}
                      transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
                    >
                      <span className="absolute -left-[3.15rem] sm:-left-[4.1rem] top-5 w-5 h-5 rounded-full bg-white border-4 border-[#c89d5a] group-hover:scale-150 transition-transform" />
                      <div className="rounded-2xl bg-white p-6 shadow-md border border-gray-100 group-hover:shadow-xl group-hover:-translate-y-1 transition-all">
                        <p className="text-gray-600 leading-relaxed">
                          <strong className="text-gray-900 text-lg">{s.label}</strong> {s.text}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-center max-w-4xl mx-auto mt-10">
                Your own service coverage should decide targeting, and we avoid writing a separate keyword-driven page for every neighbourhood.
              </p>
            </div>

            {/* Integrated Digital Marketing Strategy (gears) */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-12 items-center mb-24 bg-gray-50 rounded-3xl p-8 sm:p-12 border border-gray-100">
              <GearsArt />
              <div>
                <FloatingElement>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    Integrated Digital Marketing Strategy
                  </h2>
                </FloatingElement>
                <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                  <p>
                    Channels work better when they share a purpose. <Link to="/india/seo-services/" className={inlineLink}>SEO services in India</Link> support ongoing organic discovery, Google Ads gives targeted paid visibility, social media supports engagement, content marketing educates customers, website optimization improves the experience, email marketing keeps communication relevant and analytics shows what is working.
                  </p>
                  <p>
                    Consider a Powai education provider as a purely illustrative example. Search ads might capture people looking for a course today, content might answer questions parents ask before applying, and email might follow up with people who enquired earlier. Each channel has a different role, and measuring them together shows how they support one another.
                  </p>
                  <p>
                    How much of each you need depends on your goals, resources and customer journey. A business with a short sales cycle may lean on search ads, while one with a longer decision process may rely more on content and email.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Digital Marketing Process */}
            <ProcessSection
              title="Our Digital Marketing Process"
              steps={processSteps}
              cta={
                <MidCta
                  label="Talk to Our Team"
                  href="https://wa.me/919650608788?text=Hello%20DigLip7%20Team%2C%20I%20would%20like%20to%20talk%20to%20your%20team%20regarding%20digital%20marketing%20services%20in%20Mumbai."
                  className="mt-12"
                />
              }
            />

            {/* Measuring Digital Marketing Performance (radar) */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-24">
              <div>
                <FloatingElement>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    Measuring Digital Marketing Performance
                  </h2>
                </FloatingElement>
                <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                  <p>
                    The right measures depend on your objectives. They may include organic clicks and impressions, keyword performance, relevant website sessions, calls and form submissions, WhatsApp enquiries where tracking is configured, advertising clicks and conversions, cost per lead where data is reliable, landing page engagement and e-commerce revenue where tracked correctly.
                  </p>
                  <p>
                    Google Analytics 4, Google Search Console and advertising-platform reports each cover part of this. Good reporting distinguishes activity, traffic and actual business outcomes, because more clicks do not always mean more customers.
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
                  <Img image={images.analytics} />
                </Card3D>
                <RadarArt />
              </motion.div>
            </div>

            {/* Why Consider DigLip7 for Digital Marketing Services in Mumbai? (aurora) */}
            <div className="max-w-6xl mx-auto mb-12">
              <motion.div
                className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-900 to-teal-800 p-8 sm:p-14 shadow-2xl"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <motion.span
                  aria-hidden="true"
                  className="absolute -top-16 -left-10 w-72 h-72 rounded-full bg-teal-400/30 blur-3xl"
                  animate={{ x: [0, 80, 0], y: [0, 40, 0] }}
                  transition={{ duration: 12, repeat: Infinity }}
                />
                <motion.span
                  aria-hidden="true"
                  className="absolute -bottom-20 -right-10 w-80 h-80 rounded-full bg-[#c89d5a]/30 blur-3xl"
                  animate={{ x: [0, -80, 0], y: [0, -40, 0] }}
                  transition={{ duration: 14, repeat: Infinity }}
                />
                <motion.span
                  aria-hidden="true"
                  className="absolute right-6 top-6"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                  <ShieldCheck className="w-24 h-24 text-white/10" />
                </motion.span>
                <div className="relative">
                  <FloatingElement>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                      Why Consider DigLip7 for Digital Marketing Services in Mumbai?
                    </h2>
                  </FloatingElement>
                  <p className="text-white/95 leading-relaxed text-base sm:text-lg">
                    We build strategy around business requirements and can combine organic and paid options. Our work includes search-focused website and content optimization, audience and keyword research, campaign planning and performance monitoring. We communicate and report transparently, base recommendations on available data and align activity with your priorities. We also try to be honest about limits: if a channel is unlikely to suit your budget or audience, we would rather say so than add it to a proposal. We are a <Link to="/" className="text-white font-semibold underline hover:text-yellow-200 transition-colors">DigLip7 digital marketing services</Link> and technology provider, and our recommendations stay tied to information we can verify about your business.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* FAQ */}
          <FaqSection title="Frequently Asked Questions" faqs={faqs} />

          {/* Final CTA */}
          <CtaSection
            headingLead="Discuss Your Digital Marketing"
            headingAccent="Requirements"
            text={
              <>
                <p>
                  If you are weighing up your options, a conversation helps. Tell us about your business and industry, your current website and marketing, your target customers and service areas, your main objectives, preferred channels and the challenges you face.
                </p>
                <p>
                  <Link to="/contact" className="underline font-semibold text-white hover:text-yellow-200 transition-colors">
                    Contact DigLip7
                  </Link>{" "}
                  to explore a digital marketing strategy for your business.
                </p>
              </>
            }
            ctaLabel="Discuss Your Digital Marketing Requirements"
          />
        </div>
      </main>
    </div>
  );
}

export default MumbaiDigitalMarketingServices;