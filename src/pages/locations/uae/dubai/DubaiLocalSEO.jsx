import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../../../../components/SEO";
import {
  MapPin,
  Search,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Home,
  Star,
  Target,
  BarChart3,
  HelpCircle,
  Building2,
  ShieldCheck,
  AlertTriangle,
  FileText,
  Settings,
  Sparkles,
  Layers,
  Globe,
  ShoppingCart,
  Users,
  Compass,
  PhoneCall,
  Clock,
  HeartPulse,
  Scale,
  UtensilsCrossed,
  Hotel,
  Store,
  Scissors,
  Wrench,
  Rocket,
  Zap,
} from "lucide-react";

// Exact image paths matching Section 9 recommendations
const heroImgSrc = "/images/local-seo-dubai-strategy.webp";
const gbpImgSrc = "/images/google-business-profile-optimization-dubai.webp";
const mapsImgSrc = "/images/google-maps-seo-dubai.webp";
const keywordImgSrc = "/images/local-keyword-research-dubai.webp";
const auditImgSrc = "/images/local-seo-audit-dubai.webp";
const citationImgSrc = "/images/local-citation-building-dubai.webp";
const reportingImgSrc = "/images/local-seo-reporting-dubai.webp";

// Automatic path fallback between /images/ and /images/ so that whenever
// the user drops the file in either src/images or public/images, it displays instantly
const handleImgFallback = (e, filename) => {
  if (e.currentTarget.src.includes("/images/")) {
    e.currentTarget.src = `/images/${filename}`;
  }
};

// 3D Interactive Card Component (matches /development/mobile-app-development)
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

// Floating Animation Component (matches /development/mobile-app-development)
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

// ---------------------------------------------------------------------------
// Strict Content Data (From User Local SEO Dubai Package)
// ---------------------------------------------------------------------------

const pageUrl = "https://diglip7.com/uae/dubai/local-seo/";

const breadcrumbTrail = [
  { label: "Home", href: "/" },
  { label: "UAE", href: "/uae/seo-services/" },
  { label: "Dubai", href: "/uae/dubai/seo-services/" },
  { label: "Local SEO", href: "/uae/dubai/local-seo/" },
];

const whyLocalMattersFactors = [
  {
    icon: Target,
    title: "Neighbourhood-level intent",
    description: "many searches are specific enough to reference a district, not just 'Dubai.'",
  },
  {
    icon: PhoneCall,
    title: "Mobile search behaviour",
    description: "a large share of local searches happen on mobile, often while a customer is already near a decision point.",
  },
  {
    icon: MapPin,
    title: "Google Maps discovery",
    description: "the map pack is frequently the first thing a searcher sees for local service queries.",
  },
  {
    icon: Compass,
    title: "Service-area businesses",
    description: "businesses that travel to customers (home services, trades, mobile clinics) need their service areas represented accurately rather than tied to a single storefront.",
  },
  {
    icon: Building2,
    title: "Multi-area businesses",
    description: "companies serving several Dubai districts need consistent, non-duplicated representation across each one.",
  },
  {
    icon: Star,
    title: "Trust signals",
    description: "reviews and consistent business information carry real weight in a market where customers often compare several nearby options quickly.",
  },
];

const localServices = [
  {
    icon: Search,
    title: "Local SEO Audit",
    description:
      "We review your existing local visibility, Google Business Profile, NAP consistency, local citations, reviews, local landing pages and any technical issues holding back local discovery, alongside a look at how competitors appear in the local results for your key searches.",
  },
  {
    icon: MapPin,
    title: "Google Business Profile Optimization",
    description:
      "We work through business name accuracy, primary and secondary categories, business description, services and products where applicable, hours, contact details, website URL, photos, attributes, and — where relevant — updates and posts, along with a review-management workflow. We won't claim this guarantees a specific Maps position; profile quality is one of several factors Google weighs.",
  },
  {
    icon: Compass,
    title: "Google Maps SEO",
    description:
      "This covers local relevance, profile completeness, alignment between your website and your listed location(s), local content, reviews, citations, geographic relevance and the overall user experience someone gets after finding you on Maps.",
  },
  {
    icon: Target,
    title: "Local Keyword Research",
    description:
      "We map service-and-location combinations, neighbourhood searches, 'near me' intent, commercial local queries and service-area targeting to the pages that should actually rank for them.",
  },
  {
    icon: FileText,
    title: "Local On-Page SEO",
    description:
      "Title tags, meta descriptions, heading structure, location relevance, service-location combinations, internal linking, local content and contact/location information are optimized together, along with structured data where it genuinely applies.",
  },
  {
    icon: Layers,
    title: "Local Landing Pages",
    description:
      "Where there's a genuine business need — a real branch, a real service area — we build location or service pages with genuinely useful, location-specific information. We do not mass-produce near-identical city or neighbourhood pages; a location page only gets built when it can offer something a generic page can't.",
  },
  {
    icon: Building2,
    title: "Local Citation Building",
    description:
      "We work across business and industry directories relevant to the UAE and Dubai, focusing on NAP consistency, cleaning up duplicate listings and correcting inaccurate information. We won't promise a fixed number of citations or backlinks — the goal is accuracy and consistency, not volume.",
  },
  {
    icon: Star,
    title: "Review & Reputation Signals",
    description:
      "This includes supporting a genuine review-acquisition process, responding to reviews professionally, and keeping business information consistent so the overall customer experience holds up. We do not use or recommend fake reviews, incentivized deceptive reviews, or any form of review manipulation.",
  },
  {
    icon: Settings,
    title: "Local Structured Data",
    description:
      "Where it accurately describes the business and page, we implement schema such as LocalBusiness, Organization, PostalAddress, Service and BreadcrumbList — never types that don't reflect the actual visible content.",
  },
  {
    icon: Globe,
    title: "Multi-Location Local SEO",
    description:
      "For businesses with multiple branches or service areas, we build genuinely distinct location pages, consistent NAP across all of them, internal linking between locations, location-specific content and branch-level measurement, while avoiding duplicate pages with minimal unique content.",
  },
];

