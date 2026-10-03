import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../../../../components/SEO";
import {
  UtensilsCrossed,
  Coffee,
  Store,
  ChefHat,
  ShoppingBag,
  Sparkles,
  MapPin,
  Search,
  FileText,
  Settings,
  Layers,
  Globe,
  Share2,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  FolderTree,
  Scale,
  AlertTriangle,
  Clock,
  Compass,
  BarChart3,
  BookOpen,
  Home,
  Check,
  Building2,
  TrendingUp,
} from "lucide-react";

// 7 Required Images strictly matching Section 8 Image SEO specification
const heroImgSrc = "/src/images/restaurant-seo-dubai.jpg";
const keywordImgSrc = "/src/images/restaurant-keyword-research-dubai.jpg";
const structureImgSrc = "/src/images/restaurant-website-seo-dubai.jpg";
const localImgSrc = "/src/images/restaurant-local-seo-dubai.jpg";
const menuImgSrc = "/src/images/restaurant-menu-seo-dubai.jpg";
const branchImgSrc = "/src/images/restaurant-branch-seo-dubai.jpg";
const reportingImgSrc = "/src/images/restaurant-seo-reporting-dubai.jpg";

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
            <UtensilsCrossed className="w-6 h-6" />
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
  { label: "Restaurant SEO Dubai", href: "/uae/dubai/restaurant-seo" },
];

// 6 Restaurant Business Types We Support
const businessTypes = [
  {
    icon: UtensilsCrossed,
    title: "Restaurants",
    description:
      "For standalone and multi-outlet restaurants, the focus is usually the website: a clear menu structure, cuisine and location pages where relevant, an easy-to-find reservation path, and a Google Business Profile that accurately reflects category, hours and offerings.",
  },
  {
    icon: Coffee,
    title: "Cafés",
    description:
      "Café SEO Dubai revolves around coffee and brunch-related searches, workspace-friendly queries, and strong local discovery through Maps. Menu content and consistent Google Business Profile information both play a role here.",
  },
  {
    icon: Store,
    title: "Restaurant Chains",
    description:
      "Multi-location brands need a clear location architecture — one page per branch with genuinely distinct information, a separate Google Business Profile per physical location, and internal linking that avoids duplicate content problems.",
  },
  {
    icon: ChefHat,
    title: "Cloud Kitchens",
    description:
      "Cloud kitchens rely more on website SEO and cuisine-specific, delivery-focused landing pages, since walk-in local signals apply differently. Not every cloud kitchen model qualifies for a standard Google Business Profile — eligibility depends on Google's guidelines and how the business operates.",
  },
  {
    icon: ShoppingBag,
    title: "Food Businesses",
    description:
      "Specialty food brands and catering businesses (where relevant) benefit from clear service pages, local visibility where they serve specific areas, and content explaining what makes the business different.",
  },
  {
    icon: Sparkles,
    title: "Hospitality & Dining Brands",
    description:
      "For restaurant groups running multiple concepts, the priority is a multi-location structure with consistent location SEO and content built around each dining concept individually.",
  },
];

