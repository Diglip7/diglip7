import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../../../../components/SEO";
import {
  Building,
  Building2,
  Home,
  Compass,
  TrendingUp,
  Search,
  MapPin,
  FileText,
  Settings,
  Layers,
  Globe,
  Users,
  Briefcase,
  Key,
  ShieldCheck,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Sparkles,
  FolderTree,
  Scale,
  Award,
} from "lucide-react";

// 7 Required Images strictly matching Section 10 Image SEO specification
const heroImgSrc = "/src/images/re-estate-seo-dubai-overview.jpg";
const keywordImgSrc = "/src/images/property-keyword-research-dubai.jpg";
const listingImgSrc = "/src/images/property-listing-seo-optimization.jpg";
const localImgSrc = "/src/images/local-seo-real-estate-dubai.jpg";
const structureImgSrc = "/src/images/real-estate-website-seo-structure.jpg";
const portalImgSrc = "/src/images/property-portal-technical-seo.jpg";
const reportingImgSrc = "/src/images/real-estate-seo-reporting-dashboard.jpg";

// Simple Image Slot with clean placeholder and responsive vertical expansion
const SEOImageSlot = ({
  src,
  alt,
  width = 800,
  height = 600,
  aspect = "aspect-[4/3]",
  className = "",
  priority = false,
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
          onError={() => setHasError(true)}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="p-8 text-center text-sm font-medium text-teal-900/60 select-none flex flex-col items-center justify-center gap-3 w-full h-full bg-gradient-to-b from-white/90 to-teal-50/50">
          <div className="w-12 h-12 rounded-full bg-teal-100/70 text-teal-700 flex items-center justify-center shadow-xs">
            <Building2 className="w-6 h-6" />
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
  { label: "Real Estate SEO Dubai", href: "/uae/dubai/real-estate-seo" },
];

const whatIsComponents = [
  {
    title: "Property keyword research",
    desc: "how people phrase buy, rent, sell and investment queries, and which carry genuine demand.",
  },
  {
    title: "Location-based targeting",
    desc: "mapping content to neighborhoods and buildings people search by name, not just city-level terms.",
  },
  {
    title: "Property listing optimization",
    desc: "unique, useful content on listings instead of repeated boilerplate.",
  },
  {
    title: "On-page SEO",
    desc: "titles, headings, internal links and copy that reflect what a page offers.",
  },
  {
    title: "Technical SEO",
    desc: "crawlability and indexation, which matters more here given how many URLs filters and listings generate.",
  },
  {
    title: "Local SEO",
    desc: "Google Business Profile management and local landing pages.",
  },
  {
    title: "Content SEO",
    desc: "guides and FAQs that answer real questions from buyers, sellers, tenants and investors.",
  },
  {
    title: "Internal linking and structured data",
    desc: "connecting related pages and clarifying what each represents.",
  },
  {
    title: "Website UX and conversion paths",
    desc: "visibility without a usable site rarely turns into enquiries.",
  },
];

const realEstateBusinesses = [
  {
    icon: Building2,
    title: "Real Estate Agencies",
    description:
      "Agencies typically need general service pages, community pages that go deep on areas they operate in, and agent profile pages that support trust. Local SEO matters here too, since buyers and tenants often search by agency name alongside a location.",
  },
  {
    icon: Briefcase,
    title: "Real Estate Brokers",
    description:
      "Independent brokers rely more on individual profile pages, defined service areas and transaction-focused landing pages. Local visibility matters disproportionately, since brokers usually compete against far larger agency sites, and their advantage is depth in fewer communities rather than citywide breadth.",
  },
  {
    icon: Building,
    title: "Property Developers",
    description:
      "Developer sites are structured around projects and off-plan launches. Development, project, community and property-type pages need to work together, and visibility for a specific project name often matters as much as generic buy-intent terms once a launch is underway.",
  },
  {
    icon: TrendingUp,
    title: "Property Investment Businesses",
    description:
      "Investment-focused businesses lean on informational content — area comparisons, yield discussion, market context — because their audience is researching before it's ready to transact. That content still has to map to genuine search intent rather than exist purely to sit on the site.",
  },
  {
    icon: Globe,
    title: "Property Portals",
    description:
      "Portals operate at a different scale, where listing and category architecture, filter combinations and duplicate URL control become central concerns alongside crawl budget. Treating every filter combination as an indexable page is one of the more common ways portals damage their own visibility.",
  },
];

const realEstateServices = [
  {
    icon: Search,
    title: "Real Estate Keyword Research",
    description:
      "Property keyword research maps how people search across four dimensions: intent (buy, rent, sell, invest), location, property type, and modifiers like bedroom count or off-plan versus ready. Real Estate Keyword Research Dubai work also watches for keyword cannibalization and long-tail combinations that add up to significant demand, mapping each query cluster to one specific page.",
  },
  {
    icon: Globe,
    title: "Real Estate Website SEO",
    description:
      "This covers on-page fundamentals: title tags and meta descriptions that reflect what each page offers, a logical heading structure, clean URLs, and page-specific content for service, property, location and agent pages, alongside internal linking and canonical tags. Real Estate Website SEO Dubai work is largely about getting existing pages right before adding new ones.",
  },
  {
    icon: Building2,
    title: "Property SEO Dubai",
    description:
      "Property-level SEO gives comparable listings genuinely unique content rather than duplicated boilerplate, structures location pages around real search intent, and makes deliberate calls about which combinations deserve their own page. Automatically generated pages need particular care, since indexing every combination regardless of demand dilutes authority rather than building it.",
  },
  {
    icon: MapPin,
    title: "Local SEO for Real Estate in Dubai",
    description:
      "Local SEO covers Google Business Profile optimization, consistent business information across the web, local landing pages, citations and review management. These signals can support visibility in local results, but don't guarantee a specific Google Maps position — that depends on many factors outside any one website's control.",
  },
  {
    icon: FileText,
    title: "Real Estate Content SEO",
    description:
      "Content work centers on genuinely useful material: community guides, buying, selling and rental guides, investment content and FAQs. The test isn't whether a piece fits a keyword — it's whether it would be worth publishing if the keyword didn't exist.",
  },
  {
    icon: Settings,
    title: "Technical SEO for Real Estate Websites",
    description:
      "Large property websites depend on technical fundamentals: crawlability, indexability, a maintained sitemap, correct robots.txt, canonical tags, and an approach to faceted navigation so filter URLs don't multiply uncontrolled. Redirects, page speed, Core Web Vitals and mobile usability all matter more here given how many pages a property site tends to generate.",
  },
  {
    icon: Layers,
    title: "Property Portal SEO Dubai",
    description:
      "Portals need all of the above applied at scale, plus deliberate listing, category and location-hierarchy architecture, with filters managed so they don't create endless near-duplicate pages. Not every filtered page should be indexed — that rests on genuine search demand, uniqueness and long-term technical sustainability.",
  },
  {
    icon: Compass,
    title: "Real Estate Local Landing Pages",
    description:
      "Location pages built around communities and property types are useful when each contains real, distinct information — pricing context, community character, nearby amenities. What they shouldn't become is hundreds of near-identical pages generated purely for keyword variations.",
  },
];

const searchIntents = [
  {
    type: "Buy Intent",
    query: '"Buy apartment in Dubai"',
    mapping: "is best served by pages focused on available properties and the buying process, not a generic properties list.",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    type: "Rent Intent",
    query: '"Apartments for rent in Dubai"',
    mapping: "typically needs to address a shorter decision timeline than a buy-intent page for the same area.",
    badgeColor: "bg-teal-50 text-teal-700 border-teal-200",
  },
  {
    type: "Sell Intent",
    query: '"Property valuation Dubai"',
    mapping: "is better served by a valuation-focused page explaining process than by a listings page.",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
  },
  {
    type: "Investment Intent",
    query: '"Best areas for property investment"',
    mapping: "calls for comparison and context-driven content rather than a property list.",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    type: "Location Intent",
    query: '"Apartments in Dubai Marina"',
    mapping: "is generally best served by a community page combining local context with relevant listings.",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    type: "Commercial Intent",
    query: '"Real estate agency Dubai"',
    mapping: "is usually about finding a business to work with, so a service page tends to perform better than a listing.",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
  },
];

const processSteps = [
  {
    id: "01",
    title: "Website and Technical SEO Audit",
    description: "Reviewing crawlability, indexation, page templates, canonicals, the sitemap, redirects and technical errors limiting the site.",
    icon: Search,
  },
  {
    id: "02",
    title: "Real Estate Keyword Research",
    description: "Mapping services, property types, locations and the search intent behind each, so later work is built on genuine demand.",
    icon: Compass,
  },
  {
    id: "03",
    title: "Search Intent & Competitor Analysis",
    description: "Determining the correct page type for each important query cluster.",
    icon: TrendingUp,
  },
  {
    id: "04",
    title: "Website Architecture & Internal Linking",
    description: "Improving the relationships between services, properties, locations, communities and content.",
    icon: FolderTree,
  },
  {
    id: "05",
    title: "On-Page & Property Page Optimization",
    description: "Improving titles, headings, copy, URLs, images and page structure.",
    icon: FileText,
  },
  {
    id: "06",
    title: "Local SEO & Content Optimization",
    description: "Improving local business information, location relevance and local landing pages.",
    icon: MapPin,
  },
  {
    id: "07",
    title: "Measurement & Ongoing Improvement",
    description: "Tracking performance and prioritizing future work based on evidence.",
    icon: BarChart3,
  },
];

const performanceMetrics = [
  "Organic impressions and clicks",
  "Non-branded organic traffic",
  "Keyword visibility for property and location pages",
  "Organic enquiries, contact form submissions and calls",
  "Consultation requests and Google Business Profile actions",
  "Indexed page counts and overall technical SEO health",
];

const seoVsPaid = [
  {
    seo: "Builds organic search visibility",
    paid: "Provides paid search visibility",
  },
  {
    seo: "Requires ongoing optimization",
    paid: "Requires an advertising budget",
  },
  {
    seo: "Can support longer-term organic growth",
    paid: "Can provide immediate paid traffic while campaigns run",
  },
  {
    seo: "Content and technical improvements can keep providing value over time",
    paid: "Performance depends on budget, targeting, campaign setup and auction conditions",
  },
];

const commonMistakes = [
  "Duplicate property listings republished with no unique content",
  "Thin property pages repeating the same boilerplate description",
  "Duplicate location pages built for near-identical keyword variations",
  "Indexing every filter URL a portal can generate",
  "Keyword stuffing that hurts readability without improving relevance",
  "Poor internal linking that leaves related pages disconnected",
  "Missing community pages, leaving location-specific demand unanswered",
  "Weak local signals, including inconsistent business information across the web",
  "Duplicate title tags across many similar pages",
  "Poor image optimization, including missing alt text and oversized files",
  "Slow-loading websites and weak mobile usability",
  "Pages created purely for keyword variations rather than genuine intent",
  "Outdated property or availability information left live",
];

const timelineFactors = [
  "The domain's history and existing authority",
  "The level of competition for priority searches",
  "The size of the website and number of pages",
  "The site's current technical condition",
  "Existing content quality and depth",
  "How the site is currently architected",
  "The strength of the existing backlink profile",
  "Genuine search demand for the target queries",
  "How quickly recommended changes are implemented",
];

const faqs = [
  {
    q: "What is Real Estate SEO Dubai?",
    a: "Optimizing property websites — agency sites, developer platforms, broker profiles and portals — so they appear for buy, rent, sell and investment queries across Dubai's communities, combining keyword research, on-page and technical optimization, local SEO and content.",
  },
  {
    q: "Why do real estate companies in Dubai need SEO?",
    a: "Most property research starts with a search engine, and search behaviour here is highly location-specific. SEO helps a website appear for the exact community and property-type combinations buyers search for, rather than relying solely on paid traffic.",
  },
  {
    q: "What does a real estate SEO agency in Dubai do?",
    a: "Typically handles keyword research, technical audits, on-page optimization, local SEO and performance measurement. Scope depends on the business — an agency, broker, developer and portal each need a different mix.",
  },
  {
    q: "How does real estate SEO differ from regular SEO?",
    a: "It accounts for several distinct intents — buying, renting, selling, investing — within one website, plus location specificity and, for portals, technical complexity around filters and duplicate URLs.",
  },
  {
    q: "Can SEO help real estate agencies attract local searches?",
    a: "Yes. Local SEO — profile optimization, consistent business information and local landing pages — can support visibility for area-specific searches, though it doesn't guarantee a map-pack position.",
  },
  {
    q: "What is Property SEO Dubai?",
    a: "Optimization focused on property and listing pages specifically — unique content, location structuring around real intent, and deciding which pages are worth indexing.",
  },
  {
    q: "How does local SEO help real estate businesses?",
    a: "It strengthens signals search engines use for local searches — information consistency, profile completeness and reviews — as one part of visibility, not a guaranteed ranking.",
  },
  {
    q: "What is Property Portal SEO?",
    a: "Addresses technical challenges large listing sites face — managing filter and category URLs, controlling duplicate content, and deciding which combinations deserve to be indexed.",
  },
  {
    q: "How do you handle duplicate property pages?",
    a: "Typically through canonical tags, consolidation where listings overlap, and giving comparable properties distinct content rather than repeated boilerplate.",
  },
  {
    q: "How long does real estate SEO take?",
    a: "No fixed timeline — it depends on the site's technical condition, existing authority, competition and how quickly changes are implemented. It's ongoing rather than a project with a guaranteed end date.",
  },
  {
    q: "How do you measure real estate SEO performance?",
    a: "Through organic impressions and clicks, keyword visibility, organic enquiries, indexed page counts and technical health, reviewed regularly rather than judged on one metric.",
  },
  {
    q: "Can SEO and Google Ads be used together?",
    a: "Yes. Many businesses run both — ads for immediate visibility, SEO for durable organic visibility over time — complementing rather than competing for the same budget.",
  },
  {
    q: "What should I look for when choosing a real estate SEO agency?",
    a: "A clear process, transparency about what SEO can't guarantee, real-estate-relevant experience, and a willingness to explain their approach to duplicate URLs rather than vague ranking promises.",
  },
];

const internalLinks = [
  { name: "UAE SEO Services", url: "/uae/seo-services" },
  { name: "Dubai SEO Services", url: "/uae/dubai/seo-services" },
  { name: "SEO Services", url: "/digital-market/seoservices" },
  { name: "Local SEO Dubai", url: "/uae/dubai/local-seo" },
  { name: "E-commerce SEO Dubai", url: "/uae/dubai/ecommerce-seo" },
  { name: "PPC Advertising Dubai", url: "/digital-market/PPC-Advertising" },
  { name: "Content Marketing Dubai", url: "/digital-market/content-marketing" },
  { name: "Social Media Marketing Dubai", url: "/digital-market/social-media-marketing" },
];

function DubaiRealEstateSEO() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const pageUrl = "https://diglip7.com/uae/dubai/real-estate-seo/";

  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Real Estate SEO Dubai | Property SEO Services | DigLip7",
        description:
          "Grow your property website's organic visibility with Real Estate SEO Dubai services from DigLip7. SEO for agencies, brokers, developers and property websites.",
        inLanguage: "en-AE",
        isPartOf: { "@id": "https://diglip7.com/#website" },
        about: { "@id": `${pageUrl}#service` },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Real Estate SEO Services Dubai",
        serviceType: "Real Estate Search Engine Optimization",
        provider: { "@id": "https://diglip7.com/#organization" },
        areaServed: {
          "@type": "City",
          name: "Dubai",
        },
        audience: {
          "@type": "Audience",
          audienceType:
            "Real estate agencies, brokers, property developers, property investment businesses and property portals",
        },
        url: pageUrl,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://diglip7.com/" },
          { "@type": "ListItem", position: 2, name: "UAE", item: "https://diglip7.com/uae/" },
          { "@type": "ListItem", position: 3, name: "Dubai", item: "https://diglip7.com/uae/dubai/" },
          { "@type": "ListItem", position: 4, name: "Real Estate SEO Dubai", item: pageUrl },
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
        title="Real Estate SEO Dubai | Property SEO Services | DigLip7"
        description="Grow your property website's organic visibility with Real Estate SEO Dubai services from DigLip7. SEO for agencies, brokers, developers and property websites."
        canonical={pageUrl}
        ogType="website"
        ogImage="https://diglip7.com/images/real-estate-seo-dubai.jpg"
        ogImageAlt="Real estate SEO services for property companies in Dubai"
        ogDescription="Grow your property website's organic visibility with Real Estate SEO Dubai services from DigLip7. SEO for agencies, brokers, developers and property websites."
        twitterDescription="Real Estate SEO services for property companies, agencies, brokers and developers in Dubai."
        keywords="Real Estate SEO Dubai, Real Estate SEO Services Dubai, Real Estate SEO Agency in Dubai, Real Estate SEO Company Dubai, Property SEO Dubai, Real Estate Website SEO Dubai, Property Website SEO Dubai, Real Estate Marketing SEO Dubai, Local SEO for Real Estate Dubai, Real Estate Keyword Research Dubai, Property Portal SEO Dubai"
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
              <span className="text-gray-900">Real Estate SEO Dubai </span>
              <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                for Property Companies, Agencies & Developers
              </span>
            </h1>

            {/* Direct Answer */}
            <p className="text-gray-700 text-sm sm:text-base lg:text-lg mt-5 mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <span className="font-semibold text-blue-700">Real Estate SEO Dubai</span> is the practice of optimizing property websites — agency sites, developer platforms, broker profiles and listing portals — so they appear in relevant search results across Dubai's communities and property types. It covers keyword research, on-page and technical optimization, local search visibility, and content built around how buyers, tenants, sellers and investors actually search, with the goal of building sustainable organic visibility over time.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
              <Link to="/contact" className="inline-block">
                <motion.button
                  className="group px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-teal-700 to-teal-900 text-white text-base font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Request an SEO Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <Link to="/contact" className="inline-block">
                <motion.button
                  className="px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-teal-700 border-2 border-teal-700 text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Discuss Your Property Website
                </motion.button>
              </Link>
            </div>
          </div>

          {/* Right Section - 3D Hero Image */}
          <motion.div
            className="w-full lg:w-[42%] flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card3D className="w-full max-w-md lg:max-w-none">
              <SEOImageSlot
                src={heroImgSrc}
                alt="Real estate SEO services for property companies in Dubai"
                width={800}
                height={600}
                priority={true}
                aspect="aspect-auto h-[480px] lg:h-[580px]"
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

      {/* Section 1: Overview & Search Dynamics (Full-Width bg-white) */}
      <section className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-10 lg:gap-14">
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <Card3D className="w-full h-full flex flex-col justify-center">
              <SEOImageSlot
                src={keywordImgSrc}
                filename="property-keyword-research-dubai.jpg"
                alt="Real estate keyword research strategy for Dubai properties"
                width={800}
                height={600}
                aspect="h-full min-h-[440px] lg:min-h-[520px] w-full"
                className="h-full shadow-2xl"
              />
            </Card3D>
          </div>

          <div className="flex-1 text-center md:text-left flex flex-col justify-center">
            <FloatingElement>
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-600 mb-6">
                Understanding Dubai Real Estate Search Dynamics
              </div>
            </FloatingElement>
            <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base">
              Dubai's property market moves across dozens of communities and buyer profiles at once, and most of that activity starts with a search box. Someone comparing apartments in <span className="text-teal-700 font-semibold">Dubai Marina</span> searches differently than someone buying a villa in <span className="text-teal-700 font-semibold">Arabian Ranches</span>, and an investor scanning yields in <span className="text-teal-700 font-semibold">JVC</span> types very different queries than a tenant hunting for a two-bedroom near a specific school. That range of intent is why real estate SEO Dubai work looks different from SEO in most other industries — the same website often has to serve buyers, renters, sellers and investors at once, sometimes on the same page.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base">
              Search behaviour here is heavily location-specific: people search by community, by building, and increasingly by property type combined with a neighborhood. A generic "properties for sale in Dubai" page rarely satisfies any of these well, which is why community pages matter so much to a broader <Link to="/uae/dubai/seo-services" className="text-teal-800 font-semibold hover:underline">Dubai SEO Services</Link> and <Link to="/digital-market/seoservices" className="text-teal-800 font-semibold hover:underline">SEO Services</Link> strategy.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base">
              Technical SEO carries extra weight too, since property websites are often large and filter-heavy, generating URLs faster than a small business site ever would. Without a plan for indexation and crawl budget, that scale works against a site rather than for it — which is part of why <Link to="/uae/seo-services" className="text-teal-700 font-semibold hover:underline">UAE SEO Services</Link> and technical SEO tend to sit side by side in a real strategy.
            </p>
            <p className="text-teal-900 font-medium text-sm sm:text-base italic">
              This page walks through what real estate SEO actually involves for Dubai property businesses — how it's researched, structured, built and measured.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: What Is Real Estate SEO? (Full-Width bg-gray-50) */}
      <section className="w-full bg-gray-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 border-y border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-stretch gap-10 lg:gap-14">
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <Card3D className="w-full h-full flex flex-col justify-center">
              <SEOImageSlot
                src={listingImgSrc}
                filename="property-listing-seo-optimization.jpg"
                alt="Property listing SEO optimization"
                width={800}
                height={600}
                aspect="h-full min-h-[560px] lg:min-h-[680px] w-full"
                className="h-full shadow-2xl"
              />
            </Card3D>
          </div>

          <div className="flex-1 text-center md:text-left flex flex-col justify-center">
            <FloatingElement>
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-600 mb-6">
                What Is Real Estate SEO?
              </h2>
            </FloatingElement>
            <div className="bg-teal-50/70 border-l-4 border-teal-600 p-5 rounded-2xl mb-4 text-left shadow-sm">
              <p className="text-teal-950 text-base sm:text-lg font-medium leading-relaxed">
                <strong className="text-teal-800">Core discipline:</strong> Real estate SEO applies search engine optimization to property websites — agency sites, developer platforms, broker profiles and listing portals — with the goal of getting the right pages in front of the right searchers. In practice that means several parts working together:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left mb-6">
              {whatIsComponents.map((item, idx) => (
                <div key={idx} className="p-3 bg-white rounded-xl border border-gray-100 shadow-xs">
                  <span className="font-semibold text-teal-800 text-sm block mb-0.5">• {item.title}</span>
                  <span className="text-gray-600 text-xs leading-relaxed">{item.desc}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              What sets real estate SEO apart is the range of intent inside one website. A single domain might serve someone buying a family villa, someone renting a studio, a seller wanting a valuation, and an investor comparing yields — sometimes within the same architecture. Developers add project content, agencies need location pages, and commercial searches weigh specification over lifestyle. Real estate SEO Dubai work has to account for all of it rather than one template for every page.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Why Real Estate SEO Matters in Dubai (Full-Width bg-white) */}
      <section className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-10 lg:gap-14">
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <Card3D className="w-full h-full flex flex-col justify-center">
              <SEOImageSlot
                src={localImgSrc}
                filename="local-seo-real-estate-dubai.jpg"
                alt="Local SEO strategy for a Dubai real estate agency"
                width={800}
                height={600}
                aspect="h-full min-h-[420px] lg:min-h-[500px] w-full"
                className="h-full shadow-2xl"
              />
            </Card3D>
          </div>

          <div className="flex-1 text-center md:text-left">
            <FloatingElement>
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-600 mb-6">
                Why Real Estate SEO Matters in Dubai
              </h2>
            </FloatingElement>
            <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base">
              Dubai's property search behaviour is unusually granular. People rarely search "apartments Dubai" with a specific need in mind — far more common is a community name paired with a property type or bedroom count, which is why a page built around <span className="text-teal-700 font-semibold">"apartments for rent in JVC"</span> answers a far more precise question than a generic properties page.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base">
              Intent varies just as much as location. A buyer is weighing ownership and community fit; a renter is working against a shorter timeline; a seller wants a sense of value; an investor is comparing areas and yields, sometimes without ever viewing a property in person. Developers and agencies are often searched by name once a shortlist has formed — a different query to the discovery-stage search that built it.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Mobile and local search compound the effect, since a large share of research happens on a phone and dedicated <Link to="/uae/dubai/local-seo" className="text-teal-800 font-semibold hover:underline">Local SEO Dubai</Link> on Google Maps carries real weight for agencies competing on "near me" searches. Pages that are thin or poorly structured technically tend to lose that competition regardless of the property itself.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Real Estate Businesses We Support (Full-Width bg-gray-50) */}
      <section className="w-full bg-gray-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <FloatingElement>
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-600 mb-4">
                Real Estate Businesses We Support
              </h2>
            </FloatingElement>
            <p className="text-gray-600 text-sm sm:text-base">
              Real estate SEO looks different depending on the type of business behind the website:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {realEstateBusinesses.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card3D intensity={32} className="h-full">
                  <div className="bg-white rounded-2xl p-6 sm:p-8 h-full border border-gray-100 shadow-md hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-300 flex flex-col justify-between">
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

      {/* Section 5: Real Estate SEO Services in Dubai (Full-Width bg-white) */}
      <section className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <div className="max-w-4xl mx-auto mb-12">
            <FloatingElement>
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-600 mb-4">
                Real Estate SEO Services in Dubai
              </h2>
            </FloatingElement>
            <p className="text-gray-600 text-sm sm:text-base">
              Real estate SEO Services in Dubai typically break down into the following areas of work.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {realEstateServices.map((service, index) => (
              <Card3D key={service.title} intensity={28} className="h-full">
                <div className="bg-gray-50 rounded-2xl shadow-md p-6 hover:shadow-2xl hover:border-teal-400 transition-all duration-300 border border-gray-100 flex flex-col justify-between h-full transform hover:-translate-y-4">
                  <div>
                    <div className="flex justify-center mb-4">
                      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-teal-50 text-teal-700">
                        <service.icon className="w-8 h-8" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-base mb-2 text-center">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Real Estate Website Structure That Supports SEO (Full-Width bg-gray-50) */}
      <section className="w-full bg-gray-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 border-y border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-10 lg:gap-14">
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <Card3D className="w-full h-full flex flex-col justify-center">
              <SEOImageSlot
                src={structureImgSrc}
                filename="real-estate-website-seo-structure.jpg"
                alt="SEO structure for a Dubai real estate website"
                width={800}
                height={600}
                aspect="h-full min-h-[460px] lg:min-h-[560px] w-full"
                className="h-full shadow-2xl"
              />
            </Card3D>
          </div>

          <div className="flex-1 text-center md:text-left flex flex-col justify-center">
            <FloatingElement>
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-600 mb-4">
                Real Estate Website Structure That Supports SEO
              </h2>
            </FloatingElement>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-4">
              A well-planned real estate website usually groups content into a few clear categories: services, property types, locations, communities, agents and guides. Below is an illustrative example — adapt it to how the specific business actually operates:
            </p>
            {/* Architecture tree visual */}
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-200 font-mono text-xs sm:text-sm text-gray-800 leading-relaxed text-left shadow-sm mb-4">
              <div className="font-bold text-teal-800 flex items-center gap-1.5 mb-2">
                <FolderTree className="w-4 h-4" /> Real Estate Website
              </div>
              <div className="pl-4 border-l-2 border-teal-200 space-y-1">
                <div>├── About</div>
                <div>
                  ├── <span className="font-semibold text-teal-900">Services</span>
                  <div className="pl-4 border-l border-teal-100">
                    <div>├── Property Buying</div>
                    <div>├── Property Selling</div>
                    <div>├── Property Rental</div>
                    <div>└── Property Management</div>
                  </div>
                </div>
                <div>
                  ├── <span className="font-semibold text-teal-900">Properties</span>
                  <div className="pl-4 border-l border-teal-100">
                    <div>├── Apartments</div>
                    <div>├── Villas</div>
                    <div>├── Offices</div>
                    <div>└── Commercial Properties</div>
                  </div>
                </div>
                <div>
                  ├── <span className="font-semibold text-teal-900">Locations</span>
                  <div className="pl-4 border-l border-teal-100">
                    <div>├── Dubai Marina</div>
                    <div>├── Downtown Dubai</div>
                    <div>├── JVC</div>
                    <div>└── Other Relevant Areas</div>
                  </div>
                </div>
                <div>├── Communities</div>
                <div>├── Agents</div>
                <div>├── Blog / Guides</div>
                <div>└── Contact</div>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              This kind of hierarchy helps in concrete ways: parent-child relationships between locations and property types make pages easier to understand, breadcrumbs support both navigation and crawlability, and internal linking that follows the same logic spreads authority through the site rather than relying on an arbitrary link structure. It also reduces duplicate URLs, since queries that already have a home in the architecture are less likely to spawn competing pages later.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7: Targeting Different Real Estate Search Intents (Full-Width bg-white) */}
      <section className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <FloatingElement>
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-600 mb-4">
                Targeting Different Real Estate Search Intents
              </h2>
            </FloatingElement>
            <p className="text-gray-700 text-sm sm:text-base">
              Real estate searches fall into a handful of intent categories, and mapping the right page type to each is one of the more consequential decisions in a real estate SEO strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {searchIntents.map((item) => (
              <Card3D key={item.type} intensity={24} className="h-full">
                <div className="bg-gray-50 rounded-2xl p-6 shadow-md border border-gray-100 hover:border-teal-400 hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 border ${item.badgeColor}`}>
                      Search Intent
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{item.type}</h3>
                    <p className="text-teal-800 font-semibold text-xs sm:text-sm mb-2 font-mono">{item.query}</p>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {item.mapping}
                    </p>
                  </div>
                </div>
              </Card3D>
            ))}
          </div>

          <p className="text-center text-gray-700 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Getting this mapping wrong is a common reason well-optimized pages still underperform — a page that ranks but doesn't match what the searcher wanted rarely converts.
          </p>
        </div>
      </section>

      {/* Section 8: Real Estate Search Competitor Analysis (Full-Width bg-gray-50) */}
      <section className="w-full bg-gray-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 border-y border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-stretch gap-10 lg:gap-14">
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <Card3D className="w-full h-full flex flex-col justify-center">
              <SEOImageSlot
                src={portalImgSrc}
                filename="property-portal-technical-seo.jpg"
                alt="Technical SEO architecture for a property portal"
                width={800}
                height={600}
                aspect="h-full min-h-[420px] lg:min-h-[500px] w-full"
                className="h-full shadow-2xl"
              />
            </Card3D>
          </div>

          <div className="flex-1 text-center md:text-left flex flex-col justify-center">
            <FloatingElement>
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-600 mb-6">
                Real Estate Search Competitor Analysis
              </h2>
            </FloatingElement>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-4">
              Competitor analysis reviews how competing agencies, developers and portals structure their sites and where they're already winning visibility — search results for priority queries, page structures, content gaps, keyword opportunities and technical health.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              This informs where a site should focus first; it doesn't guarantee a specific competitive outcome.
            </p>
          </div>
        </div>
      </section>

      {/* Section 9: Our Real Estate SEO Process (Full-Width bg-white) */}
      <section className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <div className="max-w-4xl mx-auto mb-12">
            <FloatingElement>
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-600">
                Our Real Estate SEO Process
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
                  whileHover={{ y: -12, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 260, damping: 16 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center cursor-pointer group"
                >
                  <div className="relative flex items-center justify-center w-16 h-16 rounded-full border-4 border-teal-100 bg-white shadow-md mb-4 group-hover:scale-110 group-hover:border-teal-500 group-hover:shadow-2xl transition-all duration-300">
                    <step.icon className="w-7 h-7 text-teal-700" />
                    <span className="absolute -top-2 -right-2 bg-gradient-to-r from-teal-700 to-teal-900 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full shadow">
                      {step.id}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-teal-700 transition-colors">{step.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: How Real Estate SEO Performance Is Measured (Full-Width bg-gray-50) */}
      <section className="w-full bg-gray-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 border-y border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-10 lg:gap-14">
          <div className="flex-1 text-center md:text-left flex flex-col justify-center">
            <FloatingElement>
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-600 mb-6">
                How Real Estate SEO Performance Is Measured
              </h2>
            </FloatingElement>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Real estate SEO performance is generally measured through a combination of visibility, engagement and enquiry-based metrics, including:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-left">
              {performanceMetrics.map((metric, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span className="text-gray-800 text-xs sm:text-sm font-medium">{metric}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed italic">
              Rankings and traffic fluctuate, and performance depends on competition, search demand, website quality, content, existing authority, technical implementation and how quickly changes are made. No agency can responsibly guarantee a specific ranking, traffic figure or number of leads.
            </p>
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <Card3D className="w-full h-full flex flex-col justify-center">
              <SEOImageSlot
                src={reportingImgSrc}
                filename="real-estate-seo-reporting-dashboard.jpg"
                alt="Real estate SEO reporting dashboard"
                width={800}
                height={600}
                aspect="h-full min-h-[440px] lg:min-h-[520px] w-full"
                className="h-full shadow-2xl"
              />
            </Card3D>
          </div>
        </div>
      </section>

      {/* Section 11: Real Estate SEO vs Paid Advertising (Full-Width bg-white) */}
      <section className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <FloatingElement>
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-600 mb-3">
                Real Estate SEO vs Paid Advertising
              </h2>
            </FloatingElement>
          </div>

          <div className="overflow-x-auto mb-6">
            <table className="w-full bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden text-left text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-teal-700 to-teal-900 text-white">
                  <th className="py-4 px-6 font-bold text-sm sm:text-base">Real Estate SEO</th>
                  <th className="py-4 px-6 font-bold text-sm sm:text-base">Paid Advertising</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {seoVsPaid.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                    <td className="py-4 px-6 font-medium text-gray-800">{row.seo}</td>
                    <td className="py-4 px-6 text-gray-700">{row.paid}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-gray-700 text-sm sm:text-base max-w-3xl mx-auto">
            Neither approach is universally better — many businesses run both together, using targeted <Link to="/digital-market/PPC-Advertising" className="text-teal-800 font-semibold hover:underline">PPC Advertising Dubai</Link> for immediate visibility while SEO builds a more durable base underneath it.
          </p>
        </div>
      </section>

      {/* Section 12: Common Real Estate SEO Mistakes (Full-Width bg-gray-50) */}
      <section className="w-full bg-gray-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <FloatingElement>
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-600 mb-3">
                Common Real Estate SEO Mistakes
              </h2>
            </FloatingElement>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
            {commonMistakes.map((mistake, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="p-4 rounded-xl border border-red-100 bg-white shadow-sm hover:shadow-xl hover:border-red-300 transition-all flex items-center gap-3 text-gray-800 text-sm font-medium cursor-pointer"
              >
                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 text-red-600 font-bold text-xs">
                  ✕
                </div>
                <span>{mistake}</span>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-gray-600 text-xs sm:text-sm italic max-w-3xl mx-auto">
            Each causes a specific problem — usability issues for visitors, crawl or indexation issues for search engines, or diluted relevance across pages that should work together.
          </p>
        </div>
      </section>

      {/* Section 13: How Long Does Real Estate SEO Take? (Full-Width bg-white) */}
      <section className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <FloatingElement>
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-600 mb-6 text-center">
              How Long Does Real Estate SEO Take?
            </h2>
          </FloatingElement>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-6 text-center max-w-3xl mx-auto">
            There's no universal timeline for real estate SEO, and any figure quoted without knowing a specific site should be treated with caution. What a project takes depends on:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-8">
            {timelineFactors.map((factor, idx) => (
              <div key={idx} className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl border border-gray-100">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span className="text-gray-700 text-xs sm:text-sm font-medium">{factor}</span>
              </div>
            ))}
          </div>
          <div className="p-4 bg-teal-50/60 rounded-2xl border border-teal-100 text-center">
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed italic max-w-3xl mx-auto">
              SEO is best understood as ongoing optimization rather than a project with a fixed end date. No responsible agency will guarantee page-one placement, a specific traffic number, a lead volume or a Google Maps ranking.
            </p>
          </div>
        </div>
      </section>

      {/* Section 14: Frequently Asked Questions (Full-Width bg-gray-50) */}
      <section className="w-full bg-gray-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 border-y border-gray-100">
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
        </div>
      </section>

      {/* Section 15: Grow Your Real Estate Search Visibility in Dubai (Full-Width Bottom CTA Banner) */}
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
                Grow Your Real Estate
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white">
                  Search Visibility in Dubai
                </span>
              </h2>
            </FloatingElement>

            <p className="text-lg sm:text-xl text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed">
              If your property website isn't showing up for the searches that matter — a specific community, a property type, or your agency's own name — a focused SEO review is usually the most useful next step. We can walk through where your site stands and what a structured approach to real estate SEO in Dubai would involve for your business.
            </p>

            <p className="text-sm sm:text-base text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Get in touch with DigLip7 to request an SEO consultation, discuss your real estate website, or ask about a technical SEO audit — with a straightforward view of what's working and where the opportunity actually is, without guaranteed-ranking promises.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <motion.button
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-teal-700 font-semibold rounded-full shadow-xl hover:shadow-2xl hover:bg-gray-50 transition-all duration-300 text-sm sm:text-base cursor-pointer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Request an SEO Consultation
                  <Sparkles className="inline-block ml-2 w-4 h-4 sm:w-5 sm:h-5 text-teal-600" />
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 text-sm sm:text-base cursor-pointer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Discuss Your Property Website
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white/80 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 text-sm sm:text-base cursor-pointer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Request a Technical SEO Audit
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 16: Suggested Internal Links (Full-Width bg-white) */}
      <section className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <FloatingElement>
            <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-600 mb-6">
              Explore Related Services & Internal Links
            </div>
          </FloatingElement>
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            {internalLinks.map((link) => (
              <Link
                key={link.name}
                to={link.url}
                className="px-5 py-2.5 rounded-full bg-gray-50 border border-teal-200 text-teal-800 text-xs sm:text-sm font-semibold hover:bg-teal-50 transition-all shadow-sm"
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

export default DubaiRealEstateSEO;
