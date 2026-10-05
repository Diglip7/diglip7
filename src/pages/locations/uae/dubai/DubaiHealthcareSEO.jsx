import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../../../../components/SEO";
import {
  Stethoscope,
  Hospital,
  UserCheck,
  Activity,
  HeartPulse,
  Search,
  FileText,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Home,
  Target,
  BarChart3,
  Building2,
  Settings,
  Sparkles,
  Layers,
  Globe,
  MapPin,
  Network,
  FolderTree,
} from "lucide-react";

// Image Paths (Strictly from Section 9: Image Recommendations + ALT Text)
const heroImgSrc = "/images/healthcare-seo-dubai-overview.webp";
const keywordImgSrc = "/images/healthcare-seo-keyword-research-dubai.webp";
const contentImgSrc = "/images/healthcare-content-optimization-dubai.webp";
const localMapsImgSrc = "/images/clinic-local-seo-maps-dubai.webp";
const architectureImgSrc = "/images/medical-website-seo-structure-dubai.webp";
const reportingImgSrc = "/images/healthcare-seo-reporting-dubai.webp";
const technicalImgSrc = "/images/healthcare-technical-seo-dubai.webp";

// Simple Image Slot with clean placeholder and responsive vertical expansion
const SEOImageSlot = ({
  src,
  alt,
  width = 800,
  height = 600,
  aspect = "aspect-[4/3]",
  className = "",
  priority = false,
  filename = "",
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`relative w-full rounded-2xl overflow-hidden bg-gradient-to-br from-teal-50/40 via-white to-gray-50 border border-teal-100/80 shadow-md flex items-center justify-center ${aspect} ${className}`}
    >
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          onError={(e) => {
            if (filename && e.currentTarget.src.includes("/images/")) {
              e.currentTarget.src = `/images/${filename}`;
            } else {
              setHasError(true);
            }
          }}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="p-8 text-center text-sm font-medium text-teal-900/60 select-none flex flex-col items-center justify-center gap-3 w-full h-full bg-gradient-to-b from-white/90 to-teal-50/50">
          <div className="w-12 h-12 rounded-full bg-teal-100/70 text-teal-700 flex items-center justify-center shadow-xs">
            <Stethoscope className="w-6 h-6" />
          </div>
          <span className="max-w-xs leading-relaxed">{alt}</span>
        </div>
      )}
    </div>
  );
};

