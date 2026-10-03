import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../../../components/SEO";
import {
  Search,
  CheckCircle,
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
  GraduationCap,
  Scale,
  Hotel,
  Check,
  ShieldCheck,
  Cpu,
  Globe,
  Languages,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

// Image Paths with reliable fallbacks
const heroImgSrc = "/src/images/seo-services-uae-qatar.webp";
const auditImgSrc = "/src/images/local-seo-qatar.webp";
const contentImgSrc = "/src/images/content-seo-planning-qatar.webp";
const localMapsImgSrc = "/src/images/google-maps-seo-qatar.webp";
const workflowImgSrc = "/src/images/seo-qatar.webp";
const reportingImgSrc = "/src/images/seo-reporting-qatar.webp";

// 3D Interactive Card Component (matches SocialMedia, DubaiEcommerceSEO)
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

// Image Slot with fallback
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
  const [hasError, setHasError] = useState(false);
  const Icon = fallbackIcon;

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
            if (filename && e.currentTarget.src.includes("/src/images/")) {
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
            <Icon className="w-6 h-6" />
          </div>
          <span className="max-w-xs leading-relaxed">{alt}</span>
        </div>
      )}
    </div>
  );
};

// ---------------------------------------------------------------------------
// Document Data
// ---------------------------------------------------------------------------

const breadcrumbTrail = [
  { label: "Home", href: "/" },
  { label: "Qatar", href: "/qatar/seo-services" },
  { label: "SEO Services", href: "/qatar/seo-services" },
];

const coreDisciplines = [
  {
    title: "Technical optimization",
    desc: "ensuring pages can be crawled, indexed and loaded without friction.",
    icon: Settings,
  },
  {
    title: "Keyword research and search intent",
    desc: "identifying the real phrasing customers use and the outcome they expect.",
    icon: Target,
  },
  {
    title: "Content and on-page SEO",
    desc: "shaping titles, headings, copy, images and URLs page by page.",
    icon: FileText,
  },
  {
    title: "Internal linking and site architecture",
    desc: "deciding how pages relate and which ones deserve emphasis.",
    icon: Network,
  },
  {
    title: "Local and e-commerce SEO",
    desc: "handling the special needs of branches, clinics, retail and online shops.",
    icon: MapPin,
  },
  {
    title: "Structured data",
    desc: "adding markup that labels products, FAQs, articles and organizations.",
    icon: Layers,
  },
  {
    title: "Performance and Core Web Vitals",
    desc: "how quickly and stably pages behave on ordinary devices.",
    icon: Zap,
  },
  {
    title: "Authority and backlinks",
    desc: "earning credible, relevant references from other websites.",
    icon: ShieldCheck,
  },
  {
    title: "Measurement",
    desc: "using search and conversion data to judge progress.",
    icon: BarChart3,
  },
];

const auditChecks = [
  {
    title: "Technical issues, crawling and indexing",
    desc: "which pages search engines reach, and which they've indexed, ignored or misread.",
  },
  {
    title: "Page structure and metadata",
    desc: "titles, descriptions and heading logic.",
  },
  {
    title: "Internal links",
    desc: "whether your most valuable pages get proper support.",
  },
  {
    title: "Duplicate content and canonicals",
    desc: "cases where several URLs compete for the same purpose.",
  },
  {
    title: "XML sitemap, robots directives and redirects",
    desc: "whether they guide crawlers or accidentally obstruct them.",
  },
  {
    title: "Core Web Vitals and structured data",
    desc: "performance metrics and semantic search labels.",
  },
  {
    title: "Google Search Console data and current organic visibility",
    desc: "what you already earn and from which queries.",
  },
];

const intentGroups = [
  {
    type: "Informational",
    desc: "someone wants an answer or explanation.",
    icon: Search,
  },
  {
    type: "Commercial investigation",
    desc: "someone is weighing products, services or providers.",
    icon: Target,
  },
  {
    type: "Transactional",
    desc: "someone is closer to buying, booking, enquiring or acting.",
    icon: ShoppingBag,
  },
  {
    type: "Navigational",
    desc: "someone is looking for a particular brand, site or destination.",
    icon: Globe,
  },
];

const technicalCarePoints = [
  "Website redesigns, where new layouts frequently break URLs, links and metadata.",
  "CMS migrations, which need careful template and redirect mapping.",
  "Domain changes, where signals must transfer cleanly.",
  "E-commerce launches, where catalogues can spawn thousands of URLs.",
  "Restructuring, where moving pages without a plan can cost existing visibility.",
  "Large content expansions, which need a structure that can hold the weight.",
];

const localSeoItems = [
  { title: "Google Business Profile", desc: "accurate categories, services, hours and photos." },
  { title: "Local landing pages", desc: "and location-specific content." },
  { title: "Local citations and NAP consistency", desc: "identical name, address and phone details across the web." },
  { title: "Reviews", desc: "earning them fairly and responding with care." },
  { title: "Google Maps visibility", desc: "and local search intent." },
  { title: "Local internal linking", desc: "connecting localized pages logically." },
];

const multilingualPoints = [
  {
    title: "Language-specific keyword research",
    desc: "because people rarely search using direct translations of each other's terms.",
  },
  {
    title: "Intent by language",
    desc: "the same product may be researched differently in Arabic and English.",
  },
  {
    title: "Separate language versions",
    desc: "where sensible, with clear URL structures.",
  },
  {
    title: "Hreflang where technically appropriate",
    desc: "so search engines serve the correct version.",
  },
  {
    title: "Language-specific metadata, internal links and structured data",
    desc: "localized meta tags and structured schema per language.",
  },
  {
    title: "Content localisation and translation quality",
    desc: "checked by fluent reviewers.",
  },
];

