import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../../../components/SEO";
import {
  ShoppingBag,
  Search,
  CheckCircle,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Home,
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
  Package,
  Sparkles,
} from "lucide-react";

// Imported Qatar E-commerce WebP Images
import heroImgSrc from "../../../images/qatar-ecommerce.webp";
import productPageImgSrc from "../../../images/qatar-product-page.webp";
import architectureImgSrc from "../../../images/qatar-internal-linking.webp";

// Image Slot Container
const EcommerceImageSlot = ({
  src = "",
  fallbackSrc = "",
  alt = "",
  width = 1200,
  height = 675,
  aspect = "aspect-[16/9]",
  className = "",
  priority = false,
  fallbackIcon = ShoppingBag,
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
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    } else {
      setHasError(true);
    }
  };

  return (
    <div
      className={`relative w-full rounded-2xl overflow-hidden bg-gradient-to-br from-teal-50/50 via-white to-slate-50 border border-teal-200/80 shadow-md flex items-center justify-center ${aspect} ${className}`}
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
        <div className="p-6 sm:p-8 text-center text-sm font-medium text-slate-800 select-none flex flex-col items-center justify-center gap-3 w-full h-full bg-gradient-to-b from-white/95 to-teal-50/60 border-2 border-dashed border-teal-300/80 rounded-2xl">
          <div className="w-14 h-14 rounded-2xl bg-teal-100/90 text-teal-700 flex items-center justify-center shadow-xs">
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
            <span className="text-[11px] text-slate-500 block pt-0.5">
              [E-commerce Visual Container &bull; Ready for Image]
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
  { label: "Qatar", href: "/qatar/seo-services" },
  { label: "E-commerce SEO Services", href: "/qatar/ecommerce-seo-services/" },
];

const whyNeedProblems = [
  {
    title: "Thin, duplicated or hard-to-crawl product pages",
    desc: "Product pages get few organic impressions because they are thin, duplicated or hard to crawl.",
    icon: FileText,
  },
  {
    title: "Mismatched category intent",
    desc: "Category pages don't match what shoppers search for, so a \"wireless headphones\" page may read like a brand story.",
    icon: Target,
  },
  {
    title: "Internal keyword cannibalization",
    desc: "Several pages on the same site compete for one query.",
    icon: Network,
  },
  {
    title: "Friction on mobile devices",
    desc: "Slow, awkward mobile pages lose visitors before they reach the product.",
    icon: Smartphone,
  },
  {
    title: "Price & availability inconsistency",
    desc: "Price and availability are unclear or inconsistent between the page and search results.",
    icon: ShoppingBag,
  },
  {
    title: "Over-reliance on paid advertising",
    desc: "The store depends heavily on paid advertising, so traffic stops when the budget does.",
    icon: BarChart3,
  },
];

const servicesWeProvide = [
  {
    title: "E-commerce SEO audit",
    desc: "A prioritized review of crawling, indexing, templates, content, and tracking. You get a clear list of what to fix first and why.",
    icon: ShieldCheck,
    tag: "Audit & Diagnostics",
  },
  {
    title: "E-commerce keyword research",
    desc: "Search terms mapped to categories and products, so each page has a defined job.",
    icon: Search,
    tag: "Intent Mapping",
  },
  {
    title: "Product page optimization",
    desc: "Titles, headings, descriptions, attributes, and images that explain the product clearly.",
    icon: Package,
    tag: "Product Content",
  },
  {
    title: "Category page optimization",
    desc: "Pages that match browsing and comparison searches and help shoppers decide.",
    icon: FolderTree,
    tag: "Category Structure",
  },
  {
    title: "Technical SEO for e-commerce websites",
    desc: "Fixes for duplicate URLs, canonicals, redirects, sitemaps, and rendering problems.",
    icon: Settings,
    tag: "Technical Health",
  },
  {
    title: "Shopify SEO services",
    desc: "Collection, product, theme, and app-level improvements for Shopify stores.",
    icon: ShoppingBag,
    tag: "Platform Focus",
  },
  {
    title: "Site architecture and internal linking",
    desc: "A hierarchy that reflects your real inventory.",
    icon: Network,
    tag: "Architecture",
  },
  {
    title: "Product structured data",
    desc: "Product, offer, and breadcrumb markup that matches visible page content.",
    icon: Code2,
    tag: "Schema & Rich Data",
  },
  {
    title: "Mobile and page-speed improvements",
    desc: "Recommendations based on testing your key templates.",
    icon: Zap,
    tag: "Core Web Vitals",
  },
  {
    title: "Arabic and English SEO planning",
    desc: "Where your audience calls for it.",
    icon: Globe,
    tag: "Bilingual Localization",
  },
  {
    title: "Measurement and reporting",
    desc: "Search Console and analytics reporting tied to business goals.",
    icon: BarChart3,
    tag: "Analytics & Attribution",
  },
];

