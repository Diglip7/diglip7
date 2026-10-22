import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../../../components/SEO";
import {
  ShoppingBag,
  ShoppingCart,
  Search,
  TrendingUp,
  BarChart3,
  Layers,
  CheckCircle,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Home,
  Building2,
  Sparkles,
  RefreshCw,
  Target,
  Check,
  XCircle,
  Info,
  Globe,
  Tag,
  Code2,
  Zap,
  SlidersHorizontal,
  Compass,
  FileCheck,
  ShieldCheck,
  Smartphone,
  Languages,
  Store,
  Box,
  Truck,
  CreditCard,
  FileText,
  AlertTriangle,
} from "lucide-react";
import { FaWhatsapp, FaShopify, FaWordpress } from "react-icons/fa";

// Image Paths - Image files removed per requirement; image section containers preserved
const heroImgSrc = "";
const keywordResearchImgSrc = "";
const productWorkflowImgSrc = "";
const technicalAuditImgSrc = "";
const bilingualContentImgSrc = "";
const auditImgSrc = "";
const productImgSrc = "";

// Image Section Container Component (Preserves layout, dimensions & styling without loading external images)
const EcommerceImageSlot = ({
  src = "",
  alt = "",
  width = 1200,
  height = 675,
  aspect = "aspect-[16/9]",
  className = "",
  priority = false,
  fallbackIcon = ShoppingBag,
  badgeText = "",
}) => {
  const Icon = fallbackIcon;

  return (
    <div
      className={`relative w-full rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-50/70 via-white to-teal-50/60 border border-emerald-200/90 shadow-md flex items-center justify-center ${aspect} ${className}`}
    >
      <div className="p-6 sm:p-8 text-center text-sm font-medium text-slate-800 select-none flex flex-col items-center justify-center gap-3.5 w-full h-full bg-gradient-to-b from-white/95 via-emerald-50/40 to-teal-50/50 border-2 border-dashed border-emerald-300/80 rounded-2xl relative overflow-hidden">
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
  { label: "E-commerce SEO Services", href: "/saudi-arabia/ecommerce-seo-services/" },
];

const whatIsEcommercePoints = [
  {
    title: "Finding the right product and category pages",
    desc: "Helping search engine crawlers discover, index, and organize your store's entire inventory architecture efficiently.",
    icon: Search,
  },
  {
    title: "Matching real customer search intent",
    desc: "Aligning product listings and category hierarchies with commercial high-intent transactional buyer queries.",
    icon: Target,
  },
  {
    title: "Improving titles, descriptions, and metadata",
    desc: "Crafting distinct, click-worthy metadata and compelling on-page copy without duplicate or boilerplate text.",
    icon: Tag,
  },
  {
    title: "Fixing crawl and duplicate URL problems",
    desc: "Resolving faceted navigation bloat, filter parameters, tracking queries, and variant URL duplication.",
    icon: Code2,
  },
  {
    title: "Strengthening internal link networks",
    desc: "Building intuitive breadcrumb pathways, related product carousels, and strategic cross-category links.",
    icon: Layers,
  },
];

const whyMattersSaudiPoints = [
  {
    title: "Competing with retailers and marketplaces",
    desc: "You're competing with established regional retailers and large marketplaces. Organic search helps your brand win non-branded, high-intent discovery.",
    icon: Store,
    badge: "Market Landscape",
  },
  {
    title: "Mobile experience is decisive",
    desc: "Mobile experience matters, so slow or clumsy pages cost you visitors, cart completions, and search positions.",
    icon: Smartphone,
    badge: "Mobile Commerce",
  },
  {
    title: "Bilingual search dynamics",
    desc: "Customers may search in Arabic, English, or both, using different regional dialect terms and purchase phrasing.",
    icon: Languages,
    badge: "Bilingual Behavior",
  },
  {
    title: "Transparent purchasing details",
    desc: "Clear shipping, returns, and payment information helps people decide and build trust before checkout.",
    icon: Truck,
    badge: "Buyer Decision",
  },
];

const ecommerceServicesList = [
  {
    title: "E-commerce SEO Audit",
    desc: "We review site structure, indexable pages, crawl errors, redirects, canonical tags, metadata, internal links, and page performance. Depth depends on your site's size, platform, and data access.",
    icon: FileCheck,
    tag: "Technical & Site Health",
  },
  {
    title: "E-commerce Keyword Research",
    desc: "We look for the product, category, brand, and comparison searches your shoppers actually use, and weigh intent and competition.",
    icon: Search,
    tag: "Search Intent Mapping",
  },
  {
    title: "Product Page SEO",
    desc: "Clear titles, helpful original descriptions, accurate specifications, descriptive image alt text, internal links, and structured data where supported. We don't recommend mass-producing near-identical or keyword-stuffed descriptions.",
    icon: Tag,
    tag: "Catalog Optimization",
  },
  {
    title: "Category Page SEO",
    desc: "Category pages often target broader commercial searches. We look at short useful introductions, headings, filtering, pagination, and avoiding duplication.",
    icon: Layers,
    tag: "Commercial Hubs",
  },
  {
    title: "Technical SEO for E-commerce Websites",
    desc: "Crawlability, canonical tags, duplicate URLs, XML sitemaps, filter URLs, redirects, and mobile usability. Fixes depend on your platform, so we avoid blanket rules that could harm indexation.",
    icon: Code2,
    tag: "Architecture & Crawl",
  },
  {
    title: "E-commerce Website Speed and Core Web Vitals",
    desc: "Image optimization, code changes, or caching can help pages load and respond faster. We won't promise a specific score or ranking.",
    icon: Zap,
    tag: "Performance & LCP",
  },
  {
    title: "Arabic and English E-commerce SEO",
    desc: "We research the terms behind searches in each language and localize product names, descriptions, and metadata with care. Word-for-word translation usually reads badly. Where several language versions exist, correct language targeting and hreflang can help.",
    icon: Languages,
    tag: "Localization",
  },
  {
    title: "E-commerce Content Marketing",
    desc: "Buying guides, comparisons, and FAQs can answer real shopper questions. They complement well-optimized product and category pages rather than replacing them.",
    icon: FileText,
    tag: "Shopper Guides",
  },
  {
    title: "Product and Merchant Structured Data",
    desc: "Structured data can help search engines read price, availability, and ratings, but only when that information is genuinely on the page and eligible. It isn't a guarantee of enhanced results, and we never invent reviews, ratings, or prices.",
    icon: ShieldCheck,
    tag: "Schema & Merchant",
  },
  {
    title: "E-commerce SEO Reporting and Monitoring",
    desc: "We review impressions, clicks, landing-page performance, indexation, and tracked conversions where measurement is set up, without crediting organic search for every sale.",
    icon: BarChart3,
    tag: "Actionable Insights",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Understand Your Store",
    desc: "Catalogue, audience, platform, languages, and priority categories.",
    icon: Store,
  },
  {
    step: "02",
    title: "Audit and Research",
    desc: "Technical issues, keyword opportunities, and content gaps.",
    icon: Search,
  },
  {
    step: "03",
    title: "Prioritize",
    desc: "Tasks ranked by value, risk, effort, and your goals.",
    icon: SlidersHorizontal,
  },
  {
    step: "04",
    title: "Optimize Pages",
    desc: "Product and category content, metadata, and internal links.",
    icon: Tag,
  },
  {
    step: "05",
    title: "Fix Technical Issues",
    desc: "Crawlability, duplicates, structured data, and performance.",
    icon: Code2,
  },
  {
    step: "06",
    title: "Monitor and Refine",
    desc: "We review the data and adjust. Results depend on competition, site history, implementation, and demand.",
    icon: RefreshCw,
  },
];

const businessTypeApproaches = [
  {
    id: "fashion",
    name: "Fashion & Apparel",
    icon: ShoppingBag,
    focus: "Variants, Sizes & Seasonal Rotation",
    approach:
      "Fashion stores face unique technical complexity: variants, sizes, colours, seasonal collections, and duplicate URLs. We help you canonicalize colorways, manage expiring inventory, and rank category hubs.",
    keyPoints: [
      "Canonical configuration across color and size product URLs",
      "Seasonal collection transitions without losing historical authority",
      "Lookbook, style guide, and outfit pairing internal cross-links",
      "Clear sizing charts and fabric care details for reduced returns",
    ],
  },
  {
    id: "electronics",
    name: "Consumer Electronics",
    icon: Smartphone,
    focus: "Specifications, Model Numbers & Compatibility",
    approach:
      "Electronics buyers search with precise intent: specifications, model numbers, compatibility, and accurate stock. We build clear comparison structures and accurate technical specs that match exact shopper queries.",
    keyPoints: [
      "Model number and SKU optimization in titles and metadata",
      "Structured specification tables easily digested by search bots",
      "Accessory compatibility links and bundle suggestions",
      "Accurate stock indicators and warranty detail transparency",
    ],
  },
  {
    id: "beauty",
    name: "Beauty & Skincare",
    icon: Sparkles,
    focus: "Ingredients, Routines & Responsible Claims",
    approach:
      "Beauty and skincare requires ingredient information and responsible wording, with no unsupported treatment claims. We optimize skin-concern categories and informative product guides safely.",
    keyPoints: [
      "Ingredient-based search matching (hyaluronic acid, niacinamide, etc.)",
      "Strict compliance with regional consumer health regulations",
      "Routine-based category landing pages (cleanser, toner, serum)",
      "Clear allergen declarations and usage instructions",
    ],
  },
  {
    id: "furniture",
    name: "Furniture & Home Decor",
    icon: Box,
    focus: "Dimensions, Materials & Room Collections",
    approach:
      "High-consideration purchases rely on dimensions, materials, room-based categories, and buying guides. We structure rooms and spatial filters to help shoppers envision items in their homes.",
    keyPoints: [
      "Detailed dimension diagrams and material composition specifications",
      "Room-based taxonomy (Living room, bedroom, home office)",
      "Buying guides addressing assembly, space planning, and care",
      "Delivery, heavy shipment, and white-glove logistics clarity",
    ],
  },
  {
    id: "grocery",
    name: "Grocery & Fast-Moving Goods",
    icon: ShoppingCart,
    focus: "Taxonomy & Rapid URL Churn",
    approach:
      "Grocery e-commerce demands clear categories and careful handling of many similar or changing URLs. We protect crawl budget and structure hyper-local availability efficiently.",
    keyPoints: [
      "Clean hierarchy for thousands of rapidly rotating SKU items",
      "Intelligent handling of brand and dietary filters (organic, vegan, halal)",
      "Crawl budget preservation to avoid indexing ephemeral parameters",
      "Fast, lightweight mobile category navigation for quick ordering",
    ],
  },
];

const commonTroubleSpots = [
  {
    issue: "Duplicate product and filter URLs",
    fix: "Implement self-referential or master canonical tags and configure search console parameter rules.",
  },
  {
    issue: "Missing or repeated metadata",
    fix: "Generate distinct, template-guided yet bespoke titles and meta descriptions for high-value categories.",
  },
  {
    issue: "Thin product descriptions",
    fix: "Enrich listings with genuine benefits, specifications, packaging dimensions, and verified details.",
  },
  {
    issue: "Mishandled out-of-stock pages",
    fix: "Keep temporary out-of-stock pages active with alternative suggestions; redirect discontinued URLs cleanly.",
  },
  {
    issue: "Conflicting canonical tags",
    fix: "Ensure canonical declarations point to the single primary indexable URL version consistently.",
  },
  {
    issue: "Important pages buried too deep",
    fix: "Flatten architecture so priority category and revenue-driving product pages sit within 3 clicks of the homepage.",
  },
  {
    issue: "Slow mobile loading speed",
    fix: "Compress product gallery images, optimize script delivery, and refine server response times.",
  },
  {
    issue: "Broken links and redirect chains",
    fix: "Update internal linking targets directly to avoid multiple 301 hops and eliminate 404 crawl waste.",
  },
  {
    issue: "Mismatched structured data",
    fix: "Sync on-page visible prices, stock status, and currency with JSON-LD schema markup without discrepancies.",
  },
  {
    issue: "Unclear language targeting",
    fix: "Implement proper Arabic and English hreflang tags and separate URL structures for distinct languages.",
  },
];

const faqs = [
  {
    q: "What is an e-commerce SEO service?",
    a: "It's ongoing work to help an online store appear in relevant organic searches. That typically covers keyword research, product and category page optimization, technical fixes, content, and reporting, tailored to your platform and catalogue.",
  },
  {
    q: "How can e-commerce SEO help an online store in Saudi Arabia?",
    a: "It can help shoppers who are already searching for your products find the right pages, in Arabic, English, or both. Over time that may bring more relevant visits, though rankings, traffic, and sales can't be guaranteed.",
  },
  {
    q: "How much do e-commerce SEO services cost in Saudi Arabia?",
    a: "Cost depends on catalogue size, platform, technical condition, content and localization needs, competition, and reporting. We'd rather quote after reviewing your store than publish generic prices that won't fit your situation.",
  },
  {
    q: "How long does e-commerce SEO take to show results?",
    a: "There's no fixed timeline. Search engines need time to crawl and reassess changes, and results depend on competition, site history, and implementation. We set expectations after an audit rather than promising dates.",
  },
  {
    q: "What is the difference between e-commerce SEO and paid advertising?",
    a: "SEO aims to earn organic visibility and builds gradually, while paid advertising buys sponsored placements that run as long as you fund them. Many stores use both, and each answers different goals and budgets.",
  },
  {
    q: "Can SEO improve product page visibility?",
    a: "It can, by making pages easier to crawl and understand, with clear titles, accurate details, useful descriptions, and strong internal links. No one can promise a specific position, since competition and demand matter too.",
  },
  {
    q: "Is technical SEO important for online stores?",
    a: "Yes. If search engines can't crawl, index, or interpret your product and category pages properly, good content may never be seen. Duplicate URLs, filters, and slow mobile pages are common trouble spots.",
  },
  {
    q: "Can Shopify and WooCommerce websites be optimized for SEO?",
    a: "Generally yes, though what you can change depends on the platform, theme, and plugins. We'd confirm which platforms DigLip7 supports during discovery and tailor recommendations to how your store is actually built.",
  },
  {
    q: "Does an online store need Arabic SEO?",
    a: "Not every store does, but if your customers search in Arabic, Arabic pages written around real search terms can help. Natural, localized copy usually works better than word-for-word translation.",
  },
  {
    q: "How should out-of-stock product pages be handled?",
    a: "It depends. Temporarily out-of-stock items usually keep their page with clear messaging and alternatives, while permanently discontinued products may need a redirect to a close match or a relevant category. We'd review each case.",
  },
  {
    q: "How can an e-commerce website improve organic traffic?",
    a: "Focus on relevant keyword targeting, useful product and category content, a clean technical foundation, strong internal links, and fast mobile pages. Then track what changes and refine. Aim for relevant visitors, not just more of them.",
  },
  {
    q: "How can I get started with DigLip7?",
    a: "Contact DigLip7 and tell us your platform, catalogue size, target customers, languages, and SEO priorities. We'll discuss whether an audit, a project, or ongoing support makes sense.",
  },
];

const SaudiEcommerceSEO = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [faqSearch, setFaqSearch] = useState("");
  const [selectedSector, setSelectedSector] = useState("fashion");
  const [activeTroubleIndex, setActiveTroubleIndex] = useState(null);

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.q.toLowerCase().includes(faqSearch.toLowerCase()) ||
      faq.a.toLowerCase().includes(faqSearch.toLowerCase())
  );

  const pageUrl = "https://diglip7.com/saudi-arabia/ecommerce-seo-services/";

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
        name: "E-commerce SEO Services in Saudi Arabia for Online Stores",
        description:
          "E-commerce SEO services in Saudi Arabia from DigLip7: audits, product and category page optimization, technical SEO, Arabic and English search, and reporting.",
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
          url: "https://diglip7.com/images/ecommerce-seo-services-saudi-arabia.webp",
          caption:
            "E-commerce SEO strategy and product page optimization for online stores in Saudi Arabia",
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
        name: "E-commerce SEO Service in Saudi Arabia",
        serviceType: "E-commerce search engine optimization",
        description:
          "E-commerce SEO audits, keyword research, product and category page optimization, technical SEO, Arabic and English search optimization, structured data and reporting. Scope is agreed after reviewing the store.",
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
            name: "E-commerce SEO Services",
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
        title="E-commerce SEO Services in Saudi Arabia | DigLip7"
        exactTitle={true}
        description="Improve your online store's organic visibility with e-commerce SEO services in Saudi Arabia. Optimize product pages, categories, and technical SEO with DigLip7."
        canonical={pageUrl}
        keywords="E-commerce SEO Service Saudi Arabia, e-commerce SEO services Saudi Arabia, e-commerce SEO agency Saudi Arabia, online store SEO services Saudi Arabia, product page SEO services, e-commerce category page SEO, technical SEO for e-commerce websites, e-commerce website audit, Shopify SEO services Saudi Arabia, WooCommerce SEO services Saudi Arabia, Arabic e-commerce SEO, bilingual e-commerce SEO services, product schema markup, Core Web Vitals optimization, e-commerce keyword research, e-commerce SEO reporting"
        robots="index, follow, max-image-preview:large"
        hreflangs={[
          { hreflang: "en-sa", href: pageUrl },
          { hreflang: "x-default", href: pageUrl },
        ]}
        ogType="website"
        ogLocale="en_SA"
        ogTitle="E-commerce SEO Services in Saudi Arabia | DigLip7"
        ogDescription="Product page, category page, and technical SEO for online stores, from DigLip7."
        ogUrl={pageUrl}
        ogImage="https://diglip7.com/images/ecommerce-seo-services-saudi-arabia.webp"
        ogImageAlt="E-commerce SEO strategy and product page optimization for online stores in Saudi Arabia"
        twitterCard="summary_large_image"
        twitterTitle="E-commerce SEO Services in Saudi Arabia | DigLip7"
        twitterDescription="Product page, category page, and technical SEO for online stores, from DigLip7."
        twitterImage="https://diglip7.com/images/ecommerce-seo-services-saudi-arabia.webp"
        twitterImageAlt="E-commerce SEO strategy and product page optimization for online stores in Saudi Arabia"
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
                <ShoppingBag className="w-4 h-4 text-emerald-700" />
                <span>E-commerce SEO &bull; Saudi Arabia</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 leading-tight">
                E-commerce SEO Services in Saudi Arabia for Online Stores
              </h1>

              {/* Verbatim Intro Paragraphs */}
              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0 text-left">
                <p>
                  A product listing on its own doesn't win organic traffic. Search engines have to find your product and category pages, understand them, and decide they're worth showing. Then the shopper has to land on something useful: accurate details, clear pricing, easy navigation.
                </p>
                <p>
                  That's the job of an <strong>E-commerce SEO Service in Saudi Arabia</strong>. <strong className="text-emerald-900 font-semibold">DigLip7</strong> is a digital marketing company that can help online stores take a structured approach to organic product discovery and qualified visits. What that looks like depends on your platform, catalogue, languages, technical setup, and goals, so we start by understanding those instead of applying a template.
                </p>
                <p className="bg-emerald-50/80 border-l-4 border-emerald-600 p-3.5 rounded-r-xl text-slate-800 text-sm font-medium">
                  Nobody can promise rankings or sales, and we won't. We can offer a clear, prioritized plan built around how your store actually works.
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
                    <span>Discuss Your E-commerce SEO Strategy</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>

                <a
                  href="https://wa.me/919650608788?text=Hello%20DigLip7%20Team%2C%20I%20would%20like%20to%20discuss%20E-commerce%20SEO%20services%20in%20Saudi%20Arabia."
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
                Want to expand your store's organic discovery across Riyadh, Jeddah, and Dammam?{" "}
                <Link
                  to="/contact"
                  className="text-emerald-700 underline font-semibold hover:text-emerald-900 transition-colors"
                >
                  Contact DigLip7
                </Link>{" "}
                to get started.
              </div>
            </div>

            {/* Right Column: Hero Visual Container & Platform Badges */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="w-full max-w-lg space-y-4">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white">
                  <EcommerceImageSlot
                    src={heroImgSrc}
                    alt="E-commerce SEO strategy and product page optimization for online stores in Saudi Arabia"
                    width={1200}
                    height={675}
                    aspect="aspect-[16/9]"
                    priority={true}
                    fallbackIcon={ShoppingBag}
                    badgeText="Catalogue & Search Strategy"
                  />
                </div>

                {/* Micro Live Overview Card */}
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 border border-slate-200/90 shadow-md space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Store Optimization Matrix
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                      Multi-Platform Ready
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center pt-1">
                    <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <div className="text-base font-black text-emerald-800">Shopify</div>
                      <div className="text-[10px] font-medium text-slate-500">&amp; WooCommerce</div>
                    </div>
                    <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <div className="text-base font-black text-teal-800">Bilingual</div>
                      <div className="text-[10px] font-medium text-slate-500">Arabic &amp; English</div>
                    </div>
                    <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <div className="text-base font-black text-amber-700">Schema</div>
                      <div className="text-[10px] font-medium text-slate-500">Product &amp; Merchant</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Section 1: What Is E-commerce SEO? */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
              <Compass className="w-3.5 h-3.5 text-emerald-600" />
              <span>Foundation &amp; Mechanics</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
              What Is E-commerce SEO?
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              It's SEO built around how online stores work: helping search engines find the right product and category pages, matching them to real customer searches, improving titles, descriptions, and metadata, fixing crawl and duplicate URL problems, and strengthening internal links.
            </p>
          </div>

          {/* 5 Core Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatIsEcommercePoints.map((point) => {
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
                    <span>Store Architecture Pillar</span>
                  </div>
                </motion.div>
              );
            })}

            {/* Contrast Box: SEO vs Paid Search */}
            <div className="md:col-span-2 lg:col-span-1 bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-lg">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-400/30">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Strategic Channel Contrast</span>
                </div>
                <h3 className="text-xl font-bold leading-tight">
                  Different From Paid Search
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  It's different from paid search. SEO earns organic visibility slowly. Paid ads buy placements that run only while you fund them. Plenty of stores use both.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-emerald-300">
                <ShieldCheck className="w-4 h-4" />
                <span>Long-Term Compounding Asset</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Why E-commerce SEO Matters in Saudi Arabia */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
              <Globe className="w-3.5 h-3.5 text-emerald-600" />
              <span>Saudi Market Context</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
              Why E-commerce SEO Matters in Saudi Arabia
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              Most shopping journeys start with a search, and category and product searches often signal real buying intent. Several things shape the Saudi market:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <strong>Factual Note:</strong> We've left out market statistics because we haven't verified any. Our recommendations focus squarely on search mechanics, store architecture, and shopper clarity.
            </span>
          </div>
        </div>
      </section>

      {/* Section 3: Our E-commerce SEO Services in Saudi Arabia */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
              <Layers className="w-3.5 h-3.5 text-emerald-600" />
              <span>Full Service Scope</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
              Our E-commerce SEO Services in Saudi Arabia
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              Here's what support can include. We confirm the exact scope with you.
            </p>
          </div>

          {/* 10 Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ecommerceServicesList.map((service, index) => {
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
                    <span>Scope Module {index < 9 ? `0${index + 1}` : index + 1}</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Dedicated Showcases for Confirmed Core Modules with Recommended Visual Assets */}
          <div className="space-y-10 pt-4">
            {/* 1. Keyword Research Section */}
            <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-xs">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
                    <Search className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Keyword Research Section</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                    E-commerce Keyword Research: High-Intent Buyer Queries
                  </h3>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    We look for the product, category, brand, and comparison searches your shoppers actually use, and weigh intent and competition. Mapping search volumes against commercial purchase stages ensures organic traffic converts into active checkouts.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 bg-white rounded-xl border border-slate-200/90 text-xs text-slate-700 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Commercial &amp; transactional buyer intent mapping</span>
                    </div>
                    <div className="p-3.5 bg-white rounded-xl border border-slate-200/90 text-xs text-slate-700 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Brand vs. generic category comparisons</span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <EcommerceImageSlot
                    src={keywordResearchImgSrc}
                    alt="E-commerce keyword research and organic search performance analysis"
                    aspect="aspect-[16/10]"
                    fallbackIcon={Search}
                    badgeText="Keyword Research Analysis"
                  />
                </div>
              </div>
            </div>

            {/* 2. Product Page SEO Section */}
            <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-xs">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 order-2 lg:order-1">
                  <EcommerceImageSlot
                    src={productWorkflowImgSrc}
                    alt="Product page optimization workflow for an online store"
                    aspect="aspect-[16/10]"
                    fallbackIcon={Tag}
                    badgeText="Product Page Workflow"
                  />
                </div>
                <div className="lg:col-span-7 space-y-4 order-1 lg:order-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
                    <Tag className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Product Page SEO Section</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                    Product Page SEO: Clear Specifications &amp; Original Copy
                  </h3>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    Clear titles, helpful original descriptions, accurate specifications, descriptive image alt text, internal links, and structured data where supported. We don't recommend mass-producing near-identical or keyword-stuffed descriptions.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 bg-white rounded-xl border border-slate-200/90 text-xs text-slate-700 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Helpful original descriptions without boilerplate</span>
                    </div>
                    <div className="p-3.5 bg-white rounded-xl border border-slate-200/90 text-xs text-slate-700 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Descriptive image alt text &amp; schema markup</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Technical SEO Section */}
            <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-xs">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
                    <Code2 className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Technical SEO Section</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                    Technical SEO for E-commerce Websites: Crawlability &amp; Architecture
                  </h3>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    Crawlability, canonical tags, duplicate URLs, XML sitemaps, filter URLs, redirects, and mobile usability. Fixes depend on your platform, so we avoid blanket rules that could harm indexation.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 bg-white rounded-xl border border-slate-200/90 text-xs text-slate-700 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Faceted navigation &amp; canonical tag hygiene</span>
                    </div>
                    <div className="p-3.5 bg-white rounded-xl border border-slate-200/90 text-xs text-slate-700 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Core Web Vitals &amp; mobile speed optimization</span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <EcommerceImageSlot
                    src={technicalAuditImgSrc}
                    alt="Technical SEO audit for a large e-commerce website"
                    aspect="aspect-[16/10]"
                    fallbackIcon={Code2}
                    badgeText="Technical Audit"
                  />
                </div>
              </div>
            </div>

            {/* 4. Arabic and English E-commerce SEO Section */}
            <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-xs">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 order-2 lg:order-1">
                  <EcommerceImageSlot
                    src={bilingualContentImgSrc}
                    alt="Bilingual e-commerce content planning for a Saudi Arabian audience"
                    aspect="aspect-[16/10]"
                    fallbackIcon={Languages}
                    badgeText="Bilingual Content Planning"
                  />
                </div>
                <div className="lg:col-span-7 space-y-4 order-1 lg:order-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
                    <Languages className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Arabic and English E-commerce SEO Section</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                    Arabic and English E-commerce SEO: Regional Localization
                  </h3>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    We research the terms behind searches in each language and localize product names, descriptions, and metadata with care. Word-for-word translation usually reads badly. Where several language versions exist, correct language targeting and hreflang can help.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 bg-white rounded-xl border border-slate-200/90 text-xs text-slate-700 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Natural Arabic dialect &amp; terminology research</span>
                    </div>
                    <div className="p-3.5 bg-white rounded-xl border border-slate-200/90 text-xs text-slate-700 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Bilingual hreflang and regional targeting</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Platform Expertise Banner */}
          <div className="bg-gradient-to-r from-emerald-50 via-slate-50 to-teal-50 rounded-2xl p-6 sm:p-8 border border-emerald-200/90 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider">
                <Store className="w-4 h-4 text-emerald-600" />
                <span>Store Technology Ecosystem</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Tailored Across Shopify, WooCommerce &amp; Custom Platforms
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Whether your store is powered by Shopify, WooCommerce, Magento, or a custom headless setup, our technical recommendations are customized to what your theme and platform natively support.
              </p>
            </div>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm whitespace-nowrap shadow-sm hover:shadow transition-all shrink-0"
            >
              Request Platform Audit
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4: Our E-commerce SEO Process */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
              <RefreshCw className="w-3.5 h-3.5 text-emerald-600" />
              <span>Step-by-Step Flow</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
              Our E-commerce SEO Process
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              Every store requires a disciplined, step-by-step methodology to make organic search an enduring channel:
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

          {/* Process Supporting Audit Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-semibold">
                  <FileCheck className="w-3.5 h-3.5 text-teal-600" />
                  <span>Technical Crawl &amp; Taxonomy</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 leading-tight">
                  Transparent Diagnostics &amp; Prioritized Backlog
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We don't hand you an unprioritized automated 100-page PDF report. We curate a workable action backlog ranked by revenue potential, ease of implementation, and indexation risk.
                </p>
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Deep crawl error and canonical chain identification</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Faceted navigation and duplicate filter parameter resolution</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Realistic timelines based on competition, site history, and demand</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <EcommerceImageSlot
                  src={auditImgSrc}
                  alt="Technical SEO audit and crawl diagnostic report for e-commerce website"
                  aspect="aspect-[16/10]"
                  fallbackIcon={Code2}
                  badgeText="Audit & Diagnostics"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: E-commerce SEO for Different Business Types */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
              <Box className="w-3.5 h-3.5 text-emerald-600" />
              <span>Sector-Specific Strategies</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
              E-commerce SEO for Different Business Types
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              These are example approaches, not claims that DigLip7 has delivered results in every sector. Priorities shift based on inventory models:
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
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                      Commercial Nuance &bull; {currentSector.focus}
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
                      Critical Catalogue Considerations
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {currentSector.keyPoints.map((point, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200/70 text-xs text-slate-700 leading-snug shadow-2xs"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <EcommerceImageSlot
                    src={productImgSrc}
                    alt={`E-commerce product optimization approach for ${currentSector.name} in Saudi Arabia`}
                    aspect="aspect-[4/3]"
                    fallbackIcon={currentSector.icon}
                    badgeText={currentSector.name}
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Section 6: Common E-commerce SEO Problems and How to Address Them */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />
              <span>Troubleshooting &amp; Fixes</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
              Common E-commerce SEO Problems and How to Address Them
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              Every store is different, so investigate before changing anything. Typical culprits include duplicate product and filter URLs, missing or repeated metadata, thin descriptions, out-of-stock pages, wrong canonical tags, important pages buried deep, slow mobile pages, broken links and redirect chains, mismatched structured data, and unclear language targeting. A crawl and a look at your own data usually show which of these actually apply.
            </p>
          </div>

          {/* Interactive Troublespot Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {commonTroubleSpots.map((spot, index) => (
              <div
                key={spot.issue}
                className="bg-white rounded-2xl p-5 border border-slate-200/90 hover:border-emerald-300 transition-all shadow-xs"
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

      {/* Section 7: How We Measure E-commerce SEO Performance */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
              <BarChart3 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Measurement &amp; Attribution</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
              How We Measure E-commerce SEO Performance
            </h2>
            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
              <p>
                We measure against goals we agree up front: organic impressions and clicks, non-branded visibility, landing-page visits, product and category performance, crawl health, and organic conversions or revenue where tracking is reliable.
              </p>
              <p className="text-sm sm:text-base text-slate-600">
                Rankings and traffic aren't guaranteed, and sales also depend on pricing, availability, user experience, and demand. We don't publish invented results.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Metrics Dimension 01</div>
              <h3 className="text-base font-bold text-slate-900">Organic Impressions &amp; Clicks</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tracking real buyer search volumes and non-branded search impressions across commercial queries in Google Search Console.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Metrics Dimension 02</div>
              <h3 className="text-base font-bold text-slate-900">Landing Page Performance</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Evaluating which product and category pages drive engaged sessions, bounce rates, and dwell time.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Metrics Dimension 03</div>
              <h3 className="text-base font-bold text-slate-900">Technical Crawl Health</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Monitoring indexation coverage, server response times, Core Web Vitals, and 404/redirect errors over time.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Metrics Dimension 04</div>
              <h3 className="text-base font-bold text-slate-900">Category vs Product Visibility</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Distinguishing broad commercial category discovery from long-tail specific product variant searches.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Metrics Dimension 05</div>
              <h3 className="text-base font-bold text-slate-900">Tracked Conversions &amp; Revenue</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Measuring purchases and checkout events where GA4 e-commerce tracking is cleanly integrated with backend data.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Metrics Dimension 06</div>
              <h3 className="text-base font-bold text-slate-900">Language Distribution Data</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Assessing regional performance trends across Arabic and English store directories without merged assumptions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Why Choose DigLip7 for E-commerce SEO Services in Saudi Arabia? */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>DigLip7 Distinction</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
              Why Choose DigLip7 for E-commerce SEO Services in Saudi Arabia?
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              You get a structured plan, priorities set by what your store needs most, attention to both technical and on-page SEO, thoughtful language handling, and clear reporting.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* What You Get */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6">
              <h3 className="text-xl font-bold text-slate-900">
                What You Can Expect From Our Team
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Customized Store Roadmaps</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Strategies built around your catalogue size, priority product margins, and inventory turns.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Deep Technical Architecture Experience</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Hands-on auditing of faceted navigation, indexation directives, canonicals, and Core Web Vitals.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Thoughtful Arabic &amp; English Handling</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Localized product terminology and hreflang setup tailored to authentic Saudi buying queries.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Coordination with Wider Growth Channels</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Coordinating your e-commerce SEO alongside{" "}
                      <Link
                        to="/saudi-arabia/ppc-services/"
                        className="text-emerald-700 underline font-semibold hover:text-emerald-900 transition-colors"
                      >
                        PPC advertising
                      </Link>
                      ,{" "}
                      <Link
                        to="/saudi-arabia/social-media-marketing/"
                        className="text-emerald-700 underline font-semibold hover:text-emerald-900 transition-colors"
                      >
                        social media management
                      </Link>
                      , and{" "}
                      <Link
                        to="/saudi-arabia/online-reputation-management/"
                        className="text-emerald-700 underline font-semibold hover:text-emerald-900 transition-colors"
                      >
                        online reputation management
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
                Honest Transparency
              </span>
              <h3 className="text-xl font-bold">
                What You Won't Hear From Us
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We believe realistic expectations protect store health and ensure genuine ROI:
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-rose-200">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>No "guaranteed first-page rankings"</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-rose-200">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>No automated mass-spun product descriptions</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-rose-200">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>No invented case study revenue claims</span>
                </div>
              </div>
              <div className="pt-4 border-t border-white/10 text-[11px] text-slate-400">
                Honest store audits, technical fixes, and user-centric content deliver compounding search value.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: E-commerce SEO Pricing and Service Options */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
              <SlidersHorizontal className="w-3.5 h-3.5 text-emerald-600" />
              <span>Tailored Proposals</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
              E-commerce SEO Pricing and Service Options
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              Pricing depends on the number of products and categories, site complexity, platform, current technical condition, content and localization needs, competition, and reporting. The best next step is a proposal based on your store.
            </p>
          </div>

          <div className="bg-gradient-to-r from-emerald-50/70 via-slate-50 to-teal-50/60 rounded-3xl p-6 sm:p-8 lg:p-10 border border-emerald-200/80">
            <h3 className="text-lg font-bold text-slate-900 mb-6">
              Key Factors Defining Your Store's SEO Investment
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Factor 01</span>
                <h4 className="font-bold text-slate-900 text-sm">Catalogue Volume</h4>
                <p className="text-xs text-slate-600">A boutique catalogue of 50 SKU items versus large multi-brand stores with 25,000+ dynamic URLs.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Factor 02</span>
                <h4 className="font-bold text-slate-900 text-sm">Platform &amp; Architecture</h4>
                <p className="text-xs text-slate-600">Shopify theme constraints, WooCommerce plugin overhead, or custom headless React storefront setups.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Factor 03</span>
                <h4 className="font-bold text-slate-900 text-sm">Current Technical Condition</h4>
                <p className="text-xs text-slate-600">Addressing inherited crawl debt, broken redirects, faceted indexing loops, or slow server response.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Factor 04</span>
                <h4 className="font-bold text-slate-900 text-sm">Language Scope</h4>
                <p className="text-xs text-slate-600">Unilingual English, unilingual Arabic, or full bilingual localization across metadata and content.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Factor 05</span>
                <h4 className="font-bold text-slate-900 text-sm">Content Creation Needs</h4>
                <p className="text-xs text-slate-600">Requirement for original buying guides, category descriptions, and comparison articles.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Factor 06</span>
                <h4 className="font-bold text-slate-900 text-sm">Wider Digital Integration</h4>
                <p className="text-xs text-slate-600">Complementary integration with PPC shopping ads, social campaigns, or general digital marketing.</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-emerald-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-600 font-medium text-center sm:text-left">
                We'd rather quote after reviewing your store than publish generic prices that won't fit your situation.
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

      {/* Section 10: Frequently Asked Questions About E-commerce SEO in Saudi Arabia */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
              <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>Direct Answers</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
              Frequently Asked Questions About E-commerce SEO in Saudi Arabia
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
              Straightforward answers about product discovery, category optimization, platforms, and realistic timelines for Saudi online stores.
            </p>

            {/* Live Search Input */}
            <div className="max-w-md mx-auto pt-2">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={faqSearch}
                  onChange={(e) => setFaqSearch(e.target.value)}
                  placeholder="Search questions (e.g., Shopify, out of stock, cost, Arabic)..."
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
                    className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs transition-all"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50 transition-colors"
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
                          <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })
            ) : (
              <div className="p-8 text-center bg-white rounded-2xl border border-slate-200 text-slate-500 text-sm">
                No matching questions found for "{faqSearch}". Try another search term or contact our team directly.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section 11: Improve Your Online Store's Search Visibility with DigLip7 (Bottom CTA & Cross-Links) */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-emerald-50/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-200 text-xs font-semibold">
            <Sparkles className="w-4 h-4 text-emerald-700" />
            <span>Organic Growth for Online Stores</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight max-w-3xl mx-auto">
            Improve Your Online Store's Search Visibility with DigLip7
          </h2>

          <div className="space-y-4 max-w-2xl mx-auto text-slate-700 text-sm sm:text-base leading-relaxed">
            <p>
              Good e-commerce SEO comes down to keyword research, better product and category pages, technical fixes, and steady monitoring.
            </p>
            <p>
              Tell us about your platform, catalogue, customers, and languages, and we'll talk through what makes sense. Partnering with a dedicated <strong>E-commerce SEO Service in Saudi Arabia</strong> gives your online store a structured pathway to long-term organic growth.
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
                <span>Request an E-commerce SEO Audit</span>
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
              href="https://wa.me/919650608788?text=Hello%20DigLip7%20Team%2C%20I%20would%20like%20to%20discuss%20E-commerce%20SEO%20services%20in%20Saudi%20Arabia."
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
              Request an E-commerce SEO Audit
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
                to="/saudi-arabia/local-seo-services/"
                className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 hover:text-emerald-700 hover:border-emerald-300 transition-colors shadow-2xs"
              >
                Local SEO Saudi Arabia
              </Link>
              <Link
                to="/uae/dubai/ecommerce-seo"
                className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 hover:text-emerald-700 hover:border-emerald-300 transition-colors shadow-2xs"
              >
                Dubai E-commerce SEO
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

export default SaudiEcommerceSEO;
