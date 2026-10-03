import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../../../../components/SEO";
import {
  Hotel,
  Building2,
  Sparkles,
  Search,
  MapPin,
  Settings,
  Layers,
  Globe,
  Compass,
  FileText,
  CalendarCheck,
  BedDouble,
  Palmtree,
  Briefcase,
  Users,
  TrendingUp,
  CheckCircle,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  AlertTriangle,
  Clock,
  BarChart3,
  Award,
  Scale,
  FolderTree,
  Home,
  Check,
  Target,
} from "lucide-react";

// Image Paths (Strictly from Image Plan)
const heroImgSrc = "/src/images/hotel-seo-dubai-overview.jpg";
const keywordImgSrc = "/src/images/hotel-keyword-research-dubai.jpg";
const structureImgSrc = "/src/images/hotel-website-seo-structure.jpg";
const localImgSrc = "/src/images/local-seo-hotel-dubai.jpg";
const roomImgSrc = "/src/images/hotel-room-page-seo.jpg";
const technicalImgSrc = "/src/images/technical-hotel-seo.jpg";
const reportingImgSrc = "/src/images/hotel-seo-reporting-dashboard.jpg";

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
            <Hotel className="w-6 h-6" />
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

// Floating Animation Helper (matches DubaiEcommerceSEO)
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

// Breadcrumb Trail
const breadcrumbTrail = [
  { label: "Home", href: "/" },
  { label: "UAE", href: "/uae/seo-services" },
  { label: "Dubai", href: "/uae/dubai/seo-services" },
  { label: "Hotel SEO Dubai", href: "/uae/dubai/hotel-seo" },
];

// Hospitality Businesses We Support
const supportedBusinesses = [
  {
    icon: Hotel,
    title: "Hotels",
    description:
      "For standalone hotels, hotel SEO typically covers the core website pages — homepage, room pages, amenities, location page and hotel-specific services — along with local SEO and supporting content that explains what the property offers and where it's situated.",
  },
  {
    icon: Palmtree,
    title: "Resorts",
    description:
      "Resorts often have more to communicate: accommodation types, facilities, dining outlets, spa and wellness offerings, and on-site activities. Resort SEO usually involves building out destination-style content alongside the practical accommodation and facility pages, and strengthening local visibility for the surrounding area.",
  },
  {
    icon: Sparkles,
    title: "Boutique Hotels",
    description:
      "Boutique properties tend to compete on distinctiveness rather than scale. SEO for boutique hotels often centers on brand positioning, well-written location pages, room pages that reflect a property's specific character, and content that captures the experience rather than generic descriptions.",
  },
  {
    icon: Briefcase,
    title: "Business Hotels",
    description:
      "Business travelers search differently — for meeting facilities, business amenities, proximity to transport and business districts, and corporate accommodation options. Business hotel SEO usually prioritizes these intents alongside standard location and room pages.",
  },
  {
    icon: Building2,
    title: "Hotel Groups & Multi-Location Businesses",
    description:
      "Multi-property groups need a website architecture that can scale: individual pages for each hotel, consistent location targeting, strong internal linking between properties, and safeguards against duplicate content across similar pages. Technical SEO consistency becomes more important as the number of pages grows.",
  },
  {
    icon: Users,
    title: "Hospitality & Accommodation Businesses",
    description:
      "This also extends to other accommodation providers — serviced accommodation businesses and resort operators — where the same underlying principles of accurate keyword targeting, clear page structure and local visibility apply.",
  },
];

