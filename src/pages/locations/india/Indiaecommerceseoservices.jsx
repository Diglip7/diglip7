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
  Settings,
  Eye,
  Sparkles,
  Smartphone,
  Code2,
  Package,
  LayoutGrid,
  ShoppingCart,
  Store,
  Clock,
  CalendarDays,
  Truck,
  CheckCircle2,
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

            <h3 className="font-semibold text-gray-900 text-base">{step.title}</h3>
            <p className="text-gray-600 text-sm mt-2 leading-relaxed">{step.description}</p>
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

// CTA banner (primary + secondary buttons, same as existing pages)
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

              // 1st button: WhatsApp (Discuss Strategy)
              if (i === 0) {
                return (
                  <a
                    key={label}
                    href="https://wa.me/919650608788?text=Hello%20DigLip7%20Team%2C%20I%20would%20like%20to%20discuss%20an%20Ecommerce%20SEO%20Strategy%20for%20my%20business%20in%20India."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {buttonInner}
                  </a>
                );
              }

              // 3rd button: WhatsApp (Talk to an SEO Specialist)
              if (i === 2) {
                return (
                  <a
                    key={label}
                    href="https://wa.me/919650608788?text=Hello%20DigLip7%20Team%2C%20I%20would%20like%20to%20talk%20to%20an%20SEO%20Specialist%20regarding%20Ecommerce%20SEO%20in%20India."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {buttonInner}
                  </a>
                );
              }

              // 2nd button: Contact Form (Request Audit)
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

// Image helper (lazy by default)
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
      <Card3D className="w-full max-w-lg">
        {/* [Extended Image Div Fix] Standardized height */}
        <Img image={image} containerClassName="w-full h-[280px] sm:h-[340px] lg:h-[380px]" />
      </Card3D>
    </motion.div>
    <div className="flex-1 text-center md:text-left">
      <FloatingElement>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{title}</h2>
      </FloatingElement>
      <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">{children}</div>
    </div>
  </div>
);

// Pulsing rings art (decorative)
const RingsArt = () => (
  <div aria-hidden="true" className="relative w-56 h-56 sm:w-64 sm:h-64 mx-auto flex items-center justify-center">
    {[0, 1, 2].map((i) => (
      <motion.span
        key={i}
        className="absolute rounded-full border-2 border-teal-300"
        style={{ width: 90 + i * 55, height: 90 + i * 55 }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.9, 0.4, 0.9] }}
        transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
      />
    ))}
    <motion.div
      className="relative w-20 h-20 rounded-full bg-gradient-to-br from-teal-600 to-teal-900 flex items-center justify-center shadow-xl"
      animate={{ rotate: [0, 6, -6, 0] }}
      transition={{ duration: 5, repeat: Infinity }}
    >
      <ShoppingCart className="w-9 h-9 text-white" />
    </motion.div>
  </div>
);

// Animated product skeleton (decorative)
const ProductSkeleton = () => {
  const pulse = {
    animate: { opacity: [0.45, 1, 0.45] },
    transition: { duration: 2, repeat: Infinity },
  };
  return (
    <Card3D className="w-full max-w-sm mx-auto">
      <div aria-hidden="true" className="bg-white rounded-3xl p-5 shadow-xl border border-teal-100">
        <motion.div
          {...pulse}
          className="aspect-square rounded-2xl bg-gradient-to-br from-teal-100 to-[#c89d5a]/30 flex items-center justify-center"
        >
          <Package className="w-16 h-16 text-teal-600" />
        </motion.div>
        <div className="flex gap-2 mt-4">
          {[0, 1, 2, 3].map((i) => (
            <motion.span
              key={i}
              {...pulse}
              transition={{ ...pulse.transition, delay: i * 0.2 }}
              className="w-10 h-10 rounded-lg bg-gray-100"
            />
          ))}
        </div>
        <motion.div {...pulse} className="mt-4 h-4 w-3/4 rounded bg-gray-200" />
        <motion.div {...pulse} className="mt-2 h-3 w-full rounded bg-gray-100" />
        <motion.div {...pulse} className="mt-2 h-3 w-5/6 rounded bg-gray-100" />
        <div className="mt-4 flex items-center justify-between">
          <motion.span {...pulse} className="h-6 w-20 rounded-full bg-amber-100" />
          <motion.span {...pulse} className="h-9 w-28 rounded-full bg-gradient-to-r from-teal-600 to-teal-800" />
        </div>
      </div>
    </Card3D>
  );
};

// ===========================================================================
// Page constants
// ===========================================================================

const pageUrl = "https://diglip7.com/india/ecommerce-seo-services/";
const metaTitle = "Ecommerce SEO Services in India | DigLip7";
const metaDescription =
  "Improve product discovery with ecommerce SEO services in India from DigLip7. Explore technical SEO, product optimization, category strategy and organic search growth.";
const ogImage =
  "https://diglip7.com/images/india/ecommerce-seo/ecommerce-seo-services-india.webp";