const platformsList = [
  {
    name: "Shopify",
    desc: "We look at collection and product organization, duplicate URL paths, metadata, redirects, theme performance, app overhead and structured data output.",
    badge: "SaaS E-commerce",
  },
  {
    name: "WooCommerce",
    desc: "Work often involves plugin configuration, templates and permalink settings.",
    badge: "WordPress Ecosystem",
  },
  {
    name: "Magento",
    desc: "It usually involves extension choices, layered navigation, caching and template-level technical implementation.",
    badge: "Enterprise Catalogs",
  },
];

const processSteps = [
  { step: "01", title: "Discovery and business goals" },
  { step: "02", title: "Website and technical SEO audit" },
  { step: "03", title: "Keyword research and search intent mapping" },
  { step: "04", title: "Competitor and search results analysis" },
  { step: "05", title: "Technical issue prioritization" },
  { step: "06", title: "Product and category page optimization" },
  { step: "07", title: "Structured data and internal linking improvements" },
  { step: "08", title: "Implementation and quality assurance" },
  { step: "09", title: "Search Console and analytics monitoring" },
  { step: "10", title: "Ongoing improvement based on measured results" },
];

const faqList = [
  {
    q: "What is e-commerce SEO, and how does it help online stores in Qatar?",
    a: "It is the practice of improving an online store so search engines can find, understand and show its product and category pages. For stores in Qatar, it can build non-paid visibility among shoppers searching for what you sell. Results depend on competition and site condition.",
  },
  {
    q: "What do e-commerce SEO services in Qatar include?",
    a: "Typically an audit, keyword research, product and category page optimization, technical fixes, internal linking, structured data and reporting. The exact scope depends on your platform and goals, and some changes may need coordination with your developers.",
  },
  {
    q: "How long does e-commerce SEO take to show results?",
    a: "It varies. Catalog size, competition, site condition and how quickly changes are implemented all matter. Technical fixes may be reflected sooner than content and authority improvements. Anyone promising specific rankings in a fixed number of days is guessing.",
  },
  {
    q: "Can you provide Shopify SEO services in Qatar?",
    a: "Yes. We review collections, products, metadata, redirects, theme performance, apps and structured data for Shopify stores targeting Qatar. Some theme-level changes may need a Shopify developer, which we would identify during scoping.",
  },
  {
    q: "Do online stores in Qatar need Arabic and English SEO?",
    a: "Not always. It depends on your audience and goals. If you serve both Arabic and English speakers, separate keyword research and well-localized content are usually worthwhile. If your customers mainly use one language, a single-language approach can be the better choice.",
  },
  {
    q: "How do you optimize product and category pages?",
    a: "We improve titles, headings, descriptions, attributes, images, canonical tags and internal links. Product pages focus on specific buyer questions, while category pages focus on helping shoppers compare and choose. Original content is prioritized over copied manufacturer text.",
  },
  {
    q: "What technical SEO issues commonly affect online stores?",
    a: "Common ones include duplicate URLs from filters and sorting, missing or incorrect canonical tags, broken links, poor handling of discontinued products, slow templates, rendering problems and structured data that doesn't match visible content.",
  },
  {
    q: "How can I measure the performance of e-commerce SEO?",
    a: "Use Search Console for clicks, impressions, queries and indexing. Use GA4 e-commerce tracking for organic purchases and revenue. Review product and category landing pages, conversion rate and technical errors together, and treat traffic and revenue as separate measures.",
  },
];

// ---------------------------------------------------------------------------
// Main Component
// ---------------------------------------------------------------------------

