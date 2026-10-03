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
  Sparkles,
  Users,
  Award,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

// Image Paths with reliable fallbacks
const heroImgSrc = "/src/images/seo-services-india-diglip7.webp";
const auditImgSrc = "/src/images/local-seo-audit-india.webp";
const intentImgSrc = "/src/images/local-keyword-research-india.webp";
const contentImgSrc = "/src/images/content-seo-planning-india.webp";
const localMapsImgSrc = "/src/images/google-maps-seo-india.webp";
const workflowImgSrc = "/src/images/seo-strategy-india.webp";
const reportingImgSrc = "/src/images/seo-reporting-india.webp";

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
  { label: "India", href: "/india/seo-services" },
  { label: "SEO Services", href: "/india/seo-services" },
];

const coreAreas = [
  {
    title: "Technical foundations",
    desc: "can search engines reach, read and index your pages without trouble?",
    icon: Settings,
  },
  {
    title: "Keyword research and intent",
    desc: "which phrases do your customers really use, and what are they hoping to find?",
    icon: Target,
  },
  {
    title: "On-page work",
    desc: "titles, headings, copy, images and URLs on each page.",
    icon: FileText,
  },
  {
    title: "Internal linking and site architecture",
    desc: "how pages connect and which ones get emphasis.",
    icon: Network,
  },
  {
    title: "Local SEO and e-commerce SEO",
    desc: "specialised work for shops, clinics, branches and online stores.",
    icon: MapPin,
  },
  {
    title: "Structured data",
    desc: "markup that labels products, FAQs, businesses and articles for search engines.",
    icon: Layers,
  },
  {
    title: "Speed and Core Web Vitals",
    desc: "how the site behaves on real phones and real connections.",
    icon: Zap,
  },
  {
    title: "Authority",
    desc: "credible mentions and relevant backlinks from other sites.",
    icon: ShieldCheck,
  },
  {
    title: "Measurement",
    desc: "reading Search Console and analytics to see what is helping.",
    icon: BarChart3,
  },
];

const auditChecks = [
  { title: "Technical issues", desc: "server errors, broken links, redirect chains and mobile faults." },
  { title: "Indexing and crawlability", desc: "which pages Google can reach and which it has indexed or skipped." },
  { title: "Page structure and metadata", desc: "titles, descriptions and headings." },
  { title: "Internal links", desc: "whether key pages get support or sit buried." },
  { title: "Duplicate content and canonicals", desc: "competing versions of the same page." },
  { title: "Sitemap and robots directives", desc: "whether they help crawlers or block them by accident." },
  { title: "Core Web Vitals", desc: "performance from real-user data where available." },
  { title: "Search Console", desc: "queries, impressions, coverage and indexing reports." },
];

const keywordWeighFactors = [
  "Search volume, when the data is trustworthy (for small local terms it often isn't)",
  "Search intent",
  "Commercial relevance",
  "Competition",
  "Location",
  "Where the searcher is in their decision",
  "What you already rank for",
  "What the business actually wants to sell",
];

const localSeoPoints = [
  { title: "Google Business Profile", desc: "categories, services, photos, hours and updates" },
  { title: "Local landing pages", desc: "that say something genuinely useful about each area" },
  { title: "Location-specific content", desc: "grounded in real local knowledge" },
  { title: "Local citations", desc: "on relevant directories" },
  { title: "Reviews", desc: "how to ask for them ethically and reply to them well" },
  { title: "NAP consistency", desc: "name, address and phone identical everywhere" },
  { title: "Google Maps visibility", desc: "which depends on relevance, distance and prominence" },
  { title: "Local search intent", desc: "such as \"near me\" and neighbourhood queries" },
];

