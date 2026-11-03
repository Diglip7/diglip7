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
  Globe,
  ShieldCheck,
  Building2,
  GraduationCap,
  ShoppingCart,
  HeartPulse,
  Laptop,
  Cpu,
  UtensilsCrossed,
  Tv,
  Radio,
  Newspaper,
  Film,
  Video,
  Layers,
  DollarSign,
  PieChart,
  Check,
  CheckSquare,
} from "lucide-react";

// ===========================================================================
// Shared visual building blocks
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

// Scroll progress bar
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

// Real image component with lazy loading, responsive styling and placeholder fallback
const ImageContainer = ({
  image,
  icon: Icon = Sparkles,
  badge = "Media Buying India",
  title = "",
  description = "",
  aspect = "aspect-[16/9]",
  className = "",
}) => {
  const [hasError, setHasError] = useState(false);

  if (image?.src && !hasError) {
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
  }

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
      {title && (
        <h3 className="relative z-10 text-sm sm:text-base font-bold text-gray-900 max-w-sm leading-snug mb-1">
          {title}
        </h3>
      )}
      {image?.alt ? (
        <p className="relative z-10 text-xs sm:text-sm font-semibold text-teal-900 bg-teal-50/80 px-3 py-1 rounded-lg border border-teal-200/60 max-w-sm leading-snug mt-1">
          {image.alt}
        </p>
      ) : description ? (
        <p className="relative z-10 text-xs sm:text-sm text-gray-600 mt-1 max-w-xs leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  );
};

// Landing Hero
const LandingHero = ({ breadcrumb, titleDark, titleGradient, ctaLabel, image, whatsappUrl, description }) => {
  const [heroImgError, setHeroImgError] = useState(false);
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
      {/* Breadcrumb */}
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

            <p className="mt-6 text-gray-700 text-base sm:text-lg leading-relaxed max-w-2xl">
              A media buying agency in India helps businesses plan, select, purchase and manage advertising placements across suitable media channels. The process involves audience research, channel selection, budget allocation, campaign execution and performance evaluation to make advertising investments more structured and measurable.
            </p>

            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
              <Link to="/contact" className="inline-block">
                <motion.button
                  className="group px-7 sm:px-9 py-3.5 sm:py-4 bg-gradient-to-r from-teal-700 to-teal-900 text-white text-base sm:text-lg font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}>
                  {ctaLabel}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </div>
          </div>

          {/* Right Section - 3D Hero Container */}
          <motion.div
            className="w-full lg:w-[42%] flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card3D className="w-full max-w-md lg:max-w-none">
              {image?.src && !heroImgError ? (
                <img
                  src={image.src}
                  alt={image.alt || ""}
                  width={image.width || 1600}
                  height={image.height || 900}
                  loading="eager"
                  fetchpriority="high"
                  decoding="async"
                  onError={() => setHeroImgError(true)}
                  className="rounded-2xl shadow-xl w-full max-w-md lg:max-w-none h-auto object-cover bg-gray-50"
                />
              ) : (
                <div className="relative w-full aspect-[16/9] md:aspect-[4/3] rounded-2xl bg-gradient-to-br from-teal-900 via-teal-800 to-teal-950 p-8 shadow-2xl border border-teal-700/50 flex flex-col items-center justify-center text-center overflow-hidden select-none">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(200,157,90,0.2),transparent_70%)] pointer-events-none" />
                  <motion.div
                    className="w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-5 text-[#c89d5a] shadow-lg"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <TrendingUp className="w-10 h-10 text-yellow-300" />
                  </motion.div>
                  <span className="text-xs font-semibold tracking-wider uppercase text-yellow-300/90 bg-white/10 px-3.5 py-1 rounded-full mb-3 border border-white/15">
                    DigLip7 Tech Pvt Ltd
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white max-w-xs leading-snug">
                    Media Buying Agency in India
                  </h3>
                  {image?.alt && (
                    <p className="mt-3 text-xs sm:text-sm font-semibold text-yellow-200/90 max-w-xs bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                      {image.alt}
                    </p>
                  )}
                </div>
              )}
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

// Process Section (Numbered cards)
const ProcessSection = ({ title, intro, steps, closing }) => (
  <div className="bg-white py-12 px-2 text-center mb-20">
    <div className="max-w-5xl mx-auto mb-12">
      <FloatingElement>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
      </FloatingElement>
      {intro && <p className="text-gray-600 mt-3 text-sm sm:text-base">{intro}</p>}
    </div>

    <div className="relative max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 relative z-10">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center bg-gray-50/80 rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="relative flex items-center justify-center w-16 h-16 rounded-full border-4 border-blue-300 bg-white shadow-md mb-4">
              {React.createElement(step.icon, { className: "w-8 h-8 text-blue-600" })}
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
            Plan Your Advertising Campaign
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

// Interactive service accordion — full-width, distinct from sidebar tabs on other pages
const ServiceTabs = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  // Split into two columns for desktop
  const half = Math.ceil(items.length / 2);
  const leftCol = items.slice(0, half);
  const rightCol = items.slice(half);

  const AccordionItem = ({ it, i }) => {
    const isOpen = openIndex === i;
    return (
      <motion.div
        layout
        className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
          isOpen
            ? "border-teal-500 shadow-lg bg-white"
            : "border-gray-200 bg-white hover:border-teal-300 hover:shadow-md"
        }`}
      >
        <button
          type="button"
          onClick={() => toggle(i)}
          aria-expanded={isOpen}
          className="w-full flex items-center gap-4 px-5 py-4 text-left cursor-pointer group"
        >
          <span
            className={`shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold transition-all duration-300 ${
              isOpen
                ? "bg-gradient-to-br from-teal-600 to-teal-800 text-white shadow-md"
                : "bg-teal-50 text-teal-700 group-hover:bg-teal-100"
            }`}
          >
            {i + 1}
          </span>
          <span
            className={`flex-1 text-sm sm:text-base font-semibold transition-colors duration-200 ${
              isOpen ? "text-teal-800" : "text-gray-800"
            }`}
          >
            {it.label}
          </span>
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            className={`shrink-0 transition-colors ${isOpen ? "text-teal-600" : "text-gray-400"}`}
          >
          <ChevronDown className="w-5 h-5"/>
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="px-5 pb-5 pt-1 border-t border-teal-100">
                <div className="flex gap-3 items-start">
                  <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-[#c89d5a]" />
                  <div>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                      {it.text}
                    </p>
                    {it.linkText && it.href && (
                      <Link
                        to={it.href}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-[#c89d5a] transition-colors"
                      >
                        {it.linkText}
                        <ArrowRight className="w-4 h-4"/>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
      <div className="flex flex-col gap-3">
        {leftCol.map((it, i) => (
          <AccordionItem key={it.label} it={it} i={i} />
        ))}
      </div>
      <div className="flex flex-col gap-3">
        {rightCol.map((it, i) => (
          <AccordionItem key={it.label} it={it} i={i + half} />
        ))}
      </div>
    </div>
  );
};

// Expanding industry cards 
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
            {React.createElement(it.icon, { className: "w-6 h-6" })}
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

const pageUrl = "https://diglip7.com/media-buying-agency-india/";
const metaTitle = "Media Buying Agency India | Media Planning & Buying | DigLip7";
const metaDescription =
  "Explore media buying services in India from DigLip7. Plan advertising channels, manage media budgets and optimize digital campaigns with a strategic approach.";

const breadcrumbTrail = [
  { label: "Home", href: "/" },
  { label: "Media Buying Agency in India", href: "/media-buying-agency-india/" },
];

const images = {
  hero: {
    src: "/images/media-buying-agency-india.webp",
    alt: "Media planning team reviewing advertising channels and campaign budget allocation",
    width: 1600,
    height: 900,
  },
  planning: {
    src: "/images/media-planning-strategy.webp",
    alt: "Advertising strategy team planning audience targeting and media channel selection",
    width: 1200,
    height: 675,
  },
  digital: {
    src: "/images/digital-media-buying-services.webp",
    alt: "Digital advertising team managing paid media placements across online platforms",
    width: 1200,
    height: 675,
  },
  programmatic: {
    src: "/images/programmatic-media-buying.webp",
    alt: "Programmatic advertising campaign planning and automated media inventory analysis",
    width: 1200,
    height: 675,
  },
  traditional: {
    src: "/images/traditional-media-buying-india.webp",
    alt: "Advertising media planning across television, print, radio and outdoor channels",
    width: 1200,
    height: 675,
  },
  budget: {
    src: "/images/media-budget-allocation.webp",
    alt: "Media buying team reviewing advertising budget distribution across campaign channels",
    width: 1200,
    height: 675,
  },
  analytics: {
    src: "/images/media-buying-performance-report.webp",
    alt: "Advertising campaign performance reporting with reach, impressions and conversion metrics",
    width: 1200,
    height: 675,
  },
};

const services = [
  {
    label: "1. Media Strategy and Planning",
    text: "A channel and budget plan tied to your objectives. Useful for businesses starting or restructuring advertising.",
  },
  {
    label: "2. Audience and Market Research",
    text: "Reviewing who you want to reach and where they spend time online, so spending is directed sensibly.",
  },
  {
    label: "3. Digital Media Buying",
    text: "Purchasing and managing placements across online platforms, from search to social, display and video.",
  },
  {
    label: "4. Paid Search Advertising",
    href: "/digital-market/PPC-Advertising",
    linkText: "See our PPC advertising services",
    text: "Capturing people actively searching for your products or services. See our PPC advertising services for campaign-level search management, which is one part of broader media buying.",
  },
  {
    label: "5. Social Media Advertising",
    text: "Reaching audiences on Instagram, Facebook and LinkedIn with suitable creative and targeting.",
  },
  {
    label: "6. Display and Programmatic Advertising",
    text: "Extending reach across websites and apps with controlled targeting and frequency, subject to platform access.",
  },
  {
    label: "7. Video Advertising",
    text: "Planning video placements, for example on YouTube, for awareness and consideration.",
  },
  {
    label: "8. Campaign Budget Allocation",
    text: "Dividing budget across channels and revisiting it as results come in.",
  },
  {
    label: "9. Advertising Placement Management",
    text: "Keeping track of where ads run, when and at what cost.",
  },
  {
    label: "10. Campaign Monitoring and Optimization",
    text: "Reviewing delivery and performance and adjusting targeting, budget, placements or creative.",
  },
  {
    label: "11. Performance Reporting",
    text: "Clear reports on spend, delivery and the indicators agreed at the start.",
  },
  {
    label: "12. Cross-Channel Media Planning",
    href: "/digital-market/seoservices/",
    linkText: "Explore integrated SEO services",
    text: "Coordinating paid media with SEO and social activity so channels support each other.",
  },
];

const industries = [
  {
    icon: ShoppingCart,
    label: "E-commerce and D2C Brands",
    text: "Product advertising through search, social and display, measured by purchases.",
  },
  {
    icon: Building2,
    label: "Real Estate",
    text: "Project awareness and enquiry campaigns using location-based targeting and focused landing pages.",
  },
  {
    icon: HeartPulse,
    label: "Healthcare and Clinics",
    text: "Responsible advertising with accurate service information, relevant audiences and appointment enquiry measurement, in line with applicable regulations.",
  },
  {
    icon: GraduationCap,
    label: "Education and Training",
    text: "Course promotions and admission enquiries through search and social, without unsupported admission or placement claims.",
  },
  {
    icon: Laptop,
    label: "IT and SaaS Companies",
    text: "B2B targeting, LinkedIn and search campaigns, webinars and demo enquiries across longer decision cycles.",
  },
  {
    icon: ShoppingCart,
    label: "Retail and Consumer Brands",
    text: "Seasonal and local promotions with cross-channel reach.",
  },
  {
    icon: UtensilsCrossed,
    label: "Hospitality and Restaurants",
    text: "Location-based advertising, booking campaigns and video creative for relevant segments.",
  },
];

const processSteps = [
  {
    icon: Users,
    title: "Step 1 – Business Understanding",
    description: "Review the business, product, audience, market and objectives.",
  },
  {
    icon: Eye,
    title: "Step 2 – Research & Audience Analysis",
    description: "Study audience segments, available channels and opportunities.",
  },
  {
    icon: Target,
    title: "Step 3 – Media Planning",
    description: "Recommend channels, formats, budgets and schedules.",
  },
  {
    icon: Settings,
    title: "Step 4 – Buying & Campaign Setup",
    description: "Book agreed placements or configure platform campaigns within the approved scope.",
  },
  {
    icon: BarChart3,
    title: "Step 5 – Campaign Monitoring",
    description: "Track delivery, spend, placements and available metrics.",
  },
  {
    icon: TrendingUp,
    title: "Step 6 – Optimization",
    description: "Adjust targeting, budget allocation, placements or creative based on data.",
  },
  {
    icon: FileText,
    title: "Step 7 – Reporting",
    description: "Share clear reports on delivery, spend and agreed indicators.",
  },
];

const faqs = [
  {
    question: "What does a media buying agency in India do?",
    answer:
      "It helps plan, select, purchase or manage advertising placements and then evaluates how the campaign was delivered and what it achieved.",
  },
  {
    question: "What is the difference between media planning and media buying?",
    answer:
      "Media planning covers strategy, audience and channel selection. Media buying covers purchasing placements and managing campaign execution. The two work together.",
  },
  {
    question: "Which advertising channels can a media buying agency manage?",
    answer:
      "Digital channels such as search, social media, display and video are common. Television, radio, print and outdoor depend on the agency’s scope and partners, so ask what is offered directly and what goes through third parties.",
  },
  {
    question: "How is a media buying budget decided?",
    answer:
      "Objectives, target audience, channel choice, competition, campaign duration and available inventory all influence the budget. It is usually reviewed as performance data comes in.",
  },
  {
    question: "Is media buying suitable for small businesses in India?",
    answer:
      "Yes. Smaller businesses can start with a few channels that match their audience and objectives, and scale budgets as they learn what works.",
  },
  {
    question: "What is programmatic media buying?",
    answer:
      "It is the automated purchase of advertising inventory, often through real-time bidding, using audience or contextual targeting. It needs proper configuration and ongoing monitoring.",
  },
  {
    question: "How can businesses measure media buying performance?",
    answer:
      "Look at impressions, reach, frequency, clicks, engagement, conversions and cost metrics, and connect them to business outcomes such as enquiries or sales.",
  },
  {
    question: "How can I get started with DigLip7's media buying services?",
    answer:
      "Share your campaign objective, target audience, preferred channels, geographic coverage and estimated budget through the contact page, and the team can discuss a suitable plan.",
  },
];

const mediaRequirementPoints = [
  "Company and product information.",
  "Campaign objectives.",
  "Target audience.",
  "Target markets and locations.",
  "Preferred advertising channels.",
  "Estimated media budget.",
  "Campaign duration.",
  "Existing campaign performance, if available.",
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
      "@id": "https://diglip7.com/media-buying-agency-india/#webpage",
      url: "https://diglip7.com/media-buying-agency-india/",
      name: "Media Buying Agency India | Media Planning & Buying | DigLip7",
      description:
        "Explore media buying services in India from DigLip7. Plan advertising channels, manage media budgets and optimize digital campaigns with a strategic approach.",
      isPartOf: {
        "@id": "https://diglip7.com/#website",
      },
      about: {
        "@id": "https://diglip7.com/media-buying-agency-india/#service",
      },
      publisher: {
        "@id": "https://diglip7.com/#organization",
      },
      breadcrumb: {
        "@id": "https://diglip7.com/media-buying-agency-india/#breadcrumb",
      },
      inLanguage: "en-IN",
    },
    {
      "@type": "Service",
      "@id": "https://diglip7.com/media-buying-agency-india/#service",
      name: "Media Buying Agency in India",
      serviceType: "Media planning and buying",
      description:
        "Media planning and digital media buying services for businesses in India, including audience research, channel selection, budget allocation, campaign management and performance reporting.",
      url: "https://diglip7.com/media-buying-agency-india/",
      provider: {
        "@id": "https://diglip7.com/#organization",
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://diglip7.com/media-buying-agency-india/#breadcrumb",
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
          name: "Media Buying Agency in India",
          item: "https://diglip7.com/media-buying-agency-india/",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://diglip7.com/media-buying-agency-india/#faq",
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
// Page Component
// ===========================================================================

function MediaBuyingAgencyIndia() {
  return (
    <div className="overflow-x-hidden bg-white w-full">
      <SEO
        title={metaTitle}
        description={metaDescription}
        canonical={pageUrl}
        ogType="website"
        ogDescription="Explore media planning and buying services for businesses in India. Understand audience targeting, advertising channels, media budgets and campaign performance."
        twitterTitle="Media Buying Agency India | DigLip7"
        twitterDescription="Explore media planning and buying services for businesses in India. Understand audience targeting, advertising channels, media budgets and campaign performance."
        schema={jsonLd}
      />
      <ScrollProgress />
      <BackToTop />

      <main>
        {/* Hero */}
        <LandingHero
          breadcrumb={breadcrumbTrail}
          titleDark="Media Buying Agency in India"
          titleGradient="for Strategic Advertising Campaigns"
          ctaLabel="Discuss Your Media Buying Requirements"
          image={images.hero}
          description={[
            "A media buying agency in India helps businesses plan, select, purchase and manage advertising placements across suitable media channels.",
            <>
              At <span className="font-semibold text-blue-700">DigLip7</span>, we combine audience research, channel selection, budget allocation and performance evaluation to make advertising investments more structured, transparent and measurable.
            </>,
          ]}
        />

        <div className="bg-white">
          <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 w-full">
            
            {/* Intro & Objective-First Approach */}
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
                    Connecting Objectives with Real Advertising Placements
                  </h2>
                </FloatingElement>
                <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                  <p className="bg-gradient-to-br from-teal-700 to-teal-900 text-white rounded-2xl p-6 shadow-xl leading-relaxed">
                    Choosing where to advertise matters as much as what the advertisement says. A strong message placed in the wrong channel, or in front of the wrong audience, rarely delivers value. Media buying connects campaign objectives with real placements, and it works best when it is backed by audience research, a clear budget and regular measurement.
                  </p>
                  <p className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-gray-700 leading-relaxed">
                    <Link to="/" className={inlineLink}>DigLip7</Link> approaches advertising campaigns from the business objective first and the channel second. We help businesses evaluate opportunities across digital platforms, plan budgets, set up and manage campaigns, and review results so the next round of spending is better informed.
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

            {/* What Is Media Buying? */}
            <div className="max-w-7xl mx-auto mb-24">
              <div className="text-center max-w-4xl mx-auto mb-12">
                <SectionHeading>What Is Media Buying?</SectionHeading>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  Media buying is the process of purchasing advertising space or inventory so that your message reaches a chosen audience. It usually involves selecting channels based on the target audience, evaluating formats and placements, purchasing or booking them, managing schedules and delivery, monitoring performance and using the results to guide future campaigns. It is the execution side of a wider advertising strategy.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {[
                  "Buying search advertising placements through Google Ads.",
                  "Purchasing social media advertising through Meta platforms.",
                  "Selecting display advertising inventory.",
                  "Planning video advertising on suitable platforms.",
                  "Booking traditional placements through media owners or authorized partners, where this is part of an agreed scope.",
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-3 bg-gradient-to-br from-teal-50/60 to-white rounded-2xl p-5 shadow-sm border border-teal-100"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                    <span className="text-gray-800 text-sm sm:text-base font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="bg-amber-50/70 rounded-3xl p-6 sm:p-8 border border-amber-200 text-gray-700 text-sm sm:text-base leading-relaxed">
                Managing campaigns inside an advertising platform and buying inventory directly from a media owner are related activities, but they are not identical. The terms, controls and reporting differ, so it is worth being clear about which one you need.
              </div>
            </div>

            {/* Media Planning vs Media Buying */}
            <div className="max-w-7xl mx-auto mb-24">
              <div className="text-center max-w-4xl mx-auto mb-12">
                <SectionHeading color="text-teal-700">Media Planning vs Media Buying</SectionHeading>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  The two terms are often used as if they mean the same thing. They do not, though they work together.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <motion.div
                  className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-teal-100 flex flex-col justify-between"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div>
                    <span className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center mb-6">
                      <Target className="w-6 h-6" />
                    </span>
                    <h3 className="text-2xl font-bold text-teal-900 mb-4">Media Planning</h3>
                    <ul className="space-y-3 text-gray-700 text-base">
                      <li className="flex items-start gap-2">
                        <CheckSquare className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                        <span>Understanding business and campaign objectives.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckSquare className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                        <span>Defining target audiences.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckSquare className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                        <span>Researching media habits and channel suitability.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckSquare className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                        <span>Selecting platforms and allocating budgets.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckSquare className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                        <span>Setting schedules and performance indicators.</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-gradient-to-br from-teal-900 to-teal-800 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-teal-700 flex flex-col justify-between"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div>
                    <span className="w-12 h-12 rounded-2xl bg-white/10 text-yellow-300 flex items-center justify-center mb-6">
                      <Megaphone className="w-6 h-6" />
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-4">Media Buying</h3>
                    <ul className="space-y-3 text-teal-100 text-base">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-yellow-300 shrink-0 mt-0.5" />
                        <span>Purchasing or booking advertising placements.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-yellow-300 shrink-0 mt-0.5" />
                        <span>Setting up campaigns.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-yellow-300 shrink-0 mt-0.5" />
                        <span>Managing delivery.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-yellow-300 shrink-0 mt-0.5" />
                        <span>Monitoring spend and inventory.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-yellow-300 shrink-0 mt-0.5" />
                        <span>Reviewing placement performance and optimizing where possible.</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </div>

              <div className="text-center text-gray-700 font-medium text-base sm:text-lg bg-gray-50 rounded-2xl p-6 border border-gray-100">
                Planning decides what should be bought and why. Buying carries it out and reports what happened. Each depends on the other.
              </div>
            </div>

            {/* Why Businesses in India Need Strategic Media Buying */}
            <div className="max-w-7xl mx-auto mb-24">
              <div className="text-center max-w-4xl mx-auto mb-12">
                <SectionHeading>Why Businesses in India Need Strategic Media Buying</SectionHeading>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  A structured approach helps businesses manage advertising across several channels without losing control of budget or direction. It supports reaching audiences on relevant platforms, choosing channels by objective, avoiding poorly matched placements, coordinating different campaign formats, tracking reach, impressions, clicks and conversions, and understanding which channels contribute to business goals. Over time, campaign data can improve how future budgets are allocated.
                </p>
              </div>

              <motion.div
                className="bg-gray-50 rounded-3xl p-8 sm:p-10 shadow-lg border-l-4 border-[#c89d5a] text-gray-700 leading-relaxed text-base sm:text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                For example, a software company selling to other businesses may find that LinkedIn and search advertising fit better than broad display, while a retail brand running a festive promotion may need social and video reach alongside search.
              </motion.div>
            </div>

            {/* Media Buying Services Offered by DigLip7 (Tabs) */}
            <div className="max-w-7xl mx-auto mb-24 rounded-3xl bg-gradient-to-br from-gray-50 to-teal-50/30 p-6 sm:p-12 border border-gray-100 shadow-md">
              <div className="text-center max-w-4xl mx-auto mb-10">
                <SectionHeading>Media Buying Services Offered by DigLip7</SectionHeading>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  DigLip7 focuses on digital, platform-based media buying and planning. Not every business needs every service below.
                </p>
              </div>

              <ServiceTabs items={services} />

              <div className="text-center mt-12">
                <Link to="/contact">
                  <motion.button
                    className="px-8 py-3.5 bg-gradient-to-r from-teal-700 to-teal-900 text-white font-semibold rounded-full shadow-xl hover:shadow-teal-500/50 transition-all duration-300 inline-flex items-center gap-2 cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Media Planning Options
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
              </div>
            </div>

            {/* Media Planning and Strategy Development */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-24">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Card3D>
                  <ImageContainer
                    image={images.planning}
                    icon={Target}
                    badge="Media Strategy"
                    title="Media Planning & Strategy Development"
                    description="Objective Definition • Audience Profiling • Channel Mapping"
                  />
                </Card3D>
              </motion.div>
              <div>
                <FloatingElement>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    Media Planning and Strategy Development
                  </h2>
                </FloatingElement>
                <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                  <p className="pl-5 border-l-4 border-teal-600">
                    A media strategy should start with business objectives, not with a favourite platform. The work typically covers understanding the business and product, defining objectives and the target audience, reviewing demographics and interests, understanding media habits, researching channels, setting budgets, choosing formats, building a schedule and defining how success will be measured.
                  </p>
                  <p className="pl-5 border-l-4 border-teal-600">
                    Strategy differs by goal. Brand awareness leans on reach and frequency, lead generation on search and form-based campaigns, website traffic on cost-efficient clicks, app promotion on install-focused formats, and e-commerce on product-led campaigns measured by sales.
                  </p>
                </div>
              </div>
            </div>

            {/* Digital Media Buying Services */}
            <div className="max-w-7xl mx-auto mb-24 rounded-3xl bg-gradient-to-br from-teal-800 to-teal-900 p-8 sm:p-12 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#c89d5a]/20 blur-3xl pointer-events-none" />
              <div className="relative">
                <div className="text-center mb-10">
                  <SectionHeading color="text-white">Digital Media Buying Services</SectionHeading>
                  <p className="text-teal-100 text-base sm:text-lg max-w-2xl mx-auto mb-8">
                    Digital media buying places your advertising on online platforms, with targeting and measurement built in.
                  </p>
                  <div className="max-w-2xl mx-auto">
                    <Card3D>
                      <ImageContainer
                        image={images.digital}
                        icon={Layers}
                        badge="Digital Media Buying"
                        title="Paid Placements Across Online Platforms"
                        description="Managing search, social, display and video placements across target audiences."
                      />
                    </Card3D>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      icon: Search,
                      title: "Search Advertising",
                      desc: "Google Search campaigns reach people at the moment of intent. Results depend on keyword targeting, bidding and how relevant the landing page is to the ad.",
                    },
                    {
                      icon: Share2,
                      title: "Social Media Advertising",
                      desc: "Meta platforms cover Instagram and Facebook, while LinkedIn suits B2B audiences. Targeting by audience and interest, and matching creative to each format, shape performance.",
                    },
                    {
                      icon: Layers,
                      title: "Display Advertising",
                      desc: "Banner and responsive formats can build reach through audience and contextual targeting, with frequency controls to avoid overexposure.",
                    },
                    {
                      icon: Video,
                      title: "Video Advertising",
                      desc: "YouTube and other video placements suit storytelling and awareness. Format suitability and audience selection matter, and measurement should include views and downstream actions.",
                    },
                  ].map((chan, idx) => (
                    <motion.div
                      key={chan.title}
                      className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 text-white flex flex-col justify-between"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <div>
                        <div className="w-12 h-12 rounded-xl bg-white/20 text-yellow-300 flex items-center justify-center mb-4">
                          {React.createElement(chan.icon, { className: "w-6 h-6" })}
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-white">{chan.title}</h3>
                        <p className="text-sm text-white/80 leading-relaxed">{chan.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 text-center text-teal-200 text-sm">
                  Platform choice should reflect audience behaviour, objectives and budget, not habit.
                </div>
              </div>
            </div>

            {/* Programmatic Media Buying */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-24">
              <div>
                <FloatingElement>
                  <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-6 leading-tight">
                    Programmatic Media Buying
                  </h2>
                </FloatingElement>
                <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                  <p>
                    Programmatic buying uses automated systems to purchase advertising inventory, often through real-time bidding on demand-side platforms. It supports audience and contextual targeting, inventory selection, frequency controls, brand safety settings and invalid traffic monitoring, with reporting across placements.
                  </p>
                  <p className="bg-teal-50/60 rounded-2xl p-5 border-l-4 border-teal-600">
                    It needs the right platform access, careful campaign configuration and ongoing oversight. It is not a set-and-forget option.
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
                  <ImageContainer
                    image={images.programmatic}
                    icon={Cpu}
                    badge="Automated Inventory"
                    title="Programmatic Advertising"
                    description="Real-Time Bidding • DSP Management • Fraud Detection"
                  />
                </Card3D>
              </motion.div>
            </div>

            {/* Traditional Media Buying in India */}
            <div className="max-w-7xl mx-auto mb-24">
              <div className="text-center max-w-4xl mx-auto mb-12">
                <SectionHeading>Traditional Media Buying in India</SectionHeading>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-8">
                  Television, radio, print, outdoor and cinema can form part of an integrated plan.
                </p>
                <div className="max-w-2xl mx-auto">
                  <Card3D>
                    <ImageContainer
                      image={images.traditional}
                      icon={Globe}
                      badge="Traditional Media"
                      title="Offline Advertising Channels in India"
                      description="Advertising media planning across television, print, radio, outdoor and cinema."
                    />
                  </Card3D>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
                {[
                  { icon: Tv, label: "Television", text: "Planning TV involves channel, programme and regional or national fit." },
                  { icon: Radio, label: "Radio", text: "Radio depends on station coverage and time slots." },
                  { icon: Newspaper, label: "Print", text: "Print involves publication readership, size, placement and edition." },
                  { icon: Globe, label: "Outdoor", text: "Outdoor covers hoardings, transit, airport, metro and commercial locations." },
                  { icon: Film, label: "Cinema", text: "Cinema depends on theatre, audience and schedule." },
                ].map((item, idx) => (
                  <motion.div
                    key={item.label}
                    className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col justify-between"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-3">
                        {React.createElement(item.icon, { className: "w-5 h-5" })}
                      </div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.label}</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-gray-700 text-sm sm:text-base leading-relaxed">
                Rates, availability and booking terms vary by publisher, location, date and campaign. DigLip7 does not claim exclusive inventory or negotiated rates. Where traditional placements are part of a plan, they are arranged through media owners or authorized partners, and the scope is agreed in advance.
              </div>
            </div>

            {/* Media Buying for Different Industries */}
            <div className="max-w-7xl mx-auto mb-24">
              <div className="text-center max-w-4xl mx-auto mb-10">
                <SectionHeading color="text-teal-700">Media Buying for Different Industries</SectionHeading>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  These are illustrative examples, not client case studies.
                </p>
              </div>
              <ExpandingCards items={industries} />
            </div>

            {/* Media Buying Across the Indian Market */}
            <div className="max-w-7xl mx-auto mb-24">
              <div className="text-center max-w-4xl mx-auto mb-12">
                <SectionHeading>Media Buying Across the Indian Market</SectionHeading>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  Campaign planning can differ across regions. Key considerations include national versus regional campaigns, geographic targeting, language and creative localization, regional media preferences, urban and non-urban audiences, reach and frequency, platform availability, scheduling and budget split by region.
                </p>
              </div>

              <motion.div
                className="bg-gradient-to-br from-teal-50 to-white rounded-3xl p-8 sm:p-10 shadow-lg border border-teal-100 text-gray-700 leading-relaxed text-base sm:text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                A campaign running in Delhi NCR, Mumbai, Bengaluru, Hyderabad, Pune, Chennai, Kolkata and Ahmedabad does not need identical creative, budget or channels in each. A regional-language message may suit one market, while another responds better to English-led creative or a different platform mix. Actual costs and audience sizes vary, so plans should be checked against current platform data.
              </motion.div>
            </div>

            {/* Advertising Budget Allocation and Media Cost Management */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-24">
              <div>
                <FloatingElement>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    Advertising Budget Allocation and Media Cost Management
                  </h2>
                </FloatingElement>
                <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                  <p>
                    Good budget management starts with a defined total budget, with media spend kept separate from agency or management fees. From there, budget is allocated by channel, placement costs are compared, estimated reach and frequency are reviewed, daily or scheduled spend is monitored and underperforming placements are adjusted based on evidence.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {[
                      "CPM: cost per thousand impressions.",
                      "CPC: cost per click.",
                      "CPA: cost per acquisition or action.",
                      "CPV: cost per view.",
                      "Fixed-rate placements: a set price for a defined placement.",
                    ].map((model, idx) => (
                      <div key={idx} className="bg-white rounded-xl p-3 border border-gray-100 shadow-xs flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-800">
                        <DollarSign className="w-4 h-4 text-teal-700 shrink-0" />
                        <span>{model}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 pt-2">
                    Actual costs vary by platform, audience, competition, inventory, location and timing. We do not promise lower rates or guaranteed returns.
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
                  <ImageContainer
                    image={images.budget}
                    icon={PieChart}
                    badge="Cost Control"
                    title="Media Budget Allocation"
                    description="Channel Splitting • Pacing Analysis • Bid Management"
                  />
                </Card3D>
              </motion.div>
            </div>

            {/* Media Buying Process at DigLip7 */}
            <ProcessSection
              title="Media Buying Process at DigLip7"
              intro="Our 7-step process ensures transparency and commercial alignment throughout the campaign:"
              steps={processSteps}
              closing={true}
            />

            {/* Media Buying Performance Measurement */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-24">
              <div>
                <FloatingElement>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    Media Buying Performance Measurement
                  </h2>
                </FloatingElement>
                <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                  <p>
                    Measurement should cover total media spend, impressions, reach, frequency, clicks, click-through rate, CPC, CPM, video views and completion rates where relevant, leads and conversions, CPA, landing page engagement, and revenue and return on ad spend where correctly tracked.
                  </p>
                  <div className="space-y-3 pt-2">
                    <div className="bg-gray-50 rounded-xl p-4 border-l-4 border-teal-600">
                      <strong>Delivery metrics:</strong> show whether placements ran as planned.
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4 border-l-4 border-[#c89d5a]">
                      <strong>Engagement metrics:</strong> show how audiences interacted with the ad.
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4 border-l-4 border-teal-800">
                      <strong>Business outcome metrics:</strong> show whether the campaign contributed to enquiries, sales or other defined goals.
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 pt-1">
                    Google Analytics 4 and advertising-platform reports can support this view. Impressions or clicks alone do not prove success.
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
                  <ImageContainer
                    image={images.analytics}
                    icon={BarChart3}
                    badge="Measurement & ROI"
                    title="Campaign Performance Reporting"
                    description="Delivery • Engagement • Business Outcome Tracking"
                  />
                </Card3D>
              </motion.div>
            </div>

            {/* Transparency, Brand Safety and Accountability */}
            <div className="max-w-6xl mx-auto mb-24">
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
                      Transparency, Brand Safety and Accountability
                    </h2>
                  </FloatingElement>
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-6">
                    Clients should understand where budget is going and how results are measured. That means documented budgets and objectives, separation of media spend and fees, accurate placement information, delivery verification, appropriate brand safety controls, monitoring of invalid traffic where applicable, clear reporting, access to relevant advertising account data and compliance with platform policies and advertising regulations.
                  </p>
                  <p className="bg-gradient-to-br from-teal-50 to-white rounded-2xl p-6 border-l-4 border-teal-600 shadow-sm text-gray-700 text-sm sm:text-base">
                    DigLip7 prioritizes complete visibility into where each rupee is invested, protecting your brand reputation across every impression and placement.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Why Consider DigLip7 for Media Buying Services in India? */}
            <div className="max-w-6xl mx-auto mb-20">
              <motion.div
                className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-teal-50/30 p-8 sm:p-12 shadow-xl border border-teal-100"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative">
                  <FloatingElement>
                    <h2 className="text-3xl md:text-4xl font-bold text-teal-800 mb-6 leading-tight">
                      Why Consider DigLip7 for Media Buying Services in India?
                    </h2>
                  </FloatingElement>
                  <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                    <p>
                      DigLip7 plans media around campaign objectives, supported by audience and channel research, digital advertising planning, budget allocation and monitoring, campaign setup and management, and performance-focused reporting. Media activity can be coordinated with <Link to="/digital-market/seoservices/" className={inlineLink}>SEO</Link>, <Link to="/digital-market/PPC-Advertising" className={inlineLink}>PPC</Link>, social media and <Link to="/digital-market/Ai-powered-Digital-Marketing" className={inlineLink}>AI-powered digital marketing</Link> where it makes sense, and recommendations rest on the campaign data available.
                    </p>
                    <p className="bg-white rounded-2xl p-6 border border-teal-100 shadow-sm text-gray-700">
                      <strong>To be clear about scope:</strong> DigLip7 provides platform-based digital media planning and buying. Any television, radio, print or outdoor placements would involve third-party media owners or partners and are discussed case by case.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>

          {/* FAQs */}
          <FaqSection title="Frequently Asked Questions" faqs={faqs} />

          {/* Contact / Discuss Your Media Buying Requirements */}
          <CtaSection
            headingLead="Discuss Your Media Buying"
            headingAccent="Requirements in India"
            text="If you are planning advertising and want support with media planning and buying, tell us about your requirements. It helps to share:"
            listItems={mediaRequirementPoints}
            ctaLabel="Discuss Your Media Buying Requirements"
          />
        </div>
      </main>
    </div>
  );
}

export default MediaBuyingAgencyIndia;