// 10 Restaurant SEO Services in Dubai
const services = [
  {
    icon: Search,
    title: "Restaurant Keyword Research",
    image: keywordImgSrc,
    filename: "restaurant-keyword-research-dubai.jpg",
    imageAlt: "Restaurant keyword research strategy for Dubai search queries",
    description:
      "Restaurant Keyword Research Dubai accounts for cuisine terms, community names, meal-related searches, dish-specific queries, and intent signals like reservation, takeaway or delivery. It also means mapping keywords to the right page and checking for cannibalization between similar pages. Keyword selection has to reflect what the restaurant actually offers. If a cuisine or service isn't part of the business, we don't build pages chasing that search — it misleads both users and search engines.",
  },
  {
    icon: Globe,
    title: "Restaurant Website SEO",
    description:
      "Restaurant Website SEO Dubai covers title tags and meta descriptions, a clear H1/H2 structure, dedicated menu, cuisine and location pages, clean URLs, correct canonicals, optimised images with descriptive ALT text, and making sure every important page is indexable — so the information a deciding visitor needs is easy to find.",
  },
  {
    icon: MapPin,
    title: "Local SEO for Restaurants in Dubai",
    image: localImgSrc,
    filename: "restaurant-local-seo-dubai.jpg",
    imageAlt: "Local SEO strategy for a Dubai restaurant Google Business Profile",
    description:
      "Local SEO for Restaurants Dubai centres on the Google Business Profile — accurate name, address, phone, hours, website and menu URL, the right categories, relevant attributes, and real photos — plus local landing pages and NAP consistency across directories. Google Business Profile information should represent the real business. We don't recommend fake reviews or inaccurate hours or categories to game visibility — beyond breaking Google's guidelines, it tends to backfire with real customers.",
  },
  {
    icon: Compass,
    title: "Google Maps SEO for Restaurants in Dubai",
    description:
      "Google Maps SEO for Restaurants Dubai is shaped by profile completeness, correct category, proximity and relevance to the searcher, consistency with the website, reviews, photo activity, and local ranking signals Google doesn't fully disclose. Because Google controls these systems, we won't promise a #1 Maps ranking or a guaranteed top-3 position — the focus is giving Google every reason to consider the restaurant relevant.",
  },
  {
    icon: Store,
    title: "Restaurant Google Business Profile SEO",
    description:
      "This covers the primary and any genuinely relevant secondary categories, an accurate description, correct services and menu information, current hours (including holiday hours), appropriate attributes, an active photo library, and professional review management. We don't add keywords into the business name field or recommend duplicate profiles for one location — both breach Google's guidelines.",
  },
  {
    icon: FileText,
    title: "Restaurant Menu SEO",
    image: menuImgSrc,
    filename: "restaurant-menu-seo-dubai.jpg",
    imageAlt: "Restaurant menu SEO optimization for a Dubai restaurant website",
    description:
      "Menu information should be genuinely accessible — real HTML content, not locked exclusively in a PDF, an image, or a third-party delivery platform. PDF-only and image-only menus are common and make it hard for search engines, and some users, to understand what's on offer. Good menu SEO means clear categories, accurate names and descriptions, dietary information where available, appropriate pricing, and a mobile-friendly layout. We wouldn't promise any individual dish page will rank for its own search term — the aim is a menu that's genuinely usable and crawlable.",
  },
  {
    icon: Layers,
    title: "Restaurant Location & Branch SEO",
    image: branchImgSrc,
    filename: "restaurant-branch-seo-dubai.jpg",
    imageAlt: "SEO architecture for multiple restaurant locations in Dubai",
    description:
      "Each branch needs its own page with real, distinct value — accurate address, hours, directions, and ideally branch-specific photos rather than a copy-pasted template. Thin, near-identical location pages create duplicate content issues rather than strengthening visibility, so fewer, better pages beat dozens of shallow ones.",
  },
  {
    icon: BookOpen,
    title: "Restaurant Content SEO",
    description:
      "Supporting content — cuisine guides, neighbourhood dining guides, menu explainers, dietary information, restaurant FAQs, and content around occasions like family dinners — can widen visibility for informational searches. It has to be genuinely useful, not just a vehicle for keywords, and we won't publish fabricated awards or invented reviews.",
  },
  {
    icon: Settings,
    title: "Technical SEO for Restaurant Websites",
    description:
      "Common technical issues include poor crawlability, missing or broken sitemaps, incorrect robots.txt rules, canonical errors, broken links, JavaScript-rendered menus that don't get read properly, slow load times, weak Core Web Vitals, unoptimised images, duplicate parameter URLs, and third-party booking or delivery widgets that interfere with crawling. Fixing these doesn't guarantee rankings, but it removes the barriers stopping good content from being discovered at all.",
  },
  {
    icon: Share2,
    title: "Restaurant Structured Data & Schema",
    description:
      "Where appropriate, we implement Restaurant, LocalBusiness, Organization, BreadcrumbList and WebPage schema, plus FAQPage markup only for FAQs actually visible on the page. Every schema element has to match what's genuinely on the page — we never fabricate reviews, ratings, prices or opening hours in structured data.",
  },
];

// 6 Restaurant Search Intents
const searchIntents = [
  {
    intent: "Local Discovery Intent",
    queries: ["Restaurant near me", "Restaurants in Jumeirah", "Café in JVC"],
    note: "High proximity and immediacy — users searching on mobile wanting food nearby now.",
  },
  {
    intent: "Cuisine Intent",
    queries: ["Indian restaurant Dubai", "Italian restaurant Dubai", "Japanese restaurant Dubai"],
    note: "Only relevant when the cuisine genuinely reflects the menu.",
  },
  {
    intent: "Menu Intent",
    queries: ["Restaurant menu Dubai", "Indian restaurant menu Dubai"],
    note: "Requires crawlable HTML menu pages with dishes, pricing and dietary options.",
  },
  {
    intent: "Reservation Intent",
    queries: ["Restaurant reservation Dubai", "Book restaurant in Dubai"],
    note: "Direct booking and contact path needed to capture ready-to-reserve diners.",
  },
  {
    intent: "Dining Occasion Intent",
    queries: ["Family restaurant Dubai", "Business lunch Dubai", "Dinner restaurant Dubai"],
    note: "Matches specific dining atmospheres, seating capacities and occasion needs.",
  },
  {
    intent: "Delivery / Takeaway Intent",
    queries: ["Restaurant takeaway Dubai", "Food delivery Dubai"],
    note: "Only targeted where the restaurant genuinely offers the service.",
  },
];

