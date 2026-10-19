import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../../../../components/SEO";
import automotiveHeroImg from "../../../../images/automotive-seo-dubai-diglip7.webp";
import automotiveSearchVisibilityImg from "../../../../images/automotive-business-search-visibility-dubai.webp";
import automotiveServicesImg from "../../../../images/automotive-seo-services.webp";
import carDealershipImg from "../../../../images/car-dealership-seo-dubai.webp";
import carGarageImg from "../../../../images/car-garage-seo-dubai.webp";
import carRentalImg from "../../../../images/car-rental-seo-dubai.webp";
import autoPartsImg from "../../../../images/auto-parts-seo-dubai.webp";
import localSEOImg from "../../../../images/local-seo-automotive-dubai.webp";
import automotiveProcessImg from "../../../../images/automotive-seo-process-diglip7.webp";
import {
  Car,
  Wrench,
  Search,
  Gauge,
  ShieldCheck,
  MapPin,
  TrendingUp,
  CheckCircle2,
  AlertTriangle,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Home,
  Clock,
  Sparkles,
  Smartphone,
  FileText,
  BookOpen,
  HelpCircle,
  Package,
  Settings,
  Key,
  Compass,
  Briefcase,
  Layers,
  BarChart3,
  PhoneCall,
  CheckSquare,
  Building2,
  Target,
  ShoppingBag,
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

// Clean Automotive SEO Image Component
// When an image is provided and loads, only the complete, uncropped image is displayed with no alt text or sizes shown on the UI.
// If no image is provided or fails to load, shows the placeholder with the alt name only (all size text and badges removed).
const ServiceImage = ({
  src,
  alt,
  width = 1200,
  height = 630,
  priority = false,
  aspect = "aspect-auto",
  placeholderAspect = "aspect-[16/10] sm:aspect-[4/3]",
  className = "",
  imgClassName = "w-full h-auto block rounded-2xl",
  icon: Icon = Car,
}) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [src]);

  const showPlaceholder = !src || hasError;

  return (
    <div
      className={`relative w-full rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50/60 via-white to-indigo-50/40 border border-blue-100/90 shadow-md flex items-center justify-center ${showPlaceholder ? (aspect !== "aspect-auto" ? aspect : placeholderAspect) : aspect} ${className}`}
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
        <div className="p-8 sm:p-12 text-center text-sm font-medium text-slate-800 select-none flex flex-col items-center justify-center gap-4 w-full h-full bg-gradient-to-b from-white/95 to-blue-50/50 relative overflow-hidden">
          <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-700 border border-blue-200 flex items-center justify-center shadow-xs">
            <Icon className="w-8 h-8" />
          </div>
          <p className="max-w-md text-base sm:text-lg font-bold text-gray-800 leading-snug">
            {alt}
          </p>
        </div>
      )}
    </div>
  );
};

// Breadcrumb Trail configuration
const breadcrumbTrail = [
  { label: "Home", href: "/" },
  { label: "UAE", href: "/uae/seo-services" },
  { label: "Dubai", href: "/uae/dubai/seo-services" },
  { label: "Automotive SEO Dubai", href: "/uae/dubai/automotive-seo/" },
];

