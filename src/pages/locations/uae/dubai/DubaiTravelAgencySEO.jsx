import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../../../../components/SEO";
import travelAgencyHeroImg from "../../../../images/travel-agency-seo-dubai-diglip7.webp";
import travelWebsiteVisibilityImg from "../../../../images/travel-website-search-visibility-dubai.webp";
import holidayPackageImg from "../../../../images/holiday-package-seo-dubai.webp";
import tourOperatorImg from "../../../../images/tour-operator-seo-dubai.webp";
import outboundAgencyImg from "../../../../images/travel-agency-seo-services-dubai.webp";
import corporateTravelImg from "../../../../images/corporate-group-travel-seo.webp";
import travelBookingImg from "../../../../images/travel-website-seo-dubai.webp";
import localTravelAgencySeoImg from "../../../../images/local-seo-travel-agencies-dubai.webp";
import {
  Plane,
  Compass,
  Search,
  ShieldCheck,
  MapPin,
  TrendingUp,
  CheckCircle2,
  AlertTriangle,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Home,
  Sparkles,
  FileText,
  BookOpen,
  HelpCircle,
  Briefcase,
  BarChart3,
  Building2,
  Globe,
  Calendar,
  Luggage,
  Palmtree,
  CreditCard,
  Layers,
  Settings,
  Users,
} from "lucide-react";

// 3D Perspective Tilt Card Component
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
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      style={{ perspective: 1000 }}
    >
      {children}
    </motion.div>
  );
};

// Reusable Clean Travel Agency SEO Image Component
// If no image is put (src is empty or fails to load), shows the placeholder with the alt name.
// When an image is provided and loads, only the image is displayed with no alt text shown on the UI.
const TravelImage = ({
  src,
  alt,
  width = 1200,
  height = 630,
  priority = false,
  aspect = "aspect-[16/9]",
  className = "",
  imgClassName = "w-full h-full object-cover",
}) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [src]);

  const showPlaceholder = !src || hasError;

  return (
    <div
      className={`relative w-full rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50/60 via-white to-sky-50/40 border border-blue-100/90 shadow-md flex items-center justify-center ${showPlaceholder ? "aspect-[16/9]" : aspect} ${className}`}
    >
      {!showPlaceholder ? (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onError={() => setHasError(true)}
          className={imgClassName}
        />
      ) : (
        <div className="p-8 text-center text-sm font-medium text-blue-900/70 select-none flex flex-col items-center justify-center gap-3 w-full h-full bg-gradient-to-b from-white/90 to-blue-50/50">
          <div className="w-12 h-12 rounded-full bg-blue-100/80 text-blue-600 flex items-center justify-center shadow-xs">
            <Compass className="w-6 h-6" />
          </div>
          <span className="max-w-xs sm:max-w-md leading-relaxed font-semibold text-slate-700">{alt}</span>
        </div>
      )}
    </div>
  );
};

// Image assets configuration
// If src is empty (""), the placeholder with the alt name is displayed on the UI.
// When you put an image path, the image will display and the alt text will not be shown on the UI.
const travelImages = {
  hero: {
    src: travelAgencyHeroImg || "/images/travel-agency-seo-dubai-diglip7.webp",
    filename: "travel-agency-seo-dubai-diglip7.webp",
    alt: "Travel Agency SEO Dubai services by DigLip7 for travel agencies and tour operators",
    width: 1200,
    height: 630,
  },
  visibility: {
    src: travelWebsiteVisibilityImg || "/images/travel-website-search-visibility-dubai.webp",
    filename: "travel-website-search-visibility-dubai.webp",
    alt: "Traveller comparing holiday packages and destinations online",
    width: 1200,
    height: 630,
  },
  holidayPackage: {
    src: holidayPackageImg || "/images/holiday-package-seo-dubai.webp",
    filename: "holiday-package-seo-dubai.webp",
    alt: "Holiday package page showing itinerary, inclusions and booking details",
    width: 1200,
    height: 630,
  },
  tourOperator: {
    src: tourOperatorImg || "/images/tour-operator-seo-dubai.webp",
    filename: "tour-operator-seo-dubai.webp",
    alt: "Dubai tour page with activity description and meeting-point details",
    width: 1200,
    height: 630,
  },
  outboundAgency: {
    src: outboundAgencyImg || "/images/travel-agency-seo-services-dubai.webp",
    filename: "travel-agency-seo-services-dubai.webp",
    alt: "Overview of keyword research, technical, local and content SEO for travel websites",
    width: 1200,
    height: 630,
  },
  corporateTravel: {
    src: corporateTravelImg || "/images/corporate-group-travel-seo.webp",
    filename: "corporate-group-travel-seo.webp",
    alt: "Corporate and group travel service page for a travel management company",
    width: 1200,
    height: 630,
  },
  onlineBooking: {
    src: travelBookingImg || "/images/travel-website-seo-dubai.webp",
    filename: "travel-website-seo-dubai.webp",
    alt: "Travel booking website with crawlable landing pages and filters",
    width: 1200,
    height: 630,
  },
  localSeo: {
    src: localTravelAgencySeoImg || "/images/local-seo-travel-agencies-dubai.webp",
    filename: "local-seo-travel-agencies-dubai.webp",
    alt: "Google Business Profile and local search listing for a Dubai travel agency",
    width: 1200,
    height: 630,
  },
};