// 3D Interactive Card Component (matches DubaiEcommerceSEO)
const Card3D = ({ children, className = "" }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateXValue = (y - centerY) / 14;
    const rotateYValue = (centerX - x) / 14;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
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

// Floating Animation Component (matches DubaiEcommerceSEO)
const FloatingElement = ({ children, delay = 0 }) => (
  <motion.div
    animate={{
      y: [0, -10, 0],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      delay: delay,
    }}
  >
    {children}
  </motion.div>
);

const breadcrumbTrail = [
  { label: "Home", href: "/" },
  { label: "UAE", href: "/uae/seo-services" },
  { label: "Dubai", href: "/uae/dubai/seo-services" },
  { label: "Healthcare SEO Dubai", href: "/uae/dubai/healthcare-seo" },
];

const healthcareBusinesses = [
  {
    icon: Stethoscope,
    title: "Medical Clinics",
    description:
      "Focus on clear service pages, local search visibility and an appointment-focused website experience that makes it easy to act after finding the page.",
  },
  {
    icon: Hospital,
    title: "Hospitals",
    description:
      "Focus on larger website architecture — departments, specialties, doctor directories — and the technical SEO needed to keep a large site crawlable and well-indexed.",
  },
  {
    icon: UserCheck,
    title: "Doctors & Specialists",
    description:
      "Focus on individual doctor profile pages, areas of expertise, local search relevance and the reputation and trust signals that matter to patients choosing a specific practitioner.",
  },
  {
    icon: Activity,
    title: "Dental & Specialty Practices",
    description:
      "Focus on treatment- and service-specific search targeting relevant to a defined specialty.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare & Wellness Businesses",
    description:
      "Included only where the business genuinely fits within DigLip7's service scope. (We don't invent client names or case studies here or elsewhere on this page.)",
  },
];

const healthcareServices = [
  {
    icon: Search,
    title: "Healthcare Keyword Research",
    description:
      "Covers healthcare service keywords, treatment keywords, doctor specialty keywords, location keywords, local-intent searches, commercial-intent keywords and informational healthcare searches, mapped to the correct page type and checked to avoid keyword cannibalization between similar pages — part of our broader Healthcare SEO Services Dubai work.",
  },
  {
    icon: Globe,
    title: "Medical Website SEO",
    description:
      "Covers title tags, meta descriptions, heading structure, service page optimization, internal linking, image optimization, URL structure, canonicals, indexability and crawlability — the on-page foundation for Medical Website SEO Dubai.",
  },
  {
    icon: Building2,
    title: "Clinic SEO",
    description:
      "Optimization for clinic service pages, doctor pages, treatment pages, location pages, contact pages, the appointment journey and Google Business Profile — the core of what we mean by Clinic SEO Dubai.",
  },
  {
    icon: Hospital,
    title: "Hospital SEO",
    description:
      "Covers department architecture, specialty pages, doctor profiles, treatment and service pages, location signals, internal linking and the technical SEO and crawl management larger hospital sites need — Hospital SEO Dubai in practice.",
  },
  {
    icon: UserCheck,
    title: "Doctor SEO",
    description:
      "Covers doctor profile optimization, specialty pages, areas of expertise, location relevance, author/reviewer information, internal linking and trust signals. We never invent doctor qualifications or credentials — all profile information must come from verified sources.",
  },
  {
    icon: MapPin,
    title: "Local SEO for Clinics",
    description:
      "Covers Google Business Profile management, Google Maps visibility, NAP consistency, local landing pages, reviews, local citations, location signals and local structured data where appropriate — the foundation of Local SEO for Clinics Dubai.",
  },
  {
    icon: FileText,
    title: "Healthcare Content SEO",
    description:
      "Covers patient-focused content, service pages, condition pages, treatment explanations, doctor-reviewed content, clear author information, sources and references where appropriate, and content freshness. We avoid making medical claims that can't be substantiated.",
  },
  {
    icon: Settings,
    title: "Technical SEO for Healthcare Websites",
    description:
      "Covers crawlability, indexability, canonicals, XML sitemap, robots.txt, page speed, Core Web Vitals, mobile usability, broken links, redirects, duplicate content, JavaScript rendering and structured data validation.",
  },
  {
    icon: Layers,
    title: "Healthcare Structured Data",
    description:
      "Where accurately applicable, we implement Organization, WebSite, BreadcrumbList, WebPage, Service, and relevant healthcare-specific schema, along with FAQPage schema only when the FAQs are genuinely visible on the page. We don't promise rich-result eligibility or create schema properties that don't match the visible content.",
  },
];

const searchIntents = [
  {
    type: "Commercial",
    query: '"healthcare SEO services Dubai," "medical SEO services Dubai"',
    intent: "someone evaluating providers or agencies.",
  },
  {
    type: "Local",
    query: '"clinic SEO Dubai," "healthcare clinic near me"',
    intent: "someone looking for a nearby option.",
  },
  {
    type: "Informational",
    query: '"what is [healthcare topic]?", "[treatment] explained"',
    intent: "someone researching before deciding.",
  },
  {
    type: "Provider/Specialist",
    query: "doctor name, specialty plus Dubai",
    intent: "someone looking for a specific practitioner.",
  },
];

const processSteps = [
  {
    id: "01",
    title: "Website & SEO Audit",
    description: "review technical health, content and existing visibility.",
    icon: Search,
  },
  {
    id: "02",
    title: "Healthcare Keyword Research",
    description: "map real patient search behaviour to your services.",
    icon: Target,
  },
  {
    id: "03",
    title: "Search Intent Mapping",
    description: "align commercial, local, informational and provider intent to the right pages.",
    icon: Network,
  },
  {
    id: "04",
    title: "Technical SEO Improvements",
    description: "address crawlability, indexation and site performance.",
    icon: Settings,
  },
  {
    id: "05",
    title: "Healthcare Content Optimization",
    description: "improve service, condition and treatment content with proper care for accuracy.",
    icon: FileText,
  },
  {
    id: "06",
    title: "Local SEO & Google Business Profile Optimization",
    description: "strengthen local and Maps visibility.",
    icon: MapPin,
  },
  {
    id: "07",
    title: "Measurement, Reporting & Continuous Improvement",
    description: "track performance and refine the strategy over time.",
    icon: BarChart3,
  },
];

const seoVsPaidSearch = [
  {
    seo: "Builds organic visibility",
    paid: "Provides paid placements",
  },
  {
    seo: "Requires ongoing optimization",
    paid: "Requires advertising budget",
  },
  {
    seo: "Can compound over time",
    paid: "Traffic is tied to campaigns/budget",
  },
  {
    seo: "Focuses on organic search",
    paid: "Focuses on paid search visibility",
  },
];

const commonMistakes = [
  "Keyword stuffing",
  "Thin service pages",
  "Duplicate location pages",
  "Unverified medical claims",
  "Poor doctor profile pages",
  "Missing local signals",
  "Weak internal linking",
  "Ignoring technical SEO",
  "Duplicate metadata",
  "Poor mobile UX",
  "Slow pages",
  "Missing structured data",
  "Publishing AI-generated medical content without proper review",
  "Creating pages only to target keyword variations",
];

const faqs = [
  {
    q: "What is Healthcare SEO Dubai?",
    a: "Healthcare SEO Dubai is the practice of optimizing a healthcare website's technical structure, content and local search signals so relevant patients searching in Dubai can find and trust it.",
  },
  {
    q: "Why do healthcare businesses in Dubai need SEO?",
    a: "Most patients research providers online before contacting them, and Dubai's healthcare market is competitive — clear, well-optimized, trustworthy pages help the right patients find and choose your practice.",
  },
  {
    q: "What does a healthcare SEO agency in Dubai do?",
    a: "A healthcare SEO agency audits a healthcare website, researches relevant keywords, optimizes service and provider content, strengthens local and technical SEO, and measures performance over time.",
  },
  {
    q: "How does medical SEO differ from regular SEO?",
    a: "Medical SEO applies the same core SEO disciplines with a higher bar for accuracy, sourcing and trust, since healthcare content can influence important patient decisions.",
  },
  {
    q: "Can SEO help clinics appear in local searches?",
    a: "Yes — through Google Business Profile optimization, local landing pages, consistent citations and location-relevant content, though no specific ranking or Maps position can be guaranteed.",
  },
  {
    q: "Does healthcare SEO include Google Maps optimization?",
    a: "Yes — Google Maps visibility is typically a core part of healthcare local SEO, alongside broader website and content optimization.",
  },
  {
    q: "Can you provide SEO for doctors and specialists?",
    a: "Yes — this includes doctor profile optimization, specialty pages, credentials (only as verified), local relevance and trust signals.",
  },
  {
    q: "How does SEO help hospital websites?",
    a: "It supports better technical structure, clearer department and specialty pages, stronger doctor profiles and improved crawlability across a larger site.",
  },
  {
    q: "How long does healthcare SEO take?",
    a: "Timelines vary based on competition, technical condition, content quality and existing authority — some changes show effects sooner, while competitive terms take longer to move.",
  },
  {
    q: "How do you measure healthcare SEO performance?",
    a: "Through organic impressions and clicks, keyword visibility, Google Business Profile actions, website engagement, contact and appointment enquiries, and technical SEO health.",
  },
  {
    q: "Do you optimize medical service pages?",
    a: "Yes — service page optimization, including structure, content clarity and accuracy, is a core part of Medical Website SEO Dubai.",
  },
  {
    q: "Does healthcare SEO include technical SEO?",
    a: "Yes — crawlability, indexability, page speed, Core Web Vitals, mobile usability and structured data are all part of a complete healthcare SEO strategy.",
  },
  {
    q: "Can healthcare SEO and Google Ads be used together?",
    a: "Yes — many healthcare businesses run both, using paid search for immediate visibility while SEO builds sustainable organic visibility over time.",
  },
  {
    q: "What should a healthcare business consider before choosing an SEO agency?",
    a: "Look for transparent reporting, realistic expectations (no ranking guarantees), a clear methodology, and evidence the agency understands healthcare-specific requirements like content accuracy and local search.",
  },
];

const internalLinks = [
  { name: "Dubai SEO Services", url: "/uae/dubai/seo-services/" },
  { name: "SEO Services UAE", url: "/uae/seo-services/" },
  { name: "SEO Services", url: "/digital-market/seoservices/" },
  { name: "Local SEO Dubai", url: "/uae/dubai/local-seo/" },
  { name: "E-commerce SEO Dubai", url: "/uae/dubai/ecommerce-seo/" },
  { name: "PPC Advertising", url: "/digital-market/PPC-Advertising" },
  { name: "content marketing", url: "/digital-market/content-marketing" },
  { name: "social media marketing", url: "/digital-market/social-media-marketing" },
];

function DubaiHealthcareSEO() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const pageUrl = "https://diglip7.com/uae/dubai/healthcare-seo/";

  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Healthcare SEO Dubai | Medical & Clinic SEO Services | DigLip7",
        description:
          "Grow your healthcare website's organic visibility with Healthcare SEO Dubai services from DigLip7. SEO for clinics, hospitals, doctors and medical practices.",
        isPartOf: { "@id": "https://diglip7.com/#website" },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        mainEntity: { "@id": `${pageUrl}#service` },
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Healthcare SEO Services in Dubai",
        serviceType: "Healthcare Search Engine Optimization",
        url: pageUrl,
        provider: { "@id": "https://diglip7.com/#organization" },
        areaServed: {
          "@type": "City",
          name: "Dubai",
          containedInPlace: { "@type": "Country", name: "United Arab Emirates" },
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://diglip7.com/" },
          { "@type": "ListItem", position: 2, name: "UAE", item: "https://diglip7.com/uae/" },
          { "@type": "ListItem", position: 3, name: "Dubai", item: "https://diglip7.com/uae/dubai/" },
          { "@type": "ListItem", position: 4, name: "Healthcare SEO Dubai" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    ],
  };

  return (
    <div className="overflow-x-hidden bg-white w-full">
      <SEO
        title="Healthcare SEO Dubai | Medical & Clinic SEO Services | DigLip7"
        description="Grow your healthcare website's organic visibility with Healthcare SEO Dubai services from DigLip7. SEO for clinics, hospitals, doctors and medical practices."
        canonical={pageUrl}
        ogType="website"
        ogImage="https://diglip7.com/images/healthcare-seo-dubai.jpg"
        keywords="Healthcare SEO Dubai, Healthcare SEO Services Dubai, Healthcare SEO Agency in Dubai, Healthcare SEO Company Dubai, Medical SEO Dubai, Medical SEO Services Dubai, Clinic SEO Dubai, Hospital SEO Dubai, Doctor SEO Dubai, Healthcare Digital Marketing Dubai, Medical Website SEO Dubai, Local SEO for Clinics Dubai, SEO for healthcare businesses in Dubai, SEO for medical clinics in Dubai, SEO for hospitals in Dubai, SEO for doctors in Dubai, medical clinic SEO services Dubai, healthcare website optimization Dubai, Google Maps SEO for clinics, Google Business Profile SEO for healthcare, healthcare content SEO Dubai, healthcare technical SEO Dubai, healthcare keyword research Dubai, SEO for private clinics in Dubai, SEO for specialist doctors in Dubai"
        schema={jsonLdGraph}
      />

      {/* Visible Breadcrumb */}
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

      {/* Hero Section */}
      <div className="pt-6 sm:pt-8 pb-16 lg:pb-20 bg-gradient-to-r from-purple-100 via-pink-100 to-white min-h-[85vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 xl:px-12 relative overflow-hidden">
        {/* Animated Floating Objects */}
        <motion.div
          className="absolute top-10 left-10 w-16 h-16 bg-white/30 rounded-full blur-xl pointer-events-none"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-20 h-20 bg-white/30 rounded-full blur-xl pointer-events-none"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        <div className="flex flex-col lg:flex-row items-center w-full max-w-7xl mx-auto gap-8 lg:gap-12 relative z-10">
          {/* Left Text */}
          <div className="w-full lg:w-[58%] text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-gray-900">Healthcare SEO Dubai </span>
              <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                for Clinics, Hospitals & Medical Practices
              </span>
            </h1>

            {/* Direct Answer */}
            <p className="text-gray-700 text-sm sm:text-base lg:text-lg mt-5 mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <span className="font-semibold text-blue-700">Healthcare SEO Dubai</span> helps clinics, hospitals, doctors and other healthcare businesses improve their visibility in relevant Google searches. A healthcare SEO strategy combines technical SEO, medical content optimization, local SEO, Google Business Profile optimization, keyword research, website structure and authority building to help qualified users discover healthcare services online.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
              <Link to="/contact" className="inline-block">
                <motion.button
                  className="group px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-teal-700 to-teal-900 text-white text-base font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Request a Healthcare SEO Consultation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <Link to="/contact" className="inline-block">
                <motion.button
                  className="px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-teal-700 border-2 border-teal-700 text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Discuss Your Website
                </motion.button>
              </Link>
            </div>
          </div>

          {/* Right Section - Hero Image (Section 9: Hero) */}
          <motion.div
            className="w-full lg:w-[42%] flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card3D className="w-full max-w-md lg:max-w-none">
              <SEOImageSlot
                src={heroImgSrc}
                filename="healthcare-seo-dubai-overview.webp"
                alt="Healthcare SEO services for clinics and medical practices in Dubai"
                aspect="aspect-[4/3] w-full"
                className="shadow-2xl"
              />
            </Card3D>
          </motion.div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Section 1: Introduction (Full-Width bg-white) */}
      <section className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <FloatingElement>
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-600 mb-6 text-center">
              Introduction
            </h2>
          </FloatingElement>
          <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base">
            Dubai's healthcare market is dense and highly competitive, and most patients now start their search for a clinic, hospital or specialist online — comparing providers, checking services and reading about symptoms or treatments before ever picking up the phone. That means a healthcare website's search visibility often has a direct bearing on how many genuinely relevant enquiries it receives.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base">
            Healthcare SEO requires more than generic keyword optimization. Because medical content can influence important decisions, it needs a higher standard of accuracy, clarity and trustworthiness than most other industries — search engines weigh this too, particularly for content that touches health and safety. Local search visibility matters just as much: many healthcare searches are tied to a specific area of Dubai, and a technically sound, fast, mobile-friendly website underpins all of it.
          </p>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            <span className="font-semibold text-teal-700">DigLip7</span>'s approach to Healthcare SEO Dubai (also referred to as Medical SEO Dubai, Clinic SEO Dubai or Doctor SEO Dubai depending on the business) combines technical SEO, medical content optimization, local SEO and structured data — built around your actual services, locations and practitioners rather than a generic template.
          </p>
        </div>
      </section>

      {/* Section 2: What Is Healthcare SEO? (Full-Width bg-gray-50 with Content Optimization Image from Section 9) */}
      <section className="w-full bg-gray-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 border-y border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-stretch gap-10 lg:gap-14">
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <Card3D className="w-full h-full flex flex-col justify-center">
              <SEOImageSlot
                src={contentImgSrc}
                filename="healthcare-content-optimization-dubai.webp"
                alt="Medical content optimization for a healthcare website"
                aspect="h-full min-h-[480px] lg:min-h-[560px] w-full"
                className="h-full shadow-2xl"
              />
            </Card3D>
          </div>

          <div className="flex-1 flex flex-col justify-center text-center md:text-left">
            <FloatingElement>
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-600 mb-6">
                What Is Healthcare SEO?
              </h2>
            </FloatingElement>
            <div className="bg-teal-50/70 border-l-4 border-teal-600 p-5 rounded-2xl mb-4 text-left shadow-sm">
              <p className="text-teal-950 text-base sm:text-lg font-medium leading-relaxed">
                <strong className="text-teal-800">Direct answer:</strong> Healthcare SEO is the practice of optimizing a healthcare website's technical structure, content and local search signals so that patients searching for relevant services, conditions or providers can find it — while meeting the higher accuracy and trust bar that medical content requires.
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              It draws on the same core disciplines as general SEO — <span className="text-teal-700 font-semibold">technical SEO, on-page SEO, keyword research, local SEO, internal linking and structured data</span> — but applies them with healthcare-specific care: content needs credible sourcing, clear authorship, and a level of precision that a generic blog post doesn't require. Website UX also matters more here, since a confusing service page or a broken appointment journey has a direct cost in missed enquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Why Healthcare SEO Matters for Healthcare Businesses in Dubai (Full-Width bg-white with Keyword Research Image from Section 9) */}
      <section className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-10 lg:gap-14">
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <Card3D className="w-full h-full flex flex-col justify-center">
              <SEOImageSlot
                src={keywordImgSrc}
                filename="healthcare-seo-keyword-research-dubai.webp"
                alt="Healthcare SEO keyword research and strategy in Dubai"
                aspect="h-full min-h-[480px] lg:min-h-[560px] w-full"
                className="h-full shadow-2xl"
              />
            </Card3D>
          </div>

          <div className="flex-1 flex flex-col justify-center text-center md:text-left">
            <FloatingElement>
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-600 mb-6">
                Why Healthcare SEO Matters for Healthcare Businesses in Dubai
              </h2>
            </FloatingElement>
            <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base">
              Patients search for healthcare providers in a variety of ways — by service (<span className="text-teal-700 font-medium">"dermatologist Dubai"</span>), by symptom or condition, by location (<span className="text-teal-700 font-medium">"clinic near me"</span>), and increasingly through <span className="text-teal-800 font-semibold">Google Maps</span> when they want the nearest reasonable option. Mobile search dominates this behaviour, often happening close to the moment someone decides to seek care.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Competition between healthcare providers in Dubai is significant across most specialties, which makes clear, well-structured service pages and trustworthy content genuinely differentiating. A clinic with vague or thin service pages tends to lose visibility — and patient trust — to a competitor with clearer, more complete information. This applies whether the relevant service is described as <span className="text-teal-700 font-semibold">Clinic SEO Dubai</span>, <span className="text-teal-700 font-semibold">Hospital SEO Dubai</span>, <span className="text-teal-700 font-semibold">Doctor SEO Dubai</span> or <span className="text-teal-700 font-semibold">Local SEO for Clinics Dubai</span> — the underlying need is the same: being found by the right patients at the right moment, with content that holds up to scrutiny. We won't cite specific market statistics here unless they're independently verified.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Healthcare Businesses We Support (Full-Width bg-gray-50) */}
      <section className="w-full bg-gray-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <FloatingElement>
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-600 mb-4">
                Healthcare Businesses We Support
              </h2>
            </FloatingElement>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {healthcareBusinesses.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card3D intensity={32} className="h-full">
                  <div className="bg-white rounded-2xl p-6 sm:p-8 h-full border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-4 transition-all duration-300 flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-4 text-teal-700">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Healthcare SEO Services in Dubai (Full-Width bg-white) */}
      <section className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <div className="max-w-4xl mx-auto mb-12">
            <FloatingElement>
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-600 mb-4">
                Healthcare SEO Services in Dubai
              </h2>
            </FloatingElement>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-left">
            {healthcareServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                viewport={{ once: true }}
              >
                <Card3D intensity={28} className="h-full">
                  <div className="bg-gray-50 rounded-2xl shadow-md p-6 sm:p-8 hover:shadow-2xl hover:-translate-y-4 transition-all duration-300 cursor-pointer border border-gray-100 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex justify-center mb-4">
                        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-teal-50 text-teal-700">
                          <service.icon className="w-8 h-8" />
                        </div>
                      </div>
                      <h3 className="font-semibold text-gray-900 text-lg mb-2 text-center">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Building Trust Into Healthcare SEO (Full-Width bg-gray-50) */}
      <section className="w-full bg-gray-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 border-y border-gray-100">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <FloatingElement>
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-600 mb-6 text-center">
              Building Trust Into Healthcare SEO
            </h2>
          </FloatingElement>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Because healthcare content can influence real decisions, trust has to be built into the page itself: accurate healthcare information, clear authorship, qualified reviewers where applicable, appropriate medical references, transparent business information, visible contact details, verified provider credentials, an editorial review process, regularly updated content, and clear disclaimers where relevant.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              We do not claim medical expertise, licenses, certifications, awards or qualifications on your behalf unless they're verified, and we don't fabricate patient numbers, reviews, awards, healthcare clients, case studies, rankings, certifications or results.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7: Local SEO for Healthcare Businesses in Dubai (Full-Width bg-white with Local SEO Maps Image from Section 9) */}
      <section className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-stretch gap-10 lg:gap-14">
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <Card3D className="w-full h-full flex flex-col justify-center">
              <SEOImageSlot
                src={localMapsImgSrc}
                filename="clinic-local-seo-maps-dubai.webp"
                alt="Local SEO strategy for healthcare clinics in Dubai"
                aspect="h-full min-h-[420px] lg:min-h-[500px] w-full"
                className="h-full shadow-2xl"
              />
            </Card3D>
          </div>

          <div className="flex-1 flex flex-col justify-center text-center md:text-left">
            <FloatingElement>
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-600 mb-6">
                Local SEO for Healthcare Businesses in Dubai
              </h2>
            </FloatingElement>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Local search plays an outsized role for most healthcare businesses. This means Google Business Profile optimization — accurate business category, complete business information, service details, photos and reviews — along with local landing pages where genuinely warranted, clear location relevance, Google Maps optimization and consistent citations across directories. Google Business Profile optimization supports local visibility, but it doesn't guarantee a specific Maps position — no legitimate agency can promise that.
            </p>
          </div>
        </div>
      </section>

      {/* Section 8: Healthcare Website Structure That Supports SEO (Full-Width bg-gray-50 with Website Architecture Image from Section 9) */}
      <section className="w-full bg-gray-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 border-y border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-10 lg:gap-14">
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <Card3D className="w-full h-full flex flex-col justify-center">
              <SEOImageSlot
                src={architectureImgSrc}
                filename="medical-website-seo-structure-dubai.webp"
                alt="Medical website SEO structure for a Dubai healthcare business"
                aspect="h-full min-h-[480px] lg:min-h-[580px] w-full"
                className="h-full shadow-2xl"
              />
            </Card3D>
          </div>

          <div className="flex-1 flex flex-col justify-center text-center md:text-left">
            <FloatingElement>
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-600 mb-4">
                Healthcare Website Structure That Supports SEO
              </h2>
            </FloatingElement>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-4">
              A well-structured healthcare website typically follows a logical hierarchy:
            </p>
            {/* Architecture visual diagram */}
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-200 font-mono text-xs sm:text-sm text-gray-800 leading-relaxed text-left shadow-sm mb-4">
              <div className="font-bold text-teal-800 flex items-center gap-1.5 mb-2">
                <FolderTree className="w-4 h-4" /> Healthcare Website
              </div>
              <div className="pl-4 border-l-2 border-teal-200 space-y-1">
                <div>│</div>
                <div>├── About</div>
                <div>
                  ├── <span className="font-semibold text-teal-900">Doctors</span>
                  <div className="pl-4 border-l border-teal-100">
                    <div>├── Doctor Profile</div>
                    <div>└── Specialty</div>
                  </div>
                </div>
                <div>│</div>
                <div>
                  ├── <span className="font-semibold text-teal-900">Services</span>
                  <div className="pl-4 border-l border-teal-100">
                    <div>├── Service Page</div>
                    <div>├── Treatment Page</div>
                    <div>└── Specialty Page</div>
                  </div>
                </div>
                <div>│</div>
                <div>├── Locations</div>
                <div>├── Blog / Resources</div>
                <div>├── Contact</div>
                <div>└── Appointment</div>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              This kind of structure supports clear internal linking, sensible breadcrumbs and well-defined parent-child relationships between pages, while avoiding duplicate pages that compete against each other for the same search intent.
            </p>
          </div>
        </div>
      </section>

      {/* Section 9: Targeting Different Healthcare Search Intents (Full-Width bg-white) */}
      <section className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <FloatingElement>
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-600 mb-4">
                Targeting Different Healthcare Search Intents
              </h2>
            </FloatingElement>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {searchIntents.map((item) => (
              <Card3D key={item.type} intensity={24} className="h-full">
                <div className="bg-gray-50 rounded-2xl p-6 sm:p-7 shadow-md border border-gray-100 flex flex-col justify-between h-full hover:shadow-2xl hover:-translate-y-3 transition-all duration-300">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-bold mb-3 border border-teal-200">
                      {item.type}
                    </span>
                    <h3 className="text-base font-bold text-gray-900 mb-2">{item.query}</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      — {item.intent}
                    </p>
                  </div>
                </div>
              </Card3D>
            ))}
          </div>

          <p className="text-center text-gray-700 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Each of these intents generally needs a different page type — service page, local landing page, informational content, or a doctor profile — rather than one page trying to serve all four.
          </p>
        </div>
      </section>

      {/* Section 10: Our Healthcare SEO Process (Full-Width bg-gray-50) */}
      <section className="w-full bg-gray-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 border-y border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <div className="max-w-4xl mx-auto mb-12">
            <FloatingElement>
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-600">
                Our Healthcare SEO Process
              </h2>
            </FloatingElement>
          </div>

          <div className="relative max-w-7xl mx-auto">
            {/* Connecting Line for Desktop */}
            <div className="hidden lg:block absolute top-10 left-0 w-full border-t-4 border-teal-100 z-0"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-6 relative z-10">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center p-3 rounded-2xl transition-all duration-300 hover:-translate-y-3 hover:shadow-xl hover:bg-white"
                >
                  <div className="relative flex items-center justify-center w-16 h-16 rounded-full border-4 border-teal-100 bg-white shadow-md mb-4">
                    <step.icon className="w-7 h-7 text-teal-700" />
                    <span className="absolute -top-2 -right-2 bg-gradient-to-r from-teal-700 to-teal-900 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full shadow">
                      {step.id}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{step.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">— {step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 11: How Healthcare SEO Performance Is Measured (Full-Width bg-white with Reporting Image from Section 9) */}
      <section className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-10 lg:gap-14">
          <div className="flex-1 flex flex-col justify-center text-center md:text-left">
            <FloatingElement>
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-600 mb-6">
                How Healthcare SEO Performance Is Measured
              </h2>
            </FloatingElement>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              We track organic impressions, organic clicks, search rankings, non-branded organic traffic, relevant keyword visibility, Google Business Profile actions, website engagement, appointment and contact enquiries, conversion rate, indexed pages and technical SEO health.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Rankings and traffic can fluctuate, and results depend on competition, website condition, content quality, existing authority and search demand — factors no agency fully controls.
            </p>
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <Card3D className="w-full h-full flex flex-col justify-center">
              <SEOImageSlot
                src={reportingImgSrc}
                filename="healthcare-seo-reporting-dubai.webp"
                alt="Healthcare SEO performance reporting for Dubai businesses"
                aspect="h-full min-h-[420px] lg:min-h-[500px] w-full"
                className="h-full shadow-2xl"
              />
            </Card3D>
          </div>
        </div>
      </section>

      {/* Section 12: Healthcare SEO vs Paid Search (Full-Width bg-gray-50) */}
      <section className="w-full bg-gray-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <FloatingElement>
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-600 mb-3">
                Healthcare SEO vs Paid Search
              </h2>
            </FloatingElement>
          </div>

          <div className="overflow-x-auto mb-6">
            <table className="w-full bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden text-left text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-teal-700 to-teal-900 text-white">
                  <th className="py-4 px-6 font-bold text-sm sm:text-base">SEO</th>
                  <th className="py-4 px-6 font-bold text-sm sm:text-base">Paid Search</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {seoVsPaidSearch.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                    <td className="py-4 px-6 font-medium text-gray-800">{row.seo}</td>
                    <td className="py-4 px-6 text-gray-700">{row.paid}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-gray-700 text-sm sm:text-base">
            SEO isn't always the better choice over PPC — many healthcare businesses use both, depending on their objectives and timeline.
          </p>
        </div>
      </section>

      {/* Section 13: Common Healthcare SEO Mistakes (Full-Width bg-white) */}
      <section className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <FloatingElement>
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-600 mb-3">
                Common Healthcare SEO Mistakes
              </h2>
            </FloatingElement>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {commonMistakes.map((mistake) => (
              <div
                key={mistake}
                className="p-4 rounded-xl border border-red-100 bg-gray-50 shadow-sm flex items-center gap-3 text-gray-800 text-sm font-medium hover:shadow-lg hover:-translate-y-2 hover:border-red-200 transition-all duration-300"
              >
                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 text-red-600 font-bold text-xs">
                  ✕
                </div>
                <span>{mistake}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 14: How Long Does Healthcare SEO Take? (Full-Width bg-gray-50 with Technical SEO Image from Section 9) */}
      <section className="w-full bg-gray-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 border-y border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-10 lg:gap-14">
          <div className="flex-1 flex flex-col justify-center text-center md:text-left">
            <FloatingElement>
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-600 mb-6">
                How Long Does Healthcare SEO Take?
              </h2>
            </FloatingElement>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-4">
              Timelines vary according to existing domain authority, website history, competition, technical condition, content quality, backlink profile, search demand, current rankings and how quickly changes are implemented.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-4">
              Some technical fixes show effects sooner, while competitive rankings generally take longer to move.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              We won't promise page 1 rankings, specific ranking positions, specific traffic numbers, guaranteed leads, or guaranteed Google Maps rankings.
            </p>
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <Card3D className="w-full h-full flex flex-col justify-center">
              <SEOImageSlot
                src={technicalImgSrc}
                filename="healthcare-technical-seo-dubai.webp"
                alt="Technical SEO analysis for a healthcare website"
                aspect="h-full min-h-[420px] lg:min-h-[500px] w-full"
                className="h-full shadow-2xl"
              />
            </Card3D>
          </div>
        </div>
      </section>

      {/* Section 15: Frequently Asked Questions (Full-Width bg-white) */}
      <section className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-600 mb-4">
                Frequently Asked Questions
              </h2>
            </FloatingElement>
          </motion.div>

          <div className="space-y-4 sm:space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left p-4 sm:p-6 hover:bg-gray-50 transition-colors duration-200 group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-900 to-teal-700 text-white text-base sm:text-lg font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-102 cursor-pointer"
                >
                  <span className="font-semibold pr-4">
                    {index + 1}. {faq.q}
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
                      <div className="p-4 sm:p-6 text-gray-700 leading-relaxed text-xs sm:text-sm lg:text-base">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-xs text-gray-500 mt-8 italic">
            Note: FAQ structured data below represents only the FAQs visibly present on this page. Google deprecated the FAQ rich-result feature from Search starting May 7, 2026, so no rich-result appearance should be expected regardless.
          </p>
        </div>
      </section>

      {/* Section 16: Get Started With Healthcare SEO Dubai (Full-Width Bottom CTA Banner) */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-teal-700 to-[#c89d5a] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 border border-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
                Get Started With
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white">
                  Healthcare SEO Dubai
                </span>
              </h2>
            </FloatingElement>

            <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              Looking to improve your healthcare website's organic visibility in Dubai? We're glad to walk through your website, current search performance and goals with you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <motion.button
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-teal-700 font-semibold rounded-full shadow-xl hover:shadow-2xl hover:bg-gray-50 transition-all duration-300 text-sm sm:text-base cursor-pointer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Request a Healthcare SEO Consultation
                  <Sparkles className="inline-block ml-2 w-4 h-4 sm:w-5 sm:h-5 text-teal-600" />
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 text-sm sm:text-base cursor-pointer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Discuss Your Website
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white/80 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 text-sm sm:text-base cursor-pointer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Request an SEO Audit
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 17: Suggested Internal Links (Full-Width bg-gray-50) */}
      <section className="w-full bg-gray-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <FloatingElement>
            <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-600 mb-6">
              Suggested Internal Links
            </h2>
          </FloatingElement>
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            {internalLinks.map((link) => (
              <Link
                key={link.name}
                to={link.url}
                className="px-5 py-2.5 rounded-full bg-white border border-teal-200 text-teal-800 text-xs sm:text-sm font-semibold hover:bg-teal-50 transition-all shadow-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <p className="text-xs text-gray-500 italic max-w-2xl mx-auto">
            Only implement links to pages that actually exist and are live; avoid repeating the same exact-match anchor across every link.
          </p>
        </div>
      </section>
    </div>
  );
}

export default DubaiHealthcareSEO;