// Core Services Offered
const automotiveServices = [
  {
    title: "Automotive Keyword Research and Search Intent",
    desc: "Automotive keyword research identifies the searches that matter for your particular business, and what the person behind each search is trying to do. A dealership may focus on model, brand and used-car searches. A repair workshop will care more about specific services and the areas it serves. A spare-parts retailer needs to understand how customers search by part type, brand and vehicle compatibility. Mapping these searches to the right pages is what makes the research useful.",
    icon: Search,
    highlight: "Query Intent Mapping",
  },
  {
    title: "On-Page SEO and Automotive Service Pages",
    desc: "On-page optimisation covers page titles, meta descriptions, headings, service descriptions, product categories, vehicle pages, internal links and calls to action. The aim is clarity: each page should say what it offers, who it is for and what to do next. Useful, unique content matters more than keyword placement, particularly on pages that look alike at first glance.",
    icon: FileText,
    highlight: "High-Clarity Conversion Pages",
  },
  {
    title: "Technical SEO for Automotive Websites",
    desc: "Automotive sites are often large and constantly changing. Technical SEO looks at crawlability, indexability, mobile usability, page performance, redirects, canonical URLs and XML sitemaps. It also covers how to manage large inventories, where vehicles are added, sold and removed regularly, without leaving search engines with broken or duplicate pages.",
    icon: Settings,
    highlight: "Inventory Crawl Efficiency",
  },
  {
    title: "Local SEO for Automotive Businesses",
    desc: "Local SEO helps customers nearby find you. It involves accurate business profiles, consistent location information, legitimate local citations and genuine customer feedback where platforms permit it. Business details must be truthful and meet each platform's eligibility requirements.",
    icon: MapPin,
    highlight: "Google Maps & Local Presence",
  },
  {
    title: "Automotive Content Strategy",
    desc: "Good automotive content answers real questions: maintenance guides, buying advice, vehicle comparisons and clear explanations of the services you offer. Done well, automotive content marketing builds trust before a customer ever contacts you.",
    icon: BookOpen,
    highlight: "Trust-Building Guides",
  },
  {
    title: "SEO Performance Tracking",
    desc: "Organic search performance and meaningful enquiries can be measured with suitable analytics and reporting tools. Tracking shows which pages and topics contribute to real business activity, so decisions are based on evidence.",
    icon: BarChart3,
    highlight: "Commercial Enquiry Metrics",
  },
];

// Solutions for Different Automotive Business Types
const businessSolutions = [
  {
    title: "SEO for Car Dealerships and Showrooms",
    desc: "For SEO for car dealerships in Dubai, the focus is usually on vehicle listing optimisation, accurate specifications, model and category pages, used-car searches and well-maintained inventory. Duplicate or outdated listings frustrate customers who arrive to find a car that is no longer available, and they can weaken the overall quality of the site. Clear enquiry pathways, such as call buttons, forms and test-drive requests, help interested buyers act.",
    icon: Car,
    points: [
      "Individual Vehicle Detail Pages (VDPs) with authentic photography",
      "Model, brand, body-style, and used-car category taxonomy",
      "Automated stock-turnover redirects avoiding thin or dead URLs",
      "Instant test-drive and WhatsApp showroom booking channels",
    ],
    image: carDealershipImg,
    alt: "Used car showroom inventory page optimised for search",
  },
  {
    title: "SEO for Car Repair Garages and Service Centers",
    desc: "For auto repair and car garage SEO, the priorities are service-specific pages, local search visibility, helpful maintenance information and clear contact details. Pages should reflect the repairs and servicing you genuinely offer, so searchers find what they expected.",
    icon: Wrench,
    points: [
      "Dedicated pages for diagnostics, AC repair, brake service, & oil changes",
      "Neighborhood prominence across Al Quoz, Deira, and Al Barsha",
      "Transparent pricing models and genuine customer service warranties",
      "Tap-to-call mobile buttons for drivers needing urgent assistance",
    ],
    image: carGarageImg,
    alt: "Car repair garage service page with clear contact details",
  },
  {
    title: "SEO for Car Rental and Leasing Companies",
    desc: "For car rental SEO, location pages, vehicle categories, rental requirements, booking information and clear terms all help users find the right service and understand what is involved before they enquire.",
    icon: Key,
    points: [
      "Clear category architecture: luxury, economy, monthly, & SUV rentals",
      "Transparent deposit, mileage, insurance, and license requirements",
      "Airport pickup and neighborhood delivery landing pages",
      "Seamless enquiry forms with upfront pricing clarity",
    ],
    image: carRentalImg,
    alt: "Car rental vehicle categories and booking information page",
  },
  {
    title: "SEO for Automotive Spare-Parts Retailers",
    desc: "For auto parts SEO, good product categorisation, compatibility information, accurate specifications, stock details where available and useful internal navigation make large catalogues easier for both customers and search engines to understand.",
    icon: Package,
    points: [
      "OEM and aftermarket component categorization with part numbers",
      "Make, model, and year compatibility filtering and breadcrumbs",
      "Crawl budget optimization for large e-commerce inventory catalogs",
      "Clear stock availability, shipping timelines, and return terms",
    ],
    image: autoPartsImg,
    alt: "Auto spare-parts category page with compatibility information",
  },
  {
    title: "SEO for Multi-Location Automotive Businesses",
    desc: "Businesses with several eligible locations can create location pages with distinct, useful information, such as local services, opening hours and contact details, rather than duplicate pages that only swap the area name. Recommendations should always match the services each location actually provides.",
    icon: Building2,
    points: [
      "Unique landing pages for verified branches across Dubai and the UAE",
      "Individual Google Business Profiles for each physical showroom or workshop",
      "Accurate neighborhood directions, landmarks, and dedicated local phone numbers",
      "Zero programmatic duplicate doorway pages or false location claims",
    ],
    image: localSEOImg,
    alt: "Google Business Profile and local search listings for a Dubai automotive business",
  },
];