const businessTypeStrategies = [
  {
    type: "Local businesses",
    desc: "rely on Business Profile strength, reviews and clear service-area pages.",
    icon: MapPin,
  },
  {
    type: "Startups",
    desc: "usually win by focusing on a small set of high-intent searches first.",
    icon: Target,
  },
  {
    type: "Small businesses",
    desc: "gain most from fixing basics and owning a narrow local or niche space.",
    icon: Building2,
  },
  {
    type: "E-commerce stores",
    desc: "live or die on category structure, product data and crawl control.",
    icon: ShoppingBag,
    link: "/uae/dubai/ecommerce-seo",
  },
  {
    type: "Healthcare businesses",
    desc: "need careful, accurate content and visible trust signals. Our healthcare SEO approach shows how we handle that.",
    icon: Stethoscope,
    link: "/uae/dubai/healthcare-seo",
  },
  {
    type: "Real estate companies",
    desc: "compete on locality, project names and buyer intent; see real estate SEO.",
    icon: Building2,
    link: "/uae/dubai/real-estate-seo",
  },
  {
    type: "SaaS companies",
    desc: "do well with problem-led content, use-case pages and comparison pages.",
    icon: Cpu,
  },
  {
    type: "B2B companies",
    desc: "chase fewer searches, but each has a longer, more considered buyer.",
    icon: FileText,
  },
  {
    type: "Professional services",
    desc: "such as law, accounting and consulting depend on credibility and clear expertise.",
    icon: Scale,
  },
  {
    type: "Educational businesses",
    desc: "often need course, admission and location content timed to seasonal demand.",
    icon: GraduationCap,
  },
  {
    type: "Hospitality businesses",
    desc: "blend local searches, travel research and review signals.",
    icon: Hotel,
    link: "/uae/dubai/hotel-seo",
  },
];

const strategySteps = [
  {
    step: "1",
    title: "Website and SEO audit",
    desc: "We look at the technical and content state of the site as it is today.",
    icon: Search,
  },
  {
    step: "2",
    title: "Keyword and competitor research",
    desc: "We find the searches worth pursuing and study who currently appears for them and why.",
    icon: Target,
  },
  {
    step: "3",
    title: "Search intent mapping",
    desc: "Every keyword group gets assigned to the right kind of page, so service searches go to service pages and questions go to guides.",
    icon: Network,
  },
  {
    step: "4",
    title: "Website architecture",
    desc: "We organise how main service pages, supporting service pages, location pages, industry pages and blog posts relate to each other, so the structure makes sense to visitors and crawlers alike.",
    icon: FolderTree,
  },
  {
    step: "5",
    title: "On-page and technical optimization",
    desc: "Metadata, headings, speed, indexing and internal links get improved on the site itself.",
    icon: Settings,
  },
  {
    step: "6",
    title: "Content development",
    desc: "New pages and rewrites are based on real demand and real user needs.",
    icon: FileText,
  },
  {
    step: "7",
    title: "Authority and off-page work",
    desc: "We pursue relevant, quality-focused digital PR and link opportunities. There's no fixed backlink count promised, and no low-quality link schemes.",
    icon: ShieldCheck,
  },
  {
    step: "8",
    title: "Measurement and iteration",
    desc: "We read the search data, see what moved and what didn't, and adjust.",
    icon: BarChart3,
  },
];

const localVsNational = [
  {
    local: "City and neighbourhood searches",
    national: "India-wide searches",
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
    local: "Location-based content",
    national: "Large-scale content strategy",
  },
];

const performanceMetrics = [
  "Organic impressions and clicks",
  "Non-brand search visibility",
  "Search queries and average position",
  "Click-through rate",
  "Indexed pages",
  "Organic landing-page traffic",
  "Qualified enquiries, calls and form submissions",
  "E-commerce transactions where tracking is configured",
  "Conversion rate",
  "Technical health and Core Web Vitals",
];

const timelineFactors = [
  "Age and existing authority of the website",
  "Competition and industry",
  "Target keywords and search demand",
  "Technical condition",
  "Content quality and site size",
  "How fast recommended changes get implemented",
  "Existing backlinks",
  "Migration history",
];