const approachSteps = [
  {
    id: 1,
    title: "Local SEO Audit",
    description: "understand your current search and business-profile presence.",
    icon: Search,
  },
  {
    id: 2,
    title: "Local Keyword Research",
    description: "map your services to relevant Dubai locations and real search intent.",
    icon: Target,
  },
  {
    id: 3,
    title: "Google Business Profile Optimization",
    description: "improve completeness and accuracy.",
    icon: MapPin,
  },
  {
    id: 4,
    title: "Website Local Optimization",
    description: "align key pages with your genuine services and locations.",
    icon: Globe,
  },
  {
    id: 5,
    title: "Local Citations",
    description: "identify inconsistencies and correct relevant listings.",
    icon: Building2,
  },
  {
    id: 6,
    title: "Local Content",
    description: "build useful location and service content based on real customer needs.",
    icon: FileText,
  },
  {
    id: 7,
    title: "Reviews & Reputation Monitoring",
    description: "support a consistent, honest review-management process.",
    icon: Star,
  },
  {
    id: 8,
    title: "Measurement & Improvement",
    description: "track relevant local and organic search performance over time.",
    icon: BarChart3,
  },
];

const whoCanBenefit = [
  { icon: Wrench, title: "Local service businesses" },
  { icon: HeartPulse, title: "Clinics and healthcare providers" },
  { icon: UtensilsCrossed, title: "Restaurants and cafés" },
  { icon: Scissors, title: "Salons and beauty businesses" },
  { icon: Building2, title: "Real estate businesses" },
  { icon: Scale, title: "Professional services" },
  { icon: Store, title: "Retail businesses" },
  { icon: Home, title: "Home service businesses" },
  { icon: Hotel, title: "Hospitality businesses" },
  { icon: Globe, title: "Multi-location businesses" },
  { icon: Rocket, title: "Small businesses and startups with a physical or local presence" },
];

const commonMistakes = [
  "Keyword stuffing",
  "Fake reviews",
  "Incorrect business information",
  "Duplicate Google Business Profiles",
  "Duplicate location pages",
  "Ignoring Google Business Profile categories",
  "Poor mobile experience",
  "No location-specific content",
  "Inconsistent citations",
  "Ignoring customer reviews",
  "Creating thin \"service + location\" pages",
  "Making ranking guarantees",
];

const generalVsLocalTable = [
  {
    area: "Main intent",
    general: "Broader search visibility",
    local: "Location-focused visibility",
  },
  {
    area: "Geographic focus",
    general: "May be national/global",
    local: "Specific locations",
  },
  {
    area: "Google Business Profile",
    general: "Not always central",
    local: "Important for eligible local businesses",
  },
  {
    area: "Maps visibility",
    general: "Limited focus",
    local: "Core consideration",
  },
  {
    area: "Local citations",
    general: "Optional depending on business",
    local: "Often relevant",
  },
  {
    area: "Location pages",
    general: "Depends on strategy",
    local: "Important when genuinely useful",
  },
  {
    area: "Reviews",
    general: "Brand/trust consideration",
    local: "Important local trust signal",
  },
];

const trackedMetrics = [
  "organic impressions",
  "organic clicks",
  "local search visibility",
  "Google Business Profile interactions",
  "calls",
  "website visits",
  "direction requests where available",
  "local landing-page traffic",
  "conversion actions",
  "search-query trends",
  "review growth or response activity",
];

const strategyFrameworkLayers = [
  "business-level optimization (accurate, complete business information)",
  "website-level optimization (local relevance across key pages)",
  "location-level optimization (genuine, distinct pages per branch or service area)",
  "Google Business Profile management",
  "citation consistency",
  "review management",
  "local content",
  "internal linking",
  "underlying technical SEO",
  "appropriate structured data",
  "ongoing measurement",
];

