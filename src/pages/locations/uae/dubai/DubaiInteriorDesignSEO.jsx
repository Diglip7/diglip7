import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../../../../components/SEO";
import commercialFitOutImg from "../../../../images/commercial-interior-fit-out-seo-dubai.webp";
const localSeoMapImg = "/images/local-seo-dubai-map copy.webp";
import {
  Paintbrush,
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
  Layout,
  Layers,
  Settings,
  Ruler,
  Sofa,
  Eye,
  Camera,
  CheckSquare,
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

// Image Component displaying image or container showing ONLY alt text
const InteriorImage = ({
  src,
  alt,
  width = 1200,
  height = 630,
  priority = false,
  aspect = "aspect-[16/10] sm:aspect-[16/9]",
  className = "",
  imgClassName = "w-full h-full object-cover",
}) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [src]);

  return (
    <div
      className={`overflow-hidden rounded-2xl border border-gray-200 bg-slate-100 flex items-center justify-center text-center ${!hasError && src ? aspect : "aspect-[16/9] p-6 sm:p-8"} ${className}`}
    >
      {!hasError && src ? (
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
        <p className="text-sm sm:text-base font-semibold text-gray-700 leading-snug max-w-md p-6 sm:p-8">
          {alt}
        </p>
      )}
    </div>
  );
};

// Breadcrumb Trail configuration
const breadcrumbTrail = [
  { label: "Home", href: "/" },
  { label: "UAE", href: "/uae/seo-services" },
  { label: "Dubai", href: "/uae/dubai/seo-services" },
  { label: "Interior Design SEO Dubai", href: "/uae/dubai/interior-design-seo/" },
];

// Core Interior Design SEO Services
const interiorServices = [
  {
    title: "Interior Design Keyword Research",
    desc: "Keyword research identifies the terms potential clients use, based on service type, location, project intent and customer needs. Typical starting points include searches such as interior designer in Dubai, villa interior design Dubai, apartment interior design Dubai, office interior design Dubai and commercial interior fit-out Dubai. The real keyword plan is built from search data, competition, relevance and the services you genuinely provide, not assumptions alone.",
    icon: Search,
    highlight: "Intent & Project Mapping",
  },
  {
    title: "On-Page SEO for Interior Design Websites",
    desc: "On-page SEO covers the details that tell search engines and visitors what each page is about: page titles and meta descriptions that reflect each page's purpose, descriptive headings, stronger service page content, useful image alt text, and internal links between services, projects, locations and blog content. Pages aligned with one distinct search intent each prevent internal competition.",
    icon: FileText,
    highlight: "Structured Content & Meta",
  },
  {
    title: "Technical SEO for Design Websites",
    desc: "Technical SEO makes sure your site can be crawled, understood and used comfortably. We assess crawling and indexing, XML sitemaps, robots directives, canonical URLs, redirect chains, mobile usability, Core Web Vitals, and image formats, compression and loading behaviour. Interior design sites live and die by their imagery, so the aim is to keep project photography visually rich without making pages slow to load.",
    icon: Settings,
    highlight: "Fast Image Delivery",
  },
  {
    title: "Local SEO for Interior Designers in Dubai",
    desc: "Local SEO helps nearby clients find you. The work includes Google Business Profile optimisation, accurate business details, appropriate primary and secondary categories, relevant services and descriptions, genuine customer reviews with professional responses, and consistent details across relevant directories. Local landing pages are only created where there is a real service-area distinction.",
    icon: MapPin,
    highlight: "Google Maps & 3-Pack",
  },
  {
    title: "Interior Design Portfolio SEO",
    desc: "Your portfolio is often your strongest sales asset, so it should be easy to find and genuinely useful. That means dedicated project pages with original descriptions, clear project types and design styles, accurate accounts of the work completed, compressed images with descriptive file names, alt text that describes what is actually in the picture, and internal links to relevant services. Where verified and client-approved, details such as property type, scope, materials or design objectives add real value.",
    icon: Layout,
    highlight: "Showcase Project Pages",
  },
  {
    title: "Content Marketing for Interior Design Companies",
    desc: "Helpful content answers the questions clients are already asking: interior design planning guides, villa renovation considerations, apartment space-planning advice, office and workplace design, material and finish selection, lighting and storage solutions, commercial fit-out planning, and project timelines and preparation. Good educational content links naturally to your commercial service pages. We avoid repetitive blog posts written only to chase keywords.",
    icon: BookOpen,
    highlight: "Design Guides & Advice",
  },
  {
    title: "Conversion Rate Optimisation",
    desc: "Traffic only matters if it turns into conversations. We look at clear enquiry forms, click-to-call and WhatsApp options where appropriate, visible contact information, strong project galleries, clear service descriptions, mobile-friendly navigation, trust elements supported by real evidence, and calls to action matched to the visitor's stage in the decision. Increasing visits and converting relevant visitors into enquiries are different goals, and both need attention.",
    icon: TrendingUp,
    highlight: "Enquiries & WhatsApp Leads",
  },
];