const businessTypeStrategies = [
  {
    type: "Local businesses",
    desc: "tend to put service and location searches first, along with Business Profile strength and reviews.",
    icon: MapPin,
  },
  {
    type: "Startups",
    desc: "usually gain from concentrating on a few high-intent searches before widening.",
    icon: Target,
  },
  {
    type: "Small businesses",
    desc: "do well by fixing basics and owning a narrow niche or area.",
    icon: Building2,
  },
  {
    type: "E-commerce stores",
    desc: "need solid category, product and internal-linking architecture.",
    icon: ShoppingBag,
    link: "/uae/dubai/ecommerce-seo",
  },
  {
    type: "Healthcare businesses",
    desc: "need careful, accurate content and visible trust signals. Our healthcare SEO work in the UAE shows our approach.",
    icon: Stethoscope,
    link: "/uae/dubai/healthcare-seo",
  },
  {
    type: "Real estate companies",
    desc: "need property, location and informational content; see real estate SEO.",
    icon: Building2,
    link: "/uae/dubai/real-estate-seo",
  },
  {
    type: "SaaS companies",
    desc: "can use educational content to meet buyers earlier in their journey.",
    icon: Cpu,
  },
  {
    type: "B2B companies",
    desc: "chase fewer searches, with longer cycles and multiple decision-makers.",
    icon: FileText,
  },
  {
    type: "Professional services",
    desc: "depend on visible expertise and clear service pages.",
    icon: Scale,
  },
  {
    type: "Educational businesses",
    desc: "often need programme, admission and comparison content that follows enrolment periods.",
    icon: GraduationCap,
  },
  {
    type: "Hospitality businesses",
    desc: "combine location, accommodation and service searches.",
    icon: Hotel,
    link: "/uae/dubai/hotel-seo",
  },
];

const strategySteps = [
  {
    step: "Step 1",
    title: "Website and SEO audit",
    desc: "We review technical condition, content structure, indexation and what you already earn in organic search.",
    icon: Search,
  },
  {
    step: "Step 2",
    title: "Keyword and competitor research",
    desc: "We identify relevant opportunities and study the results for key queries. We never copy competitors; we learn what searchers expect and where your site can add something of its own.",
    icon: Target,
  },
  {
    step: "Step 3",
    title: "Search intent mapping",
    desc: "Each keyword group is assigned to a suitable page type: Service query → service page, Product query → product or category page, Informational query → guide or article, Location query → relevant local page, Comparison query → comparison content.",
    icon: Network,
  },
  {
    step: "Step 4",
    title: "Website architecture",
    desc: "We define how main service pages, supporting service pages, location pages, industry pages, product pages, category pages and blog content connect.",
    icon: FolderTree,
  },
  {
    step: "Step 5",
    title: "Language and location strategy",
    desc: "Where it applies, we decide how Arabic, English, Qatar-wide and city-specific searches should be handled, without automatically creating a page for every keyword or place.",
    icon: Languages,
  },
  {
    step: "Step 6",
    title: "On-page and technical optimization",
    desc: "We improve metadata, content relevance, internal links, page structure, technical health, structured data, indexation and performance.",
    icon: Settings,
  },
  {
    step: "Step 7",
    title: "Content development",
    desc: "New and improved content follows real search demand and customer needs.",
    icon: FileText,
  },
  {
    step: "Step 8",
    title: "Authority and off-page work",
    desc: "We pursue relevant digital PR and legitimate link opportunities. No set number of backlinks is promised, and low-quality link schemes are off the table.",
    icon: ShieldCheck,
  },
  {
    step: "Step 9",
    title: "Measurement and iteration",
    desc: "Search and business data tell us what to improve next. SEO keeps being refined; it isn't a checklist you finish.",
    icon: BarChart3,
  },
];

const localVsNational = [
  {
    local: "City and neighbourhood searches",
    national: "Qatar-wide searches",
  },
  {
    local: "Google Business Profile",
    national: "Broader organic visibility",
  },
  {
    local: "Local landing pages",
    national: "National service or category pages",
  },
  {
    local: "Maps visibility",
    national: "Topic and category authority",
  },
  {
    local: "Local citations",
    national: "Wider authority signals",
  },
  {
    local: "Location-specific content",
    national: "Larger-scale content strategy",
  },
];

const performanceMetrics = [
  "Organic impressions and clicks",
  "Non-brand search visibility and search queries",
  "Average position and click-through rate",
  "Indexed pages and organic landing-page traffic",
  "Qualified enquiries, calls and form submissions",
  "E-commerce transactions where tracking is configured",
  "Conversion rate",
  "Technical health and Core Web Vitals",
];

const seoVsAds = [
  {
    seo: "Organic search visibility",
    ads: "Paid search visibility",
  },
  {
    seo: "Requires ongoing optimization",
    ads: "Requires an advertising budget",
  },
  {
    seo: "Can build long-term search assets",
    ads: "Provides visibility while campaigns run",
  },
  {
    seo: "Content and technical improvements matter",
    ads: "Ad targeting and campaign management matter",
  },
  {
    seo: "Results can take time",
    ads: "Visibility can begin after setup",
  },
];