// The 6-Step Automotive SEO Process
const processSteps = [
  {
    step: "01",
    title: "Website and SEO Audit",
    desc: "We review technical health, current organic visibility, page structure, content quality, indexation, internal linking and conversion paths to understand where the website stands today.",
    icon: Search,
  },
  {
    step: "02",
    title: "Automotive Keyword and Competitor Research",
    desc: "We identify relevant search themes and examine competing results to see how other businesses organise their pages, explain their services and serve customers. Competitor research is used for insight, never for copying.",
    icon: Compass,
  },
  {
    step: "03",
    title: "Strategy and Page Prioritisation",
    desc: "Improvements are prioritised according to business objectives, search intent, website condition and the resources realistically available. Not everything can or should be done at once.",
    icon: Target,
  },
  {
    step: "04",
    title: "On-Page and Technical Optimisation",
    desc: "We improve relevant page content, titles, headings, links, technical accessibility and user experience, focusing first on the pages with the clearest commercial value.",
    icon: Settings,
  },
  {
    step: "05",
    title: "Content Development and Local SEO",
    desc: "We develop useful automotive content and, where applicable, maintain accurate local business information so customers see consistent details wherever they find you.",
    icon: Layers,
  },
  {
    step: "06",
    title: "Measurement and Continuous Improvement",
    desc: "We review performance, identify gaps and refine the strategy based on evidence rather than assumption.",
    icon: TrendingUp,
  },
];

// 10 Common Automotive SEO Problems We Address
const commonProblems = [
  "Vehicle or product pages with thin descriptions",
  "Duplicate content across inventory pages",
  "Missing or unhelpful page titles",
  "Slow or difficult mobile experiences",
  "Broken links and incorrect redirects",
  "Important service pages that are hard to discover",
  "Outdated inventory or inaccurate service information",
  "Weak internal linking",
  "Unclear enquiry or booking options",
  "Limited measurement of relevant enquiries",
];

// Performance Measurement Metrics
const measurementMetrics = [
  {
    title: "Organic Clicks & Impressions",
    desc: "Tracking search visibility and clicks through Google Search Console to verify overall audience discovery.",
    icon: Search,
  },
  {
    title: "Relevant Queries & Positions",
    desc: "Evaluating rankings for specific vehicle models, workshop repairs, and commercial intent phrases.",
    icon: TrendingUp,
  },
  {
    title: "Key Service & Inventory Pages",
    desc: "Assessing traffic, bounce rates, and dwell time on vital vehicle detail pages and repair descriptions.",
    icon: FileText,
  },
  {
    title: "Qualified Contact Forms",
    desc: "Measuring completed quotation requests, part orders, and test-drive forms from high-intent drivers.",
    icon: CheckSquare,
  },
  {
    title: "Phone Calls & Direct Enquiries",
    desc: "Tracking call-button taps and WhatsApp conversations with verified call-tracking tools.",
    icon: PhoneCall,
  },
  {
    title: "Organic Conversion Rate",
    desc: "Monitoring the percentage of organic sessions that turn into verified customer enquiries.",
    icon: Gauge,
  },
  {
    title: "Local Map Pack Visibility",
    desc: "Tracking local 3-pack rankings, direction requests, and phone inquiries on Google Maps across Dubai.",
    icon: MapPin,
  },
];