// SEO Strategies for Different Interior Design Businesses
const businessStrategies = [
  {
    title: "Residential Interior Designers",
    desc: "Villa interiors, apartments, home renovations, space planning and design consultations each attract different searches. Residential clients often want to see similar homes, so project pages and clear service descriptions carry a lot of weight.",
    icon: Sofa,
    points: [
      "Dedicated landing pages for villa luxury interiors, penthouses, and apartments",
      "Community-specific project showcases for Arabian Ranches, Palm Jumeirah, and Dubai Hills",
      "Space-planning, lighting selection, and bespoke joinery service guides",
      "Frictionless design consultation booking and WhatsApp enquiry options",
    ],
  },
  {
    title: "Commercial Interior Design Companies",
    desc: "Office interiors, retail spaces, hospitality projects and restaurants involve different decision-makers and longer evaluation. Pages should speak to business needs such as workplace planning, brand expression and project coordination.",
    icon: Building2,
    points: [
      "B2B service pages tailored for corporate facility heads and procurement teams",
      "Workplace productivity planning, acoustic zoning, and ergonomic layout content",
      "Hospitality and restaurant interior showcases highlighting guest flow and durability",
      "Structured commercial RFP submission pathways with clear scope checklists",
    ],
    image: commercialFitOutImg,
    alt: "Modern open-plan office interior with meeting area and natural lighting",
  },
  {
    title: "Interior Fit-Out Companies",
    desc: "Fit-out firms benefit from service-specific pages, commercial search intent, strong project portfolios and clear descriptions of capabilities. A visitor should quickly understand what you build, the types of projects you take on and how to start a conversation.",
    icon: Ruler,
    points: [
      "Comprehensive scope pages for MEP coordination, civil works, and joinery",
      "Authority approval guides for Dubai Municipality, Civil Defence, and DDA",
      "Turnkey project milestone breakdowns with transparent handover timelines",
      "Documented commercial execution galleries showcasing active fit-out deliverables",
    ],
  },
  {
    title: "Luxury Interior Design Studios",
    desc: "For luxury studios, portfolio quality, bespoke services, original project photography and brand credibility matter most. The goal is to attract high-intent searches without leaning on unsubstantiated claims about the luxury market.",
    icon: Sparkles,
    points: [
      "High-end residential portfolio hubs spotlighting premium craftsmanship and materials",
      "Bespoke Italian joinery, custom stone masonry, and curated art consultancy pages",
      "Editorial architecture and interior press coverage integration",
      "Discreet, high-touch consultation scheduling for private villa owners",
    ],
  },
  {
    title: "Turnkey Interior Design Providers",
    desc: "Turnkey providers need to communicate project scope, the balance of design and execution, coordination and the kinds of projects they accept. The clearer the scope, the better the quality of the enquiries.",
    icon: Layers,
    points: [
      "Single-point-of-contact messaging uniting architectural concept with physical build",
      "Clear scope outlines distinguishing full turnkey delivery from design-only mandates",
      "Transparent costing models, project lifecycle timelines, and material sourcing facts",
      "Dedicated residential and commercial turnkey solution landing pages",
    ],
  },
];