// Hotel SEO Services
const hotelServices = [
  {
    icon: Search,
    title: "Hotel Keyword Research",
    description:
      "Hotel Keyword Research Dubai starts with identifying the terms travelers actually use: location keywords tied to Dubai neighborhoods, destination keywords, room-type keywords, amenity keywords, service keywords, and travel-purpose keywords such as business or family travel. This also involves distinguishing branded from non-branded searches and checking for keyword cannibalization, where multiple pages on the same site compete for the same term. Keyword selection should always reflect the hotel's actual services, location and room types — not aspirational or unrelated terms.",
  },
  {
    icon: Globe,
    title: "Hotel Website SEO Dubai",
    description:
      "Hotel Website SEO Dubai covers the on-page fundamentals: title tags, meta descriptions, heading structure, and the core pages themselves — hotel overview, room pages, accommodation pages, location pages, amenity pages, dining and spa pages, event pages and contact pages. It also includes internal linking, image handling, clean URLs, canonical tags and indexability checks. A hotel website generally performs better in search when its structure is logical enough for both travelers and search engines to understand what the property offers and where.",
  },
  {
    icon: Hotel,
    title: "Hospitality SEO Dubai",
    description:
      "Hospitality SEO Dubai brings together hotel and resort websites, accommodation pages, destination content, service and amenity pages, local search, and the technical foundation underneath all of it. The goal is to connect a property's actual offerings with genuine traveler search intent, without resorting to misleading or overly promotional pages that don't reflect what's actually available on-site.",
  },
  {
    icon: MapPin,
    title: "Local SEO for Hotels",
    description:
      "Local SEO for Hotels Dubai focuses on Google Business Profile accuracy, consistent business name/address/phone information, correct hotel categories, service details, photos and location pages. This work can support discovery in local and Google Maps-related searches, though it does not guarantee any specific Maps position — local search results depend on multiple factors, including proximity, relevance and user behavior signals.",
  },
  {
    icon: FileText,
    title: "Hotel Content SEO",
    description:
      "Hotel Content SEO covers destination and neighborhood guides, room and accommodation guides, amenity content, business and family travel guides, dining and spa information, nearby attractions, transportation details and FAQs. This content needs to provide genuine, property-specific value. Generic, AI-written travel articles with no real connection to the hotel's actual location or services tend to underperform and are best avoided.",
  },
  {
    icon: CalendarCheck,
    title: "Hotel Booking Website SEO",
    description:
      "Hotel Booking Website SEO looks at the booking journey itself — room pages, availability pages, booking calls-to-action, page speed, mobile usability and internal linking through to the booking step. Because booking functionality often runs through third-party platforms, SEO work also needs to account for how those systems generate URLs and whether those pages should be indexed at all. SEO can support the discoverability of pages leading up to a booking, but it cannot guarantee that a booking is completed.",
  },
  {
    icon: Settings,
    title: "Technical SEO for Hotel Websites",
    description:
      "Technical SEO for Hotel Websites covers crawlability, indexability, XML sitemaps, robots.txt configuration, canonical tags, duplicate URL handling (particularly around booking and tracking parameters), JavaScript rendering, redirects, broken links, page speed, Core Web Vitals, mobile usability, image compression and structured data. This becomes especially important for larger hotel websites and multi-property groups, where duplicate or thin pages can accumulate quickly if left unmanaged.",
  },
  {
    icon: Palmtree,
    title: "Resort SEO Dubai",
    description:
      "Resort SEO Dubai applies the same principles to resort-specific architecture: accommodation and villa/suite pages, facilities, activities, dining, spa and wellness, event spaces, family experiences, and destination pages. Pages should only be created for facilities and services the resort genuinely offers.",
  },
  {
    icon: Compass,
    title: "Hotel Location Page SEO",
    description:
      "Well-built location pages can target relevant Dubai areas, neighborhoods, nearby attractions, business districts, beaches, airports and transportation hubs — but only where there's a genuine reason for the page to exist and enough unique content to justify it. Creating large volumes of near-identical \"hotel near X\" pages without real differentiation is generally counterproductive and can create duplicate-content issues rather than helping visibility.",
  },
];

// Search Intents
const searchIntents = [
  {
    type: "Accommodation Intent",
    query: '"hotels in Dubai," "hotel in Dubai Marina"',
    intent: "These reflect active accommodation research.",
  },
  {
    type: "Location Intent",
    query: '"hotels near Downtown Dubai," "hotels near Dubai Marina"',
    intent: "Travelers searching around a specific neighborhood or landmark.",
  },
  {
    type: "Room Intent",
    query: '"suite hotel Dubai," "family rooms in Dubai"',
    intent: "Only worth targeting when the hotel genuinely offers those room types.",
  },
  {
    type: "Amenity Intent",
    query: '"hotel with pool in Dubai," "Dubai hotel with spa"',
    intent: "Only target amenities the property actually provides.",
  },
  {
    type: "Travel-Purpose Intent",
    query: '"business hotel in Dubai," "family hotel in Dubai"',
    intent: "Targeting tailored travel needs with dedicated services.",
  },
  {
    type: "Resort Intent",
    query: '"Dubai beach resort," "resort hotel in Dubai"',
    intent: "High-intent leisure queries searching for all-inclusive or beachside stays.",
  },
  {
    type: "Destination Research Intent",
    query: '"where to stay in Dubai," "best areas to stay in Dubai"',
    intent:
      "Pages built for this intent should avoid unsupported \"best\" claims about the property itself.",
  },
  {
    type: "Event/Meeting Intent",
    query: '"Dubai hotel meeting rooms," "hotel conference venue Dubai"',
    intent: "Relevant when the property offers genuine corporate or event spaces.",
  },
];

// SEO Process Steps
const processSteps = [
  {
    step: 1,
    title: "Website & Technical SEO Audit",
    desc: "Reviewing crawlability, indexability, page structure, technical errors, speed, mobile UX and existing organic visibility.",
    icon: Search,
  },
  {
    step: 2,
    title: "Hotel Keyword Research",
    desc: "Identifying location, accommodation, room, amenity, destination and traveler-intent keywords.",
    icon: Target,
  },
  {
    step: 3,
    title: "Search Intent & Competitor Analysis",
    desc: "Reviewing search results, competitor hotel websites, page structures, content formats and local visibility.",
    icon: BarChart3,
  },
  {
    step: 4,
    title: "Website Architecture & Internal Linking",
    desc: "Developing a logical page hierarchy, room-page relationships, location structure, internal links and breadcrumbs.",
    icon: Layers,
  },
  {
    step: 5,
    title: "On-Page & Hotel Page Optimization",
    desc: "Optimizing titles, headings, content, images, URLs, internal links and metadata.",
    icon: Settings,
  },
  {
    step: 6,
    title: "Local SEO & Content Optimization",
    desc: "Improving Google Business Profile, local signals, destination content and location pages.",
    icon: MapPin,
  },
  {
    step: 7,
    title: "Measurement, Reporting & Ongoing Improvement",
    desc: "Monitoring organic visibility, search demand, engagement, organic conversions and technical health over time.",
    icon: FileText,
  },
];