// Why Choose DigLip7 Points
const whyChoosePoints = [
  {
    title: "Tailored to Your Business Model",
    desc: "A custom strategy built specifically for whether you sell vehicles, repair them, rent them, or supply spare parts.",
  },
  {
    title: "Technical SEO & Structure",
    desc: "Rigorous attention to crawlability, site speed, and navigation so search engines and motorists find what they need.",
  },
  {
    title: "Original Keyword & Market Research",
    desc: "Relevant research that informs decisions based on Dubai search patterns without copying competitors.",
  },
  {
    title: "High-Clarity, Useful Content",
    desc: "Accurate specifications and answers to real customer questions that build credibility before they contact you.",
  },
  {
    title: "Legitimate Local Search Optimisation",
    desc: "Ethical Google Business Profile optimization and accurate location data matching genuine physical operations.",
  },
  {
    title: "Transparent, Evidence-Based Reporting",
    desc: "Reporting focused on genuine customer enquiries, phone calls, and conversions rather than vanity rankings.",
  },
  {
    title: "Practical Prioritisation",
    desc: "Focusing first on high-impact commercial opportunities that align with your resources and business objectives.",
  },
];

// 8 Frequently Asked Questions
const faqs = [
  {
    q: "What is automotive SEO Dubai?",
    a: "It is the process of improving how automotive businesses in Dubai appear in organic search results, through better content, site structure, technical health and local visibility.",
  },
  {
    q: "How can SEO help a car dealership in Dubai?",
    a: "It can help buyers find your vehicle, model and category pages, keep listings accurate and make it easier for interested customers to enquire.",
  },
  {
    q: "Is local SEO important for automotive workshops?",
    a: "Yes. Many customers look for a garage near them, so accurate location details, a well-managed Google Business Profile and clear service pages matter.",
  },
  {
    q: "Can SEO help car rental and spare-parts businesses?",
    a: "Yes. Rental companies benefit from clear vehicle categories, terms and location information, while parts retailers benefit from organised categories and compatibility details.",
  },
  {
    q: "How long does automotive SEO take to show results?",
    a: "Timelines vary with competition, website condition and the work involved. SEO is generally a medium-to-long-term effort, not an overnight fix.",
  },
  {
    q: "What does an automotive SEO campaign include?",
    a: "Typically an audit, keyword and competitor research, on-page and technical work, content and local SEO, and ongoing reporting. The scope depends on your needs.",
  },
  {
    q: "Can automotive SEO guarantee more leads?",
    a: "No. A reputable agency cannot guarantee rankings, sales or enquiry volumes. SEO can improve your chances of being found by relevant customers.",
  },
  {
    q: "How can I choose an automotive SEO agency in Dubai?",
    a: "Look for clear explanations, realistic expectations, transparent reporting and an approach tailored to your business. Be cautious of guarantees and vague promises.",
  },
];

