import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../../../components/SEO";
import {
  Building2,
  Home,
  Search,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Target,
  BarChart3,
  Layers,
  Settings,
  Globe,
  Smartphone,
  Zap,
  ShieldCheck,
  FolderTree,
  FileText,
  AlertTriangle,
  Code2,
  Check,
  Laptop,
  Network,
  Sparkles,
  MapPin,
  Key,
  Compass,
  Briefcase,
  Users,
  Eye,
  Sliders,
  HelpCircle,
  PhoneCall,
  Clock,
  ExternalLink,
  Award,
  Scale,
  TrendingUp,
  DollarSign,
  Share2,
} from "lucide-react";

// WebP Image Paths from Image Documentation (Section D)
const heroImgSrc = "/images/india/real-estate-seo/real-estate-seo-services-india.webp";
const intentImgSrc = "/images/india/real-estate-seo/real-estate-search-intent-india.webp";
const technicalImgSrc = "/images/india/real-estate-seo/real-estate-technical-seo-india.webp";
const localImgSrc = "/images/india/real-estate-seo/local-seo-real-estate-india.webp";
const projectImgSrc = "/images/india/real-estate-seo/real-estate-project-page-seo.webp";
const listingImgSrc = "/images/india/real-estate-seo/property-listing-seo-india.webp";
const reportingImgSrc = "/images/india/real-estate-seo/real-estate-seo-reporting-india.webp";