const metaKeywords = [
  "Ecommerce SEO Services in India",
  "Ecommerce SEO Services India",
  "E-commerce SEO Company India",
  "Ecommerce SEO Agency India",
  "Ecommerce SEO Experts India",
  "Ecommerce Website SEO Services",
  "Professional Ecommerce SEO Services India",
  "Ecommerce Search Engine Optimization India",
  "Online Store SEO Services India",
  "Ecommerce SEO Consultant India",
  "Ecommerce SEO Solutions India",
  "Shopify SEO Services India",
  "WooCommerce SEO Services India",
  "Ecommerce Technical SEO",
  "Product Page SEO Services",
  "Ecommerce Category Page Optimization",
  "Ecommerce Keyword Research India",
  "Ecommerce Website Optimization India",
  "Ecommerce Content Marketing",
  "Ecommerce SEO Audit Services",
  "Ecommerce Local SEO India",
  "Product Schema Markup",
  "Ecommerce Internal Linking",
  "Ecommerce Website Speed Optimization",
  "SEO for D2C Brands India",
  "Ecommerce Organic Traffic Optimization",
  "Ecommerce Conversion Tracking",
  "Ecommerce Product Listing Optimization",
].join(", ");

const breadcrumbTrail = [
  { label: "Home", href: "/" },
  { label: "India SEO Services", href: "/india/seo-services" },
  { label: "Ecommerce SEO Services in India", href: "/india/ecommerce-seo-services/" },
];

const imgBase = "/images/india/ecommerce-seo/";
const images = {
  hero: {
    src: `${imgBase}ecommerce-seo-services-india.webp`,
    alt: "Ecommerce SEO strategy for online stores in India",
    width: 1600,
    height: 900,
  },
  category: {
    src: `${imgBase}ecommerce-category-product-seo.webp`,
    alt: "Product and category page optimization for ecommerce websites",
    width: 1600,
    height: 900,
  },
  technical: {
    src: `${imgBase}ecommerce-technical-seo-india.webp`,
    alt: "Technical SEO architecture for an ecommerce website",
    width: 1600,
    height: 900,
  },
  data: {
    src: `${imgBase}ecommerce-product-data-seo.webp`,
    alt: "Product information and structured data optimization for online stores",
    width: 1600,
    height: 900,
  },
  mobile: {
    src: `${imgBase}ecommerce-mobile-seo-india.webp`,
    alt: "Mobile usability and performance optimization for ecommerce websites",
    width: 1600,
    height: 900,
  },
  content: {
    src: `${imgBase}ecommerce-content-strategy-india.webp`,
    alt: "Buying guides and content planning for ecommerce SEO",
    width: 1600,
    height: 900,
  },
  reporting: {
    src: `${imgBase}ecommerce-seo-reporting-india.webp`,
    alt: "Ecommerce organic search performance and conversion measurement",
    width: 1600,
    height: 900,
  },
};

// ===========================================================================
// Content data (verbatim from the content package)
// ===========================================================================

const onlineStoreParas = [
  "Uploading products does not make them discoverable. Shoppers search at different levels: brand names, broad categories, subcategories, specific products, comparisons, buying questions and ready-to-purchase queries.",
  "A D2C brand also competes with marketplaces that sell the same kinds of products. Its own pages need to give customers a clear reason to visit: richer product information, clearer sizing or usage guidance, and a better-organised category structure.",
  "Someone searching for cotton kurtas probably wants a category page with options. Someone searching for ergonomic office chairs may compare features first, perhaps through a guide. A person looking for a specific kitchen appliance model wants that product page, accurate price and availability. These are illustrative examples, but the principle holds: the page in search results should match the intent behind the query.",
];

const categoryBullets = [
  { icon: LayoutGrid, text: "Category pages: clear naming, helpful introductory content where it genuinely helps, logical subcategories and links to key products." },
  { icon: Package, text: "Product pages: original descriptions, specifications, imagery, variant selection and information that answers real buying questions." },
];

const technicalParas = [
  "Technical depth matters most as the catalogue grows. A thorough technical SEO audit reviews crawlability and indexability, XML sitemaps, canonical tags, duplicate product URLs, variants, URL parameters, sorting and filtering, faceted navigation, pagination, JavaScript rendering, internal links, mobile performance, Core Web Vitals, redirects, product availability and migrations.",
  "Uncontrolled filters and sorting combinations can generate large numbers of URLs with little unique value. They waste crawl attention and dilute signals. The answer is not to block or index everything: decide by search demand, page uniqueness, crawl behaviour and the store's architecture. Some filtered pages, such as a popular colour and category combination, may deserve indexing; sort orders rarely do.",
  "Priorities also shift with scale. A 100-product store may gain most from clean categories, strong product pages and basic technical hygiene. A store with thousands of products must also manage crawl efficiency, parameter handling, sitemaps and template-level issues.",
];

const platforms = [
  { icon: ShoppingCart, text: "Shopify: collection and product URLs, variants, theme performance, duplicate paths, app-generated content, metadata and canonical handling, structured data." },
  { icon: Store, text: "WooCommerce: WordPress permalink settings, product categories and tags, plugin-generated schema, filter and attribute URLs, duplicate archives, caching, plugin conflicts, sitemap configuration." },
];

