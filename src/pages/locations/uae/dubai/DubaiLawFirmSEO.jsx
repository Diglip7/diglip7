import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../../../../components/SEO";
import lawFirmHeroImg from "../../../../images/law-firm-seo-dubai.webp.webp";
import legalChecklistImg from "../../../../images/legal-website-seo-checklist.webp";
import legalMetricsImg from "../../../../images/law-firm-seo-performance-metrics.webp";
import {
  Scale,
  ShieldCheck,
  Search,
  MapPin,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Home,
  Clock,
  Sparkles,
  TrendingUp,
  FileText,
  Smartphone,
  Lock,
  Compass,
  Briefcase,
  CheckSquare,
  HelpCircle,
  BookOpen,
} from "lucide-react";

// 3D Perspective Card Component
const Card3D = ({ children, className = "" }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateXValue = (y - centerY) / 25;
    const rotateYValue = (centerX - x) / 25;
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
      transition={{ type: "spring", stiffness: 120, damping: 15 }}
    >
      {children}
    </motion.div>
  );
};

// Reusable Clean Law Firm SEO Image Component (Light Aesthetic)
// If no image is uploaded or if it fails to load, renders an authoritative, clean legal SVG placeholder with the alt title.
// When an image is provided and loads, only the image is displayed with no alt text shown on the UI.
const LawFirmSEOImage = ({
  src,
  alt,
  width = 1200,
  height = 630,
  aspect = "aspect-[16/10] sm:aspect-[16/9]",
  priority = false,
  className = "",
  imgClassName = "w-full h-full object-cover",
  badge = "Law Firm SEO Dubai",
}) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [src]);

  const showPlaceholder = !src || hasError;

  return (
    <div
      className={`relative w-full rounded-2xl overflow-hidden bg-gradient-to-br from-amber-50/60 via-white to-slate-50 border border-amber-200/90 shadow-md flex items-center justify-center ${showPlaceholder ? "aspect-[16/9]" : aspect} ${className}`}
    >
      {!showPlaceholder ? (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          onError={() => setHasError(true)}
          className={imgClassName}
        />
      ) : (
        <div className="p-8 text-center text-sm font-medium text-amber-950/80 select-none flex flex-col items-center justify-center gap-3.5 w-full h-full bg-gradient-to-b from-white/95 to-amber-50/50 relative overflow-hidden">
          <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-700 border border-amber-200 flex items-center justify-center shadow-xs">
            <Scale className="w-7 h-7" />
          </div>
          <div className="space-y-1.5 max-w-sm">
            <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-200">
              {badge}
            </span>
            <p className="text-sm sm:text-base font-bold text-gray-800 leading-snug">
              {alt}
            </p>
            <p className="text-xs text-gray-500">
              1200 &times; 630 px &bull; High-Resolution Asset
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

// Image assets configuration matching exact requirements
const legalImages = {
  featured: {
    src: lawFirmHeroImg || "/images/law-firm-seo-dubai.webp",
    filename: "law-firm-seo-dubai.webp",
    alt: "Illustration of SEO strategy for a law firm website in Dubai",
    width: 1200,
    height: 630,
  },
  supporting1: {
    src: legalChecklistImg || "/images/legal-website-seo-checklist.webp",
    filename: "legal-website-seo-checklist.webp",
    alt: "Checklist for optimizing a law firm website",
    width: 1200,
    height: 630,
  },
  supporting2: {
    src: legalMetricsImg || "/images/law-firm-seo-performance-metrics.webp",
    filename: "law-firm-seo-performance-metrics.webp",
    alt: "Illustration of organic clicks, impressions, and enquiries for a law firm website",
    width: 1200,
    height: 630,
  },
};

const breadcrumbTrail = [
  { label: "Home", href: "/" },
  { label: "UAE", href: "/uae/seo-services" },
  { label: "Law Firm SEO Dubai", href: "/uae/law-firm-seo-dubai/" },
];

const coreSEOElements = [
  {
    title: "Organic Search Visibility",
    desc: "appearing in unpaid results when people search for relevant legal topics.",
    icon: Search,
  },
  {
    title: "Relevant Legal Service Keywords",
    desc: "the terms people use to describe their legal needs, matched to the practice areas you actually handle.",
    icon: Briefcase,
  },
  {
    title: "Website Usability & Mobile Experience",
    desc: "pages that load quickly and are easy to read on a phone.",
    icon: Smartphone,
  },
  {
    title: "Helpful Legal Content",
    desc: "clear, accurate information that answers common questions.",
    icon: FileText,
  },
  {
    title: "Local Search Visibility",
    desc: "appearing for searches tied to a place, such as Dubai or a specific area",
    icon: MapPin,
  },
];

const whyLawFirmsNeedSeo = [
  {
    title: "Discovery",
    desc: "It helps potential clients find relevant legal services.",
    icon: Search,
  },
  {
    title: "Credibility",
    desc: "A useful, well-organized website builds a professional online presence.",
    icon: ShieldCheck,
  },
  {
    title: "Location-Specific Searches",
    desc: " It improves visibility for searches that include Dubai or nearby areas.",
    icon: MapPin,
  },
  {
    title: "Long-Term Organic Traffic",
    desc: "Well-built pages can keep attracting visitors without paying per click.",
    icon: TrendingUp,
  },
  {
    title: "Accessible Information",
    desc: "Clear practice-area pages make legal information easier to understand.",
    icon: BookOpen,
  },
];

const keywordExamples = [
  { term: "corporate lawyer Dubai", category: "Commercial & Corporate" },
  { term: "family lawyer Dubai", category: "Family & Personal Status" },
  { term: "employment lawyer Dubai", category: "Labor & Employment" },
  { term: "property lawyer Dubai", category: "Real Estate & Conveyancing" },
  { term: "law firm SEO Dubai", category: "Legal Digital Practice" },
];

const technicalSeoPriorities = [
  {
    title: "Mobile-Friendly Design",
    desc: "Ensuring flawless presentation and swift contact options for the high percentage of clients searching on mobile devices.",
    icon: Smartphone,
  },
  {
    title: "Fast Page Loading",
    desc: "Minimizing Core Web Vitals latency so busy corporate counsel and individuals do not abandon slow pages.",
    icon: Clock,
  },
  {
    title: "HTTPS & Site Security",
    desc: "End-to-end SSL encryption safeguarding client data and signaling ironclad professionalism.",
    icon: Lock,
  },
  {
    title: "Crawlability & Indexability",
    desc: "Sensible robots directives and clean server responses ensuring search bots catalog every practice area.",
    icon: Search,
  },
  {
    title: "XML Sitemaps",
    desc: "Up-to-date sitemaps allowing search engines to discover new legal explainers and service additions rapidly.",
    icon: FileText,
  },
  {
    title: "Fixing Broken Links & Redirects",
    desc: "Eliminating 404 dead ends and managing clean 301 redirects when laws, practices, or URLs are updated.",
    icon: Compass,
  },
  {
    title: "Clear Website Navigation",
    desc: "Intuitive site taxonomy connecting general legal service pages directly to specialized practice sub-topics.",
    icon: ChevronRight,
  },
];

const optimizationChecklist = [
  "Clear practice-area pages for each service offered",
  "Accurate firm contact information and physical office address",
  "Relevant Dubai location details (DIFC, Business Bay, Downtown, etc.)",
  "Descriptive page titles and structured heading hierarchy (H1, H2, H3)",
  "Helpful answers to common legal questions",
  "Prominent, accessible, and secure contact options",
  "Mobile usability and swift touch-friendly interactions",
  "Consistent business details across the website, GBP, and local directories",
];

const commonMistakesToAvoid = [
  {
    mistake: "Keyword Stuffing",
    impact: "Repeating phrases makes legal pages awkward to read and damages your firm's professional credibility.",
  },
  {
    mistake: "Duplicate or Thin Service Pages",
    impact: "Near-identical pages for minor keyword variants provide little value and dilute search relevance.",
  },
  {
    mistake: "Publishing Inaccurate Legal Information",
    impact: "Outdated or erroneous legal explanations can mislead readers and create severe professional liability.",
  },
  {
    mistake: "Ignoring Mobile Users",
    impact: "Many legal inquiries occur on mobile phones; poor mobile usability drives high-value clients to competitors.",
  },
  {
    mistake: "Using Misleading Rankings or Awards",
    impact: "All claims, accreditations, and directory honors must be verifiably legitimate and adhere to UAE rules.",
  },
  {
    mistake: "Buying Low-Quality Backlinks",
    impact: "Paid link schemes carry algorithmic penalties and fail to attract genuine corporate or private clients.",
  },
  {
    mistake: "Publishing Fake Testimonials",
    impact: "Deceptive reviews erode client trust and risk severe disciplinary action under professional conduct codes.",
  },
  {
    mistake: "Neglecting Technical SEO",
    impact: "Hidden crawl bottlenecks, slow loading speeds, or broken links prevent great content from being indexed.",
  },
  {
    mistake: "Expecting Immediate Results",
    impact: "Organic search authority builds gradually through consistency; instant top-ranking promises are unrealistic.",
  },
];

const performanceMetrics = [
  {
    name: "Organic Clicks & Impressions",
    desc: "Overall visibility in unpaid search results and how often users select your firm.",
    metric: "Search Volume Trends",
  },
  {
    name: "Search Queries & Average Positions",
    desc: "The exact search queries triggering your listings and position movements over time.",
    metric: "Ranking Distribution",
  },
  {
    name: "Practice Landing Page Performance",
    desc: "Bounce rate, time on page, and engagement across priority practice areas.",
    metric: "Content Engagement",
  },
  {
    name: "Volume of Qualified Enquiries",
    desc: "Focusing on genuine case inquiries that match the firm's target client profile.",
    metric: "Lead Quality",
  },
  {
    name: "Contact-Form Submissions & Phone Calls",
    desc: "Trackable consultation inquiries submitted via forms, email clicks, or phone calls.",
    metric: "Direct Conversions",
  },
  {
    name: "Organic Conversion Rate",
    desc: "The percentage of organic website visitors who take action and reach out.",
    metric: "Conversion Efficiency",
  },
  {
    name: "Local Search Visibility",
    desc: "Performance in Google Maps and local 3-pack results for Dubai location-based searches.",
    metric: "Map Pack Prominence",
  },
];

const agencySelectionCriteria = [
  {
    title: "Experience with Professional Service Websites",
    desc: "Proven understanding of environments where trust, professional confidentiality, and accuracy are paramount.",
  },
  {
    title: "Transparent SEO Processes",
    desc: "Methodologies explained in plain, transparent language without mysterious 'black box' jargon.",
  },
  {
    title: "Technical & Content Capabilities in One Team",
    desc: "Integrated specialists who can fix website code and craft legally nuanced, high-quality content.",
  },
  {
    title: "Realistic Timelines & Meaningful Reporting",
    desc: "Clear regular reporting that showcases actual work accomplished, traffic trends, and qualified inquiries.",
  },
  {
    title: "Deep Understanding of Local Search",
    desc: "Hands-on experience optimizing Google Business Profiles and local citations across Dubai and the UAE.",
  },
  {
    title: "Strictly Ethical Marketing Practices",
    desc: "Zero tolerance for fake testimonials, bought link networks, or misleading advertising claims.",
  },
  {
    title: "Clear Communication & Measurable Objectives",
    desc: "Collaborative partnership built around clear business goals, verified analytics, and responsive contact.",
  },
];

const faqs = [
  {
    q: "What is law firm SEO Dubai?",
    a: "It is the process of improving a law firm's website and online presence so people searching for legal information or services in Dubai can find relevant, accurate pages.",
  },
  {
    q: "How does SEO help law firms in Dubai?",
    a: "It helps potential clients discover relevant practice areas, supports a credible online presence, and improves visibility for location-specific searches. It improves opportunity but does not guarantee clients.",
  },
  {
    q: "How long does SEO take to show results for a law firm?",
    a: "It varies with competition, website condition, content quality, and how quickly changes are made. Organic search is gradual, and no one can promise a fixed timeline or ranking.",
  },
  {
    q: "What keywords should a Dubai law firm target?",
    a: "Terms based on the firm's actual practice areas, user intent, and locations, such as corporate, family, employment, or property law. Priorities should come from keyword research, not guesswork.",
  },
  {
    q: "Is local SEO important for lawyers in Dubai?",
    a: "Yes, because many legal searches include a location. Accurate listings, a properly maintained Google Business Profile, and consistent contact details support local discovery.",
  },
  {
    q: "What should a law firm SEO strategy include?",
    a: "Keyword research, on-page optimization, local SEO, technical SEO, accurate legal content, responsible authority building, and performance tracking.",
  },
  {
    q: "How can a law firm measure SEO performance?",
    a: "Use Google Search Console and Google Analytics to track clicks, impressions, queries, landing-page performance, calls, and form submissions, while checking the quality of enquiries.",
  },
  {
    q: "How should a law firm choose an SEO agency in Dubai?",
    a: "Look for transparent processes, relevant experience, ethical practices, clear reporting, and realistic expectations. Avoid agencies that guarantee rankings or leads.",
  },
];

export default function DubaiLawFirmSEO() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Complete JSON-LD Schema graph matching exact specifications
  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://diglip7.com/#organization",
        name: "DigLip7",
        url: "https://diglip7.com/",
        logo: "https://diglip7.com/images/Logo.jpg",
      },
      {
        "@type": "WebSite",
        "@id": "https://diglip7.com/#website",
        url: "https://diglip7.com/",
        name: "DigLip7",
        publisher: { "@id": "https://diglip7.com/#organization" },
      },
      {
        "@type": "WebPage",
        "@id": "https://diglip7.com/uae/law-firm-seo-dubai/#webpage",
        url: "https://diglip7.com/uae/law-firm-seo-dubai/",
        name: "Law Firm SEO Dubai: A Practical Guide to Online Visibility",
        description:
          "Learn how law firm SEO Dubai strategies can improve search visibility, strengthen your website, and help potential clients discover your legal services online.",
        inLanguage: "en",
        isPartOf: { "@id": "https://diglip7.com/#website" },
        breadcrumb: { "@id": "https://diglip7.com/uae/law-firm-seo-dubai/#breadcrumb" },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: "https://diglip7.com/images/law-firm-seo-dubai.webp",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://diglip7.com/uae/law-firm-seo-dubai/#breadcrumb",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://diglip7.com/" },
          { "@type": "ListItem", position: 2, name: "UAE", item: "https://diglip7.com/uae/seo-services" },
          {
            "@type": "ListItem",
            position: 3,
            name: "Law Firm SEO Dubai",
            item: "https://diglip7.com/uae/law-firm-seo-dubai/",
          },
        ],
      },
      {
        "@type": "Article",
        "@id": "https://diglip7.com/uae/law-firm-seo-dubai/#article",
        headline: "Law Firm SEO Dubai: A Practical Guide to Online Visibility",
        description:
          "Learn how law firm SEO Dubai strategies can improve search visibility, strengthen your website, and help potential clients discover your legal services online.",
        image: "https://diglip7.com/images/law-firm-seo-dubai.webp",
        author: { "@id": "https://diglip7.com/#organization" },
        publisher: { "@id": "https://diglip7.com/#organization" },
        mainEntityOfPage: { "@id": "https://diglip7.com/uae/law-firm-seo-dubai/#webpage" },
        datePublished: "2026-10-16",
        dateModified: "2026-10-16",
        inLanguage: "en",
        about: "Law firm SEO in Dubai",
      },
      {
        "@type": "FAQPage",
        "@id": "https://diglip7.com/uae/law-firm-seo-dubai/#faq",
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
    <div className="overflow-x-hidden bg-white w-full text-slate-800 font-sans antialiased">
      {/* Dynamic SEO Tag Management */}
      <SEO
        title="Law Firm SEO Dubai: A Practical Guide to Online Visibility"
        exactTitle={true}
        description="Learn how law firm SEO Dubai strategies can improve search visibility, strengthen your website, and help potential clients discover your legal services online."
        canonical="https://diglip7.com/uae/law-firm-seo-dubai/"
        robots="index, follow, max-image-preview:large"
        ogType="article"
        ogLocale="en_AE"
        ogImage="https://diglip7.com/images/law-firm-seo-dubai.webp"
        ogImageAlt="Illustration of SEO strategy for a law firm website in Dubai"
        twitterCard="summary_large_image"
        twitterSite={null}
        twitterCreator={null}
        twitterTitle="Law Firm SEO Dubai: A Practical Guide to Online Visibility"
        twitterDescription="Learn how law firm SEO Dubai strategies can improve search visibility, strengthen your website, and help potential clients discover your legal services online."
        twitterImage="https://diglip7.com/images/law-firm-seo-dubai.webp"
        twitterImageAlt="Illustration of SEO strategy for a law firm website in Dubai"
        keywords={false}
        schema={jsonLdGraph}
      />


      {/* ================= BREADCRUMB NAVIGATION (Clean, No Social Share Buttons) ================= */}
      <div className="pt-24 sm:pt-28 px-4 sm:px-6 lg:px-8 xl:px-12 bg-gradient-to-r from-amber-50/60 via-slate-50 to-white border-b border-amber-100/80">
        <nav
          aria-label="Breadcrumb"
          className="max-w-6xl mx-auto flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600 pb-3"
        >
          {breadcrumbTrail.map((crumb, i) => (
            <span key={crumb.label} className="flex items-center gap-1.5 sm:gap-2">
              {i === 0 ? (
                <Home className="w-3.5 h-3.5 text-amber-700" />
              ) : (
                <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              )}
              {i === breadcrumbTrail.length - 1 ? (
                <span className="font-semibold text-amber-950">{crumb.label}</span>
              ) : (
                <Link to={crumb.href} className="hover:text-amber-700 transition-colors">
                  {crumb.label}
                </Link>
              )}
            </span>
          ))}
        </nav>
      </div>

      {/* ================= HERO SECTION (Light Theme) ================= */}
      <header className="pt-8 sm:pt-14 pb-16 lg:pb-24 bg-gradient-to-r from-amber-50/40 via-slate-50 to-white relative overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading, Meta, Intro Box */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-amber-200 text-amber-900 text-xs sm:text-sm font-semibold shadow-xs">
                <Scale className="w-4 h-4 text-amber-700" />
                <span>Legal Practice Visibility in Dubai &bull; General SEO Guidance</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl font-extrabold tracking-tight text-gray-900 leading-tight">
                Law Firm SEO Dubai:{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-amber-800 to-slate-900">
                  A Practical Guide to Online Visibility
                </span>
              </h1>

              {/* Author & Publication Meta Bar */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-gray-500 border-y border-gray-200 py-3">
                <span className="flex items-center gap-1.5">
                  <div className="w-6 h-6 rounded-full bg-amber-600 text-white font-bold text-xs flex items-center justify-center">
                    D7
                  </div>
                  <span className="text-gray-800 font-semibold">DigLip7 Editorial Team</span>
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-700" />
                  <span>8 min read</span>
                </span>


              </div>

              {/* Introductory Highlight Box */}
              <div className="bg-white/95 backdrop-blur-md rounded-2xl border-l-4 border-amber-600 border border-amber-100 p-6 sm:p-7 shadow-md space-y-3.5">
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-normal">
                  Law firm SEO Dubai is the practice of improving a legal website so that people searching
                  for legal information or services can find it, understand it, and contact the firm. In a
                  market where many firms offer similar services, a website that is clear, accurate, and easy
                  to use has a better chance of reaching the right audience through organic search. SEO cannot
                  guarantee rankings or new clients, but it can make a firm's expertise easier to find.
                </p>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed pt-3 border-t border-gray-100">
                  This guide explains what SEO involves for legal practices, which strategies matter most,
                  how to avoid common mistakes, how to measure progress, and what to look for when choosing
                  a partner. It is general SEO guidance, not legal advice.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link to="/contact">
                  <button className="px-7 sm:px-8 py-3.5 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold text-sm sm:text-base rounded-full shadow-lg shadow-amber-600/20 hover:scale-105 transition-all flex items-center gap-2 cursor-pointer">
                    <span>Discuss Your Law Firm SEO Strategy</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </button>
                </Link>
                <Link to="/digital-market/seoservices">
                  <button className="px-7 sm:px-8 py-3.5 bg-white hover:bg-slate-50 text-amber-950 font-bold text-sm sm:text-base rounded-full border border-amber-300 shadow-sm hover:scale-105 transition-all cursor-pointer">
                    Explore DigLip7 SEO Services
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Column: Large Featured Image in 3D Card */}
            <div className="lg:col-span-6 w-full flex justify-center">
              <Card3D className="w-full">
                <div className="bg-white p-3 sm:p-4 rounded-3xl border border-amber-200/90 shadow-2xl hover:shadow-amber-200/40 transition-all">
                  <LawFirmSEOImage
                    src={legalImages.featured.src}
                    alt={legalImages.featured.alt}
                    width={legalImages.featured.width}
                    height={legalImages.featured.height}
                    aspect="aspect-auto"
                    imgClassName="w-full h-auto block rounded-2xl object-cover shadow-xs"
                    priority={true}
                    badge="Featured Article Visual"
                  />
                </div>
              </Card3D>
            </div>
          </div>
        </div>
      </header>

      {/* ================= WHAT IS LAW FIRM SEO IN DUBAI? ================= */}
      <section className="py-16 sm:py-20 bg-slate-50/70 border-b border-gray-200/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4 flex items-center gap-2.5">
              <Scale className="w-6 h-6 text-amber-700" />
              <span>What Is Law Firm SEO in Dubai?</span>
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              SEO for law firms in Dubai is the process of helping search engines and potential clients
              understand what your firm does, where it operates, and why your pages are useful. It brings
              together several core elements:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {coreSEOElements.map((elem, idx) => {
              const IconComp = elem.icon;
              return (
                <div
                  key={idx}
                  className="bg-white hover:bg-amber-50/40 p-6 rounded-2xl border border-gray-200/80 hover:border-amber-300 transition-all shadow-xs flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4 border border-amber-200 group-hover:scale-110 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{elem.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{elem.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Ethics Callout Box */}
          <div className="bg-amber-50/80 border-l-4 border-amber-600 rounded-2xl p-6 border border-amber-200 shadow-xs">
            <div className="flex items-start gap-3.5">
              <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <p className="text-amber-950 text-sm sm:text-base leading-relaxed">
                <strong className="font-bold text-amber-900">Important Distinction:</strong> Legal
                SEO Dubai work is different from general web marketing because the content is sensitive,
                accuracy matters, and professional conduct rules apply.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY DO LAW FIRMS IN DUBAI NEED SEO? ================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
              Why Do Law Firms in Dubai Need SEO?
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Most people start looking for legal help online. SEO supports a firm in practical ways:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {whyLawFirmsNeedSeo.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 hover:bg-amber-50/30 p-6 rounded-2xl border border-gray-200/80 hover:border-amber-200 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Realistic Disclaimer Box */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-gray-200 text-gray-700 text-sm sm:text-base leading-relaxed">
            <p>
              SEO is a gradual, ongoing process. It does not guarantee top rankings or a fixed number of new
              enquiries, and anyone promising either should be questioned.
            </p>
          </div>
        </div>
      </section>

      {/* ================= KEY LAW FIRM SEO STRATEGIES FOR DUBAI ================= */}
      <section className="py-16 sm:py-24 bg-slate-50/50 border-b border-gray-200/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Key Law Firm SEO Strategies for Dubai
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              A comprehensive blueprint tailored for the precision, ethics, and competitive landscape of
              Dubai's legal sector.
            </p>
          </div>

          {/* Strategy 1: Legal Keyword Research */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-xs space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-900 font-black text-sm flex items-center justify-center border border-amber-300">
                01
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Legal Keyword Research</h3>
            </div>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Law firm keyword research starts with practice areas, user intent, and location. Examples of the
              kinds of phrases to explore include:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 pt-2">
              {keywordExamples.map((kw, i) => (
                <div
                  key={i}
                  className="bg-slate-50 p-3.5 rounded-xl border border-gray-200 flex flex-col justify-between"
                >
                  <span className="text-amber-800 font-mono text-xs font-semibold mb-1">
                    {kw.category}
                  </span>
                  <span className="text-gray-900 font-bold text-sm">{kw.term}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed bg-slate-50 p-4 rounded-xl border border-gray-200">
              These are illustrations only. Keyword selection must reflect the services the firm actually
              provides, and current data should guide priorities. A firm that does not handle family matters
              should not target family law terms.
            </p>
          </div>

          {/* Strategy 2: On-Page SEO for Legal Websites */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-xs space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-900 font-black text-sm flex items-center justify-center border border-amber-300">
                02
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                On-Page SEO for Legal Websites
              </h3>
            </div>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              On-page SEO covers page titles, meta descriptions, headings, URLs, internal links, and the
              content itself. Each element should describe the page honestly and clearly.
            </p>

            <div className="bg-slate-50 p-6 rounded-2xl border border-gray-200 space-y-3">
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                The most effective approach is usually a dedicated, genuinely useful page for each relevant
                practice area, not a separate near-identical page for every keyword variation. Link related
                pages together so visitors can move naturally from a general service page to more specific
                information.
              </p>
            </div>
          </div>

          {/* Strategy 3: Local SEO for Law Firms */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-xs space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-900 font-black text-sm flex items-center justify-center border border-amber-300">
                03
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Local SEO for Law Firms</h3>
            </div>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Local SEO for law firms helps nearby searchers find a real office. Key steps include:
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
              {[
                "Accurate business name, address, phone number, and opening hours",
                "An eligible, properly maintained Google Business Profile",
                "Relevant local directory listings with consistent details",
                "Clear location information on the website",
                "Genuine client reviews, where permitted by professional rules",
              ].map((step, i) => (
                <li
                  key={i}
                  className="bg-slate-50 p-4 rounded-xl border border-gray-200 flex items-start gap-3 text-gray-800 text-sm sm:text-base"
                >
                  <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>

            <div className="bg-amber-50/70 border-l-4 border-amber-600 p-5 rounded-r-xl border border-amber-200 text-amber-950 text-sm sm:text-base leading-relaxed">
              Google Business Profile optimization for lawyers depends on eligibility, so check Google's
              guidelines before creating or editing a listing. Never use fake reviews, misleading addresses,
              or listings for locations that do not exist. For more detail, see DigLip7's{" "}
              <Link
                to="/uae/dubai/local-seo"
                className="text-amber-800 font-bold hover:underline"
              >
                Local SEO Dubai
              </Link>{" "}
              page.
            </div>
          </div>

          {/* Strategy 4: Technical SEO and Website Performance */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-xs space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-900 font-black text-sm flex items-center justify-center border border-amber-300">
                04
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                Technical SEO and Website Performance
              </h3>
            </div>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Technical SEO for law firm websites makes sure search engines can reach and understand your
              pages. Priorities include:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
              {technicalSeoPriorities.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-slate-50 p-4.5 rounded-xl border border-gray-200 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center mb-3">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <h4 className="text-base font-bold text-gray-900 mb-1.5">{item.title}</h4>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="text-gray-600 text-sm sm:text-base italic pt-2">
              A site with technical problems can hide good content from both search engines and visitors.
            </p>
          </div>

          {/* Strategy 5: Helpful Legal Content and Topical Relevance */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-xs space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-900 font-black text-sm flex items-center justify-center border border-amber-300">
                05
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                Helpful Legal Content and Topical Relevance
              </h3>
            </div>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Legal content marketing lets a firm answer real questions through articles, service guides, and
              explainers. To keep content trustworthy:
            </p>

            <div className="space-y-3 pt-2">
              {[
                "Make sure it is accurate and reviewed by a qualified legal professional.",
                "Show publication or update dates where relevant.",
                "Update pages when laws or procedures change.",
                "Explain general information clearly without presenting it as advice for an individual's situation.",
              ].map((point, i) => (
                <div
                  key={i}
                  className="bg-slate-50 p-4 rounded-xl border border-gray-200 flex items-start gap-3 text-gray-800 text-sm sm:text-base"
                >
                  <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="bg-slate-50 p-5 rounded-xl border border-gray-200 text-gray-700 text-sm sm:text-base leading-relaxed">
              Outdated or incorrect legal content can mislead readers and harm a firm's reputation. See
              DigLip7's{" "}
              <Link
                to="/digital-market/content-marketing"
                className="text-amber-700 font-bold hover:underline"
              >
                content marketing
              </Link>{" "}
              page for more on planning useful content.
            </div>
          </div>

          {/* Strategy 6: Building Website Authority Responsibly */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-xs space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-900 font-black text-sm flex items-center justify-center border border-amber-300">
                06
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                Building Website Authority Responsibly
              </h3>
            </div>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Authority grows from real recognition. Responsible options include accurate professional
              profiles, legitimate industry mentions, credible citations, and genuinely useful resources
              that others choose to reference. Avoid paid link schemes, invented credentials, and any claim
              of expertise you cannot support.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SUPPORTING VISUAL 1 & HOW TO OPTIMIZE ================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-12">
            {/* Large Supporting Image 1 */}
            <div className="lg:col-span-6 order-2 lg:order-1 w-full flex justify-center">
              <Card3D className="w-full">
                <div className="bg-white p-3 sm:p-4 rounded-3xl border border-amber-200/90 shadow-2xl hover:shadow-amber-200/40 transition-all">
                  <LawFirmSEOImage
                    src={legalImages.supporting1.src}
                    alt={legalImages.supporting1.alt}
                    width={legalImages.supporting1.width}
                    height={legalImages.supporting1.height}
                    aspect="aspect-auto"
                    imgClassName="w-full h-auto block rounded-2xl object-cover shadow-xs"
                    badge="Checklist Infographic"
                  />
                </div>
              </Card3D>
            </div>

            {/* Checklist Content */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900">
                How to Optimize a Law Firm Website for Dubai Searches
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Use this checklist as a starting point to audit your practice area architecture and local
                discoverability:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {optimizationChecklist.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50 p-3.5 rounded-xl border border-gray-200 flex items-start gap-2.5 text-xs sm:text-sm text-gray-800"
                  >
                    <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* UAE Legal Advertising Standards Disclaimer */}
          <div className="bg-amber-50/70 p-6 sm:p-8 rounded-2xl border border-amber-200 text-amber-950 text-sm sm:text-base leading-relaxed space-y-3">
            <h3 className="text-lg font-bold text-amber-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-700" />
              <span>UAE Legal Advertising & Compliance Standards</span>
            </h3>
            <p>
              Legal marketing Dubai efforts must also respect legal advertising rules, professional conduct
              standards, client confidentiality, and applicable UAE requirements. These rules can be
              specific, so firms should confirm current requirements with the relevant UAE or Dubai
              authorities and their own compliance advisers before publishing marketing content.
            </p>
          </div>
        </div>
      </section>

      {/* ================= COMMON SEO MISTAKES LAW FIRMS SHOULD AVOID ================= */}
      <section className="py-16 sm:py-24 bg-slate-50/70 border-b border-gray-200/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Common SEO Mistakes Law Firms Should Avoid
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Legal practices operate under higher trust expectations. Avoiding these missteps protects your
              firm's brand and search longevity:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {commonMistakesToAvoid.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-red-300 transition-all shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-6 rounded-full bg-red-100 text-red-700 text-xs font-bold flex items-center justify-center">
                      ✕
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900">{item.mistake}</h3>
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{item.impact}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 text-gray-700 text-sm sm:text-base leading-relaxed">
            A user-focused strategy built on accurate information and realistic expectations reduces these
            risks.
          </div>
        </div>
      </section>

      {/* ================= SUPPORTING VISUAL 2 & HOW TO MEASURE PERFORMANCE ================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-12">
            {/* Performance Content */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900">
                How to Measure Law Firm SEO Performance
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Useful measures go beyond raw vanity visits to track meaningful client intent:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {performanceMetrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50 p-4 rounded-xl border border-gray-200 flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 mb-1 block">
                        {m.metric}
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-gray-900 mb-1">{m.name}</h4>
                      <p className="text-gray-600 text-xs leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Large Supporting Image 2 */}
            <div className="lg:col-span-6 w-full flex justify-center">
              <Card3D className="w-full">
                <div className="bg-white p-3 sm:p-4 rounded-3xl border border-amber-200/90 shadow-2xl hover:shadow-amber-200/40 transition-all">
                  <LawFirmSEOImage
                    src={legalImages.supporting2.src}
                    alt={legalImages.supporting2.alt}
                    width={legalImages.supporting2.width}
                    height={legalImages.supporting2.height}
                    aspect="aspect-auto"
                    imgClassName="w-full h-auto block rounded-2xl object-cover shadow-xs"
                    badge="Metrics Dashboard"
                  />
                </div>
              </Card3D>
            </div>
          </div>

          <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-gray-200 text-gray-700 text-sm sm:text-base leading-relaxed space-y-3">
            <p>
              Google Search Console and Google Analytics are useful tools for tracking these. Rankings and
              traffic should always be judged alongside the relevance and quality of enquiries. A modest
              number of well-matched enquiries is worth more than a large number of unrelated visits.
              Tracking should also be tested before its numbers guide decisions.
            </p>
          </div>
        </div>
      </section>

      {/* ================= HOW TO CHOOSE A LAW FIRM SEO AGENCY IN DUBAI ================= */}
      <section className="py-16 sm:py-24 bg-slate-50/60 border-b border-gray-200/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              How to Choose a Law Firm SEO Agency in Dubai
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              When comparing an SEO agency Dubai firms might hire, or any provider of law firm SEO services
              Dubai wide, consider:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {agencySelectionCriteria.map((criterion, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-amber-300 transition-all shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs mb-3">
                    {idx + 1}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{criterion.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{criterion.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-amber-50/70 p-6 sm:p-8 rounded-2xl border border-amber-200 text-amber-950 text-sm sm:text-base leading-relaxed space-y-3">
            <p>
              Be cautious of guaranteed rankings or instant leads. You can read about DigLip7's general
              approach on its{" "}
              <Link to="/digital-market/seoservices" className="text-amber-800 font-bold hover:underline">
                SEO services
              </Link>{" "}
              and{" "}
              <Link to="/uae/dubai/seo-services" className="text-amber-800 font-bold hover:underline">
                Dubai SEO Services
              </Link>{" "}
              pages, and compare it with what you need.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FREQUENTLY ASKED QUESTIONS ================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-gray-200/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Legal Practice FAQ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Frequently Asked Questions About Law Firm SEO Dubai
            </h2>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-200 shadow-xs overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left px-5 sm:px-6 py-4.5 sm:py-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-bold text-gray-900 text-sm sm:text-base leading-snug">
                      {index + 1}. {faq.q}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? "bg-amber-600 text-white rotate-180" : "bg-gray-100 text-gray-500"
                        }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-gray-700 leading-relaxed border-t border-gray-100 bg-amber-50/20">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CONCLUSION & CTA (Premium Contrast) ================= */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-pink-50 via-pink-150 to-pink-150 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl text-black sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Build a Sustainable SEO Strategy for Your Law Firm
          </h2>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Strong law firm SEO Dubai work comes down to a few fundamentals: relevant keywords tied to real
            services, useful and accurate legal content, solid technical performance, local visibility, and
            information visitors can trust. None of these produces overnight results, but together they
            build a website that serves both searchers and the firm.
          </p>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Looking to improve your law firm's online visibility? Explore{" "}
            <Link
              to="/digital-market/seoservices"
              className="text-amber-500 font-bold underline hover:text-amber-300"
            >
              DigLip7's SEO services
            </Link>{" "}
            to understand how a tailored strategy can support your website's organic search goals.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link to="/contact">
              <button className="px-8 sm:px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-extrabold text-sm sm:text-base rounded-full shadow-2xl hover:scale-105 transition-all flex items-center gap-2 cursor-pointer">
                <span>Request a Law Firm SEO Consultation</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>
            </Link>

            <Link to="/uae/dubai/seo-services">
              <button className="px-8 sm:px-10 py-4 bg-green/10 hover:bg-white/20 text-black border border-amber-300/40 font-bold text-sm sm:text-base rounded-full backdrop-blur-md shadow-lg hover:scale-105 transition-all flex items-center gap-2 cursor-pointer">
                <span>View All Dubai SEO Services</span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