// 7-Step Interior Design SEO Process
const processSteps = [
  {
    step: "01",
    title: "Step 1 — Website and SEO Audit",
    desc: "We assess technical issues, current search visibility, content quality, site structure, local SEO and conversion paths.",
    icon: Search,
  },
  {
    step: "02",
    title: "Step 2 — Competitor and Keyword Research",
    desc: "We analyse relevant search results and competing businesses to understand search intent, page formats, content gaps and realistic opportunities. We do not copy competitors' text, and we do not assume their rankings guarantee similar results for you.",
    icon: Compass,
  },
  {
    step: "03",
    title: "Step 3 — SEO Strategy and Page Mapping",
    desc: "Primary and secondary keywords are mapped to the most suitable pages. We identify which existing pages should be improved and where genuinely new content may help.",
    icon: Layers,
  },
  {
    step: "04",
    title: "Step 4 — On-Page and Technical Improvements",
    desc: "Changes are prioritised by potential impact, implementation effort and business objectives.",
    icon: Settings,
  },
  {
    step: "05",
    title: "Step 5 — Content and Portfolio Optimisation",
    desc: "We improve existing service pages, create useful supporting content and make real project portfolios easier to discover.",
    icon: BookOpen,
  },
  {
    step: "06",
    title: "Step 6 — Local SEO Improvements",
    desc: "We review business profile accuracy, location relevance, customer review practices and the quality of local landing pages.",
    icon: MapPin,
  },
  {
    step: "07",
    title: "Step 7 — Monitoring and Refinement",
    desc: "We use available analytics and search performance data to assess progress, identify issues and refine the strategy. We do not promise a fixed ranking position or a set number of leads within a predetermined period.",
    icon: BarChart3,
  },
];

// Common SEO Challenges for Interior Design Websites
const commonChallenges = [
  "Portfolio images with no useful context",
  "Slow-loading project galleries",
  "Generic service pages",
  "Weak internal linking",
  "Missing or duplicated metadata",
  "Poor mobile experience",
  "Unclear service areas",
  "Low-quality or outdated content",
  "Search intent mismatches",
  "Limited measurement of calls, WhatsApp enquiries, and form submissions",
];

// Performance Measurement Metrics
const measurementMetrics = [
  {
    text: "Organic clicks and impressions",
    icon: TrendingUp,
  },
  {
    text: "Relevant keyword visibility",
    icon: Search,
  },
  {
    text: "Non-branded search traffic",
    icon: Eye,
  },
  {
    text: "Organic landing page performance",
    icon: Layout,
  },
  {
    text: "Qualified enquiry submissions",
    icon: FileText,
  },
  {
    text: "Tracked calls and WhatsApp clicks, where measurement is configured",
    icon: CheckCircle2,
  },
  {
    text: "Conversion rate from organic sessions",
    icon: BarChart3,
  },
  {
    text: "Engagement with important service and project pages",
    icon: Layers,
  },
];

// Why Choose DigLip7
const whyChoosePoints = [
  {
    title: "Aligned with Your Services & Goals",
    desc: "A tailored approach reflecting whether you specialise in luxury villas, commercial fit-outs, or turnkey design-and-build.",
  },
  {
    title: "Technical & On-Page SEO Working Together",
    desc: "Fast-loading visual galleries paired with structured content that search engines can easily read and index.",
  },
  {
    title: "Search-Intent-Led Content Planning",
    desc: "Connecting informational guides with commercial service pages to turn design enthusiasts into genuine clients.",
  },
  {
    title: "Local SEO Best Practices",
    desc: "Accurate Google Business Profile optimization and legitimate local citations across relevant Dubai areas.",
  },
  {
    title: "Portfolio & Image Optimisation",
    desc: "Modern WebP compression, descriptive alt text, and contextual storytelling for your studio's photography.",
  },
  {
    title: "Transparent Reporting & Prioritisation",
    desc: "Clear visibility into what matters most for your bottom line, free from vanity metrics or inflated claims.",
  },
  {
    title: "Continuous Improvement on Evidence",
    desc: "Ongoing refinement guided by Search Console data and real enquiry patterns rather than guesswork.",
  },
];