// Breadcrumb Trail configuration
const breadcrumbTrail = [
  { label: "Home", href: "/" },
  { label: "UAE", href: "/uae/seo-services" },
  { label: "Dubai", href: "/uae/dubai/seo-services" },
  { label: "Travel Agency SEO Dubai", href: "/uae/dubai/travel-agency-seo/" },
];

// Core Travel Agency SEO Services
const travelServices = [
  {
    title: "Travel Keyword Research and Search Intent",
    desc: "Keyword research identifies the searches that matter based on destinations, travel services, traveller needs and booking intent. The priorities differ by business model. An outbound travel agency may focus on destination and package searches, a Dubai tour operator on specific activities and experiences, and a corporate travel management company on business-oriented services. Mapping these searches to the right pages keeps the strategy focused.",
    icon: Search,
    highlight: "Intent-Driven Queries",
  },
  {
    title: "On-Page SEO for Travel Websites",
    desc: "On-page work covers page titles, meta descriptions, headings, destination pages, tour descriptions, package pages, internal links, images and calls to action. Each important destination or package page should offer distinct, accurate information, so visitors and search engines can tell one offering from another.",
    icon: FileText,
    highlight: "Destination & Package Pages",
  },
  {
    title: "Technical SEO for Travel Booking Websites",
    desc: "Technical SEO covers crawlability, indexability, mobile usability, website speed, redirects, canonical URLs, XML sitemaps and navigation. It also addresses duplicate URLs created by filters or booking systems. This matters most for websites with many destinations, tours, itineraries and package variations, where small technical problems multiply quickly.",
    icon: Settings,
    highlight: "Faceted Crawl Optimization",
  },
  {
    title: "Local SEO for Travel Agencies",
    desc: "Local SEO involves accurate Google Business Profile details where eligible, consistent business information, legitimate local citations, genuine customer reviews where permitted and useful location details. We would never suggest creating ineligible listings or misleading business addresses.",
    icon: MapPin,
    highlight: "Google Maps & Local Discovery",
  },
  {
    title: "Travel Content Strategy",
    desc: "Destination guides, itinerary information, travel preparation resources and answers to common questions can all support organic visibility. Accuracy and originality matter, and so does reviewing content regularly, because travel information goes out of date quickly.",
    icon: BookOpen,
    highlight: "Guides & Itinerary Assets",
  },
  {
    title: "SEO Analytics and Booking Enquiry Tracking",
    desc: "We measure organic search performance alongside relevant enquiries, booking actions and other meaningful conversions, so you can see what search visibility is contributing to the business.",
    icon: BarChart3,
    highlight: "Booking & Enquiry Tracking",
  },
];

