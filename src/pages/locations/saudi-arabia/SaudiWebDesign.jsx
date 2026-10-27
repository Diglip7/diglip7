import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../../../components/SEO";
import {
  Monitor,
  Smartphone,
  Tablet,
  Layout,
  Globe,
  Sparkles,
  ArrowRight,
  CheckCircle,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  Home,
  Target,
  BarChart3,
  Building2,
  ShoppingBag,
  Briefcase,
  GraduationCap,
  Rocket,
  Layers,
  Code2,
  FileCheck,
  Zap,
  ShieldCheck,
  Search,
  Languages,
  AlertTriangle,
  HelpCircle,
  Clock,
  Eye,
  RefreshCw,
  PhoneCall,
  Laptop,
  Compass,
  Palette,
  Check,
  ExternalLink,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

// Image Paths - Set to empty string so Image Section containers are shown without displaying actual image files
const heroImgSrc = "";
const customDesignImg = "";
const responsiveImg = "";
const corporateImg = "";
const ecommerceImg = "";
const uiuxImg = "";
const redesignImg = "";
const bilingualImg = "";
const performanceImg = "";

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
    const rotateXValue = (y - centerY) / 16;
    const rotateYValue = (centerX - x) / 16;

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
const FloatingElement = ({ children, delay = 0, duration = 3 }) => (
  <motion.div
    animate={{
      y: [0, -10, 0],
    }}
    transition={{
      duration: duration,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut",
    }}
  >
    {children}
  </motion.div>
);

// Fallback image container with multi-source fallback
const WebImageSlot = ({
  src = "",
  alt = "",
  width = 800,
  height = 600,
  aspect = "aspect-[4/3]",
  className = "",
  priority = false,
  fallbackIcon = Monitor,
  badgeText = "",
}) => {
  const [hasError, setHasError] = useState(false);
  const Icon = fallbackIcon;

  return (
    <div
      className={`relative w-full rounded-2xl overflow-hidden bg-gradient-to-br from-purple-50/50 via-white to-pink-50/30 border border-purple-200/80 shadow-xs flex items-center justify-center ${aspect} ${className}`}
    >
      {src && !hasError ? (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          onError={() => setHasError(true)}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      ) : (
        <div className="p-6 sm:p-8 text-center text-sm font-medium text-slate-800 select-none flex flex-col items-center justify-center gap-3 w-full h-full bg-gradient-to-b from-white/95 to-purple-50/60 border-2 border-dashed border-purple-300/80 rounded-2xl">
          <div className="w-14 h-14 rounded-2xl bg-purple-100/90 text-purple-700 flex items-center justify-center shadow-xs">
            <Icon className="w-7 h-7" />
          </div>
          <div className="space-y-1.5 max-w-sm">
            <span className="block leading-snug text-xs sm:text-sm font-bold text-slate-800">
              {alt}
            </span>
            {badgeText && (
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800 text-[11px] font-semibold">
                {badgeText}
              </span>
            )}
            <span className="text-[11px] text-slate-500 block pt-0.5">
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
  { label: "Web Design", href: "/saudi-arabia/web-design/" },
];

const whyNeedPoints = [
  {
    title: "Present a consistent, credible online presence",
    desc: "Build instant trust with modern visual aesthetics, clear identity, and professional layout standards.",
    icon: ShieldCheck,
  },
  {
    title: "Explain your services, products, and business details clearly",
    desc: "Remove ambiguity so prospective clients immediately understand what you do and whom you serve.",
    icon: Layout,
  },
  {
    title: "Make contacting you, booking, or buying simple",
    desc: "Frictionless conversion pathways, accessible forms, and click-to-contact routing that capture intent.",
    icon: Target,
  },
  {
    title: "Work well on mobile devices",
    desc: "Engineered responsive experiences that load fast and navigate effortlessly on phones and tablets.",
    icon: Smartphone,
  },
  {
    title: "Support discoverability with an SEO-friendly structure",
    desc: "Built from the ground up with clean semantic HTML, crawlable hierarchies, and optimized core vitals.",
    icon: Search,
  },
  {
    title: "Update content easily as you grow",
    desc: "Scalable content architecture and CMS workflows that empower your team to adapt without friction.",
    icon: RefreshCw,
  },
];

const servicesList = [
  {
    id: "custom-design",
    title: "Custom Website Design",
    desc: "A custom design reflects your identity, services, and audience instead of forcing you into a generic template. We focus on layouts, brand consistency, visual hierarchy, and navigation, and build around what customers need to find rather than design trends.",
    img: customDesignImg,
    icon: Palette,
    tag: "Brand Identity & Architecture",
  },
  {
    id: "responsive-design",
    title: "Responsive and Mobile-Friendly Web Design",
    desc: "Responsive layouts adapt to phones, tablets, and desktops, with readable text, easy navigation, usable forms, sensible image sizes, and touch-friendly buttons. Many customers compare services and make contact from a smartphone, so a clumsy mobile experience costs enquiries.",
    img: responsiveImg,
    icon: Smartphone,
    tag: "Cross-Device Optimization",
  },
  {
    id: "corporate-design",
    title: "Business and Corporate Website Design",
    desc: "Corporate sites organize company details, service pages, contact routes, and useful resources. A clear page hierarchy helps visitors understand what you offer within moments.",
    img: corporateImg,
    icon: Building2,
    tag: "Corporate & Enterprise",
  },
  {
    id: "ecommerce-design",
    title: "E-commerce Website Design",
    desc: "Online stores need clear categories, informative product pages, search and filtering, an easy cart and checkout, and clear delivery and return information. Payment and other integrations depend on the platform and agreed scope.",
    img: ecommerceImg,
    icon: ShoppingBag,
    tag: "Online Stores & Catalogs",
  },
  {
    id: "uiux-design",
    title: "UI/UX Design and Landing Pages",
    desc: "UI and UX decisions decide whether people find what they came for. We also design landing pages around a specific service, campaign, or audience, with one clear call to action.",
    img: uiuxImg,
    icon: Layers,
    tag: "Campaigns & Conversions",
  },
  {
    id: "redesign-maintenance",
    title: "Website Redesign and Maintenance",
    desc: "A redesign may suit you when the layout feels dated, mobile use is poor, navigation confuses people, or your business has changed. Maintenance can include updates, backups, compatibility checks, security-related tasks, and content changes, as agreed.",
    img: redesignImg,
    icon: RefreshCw,
    tag: "Modernization & Longevity",
  },
];

const industrySolutions = [
  {
    title: "Website Design for Corporate Businesses",
    tagline: "Corporate Businesses",
    desc: "Company profiles, service pages, clear contact routes, and accurate business information, plus case studies when they're real and verified.",
    icon: Building2,
    badge: "Enterprise & Governance",
  },
  {
    title: "Website Design for E-commerce Businesses",
    tagline: "E-commerce Businesses",
    desc: "Logical categories, complete product information, a simple checkout, and accurate delivery and return details.",
    icon: ShoppingBag,
    badge: "Digital Commerce",
  },
  {
    title: "Website Design for Professional Service Providers",
    tagline: "Professional Service Providers",
    desc: "Consultants, agencies, and service firms win trust by explaining what they do and how they work, with clear service pages and easy enquiry options.",
    icon: Briefcase,
    badge: "Consultancies & Agencies",
  },
  {
    title: "Website Design for Healthcare and Education",
    tagline: "Healthcare and Education",
    desc: "Clear service or course information, sensible appointment or enquiry paths, accessible design, and responsible handling of personal data, without unsupported medical or educational claims.",
    icon: GraduationCap,
    badge: "Institutional Trust",
  },
  {
    title: "Website Design for Startups and Small Businesses",
    tagline: "Startups and Small Businesses",
    desc: "A well-planned first website establishes your brand without doing everything at once. We build what you need now and leave room to grow, rather than adding features you won't use.",
    icon: Rocket,
    badge: "Agile & Scalable",
  },
];

const processSteps = [
  {
    step: "Step 1",
    title: "Discovery and Requirement Planning",
    desc: "We learn about your business, audience, objectives, required pages and functionality, content needs, and constraints.",
    icon: Target,
  },
  {
    step: "Step 2",
    title: "Website Structure and Content Planning",
    desc: "We map the site structure, navigation, and page hierarchy, and plan how visitors move between key pages.",
    icon: Layout,
  },
  {
    step: "Step 3",
    title: "Wireframes and Visual Design",
    desc: "We sketch layouts, then develop a visual direction that balances appearance, readability, usability, and clear hierarchy.",
    icon: Palette,
  },
  {
    step: "Step 4",
    title: "Website Development and Integration",
    desc: "We build the agreed site and add what it needs, such as a content management system, forms, analytics, e-commerce features, or integrations.",
    icon: Code2,
  },
  {
    step: "Step 5",
    title: "Testing and Optimization",
    desc: "We check responsiveness, navigation, links, forms, performance, basic technical SEO, and browser and device compatibility, addressing security and accessibility according to scope and applicable standards.",
    icon: FileCheck,
  },
  {
    step: "Step 6",
    title: "Launch and Ongoing Support",
    desc: "We prepare for launch, check redirects and indexing where relevant, and set up any agreed maintenance or support.",
    icon: Rocket,
  },
];

const commonProblems = [
  "Outdated or inconsistent design",
  "Confusing navigation",
  "Poor mobile usability",
  "Slow pages or oversized images",
  "Unclear service descriptions",
  "Weak calls to action",
  "Unreliable enquiry forms",
  "Incomplete product pages",
  "Broken links or wrong redirects",
  "Hard-to-manage content",
  "Poorly structured titles and headings",
  "Limited analytics or conversion tracking",
];

const evaluationMetrics = [
  "Mobile responsiveness and usability",
  "Navigation and page structure",
  "Loading performance and relevant Core Web Vitals",
  "Accessibility",
  "Content clarity and completeness",
  "Form and checkout functionality",
  "Organic search visibility, where relevant",
  "Enquiries, bookings, or purchases, where tracking exists",
  "Ease of maintenance",
];

const whyDiglip7Points = [
  {
    title: "Planning around your business objectives",
    desc: "Every layout, form, and page is designed with your commercial goals at the core.",
  },
  {
    title: "User-focused layouts and clear navigation",
    desc: "Intuitive paths that guide visitors to key answers and clear next steps.",
  },
  {
    title: "Responsive design across relevant devices",
    desc: "Seamless, touch-friendly, and sharp visual performance across phones, tablets, and desktops.",
  },
  {
    title: "Functionality that suits your business model",
    desc: "Custom-fitted integrations, lead forms, or e-commerce features built for your exact workflow.",
  },
  {
    title: "An SEO-friendly structure",
    desc: "Built-in technical foundations, clean semantic markup, fast loading, and crawlable architecture.",
  },
  {
    title: "Careful content organization and calls to action",
    desc: "Strategically placed CTAs and content hierarchy that encourage meaningful enquiries.",
  },
  {
    title: "Testing before launch",
    desc: "Thorough quality checks across cross-browser compatibility, responsiveness, and performance.",
  },
  {
    title: "Transparent scope and communication",
    desc: "Clear deliverables, realistic schedules, and direct communication without technical jargon.",
  },
  {
    title: "Support arrangements where agreed",
    desc: "Ongoing maintenance, backups, security updates, and enhancements to keep your site healthy.",
  },
];

const faqs = [
  {
    q: "What is included in web design services in Saudi Arabia?",
    a: "It depends on the agreed scope, but typically planning, site structure, visual design, responsive layouts, development, testing, and launch support. Hosting, SEO, and maintenance are separate services unless included in the agreement.",
  },
  {
    q: "How much does website design cost in Saudi Arabia?",
    a: "It varies. Cost depends on the number of pages, custom design needs, functionality such as e-commerce or integrations, content requirements, and ongoing support. We can discuss a suitable approach after understanding your requirements.",
  },
  {
    q: "How long does it take to design and build a website?",
    a: "Timelines depend on project size, functionality, content readiness, and feedback speed. We can suggest a realistic schedule once the scope is clear.",
  },
  {
    q: "Does my website need to be in Arabic and English?",
    a: "Not necessarily. It depends on your target audience, the services you offer, and the support you can provide in each language.",
  },
  {
    q: "Will my website work well on mobile devices?",
    a: "Responsive, mobile-friendly design is a core part of our approach, and we test layouts across relevant devices and browsers before launch.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Yes. We can review your current site to identify what's working and what isn't, then agree the scope of a redesign or targeted improvements.",
  },
  {
    q: "Is SEO included in web design?",
    a: "We build SEO-friendly foundations such as clear structure, page titles, and headings. Ongoing SEO is a separate service, and rankings can't be guaranteed.",
  },
  {
    q: "Can you build an e-commerce website?",
    a: "Yes. E-commerce functionality depends on the platform, integrations, and agreed scope, and we can discuss what fits your business.",
  },
];

// ---------------------------------------------------------------------------
// Main Component
// ---------------------------------------------------------------------------

const SaudiWebDesign = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [faqSearch, setFaqSearch] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState(0);
  const [checkedProblems, setCheckedProblems] = useState({});

  const toggleProblem = (idx) => {
    setCheckedProblems((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.q.toLowerCase().includes(faqSearch.toLowerCase()) ||
      faq.a.toLowerCase().includes(faqSearch.toLowerCase())
  );

  const pageUrl = "https://diglip7.com/saudi-arabia/web-design/";

  // Structured Data (JSON-LD) Schemas strictly adhering to prompt and verified specifications
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://diglip7.com/#organization",
      name: "DigLip7",
      url: "https://diglip7.com/",
      logo: "https://diglip7.com/images/Logo.jpg",
      description:
        "DigLip7 is a digital services provider offering web design, SEO, paid advertising, and related online marketing services.",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "Admin@diglip7.com",
        telephone: "+91-9650608788",
        availableLanguage: ["English"],
      },
      sameAs: [
        "https://www.linkedin.com/company/diglip7",
        "https://www.facebook.com/diglip7",
        "https://www.instagram.com/diglip7",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Web Design Saudi Arabia | Website Design & Development — DigLip7",
      description:
        "Explore web design in Saudi Arabia with DigLip7. Plan responsive, user-friendly, SEO-friendly websites for corporate, e-commerce, and service businesses.",
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
      name: "Web Design Saudi Arabia",
      serviceType: "Website design and development",
      description:
        "Planning, design, development, testing, and launch support for responsive, user-friendly, SEO-friendly websites for businesses in Saudi Arabia, including corporate websites, e-commerce stores, landing pages, and redesigns.",
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
          "Business owners, startups, e-commerce companies, corporate organizations, and marketing managers",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Web design services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom website design",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Responsive and mobile-friendly web design",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Business and corporate website design",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "E-commerce website design",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "UI/UX design and landing pages",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Website redesign and maintenance",
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
          name: "Web Design",
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
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://diglip7.com/#website",
      url: "https://diglip7.com/",
      name: "DigLip7",
      publisher: {
        "@id": "https://diglip7.com/#organization",
      },
    },
  ];

  return (
    <div className="w-full bg-white font-sans text-slate-800 antialiased selection:bg-purple-600 selection:text-white">
      <SEO
        title="Web Design Saudi Arabia | Website Design & Development — DigLip7"
        description="Explore web design in Saudi Arabia with DigLip7. Plan responsive, user-friendly, SEO-friendly websites for corporate, e-commerce, and service businesses."
        canonical={pageUrl}
        ogType="website"
        ogTitle="Web Design Saudi Arabia | Website Design & Development — DigLip7"
        ogDescription="Plan responsive, user-friendly, SEO-friendly websites for businesses in Saudi Arabia with DigLip7."
        ogLocale="en_SA"
        ogImage="https://diglip7.com/images/webdevelopment-banner.jpeg"
        ogImageAlt="Designer reviewing a responsive website layout on laptop and mobile screens"
        twitterCard="summary_large_image"
        twitterTitle="Web Design Saudi Arabia | Website Design & Development — DigLip7"
        twitterDescription="Plan responsive, user-friendly, SEO-friendly websites for businesses in Saudi Arabia with DigLip7."
        twitterImage="https://diglip7.com/images/webdevelopment-banner.jpeg"
        twitterImageAlt="Designer reviewing a responsive website layout on laptop and mobile screens"
        robots="index, follow, max-image-preview:large"
        hreflangs={[
          { hreflang: "en-sa", href: pageUrl },
          { hreflang: "x-default", href: pageUrl },
        ]}
        schema={structuredData}
        exactTitle={true}
      />

      {/* Breadcrumb Navigation - Light Theme */}
      <div className="pt-24 sm:pt-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-100 via-pink-100 to-white text-gray-700">
        <nav
          aria-label="Breadcrumb"
          className="max-w-7xl mx-auto flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-gray-600 pb-3"
        >
          {breadcrumbTrail.map((crumb, i) => (
            <span key={crumb.label} className="flex items-center gap-1.5">
              {i === 0 ? (
                <Home className="w-3.5 h-3.5 text-purple-700" />
              ) : (
                <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              )}
              {i === breadcrumbTrail.length - 1 ? (
                <span className="font-semibold text-purple-950">{crumb.label}</span>
              ) : (
                <Link to={crumb.href} className="hover:text-purple-700 transition-colors">
                  {crumb.label}
                </Link>
              )}
            </span>
          ))}
        </nav>
      </div>

      {/* Hero Section - Light Theme */}
      <header className="relative pt-6 sm:pt-8 pb-16 lg:pb-24 bg-gradient-to-r from-purple-100 via-pink-100 to-white text-gray-900 overflow-hidden min-h-[85vh] flex flex-col justify-center">
        {/* Ambient Glow & Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-pink-300/25 rounded-full blur-3xl" />
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-purple-400/30 rounded-full"
              style={{
                left: `${(i * 19) % 100}%`,
                top: `${(i * 23) % 100}%`,
              }}
              animate={{
                y: [0, -25, 0],
                opacity: [0.2, 0.7, 0.2],
              }}
              transition={{
                duration: 4 + (i % 4),
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Core Value Proposition */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-800 text-purple-100 text-xs sm:text-sm font-semibold tracking-wide shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-pink-300" />
                <span>Modern Web Architecture &bull; Saudi Arabia</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight sm:leading-tight text-gray-950"
              >
                Web Design Saudi Arabia{" "}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-indigo-600 to-pink-600">
                  for Modern Businesses
                </span>
              </motion.h1>

              {/* Direct Q&A Context Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="p-5 sm:p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-purple-200/80 shadow-md text-left space-y-3"
              >
                <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                  For most businesses, the website is the first conversation. Before anyone calls or orders, they've looked you up, skimmed a few pages, and decided whether you seem like a safe choice. Good Web Design Saudi Arabia businesses can rely on makes that conversation easy: what you offer, who it's for, and what to do next.
                </p>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed border-t border-purple-100 pt-3">
                  A business website has to explain your services, work on every device, and guide visitors toward the right action. Those needs differ between a corporate site, an online store, a service business, and a startup.
                </p>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                  <span className="font-semibold text-purple-900">DigLip7</span> is a digital services provider that can help you plan and build a website suited to your brand, audience, functionality needs, and commercial goals. We see design as more than looks: navigation, mobile usability, page structure, loading speed, accessible content, and clear calls to action all shape the experience.
                </p>
              </motion.div>

              {/* Hero Call to Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 pt-2"
              >
                <Link to="/contact" className="inline-block">
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto px-7 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-purple-500/25 flex items-center justify-center gap-2 cursor-pointer transition-all"
                  >
                    <span>Request a Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>

                <a
                  href="https://wa.me/919650608788?text=Hello%20DigLip7%20Team%2C%20I%20would%20like%20to%20discuss%20Web%20Design%20for%20my%20business%20in%20Saudi%20Arabia."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white hover:bg-gray-50 border-2 border-purple-600 text-purple-700 font-semibold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-sm cursor-pointer transition-all"
                  >
                    <FaWhatsapp className="w-5 h-5 text-emerald-600" />
                    <span>WhatsApp Consultation</span>
                  </motion.button>
                </a>
              </motion.div>

              {/* Consultation Teaser */}
              <div className="text-xs text-gray-500 pt-1">
                Want to talk through what your website needs to do?{" "}
                <Link to="/contact" className="text-purple-700 underline font-semibold hover:text-purple-900 transition-colors">
                  Request a consultation
                </Link>
                .
              </div>
            </div>

            {/* Right Column: Clean Simple Image Section Div */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="w-full max-w-lg">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white">
                  <WebImageSlot
                    src={heroImgSrc}
                    alt="Designer reviewing a responsive website layout on laptop and mobile screens"
                    aspect="aspect-[4/3]"
                    priority={true}
                    fallbackIcon={Monitor}
                    badgeText="Hero Image Section"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Section 1: Why Businesses in Saudi Arabia Need Professional Web Design */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <span className="px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-800 text-xs sm:text-sm font-semibold tracking-wide">
              Strategic Foundation
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Businesses in Saudi Arabia Need Professional Web Design
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Your website often works while you're not. It answers questions, builds or loses trust, and either makes contact easy or makes people give up. Professional design helps you:
            </p>
          </div>

          {/* 6 Key Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {whyNeedPoints.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  className="p-6 sm:p-7 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-purple-300 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 text-purple-700 flex items-center justify-center shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center text-xs font-semibold text-purple-700">
                    <Check className="w-4 h-4 mr-1 text-emerald-500" />
                    <span>Included in DigLip7 Scope</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Hypothetical Example Callout Box (Light Theme) */}
          <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-purple-50 via-indigo-50/50 to-pink-50 text-slate-800 border border-purple-200 shadow-sm relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
              <div className="lg:col-span-8 space-y-3">
                <div className="flex items-center gap-2 text-purple-700 text-xs font-bold uppercase tracking-wider">
                  <Compass className="w-4 h-4" />
                  <span>Practical Illustration &bull; User Journey Impact</span>
                </div>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  <span className="font-semibold text-slate-900">Here's a hypothetical example, not a client project.</span> A Riyadh-based consulting firm's website hides its services three clicks deep and its phone number in the footer. Visitors can't tell what the firm does, so they leave. With clearer navigation, a page for each service, and a visible enquiry form, the same firm becomes much easier to contact.
                </p>
              </div>
              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <Link to="/contact">
                  <button className="px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer">
                    <span>Evaluate Your User Journey</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Pragmatic Reality Check */}
          <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-amber-900 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm leading-relaxed">
              <span className="font-bold text-amber-950">Pragmatic Principle:</span> Design alone doesn't guarantee rankings, sales, or conversions. Those also depend on content, technical implementation, marketing, pricing, competition, and demand.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Web Design Services in Saudi Arabia Offered by DigLip7 */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <span className="px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-800 text-xs sm:text-sm font-semibold tracking-wide">
              Full-Spectrum Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Web Design Services in Saudi Arabia Offered by DigLip7
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Our web design services in Saudi Arabia are connected parts of one project. Design shapes how the site looks and works, development builds it, SEO helps people find it, hosting keeps it online, and maintenance keeps it healthy. The final scope depends on your requirements and the agreed specification.
            </p>
          </div>

          {/* 6 Core Services Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="rounded-3xl bg-white border border-gray-200 p-6 sm:p-7 hover:border-purple-300 transition-all hover:shadow-lg group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-purple-600 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-50 text-purple-700">
                        {service.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: Website Design Solutions for Different Industries */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <span className="px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-800 text-xs sm:text-sm font-semibold tracking-wide">
              Industry Tailoring
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Website Design Solutions for Different Industries
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              A website's structure should follow the business behind it.
            </p>
          </div>

          {/* Interactive Industry Selector & Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Industry Nav Tabs */}
            <div className="lg:col-span-5 space-y-2">
              {industrySolutions.map((ind, idx) => {
                const Icon = ind.icon;
                const isActive = selectedIndustry === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedIndustry(idx)}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${isActive
                      ? "bg-purple-600 border-purple-600 text-white shadow-lg shadow-purple-600/20 translate-x-1"
                      : "bg-white border-gray-200 text-slate-800 hover:bg-gray-50"
                      }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center ${isActive ? "bg-white/20 text-white" : "bg-purple-50 text-purple-700"
                          }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block text-sm sm:text-base font-bold">
                          {ind.tagline}
                        </span>
                        <span
                          className={`text-xs ${isActive ? "text-purple-100" : "text-slate-500"
                            }`}
                        >
                          {ind.badge}
                        </span>
                      </div>
                    </div>
                    <ChevronRight
                      className={`w-5 h-5 transition-transform ${isActive ? "text-white translate-x-1" : "text-slate-400"
                        }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Selected Industry Card Display */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedIndustry}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-3xl bg-white border border-gray-200 p-7 sm:p-9 shadow-md space-y-6"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-gray-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-3 py-1 rounded-full">
                      {industrySolutions[selectedIndustry].badge}
                    </span>
                    <span className="text-xs text-slate-500">
                      Tailored Architecture &bull; Saudi Market
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    {industrySolutions[selectedIndustry].title}
                  </h3>

                  <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 text-slate-700 leading-relaxed text-base sm:text-lg">
                    {industrySolutions[selectedIndustry].desc}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-100 space-y-1">
                      <span className="text-xs font-bold text-purple-900 block">
                        Commercial Intent
                      </span>
                      <span className="text-xs text-purple-700 leading-normal block">
                        Aligned with decision-maker expectations and industry procurement norms.
                      </span>
                    </div>
                    <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-100 space-y-1">
                      <span className="text-xs font-bold text-emerald-900 block">
                        Compliance & Transparency
                      </span>
                      <span className="text-xs text-emerald-700 leading-normal block">
                        Built for truthful claims, clear policies, and verified company credentials.
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <Link to="/contact">
                      <button className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer">
                        <span>Discuss This Industry Scope</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Our Website Design and Development Process */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-800 text-xs sm:text-sm font-semibold tracking-wide">
              Structured Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Website Design and Development Process
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Here's the workflow we typically follow.
            </p>
          </div>

          {/* 6 Sequential Steps Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl p-6 sm:p-7 bg-white border border-gray-200 relative flex flex-col justify-between hover:shadow-lg hover:border-purple-300 transition-all"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black uppercase tracking-widest text-purple-700 bg-purple-100 px-3 py-1 rounded-full">
                        {step.step}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 text-purple-700 flex items-center justify-center shadow-xs">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                      {step.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-gray-100 text-xs text-slate-500 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Transparent Milestone Approval</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Process Workflow Image Container (without actual image file, as requested!) */}
          <div className="mt-12 max-w-4xl mx-auto">
            <WebImageSlot
              src=""
              alt="Six-step website design and development process from discovery to launch"
              aspect="aspect-[21/9]"
              className="rounded-2xl shadow-sm border border-gray-200"
              badgeText="Process Workflow Container"
              fallbackIcon={Code2}
            />
          </div>
        </div>
      </section>

      {/* Section 5: Arabic, English, and Local Website Considerations in Saudi Arabia (Light Theme) */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-purple-50/80 via-pink-50/40 to-white text-slate-900 border-y border-purple-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-800 border border-purple-200 text-xs sm:text-sm font-semibold tracking-wide">
                Cultural & Regional Intelligence
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-slate-900">
                Arabic, English, and Local Website Considerations in Saudi Arabia
              </h2>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  Language shapes how people experience your site. Some businesses serve Arabic-speaking customers, some work mainly in English, and some need both. The right choice depends on your actual audience and services, not assumptions about every Saudi customer.
                </p>
                <p>
                  A bilingual site needs correct right-to-left layout for Arabic, readable typography, natural navigation, accurate translations, and consistency between versions.
                </p>
                <p>
                  Riyadh, Jeddah, and Dammam are examples of markets you might serve, but only if you genuinely cover them. Whatever your reach, show clear contact details, suitable local contact options, and accurate business information on a mobile-friendly site.
                </p>
                <p>
                  For organic search, useful content, descriptive titles, logical internal links, and properly implemented language alternatives help. Adding Arabic text doesn't automatically improve rankings, and you don't need a page for every city.
                </p>
              </div>

              {/* City Targets */}
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                <span className="px-3 py-1.5 rounded-lg bg-white border border-purple-200 shadow-xs">
                  Riyadh Corporate & Tech
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-white border border-purple-200 shadow-xs">
                  Jeddah Commercial & Trade
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-white border border-purple-200 shadow-xs">
                  Dammam & Eastern Province Industrial
                </span>
              </div>
            </div>

            {/* Right Column: Clean Simple Image Section Div */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="w-full max-w-lg">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white">
                  <WebImageSlot
                    src={bilingualImg}
                    alt="Arabic and English versions of a website homepage shown side by side"
                    aspect="aspect-[4/3]"

                    badgeText="Arabic & English Consistency"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Common Website Design Problems We Help Businesses Address */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <span className="px-3.5 py-1.5 rounded-full bg-rose-100 text-rose-800 text-xs sm:text-sm font-semibold tracking-wide">
              Site Health & Diagnosis
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Common Website Design Problems We Help Businesses Address
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              A website review may uncover issues such as:
            </p>
          </div>

          {/* Interactive Diagnostic Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {commonProblems.map((prob, idx) => {
              const isChecked = !!checkedProblems[idx];
              return (
                <div
                  key={idx}
                  onClick={() => toggleProblem(idx)}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between select-none ${isChecked
                    ? "bg-rose-50/80 border-rose-300 text-rose-950 shadow-xs"
                    : "bg-gray-50 border-gray-200 text-slate-700 hover:bg-white hover:border-gray-300"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-6 h-6 rounded-md border flex items-center justify-center transition-colors ${isChecked
                        ? "bg-rose-600 border-rose-600 text-white"
                        : "bg-white border-gray-300 text-transparent"
                        }`}
                    >
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm font-semibold">{prob}</span>
                  </div>
                  {isChecked && (
                    <span className="text-[11px] font-bold text-rose-600 uppercase">
                      Identified
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          <div className="p-5 rounded-2xl bg-gray-100 border border-gray-200 text-center max-w-2xl mx-auto text-xs sm:text-sm text-slate-600 leading-relaxed">
            These are possibilities to investigate, not problems every site has. The first step is finding which ones matter most to your business and visitors.
          </div>
        </div>
      </section>

      {/* Section 7: How We Evaluate Website Quality and Performance */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <span className="px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-800 text-xs sm:text-sm font-semibold tracking-wide">
              Objective Auditing
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              How We Evaluate Website Quality and Performance
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              A website should be judged by how well it does its job, not just how it looks. Depending on your goals, we may review:
            </p>
          </div>

          {/* 9 Evaluation Criteria Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {evaluationMetrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-gray-200 shadow-xs flex items-start gap-3.5"
              >
                <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center flex-shrink-0 font-bold text-xs">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">
                    {metric}
                  </h3>
                  <span className="text-xs text-slate-500 block pt-1">
                    Audited against verifiable standards and benchmarks.
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Tooling and Realistic Disclaimer (Light Styled!) */}
          <div className="p-6 rounded-3xl bg-gradient-to-r from-purple-100/80 via-pink-50/50 to-white border border-purple-200/80 text-slate-800 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-purple-700 text-xs font-bold uppercase tracking-wider">
              <Zap className="w-4 h-4" />
              <span>Diagnostic Tooling & Independent Verification</span>
            </div>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Google Search Console, Google Analytics, and PageSpeed Insights can help where they suit the project. Design alone doesn't guarantee rankings, sales, or better conversion rates, which also depend on content, technical implementation, demand, competition, and ongoing marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Section 8: Why Choose DigLip7 for Web Design Saudi Arabia? */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <span className="px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-800 text-xs sm:text-sm font-semibold tracking-wide">
              The DigLip7 Commitment
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Choose DigLip7 for Web Design Saudi Arabia?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Choosing a web partner comes down to trust and fit. We aim to bring:
            </p>
          </div>

          {/* 9 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {whyDiglip7Points.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-gray-50 border border-gray-200 hover:border-purple-300 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-purple-700">
                      0{idx + 1}
                    </span>
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Decision Guide Box (Light Styled!) */}
          <div className="text-center p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-50 via-pink-50/40 to-white border border-purple-200 text-slate-900 shadow-sm max-w-4xl mx-auto space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold">
              Unsure which path is right for your business?
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              A first conversation can help you decide whether you need a new site, a redesign, e-commerce functionality, better mobile usability, or technical fixes.
            </p>
            <div className="pt-2">
              <Link to="/contact">
                <button className="px-8 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm sm:text-base shadow-md transition-all cursor-pointer">
                  Schedule an Initial Conversation
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Frequently Asked Questions About Web Design Saudi Arabia */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <span className="px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-800 text-xs sm:text-sm font-semibold tracking-wide">
              Direct Answers
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions About Web Design Saudi Arabia
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Straightforward answers to the most common questions from Saudi business owners.
            </p>

            {/* Quick Filter Search */}
            <div className="pt-4 max-w-md mx-auto">
              <div className="relative">
                <Search className="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Filter questions (e.g. cost, mobile, Arabic, SEO)..."
                  value={faqSearch}
                  onChange={(e) => setFaqSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-xs"
                />
              </div>
            </div>
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? -1 : index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors cursor-pointer"
                  aria-expanded={openFaqIndex === index}
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900">
                    {index + 1}. {faq.q}
                  </span>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-50 text-purple-700 flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence>
                  {openFaqIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="border-t border-gray-100"
                    >
                      <div className="p-5 sm:p-6 text-sm sm:text-base text-slate-700 leading-relaxed bg-gray-50/50">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 10: Get Started with Web Design Saudi Arabia (Bottom CTA Banner) */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-purple-100 via-pink-50 to-indigo-100 border-t border-purple-200/80 text-slate-900 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-300/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <FloatingElement duration={4}>
            <span className="px-3.5 py-1.5 rounded-full bg-purple-800 text-purple-100 text-xs sm:text-sm font-semibold tracking-wide shadow-xs">
              Take the Next Step
            </span>
          </FloatingElement>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950">
            Get Started with Web Design Saudi Arabia
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto">
            The first step is a conversation about your business, your audience, your current website (if you have one), and what you want it to achieve. From there, we can recommend a practical way forward.
          </p>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Ready to build a website that works as hard as your business does?{" "}
            <Link to="/contact" className="text-purple-700 font-bold underline hover:text-purple-900 transition-colors">
              Contact DigLip7
            </Link>{" "}
            to discuss your goals, required features, and timeline. We'll help you work out whether you need a new site, a redesign, or targeted improvements for Web Design Saudi Arabia that fits your objectives.
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-base shadow-lg shadow-purple-600/25 flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <span>Request a Consultation</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </motion.button>
            </Link>

            <a
              href="https://wa.me/919650608788?text=Hello%20DigLip7%20Team%2C%20I%20would%20like%20to%20get%20started%20with%20Web%20Design%20in%20Saudi%20Arabia."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-emerald-50/50 border-2 border-emerald-600 text-emerald-800 font-bold text-base flex items-center justify-center gap-2.5 shadow-sm cursor-pointer transition-all"
              >
                <FaWhatsapp className="w-5 h-5 text-emerald-600" />
                <span className="text-emerald-900">Message on WhatsApp</span>
              </motion.button>
            </a>
          </div>

          {/* Cross-linking to other Saudi Arabia Services */}
          <div className="pt-10 mt-10 border-t border-purple-200/80 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-600">
            <span className="font-medium text-slate-700">Also exploring digital growth in Saudi Arabia?</span>
            <Link
              to="/saudi-arabia/seo-services"
              className="text-purple-700 hover:text-purple-900 font-bold flex items-center gap-1 transition-colors"
            >
              <span>SEO Services Saudi Arabia</span>
              <ChevronRight className="w-3.5 h-3.5 text-purple-700" />
            </Link>
            <span className="text-slate-400">&bull;</span>
            <Link
              to="/saudi-arabia/ppc-services/"
              className="text-purple-700 hover:text-purple-900 font-bold flex items-center gap-1 transition-colors"
            >
              <span>PPC Services Saudi Arabia</span>
              <ChevronRight className="w-3.5 h-3.5 text-purple-700" />
            </Link>
            <span className="text-slate-400">&bull;</span>
            <Link
              to="/saudi-arabia/social-media-marketing/"
              className="text-purple-700 hover:text-purple-900 font-bold flex items-center gap-1 transition-colors"
            >
              <span>Social Media Marketing Saudi Arabia</span>
              <ChevronRight className="w-3.5 h-3.5 text-purple-700" />
            </Link>
            <span className="text-slate-400">&bull;</span>
            <Link
              to="/saudi-arabia/content-marketing-services/"
              className="text-purple-700 hover:text-purple-900 font-bold flex items-center gap-1 transition-colors"
            >
              <span>Content Marketing Saudi Arabia</span>
              <ChevronRight className="w-3.5 h-3.5 text-purple-700" />
            </Link>
            <span className="text-slate-400">&bull;</span>
            <Link
              to="/saudi-arabia/online-reputation-management/"
              className="text-purple-700 hover:text-purple-900 font-bold flex items-center gap-1 transition-colors"
            >
              <span>Reputation Management Saudi Arabia</span>
              <ChevronRight className="w-3.5 h-3.5 text-purple-700" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SaudiWebDesign;