// Responsive Property Image Slot Component with graceful fallback
const PropertyImageSlot = ({
  src = "",
  alt = "",
  width = 1600,
  height = 900,
  aspect = "aspect-[16/9]",
  className = "",
  priority = false,
  fallbackIcon = Building2,
  caption = "",
}) => {
  const [hasError, setHasError] = useState(false);
  const Icon = fallbackIcon;
  const fileName = src.split("/").pop();

  return (
    <figure className="my-4 sm:my-6 w-full">
      <div
        className={`relative w-full rounded-2xl overflow-hidden bg-slate-100 border border-teal-500/25 shadow-xl flex items-center justify-center ${aspect} ${className}`}
      >
        {!hasError ? (
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? "eager" : "lazy"}
            onError={() => setHasError(true)}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
          />
        ) : (
          <div className="p-6 sm:p-8 text-center text-sm font-medium text-slate-700 select-none flex flex-col items-center justify-center gap-3 w-full h-full bg-gradient-to-b from-white to-teal-50/50 border-2 border-dashed border-teal-300/80 rounded-2xl">
            <div className="w-14 h-14 rounded-2xl bg-teal-100/90 text-teal-800 flex items-center justify-center shadow-xs">
              <Icon className="w-7 h-7" />
            </div>
            <div className="space-y-1.5 max-w-sm">
              <span className="block leading-snug text-xs sm:text-sm font-bold text-slate-900">
                {alt}
              </span>
              <span className="inline-block font-mono text-[11px] text-teal-800 bg-teal-100/70 px-2.5 py-0.5 rounded-full border border-teal-300/60 font-semibold">
                {fileName}
              </span>
            </div>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="text-xs text-slate-500 mt-2 text-center italic font-medium">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

// 3D Interactive Card Component
const Card3D = ({ children, className = "" }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateXValue = (y - centerY) / 18;
    const rotateYValue = (centerX - x) / 18;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: "spring", stiffness: 280, damping: 20 }}
      style={{ perspective: 1000, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Floating Animation Helper
const FloatingElement = ({ children, delay = 0 }) => (
  <motion.div
    animate={{ y: [0, -8, 0] }}
    transition={{ duration: 3.5, repeat: Infinity, delay }}
  >
    {children}
  </motion.div>
);

// ---------------------------------------------------------------------------
// Document Data (Strictly Verbatim from Prompt Document)
// ---------------------------------------------------------------------------

const breadcrumbTrail = [
  { label: "Home", href: "/" },
  { label: "India SEO Services", href: "/india/seo-services" },
  { label: "Real Estate SEO Services India", href: "/india/real-estate-seo-services/" },
];

const secondaryKeywords = [
  "Real Estate SEO Company India",
  "Real Estate SEO Agency India",
  "Real Estate SEO Services in India",
  "SEO for Real Estate Developers India",
  "Property SEO Services India",
  "Real Estate Website SEO India",
  "SEO for Property Consultants India",
  "Real Estate Digital Marketing SEO India",
  "Real Estate Search Engine Optimization India",
  "Professional Real Estate SEO Services India",
  "Technical SEO for Real Estate Websites",
  "Local SEO for Real Estate Businesses",
  "Real Estate Keyword Research India",
  "Property Listing SEO Services",
  "SEO for Builders in India",
  "SEO for Commercial Real Estate India",
  "SEO for Residential Projects India",
  "Real Estate Content Marketing India",
  "Real Estate Website Optimization",
  "Real Estate SEO Audit Services India",
  "SEO for Property Portals India",
  "Real Estate Lead Generation SEO",
  "Real Estate Schema Markup",
  "Real Estate SEO Strategy India",
];

// Process Stages - Strictly from Section: "How DigLip7 Can Develop a Real Estate SEO Strategy"
const strategyStages = [
  {
    stage: "Stage 1",
    title: "Understand the property business",
    desc: "Business model, audience, portfolio, locations and current website.",
    icon: Target,
  },
  {
    stage: "Stage 2",
    title: "Audit existing search performance",
    desc: "Indexation, technical issues, landing pages, queries and internal links.",
    icon: Search,
  },
  {
    stage: "Stage 3",
    title: "Map keywords to relevant pages",
    desc: "Match intent to the homepage, project pages, categories, local pages and guides.",
    icon: Key,
  },
  {
    stage: "Stage 4",
    title: "Improve website architecture",
    desc: "Link projects, property types, locations, services and resources logically.",
    icon: Network,
  },
  {
    stage: "Stage 5",
    title: "Strengthen high-potential pages",
    desc: "Improve existing pages with real search potential before adding new URLs.",
    icon: TrendingUp,
  },
  {
    stage: "Stage 6",
    title: "Address technical issues",
    desc: "Prioritise crawling, indexing, duplication, redirects, mobile experience and structured data.",
    icon: Settings,
  },
  {
    stage: "Stage 7",
    title: "Build useful supporting content",
    desc: "Answer genuine buyer, tenant, investor and business-client questions.",
    icon: FileText,
  },
  {
    stage: "Stage 8",
    title: "Measure and refine",
    desc: "Use real performance data to assess visibility, traffic quality and qualified enquiries.",
    icon: BarChart3,
  },
];

// FAQs - Strictly from Section: "Frequently Asked Questions About Real Estate SEO Services in India"
const faqs = [
  {
    question: "What are real estate SEO services in India?",
    answer:
      "Real estate SEO services improve a property website's structure, project and listing pages, location relevance, content and technical health so relevant buyers, tenants and investors can find it through organic search.",
  },
  {
    question: "How can SEO help a real estate company in India?",
    answer:
      "SEO helps match people's searches with the most useful page, whether that is a project page, a location page or a buying guide. It cannot fix inaccurate property information or guarantee visibility.",
  },
  {
    question: "How much do real estate SEO services in India cost?",
    answer:
      "Cost depends on website size, the number of projects or listings, technical condition, competition, content needs and reporting requirements. A fair quote follows a site review, so no fixed package price is published here.",
  },
  {
    question: "What does a real estate SEO company do?",
    answer:
      "It audits crawling, indexing and site architecture, maps keywords to pages, improves project and listing content, manages duplicate and unavailable URLs, supports local visibility where eligible, implements structured data and reports on organic performance and enquiries.",
  },
  {
    question: "How is SEO for real estate developers different from SEO for property portals?",
    answer:
      "Developers focus on a limited number of detailed project pages and location relevance. Portals manage thousands of listings, so indexation control, category structure, duplicate URLs and listing quality matter more. Both need accurate, current information.",
  },
  {
    question: "Can local SEO help real estate agents and brokers?",
    answer:
      "Yes, where the business has a genuine office and serves defined areas. Accurate business details, a well-maintained Google Business Profile, honest reviews and useful local pages can support local discovery. No agency can promise a specific Google Maps position.",
  },
  {
    question: "How should property developers optimize project pages?",
    answer:
      "Start with verified facts: project name, location, property type, configurations, amenities, status and approvals where applicable. Add genuine images, floor plans, buyer FAQs and a clear enquiry option, and link to related location pages.",
  },
  {
    question: "How do you handle sold, rented or unavailable property listings?",
    answer:
      "It depends on the page. If it still offers useful information, keep it and label the status clearly. If a close equivalent exists, a relevant redirect may suit. If the URL has no continuing value, a removal status may be right. Avoid redirecting everything to the homepage.",
  },
  {
    question: "What technical SEO issues affect real estate websites?",
    answer:
      "Common issues include filter and parameter URLs creating crawlable duplicates, missing canonical tags, thin or unindexed project pages, weak internal links, JavaScript-dependent content, slow mobile pages, uncontrolled pagination and poorly handled migrations or old URLs.",
  },
  {
    question: "How long does real estate SEO take to show progress?",
    answer:
      "There is no fixed timeline. Technical fixes may be reflected after search engines recrawl them, while wider visibility depends on competition, site quality, implementation speed and content.",
  },
  {
    question: "Can real estate SEO help generate qualified property enquiries?",
    answer:
      "It can help relevant visitors find pages that answer their questions and offer a clear next step. Outcomes also depend on property fit, pricing and follow-up, and need correct tracking.",
  },
  {
    question: "How should a business choose a real estate SEO agency in India?",
    answer:
      "Look for clear methodology, transparent reporting, realistic expectations and verifiable claims. Be cautious of guaranteed rankings, unexplained link-buying or bulk copied city pages.",
  },
];

export default function IndiaRealEstateSEO() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const pageUrl = "https://diglip7.com/india/real-estate-seo-services/";

  // Exact JSON-LD Schema from Section E
  const jsonLdGraph = {
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
        publisher: {
          "@id": "https://diglip7.com/#organization",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://diglip7.com/india/real-estate-seo-services/#webpage",
        url: pageUrl,
        name: "Real Estate SEO Services India | DigLip7",
        description:
          "Explore real estate SEO services in India from DigLip7. Improve property website structure, project pages, local visibility and organic search performance.",
        inLanguage: "en-IN",
        isPartOf: {
          "@id": "https://diglip7.com/#website",
        },
        publisher: {
          "@id": "https://diglip7.com/#organization",
        },
        about: {
          "@id": "https://diglip7.com/india/real-estate-seo-services/#service",
        },
        breadcrumb: {
          "@id": "https://diglip7.com/india/real-estate-seo-services/#breadcrumb",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://diglip7.com/india/real-estate-seo-services/#breadcrumb",
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
            name: "India SEO Services",
            item: "https://diglip7.com/india/seo-services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Real Estate SEO Services India",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://diglip7.com/india/real-estate-seo-services/#service",
        name: "Real Estate SEO Services India",
        serviceType: "Real estate search engine optimization",
        url: pageUrl,
        description:
          "SEO services for real estate developers, brokers, property consultants and property portals in India, covering technical SEO, project and listing pages, location relevance, content and measurement.",
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        provider: {
          "@id": "https://diglip7.com/#organization",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://diglip7.com/india/real-estate-seo-services/#faq",
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

  return (
    <div className="overflow-x-hidden bg-white w-full">
      {/* SEO Metadata Component */}
      <SEO
        title="Real Estate SEO Services India | DigLip7"
        description="Explore real estate SEO services in India from DigLip7. Improve property website structure, project pages, local visibility and organic search performance."
        canonical={pageUrl}
        ogType="website"
        ogLocale="en_IN"
        ogImage="https://diglip7.com/images/india/real-estate-seo/real-estate-seo-services-india.webp"
        ogImageAlt="Real estate SEO strategy for property businesses in India"
        twitterCard="summary_large_image"
        twitterTitle="Real Estate SEO Services India | DigLip7"
        twitterDescription="Explore real estate SEO services in India from DigLip7. Improve property website structure, project pages, local visibility and organic search performance."
        twitterImage="https://diglip7.com/images/india/real-estate-seo/real-estate-seo-services-india.webp"
        keywords={secondaryKeywords.join(", ")}
        robots="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        schema={jsonLdGraph}
      />

      {/* Visible Breadcrumb Bar */}
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

      {/* ================= HERO SECTION (Exact design matching CloudApplicationDevelopment.jsx) ================= */}
      <div className="pt-20 sm:pt-24 lg:pt-20 pb-12 sm:pb-16 lg:pb-20 min-h-[90vh] bg-gradient-to-r from-purple-100 via-pink-100 to-white flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 xl:px-12 relative overflow-hidden">
        {/* Animated Floating Objects */}
        <motion.div
          className="absolute top-10 left-10 w-16 h-16 bg-white/20 rounded-full blur-xl"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-20 h-20 bg-white/20 rounded-full blur-xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        <div className="flex flex-col md:flex-row items-center max-w-7xl w-full mx-auto gap-8 lg:gap-14 relative z-10">
          {/* Left Section (60% width for optimal headline flow) */}
          <div className="w-full md:w-7/12 lg:w-3/5 text-center md:text-left">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight">
              <span className="text-gray-900">Real Estate SEO Services India </span>
              <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600">
                for Property Businesses That Want Sustainable Search Visibility
              </span>
            </h1>

            <p className="text-gray-700 text-base sm:text-lg mt-4 mb-4 leading-relaxed max-w-2xl">
              Real estate SEO services in India improve how a property website is structured, written and delivered technically, so buyers, tenants, investors and business clients can find relevant projects, listings and information through organic search. The work covers technical health, project and listing pages, location relevance, internal linking and content that matches what people are actually looking for.
            </p>

            {/* Features (Exactly per established hero design) */}
            <div className="grid grid-cols-2 gap-3 text-gray-800 text-sm mb-6">
              <div>🚀 Boost organic traffic</div>
              <div>📈 Improve search ranking</div>
              <div>🎯 Target right audience</div>
              <div>📊 Transparent reporting</div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="https://wa.me/919650608788?text=Hello%20DigLip7%20Team%2C%20I%20would%20like%20to%20discuss%20a%20Real%20Estate%20SEO%20Strategy%20for%20my%20property%20business%20in%20India."
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  className="group px-7 sm:px-9 py-3.5 sm:py-4 bg-gradient-to-r from-teal-700 to-teal-900 text-white text-base sm:text-lg font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105 cursor-pointer flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Discuss Your Real Estate SEO Strategy</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                </motion.button>
              </a>
            </div>
          </div>

          {/* Right Section (40% width illustration - Image 1, eager loaded) */}
          <motion.div
            className="w-full md:w-5/12 lg:w-2/5 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <PropertyImageSlot
              src={heroImgSrc}
              alt="Real estate SEO strategy for property businesses in India"
              width={1600}
              height={900}
              priority={true}
              aspect="aspect-[16/9]"
              className="rounded-2xl shadow-xl w-full max-w-md lg:max-w-none h-auto object-contain border-teal-500/30"
              badgeText="Hero Visual"
            />
          </motion.div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
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

      {/* ================= SECTION 1: WHAT ARE REAL ESTATE SEO SERVICES IN INDIA? (Fresh Premium Overview) ================= */}
      <section className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto space-y-6">
          <FloatingElement>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-800 tracking-tight text-center md:text-left">
              What Are Real Estate SEO Services in India?
            </h2>
          </FloatingElement>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Real estate SEO services in India improve how a property website is structured, written and delivered technically, so buyers, tenants, investors and business clients can find relevant projects, listings and information through organic search. The work covers technical health, project and listing pages, location relevance, internal linking and content that matches what people are actually looking for.
          </p>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            What that looks like in practice depends on the business. A strategy is shaped by property type, target audience, project locations, sales or rental model, website architecture, the number of properties and projects, competition, the information the business can verify, and how customers make decisions.
          </p>

          <div className="p-6 rounded-2xl bg-teal-50/70 border border-teal-200">
            <p className="text-teal-950 text-base sm:text-lg font-medium leading-relaxed">
              The idea behind this page is simple: real estate SEO is about helping the right person discover the right property, project, location or service through useful, technically accessible pages, not just ranking a website.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: PROPERTY SEARCHES START WITH DIFFERENT QUESTIONS, NOT ONE KEYWORD ================= */}
      <section className="w-full bg-slate-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-800 tracking-tight mb-4">
                Property Searches Start With Different Questions, Not One Keyword
              </h2>
            </FloatingElement>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Someone comparing apartments in Noida, someone looking for commercial offices in Bengaluru, a buyer weighing residential projects in Pune and a company searching for office space in Gurugram are not asking the same thing. These are illustrative scenarios, not market-demand claims.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
            {/* Image 2 */}
            <div className="lg:col-span-5">
              <Card3D>
                <PropertyImageSlot
                  src={intentImgSrc}
                  alt="Search intent mapping for real estate websites"
                  caption="Mapping different property search inquiries to specialized digital destinations"
                  badgeText="Search Intent Mapping"
                />
              </Card3D>
            </div>

            {/* Exact Bullets from Document */}
            <div className="lg:col-span-7">
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200/80 shadow-md">
                <h3 className="text-xs font-bold uppercase tracking-wider text-teal-800 mb-4 flex items-center gap-2">
                  <Target className="w-4 h-4 text-teal-600" />
                  <span>Search Journeys &amp; Intent Categories</span>
                </h3>
                <ul className="space-y-2.5 text-sm sm:text-base text-gray-800">
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-teal-600 shrink-0 mt-2" />
                    <span>Broad research, such as understanding a property type or process</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-teal-600 shrink-0 mt-2" />
                    <span>Location searches, such as an area or city</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-teal-600 shrink-0 mt-2" />
                    <span>Project searches, where the buyer already knows a name</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-teal-600 shrink-0 mt-2" />
                    <span>Property-type searches, such as apartments, villas or offices</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-teal-600 shrink-0 mt-2" />
                    <span>Price and affordability research</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-teal-600 shrink-0 mt-2" />
                    <span>Comparison searches between projects or areas</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-teal-600 shrink-0 mt-2" />
                    <span>Rental and commercial property searches</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-teal-600 shrink-0 mt-2" />
                    <span>Enquiry-ready searches from people close to contacting someone</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center mt-6">
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              A single homepage cannot serve all of these well. A person searching for a specific project should land on that project page, a person exploring an area should reach a useful location page, and a person still researching should find a guide with a sensible next step. SEO connects each type of query to the most useful page.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: YOUR PROPERTY WEBSITE MAY HAVE MORE SEO POTENTIAL THAN YOU REALIZE ================= */}
      <section className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-800 tracking-tight mb-3">
                Your Property Website May Have More SEO Potential Than You Realize
              </h2>
            </FloatingElement>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Before commissioning hundreds of new pages, look at what already exists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              "Project pages with limited information, or valuable pages with few organic impressions",
              "Duplicate listings, outdated pricing or stale availability",
              "Weak internal links between projects and locations, and poorly organised categories",
              "Unindexed project pages, missing or incorrect canonical tags and thin location pages",
              "Pages competing for similar search terms",
              "Old URLs still accessible after a redesign",
              "Important details hidden behind interactions that crawlers cannot reach",
            ].map((point, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-md bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                  <AlertTriangle className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs sm:text-sm text-gray-800 leading-relaxed font-medium">
                  {point}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-teal-900 font-semibold text-base sm:text-lg">
              An SEO audit shows which existing pages deserve attention first.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: LOCATION-BASED SEO FOR INDIA'S PROPERTY MARKETS ================= */}
      <section className="w-full bg-slate-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-800 tracking-tight mb-4">
                Location-Based SEO for India's Property Markets
              </h2>
            </FloatingElement>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Location is central to property search, and it works at several levels: national discovery, state-level targeting, city-level SEO, neighbourhood relevance and individual project pages.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
            {/* Image 4 */}
            <div className="lg:col-span-6">
              <Card3D>
                <PropertyImageSlot
                  src={localImgSrc}
                  alt="Local SEO and location discovery for Indian real estate businesses"
                  caption="Location-based property discovery and genuine micro-market relevance in India"
                  badgeText="Location Signals"
                />
              </Card3D>
            </div>

            {/* Content text */}
            <div className="lg:col-span-6 space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
              <p>
                Delhi, Noida, Gurugram, Mumbai, Pune, Bengaluru, Hyderabad, Chennai, Ahmedabad and Kolkata are all potential markets. That does not mean a business should build a page for each. A location page deserves to exist only when the business has a genuine connection to the place and can offer useful, differentiated information.
              </p>
              <p>
                Good location content covers real project locations, neighbourhood context, verified connectivity information, nearby amenities, service coverage and clear internal links to relevant projects or listings. Swapping the city name on a copied page is a doorway-page pattern. Never invent property prices, rental yields, infrastructure completion dates or local statistics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: PROJECT PAGES THAT HELP BUYERS UNDERSTAND WHAT IS BEING OFFERED ================= */}
      <section className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-800 tracking-tight mb-4">
                Project Pages That Help Buyers Understand What Is Being Offered
              </h2>
            </FloatingElement>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              A project page should do more than carry a short promotional paragraph; it should let buyers evaluate the offer.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
            {/* Bullets */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200">
                <ul className="space-y-3 text-sm sm:text-base text-gray-800">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                    <span>Project name and verified location, property type and verified configurations</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                    <span>Specifications, amenities and facilities</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                    <span>Location and connectivity information, and developer information</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                    <span>Verified project status, plus approvals and registration details where applicable</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                    <span>Floor plans and genuine project imagery</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                    <span>Construction or possession information, where verified</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                    <span>Frequently asked buyer questions and clear enquiry options</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Image 5 */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <Card3D>
                <PropertyImageSlot
                  src={projectImgSrc}
                  alt="Property project information and website optimization"
                  caption="Structuring verified property details, floor plans, and clear enquiry options"
                  badgeText="Project Page Architecture"
                />
              </Card3D>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              A clear page hierarchy and structured information help both visitors and search engines understand the project. One firm rule applies: never invent RERA registration numbers, possession dates, approvals, prices, amenities or developer credentials. SEO cannot compensate for inaccurate property information.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SECTION 6: REAL ESTATE KEYWORD RESEARCH BEYOND SEARCH VOLUME ================= */}
      <section className="w-full bg-slate-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto space-y-6">
          <FloatingElement>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-800 tracking-tight text-center md:text-left">
              Real Estate Keyword Research Beyond Search Volume
            </h2>
          </FloatingElement>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Good keyword research identifies search themes that match your inventory and business goals. That means looking at primary and secondary keywords, location and property-type modifiers, project and brand searches, buyer-intent and rental-intent terms, commercial property searches, informational queries, competitor content gaps, Search Console queries and the performance of existing landing pages.
          </p>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            The right keyword map varies by business. A residential builder may centre on project names, locations and configurations. A commercial property consultant may prioritise office, retail and area-based searches. A property portal needs a map across categories, cities and property types. High search volume alone does not make a keyword commercially valuable, and no keyword should be called low-competition or quick to rank without evidence.
          </p>
        </div>
      </section>

      {/* ================= SECTION 7: TECHNICAL SEO FOR REAL ESTATE WEBSITES WITH HUNDREDS OR THOUSANDS OF URLS ================= */}
      <section className="w-full bg-[#081324] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">
              Technical SEO for Real Estate Websites With Hundreds or Thousands of URLs
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Technical SEO is where large property sites most often lose ground. The areas to review include website architecture, crawlability and indexability, XML sitemaps, canonical tags, redirect management, duplicate listings, URL parameters, pagination, internal linking, mobile usability, page speed and Core Web Vitals, structured data and migrations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
            {/* Image 3 */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <Card3D>
                <PropertyImageSlot
                  src={technicalImgSrc}
                  alt="Technical SEO architecture for a real estate website"
                  caption="Scalable crawl paths, filter parameter controls, and canonical integrity"
                  badgeText="Technical Architecture"
                  className="border-teal-500/40"
                />
              </Card3D>
            </div>

            {/* Filter explanation & subsection */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                Filters are a good example. Search by price, bedrooms, furnishing and location can generate huge numbers of dynamic URLs. Many are near-duplicates that waste crawl attention and dilute signals, so decide which filtered combinations deserve to be indexed and control the rest through canonicals, internal linking and crawl rules. Check that JavaScript-rendered listings are visible to search engines.
              </p>

              {/* Subsection: Sold, rented or unavailable properties */}
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-700 space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-teal-400">
                  Sold, rented or unavailable properties
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Do not delete every unavailable listing, and never redirect every old URL to the homepage. Ask three questions: does the page still offer useful information, does a close equivalent exist, and does the URL carry continuing value? The answers point to keeping the page with a clear status, redirecting to a relevant alternative, or removing it.
                </p>
                <p className="text-xs sm:text-sm text-teal-300 font-medium pt-1">
                  Prioritise technical fixes by impact, evidence and implementation effort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 8: LOCAL SEO FOR REAL ESTATE AGENCIES AND PROPERTY CONSULTANTS ================= */}
      <section className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto space-y-6">
          <FloatingElement>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-800 tracking-tight text-center md:text-left">
              Local SEO for Real Estate Agencies and Property Consultants
            </h2>
          </FloatingElement>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Local SEO can help eligible businesses, such as a brokerage with a genuine office, appear for relevant local searches. It depends on accurate business information, an eligible and well-maintained Google Business Profile, genuine office locations, appropriate categories, clear service descriptions, honest reviews with professional responses, consistent contact details, accurate opening hours and location-specific internal links.
          </p>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            National SEO for a developer or portal relies more on architecture and content breadth. Never use fake business locations, misleading addresses, fabricated reviews or duplicate profiles, and treat any promise of Google Maps rankings with suspicion.
          </p>
        </div>
      </section>

      {/* ================= SECTION 9: CONTENT MARKETING FOR PROPERTY BUYERS WHO NEED MORE INFORMATION ================= */}
      <section className="w-full bg-slate-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto space-y-6">
          <FloatingElement>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-800 tracking-tight text-center md:text-left">
              Content Marketing for Property Buyers Who Need More Information
            </h2>
          </FloatingElement>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Many buyers want to understand before they enquire. Property-buying guides, home-loan preparation guides, rental process explainers, documentation checklists, location guides and project comparison resources can answer those needs without replacing essential project or service pages. Guides should support commercial pages, and our{" "}
            <Link
              to="/digital-market/content-marketing"
              className="text-teal-800 underline hover:text-teal-950 font-bold"
            >
              content marketing
            </Link>{" "}
            work treats them that way.
          </p>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            A residential developer might publish a guide to the verified details buyers should compare before requesting a site visit. A commercial property business might explain what tenants should review when comparing office spaces. A portal might create guides that link to relevant category and listing pages. Anything touching legal, financial, tax or regulatory topics must be carefully verified and should not read as individual professional advice.
          </p>
        </div>
      </section>

      {/* ================= SECTION 10: REAL ESTATE SEO FOR RESIDENTIAL, COMMERCIAL, AND RENTAL PROPERTIES ================= */}
      <section className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-800 tracking-tight mb-4">
                Real Estate SEO for Residential, Commercial, and Rental Properties
              </h2>
            </FloatingElement>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              SEO priorities differ by business model, as this comparison shows.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
            {/* Table */}
            <div className="lg:col-span-7">
              <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                <table className="w-full text-left text-sm">
                  <thead className="bg-teal-900 text-white">
                    <tr>
                      <th className="p-4 sm:p-5 font-semibold text-sm sm:text-base">Business type</th>
                      <th className="p-4 sm:p-5 font-semibold text-sm sm:text-base bg-teal-800">Important SEO priorities</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    <tr className="bg-white">
                      <td className="p-4 font-semibold text-gray-900">Residential developers</td>
                      <td className="p-4 text-gray-700">Project pages, property configurations, location information and buyer questions</td>
                    </tr>
                    <tr className="bg-gray-50/60">
                      <td className="p-4 font-semibold text-gray-900">Commercial property companies</td>
                      <td className="p-4 text-gray-700">Property specifications, business locations, availability and enquiry pathways</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-semibold text-gray-900">Rental agencies</td>
                      <td className="p-4 text-gray-700">Accurate rental listings, location filters, availability and duplicate URL management</td>
                    </tr>
                    <tr className="bg-gray-50/60">
                      <td className="p-4 font-semibold text-gray-900">Real estate brokers</td>
                      <td className="p-4 text-gray-700">Relevant service pages, genuine local visibility and property expertise</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-semibold text-gray-900">Property portals</td>
                      <td className="p-4 text-gray-700">Scalable architecture, indexation controls, category pages and listing quality</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Image 6 */}
            <div className="lg:col-span-5">
              <Card3D>
                <PropertyImageSlot
                  src={listingImgSrc}
                  alt="Search-friendly property listings and category architecture"
                  caption="Scalable category groupings and structured listing architecture"
                  badgeText="Property Categories"
                />
              </Card3D>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Treat these as starting points rather than universal requirements. The actual strategy should reflect the website's inventory, business model, customer needs and available data.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SECTION 11: STRUCTURED DATA AND SEARCH-FRIENDLY PROPERTY INFORMATION ================= */}
      <section className="w-full bg-slate-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto space-y-6">
          <FloatingElement>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-800 tracking-tight text-center md:text-left">
              Structured Data and Search-Friendly Property Information
            </h2>
          </FloatingElement>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Structured data helps search engines interpret page content, but it must match what visitors can actually see. Where applicable, relevant types include Organization, WebSite, WebPage, BreadcrumbList and Service. RealEstateAgent can suit a genuine real estate agency entity. Product should be used only where the content truly meets the type's requirements, and FAQPage only for qualifying visible FAQ content, without assuming any Google rich result.
          </p>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Do not apply every type to every page, and never invent ratings, reviews, prices, offers, addresses, registration numbers or availability. Schema does not guarantee rich results, rankings, leads or citations in AI search.
          </p>
        </div>
      </section>

      {/* ================= SECTION 12: HOW DIGLIP7 CAN DEVELOP A REAL ESTATE SEO STRATEGY (Exact process design from CloudApplicationDevelopment.jsx) ================= */}
      <section className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 border-b border-gray-100 text-center">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="max-w-4xl mx-auto mb-12">
            <FloatingElement>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                How DigLip7 Can Develop a Real Estate SEO Strategy
              </h2>
            </FloatingElement>
            <p className="text-gray-600 mt-3 text-sm sm:text-base">
              A credible strategy follows a clear sequence, and none of it guarantees a particular result.
            </p>
          </div>

          {/* Steps Section (Exact layout from CloudApplicationDevelopment.jsx) */}
          <div className="relative max-w-7xl mx-auto">
            {/* Blue Line (Desktop only) */}
            <div className="hidden lg:block absolute top-10 left-0 w-full border-t-4 border-blue-100 z-0" />

            {/* Steps Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 relative z-10">
              {strategyStages.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={step.stage}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center"
                  >
                    {/* Icon Circle */}
                    <div className="relative flex items-center justify-center w-16 h-16 rounded-full border-4 border-blue-300 bg-white shadow-md mb-4">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                      <span className="absolute -top-2 -right-2 bg-teal-500 text-white text-[10px] font-bold w-6 h-6 flex items-center justify-center rounded-full shadow">
                        {index + 1}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-semibold text-gray-900 text-sm leading-snug">
                      {step.stage}: {step.title}
                    </h3>
                    {/* Description */}
                    <p className="text-gray-600 text-xs mt-1.5 leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 13: MEASURING REAL ESTATE SEO BEYOND RANKINGS ================= */}
      <section className="w-full bg-slate-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-800 tracking-tight mb-4">
                Measuring Real Estate SEO Beyond Rankings
              </h2>
            </FloatingElement>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
            {/* Image 7 */}
            <div className="lg:col-span-6">
              <Card3D>
                <PropertyImageSlot
                  src={reportingImgSrc}
                  alt="Organic search performance measurement for real estate websites"
                  caption="Measuring real property search performance and qualified customer enquiries"
                  badgeText="Measurement & Reporting"
                />
              </Card3D>
            </div>

            {/* Text Content */}
            <div className="lg:col-span-6 space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
              <p>
                Ranking position alone says little about business value. A fuller view includes organic impressions and clicks, non-branded visibility, search queries, click-through rate, landing-page performance, indexed project pages, technical health and Core Web Vitals. On the business side, it includes property enquiries, qualified lead submissions, tracked phone calls, form submissions, WhatsApp interactions, site-visit or appointment requests, organic conversion rate and, where reliably calculated, the cost and quality of acquired leads.
              </p>
              <p>
                Traffic and value are not the same. A page that attracts a large audience researching property terminology may deliver far less commercially than a relevant project page visited by people evaluating a property.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 14: HOW LONG DOES REAL ESTATE SEO TAKE IN INDIA? ================= */}
      <section className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto space-y-6">
          <FloatingElement>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-800 tracking-tight text-center md:text-left">
              How Long Does Real Estate SEO Take in India?
            </h2>
          </FloatingElement>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            There is no universal timeline. Progress depends on existing website quality, domain and page history, competition, inventory coverage, technical condition, content usefulness, website size, implementation speed, current visibility, accuracy and freshness of information, migration history and internal linking quality.
          </p>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Technical changes may be reflected once search engines recrawl and process the site, while broader organic visibility typically needs sustained improvement. Be wary of promises of page-one rankings in 30, 60 or 90 days, or guaranteed leads, sales, traffic or revenue.
          </p>
        </div>
      </section>

      {/* ================= SECTION 15: REAL ESTATE SEO VS PAID ADVERTISING ================= */}
      <section className="w-full bg-slate-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-800 tracking-tight mb-4">
                Real Estate SEO vs Paid Advertising
              </h2>
            </FloatingElement>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-6">
            <table className="w-full text-left text-sm">
              <thead className="bg-teal-900 text-white">
                <tr>
                  <th className="p-4 sm:p-5 font-semibold text-sm sm:text-base">Real estate SEO</th>
                  <th className="p-4 sm:p-5 font-semibold text-sm sm:text-base bg-teal-800">Paid search advertising</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr className="bg-white">
                  <td className="p-4 text-gray-800 font-medium">Develops organic search visibility</td>
                  <td className="p-4 text-gray-700">Provides paid placement opportunities</td>
                </tr>
                <tr className="bg-gray-50/60">
                  <td className="p-4 text-gray-800 font-medium">Focuses on technical structure and useful content</td>
                  <td className="p-4 text-gray-700">Focuses on campaigns, bidding and advertising budgets</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-4 text-gray-800 font-medium">Can support discovery across many research stages</td>
                  <td className="p-4 text-gray-700">Can target defined audiences and search themes</td>
                </tr>
                <tr className="bg-gray-50/60">
                  <td className="p-4 text-gray-800 font-medium">Requires ongoing optimization</td>
                  <td className="p-4 text-gray-700">Requires campaign management and budget</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-4 text-gray-800 font-medium">Results depend on competition, implementation and other factors</td>
                  <td className="p-4 text-gray-700">Visibility depends on campaign settings, eligibility, competition and budget</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-center">
            SEO may suit a business that needs durable discovery across the research journey. Paid search may suit a time-sensitive launch or a defined audience. Many businesses benefit from both, with{" "}
            <Link
              to="/digital-market/PPC-Advertising"
              className="text-teal-800 underline hover:text-teal-950 font-bold"
            >
              PPC advertising
            </Link>{" "}
            handling immediate visibility while SEO builds foundations. Neither channel is always superior.
          </p>
        </div>
      </section>

      {/* ================= SECTION 16: COMMON REAL ESTATE SEO MISTAKES THAT WASTE TIME AND BUDGET ================= */}
      <section className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-800 tracking-tight mb-4">
                Common Real Estate SEO Mistakes That Waste Time and Budget
              </h2>
            </FloatingElement>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Nearly identical location pages. Little value, more upkeep.",
              "Incomplete project pages, or outdated prices and availability. Buyers lose trust quickly.",
              "Indexing unnecessary filter URLs, or ignoring canonical tags. Crawl attention is spread thin.",
              "Copied property descriptions. Pages give no reason to stand out.",
              "Unverified market statistics. One wrong figure damages credibility.",
              "Neglecting internal links and mobile usability. Good pages stay hard to find or use.",
              "Treating every listing as equally valuable. Effort should follow importance.",
              "Deleting old URLs without checking their value. Useful links and visibility may be lost.",
              "Buying irrelevant backlinks. This adds risk without relevance.",
              "Publishing generic AI-generated content without editorial review. Errors and sameness slip through.",
              "Focusing only on rankings, or failing to track qualified enquiries. You cannot see what is working.",
              "Structured data that does not match visible content. It creates inconsistency and may be ignored.",
            ].map((mistake, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-2xs flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-md bg-rose-100 text-rose-700 flex items-center justify-center shrink-0 mt-0.5">
                  <AlertTriangle className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs sm:text-sm text-gray-800 font-medium leading-relaxed">
                  {mistake}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 17: WHY CONSIDER DIGLIP7 FOR REAL ESTATE SEO SERVICES IN INDIA? ================= */}
      <section className="w-full bg-slate-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto space-y-6">
          <FloatingElement>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-800 tracking-tight text-center md:text-left">
              Why Consider DigLip7 for Real Estate SEO Services in India?
            </h2>
          </FloatingElement>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            DigLip7 approaches real estate websites with a transparent, evidence-led method. The relevant capabilities are search intent and keyword mapping, technical SEO audits, property website architecture, on-page optimization, local SEO, content planning, internal linking, structured data implementation, indexation management, organic search reporting and continuous optimization. You can see how this fits into our wider{" "}
            <Link
              to="/india/seo-services"
              className="text-teal-800 underline hover:text-teal-950 font-bold"
            >
              India SEO services
            </Link>
            .
          </p>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            We do not guarantee rankings or present unverifiable results. You should always know what is changing, why, and how progress is measured.
          </p>
        </div>
      </section>

      {/* ================= SECTION 18: FREQUENTLY ASKED QUESTIONS (Exact FAQ design from CloudApplicationDevelopment.jsx) ================= */}
      <section className="w-full bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="w-full max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-700 mb-4">
                Frequently Asked Questions About Real Estate SEO Services in India
              </h2>
            </FloatingElement>
          </motion.div>

          <div className="space-y-4 sm:space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left p-4 sm:p-6 hover:bg-gray-50 transition-colors duration-200 
                  group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-900 to-teal-700 text-white text-lg font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-[1.01] cursor-pointer"
                >
                  <span className="text-sm sm:text-base lg:text-lg font-semibold text-white pr-4">
                    {faq.question}
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

      {/* ================= SECTION 19: BUILD A SMARTER SEARCH STRATEGY FOR YOUR REAL ESTATE BUSINESS ================= */}
      <section className="w-full bg-gradient-to-r from-teal-950 via-teal-900 to-slate-900 text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
            Build a Smarter Search Strategy for Your Real Estate Business
          </h2>

          <p className="text-teal-100/90 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            DigLip7 can assess your website's existing structure, project pages, location coverage, technical health, organic visibility, content gaps and business objectives to identify relevant SEO opportunities. The aim is a clear, realistic view of where search can help, with no pressure and no promise of instant rankings.
          </p>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 pt-4">
            <a
              href="https://wa.me/919650608788?text=Hello%20DigLip7%20Team%2C%20I%20would%20like%20to%20discuss%20a%20Real%20Estate%20SEO%20Strategy%20for%20my%20property%20business%20in%20India."
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-7 py-3.5 bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800 text-white text-sm sm:text-base font-bold rounded-full shadow-lg transition transform hover:scale-105 cursor-pointer">
                Discuss Your Real Estate SEO Strategy
              </button>
            </a>
            <Link to="/contact">
              <button className="px-7 py-3.5 bg-white text-teal-900 hover:bg-slate-100 text-sm sm:text-base font-bold rounded-full shadow-lg transition transform hover:scale-105 cursor-pointer">
                Request an SEO Audit
              </button>
            </Link>
            <a
              href="https://wa.me/919650608788?text=Hello%20DigLip7%20Team%2C%20I%20would%20like%20to%20talk%20to%20a%20Real%20Estate%20SEO%20Specialist%20regarding%20my%20property%20website%20in%20India."
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-7 py-3.5 bg-transparent border-2 border-teal-400 hover:bg-teal-800 text-white text-sm sm:text-base font-bold rounded-full transition transform hover:scale-105 cursor-pointer">
                Talk to an SEO Specialist
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