// SEO Solutions for Different Travel Business Types
const businessSolutions = [
  {
    title: "SEO for Holiday and Travel Package Providers",
    desc: "Useful package pages state the destination, duration, inclusions, exclusions, itinerary details and booking information where applicable. Copying the same description across several packages gives users little reason to choose one page over another, and offers search engines little to distinguish them.",
    icon: Palmtree,
    points: [
      "Transparent inclusions, exclusions, and flight/hotel package details",
      "Distinct daily itinerary breakdowns that differentiate similar trips",
      "Seasonal package updates before peak booking windows begin",
      "Clear, prominent booking actions and WhatsApp enquiry options",
    ],
    image: travelImages.holidayPackage.src,
    alt: travelImages.holidayPackage.alt,
  },
  {
    title: "SEO for Tour Operators in Dubai",
    desc: "Tour operators benefit from tour-specific pages, clear activity descriptions, meeting-point details where relevant, inclusions and answers to common visitor questions. We only recommend content for tours the business genuinely offers.",
    icon: Compass,
    points: [
      "Activity-specific pages for desert safaris, dhow cruises, and city excursions",
      "Verified meeting-point details and pickup location guides",
      "Essential visitor FAQs covering dress codes, duration, and safety",
      "Live availability checks and simple enquiry conversion forms",
    ],
    image: travelImages.tourOperator.src,
    alt: travelImages.tourOperator.alt,
  },
  {
    title: "SEO for Outbound Travel Agencies",
    desc: "Destination pages help travellers explore relevant trips, itineraries and package options. Any visa, entry or travel-document information must be verified against current official sources before it appears on the site.",
    icon: Plane,
    points: [
      "Comprehensive outbound destination hubs for Europe, Asia, and island escapes",
      "Accurate visa, passport, and entry guideline documentation pages",
      "Multi-city flight connection advice and seasonal weather insights",
      "Tailored honeymoon, luxury, and family travel itinerary landing pages",
    ],
    image: travelImages.outboundAgency.src,
    alt: travelImages.outboundAgency.alt,
  },
  {
    title: "SEO for Corporate and Group Travel Companies",
    desc: "Corporate and group travel companies need service pages that clearly explain corporate travel management, group itineraries, event-related travel or whatever the company genuinely provides, in language decision-makers can act on.",
    icon: Briefcase,
    points: [
      "B2B service pages addressing corporate travel managers and HR executives",
      "Group itinerary management, MICE events, and delegation logistics",
      "Corporate expense reporting integration and travel policy compliance",
      "Direct RFP submission forms and dedicated account representative links",
    ],
    image: travelImages.corporateTravel.src,
    alt: travelImages.corporateTravel.alt,
  },
  {
    title: "SEO for Online Travel Booking Businesses",
    desc: "Online booking businesses depend on clear navigation, crawlable landing pages, accurate booking details and useful filters, while avoiding unnecessary duplicate URLs that dilute the site.",
    icon: Globe,
    points: [
      "Clean architecture managing dynamic filters, tags, and search faceted URLs",
      "Fast-loading mobile checkout funnels and crawl-friendly booking flows",
      "Dynamic canonical tags preventing duplicate indexation of identical packages",
      "Automated XML sitemaps highlighting active packages and seasonal deals",
    ],
    image: travelImages.onlineBooking.src,
    alt: travelImages.onlineBooking.alt,
  },
];

// The 6-Step Travel Agency SEO Process
const processSteps = [
  {
    step: "01",
    title: "Step 1 — Website and SEO Audit",
    desc: "We review technical health, current organic visibility, indexation, destination pages, content quality, internal links, mobile usability and enquiry or booking pathways.",
    icon: Search,
  },
  {
    step: "02",
    title: "Step 2 — Keyword and Competitor Research",
    desc: "We identify relevant search themes and review competing results to see how other businesses organise destinations, packages and travel information. The aim is to find opportunities, never to copy another company's content.",
    icon: Compass,
  },
  {
    step: "03",
    title: "Step 3 — Strategy and Page Prioritisation",
    desc: "Improvements are prioritised by business goals, services, destinations, website condition, seasonality and available resources.",
    icon: Layers,
  },
  {
    step: "04",
    title: "Step 4 — On-Page and Technical Optimisation",
    desc: "We improve page content, metadata, internal linking, technical accessibility and user experience.",
    icon: Settings,
  },
  {
    step: "05",
    title: "Step 5 — Content Development and Local SEO",
    desc: "We develop useful travel content and maintain accurate business information where applicable.",
    icon: BookOpen,
  },
  {
    step: "06",
    title: "Step 6 — Performance Review and Refinement",
    desc: "We monitor organic search data, identify gaps and refine the strategy based on evidence.",
    icon: BarChart3,
  },
];

// 10 Common SEO Problems Travel Agencies Face
const commonProblems = [
  "Destination pages with thin or repetitive content",
  "Duplicate package descriptions across multiple destinations",
  "Outdated travel information, obsolete visa rules, or expired pricing",
  "Missing or unclear page titles that fail to communicate trip details",
  "Slow mobile experiences that frustrate travellers searching on phones",
  "Broken links and redirect issues caused by seasonal package changes",
  "Booking-system URLs that create unnecessary duplication through faceted filters",
  "Important destination pages that are difficult to discover through navigation",
  "Unclear enquiry or booking options that leave interested visitors confused",
  "Limited tracking of qualified enquiries, phone calls, and checkout completions",
];