// 7 Process Steps
const processSteps = [
  {
    step: "01",
    title: "Website & Technical SEO Audit",
    description:
      "Reviewing crawlability, indexation, mobile usability, Core Web Vitals, URLs, canonicals, redirects, the sitemap and technical errors.",
  },
  {
    step: "02",
    title: "Restaurant Keyword Research",
    description:
      "Researching cuisine, location, restaurant type, dining intent, menu and reservation-related searches.",
  },
  {
    step: "03",
    title: "Search Intent & Competitor Analysis",
    description:
      "Mapping searches to the right pages and reviewing how competitors address the same intents.",
  },
  {
    step: "04",
    title: "On-Page & Menu Content Optimisation",
    description:
      "Building crawlable HTML menu pages, cuisine pages, location pages, and title/heading structures.",
  },
  {
    step: "05",
    title: "Location & Branch Architecture",
    description:
      "Structuring unique, distinct pages for each branch with individual address, contact, and direction signals.",
  },
  {
    step: "06",
    title: "Local SEO & Google Business Profile Optimisation",
    description:
      "Improving business information accuracy, local relevance, the profile and review processes.",
  },
  {
    step: "07",
    title: "Measurement & Ongoing Improvement",
    description:
      "Monitoring search visibility, traffic, engagement, conversions and technical health.",
  },
];

// Measurement Metrics
const measurementMetrics = [
  { metric: "Organic impressions and clicks", desc: "Overall search footprint and visits from Google" },
  { metric: "Non-branded organic traffic", desc: "Searchers discovering your venue without knowing your name" },
  { metric: "Local search visibility", desc: "Performance in local packs and neighborhood-specific searches" },
  { metric: "Google Business Profile actions", desc: "Calls and direction requests directly from search results" },
  { metric: "Website visits from search", desc: "Visitors landing on your menu, reservation, and branch pages" },
  { metric: "Visibility of menu and location pages", desc: "Rankings for dish queries, dining styles, and branch pages" },
  { metric: "Reservation and contact form actions", desc: "Tracked bookings, enquiry submissions, and direct calls" },
  { metric: "Online order clicks where trackable", desc: "Direct clicks to ordering systems or delivery links" },
  { metric: "Indexed pages and technical health", desc: "Crawl efficiency, Core Web Vitals, and indexation rates" },
];

// 14 Common Mistakes
const mistakes = [
  "Relying only on third-party delivery platforms for online presence",
  "No crawlable menu content on the website",
  "Menu available only as a PDF or image",
  "Duplicate or near-identical location pages",
  "Keyword stuffing in page copy or the Google Business Profile name",
  "Fake or incentivised reviews",
  "Duplicate Google Business Profiles for one location",
  "Incorrect business categories or outdated hours",
  "Poor mobile usability or slow load times",
  "Missing ALT text and unoptimised images",
  "Weak internal linking between menu, cuisine and location pages",
  "Thin location or cuisine pages with little real content",
  "Indexing unnecessary parameter-based URLs",
  "Building pages for cuisines or services the restaurant doesn't offer",
];

// 14 FAQs verbatim matching Section 17.8 Schema
const faqs = [
  {
    q: "What is Restaurant SEO Dubai?",
    a: "Restaurant SEO Dubai is search engine optimisation tailored to restaurants, cafes and food businesses in Dubai, covering keyword research, website and menu optimisation, local SEO and Google Business Profile management, aimed at improving relevant search and Maps visibility.",
  },
  {
    q: "Why do restaurants in Dubai need SEO?",
    a: "Dubai's dining market is dense and competitive, with search behaviour that's largely local, mobile and time-sensitive. Without deliberate SEO, a restaurant's website and Google Business Profile may struggle to appear for the cuisine and 'near me' searches that drive real decisions.",
  },
  {
    q: "What does a restaurant SEO agency in Dubai do?",
    a: "It researches relevant keywords, optimises website structure and content, manages local SEO and Google Business Profile accuracy, improves technical health, and monitors performance, shaped around how restaurant searches and customers behave.",
  },
  {
    q: "How does restaurant SEO differ from regular SEO?",
    a: "It places more weight on local search, Google Maps visibility, cuisine and menu-related keywords, dietary and dining-occasion intent, and location or branch-level content, areas central to how people find places to eat.",
  },
  {
    q: "Can SEO help restaurants appear in local searches?",
    a: "Yes. An accurate Google Business Profile, consistent business information and location-specific content are aimed at improving relevance for local and 'near me' searches, though actual rankings depend on many factors outside anyone's control.",
  },
  {
    q: "What is Restaurant Website SEO Dubai?",
    a: "It's on-site optimisation for Dubai-relevant searches: titles, headings, menu pages, cuisine and location pages, internal linking, URLs, and making sure the site is technically sound and mobile-friendly.",
  },
  {
    q: "How does Google Maps SEO help restaurants?",
    a: "It focuses on making a Google Business Profile as complete, accurate and relevant as possible, since much restaurant discovery happens through the Maps pack, though no agency can guarantee a specific Maps position.",
  },
  {
    q: "What is Restaurant Google Business Profile SEO?",
    a: "Optimising the profile's category, description, services, menu link, hours, attributes and photos, plus proper review management, while keeping information accurate and avoiding fake reviews or duplicate listings.",
  },
  {
    q: "Can SEO improve restaurant menu visibility?",
    a: "Making menu content genuinely crawlable, real text rather than only a PDF or image, gives search engines a much better chance of understanding it. It doesn't guarantee individual dishes will rank for their own searches.",
  },
  {
    q: "How should restaurant branch pages be optimised?",
    a: "Each branch should have its own page with distinct, accurate information: address, hours, directions and ideally branch-specific details, rather than a duplicated template, which avoids duplicate content issues.",
  },
  {
    q: "Does restaurant SEO work for cafes?",
    a: "Yes. Cafe SEO Dubai follows the same principles but typically emphasises coffee and brunch-related searches, workspace queries, and strong local and Maps visibility.",
  },
  {
    q: "Can SEO help cloud kitchens?",
    a: "Cloud kitchens can benefit from strong website SEO and cuisine-specific, delivery-focused landing pages. Google Business Profile eligibility depends on Google's guidelines and the specific business model, so it's assessed individually.",
  },
  {
    q: "How long does restaurant SEO take?",
    a: "There's no fixed timeline. It depends on the website's current state, competition, location, content depth and implementation speed. SEO is generally ongoing, and specific outcomes or timeframes can't be guaranteed.",
  },
  {
    q: "How do you measure restaurant SEO performance?",
    a: "Through a combination of signals: organic impressions and clicks, local visibility, Google Business Profile actions, website engagement and conversion actions, rather than any single metric.",
  },
];