// Frequently Asked Questions
const faqs = [
  {
    q: "What is Interior Design SEO Dubai?",
    a: "It is the practice of improving how interior design businesses in Dubai appear in organic search results, through better content, site structure, technical health, local visibility and portfolio optimisation.",
  },
  {
    q: "Why do interior designers in Dubai need SEO?",
    a: "Many prospective clients research online before making contact. SEO helps them discover your services and project portfolios through organic search.",
  },
  {
    q: "How much do interior design SEO services in Dubai cost?",
    a: "Pricing depends on website size, competition, technical requirements, content needs, locations and campaign scope. After reviewing your website and goals, we can explain what a suitable scope would involve.",
  },
  {
    q: "How long does SEO take to show results for an interior design company?",
    a: "It varies with the site's starting condition, competition, implementation and content quality. SEO is typically a medium-to-long-term effort, and no ethical agency can guarantee a timeline.",
  },
  {
    q: "Can SEO help an interior fit-out company generate leads?",
    a: "It can support qualified enquiries through relevant service pages, commercial search intent, local visibility and useful project information, although results cannot be guaranteed.",
  },
  {
    q: "Is local SEO important for interior designers in Dubai?",
    a: "Yes, because many clients search with an area in mind. Accurate business information, Google Business Profile optimisation, genuine reviews and useful local content all help.",
  },
  {
    q: "How can interior design portfolio images be optimised for SEO?",
    a: "Use descriptive alt text, suitable file names, compression and modern formats, and place images in a relevant page context. This also supports accessibility.",
  },
  {
    q: "How can I get started with DigLip7's interior design SEO services?",
    a: "The usual first step is a discussion of your business goals, followed by a website review to identify opportunities and agree a practical strategy.",
  },
];

