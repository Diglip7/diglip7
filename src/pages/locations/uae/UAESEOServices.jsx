import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "../../../components/SEO";
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
} from "lucide-react";

// Image Plan paths (5 targeted webp slots for future upload)
const heroImgSrc = "/images/seo-services-uae-diglip7.webp";
const techSeoImgSrc = "/images/technical-seo-services-uae.webp";
const localSeoImgSrc = "/images/local-seo-services-uae.webp";
const strategyImgSrc = "/images/seo-strategy-uae.webp";
const reportingImgSrc = "/images/seo-reporting-uae.webp";

// Resilient Image Slot Component: Displays full image cleanly with edge-to-edge presentation
const SEOImageSlot = ({
  src,
  filename,
  alt,
  className = "",
  aspect = "aspect-[16/10] w-full",
  width = 800,
  height = 600,
  objectFit = "object-cover",
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const handleError = () => {
    if (currentSrc.includes("/images/")) {
      setCurrentSrc(`/images/${filename || currentSrc.split("/").pop()}`);
    } else {
      setFailed(true);
    }
  };

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-xl flex items-center justify-center ${aspect} ${className}`}
    >
      {!failed ? (
        <img
          src={currentSrc}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={handleError}
          className={`w-full h-full ${objectFit} transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"
            }`}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-teal-50 to-white">
          <Sparkles className="w-10 h-10 text-teal-600 mb-2 opacity-60" />
          <p className="text-xs sm:text-sm font-semibold text-gray-700 max-w-xs">{alt}</p>
        </div>
      )}
      {!loaded && !failed && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50/50">
          <div className="w-8 h-8 border-2 border-teal-500 border-t-transparent rounded-full animate-spin" />
        </div>
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

const Card3D = ({ children, className = "", intensity = 25 }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Tilts dynamically on hover when cursor approaches corners/edges
    setRotateX(((y - centerY) / centerY) * -intensity);
    setRotateY(((x - centerX) / centerX) * intensity);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      className={`transform-gpu ${className}`}
      style={{
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX,
        rotateY,
        scale: isHovered ? 1.02 : 1,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
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
  { label: "SEO Services UAE", href: "/uae/seo-services/" },
];

const coreServices = [
  {
    icon: Settings,
    title: "Technical SEO",
    description:
      "We review how search engines crawl, render and index your website — site architecture, canonical tags, redirects, XML sitemaps, robots.txt, JavaScript rendering issues, internal linking and overall page experience. Technical foundations matter because even strong content underperforms on a site that search engines struggle to crawl or index correctly.",
    cta: "Explore Technical SEO",
    link: "/digital-market/seoservices",
  },
  {
    icon: MapPin,
    title: "Local SEO",
    description:
      "For UAE businesses that rely on nearby customers, this means optimising your Google Business Profile, building local landing pages where genuinely warranted, keeping business information consistent across the web, and supporting review and reputation signals that influence local search visibility.",
    cta: "Explore Local SEO",
    link: "/digital-market/local-SEO-services",
  },
  {
    icon: FileText,
    title: "On-Page SEO",
    description:
      "This covers matching pages to real search intent — titles, meta descriptions, headings, content structure, internal links, image optimisation and the contextual relevance that helps search engines understand what a page is about, alongside clear paths to conversion.",
    cta: "Improve On-Page SEO",
    link: "/digital-market/seoservices",
  },
  {
    icon: BookOpen,
    title: "Content SEO",
    description:
      "We research topics and map them to search intent, then build out service pages, supporting content and informational resources that reflect genuine expertise. This also includes refreshing existing content that has gone stale rather than only publishing new pages.",
    cta: "Explore Content SEO",
    link: "/digital-market/content-marketing",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce SEO",
    description:
      "For online stores, this means optimising category and product pages, managing faceted navigation so it doesn't create indexing problems, applying product schema where appropriate, and aligning pages with the commercial search terms UAE shoppers actually use.",
    cta: "Explore E-commerce SEO",
    link: "/digital-market/e-commerce-marketing",
  },
  {
    icon: Globe,
    title: "International SEO",
    description:
      "For businesses operating across more than one country, this covers multi-country site architecture, hreflang implementation where appropriate, and localised content that reflects regional search intent rather than a single translated version of one market's content.",
    cta: "Explore International SEO",
    link: "/digital-market/seoservices",
  },
  {
    icon: Sparkles,
    title: "SEO for AI Search",
    description:
      "As search systems increasingly draw on AI-generated summaries, the underlying principles stay the same: content needs to be useful, crawlable and clearly structured. Google has stated that AI Overviews and AI Mode rely on the same foundational SEO principles as traditional Search, with no separate technical requirements or special schema needed. We won't claim to “guarantee” placement in AI-generated results — no one legitimately can — but a well-structured, genuinely useful site is better positioned for however search systems evolve.",
    cta: "Explore AI Search SEO",
    link: "/digital-market/Ai-powered-Digital-Marketing",
  },
];

const processSteps = [
  {
    number: "01",
    title: "SEO Audit",
    description:
      "We review technical health, indexation, current rankings, existing content, backlink profile, internal linking and competitor positioning to establish a clear starting point.",
  },
  {
    number: "02",
    title: "Search & Competitor Research",
    description:
      "We identify search intent patterns, commercial opportunities, content gaps and keyword clusters, and assess where competitors are strong or vulnerable.",
  },
  {
    number: "03",
    title: "Strategy & Architecture",
    description:
      "We build a keyword-to-page mapping, information architecture, internal-linking plan, content priorities and local SEO structure based on the research.",
  },
  {
    number: "04",
    title: "On-Page & Technical Optimisation",
    description:
      "We work through metadata, headings, content, internal links, schema and technical issues, with attention to page experience throughout.",
  },
  {
    number: "05",
    title: "Content & Authority",
    description:
      "We develop genuinely useful content and work on relevant authority signals. We don't promise a fixed number of backlinks — the focus is on sustainable, relevant signals rather than volume for its own sake.",
  },
  {
    number: "06",
    title: "Measurement & Improvement",
    description:
      "We track impressions, clicks, rankings, organic conversions and landing-page performance through Search Console and analytics, and use that data to refine the strategy on an ongoing basis.",
  },
];

const differentBusinesses = [
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Local search visibility and accurate, trustworthy content matter here more than almost anywhere, given how sensitive healthcare searches are.",
  },
  {
    icon: Scale,
    title: "Professional Services",
    description:
      "Law firms, accountants and consultancies typically compete on trust signals and specific, high-intent searches rather than volume.",
  },
  {
    icon: Building2,
    title: "Real Estate",
    description:
      "Listings, area-specific content and fast-moving search demand require both technical performance and locally relevant content.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description:
      "Category structure, product content and technical indexing directly affect whether products are found and purchased.",
  },
  {
    icon: Hotel,
    title: "Hospitality",
    description:
      "Seasonal demand and location-driven searches call for content that reflects both timing and place.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Prospective students and parents often research extensively before enquiring, which rewards informational and comparison-style content.",
  },
  {
    icon: Cpu,
    title: "Technology",
    description:
      "B2B technology searches tend to be specific and lower-volume, where topical depth matters more than broad keyword targeting.",
  },
  {
    icon: Handshake,
    title: "B2B",
    description:
      "Longer sales cycles mean content needs to support research and comparison, not just capture immediate transactional intent.",
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
      "Building organic visibility from a low base benefits from a focused strategy rather than trying to compete across too many keywords at once.",
  },
];

const measurableResults = [
  "Organic clicks",
  "Search impressions",
  "Keyword visibility",
  "Qualified organic traffic",
  "Leads generated through organic search",
  "Conversion rate",
  "Landing-page performance",
];


const emirates = [
  "Dubai",
  "Abu Dhabi",
  "Sharjah",
  "Ajman",
  "Ras Al Khaimah",
  "Fujairah",
  "Umm Al Quwain",
];

const faqs = [
  {
    question: "What are SEO Services UAE?",
    answer:
      "SEO Services UAE cover the technical, content and local optimisation work needed to help a website rank and be found by people searching in the UAE market. This includes technical SEO, on-page optimisation, content strategy, local search signals and ongoing performance measurement.",
  },
  {
    question: "How can SEO help a business in the UAE?",
    answer:
      "SEO improves how easily your business can be found by people already searching for what you offer, driving qualified organic traffic rather than generic visits. It builds visibility over time rather than depending solely on paid advertising, though results depend on your market, competition and starting point.",
  },
  {
    question: "How long does SEO take to show results in the UAE?",
    answer:
      "Timelines vary depending on your website's current condition, competition level, existing authority, content quality and overall search demand in your industry. Most SEO work shows meaningful movement over months rather than weeks, and we won't promise a fixed timeline upfront.",
  },
  {
    question: "What is included in SEO Services in UAE?",
    answer:
      "A comprehensive SEO engagement typically includes technical SEO, on-page optimisation, content development, local SEO, authority building and ongoing measurement through analytics and Search Console.",
  },
  {
    question: "Do you provide SEO Services in Dubai?",
    answer: (
      <span>
        Yes — see our dedicated{" "}
        <a
          href="/uae/dubai/seo-services"
          className="text-[#005248] font-bold underline hover:text-[#b8864a] transition-colors"
        >
          SEO Services Dubai
        </a>{" "}
        page for Dubai-specific strategy and content.
      </span>
    ),
  },
  {
    question:
      "What is the difference between an SEO Company UAE and an SEO Agency UAE?",
    answer:
      "The terms are largely interchangeable in practice. What matters more than the label is the actual scope of work, expertise and delivery model a provider offers — it's worth asking specifically what's included rather than relying on the title.",
  },
  {
    question: "Do you provide local SEO in the UAE?",
    answer:
      "Yes, including Google Business Profile optimisation, local landing pages where warranted, and consistency of business information across the web to support local search visibility.",
  },
  {
    question: "Can SEO help e-commerce businesses in the UAE?",
    answer:
      "Yes — this typically involves optimising category and product pages, managing technical indexing issues from faceted navigation, and aligning content with commercial search intent specific to UAE shoppers.",
  },
  {
    question: "How do you measure SEO performance?",
    answer:
      "We track performance through Google Search Console and analytics data, covering impressions, clicks, keyword rankings, organic traffic trends and conversions tied to organic search.",
  },
  {
    question: "Can SEO guarantee first-page rankings?",
    answer:
      "No reputable SEO provider should guarantee a specific Google ranking. Search rankings depend on many factors outside any agency's direct control, including algorithm changes and competitor activity, and we won't claim otherwise.",
  },
];

// ---------------------------------------------------------------------------
// Main Page Component
// ---------------------------------------------------------------------------

function SeoServicesUAE() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  const pageUrl = "https://diglip7.com/uae/seo-services/";

  // Connected JSON-LD Schema Graph (Section 3 of Technical & Metadata Pack)
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://diglip7.com/uae/seo-services/#webpage",
        "url": "https://diglip7.com/uae/seo-services/",
        "name": "SEO Services UAE | SEO Company & Agency in UAE | DigLip7",
        "description":
          "Professional SEO Services UAE for businesses seeking stronger organic visibility and qualified search traffic.",
        "isPartOf": {
          "@id": "https://diglip7.com/#website",
        },
        "breadcrumb": {
          "@id": "https://diglip7.com/uae/seo-services/#breadcrumb",
        },
        "mainEntity": {
          "@id": "https://diglip7.com/uae/seo-services/#service",
        },
      },
      {
        "@type": "Service",
        "@id": "https://diglip7.com/uae/seo-services/#service",
        "name": "SEO Services UAE",
        "serviceType": "Search Engine Optimization",
        "url": "https://diglip7.com/uae/seo-services/",
        "provider": {
          "@id": "https://diglip7.com/#organization",
        },
        "areaServed": {
          "@type": "Country",
          "name": "United Arab Emirates",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://diglip7.com/uae/seo-services/#breadcrumb",
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
            "name": "Locations",
            "item": "https://diglip7.com/uae/",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "SEO Services UAE",
          },
        ],
      },
    ],
  };

  return (
    <div className="bg-white overflow-x-hidden w-full">
      <SEO
        title="SEO Services UAE | SEO Company & Agency in UAE | DigLip7"
        description="Grow your visibility with professional SEO Services UAE from DigLip7. Get technical SEO, local SEO, content, e-commerce and performance-focused strategies for UAE businesses."
        canonical={pageUrl}
        ogType="website"
        ogImage="https://diglip7.com/images/seo-services-uae.jpg"
        keywords="SEO Services UAE, SEO Company UAE, SEO Agency UAE, Local SEO Dubai, Technical SEO UAE, DigLip7"
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
              <span className="text-gray-900">SEO Services UAE </span>
              <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                for Sustainable Search Growth
              </span>
            </h1>

            <p className="text-gray-700 text-sm sm:text-base lg:text-lg mt-5 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Your customers are already searching for what your business offers — the question is whether they find you when they do. Across Dubai, Abu Dhabi and the wider Emirates, competition for search visibility keeps growing, and rankings alone don't pay the bills; qualified visitor who convert do. <span className="font-semibold text-blue-700">DigLip7</span> provides SEO Services UAE built around technical performance, search intent, useful content, local relevance and outcomes you can actually measure. Our approach brings technical SEO, content and local optimisation together into one strategy shaped for how UAE audiences search, connecting directly with our broader{" "}
              <a
                href="/digital-market/seoservices"
                className="text-[#005d52] font-semibold underline hover:text-[#b8864a] transition-colors"
              >
                global SEO services
              </a>
              . If you want a clearer picture of where your website stands and what's holding back visibility, our team is ready to walk through it with you.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a href="/contact" className="inline-block">
                <motion.button
                  className="group px-7 sm:px-9 py-3.5 sm:py-4 bg-gradient-to-r from-teal-700 to-teal-900 text-white text-base sm:text-lg font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get a Free SEO Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </a>
              <a href="/contact" className="inline-block">
                <motion.button
                  className="px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-teal-700 border-2 border-teal-700 text-base sm:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Talk to an SEO Expert
                </motion.button>
              </a>
            </div>
          </div>

          {/* Right Hero Image (Image Plan #1: Hero) */}
          <motion.div
            className="w-full lg:w-[46%] flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card3D intensity={25} className="w-full max-w-lg lg:max-w-xl">
              <SEOImageSlot
                src={heroImgSrc}
                filename="seo-services-uae-diglip7.webp"
                alt="SEO Services UAE strategy for businesses"
                aspect="aspect-[16/10] w-full"
                className="rounded-3xl shadow-2xl"
              />
            </Card3D>
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

      {/* Quick Answer: What are SEO Services in the UAE? */}
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
              Quick Answer: What are SEO Services in the UAE?
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              SEO Services in the UAE involve improving a website's technical health, content relevance, search visibility and local presence so businesses can be found by people actively searching for their products or services. This typically covers technical fixes, on-page and content optimisation, local search signals such as Google Business Profile management, and ongoing measurement of rankings, traffic and conversions. Effective SEO Services UAE work adapts to local search behaviour across Dubai, Abu Dhabi and other emirates rather than applying a single generic strategy everywhere.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Why SEO Matters for UAE Businesses (Image Plan #2: Technical SEO) */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
            {/* Left Image (Image Plan #2: Technical SEO) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-[40%] flex justify-center"
            >
              <Card3D intensity={25} className="w-full max-w-lg lg:max-w-none">
                <SEOImageSlot
                  src={techSeoImgSrc}
                  filename="technical-seo-services-uae.webp"
                  alt="Technical SEO services for UAE websites"
                  aspect="aspect-[16/10] w-full"
                  objectFit="object-cover"
                  className="shadow-2xl"
                />
              </Card3D>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-[60%]"
            >
              <FloatingElement>
                <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold leading-tight text-[#005d52] mb-5">
                  Why SEO Matters{" "}
                  <span className="text-[#b8864a] block sm:inline">
                    | For UAE Businesses
                  </span>
                </h2>
              </FloatingElement>

              <div className="space-y-3.5 text-gray-600 leading-relaxed text-sm sm:text-base">
                <p>
                  The UAE has one of the most digitally active populations in the region, and mobile search behaviour drives a large share of how people find local businesses, compare services and make purchase decisions. Whether someone is looking for a clinic in Abu Dhabi, a contractor in Sharjah or an online store that ships across the Emirates, search is usually the starting point.
                </p>
                <p>
                  That also means competition is intense. Dubai and Abu Dhabi in particular have dense markets across nearly every service and retail category, so ranking well requires more than a well-designed website — it requires technical health, content that matches what people are actually searching for, and credible local signals.
                </p>
                <p>
                  Service-based businesses depend on local intent: searches tied to a neighbourhood, city or “near me” phrasing that lead directly to enquiries. E-commerce businesses need category and product pages that are both technically sound and aligned with commercial search intent. B2B companies in the UAE, meanwhile, often compete on more specific, lower-volume searches where content depth and topical relevance matter more than sheer traffic volume.
                </p>
                <div className="p-4 rounded-xl bg-teal-50/70 border border-teal-100 text-teal-900 text-sm leading-relaxed mt-2 shadow-sm">
                  <strong className="text-[#005248] font-semibold block mb-1">
                    Realistic Expectations & Long-Term Compounding:
                  </strong>
                  None of this happens overnight, and no responsible SEO provider can promise that it will. SEO is a long-term investment in visibility that compounds over time — the value isn't just in ranking for a keyword, but in attracting qualified traffic that converts, sustaining that visibility as algorithms and competitors change, and building a website that keeps earning organic attention rather than depending entirely on paid channels. For UAE businesses, this distinction between generic traffic and qualified, intent-matched traffic is often what separates SEO that pays off from SEO that doesn't.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our SEO Services in UAE (Core 7 Services) */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-teal-50/30">
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
                Our SEO Services in UAE
              </h2>
            </FloatingElement>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Search visibility depends on several things working together: a technically sound website, content that matches what people are searching for, and local signals that build trust in your market. Our SEO Services UAE cover each of these areas as part of one coordinated strategy rather than isolated fixes.
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
                <Card3D intensity={32} className="h-full">
                  <div className="bg-white p-7 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-4 border border-gray-100 transition-all duration-300 h-full flex flex-col">
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

      {/* A UAE-Focused SEO Strategy Built Around Search Intent (Image Plan #4: Strategy) */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          {/* Left Content */}
          <motion.div
            className="w-full lg:w-[60%] space-y-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FloatingElement>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold leading-tight text-[#005d52] mb-5">
                A UAE-Focused SEO Strategy{" "}
                <span className="text-[#b8864a] block sm:inline">
                  | Built Around Search Intent
                </span>
              </h2>
            </FloatingElement>

            <div className="space-y-3.5 text-gray-600 leading-relaxed text-sm sm:text-base">
              <p>
                A strategy built for the UAE market has to account for how differently people search across the country. Some searches are broad and UAE-wide; others are specific to Dubai, Abu Dhabi or another emirate; many combine a service with a location, and intent shifts depending on whether someone is comparing options, ready to buy, or just researching.
              </p>
              <p>
                We map keyword clusters against this mix of commercial and informational intent, along with brand-specific searches, so that content and page structure reflect how your actual audience searches rather than a generic template. Industry context matters too — a real estate search in Dubai behaves differently from a healthcare search in Abu Dhabi, and content should reflect that difference rather than treat every UAE search the same way.
              </p>
              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/70 text-amber-950 text-sm leading-relaxed mt-2 shadow-sm">
                <strong className="text-[#b8864a] font-semibold block mb-1">
                  Deliberate Location Strategy:
                </strong>
                This is also where we're deliberate about location pages. A dedicated page for a city or emirate only earns its place when it offers genuinely unique, useful information for that market — different local context, different examples, different practical detail. We don't create location pages by swapping a city name into an otherwise identical template, because that approach tends to create thin content that neither users nor search engines find valuable. Where a city like Dubai has enough distinct commercial activity to justify its own page, we build it with content specific to that market and link it clearly from the broader UAE page.
              </div>
            </div>
          </motion.div>

          {/* Right Image (Image Plan #4: Strategy) */}
          <motion.div
            className="w-full lg:w-[40%] flex justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card3D intensity={25} className="w-full max-w-lg lg:max-w-none">
              <SEOImageSlot
                src={strategyImgSrc}
                filename="seo-strategy-uae.webp"
                alt="SEO strategy for UAE businesses"
                aspect="aspect-[16/10] w-full"
                objectFit="object-cover"
                className="shadow-2xl"
              />
            </Card3D>
          </motion.div>
        </div>
      </section>

      {/* Our SEO Process */}
      <section className="bg-gradient-to-br from-gray-50 to-teal-50/30 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <FloatingElement>
              <h2 className="text-3xl md:text-4xl font-bold text-[#005248]">
                Our SEO Process
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
                  className="flex flex-col items-center text-center p-3 rounded-2xl transition-all duration-300 hover:-translate-y-3 hover:shadow-xl hover:bg-white"
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

      {/* SEO Services for Different UAE Businesses */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#005248]">
                SEO Services for Different UAE Businesses
              </h2>
            </FloatingElement>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {differentBusinesses.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: (index % 5) * 0.05 }}
                viewport={{ once: true }}
              >
                <Card3D intensity={24} className="h-full">
                  <div className="bg-gray-50/80 hover:bg-teal-50/40 border border-gray-100 rounded-2xl p-5 h-full shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
                    <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center mb-3">
                      <item.icon className="w-5 h-5 text-[#005d52]" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-xs leading-relaxed flex-grow">
                      {item.description}
                    </p>
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose DigLip7 for SEO Services UAE? */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-teal-50/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#005248]">
                Why Choose DigLip7 for SEO Services UAE?
              </h2>
            </FloatingElement>
          </div>

          <div className="space-y-5 text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-8">
            <p>
              We build SEO strategy around data and search intent rather than guesswork — combining technical SEO with content that's actually written for the people searching, not just for algorithms. Every engagement starts with research specific to your market and competitors rather than a template applied across clients.
            </p>
            <p>
              Reporting is transparent: you see what was changed, why it was changed, and what the data shows afterward, rather than a black-box summary. Strategy is customised to your business and your market rather than reused wholesale from another client, and our capability spans both local UAE-specific SEO and international SEO for businesses operating across more than one country.
            </p>
            <p>
              We also pay attention to how landing pages convert once visitors arrive, not just how they rank, because visibility that doesn't lead to enquiries or sales isn't doing its job. And because search doesn't stand still, we treat SEO as an ongoing process of testing, measuring and refining rather than a one-time project.
            </p>
          </div>

          <motion.div
            className="bg-white border-2 border-teal-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-5 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ShieldCheck className="w-10 h-10 text-[#005248] shrink-0" />
            <p className="text-gray-800 text-sm sm:text-base font-semibold leading-relaxed">
              We won't promise rankings, invented client numbers, awards we haven't earned, or partnerships that don't exist — every claim we make about our work is one we can stand behind.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SEO Services Across the UAE (Image Plan #3: Local SEO) */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          {/* Left: Image Plan #3 Local SEO */}
          <motion.div
            className="w-full lg:w-[40%] flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card3D intensity={25} className="w-full max-w-lg lg:max-w-none">
              <SEOImageSlot
                src={localSeoImgSrc}
                filename="local-seo-services-uae.webp"
                alt="Local SEO services in UAE"
                aspect="aspect-[16/10] w-full"
                objectFit="object-cover"
                className="shadow-2xl"
              />
            </Card3D>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="w-full lg:w-[60%] space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FloatingElement>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-tight text-[#005d52]">
                SEO Services Across the UAE
              </h2>
            </FloatingElement>

            {/* Emirates List / Pills */}
            <div className="flex flex-wrap gap-2.5">
              {emirates.map((city) => (
                <span
                  key={city}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${city === "Dubai"
                      ? "bg-[#005248] text-white shadow-md"
                      : "bg-gray-100 text-gray-700 border border-gray-200"
                    }`}
                >
                  {city}
                </span>
              ))}
            </div>

            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              We currently have a dedicated city-level page for{" "}
              <a
                href="/uae/dubai/seo-services"
                className="text-[#005248] font-bold underline hover:text-[#b8864a] transition-colors"
              >
                SEO Services Dubai
              </a>{" "}
              — built with content specific to that market. Additional city pages will be added only where there's enough genuinely unique content to justify them, rather than created for every emirate by default.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SEO Results That Can Be Measured & Clear SEO Reporting (Image Plan #5: Reporting) */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-teal-50/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left: Measurable Results */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FloatingElement>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-tight text-[#005d52] mb-4">
                SEO Results That Can Be Measured
              </h2>
            </FloatingElement>
            <p className="text-gray-600 text-sm sm:text-base mb-6">
              We report on the metrics that actually reflect SEO performance:
            </p>
            <ul className="space-y-3">
              {measurableResults.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
                  <span className="text-gray-800 font-medium text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-500 italic mt-6">
              *(Verified client case studies to be added here once available — do not publish placeholder or estimated figures.)*
            </p>
          </motion.div>

          {/* Right: Clear SEO Reporting with Image Plan #5 */}
          <motion.div
            className="bg-gradient-to-br from-[#005248] to-teal-900 rounded-3xl p-8 shadow-xl text-white flex flex-col justify-between h-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Clear SEO Reporting</h3>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-6">
                Our reporting is built to answer five questions in plain language: what was changed, why it was changed, what improved as a result, what still needs attention, and what we're working on next. You'll always know where your SEO stands and what's coming next rather than receiving a dashboard with no context.
              </p>
            </div>

            {/* Reporting Image (Image Plan #5) */}
            <div className="pt-2 w-full">
              <Card3D intensity={25} className="w-full">
                <SEOImageSlot
                  src={reportingImgSrc}
                  filename="seo-reporting-uae.webp"
                  alt="SEO performance reporting for UAE businesses"
                  aspect="aspect-[16/10] sm:aspect-[4/3] w-full"
                  className="rounded-2xl shadow-lg"
                />
              </Card3D>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ready to Improve Your Organic Visibility in the UAE? */}
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
                Ready to Improve Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white">
                  Organic Visibility in the UAE?
                </span>
              </h2>
            </FloatingElement>

            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              If you want to know where your website currently stands and what's realistically achievable, we're happy to walk through it with you — no generic pitch, just a look at your actual site and market.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/contact">
                <motion.button
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-teal-800 font-semibold rounded-full shadow-xl hover:shadow-2xl hover:bg-gray-50 transition-all duration-300 text-sm sm:text-base cursor-pointer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get a Free SEO Consultation
                  <Sparkles className="inline-block ml-2 w-4 h-4 sm:w-5 sm:h-5 text-teal-600" />
                </motion.button>
              </a>
              <a href="/contact">
                <motion.button
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 text-sm sm:text-base cursor-pointer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Talk to an SEO Expert
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Frequently Asked Questions About SEO Services UAE */}
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
                Frequently Asked Questions About SEO Services UAE
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
    </div>
  );
}

export default SeoServicesUAE;