// Website Structure Tree
const websiteTreeText = `Hotel Website
│
├── About the Hotel
├── Rooms & Suites
│   ├── Standard Room
│   ├── Deluxe Room
│   ├── Suite
│   └── Other Actual Room Types
│
├── Hotel Facilities
│   ├── Swimming Pool
│   ├── Fitness Centre
│   ├── Spa
│   └── Other Actual Facilities
│
├── Dining
│   ├── Restaurant
│   ├── Café
│   └── Other Dining Options
│
├── Meetings & Events
├── Offers
├── Location
├── Nearby Attractions
├── Dubai Travel Guide
├── Gallery
├── Contact
└── Book Now`;

// Common Mistakes
const commonMistakes = [
  "Duplicate room pages and thin accommodation pages",
  "Duplicate location pages with little unique value",
  "Keyword stuffing and over-optimized hotel descriptions",
  "Missing or inconsistent location information",
  "Weak internal linking between related pages",
  "Missing room-specific content",
  "Poor image optimization and large uncompressed hotel images",
  "Slow-loading websites and poor mobile UX",
  "Duplicate title tags and meta descriptions",
  "Poor canonical implementation",
  "Indexing unnecessary booking or tracking-parameter URLs",
  "Weak or outdated destination content",
  "Publishing pages for amenities the hotel doesn't actually offer",
  "Ignoring Google Business Profile optimization",
  "Failing to track booking-related actions",
];

// 14 Frequently Asked Questions
const faqs = [
  {
    q: "What is Hotel SEO Dubai?",
    a: "Hotel SEO Dubai is the practice of improving a Dubai hotel, resort or hospitality website's visibility in organic search results, using keyword research, technical SEO, content and local SEO aligned with how travelers search for accommodation.",
  },
  {
    q: "Why do hotels in Dubai need SEO?",
    a: "Dubai's hospitality market is competitive, and travelers search in many different ways — by location, room type, amenity and travel purpose. SEO helps a property's website become genuinely discoverable across these different search intents.",
  },
  {
    q: "What does a hotel SEO agency in Dubai do?",
    a: "A hotel SEO agency typically audits a property's website, researches relevant hotel and location keywords, optimizes on-page content and technical structure, improves local SEO signals, and tracks organic performance over time.",
  },
  {
    q: "How does hotel SEO differ from regular SEO?",
    a: "Hotel SEO has to account for a wider range of overlapping search intents — location, accommodation type, room type, amenities and travel purpose — compared to many other business types.",
  },
  {
    q: "Can SEO help hotels appear in local searches?",
    a: "Yes, local SEO work such as Google Business Profile optimization and consistent location information can support visibility in local and Maps-related searches, though it doesn't guarantee a specific Maps position.",
  },
  {
    q: "What is Hotel Website SEO Dubai?",
    a: "Hotel Website SEO Dubai refers to optimizing a hotel's own website — titles, headings, room and location pages, internal linking, images and technical structure — for organic search visibility.",
  },
  {
    q: "Can SEO improve hotel room page visibility?",
    a: "Room pages can become more visible in search when they're clearly structured, avoid duplication, and are optimized around the specific room types and features the hotel actually offers.",
  },
  {
    q: "How does local SEO help hotels in Dubai?",
    a: "Local SEO supports discovery for travelers searching by neighborhood or nearby landmark, and helps ensure a hotel's business information is accurate and consistent across Google and other local platforms.",
  },
  {
    q: "What is Hospitality SEO?",
    a: "Hospitality SEO is a broader term covering SEO for hotels, resorts, and other accommodation providers, connecting their websites and content to genuine traveler search intent.",
  },
  {
    q: "How should hotels handle duplicate room or booking pages?",
    a: "Duplicate room or booking URLs, often created by tracking or filter parameters, should generally be addressed through canonical tags or controlled indexing to avoid diluting page relevance.",
  },
  {
    q: "Should every hotel location page be indexed?",
    a: "Not necessarily. Location pages should only be indexed when they offer genuinely unique, useful content — near-identical pages targeting minor keyword variations can create duplicate-content issues instead of helping visibility.",
  },
  {
    q: "How long does hotel SEO take?",
    a: "Timelines vary based on competition, website condition, content quality and other factors. Technical fixes can happen relatively quickly, while organic visibility typically builds over an ongoing period.",
  },
  {
    q: "How do you measure hotel SEO performance?",
    a: "Performance is generally measured through organic impressions, clicks, keyword visibility, page-level visibility, enquiry and booking-related actions (where trackable), and technical health metrics like Core Web Vitals.",
  },
  {
    q: "Can hotels use SEO and Google Ads together?",
    a: "Yes. Many hotels run SEO and paid advertising alongside each other, using paid campaigns for immediate visibility while SEO builds organic visibility over time.",
  },
];

