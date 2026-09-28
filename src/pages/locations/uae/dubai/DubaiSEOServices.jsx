import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "../../../../components/SEO";
import {
  Settings,
  MapPin,
  FileText,
  BookOpen,
  ShoppingCart,
  Globe,
  Sparkles,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  HelpCircle,
  Building2,
  HeartPulse,
  Scale,
  Hotel,
  GraduationCap,
  Cpu,
  Handshake,
  Rocket,
  ShieldCheck,
  Home,
  CheckCircle2,
  UtensilsCrossed,
  Wrench,
  Search,
  Target,
  BarChart3,
  Layers,
  Compass,
} from "lucide-react";

// Image Plan paths for Dubai SEO Services (Section 8)
const heroImgSrc = "/src/images/dubai-seo-services-diglip7.webp";
const technicalAuditImgSrc = "/src/images/technical-seo-audit-dubai.webp";
const localSeoImgSrc = "/src/images/local-seo-dubai-map.webp";
const contentPlanningImgSrc = "/src/images/content-seo-planning-dubai.webp";
const ecommerceSeoImgSrc = "/src/images/ecommerce-seo-dubai.webp";
const aiSearchImgSrc = "/src/images/ai-search-seo-dubai.webp";
const industriesImgSrc = "/src/images/dubai-businesses-industries-seo.webp";
const ctaConsultationImgSrc = "/src/images/seo-consultation-dubai.webp";