const marketsParas = [
  { icon: CalendarDays, text: "Plan category and content priorities around your actual customers and catalogue: seasonal patterns, relevant festival demand, availability, shipping and return information, INR pricing, regional delivery coverage, mobile usability and inventory planning." },
  { icon: Truck, text: "Diwali, wedding season or monsoon products make sense only where they fit your range. Seasonal pages should be planned early enough to be useful, without unsupported claims about sales trends. Regional-language versions should follow customer research; not every Indian store needs Hindi or multiple languages." },
];

const stages = [
  { icon: Search, title: "Stage 1: Understand the store.", description: "Catalogue, business model, platform, categories, customers and priorities." },
  { icon: ShieldCheck, title: "Stage 2: Audit technical SEO.", description: "Crawlability, indexing, duplication, canonicals, performance and structure." },
  { icon: Target, title: "Stage 3: Map keywords to categories and products.", description: "Match intent to existing or planned pages." },
  { icon: Layers, title: "Stage 4: Improve category architecture.", description: "Organise categories, subcategories and internal links." },
  { icon: Package, title: "Stage 5: Optimize priority product pages.", description: "Information, titles, descriptions, imagery, variants and structured data." },
  { icon: Settings, title: "Stage 6: Control unnecessary URLs.", description: "Filters, sorting, parameters, pagination and duplicate paths." },
  { icon: FileText, title: "Stage 7: Develop supporting content.", description: "Buying guides where a genuine information gap exists." },
  { icon: BarChart3, title: "Stage 8: Measure and refine.", description: "Use real search, analytics and e-commerce data." },
];

const comparisonRows = [
  ["Builds organic product and category discoverability", "Provides paid campaign visibility"],
  ["Requires technical and content improvements", "Requires advertising budget and campaign management"],
  ["Can support ongoing product discovery", "Can support controlled promotional campaigns"],
  ["Results depend on implementation and competition", "Results depend on targeting, bids, budget and campaign quality"],
  ["Supports long-term website assets", "Useful for time-sensitive product campaigns"],
];

const mistakes = [
  "Copying manufacturer descriptions. Your pages look like everyone else's.",
  "Underdeveloped category pages. Your broadest search opportunities go unused.",
  "Uncontrolled filter URLs or ignored canonicals. Crawl attention is wasted on near-duplicates.",
  "Inaccurate availability. Shoppers leave and trust drops.",
  "Removing valuable product pages. Useful URLs and links disappear.",
  "Ignoring mobile performance. Friction costs both visitors and purchases.",
  "Conflicting SEO plugins or inaccurate product schema. Mixed signals and mismatched data.",
  "Irrelevant backlinks. Added risk, little relevance.",
  "Unreviewed AI-generated content. Errors and sameness slip through.",
  "Guides that do not link to relevant products. Readers have no next step.",
  "Measuring rankings without tracking purchases. You cannot see what pays off.",
  "Duplicate pages for keyword variations. Pages compete with each other.",
].map((m) => {
  const i = m.indexOf(". ");
  return { label: m.slice(0, i + 1), text: m.slice(i + 2) };
});

const faqs = [
  {
    question: "What are ecommerce SEO services in India?",
    answer:
      "They improve an online store's category pages, product pages, architecture, technical accessibility, internal links, structured data and content so customers can find relevant products through organic search. The scope depends on the catalogue, platform and competition.",
  },
  {
    question: "How can SEO help an online store?",
    answer:
      "SEO helps match shoppers' searches with the right category, product or guide, and makes the store easier for search engines to crawl and understand. It supports discovery but cannot guarantee rankings, traffic or sales.",
  },
  {
    question: "How much do ecommerce SEO services in India cost?",
    answer:
      "Cost depends on catalogue size, platform, technical condition, competition, content needs and reporting scope. A realistic quote follows a store review, so no fixed price is published here.",
  },
  {
    question: "What does an ecommerce SEO agency do?",
    answer:
      "It audits crawling and indexation, maps keywords to categories and products, improves page content, controls duplicate and filter URLs, implements structured data, supports content planning and reports on organic performance.",
  },
  {
    question: "Is ecommerce SEO different from regular SEO?",
    answer:
      "Yes, in emphasis. Stores deal with large catalogues, variants, filters, changing inventory and product data, so crawl control, canonicalisation and product information matter more than they do for a small brochure site.",
  },
  {
    question: "How does Shopify SEO work?",
    answer:
      "The fundamentals are the same, but implementation is platform-specific: collection and product URLs, variants, theme performance, duplicate paths, app-generated content, canonical handling and structured data all need checking inside Shopify's setup.",
  },
  {
    question: "Can SEO improve product and category page visibility?",
    answer:
      "It can improve how clearly those pages match search intent, through better titles, content, specifications, internal links and technical access. Visibility still depends on competition, demand and the quality of the pages.",
  },
  {
    question: "How should an online store handle out-of-stock products?",
    answer:
      "It depends on the product. Keep temporarily unavailable pages with clear status and alternatives, redirect discontinued products to a genuine replacement where one exists, and avoid blanket deletion or homepage redirects.",
  },
  {
    question: "Why are canonical tags important for ecommerce websites?",
    answer:
      "They signal the preferred version when the same or near-identical content is reachable through several URLs, such as variants, parameters or category paths. Used correctly, they consolidate signals; they are a hint, not a command.",
  },
  {
    question: "Does product schema guarantee rich search results?",
    answer:
      "No. Product markup helps search engines interpret price, availability and other product details, but rich results are never guaranteed. The markup must match visible, accurate page content.",
  },
  {
    question: "How long does ecommerce SEO take to show progress?",
    answer:
      "There is no fixed timeline. Technical fixes may show after recrawling, while broader visibility depends on competition, catalogue size, content quality and implementation speed. Treat promises of set-day rankings with caution.",
  },
  {
    question: "How can an online store measure organic sales from SEO?",
    answer:
      "Set up and validate analytics and e-commerce tracking for add-to-cart, checkout and purchase events, then segment organic traffic. Combine that with Search Console data, and report only what has been reliably attributed.",
  },
];