// Performance Measurement Metrics
const measurementMetrics = [
  {
    title: "Organic Clicks & Impressions",
    desc: "Monitoring overall search visibility growth across major destination, package, and tour search themes.",
    icon: TrendingUp,
  },
  {
    title: "Query & Landing Page Insights",
    desc: "Tracking which specific packages and destination guides attract qualified, high-intent travel traffic.",
    icon: Search,
  },
  {
    title: "Destination Page Visibility",
    desc: "Evaluating search index performance for key international and regional outbound trip pages.",
    icon: Globe,
  },
  {
    title: "Qualified Contact Submissions",
    desc: "Measuring authentic form submissions from travellers requesting customized holiday itineraries.",
    icon: FileText,
  },
  {
    title: "Booking Enquiries & Actions",
    desc: "Tracking phone calls, WhatsApp chats, and completed online booking steps where trackable.",
    icon: CheckCircle2,
  },
  {
    title: "Organic Conversion Rates",
    desc: "Understanding the percentage of organic travel visitors who take meaningful action on your site.",
    icon: BarChart3,
  },
  {
    title: "Local Search Visibility",
    desc: "Tracking Google Business Profile interactions, map direction requests, and direct agency calls.",
    icon: MapPin,
  },
  {
    title: "Seasonal Traffic & Demand Shifts",
    desc: "Analyzing pre-season and in-season search pattern shifts to prepare pages ahead of peak bookings.",
    icon: Calendar,
  },
];

// 7 Reasons to Choose DigLip7
const whyChoosePoints = [
  {
    title: "Strategy Aligned with Your Destinations",
    desc: "Tailored to your specific agency model, whether outbound holidays, luxury bespoke tours, corporate travel, or inbound Dubai experiences.",
  },
  {
    title: "Relevant Keyword & Competitor Research",
    desc: "Identifying practical gaps and commercial search opportunities without copying other travel operators.",
  },
  {
    title: "Technical SEO & Booking Architecture",
    desc: "Resolving duplicate URLs, filter crawl traps, and mobile speed roadblocks that hinder booking websites.",
  },
  {
    title: "Useful Destination & Package Content",
    desc: "Creating informative itineraries, clear inclusions, and credible advice that builds traveller trust.",
  },
  {
    title: "Local SEO Where Appropriate",
    desc: "Optimizing verified physical branches across Dubai for residents seeking face-to-face consultation.",
  },
  {
    title: "Transparent Measurement & Reporting",
    desc: "Honest performance metrics focused on booking enquiries, calls, and qualified leads rather than vanity rankings.",
  },
  {
    title: "Prioritisation Based on Your Objectives",
    desc: "Focusing effort where commercial potential is highest rather than applying a rigid, one-size-fits-all checklist.",
  },
];

// 8 Frequently Asked Questions
const faqs = [
  {
    q: "What is Travel Agency SEO Dubai?",
    a: "It is the process of improving how travel agencies and tourism businesses in Dubai appear in organic search results through better content, website structure, technical health and local visibility.",
  },
  {
    q: "How can SEO help a travel agency in Dubai?",
    a: "It can help travellers find your destination, package and tour pages, understand your services and contact or book with you more easily.",
  },
  {
    q: "Is local SEO important for travel agencies?",
    a: "It can be, particularly for agencies that welcome walk-in or local customers. Accurate business details and a well-managed Google Business Profile help people find you.",
  },
  {
    q: "Can SEO help promote holiday packages and tours?",
    a: "Yes. Clear, accurate and distinct package and tour pages make it easier for relevant travellers to find and compare what you offer.",
  },
  {
    q: "How long does travel agency SEO take to show results?",
    a: "Timelines vary with competition, seasonality, website condition and the work involved. SEO is generally a medium-to-long-term effort.",
  },
  {
    q: "What should a travel agency SEO campaign include?",
    a: "Typically an audit, keyword and competitor research, on-page and technical work, content, local SEO and ongoing reporting. The scope depends on your needs.",
  },
  {
    q: "Can an SEO agency guarantee travel bookings?",
    a: "No. No ethical agency can guarantee specific rankings or booking volumes. SEO can improve your visibility to relevant travellers.",
  },
  {
    q: "How can I choose a travel agency SEO company in Dubai?",
    a: "Look for clear explanations, realistic expectations, transparent reporting and an approach tailored to your services. Be cautious of guarantees.",
  },
];

