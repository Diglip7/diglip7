import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../../../components/SEO";
import {
  Building2,
  Home,
  Search,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Target,
  BarChart3,
  Layers,
  Settings,
  Globe,
  Smartphone,
  Zap,
  ShieldCheck,
  FolderTree,
  FileText,
  AlertTriangle,
  Code2,
  Check,
  Laptop,
  Network,
  Sparkles,
  MapPin,
  Key,
  Compass,
  Briefcase,
  Users,
  Eye,
  Sliders,
  HelpCircle,
  PhoneCall,
  Clock,
  ExternalLink,
} from "lucide-react";

// Imported Real Estate SEO WebP Images
import heroImgSrc from "../../../images/real-estate-seo.webp";
import listingImgSrc from "../../../images/property-listing.webp";
import mobileImgSrc from "../../../images/property-mobile-website.webp";
import architectureImgSrc from "../../../images/internal-link.webp";

// Image Slot Container - Displays responsive real estate visuals with graceful fallback
const PropertyImageSlot = ({
  src = "",
  alt = "",
  width = 1200,
  height = 675,
  aspect = "aspect-[16/9]",
  className = "",
  priority = false,
  fallbackIcon = Building2,
  caption = "",
  badgeText = "",
}) => {
  const [hasError, setHasError] = useState(false);
  const Icon = fallbackIcon;

  return (
    <figure className="my-4 sm:my-6 w-full">
      <div
        className={`relative w-full rounded-2xl overflow-hidden bg-slate-900 border border-teal-500/25 shadow-xl flex items-center justify-center ${aspect} ${className}`}
      >
        {src && !hasError ? (
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? "eager" : "lazy"}
            onError={() => setHasError(true)}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
          />
        ) : (
          <div className="p-6 sm:p-8 text-center text-sm font-medium text-slate-800 select-none flex flex-col items-center justify-center gap-3 w-full h-full bg-gradient-to-b from-white/95 to-teal-50/60 border-2 border-dashed border-teal-300/80 rounded-2xl">
            <div className="w-14 h-14 rounded-2xl bg-teal-100/90 text-teal-800 flex items-center justify-center shadow-xs">
              <Icon className="w-7 h-7" />
            </div>
            <div className="space-y-1.5 max-w-sm">
              <span className="block leading-snug text-xs sm:text-sm font-bold text-slate-900">
                {alt}
              </span>
              {badgeText && (
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800 text-[11px] font-semibold">
                  {badgeText}
                </span>
              )}
            </div>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="text-xs text-slate-500 mt-2 text-center italic font-medium">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

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
    const rotateXValue = (y - centerY) / 20;
    const rotateYValue = (centerX - x) / 20;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ perspective: 1000, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ---------------------------------------------------------------------------
// Document Data (Strictly Verbatim from Prompt)
// ---------------------------------------------------------------------------

const breadcrumbTrail = [
  { label: "Home", href: "/" },
  { label: "Qatar", href: "/qatar/seo-services" },
  { label: "Real Estate SEO Services", href: "/qatar/real-estate-seo-services/" },
];

const secondaryKeywords = [
  "Real Estate SEO Qatar",
  "Real Estate SEO Agency Qatar",
  "Property SEO Services Qatar",
  "SEO for Real Estate Developers Qatar",
  "Real Estate Agent SEO Qatar",
  "Property Website SEO Qatar",
  "Real Estate Digital Marketing Qatar",
  "Local SEO for Real Estate Qatar",
  "Real Estate Keyword Research Qatar",
];

const whyNeedSeoProblems = [
  {
    title: "Discovery & indexing barriers",
    desc: "Listings that search engines struggle to discover or index.",
    icon: Search,
  },
  {
    title: "Thin development pages",
    desc: "Development pages with little useful information.",
    icon: FileText,
  },
  {
    title: "Mismatched categories",
    desc: "Categories that don't match how people search.",
    icon: Target,
  },
  {
    title: "Duplicate & outdated URLs",
    desc: "Duplicate or outdated listing URLs.",
    icon: AlertTriangle,
  },
  {
    title: "Weak neighbourhood visibility",
    desc: "Weak visibility for relevant neighbourhood or property-type searches.",
    icon: MapPin,
  },
  {
    title: "Poor mobile experience",
    desc: "Poor mobile browsing.",
    icon: Smartphone,
  },
  {
    title: "Hidden agency service pages",
    desc: "Agency and developer service pages that rarely appear in search.",
    icon: Building2,
  },
  {
    title: "Unclear enquiry attribution",
    desc: "No clear view of which organic pages produce enquiries.",
    icon: BarChart3,
  },
];

const servicesWeProvide = [
  {
    title: "Real estate SEO audits and competitor review",
    desc: "Comprehensive diagnostic of site crawlability, technical health, indexing status, template efficiency, and competitor search positioning in the Qatar market.",
    icon: ShieldCheck,
    tag: "Audit & Diagnostics",
  },
  {
    title: "Real estate keyword research and intent mapping",
    desc: "Granular mapping of buyer, tenant, landlord, and developer search queries to relevant landing pages and listing categories.",
    icon: Search,
    tag: "Intent Mapping",
  },
  {
    title: "Property listing and detail page optimization",
    desc: "Titles, verified bedroom/bathroom/size/price attributes, descriptive copy, image alt tags, canonicals, and clear viewing-request buttons.",
    icon: Home,
    tag: "Listing Optimization",
  },
  {
    title: "Property category and location page SEO",
    desc: "Optimizing neighbourhood, district, and property-type hubs for high-value searches such as apartments, villas, and commercial spaces.",
    icon: FolderTree,
    tag: "Category & Hubs",
  },
  {
    title: "Technical SEO for property websites",
    desc: "Managing faceted navigation, search filter parameters, XML sitemaps, robots.txt, pagination, JavaScript rendering, and unavailable listing lifecycles.",
    icon: Settings,
    tag: "Technical SEO",
  },
  {
    title: "Local SEO and Google Business Profile optimization",
    desc: "For eligible physical presences: accurate NAP, genuine customer reviews, category choices, and synchronization with location landing pages.",
    icon: MapPin,
    tag: "Local Maps",
  },
  {
    title: "Internal linking and website architecture",
    desc: "Structuring logical click pathways from homepage to property categories, location hubs, and verified individual listings.",
    icon: Network,
    tag: "Architecture",
  },
  {
    title: "Content planning and Arabic and English SEO planning",
    desc: "High-value buying, renting, and neighbourhood guides localized natively in Arabic and English where audience research demands it.",
    icon: Globe,
    tag: "Bilingual Content",
  },
  {
    title: "Property structured data",
    desc: "Implementing verified schema markup (WebPage, Service, BreadcrumbList, Organization, and FAQPage) matching visible on-page content.",
    icon: Code2,
    tag: "Structured Data",
  },
  {
    title: "Speed and mobile optimization",
    desc: "Auditing responsive layouts, heavy listing galleries, image compression, script bloat, and Core Web Vitals across core property templates.",
    icon: Zap,
    tag: "Core Web Vitals",
  },
  {
    title: "Organic performance tracking and reporting",
    desc: "Segmented reporting of search queries, impressions, organic traffic, viewing requests, click-to-call actions, and form leads via GSC and GA4.",
    icon: BarChart3,
    tag: "Attribution",
  },
];

const processSteps = [
  { step: "01", title: "Understand your business model, target customers and service area." },
  { step: "02", title: "Audit the existing website." },
  { step: "03", title: "Research keywords and search intent." },
  { step: "04", title: "Review relevant competitors and search results." },
  { step: "05", title: "Prioritize technical issues." },
  { step: "06", title: "Optimize key property, category, project and location pages." },
  { step: "07", title: "Improve internal linking and site architecture." },
  { step: "08", title: "Implement relevant structured data." },
  { step: "09", title: "Validate changes and indexability." },
  { step: "10", title: "Monitor performance and refine the strategy." },
];

const faqList = [
  {
    q: "What are real estate SEO services in Qatar?",
    a: "They are SEO services tailored to property websites: improving how listings, project pages, location pages and service pages are found and understood in search. The work usually combines keyword research, content and page optimization, technical fixes, local search and reporting, adapted to the business's inventory and target customers.",
  },
  {
    q: "How can SEO help real estate agencies in Qatar?",
    a: "It can help agencies appear for relevant searches such as property types, locations and services, and send those visitors to clear listing, category and enquiry pages. It can also reduce reliance on paid channels over time, though results depend on competition, website quality and market conditions.",
  },
  {
    q: "What does a real estate SEO agency provide?",
    a: "Typically an audit, keyword and intent research, page and content optimization, technical SEO, internal linking, structured data, local search support and performance reporting. The exact scope depends on your website and goals, and some changes may require your developers or content team.",
  },
  {
    q: "Can SEO help property developers improve website visibility?",
    a: "Yes, it can support visibility for project pages, location information and developer profile pages when those pages contain verified, useful detail. SEO cannot create demand or guarantee enquiries, but it can help relevant people find accurate project information.",
  },
  {
    q: "How long does real estate SEO take to show results?",
    a: "There is no fixed timeline. It depends on competition, the website's current condition, inventory size, how quickly changes are implemented and how search engines respond. Technical fixes may show effects sooner than content and authority work. Be cautious of anyone promising rankings or leads within a set number of days.",
  },
  {
    q: "Does real estate SEO include Google Business Profile optimization?",
    a: "It can, where the business is eligible. Google Business Profile depends on a real, eligible business presence and Google's rules. We can review profile accuracy, categories, services and consistency with the website, but we don't create fake locations, fake reviews or duplicate profiles.",
  },
  {
    q: "Is Arabic and English SEO important for property websites in Qatar?",
    a: "It depends on your audience. If customers search in both languages, separate keyword research and properly localized pages are usually worthwhile, with hreflang and consistent property details. If your audience mainly uses one language, a single-language site may be sufficient.",
  },
  {
    q: "How can a real estate business measure SEO performance?",
    a: "Use Google Search Console for clicks, impressions, queries and indexing, and GA4 for organic landing pages and enquiry events such as form submissions or click-to-call, where tracking is configured. Keep visibility, visits, enquiries and completed transactions as separate measures.",
  },
];

const QatarRealEstateSEO = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const pageUrl = "https://diglip7.com/qatar/real-estate-seo-services/";

  // Exact JSON-LD schemas required by Sections 12-16
  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://diglip7.com/#organization",
      name: "DigLip7 Tech Pvt Ltd",
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
      "@type": "WebPage",
      "@id": "https://diglip7.com/qatar/real-estate-seo-services/#webpage",
      url: "https://diglip7.com/qatar/real-estate-seo-services/",
      name: "Real Estate SEO Services Qatar | DigLip7",
      description:
        "Grow your property website’s organic visibility with real estate SEO services in Qatar, including property page optimization, local SEO and technical SEO.",
      isPartOf: { "@id": "https://diglip7.com/#website" },
      about: { "@id": "https://diglip7.com/qatar/real-estate-seo-services/#service" },
      breadcrumb: { "@id": "https://diglip7.com/qatar/real-estate-seo-services/#breadcrumb" },
      inLanguage: "en",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://diglip7.com/qatar/real-estate-seo-services/#service",
      name: "Real Estate SEO Services in Qatar",
      serviceType: "Real Estate SEO",
      description:
        "Real estate SEO services for developers, agencies, agents and other property businesses targeting Qatar, including audits, keyword research, property page optimization, technical SEO, local SEO and performance reporting.",
      url: "https://diglip7.com/qatar/real-estate-seo-services/",
      provider: { "@id": "https://diglip7.com/#organization" },
      areaServed: { "@type": "Country", name: "Qatar" },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": "https://diglip7.com/qatar/real-estate-seo-services/#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://diglip7.com/" },
        { "@type": "ListItem", position: 2, name: "Qatar", item: "https://diglip7.com/qatar/" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Real Estate SEO Services",
          item: "https://diglip7.com/qatar/real-estate-seo-services/",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqList.map((faq) => ({
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
    <div className="w-full bg-white font-sans text-slate-800 antialiased selection:bg-teal-700 selection:text-white">
      {/* Dynamic SEO Head Tags matching Sections 4-9 */}
      <SEO
        title="Real Estate SEO Services Qatar | DigLip7"
        description="Grow your property website’s organic visibility with real estate SEO services in Qatar, including property page optimization, local SEO and technical SEO."
        canonical={pageUrl}
        robots="index, follow"
        exactTitle={true}
        keywords="Real Estate SEO Services Qatar, Real Estate SEO Qatar, Real Estate SEO Agency Qatar, Property SEO Services Qatar, SEO for Real Estate Developers Qatar, Real Estate Agent SEO Qatar, Property Website SEO Qatar, Real Estate Digital Marketing Qatar, Local SEO for Real Estate Qatar, Real Estate Keyword Research Qatar"
        ogType="website"
        ogTitle="Real Estate SEO Services Qatar | DigLip7"
        ogDescription="Real estate SEO services for property businesses targeting Qatar: property page optimization, local SEO, technical SEO and performance reporting."
        ogImage="https://diglip7.com/images/real-estate-seo-services-qatar.webp"
        ogImageAlt="Real estate marketing team reviewing property website search performance and listing visibility"
        twitterCard="summary_large_image"
        twitterTitle="Real Estate SEO Services Qatar | DigLip7"
        twitterDescription="Real estate SEO services for property businesses targeting Qatar: property pages, local SEO, technical SEO and reporting."
        twitterImage="https://diglip7.com/images/real-estate-seo-services-qatar.webp"
        twitterImageAlt="Real estate marketing team reviewing property website search performance and listing visibility"
        hreflangs={[
          { hreflang: "en-qa", href: pageUrl },
          { hreflang: "x-default", href: pageUrl },
        ]}
        schema={schemaData}
      />

      {/* Breadcrumb Navigation */}
      <div className="pt-24 sm:pt-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-50/70 via-slate-50 to-white border-b border-gray-100">
        <nav
          aria-label="Breadcrumb"
          className="max-w-7xl mx-auto flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-slate-600 pb-3"
        >
          {breadcrumbTrail.map((crumb, i) => (
            <span key={crumb.label} className="flex items-center gap-1.5">
              {i === 0 ? (
                <Home className="w-3.5 h-3.5 text-teal-700" />
              ) : (
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
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
      <header className="pt-8 sm:pt-12 pb-16 lg:pb-20 bg-gradient-to-r from-teal-50/70 via-slate-50 to-white border-b border-gray-200 relative overflow-hidden">
        {/* Subtle decorative background gradients */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-teal-200/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-slate-200/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Heading and Intro */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100/90 text-teal-900 border border-teal-200 text-xs sm:text-sm font-semibold tracking-wide">
                <Building2 className="w-4 h-4 text-teal-700" />
                <span>Qatar Property &amp; Real Estate Search Optimization</span>
              </div>

              {/* H1 strictly matching Section 10 */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Real Estate SEO Services in Qatar for Property Businesses
              </h1>

              {/* Verbatim Intro Paragraphs */}
              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  Someone searching for &ldquo;apartments in Doha&rdquo; or office space for a growing company rarely starts with a particular agency. They search, scan a few results and open the pages that look most relevant and trustworthy. If your listings, project pages or service pages are hard for search engines to find and understand, those people may never reach you.
                </p>
                <p>
                  Real estate SEO services in Qatar focus on making a property website discoverable for the right searches: listings, project pages, location and category pages, and agency or developer service pages.{" "}
                  <Link
                    to="/"
                    className="text-teal-800 font-semibold underline hover:text-teal-900 transition-colors"
                  >
                    DigLip7
                  </Link>{" "}
                  offers real estate SEO for developers, agencies, agents, property management companies and other property businesses targeting Qatar. The work covers audits, keyword research, page optimization, technical SEO, local search and reporting, so your website can support the way people actually research property online.
                </p>
              </div>

              {/* Hero CTA Button */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-teal-800 text-white font-bold text-sm sm:text-base hover:bg-teal-900 shadow-md hover:shadow-lg transition-all duration-200 group"
                >
                  <span>Discuss Your Real Estate SEO Requirements</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/qatar/seo-services"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white text-slate-800 font-semibold text-sm border border-slate-200 hover:border-teal-700 hover:text-teal-800 shadow-xs transition-colors"
                >
                  <Search className="w-4 h-4 text-teal-700" />
                  <span>Explore Qatar SEO Hub</span>
                </Link>
              </div>

              {/* Secondary Keywords Badges */}
              <div className="pt-4 border-t border-slate-200/80">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  Specialized Search Focus:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {secondaryKeywords.slice(0, 5).map((kw) => (
                    <span
                      key={kw}
                      className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs text-slate-700 font-medium shadow-2xs"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column: Hero Image (Section 17 Recommendation) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <PropertyImageSlot
                src={heroImgSrc}
                alt="Qatar Real Estate SEO Strategy and Search Visibility Architecture"
                width={1600}
                height={900}
                aspect="aspect-[16/9]"
                priority={true}
                fallbackIcon={Building2}
                badgeText="Qatar Real Estate SEO Architecture"
                caption="Comprehensive real estate search engine visibility, category taxonomy, and buyer journey mapping in Qatar"
              />
            </motion.div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-16 lg:space-y-24">

        {/* Section: Why Real Estate Businesses Need SEO */}
        <section className="space-y-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold uppercase tracking-wider">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
              <span>Industry Challenges &amp; Search Friction</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Real Estate Businesses Need SEO
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Property websites face a particular mix of problems. Inventory changes constantly, pages look alike, and visitors search in very different ways depending on whether they want to buy, rent, invest or lease commercial space. Common issues include:
            </p>
          </div>

          {/* 8 Common Issues Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {whyNeedSeoProblems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-xl border border-slate-200/90 shadow-xs hover:border-teal-400 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-800 flex items-center justify-center border border-teal-100">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Realistic Disclaimer Paragraph */}
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 text-sm sm:text-base leading-relaxed">
            <p>
              SEO can support relevant discovery and qualified enquiries over time. Rankings and leads depend on competition, market demand, website quality and implementation, so we don&rsquo;t promise first-page positions, a fixed number of leads or guaranteed enquiries.
            </p>
          </div>
        </section>

        {/* Section: Real Estate SEO Services We Provide */}
        <section className="space-y-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-900 border border-teal-200 text-xs font-bold uppercase tracking-wider">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-700" />
              <span>Full-Stack Capabilities</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Real Estate SEO Services We Provide
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              The work falls into three broad groups. Technical improvements make the site crawlable and consistent. Content optimization makes pages clear, original and useful. Local search work supports eligible businesses in map and location-based results. Depending on your needs, services can include:
            </p>
          </div>

          {/* 11 Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {servicesWeProvide.map((svc, idx) => {
              const Icon = svc.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs hover:border-teal-500 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center border border-teal-200 group-hover:bg-teal-800 group-hover:text-white transition-colors duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                        {svc.tag}
                      </span>
                    </div>
                    <h3 className="font-bold text-slate-900 text-base group-hover:text-teal-900 transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {svc.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-teal-50/50 border border-teal-100 text-slate-700 text-sm sm:text-base leading-relaxed">
            <p>
              Not every service is needed by every business, and scope varies by website and goals. Some changes, such as template or server work, may need your developers, so we define who does what when scoping. For broader service context, learn more about our foundational{" "}
              <Link
                to="/digital-market/seoservices"
                className="text-teal-800 font-bold underline hover:text-teal-900"
              >
                SEO services
              </Link>{" "}
              and specialized{" "}
              <Link
                to="/qatar/ecommerce-seo-services/"
                className="text-teal-800 font-bold underline hover:text-teal-900"
              >
                e-commerce SEO in Qatar
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Section: Property Listing and Property Detail Page Optimization */}
        <section className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-50 via-white to-teal-50/40 border border-slate-200 shadow-sm space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/80 text-teal-900 text-xs font-bold uppercase tracking-wider">
                <Home className="w-3.5 h-3.5 text-teal-800" />
                <span>Inventory &amp; Listing Quality</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Property Listing and Property Detail Page Optimization
              </h2>
              <div className="space-y-3.5 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  A good property page helps a buyer or tenant decide whether to enquire, and gives search engines enough to understand what the page is about. A page with only a title and a photo does neither.
                </p>
                <p>
                  We look at clear, descriptive titles; original descriptions; property type and location details; verified bedroom, bathroom, size, price and availability information; informative images with accurate alt text; and obvious enquiry or viewing-request options. We also check related-property and category links, canonical tags and duplicate URLs, and how unavailable listings are handled, whether redirected, marked or retained with a clear status.
                </p>
                <p>
                  Templates are fine, but each listing needs genuinely distinct information. We never invent prices, features, yields or ownership conditions; every detail must come from you or another verified source.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <PropertyImageSlot
                src={listingImgSrc}
                alt="Qatar Real Estate Property Detail Page Architecture and On-Page Elements"
                width={1200}
                height={675}
                aspect="aspect-[16/9]"
                fallbackIcon={Home}
                badgeText="Property Listing Optimization"
                caption="Optimized property listing layout showcasing structured specs, images and enquiry options"
              />
            </div>
          </div>
        </section>

        {/* Section: Keyword Research for Qatar's Property Market */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-900 border border-teal-200 text-xs font-bold uppercase tracking-wider">
              <Search className="w-3.5 h-3.5 text-teal-700" />
              <span>Search Intent &amp; Localization</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Keyword Research for Qatar&rsquo;s Property Market
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-slate-700 text-sm sm:text-base leading-relaxed">
            <div className="space-y-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Target className="w-5 h-5 text-teal-700" />
                <span>Intent-Driven Mapping</span>
              </h3>
              <p>
                Real estate keyword research for Qatar starts with intent. Someone searching for a property type in a location wants listings. Someone comparing developers wants project information. A landlord looking for management help wants a service page. Each needs a different page.
              </p>
              <p>
                We cover property-type, location-based, residential and commercial searches, rental and purchase intent, developer and agency service searches, and neighbourhood searches where you genuinely operate. Arabic and English research, competitor search result analysis and intent mapping follow, and pages are prioritized by business relevance and feasibility.
              </p>
            </div>

            <div className="space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Compass className="w-5 h-5 text-teal-700" />
                <span>Fact-Checked &amp; Feasible Targets</span>
              </h3>
              <p>
                Examples such as &ldquo;apartments in Doha&rdquo; or &ldquo;commercial property in Doha&rdquo; are illustrative only, not researched opportunities. We don&rsquo;t quote search volumes or claim an area has a particular level of demand without evidence, and we don&rsquo;t assume you serve every neighbourhood in Qatar.
              </p>
              <div className="pt-2">
                <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                  Key Research Angles:
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 font-medium text-slate-800">
                    Residential (Villas &amp; Apartments)
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 font-medium text-slate-800">
                    Commercial &amp; Office Space
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 font-medium text-slate-800">
                    Rental vs Purchase Intent
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 font-medium text-slate-800">
                    Verified District Searches
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: SEO for Real Estate Developers and Agencies */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-900 border border-teal-200 text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5 text-teal-700" />
              <span>Tailored Priorities</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              SEO for Real Estate Developers and Agencies
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Priorities differ by business model, so we don&rsquo;t apply one template to every property company.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card3D className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-md">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  For Property Developers
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Developers usually need strong project landing pages with verified information, relevant property-type and location pages, construction or completion status where confirmed, FAQs that answer genuine buyer questions, and clear enquiry options with sensible internal links.
                </p>
                <ul className="text-xs sm:text-sm text-slate-600 space-y-2 pt-2 border-t border-slate-100">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-700 shrink-0" />
                    <span>Project master-landing page optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-700 shrink-0" />
                    <span>Verified construction status &amp; handover timelines</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-700 shrink-0" />
                    <span>Floor plan specs and verified project amenities</span>
                  </li>
                </ul>
              </div>
            </Card3D>

            <Card3D className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-md">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  For Agencies and Agents
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Agencies and agents usually need property category pages, individual listings, agent or team profiles where appropriate, service-area pages, and content on buying, selling, leasing or property management that matches what you actually offer.
                </p>
                <ul className="text-xs sm:text-sm text-slate-600 space-y-2 pt-2 border-t border-slate-100">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-700 shrink-0" />
                    <span>Dynamic category and district property hubs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-700 shrink-0" />
                    <span>Fast, accurate listing updates &amp; availability tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-700 shrink-0" />
                    <span>Agent bio optimization &amp; verified service coverage</span>
                  </li>
                </ul>
              </div>
            </Card3D>
          </div>

          <p className="text-xs sm:text-sm text-slate-500 italic">
            We don&rsquo;t imply that any business is licensed, registered or authorized in Qatar unless that is verified, and we avoid investment advice or claims about appreciation and returns.
          </p>
        </section>

        {/* Section: Local SEO and Google Business Profile Optimization */}
        <section className="p-6 sm:p-10 rounded-3xl bg-slate-900 text-white space-y-6">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-800 text-teal-200 text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>Map &amp; Physical Eligibility</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Local SEO and Google Business Profile Optimization
            </h2>
          </div>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              Local SEO for real estate in Qatar can help eligible businesses appear in relevant local search results. It starts with accurate basics: business name, address, phone, categories, services, hours and genuine photos. Reviews from real customers, professional replies and consistency between your website and profile matter too, along with relevant local landing pages and measurement of calls, direction requests and website visits.
            </p>
            <div className="p-4 sm:p-5 rounded-xl bg-slate-800/90 border border-slate-700 text-slate-200">
              <p>
                <strong>Eligibility comes first.</strong> Google Business Profile depends on Google&rsquo;s rules and a real business presence. We don&rsquo;t recommend fake locations, virtual offices presented as staffed premises, duplicate profiles, city profiles without an eligible location, fake or incentivized reviews, or keywords added to the business name. A business without an eligible physical presence shouldn&rsquo;t expect an automatic map listing.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Technical SEO for Property Websites */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-900 border border-teal-200 text-xs font-bold uppercase tracking-wider">
              <Settings className="w-3.5 h-3.5 text-teal-700" />
              <span>Crawl Budget &amp; Parameter Handling</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Technical SEO for Property Websites
            </h2>
          </div>

          <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
            <p>
              Property sites with large or fast-changing inventories create technical problems that smaller sites never see. Search filters for price, bedrooms, type and location can generate thousands of URLs, and not every combination deserves to be indexed.
            </p>
            <p>
              We review crawlability and indexability, XML sitemaps, robots.txt, canonical URLs, redirects and broken links, duplicate listings and parameters, faceted navigation, pagination, JavaScript rendering, orphaned pages, unavailable properties and structured data validation.
            </p>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <p>
                Decisions depend on search demand, page uniqueness, architecture and crawl efficiency. A filtered page for a common, genuinely useful search may deserve indexing, while many others don&rsquo;t. We avoid blanket rules, whether blocking every filter or indexing every location and property combination.
              </p>
            </div>
            <p className="text-xs sm:text-sm text-slate-600">
              Where technical fixes require custom code, our team coordinates seamlessly with your{" "}
              <Link
                to="/development/web-development"
                className="text-teal-800 font-semibold underline hover:text-teal-900"
              >
                property website development
              </Link>{" "}
              engineers.
            </p>
          </div>
        </section>

        {/* Section: Property Website Speed and Mobile Experience */}
        <section className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-white via-slate-50 to-teal-50/50 border border-slate-200 shadow-sm space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-900 text-xs font-bold uppercase tracking-wider">
                <Smartphone className="w-3.5 h-3.5 text-teal-800" />
                <span>Responsive &amp; Mobile Performance</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Property Website Speed and Mobile Experience
              </h2>
              <div className="space-y-3.5 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  Property browsing is image-heavy and often happens on phones, so a slow or awkward mobile experience loses enquiries before anyone reads a description. We review responsive layouts, image dimensions and compression, unnecessary scripts and third-party tools, filter and navigation usability, accessible enquiry forms and buttons, and loading performance against Core Web Vitals.
                </p>
                <p>
                  We test representative templates, such as the homepage, a category page and a listing page, rather than a single URL. Speed improvements can make a site easier to use, but they don&rsquo;t guarantee rankings or conversions, and no Lighthouse score guarantees better SEO results.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <PropertyImageSlot
                src={mobileImgSrc}
                alt="Qatar Real Estate Mobile Browsing and Responsive Search Performance"
                width={1200}
                height={675}
                aspect="aspect-[16/9]"
                fallbackIcon={Smartphone}
                badgeText="Mobile UX & Performance"
                caption="Optimized mobile search filters, fast photo carousels and tap-to-enquire buttons"
              />
            </div>
          </div>
        </section>

        {/* Section: Internal Linking and Property Website Architecture */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-900 border border-teal-200 text-xs font-bold uppercase tracking-wider">
              <Network className="w-3.5 h-3.5 text-teal-700" />
              <span>Information Architecture</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Internal Linking and Property Website Architecture
            </h2>
          </div>

          <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
            <p>
              A clear structure helps visitors move through your inventory and helps search engines understand how pages relate. We map links from the homepage to main categories, categories to listings, location pages to relevant categories, developer pages to their projects, and guides to related services, supported by breadcrumbs and descriptive anchor text.
            </p>

            {/* Interactive Architecture Flow Diagram */}
            <div className="p-6 rounded-2xl bg-slate-900 text-white my-6 shadow-md border border-slate-800">
              <div className="text-xs uppercase font-bold text-teal-400 tracking-wider mb-4 flex items-center gap-2">
                <FolderTree className="w-4 h-4" />
                <span>Example Real Estate Site Hierarchy</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm font-semibold">
                <div className="w-full sm:w-auto px-4 py-3 rounded-xl bg-teal-950 border border-teal-700 text-center text-teal-200 shadow-sm">
                  Homepage
                </div>
                <ArrowRight className="w-4 h-4 text-teal-400 rotate-90 sm:rotate-0 shrink-0" />
                <div className="w-full sm:w-auto px-4 py-3 rounded-xl bg-teal-900 border border-teal-600 text-center text-teal-100 shadow-sm">
                  Properties for Sale
                </div>
                <ArrowRight className="w-4 h-4 text-teal-400 rotate-90 sm:rotate-0 shrink-0" />
                <div className="w-full sm:w-auto px-4 py-3 rounded-xl bg-teal-800 border border-teal-500 text-center text-white shadow-sm">
                  Apartments in Doha
                </div>
                <ArrowRight className="w-4 h-4 text-teal-400 rotate-90 sm:rotate-0 shrink-0" />
                <div className="w-full sm:w-auto px-4 py-3 rounded-xl bg-emerald-700 border border-emerald-500 text-center text-white shadow-sm">
                  Individual Property Listing
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-4 text-center">
                Use this only if your website actually offers those categories and listings.
              </p>
            </div>

            {/* Diagram Image Slot matching Section 17 */}
            <div className="max-w-4xl mx-auto">
              <PropertyImageSlot
                src={architectureImgSrc}
                alt="Qatar Property Portal Site Architecture and Internal Linking Framework"
                width={1200}
                height={675}
                aspect="aspect-[16/9]"
                fallbackIcon={Network}
                badgeText="Property Architecture & Internal Linking"
                caption="Logical property portal architecture supporting deep crawlability and topical authority"
              />
            </div>

            <p>
              We also look for orphaned pages and excessive duplication, and we don&rsquo;t recommend creating hundreds of near-identical location pages just to target keywords.
            </p>
          </div>
        </section>

        {/* Section: Arabic and English SEO Strategy */}
        <section className="p-6 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 space-y-6">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-900 text-xs font-bold uppercase tracking-wider">
              <Globe className="w-3.5 h-3.5 text-teal-800" />
              <span>Bilingual Localization</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Arabic and English SEO Strategy
            </h2>
          </div>

          <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
            <p>
              Whether a property website needs Arabic, English or both depends on who it serves. Not every Qatar-based customer uses the same language, and not every site needs a bilingual structure.
            </p>
            <p>
              Where both are relevant, we plan separate keyword research for each language, natural localization rather than literal translation, accurate property terminology, language-specific titles and descriptions, a suitable URL structure, correct hreflang implementation, links between matching pages and consistent property details across versions. Automatically translated or duplicated low-value pages are avoided.
            </p>
          </div>
        </section>

        {/* Section: Real Estate Content Marketing */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-900 border border-teal-200 text-xs font-bold uppercase tracking-wider">
              <FileText className="w-3.5 h-3.5 text-teal-700" />
              <span>Editorial &amp; Knowledge Assets</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Real Estate Content Marketing
            </h2>
          </div>

          <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
            <p>
              Useful content answers questions that listings can&rsquo;t: how renting differs from buying, what a property type involves, what a commercial space needs, or what an area offers. Depending on your business, this can include buying and renting guides, property-type explanations, location guides for areas you genuinely serve, project and developer information, property management resources and FAQs about your actual services, all linking naturally to relevant listings.
            </p>
            <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 text-slate-800 text-sm">
              <p>
                We stress factual verification and editorial review, and we separate general information from legal or financial advice. We don&rsquo;t fabricate market statistics, legal requirements, ownership rules or forecasts. Where legal, regulatory or ownership information appears, it should be checked against official Qatar sources.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Our Real Estate SEO Process */}
        <section className="space-y-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-900 border border-teal-200 text-xs font-bold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-teal-700" />
              <span>Step-by-Step Execution</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Real Estate SEO Process
            </h2>
          </div>

          {/* 10 Process Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {processSteps.map((stepItem) => (
              <div
                key={stepItem.step}
                className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-teal-600 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-black text-teal-800 block mb-2 font-mono">
                    {stepItem.step}
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    {stepItem.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs sm:text-sm text-slate-600 italic">
            Priorities and timelines depend on the website&rsquo;s condition, inventory size, development resources and competition. We don&rsquo;t guarantee a ranking or result within a fixed number of days.
          </p>
        </section>

        {/* Section: SEO Performance Tracking and Reporting */}
        <section className="p-6 sm:p-10 rounded-3xl bg-slate-900 text-white space-y-6">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-800 text-teal-200 text-xs font-bold uppercase tracking-wider">
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Measurement &amp; Attribution</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              SEO Performance Tracking and Reporting
            </h2>
          </div>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              Visibility, visits, enquiries and completed transactions are different things, so we report them separately. Where access and tracking allow, we review organic clicks and impressions, queries and average positions, indexed and excluded pages, listing and category performance, organic landing page traffic, form submissions, click-to-call actions, viewing requests, lead quality and source attribution, technical issue resolution and Core Web Vitals.
            </p>
            <div className="p-5 rounded-xl bg-slate-800/90 border border-slate-700 text-slate-200">
              <p>
                Google Search Console shows how the site appears in search, while GA4 shows what visitors do afterwards, provided enquiry events are configured and accessible. Without that setup, attribution is guesswork, and we would flag it early.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Frequently Asked Questions */}
        <section className="space-y-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-900 border border-teal-200 text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5 text-teal-700" />
              <span>Common Inquiries</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Clear answers regarding Qatar real estate search engine optimization, scoping, and performance measurement.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-3">
            {faqList.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs transition-colors hover:border-teal-400"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-teal-900 transition-colors"
                >
                  <span>
                    {idx + 1}. {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-teal-700 shrink-0 transition-transform duration-300 ${
                      openFaqIndex === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaqIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Contact DigLip7 Final CTA */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-teal-900 via-teal-950 to-slate-950 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl space-y-5 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-800/80 text-teal-200 border border-teal-700 text-xs font-semibold uppercase tracking-wider">
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Start the Conversation</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Contact DigLip7
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              If you are a developer, agency, agent or other property business targeting Qatar, we&rsquo;d be glad to talk. A discussion can help identify your website&rsquo;s challenges, relevant search opportunities, technical priorities and business objectives, so any recommendations fit your situation.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-white text-teal-950 font-bold text-sm sm:text-base hover:bg-teal-50 shadow-lg hover:shadow-xl transition-all duration-200 group"
              >
                <span>Discuss Your Real Estate SEO Requirements</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <p className="text-xs text-slate-400 pt-2">
              Use the contact form and any contact details already verified on the website. Don&rsquo;t add a phone number, email, Qatar address, free-audit offer or promotion unless confirmed.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default QatarRealEstateSEO;
