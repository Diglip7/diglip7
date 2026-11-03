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
  Cpu,
  Factory,
  UtensilsCrossed,
  Mail,
  Laptop,
  Rocket,
  Compass,
  Check,
} from "lucide-react";

// ===========================================================================
// Shared visual building blocks (matching existing DigLip7 design language)
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

// Landing Hero
const LandingHero = ({ breadcrumb, titleDark, titleGradient, ctaLabel, image, whatsappUrl, description }) => {
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

            {description ? (
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
            ) : (
              <p className="mt-6 text-gray-700 text-base sm:text-lg leading-relaxed max-w-2xl">
                Digital marketing services in Pune help businesses improve online visibility and connect with potential customers through SEO, Google Ads, social media marketing, content marketing, and website optimization.
              </p>
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

          {/* Right Section - 3D Hero Container (container kept, image removed) */}
          <motion.div
            className="w-full lg:w-[42%] flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card3D className="w-full max-w-md lg:max-w-none">
              <img
                src={image?.src || "/images/digital-marketing-services-pune.webp"}
                alt={image?.alt || "Digital marketing team planning online marketing strategies for business growth"}
                width={image?.width || 1600}
                height={image?.height || 900}
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

// Process Section (Numbered cards with connecting lines)
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center bg-gray-50/80 rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="relative flex items-center justify-center w-16 h-16 rounded-full border-4 border-blue-300 bg-white shadow-md mb-4">
              <step.icon className="w-8 h-8 text-blue-600" />
              <span className="absolute -top-2 -right-2 bg-teal-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full shadow">
                {index + 1}
              </span>
            </div>

            <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>

    {closing && (
      <div className="mt-12 max-w-4xl mx-auto">
        <Link to="/contact">
          <motion.button
            className="px-8 py-3.5 bg-gradient-to-r from-teal-700 to-teal-900 text-white font-semibold rounded-full shadow-xl hover:shadow-teal-500/50 transition-all duration-300 cursor-pointer inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Talk to Our Team
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </Link>
      </div>
    )}
  </div>
);

// FAQ Accordion
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

// CTA Banner
const CtaSection = ({ headingLead, headingAccent, text, ctaLabel, listItems }) => {
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

          {listItems && listItems.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto mb-8 text-left">
              {listItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 bg-white/10 backdrop-blur rounded-xl px-4 py-2.5 border border-white/20 text-white/95 text-sm">
                  <Check className="w-4 h-4 text-yellow-300 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          )}

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

// Real image component with lazy loading, responsive styling and placeholder fallback
const Img = ({
  image,
  icon: Icon = Sparkles,
  badge = "Pune Digital Marketing",
  className = "",
  aspect = "aspect-[16/9]",
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !image?.src) {
    return (
      <div
        className={`relative w-full ${aspect} rounded-2xl overflow-hidden bg-gradient-to-br from-slate-50 via-teal-50/40 to-slate-100 border border-teal-100/90 shadow-xl flex flex-col items-center justify-center p-6 sm:p-8 text-center select-none ${className}`}
      >
        <div className="absolute inset-0 opacity-30 pointer-events-none bg-[radial-gradient(#0f766e_1px,transparent_1px)] [background-size:16px_16px]" />
        {Icon && (
          <motion.div
            className="relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-700 to-teal-900 text-white flex items-center justify-center mb-3 shadow-lg shadow-teal-900/20"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {React.createElement(Icon, { className: "w-7 h-7 text-yellow-300" })}
          </motion.div>
        )}
        {badge && (
          <span className="relative z-10 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-teal-800 bg-teal-100/70 px-3 py-0.5 rounded-full border border-teal-200 mb-2">
            {badge}
          </span>
        )}
        {image?.alt && (
          <p className="relative z-10 text-xs sm:text-sm font-semibold text-gray-800 max-w-sm leading-snug">
            {image.alt}
          </p>
        )}
      </div>
    );
  }

  return (
    <img
      src={image.src}
      alt={image.alt || ""}
      width={image.width || 1200}
      height={image.height || 675}
      loading="lazy"
      decoding="async"
      onError={() => setHasError(true)}
      className={`w-full object-cover rounded-2xl shadow-xl bg-gray-50 ${aspect} ${className}`.trim()}
    />
  );
};

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

// Interactive service tabs (all 11 services)
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
              <p className="relative text-gray-700 leading-relaxed text-base sm:text-lg mb-4">
                {it.text}
              </p>
              {it.linkText && it.href && (
                <div className="relative pt-2">
                  <Link to={it.href} className={inlineLink}>
                    {it.linkText} &rarr;
                  </Link>
                </div>
              )}
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map((it, i) => (
        <motion.div
          key={it.label}
          tabIndex={0}
          onMouseEnter={() => setActive(i)}
          onFocus={() => setActive(i)}
          onClick={() => setActive(i)}
          className={`relative min-w-0 overflow-hidden rounded-3xl p-6 shadow-lg cursor-pointer border transition-all duration-300 ${
            active === i
              ? "bg-gradient-to-br from-teal-700 to-teal-900 text-white border-transparent scale-[1.02]"
              : "bg-white text-gray-700 border-gray-100 hover:border-teal-200"
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
// Page Metadata & Data
// ===========================================================================

const pageUrl = "https://diglip7.com/india/pune/digital-marketing-services/";
const metaTitle = "Digital Marketing Services in Pune | DigLip7";
const metaDescription =
  "Explore digital marketing services in Pune from DigLip7. Improve online visibility through SEO, Google Ads, social media, content marketing and website optimization.";

const breadcrumbTrail = [
  { label: "Home", href: "/" },
  { label: "Digital Marketing Services in Pune", href: "/india/pune/digital-marketing-services/" },
];

const images = {
  hero: {
    src: "/images/digital-marketing-services-pune.webp",
    alt: "Digital marketing team planning online marketing strategies for business growth",
    width: 1600,
    height: 900,
  },
  seo: {
    src: "/images/seo-services-pune.webp",
    alt: "SEO specialists reviewing organic search visibility and website optimization",
    width: 1200,
    height: 675,
  },
  local: {
    src: "/images/local-seo-pune.webp",
    alt: "Local search optimization strategy for businesses serving customers in Pune",
    width: 1200,
    height: 675,
  },
  ppc: {
    src: "/images/ppc-advertising-pune.webp",
    alt: "Paid advertising campaign planning and search performance analysis",
    width: 1200,
    height: 675,
  },
  social: {
    src: "/images/social-media-marketing-pune.webp",
    alt: "Social media marketing team planning digital content and audience engagement",
    width: 1200,
    height: 675,
  },
  content: {
    src: "/images/content-marketing-pune.webp",
    alt: "Content marketing strategy and editorial planning for business websites",
    width: 1200,
    height: 675,
  },
  analytics: {
    src: "/images/digital-marketing-analytics-pune.webp",
    alt: "Digital marketing performance analysis and campaign reporting",
    width: 1200,
    height: 675,
  },
};

const services = [
  {
    label: "1. Search Engine Optimization (SEO)",
    href: "/digital-market/seoservices/",
    linkText: "See our SEO services",
    text: "Improves organic visibility for people searching for what you offer. Suited to businesses with a longer-term view of discovery.",
  },
  {
    label: "2. Local SEO",
    text: "Helps eligible businesses appear in relevant nearby searches. It suits clinics, schools, retailers, and service providers that serve customers in defined areas.",
  },
  {
    label: "3. Google Ads and PPC Advertising",
    href: "/digital-market/PPC-Advertising",
    linkText: "Explore PPC advertising services",
    text: "Reaches people actively searching, with faster visibility than organic work. Useful for lead generation and promotions.",
  },
  {
    label: "4. Social Media Marketing",
    text: "Supports brand communication, audience engagement, and campaign reach on platforms such as Instagram, Facebook, and LinkedIn.",
  },
  {
    label: "5. Content Marketing",
    text: "Creates service pages, articles, and guides that answer customer questions during the research stage.",
  },
  {
    label: "6. Website Design and Development",
    text: "Builds or improves a responsive, easy-to-navigate website so visitors from any channel can find information and inquire.",
  },
  {
    label: "7. E-commerce Marketing",
    text: "Improves product discovery and supports online sales for retail and D2C brands.",
  },
  {
    label: "8. Online Reputation Management",
    href: "/online-repulation-management",
    linkText: "Read about online reputation management",
    text: "Helps businesses monitor reviews and public feedback and respond professionally.",
  },
  {
    label: "9. Email Marketing",
    text: "Keeps in touch with enquirers and customers through relevant, consent-based follow-up.",
  },
  {
    label: "10. Conversion Rate Optimization",
    text: "Refines pages, forms, and calls to action so more of your existing visitors become inquiries.",
  },
  {
    label: "11. AI-Powered Digital Marketing and Answer-Focused Content",
    href: "/digital-market/Ai-powered-Digital-Marketing",
    linkText: "Learn about AI-powered digital marketing",
    text: "Uses AI tools to support research, analysis, and content planning, and structures content so it clearly answers questions. No tool can guarantee visibility in AI-generated answers.",
  },
];

const puneWhyBenefits = [
  "Improve discovery of your products and services in relevant searches.",
  "Reach both local customers and wider regional or national audiences.",
  "Build brand awareness through consistent communication.",
  "Support enquiries through search and paid campaigns.",
  "Give customers useful content while they research their options.",
  "Improve the website experience and the path to an inquiry.",
  "Show which channels contribute to your business objectives.",
];

const industries = [
  {
    icon: Laptop,
    label: "IT and Software Companies",
    text: "B2B SEO, service pages, technical content, and LinkedIn marketing, planned around longer sales cycles.",
  },
  {
    icon: Rocket,
    label: "SaaS and Startups",
    text: "Product positioning, educational content, paid acquisition and landing pages built for trial or demo inquiries.",
  },
  {
    icon: Factory,
    label: "Manufacturing and Industrial Businesses",
    text: "Product and capability pages, technical SEO, and industry content that match B2B search intent and make enquiries simple.",
  },
  {
    icon: GraduationCap,
    label: "Education and Training Institutes",
    text: "Course pages, local SEO, educational content, and inquiry campaigns, without unsupported admission or placement promises.",
  },
  {
    icon: Building2,
    label: "Real Estate Businesses",
    text: "Project pages, location content, paid campaigns and well-optimized lead forms.",
  },
  {
    icon: HeartPulse,
    label: "Healthcare and Clinics",
    text: "Local visibility, accurate service information, easy appointment inquiries, and responsible, factual health content.",
  },
  {
    icon: ShoppingCart,
    label: "Retail and E-commerce Brands",
    text: "Product discovery, category optimization, social media, and sales campaigns.",
  },
  {
    icon: UtensilsCrossed,
    label: "Hospitality and Restaurants",
    text: "Local discovery, current menus, reviews, booking pathways, and strong visual content.",
  },
];

const puneAreas = [
  {
    name: "Hinjewadi",
    desc: "IT companies, technology services, SaaS, and professional businesses.",
  },
  {
    name: "Kharadi",
    desc: "technology businesses, offices, professional services, and residential markets.",
  },
  {
    name: "Baner and Wakad",
    desc: "local services, healthcare, retail, and growing businesses.",
  },
  {
    name: "Hadapsar and Magarpatta",
    desc: "offices, technology firms, education, and service providers.",
  },
  {
    name: "Viman Nagar",
    desc: "education, hospitality, retail, and professional services.",
  },
  {
    name: "Kothrud and Aundh",
    desc: "education, healthcare, professional services, and local businesses.",
  },
  {
    name: "Pimpri-Chinchwad (PCMC)",
    desc: "a separate industrial and civic area with manufacturing, automotive suppliers, and local services, so it often needs its own audience and keyword approach.",
  },
];

const processSteps = [
  {
    icon: Users,
    title: "Step 1 – Business Understanding",
    description: "Review your business model, website, audience, and objectives.",
  },
  {
    icon: Eye,
    title: "Step 2 – Research and Audit",
    description: "Examine search visibility, website performance, competitors, and existing campaigns.",
  },
  {
    icon: Target,
    title: "Step 3 – Strategy Planning",
    description: "Select services, audiences, content priorities, and performance indicators.",
  },
  {
    icon: Settings,
    title: "Step 4 – Implementation",
    description: "Carry out the agreed SEO, advertising, social, content, or website work.",
  },
  {
    icon: BarChart3,
    title: "Step 5 – Monitoring",
    description: "Review campaign and website performance.",
  },
  {
    icon: TrendingUp,
    title: "Step 6 – Optimization",
    description: "Use findings to refine campaigns and prioritize improvements.",
  },
];

const faqs = [
  {
    question: "What do digital marketing services in Pune include?",
    answer:
      "They typically include SEO, local SEO, Google Ads, social media marketing, content marketing, website optimization and, where relevant, e-commerce marketing, email marketing and reputation management. The exact mix depends on your business goals.",
  },
  {
    question: "How can digital marketing help a business in Pune?",
    answer:
      "Suitable channels can improve online discovery, reach relevant audiences and create opportunities for enquiries. They also give you data on what is working so you can refine your approach.",
  },
  {
    question: "How do I choose a digital marketing agency in Pune?",
    answer:
      "Look for relevant services, clear communication, transparent reporting, realistic expectations and experience you can verify. Be cautious of anyone guaranteeing rankings, leads or revenue.",
  },
  {
    question: "Is SEO or Google Ads better for businesses in Pune?",
    answer:
      "Neither is better in every case. SEO builds organic visibility over time, while Google Ads can place you in front of active searchers sooner but requires ongoing spend. Many businesses use both, depending on budget and goals.",
  },
  {
    question: "Can digital marketing help small businesses in Pune?",
    answer:
      "Yes. Smaller businesses can start with the channels closest to their customers, such as a Google Business Profile, a clear website and focused campaigns, then expand as budget and objectives allow.",
  },
  {
    question: "Why is local SEO important for Pune businesses?",
    answer:
      "Many customers search with local intent, for example a clinic, school or repair service close to where they live or work. Accurate Google Business Profile details, genuine reviews and relevant location information help eligible businesses appear in those searches, though placement cannot be guaranteed.",
  },
  {
    question: "How long does digital marketing take to show results?",
    answer:
      "Timelines vary by service, competition, website condition, budget and implementation. Paid campaigns can generate visits sooner, while SEO and content generally take longer. No fixed ranking or lead timeline can be promised.",
  },
  {
    question: "How can I get started with DigLip7's digital marketing services?",
    answer:
      "Share your website, industry, target audience and marketing objectives through the contact page, and the team can discuss which services may suit your business.",
  },
];

const requirementSharePoints = [
  "Your industry and business model.",
  "Your website URL.",
  "Your target customers and service areas.",
  "Your current marketing activities.",
  "Your main business objectives.",
  "Your preferred marketing channels.",
  "Any website or campaign challenges.",
];

// JSON-LD (Organization, WebPage, Service, BreadcrumbList, FAQPage)
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://diglip7.com/#organization",
      name: "DigLip7 Tech Pvt Ltd",
      url: "https://diglip7.com/",
    },
    {
      "@type": "WebPage",
      "@id": "https://diglip7.com/india/pune/digital-marketing-services/#webpage",
      url: "https://diglip7.com/india/pune/digital-marketing-services/",
      name: "Digital Marketing Services in Pune | DigLip7",
      description:
        "Explore digital marketing services in Pune from DigLip7. Improve online visibility through SEO, Google Ads, social media, content marketing and website optimization.",
      isPartOf: {
        "@id": "https://diglip7.com/#website",
      },
      about: {
        "@id": "https://diglip7.com/india/pune/digital-marketing-services/#service",
      },
      publisher: {
        "@id": "https://diglip7.com/#organization",
      },
      breadcrumb: {
        "@id": "https://diglip7.com/india/pune/digital-marketing-services/#breadcrumb",
      },
      inLanguage: "en-IN",
    },
    {
      "@type": "Service",
      "@id": "https://diglip7.com/india/pune/digital-marketing-services/#service",
      name: "Digital Marketing Services in Pune",
      serviceType: "Digital marketing",
      description:
        "Digital marketing services for businesses in Pune, including SEO, local SEO, Google Ads, social media marketing, content marketing, website optimization and e-commerce marketing.",
      url: "https://diglip7.com/india/pune/digital-marketing-services/",
      provider: {
        "@id": "https://diglip7.com/#organization",
      },
      areaServed: {
        "@type": "City",
        name: "Pune",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://diglip7.com/india/pune/digital-marketing-services/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://diglip7.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Digital Marketing Services in Pune",
          item: "https://diglip7.com/india/pune/digital-marketing-services/",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://diglip7.com/india/pune/digital-marketing-services/#faq",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.answer,
        },
      })),
    },
  ],
};

// ===========================================================================
// Pune Digital Marketing Services Component
// ===========================================================================

function PuneDigitalMarketingServices() {
  return (
    <div className="overflow-x-hidden bg-white w-full">
      <SEO
        title={metaTitle}
        description={metaDescription}
        canonical={pageUrl}
        ogType="website"
        ogDescription="Explore digital marketing solutions for Pune businesses, including SEO, Google Ads, social media marketing, content and website optimization."
        twitterTitle="Digital Marketing Services in Pune | DigLip7"
        twitterDescription="Explore digital marketing solutions for Pune businesses, including SEO, Google Ads, social media marketing, content and website optimization."
        schema={jsonLd}
      />
      <ScrollProgress />
      <BackToTop />

      <main>
        {/* Hero */}
        <LandingHero
          breadcrumb={breadcrumbTrail}
          titleDark="Digital Marketing Services in Pune"
          titleGradient="to Strengthen Your Online Presence"
          ctaLabel="Discuss Your Requirements"
          image={images.hero}
          description={[
            "Digital marketing services in Pune help businesses improve online visibility and connect with potential customers through SEO, Google Ads, social media marketing, content marketing, and website optimization.",
            <>
              At <span className="font-semibold text-blue-700">DigLip7</span>, we build structured, multi-channel marketing campaigns that match Pune's competitive market—combining search rankings, targeted paid ads, and brand-building content for long-term growth.
            </>,
          ]}
        />

        <div className="bg-white">
          <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 w-full">
            
            {/* Intro & 4 Stages */}
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
                    Structured Digital Marketing for Pune Businesses
                  </h2>
                </FloatingElement>
                <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                  <p className="bg-gradient-to-br from-teal-700 to-teal-900 text-white rounded-2xl p-6 shadow-xl leading-relaxed">
                    Pune has a varied business environment, from IT parks and SaaS startups to manufacturers, colleges, clinics, and neighborhood service providers. Before they call or fill in a form, most customers search, compare websites, read reviews, and check social profiles. A consistent online presence helps a business obxm eq in those moments and makes it easier for the right people to ouezd ved.
                  </p>
                  <p className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-gray-700 leading-relaxed">
                    <Link to="/" className={inlineLink}>DigLip7</Link> approaches digital marketing in four stages: <strong>research</strong>, <strong>strategy</strong>, <strong>implementation</strong>, and <strong>measurement</strong>. Channels are chosen according to your objectives, audience, and budget, so SEO, paid advertising, social media, and content can work together instead of running as separate activities.
                  </p>
                  <div className="pt-2">
                    <Link to="/contact">
                      <motion.button
                        className="px-6 py-3 bg-gradient-to-r from-teal-700 to-teal-900 text-white font-semibold rounded-full shadow-lg hover:shadow-teal-500/50 transition-all duration-300 inline-flex items-center gap-2 cursor-pointer"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        Discuss Your Requirements
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Businesses in Pune Need Digital Marketing */}
            <div className="max-w-7xl mx-auto mb-24">
              <div className="text-center max-w-5xl mx-auto mb-12">
                <SectionHeading>Why Businesses in Pune Need Digital Marketing</SectionHeading>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  A planned marketing strategy helps a business compete for attention in crowded search results and social feeds. Used well, digital channels can:
                </p>
              </div>

              {/* Benefits Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {puneWhyBenefits.map((benefit, i) => (
                  <motion.div
                    key={benefit}
                    className="flex items-start gap-3.5 rounded-2xl p-6 bg-gradient-to-br from-teal-50/60 to-white border border-teal-100 shadow-md hover:shadow-xl transition-shadow"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
                  >
                    <span className="w-9 h-9 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-teal-700" />
                    </span>
                    <p className="text-gray-800 text-sm sm:text-base leading-relaxed font-medium">
                      {benefit}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="bg-gray-50 rounded-3xl p-8 sm:p-10 shadow-lg border-l-4 border-[#c89d5a] text-gray-700 leading-relaxed text-base sm:text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Pune businesses also compete across very different audiences. A software firm in Hinjewadi may need to reach technology buyers across India, while a clinic in Kothrud mainly needs to be found by people living nearby. A planned strategy matches the channel to the customer instead of copying what worked for someone else.
              </motion.div>
            </div>

            {/* Digital Marketing Services Offered by DigLip7 (Tabs) */}
            <div className="max-w-7xl mx-auto mb-24 rounded-3xl bg-gradient-to-br from-gray-50 to-teal-50/30 p-6 sm:p-12 border border-gray-100 shadow-md">
              <div className="text-center max-w-4xl mx-auto mb-10">
                <SectionHeading>Digital Marketing Services Offered by DigLip7</SectionHeading>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  Not every business needs every service. The right mix depends on your sector, competition, sales cycle, and goals. The main services are outlined below.
                </p>
              </div>

              <ServiceTabs items={services} />

              <div className="text-center mt-12">
                <Link to="/">
                  <motion.button
                    className="px-8 py-3.5 bg-gradient-to-r from-teal-700 to-teal-900 text-white font-semibold rounded-full shadow-xl hover:shadow-teal-500/50 transition-all duration-300 inline-flex items-center gap-2 cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Digital Marketing Services
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
              </div>
            </div>

            {/* Detailed Service Section 1: SEO Services in Pune */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-24">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Card3D>
                  <Img image={images.seo} icon={Search} badge="Organic Search Visibility" />
                </Card3D>
              </motion.div>
              <div>
                <FloatingElement>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    SEO Services in Pune
                  </h2>
                </FloatingElement>
                <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                  <p className="pl-5 border-l-4 border-teal-600">
                    SEO helps people searching for your products or services find your website. Typical work includes keyword research and search intent analysis, technical audits, on-page optimization, website architecture and internal linking, content planning, competitor and search-result analysis, and monitoring through Google Search Console and analytics.
                  </p>
                  <p className="pl-5 border-l-4 border-teal-600">
                    For a business with many service pages, a technical audit often comes first, because crawl errors, slow pages, or unclear structure can limit the value of new content. SEO is ongoing work. Results depend on competition, website condition, content quality, and how consistently improvements are implemented.
                  </p>
                  <p>
                    Explore our specialized <Link to="/digital-market/seoservices/" className={inlineLink}>SEO services</Link> to build sustainable organic search discovery.
                  </p>
                </div>
              </div>
            </div>

            {/* Detailed Service Section 2: Local SEO for Pune Businesses */}
            <div className="max-w-7xl mx-auto mb-24">
              <div className="text-center mb-10 max-w-4xl mx-auto">
                <SectionHeading color="text-teal-700">
                  Local SEO for Pune Businesses
                </SectionHeading>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  Local SEO helps businesses appear in searches with local intent, such as a clinic near Baner or a coaching class in Kothrud.
                </p>
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
                    <Img image={images.local} icon={MapPin} badge="Local SEO & Maps" />
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
                  <p className="font-semibold text-gray-900 text-lg">It usually involves:</p>
                  {[
                    "Accurate Google Business Profile details, categories, and services.",
                    "Consistent business name, address, and phone information across directories.",
                    "Genuine customer reviews and professional replies.",
                    "Useful location or service-area pages where they are truly relevant.",
                    "Tracking calls, direction requests, and website visits where available.",
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-start gap-3 bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.08 }}
                    >
                      <span className="w-8 h-8 shrink-0 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center font-bold text-sm">
                        {idx + 1}
                      </span>
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed pt-1">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                  <p className="text-gray-700 leading-relaxed pt-2 text-sm sm:text-base bg-amber-50/70 p-4 rounded-xl border border-amber-200">
                    For example, a dental clinic in Baner, a tuition center in Kothrud, a home services provider in Wakad, or a coworking space in Kharadi would each prioritize different services, categories, and review requests. A business serving Hinjewadi or Hadapsar customers from outside those areas should describe its service area honestly. Local SEO cannot guarantee a Google Maps position. We do not recommend fake addresses, duplicate profiles, or misleading location pages.
                  </p>
                </div>
              </div>
            </div>

            {/* Detailed Service Section 3: Google Ads and PPC Advertising in Pune */}
            <div className="max-w-7xl mx-auto mb-24 rounded-3xl bg-gradient-to-br from-teal-800 to-teal-900 p-8 sm:p-12 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#c89d5a]/20 blur-3xl pointer-events-none" />
              <div className="relative">
                <div className="text-center mb-10">
                  <SectionHeading color="text-white">Google Ads and PPC Advertising in Pune</SectionHeading>
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
                      <Img image={images.ppc} icon={Megaphone} badge="Google Ads & PPC" />
                    </Card3D>
                  </motion.div>

                  <div className="space-y-4">
                    <motion.p
                      className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 text-white/95 leading-relaxed text-base sm:text-lg"
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                      Paid search places your business in front of people already looking for a service. A well-run account typically includes search campaigns, display or YouTube advertising where suitable, keyword and search-term analysis, structured ad groups, relevant ad copy and landing pages, location and schedule targeting, conversion tracking, negative keywords, and regular budget review.
                    </motion.p>
                    <motion.p
                      className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 text-white/95 leading-relaxed text-base sm:text-lg"
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15, duration: 0.6 }}
                    >
                      Landing page relevance matters as much as the ad itself, because a visitor who does not find what the ad promised is unlikely to inquire. Campaigns should be judged on qualified inquiries and conversions, not clicks alone.
                    </motion.p>
                    <div className="pt-2">
                      <Link
                        to="/digital-market/PPC-Advertising"
                        className="inline-flex items-center gap-2 text-yellow-300 font-semibold hover:text-white transition-colors"
                      >
                        Explore PPC advertising services &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Service Section 4: Social Media Marketing Services */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
              <div className="order-2 lg:order-1">
                <FloatingElement>
                  <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-6 leading-tight">
                    Social Media Marketing Services
                  </h2>
                </FloatingElement>
                <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                  <p>
                    Social media works best with a clear purpose, not just follower growth. Services can include strategy, platform selection, Instagram and Facebook content, LinkedIn marketing for B2B audiences, content calendars, Reels and short-form video planning, community engagement, paid social campaigns, and performance reporting.
                  </p>
                  <p className="bg-teal-50/50 rounded-2xl p-5 border border-teal-100 text-gray-700">
                    By tailoring creative messaging to what your audience cares about, we help businesses build familiarity, trust, and continuous brand interaction across Pune and national markets.
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
                  <Img image={images.social} icon={Share2} badge="Social Media Marketing" className="w-full bg-gray-50" />
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

            {/* Detailed Service Section 5: Content Marketing Services */}
            <div className="max-w-7xl mx-auto mb-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Card3D>
                  <Img image={images.content} icon={FileText} badge="Content Marketing" />
                </Card3D>
              </motion.div>
              <div>
                <FloatingElement>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    Content Marketing Services
                  </h2>
                </FloatingElement>
                <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                  <p className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                    Content is also what other channels rely on: social posts, ad landing pages, and email follow-ups all work better when they point to clear, accurate pages.
                  </p>
                  <p className="bg-teal-50/40 rounded-2xl p-5 border-l-4 border-teal-600">
                    Helpful content supports customers while they research and gives search engines more to understand. This covers website service pages, blog articles, industry guides, landing page copy, product and category descriptions, content refreshes, and editorial planning. Our focus is original writing, factual accuracy, and a clear link to what the business actually offers.
                  </p>
                </div>
              </div>
            </div>

            {/* Detailed Service Sections 6 & 7: Website Design & E-commerce */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
              <motion.div
                className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-gray-100 flex flex-col justify-between"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div>
                  <span className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center mb-6">
                    <Globe className="w-6 h-6" />
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Website Design and Conversion Optimization
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    A website should support visitors after they arrive from search, ads, or social media. That means a responsive layout, mobile-friendly navigation, good page speed, clear service information, simple forms, click-to-call or WhatsApp links where appropriate, well-structured landing pages, and conversion tracking. Improvements should be guided by user behavior and available performance data.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-teal-50 to-white rounded-3xl p-8 sm:p-10 shadow-xl border border-teal-100 flex flex-col justify-between"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15, duration: 0.6 }}
              >
                <div>
                  <span className="w-12 h-12 rounded-2xl bg-[#c89d5a]/20 text-teal-900 flex items-center justify-center mb-6">
                    <ShoppingCart className="w-6 h-6" />
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    E-commerce Digital Marketing
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    Online stores can improve discovery through product and category page optimization, strong product descriptions, search-friendly product information, Google Shopping and paid search, social campaigns, clean product feeds, a smooth checkout, and retargeting where consent and platform policies allow. Strategy should reflect product margins, inventory, and customer behavior, with transactions measured accurately.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Digital Marketing for Different Industries in Pune */}
            <div className="max-w-7xl mx-auto mb-24">
              <div className="text-center max-w-4xl mx-auto mb-10">
                <SectionHeading color="text-teal-700">Digital Marketing for Different Industries in Pune</SectionHeading>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  Marketing needs differ by sector. These are practical examples, not client case studies.
                </p>
              </div>
              <ExpandingCards items={industries} />
            </div>

            {/* Digital Marketing Strategies for Different Pune Business Areas */}
            <div className="max-w-7xl mx-auto mb-24">
              <div className="text-center max-w-4xl mx-auto mb-12">
                <SectionHeading>
                  Digital Marketing Strategies for Different Pune Business Areas
                </SectionHeading>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  Local business environments can shape audience targeting and content planning. The following are illustrative market contexts only. They are not DigLip7 office or client locations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {puneAreas.map((area, idx) => (
                  <motion.div
                    key={area.name}
                    className={`rounded-3xl p-7 shadow-lg border transition-all duration-300 hover:shadow-xl ${
                      area.name.includes("PCMC")
                        ? "md:col-span-2 lg:col-span-3 bg-gradient-to-r from-teal-900 to-teal-700 text-white border-transparent"
                        : "bg-white text-gray-800 border-gray-100 hover:border-teal-200"
                    }`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (idx % 3) * 0.1, duration: 0.5 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        area.name.includes("PCMC") ? "bg-white/20 text-yellow-300" : "bg-teal-50 text-teal-700"
                      }`}>
                        <MapPin className="w-5 h-5" />
                      </span>
                      <h3 className={`text-xl font-bold ${area.name.includes("PCMC") ? "text-white" : "text-teal-800"}`}>
                        {area.name}
                      </h3>
                    </div>
                    <p className={`text-sm sm:text-base leading-relaxed ${
                      area.name.includes("PCMC") ? "text-white/90" : "text-gray-600"
                    }`}>
                      {area.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Integrated Digital Marketing Strategy */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center mb-24 bg-gradient-to-br from-teal-50 to-white rounded-3xl p-8 sm:p-12 border border-teal-100 shadow-md">
              <div>
                <FloatingElement>
                  <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-6 leading-tight">
                    Integrated Digital Marketing Strategy
                  </h2>
                </FloatingElement>
                <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                  <p>
                    Channels work best when they support one customer journey: SEO and local SEO for discovery, Google Ads for paid visibility, social media for brand communication, content for education, website optimization for experience, email for follow-up, and analytics for evaluation.
                  </p>
                  <p className="bg-white rounded-2xl p-5 border border-teal-100 font-medium text-teal-900 shadow-sm">
                    The right mix depends on your audience, competition, budget, and objectives.
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
                    className={`absolute w-36 h-36 rounded-full ${c} ${cls} flex items-center justify-center backdrop-blur-sm`}
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 4, repeat: Infinity, delay: d }}
                  >
                    <Icon className="w-8 h-8 text-teal-900" />
                  </motion.span>
                ))}
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-teal-700" />
                </span>
              </div>
            </div>

            {/* DigLip7's Digital Marketing Process */}
            <ProcessSection
              title="DigLip7's Digital Marketing Process"
              intro="Our step-by-step approach aligns every digital channel directly with business outcomes:"
              steps={processSteps}
              closing={true}
            />

            {/* Measuring Digital Marketing Performance */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-24">
              <div>
                <FloatingElement>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    Measuring Digital Marketing Performance
                  </h2>
                </FloatingElement>
                <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                  <p>
                    Performance should be measured against your own objectives. Depending on setup, reporting can cover organic clicks and impressions, keyword performance, relevant sessions, qualified enquiries, calls and form submissions, WhatsApp enquiries where tracking is configured, ad clicks and conversions, cost per lead where data is reliable, landing page engagement, and e-commerce transactions and revenue.
                  </p>
                  <p className="bg-gray-50 rounded-2xl p-5 border-l-4 border-teal-600">
                    Tools such as Google Analytics 4, Google Search Console, and advertising-platform reports help connect activity with meaningful business outcomes.
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
                  <Img image={images.analytics} icon={BarChart3} badge="Performance Analytics" />
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

            {/* Why Consider DigLip7 for Digital Marketing Services in Pune? */}
            <div className="max-w-6xl mx-auto mb-20">
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
                      Why Consider DigLip7 for Digital Marketing Services in Pune?
                    </h2>
                  </FloatingElement>
                  <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                    <p>
                      DigLip7 offers both organic and paid options, planned around business requirements rather than a fixed package. Our work includes audience and keyword research, search-focused website and content optimization, campaign planning and monitoring, and clear performance reporting and recommendations based on the data available.
                    </p>
                    <p className="bg-gradient-to-br from-teal-50 to-white rounded-2xl p-6 border-l-4 border-teal-600 shadow-sm">
                      The aim is to keep marketing activity aligned with your priorities. Recommendations are tied to your goals and data, and we explain the limits of each service plainly, including that outcomes depend on competition, budget, and implementation. If a channel is not a good fit for your business right now, we would rather say so than add it to the plan.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>

          {/* FAQs */}
          <FaqSection title="Frequently Asked Questions" faqs={faqs} />

          {/* Contact / Discuss Your Digital Marketing Requirements */}
          <CtaSection
            headingLead="Discuss Your Digital Marketing"
            headingAccent="Requirements in Pune"
            text="If you are a Pune business looking for digital marketing support, tell us about your requirements. It helps to share:"
            listItems={requirementSharePoints}
            ctaLabel="Discuss Your Digital Marketing Requirements"
          />
        </div>
      </main>
    </div>
  );
}

export default PuneDigitalMarketingServices;
