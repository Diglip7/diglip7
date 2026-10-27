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
  ShoppingBag,
  Stethoscope,
  ShieldCheck,
  Languages,
  Sparkles,
  MousePointerClick,
  Filter,
  DollarSign,
  TrendingUp,
  AlertTriangle,
  HelpCircle,
  Clock,
  Eye,
  RefreshCw,
  PhoneCall,
  PieChart,
  Activity,
  Zap,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

// Imported PPC WebP Images
import ppcHeroImg from "../../../images/ppc-service-seo.webp";
import ppcProcessImg from "../../../images/ppc-campaign-management.webp";
import ppcIndustryImg from "../../../images/ppc-business-owner.webp";

// Image Paths - Connected to WebP assets in src/images and public/images
const heroImgSrc = ppcHeroImg || "/images/ppc-service-seo.webp";
const processImgSrc = ppcProcessImg || "/images/ppc-campaign-management.webp";
const industryImgSrc = ppcIndustryImg || "/images/ppc-business-owner.webp";
const keywordImgSrc = "/images/ppc1.png";
const displayImgSrc = "/images/ppc2 (2).png";
const trackingImgSrc = "/images/ppc001.png";
const analyticsImgSrc = "/images/ppc003.png";
const ecommerceImgSrc = "/images/ecommerce-seo-saudi-arabia.webp";
const bilingualImgSrc = "/images/arabic-english-seo-saudi-arabia.webp";
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