function QatarEcommerceSEO() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const pageUrl = "https://diglip7.com/qatar/ecommerce-seo-services/";

  // Exact JSON-LD Schema Blocks as requested
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
      "@id": "https://diglip7.com/qatar/ecommerce-seo-services/#webpage",
      url: "https://diglip7.com/qatar/ecommerce-seo-services/",
      name: "E-commerce SEO Qatar | Online Store SEO Services | DigLip7",
      description:
        "E-commerce SEO services for online stores targeting Qatar: audits, product and category page optimization, technical SEO and performance reporting.",
      isPartOf: { "@id": "https://diglip7.com/#website" },
      about: { "@id": "https://diglip7.com/qatar/ecommerce-seo-services/#service" },
      breadcrumb: { "@id": "https://diglip7.com/qatar/ecommerce-seo-services/#breadcrumb" },
      inLanguage: "en",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://diglip7.com/qatar/ecommerce-seo-services/#service",
      name: "E-commerce SEO Services in Qatar",
      serviceType: "E-commerce SEO",
      description:
        "E-commerce SEO services for online stores targeting customers in Qatar, including audits, keyword research, product and category page optimization, technical SEO, structured data and performance reporting.",
      url: "https://diglip7.com/qatar/ecommerce-seo-services/",
      provider: { "@id": "https://diglip7.com/#organization" },
      areaServed: { "@type": "Country", name: "Qatar" },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": "https://diglip7.com/qatar/ecommerce-seo-services/#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://diglip7.com/" },
        { "@type": "ListItem", position: 2, name: "Qatar", item: "https://diglip7.com/qatar/" },
        { "@type": "ListItem", position: 3, name: "E-commerce SEO Services", item: "https://diglip7.com/qatar/ecommerce-seo-services/" },
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
      <SEO
        title="E-commerce SEO Qatar | Online Store SEO Services | DigLip7"
        description="DigLip7 offers e-commerce SEO services for online stores targeting Qatar: audits, product page optimization, technical SEO and reporting. Get in touch."
        canonical={pageUrl}
        robots="index, follow"
        exactTitle={true}
        keywords="E-commerce SEO Qatar, E-commerce SEO Agency Qatar, Online Store SEO Services Qatar, Shopify SEO Services Qatar, Product Page SEO Services, E-commerce Website Optimization Qatar, E-commerce Keyword Research Qatar, Technical SEO for E-commerce Websites"
        ogType="website"
        ogTitle="E-commerce SEO Qatar | Online Store SEO Services | DigLip7"
        ogDescription="E-commerce SEO services for online stores targeting Qatar: audits, product and category page optimization, technical SEO and performance reporting."
        ogImage="https://diglip7.com/images/ecommerce-keyword-research-analysis.webp"
        ogImageAlt="Team reviewing online store product listings and search performance data on a desktop screen"
        twitterCard="summary_large_image"
        twitterTitle="E-commerce SEO Qatar | Online Store SEO Services"
        twitterDescription="E-commerce SEO services for online stores targeting Qatar: audits, product page optimization, technical SEO and reporting."
        twitterImage="https://diglip7.com/images/ecommerce-keyword-research-analysis.webp"
        twitterImageAlt="Team reviewing online store product listings and search performance data on a desktop screen"
        hreflangs={[
          { hreflang: "en-qa", href: pageUrl },
          { hreflang: "x-default", href: pageUrl },
        ]}
        schema={schemaData}
      />

      {/* Breadcrumb Navigation */}
      <div className="pt-24 sm:pt-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-50/60 via-slate-50 to-white border-b border-gray-100">
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
      <header className="pt-8 sm:pt-12 pb-16 lg:pb-24 bg-gradient-to-r from-teal-50/60 via-slate-50 to-white border-b border-gray-200 relative overflow-hidden">
        {/* Subtle decorative background shapes */}
        <div className="absolute top-10 left-10 w-48 h-48 bg-teal-200/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-slate-200/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100/80 text-teal-900 border border-teal-200 text-xs sm:text-sm font-semibold tracking-wide">
                <ShoppingBag className="w-4 h-4 text-teal-700" />
                <span>Qatar Online Retail Search Strategy</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                E-commerce SEO Services in Qatar for Online Stores
              </h1>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  Many online stores in Qatar share the same frustrating pattern. The products are good, the photos are clean and checkout works, yet organic search sends only a trickle of visitors. The cause is rarely one big mistake. Category pages may target the wrong terms, filters may create thousands of near-duplicate URLs, or product pages may carry the same supplier text as a dozen competitors.
                </p>
                <p>
                  E-commerce SEO Qatar work helps search engines discover, understand and display the right product and category pages to people searching for what you sell.{" "}
                  <Link to="/" className="text-teal-800 font-semibold underline hover:text-teal-900 transition-colors">
                    DigLip7
                  </Link>{" "}
                  provides e-commerce SEO services for businesses targeting customers in Qatar. The work covers audits, keyword research, product page optimization, technical fixes and reporting. It suits store owners, e-commerce managers and marketing teams who need more than keywords added to titles and descriptions.
                </p>
              </div>

              <div className="pt-2">
                <Link to="/contact" className="inline-block">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-7 py-4 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm sm:text-base shadow-lg shadow-teal-700/20 flex items-center gap-2 cursor-pointer transition-all"
                  >
                    <span>Discuss Your E-commerce SEO Requirements</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Right Column: Hero Visual Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 flex justify-center items-center"
            >
              <div className="w-full max-w-lg">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white">
                  <EcommerceImageSlot
                    src={heroImgSrc}
                    alt="Team reviewing online store product listings and search performance data on a desktop screen"
                    aspect="aspect-[16/9]"
                    priority={true}
                    fallbackIcon={Laptop}
                    badgeText="Store Performance & Analytics"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Section 1: Why Online Stores Need E-commerce SEO */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <span className="px-3.5 py-1.5 rounded-full bg-teal-100 text-teal-800 text-xs sm:text-sm font-semibold tracking-wide">
              Retail Architecture Challenges
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Online Stores Need E-commerce SEO
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Online retail has problems that ordinary websites don't. A store with 3,000 products can generate tens of thousands of URLs through filters, sorting options and variants. That volume creates several recurring problems:
            </p>
          </div>

          {/* 6 Recurring Problems Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {whyNeedProblems.map((problem, idx) => {
              const Icon = problem.icon;
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200 hover:border-teal-300 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-teal-100/70 text-teal-800 flex items-center justify-center shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {problem.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {problem.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Realistic Disclaimer Box */}
          <div className="p-5 sm:p-6 rounded-2xl bg-amber-50/80 border border-amber-200/90 text-amber-950 flex items-start gap-3.5 max-w-4xl mx-auto">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm leading-relaxed">
              <span className="font-bold text-amber-900">Realistic Grounding:</span> SEO can build relevant non-paid traffic over time. Results depend on competition, the site's current condition, how well changes are implemented, and other factors outside anyone's control. We don't promise rankings, traffic increases, or revenue growth.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: E-commerce SEO Services We Provide */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50/70 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <span className="px-3.5 py-1.5 rounded-full bg-teal-100 text-teal-800 text-xs sm:text-sm font-semibold tracking-wide">
              Targeted Scope
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              E-commerce SEO Services We Provide
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Each part of the service addresses a specific problem:
            </p>
          </div>

          {/* 11 Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {servicesWeProvide.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-gray-200 p-6 sm:p-7 hover:border-teal-400 hover:shadow-lg transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 text-teal-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                        {service.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-xs text-teal-700 font-medium">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Included in Scope</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Direct vs Developer Scope Clarification */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-teal-200/80 text-slate-800 shadow-sm max-w-4xl mx-auto space-y-3">
            <div className="flex items-center gap-2 text-teal-800 text-xs font-bold uppercase tracking-wider">
              <Settings className="w-4 h-4" />
              <span>Implementation Scope Split</span>
            </div>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Some of this work DigLip7 can implement directly, such as content, metadata, and recommendations. Other changes may need your developers, a platform specialist, or a theme vendor, especially template edits, server configuration, and checkout code. We settle this during scoping, because the split depends on your platform, access, and team.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Product Page and Category Page Optimization */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <span className="px-3.5 py-1.5 rounded-full bg-teal-100 text-teal-800 text-xs sm:text-sm font-semibold tracking-wide">
              Intent Differentiation
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Product Page and Category Page Optimization
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              A product page and a category page answer different questions. Someone searching for a specific model wants specifications, price, and delivery details. Someone searching for a broader term wants to compare options. Treating them the same way is a common reason stores underperform.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-12">
            {/* Product Page Optimization Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-center gap-2.5 text-teal-800 font-bold text-lg">
                <Package className="w-5 h-5 text-teal-600" />
                <h3>Product Pages (Transactional Intent)</h3>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                For product pages, we look at descriptive titles and headings, original descriptions, useful specifications, meaningful image alt text, price, availability, delivery and return information (where verified), and canonical tags for variants. Copying manufacturer descriptions across a large catalog gives search engines little reason to prefer your page, so we prioritize original copy for the products that matter most.
              </p>
            </div>

            {/* Category Page Optimization Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-center gap-2.5 text-teal-800 font-bold text-lg">
                <FolderTree className="w-5 h-5 text-teal-600" />
                <h3>Category Pages (Commercial Comparison)</h3>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Category pages need a short, helpful introduction, clear subcategories, breadcrumbs, and links to related products or guides. They don't need long keyword-heavy blocks of text.
              </p>
            </div>
          </div>

          {/* Hypothetical Example Callout */}
          <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-teal-50 via-slate-50 to-white border border-teal-200 shadow-sm mb-12">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-teal-800 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Hypothetical Example &bull; Product Page Realignment</span>
              </div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                <span className="font-semibold text-slate-900">A hypothetical example.</span> Take a product page titled "Running Shoe 4521" with a one-line description copied from a supplier. A better version would have a title naming the product type, key attribute, and brand, a heading to match, and a short description of fit, use, and materials. It would also have a size and availability note, images with accurate alt text, and links back to the running shoes category. Nothing about it is clever. It is simply clear enough for both shoppers and search engines.
              </p>
            </div>
          </div>

          {/* Product Page Optimization Visual Container */}
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white">
              <EcommerceImageSlot
                src={productPageImgSrc}
                alt="Comparison of a generic product page and a clearer, optimized product page layout"
                aspect="aspect-[16/10]"
                fallbackIcon={FileText}
                badgeText="Product Page Layout Contrast"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: E-commerce Keyword Research Qatar */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50/70 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <span className="px-3.5 py-1.5 rounded-full bg-teal-100 text-teal-800 text-xs sm:text-sm font-semibold tracking-wide">
              Market Demand Discovery
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              E-commerce Keyword Research Qatar
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              E-commerce keyword research for Qatar starts with how people actually search. Some searches are transactional (a specific product), some are commercial (comparing options), and some are informational (how to choose). Each calls for a different page type.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed bg-white p-6 sm:p-9 rounded-3xl border border-gray-200 shadow-sm">
            <p>
              Our process covers product-specific and category-specific searches, local terminology and Qatar-specific relevance (including delivery coverage), English and Arabic research when your audience uses both, search result analysis, and competitor and content gap review. We then map one primary intent to one suitable page and prioritize by business value, relevance, and implementation effort.
            </p>
            <p>
              Keywords should reflect what you stock, what you can deliver, and who you serve. A term that looks attractive but doesn't match your range only brings visitors who leave. We don't quote search volumes unless they come from current, verifiable research.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Technical SEO for E-commerce Websites */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <span className="px-3.5 py-1.5 rounded-full bg-teal-100 text-teal-800 text-xs sm:text-sm font-semibold tracking-wide">
              Infrastructure & Indexation
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Technical SEO for E-commerce Websites
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Technical SEO is about making sure search engines can reach and interpret the right pages. In plain terms, you want them to spend time on pages that deserve to be found, not on endless filter combinations.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed bg-slate-50 p-6 sm:p-9 rounded-3xl border border-slate-200">
            <p>
              Large catalogs need a deliberate approach. We review crawlability and indexability, XML sitemaps, robots.txt, canonical tags, redirects and broken links, duplicate and parameter URLs, faceted navigation, pagination, discontinued and out-of-stock products, JavaScript rendering, mobile usability and structured data validation.
            </p>
            <p>
              We don't recommend indexing every filter combination, and we don't recommend blocking every parameter. Some filtered pages, such as "black leather sofas," may match real search demand and deserve indexing. Others are noise. The right decision depends on your architecture, demand and canonical strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: Shopify and Other E-commerce Platform SEO */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50/70 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <span className="px-3.5 py-1.5 rounded-full bg-teal-100 text-teal-800 text-xs sm:text-sm font-semibold tracking-wide">
              Platform Engineering
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Shopify and Other E-commerce Platform SEO
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Platforms differ, and the fix for one store may not apply to another.
            </p>
          </div>

          {/* 3 Main Platforms */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8">
            {platformsList.map((platform, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-gray-200 shadow-xs hover:border-teal-300 transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-900">{platform.name}</h3>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-800">
                    {platform.badge}
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {platform.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-2xl bg-white border border-gray-200 text-slate-600 text-xs sm:text-sm max-w-4xl mx-auto text-center leading-relaxed">
            Other platforms and custom builds get the same treatment: we check what the platform allows and what needs developer involvement. We don't claim official platform partnerships or certifications.
          </div>
        </div>
      </section>

      {/* Section 7: Arabic and English E-commerce SEO */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <span className="px-3.5 py-1.5 rounded-full bg-teal-100 text-teal-800 text-xs sm:text-sm font-semibold tracking-wide">
              Bilingual Strategy
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Arabic and English E-commerce SEO
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Stores serving Qatar often face a language decision. Whether you need both depends on your audience and goals. Not every store needs a bilingual site, and not every customer prefers one language.
            </p>
          </div>

          <div className="max-w-4xl mx-auto text-slate-700 text-sm sm:text-base leading-relaxed bg-gradient-to-r from-teal-50/40 via-white to-slate-50 p-6 sm:p-9 rounded-3xl border border-teal-200/80 shadow-sm">
            <p>
              Where both languages are relevant, we plan for native-language keyword research, natural localization rather than literal translation, Arabic product names and descriptions, a sensible URL structure, correct hreflang implementation, consistent internal linking between versions, and equivalent product information in both languages. Machine-translated or duplicated low-value content helps neither shoppers nor search engines, so we avoid it.
            </p>
          </div>
        </div>
      </section>

      {/* Section 8: E-commerce Site Speed and Mobile Optimization */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50/70 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <span className="px-3.5 py-1.5 rounded-full bg-teal-100 text-teal-800 text-xs sm:text-sm font-semibold tracking-wide">
              Performance & Core Vitals
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              E-commerce Site Speed and Mobile Optimization
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Many shoppers browse and buy on phones, so slow or awkward mobile pages cost sales as well as visibility. We test representative templates, such as the homepage, a category page, a product page and the cart, rather than a single URL.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed bg-white p-6 sm:p-9 rounded-3xl border border-gray-200 shadow-sm">
            <p>
              Typical areas include image compression and correct dimensions, responsive layouts, unnecessary scripts and third-party apps, caching and delivery where supported, mobile navigation and filtering, and product listing usability.
            </p>
            <p>
              We assess these against Google's Core Web Vitals: Largest Contentful Paint, Interaction to Next Paint and Cumulative Layout Shift. Good scores are worth pursuing, but no score guarantees higher rankings or sales.
            </p>
          </div>
        </div>
      </section>

      {/* Section 9: Product Schema and Structured Data */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <span className="px-3.5 py-1.5 rounded-full bg-teal-100 text-teal-800 text-xs sm:text-sm font-semibold tracking-wide">
              Rich Markup Compliance
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Product Schema and Structured Data
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Structured data gives search engines a machine-readable description of a page. For eligible product pages, relevant types include Product, Offer, BreadcrumbList, Organization and WebSite. AggregateRating and Review apply only when your review data genuinely qualifies.
            </p>
          </div>

          <div className="max-w-4xl mx-auto text-slate-700 text-sm sm:text-base leading-relaxed bg-slate-50 p-6 sm:p-9 rounded-3xl border border-slate-200">
            <p>
              The markup must match what shoppers see. Price, currency, availability, identifiers and ratings need to reflect visible content and reliable data sources. Valid markup can make a page eligible for supported search features, but it does not guarantee rich results or better rankings.
            </p>
          </div>
        </div>
      </section>

      {/* Section 10: Internal Linking and Site Architecture */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50/70 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <span className="px-3.5 py-1.5 rounded-full bg-teal-100 text-teal-800 text-xs sm:text-sm font-semibold tracking-wide">
              Catalog Hierarchy
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Internal Linking and Site Architecture
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              A logical hierarchy helps shoppers and search engines find products. A simple structure looks like this:
            </p>
          </div>

          {/* Simple Structure Diagram Card */}
          <div className="max-w-3xl mx-auto mb-10 p-6 sm:p-8 rounded-3xl bg-white border border-teal-200 shadow-sm text-center">
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 font-bold text-sm sm:text-base text-slate-800">
              <span className="px-4 py-2 rounded-xl bg-teal-50 border border-teal-200 text-teal-900">
                Homepage
              </span>
              <span className="text-teal-600">&rarr;</span>
              <span className="px-4 py-2 rounded-xl bg-teal-50 border border-teal-200 text-teal-900">
                Product Category
              </span>
              <span className="text-teal-600">&rarr;</span>
              <span className="px-4 py-2 rounded-xl bg-teal-50 border border-teal-200 text-teal-900">
                Subcategory
              </span>
              <span className="text-teal-600">&rarr;</span>
              <span className="px-4 py-2 rounded-xl bg-teal-700 text-white shadow-sm">
                Product Page
              </span>
            </div>
          </div>

          {/* Site Architecture Diagram Visual Container */}
          <div className="max-w-4xl mx-auto mb-10">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white">
              <EcommerceImageSlot
                src={architectureImgSrc}
                alt="Diagram showing homepage, category, subcategory and product page hierarchy for an online store"
                aspect="aspect-[16/9]"
                fallbackIcon={FolderTree}
                badgeText="Hierarchy & Internal Linking Flow"
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed bg-white p-6 sm:p-8 rounded-2xl border border-gray-200">
            <p>
              Supporting it are breadcrumbs, product-to-category links, related product links and relevant buying guides. We also look for orphaned product pages that nothing links to, and for excessive or irrelevant links. Anchor text should describe the destination naturally.
            </p>
            <p>
              The structure should mirror your actual inventory. Building categories only to target keywords usually produces thin pages that confuse customers.
            </p>
          </div>
        </div>
      </section>

      {/* Section 11: Our E-commerce SEO Process */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <span className="px-3.5 py-1.5 rounded-full bg-teal-100 text-teal-800 text-xs sm:text-sm font-semibold tracking-wide">
              Step-by-Step Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our E-commerce SEO Process
            </h2>
          </div>

          {/* 10 Step Process Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-teal-300 transition-all flex flex-col justify-between"
              >
                <span className="text-xs font-mono font-bold text-teal-700">
                  Step {step.step}
                </span>
                <h3 className="text-sm font-bold text-slate-900 mt-2">
                  {step.title}
                </h3>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-2xl bg-slate-100 border border-slate-200 text-center max-w-2xl mx-auto text-xs sm:text-sm text-slate-600 leading-relaxed">
            Scope and timelines depend on catalog size, platform, site condition and available resources. We don't promise first-page rankings within a fixed number of days.
          </div>
        </div>
      </section>

      {/* Section 12: Measuring Organic Traffic and Online Store Performance */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50/70 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <span className="px-3.5 py-1.5 rounded-full bg-teal-100 text-teal-800 text-xs sm:text-sm font-semibold tracking-wide">
              Commercial Verification
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Measuring Organic Traffic and Online Store Performance
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Traffic is not the same as business results, so we track both. Where access is available, we review organic clicks and impressions, queries and average positions, indexed and excluded pages, organic landing page engagement, product and category page performance, organic-attributed purchases and revenue (where correctly configured), conversion rate and average order value, and technical errors and Core Web Vitals.
            </p>
          </div>

          <div className="max-w-4xl mx-auto text-slate-700 text-sm sm:text-base leading-relaxed bg-white p-6 sm:p-9 rounded-3xl border border-gray-200 shadow-sm text-center">
            <p>
              Reliable GA4 e-commerce tracking and Search Console data are the foundation. Without them, revenue attribution is guesswork, and we would flag that early.
            </p>
          </div>
        </div>
      </section>

      {/* Section 13: Frequently Asked Questions */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-14">
            <span className="px-3.5 py-1.5 rounded-full bg-teal-100 text-teal-800 text-xs sm:text-sm font-semibold tracking-wide">
              Answers & Clarifications
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          {/* Accordion FAQ Items */}
          <div className="space-y-4">
            {faqList.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-gray-200 overflow-hidden bg-slate-50/60 transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white transition-colors"
                  >
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      {idx + 1}. {faq.q}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-teal-700 transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-700 leading-relaxed border-t border-gray-100 bg-white"
                      >
                        <p>{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 14: Contact DigLip7 */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-teal-700 via-slate-600 to-teal-700 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <span className="px-3.5 py-1.5 rounded-full bg-teal-500/20 text-teal-300 text-xs sm:text-sm font-semibold tracking-wide border border-teal-500/30">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Contact DigLip7
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            If you run an online store targeting customers in Qatar, we'd be glad to hear about it. An initial discussion helps identify your platform, current organic search challenges, target audience and business priorities, so any recommendations fit your situation.
          </p>
          <div className="pt-4">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm sm:text-base shadow-xl shadow-teal-500/25 inline-flex items-center gap-2.5 cursor-pointer transition-all"
              >
                <span>Discuss Your E-commerce SEO Requirements</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default QatarEcommerceSEO;