// Internal Links matching Section 6
const internalLinks = [
  { name: "UAE SEO Services", url: "/uae/seo-services" },
  { name: "Dubai SEO Services", url: "/uae/dubai/seo-services" },
  { name: "SEO Services", url: "/digital-market/seoservices" },
  { name: "Local SEO Dubai", url: "/uae/dubai/local-seo" },
  { name: "E-commerce SEO Dubai", url: "/uae/dubai/ecommerce-seo" },
  { name: "PPC Advertising Dubai", url: "/digital-market/PPC-Advertising" },
  { name: "Content Marketing Dubai", url: "/digital-market/content-marketing" },
  { name: "Social Media Marketing Dubai", url: "/digital-market/social-media-marketing" },
  { name: "Real Estate SEO Dubai", url: "/uae/dubai/real-estate-seo" },
  { name: "Healthcare SEO Dubai", url: "/uae/dubai/healthcare-seo" },
];

function DubaiRestaurantSEO() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const pageUrl = "https://diglip7.com/uae/dubai/restaurant-seo/";

  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Restaurant SEO Dubai | Local SEO Services for Restaurants | DigLip7",
        description:
          "Grow your restaurant's organic and local search visibility with Restaurant SEO Dubai services from DigLip7. SEO for restaurants, cafes, food businesses and hospitality brands.",
        inLanguage: "en-AE",
        isPartOf: {
          "@id": "https://diglip7.com/#website",
        },
        about: {
          "@id": `${pageUrl}#service`,
        },
        breadcrumb: {
          "@id": `${pageUrl}#breadcrumb`,
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          url: "https://diglip7.com/images/restaurant-seo-dubai.jpg",
        },
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Restaurant SEO Dubai",
        serviceType: "Restaurant SEO Services",
        description:
          "Restaurant SEO Dubai services covering keyword research, website optimisation, menu content, local SEO and Google Business Profile management for restaurants, cafes and food businesses in Dubai.",
        url: pageUrl,
        areaServed: {
          "@type": "City",
          name: "Dubai",
          containedInPlace: {
            "@type": "Country",
            name: "United Arab Emirates",
          },
        },
        audience: {
          "@type": "Audience",
          audienceType:
            "Restaurants, cafes, cloud kitchens, restaurant chains and food businesses",
        },
        provider: {
          "@id": "https://diglip7.com/#organization",
        },
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
            item: "https://diglip7.com/uae/seo-services/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Dubai",
            item: "https://diglip7.com/uae/dubai/seo-services/",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Restaurant SEO Dubai",
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
        title="Restaurant SEO Dubai | Local SEO Services for Restaurants | DigLip7"
        description="Grow your restaurant's organic and local search visibility with Restaurant SEO Dubai services from DigLip7. SEO for restaurants, cafes, food businesses and hospitality brands."
        canonical={pageUrl}
        ogType="website"
        ogImage="https://diglip7.com/images/restaurant-seo-dubai.jpg"
        ogImageAlt="Restaurant SEO services for restaurants in Dubai"
        ogDescription="Grow your restaurant's organic and local search visibility with Restaurant SEO Dubai services from DigLip7. SEO for restaurants, cafes, food businesses and hospitality brands."
        twitterDescription="Restaurant SEO services for restaurants, cafes, food businesses and hospitality brands in Dubai."
        schema={jsonLdGraph}
      />

      {/* Breadcrumb Bar */}
      <div className="w-full bg-gradient-to-r from-purple-100 via-pink-100 to-white border-b border-purple-200/60 py-3 px-4 sm:px-6 lg:px-8 xl:px-12">
        <nav
          aria-label="Breadcrumb"
          className="max-w-7xl mx-auto flex items-center flex-wrap gap-2 text-xs sm:text-sm text-gray-600"
        >
          {breadcrumbTrail.map((crumb, i) => (
            <span key={crumb.label} className="flex items-center gap-2">
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
              <span className="text-gray-900">Restaurant SEO Dubai </span>
              <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                for Restaurants, Cafés & Food Businesses
              </span>
            </h1>

            {/* Direct Answer */}
            <p className="text-gray-700 text-sm sm:text-base lg:text-lg mt-5 mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <span className="font-semibold text-blue-700">Restaurant SEO Dubai</span> is the practice of improving how restaurants, cafés, cloud kitchens and food businesses appear in Google Search and Google Maps within the Dubai market. It covers keyword research, website optimisation, menu content, local SEO and Google Business Profile management, aimed at helping the right diners find accurate restaurant information — not at guaranteeing any specific ranking or booking outcome.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
              <Link to="/contact" className="inline-block">
                <motion.button
                  className="group px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-teal-700 to-teal-900 text-white text-base font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Request a Restaurant SEO Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
                alt="Restaurant SEO services for restaurants in Dubai"
                width={1200}
                height={630}
                priority={true}
                aspect="aspect-auto h-[480px] lg:h-[580px]"
                className="shadow-2xl"
              />
            </Card3D>
          </motion.div>
        </div>

        {/* Floating background particles */}
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

      {/* Introduction: Dubai Restaurant Search Dynamics (Styled div, not H2 per Section 3) */}
      <section className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <FloatingElement>
            <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-600 mb-6 text-center">
              Dubai Restaurant Search Dynamics
            </div>
          </FloatingElement>
          <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base">
            A diner in Business Bay at 7pm doesn't search "digital marketing services" — they search "restaurant near me", "Indian restaurant in Dubai", or "café in JVC". Someone planning a birthday might look for "family restaurant Dubai"; someone in a meeting might just want "restaurant delivery near me". These searches look nothing alike, but they all come from the same place: a person deciding where to eat, usually on a phone, usually soon.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base">
            That's what makes restaurant search behaviour different. It's heavily local, often cuisine-specific, frequently time-sensitive, and almost always mobile. A restaurant in Al Barsha competing for "restaurant near me" isn't really competing with one in Downtown Dubai — the two rarely appear for the same searcher. And "Japanese restaurant Dubai" carries very different intent from "restaurant reservation Dubai" or "restaurant menu Dubai", even when they lead to the same business.
          </p>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            This is why a generic SEO approach, built around a few broad commercial keywords, tends to fall short for restaurants. A restaurant website needs to be found for its cuisine, neighbourhood, dining occasions and menu — not just its category. <span className="font-semibold text-teal-700">DigLip7</span>'s Restaurant SEO Dubai is meant to close that gap: a structured approach to{" "}
            <Link to="/uae/dubai/seo-services" className="text-teal-700 underline font-medium hover:text-teal-900">
              Dubai SEO Services
            </Link>
            ,{" "}
            <Link to="/uae/dubai/local-seo" className="text-teal-700 underline font-medium hover:text-teal-900">
              Local SEO Dubai
            </Link>
            , and specialized hospitality SEO across the{" "}
            <Link to="/uae/seo-services" className="text-teal-700 underline font-medium hover:text-teal-900">
              UAE SEO Services
            </Link>{" "}
            landscape that reflects how people actually search for places to eat in this city.
          </p>
        </div>
      </section>

      {/* Section 1: What Is Restaurant SEO? */}
      <section className="w-full bg-gray-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-10">
            <FloatingElement>
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-600 mb-4">
                What Is Restaurant SEO?
              </h2>
            </FloatingElement>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Restaurant SEO applies the standard building blocks of SEO — keyword research, on-page optimisation, technical SEO, content and local signals — through a restaurant-specific lens. Restaurant keyword research has to account for cuisine type, dish names, dietary terms, meal occasions, delivery intent and location, often down to the neighbourhood.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Local & Google Maps First</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Local SEO and Google Maps visibility usually matter more for restaurants than for most businesses, since a large share of discovery happens through the Maps pack and "near me" searches.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold">
                <Store className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Google Business Profile Accuracy</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Google Business Profile accuracy — correct category, opening hours, crawlable menu links, and high-quality photography — becomes central rather than an afterthought.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Menu & Cuisine Architecture</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Covers crawlable HTML menu pages, cuisine and location pages, structured data, mobile usability, and a frictionless path for customer phone calls, directions, and reservations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Why Restaurant SEO Matters in Dubai */}
      <section className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-10">
            <FloatingElement>
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-600 mb-4">
                Why Restaurant SEO Matters in Dubai
              </h2>
            </FloatingElement>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Dubai's dining scene is dense and competitive. A restaurant in Jumeirah competing for "restaurants in Jumeirah" is up against cafés, fine dining venues and delivery-only kitchens, all appearing in the same local results. Search behaviour leans heavily local and mobile — "café in JVC" or "Italian restaurant Downtown Dubai" almost always means someone wants something nearby, right now.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
              <p>
                Restaurant discovery typically spans several overlapping channels: Google Search, Google Maps, the restaurant's own website, and increasingly AI-powered search. A restaurant strong in only one of these — a decent website but a thin, inconsistent Google Business Profile — tends to lose visibility to competitors covering all the bases.
              </p>
              <p>
                We won't quote specific search volumes for terms like "restaurants in Jumeirah" without verified, current data for your business, and we won't invent numbers to sound impressive. What we can say is that visibility depends on website relevance, local signals, content depth, technical health and competition — and a deliberate SEO approach gives a restaurant a stronger foundation than relying solely on delivery apps or word of mouth.
              </p>
            </div>

            <div className="lg:col-span-5 bg-teal-50/60 border border-teal-200/80 rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3 text-teal-900 font-bold text-lg">
                <TrendingUp className="w-6 h-6 text-teal-700" />
                <span>Dubai Search Behavior Highlights</span>
              </div>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                  <span><strong>Near-Me Immediacy:</strong> Searchers looking for lunch, dinner, or coffee want proximate solutions within 15–30 minutes.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                  <span><strong>Cuisine Specificity:</strong> Generic "food" queries are rare; diners search specifically by regional cuisine, dietary filter, or signature dish.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                  <span><strong>Multi-Surface Verification:</strong> Guests check Google Maps ratings, read genuine menu items, and confirm hours before booking.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Restaurant Businesses We Support */}
      <section className="w-full bg-gray-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <FloatingElement>
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-600 mb-4">
                Restaurant Businesses We Support
              </h2>
            </FloatingElement>
            <p className="text-gray-600 text-sm sm:text-base">
              Tailored search and Google Maps optimization built around each dining model's unique customer journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessTypes.map((biz) => {
              const Icon = biz.icon;
              return (
                <Card3D key={biz.title} intensity={32} className="h-full">
                  <div className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-teal-300 hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-300 flex flex-col justify-between h-full">
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">{biz.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{biz.description}</p>
                    </div>
                  </div>
                </Card3D>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4: Restaurant SEO Services in Dubai */}
      <section id="services" className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <FloatingElement>
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-600 mb-4">
                Restaurant SEO Services in Dubai
              </h2>
            </FloatingElement>
            <p className="text-gray-600 text-sm sm:text-base">
              A structured approach covering keywords, websites, menus, Google Maps, branches, and technical foundations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((srv) => {
              const Icon = srv.icon;
              return (
                <Card3D key={srv.title} intensity={28} className="h-full">
                  <div className="p-6 sm:p-8 rounded-2xl bg-gray-50 border border-gray-200/80 hover:border-teal-400 hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-300 flex flex-col justify-between h-full">
                    <div className="space-y-4">
                      {/* Visual Illustration for the 4 Dedicated Service Graphics */}
                      {srv.image && (
                        <SEOImageSlot
                          src={srv.image}
                          filename={srv.filename}
                          alt={srv.imageAlt}
                          width={800}
                          height={450}
                          aspect="aspect-[16/9]"
                          className="shadow-md"
                        />
                      )}

                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900">{srv.title}</h3>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed pt-1">{srv.description}</p>
                    </div>
                  </div>
                </Card3D>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 5: Restaurant Website Structure That Supports SEO */}
      <section className="w-full bg-gray-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <FloatingElement>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold">
                  <FolderTree className="w-3.5 h-3.5 text-teal-600" />
                  <span>Architecture & Hierarchy</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-600 mt-2">
                  Restaurant Website Structure That Supports SEO
                </h2>
              </FloatingElement>

              <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
                <p>
                  A restaurant website's structure should mirror how customers think about the business — by menu, cuisine (if genuinely relevant), and location if there's more than one branch. Here's an illustrative example — adapt it to what your restaurant actually offers, and don't create pages for cuisines, locations or services you don't provide:
                </p>
                <p className="text-teal-800 font-medium">
                  The principle is a clean parent-child hierarchy, with breadcrumbs and internal links reinforcing it — this supports crawlability and helps avoid the duplicate or orphaned pages that tend to appear when a site is bolted together over time.
                </p>
              </div>

              {/* Image 3 of 7: Structure Graphic */}
              <div className="pt-2">
                <Card3D className="w-full">
                  <SEOImageSlot
                    src={structureImgSrc}
                    filename="restaurant-website-seo-dubai.jpg"
                    alt="SEO structure for a Dubai restaurant website"
                    width={800}
                    height={450}
                    aspect="aspect-[16/9]"
                    className="shadow-2xl"
                  />
                </Card3D>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-gray-900 text-gray-100 p-6 sm:p-8 font-mono text-xs sm:text-sm shadow-xl border border-gray-800 overflow-x-auto">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-800 text-gray-400 text-xs">
                  <span>Site Hierarchy Map</span>
                  <span className="text-emerald-400">clean parent-child structure</span>
                </div>
                <pre className="leading-relaxed">
{`Restaurant Website
├── About
├── Menu
│   ├── Breakfast
│   ├── Lunch
│   ├── Dinner
│   ├── Desserts
│   └── Drinks
├── Cuisine
│   ├── Indian
│   ├── Italian
│   └── Other Actual Cuisines
├── Locations
│   ├── Jumeirah
│   ├── JVC
│   ├── Downtown Dubai
│   └── Other Actual Locations
├── Reservations
├── Catering
├── Private Dining
├── Blog / Guides
└── Contact`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Targeting Different Restaurant Search Intents */}
      <section className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <FloatingElement>
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-600 mb-4">
                Targeting Different Restaurant Search Intents
              </h2>
            </FloatingElement>
            <p className="text-gray-600 text-sm sm:text-base">
              Restaurant searches fall into fairly distinct intent groups, and each may need its own page or clearly signposted section:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchIntents.map((item) => (
              <Card3D key={item.intent} intensity={24} className="h-full">
                <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200/90 hover:border-teal-400 hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-100 px-2.5 py-1 rounded-full">
                        {item.intent}
                      </span>
                    </h3>
                    <ul className="mt-4 space-y-2">
                      {item.queries.map((q, qIdx) => (
                        <li key={qIdx} className="flex items-center gap-2 text-sm text-gray-800 font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          "{q}"
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-xs text-gray-500 mt-4 pt-3 border-t border-gray-200 italic">
                    {item.note}
                  </p>
                </div>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Restaurant Search Competitor Analysis */}
      <section className="w-full bg-gray-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-left">
          <FloatingElement>
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-600 mb-6 text-center md:text-left">
              Restaurant Search Competitor Analysis
            </h2>
          </FloatingElement>
          <div className="space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
            <p>
              This means reviewing Google and Maps results for key terms, competitor websites, menu and location pages, internal linking, Google Business Profiles, review patterns and technical SEO quality — to spot genuine gaps rather than to copy what competitors have done.
            </p>
            <p>
              We won't claim DigLip7 outranks specific competitors, or cite competitor statistics, without being able to verify them. Instead, our audit breaks down search visibility across direct competitors in your neighborhood, showing where their menus or local profiles leave room for your brand to stand out.
            </p>
          </div>
        </div>
      </section>

      {/* Section 8: Our Restaurant SEO Process */}
      <section className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <FloatingElement>
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-600 mb-4">
                Our Restaurant SEO Process
              </h2>
            </FloatingElement>
            <p className="text-gray-600 text-sm sm:text-base">
              A systematic 7-step roadmap designed for durable organic and local visibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <Card3D key={step.step} intensity={24} className="h-full">
                <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200/80 hover:border-teal-400 hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-300 flex flex-col justify-between h-full">
                  <div className="space-y-3">
                    <span className="text-3xl font-extrabold text-teal-300">
                      {step.step}
                    </span>
                    <h3 className="text-base font-bold text-gray-900">{step.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: How Restaurant SEO Performance Is Measured */}
      <section className="w-full bg-gray-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <FloatingElement>
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-600 mb-4">
                How Restaurant SEO Performance Is Measured
              </h2>
            </FloatingElement>
            <p className="text-gray-600 text-sm sm:text-base">
              Performance is best understood through a combination of signals rather than any single number:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-10">
            {/* Reporting Dashboard Image (Image 7 of 7) */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <Card3D className="w-full h-full flex flex-col justify-center">
                <SEOImageSlot
                  src={reportingImgSrc}
                  filename="restaurant-seo-reporting-dubai.jpg"
                  alt="Restaurant SEO performance reporting dashboard"
                  width={800}
                  height={600}
                  aspect="h-full min-h-[400px] lg:min-h-[500px] w-full"
                  className="h-full shadow-2xl"
                />
              </Card3D>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {measurementMetrics.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-gray-200 flex items-start gap-3 hover:border-teal-300 transition-all shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-gray-900">{item.metric}</h4>
                    <p className="text-xs text-gray-600 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-white border border-teal-200 text-center">
            <p className="text-sm text-gray-700 font-medium leading-relaxed">
              How these move depends on competition, location, search demand, website quality, content depth, technical implementation and how quickly changes go live. We report on these signals honestly rather than promising specific outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Section 10: Restaurant SEO vs Paid Advertising */}
      <section className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <FloatingElement>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold mb-3">
                <Scale className="w-3.5 h-3.5 text-teal-600" />
                <span>Strategy Comparison</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-600 mb-4">
                Restaurant SEO vs Paid Advertising
              </h2>
            </FloatingElement>
            <p className="text-gray-600 text-sm sm:text-base">
              Comparing long-term organic presence against immediate paid campaign channels like{" "}
              <Link to="/digital-market/PPC-Advertising" className="text-teal-700 underline font-medium hover:text-teal-900">
                PPC Advertising Dubai
              </Link>
              .
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-teal-800 to-teal-700 text-white">
                    <th className="py-4 px-6 font-bold w-1/2">Restaurant SEO</th>
                    <th className="py-4 px-6 font-bold w-1/2 border-l border-teal-600">Paid Advertising</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-700">
                  <tr className="hover:bg-gray-50/80 transition-colors">
                    <td className="py-4 px-6 font-medium">Builds organic search visibility over time</td>
                    <td className="py-4 px-6 border-l border-gray-100">Provides paid search visibility</td>
                  </tr>
                  <tr className="hover:bg-gray-50/80 transition-colors">
                    <td className="py-4 px-6 font-medium">Requires ongoing optimisation</td>
                    <td className="py-4 px-6 border-l border-gray-100">Requires an advertising budget</td>
                  </tr>
                  <tr className="hover:bg-gray-50/80 transition-colors">
                    <td className="py-4 px-6 font-medium">Supports long-term organic discovery</td>
                    <td className="py-4 px-6 border-l border-gray-100">Provides immediate paid visibility while campaigns run</td>
                  </tr>
                  <tr className="hover:bg-gray-50/80 transition-colors">
                    <td className="py-4 px-6 font-medium">Improvements continue providing value after they're made</td>
                    <td className="py-4 px-6 border-l border-gray-100">Performance depends on budget, targeting and setup</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm text-gray-700 leading-relaxed font-medium">
              Most restaurants get the most value from using both together. Neither is categorically better — it depends on goals, timeline and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Section 11: Common Restaurant SEO Mistakes */}
      <section className="w-full bg-gray-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <FloatingElement>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-semibold mb-3">
                <AlertTriangle className="w-3.5 h-3.5 text-red-500" />
                <span>Avoid Critical Pitfalls</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-600 mb-4">
                Common Restaurant SEO Mistakes
              </h2>
            </FloatingElement>
            <p className="text-gray-600 text-sm sm:text-base">
              Practices that hurt visibility, create crawl issues, or damage customer trust.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mistakes.map((mistake, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="p-4 rounded-xl bg-white border border-gray-200 hover:border-red-300 hover:shadow-lg transition-all flex items-start gap-3 cursor-pointer"
              >
                <div className="w-2 h-2 rounded-full bg-red-400 mt-2 shrink-0" />
                <p className="text-xs sm:text-sm text-gray-800 font-medium leading-relaxed">{mistake}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 12: How Long Does Restaurant SEO Take? */}
      <section className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <FloatingElement>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold">
              <Clock className="w-3.5 h-3.5 text-teal-600" />
              <span>Timelines & Expectations</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-600 mt-2">
              How Long Does Restaurant SEO Take?
            </h2>
          </FloatingElement>

          <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed text-left sm:text-center">
            <p>
              There's no universal timeline, and we'd be cautious of anyone who gives you one without knowing your situation. It typically depends on the domain's history and authority, competition, location, number of branches, current website quality, existing content depth, the state of your Google Business Profile, genuine search demand, and how quickly changes get implemented.
            </p>
            <p>
              SEO also tends to be ongoing rather than a one-time project, since search behaviour and Google's systems keep shifting. We won't guarantee page-1 rankings, a #1 position, a specific Maps ranking, or any particular number of calls, reservations, orders or revenue.
            </p>
          </div>
        </div>
      </section>

      {/* Section 13: Frequently Asked Questions */}
      <section className="w-full bg-gradient-to-br from-gray-50 to-teal-50/30 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <FloatingElement>
              <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-4">
                Frequently Asked Questions
              </h2>
            </FloatingElement>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
              Clear answers to common questions about restaurant SEO and Google Maps optimization in Dubai.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left p-4 sm:p-6 hover:bg-gray-50 transition-colors duration-200 
                  group px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-teal-900 to-teal-700 text-white text-base sm:text-lg font-semibold rounded-full shadow-md hover:shadow-teal-500/50 transition-all duration-300 cursor-pointer"
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

      {/* Section 14: Final CTA Section (Final H2 per Section 3) */}
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
                Grow Your Restaurant's Search
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white">
                  Visibility in Dubai
                </span>
              </h2>
            </FloatingElement>

            <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              If you'd like a clearer picture of how your restaurant, café or food business currently appears in search and on Google Maps, DigLip7 can walk through a restaurant website SEO audit, review your Google Business Profile setup, and talk through where local SEO could realistically help.
            </p>

            <p className="text-sm sm:text-base text-teal-100 max-w-2xl mx-auto mb-8">
              This isn't a pitch for guaranteed rankings, Maps positions, or a promised number of calls or bookings — SEO doesn't work that way. What we can offer is an honest look at where your online presence stands today and a practical plan for improving it.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <motion.button
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-teal-700 font-semibold rounded-full shadow-xl hover:shadow-2xl hover:bg-gray-50 transition-all duration-300 text-sm sm:text-base cursor-pointer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Request a Restaurant SEO Consultation
                  <Sparkles className="inline-block ml-2 w-4 h-4 sm:w-5 sm:h-5 text-teal-600" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Suggested Internal Links (Styled div, not H2 per Section 3) */}
      <section className="w-full bg-gray-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <FloatingElement>
            <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-600 mb-6">
              Suggested Internal Links
            </div>
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

export default DubaiRestaurantSEO;