const faqs = [
  {
    question: "What is Local SEO in Dubai?",
    answer:
      "Local SEO in Dubai is the process of optimizing a business's online presence — its Google Business Profile, website and citations — so it appears more prominently in local search results and Google Maps when nearby customers search for relevant products or services.",
  },
  {
    question: "How does Local SEO help Dubai businesses?",
    answer:
      "It improves how easily nearby customers can find your business through Google Search and Maps, particularly for searches that combine a service with a location or \"near me.\" It builds visibility over time rather than guaranteeing an immediate outcome.",
  },
  {
    question: "What is the difference between Local SEO and regular SEO?",
    answer:
      "General SEO targets broader search visibility regardless of location, while local SEO specifically targets location-based search intent, relying more heavily on signals like your Google Business Profile, citations and local content.",
  },
  {
    question: "How does Google Maps SEO work?",
    answer:
      "Google Maps SEO depends on your Business Profile's completeness and accuracy, how well your website aligns with your listed location, reviews, citations and overall geographic relevance — all contributing to how you appear in Maps and the local map pack.",
  },
  {
    question: "How can I improve my Google Business Profile in Dubai?",
    answer:
      "Keep your business name, categories, description, hours, contact details and photos accurate and complete, respond to reviews professionally, and keep the profile active with relevant updates. Consistency and completeness matter more than any single tweak.",
  },
  {
    question: "Does Local SEO help businesses rank on Google Maps?",
    answer:
      "It can support stronger Maps visibility over time, since Maps rankings draw on profile quality, reviews, citations and local relevance. No agency can guarantee a specific Maps position.",
  },
  {
    question: "How long does Local SEO take in Dubai?",
    answer:
      "Some improvements can be made quickly, but meaningful visibility gains typically build over months rather than days, depending on competition, your starting point and how consistently the strategy is implemented.",
  },
  {
    question: "Is Local SEO useful for small businesses in Dubai?",
    answer:
      "Yes — it's often one of the more practical channels for small businesses, since Google Business Profile optimization and location-specific content can deliver relative value without requiring a large budget.",
  },
  {
    question: "Do I need a physical location for Local SEO?",
    answer:
      "Not necessarily. Service-area businesses without a public storefront can still be represented accurately in local search using a defined service area, provided this is set up correctly and honestly.",
  },
  {
    question: "What is local citation building?",
    answer:
      "It's the process of listing and correcting your business's name, address and phone number (NAP) across relevant directories, ensuring consistency and cleaning up duplicate or inaccurate listings.",
  },
  {
    question: "How important are customer reviews for Local SEO?",
    answer:
      "Reviews are an important local trust signal and can influence both visibility and a customer's decision to choose your business. We only support genuine review acquisition — never fake or incentivized deceptive reviews.",
  },
  {
    question: "Can Local SEO target different Dubai neighborhoods?",
    answer:
      "Yes, where there's a genuine business reason — a real branch or service area — but we don't recommend creating near-identical pages for every neighbourhood just to target more keywords.",
  },
  {
    question: "What does a Local SEO audit include?",
    answer:
      "A local SEO audit reviews your Google Business Profile, NAP consistency, citations, reviews, local landing pages, technical issues affecting local discovery, and a look at how competitors appear in relevant local search results.",
  },
  {
    question: "How do I measure Local SEO performance?",
    answer:
      "Performance is measured through metrics like organic impressions and clicks, Google Business Profile interactions, calls, direction requests, local landing-page traffic and conversion actions — tracked over time through Search Console, analytics and profile insights.",
  },
];

// Connected JSON-LD Schema (Section 11)
const jsonLdGraph = [
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://diglip7.com/uae/dubai/local-seo/#webpage",
        "url": "https://diglip7.com/uae/dubai/local-seo/",
        "name": "Local SEO Dubai | Google Maps & Local Search Services | DigLip7",
        "description":
          "Improve your local search visibility with Local SEO Dubai services from DigLip7. Optimize Google Business Profile, Maps, local pages and citations.",
        "isPartOf": { "@id": "https://diglip7.com/#website" },
        "breadcrumb": { "@id": "https://diglip7.com/uae/dubai/local-seo/#breadcrumb" },
        "mainEntity": { "@id": "https://diglip7.com/uae/dubai/local-seo/#service" },
      },
      {
        "@type": "Service",
        "@id": "https://diglip7.com/uae/dubai/local-seo/#service",
        "name": "Local SEO Services in Dubai",
        "serviceType": "Local Search Engine Optimization",
        "url": "https://diglip7.com/uae/dubai/local-seo/",
        "provider": { "@id": "https://diglip7.com/#organization" },
        "areaServed": {
          "@type": "City",
          "name": "Dubai",
          "containedInPlace": { "@type": "Country", "name": "United Arab Emirates" },
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://diglip7.com/uae/dubai/local-seo/#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://diglip7.com/" },
          { "@type": "ListItem", "position": 2, "name": "UAE", "item": "https://diglip7.com/uae/seo-services/" },
          { "@type": "ListItem", "position": 3, "name": "Dubai", "item": "https://diglip7.com/uae/dubai/seo-services/" },
          { "@type": "ListItem", "position": 4, "name": "Local SEO" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://diglip7.com/uae/dubai/local-seo/#faq",
        "mainEntity": faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
          },
        })),
      },
    ],
  },
];