const commonMistakes = [
  "Targeting keywords without checking intent, so the page answers a different question from the one asked.",
  "Creating duplicate location pages where only the place name changes.",
  "Publishing AI-generated content with no editorial review.",
  "Keyword stuffing.",
  "Ignoring technical SEO.",
  "Weak internal linking.",
  "Thin service pages.",
  "Letting unnecessary URLs get indexed, like filters, tags and test pages.",
  "Ignoring mobile UX.",
  "Translating into Arabic without localisation or review.",
  "Buying low-quality backlinks.",
  "Watching rankings and nothing else.",
  "Skipping conversion tracking.",
  "Leaving outdated content untouched.",
  "Building a separate page for every keyword variation.",
];

const whyChooseDigLip7 = [
  {
    number: "1",
    title: "Intent-led strategy",
    desc: "every page has a defined purpose.",
    icon: Target,
  },
  {
    number: "2",
    title: "Technical foundations first",
    desc: "structure before volume.",
    icon: Settings,
  },
  {
    number: "3",
    title: "Content and on-page optimization",
    desc: "written for readers, then tuned for search.",
    icon: FileText,
  },
  {
    number: "4",
    title: "Local and e-commerce SEO",
    desc: "adapted to how the business actually sells.",
    icon: MapPin,
  },
  {
    number: "5",
    title: "Language-aware planning",
    desc: "Arabic, English or both, based on real audience behaviour.",
    icon: Languages,
  },
  {
    number: "6",
    title: "Measurement and reporting",
    desc: "clear reports tied to search and business metrics.",
    icon: BarChart3,
  },
  {
    number: "7",
    title: "Human-reviewed content",
    desc: "nothing is published as raw machine output.",
    icon: ShieldCheck,
  },
  {
    number: "8",
    title: "Transparent recommendations",
    desc: "we explain what we suggest, why, and what we'd leave alone.",
    icon: CheckCircle,
  },
  {
    number: "9",
    title: "Continuous optimization",
    desc: "the plan changes as the data does.",
    icon: Zap,
  },
];

const faqs = [
  {
    q: "What is an SEO service in Qatar?",
    a: "It is continuing work that improves a website's technical health, content, relevance and authority so people in Qatar can find the business through organic search.",
  },
  {
    q: "How much do SEO services in Qatar cost?",
    a: "Cost varies with site size, competition, scope and whether local, e-commerce, multilingual or enterprise work is involved. Starting with an audit lets pricing reflect the real workload.",
  },
  {
    q: "What does an SEO company in Qatar do?",
    a: "It audits the site, researches keywords, fixes technical faults, improves pages, plans content, supports local presence, builds authority and reports on results.",
  },
  {
    q: "How long does SEO take to show results?",
    a: "No fixed timeline exists. Some technical fixes show effects within weeks, while competitive rankings can take months, depending on site history, competition and implementation speed.",
  },
  {
    q: "Can SEO help a small business in Qatar?",
    a: "Often it can, especially when the focus is a narrow set of local or niche searches and the basics are done well. Results are never guaranteed.",
  },
  {
    q: "Does my Qatar website need Arabic and English pages?",
    a: "Not always. It depends on the languages your audience searches in. Where both matter, each version needs its own research and reviewed content, not just a translation.",
  },
  {
    q: "What is the difference between local SEO and Qatar-wide SEO?",
    a: "Local SEO targets city or neighbourhood searches through Business Profile, reviews and local pages. Qatar-wide SEO targets broader searches through category authority and wider content.",
  },
  {
    q: "Does SEO work for e-commerce websites in Qatar?",
    a: "It can. Category structure, product data, page speed and index control tend to matter most, and outcomes depend on competition and catalogue quality.",
  },
  {
    q: "What does a technical SEO service include?",
    a: "Crawl and index checks, canonicals, sitemaps, robots.txt, redirects, JavaScript rendering, structured data, mobile usability and Core Web Vitals.",
  },
  {
    q: "Should a business create separate location pages?",
    a: "Only if it has a real presence, relevant search demand and genuinely useful local information. Near-duplicate pages add little.",
  },
  {
    q: "Can SEO and Google Ads be used together?",
    a: "Yes. Ads can give early visibility while SEO builds, and ad data can show which searches convert.",
  },
  {
    q: "How do you measure SEO performance?",
    a: "Through impressions, clicks, non-brand visibility, CTR, average position, indexed pages, conversions and technical health, not rankings alone.",
  },
];

// ---------------------------------------------------------------------------
// Main Component
// ---------------------------------------------------------------------------

