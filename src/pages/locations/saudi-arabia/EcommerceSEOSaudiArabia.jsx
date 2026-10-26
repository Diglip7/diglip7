import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../../../components/SEO";
import {
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Home,
  CheckCircle2,
  AlertTriangle,
  Search,
  Target,
  Package,
  LayoutGrid,
  Cpu,
  FileText,
  Link2,
  Image as ImageIcon,
  Languages,
  BarChart3,
  Layers,
  Compass,
  Settings,
  ShieldCheck,
  Globe,
  Sparkles,
  Store,
  Shirt,
  HeartPulse,
  Car,
  UtensilsCrossed,
  Briefcase,
  Code2,
  ShoppingCart,
  TrendingUp,
} from "lucide-react";

// Floating Element Animation (Consistent with DubaiLocalSEO.jsx & AIMarketingAutomationSaudiArabia.jsx)
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

// 3D Interactive Card Component (matches older pages)
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
        transition: "transform 0.15s ease-out",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
};

export default function EcommerceSEOSaudiArabia() {
  const [openFaq, setOpenFaq] = useState(null);

  const pageUrl = "https://diglip7.com/saudi-arabia/ecommerce-seo/";
  const metaTitle = "E-commerce SEO Service in Saudi Arabia | DigLip7";
  const metaDescription =
    "Improve your online store's search visibility with e-commerce SEO services in Saudi Arabia from DigLip7, covering product pages, categories, and technical SEO.";

  const breadcrumbTrail = [
    { label: "Home", href: "/" },
    { label: "Saudi Arabia", href: "/saudi-arabia/seo-services" },
    { label: "E-commerce SEO Service in Saudi Arabia", href: pageUrl },
  ];

  // ---------------------------------------------------------------------------
  // JSON-LD Schemas (Verbatim from Document Section 5)
  // ---------------------------------------------------------------------------
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://diglip7.com/saudi-arabia/ecommerce-seo/#service",
      "name": "E-commerce SEO Service in Saudi Arabia",
      "description":
        "E-commerce SEO services for online stores in Saudi Arabia, covering audits, keyword research, product and category page optimization, technical SEO, structured data, and performance reporting according to project requirements.",
      "url": pageUrl,
      "provider": {
        "@type": "Organization",
        "name": "DigLip7 Tech Pvt Ltd",
        "url": "https://diglip7.com/",
      },
      "areaServed": {
        "@type": "Country",
        "name": "Saudi Arabia",
      },
      "serviceType": "E-commerce SEO",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
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
          "name": "Saudi Arabia",
          "item": "https://diglip7.com/saudi-arabia/seo-services",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "E-commerce SEO",
          "item": pageUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What Is E-commerce SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "E-commerce SEO is the process of improving an online store so that search engines can understand its product and category pages and shoppers can find them through organic search. It combines technical work, keyword research, content, internal linking and measurement.",
          },
        },
        {
          "@type": "Question",
          "name": "Why Does an Online Store Need E-commerce SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "It can help relevant shoppers discover your products, make product and category information clearer and reduce technical barriers to crawling and indexing. It works alongside other channels and cannot guarantee traffic or sales.",
          },
        },
        {
          "@type": "Question",
          "name": "How Much Does E-commerce SEO Cost in Saudi Arabia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Cost depends on store size, platform, technical complexity, competition, content requirements and the scope of work. A review of your store is needed before a reliable estimate can be given.",
          },
        },
        {
          "@type": "Question",
          "name": "How Long Does E-commerce SEO Take to Show Results?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "It varies with your site's current condition, competition, crawl and indexation status, how quickly changes are implemented and search demand. No fixed timeframe or ranking result can be promised.",
          },
        },
        {
          "@type": "Question",
          "name": "Can SEO Improve Product and Category Page Visibility?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes, it can support visibility. Useful content, relevant keywords, sensible internal linking and technical accessibility help search engines and shoppers find and understand these pages, though rankings are never guaranteed.",
          },
        },
        {
          "@type": "Question",
          "name": "Is Shopify SEO Different From WooCommerce SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "The core SEO principles are the same, but templates, extensions, URL handling and the way changes are implemented differ between platforms. Recommendations should be adapted to the platform you use.",
          },
        },
        {
          "@type": "Question",
          "name": "Does an Online Store Need Arabic and English SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "It depends on your target customers, the languages they search in and how your site is structured. Separate language versions may help in some cases, but not every store needs them.",
          },
        },
        {
          "@type": "Question",
          "name": "How Can E-commerce SEO Performance Be Measured?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Google Search Console and correctly configured analytics can show search impressions, clicks, organic visits and relevant e-commerce actions such as add-to-cart and purchases. Tracking should be tested before results are relied on.",
          },
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "DigLip7 Tech Pvt Ltd",
      "url": "https://diglip7.com/",
    },
  ];

  // ---------------------------------------------------------------------------
  // Data Collections (Exact from Document)
  // ---------------------------------------------------------------------------
  
  const movingParts = [
    "Large numbers of product URLs.",
    "Multiple category and subcategory pages.",
    "Product variations such as size and colour.",
    "Filters and sorting parameters.",
    "Duplicate or very similar product descriptions.",
    "Frequently changing stock and pricing.",
    "Product reviews and user-generated content.",
  ];

  const whyNeed = [
    "Helping shoppers discover relevant products through search.",
    "Making product and category pages clearer and more useful.",
    "Reducing crawl and indexing problems that waste search engines' attention.",
    "Supporting Arabic and English search experiences where relevant.",
    "Improving mobile usability and page performance.",
    "Building organic visibility that complements paid advertising.",
    "Measuring organic landing-page performance and qualified sales activity.",
  ];

  const services = [
    {
      icon: Search,
      title: "E-commerce SEO Audit",
      text: "An audit looks at crawling, indexing, site architecture, metadata, duplicate content, internal links, page performance, structured data and current organic visibility. The result should be a prioritised list of issues and opportunities, not an overwhelming list of every minor warning.",
    },
    {
      icon: Target,
      title: "E-commerce Keyword Research",
      text: "Keyword research shows how shoppers describe products, which category terms have demand and what questions they ask before buying. It covers commercial, transactional and informational intent, and the findings are mapped to specific pages. Search volumes should come from verified tools, not guesses.",
      image: {
        src: "/images/ecommerce-category-keyword-research.webp",
        alt: "Marketing professional organizing online store category pages and keyword research",
      },
    },
    {
      icon: Package,
      title: "Product Page SEO",
      intro: "Strong product pages usually have:",
      list: [
        "Descriptive product titles.",
        "Unique, useful descriptions rather than copied manufacturer text.",
        "Clear specifications and relevant benefits.",
        "Optimised images with accurate alt text.",
        "Accurate availability and pricing.",
        "Internal links to relevant categories and related products.",
        "Helpful FAQs where customers genuinely need more information.",
      ],
      image: {
        src: "/images/ecommerce-product-page-seo.webp",
        alt: "E-commerce product page with clear product images and organized product information",
      },
    },
    {
      icon: LayoutGrid,
      title: "Product Category Page SEO",
      text: "Category pages help shoppers browse and help search engines understand your range. Good ones have descriptive headings, a helpful introduction, logical subcategory links, suitable title tags and meta descriptions, and useful filters. The common trap is thin, repetitive category pages that add little for users.",
    },
    {
      icon: Cpu,
      title: "E-commerce Technical SEO",
      text: "Technical work covers crawlability and indexability, XML sitemaps, canonical tags, redirects, HTTP status codes, duplicate URL handling, faceted navigation and filter parameters, pagination where it applies, mobile usability and Core Web Vitals. Not every store needs every change. Recommendations should come from a crawl, indexation data and an understanding of how your site is built.",
      image: {
        src: "/images/ecommerce-technical-seo-analysis.webp",
        alt: "SEO specialist analyzing an online store website structure and technical performance",
      },
      linkText: "technical SEO",
      linkTo: "/saudi-arabia/seo-services",
    },
    {
      icon: Code2,
      title: "Product Schema and Structured Data",
      text: "Structured data such as Product, Offer and BreadcrumbList can help search engines interpret product pages when it accurately matches what is visible. Eligibility for rich results depends on Google's requirements, and markup does not guarantee enhanced listings. Prices, stock status, ratings, reviews and shipping details must always be real.",
    },
    {
      icon: FileText,
      title: "E-commerce Content Optimisation",
      text: "Helpful content supports shoppers at different stages: category introductions, buying guides, product comparisons, care guides and selection advice. It should add original value rather than repeat product keywords, and it should be written for people first.",
      linkText: "content marketing",
      linkTo: "/saudi-arabia/content-marketing-services/",
    },
    {
      icon: Link2,
      title: "Internal Linking and Site Architecture",
      text: "Category navigation, breadcrumbs, related products and useful editorial links help shoppers and search engines find relevant pages. A sensible category depth and links that avoid leaving orphan pages (pages nothing links to) make a large catalogue easier to crawl.",
    },
    {
      icon: ImageIcon,
      title: "E-commerce Image SEO",
      text: "Images sell products, and they also need care: descriptive file names, accurate alt text, sensible compression, responsive image sizes and relevant surrounding context. Alt text should describe each image, not repeat the same keyword across the catalogue.",
    },
    {
      icon: Languages,
      title: "Arabic and English E-commerce SEO",
      text: "Stores serving both Arabic and English speakers may need language-specific content, URLs, metadata and navigation. Hreflang annotations only make sense when separate language or regional versions genuinely exist and are implemented correctly. Not every Saudi store needs two versions of its site.",
    },
    {
      icon: BarChart3,
      title: "E-commerce SEO Reporting and Measurement",
      text: "Search Console, analytics and suitable reporting help track organic clicks, impressions, landing-page engagement, product page visibility and tracked conversions when configured correctly. We only work with data we are authorised to access, and we do not invent results.",
      image: {
        src: "/images/ecommerce-seo-analytics-reporting.webp",
        alt: "E-commerce team reviewing organic search traffic and online store analytics",
      },
    },
  ];

  const platforms = [
    {
      icon: ShoppingCart,
      label: "Shopify:",
      text: "URL structure is partly fixed, collection and product templates, theme code, and variant handling.",
    },
    {
      icon: Store,
      label: "WooCommerce:",
      text: "plugin choices, permalink settings, attributes and filters, and performance.",
    },
    {
      icon: Layers,
      label: "Magento or Adobe Commerce:",
      text: "large catalogues, layered navigation, canonical handling and server configuration.",
    },
    {
      icon: Code2,
      label: "Custom-built stores:",
      text: "templates, routing, rendering, redirects and structured data implemented by developers.",
    },
  ];

  const industries = [
    {
      icon: Shirt,
      label: "Fashion and apparel:",
      text: "seasonal ranges, size and colour variants.",
    },
    {
      icon: Sparkles,
      label: "Beauty and personal care:",
      text: "ingredient-led searches and comparison content.",
    },
    {
      icon: Cpu,
      label: "Electronics and technology:",
      text: "specification-heavy product pages.",
    },
    {
      icon: Home,
      label: "Home and furniture:",
      text: "large items with long research cycles.",
    },
    {
      icon: HeartPulse,
      label: "Health and wellness products:",
      text: "careful, accurate product information.",
    },
    {
      icon: Car,
      label: "Automotive accessories:",
      text: "compatibility information by model.",
    },
    {
      icon: UtensilsCrossed,
      label: "Food and specialty retail:",
      text: "local and gift-led demand.",
    },
    {
      icon: Briefcase,
      label: "B2B wholesale and business supplies:",
      text: "account-based buying and bulk ordering.",
    },
  ];

  const processSteps = [
    {
      icon: Search,
      step: "Step 1 — Website and Business Discovery",
      desc: "We learn about your store, product range, platform, target audience, business goals and current SEO challenges.",
    },
    {
      icon: Compass,
      step: "Step 2 — Technical and Content Audit",
      desc: "We review crawlability, indexation, page templates, content quality, internal linking and relevant performance data.",
    },
    {
      icon: Layers,
      step: "Step 3 — Keyword Mapping and Prioritisation",
      desc: "Search intent is mapped to the right product, category and supporting content pages, then prioritised.",
    },
    {
      icon: Settings,
      step: "Step 4 — Technical and On-Page Recommendations",
      desc: "Improvements are ranked by likely value, supporting evidence, effort and what your team or developers can implement.",
    },
    {
      icon: ShieldCheck,
      step: "Step 5 — Content and Internal Linking Improvements",
      desc: "Relevant product and category pages are improved, and supporting content is created where it is justified.",
    },
    {
      icon: BarChart3,
      step: "Step 6 — Monitoring and Refinement",
      desc: "We review search visibility, organic clicks, indexation and properly tracked business outcomes, then refine the strategy based on evidence. No fixed timeline or ranking outcome can be promised.",
    },
  ];

  const measures = [
    "Organic clicks and impressions.",
    "Search queries and landing-page visibility.",
    "Indexing and crawl issues.",
    "Product and category page performance.",
    "Organic sessions and engaged sessions where relevant.",
    "Add-to-cart and checkout events, if correctly tracked.",
    "Purchases, revenue and organic conversion rate, if reliable tracking is configured.",
    "Performance by landing page where attribution data is dependable.",
  ];

  const mistakes = [
    {
      label: "Duplicate product descriptions:",
      text: "pages compete with each other and give shoppers nothing new.",
    },
    {
      label: "Uncontrolled faceted navigation:",
      text: "filters can create huge numbers of low-value URLs.",
    },
    {
      label: "Incorrect canonical tags:",
      text: "search engines may index the wrong version of a page.",
    },
    {
      label: "Indexable low-value URL variations:",
      text: "crawl attention is spent on pages that should not rank.",
    },
    {
      label: "Missing or inaccurate product information:",
      text: "shoppers lose trust and structured data can be invalid.",
    },
    {
      label: "Broken internal links:",
      text: "shoppers and crawlers hit dead ends.",
    },
    {
      label: "Thin category pages:",
      text: "little reason for anyone to stay or return.",
    },
    {
      label: "Keyword-heavy image alt text:",
      text: "it harms accessibility and looks manipulative.",
    },
    {
      label: "Invalid structured data:",
      text: "it may be ignored or flagged.",
    },
    {
      label: "Poor mobile usability:",
      text: "most shoppers browse on phones.",
    },
    {
      label: "Redirect chains and unnecessary 404 errors:",
      text: "they slow crawling and waste link value.",
    },
    {
      label: "Large volumes of low-value AI-generated content:",
      text: "it adds pages without adding value.",
    },
  ];

  const whyDiglip = [
    "A strategy aligned with your business objectives.",
    "Attention to product and category page quality.",
    "Technical SEO assessment and prioritisation.",
    "Clear keyword mapping and internal linking.",
    "Useful reporting and measurement.",
    "Recommendations based on your platform and architecture.",
    "Transparent scope and implementation requirements.",
  ];

  const faqs = [
    {
      q: "What Is E-commerce SEO?",
      a: "E-commerce SEO is the process of improving an online store so that search engines can understand its product and category pages and shoppers can find them through organic search. It combines technical work, keyword research, content, internal linking and measurement.",
    },
    {
      q: "Why Does an Online Store Need E-commerce SEO?",
      a: "It can help relevant shoppers discover your products, make product and category information clearer and reduce technical barriers to crawling and indexing. It works alongside other channels and cannot guarantee traffic or sales.",
    },
    {
      q: "How Much Does E-commerce SEO Cost in Saudi Arabia?",
      a: "Cost depends on store size, platform, technical complexity, competition, content requirements and the scope of work. A review of your store is needed before a reliable estimate can be given.",
    },
    {
      q: "How Long Does E-commerce SEO Take to Show Results?",
      a: "It varies with your site's current condition, competition, crawl and indexation status, how quickly changes are implemented and search demand. No fixed timeframe or ranking result can be promised.",
    },
    {
      q: "Can SEO Improve Product and Category Page Visibility?",
      a: "Yes, it can support visibility. Useful content, relevant keywords, sensible internal linking and technical accessibility help search engines and shoppers find and understand these pages, though rankings are never guaranteed.",
    },
    {
      q: "Is Shopify SEO Different From WooCommerce SEO?",
      a: "The core SEO principles are the same, but templates, extensions, URL handling and the way changes are implemented differ between platforms. Recommendations should be adapted to the platform you use.",
    },
    {
      q: "Does an Online Store Need Arabic and English SEO?",
      a: "It depends on your target customers, the languages they search in and how your site is structured. Separate language versions may help in some cases, but not every store needs them.",
    },
    {
      q: "How Can E-commerce SEO Performance Be Measured?",
      a: "Google Search Console and correctly configured analytics can show search impressions, clicks, organic visits and relevant e-commerce actions such as add-to-cart and purchases. Tracking should be tested before results are relied on.",
    },
  ];

  return (
    <div className="overflow-x-hidden bg-white w-full font-sans antialiased text-gray-800">
      {/* Dynamic SEO Tag Integration */}
      <SEO
        title={metaTitle}
        description={metaDescription}
        canonical={pageUrl}
        ogType="website"
        ogTitle={metaTitle}
        ogDescription={metaDescription}
        twitterCard="summary"
        twitterTitle={metaTitle}
        twitterDescription={metaDescription}
        robots="index, follow"
        exactTitle={true}
        schema={structuredData}
      />

      {/* =========================================================================
          BREADCRUMB (Identical light gradient to DubaiLocalSEO.jsx & AIMarketingAutomationSaudiArabia.jsx)
          ========================================================================= */}
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

      <main>
        {/* =========================================================================
            SECTION 1: HERO (Matching APIDevelopment.jsx & SaudiVideoMarketingAgency.jsx)
            ========================================================================= */}
        <section className="pt-8 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 xl:px-12 bg-gradient-to-r from-purple-100 via-pink-100 to-white relative overflow-hidden min-h-[85vh] flex flex-col justify-center items-center">
          {/* Animated Floating Ambient Orbs */}
          <motion.div
            className="absolute top-10 left-10 w-24 h-24 bg-white/40 rounded-full blur-2xl pointer-events-none"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-32 h-32 bg-teal-200/30 rounded-full blur-2xl pointer-events-none"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          />

          <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-14 w-full">
            <div className="w-full lg:w-[54%] text-center lg:text-left">
              {/* Exact H1 */}
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                <span className="text-gray-900">E-commerce SEO Service </span>
                <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                  in Saudi Arabia
                </span>
              </h1>

              {/* Exact Document Paragraph 1 */}
              <p className="text-gray-700 text-sm sm:text-base lg:text-lg mb-4 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                An online store can have thousands of pages and still be hard to find. Products sit under unclear categories, similar items share the same description, filters create endless URL variations, and pages load slowly on a phone. Good e-commerce SEO deals with these problems so that shoppers searching for what you sell can reach the right product or category page, and search engines can understand what each page is about.
              </p>

              {/* Exact Document Paragraph 2 */}
              <p className="text-gray-700 text-sm sm:text-base lg:text-lg mb-4 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                For online stores in Saudi Arabia, the work often includes Arabic and English search behaviour, mobile performance and clear product information, alongside the technical foundations that every store needs. The aim is steady, relevant organic visibility that works alongside your other sales channels.
              </p>

              {/* Exact Document Paragraph 3 */}
              <p className="text-gray-700 text-sm sm:text-base lg:text-lg mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                This page explains what an e-commerce SEO service from <span className="font-semibold text-blue-700">DigLip7</span> involves, how the process works and what affects results. We do not guarantee rankings, traffic, revenue or ROI. Search results depend on your site, your competitors and many factors outside anyone's control.
              </p>

              {/* CTA Button 1 */}
              <div className="flex justify-center lg:justify-start">
                <Link to="/contact" className="inline-block">
                  <motion.button
                    className="group px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-teal-700 to-teal-900 text-white text-base sm:text-lg font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Discuss Your E-commerce SEO Goals
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
              </div>
            </div>

            {/* Right Section - Hero Image with Movable Effect */}
            <motion.div
              className="w-full lg:w-[46%] flex justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="w-full flex justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Card3D className="w-full max-w-lg lg:max-w-none">
                  <img
                    src="/images/ecommerce-seo-service-saudi-arabia.webp"
                    alt="E-commerce specialist reviewing online store product pages and organic search performance"
                    title="Reviewing an online store's product pages"
                    width="1200"
                    height="675"
                    decoding="async"
                    className="rounded-2xl shadow-xl w-full max-w-lg lg:max-w-none h-auto object-cover bg-gray-100"
                  />
                </Card3D>
              </motion.div>
            </motion.div>
          </div>

          {/* Floating background particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full"
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
        </section>

        {/* =========================================================================
            SECTION 2: WHAT IS E-COMMERCE SEO?
            ========================================================================= */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <FloatingElement>
                {/* Exact H2 */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  What Is{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                    E-commerce SEO?
                  </span>
                </h2>
              </FloatingElement>
              {/* Exact Document Paragraph 1 */}
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                E-commerce SEO is search engine optimisation for online stores. It combines technical optimisation, keyword research, product page content, category structure, internal linking, structured data and performance measurement.
              </p>
              {/* Exact Document Paragraph 2 */}
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mt-4 font-semibold text-gray-900">
                It differs from SEO for a typical business website because stores have many more moving parts:
              </p>
            </div>

            {/* 7 Moving Parts Grid in full max-w-7xl */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto mb-8">
              {movingParts.map((item, i) => (
                <div
                  key={item}
                  className="bg-gray-50 rounded-2xl p-5 border border-gray-100 shadow-xs flex items-start gap-3.5 hover:shadow-md transition-shadow"
                >
                  <span className="w-8 h-8 rounded-full bg-teal-100 text-teal-800 font-bold flex items-center justify-center shrink-0 text-sm">
                    {i + 1}
                  </span>
                  <p className="text-gray-800 text-sm sm:text-base font-medium leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Exact Document Paragraph 3 in Callout */}
            <div className="max-w-7xl mx-auto bg-gradient-to-br from-gray-50 to-teal-50/20 p-6 sm:p-8 rounded-2xl border border-gray-100 text-center text-gray-700 text-sm sm:text-base leading-relaxed">
              The right strategy depends on your platform, the size of your catalogue, your target audience and your business model. A 50-product brand store and a 50,000-product marketplace need different priorities.
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: WHY E-COMMERCE BUSINESSES IN SAUDI ARABIA NEED SEO
            ========================================================================= */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <FloatingElement>
                {/* Exact H2 */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Why E-commerce Businesses in Saudi Arabia{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                    Need SEO
                  </span>
                </h2>
              </FloatingElement>
              {/* Exact Document Paragraph 1 */}
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Shoppers often start with a search, and organic visibility can bring in people who are already looking for what you sell. Practical reasons stores invest in SEO include:
              </p>
            </div>

            {/* 7 Reasons Grid in full max-w-7xl */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-10">
              {whyNeed.map((item, i) => (
                <div
                  key={item}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-start gap-3.5 hover:shadow-md transition-shadow"
                >
                  <div className="w-8 h-8 rounded-full bg-teal-50 text-teal-700 font-bold flex items-center justify-center shrink-0 text-sm">
                    {i + 1}
                  </div>
                  <p className="text-gray-800 text-sm sm:text-base font-medium leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Exact Document Trailing Paragraph */}
            <div className="max-w-7xl mx-auto bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-xs text-center text-gray-700 text-sm sm:text-base leading-relaxed">
              SEO does not guarantee sales. It improves the chances that the right people find a page that serves them well.
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: OUR E-COMMERCE SEO SERVICES IN SAUDI ARABIA
            ========================================================================= */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <FloatingElement>
                {/* Exact H2 */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Our E-commerce SEO{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                    Services in Saudi Arabia
                  </span>
                </h2>
              </FloatingElement>
              {/* Exact Document Lead Paragraph */}
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                The areas below describe what an e-commerce SEO project can include. Which parts apply depends on your store and goals, and the scope is agreed before work begins.
              </p>
            </div>

            {/* 11 Services Ordered with their exact Images from Document */}
            <div className="space-y-12 max-w-7xl mx-auto">
              {services.map((service, index) => {
                const ServiceIcon = service.icon;
                const hasImage = Boolean(service.image);
                const isEven = index % 2 === 0;

                if (hasImage) {
                  return (
                    <div
                      key={service.title}
                      className="bg-gray-50 rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        <div className={`lg:col-span-6 ${isEven ? "" : "lg:order-2"}`}>
                          <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center mb-4">
                            <ServiceIcon className="w-6 h-6" />
                          </div>
                          {/* Exact H3 */}
                          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                            {service.title}
                          </h3>
                          {/* Exact Document Paragraph / List */}
                          {service.text && (
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                              {service.text}
                            </p>
                          )}
                          {service.list && (
                            <>
                              <p className="text-gray-700 font-semibold mb-3">
                                {service.intro}
                              </p>
                              <ul className="space-y-2.5">
                                {service.list.map((item) => (
                                  <li key={item} className="flex items-start gap-2.5">
                                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-1" />
                                    <span className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                      {item}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </>
                          )}
                          {service.linkText && (
                            <p className="mt-4">
                              <Link
                                to={service.linkTo}
                                className="text-teal-700 font-semibold underline hover:text-teal-900"
                              >
                                {service.linkText}
                              </Link>
                            </p>
                          )}
                        </div>

                        <div className={`lg:col-span-6 ${isEven ? "" : "lg:order-1"} flex justify-center`}>
                          <div className="rounded-2xl overflow-hidden shadow-lg border border-white bg-white w-full">
                            <img
                              src={service.image.src}
                              alt={service.image.alt}
                              width="1200"
                              height="675"
                              loading="lazy"
                              decoding="async"
                              className="w-full h-auto object-cover bg-gray-100"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <div
                    key={service.title}
                    className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-xs hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-4">
                      <ServiceIcon className="w-6 h-6" />
                    </div>
                    {/* Exact H3 */}
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    {/* Exact Document Paragraph */}
                    <p className="text-gray-700 text-base leading-relaxed">
                      {service.text}
                      {service.linkText && (
                        <>
                          {" "}
                          Explore our dedicated{" "}
                          <Link
                            to={service.linkTo}
                            className="text-teal-700 font-semibold underline hover:text-teal-900"
                          >
                            {service.linkText}
                          </Link>{" "}
                          services.
                        </>
                      )}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: E-COMMERCE PLATFORMS WE CAN HELP OPTIMISE
            ========================================================================= */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <FloatingElement>
                {/* Exact H2 */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  E-commerce Platforms We{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                    Can Help Optimise
                  </span>
                </h2>
              </FloatingElement>
              {/* Exact Document Lead Paragraph */}
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Platforms handle SEO differently, so the same fix can look very different from one to the next. The platforms below are examples of the kinds of requirements that arise, and which of them DigLip7 can support in practice would be assessed during project discovery.
              </p>
            </div>

            {/* 4 Platforms Grid in full max-w-7xl */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {platforms.map((p) => {
                const PlatIcon = p.icon;
                return (
                  <div
                    key={p.label}
                    className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-4">
                        <PlatIcon className="w-6 h-6" />
                      </div>
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        <strong className="text-gray-900 block mb-1 font-bold">{p.label}</strong>{" "}
                        {p.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 6: INDUSTRIES AND ONLINE STORES THAT MAY BENEFIT
            ========================================================================= */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <FloatingElement>
                {/* Exact H2 */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Industries and Online Stores{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                    That May Benefit
                  </span>
                </h2>
              </FloatingElement>
              {/* Exact Document Lead Paragraph */}
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Keyword strategy and page structure differ by product range, purchase cycle, customer needs and competition. The examples below show where e-commerce SEO could apply, and they are not a list of past clients.
              </p>
            </div>

            {/* 8 Industries Grid in full max-w-7xl */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {industries.map((ind) => {
                const IndIcon = ind.icon;
                return (
                  <div
                    key={ind.label}
                    className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-11 h-11 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-4">
                        <IndIcon className="w-5 h-5" />
                      </div>
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        <strong className="text-gray-900 block mb-1 font-bold">{ind.label}</strong>{" "}
                        {ind.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 7: OUR E-COMMERCE SEO PROCESS (Matching SocialMedia.jsx UI)
            ========================================================================= */}
        <div className="bg-white py-16 px-6 md:px-12 lg:px-8 text-center border-t border-gray-100">
          {/* Header */}
          <div className="max-w-4xl mx-auto mb-12">
            <FloatingElement>
              {/* Exact H2 */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our E-commerce SEO{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  Process
                </span>
              </h2>
            </FloatingElement>
            {/* Exact Document Paragraph */}
            <p className="text-gray-600 mt-3 text-base sm:text-lg">
              Every store is different, so steps and timelines vary.
            </p>
          </div>

          {/* Steps Section */}
          <div className="relative max-w-7xl mx-auto">
            {/* Blue Line (Desktop only) */}
            <div className="hidden lg:block absolute top-8 left-0 w-full border-t-4 border-blue-100 z-0"></div>

            {/* Steps (6 Implementation Steps) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
              {processSteps.map((step, index) => {
                const StepIcon = step.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center"
                  >
                    {/* Icon Circle */}
                    <div className="relative flex items-center justify-center w-16 h-16 rounded-full border-4 border-blue-300 bg-white shadow-md mb-4 shrink-0">
                      <StepIcon className="w-8 h-8 text-blue-600" />
                      <span className="absolute -top-2 -right-2 bg-teal-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full shadow">
                        {index + 1}
                      </span>
                    </div>

                    {/* Exact H3 Title */}
                    <h3 className="font-semibold text-gray-900 text-base">{step.step}</h3>
                    {/* Exact Document Description */}
                    <p className="text-gray-600 text-xs sm:text-sm mt-2 leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* =========================================================================
            SECTION 8: E-COMMERCE SEO FOR BUSINESSES ACROSS SAUDI ARABIA
            ========================================================================= */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-md">
              <div className="max-w-3xl mx-auto text-center mb-8">
                <FloatingElement>
                  {/* Exact H2 */}
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    E-commerce SEO for Businesses{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                      Across Saudi Arabia
                    </span>
                  </h2>
                </FloatingElement>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold mb-4">
                    <Compass className="w-5 h-5" />
                  </div>
                  {/* Exact Document Paragraph 1 */}
                  <p className="text-gray-700 text-base leading-relaxed">
                    An online store can serve customers in Riyadh, Jeddah, Dammam, Khobar and elsewhere in the Kingdom without needing a separate page for each city. Creating near-identical pages that differ only by the city name is a doorway-page tactic that helps neither shoppers nor search engines.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold mb-4">
                    <Globe className="w-5 h-5" />
                  </div>
                  {/* Exact Document Paragraph 2 with Internal Link */}
                  <p className="text-gray-700 text-base leading-relaxed">
                    What matters is the detail that applies to your business: Arabic product terminology, shipping information, currency display and customer expectations. DigLip7 is not claiming a physical office in any Saudi city. Align your visibility with our comprehensive{" "}
                    <Link
                      to="/saudi-arabia/seo-services"
                      className="text-teal-700 font-semibold underline hover:text-teal-900"
                    >
                      SEO services in Saudi Arabia
                    </Link>{" "}
                    for full-market coverage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 9: HOW WE MEASURE E-COMMERCE SEO PERFORMANCE
            ========================================================================= */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <FloatingElement>
                {/* Exact H2 */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  How We Measure{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                    E-commerce SEO Performance
                  </span>
                </h2>
              </FloatingElement>
              {/* Exact Document Paragraph 1 */}
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                A mix of measures gives a fuller picture than rankings alone:
              </p>
            </div>

            {/* 8 Measures Grid in full max-w-7xl */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto mb-8">
              {measures.map((m) => (
                <div
                  key={m}
                  className="bg-gray-50 rounded-2xl p-5 border border-gray-100 shadow-xs flex items-start gap-3 hover:shadow-md transition-shadow"
                >
                  <BarChart3 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <span className="text-gray-800 text-sm sm:text-base font-medium leading-relaxed">
                    {m}
                  </span>
                </div>
              ))}
            </div>

            {/* Exact Document Paragraph 2 */}
            <div className="max-w-7xl mx-auto text-center text-gray-700 text-sm sm:text-base font-semibold bg-gray-50 p-5 rounded-xl border border-gray-100">
              Ranking changes, seasonality, stock, pricing, competition, site changes and tracking quality all affect results. We do not publish invented benchmarks or percentage improvements.
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 10: COMMON E-COMMERCE SEO MISTAKES TO AVOID
            ========================================================================= */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <FloatingElement>
                {/* Exact H2 */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Common E-commerce SEO Mistakes{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                    to Avoid
                  </span>
                </h2>
              </FloatingElement>
            </div>

            {/* 12 Mistakes Grid in full max-w-7xl */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
              {mistakes.map((m) => (
                <div
                  key={m.label}
                  className="bg-white rounded-2xl p-5 border border-amber-100 shadow-xs hover:shadow-md transition-shadow flex items-start gap-3.5"
                >
                  <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                    <AlertTriangle className="w-4 h-4" />
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    <strong className="text-gray-900 block mb-0.5 font-bold">{m.label}</strong>{" "}
                    {m.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 11: WHY CONSIDER DIGLIP7 FOR E-COMMERCE SEO?
            ========================================================================= */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <FloatingElement>
                {/* Exact H2 */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Why Consider DigLip7 for{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                    E-commerce SEO?
                  </span>
                </h2>
              </FloatingElement>
              {/* Exact Document Lead Paragraph */}
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Our approach is built around your store:
              </p>
            </div>

            {/* 7 Points Grid in full max-w-7xl */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-10">
              {whyDiglip.map((item, i) => (
                <div
                  key={item}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-xs flex items-start gap-3.5 hover:shadow-md transition-shadow"
                >
                  <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-800 font-bold flex items-center justify-center shrink-0 text-sm">
                    {i + 1}
                  </div>
                  <p className="text-gray-800 text-sm sm:text-base font-medium leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Exact Document Trailing Paragraph with Internal Link */}
            <div className="max-w-7xl mx-auto bg-gradient-to-br from-gray-50 to-teal-50/20 p-6 sm:p-8 rounded-2xl border border-gray-100 text-center text-gray-700 text-sm sm:text-base leading-relaxed">
              We would rather set realistic expectations than overpromise. Ask any provider which services they deliver directly, which platforms they work on and what evidence they can show. See how this aligns with our complete{" "}
              <Link
                to="/saudi-arabia/seo-services"
                className="text-teal-700 font-semibold underline hover:text-teal-900"
              >
                SEO services
              </Link>{" "}
              for sustainable store growth.
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 12: FREQUENTLY ASKED QUESTIONS ABOUT E-COMMERCE SEO IN SAUDI ARABIA
            (Matching SocialMedia.jsx & AIMarketingAutomationSaudiArabia.jsx)
            ========================================================================= */}
        <section className="w-full bg-gradient-to-br from-gray-50 to-teal-50/30 py-14 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-8 sm:mb-12"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <FloatingElement>
                {/* Exact H2 */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                  Frequently Asked Questions About{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                    E-commerce SEO in Saudi Arabia
                  </span>
                </h2>
              </FloatingElement>
            </motion.div>

            <div className="space-y-4 sm:space-y-5">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.q}
                  className="bg-white rounded-2xl shadow-md overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex justify-between items-center text-left p-4 sm:p-6 hover:bg-gray-50 transition-colors duration-200 group px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-teal-900 to-teal-700 text-white text-base sm:text-lg font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-[1.01] cursor-pointer"
                  >
                    <span className="text-sm sm:text-base lg:text-lg font-semibold pr-4">
                      {faq.q}
                    </span>
                    <motion.div
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0"
                    >
                      <ChevronDown className="w-5 h-5 text-white" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-gray-100"
                      >
                        <div className="p-4 sm:p-6 text-gray-700 leading-relaxed text-sm sm:text-base">
                          {/* Exact Document Answer Paragraph */}
                          <p>{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 13: PLAN YOUR E-COMMERCE SEO STRATEGY WITH DIGLIP7 (FINAL CTA)
            ========================================================================= */}
        <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 xl:px-12 w-full text-center relative overflow-hidden border-t border-gray-100">
          <div className="max-w-5xl mx-auto relative z-10">
            <FloatingElement>
              {/* Exact H2 */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight leading-tight">
                Plan Your E-commerce SEO Strategy{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  With DigLip7
                </span>
              </h2>
            </FloatingElement>

            {/* Exact Document Paragraph */}
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
              If you want an e-commerce SEO service in Saudi Arabia, start with what you know: your platform, your product range, your goals and the problems you have noticed. Share those with us and we can talk through where to focus first.
            </p>

            {/* Exact CTA Button 2 */}
            <div className="flex justify-center mb-10">
              <Link to="/contact">
                <motion.button
                  className="group px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-teal-700 to-teal-900 text-white text-base sm:text-lg font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Discuss Your E-commerce SEO Goals
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </div>

            {/* Related Saudi Service Links */}
            <div className="pt-6 border-t border-gray-200/80 flex flex-wrap justify-center gap-4 text-xs font-semibold text-gray-600">
              <Link to="/saudi-arabia/seo-services" className="hover:text-teal-700 transition-colors">
                SEO Services Saudi Arabia
              </Link>
              <span className="text-gray-300">•</span>
              <Link to="/saudi-arabia/social-media-marketing/" className="hover:text-teal-700 transition-colors">
                Social Media Marketing
              </Link>
              <span className="text-gray-300">•</span>
              <Link to="/saudi-arabia/content-marketing-services/" className="hover:text-teal-700 transition-colors">
                Content Marketing Services
              </Link>
              <span className="text-gray-300">•</span>
              <Link to="/saudi-arabia/ppc-services/" className="hover:text-teal-700 transition-colors">
                Paid Advertising
              </Link>
              <span className="text-gray-300">•</span>
              <Link to="/saudi-arabia/video-marketing-agency/" className="hover:text-teal-700 transition-colors">
                Video Marketing Agency
              </Link>
              <span className="text-gray-300">•</span>
              <Link to="/saudi-arabia/ai-marketing-automation/" className="hover:text-teal-700 transition-colors">
                AI Marketing Automation
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