// ===========================================================================
// JSON-LD (single @graph)
// ===========================================================================

const jsonLd = [
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
        publisher: { "@id": "https://diglip7.com/#organization" },
      },
      {
        "@type": "WebPage",
        "@id": "https://diglip7.com/india/ecommerce-seo-services/#webpage",
        url: "https://diglip7.com/india/ecommerce-seo-services/",
        name: "Ecommerce SEO Services in India | DigLip7",
        description: metaDescription,
        inLanguage: "en-IN",
        isPartOf: { "@id": "https://diglip7.com/#website" },
        publisher: { "@id": "https://diglip7.com/#organization" },
        about: { "@id": "https://diglip7.com/india/ecommerce-seo-services/#service" },
        breadcrumb: { "@id": "https://diglip7.com/india/ecommerce-seo-services/#breadcrumb" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://diglip7.com/india/ecommerce-seo-services/#breadcrumb",
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
            name: "Ecommerce SEO Services in India",
            item: "https://diglip7.com/india/ecommerce-seo-services/",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://diglip7.com/india/ecommerce-seo-services/#service",
        name: "Ecommerce SEO Services in India",
        serviceType: "Ecommerce search engine optimization",
        url: "https://diglip7.com/india/ecommerce-seo-services/",
        description:
          "SEO services for online stores in India, covering technical SEO, category and product page optimization, keyword research, structured data, internal linking and organic performance measurement.",
        areaServed: { "@type": "Country", name: "India" },
        provider: { "@id": "https://diglip7.com/#organization" },
      },
      {
        "@type": "FAQPage",
        "@id": "https://diglip7.com/india/ecommerce-seo-services/#faq",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  },
];

// ===========================================================================
// Page
// ===========================================================================