function DubaiLocalSEO() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="overflow-x-hidden bg-white w-full">
      <SEO
        title="Local SEO Dubai | Google Maps & Local Search Services | DigLip7"
        description="Improve your local search visibility with Local SEO Dubai services from DigLip7. Optimize Google Business Profile, Maps, local pages and citations."
        canonical={pageUrl}
        ogType="website"
        ogImage="https://diglip7.com/images/local-seo-dubai.jpg"
        keywords="Local SEO Dubai, Local SEO Services Dubai, Local SEO Company Dubai, Local SEO Agency Dubai, Local SEO Services in Dubai, Local Search Optimization Dubai, Google Maps SEO Dubai, Google Business Profile SEO Dubai, Google Business Profile Optimization Dubai, Local Search Marketing Dubai, Local Business SEO Dubai, SEO for Local Businesses Dubai, Local Ranking Services Dubai, Local Citation Building Dubai, Local SEO Expert Dubai, Local SEO Consultant Dubai, Google Maps Ranking Dubai, Dubai Local Search Optimization, Near Me SEO Dubai, Local Website SEO Dubai, Multi-Location SEO Dubai"
        schema={jsonLdGraph}
      />

      {/* Breadcrumb (visible) */}
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

      {/* Hero Section with Parallax and Animated Floating Objects */}
      <div className="pt-6 sm:pt-8 pb-16 lg:pb-20 bg-gradient-to-r from-purple-100 via-pink-100 to-white min-h-[85vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 xl:px-12 relative overflow-hidden">
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
              <span className="text-gray-900">Local SEO Dubai </span>
              <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                for Stronger Local Search Visibility
              </span>
            </h1>

            {/* Direct Answer */}
            <p className="text-gray-700 text-sm sm:text-base lg:text-lg mt-4 mb-3 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Local SEO in Dubai helps businesses improve their visibility when people search for nearby products, services or businesses through Google Search and Google Maps. A structured local SEO strategy improves local relevance, business information consistency, location-focused website signals and the overall quality of a business's local search presence — helping the right nearby customers find you when it matters.
            </p>
            <p className="text-gray-700 text-sm sm:text-base lg:text-lg mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <span className="font-semibold text-blue-700">DigLip7</span> builds local SEO strategies around your actual business locations and service areas, combining Google Business Profile optimization, website-level local signals, citations and review management into one coordinated approach rather than a set of disconnected fixes.
            </p>

            {/* Features Preview */}
            <div className="grid grid-cols-2 gap-3 text-gray-800 text-xs sm:text-sm mb-6 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2">📍 Google Business Profile</div>
              <div className="flex items-center gap-2">🗺️ Google Maps Ranking</div>
              <div className="flex items-center gap-2">📌 Local Citations & NAP</div>
              <div className="flex items-center gap-2">⭐ Review Management</div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Link to="/contact" className="inline-block">
                <motion.button
                  className="group px-7 sm:px-9 py-3.5 sm:py-4 bg-gradient-to-r from-teal-700 to-teal-900 text-white text-base sm:text-lg font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get a Local SEO Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </div>
          </div>

          {/* Right Section - 3D Hero Image (Section 9: Hero - LCP eager) */}
          <motion.div
            className="w-full lg:w-[42%] flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card3D className="w-full max-w-md lg:max-w-none">
              <img
                src={heroImgSrc}
                onError={(e) => handleImgFallback(e, "local-seo-dubai-strategy.webp")}
                alt="Local SEO strategy for businesses in Dubai"
                width="800"
                height="600"
                loading="eager"
                className="rounded-2xl shadow-xl w-full max-w-md lg:max-w-none h-auto object-cover bg-gray-50"
              />
            </Card3D>
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

      <div className="bg-white">
        {/* Why Local Search Matters for Dubai Businesses Section (Section 9: Google Maps SEO) */}
        <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 w-full">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 lg:gap-14 mb-20">
            <motion.img
              src={mapsImgSrc}
              onError={(e) => handleImgFallback(e, "google-maps-seo-dubai.webp")}
              alt="Google Maps local SEO strategy in Dubai"
              width="800"
              height="600"
              loading="lazy"
              className="rounded-2xl w-full md:w-1/2 shadow-xl object-cover bg-gray-50"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <div className="flex-1 text-center md:text-left">
              <FloatingElement>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Why Local Search Matters for Dubai Businesses
                </h2>
              </FloatingElement>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Most Dubai customers now start their search for a nearby business on Google — searching a service plus a neighbourhood, or simply "near me" while already on the move. How your business shows up in that moment, on Search and on Maps, often determines whether the enquiry comes to you or a competitor.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Local search works differently from general SEO. It depends on location relevance, the accuracy and completeness of your Google Business Profile, how consistent your business information is across the web, and how clearly your website reflects the areas and services you genuinely offer. Simply adding "Dubai" to a page title doesn't create local relevance — search engines weigh a wider set of signals, including your business profile, citations, reviews and on-page content.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold text-blue-700">DigLip7</span>'s approach to local SEO looks at your business profile, website and off-site signals together, rather than treating them as separate projects, and is built around the locations and services you actually operate in.
              </p>
            </div>
          </div>

          {/* What Is Local SEO? Section */}
          <div className="max-w-7xl mx-auto bg-gradient-to-br from-gray-50 to-teal-50/30 rounded-3xl p-8 sm:p-12 mb-20 border border-gray-100 shadow-md">
            <div className="w-full">
              <FloatingElement>
                <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-4 text-center">
                  What Is Local SEO?
                </h2>
              </FloatingElement>
              <p className="text-gray-800 text-base sm:text-lg font-medium mb-4 leading-relaxed">
                <strong>Direct answer:</strong> Local SEO is the practice of optimizing a business's online presence so it appears prominently when people search for products or services near a specific location — typically through Google Search's local results and Google Maps.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Traditional SEO focuses on ranking a website broadly for relevant terms, regardless of the searcher's location. Local SEO specifically targets searches with location intent — queries that include a place name, a neighbourhood, or the implicit "near me" behind a mobile search. This includes:
              </p>
              <ul className="text-gray-800 space-y-2.5 text-left mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
                  <span>Searches combining a service and a location ("plumber Business Bay")</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
                  <span>Explicit "near me" searches</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
                  <span>Google Maps searches and map-pack results</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
                  <span>Searches where Google infers local intent from the user's device location</span>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Because of this, local SEO depends heavily on signals general SEO doesn't touch directly — Google Business Profile completeness, NAP (name, address, phone) consistency across directories, and genuine location relevance in your website content.
              </p>
            </div>
          </div>

          {/* Why Local SEO Matters for Dubai Businesses (Landscape & Factors) */}
          <div className="max-w-7xl mx-auto mb-20">
            <div className="text-center max-w-5xl mx-auto mb-12">
              <FloatingElement>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Why Local SEO Matters for Dubai Businesses
                </h2>
              </FloatingElement>
              <p className="text-gray-700 leading-relaxed mb-3">
                Dubai's business landscape is dense and highly competitive across nearly every category, spread across distinct commercial areas — Jumeirah, Business Bay, Downtown Dubai, Dubai Marina, JVC, Deira, Bur Dubai and Al Barsha, among others. These are used here only as examples of how location targeting works, not as claims about search volume in any one area.
              </p>
              <p className="text-gray-600 text-sm">
                A few things shape how local SEO plays out in this market:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyLocalMattersFactors.map((factor, index) => (
                <motion.div
                  key={factor.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card3D className="h-full">
                    <div className="bg-gray-50 rounded-2xl p-6 h-full border border-gray-100 shadow-md hover:shadow-xl transition-all flex flex-col">
                      <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-4 text-teal-700">
                        <factor.icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg mb-2">{factor.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                        {factor.description}
                      </p>
                    </div>
                  </Card3D>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Our Local SEO Services in Dubai (10 Services Grid) */}
          <div className="bg-white py-12 text-center mb-16">
            <div className="max-w-5xl mx-auto mb-12">
              <FloatingElement>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Our Local SEO Services in Dubai
                </h2>
              </FloatingElement>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto text-left">
              {localServices.map((service, index) => (
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
                    <h3 className="font-semibold text-gray-900 text-lg mb-2 text-center">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Section 9 Image Spotlight: Local SEO Audit */}
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 lg:gap-14 mb-20 bg-gray-50 rounded-3xl p-8 sm:p-12 border border-gray-100">
            <motion.div
              className="w-full md:w-1/2 flex justify-center"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card3D className="w-full max-w-md">
                <img
                  src={auditImgSrc}
                  onError={(e) => handleImgFallback(e, "local-seo-audit-dubai.webp")}
                  alt="Local SEO audit and performance analysis"
                  width="800"
                  height="600"
                  loading="lazy"
                  className="rounded-2xl shadow-xl w-full object-cover bg-gray-50"
                />
              </Card3D>
            </motion.div>
            <div className="flex-1 text-center md:text-left">
              <FloatingElement>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Local SEO Audit
                </h3>
              </FloatingElement>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                We review your existing local visibility, Google Business Profile, NAP consistency, local citations, reviews, local landing pages and any technical issues holding back local discovery, alongside a look at how competitors appear in the local results for your key searches.
              </p>
            </div>
          </div>

          {/* Section 9 Image Spotlight: Local Keyword Research */}
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-10 lg:gap-14 mb-20 bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm">
            <motion.div
              className="w-full md:w-1/2 flex justify-center"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card3D className="w-full max-w-md">
                <img
                  src={keywordImgSrc}
                  onError={(e) => handleImgFallback(e, "local-keyword-research-dubai.webp")}
                  alt="Local SEO keyword research for Dubai"
                  width="800"
                  height="600"
                  loading="lazy"
                  className="rounded-2xl shadow-xl w-full object-cover bg-gray-50"
                />
              </Card3D>
            </motion.div>
            <div className="flex-1 text-center md:text-left">
              <FloatingElement>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Local Keyword Research
                </h3>
              </FloatingElement>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                We map service-and-location combinations, neighbourhood searches, "near me" intent, commercial local queries and service-area targeting to the pages that should actually rank for them.
              </p>
            </div>
          </div>

          {/* How DigLip7 Approaches Local SEO (Proven Process with Desktop Line) */}
          <div className="bg-white py-12 px-2 text-center mb-20">
            <div className="max-w-5xl mx-auto mb-12">
              <FloatingElement>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  How DigLip7 Approaches Local SEO
                </h2>
              </FloatingElement>
              <p className="text-gray-600 mt-3 text-sm sm:text-base">
                We don't promise guaranteed ranking improvements at any step — this is a structured, ongoing process rather than a fixed outcome.
              </p>
            </div>

            {/* Steps Section */}
            <div className="relative max-w-7xl mx-auto">
              {/* Blue Line (Desktop only) */}
              <div className="hidden lg:block absolute top-10 left-0 w-full border-t-4 border-blue-100 z-0"></div>

              {/* Steps */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                {approachSteps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center"
                  >
                    {/* Icon Circle */}
                    <div className="relative flex items-center justify-center w-16 h-16 rounded-full border-4 border-blue-300 bg-white shadow-md mb-4">
                      <step.icon className="w-8 h-8 text-blue-600" />
                      <span className="absolute -top-2 -right-2 bg-teal-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full shadow">
                        {step.id}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-semibold text-gray-900 text-base">{step.title}</h3>
                    {/* Description */}
                    <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Google Business Profile vs. Website SEO (Section 9: Google Business Profile) */}
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 lg:gap-14 mb-20 bg-gray-50 rounded-3xl p-8 sm:p-12 border border-gray-100">
            <div className="flex-1 text-center md:text-left">
              <FloatingElement>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Google Business Profile vs. Website SEO
                </h2>
              </FloatingElement>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Effective local SEO generally requires alignment between your Google Business Profile, your website, your business information across the web, local content, reviews and citations.
              </p>
              <p className="text-gray-700 leading-relaxed">
                No single signal on its own determines local rankings — a strong profile with an inconsistent or thin website, or a strong website with a neglected profile, both tend to underperform compared to the two working together.
              </p>
            </div>
            <motion.div
              className="w-full md:w-1/2 flex justify-center"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card3D className="w-full max-w-md">
                <img
                  src={gbpImgSrc}
                  onError={(e) => handleImgFallback(e, "google-business-profile-optimization-dubai.webp")}
                  alt="Google Business Profile optimization for Dubai businesses"
                  width="800"
                  height="600"
                  loading="lazy"
                  className="rounded-2xl shadow-xl w-full object-cover bg-gray-50"
                />
              </Card3D>
            </motion.div>
          </div>

          {/* Section 9 Image Spotlight: Local Citations */}
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 lg:gap-14 mb-20 bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm">
            <motion.div
              className="w-full md:w-1/2 flex justify-center"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card3D className="w-full max-w-md">
                <img
                  src={citationImgSrc}
                  onError={(e) => handleImgFallback(e, "local-citation-building-dubai.webp")}
                  alt="Local citation building for Dubai businesses"
                  width="800"
                  height="600"
                  loading="lazy"
                  className="rounded-2xl shadow-xl w-full object-cover bg-gray-50"
                />
              </Card3D>
            </motion.div>
            <div className="flex-1 text-center md:text-left">
              <FloatingElement>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Local Citation Building
                </h3>
              </FloatingElement>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                We work across business and industry directories relevant to the UAE and Dubai, focusing on NAP consistency, cleaning up duplicate listings and correcting inaccurate information. We won't promise a fixed number of citations or backlinks — the goal is accuracy and consistency, not volume.
              </p>
            </div>
          </div>

          {/* Who Can Benefit From Local SEO in Dubai? */}
          <div className="max-w-7xl mx-auto text-center mb-20">
            <FloatingElement>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Who Can Benefit From Local SEO in Dubai?
              </h2>
            </FloatingElement>
            <p className="text-gray-700 max-w-5xl mx-auto mb-8 leading-relaxed">
              Local service businesses, clinics and healthcare providers, restaurants and cafés, salons and beauty businesses, real estate businesses, professional services, retail businesses, home service businesses, hospitality businesses, multi-location businesses, small businesses and startups with a physical or local presence can all benefit from local SEO — though the right mix of tactics depends on the specific business and how its customers actually search.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {whoCanBenefit.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-2 bg-gradient-to-r from-teal-50 to-[#c89d5a]/10 px-4 py-2.5 rounded-full border border-teal-100"
                >
                  <item.icon className="w-4 h-4 text-teal-700 shrink-0" />
                  <span className="text-sm font-medium text-gray-800">{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Small Businesses vs. Multi-Location Businesses */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {/* Local SEO for Small Businesses in Dubai */}
            <Card3D className="h-full">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-teal-100 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-700 mb-4">
                    <Store className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Local SEO for Small Businesses in Dubai
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                    Smaller businesses often work with tighter budgets, which makes local SEO a practical channel for local customer acquisition — Google Business Profile optimization and location-specific landing pages tend to offer strong relative value early on.
                  </p>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    Reviews and local content help build trust quickly in a competitive market, and simple measurement — calls, direction requests and enquiries — gives a clear read on whether the work is translating into real interest.
                  </p>
                </div>
              </div>
            </Card3D>

            {/* Local SEO for Multi-Location Businesses */}
            <Card3D className="h-full">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-teal-100 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-700 mb-4">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Local SEO for Multi-Location Businesses
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                    Businesses with more than one Dubai branch need individual, genuinely distinct information for each location: separate business profiles, unique location pages, consistent NAP details, sensible internal linking between locations, location-specific content and branch-level measurement.
                  </p>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    Duplicate location pages with only the address changed tend to underperform and can create confusion for both users and search engines — each page needs its own reason to exist.
                  </p>
                </div>
              </div>
            </Card3D>
          </div>

          {/* Common Local SEO Mistakes */}
          <div className="max-w-7xl mx-auto mb-20">
            <div className="text-center mb-8">
              <FloatingElement>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                  Common Local SEO Mistakes
                </h2>
              </FloatingElement>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {commonMistakes.map((mistake) => (
                <div
                  key={mistake}
                  className="p-4 rounded-xl border border-red-100 bg-red-50/50 flex items-center gap-3 text-gray-800 text-sm font-medium"
                >
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 text-red-600 font-bold text-xs">
                    ✕
                  </div>
                  <span>{mistake}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Local SEO vs. Google Ads */}
          <div className="max-w-7xl mx-auto mb-20">
            <div className="bg-gradient-to-br from-teal-50/60 to-white rounded-3xl p-8 sm:p-10 shadow-lg border border-teal-100">
              <FloatingElement>
                <h2 className="text-2xl sm:text-3xl font-bold text-teal-800 mb-4">
                  Local SEO vs. Google Ads
                </h2>
              </FloatingElement>
              <div className="space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                <p>
                  Local SEO builds organic and local visibility over time through website and Google Business Profile improvements, and continues working without a per-click cost once established.
                </p>
                <p>
                  Google Ads provides paid visibility based on budget and campaign targeting, with placement lasting only as long as the campaign is active.
                </p>
                <p>
                  Neither is universally better — many Dubai businesses run both together, using ads for immediate visibility while local SEO builds toward it organically. If paid search is part of your plan, see our{" "}
                  <Link
                    to="/digital-market/PPC-Advertising"
                    className="text-teal-800 font-semibold underline hover:text-[#c89d5a] transition-colors"
                  >
                    PPC Advertising
                  </Link>{" "}
                  services.
                </p>
              </div>
            </div>
          </div>

          {/* Local SEO vs. General SEO (Comparison Table) */}
          <div className="max-w-7xl mx-auto mb-20">
            <div className="text-center mb-8">
              <FloatingElement>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                  Local SEO vs. General SEO
                </h2>
              </FloatingElement>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-md">
              <table className="w-full text-left text-sm sm:text-base border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-teal-800 to-teal-900 text-white font-semibold">
                    <th className="p-4 sm:p-5 border-b border-teal-700">Area</th>
                    <th className="p-4 sm:p-5 border-b border-teal-700">General SEO</th>
                    <th className="p-4 sm:p-5 border-b border-teal-700">Local SEO</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  {generalVsLocalTable.map((row, idx) => (
                    <tr
                      key={row.area}
                      className={idx % 2 === 0 ? "bg-white" : "bg-gray-50/70"}
                    >
                      <td className="p-4 sm:p-5 font-bold text-gray-900">{row.area}</td>
                      <td className="p-4 sm:p-5 text-gray-700">{row.general}</td>
                      <td className="p-4 sm:p-5 text-teal-950 font-medium bg-teal-50/40">
                        {row.local}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 text-sm sm:text-base mt-6 text-center leading-relaxed">
              This page focuses specifically on local search visibility. For a broader view of our SEO work across Dubai, see{" "}
              <Link
                to="/uae/dubai/seo-services/"
                className="text-teal-800 font-semibold underline hover:text-[#c89d5a] transition-colors"
              >
                Dubai SEO Services
              </Link>
              , and for the wider Emirates,{" "}
              <Link
                to="/uae/seo-services/"
                className="text-teal-800 font-semibold underline hover:text-[#c89d5a] transition-colors"
              >
                SEO Services UAE
              </Link>
              .
            </p>
          </div>

          {/* Local SEO Results & Measurement (Section 9: Local Analytics) */}
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 lg:gap-14 mb-20 bg-gray-50 rounded-3xl p-8 sm:p-12 border border-gray-100">
            <div className="flex-1">
              <FloatingElement>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Local SEO Results & Measurement
                </h2>
              </FloatingElement>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                We don't promise rankings. What we do track:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                {trackedMetrics.map((metric) => (
                  <div key={metric} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span className="text-gray-800 text-xs sm:text-sm font-medium">{metric}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Results vary based on competition, business category, location, website quality, existing authority, profile quality, search demand and how consistently the work is implemented — factors outside any agency's full control.
              </p>
            </div>
            <motion.div
              className="w-full md:w-1/2 flex justify-center"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card3D className="w-full max-w-md">
                <img
                  src={reportingImgSrc}
                  onError={(e) => handleImgFallback(e, "local-seo-reporting-dubai.webp")}
                  alt="Local SEO performance reporting for Dubai"
                  width="800"
                  height="600"
                  loading="lazy"
                  className="rounded-2xl shadow-xl w-full object-cover bg-gray-50"
                />
              </Card3D>
            </motion.div>
          </div>

          {/* How Long Does Local SEO Take in Dubai? */}
          <div className="max-w-5xl mx-auto text-center mb-20">
            <FloatingElement>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How Long Does Local SEO Take in Dubai?
              </h2>
            </FloatingElement>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-6">
              Local SEO isn't instant. Some improvements — profile corrections, technical fixes — can be implemented quickly, but organic and local visibility generally builds over a longer period. Timelines vary by market, competition and where your business starts from, so performance should be judged over months, not days. We won't guarantee page 1, a #1 ranking, a top Google Maps position, or specific traffic, lead or revenue outcomes.
            </p>
          </div>

          {/* Dubai Local SEO Strategy Framework */}
          <div className="max-w-7xl mx-auto mb-20">
            <div className="text-center mb-10">
              <FloatingElement>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                  Dubai Local SEO Strategy Framework
                </h2>
              </FloatingElement>
              <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base">
                A complete local SEO strategy for a Dubai business typically works across several layers together:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
              {strategyFrameworkLayers.map((layer, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:border-teal-200 transition-all flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center shrink-0 text-teal-800 font-bold text-xs mt-0.5">
                    ✓
                  </div>
                  <span className="text-gray-800 text-xs sm:text-sm font-medium leading-relaxed">
                    {layer}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-center text-xs sm:text-sm text-gray-600">
              The focus throughout stays on local search performance rather than drifting into generic SEO work.
            </p>
          </div>

          {/* Suggested Internal Links (Section 8) */}
          <div className="max-w-7xl mx-auto mb-20 bg-gradient-to-r from-teal-50/70 via-gray-50 to-amber-50/30 border border-teal-100 rounded-3xl p-8 sm:p-10 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 text-center">
              Suggested Internal Links
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/uae/dubai/seo-services/"
                className="px-4 py-2 rounded-full bg-teal-800 text-white text-xs sm:text-sm font-semibold hover:bg-teal-900 transition-all shadow-sm"
              >
                Dubai SEO Services
              </Link>
              <Link
                to="/uae/seo-services/"
                className="px-4 py-2 rounded-full bg-white border border-teal-200 text-teal-800 text-xs sm:text-sm font-semibold hover:bg-teal-50 transition-all shadow-sm"
              >
                SEO Services UAE
              </Link>
              <Link
                to="/digital-market/seoservices"
                className="px-4 py-2 rounded-full bg-white border border-teal-200 text-teal-800 text-xs sm:text-sm font-semibold hover:bg-teal-50 transition-all shadow-sm"
              >
                SEO Services
              </Link>
              <Link
                to="/digital-market/PPC-Advertising"
                className="px-4 py-2 rounded-full bg-white border border-teal-200 text-teal-800 text-xs sm:text-sm font-semibold hover:bg-teal-50 transition-all shadow-sm"
              >
                PPC Advertising
              </Link>
              <Link
                to="/digital-market/social-media-marketing"
                className="px-4 py-2 rounded-full bg-white border border-teal-200 text-teal-800 text-xs sm:text-sm font-semibold hover:bg-teal-50 transition-all shadow-sm"
              >
                social media marketing
              </Link>
              <Link
                to="/digital-market/content-marketing"
                className="px-4 py-2 rounded-full bg-white border border-teal-200 text-teal-800 text-xs sm:text-sm font-semibold hover:bg-teal-50 transition-all shadow-sm"
              >
                content marketing
              </Link>
              <Link
                to="/digital-market/e-commerce-marketing"
                className="px-4 py-2 rounded-full bg-white border border-teal-200 text-teal-800 text-xs sm:text-sm font-semibold hover:bg-teal-50 transition-all shadow-sm"
              >
                e-commerce marketing
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ Section (Accordion matching /development/mobile-app-development) */}
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
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-700 mb-4">
                  Frequently Asked Questions (FAQs)
                </h2>
              </FloatingElement>
              <p className="text-gray-600 text-sm sm:text-base">
                Get answers to the most common questions about our local SEO services in Dubai.
              </p>
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
                  <button
                    onClick={() => toggleFAQ(index)}
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

        {/* Call to Action Section (Matching /development/mobile-app-development) */}
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

          <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <FloatingElement>
                <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
                  Ready to Strengthen Your
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white">
                    Local Search Visibility?
                  </span>
                </h2>
              </FloatingElement>

              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
                If you'd like to talk through your Google Business Profile, your website's local signals, or your overall local search strategy in Dubai, we're glad to walk through it with you.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/contact">
                  <motion.button
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-teal-700 font-semibold rounded-full shadow-xl hover:shadow-2xl hover:bg-gray-50 transition-all duration-300 text-sm sm:text-base cursor-pointer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get a Local SEO Consultation
                    <Sparkles className="inline-block ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.button>
                </Link>
                <Link to="/contact">
                  <motion.button
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 text-sm sm:text-base cursor-pointer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Talk to DigLip7 About Your Dubai Local SEO Strategy
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default DubaiLocalSEO;