export default function DubaiInteriorDesignSEO() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Complete JSON-LD Schema combining Organization, WebSite, WebPage, Service, and BreadcrumbList (FAQPage omitted per brief)
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
        "@id": "https://diglip7.com/uae/dubai/interior-design-seo/#webpage",
        url: "https://diglip7.com/uae/dubai/interior-design-seo/",
        name: "Interior Design SEO Dubai | DigLip7",
        description:
          "Grow your interior design business online with SEO services in Dubai. Improve search visibility, attract relevant visitors, and generate qualified enquiries.",
        inLanguage: "en-AE",
        isPartOf: { "@id": "https://diglip7.com/#website" },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: "https://diglip7.com/images/interior-design-seo-dubai-diglip7.webp",
        },
        breadcrumb: { "@id": "https://diglip7.com/uae/dubai/interior-design-seo/#breadcrumb" },
      },
      {
        "@type": "Service",
        "@id": "https://diglip7.com/uae/dubai/interior-design-seo/#service",
        name: "Interior Design SEO Dubai",
        serviceType: "Interior Design SEO Services",
        description:
          "SEO services for interior design companies, fit-out contractors and turnkey interior providers in Dubai, including keyword research, on-page SEO, technical SEO, local SEO, portfolio optimisation, content marketing and conversion optimisation.",
        provider: { "@id": "https://diglip7.com/#organization" },
        areaServed: [
          { "@type": "City", name: "Dubai" },
          { "@type": "Country", name: "United Arab Emirates" },
        ],
        audience: {
          "@type": "BusinessAudience",
          audienceType: "Interior design and fit-out businesses",
        },
        url: "https://diglip7.com/uae/dubai/interior-design-seo/",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://diglip7.com/uae/dubai/interior-design-seo/#breadcrumb",
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
            name: "Interior Design SEO Dubai",
            item: "https://diglip7.com/uae/dubai/interior-design-seo/",
          },
        ],
      },
    ],
  };

  return (
    <div className="overflow-x-hidden bg-white w-full text-slate-800 font-sans antialiased">
      {/* Comprehensive SEO Meta Management */}
      <SEO
        title="Interior Design SEO Dubai | DigLip7"
        exactTitle={true}
        description="Grow your interior design business online with SEO services in Dubai. Improve search visibility, attract relevant visitors, and generate qualified enquiries."
        canonical="https://diglip7.com/uae/dubai/interior-design-seo/"
        robots="index, follow, max-image-preview:large"
        ogType="website"
        ogLocale="en_AE"
        ogImage="https://diglip7.com/images/interior-design-seo-dubai-diglip7.webp"
        ogImageAlt="Interior design portfolio on a laptop showing a modern Dubai living room project"
        twitterCard="summary_large_image"
        twitterSite={null}
        twitterCreator={null}
        twitterTitle="Interior Design SEO Dubai | DigLip7"
        twitterDescription="Grow your interior design business online with SEO services in Dubai. Improve search visibility, attract relevant visitors, and generate qualified enquiries."
        twitterImage="https://diglip7.com/images/interior-design-seo-dubai-diglip7.webp"
        twitterImageAlt="Interior design portfolio on a laptop showing a modern Dubai living room project"
        hreflangs={[
          { hreflang: "en-ae", href: "https://diglip7.com/uae/dubai/interior-design-seo/" },
          { hreflang: "x-default", href: "https://diglip7.com/uae/dubai/interior-design-seo/" },
        ]}
        keywords={false}
        schema={jsonLdGraph}
      />

      {/* ================= BREADCRUMB NAVIGATION ================= */}
      <div className="pt-24 sm:pt-28 px-4 sm:px-6 lg:px-8 xl:px-12 bg-gradient-to-r from-amber-50/40 via-slate-50 to-white border-b border-gray-100">
        <nav
          aria-label="Breadcrumb"
          className="max-w-7xl mx-auto flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600 pb-3"
        >
          {breadcrumbTrail.map((crumb, i) => (
            <span key={crumb.label} className="flex items-center gap-1.5 sm:gap-2">
              {i === 0 ? (
                <Home className="w-3.5 h-3.5 text-amber-700" />
              ) : (
                <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              )}
              {i === breadcrumbTrail.length - 1 ? (
                <span className="font-semibold text-slate-900">{crumb.label}</span>
              ) : (
                <Link to={crumb.href} className="hover:text-amber-700 transition-colors">
                  {crumb.label}
                </Link>
              )}
            </span>
          ))}
        </nav>
      </div>

      {/* ================= HERO SECTION (LIGHT LUXURY AESTHETIC) ================= */}
      <header className="relative py-14 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-100 via-slate-100 to-amber-50/40 text-slate-900 overflow-hidden border-b border-gray-200/70">
        <div className="absolute inset-0 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-200 text-amber-900 text-xs sm:text-sm font-semibold tracking-wide">
                <Paintbrush className="w-4 h-4 text-amber-700" />
                <span>Dubai Interior Design & Fit-Out SEO</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight tracking-tight">
                Interior Design SEO Dubai to Grow Your Online Visibility
              </h1>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  A villa owner in Arabian Ranches does not usually start with a phone call. They search, scroll through
                  a few portfolios, open three or four websites and quietly decide who deserves a conversation. A
                  facilities manager planning an office refresh does the same thing, only with a tighter deadline and a
                  stricter checklist. Interior Design SEO Dubai work exists for exactly this moment: making sure that
                  when people look for residential interiors, office design, fit-out services or turnkey solutions,
                  your business is one of the names they find.
                </p>
                <p>
                  A beautiful portfolio is a strong starting point, but it only helps if potential clients can reach it.
                  Search engines need readable text, clear service descriptions and a well-organised site to understand
                  what you do, where you work and who you work for. Retail, hospitality and restaurant clients add
                  further variety, because each searches differently and expects different proof.
                </p>
                <p>
                  DigLip7 provides dedicated{" "}
                  <Link to="/uae/seo-services" className="text-amber-800 font-semibold hover:underline">
                    SEO services
                  </Link>{" "}
                  that build strategies around business goals, website quality, search intent, local visibility and
                  qualified lead generation. We make no promises about rankings, enquiries or revenue. What we can offer
                  is a clear view of where your website stands and a practical plan for improving it.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/80 border border-amber-200/80 shadow-xs space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <ShieldCheck className="w-5 h-5 text-amber-600" />
                  <span>Transparent, Evidence-Based Search Visibility</span>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  If you would like to talk it through, you can{" "}
                  <Link to="/contact" className="text-amber-800 font-bold hover:underline">
                    Discuss Your Interior Design SEO Strategy
                  </Link>{" "}
                  with the DigLip7 team.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link to="/contact">
                  <button className="px-7 sm:px-8 py-3.5 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold text-sm sm:text-base rounded-full shadow-lg shadow-amber-600/20 hover:scale-105 transition-all flex items-center gap-2 cursor-pointer">
                    <span>Discuss Your Interior Design SEO Strategy</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </button>
                </Link>
                <Link to="/uae/dubai/seo-services">
                  <button className="px-7 sm:px-8 py-3.5 bg-white hover:bg-slate-50 text-slate-900 font-bold text-sm sm:text-base rounded-full border border-gray-300 shadow-xs hover:scale-105 transition-all cursor-pointer">
                    All Dubai SEO Services
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Media Column */}
            <div className="lg:col-span-6 w-full flex justify-center">
              <Card3D className="w-full">
                <div className="bg-white p-3 sm:p-4 rounded-3xl border border-amber-200/90 shadow-2xl hover:shadow-amber-200/40 transition-all">
                  <InteriorImage
                    src="/images/interior-design-seo-dubai-diglip7.webp"
                    alt="Interior design portfolio on a laptop showing a modern Dubai living room project"
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

      {/* ================= SECTION 1: WHY INTERIOR DESIGN COMPANIES NEED SEO ================= */}
      <section className="py-16 sm:py-20 bg-slate-50/70 border-b border-gray-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>Commercial Relevance & Client Intent</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
              Why Interior Design Companies in Dubai Need SEO
            </h2>
            <div className="space-y-4 text-gray-700 text-base leading-relaxed">
              <p>
                Dubai's property, renovation, design and fit-out market is busy, and clients have plenty of choice. Many
                of them begin online. They look for an interior designer, compare studios, read about services and check
                project galleries before they ever make contact. Investing in strategic{" "}
                <Link to="/uae/seo-services" className="text-amber-800 font-semibold hover:underline">
                  SEO services in the UAE
                </Link>{" "}
                ensures your studio connects with clients at the exact moment they are looking to hire.
              </p>
              <p>
                That makes organic visibility valuable, but only when it is relevant. A thousand visitors with no
                interest in your services will not help your pipeline, whereas a smaller number of people searching for
                the kind of project you take on can make a real difference. SEO helps you appear for searches connected
                to residential and commercial work, and it works best when your pages say clearly what you offer.
              </p>
              <p>
                Portfolio pages deserve special mention. Stunning photography is not enough on its own, because search
                engines cannot see a room the way a person does. They need descriptive text, clear project details and
                context. Local SEO adds another layer by helping businesses reach people in the areas they actually serve.
              </p>
              <p>
                SEO also works alongside your other channels rather than replacing them. Referrals, social media, paid
                advertising and existing client relationships all continue to matter. Search visibility simply gives
                prospective clients another way to find you, and gives your other marketing a credible destination to
                land on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: SERVICES OFFERED ================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold mb-3">
              <Briefcase className="w-3.5 h-3.5 text-amber-700" />
              <span>Full-Stack Capabilities</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              Our Interior Design SEO Services in Dubai
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              The services below are designed to work together. Which ones you need depends on your website, your
              services and your goals, so not every package will include everything:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interiorServices.map((svc, idx) => {
              const IconComp = svc.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50/80 p-6 sm:p-8 rounded-3xl border border-gray-200 hover:border-amber-300 transition-all shadow-xs flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-amber-600 text-white flex items-center justify-center shrink-0">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
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

          {/* Portfolio & Image Optimization Spotlight Feature */}
          <div className="bg-amber-50/50 p-6 sm:p-10 rounded-3xl border border-amber-200/80 mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-200/70 text-amber-900 text-xs font-semibold">
                  <Camera className="w-3.5 h-3.5 text-amber-800" />
                  <span>Visual Showcase Optimization</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Making Portfolio Photography Readable by Search Engines
                </h3>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  Your portfolio is often your strongest sales asset, so it should be easy to find and genuinely
                  useful. We ensure dedicated project pages carry original descriptions, scope details, material
                  specifications, compressed modern WebP formats and descriptive alt text that search algorithms
                  understand.
                </p>
              </div>
              <div className="lg:col-span-6 w-full flex justify-center">
                <Card3D className="w-full">
                  <div className="bg-white p-3 sm:p-4 rounded-3xl border border-amber-200 shadow-2xl hover:shadow-amber-200/40 transition-all">
                    <InteriorImage
                      src="/images/interior-design-portfolio-seo-dubai.webp"
                      alt="Designer reviewing project photography and layouts for an interior design portfolio"
                      aspect="aspect-auto"
                      imgClassName="w-full h-auto block rounded-2xl object-cover shadow-xs"
                    />
                  </div>
                </Card3D>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: STRATEGIES FOR DIFFERENT BUSINESS TYPES ================= */}
      <section className="py-16 sm:py-20 bg-slate-50/70 border-b border-gray-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold mb-3">
              <Building2 className="w-3.5 h-3.5 text-amber-700" />
              <span>Specialised Business Sectors</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              SEO Strategies for Different Interior Design Businesses
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              A good strategy reflects the specific services a company offers. These are the differences that usually
              matter most:
            </p>
          </div>

          <div className="space-y-8">
            {businessStrategies.map((strategy, idx) => {
              const IconComp = strategy.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm hover:border-amber-300 transition-all"
                >
                  <div className={`grid grid-cols-1 ${strategy.image ? "lg:grid-cols-12 gap-8 items-center" : "gap-4"}`}>
                    <div className={strategy.image ? "lg:col-span-6 space-y-4" : "space-y-4"}>
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-amber-600 text-white flex items-center justify-center shrink-0">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                          {strategy.title}
                        </h3>
                      </div>
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        {strategy.desc}
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                        {strategy.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                            <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {strategy.image && (
                      <div className="lg:col-span-6 w-full flex justify-center">
                        <Card3D className="w-full">
                          <div className="bg-white p-3 sm:p-4 rounded-3xl border border-amber-200 shadow-2xl hover:shadow-amber-200/40 transition-all">
                            <InteriorImage
                              src={strategy.image}
                              alt={strategy.alt}
                              aspect="aspect-auto"
                              imgClassName="w-full h-auto block rounded-2xl object-cover shadow-xs"
                            />
                          </div>
                        </Card3D>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: OUR 7-STEP PROCESS ================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold mb-3">
              <Compass className="w-3.5 h-3.5 text-amber-700" />
              <span>Structured Workflow</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              Our Interior Design SEO Process
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              This is a transparent workflow, adapted to each business:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-90/80 p-7 rounded-3xl border border-gray-200 hover:border-amber-300 transition-all shadow-xs flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-black text-amber-200">
                        {step.step}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold">
                <MapPin className="w-3.5 h-3.5 text-amber-700" />
                <span>Neighbourhood & Community Targeting</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
                Local SEO for Interior Design Businesses Across Dubai
              </h2>
              <div className="space-y-4 text-gray-700 text-base leading-relaxed">
                <p>
                  Dubai is a collection of very different neighbourhoods, and clients often search with a specific area
                  in mind. Location relevance can help businesses serving different parts of the city connect with the
                  right people.
                </p>
                <p>
                  Depending on your real service coverage, relevant areas might include{" "}
                  <strong>
                    Downtown Dubai, Business Bay, Dubai Marina, Jumeirah, Palm Jumeirah, Al Barsha, Arabian Ranches, Dubai
                    Hills Estate,
                  </strong>{" "}
                  and <strong>Jumeirah Village Circle (JVC)</strong>. These are examples of potential service areas, not a
                  suggestion that every business serves all of them.
                </p>
                <p>
                  Dedicated location pages should only be created when a business genuinely serves an area and can offer
                  useful, locally relevant information, such as the types of projects completed there or practical
                  considerations for that community. Near-identical doorway pages created by swapping location names add
                  little value and can harm the quality of your site.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-amber-950 text-xs sm:text-sm">
                <strong>Ethical Advisory:</strong> Explore DigLip7's dedicated{" "}
                <Link to="/uae/dubai/seo-services" className="text-amber-800 font-bold hover:underline">
                  SEO services in Dubai
                </Link>{" "}
                and{" "}
                <Link to="/uae/dubai/local-seo" className="text-amber-800 font-bold hover:underline">
                  Local SEO Dubai
                </Link>{" "}
                solutions to see how verified Google Business Profiles and localized citations support genuine project enquiries.
              </div>
            </div>

            {/* Right Column - New Side Div with 3D Tilt Card */}
            <div className="lg:col-span-6 w-full flex justify-center">
              <Card3D className="w-full">
                <div className="bg-white p-3 sm:p-4 rounded-3xl border border-amber-200/90 shadow-2xl hover:shadow-amber-200/40 transition-all">
                  <InteriorImage
                    src={localSeoMapImg || "/images/local-seo-dubai-map copy.webp"}
                    alt="Dubai interior design studio team reviewing local SEO analytics and Google Maps search visibility"
                    aspect="aspect-auto"
                    imgClassName="w-full h-auto block rounded-2xl object-cover shadow-xs"
                  />
                </div>
              </Card3D>
            </div>
          </div>

          {/* Location Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-2">
            {[
              "Downtown Dubai",
              "Business Bay",
              "Dubai Marina",
              "Palm Jumeirah",
              "Jumeirah",
              "Arabian Ranches",
              "Dubai Hills Estate",
              "Al Barsha",
              "JVC (Jumeirah Village)",
              "DIFC & City Walk",
            ].map((loc, i) => (
              <div
                key={i}
                className="p-3.5 rounded-2xl bg-white border border-gray-200 text-center text-xs sm:text-sm font-semibold text-slate-800 flex items-center justify-center gap-1.5 shadow-xs"
              >
                <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>{loc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 6: COMMON CHALLENGES ================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-semibold mb-3">
              <AlertTriangle className="w-3.5 h-3.5 text-red-600" />
              <span>Industry Bottlenecks</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              Common SEO Challenges for Interior Design Websites
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              An audit often highlights problems such as:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {commonChallenges.map((prob, idx) => (
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

          <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200 text-sm sm:text-base text-gray-700 leading-relaxed">
            Not every website has the same problems, which is why an audit comes first. It helps prioritise the issues
            that actually affect your site. A studio with excellent project pages but slow galleries needs a very
            different plan from one with fast pages and almost no descriptive content.
          </div>
        </div>
      </section>

      {/* ================= SECTION 7: HOW WE MEASURE PERFORMANCE ================= */}
      <section className="py-16 sm:py-20 bg-slate-50/70 border-b border-gray-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold mb-3">
              <BarChart3 className="w-3.5 h-3.5 text-amber-700" />
              <span>Evidence-Based Analytics</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              How We Measure Interior Design SEO Performance
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Meaningful measurement connects SEO activity to business goals. We look at:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {measurementMetrics.map((metric, idx) => {
              const IconComp = metric.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-gray-200/90 hover:border-amber-300 transition-all shadow-xs flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <p className="text-sm sm:text-base font-bold text-gray-900 leading-snug">
                      {metric.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-6 rounded-2xl bg-white border border-gray-200 text-sm sm:text-base text-gray-700 leading-relaxed shadow-xs">
            <p>
              Rankings fluctuate, and traffic growth alone does not prove business success. Reports should link SEO
              activity to your goals and the data available.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SECTION 8: WHY CHOOSE DIGLIP7 ================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
              <span>Transparent Standards</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              Why Choose DigLip7 for Interior Design SEO Dubai?
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              The value DigLip7 offers lies in a practical, evidence-based approach rather than bold claims. That means:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoosePoints.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-gray-200 hover:border-amber-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-amber-600 text-white flex items-center justify-center font-bold text-xs mb-3.5">
                    {idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200 text-sm sm:text-base text-gray-700 leading-relaxed">
            We would rather start with a conversation about your business and your website than hand you a generic
            proposal. Discover how our tailored{" "}
            <Link to="/uae/seo-services" className="text-amber-800 font-bold hover:underline">
              SEO services
            </Link>{" "}
            can help your studio gain qualified traction across key Dubai communities.
          </div>
        </div>
      </section>

      {/* ================= SECTION 9: FREQUENTLY ASKED QUESTIONS ================= */}
      <section className="py-16 sm:py-24 bg-slate-50/70 border-b border-gray-200/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-amber-700" />
              <span>Studio & Contractor FAQs</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Frequently Asked Questions About Interior Design SEO Dubai
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

      {/* ================= SECTION 10: GET STARTED CTA ================= */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-amber-50/60 via-slate-100 to-amber-50/40 text-slate-900 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-block text-xs font-bold tracking-wider uppercase text-amber-900 bg-amber-100 border border-amber-200 px-3.5 py-1 rounded-full">
            Ready to Connect with Qualified Design Clients?
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-gray-900">
            Grow Your Interior Design Business with a Practical SEO Strategy
          </h2>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            SEO for an interior design business is rarely about one big fix. Technical health, relevant service pages,
            well-presented portfolios, local visibility and useful content each play a part, and they work best when
            planned together. The result is a website that is easier to find, easier to trust and easier to enquire
            through.
          </p>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            If you are considering Interior Design SEO Dubai support, DigLip7 can review your website and discuss
            realistic priorities with you, without pressure or inflated promises.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link to="/contact">
              <button className="px-8 sm:px-10 py-4 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-extrabold text-sm sm:text-base rounded-full shadow-xl hover:scale-105 transition-all flex items-center gap-2 cursor-pointer">
                <span>Discuss Your Interior Design SEO Strategy</span>
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