// Empty image slot: clean frame until image file is provided by the user
const EmptyImageSlot = ({
  src,
  alt,
  className = "",
  aspect = "aspect-[4/3]",
  priority = false,
}) => {
  const [hasError, setHasError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl bg-white/40 border-2 border-dashed border-gray-300 flex items-center justify-center ${aspect} ${className}`}
    >
      {!hasError && (
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          onLoad={() => setLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
      {(!loaded || hasError) && (
        <div className="absolute inset-0 flex items-center justify-center p-4 text-center text-gray-300" />
      )}
    </div>
  );
};

// ---------------------------------------------------------------------------
// Motion Primitives
// ---------------------------------------------------------------------------

const FloatingElement = ({ children, delay = 0 }) => (
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 3, repeat: Infinity, delay }}
  >
    {children}
  </motion.div>
);

const Card3D = ({ children, className = "" }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setRotateX((y - centerY) / 14);
    setRotateY((centerX - x) / 14);
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

// ---------------------------------------------------------------------------
// Content Data (Strictly from user document)
// ---------------------------------------------------------------------------

const breadcrumbTrail = [
  { label: "Home", href: "/" },
  { label: "UAE", href: "/uae/seo-services/" },
  { label: "Dubai SEO Services", href: "/uae/dubai/seo-services/" },
];

const heroIncludes = [
  "Dubai-focused SEO strategy",
  "Technical and on-page SEO",
  "Local SEO",
  "Content and e-commerce SEO",
  "Performance measurement",
];

const strategyPillars = [
  {
    icon: Search,
    title: "Search Intent Research",
    description:
      "We start by identifying what people are actually searching for and whether that intent is informational, commercial, transactional or local. This shapes which pages get built, what they cover, and how they're structured — a page built for someone comparing options needs different content from one built for someone ready to buy.",
  },
  {
    icon: Compass,
    title: "Dubai Keyword Research",
    description:
      "Keyword research accounts for the location modifiers people actually use — “Dubai,” “near me,” specific neighbourhoods where relevant, and combinations of service or product with Dubai. We don't create a separate page for every possible neighbourhood combination; a page is only justified where there's a real, distinct audience and enough unique content to serve it well.",
  },
  {
    icon: Target,
    title: "Competitor Research",
    description:
      "We review public search results, competitor landing pages, content coverage, technical implementation, internal linking and local signals to understand where the competitive gaps are. This is based on what's publicly visible in search — we don't claim access to any competitor's private analytics or internal data.",
  },
];

const coreServices = [
  {
    icon: Settings,
    title: "Technical SEO Dubai",
    description:
      "We address crawlability, indexation, XML sitemaps, robots directives, canonical URLs, redirects, URL structure, JavaScript rendering, structured data, Core Web Vitals, mobile usability, duplicate content and internal linking — the foundation that determines whether search engines can find and understand your site at all.",
    cta: "Explore Technical SEO",
    link: "/digital-market/seoservices/",
  },
  {
    icon: MapPin,
    title: "Local SEO Dubai",
    description:
      "This covers Google Business Profile management, local landing pages where genuinely warranted, location relevance, NAP (name, address, phone) consistency, local citations where appropriate, local content, reviews as a trust signal, local structured data and Google Maps visibility. Reviews support trust and local signals, but they don't guarantee rankings on their own.",
    cta: "Explore Local SEO",
    link: "/digital-market/local-SEO-services/",
  },
  {
    icon: FileText,
    title: "On-Page SEO Dubai",
    description:
      "We work on title tags, meta descriptions, heading hierarchy, search-intent alignment, content optimisation, internal linking, image SEO, entity relevance, content structure and overall user experience — the elements that determine whether a page that gets found also earns the click and holds attention.",
    cta: "Improve On-Page SEO",
    link: "/digital-market/seoservices/",
  },
  {
    icon: BookOpen,
    title: "Content SEO Dubai",
    description:
      "This includes keyword research, topic clusters, commercial landing pages, informational content, a supporting blog strategy, content refreshes and internal linking, all mapped to real search intent. The emphasis is on genuinely useful, original content rather than keyword density.",
    cta: "Explore Content Marketing",
    link: "/digital-market/content-marketing/",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce SEO Dubai",
    description:
      "For online stores, this covers product and category pages, product descriptions, product structured data, faceted navigation management, indexation and internal linking, aligned with the commercial search terms Dubai shoppers actually use.",
    cta: "Explore E-Commerce Marketing",
    link: "/digital-market/e-commerce-marketing/",
  },
  {
    icon: Globe,
    title: "International SEO Dubai",
    description:
      "Many Dubai-based businesses serve international audiences. Where that applies, we look at country and language targeting, URL architecture, localised content and canonical structure, and use hreflang where it's genuinely appropriate — not every internationally-facing website needs it, and we won't add it just to tick a box.",
    cta: "Explore International SEO",
    link: "/digital-market/seoservices/",
  },
  {
    icon: Sparkles,
    title: "SEO for AI Search and Modern Search Experiences",
    description:
      "The fundamentals of SEO remain relevant as search increasingly incorporates AI-generated summaries: clear answers, genuinely helpful content, strong topical coverage, crawlable pages, sensible internal linking, clarity about who's behind the content, trust signals and structured data where it's appropriate. There is no special AI Overview schema that guarantees visibility in Google's AI-powered search features, and we won't claim to be able to secure placement in AI Overviews or AI Mode. A well-structured, genuinely useful site is simply better positioned for however search continues to evolve.",
    cta: "Explore AI-powered Digital Marketing",
    link: "/digital-market/Ai-powered-Digital-Marketing/",
  },
];

const industries = [
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Search intent here is often urgent and trust-sensitive, so local visibility and accurate, clearly written content matter more than volume.",
  },
  {
    icon: Building2,
    title: "Real Estate",
    description:
      "Search demand shifts quickly with the market; area-specific content and fast-loading listing pages both affect performance.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description:
      "Category structure, product content and technical indexation determine whether products are found and purchased.",
  },
  {
    icon: Hotel,
    title: "Hospitality",
    description:
      "Search volume is often seasonal and time-sensitive, rewarding content that reflects timing, location and availability.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants",
    description:
      "Local search and Google Maps visibility tend to drive the majority of relevant discovery for this sector.",
  },
  {
    icon: Scale,
    title: "Professional Services",
    description:
      "Law firms, consultancies and similar businesses generally compete on trust signals and specific high-intent searches rather than broad volume.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Prospective students and parents typically research extensively, which rewards informational and comparison-focused content.",
  },
  {
    icon: Cpu,
    title: "Technology",
    description:
      "B2B technology searches tend to be specific and lower-volume, where topical depth outperforms broad keyword targeting.",
  },
  {
    icon: Handshake,
    title: "B2B",
    description:
      "Longer sales cycles mean content needs to support research and comparison, not only capture immediate transactional intent.",
  },
  {
    icon: MapPin,
    title: "Local Businesses",
    description:
      "Google Business Profile optimisation and consistent local signals are often the highest-impact starting point.",
  },
  {
    icon: Rocket,
    title: "Startups",
    description:
      "Building visibility from a low base tends to benefit from a focused strategy rather than competing across too many keywords at once.",
  },
  {
    icon: Wrench,
    title: "Home Services",
    description:
      "“Near me” and neighbourhood-specific searches are common, making accurate local signals especially important.",
  },
];

const dubaiNeighbourhoods = [
  "Downtown Dubai",
  "Business Bay",
  "Dubai Marina",
  "Jumeirah",
  "Jumeirah Village Circle",
  "Deira",
  "Bur Dubai",
  "Al Barsha",
  "Dubai Silicon Oasis",
  "Dubai Hills",
  "Palm Jumeirah",
];

const processSteps = [
  {
    number: "01",
    title: "SEO Audit",
    description:
      "We review technical SEO, indexation, existing content, internal links, metadata, search visibility and overall site architecture to establish a clear baseline.",
  },
  {
    number: "02",
    title: "Keyword & Competitor Research",
    description:
      "We analyse Dubai-specific search terms, search intent, competitor pages, SERP features, content gaps and commercial opportunities.",
  },
  {
    number: "03",
    title: "Strategy & Site Architecture",
    description:
      "We develop page hierarchy, topic clusters, URL structure, internal linking and location targeting based on the research.",
  },
  {
    number: "04",
    title: "Technical & On-Page Optimisation",
    description:
      "We work through technical issues, metadata, headers, content structure, schema, images and internal links.",
  },
  {
    number: "05",
    title: "Content & Authority Building",
    description:
      "We develop helpful content, commercial landing pages, supporting content and relevant authority signals — without promising a fixed number of backlinks.",
  },
  {
    number: "06",
    title: "Measurement & Improvement",
    description:
      "We track performance through Search Console and analytics — organic impressions, clicks, rankings, landing pages, conversions, technical health and content performance — and refine the strategy accordingly.",
  },
];

const performanceSignals = [
  "Organic impressions",
  "Organic clicks",
  "Keyword rankings",
  "Overall search visibility",
  "Landing-page traffic",
  "Organic leads",
  "Organic conversions",
  "User engagement",
  "Indexed pages",
  "Technical health",
];


const faqs = [
  {
    question: "What are Dubai SEO Services?",
    answer:
      "Dubai SEO Services cover the technical, content and local optimisation work needed to help a website rank and be found by people searching within the Dubai market, including technical SEO, on-page work, content, local search and ongoing measurement.",
  },
  {
    question: "How much do SEO services cost in Dubai?",
    answer:
      "Cost depends on factors such as website size, competition level, industry, technical complexity, number of target markets and overall scope of work. We don't quote a fixed price without understanding these details first.",
  },
  {
    question: "How long does SEO take to show results?",
    answer:
      "Timelines vary based on your website's current condition, competition, existing authority, content quality and search demand in your industry. We won't promise a fixed timeline upfront.",
  },
  {
    question: "What does an SEO agency in Dubai do?",
    answer:
      "An SEO agency typically audits a website, researches keywords and competitors, builds and executes a content and technical strategy, and measures performance on an ongoing basis.",
  },
  {
    question: "Do Dubai businesses need local SEO?",
    answer:
      "Most Dubai businesses that serve local customers benefit from local SEO, particularly Google Business Profile optimisation and consistent local signals, since a large share of relevant searches are tied to location.",
  },
  {
    question: "What is the difference between SEO and Google Ads?",
    answer:
      "SEO builds organic visibility over time and doesn't require ongoing payment per click, while Google Ads provides immediate paid placement that stops as soon as spending stops. Many businesses use both.",
  },
  {
    question: "Can SEO help a new business in Dubai?",
    answer:
      "Yes, though new websites typically need more groundwork — technical setup, foundational content and initial authority building — before seeing meaningful organic traffic.",
  },
  {
    question: "How do you measure SEO performance?",
    answer:
      "We track performance through Google Search Console and analytics, covering impressions, clicks, keyword rankings, organic traffic trends and conversions tied to organic search.",
  },
  {
    question: "Does SEO work for e-commerce businesses in Dubai?",
    answer:
      "Yes — this typically involves optimising category and product pages, managing technical indexing issues from faceted navigation, and aligning content with commercial search intent.",
  },
  {
    question: "Can DigLip7 provide SEO services for businesses targeting specific areas of Dubai?",
    answer:
      "Yes, where there's a genuine service connection to that area and enough unique information to build a useful, non-duplicate page rather than a thin location page.",
  },
];

// ---------------------------------------------------------------------------
// Main Component: DubaiSEOServices
// ---------------------------------------------------------------------------

function DubaiSEOServices() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  const pageUrl = "https://diglip7.com/uae/dubai/seo-services/";

  // Connected JSON-LD Schema Graph
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://diglip7.com/uae/dubai/seo-services/#webpage",
        "url": "https://diglip7.com/uae/dubai/seo-services/",
        "name": "Dubai SEO Services | SEO Company & Agency in Dubai | DigLip7",
        "description":
          "Professional Dubai SEO Services for businesses seeking stronger organic visibility and qualified search traffic.",
        "isPartOf": {
          "@id": "https://diglip7.com/#website",
        },
        "breadcrumb": {
          "@id": "https://diglip7.com/uae/dubai/seo-services/#breadcrumb",
        },
        "mainEntity": {
          "@id": "https://diglip7.com/uae/dubai/seo-services/#service",
        },
      },
      {
        "@type": "Service",
        "@id": "https://diglip7.com/uae/dubai/seo-services/#service",
        "name": "Dubai SEO Services",
        "serviceType": "Search Engine Optimization",
        "url": "https://diglip7.com/uae/dubai/seo-services/",
        "provider": {
          "@id": "https://diglip7.com/#organization",
        },
        "areaServed": {
          "@type": "City",
          "name": "Dubai",
          "containedInPlace": {
            "@type": "Country",
            "name": "United Arab Emirates",
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://diglip7.com/uae/dubai/seo-services/#breadcrumb",
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
            "name": "UAE",
            "item": "https://diglip7.com/uae/",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Dubai SEO Services",
            "item": "https://diglip7.com/uae/dubai/seo-services/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://diglip7.com/uae/dubai/seo-services/#faq",
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
  };

  return (
    <div className="bg-white overflow-x-hidden w-full">
      <SEO
        title="Dubai SEO Services | SEO Company & Agency in Dubai | DigLip7"
        description="Grow your online visibility with professional Dubai SEO Services from DigLip7. Get technical, local, content and e-commerce SEO for Dubai businesses."
        ogDescription="Professional Dubai SEO Services for businesses seeking stronger organic visibility, qualified traffic and sustainable search growth."
        twitterDescription="Professional Dubai SEO Services for businesses seeking stronger organic visibility and qualified search traffic."
        canonical={pageUrl}
        ogType="website"
        ogImage="https://diglip7.com/images/dubai-seo-services.jpg"
        keywords="Dubai SEO Services, SEO Services Dubai, SEO Services in Dubai, SEO Company Dubai, Local SEO Dubai, DigLip7"
        schema={jsonLdSchema}
      />

      {/* Breadcrumb (visible) */}
      <div className="pt-24 sm:pt-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-100 via-pink-100 to-white">
        <nav
          aria-label="Breadcrumb"
          className="max-w-7xl mx-auto flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-gray-500 pb-2"
        >
          {breadcrumbTrail.map((crumb, i) => (
            <span key={crumb.href} className="flex items-center gap-1.5">
              {i === 0 ? (
                <Home className="w-3.5 h-3.5 text-[#005d52]" />
              ) : (
                <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              )}
              {i === breadcrumbTrail.length - 1 ? (
                <span className="font-semibold text-teal-900">{crumb.label}</span>
              ) : (
                <a href={crumb.href} className="hover:text-[#005d52] transition-colors">
                  {crumb.label}
                </a>
              )}
            </span>
          ))}
        </nav>
      </div>

      {/* Hero Section */}
      <div className="relative pt-6 sm:pt-8 pb-16 sm:pb-20 bg-gradient-to-r from-purple-100 via-pink-100 to-white flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden w-full">
        <motion.div
          className="absolute top-10 left-10 w-16 h-16 bg-white/30 rounded-full blur-xl pointer-events-none"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-24 h-24 bg-white/30 rounded-full blur-xl pointer-events-none"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
          {/* Left Hero Content */}
          <div className="w-full lg:w-[58%] text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-gray-900">Dubai SEO Services </span>
              <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                for Sustainable Search Growth
              </span>
            </h1>

            <p className="text-gray-700 text-sm sm:text-base lg:text-lg mt-5 mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Dubai's search results move fast, and so does the competition for them. <span className="font-semibold text-blue-700">DigLip7</span> provides Dubai SEO Services built around how people in this market actually search — the mix of service, neighbourhood and intent behind every query — combined with technical website performance, local visibility, content quality and measurable organic growth. Our strategies are designed for businesses targeting customers across Dubai and, where relevant, the wider UAE (see our <a href="/uae/seo-services/" className="text-teal-800 font-semibold underline hover:text-[#b8864a] transition-colors">SEO Services UAE</a>). We won't promise a specific ranking or a fixed timeline; what we offer is a structured, transparent process for building visibility that holds up over time.
            </p>

            {/* What this includes */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-wider font-bold text-gray-500 mb-2.5">
                What this includes:
              </p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {heroIncludes.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 bg-white/80 border border-teal-100 px-3 py-1.5 rounded-full text-xs font-semibold text-teal-900 shadow-sm"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a href="/contact" className="inline-block">
                <motion.button
                  className="group px-7 sm:px-9 py-3.5 sm:py-4 bg-gradient-to-r from-teal-700 to-teal-900 text-white text-base sm:text-lg font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get an SEO Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </a>
              <a href="/contact" className="inline-block">
                <motion.button
                  className="px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-teal-700 border-2 border-teal-700 text-base sm:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Talk to Our SEO Team
                </motion.button>
              </a>
            </div>
          </div>

          {/* Right Hero Image */}
          <motion.div
            className="w-full lg:w-[42%] flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              <EmptyImageSlot
                src={heroImgSrc}
                alt="Dubai skyline with SEO analytics dashboard overlay"
                aspect="aspect-[4/3]"
                priority={true}
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Floating background particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -80, 0],
                opacity: [0.2, 0.8, 0.2],
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

      {/* Direct Answer — What Are Dubai SEO Services? */}
      <section className="px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20">
        <motion.div
          className="max-w-5xl mx-auto bg-white border-l-4 border-[#b8864a] rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col sm:flex-row gap-5 items-start"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-teal-50">
            <HelpCircle className="w-6 h-6 text-[#005d52]" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
              What Are Dubai SEO Services?
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Dubai SEO Services cover the work involved in improving a website's technical health, content relevance, search visibility, local signals, site structure and user experience so that the right people searching in Dubai can actually find the business. Effective SEO in this market combines technical optimisation, content built around real search intent, local search signals such as Google Business Profile management, authority development and ongoing measurement. It isn't an instant marketing solution — it's a structured process that builds visibility progressively as technical issues are fixed, content improves and search engines gain confidence in the site.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Why SEO Matters for Dubai Businesses */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex-1 w-full flex justify-center"
            >
              <div className="w-full max-w-lg">
                <EmptyImageSlot
                  src={localSeoImgSrc}
                  alt="Local SEO map and search visibility concept for Dubai"
                  aspect="aspect-[4/3]"
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex-1 w-full"
            >
              <FloatingElement>
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-tight text-[#005d52] mb-5">
                  Why SEO Matters |
                  <span className="block text-[#b8864a] mt-1.5">
                    For Dubai Businesses
                  </span>
                </h2>
              </FloatingElement>

              <div className="space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                <p>
                  Dubai's digital marketplace is dense and highly competitive across almost every category, from professional services to retail to hospitality. Commercial search intent is high — people search expecting to find a business they can act on quickly, whether that means booking a service, visiting a store or requesting a quote. Local search and Google Maps visibility play an outsized role here: a large share of searches for services in Dubai are tied to location, and businesses that don't show up in local results lose that traffic to competitors who do.
                </p>
                <p>
                  This plays out differently across sectors. Service-based businesses rely heavily on local intent and “near me” style searches. E-commerce businesses need category and product pages that are technically sound and aligned with commercial intent. Hospitality and real estate both deal with high-volume, time-sensitive searches, while healthcare and professional services depend more on trust signals and accuracy than sheer search volume. B2B companies in Dubai often compete on narrower, more specific searches where content depth matters more than traffic size.
                </p>
                <p>
                  Dubai's population also searches in more than one language and includes a large share of international residents and businesses, which shapes how content should be written and structured. Search behaviour typically combines a service, a location, an industry or a product with clear commercial intent — someone searching “villa cleaning service Dubai Marina” wants something different from someone searching “what does a cleaning service include.” Matching each landing page to the right intent, rather than sending every search to the same generic page, is one of the most consistent drivers of SEO performance we see in this market.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Dubai SEO Strategy */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-teal-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <FloatingElement>
              <h2 className="text-3xl md:text-4xl font-bold text-[#005248]">
                Our Dubai SEO Strategy
              </h2>
            </FloatingElement>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {strategyPillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                <Card3D className="h-full">
                  <div className="bg-white p-7 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 h-full flex flex-col">
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-teal-50 mb-5">
                      <pillar.icon className="w-7 h-7 text-[#005d52]" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-grow">
                      {pillar.description}
                    </p>
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Services Dubai Designed Around Your Business (7 Core Services) */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center max-w-4xl mx-auto mb-14"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#005248] mb-4">
                SEO Services Dubai Designed Around Your Business
              </h2>
            </FloatingElement>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Search visibility in Dubai depends on technical performance, content that matches real intent, and local signals working together. Our dedicated <a href="/digital-market/seoservices/" className="text-teal-800 font-semibold underline hover:text-[#b8864a] transition-colors">SEO Services</a> below are typically delivered as part of one coordinated strategy rather than as standalone add-ons.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                viewport={{ once: true }}
              >
                <Card3D className="h-full">
                  <div className="bg-white p-7 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 h-full flex flex-col">
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-teal-50 mb-5">
                      <service.icon className="w-7 h-7 text-[#005d52]" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                      {service.description}
                    </p>
                    <a
                      href={service.link || "/contact"}
                      className="inline-flex items-center text-[#005248] font-semibold text-sm hover:text-[#b8864a] transition-colors"
                    >
                      <span>{service.cta}</span>
                      <ArrowRight className="w-4 h-4 ml-1.5" />
                    </a>
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Services for Dubai Businesses Across Industries */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-teal-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#005248]">
                SEO Services for Dubai Businesses Across Industries
              </h2>
            </FloatingElement>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {industries.map((ind, index) => (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: (index % 4) * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="bg-white hover:bg-teal-50/40 border border-gray-100 rounded-2xl p-5 h-full shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
                  <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center mb-3">
                    <ind.icon className="w-5 h-5 text-[#005d52]" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-2">{ind.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed flex-grow">
                    {ind.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Local SEO for Dubai Businesses & Targeting Dubai's Local Search Demand */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Left: Strategy Image Slot */}
          <motion.div
            className="flex-1 w-full flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-full max-w-lg">
              <EmptyImageSlot
                src={contentPlanningImgSrc}
                alt="Content planning and keyword research workspace"
                aspect="aspect-[4/3]"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            className="flex-1 w-full space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FloatingElement>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-tight text-[#005d52]">
                Local SEO for Dubai Businesses
              </h2>
            </FloatingElement>

            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              Local SEO helps a business become more discoverable when people search for relevant services in Dubai, particularly through Google Business Profile and Maps visibility. Our approach covers Google Business Profile optimisation, local landing pages, local keyword research, consistent business information, reviews, local content, internal linking and local structured data where appropriate. Local SEO should always reflect genuine business locations and service areas — we don't recommend or create listings for locations a business doesn't actually operate from or serve.
            </p>

            <div className="pt-2">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Targeting Dubai's Local Search Demand
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                Where genuinely relevant to a business, we consider search demand tied to specific areas — Downtown Dubai, Business Bay, Dubai Marina, Jumeirah, Jumeirah Village Circle, Deira, Bur Dubai, Al Barsha, Dubai Silicon Oasis, Dubai Hills and Palm Jumeirah, among others. This doesn't mean creating a page for every neighbourhood a business could plausibly mention. A location page is only worth building when there's a genuine service connection and enough unique, useful information to justify it — otherwise it becomes a thin, low-value page that neither users nor search engines find helpful.
              </p>

              {/* Neighbourhood Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {dubaiNeighbourhoods.map((area) => (
                  <span
                    key={area}
                    className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-700 border border-gray-200"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Dubai SEO Process (6 Steps with Connecting Line) */}
      <section className="bg-gradient-to-br from-gray-50 to-teal-50/30 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <FloatingElement>
              <h2 className="text-3xl md:text-4xl font-bold text-[#005248]">
                Our Dubai SEO Process
              </h2>
            </FloatingElement>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Desktop connecting line */}
            <div className="hidden lg:block absolute top-10 left-0 w-full border-t-4 border-teal-200 z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 relative z-10">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative flex items-center justify-center w-20 h-20 rounded-full border-4 border-teal-300 bg-white shadow-md mb-4">
                    <span className="text-xl font-bold text-[#005248]">{step.number}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-base mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose DigLip7 for SEO Services Dubai? */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#005248]">
                Why Choose DigLip7 for SEO Services Dubai?
              </h2>
            </FloatingElement>
          </div>

          <div className="space-y-5 text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-8">
            <p>
              Our approach is strategy-first: technical SEO and content work together rather than being treated as separate tracks, and every engagement starts with research specific to your market and competitors rather than a reused template. Local SEO is built around your actual locations and service areas, and reporting is transparent — you see what changed, why, and what the data shows afterward. We treat SEO as a continuous process of testing, measuring and refining rather than a one-off project, with planning specifically shaped around the Dubai market.
            </p>
          </div>

          <motion.div
            className="bg-gray-50 border-2 border-teal-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-5 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ShieldCheck className="w-10 h-10 text-[#005248] shrink-0" />
            <p className="text-gray-800 text-sm sm:text-base font-semibold leading-relaxed">
              We won't invent awards, client numbers, reviews, revenue figures, certifications, years of experience or ranking results we haven't earned. Every claim we make about our work is one we can stand behind.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How We Measure SEO Performance & SEO Reporting for Dubai Businesses */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-teal-50/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: How We Measure SEO Performance */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FloatingElement>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-tight text-[#005d52] mb-4">
                How We Measure SEO Performance
              </h2>
            </FloatingElement>
            <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
              SEO performance should be assessed using multiple signals rather than a single ranking position: organic impressions, organic clicks, keyword rankings, overall search visibility, landing-page traffic, organic leads, organic conversions, engagement, indexed pages and technical health. Rankings alone don't capture the full picture — a page can rank well but convert poorly, or rank modestly while still driving qualified leads. We look at the combination.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {performanceSignals.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span className="text-gray-800 font-medium text-xs sm:text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: SEO Reporting for Dubai Businesses */}
          <motion.div
            className="bg-gradient-to-br from-[#005248] to-teal-900 rounded-3xl p-8 shadow-xl text-white flex flex-col justify-between h-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">SEO Reporting for Dubai Businesses</h3>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-6">
                Reporting covers completed work, technical improvements, keyword trends, Search Console performance, organic traffic, top landing pages, content performance, conversion data where tracking exists, and next priorities. The goal is reporting you can actually understand — what changed, why it changed, and what's coming next — rather than a dashboard with no context.
              </p>
            </div>

            {/* Reporting Image Slot with Increased Height */}
            <div className="pt-2 w-full">
              <EmptyImageSlot
                src={ctaConsultationImgSrc}
                alt="SEO consultation meeting with Dubai business context"
                aspect="aspect-[16/10] sm:aspect-[4/3]"
                className="rounded-2xl shadow-lg w-full min-h-[260px] sm:min-h-[320px]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEO Services for Dubai and the Wider UAE */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="bg-gradient-to-r from-teal-50/70 via-gray-50 to-amber-50/30 border border-teal-100 rounded-3xl p-8 sm:p-10 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-[#005d52]" />
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                SEO Services for Dubai and the Wider UAE
              </h2>
            </div>
            <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-6">
              Dubai is part of a wider UAE market, and many businesses also target customers in Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah and Umm Al Quwain. This page focuses specifically on Dubai; for a broader, country-level view of our approach across the Emirates, see our <a href="/uae/seo-services/" className="text-teal-800 font-semibold underline hover:text-[#b8864a] transition-colors">SEO Services UAE</a> page.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="/uae/seo-services/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#005248] text-white text-sm font-semibold hover:bg-[#00423a] transition-all shadow-md"
              >
                <span>SEO Services UAE</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/digital-market/seoservices/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-teal-200 text-teal-800 text-sm font-semibold hover:bg-teal-50 transition-all shadow-sm"
              >
                <span>SEO Services (Global)</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Frequently Asked Questions About SEO Services Dubai */}
      <section className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-10 sm:mb-14"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <FloatingElement>
              <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-3">
                Frequently Asked Questions About SEO Services Dubai
              </h2>
            </FloatingElement>
          </motion.div>

          <div className="space-y-4 sm:space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left p-4 sm:p-6 hover:bg-gray-50 transition-colors duration-200 group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-900 to-teal-700 text-white text-base sm:text-lg font-semibold rounded-full shadow-lg hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-102 cursor-pointer"
                >
                  <span className="font-semibold pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0"
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

      {/* Ready to Grow Your Search Visibility in Dubai? (Final CTA) */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-teal-700 to-teal-900 overflow-hidden">
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

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <FloatingElement>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
                Ready to Grow Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white">
                  Search Visibility in Dubai?
                </span>
              </h2>
            </FloatingElement>

            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              If you'd like to talk through your website, business goals, target audience and SEO requirements for the Dubai market, we're glad to walk through it with you — no exaggerated promises, just a clear look at what's realistic for your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/contact">
                <motion.button
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-teal-800 font-semibold rounded-full shadow-xl hover:shadow-2xl hover:bg-gray-50 transition-all duration-300 text-sm sm:text-base cursor-pointer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get an SEO Consultation
                  <Sparkles className="inline-block ml-2 w-4 h-4 sm:w-5 sm:h-5 text-teal-600" />
                </motion.button>
              </a>
              <a href="/contact">
                <motion.button
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 text-sm sm:text-base cursor-pointer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Talk to DigLip7
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default DubaiSEOServices;