function QatarSEOServices() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const pageUrl = "https://diglip7.com/qatar/seo-services/";

  const jsonLdGraph = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://diglip7.com/qatar/seo-services/#webpage",
      url: "https://diglip7.com/qatar/seo-services/",
      name: "SEO Service in Qatar | Professional SEO Services | DigLip7",
      description:
        "Grow your organic search visibility with SEO services in Qatar from DigLip7. Get technical SEO, content, local SEO and search strategy tailored to your business.",
      isPartOf: { "@id": "https://diglip7.com/#website" },
      breadcrumb: { "@id": "https://diglip7.com/qatar/seo-services/#breadcrumb" },
      inLanguage: "en",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://diglip7.com/qatar/seo-services/#service",
      name: "SEO Service in Qatar",
      serviceType: "Search Engine Optimization",
      provider: { "@id": "https://diglip7.com/#organization" },
      areaServed: { "@type": "Country", name: "Qatar" },
      url: "https://diglip7.com/qatar/seo-services/",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": "https://diglip7.com/qatar/seo-services/#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://diglip7.com/" },
        { "@type": "ListItem", position: 2, name: "Qatar", item: "https://diglip7.com/qatar/" },
        { "@type": "ListItem", position: 3, name: "SEO Services", item: "https://diglip7.com/qatar/seo-services/" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://diglip7.com/#organization",
      name: "DigLip7",
      url: "https://diglip7.com/",
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://diglip7.com/#website",
      url: "https://diglip7.com/",
      name: "DigLip7",
      publisher: { "@id": "https://diglip7.com/#organization" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://diglip7.com/qatar/seo-services/#faq",
      mainEntity: faqs.map((faq) => ({
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
        title="SEO Service in Qatar | Professional SEO Services | DigLip7"
        description="Grow your organic search visibility with SEO services in Qatar from DigLip7. Get technical SEO, content, local SEO and search strategy tailored to your business."
        canonical={pageUrl}
        ogType="website"
        ogTitle="SEO Service in Qatar | DigLip7"
        ogDescription="Practical SEO services in Qatar focused on technical optimization, content, search intent, local visibility and sustainable organic growth."
        ogImage="https://diglip7.com/images/seo-service-qatar.jpg"
        twitterCard="summary_large_image"
        robots="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        keywords="SEO Service in Qatar, SEO Services in Qatar, Professional SEO Services Qatar, SEO Company in Qatar, SEO Agency Doha, Technical SEO Qatar, Local SEO Doha, E-commerce SEO Qatar, Enterprise SEO Qatar, Arabic SEO Qatar, DigLip7"
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
          <div className="w-full lg:w-[58%] text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              <span className="text-gray-900">SEO Service in Qatar </span>
              <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                Focused on the Searches That Matter to Your Business
              </span>
            </h1>

            {/* Direct Question & Answer Box */}
            <div className="bg-white/90 backdrop-blur-sm border border-teal-100 p-5 sm:p-6 rounded-2xl mb-5 shadow-sm text-left">
              <h2 className="text-lg sm:text-xl font-bold text-teal-800 mb-2">
                What is an SEO service in Qatar?
              </h2>
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                An SEO service in Qatar improves how a website is built, written and connected, so search engines can understand it and the right customers can find it. It covers technical structure, content, search relevance, user experience, internal linking and authority, all tuned to how people in Qatar actually search for your products or services.
              </p>
            </div>

            <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl mx-auto lg:mx-0">
              <p>
                Most businesses come to SEO with a simple wish: to be found by people who are ready to listen. The catch is that "found" means very different things depending on who you are. A Doha clinic wants the patient searching nearby. An online retailer wants the shopper comparing products. A B2B firm wants the buyer researching a specialist supplier.
              </p>
              <p>
                That is why <span className="font-semibold text-blue-700">DigLip7</span> begins with questions rather than tactics. Who is your audience? What do they type, and in which language? Where are they? How does your business sell? Who else is competing for the same searches, and what does your site already earn? Your answers set the direction, and the rest of the plan follows from them.
              </p>
              <p>
                We won't promise rankings, traffic, leads or revenue, because too much of search sits outside anyone's control. What you can expect is a clear method, honest priorities and reporting written in plain language.
              </p>
              <p>
                On language, we don't assume. Some Qatar businesses are found mainly through English searches, some through Arabic, some through both. We look at your real audience and decide from there.
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
                href="https://wa.me/919650608788?text=Hello%20DigLip7%20Team%2C%20I%20would%20like%20to%20request%20an%20SEO%20Audit%20for%20my%20business%20in%20Qatar."
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
            className="w-full lg:w-[42%] flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card3D className="w-full max-w-md lg:max-w-none">
              <SEOImageSlot
                src={heroImgSrc}
                filename="seo-services-uae-diglip7.webp"
                alt="Diagram showing a website's technical base, content, local presence and authority feeding one SEO plan"
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

      {/* Section 1: What Is an SEO Service in Qatar? (Solid Teal Cards) */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-8 sm:mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-700 mb-4 sm:mb-6">
                What Is an SEO Service in Qatar?
              </h2>
            </FloatingElement>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
              Put simply, SEO is the craft of matching what people search for with the pages that answer it. The work spans several disciplines:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto mb-10">
            {coreDisciplines.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <Card3D className="h-full">
                  <div className="bg-gradient-to-br from-teal-600 to-teal-900 p-5 sm:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                    <FloatingElement delay={index * 0.1}>
                      <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-full mb-4 mx-auto">
                        <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </div>
                    </FloatingElement>

                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 text-center">
                      {item.title}:
                    </h3>
                    <p className="text-white/90 text-xs sm:text-sm leading-relaxed text-center flex-grow">
                      {item.desc}
                    </p>
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto space-y-4 bg-gradient-to-r from-teal-50 to-[#c89d5a]/10 border-l-4 border-teal-600 p-6 sm:p-8 rounded-2xl shadow-xs text-sm sm:text-base leading-relaxed text-gray-800">
            <p className="font-medium text-teal-950">
              The common misconception is that SEO means adding keywords to a page. It doesn't. A page that repeats a phrase awkwardly fails readers first and rarely impresses search engines either.
            </p>
            <p>
              Four quick pictures show why plans differ. A dental clinic in Doha wants to be found for treatments and for nearby searches, so service pages and local signals lead. A retailer delivering across Qatar lives on tidy category and product pages. A B2B engineering supplier may only need a handful of precise service and industry pages, aimed at buyers who search very specifically. A property agency needs area guides, listing pages and informational content that buyers read while still deciding. The discipline is shared; the plan never is.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Why Businesses in Qatar Need SEO */}
      <section className="w-full bg-gradient-to-br from-gray-50 via-teal-50/20 to-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-10 sm:mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-700 mb-4 sm:mb-6">
                Why Businesses in Qatar Need{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  SEO
                </span>
              </h2>
            </FloatingElement>
          </motion.div>

          {/* Expanded Width Container (max-w-7xl) with Light Green Accent Cards */}
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Top Lead Card with Light Green / Emerald accent */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-emerald-50/80 via-teal-50/40 to-white p-6 sm:p-8 rounded-2xl border-l-4 border-emerald-500 border border-emerald-100/80 shadow-xs"
            >
              <p className="text-gray-800 text-base sm:text-lg font-medium leading-relaxed">
                People use search to learn, compare and decide, whether they are hunting for a table for Friday lunch or shortlisting a supplier for a project. The value of SEO for your business depends on which of those searches you can serve.
              </p>
            </motion.div>

            {/* Middle 2-Column Responsive Layout for Cases & Search Intent */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 mb-4">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Practical Business Cases
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Consider a few cases. A restaurant benefits from discovery searches tied to an area or cuisine. A law firm may need pages for specific legal services, plus explanatory articles for people who don't yet know whether they need a lawyer. An online store depends on product and category searches. A B2B company might target the specialised vocabulary that procurement teams and engineers use. A hotel needs visibility around location, room types and services.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-700 border border-teal-200 mb-4">
                    <span className="w-2 h-2 rounded-full bg-teal-600"></span>
                    Search Typologies & Intent
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Underneath those examples sit different kinds of searches: local ones, Doha or other place-based ones, Qatar-wide ones, product and service ones, B2B and industry ones, and the informational, commercial and transactional ones that appear within each. How people behave depends on the sector, the business model, who the customer is, where they are, which language they use, what they're buying and how far along their decision they've come.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Bottom Synergy Card with Light Green / Teal Gradient */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-emerald-50/60 via-white to-teal-50/40 p-6 sm:p-8 rounded-2xl border-l-4 border-emerald-400 border border-emerald-100/70 shadow-xs"
            >
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Local and Qatar-wide SEO can support each other when your business truly serves both. A company with a Doha showroom and delivery nationwide, for example, can run a broad service strategy while still keeping helpful local content. We avoid quoting market statistics, since they age quickly and rarely describe your particular customers. Your own Search Console data will say more.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: SEO Services We Provide in Qatar */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto space-y-20">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-700 mb-4 sm:mb-6">
                SEO Services We Provide in Qatar
              </h2>
            </FloatingElement>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed">
              Few businesses need everything on day one. A big part of our role is sequencing: what to do first, what to do later and what to skip.
            </p>
          </motion.div>

          {/* Subsection: SEO Audit Services */}
          <div className="flex flex-col md:flex-row items-stretch gap-10 lg:gap-14">
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <Card3D className="w-full h-full flex flex-col justify-center">
                <SEOImageSlot
                  src={auditImgSrc}
                  filename="local-seo-audit-dubai.webp"
                  alt="Audit report highlighting crawl errors, indexing coverage and page speed results"
                  width={800}
                  height={600}
                  aspect="h-full min-h-[440px] lg:min-h-[520px] w-full"
                  className="h-full shadow-2xl"
                />
              </Card3D>
            </div>

            <div className="flex-1 text-center md:text-left flex flex-col justify-center">
              <FloatingElement>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-teal-700 leading-tight mb-4">
                  SEO Audit Services
                </h3>
              </FloatingElement>
              <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base">
                A useful audit ranks problems by importance. A long checklist with no context helps nobody. We examine:
              </p>
              <ul className="space-y-2.5 mb-4 text-left text-xs sm:text-sm text-gray-700">
                {auditChecks.map((item) => (
                  <li key={item.title} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-gray-900">{item.title}:</strong> {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 text-xs sm:text-sm">
                What you receive is a prioritised plan: urgent fixes, sensible improvements and things not worth your time. Our{" "}
                <Link to="/digital-market/seoservices" className="text-teal-700 font-semibold underline">
                  global SEO services page
                </Link>{" "}
                shows where audits sit in the bigger picture.
              </p>
            </div>
          </div>

          {/* Subsection: Keyword Research and Search Intent */}
          <div className="flex flex-col md:flex-row-reverse items-stretch gap-10 lg:gap-14">
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <Card3D className="w-full h-full flex flex-col justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full p-4 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm">
                  {intentGroups.map((group) => (
                    <div key={group.type} className="p-4 bg-white rounded-xl shadow-xs border border-gray-100 flex flex-col justify-between">
                      <div>
                        <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center mb-3">
                          <group.icon className="w-5 h-5" />
                        </div>
                        <h4 className="font-bold text-gray-900 text-sm mb-1">{group.type}</h4>
                        <p className="text-gray-600 text-xs">{group.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card3D>
            </div>

            <div className="flex-1 text-center md:text-left flex flex-col justify-center">
              <FloatingElement>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-teal-700 leading-tight mb-4">
                  Keyword Research and Search Intent
                </h3>
              </FloatingElement>
              <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base">
                Keyword research reveals how customers describe what you sell, which is often different from how you describe it. We look at search demand (only where the numbers are dependable, which for smaller Qatari niches they often aren't), intent, commercial value, competition, location, language, customer journey, current visibility and your own priorities.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Each intent calls for a different kind of page. Where Arabic and English searches both apply, we assess them independently instead of presuming one language outranks the other in value.
              </p>
            </div>
          </div>

          {/* Subsection: On-Page SEO & Technical SEO Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card3D className="h-full">
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 h-full flex flex-col">
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-teal-100 to-[#c89d5a]/20 rounded-full mb-4">
                  <FileText className="w-7 h-7 text-teal-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">On-Page SEO</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  On-page SEO is about clarity. It covers title tags and meta descriptions, a logical H1–H3 outline, content that fits the search, internal links, tidy URLs, well-prepared images, contextual relevance, the entities and topics a page should naturally cover, and a clear call to action. Our rule of thumb: if search engines vanished tomorrow, would the page still serve a visitor well?
                </p>
              </div>
            </Card3D>

            <Card3D className="h-full">
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 h-full flex flex-col">
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-teal-100 to-[#c89d5a]/20 rounded-full mb-4">
                  <Settings className="w-7 h-7 text-teal-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Technical SEO Services</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  This area includes crawling, indexing, canonical tags, XML sitemaps, robots.txt, redirects, JavaScript rendering, structured data, mobile usability, Core Web Vitals, duplicate URLs, URL architecture and indexation on very large sites.
                </p>
                <p className="text-xs font-semibold text-teal-900 mb-2">Technical care matters most when something changes:</p>
                <ul className="space-y-1 text-xs text-gray-600">
                  {technicalCarePoints.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card3D>
          </div>

          {/* Subsection: Content SEO */}
          <div className="flex flex-col md:flex-row items-stretch gap-10 lg:gap-14">
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <Card3D className="w-full h-full flex flex-col justify-center">
                <SEOImageSlot
                  src={contentImgSrc}
                  filename="content-seo-planning-dubai.webp"
                  alt="Content plan connecting a core service page to supporting guides and FAQ pages"
                  width={800}
                  height={600}
                  aspect="h-full min-h-[420px] lg:min-h-[500px] w-full"
                  className="h-full shadow-2xl"
                />
              </Card3D>
            </div>

            <div className="flex-1 text-center md:text-left flex flex-col justify-center">
              <FloatingElement>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-teal-700 leading-tight mb-4">
                  Content SEO
                </h3>
              </FloatingElement>
              <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base">
                Publishing more pages is not the same as being more useful. We build content around genuine search needs: service pages, product and category pages, location pages, industry pages, blog posts, guides, comparison pages and FAQs. Topic clusters tie them together, and older pages are refreshed when facts or intent change.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Good content is accurate, useful, original, relevant, human-reviewed and pitched at the right audience. We don't advise publishing bulk generic AI text. An editor's review is where mistakes, clumsy phrasing and empty ideas get caught. Our{" "}
                <Link to="/digital-market/content-marketing" className="text-teal-700 font-semibold underline">
                  content marketing service
                </Link>{" "}
                goes further on this.
              </p>
            </div>
          </div>

          {/* Subsection: Local SEO in Qatar */}
          <div className="flex flex-col md:flex-row-reverse items-stretch gap-10 lg:gap-14">
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <Card3D className="w-full h-full flex flex-col justify-center">
                <SEOImageSlot
                  src={localMapsImgSrc}
                  filename="google-maps-seo-dubai.webp"
                  alt="Local business listing on a map with review rating, address and contact button"
                  width={800}
                  height={600}
                  aspect="h-full min-h-[440px] lg:min-h-[520px] w-full"
                  className="h-full shadow-2xl"
                />
              </Card3D>
            </div>

            <div className="flex-1 text-center md:text-left flex flex-col justify-center">
              <FloatingElement>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-teal-700 leading-tight mb-4">
                  Local SEO in Qatar
                </h3>
              </FloatingElement>
              <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base">
                When customers come from specific places, local SEO usually includes:
              </p>
              <ul className="space-y-2 mb-4 text-left text-xs sm:text-sm text-gray-700">
                {localSeoItems.map((item) => (
                  <li key={item.title} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-gray-900">{item.title}:</strong> {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-2">
                Doha makes a good example. A clinic there may need a strong Business Profile, one solid page for its location and content that explains its services. It does not need dozens of pages that differ only by area name.
              </p>
              <p className="text-gray-600 text-xs sm:text-sm">
                We suggest creating a location page only when three things coexist: a real business presence, relevant search demand and genuinely useful local information. If any of the three is missing, the page usually ends up thin. And since distance and prominence heavily influence Maps, we make no promises about specific positions.
              </p>
            </div>
          </div>

          {/* Subsection: E-commerce SEO & Enterprise SEO */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card3D className="h-full">
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 h-full flex flex-col">
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-teal-100 to-[#c89d5a]/20 rounded-full mb-4">
                  <ShoppingBag className="w-7 h-7 text-teal-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">E-commerce SEO</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  Search engines need help interpreting a catalogue. We work on product and category pages, product titles and descriptions, product structured data, internal links, image SEO, faceted navigation, indexation rules and duplicate URLs, including platform-specific work on Shopify and WooCommerce.
                </p>
                <p className="text-xs text-gray-600">
                  Scalable architecture is the underlying theme. A structure that copes with 200 products can buckle at 5,000 if filters, variants and sort options produce endless URL combinations.
                </p>
              </div>
            </Card3D>

            <Card3D className="h-full">
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 h-full flex flex-col">
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-teal-100 to-[#c89d5a]/20 rounded-full mb-4">
                  <Building2 className="w-7 h-7 text-teal-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Enterprise SEO</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  Larger organisations meet larger obstacles: thousands of URLs, several departments, multiple locations, Arabic and English content, regional site structures, shared templates and slow release cycles. Enterprise SEO is largely about control: managing indexation, fixing problems at template level, designing internal linking systems, planning migrations, setting SEO governance and working inside development workflows.
                </p>
                <p className="text-xs text-gray-600">
                  It also requires cooperation among marketing, content, developers, product teams, management and other stakeholders. Plenty of enterprise SEO problems turn out to be process problems rather than technical ones.
                </p>
              </div>
            </Card3D>
          </div>

          {/* Subsection: Arabic and English SEO in Qatar */}
          <div className="bg-gradient-to-br from-teal-900 to-teal-950 text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <Languages className="w-8 h-8 text-[#c89d5a]" />
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Arabic and English SEO in Qatar
                </h3>
              </div>
              <p className="text-teal-100 text-sm sm:text-base leading-relaxed mb-6">
                Some Qatari businesses serve people who search in Arabic, some in English, and many in both. The right choice depends on your audience. Not every site needs two languages, and adding one without real demand can create upkeep without much benefit. When both languages matter, the work includes:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {multilingualPoints.map((pt, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10">
                    <h4 className="font-bold text-sm text-white mb-1">{pt.title}</h4>
                    <p className="text-xs text-teal-100">{pt.desc}</p>
                  </div>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-teal-100/90 leading-relaxed italic">
                Translating an English page into Arabic doesn't produce an Arabic SEO strategy. Localised content should use natural terminology and mirror how the intended audience really searches. We don't depend on unreviewed machine translation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: SEO Strategy for Different Types of Businesses in Qatar */}
      <section className="w-full bg-gradient-to-br from-gray-50 to-teal-50/30 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-700 mb-4 sm:mb-6">
                SEO Strategy for Different Types of Businesses in Qatar
              </h2>
            </FloatingElement>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed">
              Priorities shift with the customer journey, search intent, location, site size, offering, sales cycle and audience. Some contrasts:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {businessTypeStrategies.map((biz) => {
              const Icon = biz.icon;
              return (
                <Card3D key={biz.type} className="h-full">
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-teal-100 to-[#c89d5a]/20 rounded-full mb-4">
                        <Icon className="w-7 h-7 text-teal-700" />
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg mb-2">{biz.type}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">{biz.desc}</p>
                    </div>
                    {biz.link && (
                      <Link
                        to={biz.link}
                        className="text-xs font-semibold text-teal-700 hover:text-teal-900 inline-flex items-center gap-1 mt-2"
                      >
                        Explore dedicated page <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>
                </Card3D>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 5: How We Build an SEO Strategy (Step Badges) */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-700 mb-4 sm:mb-6">
                How We Build an SEO Strategy
              </h2>
            </FloatingElement>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto mb-12">
            {strategySteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card3D className="h-full">
                    <div className="bg-white shadow-lg rounded-xl p-5 sm:p-6 border border-gray-100 hover:shadow-2xl transition-all duration-500 h-full flex flex-col justify-between">
                      <div>
                        <div className="flex items-start gap-4 mb-3">
                          <motion.div
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-teal-600 to-teal-900 text-white font-bold text-sm flex-shrink-0"
                            whileHover={{ scale: 1.1, rotate: 360 }}
                            transition={{ duration: 0.3 }}
                          >
                            {index + 1}
                          </motion.div>
                          <div className="flex-1">
                            <h3 className="text-base font-semibold text-gray-900 mb-1">
                              {step.title}
                            </h3>
                            <Icon className="w-4 h-4 text-teal-600 mb-2" />
                          </div>
                        </div>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </Card3D>
                </motion.div>
              );
            })}
          </div>

          {/* Workflow Graphic (Image 5) */}
          <div className="max-w-4xl mx-auto">
            <Card3D className="w-full">
              <SEOImageSlot
                src={workflowImgSrc}
                filename="seo-strategy-uae.webp"
                alt="Nine-stage SEO workflow running from audit through measurement and refinement"
                width={800}
                height={450}
                aspect="aspect-[16/9]"
                className="shadow-xl"
              />
            </Card3D>
          </div>
        </div>
      </section>

      {/* Section 6: SEO for Local vs National Businesses in Qatar */}
      <section className="w-full bg-gradient-to-br from-gray-50 to-teal-50/30 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center max-w-4xl mx-auto mb-10"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-700 mb-3">
                SEO for Local vs National Businesses in Qatar
              </h2>
            </FloatingElement>
          </motion.div>

          <div className="overflow-x-auto mb-6 max-w-5xl mx-auto">
            <table className="w-full bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden text-left text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-teal-700 to-teal-900 text-white">
                  <th className="py-4 px-6 font-bold text-sm sm:text-base w-1/2">Local SEO</th>
                  <th className="py-4 px-6 font-bold text-sm sm:text-base w-1/2">Qatar-Wide SEO</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {localVsNational.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                    <td className="py-4 px-6 font-semibold text-teal-900">{row.local}</td>
                    <td className="py-4 px-6 text-gray-700">{row.national}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-gray-700 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Many businesses need both. A firm operating throughout Qatar can run a national service strategy while keeping helpful pages for places where it has real offices, branches or meaningful service coverage, be that Doha, Lusail, Al Rayyan, Al Wakrah or elsewhere. Pages for places the business doesn't actually serve don't belong on the site.
          </p>
        </div>
      </section>

      {/* Section 7: How We Measure SEO Performance */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-10 lg:gap-14">
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <Card3D className="w-full h-full flex flex-col justify-center">
              <SEOImageSlot
                src={reportingImgSrc}
                filename="seo-reporting-uae.webp"
                alt="Reporting view of organic clicks, impressions and conversions across several months"
                width={800}
                height={600}
                aspect="h-full min-h-[440px] lg:min-h-[520px] w-full"
                className="h-full shadow-2xl"
              />
            </Card3D>
          </div>

          <div className="flex-1 text-center md:text-left flex flex-col justify-center">
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-700 mb-6">
                How We Measure SEO Performance
              </h2>
            </FloatingElement>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              A ranking by itself is a thin measure. A page can sit high for a phrase that brings visitors who never act. We follow a broader set of signals:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6 text-left">
              {performanceMetrics.map((metric, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-gray-700">{metric}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-600 text-xs sm:text-sm italic">
              The point is to learn whether your organic visibility is relevant and whether visitors do something worthwhile. We credit leads, sales or revenue to organic search only when analytics and conversion tracking are set up correctly.
            </p>
          </div>
        </div>
      </section>

      {/* Section 8: How Long Does SEO Take in Qatar? */}
      <section className="w-full bg-gradient-to-br from-gray-50 to-teal-50/30 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <FloatingElement>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-700 mb-6 text-center">
              How Long Does SEO Take in Qatar?
            </h2>
          </FloatingElement>
          <div className="space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base text-center max-w-3xl mx-auto mb-6">
            <p>
              There is no fixed answer, and a firm number of days should raise suspicion. A brand-new website and an established one begin from very different places. Repairing an indexing fault might show effects within weeks, while winning a competitive term can take far longer.
            </p>
            <p>
              The timeline depends on website age, existing authority, competition, industry, target keywords, search intent, technical condition, content quality, site size, how quickly changes get implemented, search demand, existing backlinks, migration history and language strategy.
            </p>
          </div>
          <div className="p-4 bg-gradient-to-r from-teal-50 to-[#c89d5a]/10 rounded-2xl border border-teal-200 text-center">
            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed italic max-w-3xl mx-auto">
              We don't promise page-one placement within a set period, or any traffic, leads, revenue or Maps rankings. SEO is a cycle of testing, optimization, measurement and improvement. Once the audit is done, we can give you a more grounded expectation for your situation.
            </p>
          </div>
        </div>
      </section>

      {/* Section 9: SEO Service in Qatar vs Google Ads */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-700 mb-3">
                SEO Service in Qatar vs Google Ads
              </h2>
            </FloatingElement>
          </div>

          <div className="overflow-x-auto mb-6 max-w-5xl mx-auto">
            <table className="w-full bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden text-left text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-teal-700 to-teal-900 text-white">
                  <th className="py-4 px-6 font-bold text-sm sm:text-base w-1/2">SEO</th>
                  <th className="py-4 px-6 font-bold text-sm sm:text-base w-1/2">Google Ads</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {seoVsAds.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                    <td className="py-4 px-6 font-semibold text-teal-900">{row.seo}</td>
                    <td className="py-4 px-6 text-gray-700">{row.ads}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-gray-700 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Neither channel wins in every case. Businesses run SEO, Google Ads or both, depending on goals, budget, competition, search demand, customer journey and time horizon. Someone who needs visibility fast may begin with ads while SEO develops, and someone with tight margins may lean on organic search. Our{" "}
            <Link to="/digital-market/PPC-Advertising" className="text-teal-800 font-semibold underline hover:text-teal-900">
              PPC advertising page
            </Link>{" "}
            covers the paid side.
          </p>
        </div>
      </section>

      {/* Section 10: Common SEO Mistakes Qatar Businesses Make */}
      <section className="w-full bg-gradient-to-br from-gray-50 to-teal-50/30 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-700 mb-3">
                Common SEO Mistakes Qatar Businesses Make
              </h2>
            </FloatingElement>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 mb-6">
            {commonMistakes.map((mistake, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl border border-red-100 bg-white shadow-xs flex items-start gap-2.5 text-gray-800 text-xs sm:text-sm font-medium hover:shadow-md hover:border-red-200 transition-all duration-300"
              >
                <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0 text-red-600 font-bold text-xs mt-0.5">
                  ✕
                </div>
                <span>{mistake}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 11: Why Choose DigLip7 for SEO Services in Qatar? */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-700 mb-4 sm:mb-6">
                Why Choose DigLip7 for SEO Services in Qatar?
              </h2>
            </FloatingElement>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed">
              We'd rather describe how we work than make claims we can't prove.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto mb-8">
            {whyChooseDigLip7.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card3D className="h-full">
                  <div className="bg-white shadow-lg rounded-xl p-5 sm:p-6 border border-gray-100 hover:shadow-2xl transition-all duration-500 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-start gap-4 mb-3">
                        <motion.div
                          className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-teal-600 to-teal-900 text-white font-bold text-sm sm:text-base flex-shrink-0"
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.3 }}
                        >
                          {item.number}
                        </motion.div>
                        <div className="flex-1">
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                            {item.title}:
                          </h3>
                          <div className="flex items-center gap-2 mb-2">
                            <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600" />
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-gray-600 text-xs sm:text-sm">
            If you work across regions, see our{" "}
            <Link to="/uae/seo-services" className="text-teal-700 font-semibold underline">
              UAE SEO services
            </Link>
            ,{" "}
            <Link to="/uae/dubai/seo-services" className="text-teal-700 font-semibold underline">
              Dubai SEO services
            </Link>{" "}
            and{" "}
            <Link to="/india/seo-services" className="text-teal-700 font-semibold underline">
              India SEO services
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Section 12: Frequently Asked Questions */}
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
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-700 mb-4">
                Frequently Asked Questions
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

      {/* Section 13: Bottom CTA Banner */}
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
              Build a Search Strategy Around Your Business Goals
            </h2>
          </FloatingElement>

          <p className="text-teal-50 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
            Every website begins somewhere different. If you'd like to talk through your site, target market, services, languages, current search visibility and growth goals, DigLip7 can help you see where SEO work may matter most.
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
              href="https://wa.me/919650608788?text=Hello%20DigLip7%20Team%2C%20I%20would%20like%20to%20request%20an%20SEO%20Audit%20for%20my%20business%20in%20Qatar."
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

export default QatarSEOServices;
