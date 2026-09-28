import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../../../../components/SEO";
import {
  MapPin,
  LayoutGrid,
  BookOpen,
  ShoppingCart,
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
  Tag,
  Filter,
  TrendingUp,
  Cpu,
  Truck,
  Smartphone,
  Share2,
} from "lucide-react";

// Exact image paths matching Section 9 recommendations
const heroImgSrc = "/src/images/ecommerce-seo-dubai-strategy.webp";
const auditImgSrc = "/src/images/ecommerce-seo-audit-dubai.webp";
const productPageImgSrc = "/src/images/product-page-seo-dubai.webp";
const categoryPageImgSrc = "/src/images/category-page-seo-dubai.webp";
const platformImgSrc = "/src/images/ecommerce-platform-seo-dubai.webp";
const technicalImgSrc = "/src/images/technical-ecommerce-seo-dubai.webp";
const keywordImgSrc = "/src/images/ecommerce-keyword-research-dubai.webp";
const analyticsImgSrc = "/src/images/ecommerce-seo-analytics-dubai.webp";

// Automatic path fallback between /src/images/ and /images/ so that whenever
// the user drops the file in either src/images or public/images, it displays instantly
const handleImgFallback = (e, filename) => {
  if (e.currentTarget.src.includes("/src/images/")) {
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
// Strict Content Data (From User E-commerce SEO Dubai Package)
// ---------------------------------------------------------------------------

const pageUrl = "https://diglip7.com/uae/dubai/ecommerce-seo/";

const breadcrumbTrail = [
  { label: "Home", href: "/" },
  { label: "UAE", href: "/uae/seo-services/" },
  { label: "Dubai", href: "/uae/dubai/seo-services/" },
  { label: "E-commerce SEO", href: "/uae/dubai/ecommerce-seo/" },
];

const searchIntentTypes = [
  {
    title: "Transactional queries",
    description: "a shopper ready to buy a specific product",
    icon: ShoppingCart,
  },
  {
    title: "Commercial investigation",
    description: "comparing options before deciding",
    icon: Scale,
  },
  {
    title: "Category-level queries",
    description: "browsing a type of product rather than a specific item",
    icon: LayoutGrid,
  },
  {
    title: "Informational queries",
    description: "research that may lead to a purchase later",
    icon: HelpCircle,
  },
];

const dubaiMarketFactors = [
  {
    icon: Target,
    title: "Local commercial intent",
    description:
      "some searches are tied to Dubai or the UAE specifically, particularly for stores emphasising local delivery or availability.",
  },
  {
    icon: Globe,
    title: "UAE-wide reach",
    description:
      "many stores sell across the Emirates rather than to Dubai exclusively, which changes how location terms should (or shouldn't) be used.",
  },
  {
    icon: Compass,
    title: "International customers",
    description:
      "some Dubai-based stores serve international markets, which brings in genuine international SEO considerations.",
  },
  {
    icon: FileText,
    title: "Bilingual audiences",
    description:
      "Arabic and English content considerations apply where a store genuinely serves both audiences, not as a default assumption.",
  },
  {
    icon: Truck,
    title: "Delivery and availability information",
    description:
      "clearly and accurately presented, this affects both user trust and how well a product page satisfies search intent.",
  },
];

const ecommerceServices = [
  {
    icon: Search,
    title: "E-commerce SEO Audit",
    description:
      "We review technical SEO, indexation, crawlability, site architecture, product and category URL structure, duplicate content, canonicalization, internal linking, metadata, structured data, mobile usability, Core Web Vitals and existing organic performance through Search Console — establishing a clear baseline before any changes are made.",
  },
  {
    icon: Target,
    title: "E-commerce Keyword Research",
    description:
      "We research product keywords, category keywords, brand and non-brand terms, commercial and transactional queries, and long-tail product searches, including Dubai/UAE location modifiers where genuinely relevant — then map each keyword set to the correct page type rather than forcing everything onto one page.",
  },
  {
    icon: Tag,
    title: "Product Page SEO",
    description:
      "This covers product titles, descriptions, search-intent alignment, unique content, specifications and relevant attributes, images and ALT text, internal links, product structured data, availability and price information, legitimate reviews where they exist, and canonical URLs. We don't recommend copying manufacturer descriptions across hundreds of products — duplicate content at that scale tends to actively hurt visibility.",
  },
  {
    icon: LayoutGrid,
    title: "Category Page SEO",
    description:
      "This includes category keyword targeting, search-intent alignment, genuine category introductions (not just a product grid), internal links, filters, pagination, breadcrumbs, metadata and structured data where applicable. A category page built as nothing more than a bare list of product links tends to underperform — it needs enough context to actually satisfy the search that brought someone there.",
  },
  {
    icon: Settings,
    title: "Technical E-commerce SEO",
    description:
      "We address crawlability, indexation, XML sitemaps, robots.txt, canonicals, duplicate and parameter URLs, faceted navigation, pagination, redirects, 404 handling, JavaScript rendering, mobile usability, site speed, Core Web Vitals, HTTPS and overall URL architecture — issues that become steadily more important as a catalogue grows.",
  },
  {
    icon: Layers,
    title: "E-commerce Site Architecture",
    description:
      "Where relevant, we work toward a structure like Homepage → Category → Subcategory → Product, focused on manageable crawl depth, sensible internal linking, breadcrumbs, related products and categories, clear navigation and functional on-site search — without adding hierarchy levels the catalogue doesn't need.",
  },
  {
    icon: Compass,
    title: "Internal Linking",
    description:
      "We build strategic links between categories, subcategories, products, buying guides, blog content and brand pages where appropriate, using descriptive, natural anchor text rather than repeated exact-match links.",
  },
  {
    icon: FileText,
    title: "Product Schema & Structured Data",
    description:
      "Where accurate, we implement Product, Offer, AggregateRating and Review (only where legitimate), BreadcrumbList, Organization and WebSite schema. We never invent ratings, reviews, prices, availability, offers or brand information — structured data must always match what's genuinely visible on the page.",
  },
  {
    icon: BookOpen,
    title: "E-commerce Content SEO",
    description:
      "This includes buying guides, product comparisons, product education, FAQs, category content, use-case content and informational articles that support organic discovery beyond the product and category pages themselves. We avoid producing large volumes of low-value, AI-generated content purely to pad the site — every piece needs to earn its place.",
  },
  {
    icon: Sparkles,
    title: "E-commerce Image SEO",
    description:
      "Covers descriptive filenames, accurate ALT text, image compression, appropriate dimensions, modern formats like WebP where suitable, lazy loading where appropriate, product image quality, and avoiding unnecessary duplication of the same image across multiple listings.",
  },
  {
    icon: ShoppingCart,
    title: "Shopify SEO Dubai",
    description:
      "Shopify stores have their own architecture considerations — collection and product URL structures, metadata controls, canonical handling, potential duplicate URLs from certain app or filter setups, internal linking, structured data, and how installed apps affect site performance. We work within Shopify's platform constraints to address these rather than fighting the platform. (DigLip7 does not claim official Shopify partner status unless independently verified.)",
  },
  {
    icon: Globe,
    title: "WooCommerce SEO Dubai",
    description:
      "WooCommerce stores run on WordPress, which brings a different set of considerations — product category structures, product pages, filter handling, indexation control, plugin choices, structured data implementation, site performance and XML sitemap configuration. Our approach adapts to how a given WooCommerce setup is actually built rather than applying one fixed template. (DigLip7 does not claim official platform partnerships unless independently verified.)",
  },
];

const storeProfiles = [
  {
    title: "Local Dubai store",
    description:
      "emphasis on Dubai-specific intent, accurate business information, local visibility, delivery-area clarity and local commercial searches.",
  },
  {
    title: "UAE-wide store",
    description:
      "emphasis on country-level product and category visibility rather than city-specific targeting.",
  },
  {
    title: "International store",
    description:
      "emphasis on international SEO considerations: country and language targeting, hreflang where genuinely appropriate, and site architecture that supports more than one market without creating duplicate-content problems.",
  },
];

const businessTypes = [
  "Fashion",
  "beauty and skincare",
  "electronics",
  "home and furniture",
  "health and wellness",
  "food and grocery",
  "sports and fitness",
  "B2B e-commerce",
  "luxury products",
  "local retailers moving online",
];

const approachSteps = [
  {
    id: 1,
    title: "E-commerce SEO Audit",
    description: "identify technical, content and structural issues.",
    icon: Search,
  },
  {
    id: 2,
    title: "Keyword & Search Intent Research",
    description: "map keywords to product, category and content pages.",
    icon: Target,
  },
  {
    id: 3,
    title: "Site Architecture Review",
    description: "improve navigation and crawl paths where needed.",
    icon: Layers,
  },
  {
    id: 4,
    title: "Technical SEO",
    description: "address indexation, canonicalization, crawlability and performance.",
    icon: Settings,
  },
  {
    id: 5,
    title: "Product & Category Optimization",
    description: "improve page-level relevance and content.",
    icon: Tag,
  },
  {
    id: 6,
    title: "Internal Linking & Content",
    description: "strengthen relationships between important pages.",
    icon: Compass,
  },
  {
    id: 7,
    title: "Structured Data",
    description: "implement accurate, relevant schema.",
    icon: FileText,
  },
  {
    id: 8,
    title: "Measurement & Continuous Improvement",
    description: "use performance data to refine the strategy.",
    icon: BarChart3,
  },
];

const commonMistakes = [
  "Duplicate product descriptions",
  "Thin category pages",
  "Incorrect canonical tags",
  "Indexing filter/parameter URLs unnecessarily",
  "Poor internal linking",
  "Missing product structured data",
  "Slow product pages",
  "Poor mobile UX",
  "Keyword stuffing",
  "Ignoring category-level search intent",
  "Automatically generating hundreds of thin pages",
  "Removing discontinued products without a redirect strategy",
  "Ignoring Search Console data",
  "Creating duplicate location pages",
  "Using fake reviews or ratings",
  "Publishing AI-generated content without editorial quality control",
];

const trackedMetrics = [
  "organic impressions",
  "organic clicks",
  "non-brand search visibility",
  "product and category page traffic",
  "indexed pages",
  "search queries",
  "CTR",
  "organic conversions",
  "e-commerce transactions and revenue attributed to organic search where tracking is properly configured",
  "conversion rate",
  "technical health",
  "Core Web Vitals",
  "Search Console trends",
];

const strategyLayers = [
  "business goals",
  "the actual product and category inventory",
  "search intent",
  "keyword mapping",
  "technical SEO",
  "site architecture",
  "product optimization",
  "category optimization",
  "content strategy",
  "structured data",
  "internal linking",
  "local SEO where relevant",
  "analytics and Search Console monitoring",
  "continuous optimization based on real performance data",
];

const faqs = [
  {
    question: "What is E-commerce SEO in Dubai?",
    answer:
      "E-commerce SEO in Dubai is the process of optimizing an online store's product pages, category pages, technical infrastructure and content so it ranks organically for the searches shoppers in this market actually use.",
  },
  {
    question: "How can E-commerce SEO help an online store?",
    answer:
      "It helps qualified shoppers discover the right product or category pages through organic search, reducing reliance on paid channels alone and building visibility that continues working over time.",
  },
  {
    question: "How is e-commerce SEO different from regular SEO?",
    answer:
      "E-commerce SEO focuses specifically on product and category page optimization, transactional and commercial search intent, and technical issues unique to large, frequently-changing catalogues — areas general SEO doesn't address in the same depth.",
  },
  {
    question: "Do you provide E-commerce SEO services in Dubai?",
    answer:
      "Yes — our E-commerce SEO Dubai service covers technical audits, keyword research, product and category page optimization, structured data, internal linking and ongoing measurement for online stores.",
  },
  {
    question: "Can E-commerce SEO improve product page visibility?",
    answer:
      "Yes, through a combination of unique content, accurate structured data, technical health and internal linking, though results depend on competition, demand and the page's starting condition.",
  },
  {
    question: "How do I optimize product pages for Google?",
    answer:
      "Focus on unique, specific product content, accurate structured data, clear availability and price information, quality images with descriptive ALT text, and internal links from relevant category and related-product pages.",
  },
  {
    question: "What is category page SEO?",
    answer:
      "Category page SEO ensures a category page has enough genuine context — not just a list of products — to satisfy category-level search intent, supported by clear internal linking, sensible filter/pagination handling and relevant metadata.",
  },
  {
    question: "Is Shopify SEO different from WooCommerce SEO?",
    answer:
      "Yes — the two platforms handle URL structure, metadata, canonicals and technical configuration differently, so the specific implementation steps differ even though the underlying SEO principles are the same.",
  },
  {
    question: "How important is technical SEO for an online store?",
    answer:
      "Very important, especially as a catalogue grows — issues like duplicate content, unmanaged parameter URLs and poor crawlability can prevent even well-written product content from being properly indexed.",
  },
  {
    question: "What is product schema?",
    answer:
      "Product schema is structured data that describes a product's details — such as name, price and availability — to search engines in a standardized format, helping them understand the page's content accurately.",
  },
  {
    question: "How long does E-commerce SEO take?",
    answer:
      "Timelines vary based on catalogue size, competition and the site's starting technical condition. Some fixes show effects relatively quickly, while competitive terms and larger sites generally take longer to show meaningful movement.",
  },
  {
    question: "How do you measure e-commerce SEO performance?",
    answer:
      "Through metrics like organic impressions and clicks, product/category page traffic, indexed pages, CTR, organic conversions and transactions where tracking is configured, and technical health via Search Console.",
  },
  {
    question: "Can you optimize an existing online store?",
    answer:
      "Yes — most of our e-commerce SEO work starts with auditing and improving an existing store rather than building from scratch, addressing technical, content and structural issues based on what's already there.",
  },
  {
    question: "Does E-commerce SEO work for businesses selling across the UAE?",
    answer:
      "Yes — the approach adjusts based on whether a store targets Dubai specifically, the wider UAE, or international markets, with keyword and content strategy shaped accordingly.",
  },
];

// Connected JSON-LD Schema (Section 11)
const jsonLdGraph = [
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://diglip7.com/uae/dubai/ecommerce-seo/#webpage",
        "url": "https://diglip7.com/uae/dubai/ecommerce-seo/",
        "name": "E-commerce SEO Dubai | Online Store SEO Services | DigLip7",
        "description":
          "Grow your online store's organic visibility with E-commerce SEO Dubai services from DigLip7. Optimize products, categories, technical SEO and site structure.",
        "isPartOf": { "@id": "https://diglip7.com/#website" },
        "breadcrumb": { "@id": "https://diglip7.com/uae/dubai/ecommerce-seo/#breadcrumb" },
        "mainEntity": { "@id": "https://diglip7.com/uae/dubai/ecommerce-seo/#service" },
      },
      {
        "@type": "Service",
        "@id": "https://diglip7.com/uae/dubai/ecommerce-seo/#service",
        "name": "E-commerce SEO Services in Dubai",
        "serviceType": "E-commerce Search Engine Optimization",
        "url": "https://diglip7.com/uae/dubai/ecommerce-seo/",
        "provider": { "@id": "https://diglip7.com/#organization" },
        "areaServed": {
          "@type": "City",
          "name": "Dubai",
          "containedInPlace": { "@type": "Country", "name": "United Arab Emirates" },
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://diglip7.com/uae/dubai/ecommerce-seo/#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://diglip7.com/" },
          { "@type": "ListItem", "position": 2, "name": "UAE", "item": "https://diglip7.com/uae/seo-services/" },
          { "@type": "ListItem", "position": 3, "name": "Dubai", "item": "https://diglip7.com/uae/dubai/seo-services/" },
          { "@type": "ListItem", "position": 4, "name": "E-commerce SEO" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://diglip7.com/uae/dubai/ecommerce-seo/#faq",
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

function DubaiEcommerceSEO() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="overflow-x-hidden bg-white w-full">
      <SEO
        title="E-commerce SEO Dubai | Online Store SEO Services | DigLip7"
        description="Grow your online store's organic visibility with E-commerce SEO Dubai services from DigLip7. Optimize products, categories, technical SEO and site structure."
        canonical={pageUrl}
        ogType="website"
        ogImage="https://diglip7.com/images/ecommerce-seo-dubai.jpg"
        keywords="E-commerce SEO Dubai, E-commerce SEO Services Dubai, E-commerce SEO Company Dubai, E-commerce SEO Agency Dubai, E-commerce SEO Services in Dubai, E-commerce Search Engine Optimization Dubai, Online Store SEO Dubai, E-commerce Website SEO Dubai, E-commerce SEO Consultant Dubai, E-commerce SEO Expert Dubai, E-commerce Website Optimization Dubai, SEO for E-commerce Websites Dubai, E-commerce Organic SEO Dubai, E-commerce Keyword Research Dubai, E-commerce Technical SEO Dubai, E-commerce On-Page SEO Dubai, E-commerce Content SEO Dubai, Product Page SEO Dubai, Category Page SEO Dubai, Shopify SEO Dubai, WooCommerce SEO Dubai, DigLip7"
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
              <span className="text-gray-900">E-commerce SEO Dubai </span>
              <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                for Sustainable Online Store Growth
              </span>
            </h1>

            {/* Direct Answer */}
            <p className="text-gray-700 text-sm sm:text-base lg:text-lg mt-4 mb-3 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              E-commerce SEO Dubai involves optimizing an online store so that relevant product, category and commercial search queries can be discovered and properly understood by search engines. It brings together product and category page visibility, search intent alignment, technical health, internal linking, structured data and content — all working to bring qualified, ready-to-buy search users to the right pages, not just to the homepage.
            </p>
            <p className="text-gray-700 text-sm sm:text-base lg:text-lg mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <span className="font-semibold text-blue-700">DigLip7</span> approaches e-commerce SEO as a combination of technical foundation, page-level optimization and ongoing measurement, built around your actual product catalogue rather than a generic SEO template.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Link to="/contact" className="inline-block">
                <motion.button
                  className="group px-7 sm:px-9 py-3.5 sm:py-4 bg-gradient-to-r from-teal-700 to-teal-900 text-white text-base sm:text-lg font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get an E-commerce SEO Consultation
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
                onError={(e) => handleImgFallback(e, "ecommerce-seo-dubai-strategy.webp")}
                alt="E-commerce SEO strategy for online stores in Dubai"
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
        {/* Why Online Stores Need Search Visibility */}
        <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 w-full">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 lg:gap-14 mb-20">
            <motion.img
              src={auditImgSrc}
              onError={(e) => handleImgFallback(e, "ecommerce-seo-audit-dubai.webp")}
              alt="E-commerce SEO audit for a Dubai online store"
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
                  Why Online Stores Need Search Visibility
                </h2>
              </FloatingElement>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Shoppers rarely start at a homepage — they search for a specific product, a category, or a comparison, and land wherever search engines send them. That means an online store's organic performance depends less on the site as a whole and more on whether each individual product and category page is set up to be found and understood.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Product pages and category pages need different treatment: a product page has to communicate specifics — attributes, availability, price context — while a category page has to help both users and search engines understand the breadth of what's available and how it's organized. As a catalogue grows into hundreds or thousands of SKUs, technical SEO issues that were invisible at a small scale — duplicate content, thin pages, unmanaged filter URLs — start to genuinely limit visibility.
              </p>
              <p className="text-gray-700 leading-relaxed">
                For Dubai-based stores, this often means layering in location and commercial relevance too: whether you're serving Dubai specifically, the wider UAE, or international customers changes how keyword targeting, content and site architecture should be structured. <span className="font-semibold text-blue-700">DigLip7</span>'s approach starts with a technical and content audit of your actual store, then builds a strategy around your catalogue, your market and your growth goals — without promising a fixed ranking, traffic or sales outcome, since none of those can be guaranteed by any agency.
              </p>
            </div>
          </div>

          {/* What Is E-commerce SEO? */}
          <div className="max-w-7xl mx-auto bg-gradient-to-br from-gray-50 to-teal-50/30 rounded-3xl p-8 sm:p-12 mb-20 border border-gray-100 shadow-md">
            <div className="w-full">
              <FloatingElement>
                <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-4 text-center">
                  What Is E-commerce SEO?
                </h2>
              </FloatingElement>
              <p className="text-gray-800 text-base sm:text-lg font-medium mb-4 leading-relaxed">
                <strong>Direct answer:</strong> E-commerce SEO is the practice of optimizing an online store's product pages, category pages, technical infrastructure and content so it ranks organically for the searches shoppers actually use — as distinct from general SEO, which applies more broadly across any type of website.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The distinction matters because e-commerce search intent breaks down differently:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {searchIntentTypes.map((intent) => (
                  <div
                    key={intent.title}
                    className="p-4 rounded-xl bg-white border border-teal-100 shadow-sm flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                      <intent.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm mb-1">{intent.title}</h4>
                      <p className="text-gray-600 text-xs leading-relaxed">{intent.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed">
                Each intent type usually maps to a different page type — product, category, or supporting content — and e-commerce SEO is largely about making sure that mapping is right, alongside the technical work needed to let search engines actually crawl and index a large, frequently-changing catalogue.
              </p>
            </div>
          </div>

          {/* Why E-commerce SEO Matters for Dubai Businesses */}
          <div className="max-w-7xl mx-auto mb-20">
            <div className="text-center max-w-5xl mx-auto mb-12">
              <FloatingElement>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Why E-commerce SEO Matters for Dubai Businesses
                </h2>
              </FloatingElement>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dubai's online retail environment is competitive across nearly every category, and mobile shopping behaviour is a major factor in how products get discovered — from initial search through to checkout. Product discovery through organic search complements other channels rather than replacing them, and for many stores it becomes one of the more cost-effective ways to reach shoppers who are already looking for what they sell.
              </p>
              <p className="text-gray-600 text-sm">
                A few things shape e-commerce SEO strategy for stores operating in or from Dubai:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {dubaiMarketFactors.map((factor, index) => (
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

            <p className="text-center text-xs sm:text-sm text-gray-500 italic max-w-3xl mx-auto">
              We don't assume every Dubai store should target only Dubai, or that every shopper behaves the same way — the right scope depends on where your actual customers are.
            </p>
          </div>

          {/* Our E-commerce SEO Services in Dubai (12 Services Grid) */}
          <div className="bg-white py-12 text-center mb-16">
            <div className="max-w-5xl mx-auto mb-12">
              <FloatingElement>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Our E-commerce SEO Services in Dubai
                </h2>
              </FloatingElement>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto text-left">
              {ecommerceServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="bg-gray-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all cursor-pointer border border-gray-100 flex flex-col justify-between"
                  whileHover={{ scale: 1.03 }}
                  animate={{ scale: [1, 1.01, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: (index % 3) * 0.3 }}
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


          {/* E-commerce SEO for Dubai Online Stores */}
          <div className="max-w-7xl mx-auto mb-20">
            <div className="text-center mb-10">
              <FloatingElement>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                  E-commerce SEO for Dubai Online Stores
                </h2>
              </FloatingElement>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {storeProfiles.map((profile) => (
                <div
                  key={profile.title}
                  className="bg-white rounded-2xl p-6 shadow-md border border-teal-100 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-xl font-bold text-teal-900 mb-3">{profile.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{profile.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-xs sm:text-sm text-gray-500 italic">
              Not every Dubai-based store fits the same profile — the right scope depends on where your actual customers and shipping coverage are.
            </p>
          </div>


          {/* E-commerce SEO for Different Business Types */}
          <div className="max-w-7xl mx-auto text-center mb-20">
            <FloatingElement>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                E-commerce SEO for Different Business Types
              </h2>
            </FloatingElement>
            <p className="text-gray-700 max-w-5xl mx-auto mb-8 leading-relaxed text-sm sm:text-base">
              Fashion, beauty and skincare, electronics, home and furniture, health and wellness, food and grocery, sports and fitness, B2B e-commerce, luxury products, and local retailers moving online each bring their own search behaviour — fashion and beauty often lean on visual and seasonal search, electronics on specification-heavy comparison searches, B2B on longer research cycles, and grocery on frequency and locality. (Examples here are illustrative; we don't cite specific DigLip7 client results unless independently verified.)
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {businessTypes.map((type) => (
                <div
                  key={type}
                  className="flex items-center gap-2 bg-gradient-to-r from-teal-50 to-[#c89d5a]/10 px-4 py-2.5 rounded-full border border-teal-100"
                >
                  <Tag className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                  <span className="text-sm font-medium text-gray-800 capitalize">{type}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Local SEO + E-commerce SEO & E-commerce SEO + PPC */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <Card3D className="h-full">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-teal-100 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-700 mb-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Local SEO + E-commerce SEO
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                    For stores with a physical location, a showroom, click-and-collect service or local delivery focus, local SEO can meaningfully complement e-commerce SEO — particularly through Google Business Profile where eligible and Dubai-specific local search visibility.
                  </p>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    This page focuses on organic e-commerce search optimization; if local discovery is a priority for your business, see our dedicated{" "}
                    <Link
                      to="/uae/dubai/local-seo/"
                      className="text-teal-800 font-semibold underline hover:text-[#c89d5a] transition-colors"
                    >
                      Local SEO Dubai
                    </Link>{" "}
                    page.
                  </p>
                </div>
              </div>
            </Card3D>

            <Card3D className="h-full">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-teal-100 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-700 mb-4">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    E-commerce SEO + PPC
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                    SEO builds organic, long-term visibility for product and category discovery through content and technical improvement, without an ongoing per-click cost once established.
                  </p>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                    PPC provides paid visibility based on budget and campaign targeting, with faster activation but a cost that continues as long as the campaign runs.
                  </p>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    Neither is inherently better — many online stores run both, using PPC for immediate visibility on competitive terms while SEO builds toward sustainable organic traffic. If paid search fits your plan, see our{" "}
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
            </Card3D>
          </div>

          {/* Our E-commerce SEO Process (8 Steps with Desktop Line) */}
          <div className="bg-white py-12 px-2 text-center mb-20">
            <div className="max-w-5xl mx-auto mb-12">
              <FloatingElement>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Our E-commerce SEO Process
                </h2>
              </FloatingElement>
              <p className="text-gray-600 mt-3 text-sm sm:text-base">
                We don't guarantee outcomes at any step — this is an ongoing process shaped by your catalogue, competition and market.
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

          {/* Common E-commerce SEO Mistakes */}
          <div className="max-w-7xl mx-auto mb-20">
            <div className="text-center mb-8">
              <FloatingElement>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                  Common E-commerce SEO Mistakes
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

          {/* E-commerce SEO Results & Measurement (Section 9: Analytics) */}
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 lg:gap-14 mb-20 bg-gray-50 rounded-3xl p-8 sm:p-12 border border-gray-100">
            <div className="flex-1">
              <FloatingElement>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  E-commerce SEO Results & Measurement
                </h2>
              </FloatingElement>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                We don't promise rankings or revenue. What we track:
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
                Results vary based on competition, product demand, website authority, technical condition, inventory size, content quality, search intent alignment, implementation consistency and broader market conditions — all factors outside any agency's full control.
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
                  src={analyticsImgSrc}
                  onError={(e) => handleImgFallback(e, "ecommerce-seo-analytics-dubai.webp")}
                  alt="Organic e-commerce SEO performance reporting"
                  width="800"
                  height="600"
                  loading="lazy"
                  className="rounded-2xl shadow-xl w-full object-cover bg-gray-50"
                />
              </Card3D>
            </motion.div>
          </div>

          {/* How Long Does E-commerce SEO Take? */}
          <div className="max-w-5xl mx-auto text-center mb-20">
            <FloatingElement>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How Long Does E-commerce SEO Take?
              </h2>
            </FloatingElement>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-6">
              Technical corrections can often be implemented quickly, but search engines still need time to recrawl and reassess affected pages. Larger catalogues generally require longer optimization cycles, and competitive commercial keywords tend to take longer to move than niche or long-tail terms. Product and category performance can vary considerably even within the same store. Results should be judged using trends over time rather than a few days of data, and we won't promise page 1, a #1 ranking, specific traffic, specific sales, a specific ROI, or a fixed timeframe.
            </p>
          </div>

          {/* E-commerce SEO Strategy for Dubai */}
          <div className="max-w-7xl mx-auto mb-20">
            <div className="text-center mb-10">
              <FloatingElement>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                  E-commerce SEO Strategy for Dubai
                </h2>
              </FloatingElement>
              <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base">
                A complete strategy typically works across:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
              {strategyLayers.map((layer, idx) => (
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
              kept centred on organic search rather than drifting into broader marketing activity.
            </p>
          </div>

          {/* Suggested Internal Links (Section 8) */}
          <div className="max-w-7xl mx-auto mb-20 bg-gradient-to-r from-teal-50/70 via-gray-50 to-amber-50/30 border border-teal-100 rounded-3xl p-8 sm:p-10 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 text-center">
              Suggested Internal Links
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/uae/dubai/ecommerce-marketing/"
                className="px-4 py-2 rounded-full bg-teal-800 text-white text-xs sm:text-sm font-semibold hover:bg-teal-900 transition-all shadow-sm"
              >
                E-commerce Marketing Dubai
              </Link>
              <Link
                to="/uae/dubai/seo-services/"
                className="px-4 py-2 rounded-full bg-white border border-teal-200 text-teal-800 text-xs sm:text-sm font-semibold hover:bg-teal-50 transition-all shadow-sm"
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
                to="/uae/dubai/local-seo/"
                className="px-4 py-2 rounded-full bg-white border border-teal-200 text-teal-800 text-xs sm:text-sm font-semibold hover:bg-teal-50 transition-all shadow-sm"
              >
                Local SEO Dubai
              </Link>
              <Link
                to="/digital-market/PPC-Advertising"
                className="px-4 py-2 rounded-full bg-white border border-teal-200 text-teal-800 text-xs sm:text-sm font-semibold hover:bg-teal-50 transition-all shadow-sm"
              >
                PPC Advertising
              </Link>
              <Link
                to="/digital-market/content-marketing"
                className="px-4 py-2 rounded-full bg-white border border-teal-200 text-teal-800 text-xs sm:text-sm font-semibold hover:bg-teal-50 transition-all shadow-sm"
              >
                content marketing
              </Link>
              <Link
                to="/digital-market/social-media-marketing"
                className="px-4 py-2 rounded-full bg-white border border-teal-200 text-teal-800 text-xs sm:text-sm font-semibold hover:bg-teal-50 transition-all shadow-sm"
              >
                social media marketing
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
                Get answers to the most common questions about our e-commerce SEO services in Dubai.
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
                  Ready to Grow Your Store's
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white">
                    Organic Visibility?
                  </span>
                </h2>
              </FloatingElement>

              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
                If you'd like to talk through your product catalogue, technical setup or overall organic search strategy for your Dubai-based store, we're glad to walk through it with you.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/contact">
                  <motion.button
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-teal-700 font-semibold rounded-full shadow-xl hover:shadow-2xl hover:bg-gray-50 transition-all duration-300 text-sm sm:text-base cursor-pointer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get an E-commerce SEO Consultation
                    <Sparkles className="inline-block ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.button>
                </Link>
                <Link to="/contact">
                  <motion.button
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 text-sm sm:text-base cursor-pointer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Discuss Your Online Store SEO Strategy
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

export default DubaiEcommerceSEO;
