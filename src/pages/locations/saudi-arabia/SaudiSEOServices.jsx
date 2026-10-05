import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../../../components/SEO";
import {
  Search,
  CheckCircle,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Home,
  Target,
  BarChart3,
  Building2,
  FileText,
  Settings,
  Layers,
  MapPin,
  Network,
  FolderTree,
  Zap,
  ShoppingBag,
  Stethoscope,
  ShieldCheck,
  Languages,
  Sparkles,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

// Image Paths with reliable fallbacks
const heroImgSrc = "/images/seo-service-saudi-arabia.webp";
const intentImgSrc = "/images/seo-search-intent-saudi-arabia.webp";
const auditImgSrc = "/images/technical-seo-saudi-arabia.webp";
const localMapsImgSrc = "/images/local-seo-saudi-arabia.webp";
const bilingualImgSrc = "/images/arabic-english-seo-saudi-arabia.webp";
const ecommerceImgSrc = "/images/ecommerce-seo-saudi-arabia.webp";
const reportingImgSrc = "/images/seo-reporting-saudi-arabia.webp";

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

// Floating Animation Component
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

// Image Slot with multi-path fallback
const SEOImageSlot = ({
  src,
  alt,
  width = 800,
  height = 600,
  aspect = "aspect-[4/3]",
  className = "",
  priority = false,
  filename = "",
  fallbackIcon = Search,
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  const Icon = fallbackIcon;

  const handleError = () => {
    if (filename && imgSrc.includes("/images/")) {
      setImgSrc(`/images/${filename}`);
    } else if (filename && !imgSrc.includes("ngrok-free.dev")) {
      setImgSrc(`https://lunar-crawlers-blaspheme.ngrok-free.dev/images/${filename}`);
    } else {
      setHasError(true);
    }
  };

  return (
    <div
      className={`relative w-full rounded-2xl overflow-hidden bg-gradient-to-br from-teal-50/40 via-white to-gray-50 border border-teal-100/80 shadow-md flex items-center justify-center ${aspect} ${className}`}
    >
      {!hasError ? (
        <img
          src={imgSrc}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          onError={handleError}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="p-8 text-center text-sm font-medium text-teal-900/60 select-none flex flex-col items-center justify-center gap-3 w-full h-full bg-gradient-to-b from-white/90 to-teal-50/50">
          <div className="w-12 h-12 rounded-full bg-teal-100/70 text-teal-700 flex items-center justify-center shadow-xs">
            <Icon className="w-6 h-6" />
          </div>
          <span className="max-w-xs leading-relaxed text-xs sm:text-sm font-semibold text-gray-700">{alt}</span>
        </div>
      )}
    </div>
  );
};

// ---------------------------------------------------------------------------
// Document Data (Strictly Verbatim)
// ---------------------------------------------------------------------------

const breadcrumbTrail = [
  { label: "Home", href: "/" },
  { label: "Saudi Arabia", href: "/saudi-arabia/seo-services" },
  { label: "SEO Services", href: "/saudi-arabia/seo-services" },
];

const geographicRules = [
  "genuine business coverage,",
  "meaningful search demand,",
  "useful localised information, and",
  "enough unique value to justify the page.",
];

const auditQuestions = [
  "What is preventing important pages from being crawled?",
  "Which pages are actually indexed?",
  "Are duplicate URLs or incorrect canonical tags creating confusion?",
  "Do redirects work, and are old URLs causing problems after a migration?",
  "Is the sitemap accurate?",
  "Are important pages internally linked, and is the architecture logical?",
  "Can JavaScript-rendered pages be accessed?",
  "Are unnecessary URL parameters being indexed?",
  "Do mobile users get a good experience, and are Core Web Vitals acceptable?",
  "Does structured data accurately describe each page?",
];

const roadmapStages = [
  {
    stage: "Stage 1",
    title: "Understand the Business",
    desc: "We identify services, products, markets, locations, customers and commercial priorities.",
    icon: Target,
  },
  {
    stage: "Stage 2",
    title: "Diagnose the Website",
    desc: "We review technical SEO, architecture, indexation, existing content, internal linking and organic visibility.",
    icon: Settings,
  },
  {
    stage: "Stage 3",
    title: "Map Search Intent",
    desc: "Search themes are connected to the pages that should answer them.",
    icon: Search,
  },
  {
    stage: "Stage 4",
    title: "Build the Information Architecture",
    desc: "We define how core services, supporting services, products, categories, industries, locations and educational resources relate to each other.",
    icon: FolderTree,
  },
  {
    stage: "Stage 5",
    title: "Improve Existing Assets",
    desc: "Pages with existing potential go first.",
    icon: Sparkles,
  },
  {
    stage: "Stage 6",
    title: "Create New Content Where Gaps Exist",
    desc: "New pages appear only where there is a genuine search or business need.",
    icon: FileText,
  },
  {
    stage: "Stage 7",
    title: "Improve Authority",
    desc: "Through legitimate digital PR, industry resources, relevant editorial opportunities, partnerships and useful content. We don't recommend bulk low-quality backlinks.",
    icon: ShieldCheck,
  },
  {
    stage: "Stage 8",
    title: "Measure and Refine",
    desc: "Real search and business data decides what we improve next.",
    icon: BarChart3,
  },
];

const seoVsAds = [
  {
    seo: "Organic search visibility",
    ads: "Paid search visibility",
  },
  {
    seo: "Builds website and content assets",
    ads: "Requires advertising budget",
  },
  {
    seo: "Can support long-term discovery",
    ads: "Useful for controlled campaign visibility",
  },
  {
    seo: "Results can take time",
    ads: "Campaign visibility can begin after setup",
  },
  {
    seo: "Technical and content investment",
    ads: "Ad, campaign and landing-page management",
  },
];

const commonMistakes = [
  "Creating pages for every keyword variation: pages compete with each other and dilute relevance.",
  "Copying location pages: thin content that helps no one.",
  "Publishing unreviewed machine-translated Arabic: awkward text that weakens trust.",
  "Ignoring technical SEO: good pages may never be properly indexed.",
  "Buying irrelevant backlinks: wasted budget and possible risk.",
  "Publishing generic AI content: sameness and errors that add nothing.",
  "Ignoring internal linking: key pages stay buried.",
  "Indexing unnecessary URLs: crawl attention gets spread thin.",
  "Creating thin service pages: nothing to convince a visitor.",
  "Relying entirely on rankings: you can't tell whether visitors act.",
  "Failing to track conversions: results can't be credited to organic search.",
  "Ignoring mobile experience: visitors leave before they read.",
  "Failing to plan website migrations: visibility can drop after a launch.",
  "Creating city pages without real coverage: misleading and thin.",
  "Treating Arabic and English pages as simple duplicates: language-specific searches get missed.",
];

const faqs = [
  {
    q: "What is an SEO service in Saudi Arabia?",
    a: "It is ongoing work that improves a website's technical structure, content, search-intent alignment, internal linking, local visibility and authority, so relevant people in Saudi Arabia can find it through organic search. The exact mix depends on your industry, customers, languages and current website.",
  },
  {
    q: "How much do SEO services in Saudi Arabia cost?",
    a: "There is no fixed price, because scope varies widely. A small local site and a bilingual store with thousands of products need very different work. Cost usually reflects website size, competition, technical condition, content needs, languages and implementation support. An initial assessment gives a more realistic quote than a generic package.",
  },
  {
    q: "What does an SEO company in Saudi Arabia do?",
    a: "It audits your website, researches how customers search, fixes technical barriers, improves existing pages, plans new content where gaps exist, supports local presence, builds authority legitimately and reports on results. A good SEO company also tells you what not to do, such as creating duplicate pages.",
  },
  {
    q: "Can SEO help a small business in Saudi Arabia?",
    a: "Yes, often by focusing. A small business can concentrate on a few service searches, a well-kept Google Business Profile, clear service pages and sound technical basics. Outcomes still depend on competition and starting point, so no honest provider can guarantee results.",
  },
  {
    q: "Does a Saudi business need Arabic and English SEO?",
    a: "Not automatically. It depends on which languages your customers use to search. Some businesses need mostly Arabic, some mostly English, many both. Where both matter, each language needs its own research and reviewed content rather than simple translation, but not every page must exist in both languages.",
  },
  {
    q: "What is the difference between local SEO and Saudi-wide SEO?",
    a: "Local SEO targets city or neighbourhood searches through Google Business Profile, reviews, citations and local pages. Saudi-wide SEO targets broader searches through service or category pages and wider authority. Businesses with branches and national ambitions often need both.",
  },
  {
    q: "Should I create separate SEO pages for Riyadh and Jeddah?",
    a: "Only if you genuinely serve each city, there is meaningful search demand, and you can add useful, unique local information. If not, one strong service page and accurate business profiles usually work better than near-duplicate city pages.",
  },
  {
    q: "What does a technical SEO audit include?",
    a: "It reviews crawling, indexing, canonical tags, redirects, sitemaps, robots directives, site architecture, internal links, JavaScript rendering, structured data, mobile usability and Core Web Vitals. A good audit prioritises issues by impact and effort instead of listing everything as equally urgent.",
  },
  {
    q: "Is e-commerce SEO different from standard SEO?",
    a: "Yes, in emphasis. Online stores manage thousands of similar URLs, filters, variants, pagination and stock changes, so category architecture, indexation control, product data and scalable templates matter most. Service businesses focus more on service pages, local signals and enquiries.",
  },
  {
    q: "How long does SEO take in Saudi Arabia?",
    a: "It varies. Some technical fixes can be reflected after crawling and implementation, while broader organic visibility usually needs sustained work over months. Competition, site history, authority, content quality and implementation speed all matter, so be cautious of fixed-date promises.",
  },
  {
    q: "Can SEO and Google Ads be used together?",
    a: "Yes. Ads can provide visibility while SEO develops, and paid search data can show which queries lead to enquiries. SEO builds website assets over time, while ads depend on ongoing budget. The right balance depends on goals, competition and timeframe.",
  },
  {
    q: "How should I choose an SEO agency in Saudi Arabia?",
    a: "Look for a clear method, plain-language reporting and honest limits. Be cautious about guaranteed rankings, unexplained link packages or vague deliverables. Ask how they handle audits, search intent, Arabic and English content and reporting, and whether they explain their recommendations.",
  },
];

// ---------------------------------------------------------------------------
// Main Component
// ---------------------------------------------------------------------------

function SaudiSEOServices() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const pageUrl = "https://diglip7.com/saudi-arabia/seo-services/";

  const jsonLdGraph = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://diglip7.com/saudi-arabia/seo-services/#webpage",
      "url": "https://diglip7.com/saudi-arabia/seo-services/",
      "name": "SEO Service in Saudi Arabia | Professional SEO Services | DigLip7",
      "description":
        "Grow your organic search visibility with SEO services in Saudi Arabia from DigLip7. Get technical SEO, content, local SEO and search strategy tailored to your business.",
      "isPartOf": {
        "@id": "https://diglip7.com/#website",
      },
      "about": {
        "@id": "https://diglip7.com/saudi-arabia/seo-services/#service",
      },
      "breadcrumb": {
        "@id": "https://diglip7.com/saudi-arabia/seo-services/#breadcrumb",
      },
      "publisher": {
        "@id": "https://diglip7.com/#organization",
      },
      "inLanguage": "en",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://diglip7.com/saudi-arabia/seo-services/#service",
      "name": "SEO Service in Saudi Arabia",
      "serviceType": "Search Engine Optimization",
      "url": "https://diglip7.com/saudi-arabia/seo-services/",
      "provider": {
        "@id": "https://diglip7.com/#organization",
      },
      "areaServed": {
        "@type": "Country",
        "name": "Saudi Arabia",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": "https://diglip7.com/saudi-arabia/seo-services/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://diglip7.com/",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Saudi Arabia",
          "item": "https://diglip7.com/saudi-arabia/",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "SEO Services",
          "item": "https://diglip7.com/saudi-arabia/seo-services/",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://diglip7.com/#organization",
      "name": "DigLip7",
      "url": "https://diglip7.com/",
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://diglip7.com/#website",
      "url": "https://diglip7.com/",
      "name": "DigLip7",
      "publisher": {
        "@id": "https://diglip7.com/#organization",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://diglip7.com/saudi-arabia/seo-services/#faq",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    },
  ];

  return (
    <div className="w-full bg-white font-sans text-gray-800 antialiased selection:bg-teal-700 selection:text-white">
      <SEO
        title="SEO Service in Saudi Arabia | Professional SEO Services | DigLip7"
        description="Grow your organic search visibility with SEO services in Saudi Arabia from DigLip7. Get technical SEO, content, local SEO and search strategy tailored to your business."
        canonical={pageUrl}
        ogType="website"
        ogTitle="SEO Service in Saudi Arabia | DigLip7"
        ogDescription="Practical SEO services in Saudi Arabia focused on technical optimization, search intent, content, local visibility and sustainable organic growth."
        ogImage="https://diglip7.com/images/seo-service-saudi-arabia.jpg"
        twitterCard="summary_large_image"
        twitterTitle="SEO Service in Saudi Arabia | DigLip7"
        twitterDescription="Practical SEO services in Saudi Arabia covering technical SEO, content, local visibility and search strategy."
        twitterImage="https://diglip7.com/images/seo-service-saudi-arabia.jpg"
        robots="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        keywords="SEO Service in Saudi Arabia, SEO Services in Saudi Arabia, Saudi SEO Agency, SEO Company Riyadh, SEO Jeddah, Arabic SEO Saudi Arabia, Technical SEO KSA, Local SEO Saudi Arabia, DigLip7"
        schema={jsonLdGraph}
      />

      {/* Breadcrumb Navigation */}
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
          {/* Left Column */}
          <div className="w-full lg:w-[61%] text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              <span className="text-gray-900">SEO Service in Saudi Arabia </span>
              <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                for Sustainable Organic Growth
              </span>
            </h1>

            {/* Direct Question & Answer Box */}
            <div className="bg-white/90 backdrop-blur-sm border border-teal-100 p-5 sm:p-6 rounded-2xl mb-5 shadow-sm text-left">
              <h2 className="text-lg sm:text-xl font-bold text-teal-800 mb-2">
                What is an SEO service in Saudi Arabia?
              </h2>
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                An SEO service in Saudi Arabia improves a website's technical structure, content, search-intent alignment, internal linking, architecture, local visibility and authority, so that relevant people in Saudi Arabia can discover it through organic search. It is ongoing work rather than a one-time fix, and it is shaped by who your customers are and how they search.
              </p>
            </div>

            <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl mx-auto lg:mx-0">
              <p>
                That is the short version. In practice, SEO looks very different depending on who is asking. A Riyadh B2B company selling industrial equipment needs buyers to find detailed technical pages. A Jeddah e-commerce business needs its categories and products organised so search engines can make sense of thousands of URLs. A Saudi healthcare provider needs accurate service and practitioner information that patients can trust.
              </p>
              <p>
                Strategy shifts with industry, customer type, location, language, search intent, website size, competition and business model. That is why <span className="font-semibold text-blue-700">DigLip7</span> starts by understanding the business rather than applying a template. We don't promise rankings, traffic, leads, revenue or any particular search result. What we offer is a clear method, honest priorities and reporting that connects search data to business outcomes.
              </p>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
              <Link to="/contact" className="inline-block">
                <motion.button
                  className="group px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-teal-700 to-teal-900 text-white text-base font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Discuss Your SEO Strategy
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <a
                href="https://wa.me/919650608788?text=Hello%20DigLip7%20Team%2C%20I%20would%20like%20to%20request%20an%20SEO%20Audit%20for%20my%20business%20in%20Saudi%20Arabia."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <motion.button
                  className="px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-teal-700 border-2 border-teal-700 text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaWhatsapp className="w-5 h-5 text-emerald-600" />
                  Request an SEO Audit
                </motion.button>
              </a>
            </div>
          </div>

          {/* Right Column - Image 1 */}
          <motion.div
            className="w-full lg:w-[39%] flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card3D className="w-full max-w-md lg:max-w-none">
              <SEOImageSlot
                src={heroImgSrc}
                filename="seo-service-saudi-arabia.webp"
                alt="SEO strategy for businesses in Saudi Arabia"
                width={800}
                height={600}
                priority={true}
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

      {/* Section 1: Matching Search Demand With the Right Page */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <motion.div
              className="lg:col-span-7 space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <FloatingElement>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                  <span className="text-teal-900">SEO in Saudi Arabia Is About </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                    Matching Search Demand With the Right Page
                  </span>
                </h2>
              </FloatingElement>

              <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
                <p>
                  One of the most common SEO problems is simple: the wrong page is in front of the searcher. Take three searches. Someone typing "Saudi accounting services" probably wants a service page. Someone asking "how VAT works for businesses in Saudi Arabia" wants an explanation, so a guide fits better. Someone searching "accounting company Riyadh" has local provider intent and expects location details, contact options and signs that the firm operates nearby.
                </p>
                <p>
                  The same firm may need all three pages. SEO connects a chain: search, intent, page, information, action. If any link is weak, visitors leave. The aim is never to make one page rank for every possible keyword. It is to give each meaningful search a page that actually answers it.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-5 flex justify-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card3D className="w-full">
                <SEOImageSlot
                  src={intentImgSrc}
                  filename="seo-search-intent-saudi-arabia.webp"
                  alt="SEO search intent strategy for Saudi Arabian businesses"
                  aspect="aspect-[4/3]"
                  className="shadow-xl"
                  fallbackIcon={Target}
                />
              </Card3D>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Start With the Website You Already Have */}
      <section className="w-full bg-gradient-to-br from-gray-50 via-teal-50/20 to-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-8 sm:mb-10 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                <span className="text-teal-900">Start With the Website </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  You Already Have
                </span>
              </h2>
            </FloatingElement>
          </motion.div>

          <div className="max-w-7xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-emerald-50/80 via-teal-50/40 to-white p-6 sm:p-8 rounded-2xl border-l-4 border-emerald-500 border border-emerald-100/80 shadow-xs"
            >
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                Before writing anything new, look at what exists. Established sites often contain useful pages with weak visibility, duplicate pages, outdated content, services buried in confusing menus, poor internal links, indexation problems, unnecessary URLs, missing location details, technically inaccessible pages, pages competing with each other, and content aimed at the wrong intent.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-emerald-50/60 via-white to-teal-50/40 p-6 sm:p-8 rounded-2xl border-l-4 border-emerald-400 border border-emerald-100/70 shadow-xs"
            >
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                That is why diagnosis comes first. Improving a page that already has potential, by sharpening its intent match, adding missing detail and linking to it properly, can be more useful than publishing another article. New content on a shaky foundation tends to inherit the same problems.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Saudi SEO Needs a Clear Geographic Strategy */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                <span className="text-teal-900">Saudi SEO Needs a </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  Clear Geographic Strategy
                </span>
              </h2>
            </FloatingElement>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              Saudi Arabia is large, and businesses reach customers in different ways. Some target the whole country. Some focus on a city such as Riyadh or Jeddah. Some run branches in Dammam and Khobar, while others are service-area businesses that travel to customers. An organisation serving visitors around Mecca and Medina may have needs quite different from a Riyadh head office.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto text-gray-700 text-sm sm:text-base leading-relaxed mb-6 text-center">
            <p>
              Each model needs its own plan: Saudi-wide visibility, city-level visibility, branch-level SEO, service-area coverage, or a mix for multi-location organisations. A city page should be created only where there is:
            </p>
          </div>

          {/* 4 Numbered Rules List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto mb-8">
            {geographicRules.map((ruleText, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all h-full flex items-start gap-3">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-r from-teal-600 to-teal-900 text-white font-bold flex items-center justify-center flex-shrink-0 text-xs shadow-xs">
                    {idx + 1}
                  </span>
                  <p className="text-sm font-medium text-gray-800 pt-1">
                    {ruleText}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto bg-teal-50/50 p-5 sm:p-6 rounded-2xl border border-teal-100 text-center text-sm text-gray-700 leading-relaxed">
            <p>
              We don't recommend automatically creating a page for every Saudi city. Thin duplicates rarely help users and can dilute a site.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Arabic and English SEO Should Be Planned, Not Duplicated */}
      <section className="w-full bg-gradient-to-br from-gray-50 to-teal-50/30 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <motion.div
              className="lg:col-span-7 space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <FloatingElement>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                  <span className="text-teal-900">Arabic & English SEO </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                    Should Be Planned, Not Duplicated
                  </span>
                </h2>
              </FloatingElement>

              <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
                <p>
                  Saudi businesses may serve mainly Arabic-speaking audiences, mainly English-speaking ones, bilingual audiences, or different customer segments who use different languages. A luxury retailer may see one pattern, a technical supplier working with international contractors another.
                </p>
                <p>
                  Where both languages matter, planning covers Arabic keyword research, English keyword research, differences in search intent and terminology, localised content, separate URLs, hreflang, localised metadata, internal links, structured data and editorial review.
                </p>
                <p>
                  Translation is not the same as SEO localisation. People don't always search using literal translations of the same phrase, and a translated page can miss the words your audience really uses. Not every business needs two complete versions of every page; the right strategy follows audience needs and search behaviour. Machine-translated pages published without review usually read awkwardly and weaken trust.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-5 flex justify-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card3D className="w-full">
                <SEOImageSlot
                  src={bilingualImgSrc}
                  filename="arabic-english-seo-saudi-arabia.webp"
                  alt="Arabic and English SEO strategy for Saudi businesses"
                  aspect="aspect-[4/3]"
                  className="shadow-xl"
                  fallbackIcon={Languages}
                />
              </Card3D>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5: What an SEO Audit Should Tell a Saudi Business */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <motion.div
              className="lg:col-span-7 space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <FloatingElement>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                  <span className="text-teal-900">What an SEO Audit </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                    Should Tell a Saudi Business
                  </span>
                </h2>
              </FloatingElement>

              <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
                <p>
                  A useful audit answers questions a business can act on, rather than listing technical terms. Good SEO audit services should help you understand:
                </p>
              </div>

              {/* 10 Verbatim Checklist Questions in 2 Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {auditQuestions.map((q, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-gradient-to-r from-teal-50/40 to-white border border-teal-100/80 flex items-start gap-2.5 text-xs sm:text-sm text-gray-800"
                  >
                    <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>{q}</span>
                  </div>
                ))}
              </div>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed pt-2">
                Just as important, an audit should prioritise. A noindex tag on a main service page matters far more than a missing image description. We rank problems by impact, relevance and effort, so you know what to fix first.
              </p>
            </motion.div>

            <motion.div
              className="lg:col-span-5 flex justify-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card3D className="w-full">
                <SEOImageSlot
                  src={auditImgSrc}
                  filename="technical-seo-saudi-arabia.webp"
                  alt="Technical SEO audit for a Saudi Arabian website"
                  aspect="aspect-[4/3]"
                  className="shadow-xl"
                  fallbackIcon={Settings}
                />
              </Card3D>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 6: Content Strategy for Saudi Search Intent */}
      <section className="w-full bg-gradient-to-br from-gray-50 via-teal-50/20 to-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                <span className="text-teal-900">Content Strategy </span>
                <span className="text-pink-600 font-extrabold">for </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  Saudi Search Intent
                </span>
              </h2>
            </FloatingElement>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              Content should be planned around the questions and decisions that matter to Saudi customers: service pages, product pages, category pages, industry pages, location pages, educational resources, comparison content, FAQs, buying guides and supporting articles. Realistic examples:
            </p>
          </motion.div>

          {/* 3 Verbatim Industry Bullets with CheckCircle2 icons matching screenshot */}
          <div className="space-y-4 max-w-5xl mx-auto mb-8">
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-3.5 hover:border-teal-200 transition-all">
              <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                <strong className="text-teal-900 font-bold">Real estate company:</strong> separate content for property types, developments, communities, buyer questions and investment information. See our{" "}
                <Link to="/uae/dubai/real-estate-seo" className="font-semibold text-teal-700 underline hover:text-teal-900">
                  real estate SEO work
                </Link>{" "}
                for a related approach.
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-3.5 hover:border-teal-200 transition-all">
              <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                <strong className="text-teal-900 font-bold">E-commerce company:</strong> category pages, product pages, buying guides, comparisons and delivery information.
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-3.5 hover:border-teal-200 transition-all">
              <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                <strong className="text-teal-900 font-bold">Healthcare provider:</strong> treatment pages, practitioner information, patient education and location details. Our{" "}
                <Link to="/uae/dubai/healthcare-seo" className="font-semibold text-teal-700 underline hover:text-teal-900">
                  healthcare SEO approach
                </Link>{" "}
                shows how we think about it.
              </p>
            </div>
          </div>

          <div className="max-w-5xl mx-auto bg-gradient-to-r from-emerald-50/70 via-white to-teal-50/40 p-6 sm:p-8 rounded-2xl border-l-4 border-emerald-500 border border-emerald-100/70 shadow-xs text-sm sm:text-base text-gray-800 leading-relaxed text-center">
            <p>
              Everything should be original, accurate and reviewed by a person. We avoid publishing large volumes of generic AI content, and we never invent medical, financial, legal or market statistics. Our{" "}
              <Link to="/digital-market/content-marketing" className="font-semibold text-teal-700 underline hover:text-teal-900">
                content marketing
              </Link>{" "}
              service covers the production side.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7: Local SEO for Businesses With Physical Locations */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <motion.div
              className="lg:col-span-7 space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <FloatingElement>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                  <span className="text-teal-900">Local SEO </span>
                  <span className="text-pink-600 font-extrabold">for </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                    Businesses With Physical Locations
                  </span>
                </h2>
              </FloatingElement>

              <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
                <p>
                  Local SEO supports real places. For branches, clinics, showrooms or restaurants, the foundations are a well-maintained Google Business Profile, accurate business information, genuine reviews, consistent citations, local landing pages where justified, branch details, directions, and internal links connecting each location with the services offered there.
                </p>
                <p>
                  A restaurant group with outlets in several cities needs each branch to have accurate details and a page with real substance, not five copies of one page. We don't suggest fake locations, and we don't promise Google Maps rankings, because proximity and prominence are outside anyone's control. Our{" "}
                  <Link to="/uae/dubai/local-seo" className="font-semibold text-teal-700 underline hover:text-teal-900">
                    Dubai local SEO
                  </Link>{" "}
                  page shows a related example.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-5 flex justify-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card3D className="w-full">
                <SEOImageSlot
                  src={localMapsImgSrc}
                  filename="local-seo-saudi-arabia.webp"
                  alt="Local SEO strategy for businesses in Saudi Arabia"
                  aspect="aspect-[4/3]"
                  className="shadow-xl"
                  fallbackIcon={MapPin}
                />
              </Card3D>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 8: E-commerce SEO in Saudi Arabia */}
      <section className="w-full bg-gradient-to-br from-gray-50 to-teal-50/30 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <motion.div
              className="lg:col-span-7 space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <FloatingElement>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                  <span className="text-teal-900">E-commerce SEO </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                    in Saudi Arabia
                  </span>
                </h2>
              </FloatingElement>

              <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
                <p>
                  Online stores create problems that service sites never meet. E-commerce SEO covers category architecture, product pages and descriptions, structured data, product images, internal linking, filters and faceted navigation, duplicate URLs, pagination, inventory changes, product variants, indexation and search-friendly categories.
                </p>
                <p>
                  The key word is scalable. A national retailer can't optimise twenty thousand products one by one. It needs templates and rules that produce good titles, clean URLs, sensible canonical tags and controlled indexation, so an out-of-stock item or a colour filter doesn't spawn hundreds of weak pages. See{" "}
                  <Link to="/uae/dubai/ecommerce-seo" className="font-semibold text-teal-700 underline hover:text-teal-900">
                    e-commerce SEO in Dubai
                  </Link>{" "}
                  for related thinking.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-5 flex justify-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card3D className="w-full">
                <SEOImageSlot
                  src={ecommerceImgSrc}
                  filename="ecommerce-seo-saudi-arabia.webp"
                  alt="E-commerce SEO strategy for Saudi Arabian businesses"
                  aspect="aspect-[4/3]"
                  className="shadow-xl"
                  fallbackIcon={ShoppingBag}
                />
              </Card3D>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 9: SEO for Large Saudi Websites and Enterprises */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                <span className="text-teal-900">SEO for </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  Large Saudi Websites and Enterprises
                </span>
              </h2>
            </FloatingElement>
          </motion.div>

          <div className="max-w-7xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-emerald-50/80 via-teal-50/40 to-white p-6 sm:p-8 rounded-2xl border-l-4 border-emerald-500 border border-emerald-100/80 shadow-xs"
            >
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                Large sites face thousands of URLs, several departments, multiple branches, product catalogues, multilingual pages, duplicated templates, large migrations, development dependencies, internal-link management, indexation control and content governance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm text-gray-700 text-sm sm:text-base leading-relaxed"
            >
              <p>
                Much of enterprise SEO is coordination. SEO, content, developers, UX, marketing and business teams all touch the site, and a small template change can affect thousands of pages. Clear ownership and release processes often matter as much as any single tactic.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 10: SEO for Saudi B2B Companies */}
      <section className="w-full bg-gradient-to-br from-gray-50 to-teal-50/30 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                <span className="text-teal-900">SEO for </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  Saudi B2B Companies
                </span>
              </h2>
            </FloatingElement>
          </motion.div>

          <div className="max-w-7xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm text-gray-700 text-sm sm:text-base leading-relaxed space-y-4"
            >
              <p>
                B2B buyers rarely decide in one visit. A procurement team may spend weeks discovering services, reading industry material, checking technical questions, comparing solutions, reviewing specifications and implementation details, and looking for signs of trust before contacting anyone.
              </p>
              <p>
                SEO can support each step, which is why B2B strategy shouldn't chase only high-volume generic keywords. Specific searches from a smaller number of qualified buyers are often worth more, and the pages that answer them, such as solution pages, specification pages and technical guides, tend to be the ones that build confidence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 11: How DigLip7 Can Build a Saudi SEO Roadmap */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                <span className="text-teal-900">How DigLip7 Can Build a </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  Saudi SEO Roadmap
                </span>
              </h2>
            </FloatingElement>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {roadmapStages.map((stage, index) => (
              <motion.div
                key={stage.stage}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                viewport={{ once: true }}
              >
                <Card3D className="h-full">
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl hover:border-emerald-300 transition-all duration-300 h-full flex flex-col justify-between group">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-teal-50 text-teal-800 border border-teal-200">
                          {stage.stage}
                        </span>
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-teal-100 to-[#c89d5a]/20 text-teal-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <stage.icon className="w-4 h-4" />
                        </div>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2 group-hover:text-teal-800 transition-colors">
                        {stage.title}
                      </h3>

                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        {stage.desc}
                      </p>
                    </div>
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 12: What SEO Performance Looks Like in Real Business Terms */}
      <section className="w-full bg-gradient-to-br from-gray-50 to-teal-50/30 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <motion.div
              className="lg:col-span-7 space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <FloatingElement>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                  <span className="text-teal-900">What SEO Performance Looks Like </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                    in Real Business Terms
                  </span>
                </h2>
              </FloatingElement>

              <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
                <p>
                  Reporting should go beyond rankings. Useful measures include impressions, clicks, non-brand visibility, search queries, CTR, average position, indexed pages, landing-page traffic, qualified enquiries, calls, form submissions, WhatsApp interactions where correctly tracked, e-commerce transactions, organic conversion rate, revenue where properly attributed, technical health and Core Web Vitals.
                </p>
                <p>
                  The right KPI depends on the model. A clinic may care about calls and bookings, a store about transactions, a B2B firm about qualified enquiries. We credit results to organic search only when tracking is configured properly.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-5 flex justify-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card3D className="w-full">
                <SEOImageSlot
                  src={reportingImgSrc}
                  filename="seo-reporting-saudi-arabia.webp"
                  alt="SEO reporting and organic search performance for Saudi businesses"
                  aspect="aspect-[4/3]"
                  className="shadow-xl"
                  fallbackIcon={BarChart3}
                />
              </Card3D>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 13: How Long Does SEO Take in Saudi Arabia? */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                <span className="text-teal-900">How Long Does SEO Take </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  in Saudi Arabia?
                </span>
              </h2>
            </FloatingElement>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed bg-gradient-to-r from-teal-50/40 via-white to-gray-50 p-6 sm:p-8 rounded-2xl border border-teal-100 shadow-sm">
            <p>
              It depends on competition, website age, existing authority, technical health, content quality, implementation speed, industry, search demand, website size, migration history, multilingual implementation and the quality of existing pages.
            </p>
            <p>
              Some technical improvements can be reflected after crawling and implementation. Broader organic visibility usually takes sustained work. We don't promise page-one rankings in a fixed period, traffic, leads, revenue or Google Maps positions.
            </p>
          </div>
        </div>
      </section>

      {/* Section 14: SEO and Google Ads Serve Different Purposes */}
      <section className="w-full bg-gradient-to-br from-gray-50 to-teal-50/30 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                <span className="text-teal-900">SEO & Google Ads </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  Serve Different Purposes
                </span>
              </h2>
            </FloatingElement>
          </motion.div>

          {/* Comparison Table */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm mb-6">
            <div className="grid grid-cols-2 bg-gradient-to-r from-teal-800 to-teal-900 text-white font-bold text-sm sm:text-base py-3.5 px-6">
              <div>SEO</div>
              <div>Google Ads</div>
            </div>
            <div className="divide-y divide-gray-100 text-xs sm:text-sm">
              {seoVsAds.map((row, idx) => (
                <div
                  key={idx}
                  className={`grid grid-cols-2 p-4 sm:p-4.5 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50/60"}`}
                >
                  <div className="font-medium text-gray-800 pr-3">{row.seo}</div>
                  <div className="text-gray-600 pl-3 border-l border-gray-100">{row.ads}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center text-sm sm:text-base text-gray-700 leading-relaxed">
            <p>
              Neither is better in every case. Many businesses use both, depending on goals, budget, competition, customer journey and timeframe. Our{" "}
              <Link to="/digital-market/PPC-Advertising" className="font-semibold text-teal-700 underline hover:text-teal-900">
                PPC advertising
              </Link>{" "}
              service covers the paid side.
            </p>
          </div>
        </div>
      </section>

      {/* Section 15: Common SEO Mistakes Saudi Businesses Should Avoid */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                <span className="text-teal-900">Common SEO Mistakes </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  Saudi Businesses Should Avoid
                </span>
              </h2>
            </FloatingElement>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
            {commonMistakes.map((mistake, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.03 }}
                viewport={{ once: true }}
                className="bg-white p-4.5 rounded-2xl border border-gray-100 shadow-xs hover:border-red-200 hover:shadow-sm transition-all flex items-start gap-3"
              >
                <div className="w-5 h-5 rounded-full bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                  ✕
                </div>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
                  {mistake}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 16: Why Choose DigLip7 for SEO Services in Saudi Arabia? */}
      <section className="w-full bg-gradient-to-br from-gray-50 to-teal-50/30 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                <span className="text-teal-900">Why Choose DigLip7 </span>
                <span className="text-pink-600 font-extrabold">for </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  SEO Services in Saudi Arabia
                </span>
              </h2>
            </FloatingElement>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm text-center">
            <p>
              We would rather explain how we work than make claims we can't verify. Our approach rests on search-intent research, technical SEO, content strategy, on-page SEO, local SEO, e-commerce SEO, enterprise SEO, multilingual considerations, internal linking, authority development, reporting and continuous optimisation.
            </p>
            <p>
              Recommendations come with reasons, and you're welcome to challenge them. If you operate across the region, you may also want to see our{" "}
              <Link to="/uae/seo-services" className="font-semibold text-teal-700 underline hover:text-teal-900">
                UAE SEO services
              </Link>
              ,{" "}
              <Link to="/uae/dubai/seo-services" className="font-semibold text-teal-700 underline hover:text-teal-900">
                Dubai SEO services
              </Link>{" "}
              and{" "}
              <Link to="/digital-market/seoservices" className="font-semibold text-teal-700 underline hover:text-teal-900">
                global SEO services
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Section 17: Frequently Asked Questions */}
      <section className="w-full bg-gradient-to-br from-gray-50 to-teal-50/30 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                <span className="text-teal-900">Frequently Asked </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  Questions (FAQs)
                </span>
              </h2>
            </FloatingElement>
          </motion.div>

          <div className="space-y-4 sm:space-y-5 max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left p-4 sm:p-5 hover:bg-gray-50 transition-colors duration-200 group px-5 sm:px-7 py-3.5 bg-gradient-to-r from-teal-900 to-teal-700 text-white text-sm sm:text-base font-semibold rounded-full shadow-md cursor-pointer"
                  aria-expanded={openIndex === index}
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
                      transition={{ duration: 0.35 }}
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

      {/* Section 18: Bottom CTA Banner */}
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

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <FloatingElement>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Build a Search Strategy Around Your Saudi Business
            </h2>
          </FloatingElement>

          <p className="text-teal-50 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
            The first step is understanding where you stand. DigLip7 can assess your website structure, current organic visibility, services or products, target audience, locations, Arabic and English requirements, technical issues, content opportunities and business objectives, then tell you where SEO may help most and what can wait.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <motion.button
                className="px-8 py-4 bg-white text-teal-900 font-bold rounded-full shadow-2xl hover:bg-gray-100 hover:shadow-teal-900/30 transition-all duration-300 transform hover:scale-105 cursor-pointer flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Discuss Your SEO Strategy
                <ArrowRight className="w-5 h-5 text-teal-800" />
              </motion.button>
            </Link>
            <a
              href="https://wa.me/919650608788?text=Hello%20DigLip7%20Team%2C%20I%20would%20like%20to%20request%20an%20SEO%20Audit%20for%20my%20business%20in%20Saudi%20Arabia."
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-105 cursor-pointer flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp className="w-5 h-5 text-green-300" />
                Request an SEO Audit
              </motion.button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SaudiSEOServices;