export default function DubaiTravelAgencySEO() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Complete JSON-LD Schema combining Organization, WebSite, WebPage, Service, BreadcrumbList, and FAQPage
  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://diglip7.com/#organization",
        name: "DigLip7",
        url: "https://diglip7.com/",
        logo: "https://diglip7.com/images/Logo.jpg",
        sameAs: [
          "https://www.linkedin.com/company/diglip7",
          "https://www.facebook.com/diglip7",
          "https://www.instagram.com/diglip7",
        ],
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
        "@id": "https://diglip7.com/uae/dubai/travel-agency-seo/#webpage",
        url: "https://diglip7.com/uae/dubai/travel-agency-seo/",
        name: "Travel Agency SEO Dubai | Travel SEO Services — DigLip7",
        description:
          "Improve your travel website's organic visibility with Travel Agency SEO Dubai strategies for tour operators, holiday packages, and travel businesses.",
        inLanguage: "en-AE",
        isPartOf: { "@id": "https://diglip7.com/#website" },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: "https://diglip7.com/images/travel-agency-seo-dubai-diglip7.webp",
        },
        breadcrumb: { "@id": "https://diglip7.com/uae/dubai/travel-agency-seo/#breadcrumb" },
      },
      {
        "@type": "Service",
        "@id": "https://diglip7.com/uae/dubai/travel-agency-seo/#service",
        name: "Travel Agency SEO Dubai",
        serviceType: "Travel Agency SEO Services",
        description:
          "Tailored SEO services for travel agencies, tour operators, holiday package providers, corporate travel companies and online travel booking businesses in Dubai, including keyword research, on-page SEO, technical SEO, local SEO, content strategy and booking enquiry tracking.",
        provider: { "@id": "https://diglip7.com/#organization" },
        areaServed: [
          { "@type": "City", name: "Dubai" },
          { "@type": "Country", name: "United Arab Emirates" },
        ],
        audience: {
          "@type": "BusinessAudience",
          audienceType: "Travel agencies and tourism businesses",
        },
        url: "https://diglip7.com/uae/dubai/travel-agency-seo/",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://diglip7.com/uae/dubai/travel-agency-seo/#breadcrumb",
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
            item: "https://diglip7.com/uae/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Dubai",
            item: "https://diglip7.com/uae/dubai/",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Travel Agency SEO Dubai",
            item: "https://diglip7.com/uae/dubai/travel-agency-seo/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://diglip7.com/uae/dubai/travel-agency-seo/#faq",
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
      {/* Comprehensive SEO Meta Management */}
      <SEO
        title="Travel Agency SEO Dubai | Travel SEO Services — DigLip7"
        exactTitle={true}
        description="Improve your travel website's organic visibility with Travel Agency SEO Dubai strategies for tour operators, holiday packages, and travel businesses."
        canonical="https://diglip7.com/uae/dubai/travel-agency-seo/"
        robots="index, follow, max-image-preview:large"
        ogType="website"
        ogLocale="en_AE"
        ogImage="https://diglip7.com/images/travel-agency-seo-dubai-diglip7.webp"
        ogImageAlt="Travel Agency SEO Dubai services by DigLip7 for travel agencies and tour operators"
        twitterCard="summary_large_image"
        twitterSite={null}
        twitterCreator={null}
        twitterTitle="Travel Agency SEO Dubai | Travel SEO Services — DigLip7"
        twitterDescription="Improve your travel website's organic visibility with Travel Agency SEO Dubai strategies for tour operators, holiday packages, and travel businesses."
        twitterImage="https://diglip7.com/images/travel-agency-seo-dubai-diglip7.webp"
        twitterImageAlt="Travel Agency SEO Dubai services by DigLip7 for travel agencies and tour operators"
        hreflangs={[
          { hreflang: "en-ae", href: "https://diglip7.com/uae/dubai/travel-agency-seo/" },
          { hreflang: "x-default", href: "https://diglip7.com/uae/dubai/travel-agency-seo/" },
        ]}
        keywords={false}
        schema={jsonLdGraph}
      />

      {/* ================= BREADCRUMB NAVIGATION ================= */}
      <div className="pt-24 sm:pt-28 px-4 sm:px-6 lg:px-8 xl:px-12 bg-gradient-to-r from-blue-50/70 via-slate-50 to-white border-b border-blue-100/80">
        <nav
          aria-label="Breadcrumb"
          className="max-w-7xl mx-auto flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600 pb-3"
        >
          {breadcrumbTrail.map((crumb, i) => (
            <span key={crumb.label} className="flex items-center gap-1.5 sm:gap-2">
              {i === 0 ? (
                <Home className="w-3.5 h-3.5 text-blue-700" />
              ) : (
                <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              )}
              {i === breadcrumbTrail.length - 1 ? (
                <span className="font-semibold text-blue-950">{crumb.label}</span>
              ) : (
                <Link to={crumb.href} className="hover:text-blue-700 transition-colors">
                  {crumb.label}
                </Link>
              )}
            </span>
          ))}
        </nav>
      </div>

      {/* ================= HERO SECTION ================= */}
      <header className="relative py-14 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-100 via-slate-100 to-blue-100 text-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-semibold tracking-wide">
                <Plane className="w-4 h-4 text-blue-400" />
                <span>Dubai Travel & Tourism SEO Services</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight tracking-tight">
                Travel Agency SEO Dubai to Grow Your Online Visibility
              </h1>

              <div className="space-y-4 text-slate-900/90 text-sm sm:text-base leading-relaxed">
                <p>
                  Most trips begin with a search. A family weighing a week in the Maldives against a city break in
                  Europe, a visitor looking for a guided desert experience, an HR manager sourcing group travel for a
                  team: each of them opens a search engine long before they pick up the phone. Travel Agency SEO Dubai
                  work is about making sure your business shows up during that research phase, and that your website
                  gives people a reason to get in touch.
                </p>
                <p>
                  Travellers compare destinations, itineraries, inclusions, prices and booking options, often across
                  several tabs. A travel website therefore needs more than attractive photos. It needs clear service
                  pages, accurate package details and a simple way to enquire or book.
                </p>
                <p>
                  DigLip7 is an SEO service provider that helps travel businesses build a strategy around their
                  services, target destinations, website performance and commercial goals. We do not promise guaranteed
                  rankings, bookings, revenue or a specific number of enquiries. What we can do is show you where your
                  website is losing visibility and help you focus on the changes most likely to matter.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <ShieldCheck className="w-5 h-5 text-slate-400" />
                  <span>Ethical, Evidence-Based Search Strategy</span>
                </div>
                <p className="text-slate-900/80 text-xs sm:text-sm leading-relaxed">
                  If you would like to discuss your website's visibility and your SEO priorities, contact the DigLip7
                  team to start the conversation.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link to="/contact">
                  <button className="px-7 sm:px-8 py-3.5 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold text-sm sm:text-base rounded-full shadow-lg shadow-blue-500/25 hover:scale-105 transition-all flex items-center gap-2 cursor-pointer">
                    <span>Discuss Travel SEO Priorities</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </button>
                </Link>
                <Link to="/uae/dubai/seo-services">
                  <button className="px-7 sm:px-8 py-3.5 bg-white/10 hover:bg-white/20 text-slate-900 font-bold text-sm sm:text-base rounded-full border border-blue-400/40 shadow-xs hover:scale-105 transition-all cursor-pointer">
                    All Dubai SEO Services
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Media Column */}
            <div className="lg:col-span-6 w-full flex justify-center">
              <Card3D className="w-full">
                <div className="bg-white p-3 sm:p-4 rounded-3xl border border-blue-200/90 shadow-2xl hover:shadow-blue-200/40 transition-all">
                  <TravelImage
                    src={travelImages.hero.src}
                    alt={travelImages.hero.alt}
                    width={travelImages.hero.width}
                    height={travelImages.hero.height}
                    priority={true}
                    aspect="aspect-auto"
                    imgClassName="w-full h-auto block rounded-2xl object-cover shadow-xs"
                  />
                </div>
              </Card3D>
            </div>
          </div>
        </div>
      </header>

      {/* ================= SECTION 1: WHY TRAVEL AGENCIES NEED A DEDICATED SEO STRATEGY ================= */}
      <section className="py-16 sm:py-20 bg-slate-50/70 border-b border-gray-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Search Intent & Buying Behaviour</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
                Why Travel Agencies in Dubai Need a Dedicated SEO Strategy
              </h2>
              <div className="space-y-4 text-gray-700 text-base leading-relaxed">
                <p>
                  Travel is one of the most researched purchases people make. Customers read about destinations,
                  compare packages and look at what is included before they decide who to trust. By the time someone
                  contacts an agency, they have often already formed a shortlist.
                </p>
                <p>
                  Competition is stiff. You are competing with other agencies and tour operators, and also with large
                  online travel platforms that dominate many destination searches. A generic SEO plan rarely accounts
                  for that. Appearing for the right destination and package searches matters, and so does understanding
                  which searches are likely to lead to a booking.
                </p>
                <p>
                  There is a real difference between informational and high-intent searches. Someone reading about what
                  to pack for a trip is gathering ideas. Someone comparing a family holiday package or looking for a
                  guided desert experience is much closer to a decision. These are illustrative examples rather than
                  verified search trends, but they show why one approach cannot serve every page.
                </p>
                <p>
                  Seasonality adds another wrinkle. Interest rises and falls through the year, so pages need to be ready
                  before demand arrives and kept accurate while it lasts. Relevant organic traffic matters more than
                  sheer volume, and better visibility only helps when package information is accurate, content is
                  useful, pricing details are clear where available and enquiry options are convenient.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 w-full flex justify-center">
              <Card3D className="w-full">
                <div className="bg-white p-3 sm:p-4 rounded-3xl border border-blue-200 shadow-2xl hover:shadow-blue-200/40 transition-all">
                  <TravelImage
                    src={travelImages.visibility.src}
                    alt={travelImages.visibility.alt}
                    width={travelImages.visibility.width}
                    height={travelImages.visibility.height}
                    aspect="aspect-auto"
                    imgClassName="w-full h-auto block rounded-2xl object-cover shadow-xs"
                  />
                </div>
              </Card3D>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: SERVICES OFFERED ================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Coordinated Deliverables</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              Travel Agency SEO Services in Dubai Offered by DigLip7
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              The services below work together as one strategy rather than separate deliverables. The final scope
              depends on your agency's requirements and is agreed before work begins:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {travelServices.map((svc, idx) => {
              const IconComp = svc.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50/70 p-6 sm:p-8 rounded-3xl border border-gray-200 hover:border-blue-300 transition-all shadow-xs flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                        {svc.highlight}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                      {svc.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {svc.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: SEO SOLUTIONS FOR DIFFERENT TRAVEL BUSINESS TYPES ================= */}
      <section className="py-16 sm:py-20 bg-slate-50/70 border-b border-gray-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold mb-3">
              <Luggage className="w-3.5 h-3.5" />
              <span>Tailored Business Models</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              SEO Solutions for Different Travel Business Types
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Travel businesses work in very different ways, and the SEO approach should reflect that:
            </p>
          </div>

          <div className="space-y-8">
            {businessSolutions.map((solution, idx) => {
              const IconComp = solution.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm hover:border-blue-300 transition-all"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-6 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                          {solution.title}
                        </h3>
                      </div>
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        {solution.desc}
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                        {solution.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="lg:col-span-6 w-full flex justify-center">
                      <Card3D className="w-full">
                        <div className="bg-white p-3 sm:p-4 rounded-3xl border border-blue-200 shadow-2xl hover:shadow-blue-200/40 transition-all">
                          <TravelImage
                            src={solution.image}
                            alt={solution.alt}
                            aspect="aspect-auto"
                            imgClassName="w-full h-auto block rounded-2xl object-cover shadow-xs"
                          />
                        </div>
                      </Card3D>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: OUR 6-STEP PROCESS ================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Practical Delivery Workflow</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              Our Travel Agency SEO Process
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              This is a practical workflow DigLip7 can use to plan and manage a campaign, adapted to each business:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50/80 p-7 rounded-3xl border border-gray-200 hover:border-blue-300 transition-all shadow-xs flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-black text-blue-200">
                        {step.step}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: LOCAL SEO ACROSS DUBAI ================= */}
      <section className="py-16 sm:py-20 bg-slate-50/70 border-b border-gray-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                <span>Local Discovery & Footfall</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
                Local SEO for Travel Agencies Across Dubai
              </h2>
              <div className="space-y-4 text-gray-700 text-base leading-relaxed">
                <p>
                  Even in a business that sells destinations around the world, local search matters. People still
                  look for a travel agency they can visit or speak with in person, and local SEO helps eligible agencies
                  become easier to find when they do.
                </p>
                <p>
                  Depending on where an agency genuinely operates, relevant areas might include{" "}
                  <strong>Deira, Bur Dubai, Business Bay, Dubai Marina, Al Barsha,</strong> or{" "}
                  <strong>Downtown Dubai</strong>. We only refer to areas that match real location and service coverage.
                </p>
                <p className="font-semibold text-gray-900">
                  The work includes:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Accurate business details and contact information</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Appropriate Google Business Profile categories</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Legitimate local citations and directory listings</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Genuine customer reviews where permitted</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Useful location-specific website content</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Consistency between website and business listings</span>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-blue-950 text-xs sm:text-sm">
                  <strong>Realistic Advisory:</strong> A location page should provide genuine value. We do not imply
                  that an agency has a branch in an area unless that is verified, and we do not create doorway pages by
                  changing only neighbourhood names. Local visibility depends on many factors and cannot be guaranteed.
                  Explore DigLip7's dedicated{" "}
                  <Link to="/uae/dubai/local-seo" className="text-blue-700 font-bold hover:underline">
                    Local SEO Dubai
                  </Link>{" "}
                  services for additional insights.
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 w-full flex justify-center">
              <Card3D className="w-full">
                <div className="bg-white p-3 sm:p-4 rounded-3xl border border-blue-200 shadow-2xl hover:shadow-blue-200/40 transition-all">
                  <TravelImage
                    src={travelImages.localSeo.src}
                    alt={travelImages.localSeo.alt}
                    width={travelImages.localSeo.width}
                    height={travelImages.localSeo.height}
                    aspect="aspect-auto"
                    imgClassName="w-full h-auto block rounded-2xl object-cover shadow-xs"
                  />
                </div>
              </Card3D>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 6: COMMON PROBLEMS WE ADDRESS ================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-semibold mb-3">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Common Roadblocks</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              Common SEO Problems Travel Agencies Should Address
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              An audit may identify issues such as:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {commonProblems.map((prob, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-gray-200 flex items-start gap-3.5 hover:border-red-300 transition-all"
              >
                <div className="w-7 h-7 rounded-lg bg-red-100 text-red-700 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                  {idx + 1}
                </div>
                <span className="text-sm sm:text-base font-semibold text-gray-800 leading-snug">
                  {prob}
                </span>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-200 text-sm sm:text-base text-gray-700 leading-relaxed">
            Not every travel agency has all of these problems. The first step is working out which ones affect your
            particular website. Addressing the relevant issues can make the site easier to use and better able to
            support your organic search objectives. An agency with strong destination content but poor enquiry tracking
            needs a different plan from one whose booking system generates hundreds of near-identical URLs.
          </div>
        </div>
      </section>

      {/* ================= SECTION 7: HOW WE MEASURE PERFORMANCE ================= */}
      <section className="py-16 sm:py-20 bg-slate-50/70 border-b border-gray-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold mb-3">
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Evidence-Based Metrics</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              How We Measure Travel Agency SEO Performance
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              SEO should be measured against your commercial objectives, not rankings alone. A page that ranks well
              but brings no relevant enquiries is not doing its job. Depending on your setup, we look at:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {measurementMetrics.map((metric, idx) => {
              const IconComp = metric.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-gray-200/90 hover:border-blue-300 transition-all shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-3.5">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-1.5">{metric.title}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{metric.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-6 rounded-2xl bg-white border border-gray-200 text-sm sm:text-base text-gray-700 space-y-3">
            <p>
              Google Search Console and Google Analytics are useful starting points for this reporting.
            </p>
            <p className="text-xs sm:text-sm text-gray-500 pt-2 border-t border-gray-100">
              <strong>Fluctuation Realities:</strong> Rankings, traffic and bookings can fluctuate because of
              competition, seasonality, website condition, implementation and traveller demand. We do not promise
              guaranteed bookings, revenue increases or fixed traffic growth.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SECTION 8: WHY CHOOSE DIGLIP7 ================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Transparent Standards</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              Why Choose DigLip7 for Travel Agency SEO Dubai?
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              What DigLip7 offers is a tailored, transparent approach rather than big promises. In practice, that means:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoosePoints.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-gray-200 hover:border-blue-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs mb-3.5">
                    {idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-200 text-sm sm:text-base text-gray-700 leading-relaxed">
            An initial discussion is usually the best way to find the right starting point. We would like to understand
            your destinations, travel products, audience and current website before recommending what to do first,
            because an agency with a new website faces very different priorities from one with years of existing pages.
          </div>
        </div>
      </section>

      {/* ================= SECTION 9: FREQUENTLY ASKED QUESTIONS ================= */}
      <section className="py-16 sm:py-24 bg-slate-50/70 border-b border-gray-200/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Travel Agency FAQs</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Frequently Asked Questions About Travel Agency SEO Dubai
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
                      {faq.q}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? "bg-blue-600 text-white rotate-180" : "bg-gray-100 text-gray-500"
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
                        <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-gray-700 leading-relaxed border-t border-gray-100 bg-blue-50/20">
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

      {/* ================= SECTION 10: GET STARTED CTA ================= */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 via-slate-100 to-gray-50 text-slate-900 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-block text-xs font-bold tracking-wider uppercase text-blue-900 bg-blue-100 border border-blue-200 px-3.5 py-1 rounded-full">
            Ready to Build Sustainable Travel Booking Visibility?
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-gray-900">
            Get Started with Travel Agency SEO in Dubai
          </h2>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Looking to improve your travel agency's visibility in search results? Contact DigLip7 to discuss your
            website, destinations, and business goals. We can help identify practical SEO opportunities and develop a
            strategy aligned with your travel services and target audience.
          </p>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            The first step is a review of your website, destinations, travel products, target audience, existing
            organic search performance and enquiry or booking process. From there, we can recommend where Travel
            Agency SEO Dubai efforts could help most.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link to="/contact">
              <button className="px-8 sm:px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-extrabold text-sm sm:text-base rounded-full shadow-xl hover:scale-105 transition-all flex items-center gap-2 cursor-pointer">
                <span>Request a Travel Agency SEO Consultation</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </Link>

            <Link to="/uae/dubai/seo-services">
              <button className="px-8 sm:px-10 py-4 bg-white hover:bg-slate-50 text-gray-900 border border-gray-300 font-bold text-sm sm:text-base rounded-full shadow-md hover:scale-105 transition-all flex items-center gap-2 cursor-pointer">
                <span>View All Dubai SEO Services</span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
