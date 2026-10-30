import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import SEO from "../../../components/SEO";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import {
  Search,
  Globe,
  MapPin,
  FileText,
  Settings,
  CalendarCheck,
  Languages,
  BarChart3,
  ArrowRight,
  Sparkles,
  ChevronDown,
  Building2,
  Compass,
  Briefcase,
  Wallet,
  Crown,
  Network,
  CheckCircle2,
  ArrowUp,
  ShieldCheck,
  TrendingUp,
  Hotel,
  Home,
  ChevronRight,
} from "lucide-react";

// 3D Card effect component matching DigLip7 style
const Card3D = ({ children, className = "" }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setRotateX((y - centerY) / 25);
    setRotateY((centerX - x) / 25);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      className={`transform-gpu transition-transform duration-200 ease-out ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      }}
    >
      {children}
    </motion.div>
  );
};

// Subtle floating element
const FloatingElement = ({ children, delay = 0 }) => (
  <motion.div
    animate={{ y: [0, -6, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
  >
    {children}
  </motion.div>
);

// Scroll progress bar
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 origin-left bg-gradient-to-r from-teal-600 via-teal-700 to-[#c89d5a] z-[60] pointer-events-none"
      style={{ scaleX }}
    />
  );
};

// Back to top floating button
const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
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

// Process Section matching APIDevelopment and CustomSoftwareDevelopment exact timeline design
const ProcessSection = ({
  title = "Our Hotel SEO Process",
  subtitle = "How we work with hotels follows a clear, sensible sequence:",
  steps,
}) => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 md:px-12 lg:px-8 xl:px-12 text-center border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <FloatingElement>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {title}
            </h2>
          </FloatingElement>
          {subtitle && (
            <p className="text-gray-600 mt-3 text-sm sm:text-base">
              {subtitle}
            </p>
          )}
        </div>

        {/* Steps Timeline Section */}
        <div className="relative max-w-7xl mx-auto">
          {/* Blue Line (Desktop only) */}
          <div className="hidden lg:block absolute top-10 left-0 w-full border-t-4 border-blue-100 z-0"></div>

          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8 lg:gap-3 relative z-10">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Icon Circle */}
                  <div className="relative flex items-center justify-center w-16 h-16 rounded-full border-4 border-blue-300 bg-white shadow-md mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                    <span className="absolute -top-2 -right-2 bg-teal-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full shadow">
                      {index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-gray-900 text-base lg:text-sm xl:text-base leading-snug">
                    {step.title.replace(/^\d+\.\s*/, "")}
                  </h3>
                  {/* Description */}
                  <p className="text-gray-600 text-xs sm:text-sm mt-2 leading-relaxed max-w-[220px] lg:max-w-none">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Action Button */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Link to="/contact">
            <motion.button
              className="px-8 py-3.5 bg-gradient-to-r from-teal-700 to-teal-900 text-white font-semibold rounded-full shadow-lg hover:shadow-teal-500/50 transition-all duration-300 cursor-pointer inline-flex items-center gap-2 text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Discuss Your Hotel SEO Strategy</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

// FAQ Section matching APIDevelopment design
const FaqSection = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-teal-50/30 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <FloatingElement>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-700 mb-4">
              Frequently Asked Questions
            </h2>
          </FloatingElement>
        </motion.div>

        <div className="space-y-4 sm:space-y-6 max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left p-4 sm:p-6 hover:bg-gray-50 transition-colors duration-200 group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-900 to-teal-700 text-white text-lg font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-102 cursor-pointer"
              >
                <span className="text-sm sm:text-base lg:text-lg font-semibold pr-4">
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-white" />
                </motion.div>
              </button>

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
                      {faq.a}
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

// Final CTA Section
const FinalCtaSection = ({ title, desc, linkText, href = "/contact" }) => {
  const circles = useMemo(
    () =>
      Array.from({ length: 14 }, () => ({
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

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <FloatingElement>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
              {title}
            </h2>
          </FloatingElement>

          <p className="text-base sm:text-lg lg:text-xl text-white/95 mb-8 max-w-2xl mx-auto leading-relaxed">
            {desc}
          </p>

          <Link to={href}>
            <motion.button
              className="px-8 py-4 bg-white text-teal-800 font-bold rounded-full shadow-2xl hover:shadow-white/20 hover:bg-gray-50 transition-all duration-300 text-base sm:text-lg cursor-pointer inline-flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{linkText}</span>
              <Sparkles className="w-5 h-5 text-amber-500" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default function IndiaHotelSEOServices() {
  const canonicalUrl = "https://diglip7.com/india/hotel-seo-services/";
  const heroImageSrc = "/images/india/hotel-seo/hotel-seo-services-india-hero.webp";
  const heroImageAlt =
    "Contemporary Indian hotel with a digital marketing specialist reviewing website performance";

  // Breadcrumbs
  const breadcrumbTrail = [
    { label: "Home", href: "/" },
    { label: "SEO Services India", href: "/india/seo-services" },
    { label: "Hotel SEO Services India", href: "/india/hotel-seo-services/" },
  ];

  const heroParticles = useMemo(
    () =>
      Array.from({ length: 20 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 3 + Math.random() * 2,
        delay: Math.random() * 2,
      })),
    []
  );

  // 8 Hotel SEO Services
  const servicesList = [
    {
      title: "Hotel Keyword Research",
      desc: "We identify the searches relevant to your property: hotel stays by destination, room types, facilities, events and traveller needs. Searches are grouped by intent and matched to the page that should answer them.",
      icon: Search,
      tag: "Intent Mapping",
    },
    {
      title: "Hotel Website SEO",
      desc: "We improve page titles, headings, descriptions, internal links, content structure and indexability so search engines can understand your pages and visitors can move easily between them.",
      icon: Globe,
      tag: "On-Page Health",
    },
    {
      title: "Local SEO for Hotels",
      desc: "We strengthen local relevance through accurate property details, location pages and Google Business Profile optimization, so travellers searching in a particular area can find reliable information.",
      icon: MapPin,
      tag: "Local Discovery",
    },
    {
      title: "Hotel Website Content Optimization",
      desc: "We create and refine helpful content for rooms, amenities, dining, events, business stays and nearby attractions, written for real guests and based on facts your team can verify.",
      icon: FileText,
      tag: "Guest Experience",
    },
    {
      title: "Technical SEO for Hotel Websites",
      desc: "We review crawling, indexing, site speed, mobile usability, redirects, canonical tags and XML sitemaps, then prioritize fixes that remove barriers to discovery.",
      icon: Settings,
      tag: "Speed & Indexing",
    },
    {
      title: "Hotel Booking Page Optimization",
      desc: "We make room details, policies, availability links and calls to action easier to understand, so visitors know what is included and how to proceed.",
      icon: CalendarCheck,
      tag: "Booking Journey",
    },
    {
      title: "Multilingual SEO for Hotels",
      desc: "Where your guests search in other languages, we support relevant audiences with professionally reviewed translations and appropriate language targeting, rather than unchecked machine output.",
      icon: Languages,
      tag: "Global Guests",
    },
    {
      title: "Hotel SEO Reporting",
      desc: "We track organic impressions, clicks, landing-page performance, relevant enquiries and booking-conversion data where it is available, and explain what the numbers mean for your goals.",
      icon: BarChart3,
      tag: "Performance Data",
    },
  ];

  // Table Data: SEO Strategies for Different Hotel Types
  const hotelTypesTable = [
    {
      type: "Boutique hotels",
      focus: "Distinctive stays, neighbourhood, character",
      priorities: "Strong storytelling, original imagery, local and experience content",
      icon: Crown,
    },
    {
      type: "Resorts",
      focus: "Destination, activities, family or leisure stays",
      priorities: "Facility and activity pages, seasonal content, clear package and enquiry paths",
      icon: Compass,
    },
    {
      type: "Business hotels",
      focus: "Proximity to airports, offices, conference venues",
      priorities: "Location detail, meeting and event information, fast mobile pages, clear policies",
      icon: Briefcase,
    },
    {
      type: "Budget accommodation",
      focus: "Price-conscious stays, location, basic amenities",
      priorities: "Clear room and amenity information, accurate local details, simple booking",
      icon: Wallet,
    },
    {
      type: "Luxury properties",
      focus: "Experience, service, exclusivity",
      priorities: "High-quality content and imagery, detailed room and dining pages, consistent brand voice",
      icon: Building2,
    },
    {
      type: "Multi-location groups",
      focus: "City-specific hotel searches",
      priorities: "Genuine, distinct pages per property, consistent structure, accurate profile for each location",
      icon: Network,
    },
  ];

  // 7 Process Steps
  const processSteps = [
    {
      title: "1. Website and technical audit",
      desc: "We review crawling, indexing, speed, mobile experience, content and tracking to understand your starting point.",
      icon: Settings,
    },
    {
      title: "2. Keyword and competitor research",
      desc: "We study how travellers search for your type of property and how competing hotels present themselves.",
      icon: Search,
    },
    {
      title: "3. Structure and on-page improvements",
      desc: "We refine site structure, titles, headings, descriptions and internal links.",
      icon: Globe,
    },
    {
      title: "4. Local SEO and profile review",
      desc: "We check business information and Google Business Profile for accuracy and completeness.",
      icon: MapPin,
    },
    {
      title: "5. Content development",
      desc: "We plan, write and optimize helpful content for rooms, amenities, dining, events and the local area.",
      icon: FileText,
    },
    {
      title: "6. Implementation and monitoring",
      desc: "Technical changes are applied, tested and monitored with your web team.",
      icon: CheckCircle2,
    },
    {
      title: "7. Reporting and refinement",
      desc: "We report on performance and adjust priorities as results and seasons change.",
      icon: BarChart3,
    },
  ];

  // Why Work With DigLip7 Bullet Points
  const whyPoints = [
    {
      lead: "A structured process",
      rest: "each stage has a clear purpose and output you can review.",
    },
    {
      lead: "Hospitality-specific research",
      rest: "keyword and competitor research reflects how travellers search for accommodation.",
    },
    {
      lead: "Useful content",
      rest: "pages are written to inform guests, not to repeat keywords.",
    },
    {
      lead: "Technical quality",
      rest: "we treat site health, speed and mobile usability as part of the plan.",
    },
    {
      lead: "Transparent reporting",
      rest: "we explain metrics in plain language and tie them to your goals.",
    },
    {
      lead: "Aligned recommendations",
      rest: "advice is shaped around your property, market and business objectives.",
    },
  ];

  // 8 FAQs
  const faqs = [
    {
      q: "What are hotel SEO services in India?",
      a: "Hotel SEO services help accommodation businesses improve their visibility in organic search through keyword research, website optimization, local SEO, useful content and technical improvements.",
    },
    {
      q: "How can SEO help a hotel website?",
      a: "SEO can help relevant travellers discover hotel pages through search engines. Results depend on competition, website quality, location, demand and the work implemented.",
    },
    {
      q: "How long does hotel SEO take to show results?",
      a: "Timelines vary according to the website’s current condition, competition and scope of work. SEO should be assessed over time using search visibility, traffic quality and meaningful conversion data.",
    },
    {
      q: "Is local SEO important for hotels in India?",
      a: "Yes. Local SEO can help travellers discover hotels when searching for accommodation in a particular city, neighbourhood or area near a landmark.",
    },
    {
      q: "Can SEO increase direct hotel bookings?",
      a: "SEO can support direct bookings by bringing relevant visitors to a hotel’s website. Actual bookings also depend on pricing, availability, reputation, user experience and the booking process.",
    },
    {
      q: "Does hotel SEO include Google Business Profile optimization?",
      a: "It can include reviewing the hotel’s Google Business Profile, improving the accuracy of business information, selecting relevant categories and maintaining useful, policy-compliant updates.",
    },
    {
      q: "Can DigLip7 optimize hotel websites across multiple Indian cities?",
      a: "A multi-location strategy can be developed for hotel groups with genuine properties in different cities. Each location should have accurate, useful information rather than repetitive doorway pages.",
    },
    {
      q: "How do you measure hotel SEO performance?",
      a: "Common measures include organic clicks and impressions, relevant landing-page traffic, search-query visibility, qualified enquiries and tracked bookings where reliable analytics data is available.",
    },
  ];

  // JSON-LD Structured Data
  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://diglip7.com/india/hotel-seo-services/#webpage",
        url: "https://diglip7.com/india/hotel-seo-services/",
        name: "Hotel SEO Services India | DigLip7",
        description:
          "Improve your hotel's organic search visibility with Hotel SEO Services in India from DigLip7. Explore local SEO, hotel website optimization and content strategy.",
        inLanguage: "en-IN",
        isPartOf: {
          "@id": "https://diglip7.com/#website",
        },
        about: {
          "@id": "https://diglip7.com/india/hotel-seo-services/#service",
        },
        breadcrumb: {
          "@id": "https://diglip7.com/india/hotel-seo-services/#breadcrumb",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://diglip7.com/india/hotel-seo-services/#breadcrumb",
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
            name: "SEO Services India",
            item: "https://diglip7.com/india/seo-services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Hotel SEO Services India",
            item: "https://diglip7.com/india/hotel-seo-services/",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://diglip7.com/india/hotel-seo-services/#service",
        name: "Hotel SEO Services India",
        serviceType: "Hotel SEO",
        url: "https://diglip7.com/india/hotel-seo-services/",
        description:
          "SEO services for hotels, resorts and hospitality businesses in India, covering hotel keyword research, website SEO, local SEO, content optimization, technical SEO, booking page optimization, multilingual SEO and reporting.",
        provider: {
          "@id": "https://diglip7.com/#organization",
        },
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        audience: {
          "@type": "BusinessAudience",
          audienceType:
            "Independent hotels, boutique hotels, resorts, business hotels, hotel groups and hospitality businesses",
        },
      },
    ],
  };

  return (
    <>
      <SEO
        title="Hotel SEO Services India | DigLip7"
        description="Improve your hotel's organic search visibility with Hotel SEO Services in India from DigLip7. Explore local SEO, hotel website optimization and content strategy."
        canonical={canonicalUrl}
        ogType="website"
        ogLocale="en_IN"
        ogImage={`https://diglip7.com${heroImageSrc}`}
        ogImageAlt={heroImageAlt}
        twitterCard="summary_large_image"
        twitterTitle="Hotel SEO Services India | DigLip7"
        twitterDescription="Improve your hotel's organic search visibility with Hotel SEO Services in India from DigLip7. Explore local SEO, hotel website optimization and content strategy."
        twitterImage={`https://diglip7.com${heroImageSrc}`}
        twitterImageAlt={heroImageAlt}
        robots="index, follow, max-image-preview:large"
        schema={jsonLdGraph}
      />

      <ScrollProgress />
      <BackToTop />

      <main className="bg-white text-gray-800">
        {/* ================= HERO SECTION (Matching APIDevelopment design) ================= */}
        <div className="pt-24 sm:pt-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-100 via-pink-100 to-white">
          <nav
            aria-label="Breadcrumb"
            className="max-w-7xl mx-auto flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-gray-600 pb-2"
          >
            {breadcrumbTrail.map((crumb, i) => (
              <span key={crumb.label} className="flex items-center gap-1.5">
                {i === 0 ? (
                  <Home className="w-3.5 h-3.5 text-teal-700" />
                ) : (
                  <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                )}
                {i === breadcrumbTrail.length - 1 ? (
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

        <div className="pt-6 sm:pt-8 pb-16 lg:pb-20 min-h-[90vh] bg-gradient-to-r from-purple-100 via-pink-100 to-white flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 xl:px-12 relative overflow-hidden">
          {/* Animated Floating Objects */}
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
                <span className="text-gray-900">Hotel SEO Services in India </span>
                <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                  for Better Search Visibility
                </span>
              </h1>
              <p className="text-gray-700 text-sm sm:text-base lg:text-lg mt-4 mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                <span className="font-semibold text-blue-700">DigLip7</span> helps independent hotels, resorts and hospitality groups across India become easier to find in organic search, so the right travellers can discover your property, understand what you offer and reach your own booking journey.
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-3 text-gray-800 text-xs sm:text-sm mb-6 max-w-lg mx-auto lg:mx-0">
                <div className="flex items-center gap-2">🚀 Boost organic traffic</div>
                <div className="flex items-center gap-2">📈 Improve search ranking</div>
                <div className="flex items-center gap-2">🎯 Target right audience</div>
                <div className="flex items-center gap-2">📊 Transparent reporting</div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Link to="/contact" className="inline-block">
                  <motion.button
                    className="group px-7 sm:px-9 py-3.5 sm:py-4 bg-gradient-to-r from-teal-700 to-teal-900 text-white text-base sm:text-lg font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Discuss Your Hotel SEO Strategy
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
              </div>
            </div>

            {/* Right Section - Image */}
            <motion.div
              className="w-full lg:w-[42%] flex justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={heroImageSrc}
                alt={heroImageAlt}
                className="rounded-2xl shadow-xl w-full max-w-md lg:max-w-none h-auto object-cover"
              />
            </motion.div>
          </div>

          {/* Floating particles */}
          <div className="absolute inset-0 pointer-events-none">
            {heroParticles.map((p, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/30 rounded-full"
                style={{ left: `${p.left}%`, top: `${p.top}%` }}
                animate={{ y: [0, -100, 0], opacity: [0, 1, 0] }}
                transition={{ duration: p.duration, repeat: Infinity, delay: p.delay }}
              />
            ))}
          </div>
        </div>

        {/* ================= SECTION 2: HELP TRAVELLERS DISCOVER YOUR HOTEL ONLINE ================= */}
        <section className="w-full py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <FloatingElement>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-700 mb-6">
                  Help Travellers Discover Your Hotel Online
                </h2>
              </FloatingElement>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
              <motion.div
                className="bg-gradient-to-br from-slate-50 to-teal-50/20 p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center mb-6">
                    <Compass className="w-6 h-6" />
                  </div>
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    Most travellers research before they reserve. They look at where a hotel is, what the rooms are like, which facilities are available, how reviews read and whether the booking process feels clear. Much of that research begins with a search engine, on a phone, often while comparing several properties at once.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-teal-50/30 to-slate-50 p-8 sm:p-10 rounded-3xl border border-teal-100 shadow-sm flex flex-col justify-between"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mb-6">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    Our Hotel SEO Services India focus on the parts of that journey you can influence through your own website: organic search visibility, helpful room and facility information, location relevance, mobile usability and a straightforward route to book or enquire. The aim is relevant visitors who can find what they need, not rankings for their own sake.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: WHY HOTEL SEO MATTERS IN INDIA ================= */}
        <section className="w-full py-16 sm:py-20 bg-gradient-to-br from-slate-50 via-teal-50/15 to-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <FloatingElement>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-700 mb-6">
                  Why Hotel SEO Matters in India
                </h2>
              </FloatingElement>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                India is a varied market. Guests may search by city, by neighbourhood, by a landmark or station nearby, by travel purpose, or by property type, for example a business hotel near an airport or a boutique stay in a heritage town. Each search signals a different need, and a hotel website that answers it clearly has a better chance of being considered.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-8">
              <motion.div
                className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-md flex flex-col justify-center"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-xs font-bold text-teal-700 uppercase tracking-wider mb-3 block">
                  Foundational Pillars
                </span>
                <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
                  Three things tend to separate hotel websites that are easy to find from those that are not: useful content that describes rooms, amenities, dining, events and the surrounding area; accurate business information that matches across your website and local profiles; and a booking journey that is clear on a small screen. SEO works on all three.
                </p>
              </motion.div>

              <motion.div
                className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-md flex flex-col justify-center"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-3 block">
                  Realistic, Measured Approach
                </span>
                <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
                  Search results change, competition differs by destination and demand is seasonal. For that reason we do not promise specific rankings, traffic or revenue. We focus on improving the foundations and measuring what actually happens.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: OUR HOTEL SEO SERVICES (8 Interactive Cards) ================= */}
        <section className="w-full py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-14">
              <FloatingElement>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-700 mb-4">
                  Our Hotel SEO Services
                </h2>
              </FloatingElement>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Every hotel is different, so the scope is tailored. Our{" "}
                <Link
                  to="/india/seo-services"
                  className="text-teal-700 font-semibold underline hover:text-teal-900 transition-colors"
                >
                  SEO services
                </Link>{" "}
                for hospitality can include the following.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {servicesList.map((service, index) => (
                <motion.div
                  key={index}
                  className="group bg-gradient-to-b from-white to-gray-50/70 rounded-3xl p-6 sm:p-7 border border-gray-100 shadow-sm hover:shadow-xl hover:border-teal-300/60 transition-all duration-300 flex flex-col justify-between"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  whileHover={{ y: -4 }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 group-hover:bg-teal-700 group-hover:text-white transition-colors duration-300 flex items-center justify-center shadow-xs">
                        <service.icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-semibold text-gray-400 bg-gray-100 group-hover:bg-teal-50 group-hover:text-teal-800 transition-colors px-2.5 py-0.5 rounded-full">
                        {service.tag}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-800 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {service.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 5: SEO STRATEGIES FOR DIFFERENT HOTEL TYPES (Responsive Data Table) ================= */}
        <section className="w-full py-16 sm:py-24 bg-gradient-to-br from-slate-50 via-teal-50/20 to-slate-100/80 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <FloatingElement>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-700 mb-4">
                  SEO Strategies for Different Hotel Types
                </h2>
              </FloatingElement>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                A resort and a business hotel serve different guests who search in different ways, so priorities differ.
              </p>
            </div>

            {/* Desktop Table View */}
            <div className="hidden md:block overflow-hidden rounded-3xl bg-white border border-gray-200/90 shadow-xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-teal-800 via-teal-700 to-[#c89d5a] text-white">
                    <th className="py-4 px-6 text-sm font-bold uppercase tracking-wider w-1/4">
                      Hotel type
                    </th>
                    <th className="py-4 px-6 text-sm font-bold uppercase tracking-wider w-1/3">
                      Typical search focus
                    </th>
                    <th className="py-4 px-6 text-sm font-bold uppercase tracking-wider">
                      SEO priorities
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm sm:text-base">
                  {hotelTypesTable.map((row, idx) => (
                    <tr
                      key={idx}
                      className={
                        idx % 2 === 0
                          ? "bg-white hover:bg-teal-50/30 transition-colors"
                          : "bg-gray-50/50 hover:bg-teal-50/30 transition-colors"
                      }
                    >
                      <td className="py-5 px-6 font-bold text-gray-900 flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-teal-100/70 text-teal-800 flex items-center justify-center shrink-0">
                          <row.icon className="w-4 h-4" />
                        </div>
                        <span>{row.type}</span>
                      </td>
                      <td className="py-5 px-6 text-gray-700 leading-relaxed font-medium">
                        {row.focus}
                      </td>
                      <td className="py-5 px-6 text-gray-600 leading-relaxed">
                        {row.priorities}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card List View */}
            <div className="md:hidden space-y-4">
              {hotelTypesTable.map((row, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-gray-200 shadow-md space-y-3"
                >
                  <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
                      <row.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{row.type}</h3>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-teal-800 uppercase tracking-wider block mb-1">
                      Typical search focus:
                    </span>
                    <p className="text-gray-700 text-sm leading-relaxed">{row.focus}</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#c89d5a] uppercase tracking-wider block mb-1">
                      SEO priorities:
                    </span>
                    <p className="text-gray-600 text-sm leading-relaxed">{row.priorities}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 6: HOTEL SEO AND DIRECT BOOKINGS ================= */}
        <section className="w-full py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <FloatingElement>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-700 mb-6">
                  Hotel SEO and Direct Bookings
                </h2>
              </FloatingElement>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
              <motion.div
                className="bg-gradient-to-br from-slate-50 to-teal-50/20 p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center mb-6">
                    <CalendarCheck className="w-6 h-6" />
                  </div>
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    SEO can help potential guests find a hotel’s own website. Whether they then book depends on what they find there. Clear room descriptions, transparent policies, mobile-friendly booking paths and accurate availability information help visitors feel confident enough to continue.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-teal-50/30 to-slate-50 p-8 sm:p-10 rounded-3xl border border-teal-100 shadow-sm flex flex-col justify-between"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mb-6">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    Online travel agencies remain an important channel for many hotels, and SEO is not a replacement for them. It is one way to give guests a direct route to your property alongside the channels you already use. Bookings also depend on pricing, availability, reputation, reviews and the overall experience, which SEO cannot control.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 7: OUR HOTEL SEO PROCESS (Established Process Design) ================= */}
        <ProcessSection
          title="Our Hotel SEO Process"
          subtitle="How we work with hotels follows a clear, sensible sequence:"
          steps={processSteps}
        />

        {/* ================= SECTION 8: WHY WORK WITH DIGLIP7? ================= */}
        <section className="w-full py-16 sm:py-24 bg-gradient-to-br from-slate-50 via-teal-50/15 to-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-14">
              <FloatingElement>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-700 mb-6">
                  Why Work With DigLip7?
                </h2>
              </FloatingElement>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                DigLip7 Tech Pvt Ltd is a digital marketing company offering SEO, PPC and social media marketing. For hotels, we aim to be practical and transparent about what SEO can and cannot do.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
              {whyPoints.map((point, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-start"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                >
                  <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center mb-4 shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-teal-700" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {point.lead}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {point.rest}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="max-w-3xl mx-auto text-center bg-white rounded-2xl p-6 sm:p-8 border border-amber-200/80 shadow-xs">
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                We do not guarantee rankings, bookings or revenue, and we will tell you plainly where SEO is unlikely to be the best use of your budget.
              </p>
            </div>
          </div>
        </section>

        {/* ================= SECTION 9: FREQUENTLY ASKED QUESTIONS (Established FAQ Design) ================= */}
        <FaqSection faqs={faqs} />

        {/* ================= SECTION 10: FINAL CTA ================= */}
        <FinalCtaSection
          title="Discuss Your Hotel SEO Strategy"
          desc="Tell us about your property or group, your guests and your goals. We will review your website and suggest a practical, honest plan."
          linkText="Contact DigLip7"
          href="/contact"
        />
      </main>
    </>
  );
}