export default function DubaiAutomotiveSEOService() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Complete JSON-LD Schema combining Organization, WebPage, Service, BreadcrumbList, and FAQPage
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
        "@id": "https://diglip7.com/uae/dubai/automotive-seo/#webpage",
        url: "https://diglip7.com/uae/dubai/automotive-seo/",
        name: "Automotive SEO Dubai | Automotive SEO Services — DigLip7",
        description:
          "Improve your automotive website's search visibility with tailored automotive SEO Dubai strategies for dealerships, garages, rental companies, and retailers.",
        inLanguage: "en-AE",
        isPartOf: { "@id": "https://diglip7.com/#website" },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: "https://diglip7.com/images/automotive-seo-dubai-diglip7.webp",
        },
        breadcrumb: { "@id": "https://diglip7.com/uae/dubai/automotive-seo/#breadcrumb" },
      },
      {
        "@type": "Service",
        "@id": "https://diglip7.com/uae/dubai/automotive-seo/#service",
        name: "Automotive SEO Dubai",
        serviceType: "Automotive SEO Services",
        description:
          "Tailored SEO services for car dealerships, garages, car rental companies, spare-parts retailers and multi-location automotive businesses in Dubai, including keyword research, on-page SEO, technical SEO, local SEO, content strategy and performance tracking.",
        provider: { "@id": "https://diglip7.com/#organization" },
        areaServed: [
          { "@type": "City", name: "Dubai" },
          { "@type": "Country", name: "United Arab Emirates" },
        ],
        audience: {
          "@type": "BusinessAudience",
          audienceType: "Automotive businesses",
        },
        url: "https://diglip7.com/uae/dubai/automotive-seo/",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://diglip7.com/uae/dubai/automotive-seo/#breadcrumb",
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
            name: "Automotive SEO Dubai",
            item: "https://diglip7.com/uae/dubai/automotive-seo/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://diglip7.com/uae/dubai/automotive-seo/#faq",
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
        title="Automotive SEO Dubai | Automotive SEO Services — DigLip7"
        exactTitle={true}
        description="Improve your automotive website's search visibility with tailored automotive SEO Dubai strategies for dealerships, garages, rental companies, and retailers."
        canonical="https://diglip7.com/uae/dubai/automotive-seo/"
        robots="index, follow, max-image-preview:large"
        ogType="website"
        ogLocale="en_AE"
        ogImage="https://diglip7.com/images/automotive-seo-dubai-diglip7.webp"
        ogImageAlt="Automotive SEO Dubai services by DigLip7 for dealerships, garages and car rental companies"
        twitterCard="summary_large_image"
        twitterSite="@diglip7"
        twitterCreator="@diglip7"
        twitterTitle="Automotive SEO Dubai | Automotive SEO Services — DigLip7"
        twitterDescription="Improve your automotive website's search visibility with tailored automotive SEO Dubai strategies for dealerships, garages, rental companies, and retailers."
        twitterImage="https://diglip7.com/images/automotive-seo-dubai-diglip7.webp"
        twitterImageAlt="Automotive SEO Dubai services by DigLip7 for dealerships, garages and car rental companies"
        hreflangs={[
          { hreflang: "en-ae", href: "https://diglip7.com/uae/dubai/automotive-seo/" },
          { hreflang: "x-default", href: "https://diglip7.com/uae/dubai/automotive-seo/" },
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
      <header className="pt-10 sm:pt-16 pb-16 lg:pb-24 bg-gradient-to-b from-blue-50/50 via-slate-50/80 to-white relative overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-blue-200 text-blue-900 text-xs sm:text-sm font-semibold shadow-xs">
                <Car className="w-4 h-4 text-blue-700" />
                <span>Dubai Automotive Search Strategy &bull; DigLip7 Services</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl font-extrabold tracking-tight text-gray-900 leading-tight">
                Automotive SEO Dubai for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-800 to-slate-900">
                  Dealerships, Garages and Automotive Businesses
                </span>
              </h1>

              <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
                <p>
                  A person searching for a used SUV is in a very different place from someone whose car has just
                  started overheating near Sheikh Zayed Road. One is comparing models, prices and mileage over
                  several days. The other wants a trustworthy garage within the hour. A tourist looking for a
                  weekend rental and a fleet manager hunting for a specific brake component are different again.
                  Automotive SEO Dubai work has to account for all of these intentions, which is why a basic,
                  one-size-fits-all SEO setup rarely does enough for an automotive website.
                </p>
                <p className="text-gray-600 text-sm sm:text-base">
                  DigLip7 helps automotive businesses build a search strategy around what they actually sell and
                  where they actually operate. That means looking closely at your services, locations, website
                  structure, inventory and commercial goals, then deciding where organic search can realistically
                  support your business.
                </p>
              </div>

              {/* Realistic Advisory Box */}
              <div className="bg-white/95 rounded-2xl border-l-4 border-blue-600 border border-blue-100 p-5 sm:p-6 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-blue-900 font-bold text-sm sm:text-base">
                  <ShieldCheck className="w-5 h-5 text-blue-600" />
                  <span>Ethical, Realistic Performance</span>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  No agency can promise rankings or a fixed number of leads, and we won't. What we can do is show
                  you where your website is losing visibility, which pages deserve attention first, and how to
                  turn more of the right searches into genuine enquiries.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link to="/contact">
                  <button className="px-7 sm:px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold text-sm sm:text-base rounded-full shadow-lg shadow-blue-600/25 hover:scale-105 transition-all flex items-center gap-2 cursor-pointer">
                    <span>Request an Automotive SEO Consultation</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </button>
                </Link>
                <Link to="/uae/dubai/seo-services">
                  <button className="px-7 sm:px-8 py-3.5 bg-white hover:bg-slate-50 text-blue-950 font-bold text-sm sm:text-base rounded-full border border-blue-200 shadow-xs hover:scale-105 transition-all cursor-pointer">
                    All Dubai SEO Services
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Media Column - Uncropped Full View */}
            <div className="lg:col-span-6 w-full flex justify-center">
              <Card3D className="w-full">
                <div className="bg-white p-3 sm:p-4 rounded-3xl border border-blue-200/90 shadow-2xl hover:shadow-blue-200/50 transition-all">
                  <ServiceImage
                    src={automotiveHeroImg}
                    alt="Automotive SEO Dubai services by DigLip7 for dealerships, garages and car rental companies"
                    priority={true}
                    aspect="aspect-auto"
                    imgClassName="w-full h-auto block rounded-2xl"
                    icon={Car}
                  />
                </div>
              </Card3D>
            </div>
          </div>
        </div>
      </header>

      {/* ================= SECTION 1: WHY AUTOMOTIVE BUSINESSES NEED DEDICATED SEO ================= */}
      <section className="py-16 sm:py-20 bg-slate-50/70 border-b border-gray-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Search Intent & Market Realities</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
                Why Automotive Businesses in Dubai Need a Dedicated SEO Strategy
              </h2>
              <div className="space-y-4 text-gray-700 text-base leading-relaxed">
                <p>
                  Buying and maintaining a vehicle involves research. Before anyone calls a showroom, they usually
                  compare options, read about models, check prices, look at photos and see what other people say.
                  The same is true for servicing: many drivers look for a workshop, scan the services listed,
                  check the location and only then decide whether to get in touch.
                </p>
                <p>
                  That creates a lot of moments where your business either appears or doesn't. Dealerships compete
                  with other dealerships and with large listing platforms. Workshops compete with neighbouring
                  garages and franchise service centres. Rental companies, tyre shops and parts retailers all
                  fight for attention in the same search results.
                </p>
                <p>
                  It also matters what kind of search is happening. Someone reading <em>"how often should a car be serviced in hot weather"</em> is
                  looking for information. Someone searching <em>"car repair service in Dubai Marina"</em> or comparing
                  used SUVs in Dubai is much closer to making a decision. These are illustrative examples rather
                  than research findings, but they show why one generic optimisation approach falls short. The pages,
                  content and calls to action that suit each type of search are different.
                </p>
                <p className="p-4 rounded-xl bg-white border border-blue-200 text-blue-950 text-sm font-medium">
                  <strong>Two-Sided Strategy:</strong> Better visibility only pays off when the website is ready
                  for the visit. If your vehicle details are outdated, your service pages are vague or there is no
                  obvious way to call or book, extra traffic will not turn into business. A dedicated strategy looks
                  at both sides: getting found, and making the next step easy.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 w-full flex justify-center">
              <Card3D className="w-full">
                <div className="bg-white p-3.5 sm:p-5 rounded-3xl border border-blue-200 shadow-xl">
                  <ServiceImage
                    src={automotiveSearchVisibilityImg}
                    alt="Customer searching online for a car dealership or garage in Dubai"
                    aspect="aspect-auto"
                    placeholderAspect="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]"
                    imgClassName="w-full h-auto block rounded-2xl"
                    icon={Search}
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
              <span>Coordinated Strategy</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              Automotive SEO Services in Dubai Offered by DigLip7
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              The services below work best as parts of one coordinated strategy rather than separate deliverables.
              The final scope depends on your business model, website condition and goals, so not every service
              will be needed in every engagement:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {automotiveServices.map((service, idx) => {
              const IconComp = service.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50/80 hover:bg-white p-7 rounded-3xl border border-gray-200/90 hover:border-blue-300 transition-all duration-300 shadow-xs hover:shadow-lg flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-blue-800 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                        {service.highlight}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-blue-900 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-2">
            <Card3D className="w-full">
              <div className="bg-slate-50 p-3 sm:p-5 rounded-3xl border border-blue-200 shadow-xs">
                <ServiceImage
                  src={automotiveServicesImg}
                  alt="Overview of keyword research, technical, local and content SEO services for automotive websites"
                  aspect="aspect-auto"
                  placeholderAspect="aspect-[16/9] sm:aspect-[21/9]"
                  imgClassName="w-full h-auto block rounded-2xl"
                  icon={Layers}
                />
              </div>
            </Card3D>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: SOLUTIONS FOR DIFFERENT BUSINESS TYPES ================= */}
      <section className="py-16 sm:py-24 bg-slate-50/70 border-b border-gray-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold mb-3">
              <Target className="w-3.5 h-3.5" />
              <span>Tailored Business Models</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              SEO Solutions for Different Automotive Business Types
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Automotive SEO services in Dubai are not interchangeable between business models. DigLip7 tailors the
              approach to how your business operates:
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
                    <div className="lg:col-span-6">
                      <ServiceImage
                        src={solution.image}
                        alt={solution.alt}
                        aspect="aspect-auto"
                        placeholderAspect="aspect-[4/3] sm:aspect-[16/10]"
                        imgClassName="w-full h-auto block rounded-2xl"
                        icon={IconComp}
                      />
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
              <span>Step-by-Step Delivery</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              Our Automotive SEO Process
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              This is a practical workflow DigLip7 can use to plan and deliver an SEO campaign. The exact steps
              are adapted to each business:
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
                      <span className="text-3xl font-black text-blue-200 group-hover:text-blue-300">
                        {step.step}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      Step {idx + 1} — {step.title.replace(/^Step \d+ — /, "")}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-2">
            <Card3D className="w-full">
              <div className="bg-slate-50 p-3 sm:p-5 rounded-3xl border border-blue-200 shadow-xs">
                <ServiceImage
                  src={automotiveProcessImg}
                  alt="Six-step automotive SEO process from audit to continuous improvement"
                  aspect="aspect-auto"
                  placeholderAspect="aspect-[16/9] sm:aspect-[21/9]"
                  imgClassName="w-full h-auto block rounded-2xl"
                  icon={Compass}
                />
              </div>
            </Card3D>
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
                <span>Geographic Discovery</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
                How Local SEO Helps Automotive Businesses Across Dubai
              </h2>
              <div className="space-y-4 text-gray-700 text-base leading-relaxed">
                <p>
                  Many automotive searches are local by nature. People look for a workshop close to home, a showroom
                  they can visit or a tyre shop on their route. Strong local SEO for automotive businesses helps
                  your business appear when those nearby searches happen.
                </p>
                <p>
                  Depending on where a business genuinely operates, relevant areas might include <strong>Al Quoz,
                    Dubai Marina, Deira, Business Bay, Al Barsha,</strong> or <strong>Dubai Investment Park</strong>.
                  These should only be mentioned where they reflect real service coverage. Location pages must
                  provide genuine value and accurate information. We do not create doorway pages, and we would
                  never suggest that a company has a physical branch in an area where it does not operate.
                </p>
                <p>
                  Google Business Profile optimisation is a central part of this work. It includes keeping business
                  details accurate, choosing suitable categories, describing services clearly, encouraging legitimate
                  reviews and keeping contact details consistent across the web. Not every business qualifies for
                  every profile feature, so we work within each platform's guidelines.
                </p>
                <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-blue-950 text-xs sm:text-sm">
                  <strong>Ranking Factors:</strong> Local rankings depend on several factors, including relevance,
                  distance and prominence, and no SEO agency can guarantee a particular position. Learn more on
                  DigLip7's dedicated{" "}
                  <Link to="/uae/dubai/local-seo" className="text-blue-700 font-bold hover:underline">
                    Local SEO Dubai
                  </Link>{" "}
                  service page.
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 w-full flex justify-center">
              <Card3D className="w-full">
                <div className="bg-white p-3.5 sm:p-5 rounded-3xl border border-blue-200 shadow-xl">
                  <ServiceImage
                    src={localSEOImg}
                    alt="Google Business Profile and local search listings for a Dubai automotive business"
                    aspect="aspect-auto"
                    placeholderAspect="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]"
                    imgClassName="w-full h-auto block rounded-2xl"
                    icon={MapPin}
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
              <span>Site Audit & Remediation</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              Common Automotive SEO Problems We Help Businesses Address
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              An SEO audit may uncover issues such as:
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
            Not every automotive website has all of these problems. That is why the first step is diagnosis: finding
            out which issues actually affect your site and how much they matter. A dealership with a well-structured
            inventory but poor tracking needs a very different plan from a workshop whose service pages are buried
            three clicks deep. Fixing the right things in the right order is usually more effective than trying to
            fix everything.
          </div>
        </div>
      </section>

      {/* ================= SECTION 7: HOW WE MEASURE PERFORMANCE ================= */}
      <section className="py-16 sm:py-20 bg-slate-50/70 border-b border-gray-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold mb-3">
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Evidence-Based Analytics</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              How We Measure Automotive SEO Performance
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              SEO performance should be judged against your business goals, not rankings alone. A page that ranks
              well but brings no relevant enquiries is not doing its job. Depending on your setup, we look at:
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
              Google Search Console and Google Analytics are the usual starting points for this reporting, alongside
              any call-tracking or booking tools already in place.
            </p>
            <p className="text-xs sm:text-sm text-gray-500 pt-2 border-t border-gray-100">
              <strong>Honest Counsel:</strong> It is also worth being realistic. Rankings, traffic and enquiries
              can fluctuate, and results depend on competition, website condition, content quality, budget and how
              quickly recommendations are implemented. We do not promise a fixed percentage of traffic growth,
              guaranteed rankings or a set number of leads.
            </p>
          </div>

          <div className="pt-2">
            <Card3D className="w-full">
              <div className="bg-white p-3 sm:p-5 rounded-3xl border border-blue-200 shadow-xs">
                <ServiceImage
                  src="/images/automotive-seo-reporting-dashboard.webp"
                  alt="SEO performance dashboard showing organic clicks, impressions and enquiries"
                  aspect="aspect-[21/10] sm:aspect-[21/9]"
                  icon={BarChart3}
                />
              </div>
            </Card3D>
          </div>
        </div>
      </section>

      {/* ================= SECTION 8: WHY CHOOSE DIGLIP7 ================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>The DigLip7 Standard</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              Why Choose DigLip7 for Automotive SEO Dubai?
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Choosing an SEO partner is easier when you know what to expect. DigLip7's approach is built around:
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
            A short discovery conversation is usually the best starting point. We would like to understand your
            services, target customers, locations and current website before suggesting where to begin, because
            the right first step differs from one business to the next.
          </div>
        </div>
      </section>

      {/* ================= SECTION 9: FREQUENTLY ASKED QUESTIONS ================= */}
      <section className="py-16 sm:py-24 bg-slate-50/70 border-b border-gray-200/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Clear Answers</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Frequently Asked Questions About Automotive SEO Dubai
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
            Ready to Build Sustainable Search Visibility?
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-gray-900">
            Get Started with Automotive SEO in Dubai
          </h2>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Looking to improve your automotive business's visibility in search results? Contact DigLip7 to
            discuss your website, target customers and SEO priorities. We can help you identify practical
            opportunities to improve organic visibility and build a strategy aligned with your business goals.
          </p>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            A useful first step is a review of your website, business model, target customers and existing
            organic search performance. From there, we can recommend practical priorities to expand your search footprint across the UAE.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link to="/contact">
              <button className="px-8 sm:px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-extrabold text-sm sm:text-base rounded-full shadow-xl hover:scale-105 transition-all flex items-center gap-2 cursor-pointer">
                <span>Request an SEO Consultation</span>
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