const seoVsAds = [
  {
    seo: "Organic search visibility",
    ads: "Paid search visibility",
  },
  {
    seo: "Requires ongoing optimization",
    ads: "Requires advertising budget",
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
  "Chasing keywords without checking intent, so the page answers a different question.",
  "Cloning city pages with only the place name swapped.",
  "Publishing AI-generated content with no editor.",
  "Keyword stuffing.",
  "Skipping technical SEO.",
  "Weak internal linking.",
  "Thin service pages that say little.",
  "Letting junk URLs get indexed, such as filters, tags and test pages.",
  "Overlooking mobile experience.",
  "Buying cheap backlinks.",
  "Producing content with no plan behind it.",
  "Watching only rankings.",
  "Leaving conversion tracking unset.",
  "Never updating old content.",
  "Making a separate page for every keyword variation, which splits relevance across near-identical pages.",
];

const whyChooseDigLip7 = [
  {
    number: "1",
    title: "Intent-led strategy",
    desc: "each page has a defined job.",
    icon: Target,
  },
  {
    number: "2",
    title: "Technical SEO first",
    desc: "foundations before volume.",
    icon: Settings,
  },
  {
    number: "3",
    title: "Content and on-page optimization",
    desc: "written for readers, then refined for search.",
    icon: FileText,
  },
  {
    number: "4",
    title: "Local and e-commerce SEO",
    desc: "adapted to the business model.",
    icon: MapPin,
  },
  {
    number: "5",
    title: "Industry-aware planning",
    desc: "healthcare, real estate, SaaS and others need different handling.",
    icon: Building2,
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
    desc: "nothing goes live as raw machine output.",
    icon: ShieldCheck,
  },
  {
    number: "8",
    title: "Transparent recommendations",
    desc: "we explain what we suggest, why, and what we'd skip.",
    icon: CheckCircle,
  },
  {
    number: "9",
    title: "Continuous optimization",
    desc: "the plan changes as the data comes in.",
    icon: Zap,
  },
];

const faqs = [
  {
    q: "What is an SEO service in India?",
    a: "It's a set of ongoing improvements to a website's technical health, content, relevance and authority, so people in India can find the business through organic search.",
  },
  {
    q: "How much do SEO services in India cost?",
    a: "It depends on site size, competition, the scope of work and whether local, e-commerce or enterprise SEO is involved. An audit first lets pricing reflect real work rather than a generic package.",
  },
  {
    q: "What does an SEO company in India do?",
    a: "It audits your site, researches keywords, fixes technical problems, improves pages, plans content, supports local presence, builds authority and reports on results.",
  },
  {
    q: "How long does SEO take to show results?",
    a: "There's no fixed timeline. Some technical fixes show up in weeks; competitive rankings can take months. Site history, competition and speed of implementation all matter.",
  },
  {
    q: "Can SEO help a small business in India?",
    a: "Often, yes, especially by focusing on a narrow set of local or niche searches and getting the basics right. Results aren't guaranteed.",
  },
  {
    q: "What is the difference between local SEO and national SEO?",
    a: "Local SEO targets city or neighbourhood searches through Business Profile, reviews and local pages. National SEO targets India-wide searches through category authority and broader content.",
  },
  {
    q: "Does SEO work for e-commerce websites in India?",
    a: "It can. Category structure, product data, page speed and index control usually matter most, and outcomes depend on competition and catalogue quality.",
  },
  {
    q: "What does a technical SEO service include?",
    a: "Crawl and index checks, canonicals, sitemaps, robots.txt, redirects, JavaScript rendering, structured data, mobile usability and Core Web Vitals.",
  },
  {
    q: "How do you choose keywords for an Indian business?",
    a: "We weigh intent, commercial relevance, competition, location and current rankings, then map each group to the right page instead of chasing volume alone.",
  },
  {
    q: "Can SEO and Google Ads be used together?",
    a: "Yes. Ads can give early visibility while SEO builds, and ad data can show which searches convert.",
  },
  {
    q: "How do you measure SEO performance?",
    a: "Through impressions, clicks, non-brand visibility, CTR, average position, indexed pages, conversions and technical health, not rankings alone.",
  },
  {
    q: "Should a business create separate city pages?",
    a: "Only where you truly serve those cities and can add distinct, useful content. Near-duplicate city pages add little.",
  },
  {
    q: "Is SEO still important for businesses in India?",
    a: "For many businesses, organic search remains a main way customers research and pick providers. How much it matters for you depends on your market and how your customers search.",
  },
  {
    q: "What should I look for when choosing an SEO agency in India?",
    a: "Clear methods, honest expectations, no ranking guarantees, transparent reporting, verifiable claims and a willingness to explain recommendations.",
  },
];

// ---------------------------------------------------------------------------
// Main Component
// ---------------------------------------------------------------------------

function IndiaSEOServices() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const pageUrl = "https://diglip7.com/india/seo-services/";

  const jsonLdGraph = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://diglip7.com/india/seo-services/#webpage",
      url: "https://diglip7.com/india/seo-services/",
      name: "SEO Service in India | Professional SEO Services | DigLip7",
      description:
        "Grow your organic search visibility with SEO services in India from DigLip7. Get technical SEO, content, local SEO and search strategy tailored to your business.",
      isPartOf: { "@id": "https://diglip7.com/#website" },
      breadcrumb: { "@id": "https://diglip7.com/india/seo-services/#breadcrumb" },
      inLanguage: "en-IN",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://diglip7.com/india/seo-services/#service",
      name: "SEO Service in India",
      serviceType: "Search Engine Optimization",
      provider: { "@id": "https://diglip7.com/#organization" },
      areaServed: { "@type": "Country", name: "India" },
      url: "https://diglip7.com/india/seo-services/",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": "https://diglip7.com/india/seo-services/#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://diglip7.com/" },
        { "@type": "ListItem", position: 2, name: "India", item: "https://diglip7.com/india/" },
        { "@type": "ListItem", position: 3, name: "SEO Services", item: "https://diglip7.com/india/seo-services/" },
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
      "@id": "https://diglip7.com/india/seo-services/#faq",
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
        title="SEO Service in India | Professional SEO Services | DigLip7"
        description="Grow your organic search visibility with SEO services in India from DigLip7. Get technical SEO, content, local SEO and search strategy tailored to your business."
        canonical={pageUrl}
        ogType="website"
        ogTitle="SEO Service in India | DigLip7"
        ogDescription="Practical SEO services in India focused on technical optimization, content, search intent, local visibility and sustainable organic growth."
        ogImage="https://diglip7.com/images/seo-service-india.jpg"
        twitterCard="summary_large_image"
        robots="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        keywords="SEO Service in India, SEO Services in India, Professional SEO Services India, SEO Company in India, SEO Agency India, Technical SEO India, Local SEO India, E-commerce SEO India, Enterprise SEO India, DigLip7"
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
              <span className="text-gray-900">SEO Service in India </span>
              <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                Built Around How Your Customers Search
              </span>
            </h1>

            {/* Direct Question & Answer Box */}
            <div className="bg-white/90 backdrop-blur-sm border border-teal-100 p-5 sm:p-6 rounded-2xl mb-5 shadow-sm text-left">
              <h2 className="text-lg sm:text-xl font-bold text-teal-800 mb-2">
                What is an SEO service in India?
              </h2>
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                An SEO service in India is ongoing work that helps a website earn visibility in organic search results. It covers the site's technical setup, page content, keyword targeting, user experience and credibility, so that people who are already searching for what a business offers can find it, trust it and get in touch.
              </p>
            </div>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl mx-auto lg:mx-0">
              Think of it as making your website easier to find and easier to say yes to. At <span className="font-semibold text-blue-700">DigLip7</span>, our SEO services in India begin with a simple question: who is searching, what do they want, and does your site give them a good answer? From there we work out what to fix, what to build and what to leave alone. We won't promise a rank or a traffic number, because search results are shaped by too many things outside anyone's control. What we can promise is clear reasoning, honest priorities and reporting you can actually read.
            </p>

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
                href="https://wa.me/919650608788?text=Hello%20DigLip7%20Team%2C%20I%20would%20like%20to%20request%20an%20SEO%20Audit%20for%20my%20business%20in%20India."
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
                filename="seo-services-india-diglip7.webp"
                alt="Diagram linking website structure, content, local listings and authority as parts of one SEO plan"
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

      {/* Section 1: What Is an SEO Service in India? (Solid Teal Cards matching Advantages Section) */}
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
                What Is an SEO Service in India?
              </h2>
            </FloatingElement>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
              Search engine optimization is the discipline of helping search engines understand a website and helping visitors get what they came for. When you hire an SEO company in India, the work usually spreads across these areas:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto mb-10">
            {coreAreas.map((item, index) => (
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

          <div className="max-w-4xl mx-auto bg-gradient-to-r from-teal-50 to-[#c89d5a]/10 border-l-4 border-teal-600 p-6 rounded-2xl shadow-xs">
            <p className="text-teal-950 text-sm sm:text-base leading-relaxed font-medium">
              One thing worth saying plainly: SEO is not sprinkling a phrase through a page. Pages built around keyword repetition tend to read badly, and readers leave. Good SEO is closer to good editing plus good engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Why Businesses in India Need SEO (Matching Results Section style with 3D cards & checklist) */}
      <section className="w-full bg-gradient-to-br from-gray-50 to-teal-50/30 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-10 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-700 mb-4 sm:mb-6">
                Why Businesses in India Need{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  SEO
                </span>
              </h2>
            </FloatingElement>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed">
              There is no single Indian search market. A dentist in Karol Bagh and an online furniture brand shipping from Jaipur are both "doing SEO", yet almost nothing in their plans overlaps.
            </p>
          </motion.div>

          {/* 3 Business Model Cards matching Solutions style */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto mb-10">
            <Card3D className="h-full">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 h-full flex flex-col">
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-teal-100 to-[#c89d5a]/20 rounded-full mb-4">
                  <MapPin className="w-7 h-7 text-teal-700" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                  Dentist in Karol Bagh
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed flex-grow">
                  The dentist needs to appear when someone nearby searches at 9 pm with a toothache. That means Google Business Profile, reviews, a clear service page and accurate hours.
                </p>
              </div>
            </Card3D>

            <Card3D className="h-full">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 h-full flex flex-col">
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-teal-100 to-[#c89d5a]/20 rounded-full mb-4">
                  <ShoppingBag className="w-7 h-7 text-teal-700" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                  Furniture Brand in Jaipur
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed flex-grow">
                  The furniture brand is fighting for category and product searches across the country, where site structure, product data, page speed and duplicate-URL control matter most.
                </p>
              </div>
            </Card3D>

            <Card3D className="h-full">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 h-full flex flex-col">
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-teal-100 to-[#c89d5a]/20 rounded-full mb-4">
                  <Cpu className="w-7 h-7 text-teal-700" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                  Bengaluru Software Firm
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed flex-grow">
                  A Bengaluru software firm may only care about a few hundred searches, but each one comes from a buyer comparing vendors. A coaching institute sees searches spike around admission season. A hotel gets both local and travel-planning queries.
                </p>
              </div>
            </Card3D>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed bg-gradient-to-r from-emerald-50/60 via-white to-teal-50/40 p-6 sm:p-8 rounded-2xl border-l-4 border-emerald-500 border border-emerald-100/70 shadow-xs"
          >
            <p>
              Language and device habits differ too. Many people search on mobile, some type in Hinglish or regional languages, and intent changes between a city, a state and the whole country. So we start from your customers rather than from a template.
            </p>
            <p>
              We also avoid quoting market statistics here, because they age fast. Your own Search Console data says more about your audience than any headline figure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 3: SEO Services We Provide in India */}
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
                SEO Services We Provide in India
              </h2>
            </FloatingElement>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed">
              Not every business needs every service at once. Part of our job is deciding the order.
            </p>
          </motion.div>

          {/* Subsection: SEO Audit */}
          <div className="flex flex-col md:flex-row items-stretch gap-10 lg:gap-14">
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <Card3D className="w-full h-full flex flex-col justify-center">
                <SEOImageSlot
                  src={auditImgSrc}
                  filename="local-seo-audit-india.webp"
                  alt="Audit dashboard showing crawl errors, indexing status and page speed findings"
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
                  SEO Audit
                </h3>
              </FloatingElement>
              <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base">
                A good audit tells you what is quietly holding the site back. We check:
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
                You should end up with a prioritised list of actions, not a giant document nobody opens. Our{" "}
                <Link to="/digital-market/seoservices" className="text-teal-700 font-semibold underline">
                  global SEO services page
                </Link>{" "}
                describes how audits fit into the wider process.
              </p>
            </div>
          </div>

          {/* Subsection: Keyword Research and Search Intent */}
          <div className="flex flex-col md:flex-row-reverse items-stretch gap-10 lg:gap-14">
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <Card3D className="w-full h-full flex flex-col justify-center">
                <SEOImageSlot
                  src={intentImgSrc}
                  filename="local-keyword-research-india.webp"
                  alt="Table sorting keywords into informational, commercial and transactional page types"
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
                  Keyword Research and Search Intent
                </h3>
              </FloatingElement>
              <p className="text-gray-700 mb-3 leading-relaxed text-sm sm:text-base">
                Big search numbers are tempting, but the right keyword is the one that fits your business. When we shortlist terms, we weigh:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4 text-left text-xs sm:text-sm text-gray-700">
                {keywordWeighFactors.map((factor, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>{factor}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Intent comes in three flavours. Informational searches, like "what is a canonical tag", want an explanation. Commercial searches, like "SEO agency or freelancer", are comparing choices. Transactional searches, like "hire SEO consultant in Pune", are close to acting. Each deserves a different kind of page, and mixing them up is one of the quietest reasons pages underperform.
              </p>
            </div>
          </div>

          {/* Subsection: On-Page SEO & Technical SEO (Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card3D className="h-full">
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 h-full flex flex-col">
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-teal-100 to-[#c89d5a]/20 rounded-full mb-4">
                  <FileText className="w-7 h-7 text-teal-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">On-Page SEO</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  On-page SEO decides how clearly a page explains itself. We work on title tags and meta descriptions that earn the click, a sensible H1–H3 outline, copy that matches what the searcher wanted, internal links with meaningful anchor text, compressed and well-described images, and clean URLs. We also look at entity and contextual relevance, which simply means covering the related people, places, terms and questions a topic naturally involves.
                </p>
              </div>
            </Card3D>

            <Card3D className="h-full">
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 h-full flex flex-col">
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-teal-100 to-[#c89d5a]/20 rounded-full mb-4">
                  <Settings className="w-7 h-7 text-teal-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Technical SEO</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  This is the plumbing. It covers crawling and indexing, canonical tags, XML sitemaps, robots.txt, redirects, JavaScript rendering (a real concern on React and Next.js sites), structured data, mobile usability, Core Web Vitals, duplicate URLs and website migrations. Migrations deserve special care: a rushed redesign with no redirect plan can erase years of visibility in a week.
                </p>
              </div>
            </Card3D>
          </div>

          {/* Subsection: Content SEO */}
          <div className="flex flex-col md:flex-row items-stretch gap-10 lg:gap-14">
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <Card3D className="w-full h-full flex flex-col justify-center">
                <SEOImageSlot
                  src={contentImgSrc}
                  filename="content-seo-planning-india.webp"
                  alt="Content map connecting a main service page with supporting guides and FAQ pages"
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
                More articles do not equal better SEO. Content should exist because people are searching for it and because it helps the business. We plan service pages, industry pages, location pages, blog posts, guides, comparison content and FAQs, then connect them through topic clusters so each piece supports the others. Older pages get refreshed when facts change or intent shifts.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Our{" "}
                <Link to="/digital-market/content-marketing" className="text-teal-700 font-semibold underline">
                  content marketing service
                </Link>{" "}
                covers the production side, and every piece is reviewed by a human editor before it goes live.
              </p>
            </div>
          </div>

          {/* Subsection: Local SEO in India */}
          <div className="flex flex-col md:flex-row-reverse items-stretch gap-10 lg:gap-14">
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <Card3D className="w-full h-full flex flex-col justify-center">
                <SEOImageSlot
                  src={localMapsImgSrc}
                  filename="google-maps-seo-india.webp"
                  alt="Map listing for a local business showing reviews, address and phone number"
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
                  Local SEO in India
                </h3>
              </FloatingElement>
              <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base">
                When customers come from your city or neighbourhood, local visibility can matter more than national rankings. Our local SEO work in India covers:
              </p>
              <ul className="space-y-2 mb-4 text-left text-xs sm:text-sm text-gray-700">
                {localSeoPoints.map((item) => (
                  <li key={item.title} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-gray-900">{item.title}:</strong> {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 text-xs sm:text-sm">
                We don't promise Maps positions, since distance to the searcher plays a big part. For UAE-based needs, see{" "}
                <Link to="/uae/dubai/local-seo" className="text-teal-700 font-semibold underline">
                  Local SEO in Dubai
                </Link>.
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
                  Online stores create SEO problems that service sites never meet. We look at product and category page quality, faceted navigation that spawns thousands of near-identical URLs, product schema, internal links between categories and products, original product titles and descriptions (not pasted supplier text), image optimization, and rules for which URLs should be indexed. We handle platform-specific work on Shopify and WooCommerce.
                </p>
                <p className="text-xs text-gray-600">
                  For the UAE, see{" "}
                  <Link to="/uae/dubai/ecommerce-seo" className="text-teal-700 font-semibold underline">
                    E-commerce SEO in Dubai
                  </Link>.
                </p>
              </div>
            </Card3D>

            <Card3D className="h-full">
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 h-full flex flex-col">
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-teal-100 to-[#c89d5a]/20 rounded-full mb-4">
                  <Building2 className="w-7 h-7 text-teal-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Enterprise SEO</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Big sites bring big-site problems: thousands of URLs, several teams editing pages, mismatched templates, multi-location or international setups and slow release cycles. Enterprise SEO is mostly about control. That means managing indexation at scale, fixing issues at template level so one change helps many pages, building internal linking systems, planning migrations carefully and agreeing governance rules about who may change titles, URLs and templates.
                </p>
              </div>
            </Card3D>
          </div>
        </div>
      </section>

      {/* Section 4: SEO Strategy for Different Types of Businesses in India */}
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
                SEO Strategy for Different Types of Businesses in India
              </h2>
            </FloatingElement>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed">
              The plan should follow the business model, not the other way round. A few quick illustrations:
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

      {/* Section 5: How We Build an SEO Strategy (Step Badges matching SocialMedia Process Section) */}
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto mb-12">
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
                            {step.step}
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

          {/* Workflow Graphic (Image 6) */}
          <div className="max-w-4xl mx-auto">
            <Card3D className="w-full">
              <SEOImageSlot
                src={workflowImgSrc}
                filename="seo-strategy-india.webp"
                alt="Eight-stage workflow from site audit through measurement and ongoing improvement"
                width={800}
                height={450}
                aspect="aspect-[16/9]"
                className="shadow-xl"
              />
            </Card3D>
          </div>
        </div>
      </section>

      {/* Section 6: SEO for Local vs National Businesses in India */}
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
                SEO for Local vs National Businesses in India
              </h2>
            </FloatingElement>
          </motion.div>

          <div className="overflow-x-auto mb-6 max-w-5xl mx-auto">
            <table className="w-full bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden text-left text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-teal-700 to-teal-900 text-white">
                  <th className="py-4 px-6 font-bold text-sm sm:text-base w-1/2">Local SEO</th>
                  <th className="py-4 px-6 font-bold text-sm sm:text-base w-1/2">National SEO</th>
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
            Plenty of businesses need both. A hospital group might want strong pages for each branch plus national-level content on treatments. A retail brand with a few stores and an online shop faces the same split. The mistake is forcing a single approach onto a business that needs two.
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
                filename="seo-reporting-india.webp"
                alt="Report view of organic clicks, impressions and conversions plotted over several months"
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
              A ranking on its own is a weak measure. A page can sit high for a phrase that never produces an enquiry. So we track a mix of search and business signals:
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
              None of the business numbers mean much without correct tracking, so we verify that calls, forms and purchases are recorded properly before interpreting anything.
            </p>
          </div>
        </div>
      </section>

      {/* Section 8: How Long Does SEO Take in India? */}
      <section className="w-full bg-gradient-to-br from-gray-50 to-teal-50/30 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <FloatingElement>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-700 mb-6 text-center">
              How Long Does SEO Take in India?
            </h2>
          </FloatingElement>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-6 text-center max-w-3xl mx-auto">
            How long does SEO take? It depends, and anyone quoting a fixed number of days for page-one rankings is guessing. Fixing an indexing fault can show effects within weeks. Winning a competitive term can take many months.
          </p>
          <p className="text-gray-800 font-medium text-sm sm:text-base mb-4 text-center">
            What shapes the timeline:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {timelineFactors.map((factor, idx) => (
              <div key={idx} className="flex items-center gap-2 p-3 bg-white rounded-xl border border-gray-200/80 shadow-xs">
                <Check className="w-4 h-4 text-teal-600 shrink-0" />
                <span className="text-gray-800 text-xs sm:text-sm font-medium">{factor}</span>
              </div>
            ))}
          </div>
          <div className="p-4 bg-gradient-to-r from-teal-50 to-[#c89d5a]/10 rounded-2xl border border-teal-200 text-center">
            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed italic max-w-3xl mx-auto">
              After the audit we can give a grounded expectation for your situation. We don't guarantee traffic, leads or revenue.
            </p>
          </div>
        </div>
      </section>

      {/* Section 9: SEO Service in India vs Google Ads */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-700 mb-3">
                SEO Service in India vs Google Ads
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
            Neither is the automatic winner. Some businesses run ads for quick visibility while SEO builds. Others rely mostly on organic search because of margins or budget. Ad data can even reveal which searches bring enquiries, which helps SEO planning. Our{" "}
            <Link to="/digital-market/PPC-Advertising" className="text-teal-800 font-semibold underline hover:text-teal-900">
              PPC advertising page
            </Link>{" "}
            covers the paid side.
          </p>
        </div>
      </section>

      {/* Section 10: Common SEO Mistakes Indian Businesses Make */}
      <section className="w-full bg-gradient-to-br from-gray-50 to-teal-50/30 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-700 mb-3">
                Common SEO Mistakes Indian Businesses Make
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

      {/* Section 11: Why Choose DigLip7 for SEO Services in India? (Matching Screenshot 5 with number badges) */}
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
                Why Choose DigLip7 for SEO Services in India?
              </h2>
            </FloatingElement>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed">
              We'd rather show how we work than claim to be something we can't prove. In practice:
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
            If you also serve the Gulf market, see our{" "}
            <Link to="/uae/seo-services" className="text-teal-700 font-semibold underline">
              UAE SEO services
            </Link>{" "}
            and{" "}
            <Link to="/uae/dubai/seo-services" className="text-teal-700 font-semibold underline">
              Dubai SEO services
            </Link>.
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
            Every website starts from a different place. If you'd like to talk through your site, your target market, your services, your current search visibility and where you want to grow, DigLip7 can help you see where SEO improvements may matter most.
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
              href="https://wa.me/919650608788?text=Hello%20DigLip7%20Team%2C%20I%20would%20like%20to%20request%20an%20SEO%20Audit%20for%20my%20business%20in%20India."
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

export default IndiaSEOServices;