// Image Slot with multi-path fallback and customizable image container
const SEOImageSlot = ({
  src = "",
  alt = "",
  width = 800,
  height = 600,
  aspect = "aspect-[4/3]",
  className = "",
  priority = false,
  fallbackIcon = MousePointerClick,
  badgeText = "",
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  const Icon = fallbackIcon;

  React.useEffect(() => {
    setCurrentSrc(src);
    setHasError(false);
  }, [src]);

  const handleError = () => {
    const fallbackMap = {
      [ppcHeroImg]: "/images/ppc-service-seo.webp",
      [ppcProcessImg]: "/images/ppc-campaign-management.webp",
      [ppcIndustryImg]: "/images/ppc-business-owner.webp",
    };
    const fallbackPath = fallbackMap[src];
    if (fallbackPath && currentSrc !== fallbackPath) {
      setCurrentSrc(fallbackPath);
    } else {
      setHasError(true);
    }
  };

  return (
    <div
      className={`relative w-full rounded-2xl overflow-hidden bg-gradient-to-br from-teal-50/50 via-white to-gray-50 border border-teal-200/80 shadow-md flex items-center justify-center ${aspect} ${className}`}
    >
      {currentSrc && !hasError ? (
        <img
          src={currentSrc}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          onError={handleError}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      ) : (
        <div className="p-6 sm:p-8 text-center text-sm font-medium text-teal-900 select-none flex flex-col items-center justify-center gap-3 w-full h-full bg-gradient-to-b from-white/95 to-teal-50/70 border-2 border-dashed border-teal-300/80 rounded-2xl">
          <div className="w-14 h-14 rounded-2xl bg-teal-100/90 text-teal-800 flex items-center justify-center shadow-xs">
            <Icon className="w-7 h-7" />
          </div>
          <div className="space-y-1.5 max-w-sm">
            <span className="block leading-snug text-xs sm:text-sm font-bold text-gray-800">
              {alt}
            </span>
            {badgeText && (
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800 text-[11px] font-semibold">
                {badgeText}
              </span>
            )}
            <span className="text-[11px] text-gray-500 block pt-0.5">
              [Image Section Container &bull; Ready for Image]
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

// ---------------------------------------------------------------------------
// Document Data (Strictly Verbatim from Prompt)
// ---------------------------------------------------------------------------

const breadcrumbTrail = [
  { label: "Home", href: "/" },
  { label: "Saudi Arabia", href: "/saudi-arabia/seo-services" },
  { label: "PPC Services", href: "/saudi-arabia/ppc-services/" },
];

const strategicBenefits = [
  {
    title: "Reach In-Market Searchers",
    desc: "Reach people searching for specific products or services when need is urgent.",
    icon: Search,
  },
  {
    title: "Granular Precision Targeting",
    desc: "Target by location, search intent, and other permitted campaign settings.",
    icon: Target,
  },
  {
    title: "Deliberate Budget Management",
    desc: "Manage budgets and bidding deliberately instead of guessing.",
    icon: DollarSign,
  },
  {
    title: "A/B Testing & Experimentation",
    desc: "Test different ads and landing pages against each other systematically.",
    icon: RefreshCw,
  },
  {
    title: "Action-Driven Measurement",
    desc: "Measure enquiries, purchases, and other actions that matter to revenue.",
    icon: Activity,
  },
  {
    title: "Wasted Spend Elimination",
    desc: "Cut wasted spend through regular analysis and negative keyword optimization.",
    icon: Filter,
  },
];

const coreServices = [
  {
    id: "strategy-keywords",
    title: "PPC Strategy and Keyword Research",
    short: "Search intent, keyword costs, and negative filtering",
    desc: "We start by finding the searches your customers actually use, what they're probably trying to do, what those clicks might cost, and which negative keywords will keep the wrong traffic out. Priorities shift by business: a store thinks in products and categories, a B2B firm in specific service needs, and a local company in nearby searches. Broad keywords with fuzzy intent are the quickest way to burn budget.",
    icon: Search,
    image: keywordImgSrc,
    features: [
      "Commercial & transactional search intent mapping",
      "Rigorous negative keyword list architecture",
      "Cost-per-click feasibility and budgeting analysis",
      "Bilingual Arabic and English keyword segmentation",
    ],
  },
  {
    id: "campaign-setup",
    title: "Google Ads Campaign Setup and Management",
    short: "Structured search campaigns, ad groups, and settings",
    desc: "Next comes structure: search campaigns, ad groups, keywords, ad copy, bidding, location targeting, and settings. It should mirror how your business really works, including your services, budget, audience, and conversion goals. This is where Google Ads management earns its keep, because a clean structure makes every later decision easier.",
    icon: Settings,
    image: heroImgSrc,
    features: [
      "Tightly themed Single Topic Ad Groups (STAG)",
      "Smart bidding strategy configuration (tCPA, tROAS, Max Conversions)",
      "Location radius and regional city targeting in KSA",
      "Ad assets (sitelinks, callouts, structured snippets, call extensions)",
    ],
  },
  {
    id: "display-remarketing",
    title: "Display Advertising and Remarketing",
    short: "Brand awareness and compliant audience re-engagement",
    desc: "Display campaigns can build awareness, and remarketing can bring back people who've already visited your site, where consent, platform policies, and privacy rules allow it. Neither suits every industry or audience, so we check the fit before recommending them.",
    icon: Eye,
    image: displayImgSrc,
    features: [
      "High-visibility Google Display Network placements",
      "Audience segment remarketing for warm website visitors",
      "Strict compliance with platform policies and privacy rules",
      "Selective placement exclusions to protect brand safety",
    ],
  },
  {
    id: "ad-copy-landing-page",
    title: "PPC Ad Copy and Landing Page Optimization",
    short: "Search intent alignment and high-converting pages",
    desc: "A good ad promises something specific, and the landing page has to deliver it. We write ads around search intent and send visitors to pages with clear service details, helpful calls to action, solid mobile usability, and messaging that matches the ad they just clicked.",
    icon: FileText,
    image: trackingImgSrc,
    features: [
      "Compelling responsive search ads (RSA) with strong USPs",
      "Landing page message-match to boost Quality Score",
      "Frictionless mobile forms and tap-to-call actions",
      "Clear value propositions that set realistic expectations",
    ],
  },
  {
    id: "conversion-tracking",
    title: "Conversion Tracking and Analytics",
    short: "Accurate form, phone call, booking, and purchase tracking",
    desc: "You can't improve what you can't see. We set up tracking for form submissions, purchases, calls, bookings, and other meaningful actions, using Google Ads conversion tracking and Google Analytics where they fit. Accuracy depends on implementation, consent requirements, and data quality, so we test before we trust the numbers.",
    icon: BarChart3,
    image: analyticsImgSrc,
    features: [
      "Google Ads native conversion tracking tag setup",
      "Google Analytics 4 (GA4) event and funnel integration",
      "Call tracking and lead form submission verification",
      "Rigorous end-to-end testing before relying on reported figures",
    ],
  },
  {
    id: "optimization-reporting",
    title: "PPC Campaign Optimization and Reporting",
    short: "Evidence-based refinement and transparent reports",
    desc: "Over time we review search terms, performance, conversion quality, bidding, and landing pages. Changes should come from evidence, not hunches, and reports should explain what moved and why.",
    icon: TrendingUp,
    image: reportingImgSrc,
    features: [
      "Continuous search term reports and negative keyword mining",
      "Bid adjustments based on device, location, and dayparting",
      "Conversion quality and lead qualification reviews",
      "Honest monthly performance reports connecting data to business outcomes",
    ],
  },
];

const industrySolutions = [
  {
    title: "PPC for E-commerce Businesses",
    tag: "Retail & Shopping",
    desc: "Think product-led. That can mean clean product feeds, Google Shopping ads where you're eligible, a sensible category structure, and purchase tracking, so you can see which campaigns really contribute to sales.",
    icon: ShoppingBag,
    color: "from-blue-600 to-cyan-600",
    points: [
      "Clean product feeds & Merchant Center management",
      "Google Shopping and Performance Max campaigns",
      "Sensible product category hierarchy",
      "End-to-end e-commerce revenue and purchase tracking",
    ],
  },
  {
    title: "PPC for B2B and Professional Services",
    tag: "Corporate & Advisory",
    desc: "Quality beats volume here. Precise targeting, service-specific landing pages, clear enquiry forms, and some form of lead qualification help make sure enquiries come from companies that genuinely fit.",
    icon: Building2,
    color: "from-teal-600 to-emerald-600",
    points: [
      "High-intent commercial keywords over broad volume",
      "Service-specific landing pages with dedicated enquiry forms",
      "Lead qualification checkpoints to weed out non-buyers",
      "Audience targeting filtered by seniority and company need",
    ],
  },
  {
    title: "PPC for Real Estate Companies",
    tag: "Property & Development",
    desc: "Search campaigns built around property types and areas, supported by relevant project pages, accurate property details, and enquiry tracking. Real estate advertising is subject to platform policies and local requirements, so we check those first.",
    icon: Home,
    color: "from-amber-600 to-orange-600",
    points: [
      "Location and property-type focused search architecture",
      "Dedicated off-plan and secondary project landing pages",
      "Strict compliance with regional real estate ad regulations",
      "Transparent enquiry and viewing request tracking",
    ],
  },
  {
    title: "PPC for Healthcare and Education Businesses",
    tag: "Medical & Institutions",
    desc: "Accuracy comes first. Messages need to be honest, landing pages appropriate, and campaigns compliant with relevant advertising policies and regulations. We don't recommend restricted targeting or claims you can't support.",
    icon: Stethoscope,
    color: "from-rose-600 to-pink-600",
    points: [
      "Strict compliance with medical advertising policies",
      "Ethical, transparent messaging without unsupported claims",
      "Specialty-specific patient enquiry and consultation flows",
      "Secure and compliant conversion measurement",
    ],
  },
  {
    title: "PPC for Local and Service-Based Businesses",
    tag: "Local Service Providers",
    desc: "Relevant geographic targeting, service-specific ads, clear contact details, and conversion actions such as calls or booking requests usually do the heavy lifting.",
    icon: MapPin,
    color: "from-indigo-600 to-purple-600",
    points: [
      "City, district, and radius geographic targeting in KSA",
      "Direct click-to-call ads for urgent service requests",
      "Prominent contact details and immediate booking options",
      "Fast response lead follow-up optimization",
    ],
  },
];

const processSteps = [
  {
    step: "Step 1",
    title: "Business and Campaign Audit",
    desc: "We review existing campaigns, website performance, available conversion data, your audience, objectives, and budget. It tells us where you're really starting from.",
    icon: Search,
  },
  {
    step: "Step 2",
    title: "Keyword and Competitor Research",
    desc: "We identify relevant search terms and look at competing ads where they're visible, including how others present their offers. The aim is to spot opportunities, not copy anyone.",
    icon: Target,
  },
  {
    step: "Step 3",
    title: "Campaign Strategy and Budget Planning",
    desc: "We propose a structure based on your objectives, target locations, audience, keyword relevance, and budget. We don't invent cost-per-click estimates or promise fixed acquisition costs.",
    icon: DollarSign,
  },
  {
    step: "Step 4",
    title: "Campaign Setup and Tracking",
    desc: "We configure settings, ad groups, ads, landing pages, and conversion tracking, then verify that tracking works before using reported conversions to make big decisions.",
    icon: Settings,
  },
  {
    step: "Step 5",
    title: "Testing and Optimization",
    desc: "We look at search terms, ad relevance, conversion performance, audience settings, and landing page experience, and change things only when the evidence is reliable enough.",
    icon: RefreshCw,
  },
  {
    step: "Step 6",
    title: "Reporting and Ongoing Improvement",
    desc: "We report on activity, outcomes, spend, and what to improve next, and we adjust the strategy as better data comes in.",
    icon: BarChart3,
  },
];

const commonProblems = [
  {
    issue: "Broad or irrelevant keywords",
    fix: "Attracting irrelevant clicks and burning budget on curiosity queries.",
  },
  {
    issue: "Weak negative keyword management",
    fix: "Failing to filter out unwanted searches like 'free', 'jobs', or irrelevant products.",
  },
  {
    issue: "Poorly structured campaigns and ad groups",
    fix: "Lumping unrelated keywords together, hurting ad relevance and Quality Score.",
  },
  {
    issue: "Ads that don't match search intent",
    fix: "Generic copy that fails to address the user's specific problem or enquiry.",
  },
  {
    issue: "Landing pages with unclear messaging or CTAs",
    fix: "Sending paid traffic to homepages or confusing pages with no clear next step.",
  },
  {
    issue: "Incorrect or duplicated conversion tracking",
    fix: "Inflated or missing numbers creating misleading ROI and wasted bidding.",
  },
  {
    issue: "Budgets that don't reflect campaign objectives",
    fix: "Spreading small budgets across too many campaigns or overspending on low-margin terms.",
  },
  {
    issue: "Limited mobile usability",
    fix: "Slow-loading mobile pages or clumsy forms causing immediate drop-offs.",
  },
  {
    issue: "Weak lead qualification or follow-up",
    fix: "Slow sales response times letting hot incoming leads go cold.",
  },
  {
    issue: "Reporting that ignores meaningful business outcomes",
    fix: "Focusing on vanity metrics like clicks while ignoring actual pipeline and sales.",
  },
];

const measurementMetrics = [
  { name: "Impressions & Clicks", desc: "Top-of-funnel reach and search interest volume" },
  { name: "Click-Through Rate (CTR)", desc: "Ad relevance and appeal relative to search queries" },
  { name: "Cost Per Click (CPC)", desc: "Auction competitiveness and bidding efficiency" },
  { name: "Conversion Rate", desc: "Percentage of visitors completing high-value actions" },
  { name: "Cost Per Conversion / Qualified Lead", desc: "True acquisition cost for actionable business leads" },
  { name: "Lead Quality Assessment", desc: "Evaluating whether enquiries match your target client profile" },
  { name: "Purchases and Revenue", desc: "Verified e-commerce transactions directly attributed to ads" },
  { name: "Return on Ad Spend (ROAS)", desc: "Revenue generated for every dollar or riyal invested in ad spend" },
];

const whyDiglip7Pillars = [
  {
    title: "Strategies Tailored to Business Objectives",
    desc: "Custom structures built around what your company actually sells and needs.",
  },
  {
    title: "Actually Relevant Keyword & Audience Research",
    desc: "Rigorous focus on commercial intent and negative keywords to protect your spend.",
  },
  {
    title: "Structured Campaign Setup & Management",
    desc: "Clean architectures that make long-term optimization simple and transparent.",
  },
  {
    title: "Landing Page Relevance & Conversion Focus",
    desc: "Ensuring post-click experience matches ad messaging for maximum conversion.",
  },
  {
    title: "Proper Tracking & Honest Measurement",
    desc: "Configuring and verifying GA4 and Google Ads tags before trusting data.",
  },
  {
    title: "Optimization Based on Evidence",
    desc: "Changes driven by real search terms and conversion trends, not speculative hunches.",
  },
  {
    title: "Clear Reporting & Honest Communication",
    desc: "Direct explanations of what moved, what didn't, and what we are adjusting next.",
  },
  {
    title: "Budget Decisions Aligned with Priorities",
    desc: "Allocating spend where it earns its keep rather than spreading it thin.",
  },
];

const faqs = [
  {
    q: "What are PPC services in Saudi Arabia?",
    a: "PPC services in Saudi Arabia are paid advertising management services that help businesses reach relevant customers in the Saudi market through platforms such as Google Ads. Advertisers pay when someone clicks an ad.",
  },
  {
    q: "How much do PPC services cost in Saudi Arabia?",
    a: "It varies. Management fees and ad spend depend on campaign scope, competition, platform, and business requirements. After we understand your goals, we can discuss an approach that fits your budget.",
  },
  {
    q: "Is Google Ads suitable for businesses in Saudi Arabia?",
    a: "It can be. Suitability depends on search demand, customer behavior, competition, budget, and your business goals.",
  },
  {
    q: "How long does it take to see results from PPC advertising?",
    a: "Ads may start serving once they're approved and set up, but judging performance takes enough reliable data. We can't promise a timeline for results.",
  },
  {
    q: "Can PPC generate leads for my business?",
    a: "PPC can bring relevant visitors and support lead generation, but lead volume and quality can't be guaranteed.",
  },
  {
    q: "Should I advertise in Arabic or English in Saudi Arabia?",
    a: "It depends on your audience, how they search, the service you offer, and the customer support you can provide in each language.",
  },
  {
    q: "What is included in PPC campaign management?",
    a: "Depending on the agreed scope: keyword research, campaign setup, ad creation, conversion tracking, optimization, and reporting.",
  },
  {
    q: "Can DigLip7 manage existing Google Ads campaigns?",
    a: "Yes. We can review an existing campaign to spot potential improvements, then confirm the scope after assessing the account and your objectives.",
  },
];

// ---------------------------------------------------------------------------
// Main Component
// ---------------------------------------------------------------------------

const SaudiPPCServices = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [faqSearch, setFaqSearch] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState(0);

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.q.toLowerCase().includes(faqSearch.toLowerCase()) ||
      faq.a.toLowerCase().includes(faqSearch.toLowerCase())
  );

  const pageUrl = "https://diglip7.com/saudi-arabia/ppc-services/";

  // Structured Data (JSON-LD) Schemas strictly adhering to specifications
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://diglip7.com/#organization",
      name: "DigLip7",
      url: "https://diglip7.com/",
      logo: "https://diglip7.com/images/Logo.jpg",
      description:
        "DigLip7 is a digital marketing service provider offering SEO, paid advertising, and related online marketing services.",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "Admin@diglip7.com",
        telephone: "+91-9650608788",
        availableLanguage: ["English", "Arabic"],
      },
      sameAs: [
        "https://www.linkedin.com/company/diglip7",
        "https://www.instagram.com/diglip7",
        "https://twitter.com/diglip7",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "PPC Services Saudi Arabia | PPC Management — DigLip7",
      description:
        "Explore PPC services in Saudi Arabia from DigLip7. Plan and optimize paid advertising campaigns with relevant targeting, conversion tracking, and performance reporting.",
      inLanguage: "en",
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://diglip7.com/#website",
        url: "https://diglip7.com/",
        name: "DigLip7",
      },
      about: {
        "@id": `${pageUrl}#service`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
      dateModified: "2026-10-21",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "PPC Services Saudi Arabia",
      serviceType: "PPC management and paid search advertising",
      description:
        "Planning, management, optimization, and reporting of pay-per-click advertising campaigns for businesses in Saudi Arabia, including Google Ads management, keyword research, landing page optimization, and conversion tracking.",
      url: pageUrl,
      provider: {
        "@id": "https://diglip7.com/#organization",
      },
      areaServed: {
        "@type": "Country",
        name: "Saudi Arabia",
      },
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "Business owners, marketing managers, e-commerce companies, and B2B organizations",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "PPC services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "PPC strategy and keyword research",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Google Ads campaign setup and management",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Display advertising and remarketing",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "PPC ad copy and landing page optimization",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Conversion tracking and analytics",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "PPC campaign optimization and reporting",
            },
          },
        ],
      },
    },
    {
      "@context": "https://schema.org",
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
          item: "https://diglip7.com/saudi-arabia/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "PPC Services",
          item: pageUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
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
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-teal-500 selection:text-white pt-20">
      {/* Dynamic SEO Meta, Hreflang, Canonical, OpenGraph, Twitter, and Schema */}
      <SEO
        title="PPC Services Saudi Arabia | PPC Management — DigLip7"
        exactTitle={true}
        description="Explore PPC services in Saudi Arabia from DigLip7. Plan and optimize paid advertising campaigns with relevant targeting, conversion tracking, and performance reporting."
        canonical={pageUrl}
        robots="index, follow, max-image-preview:large"
        hreflangs={[
          { hreflang: "en-sa", href: pageUrl },
          { hreflang: "x-default", href: pageUrl },
        ]}
        ogType="website"
        ogLocale="en_SA"
        ogTitle="PPC Services Saudi Arabia | PPC Management — DigLip7"
        ogDescription="Plan, manage, and measure paid advertising campaigns in Saudi Arabia with DigLip7."
        ogImage="https://diglip7.com/images/ppc-service-seo.webp"
        ogImageAlt="Marketing team reviewing a Google Ads campaign dashboard"
        twitterCard="summary_large_image"
        twitterTitle="PPC Services Saudi Arabia | PPC Management — DigLip7"
        twitterDescription="Plan, manage, and measure paid advertising campaigns in Saudi Arabia with DigLip7."
        twitterImage="https://diglip7.com/images/ppc-service-seo.webp"
        twitterImageAlt="Marketing team reviewing a Google Ads campaign dashboard"
        schema={structuredData}
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 border-b border-gray-200/80 py-3 px-4 sm:px-6 lg:px-8">
        <nav
          aria-label="Breadcrumb"
          className="max-w-7xl mx-auto flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-gray-600"
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
      <section className="pt-8 sm:pt-12 pb-16 lg:pb-24 bg-gradient-to-r from-purple-100 via-pink-100 to-white relative overflow-hidden">
        {/* Floating background blur circles */}
        <motion.div
          className="absolute top-12 left-10 w-24 h-24 bg-teal-300/20 rounded-full blur-2xl pointer-events-none"
          animate={{ y: [0, 25, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-12 right-12 w-32 h-32 bg-purple-300/25 rounded-full blur-3xl pointer-events-none"
          animate={{ y: [0, -25, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
            {/* Left Content Column */}
            <div className="w-full lg:w-[60%] text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-800 text-teal-100 text-xs sm:text-sm font-medium mb-4 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-teal-300 animate-pulse" />
                Google Ads & Paid Advertising • Saudi Arabia
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold leading-tight tracking-tight text-gray-950 mb-5">
                PPC Services Saudi Arabia{" "}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-emerald-600 to-teal-900">
                  for Targeted Advertising and Business Growth
                </span>
              </h1>

              {/* Direct Context Box */}
              <div className="bg-white/95 backdrop-blur-md border border-teal-200/80 p-5 sm:p-6 rounded-2xl mb-6 shadow-sm text-left">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-teal-100/70 text-teal-800 shrink-0 mt-0.5">
                    <MousePointerClick className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-base sm:text-lg font-bold text-teal-900 mb-1.5">
                      Be There in the Exact Moment Customers Search
                    </h2>
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                      Think about the last time you needed something in a hurry: a supplier, a
                      service provider, a product you couldn't find in store. Chances are you
                      searched for it and clicked one of the first results you saw. Pay-per-click
                      (PPC) advertising puts your business in that exact moment, and you pay only
                      when someone clicks.
                    </p>
                  </div>
                </div>
              </div>

              {/* Verbatim Intro Paragraphs */}
              <div className="space-y-3.5 text-gray-700 text-sm sm:text-base leading-relaxed mb-7 max-w-2xl mx-auto lg:mx-0 text-left">
                <p>
                  That is what <strong>PPC Services Saudi Arabia</strong> comes down to: showing the right
                  message to the right people while they're actively looking, whether that happens through
                  Google Ads search results, product listings, display placements, or another platform that
                  suits your goals.
                </p>
                <p>
                  <strong className="text-teal-900">DigLip7</strong> is a digital marketing service
                  provider that helps businesses plan and manage paid advertising around their audience,
                  budget, objectives, and the data they already have. We'll be straight with you about
                  one thing, though: launching ads is the easy part. What decides whether a campaign
                  earns its budget is everything around it, from keyword choices and targeting to ad
                  messaging, landing pages, conversion tracking, and steady optimization.
                </p>
                <div className="p-4 rounded-xl bg-amber-50/90 border border-amber-200 text-amber-950 text-xs sm:text-sm font-medium flex items-start gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <span>
                    Nobody can honestly promise instant sales or guaranteed results. What we can do
                    is build campaigns carefully and measure them properly.
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3 sm:gap-4">
                <Link to="/contact">
                  <motion.button
                    className="group px-7 py-4 bg-gradient-to-r from-teal-700 to-teal-900 text-white text-sm sm:text-base font-semibold rounded-full shadow-xl hover:shadow-teal-700/30 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Request a PPC Consultation
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
                <a
                  href="https://wa.me/919650608788?text=Hello%20DigLip7%20Team%2C%20I%20would%20like%20to%20discuss%20PPC%20Services%20and%20Google%20Ads%20for%20my%20business%20in%20Saudi%20Arabia."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    className="px-6 py-4 bg-white text-teal-800 border-2 border-teal-700 text-sm sm:text-base font-semibold rounded-full shadow-md hover:bg-teal-50/50 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <FaWhatsapp className="w-5 h-5 text-emerald-600" />
                    Chat on WhatsApp
                  </motion.button>
                </a>
              </div>
            </div>

            {/* Right Interactive Visual Card */}
            <div className="w-full lg:w-[40%] flex justify-center">
              <Card3D className="w-full max-w-md lg:max-w-none">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                  <SEOImageSlot
                    src={heroImgSrc}
                    alt="Marketing team reviewing a Google Ads campaign dashboard"
                    aspect="aspect-[4/3]"
                    priority={true}
                    fallbackIcon={MousePointerClick}
                    badgeText="Hero Image Section"
                  />

                  {/* Glassmorphic Metric Overlay Badges */}
                  <div className="p-5 bg-gradient-to-b from-white to-gray-50 border-t border-gray-100 space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-gray-200/60">
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Campaign Highlights
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-600" /> Verified Tracking
                      </span>
                    </div>

                  </div>
                </div>
              </Card3D>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Why Businesses in Saudi Arabia Need a Strategic PPC Approach */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3.5 py-1 rounded-full">
              Strategic Value
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mt-3 mb-4">
              Why Businesses in Saudi Arabia Need a Strategic PPC Approach
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              PPC is flexible, and that's both its strength and its trap. You can launch quickly,
              test ideas cheaply, and adjust as you learn. But without a plan, it's just as easy to
              spend a lot and learn very little.
            </p>
          </div>

          {/* 6 Benefit Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {strategicBenefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  className="p-6 rounded-2xl bg-gradient-to-b from-gray-50 to-white border border-gray-200/80 hover:border-teal-500/50 hover:shadow-lg transition-all duration-300 group"
                  whileHover={{ y: -4 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-teal-100/60 text-teal-800 flex items-center justify-center mb-4 group-hover:bg-teal-700 group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {benefit.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Hypothetical Example Callout Box */}
          <div className="rounded-3xl p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-teal-900 via-teal-950 to-gray-900 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="space-y-4 max-w-3xl">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-teal-300 uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full">
                  <Sparkles className="w-3.5 h-3.5 text-teal-300" />
                  Practical Scenario • Non-Client Demonstration
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Hypothetical Example: Broad Clicks vs. Intent-Driven Enquiries
                </h3>
                <p className="text-teal-100/90 text-sm sm:text-base leading-relaxed">
                  Here's a hypothetical example, not a client result. Picture a Riyadh-based
                  professional services firm running ads on a very broad phrase. It collects
                  plenty of clicks, mostly from students and people who are just curious. Now
                  imagine it narrows its campaigns to searches that clearly signal a need for the
                  service and sends visitors to a page with one simple enquiry form. The traffic is
                  smaller, but far more of it is relevant.
                </p>
                <div className="pt-2 border-t border-teal-800/80 text-xs sm:text-sm text-teal-200/90 font-medium flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>
                    Clicks alone never guarantee leads or sales. Pricing, competition, your offer,
                    the landing page, and how quickly your team replies to enquiries all play a
                    part.
                  </span>
                </div>
              </div>

              <div className="shrink-0 w-full lg:w-auto">
                <Link to="/contact">
                  <button className="w-full lg:w-auto px-6 py-3.5 rounded-full bg-teal-400 hover:bg-teal-300 text-teal-950 font-bold text-sm transition-all duration-200 shadow-lg cursor-pointer">
                    Request an Account Review
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: PPC Services in Saudi Arabia Offered by DigLip7 */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50/70 relative border-t border-gray-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3.5 py-1 rounded-full">
              Full Spectrum Services
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mt-3 mb-4">
              PPC Services in Saudi Arabia Offered by DigLip7
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Our PPC services in Saudi Arabia work as one connected workflow, not a menu of
              unrelated extras. Keywords shape ad groups, ad groups shape ad copy, ad copy points
              to a landing page, and tracking tells you what happened next. The exact scope depends
              on your needs and the objectives we agree together.
            </p>
          </div>

          {/* Connected Workflow Banner */}
          <div className="hidden md:flex items-center justify-between p-4 mb-12 rounded-2xl bg-white border border-teal-100 shadow-sm text-xs font-semibold text-gray-700">
            <div className="flex items-center gap-2 text-teal-800">
              <span className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center font-bold text-xs">
                1
              </span>
              <span>Keyword Strategy</span>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400" />
            <div className="flex items-center gap-2 text-teal-800">
              <span className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center font-bold text-xs">
                2
              </span>
              <span>Ad Group Structure</span>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400" />
            <div className="flex items-center gap-2 text-teal-800">
              <span className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center font-bold text-xs">
                3
              </span>
              <span>Intent-Driven Ad Copy</span>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400" />
            <div className="flex items-center gap-2 text-teal-800">
              <span className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center font-bold text-xs">
                4
              </span>
              <span>Optimized Landing Page</span>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400" />
            <div className="flex items-center gap-2 text-teal-800">
              <span className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center font-bold text-xs">
                5
              </span>
              <span>Conversion Tracking</span>
            </div>
          </div>

          {/* 6 Connected Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.id}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                      {svc.title}
                    </h3>
                    <div className="text-xs font-semibold text-teal-700 mb-3">{svc.short}</div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
                      {svc.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 space-y-2">
                    {svc.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2 text-xs text-gray-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4: PPC Solutions for Different Industries in Saudi Arabia */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3.5 py-1 rounded-full">
              Industry Customization
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mt-3 mb-4">
              PPC Solutions for Different Industries in Saudi Arabia
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              A strategy that works for an online store won't automatically suit a clinic or a
              property developer. Here's how the thinking changes, always grounded in what you
              actually offer.
            </p>
          </div>

          {/* Industry Selection Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
            {industrySolutions.map((ind, idx) => (
              <button
                key={ind.title}
                onClick={() => setSelectedIndustry(idx)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${selectedIndustry === idx
                  ? "bg-teal-800 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
              >
                {ind.tag}
              </button>
            ))}
          </div>

          {/* Active Industry Showcase Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIndustry}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-teal-50/60 via-white to-gray-50 rounded-3xl p-6 sm:p-10 border border-teal-100 shadow-lg"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-100 text-teal-900 text-xs font-bold uppercase tracking-wider">
                    {industrySolutions[selectedIndustry].tag}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                    {industrySolutions[selectedIndustry].title}
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {industrySolutions[selectedIndustry].desc}
                  </p>
                  <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {industrySolutions[selectedIndustry].points.map((pt) => (
                      <div
                        key={pt}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-gray-200/70 text-xs sm:text-sm text-gray-800"
                      >
                        <CheckCircle className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 flex justify-center">
                  <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-xl border border-teal-100 bg-white p-6 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-teal-700 text-white flex items-center justify-center mx-auto mb-4 shadow-md">
                      {React.createElement(industrySolutions[selectedIndustry].icon, {
                        className: "w-8 h-8",
                      })}
                    </div>
                    <div className="text-sm font-bold text-gray-900 mb-1">
                      Ready to advertise in this sector?
                    </div>
                    <p className="text-xs text-gray-600 mb-5 leading-relaxed">
                      Discuss industry benchmarks, regulatory guardrails, and cost expectations with our team.
                    </p>
                    <Link to="/contact">
                      <button className="w-full py-3 rounded-xl bg-teal-800 hover:bg-teal-900 text-white text-xs font-bold transition duration-200 cursor-pointer">
                        Consult with DigLip7
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Industry Image Section */}
          <div className="my-10 max-w-4xl mx-auto">
            <Card3D className="w-full">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white p-2">
                <SEOImageSlot
                  src={industryImgSrc}
                  alt="Business owner reviewing online advertising performance on a laptop"
                  aspect="aspect-[16/9] sm:aspect-[21/9]"
                  fallbackIcon={BarChart3}
                  badgeText="Industry Performance Section"
                />
              </div>
            </Card3D>
          </div>

          {/* Quick Grid of All Industries */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-8">
            {industrySolutions.map((ind, idx) => (
              <div
                key={ind.title}
                onClick={() => setSelectedIndustry(idx)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer text-left ${selectedIndustry === idx
                  ? "border-teal-700 bg-teal-50/50 shadow-xs"
                  : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
              >
                <div className="text-xs font-bold text-teal-900 mb-1">{ind.tag}</div>
                <div className="text-xs text-gray-600 line-clamp-2">{ind.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Our PPC Campaign Management Process */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-teal-300 bg-teal-900/60 px-3.5 py-1 rounded-full border border-teal-700">
              Systematic Execution
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3 mb-4">
              Our PPC Campaign Management Process
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Here's how we typically plan and manage a campaign, from first look to ongoing
              improvement.
            </p>
          </div>

          {/* Process Image Section */}
          <div className="my-10 max-w-4xl mx-auto">
            <Card3D className="w-full">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-800 bg-gray-900 p-2">
                <SEOImageSlot
                  src={processImgSrc}
                  alt="Six-step PPC campaign management process from audit to reporting"
                  aspect="aspect-[16/9] sm:aspect-[21/9]"
                  fallbackIcon={RefreshCw}
                  badgeText="Process Management Section"
                  className="bg-gray-900 border-gray-700"
                />
              </div>
            </Card3D>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((stp, idx) => {
              const Icon = stp.icon;
              return (
                <div
                  key={stp.step}
                  className="p-6 sm:p-7 rounded-2xl bg-gray-900/90 border border-gray-800 hover:border-teal-500/60 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-teal-400 bg-teal-950/80 px-2.5 py-1 rounded-md border border-teal-800">
                        {stp.step}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-gray-800 text-teal-300 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-colors duration-200">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2.5">
                      {stp.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{stp.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 6: Google Ads and Paid Advertising Across Saudi Arabia */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3.5 py-1 rounded-full">
                Regional Dynamics
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900">
                Google Ads and Paid Advertising Across Saudi Arabia
              </h2>
              <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
                <p>
                  Geographic targeting lets you reach relevant customers across the Kingdom, but only
                  where it matches your real market. <strong>Riyadh, Jeddah, Dammam</strong>, and
                  other cities make sense when you actually serve them. A business that works in one
                  city doesn't need campaigns for all of them, and we won't suggest otherwise.
                </p>
                <p>
                  <strong>Language matters just as much.</strong> Some businesses do best with
                  Arabic campaigns, some with English, and some with a carefully managed mix. The
                  right call depends on your customers' preferences, how they search, and whether you
                  have the people to respond in each language.
                </p>
                <div className="p-4 rounded-xl bg-teal-50 border border-teal-200 text-teal-950 text-xs sm:text-sm font-medium">
                  Keep in mind that choosing a location in campaign settings doesn't guarantee every
                  click or enquiry will come from your ideal customer. That's why targeting,
                  bidding, budgets, and ad schedules should be reviewed against performance data and
                  your business needs.
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-3xl bg-gray-50 border border-gray-200/80 shadow-sm space-y-4">
                <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-teal-700" />
                  Key Advertising Centers in KSA
                </h3>
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-white border border-gray-100 flex items-center justify-between text-xs sm:text-sm font-medium text-gray-800">
                    <span>Riyadh (Capital & Commercial Hub)</span>
                    <span className="text-teal-700 font-bold">High Intent</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-gray-100 flex items-center justify-between text-xs sm:text-sm font-medium text-gray-800">
                    <span>Jeddah (Western Commercial Gateway)</span>
                    <span className="text-teal-700 font-bold">Trade & Retail</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-gray-100 flex items-center justify-between text-xs sm:text-sm font-medium text-gray-800">
                    <span>Dammam & Khobar (Eastern Province)</span>
                    <span className="text-teal-700 font-bold">Industrial & B2B</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-gray-100 flex items-center justify-between text-xs sm:text-sm font-medium text-gray-800">
                    <span>Mecca & Medina</span>
                    <span className="text-teal-700 font-bold">Hospitality & Services</span>
                  </div>
                </div>
                <div className="pt-2 text-xs text-gray-500 text-center">
                  Bilingual ad sets configured to prevent overlap and budget cannibalization.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Common PPC Problems We Help Businesses Address */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 border-t border-b border-gray-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-3.5 py-1 rounded-full">
              Audit & Troubleshooting
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mt-3 mb-4">
              Common PPC Problems We Help Businesses Address
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              When we audit a campaign, these are the kinds of issues we look for:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {commonProblems.map((prob, idx) => (
              <div
                key={prob.issue}
                className="p-5 rounded-2xl bg-white border border-gray-200/80 hover:border-rose-300 shadow-xs flex items-start gap-3.5"
              >
                <div className="w-8 h-8 rounded-lg bg-rose-100/70 text-rose-700 flex items-center justify-center shrink-0 mt-0.5">
                  <AlertTriangle className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">
                    {prob.issue}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{prob.fix}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-white border border-teal-200 shadow-sm max-w-4xl mx-auto text-left">
            <h4 className="text-sm sm:text-base font-bold text-teal-900 mb-2">
              Our Audit Philosophy
            </h4>
            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
              To be clear, these are things to investigate, not assumptions about every account. Some
              campaigns are well built but held back by a landing page. Others have a great page and
              unreliable tracking. Our job is to find what's actually limiting performance and fix the
              most useful things first.
            </p>
          </div>
        </div>
      </section>

      {/* Section 8: How We Measure PPC Campaign Performance */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3.5 py-1 rounded-full">
              Measurement & Analytics
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mt-3 mb-4">
              How We Measure PPC Campaign Performance
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Paid advertising should be judged against your business objectives, not clicks alone.
              Depending on your goals, we may look at:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {measurementMetrics.map((met) => (
              <div
                key={met.name}
                className="p-5 rounded-2xl bg-gradient-to-b from-gray-50 to-white border border-gray-200 hover:border-teal-400 transition shadow-xs"
              >
                <div className="w-9 h-9 rounded-xl bg-teal-100/70 text-teal-800 flex items-center justify-center mb-3">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">{met.name}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{met.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-teal-900 to-gray-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-teal-200">
              Separating Platform Metrics from Real Business Outcomes
            </h3>
            <p className="text-gray-200 text-xs sm:text-sm leading-relaxed">
              It helps to separate platform metrics from real business results. A platform can report
              a conversion that turns out to be a low-quality enquiry that never became a customer.
              Google Ads and Google Analytics are useful measurement tools, but only when tracking is
              accurate and your sales follow-up connects back to the data.
            </p>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Results depend on competition, bidding, budget, targeting, landing page quality,
              pricing, tracking accuracy, and sales follow-up, which is why we don't promise a
              specific ROI, a lower cost per lead, or a fixed percentage improvement.
            </p>
          </div>
        </div>
      </section>

      {/* Section 9: Why Choose DigLip7 for PPC Services Saudi Arabia? */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3.5 py-1 rounded-full">
              Why Partner With Us
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mt-3 mb-4">
              Why Choose DigLip7 for PPC Services Saudi Arabia?
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Picking a PPC partner is partly about trust and partly about fit. Here's what you can
              expect from us:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {whyDiglip7Pillars.map((pil) => (
              <div
                key={pil.title}
                className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-xs hover:shadow-md transition"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2">{pil.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{pil.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center max-w-2xl mx-auto text-xs sm:text-sm text-gray-700 leading-relaxed">
            We'd rather explain what's realistic than make big claims. A first conversation can help
            work out whether you need a new campaign, improvements to an existing account, better
            tracking, or a stronger landing page strategy, and what the sensible first step looks like.
          </div>
        </div>
      </section>

      {/* Section 10: Frequently Asked Questions About PPC Services Saudi Arabia */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3.5 py-1 rounded-full">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mt-3 mb-4">
              Frequently Asked Questions About PPC Services Saudi Arabia
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Clear, transparent answers to help you make informed paid advertising decisions.
            </p>

            {/* Quick search filter for FAQs */}
            <div className="relative max-w-md mx-auto mt-6">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search questions (e.g., cost, Arabic, Google Ads)..."
                value={faqSearch}
                onChange={(e) => setFaqSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-gray-300 text-xs sm:text-sm focus:outline-none focus:border-teal-600 transition"
              />
            </div>
          </div>

          <div className="space-y-3.5">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={faq.q}
                  className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                    className={`w-full p-4 sm:p-5 text-left font-bold text-sm sm:text-base flex items-center justify-between gap-4 transition-colors cursor-pointer ${isOpen ? "bg-teal-800 text-white" : "bg-white text-gray-900 hover:bg-gray-50"
                      }`}
                  >
                    <span>
                      {index + 1}. {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 text-white" : "text-gray-400"
                        }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="p-4 sm:p-6 bg-gray-50 text-gray-700 text-xs sm:text-sm leading-relaxed border-t border-gray-100">
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

      {/* Section 11: Get Started with PPC Services in Saudi Arabia (Bottom CTA Banner) */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-teal-800 via-teal-900 to-gray-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-24 h-24 border border-white/20 rounded-full"
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

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-teal-300 bg-white/10 px-4 py-1 rounded-full border border-teal-500/30">
            Next Steps
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold mt-4 mb-6">
            Get Started with PPC Services in Saudi Arabia
          </h2>
          <p className="text-teal-100 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto mb-6 leading-relaxed">
            The first step is simple: we get to know your business model, target customers, current
            advertising, website, and conversion goals. Then we can talk about what a practical PPC
            strategy might look like.
          </p>
          <p className="text-gray-300 text-xs sm:text-sm max-w-3xl mx-auto mb-10 leading-relaxed">
            Looking to reach more relevant customers through paid advertising? Contact DigLip7 to
            discuss your business goals, target audience, and current campaigns. We can help you
            identify practical opportunities to improve campaign structure, strengthen conversion
            tracking, and develop a PPC strategy aligned with your objectives.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <motion.button
                className="px-8 py-4 bg-white text-teal-950 font-bold rounded-full shadow-2xl hover:bg-gray-100 transition-all duration-200 flex items-center gap-2 cursor-pointer text-sm sm:text-base"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                Contact DigLip7
                <ArrowRight className="w-4 h-4 text-teal-900" />
              </motion.button>
            </Link>
            <a
              href="https://wa.me/919650608788?text=Hello%20DigLip7%20Team%2C%20I%20would%20like%20to%20get%20started%20with%20PPC%20Services%20in%20Saudi%20Arabia."
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all duration-200 flex items-center gap-2 cursor-pointer text-sm sm:text-base"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <FaWhatsapp className="w-5 h-5 text-emerald-400" />
                Chat on WhatsApp
              </motion.button>
            </a>
          </div>

          {/* Related Cross-links */}
          <div className="mt-12 pt-8 border-t border-teal-700/60 flex flex-wrap justify-center gap-6 text-xs sm:text-sm text-teal-200">
            <span>Related Services:</span>
            <Link
              to="/saudi-arabia/seo-services"
              className="text-white hover:underline flex items-center gap-1"
            >
              SEO Services Saudi Arabia →
            </Link>
            <Link
              to="/saudi-arabia/web-design/"
              className="text-white hover:underline flex items-center gap-1"
            >
              Web Design Saudi Arabia →
            </Link>
            <Link
              to="/saudi-arabia/social-media-marketing/"
              className="text-white hover:underline flex items-center gap-1"
            >
              Social Media Marketing Saudi Arabia →
            </Link>
            <Link
              to="/saudi-arabia/content-marketing-services/"
              className="text-white hover:underline flex items-center gap-1"
            >
              Content Marketing Saudi Arabia →
            </Link>
            <Link
              to="/saudi-arabia/online-reputation-management/"
              className="text-white hover:underline flex items-center gap-1"
            >
              Reputation Management Saudi Arabia →
            </Link>
            <Link
              to="/digital-market/PPC-Advertising"
              className="text-white hover:underline flex items-center gap-1"
            >
              Global PPC Management →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SaudiPPCServices;
