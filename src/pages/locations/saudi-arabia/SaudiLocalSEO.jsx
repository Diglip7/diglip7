import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../../../components/SEO";
import {
  MapPin,
  Search,
  Star,
  Building2,
  CheckCircle,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Home,
  Sparkles,
  RefreshCw,
  Target,
  Check,
  XCircle,
  Info,
  Globe,
  SlidersHorizontal,
  Compass,
  FileCheck,
  ShieldCheck,
  Smartphone,
  Languages,
  Store,
  Phone,
  Clock,
  Navigation,
  MessageSquare,
  AlertTriangle,
  Layers,
  BarChart3,
  Users,
  Map,
  Compass as CompassIcon,
} from "lucide-react";
import { FaWhatsapp, FaGoogle } from "react-icons/fa";

// Image Paths - Image files removed per requirement; image section containers preserved
const heroImgSrc = "";
const heroImgFallback = "";

const gbpImgSrc = "";
const gbpImgFallback = "";

const citationImgSrc = "";
const citationImgFallback = "";

const multiLocationImgSrc = "";
const multiLocationImgFallback = "";

const reviewImgSrc = "";
const reviewImgFallback = "";

// Image Section Container Component (Preserves layout, dimensions & styling without loading external images)
const LocalSEOImageSlot = ({
  src = "",
  fallbackSrc = "",
  alt = "",
  width = 1200,
  height = 675,
  aspect = "aspect-[16/9]",
  className = "",
  priority = false,
  fallbackIcon = MapPin,
  badgeText = "",
}) => {
  const Icon = fallbackIcon;

  return (
    <div
      className={`relative w-full rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-50/70 via-slate-50 to-teal-50/60 border border-emerald-200/90 shadow-md flex items-center justify-center ${aspect} ${className}`}
    >
      <div className="p-6 sm:p-8 text-center text-sm font-medium text-slate-800 select-none flex flex-col items-center justify-center gap-3.5 w-full h-full bg-gradient-to-b from-white/95 via-emerald-50/40 to-teal-50/50 border-2 border-dashed border-emerald-300/80 rounded-3xl relative overflow-hidden">
        <div className="absolute inset-0 bg-radial from-emerald-100/30 to-transparent pointer-events-none" />
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-600 text-white flex items-center justify-center shadow-lg relative z-10">
          <Icon className="w-8 h-8" />
        </div>
        <div className="space-y-1.5 max-w-sm relative z-10">
          <span className="block leading-snug text-xs sm:text-sm font-bold text-slate-900">
            {alt}
          </span>
          {badgeText && (
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-100/90 text-emerald-800 text-xs font-semibold border border-emerald-200">
              {badgeText}
            </span>
          )}
          <span className="text-[11px] text-slate-500 block pt-1 font-medium">
            Image Section &bull; Ready for Media
          </span>
        </div>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// DATA STRUCTURES (Strictly Verbatim from Prompt)
// ---------------------------------------------------------------------------

const breadcrumbTrail = [
  { label: "Home", href: "/" },
  { label: "Saudi Arabia", href: "/saudi-arabia/seo-services" },
  { label: "Local SEO Services", href: "/saudi-arabia/local-seo-services/" },
];

const whatIsLocalSEOPoints = [
  {
    title: "Keeping your Google Business Profile complete and accurate",
    desc: "Maintaining verified categories, services, opening hours, contact details, and photos so searchers see exact facts immediately.",
    icon: FaGoogle,
  },
  {
    title: "Targeting the searches nearby customers actually use",
    desc: "Identifying neighbourhood, district, and city-specific phrasing used by local buyers ready to visit or call.",
    icon: Search,
  },
  {
    title: "Building useful pages for the services and locations you cover",
    desc: "Creating distinct, informative landing pages for verified physical areas without mass-producing boilerplate duplicate content.",
    icon: Building2,
  },
  {
    title: "Keeping your name, address, and phone number consistent",
    desc: "Auditing and harmonizing NAP information across directories, maps, and social platforms so search engines trust your data.",
    icon: Phone,
  },
  {
    title: "Earning and answering genuine customer reviews",
    desc: "Establishing ethical processes to gather real customer feedback and responding promptly and professionally to all feedback.",
    icon: Star,
  },
  {
    title: "Making your website easy to use on a phone",
    desc: "Optimizing mobile page speed, tap targets, click-to-call buttons, and fast turn-by-turn directions for shoppers on the go.",
    icon: Smartphone,
  },
];

const whyMattersSaudiPoints = [
  {
    title: "Maps are often the first stop",
    desc: "People compare nearby options quickly on Google Maps and local 3-packs before visiting a website or showroom.",
    icon: Map,
    badge: "First Impression",
  },
  {
    title: "Wrong details lose customers",
    desc: "An outdated phone number, wrong pin location, or incorrect closing time sends frustrated shoppers straight to a competitor.",
    icon: AlertTriangle,
    badge: "Immediate Churn",
  },
  {
    title: "Language matters across searches",
    desc: "Customers may search in Arabic, English, or both, using different regional terminology and colloquial service names.",
    icon: Languages,
    badge: "Bilingual Search",
  },
  {
    title: "Reviews shape customer trust",
    desc: "Recent, honest feedback and attentive business replies reassure high-intent buyers making rapid visit decisions.",
    icon: MessageSquare,
    badge: "Social Proof",
  },
  {
    title: "Mobile comes first",
    desc: "Many local searches happen on a phone, often on the move across busy commercial hubs in Riyadh, Jeddah, and Khobar.",
    icon: Navigation,
    badge: "On-the-Move",
  },
];

const localServicesList = [
  {
    title: "Local SEO Audit",
    desc: "We review your Google Business Profile, listings, website, reviews, and local search visibility against nearby competitors. Depth depends on your business size, number of locations, and the access we have.",
    icon: FileCheck,
    tag: "Diagnostic Foundation",
  },
  {
    title: "Google Business Profile Optimization",
    desc: "We help you choose accurate categories, list services, add correct hours and contact details, upload useful photos, and post updates. It supports local visibility, but it's one factor among many and doesn't guarantee a ranking.",
    icon: FaGoogle,
    tag: "Map Presence",
  },
  {
    title: "Local Keyword Research",
    desc: "We look at how people in your area describe what you offer, including service terms, neighbourhood and city references, and Arabic and English variations, then weigh intent and competition.",
    icon: Search,
    tag: "Geographic Intent",
  },
  {
    title: "Local Landing Page Optimization",
    desc: "Useful location or service pages can help customers and search engines understand where and what you serve. We avoid near-duplicate city pages created only to repeat place names, and we only create pages for areas you genuinely serve.",
    icon: Building2,
    tag: "High-Intent Pages",
  },
  {
    title: "Citation and Listing Management",
    desc: "We check that your business name, address, phone number, hours, and website match across relevant directories, and fix inconsistencies where you can edit them. We can't promise control over listings you don't own.",
    icon: Phone,
    tag: "NAP Consistency",
  },
  {
    title: "Review Management",
    desc: "We help you ask for honest feedback and reply professionally. We never recommend fake reviews, review gating, or incentives for reviews.",
    icon: Star,
    tag: "Ethical Feedback",
  },
  {
    title: "Local On-Page and Technical SEO",
    desc: "Clear titles, headings, service information, contact details, mobile usability, page speed, and local structured data where it fits your site.",
    icon: Compass,
    tag: "Technical Health",
  },
  {
    title: "Local Content Strategy",
    desc: "FAQs, service guides, and area information that answer real customer questions, written naturally for the people you want to reach.",
    icon: MessageSquare,
    tag: "Local Relevance",
  },
  {
    title: "Local SEO Reporting",
    desc: "We track profile views and actions, calls, direction requests, website visits, and tracked enquiries where measurement is set up, without crediting local SEO for every sale.",
    icon: BarChart3,
    tag: "Clear Metrics",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Understand Your Business",
    desc: "Services, service area, locations, languages, and specific local growth goals.",
    icon: Store,
  },
  {
    step: "02",
    title: "Audit",
    desc: "Profile, listings, reviews, website, and local competitors in your service radius.",
    icon: Search,
  },
  {
    step: "03",
    title: "Prioritize",
    desc: "Tasks ranked by value, effort, and your priorities for maximum near-term impact.",
    icon: SlidersHorizontal,
  },
  {
    step: "04",
    title: "Optimize",
    desc: "Profile details, local pages, listings, and on-page technical elements.",
    icon: Target,
  },
  {
    step: "05",
    title: "Build Trust Signals",
    desc: "Accurate listings, honest review practices, and genuinely useful local content.",
    icon: ShieldCheck,
  },
  {
    step: "06",
    title: "Monitor and Refine",
    desc: "We review the data and adjust. Results depend on competition, location, starting point, and demand.",
    icon: RefreshCw,
  },
];

const businessTypeApproaches = [
  {
    id: "clinics",
    name: "Clinics and Healthcare",
    icon: ShieldCheck,
    focus: "Specialties, Doctor Profiles & Patient Privacy",
    approach:
      "Clinics and healthcare businesses require accurate services and hours, patient-friendly information, and care with advertising rules and privacy. We structure department listings and verified physician details ethically.",
    keyPoints: [
      "Exact medical specialties mapped to verified Google categories",
      "Departmental phone numbers and direct appointment scheduling links",
      "Careful alignment with Saudi healthcare marketing regulations",
      "Clear clinic parking, accessibility, and emergency guidance",
    ],
  },
  {
    id: "restaurants",
    name: "Restaurants and Cafes",
    icon: Store,
    focus: "Menus, Dining Hours & Visual Menus",
    approach:
      "Restaurants and cafes thrive on menus, opening hours, photos, and timely review replies. We optimize dining category tags, seating hours during Ramadan, and photo galleries showcasing authentic dishes.",
    keyPoints: [
      "Current digital menu integration and dietary labeling",
      "Special operating hours for weekends and regional holidays",
      "High-resolution interior, exterior, and dish photography",
      "Prompt, gracious replies to customer dining reviews",
    ],
  },
  {
    id: "retail",
    name: "Retail Stores & Showrooms",
    icon: Store,
    focus: "In-Store Stock, Showrooms & Parking",
    approach:
      "Retail stores need accurate stock and store information, clear directions, and mall or district location indicators so customers reach your physical doors effortlessly.",
    keyPoints: [
      "Precise map pin placement inside shopping malls or retail parks",
      "Catalog highlights showing popular in-store product lines",
      "Store opening hours, curbside pickup, and payment methods",
      "Turn-by-turn driving directions from major highway exits",
    ],
  },
  {
    id: "realestate",
    name: "Real Estate Agencies",
    icon: Building2,
    focus: "Neighborhood Hubs & Broker Licensing",
    approach:
      "Real estate agencies benefit from area pages, listing accuracy, and enquiry handling. We develop district-focused guides for neighborhoods where your agents actively operate.",
    keyPoints: [
      "District and neighborhood landing pages (e.g., Al Malqa, Al Olaya)",
      "Accurate broker contact information and office consultation hours",
      "Clear agency licensing details and regulatory compliance",
      "Quick inquiry forms connected to your local agent roster",
    ],
  },
  {
    id: "homeservices",
    name: "Home and Professional Services",
    icon: CompassIcon,
    focus: "Service Radii & Rapid Emergency Response",
    approach:
      "Home and professional services depend on clear service areas, contact details, and booking options. Whether you operate a plumbing company or law practice, we define your service boundaries cleanly.",
    keyPoints: [
      "Well-defined service-area business (SAB) radius settings",
      "Direct click-to-call mobile buttons for urgent service requests",
      "Verified customer testimonial frameworks and case overviews",
      "Clear pricing models, warranties, and dispatch timelines",
    ],
  },
];

const commonTroubleSpots = [
  {
    issue: "Incomplete or inaccurate profiles",
    fix: "Complete all profile fields including secondary categories, attributes, products, and verified hours.",
  },
  {
    issue: "Wrong or missing business categories",
    fix: "Select the most accurate primary category matching core revenue and add specific secondary categories.",
  },
  {
    issue: "Inconsistent name, address, and phone details",
    fix: "Standardize your NAP format across your website footer, Google Business Profile, and regional directories.",
  },
  {
    issue: "Duplicate map listings",
    fix: "Identify, merge, or remove unauthorized and defunct pin locations that split your local authority.",
  },
  {
    issue: "Few or unanswered reviews",
    fix: "Establish an ethical post-service review request sequence and reply to all positive and critical reviews.",
  },
  {
    issue: "Thin or duplicated location pages",
    fix: "Enrich each location page with unique staff profiles, directions, local reviews, and distinct neighborhood content.",
  },
  {
    issue: "Slow mobile landing pages",
    fix: "Compress local gallery images, remove unnecessary scripts, and ensure mobile click-to-call triggers instantly.",
  },
  {
    issue: "Unclear Arabic and English language targeting",
    fix: "Implement clean dual-language profile fields and localized website content reflecting authentic local queries.",
  },
];

const faqs = [
  {
    q: "What is a local SEO service?",
    a: "It's the ongoing work of helping a business appear when nearby customers search for what it offers. That typically covers Google Business Profile, local keywords, location pages, listings, reviews, and tracking, tailored to your business and service area.",
  },
  {
    q: "How can local SEO help businesses in Saudi Arabia?",
    a: "It can help people searching near you find accurate details, directions, and reviews before they get in touch. That may bring more relevant enquiries and visits, though rankings, calls, and sales can't be guaranteed.",
  },
  {
    q: "How much do local SEO services cost in Saudi Arabia?",
    a: "Cost depends on the number of locations, competition, current profile and listing condition, content needs, language requirements, and reporting. We'd rather quote after reviewing your business than publish generic prices that won't fit.",
  },
  {
    q: "How long does local SEO take to show results?",
    a: "There's no fixed timeline. Profile and listing updates can be made quickly, but search engines and competition determine how visibility changes. We set expectations after an audit rather than promising dates.",
  },
  {
    q: "What is Google Business Profile optimization?",
    a: "It means keeping your profile complete, accurate, and relevant: correct categories, services, hours, contact details, photos, and regular updates. It supports local visibility but is only one of several factors, and it doesn't guarantee a ranking.",
  },
  {
    q: "Can a business with multiple locations use local SEO?",
    a: "Yes. Each location needs its own accurate profile and listing details, plus a useful location page where appropriate. A shared framework keeps standards consistent while each branch's local priorities are handled separately.",
  },
  {
    q: "Does local SEO guarantee a top Google Maps ranking?",
    a: "No. Local rankings depend on relevance, distance, prominence, and competition, and they can vary by searcher and location. No honest agency can promise a particular position.",
  },
  {
    q: "Why does NAP consistency matter?",
    a: "NAP means name, address, and phone number. When these details match across your website, profile, and directories, customers and search engines get a clearer, more trustworthy picture of your business.",
  },
  {
    q: "Do reviews affect local search visibility?",
    a: "Genuine reviews can influence how customers see your business and are one part of local visibility. We recommend asking honestly for feedback and replying professionally, never buying or faking reviews.",
  },
  {
    q: "Should my local pages be in Arabic, English, or both?",
    a: "It depends on who your customers are and how they search. Some businesses suit Arabic, some English, and many a carefully managed mix. We'd research real search behaviour before deciding.",
  },
  {
    q: "Can a service-area business without a storefront use local SEO?",
    a: "Often yes. Service-area businesses can define the areas they serve and build relevant pages and profile details, subject to platform guidelines about addresses. The approach differs from that of a storefront business.",
  },
  {
    q: "How can I get started with DigLip7?",
    a: "Contact DigLip7 and tell us about your business type, locations, current profile and listings, and goals. We'll discuss whether an audit, a project, or ongoing support makes sense.",
  },
];

const SaudiLocalSEO = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [faqSearch, setFaqSearch] = useState("");
  const [selectedSector, setSelectedSector] = useState("clinics");

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.q.toLowerCase().includes(faqSearch.toLowerCase()) ||
      faq.a.toLowerCase().includes(faqSearch.toLowerCase())
  );

  const pageUrl = "https://diglip7.com/saudi-arabia/local-seo-services/";

  /**
   * TECHNICAL SEO CODE FOR THE DEVELOPER:
   * Client Location Page LocalBusiness Schema Reference Template:
   * (For reference implementation on client location pages; fill with verified details)
   *
   * {
   *   "@context": "https://schema.org",
   *   "@type": "LocalBusiness",
   *   "@id": "[location page URL]#localbusiness",
   *   "name": "[Business name exactly as on the profile]",
   *   "url": "[Location page URL]",
   *   "image": "[Business image URL]",
   *   "telephone": "[Phone with country code]",
   *   "address": {
   *     "@type": "PostalAddress",
   *     "streetAddress": "[Street address]",
   *     "addressLocality": "[City]",
   *     "addressRegion": "[Region]",
   *     "postalCode": "[Postal code]",
   *     "addressCountry": "SA"
   *   },
   *   "geo": { "@type": "GeoCoordinates", "latitude": "[Latitude]", "longitude": "[Longitude]" },
   *   "openingHoursSpecification": [
   *     {
   *       "@type": "OpeningHoursSpecification",
   *       "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
   *       "opens": "09:00",
   *       "closes": "18:00"
   *     }
   *   ],
   *   "sameAs": ["[Google Business Profile URL]", "[Social profile URL]"]
   * }
   */

  // Structured Data (JSON-LD) in unified @graph block
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://diglip7.com/#organization",
        name: "DigLip7 Tech Pvt Ltd",
        alternateName: "DigLip7",
        url: "https://diglip7.com/",
        logo: "https://diglip7.com/images/Logo.jpg",
        sameAs: [
          "https://www.linkedin.com/company/diglip7?originalSubdomain=in",
          "https://www.facebook.com/DigLip7/",
          "https://www.instagram.com/diglip7?stkn=a2RyNmU2ZDMzMHVt",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: "Admin@diglip7.com",
          telephone: "+919650608788",
          availableLanguage: ["English", "Arabic"],
        },
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Local SEO Services in Saudi Arabia",
        description:
          "Local SEO services in Saudi Arabia from DigLip7: Google Business Profile optimization, local keyword research, listing accuracy, review handling, and reporting.",
        inLanguage: "en",
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://diglip7.com/#website",
        },
        about: {
          "@id": `${pageUrl}#service`,
        },
        breadcrumb: {
          "@id": `${pageUrl}#breadcrumb`,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: "https://diglip7.com/images/local-seo-services-saudi-arabia.webp",
          caption:
            "Local SEO and Google Business Profile optimization for businesses in Saudi Arabia",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://diglip7.com/#website",
        url: "https://diglip7.com/",
        name: "DigLip7",
        publisher: {
          "@id": "https://diglip7.com/#organization",
        },
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Local SEO Service in Saudi Arabia",
        serviceType: "Local search engine optimization",
        description:
          "Local SEO audits, Google Business Profile optimization, local keyword research, local landing pages, listing accuracy, review handling and reporting. Scope is agreed after reviewing the business.",
        provider: {
          "@id": "https://diglip7.com/#organization",
        },
        areaServed: {
          "@type": "Country",
          name: "Saudi Arabia",
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
            name: "Saudi Arabia",
            item: "https://diglip7.com/saudi-arabia/seo-services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Local SEO Services",
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

  const currentSector =
    businessTypeApproaches.find((item) => item.id === selectedSector) ||
    businessTypeApproaches[0];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-emerald-500 selection:text-white pt-20">
      {/* Dynamic SEO Meta, Hreflang, Canonical, OpenGraph, Twitter, and Schema */}
      <SEO
        title="Local SEO Services in Saudi Arabia | DigLip7"
        exactTitle={true}
        description="Help nearby customers find you with local SEO services in Saudi Arabia. Google Business Profile, listings, reviews, and local pages with DigLip7."
        canonical={pageUrl}
        keywords="Local SEO Service in Saudi Arabia, local SEO services Saudi Arabia, local SEO agency Saudi Arabia, local search engine optimization Saudi Arabia, Google Business Profile optimization Saudi Arabia, Google Maps SEO Saudi Arabia, local keyword research Saudi Arabia, local landing page optimization, local SEO audit services, local citation building Saudi Arabia, NAP consistency services, Google review management, local competitor analysis, multi-location SEO"
        robots="index, follow, max-image-preview:large"
        hreflangs={[
          { hreflang: "en-sa", href: pageUrl },
          { hreflang: "x-default", href: pageUrl },
        ]}
        ogType="website"
        ogLocale="en_SA"
        ogTitle="Local SEO Services in Saudi Arabia | DigLip7"
        ogDescription="Google Business Profile, listings, reviews, and local pages for businesses that serve nearby customers."
        ogUrl={pageUrl}
        ogImage="https://diglip7.com/images/local-seo-services-saudi-arabia.webp"
        ogImageAlt="Local SEO and Google Business Profile optimization for businesses in Saudi Arabia"
        twitterCard="summary_large_image"
        twitterTitle="Local SEO Services in Saudi Arabia | DigLip7"
        twitterDescription="Google Business Profile, listings, reviews, and local pages for businesses that serve nearby customers."
        twitterImage="https://diglip7.com/images/local-seo-services-saudi-arabia.webp"
        twitterImageAlt="Local SEO and Google Business Profile optimization for businesses in Saudi Arabia"
        schema={structuredData}
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-slate-50 border-b border-slate-200/80 py-3 px-4 sm:px-6 lg:px-8">
        <nav
          aria-label="Breadcrumb"
          className="max-w-7xl mx-auto flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-slate-600"
        >
          {breadcrumbTrail.map((crumb, i) => (
            <span key={crumb.label} className="flex items-center gap-1.5">
              {i === 0 ? (
                <Home className="w-3.5 h-3.5 text-emerald-700" />
              ) : (
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              )}
              {i === breadcrumbTrail.length - 1 ? (
                <span className="font-semibold text-emerald-950">{crumb.label}</span>
              ) : (
                <Link to={crumb.href} className="hover:text-emerald-700 transition-colors">
                  {crumb.label}
                </Link>
              )}
            </span>
          ))}
        </nav>
      </div>

      {/* Hero Header Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-emerald-50/70 via-slate-50 to-teal-50/60 border-b border-emerald-100/80 py-16 sm:py-20 lg:py-24">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading & Verbatim Text */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/90 text-emerald-900 border border-emerald-200 text-xs sm:text-sm font-semibold tracking-wide">
                <MapPin className="w-4 h-4 text-emerald-700" />
                <span>Local SEO &bull; Saudi Arabia</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 leading-tight">
                Local SEO Services in Saudi Arabia for Businesses That Serve Nearby Customers
              </h1>

              {/* Verbatim Intro Paragraphs */}
              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0 text-left">
                <p>
                  When someone searches for a dentist, a restaurant, a plumber, or a showroom near them, they rarely scroll far. They look at the map, check a few reviews, glance at opening hours, and decide. If your business isn't there, or your details are wrong, the customer simply picks someone else.
                </p>
                <p>
                  A <strong>Local SEO Service in Saudi Arabia</strong> helps your business show up accurately and convincingly in those moments. <strong className="text-emerald-900 font-semibold">DigLip7</strong> is a digital marketing company that can support you with Google Business Profile optimization, local keyword research, location pages, listing accuracy, review handling, and reporting. The right mix depends on your business type, service area, languages, and competition.
                </p>
                <p className="bg-emerald-50/80 border-l-4 border-emerald-600 p-3.5 rounded-r-xl text-slate-800 text-sm font-medium">
                  We can't promise a top map position, and nobody honestly can. What we can offer is careful work on the things that are within your control.
                </p>
              </div>

              {/* Action Buttons */}
              <motion.div
                className="flex flex-wrap justify-center lg:justify-start items-center gap-3 sm:gap-4 pt-2"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link to="/contact">
                  <motion.button
                    className="group px-7 py-4 bg-emerald-700 hover:bg-emerald-800 text-white text-sm sm:text-base font-semibold rounded-full shadow-lg hover:shadow-emerald-600/25 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Discuss Your Local SEO Strategy</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>

                <a
                  href="https://wa.me/919650608788?text=Hello%20DigLip7%20Team%2C%20I%20would%20like%20to%20discuss%20Local%20SEO%20services%20in%20Saudi%20Arabia."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    className="px-6 py-4 bg-white text-emerald-950 border-2 border-emerald-600 text-sm sm:text-base font-semibold rounded-full shadow-xs hover:bg-emerald-50 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaWhatsapp className="w-5 h-5 text-emerald-600" />
                    <span>WhatsApp Consultation</span>
                  </motion.button>
                </a>
              </motion.div>

              {/* Consultation Teaser */}
              <div className="text-xs text-slate-500 pt-1">
                Serving local businesses across Riyadh, Jeddah, Dammam, and the Eastern Province.{" "}
                <Link
                  to="/contact"
                  className="text-emerald-700 underline font-semibold hover:text-emerald-900 transition-colors"
                >
                  Contact DigLip7
                </Link>{" "}
                to get started.
              </div>
            </div>

            {/* Right Column: Hero Visual Container & Local Map Card */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="w-full max-w-lg space-y-4">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white">
                  <LocalSEOImageSlot
                    src={heroImgSrc}
                    fallbackSrc={heroImgFallback}
                    alt="Local SEO and Google Business Profile optimization for businesses in Saudi Arabia"
                    width={1200}
                    height={675}
                    aspect="aspect-[16/9]"
                    priority={true}
                    fallbackIcon={MapPin}
                    badgeText="Google Maps &amp; Local Pack"
                  />
                </div>

                {/* Micro Local Pack Card */}
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 border border-slate-200/90 shadow-md space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Local Search Signals
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                      Riyadh &bull; Jeddah &bull; Dammam
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center pt-1">
                    <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <div className="text-base font-black text-emerald-800">GBP</div>
                      <div className="text-[10px] font-medium text-slate-500">Profile Hygiene</div>
                    </div>
                    <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <div className="text-base font-black text-teal-800">NAP</div>
                      <div className="text-[10px] font-medium text-slate-500">100% Consistent</div>
                    </div>
                    <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <div className="text-base font-black text-amber-700">Reviews</div>
                      <div className="text-[10px] font-medium text-slate-500">Authentic Feedback</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Section 1: What Is Local SEO? */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
              <Compass className="w-3.5 h-3.5 text-emerald-600" />
              <span>Foundation &amp; Mechanics</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
              What Is Local SEO?
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              Local SEO is about being found by people in a specific place who are ready to act. It usually involves:
            </p>
          </div>

          {/* 6 Core Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatIsLocalSEOPoints.map((point) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={point.title}
                  className="bg-slate-50/70 hover:bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                  whileHover={{ y: -3 }}
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                        {point.title}
                      </h3>
                      <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-200/60 text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Local Signal Pillar</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Contrast Box: Local SEO vs General SEO */}
          <div className="bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-400/30">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Strategic Scope Comparison</span>
                </div>
                <h3 className="text-2xl font-bold leading-tight">
                  How Local SEO Overlaps with General SEO
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  It overlaps with general SEO, but the goal is narrower: relevant visibility for local customers, not just traffic from anywhere. While traditional organic search ranks pages across global or national topics, local SEO optimizes for proximate physical intent, driving customers through your front door or onto phone inquiries.
                </p>
              </div>
              <div className="lg:col-span-4 flex justify-center">
                <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center space-y-2 max-w-xs">
                  <Navigation className="w-8 h-8 text-emerald-400 mx-auto" />
                  <div className="text-sm font-bold text-white">Actionable Local Intent</div>
                  <div className="text-xs text-slate-300">Turning searches into calls, directions, and visits</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Why Local SEO Matters in Saudi Arabia */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
              <Globe className="w-3.5 h-3.5 text-emerald-600" />
              <span>Saudi Market Context</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
              Why Local SEO Matters in Saudi Arabia
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              Many customers look up a business online before they visit or call. We can't speak for every shopper in the Kingdom, but a few points apply to most local businesses:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyMattersSaudiPoints.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                        {item.badge}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm mt-2.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Factual Integrity Disclaimer */}
          <div className="p-4 bg-emerald-50/60 rounded-2xl border border-emerald-200/80 text-xs text-slate-600 text-center sm:text-left flex items-center gap-3">
            <Info className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>
              <strong>Factual Note:</strong> We haven't quoted market statistics because we haven't verified any. Our recommendations focus strictly on confirmed platform mechanics, customer clarity, and search engine best practices.
            </span>
          </div>
        </div>
      </section>

      {/* Section 3: Our Local SEO Services in Saudi Arabia */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
              <Layers className="w-3.5 h-3.5 text-emerald-600" />
              <span>Full Service Scope</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
              Our Local SEO Services in Saudi Arabia
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              Here's what local SEO support can include. We confirm the exact scope with you based on your location count and current visibility.
            </p>
          </div>

          {/* 9 Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {localServicesList.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  className="bg-slate-50/60 hover:bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                  whileHover={{ y: -4 }}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-full">
                        {service.tag}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-200/70 flex items-center justify-between text-xs font-medium text-slate-500">
                    <span>Local Module {index < 9 ? `0${index + 1}` : index + 1}</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Dedicated Feature Spotlights with Recommended Images */}
          <div className="space-y-10 pt-6">
            {/* Spotlight 1: Google Business Profile Optimization */}
            <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-xs">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
                    <FaGoogle className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Google Business Profile Section</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                    Google Business Profile Optimization: Categories, Services &amp; Accuracy
                  </h3>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    We help you choose accurate categories, list services, add correct hours and contact details, upload useful photos, and post updates. It supports local visibility, but it's one factor among many and doesn't guarantee a ranking.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 bg-white rounded-xl border border-slate-200/90 text-xs text-slate-700 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Accurate primary &amp; secondary category selection</span>
                    </div>
                    <div className="p-3.5 bg-white rounded-xl border border-slate-200/90 text-xs text-slate-700 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Regular updates, geotagged photos &amp; special hours</span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <LocalSEOImageSlot
                    src={gbpImgSrc}
                    fallbackSrc={gbpImgFallback}
                    alt="Reviewing business profile details for local search visibility"
                    aspect="aspect-[16/10]"
                    fallbackIcon={FaGoogle}
                    badgeText="Business Profile Optimization"
                  />
                </div>
              </div>
            </div>

            {/* Spotlight 2: Citation and Listing Accuracy */}
            <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-xs">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 order-2 lg:order-1">
                  <LocalSEOImageSlot
                    src={citationImgSrc}
                    fallbackSrc={citationImgFallback}
                    alt="Checking business name, address, and phone consistency across directories"
                    aspect="aspect-[16/10]"
                    fallbackIcon={Phone}
                    badgeText="Citation Consistency"
                  />
                </div>
                <div className="lg:col-span-7 space-y-4 order-1 lg:order-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
                    <Phone className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Citation &amp; NAP Section</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                    Citation and Listing Management: Unifying Name, Address &amp; Phone
                  </h3>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    We check that your business name, address, phone number, hours, and website match across relevant directories, and fix inconsistencies where you can edit them. We can't promise control over listings you don't own.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 bg-white rounded-xl border border-slate-200/90 text-xs text-slate-700 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Consistent NAP format across regional directories</span>
                    </div>
                    <div className="p-3.5 bg-white rounded-xl border border-slate-200/90 text-xs text-slate-700 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Removal of duplicate, defunct, or conflicting pins</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Spotlight 3: Review Management */}
            <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-xs">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
                    <Star className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Review Management Section</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                    Review Management: Ethical Feedback &amp; Professional Responses
                  </h3>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    We help you ask for honest feedback and reply professionally. We never recommend fake reviews, review gating, or incentives for reviews. Authentic feedback builds long-term customer trust and clarifies service quality.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 bg-white rounded-xl border border-slate-200/90 text-xs text-slate-700 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Professional response templates for praise and criticism</span>
                    </div>
                    <div className="p-3.5 bg-white rounded-xl border border-slate-200/90 text-xs text-slate-700 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Strict compliance with Google anti-review-gating rules</span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <LocalSEOImageSlot
                    src={reviewImgSrc}
                    fallbackSrc={reviewImgFallback}
                    alt="Planning professional responses to customer reviews"
                    aspect="aspect-[16/10]"
                    fallbackIcon={Star}
                    badgeText="Review Management Strategy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Our Local SEO Process */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
              <RefreshCw className="w-3.5 h-3.5 text-emerald-600" />
              <span>Step-by-Step Flow</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
              Our Local SEO Process
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              Every local campaign follows a clear, prioritized methodology built around how nearby customers actually find you:
            </p>
          </div>

          {/* 6 Step Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((stepItem) => {
              const Icon = stepItem.icon;
              return (
                <div
                  key={stepItem.title}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black text-emerald-700 tracking-wider">
                        {stepItem.step}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 leading-snug">
                        {stepItem.title}
                      </h3>
                      <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                        {stepItem.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-medium text-slate-400">
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Systematic Execution</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-4 bg-white rounded-2xl border border-slate-200 text-xs text-slate-600 flex items-center gap-2.5">
            <Info className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              <strong>Execution Note:</strong> Results depend on competition, location, your starting point, and customer demand.
            </span>
          </div>
        </div>
      </section>

      {/* Section 5: Local SEO for Different Business Types */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
              <Building2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Sector-Specific Strategies</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
              Local SEO for Different Business Types
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              These are example approaches, not claims that DigLip7 has delivered results in every sector. Priorities shift based on customer behavior:
            </p>
          </div>

          {/* Interactive Sector Switcher */}
          <div className="flex flex-wrap gap-2 border-b border-slate-200/80 pb-4">
            {businessTypeApproaches.map((sector) => {
              const Icon = sector.icon;
              const isSelected = selectedSector === sector.id;
              return (
                <button
                  key={sector.id}
                  onClick={() => setSelectedSector(sector.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                    isSelected
                      ? "bg-emerald-700 text-white shadow-sm"
                      : "bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{sector.name}</span>
                </button>
              );
            })}
          </div>

          {/* Selected Industry Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSector.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-50/70 rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-sm"
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                    Sector Dynamics &bull; {currentSector.focus}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                    {currentSector.name}
                  </h3>
                </div>

                <blockquote className="p-4 rounded-2xl bg-white border-l-4 border-emerald-600 text-slate-800 text-sm sm:text-base font-medium leading-relaxed shadow-xs">
                  {currentSector.approach}
                </blockquote>

                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600">
                    Critical Local Optimization Factors
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentSector.keyPoints.map((point, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 p-3.5 rounded-xl bg-white border border-slate-200/70 text-xs text-slate-700 leading-snug shadow-2xs"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Section 6: Local SEO for Multi-Location Businesses */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
                  <Users className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Enterprise Branch Management</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                  Local SEO for Multi-Location Businesses
                </h2>
                <p className="text-slate-700 text-base leading-relaxed">
                  If you run several branches, each needs its own accurate profile, listing details, and a useful page, while your brand stays consistent. We help set a shared framework and handle each branch's local priorities separately.
                </p>
                <div className="space-y-2.5 pt-1">
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Distinct Google Business Profiles linked to a unified agency dashboard</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Individual branch landing pages with unique local directions and reviews</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Centralized NAP governance avoiding duplicate pins across Saudi cities</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <LocalSEOImageSlot
                  src={multiLocationImgSrc}
                  fallbackSrc={multiLocationImgFallback}
                  alt="Planning local SEO for a business with multiple locations"
                  aspect="aspect-[16/10]"
                  fallbackIcon={Map}
                  badgeText="Multi-Location SEO"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Common Local SEO Problems and How to Address Them */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />
              <span>Diagnostics &amp; Fixes</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
              Common Local SEO Problems and How to Address Them
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              Every business is different, so we investigate before changing anything. Typical problems include incomplete or inaccurate profiles, wrong categories, inconsistent name, address, and phone details, duplicate listings, few or unanswered reviews, thin or duplicated location pages, slow mobile pages, and unclear language targeting. An audit shows which ones actually apply.
            </p>
          </div>

          {/* Interactive Troublespot Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {commonTroubleSpots.map((spot, index) => (
              <div
                key={spot.issue}
                className="bg-slate-50/70 rounded-2xl p-5 border border-slate-200/90 hover:border-emerald-300 transition-all shadow-xs"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-xl bg-amber-100 text-amber-900 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      {spot.issue}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      <strong className="text-emerald-800">Remedy:</strong> {spot.fix}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: How We Measure Local SEO Performance */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
              <BarChart3 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Measurement &amp; Tracking</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
              How We Measure Local SEO Performance
            </h2>
            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
              <p>
                We measure against goals agreed up front: profile views and actions, calls and direction requests, local search visibility, website visits from local searches, review volume and ratings, and tracked enquiries.
              </p>
              <p className="text-sm sm:text-base text-slate-600">
                Rankings, calls, and sales aren't guaranteed, and results also depend on competition, pricing, service quality, and how quickly you respond to enquiries. We don't publish invented results.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-xs">
              <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Metrics Dimension 01</div>
              <h3 className="text-base font-bold text-slate-900">Profile Views &amp; Actions</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tracking how many people discover your business on Google Search and Maps and click to call, get directions, or visit your website.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-xs">
              <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Metrics Dimension 02</div>
              <h3 className="text-base font-bold text-slate-900">Direction Requests &amp; Calls</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct phone inquiries and turn-by-turn navigation requests indicating genuine, immediate customer foot-traffic intent.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-xs">
              <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Metrics Dimension 03</div>
              <h3 className="text-base font-bold text-slate-900">Local Search Visibility</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Measuring keyword impressions and map rankings across target neighborhoods and commercial service zones.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-xs">
              <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Metrics Dimension 04</div>
              <h3 className="text-base font-bold text-slate-900">Website Visits from Local Search</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Monitoring organic sessions landing on your dedicated branch and service pages via Google Analytics 4.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-xs">
              <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Metrics Dimension 05</div>
              <h3 className="text-base font-bold text-slate-900">Review Volume &amp; Ratings</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tracking customer sentiment, verified rating trends, and response velocity without fabricated metrics.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-xs">
              <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Metrics Dimension 06</div>
              <h3 className="text-base font-bold text-slate-900">Tracked Enquiries</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connecting lead form submissions and call events to local landing pages where phone and web measurement is enabled.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Why Choose DigLip7 for Local SEO Services in Saudi Arabia? */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>DigLip7 Distinction</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
              Why Choose DigLip7 for Local SEO Services in Saudi Arabia?
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              You get a structured plan, priorities set by what your business needs most, attention to profiles, listings, and website together, thoughtful language handling, ethical review practices, and clear reporting.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* What You Get */}
            <div className="lg:col-span-7 bg-slate-50/70 rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6">
              <h3 className="text-xl font-bold text-slate-900">
                What You Can Expect From Our Local Team
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Priorities Built Around Your Locations</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Customized strategies for single storefronts, regional service areas, or nationwide branch chains.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Unified Profile &amp; Website Strategy</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Harmonizing your Google Business Profile with location pages, structured data, and local citations.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Thoughtful Arabic &amp; English Handling</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Locally researched query terms in both languages ensuring authentic Saudi audience resonance.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Cross-Channel Marketing Integration</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Coordinating your local SEO with{" "}
                      <Link
                        to="/saudi-arabia/ppc-services/"
                        className="text-emerald-700 underline font-semibold hover:text-emerald-900 transition-colors"
                      >
                        PPC advertising
                      </Link>
                      ,{" "}
                      <Link
                        to="/saudi-arabia/online-reputation-management/"
                        className="text-emerald-700 underline font-semibold hover:text-emerald-900 transition-colors"
                      >
                        online reputation management
                      </Link>
                      , and{" "}
                      <Link
                        to="/saudi-arabia/ecommerce-seo-services/"
                        className="text-emerald-700 underline font-semibold hover:text-emerald-900 transition-colors"
                      >
                        e-commerce SEO
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* What You Won't Hear From Us Box */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-5">
              <span className="text-xs font-bold text-rose-400 uppercase tracking-wider block">
                Ethical Integrity
              </span>
              <h3 className="text-xl font-bold">
                What You Won't Hear From Us
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We believe realistic expectations and platform compliance protect your brand's lasting visibility:
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-rose-200">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>No "guaranteed number one on Google Maps"</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-rose-200">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>No automated fake review schemes or review gating</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-rose-200">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>No mass-spun spammy city door-page networks</span>
                </div>
              </div>
              <div className="pt-4 border-t border-white/10 text-[11px] text-slate-400">
                Honest optimization, accurate listings, and responsive service build lasting local dominance.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Local SEO Pricing and Service Options */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
              <SlidersHorizontal className="w-3.5 h-3.5 text-emerald-600" />
              <span>Tailored Proposals</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
              Local SEO Pricing and Service Options
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              Pricing depends on the number of locations, competition, current profile and listing condition, content and language needs, and reporting. The best next step is a proposal based on your business.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-6">
              Key Factors Defining Your Local SEO Investment
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-2">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Factor 01</span>
                <h4 className="font-bold text-slate-900 text-sm">Number of Locations</h4>
                <p className="text-xs text-slate-600">A single physical clinic or boutique versus multi-branch chains across multiple Saudi governorates.</p>
              </div>

              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-2">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Factor 02</span>
                <h4 className="font-bold text-slate-900 text-sm">Competitive Density</h4>
                <p className="text-xs text-slate-600">Operating in central Riyadh commercial corridors versus developing regional sub-markets.</p>
              </div>

              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-2">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Factor 03</span>
                <h4 className="font-bold text-slate-900 text-sm">Profile &amp; Citation Health</h4>
                <p className="text-xs text-slate-600">Resolving existing duplicate listings, incorrect map pins, or inherited NAP inconsistencies.</p>
              </div>

              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-2">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Factor 04</span>
                <h4 className="font-bold text-slate-900 text-sm">Content &amp; Language Scope</h4>
                <p className="text-xs text-slate-600">Single-language optimization versus thorough Arabic and English bilingual page localization.</p>
              </div>

              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-2">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Factor 05</span>
                <h4 className="font-bold text-slate-900 text-sm">Review Velocity Needs</h4>
                <p className="text-xs text-slate-600">Developing review generation workflows and active customer response management.</p>
              </div>

              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-2">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Factor 06</span>
                <h4 className="font-bold text-slate-900 text-sm">Reporting &amp; Call Tracking</h4>
                <p className="text-xs text-slate-600">Setting up dynamic call tracking numbers, form attribution, and custom Search Console reports.</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-600 font-medium text-center sm:text-left">
                We'd rather quote after reviewing your business than publish generic prices that won't fit your situation.
              </span>
              <Link
                to="/contact"
                className="px-6 py-3 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs sm:text-sm shadow-md transition-all shrink-0"
              >
                Request a Custom Scope Proposal
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 11: Frequently Asked Questions About Local SEO in Saudi Arabia */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
              <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>Direct Answers</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
              Frequently Asked Questions About Local SEO in Saudi Arabia
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
              Clear, practical answers about Google Business Profiles, maps rankings, citations, reviews, and timelines for Saudi businesses.
            </p>

            {/* Live Search Input */}
            <div className="max-w-md mx-auto pt-2">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={faqSearch}
                  onChange={(e) => setFaqSearch(e.target.value)}
                  placeholder="Search questions (e.g., NAP, Google Maps, reviews, cost)..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-full border border-slate-200 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-2xs"
                />
              </div>
            </div>
          </div>

          {/* Accordion List */}
          <div className="space-y-3">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="bg-slate-50/70 rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs transition-all"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-100/50 transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                        {index + 1}. {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-emerald-600" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-200/60">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })
            ) : (
              <div className="p-8 text-center bg-slate-50 rounded-2xl border border-slate-200 text-slate-500 text-sm">
                No matching questions found for "{faqSearch}". Try another search term or contact our team directly.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section 12: Get Found by Nearby Customers with DigLip7 (Conclusion & Cross-Links) */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-emerald-50/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-200 text-xs font-semibold">
            <Sparkles className="w-4 h-4 text-emerald-700" />
            <span>Nearby Customer Discovery</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight max-w-3xl mx-auto">
            Get Found by Nearby Customers with DigLip7
          </h2>

          <div className="space-y-4 max-w-2xl mx-auto text-slate-700 text-sm sm:text-base leading-relaxed">
            <p>
              Good local SEO comes down to accurate details, useful pages, honest reviews, and steady monitoring.
            </p>
            <p>
              Tell us about your business, locations, customers, and languages, and we'll talk through what makes sense. Partnering with a dedicated <strong>Local SEO Service in Saudi Arabia</strong> ensures customers in your neighborhood find accurate, trustworthy information every time they search.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
            <Link to="/contact">
              <motion.button
                className="group px-8 py-4 bg-emerald-700 hover:bg-emerald-800 text-white text-base font-semibold rounded-full shadow-xl hover:shadow-emerald-600/30 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>Request a Local SEO Audit</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>

            <Link to="/contact">
              <motion.button
                className="px-8 py-4 bg-white text-slate-900 border-2 border-emerald-600 text-base font-semibold rounded-full shadow-xs hover:bg-emerald-50/50 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>Contact DigLip7</span>
              </motion.button>
            </Link>

            <a
              href="https://wa.me/919650608788?text=Hello%20DigLip7%20Team%2C%20I%20would%20like%20to%20discuss%20Local%20SEO%20services%20in%20Saudi%20Arabia."
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                className="px-6 py-4 bg-teal-600 hover:bg-teal-700 text-white text-base font-semibold rounded-full shadow-md transition-all duration-300 flex items-center gap-2 cursor-pointer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <FaWhatsapp className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </motion.button>
            </a>
          </div>

          <div className="text-xs sm:text-sm text-slate-500 font-medium pt-1">
            <Link to="/contact" className="text-emerald-700 hover:text-emerald-900 underline font-semibold transition-colors">
              Request a Local SEO Audit
            </Link>
            {" "}&bull;{" "}
            <Link to="/contact" className="text-emerald-700 hover:text-emerald-900 underline font-semibold transition-colors">
              Contact DigLip7
            </Link>
          </div>

          {/* Related Cross-Location & Agency Services Links */}
          <div className="pt-12 border-t border-slate-200/80">
            <span className="text-xs text-slate-600 font-semibold uppercase tracking-wider block mb-4">
              Explore More Saudi Arabia Digital Services
            </span>
            <div className="flex flex-wrap justify-center gap-3 text-xs sm:text-sm font-semibold">
              <Link
                to="/saudi-arabia/seo-services"
                className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 hover:text-emerald-700 hover:border-emerald-300 transition-colors shadow-2xs"
              >
                SEO Services Saudi Arabia
              </Link>
              <Link
                to="/saudi-arabia/ppc-services/"
                className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 hover:text-emerald-700 hover:border-emerald-300 transition-colors shadow-2xs"
              >
                PPC Services Saudi Arabia
              </Link>
              <Link
                to="/saudi-arabia/web-design/"
                className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 hover:text-emerald-700 hover:border-emerald-300 transition-colors shadow-2xs"
              >
                Web Design Saudi Arabia
              </Link>
              <Link
                to="/saudi-arabia/social-media-marketing/"
                className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 hover:text-emerald-700 hover:border-emerald-300 transition-colors shadow-2xs"
              >
                Social Media Marketing Saudi Arabia
              </Link>
              <Link
                to="/saudi-arabia/content-marketing-services/"
                className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 hover:text-emerald-700 hover:border-emerald-300 transition-colors shadow-2xs"
              >
                Content Marketing Saudi Arabia
              </Link>
              <Link
                to="/saudi-arabia/online-reputation-management/"
                className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 hover:text-emerald-700 hover:border-emerald-300 transition-colors shadow-2xs"
              >
                Online Reputation Management
              </Link>
              <Link
                to="/saudi-arabia/ecommerce-seo-services/"
                className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 hover:text-emerald-700 hover:border-emerald-300 transition-colors shadow-2xs"
              >
                E-commerce SEO Saudi Arabia
              </Link>
              <Link
                to="/uae/dubai/local-seo"
                className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 hover:text-emerald-700 hover:border-emerald-300 transition-colors shadow-2xs"
              >
                Dubai Local SEO
              </Link>
              <Link
                to="/blogview"
                className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 hover:text-emerald-700 hover:border-emerald-300 transition-colors shadow-2xs"
              >
                SEO &amp; Growth Insights Blog
              </Link>
              <Link
                to="/about"
                className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 hover:text-emerald-700 hover:border-emerald-300 transition-colors shadow-2xs"
              >
                About DigLip7
              </Link>
              <Link
                to="/contact"
                className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 hover:text-emerald-700 hover:border-emerald-300 transition-colors shadow-2xs"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SaudiLocalSEO;