function IndiaEcommerceSEOServices() {
  return (
    <div className="overflow-x-hidden bg-white w-full">
      <SEO
        title={metaTitle}
        description={metaDescription}
        canonical={pageUrl}
        ogType="website"
        ogImage={ogImage}
        keywords={metaKeywords}
        schema={jsonLd}
      />
      <ScrollProgress />
      <BackToTop />

      <main>
        {/* Hero */}
        <LandingHero
          breadcrumb={breadcrumbTrail}
          titleDark="Ecommerce SEO Services in India"
          titleGradient="for Better Product Discovery and Organic Growth"
          ctaLabel="Discuss Your Ecommerce SEO Strategy"
          image={images.hero}
        />

        <div className="bg-white">
          <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 w-full">
            {/* What Are Ecommerce SEO Services in India? */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 lg:gap-16 items-center mb-24">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <RingsArt />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <FloatingElement>
                  <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-5 leading-tight">
                    What Are Ecommerce SEO Services in India?
                  </h2>
                </FloatingElement>
                <p className="text-gray-800 text-lg sm:text-xl font-medium leading-relaxed mb-4 border-l-4 border-teal-600 pl-5">
                  Ecommerce SEO services in India improve an online store's category pages, product pages, architecture, technical accessibility, internal linking, structured data and content, so customers can discover relevant products through organic search. The aim is to make the right products and categories easy to find, and easy to buy from, throughout the shopping journey.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  What works depends on the store. A strategy is shaped by catalogue size, business model, platform, category structure, competition, product availability, search intent, the customer's buying journey and existing organic visibility. A 100-product D2C brand and a multi-category store with thousands of SKUs need different priorities, and no one can promise specific rankings, revenue or traffic.
                </p>
              </motion.div>
            </div>

            {/* An Online Store Needs More Than Product Listings to Get Found */}
            <div className="max-w-7xl mx-auto mb-24">
              <div className="text-center mb-12">
                <SectionHeading>An Online Store Needs More Than Product Listings to Get Found</SectionHeading>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {onlineStoreParas.map((p, i) => {
                  const styles = [
                    "bg-gradient-to-br from-teal-700 to-teal-900 text-white border-transparent",
                    "bg-white text-gray-700 border-gray-200 shadow-md",
                    "bg-gradient-to-br from-amber-50/80 to-white text-gray-700 border-amber-200 shadow-md",
                  ][i];
                  return (
                    <motion.div
                      key={i}
                      className={`relative overflow-hidden rounded-3xl p-8 shadow-xl border flex flex-col justify-between ${styles}`}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.6, delay: i * 0.15 }}
                    >
                      <span
                        aria-hidden="true"
                        className={`absolute -top-4 right-4 text-8xl font-extrabold select-none ${
                          i === 0 ? "text-white/10" : "text-teal-900/5"
                        }`}
                      >
                        0{i + 1}
                      </span>
                      <p className="relative leading-relaxed text-base sm:text-lg">{p}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Category Pages and Product Pages Have Different SEO Jobs */}
            <div className="max-w-7xl mx-auto mb-24">
              <div className="text-center max-w-5xl mx-auto mb-12">
                <SectionHeading>Category Pages and Product Pages Have Different SEO Jobs</SectionHeading>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
                <motion.div
                  className="lg:sticky lg:top-28"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <Card3D>
                    {/* [Extended Image Div Fix] Height matches the 4 category breakdown cards on the right */}
                    <Img
                      image={images.category}
                      containerClassName="w-full h-[440px] sm:h-[520px] lg:h-[620px] xl:h-[660px]"
                      fallbackIcon={LayoutGrid}
                    />
                  </Card3D>
                </motion.div>
                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    Category pages capture broader discovery; product pages answer specific searches. Both need clear names, descriptive titles, relevant H1 headings, useful images, logical subcategories, internal links and breadcrumb navigation.
                  </p>
                  {categoryBullets.map((b, i) => {
                    const [label, rest] = splitLead(b.text);
                    return (
                      <motion.div
                        key={label}
                        className="flex items-start gap-4 rounded-2xl bg-gradient-to-br from-gray-50 to-teal-50/40 p-6 border border-teal-100 shadow-md hover:shadow-xl transition-shadow"
                        whileHover={{ x: 6 }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 }}
                      >
                        <span className="w-12 h-12 shrink-0 rounded-xl bg-teal-700 text-white flex items-center justify-center">
                          <b.icon className="w-6 h-6" />
                        </span>
                        <p className="text-gray-600 leading-relaxed">
                          <strong className="text-gray-900">{label}</strong> {rest}
                        </p>
                      </motion.div>
                    );
                  })}
                  <p className="text-gray-700 leading-relaxed">
                    Breadcrumbs and logical subcategories help shoppers move between levels and show search engines how products relate. Fashion stores may need fabric, colour and fit detail; beauty brands, ingredients and usage guidance; homeware stores, dimensions, materials and care instructions.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Not every category needs a long block of text, and product descriptions should not simply repeat manufacturer copy. Add content only where it helps a shopper decide.
                  </p>
                </div>
              </div>
            </div>

            {/* Ecommerce Keyword Research Based on Buying Intent */}
            <div className="max-w-7xl mx-auto mb-24">
              <div className="text-center mb-12">
                <SectionHeading color="text-teal-700">
                  Ecommerce Keyword Research Based on Buying Intent
                </SectionHeading>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  "Keyword research should map queries to the right page. Consider commercial and transactional intent, informational intent, product-type and category keywords, brand and model searches, attribute searches (such as material or size), comparisons, price-related queries, seasonal demand, Search Console data and competitor content gaps.",
                  "A fashion store may find colour, fabric and fit modifiers matter. An electronics store may lean on model numbers and specifications. A beauty brand may see ingredient and skin-concern searches. One keyword cluster should not automatically produce dozens of near-identical pages, and no keyword should be called easy to rank for without supporting research.",
                ].map((p, i) => (
                  <motion.div
                    key={i}
                    className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 border-t-4 border-t-teal-600 hover:border-t-[#c89d5a] hover:shadow-2xl transition-all"
                    initial={{ opacity: 0, y: 40, rotate: i ? 2 : -2 }}
                    whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                    whileHover={{ rotate: i ? -1 : 1, y: -6 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                  >
                    <p className="text-gray-700 leading-relaxed">{p}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Technical SEO for Stores With Large Product Catalogues */}
            <div className="max-w-7xl mx-auto relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-800 to-teal-900 p-8 sm:p-12 mb-24">
              <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#c89d5a]/20 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-16 w-72 h-72 rounded-full bg-white/10 blur-3xl pointer-events-none" />
              <div className="relative">
                <div className="text-center mb-10">
                  <SectionHeading color="text-white">
                    Technical SEO for Stores With Large Product Catalogues
                  </SectionHeading>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                  <div className="space-y-5">
                    {technicalParas.map((p, i) => (
                      <motion.div
                        key={i}
                        className="flex gap-4 bg-white/10 backdrop-blur rounded-2xl p-5 border border-white/20 hover:bg-white/20 transition-colors"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15, duration: 0.6 }}
                      >
                        <span className="w-9 h-9 shrink-0 rounded-full bg-[#c89d5a] text-white font-bold text-sm flex items-center justify-center">
                          {i + 1}
                        </span>
                        <p className="text-white/95 text-sm sm:text-base leading-relaxed">{p}</p>
                      </motion.div>
                    ))}
                  </div>
                  <motion.div
                    className="lg:sticky lg:top-28 relative"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <Card3D>
                      {/* [Extended Image Div Fix] Height balances technical audit points */}
                      <Img
                        image={images.technical}
                        containerClassName="w-full h-[380px] sm:h-[440px] lg:h-[500px]"
                        fallbackIcon={Cpu}
                      />
                    </Card3D>
                    <motion.div
                      aria-hidden="true"
                      className="absolute -top-4 -right-3 w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    >
                      <Cpu className="w-7 h-7 text-teal-700" />
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Product Page SEO That Helps Customers Make Decisions */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-24">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <ProductSkeleton />
              </motion.div>
              <div>
                <FloatingElement>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight">
                    Product Page SEO That Helps Customers Make Decisions
                  </h2>
                </FloatingElement>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    A useful product page answers the questions customers actually ask: clear product name, original description, specifications, materials or ingredients where relevant, size and fit, compatibility, variants, accurate price and availability, delivery and return details, images with meaningful alt text, genuine reviews, related products and relevant buying guides.
                  </p>
                  <p>
                    For an electronics retailer, that means clear specifications, compatibility details and accurate availability. For a homeware store, it means dimensions, materials, care instructions and links to related products.
                  </p>
                  <p className="bg-amber-50/60 rounded-2xl p-5 border-l-4 border-[#c89d5a]">
                    Inaccurate prices, missing specifications and copied descriptions undermine customer confidence and search usefulness alike. Never invent features, certifications, review scores, prices or availability.
                  </p>
                </div>
              </div>
            </div>

            {/* Shopify and WooCommerce SEO Require Platform-Aware Implementation */}
            <div className="max-w-7xl mx-auto mb-24">
              <div className="text-center max-w-4xl mx-auto mb-12">
                <SectionHeading>Shopify and WooCommerce SEO Require Platform-Aware Implementation</SectionHeading>
                <p className="text-gray-700 leading-relaxed">
                  SEO fundamentals are similar across platforms, but implementation differs, and not every store uses Shopify or WooCommerce.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                {platforms.map((p, i) => {
                  const [label, rest] = splitLead(p.text);
                  return (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15, duration: 0.6 }}
                    >
                      <Card3D className="h-full">
                        <div className="h-full rounded-3xl overflow-hidden shadow-xl border border-teal-100 bg-white">
                          <div className="bg-gradient-to-r from-teal-700 to-teal-900 p-6 flex items-center gap-4">
                            <span className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                              <p.icon className="w-6 h-6 text-white" />
                            </span>
                            <strong className="text-white text-xl">{label}</strong>
                          </div>
                          <p className="p-6 text-gray-700 leading-relaxed">{rest}</p>
                        </div>
                      </Card3D>
                    </motion.div>
                  );
                })}
              </div>
              <p className="text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
                A platform-specific audit is better than stacking SEO plugins or apps without checking what the store already outputs. Overlapping tools often create duplicate or conflicting tags and schema.
              </p>
            </div>

            {/* Product Variants, Filters, and Out-of-Stock Pages */}
            <div className="max-w-7xl mx-auto mb-24">
              <div className="text-center mb-12">
                <SectionHeading color="text-teal-700">
                  Product Variants, Filters, and Out-of-Stock Pages
                </SectionHeading>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 items-stretch">
                <motion.div
                  className="rounded-3xl p-8 bg-gradient-to-br from-teal-50 to-white border border-teal-100 shadow-lg"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  <Layers className="w-9 h-9 text-teal-700 mb-4" />
                  <p className="text-gray-700 leading-relaxed">
                    Inventory changes constantly, and handling it badly can damage useful URLs. Decide how colour, size, material and model variants are represented: separate URLs, a single URL with selectors, or a grouped structure, with canonical tags and sitemap eligibility matching that choice.
                  </p>
                </motion.div>
                <motion.div
                  aria-hidden="true"
                  className="hidden md:flex items-center justify-center"
                  animate={{ x: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowRight className="w-8 h-8 text-[#c89d5a]" />
                </motion.div>
                <motion.div
                  className="rounded-3xl p-8 bg-gradient-to-br from-amber-50 to-white border border-[#c89d5a]/40 shadow-lg"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  <Package className="w-9 h-9 text-[#c89d5a] mb-4" />
                  <p className="text-gray-700 leading-relaxed">
                    An unavailable product page may still be useful if it offers meaningful information and alternatives. Treat temporarily unavailable products differently from permanently discontinued ones: keep the former with clear status and related recommendations; for the latter, redirect to a genuine replacement where one exists. Do not delete every out-of-stock page or send every discontinued URL to the homepage. The right choice depends on the page, the stock status and the availability of an appropriate replacement.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Structured Data and Product Information for Search */}
            <SpotlightRow title="Structured Data and Product Information for Search" image={images.data}>
              <p>
                Structured data helps search engines interpret product information. Relevant types include Product, ProductGroup for qualifying variants, Offer, BreadcrumbList, Organization and WebSite, with AggregateRating and Review only where genuine reviews qualify.
              </p>
              <p>
                Accuracy is essential: product names, prices, currency and availability must match the visible page. Use INR only where the offer is actually priced in Indian rupees. Product feeds and Google Merchant Center may also matter, depending on the business. Structured data does not guarantee rich results, higher rankings or additional sales.
              </p>
            </SpotlightRow>

            {/* Mobile Shopping Experience and Website Performance */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-24">
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Card3D>
                  {/* [Extended Image Div Fix] Standardized height */}
                  <Img
                    image={images.mobile}
                    containerClassName="w-full h-[320px] sm:h-[380px] lg:h-[420px]"
                    fallbackIcon={Smartphone}
                  />
                </Card3D>
                <motion.span
                  aria-hidden="true"
                  className="absolute -bottom-5 -left-3 w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-600 to-teal-900 shadow-xl flex items-center justify-center"
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Smartphone className="w-7 h-7 text-white" />
                </motion.span>
                <motion.span
                  aria-hidden="true"
                  className="absolute -top-4 -right-3 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                >
                  <Sparkles className="w-6 h-6 text-[#c89d5a]" />
                </motion.span>
              </motion.div>
              <div>
                <FloatingElement>
                  <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-5 leading-tight">
                    Mobile Shopping Experience and Website Performance
                  </h2>
                </FloatingElement>
                <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                  <p>
                    Mobile usability deserves attention for Indian online stores, without needing invented device statistics to justify it. Review responsive product layouts, image optimization, loading behaviour, layout stability, interaction responsiveness, product galleries, variant selection, navigation, search and filtering, checkout usability, unnecessary scripts and third-party apps.
                  </p>
                  <p>
                    Core Web Vitals help evaluate user experience, but performance is one part of SEO. No particular speed improvement can be guaranteed to lift rankings or conversions.
                  </p>
                </div>
              </div>
            </div>

            {/* Buying Guides and Content That Support Product Discovery */}
            <div className="max-w-7xl mx-auto mb-24">
              <div className="text-center mb-10">
                <SectionHeading>Buying Guides and Content That Support Product Discovery</SectionHeading>
              </div>
              <motion.div
                className="relative mb-10"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-teal-400/30 via-transparent to-[#c89d5a]/30 blur-xl" />
                <div className="relative">
                  {/* [Extended Image Div Fix] Standardized height */}
                  <Img
                    image={images.content}
                    containerClassName="w-full h-[300px] sm:h-[360px] lg:h-[400px]"
                    fallbackIcon={FileText}
                  />
                </div>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
                <motion.p
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  Informational content helps shoppers evaluate before buying: buying guides, comparisons, size and fit guides, material explanations, care instructions, compatibility guides, category education, product FAQs and seasonal resources. Good{" "}
                  <Link to="/digital-market/content-marketing" className={inlineLink}>
                    ecommerce content marketing
                  </Link>{" "}
                  links naturally to relevant categories and products.
                </motion.p>
                <motion.p
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                >
                  Avoid generic articles written to add volume or chase unrelated keywords. A homeware store's guide to choosing cookware by material, for example, should connect to its cookware category and specific products.
                </motion.p>
              </div>
            </div>

            {/* Ecommerce SEO for Indian Markets and Seasonal Demand */}
            <div className="max-w-7xl mx-auto mb-24">
              <div className="text-center mb-12">
                <SectionHeading color="text-teal-700">
                  Ecommerce SEO for Indian Markets and Seasonal Demand
                </SectionHeading>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {marketsParas.map((m, i) => (
                  <motion.div
                    key={i}
                    className="group relative overflow-hidden bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow"
                    whileHover={{ y: -8 }}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.6 }}
                  >
                    <span className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-teal-600 to-[#c89d5a] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                    <m.icon className="w-10 h-10 text-teal-700 mb-4" />
                    <p className="text-gray-700 leading-relaxed">{m.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Roadmap (process) */}
            <ProcessSection
              title="How DigLip7 Can Build an Ecommerce SEO Roadmap"
              steps={stages}
              closing="This process does not guarantee any particular result."
            />

            {/* Measuring Ecommerce SEO Beyond Rankings */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-10 lg:gap-14 mb-24 bg-gray-50 rounded-3xl p-8 sm:p-12 border border-gray-100">
              <motion.div
                className="w-full md:w-1/2"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Card3D>
                  {/* [Extended Image Div Fix] Height balances reporting points */}
                  <Img
                    image={images.reporting}
                    containerClassName="w-full h-[380px] sm:h-[440px] lg:h-[480px]"
                    fallbackIcon={BarChart3}
                  />
                </Card3D>
              </motion.div>
              <div className="flex-1">
                <FloatingElement>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
                    Measuring Ecommerce SEO Beyond Rankings
                  </h2>
                </FloatingElement>
                <div className="space-y-4">
                  {[
                    { icon: BarChart3, text: "Reporting should connect organic discovery to business outcomes. Useful measures include organic impressions and clicks, non-branded visibility, category and product page performance, indexed product URLs, search queries, click-through rate, organic add-to-cart events, checkout events, purchases, organic conversion rate and, where reliably attributed, organic revenue, alongside technical health and Core Web Vitals." },
                    { icon: Eye, text: "Traffic and value are not the same. A guide that draws many readers may contribute less to purchases than a well-optimised category page, so judge each page type by the role it plays." },
                    { icon: ShieldCheck, text: "Tracking must be implemented and validated before conclusions are drawn. Faulty purchase tracking can make good work look ineffective, or the reverse." },
                  ].map((r, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.12 }}
                    >
                      <span className="w-10 h-10 shrink-0 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                        <r.icon className="w-5 h-5" />
                      </span>
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{r.text}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* How Long Does Ecommerce SEO Take in India? */}
            <div className="max-w-7xl mx-auto mb-24">
              <motion.div
                className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-teal-50/40 p-8 sm:p-12 border border-teal-100 shadow-xl text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  aria-hidden="true"
                  className="w-16 h-16 mx-auto mb-5 rounded-full bg-gradient-to-br from-teal-600 to-teal-900 flex items-center justify-center shadow-lg"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Clock className="w-8 h-8 text-white" />
                </motion.div>
                <FloatingElement>
                  <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-5">
                    How Long Does Ecommerce SEO Take in India?
                  </h2>
                </FloatingElement>
                <div className="space-y-4 text-gray-700 leading-relaxed text-left sm:text-center">
                  <p>
                    Progress depends on existing site condition, catalogue size, competition, product demand, content quality, technical issues, website history, implementation speed, internal linking, inventory changes and platform limitations.
                  </p>
                  <p>
                    Technical improvements may be reflected after search engines recrawl them, while broader organic visibility can need sustained work. No one should promise first-page rankings within a fixed number of days.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Ecommerce SEO vs Paid Advertising */}
            <div className="max-w-7xl mx-auto mb-24">
              <div className="text-center mb-10">
                <SectionHeading>Ecommerce SEO vs Paid Advertising</SectionHeading>
              </div>
              <motion.div
                className="overflow-x-auto rounded-2xl border border-gray-200 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <table className="w-full min-w-[560px] text-left text-sm sm:text-base border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-teal-800 to-teal-900 text-white font-semibold">
                      <th className="p-4 sm:p-5 w-1/2">Ecommerce SEO</th>
                      <th className="p-4 sm:p-5 w-1/2">Paid advertising</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, i) => (
                      <motion.tr
                        key={row[0]}
                        className={`${i % 2 ? "bg-gray-50/70" : "bg-white"} hover:bg-teal-50/60 transition-colors`}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <td className="p-4 sm:p-5 text-teal-950 font-medium border-t border-gray-100">{row[0]}</td>
                        <td className="p-4 sm:p-5 text-gray-700 border-t border-gray-100">{row[1]}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
              <p className="text-gray-700 leading-relaxed text-center max-w-4xl mx-auto mt-8">
                A retailer may use SEO, paid search, shopping campaigns or a mix, depending on goals and budget. Paid campaigns suit time-sensitive launches; SEO builds lasting discoverability. Neither is universally better, and our{" "}
                <Link to="/digital-market/PPC-Advertising" className={inlineLink}>
                  PPC advertising
                </Link>{" "}
                work sits alongside SEO rather than replacing it.
              </p>
            </div>

            {/* Common Ecommerce SEO Mistakes to Avoid */}
            <div className="max-w-7xl mx-auto mb-24">
              <div className="text-center mb-10">
                <SectionHeading>Common Ecommerce SEO Mistakes to Avoid</SectionHeading>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {mistakes.map((m, i) => (
                  <motion.div
                    key={m.label}
                    className="group relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-amber-50/70 to-white border border-amber-100 shadow-sm hover:shadow-xl transition-shadow"
                    whileHover={{ y: -6 }}
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
                  >
                    <span
                      aria-hidden="true"
                      className="absolute -top-3 -right-1 text-6xl font-extrabold text-amber-100 group-hover:text-amber-200 transition-colors select-none"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="relative flex items-start gap-3">
                      <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                        <AlertTriangle className="w-4 h-4" />
                      </span>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong className="block text-gray-900 text-base mb-1">{m.label}</strong>
                        {m.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Why Consider DigLip7 for Ecommerce SEO Services in India? */}
            <div className="max-w-7xl mx-auto mb-16">
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
                    <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-5 leading-tight">
                      Why Consider DigLip7 for Ecommerce SEO Services in India?
                    </h2>
                  </FloatingElement>
                  <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                    <p>
                      DigLip7 applies an evidence-led method to online stores: technical SEO audits, category and product page optimization, ecommerce keyword research, internal linking, structured data, Shopify and WooCommerce considerations, indexation management, content planning, organic search reporting and ongoing optimization. See our wider{" "}
                      <Link to="/india/seo-services" className={inlineLink}>
                        India SEO services
                      </Link>{" "}
                      for context.
                    </p>
                    <p className="bg-gradient-to-br from-teal-50 to-white rounded-2xl p-5 border-l-4 border-teal-600">
                      We do not guarantee rankings or present unverifiable results. You should always know what is changing, why, and how it is measured.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* FAQ */}
          <FaqSection
            title="Frequently Asked Questions About Ecommerce SEO Services in India"
            faqs={faqs}
          />

          {/* Closing CTA */}
          <CtaSection
            headingLead="Make Your Online Store Easier"
            headingAccent="to Discover Through Search"
            text="DigLip7 can assess your store's technical structure, product and category pages, keyword opportunities, internal links, structured data and organic search performance to identify relevant next steps. The conversation is low-pressure, and there are no promises of instant rankings or guaranteed sales."
            buttons={[
              "Discuss Your Ecommerce SEO Strategy",
              "Request an Ecommerce SEO Audit",
              "Talk to an SEO Specialist",
            ]}
          />
        </div>
      </main>
    </div>
  );
}

export default IndiaEcommerceSEOServices;