// Internal Linking Reference
const parentPages = [
  { name: "UAE SEO Services", url: "/uae/seo-services/" },
  { name: "Dubai SEO Services", url: "/uae/dubai/seo-services/" },
  { name: "SEO Services", url: "/digital-market/seoservices/" },
];

const relatedPages = [
  { name: "Local SEO Dubai", url: "/uae/dubai/local-seo/" },
  { name: "E-commerce SEO Dubai", url: "/uae/dubai/ecommerce-seo/" },
  { name: "PPC Advertising Dubai", url: "/digital-market/PPC-Advertising" },
  { name: "Content Marketing Dubai", url: "/digital-market/content-marketing" },
  { name: "Social Media Marketing Dubai", url: "/digital-market/social-media-marketing" },
];

function DubaiHotelSEO() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const pageUrl = "https://diglip7.com/uae/dubai/hotel-seo/";

  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Hotel SEO Services in Dubai | Hotel & Resort SEO | DigLip7",
        description:
          "DigLip7 provides Hotel SEO Services in Dubai for hotels, resorts and hospitality businesses — keyword research, website SEO, local SEO and technical SEO.",
        inLanguage: "en-AE",
        isPartOf: {
          "@id": "https://diglip7.com/#website",
        },
        about: {
          "@id": `${pageUrl}#service`,
        },
        mainEntity: {
          "@id": `${pageUrl}#service`,
        },
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Hotel SEO Services in Dubai",
        serviceType: "Hotel and Hospitality SEO Services",
        description:
          "DigLip7's Hotel SEO Services in Dubai for hotels, resorts and hospitality businesses, including hotel keyword research, hotel website SEO, local SEO, technical SEO, resort SEO and hotel content SEO.",
        provider: {
          "@id": "https://diglip7.com/#organization",
        },
        areaServed: {
          "@type": "City",
          name: "Dubai",
        },
        audience: {
          "@type": "Audience",
          audienceType:
            "Hotels, resorts, boutique hotels, business hotels, hotel groups and hospitality businesses",
        },
        url: pageUrl,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
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
            name: "UAE",
            item: "https://diglip7.com/uae/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Dubai",
            item: "https://diglip7.com/uae/dubai/",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Hotel SEO Services Dubai",
            item: pageUrl,
          },
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
        title="Hotel SEO Services in Dubai | Hotel & Resort SEO | DigLip7"
        description="DigLip7 provides Hotel SEO Services in Dubai for hotels, resorts and hospitality businesses — keyword research, website SEO, local SEO and technical SEO."
        canonical={pageUrl}
        ogType="website"
        ogImage="https://diglip7.com/images/hotel-seo-dubai.jpg"
        keywords="Hotel SEO Dubai, Hotel SEO Services in Dubai, Hotel Website SEO Dubai, Hospitality SEO Dubai, Local SEO for Hotels Dubai, Resort SEO Dubai, Hotel Keyword Research Dubai, Dubai hotel marketing, hotel search optimization"
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
              <span className="text-gray-900">Hotel SEO Services in Dubai </span>
              <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                for Hotels, Resorts & Hospitality
              </span>
            </h1>

            {/* Direct Answer */}
            <p className="text-gray-700 text-sm sm:text-base lg:text-lg mt-5 mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Looking for <span className="font-semibold text-blue-700">Hotel SEO Services in Dubai</span>? DigLip7 helps hotels, resorts and hospitality businesses improve their visibility in relevant organic searches through a dedicated hotel SEO service built around keyword research, technical SEO, hotel website optimization, local SEO, content and page-structure improvements — helping travelers discover accommodation, rooms, amenities, locations and hospitality services through search engines.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
              <Link to="/contact" className="inline-block">
                <motion.button
                  className="group px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-teal-700 to-teal-900 text-white text-base font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Request a Hotel SEO Consultation
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

          {/* Right Section - Hero Image */}
          <motion.div
            className="w-full lg:w-[42%] flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card3D className="w-full max-w-md lg:max-w-none">
              <SEOImageSlot
                src={heroImgSrc}
                alt="Hotel SEO services for hotels and resorts in Dubai"
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

      {/* Section 1: Introduction (Full-Width bg-white) */}
      <section className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <FloatingElement>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-700 mb-6 text-center">
              Introduction to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                Hotel SEO in Dubai
              </span>
            </h2>
          </FloatingElement>
          <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base">
            Dubai's hospitality market is dense and highly competitive, with hotels, resorts, serviced apartments and boutique properties all competing for attention from the same pool of travelers. Before a guest ever picks up the phone or opens a booking app, most of that decision-making starts with a search engine. Someone might search for a neighborhood ("hotels in Dubai Marina"), a travel purpose ("business hotel Dubai"), a room type ("family suite Dubai hotel"), or a specific amenity ("hotel with private beach Dubai"). Each of these searches reflects a different stage of research and a different intent — which is exactly what a dedicated hotel SEO service in Dubai needs to be built around, rather than a one-size-fits-all SEO package.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base">
            This is why hotel SEO looks different from generic website SEO. A hotel website usually needs to perform well across many overlapping search intents at once: location-specific searches, accommodation searches, room-type searches, amenity searches, and destination research. On top of that, hotel websites tend to be judged heavily on mobile search experience, because a large share of travel research and last-minute booking behavior happens on a phone. Technical performance — how quickly pages load, how cleanly they render on mobile, how easily search engines can crawl a hotel's room and location pages — plays directly into whether that visibility is achievable at all.
          </p>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            <span className="font-semibold text-blue-700">DigLip7</span> offers Hotel SEO Services in Dubai designed specifically around this complexity: Hotel Website SEO Dubai, Hospitality SEO Dubai and Local SEO for Hotels Dubai are all part of the same underlying service, aimed at making sure a property's website, its Google Business Profile, and its individual pages accurately reflect what travelers are searching for — so search engines can match the right page to the right query. The sections below walk through what our hotel SEO service in Dubai involves in practice, who it's built for, and how a typical campaign is structured.
          </p>
        </div>
      </section>

      {/* Section 2: What Is Hotel SEO? (Full-Width bg-gray-50) */}
      <section className="w-full bg-gray-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 border-y border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-stretch gap-10 lg:gap-14">
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <Card3D className="w-full h-full flex flex-col justify-center">
              <SEOImageSlot
                src={roomImgSrc}
                alt="Hotel room page SEO optimization"
                width={800}
                height={600}
                aspect="h-full min-h-[560px] lg:min-h-[700px] w-full"
                className="h-full shadow-2xl"
              />
            </Card3D>
          </div>

          <div className="flex-1 text-center md:text-left flex flex-col justify-center">
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-700 mb-6">
                What Is{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  Hotel SEO?
                </span>
              </h2>
            </FloatingElement>
            <div className="bg-teal-50/70 border-l-4 border-teal-600 p-5 rounded-2xl mb-4 text-left shadow-sm">
              <p className="text-teal-950 text-base sm:text-lg font-medium leading-relaxed">
                <strong className="text-teal-800">What is Hotel SEO?</strong> Hotel SEO is the process of improving a hotel, resort or hospitality website's visibility in organic (non-paid) search results, using keyword research, on-page optimization, technical SEO, local SEO and content aligned with how travelers actually search.
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-4">
              In practice, this covers several connected areas: identifying the keywords travelers use when searching for accommodation, rooms, amenities and destinations; structuring and writing pages so search engines can understand what a property offers; making sure local listings like Google Business Profile are accurate and complete; building internal links so related pages reinforce each other; adding structured data so search engines can parse hotel information correctly; optimizing images so pages load quickly without losing visual quality; and ensuring the site works well on mobile devices, since most travel searches happen there.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-3 font-semibold">
              Hotel SEO differs from generic SEO because accommodation searches carry a wide range of intents. Someone might be:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-gray-700 text-sm text-left mb-5">
              {[
                "Finding a hotel in a specific city or district",
                "Comparing accommodation options",
                "Searching by area or neighborhood",
                "Searching by room type",
                "Searching by amenity (pool, spa, gym)",
                "Searching by travel purpose (business, family, leisure)",
                "Searching for hotel services (meetings, events, dining)",
                "Researching a destination before deciding where to stay",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              A generic SEO approach that treats a hotel site like any other business website will often miss these distinctions. Hotel SEO is not a guarantee of higher bookings or occupancy — it's an approach to making sure the right pages exist, are structured well, and are genuinely discoverable for searches that match what the property actually offers.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Why Hotel SEO Matters in Dubai (Full-Width bg-white) */}
      <section className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-10 lg:gap-14">
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <Card3D className="w-full h-full flex flex-col justify-center">
              <SEOImageSlot
                src={keywordImgSrc}
                alt="Hotel keyword research strategy for Dubai accommodation searches"
                width={800}
                height={600}
                aspect="h-full min-h-[460px] lg:min-h-[560px] w-full"
                className="h-full shadow-2xl"
              />
            </Card3D>
          </div>

          <div className="flex-1 text-center md:text-left">
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-700 mb-6">
                Why Hotel SEO Matters in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  Dubai
                </span>
              </h2>
            </FloatingElement>
            <div className="bg-teal-50/70 border-l-4 border-teal-600 p-5 rounded-2xl mb-4 text-left shadow-sm">
              <p className="text-teal-950 text-base sm:text-lg font-medium leading-relaxed">
                <strong className="text-teal-800">Why does hotel SEO matter in Dubai?</strong> Dubai hotels compete for a wide mix of location-based, amenity-based and travel-purpose searches, so visibility depends on covering these intents accurately rather than relying on a single generic hotel page.
              </p>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base">
              Travelers researching Dubai accommodation search in many different ways: by area ("hotels in Dubai Marina", "hotels near Downtown Dubai"), by hotel type ("boutique hotel Dubai", "business hotels in Dubai"), by traveler group ("family hotels in Dubai"), by amenity ("beach resorts in Dubai", "Dubai hotel with spa"), or by budget tier ("budget accommodation Dubai"). Local search and Google Maps discovery also play a significant role, particularly for travelers searching once they've already narrowed down a neighborhood or landmark.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Because so many properties are competing for commercially valuable hospitality keywords, a hotel's website needs clear location pages, accurate amenity information, and a technically sound structure to be considered for these searches at all. Hotel SEO Dubai work is generally focused on covering these variations — Hotel Website SEO Dubai, Local SEO for Hotels Dubai, Resort SEO Dubai — in a way that reflects what a specific property actually offers, rather than targeting every possible keyword regardless of relevance. It's worth noting that ranking for a search term depends on many factors beyond SEO effort, including competition and existing authority, so no specific ranking position for any keyword should be assumed without verification.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Hospitality Businesses We Support (Full-Width bg-gray-50) */}
      <section className="w-full bg-gray-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-700 mb-4">
                Hospitality Businesses{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  We Support
                </span>
              </h2>
            </FloatingElement>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              From independent boutiques to full-scale beach resorts and multi-property hospitality groups across Dubai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportedBusinesses.map((biz, idx) => (
              <motion.div
                key={biz.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                viewport={{ once: true }}
              >
                <Card3D intensity={32} className="h-full">
                  <div className="bg-gradient-to-br from-teal-700 to-teal-900 text-white rounded-2xl p-6 h-full shadow-lg hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-300 flex flex-col text-center">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 text-white">
                      <biz.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-white text-lg mb-2">{biz.title}</h3>
                    <p className="text-teal-50/90 text-xs sm:text-sm leading-relaxed flex-grow">
                      {biz.description}
                    </p>
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Hotel SEO Services in Dubai (Full-Width bg-white) */}
      <section className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-700 mb-4">
                Hotel SEO Services in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  Dubai
                </span>
              </h2>
            </FloatingElement>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Comprehensive search optimization designed specifically for hotels, resorts and hospitality websites operating in the Dubai market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotelServices.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                viewport={{ once: true }}
              >
                <Card3D intensity={30} className="h-full">
                  <div className="bg-gradient-to-br from-white to-gray-50/70 rounded-2xl p-6 h-full border border-gray-200/80 shadow-md hover:border-teal-500/50 hover:shadow-2xl transition-all duration-300 flex flex-col">
                    <div className="w-11 h-11 rounded-lg bg-teal-600/10 flex items-center justify-center mb-4 text-teal-800">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                      {service.description}
                    </p>
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Hotel Website Structure That Supports SEO (Full-Width bg-gray-50) */}
      <section className="w-full bg-gray-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 border-y border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-stretch gap-10 lg:gap-14">
          <div className="w-full flex flex-col justify-center">
            <Card3D className="w-full h-full flex flex-col justify-center">
              <SEOImageSlot
                src={structureImgSrc}
                alt="SEO structure for a Dubai hotel website"
                width={800}
                height={600}
                aspect="h-full min-h-[480px] lg:min-h-[580px] w-full"
                className="h-full shadow-2xl"
              />
            </Card3D>
          </div>

          <div className="w-full min-w-0 text-center lg:text-left flex flex-col justify-center">
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-700 mb-6">
                Hotel Website Structure That{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  Supports SEO
                </span>
              </h2>
            </FloatingElement>
            <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base">
              A hotel website's structure has a direct effect on both crawlability and how clearly search engines can match pages to search intent. What matters is a logical parent-child hierarchy, clear internal linking and breadcrumbs, straightforward crawlability, and pages mapped to actual search intent — without creating duplicate URLs or unnecessary thin pages along the way.
            </p>
            <div className="bg-white border border-teal-100/90 rounded-2xl p-5 sm:p-6 shadow-sm overflow-x-auto mb-4 text-left">
              <pre className="font-mono text-xs sm:text-sm text-gray-800 leading-relaxed whitespace-pre block">
                {websiteTreeText}
              </pre>
            </div>
            <p className="text-gray-600 text-xs sm:text-sm italic">
              * This structure should reflect the hotel's real business offerings rather than being copied as-is.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7: Targeting Different Hotel Search Intents (Full-Width bg-white) */}
      <section className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-700 mb-4">
                Targeting Different Hotel{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  Search Intents
                </span>
              </h2>
            </FloatingElement>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Different intents generally call for different page types and content formats — a room-intent search is best served by a detailed room page, while a destination-research search is better served by genuinely useful area content.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {searchIntents.map((item, idx) => (
              <motion.div
                key={item.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                viewport={{ once: true }}
              >
                <Card3D intensity={24} className="h-full">
                  <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 h-full flex flex-col hover:border-teal-400 hover:shadow-xl transition-all duration-300">
                    <span className="text-xs uppercase tracking-wider font-bold text-teal-800 mb-1">
                      {item.type}
                    </span>
                    <div className="bg-white px-2.5 py-1 rounded text-xs font-mono text-teal-900 border border-teal-100 mb-2.5">
                      {item.query}
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed flex-grow">
                      {item.intent}
                    </p>
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Hotel Search Competitor Analysis (Full-Width bg-gray-50) */}
      <section className="w-full bg-gray-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 border-y border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-stretch gap-10 lg:gap-14">
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <Card3D className="w-full h-full flex flex-col justify-center">
              <SEOImageSlot
                src={localImgSrc}
                alt="Local SEO strategy for a Dubai hotel"
                width={800}
                height={600}
                aspect="h-full min-h-[420px] lg:min-h-[500px] w-full"
                className="h-full shadow-2xl"
              />
            </Card3D>
          </div>

          <div className="flex-1 text-center md:text-left">
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-700 mb-6">
                Hotel Search{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  Competitor Analysis
                </span>
              </h2>
            </FloatingElement>
            <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base">
              Competitor analysis for hotel SEO typically looks at search results themselves, competing hotel and resort websites, booking-related search results, and how competitors structure their room, location, amenity and destination pages.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base">
              This can help identify keyword opportunities, content gaps, internal linking patterns, local visibility differences and technical issues worth addressing.
            </p>
            <div className="bg-amber-50/80 border-l-4 border-amber-500 p-4 rounded-xl text-left">
              <p className="text-amber-900 text-xs sm:text-sm leading-relaxed">
                <strong>Realistic Expectation:</strong> Any claim about outranking a specific competitor should be verified rather than assumed, and SEO work should not be presented as something that will displace OTAs or major booking platforms from search results — those platforms often have significant existing authority in this space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Our Proven Hotel SEO Process (Matches Older Pages & Image 2) */}
      <section className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="max-w-4xl mx-auto mb-14 text-center">
            <FloatingElement>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Proven Hotel SEO Process
              </h2>
            </FloatingElement>
            <p className="text-gray-600 mt-3 text-sm sm:text-base">
              A systematic approach that delivers consistent results for our clients
            </p>
          </div>

          {/* Steps Timeline */}
          <div className="relative max-w-7xl mx-auto">
            {/* Blue Connecting Line (Desktop) */}
            <div className="hidden xl:block absolute top-8 left-12 right-12 border-t-2 border-blue-200 z-0"></div>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-7 gap-8 relative z-10 justify-items-center">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -12, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 260, damping: 16 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center cursor-pointer group"
                  >
                    {/* Icon Circle */}
                    <div className="relative flex items-center justify-center w-16 h-16 rounded-full border-4 border-blue-300 bg-white shadow-md mb-4 group-hover:scale-110 group-hover:border-teal-500 group-hover:shadow-2xl transition-all duration-300">
                      <IconComponent className="w-7 h-7 text-blue-600 group-hover:text-teal-700 transition-colors" />
                      <span className="absolute -top-2 -right-2 bg-teal-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full shadow">
                        {step.step}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-semibold text-gray-900 text-base sm:text-lg mb-2 group-hover:text-teal-700 transition-colors">
                      {step.title}
                    </h3>
                    {/* Description */}
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-[200px]">
                      {step.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Technical Hotel SEO & Performance (Full-Width bg-gray-50) */}
      <section className="w-full bg-gray-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 border-y border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-10 lg:gap-14">
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <Card3D className="w-full h-full flex flex-col justify-center">
              <SEOImageSlot
                src={technicalImgSrc}
                alt="Technical SEO architecture for a hotel website"
                width={800}
                height={600}
                aspect="h-full min-h-[420px] lg:min-h-[500px] w-full"
                className="h-full shadow-2xl"
              />
            </Card3D>
          </div>

          <div className="flex-1 text-center md:text-left flex flex-col justify-center">
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-700 mb-6">
                How Hotel SEO Performance Is{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  Measured
                </span>
              </h2>
            </FloatingElement>
            <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base">
              Hotel SEO performance is typically tracked through metrics such as organic impressions and clicks, keyword visibility, non-branded organic traffic, room and location page visibility, organic enquiry actions, booking-related conversion actions (where tracking allows), contact submissions, calls, booking clicks, Google Business Profile actions, indexed page counts, technical SEO health and Core Web Vitals.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              These figures can fluctuate based on competition, search demand, website quality, content depth, domain authority, technical implementation, seasonality, traveler behavior, booking technology and ongoing website changes. Organic search performance should not be presented as guaranteed booking revenue — it's one input among several factors that influence whether a traveler ultimately books.
            </p>
          </div>
        </div>
      </section>

      {/* Section 11: Hotel SEO vs Paid Advertising (Full-Width bg-white) */}
      <section className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-700 mb-4">
                Hotel SEO vs{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  Paid Advertising
                </span>
              </h2>
            </FloatingElement>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Many hotels use SEO and paid advertising together, depending on their objectives, budget and overall marketing strategy — neither approach is universally better than the other.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-teal-900 text-white">
                <tr>
                  <th className="p-4 sm:p-5 font-semibold text-base">Hotel SEO</th>
                  <th className="p-4 sm:p-5 font-semibold text-base bg-teal-800">Paid Advertising</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {[
                  ["Builds organic search visibility", "Provides paid search visibility"],
                  ["Requires ongoing optimization", "Requires advertising budget"],
                  ["Can support long-term organic visibility", "Can provide paid traffic while campaigns run"],
                  ["Content and technical improvements can continue providing value", "Campaign reach depends on targeting, budget and platform"],
                  ["Can target informational and commercial searches", "Can target selected paid keywords and audiences"],
                ].map(([seo, ppc], idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                    <td className="p-4 sm:p-5 text-gray-800 font-medium">{seo}</td>
                    <td className="p-4 sm:p-5 text-gray-700">{ppc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 12: Common Hotel SEO Mistakes (Full-Width bg-gray-50) */}
      <section className="w-full bg-gray-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-700 mb-4">
                Common Hotel SEO{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  Mistakes to Avoid
                </span>
              </h2>
            </FloatingElement>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Pitfalls that dilute organic search relevance and hinder hotel discoverability in competitive markets.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {commonMistakes.map((mistake, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-amber-300 transition-all flex items-start gap-3 cursor-pointer"
              >
                <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-gray-800 text-xs sm:text-sm leading-relaxed">{mistake}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 13: How Long Does Hotel SEO Take? (Full-Width bg-white) */}
      <section className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-stretch gap-10 lg:gap-14">
          <motion.div
            className="w-full md:w-1/2 flex flex-col justify-center"
            animate={{ y: [-30, 30, -30], rotate: [2, -2, 2] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <Card3D intensity={32} className="w-full h-full flex flex-col justify-center">
              <SEOImageSlot
                src={reportingImgSrc}
                alt="Hotel SEO performance reporting dashboard"
                width={800}
                height={600}
                aspect="h-full min-h-[420px] lg:min-h-[500px] w-full"
                className="h-full shadow-2xl"
              />
            </Card3D>
          </motion.div>

          <div className="flex-1 text-center md:text-left flex flex-col justify-center">
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-700 mb-6">
                How Long Does Hotel SEO{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  Take?
                </span>
              </h2>
            </FloatingElement>
            <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base">
              Hotel SEO timelines depend on domain history, existing authority, competition, location, website size, number of rooms and pages, technical condition, content quality, architecture, backlink profile, search demand, seasonality and available implementation resources.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base">
              Some technical improvements can be put in place relatively quickly, but meaningful organic visibility and content performance generally build up over an ongoing period rather than appearing immediately.
            </p>
            <p className="text-teal-900 font-medium text-sm sm:text-base italic">
              No specific ranking position, traffic level, booking volume or revenue figure should be promised in advance.
            </p>
          </div>
        </div>
      </section>

      {/* Section 14: Frequently Asked Questions (FAQs) */}
      <section className="w-full bg-gradient-to-br from-gray-50 to-teal-50/30 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto">
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
              Get answers to the most common questions about our Hotel SEO Services in Dubai.
            </p>
          </motion.div>

          <div className="space-y-4 sm:space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left p-4 sm:p-6 hover:bg-gray-50 transition-colors duration-200 
                  group px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-teal-900 to-teal-700 text-white text-base sm:text-lg font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-[1.01] cursor-pointer"
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

      {/* Section 15: Final CTA Section */}
      <section className="w-full bg-gradient-to-r from-teal-900 via-teal-800 to-emerald-900 text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <FloatingElement>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Grow Your Hotel Search Visibility in Dubai
            </h2>
          </FloatingElement>
          <p className="text-teal-100 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Want to understand where your hotel website can improve in organic search? Talk to DigLip7 about a hotel SEO strategy built around your property, location, services, website structure and search intent. Request a hotel SEO consultation, an SEO audit, or a review of your existing organic visibility to see where the opportunities are.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <motion.button
                className="px-8 sm:px-10 py-3.5 sm:py-4 bg-white text-teal-900 font-bold rounded-full shadow-2xl hover:bg-gray-100 transition-all transform hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request a Hotel SEO Consultation
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                className="px-8 sm:px-10 py-3.5 sm:py-4 bg-teal-800/80 border border-teal-300 text-white font-semibold rounded-full hover:bg-teal-700 transition-all transform hover:scale-105 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request an SEO Audit
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Internal Linking Reference */}
      <section className="w-full bg-gray-100 py-10 px-4 sm:px-6 lg:px-8 xl:px-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-xs text-gray-500">
          <div className="mb-3">
            <span className="font-semibold text-gray-700">Parent Services: </span>
            {parentPages.map((item, idx) => (
              <span key={item.url}>
                <Link to={item.url} className="text-teal-700 hover:underline">
                  {item.name}
                </Link>
                {idx < parentPages.length - 1 ? " • " : ""}
              </span>
            ))}
          </div>
          <div>
            <span className="font-semibold text-gray-700">Related Dubai SEO Solutions: </span>
            {relatedPages.map((item, idx) => (
              <span key={item.url}>
                <Link to={item.url} className="text-teal-700 hover:underline">
                  {item.name}
                </Link>
                {idx < relatedPages.length - 1 ? " • " : ""}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default DubaiHotelSEO;
