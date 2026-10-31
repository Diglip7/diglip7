import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../../../components/SEO";
import {
  CheckCircle,
  ArrowRight,
  ArrowUp,
  ChevronRight,
  ChevronDown,
  Home,
  Target,
  BarChart3,
  Building2,
  FileText,
  Settings,
  Layers,
  Network,
  Zap,
  ShieldCheck,
  Sparkles,
  Users,
  Globe,
  Database,
  Compass,
  AlertTriangle,
  TrendingUp,
  Laptop,
  CheckCircle2,
  BookOpen,
  Boxes,
  Workflow,
  Code2,
  Server,
  Lock,
  Rocket,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

// ===========================================================================
// Shared Interactive & Motion Building Blocks (Reference: /india/restaurant-seo-services-delhi/)
// ===========================================================================

// Scroll progress bar (top of page)
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 origin-left bg-gradient-to-r from-teal-600 via-teal-700 to-emerald-600 z-[60] pointer-events-none"
      style={{ scaleX }}
    />
  );
};

// Back-to-top button
const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-teal-700 to-teal-900 text-white shadow-2xl hover:shadow-teal-500/50 flex items-center justify-center cursor-pointer"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// Floating Animation
const FloatingElement = ({ children, delay = 0 }) => (
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 3, repeat: Infinity, delay }}
  >
    {children}
  </motion.div>
);

// 3D Tilt Card Component for interactive depth
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

// Image configuration matching the 5 uploaded high-fidelity WebP visual assets
const saasImgBase = "/images/india/saas-seo/";
const saasImages = {
  hero: {
    src: `${saasImgBase}saas-seo-services-india.webp`,
    alt: "SaaS organic growth strategy for software companies in India",
    width: 1200,
    height: 675,
    eager: true,
  },
  buyerJourney: {
    src: `${saasImgBase}saas-buyer-journey-seo.webp`,
    alt: "SaaS SEO Across the Buyer Journey - Awareness, Consideration, Decision",
    width: 1200,
    height: 675,
    eager: false,
  },
  technical: {
    src: `${saasImgBase}saas-technical-seo-india.webp`,
    alt: "The Search Engine Behind a SaaS Website - Discoverability, Crawlability, Indexing",
    width: 1200,
    height: 675,
    eager: false,
  },
  international: {
    src: `${saasImgBase}saas-international-seo-india.webp`,
    alt: "International and multilingual SaaS SEO for global software markets",
    width: 1200,
    height: 675,
    eager: false,
  },
  performance: {
    src: `${saasImgBase}saas-seo-performance-analytics.webp`,
    alt: "Three Doors to Software Discovery - SaaS SEO performance and conversion measurement",
    width: 1200,
    height: 675,
    eager: false,
  },
};

// Reusable Image component with lazy-loading, decoding async, and graceful fallback
const Img = ({
  image,
  className = "w-full h-full object-cover",
  aspect = "aspect-video",
  fallbackIcon: FallbackIcon = Sparkles,
}) => {
  const [hasError, setHasError] = useState(false);
  const fileName = image?.src ? image.src.split("/").pop() : "";

  if (hasError || !image?.src) {
    return (
      <div className={`p-6 text-center text-sm font-medium text-slate-300 select-none flex flex-col items-center justify-center gap-3 w-full bg-gradient-to-br from-slate-900 via-teal-950/60 to-slate-900 border border-teal-500/30 ${aspect}`}>
        <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400 flex items-center justify-center">
          <FallbackIcon className="w-6 h-6" />
        </div>
        <div className="space-y-1 max-w-sm">
          <span className="block leading-snug text-xs sm:text-sm font-bold text-teal-200">
            {image?.alt}
          </span>
          <span className="inline-block font-mono text-[11px] text-teal-300 bg-teal-950/80 px-2.5 py-0.5 rounded-full border border-teal-500/40 font-semibold">
            {fileName}
          </span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={image.src}
      alt={image.alt}
      width={image.width || 1200}
      height={image.height || 675}
      loading={image.eager ? "eager" : "lazy"}
      decoding="async"
      onError={() => setHasError(true)}
      className={className}
    />
  );
};

// Breadcrumb configuration matching Documentation Section A & Schema Block 2
const breadcrumbTrail = [
  { label: "Home", href: "/" },
  { label: "India SEO Services", href: "/india/seo-services" },
  { label: "SaaS SEO Services in India", href: "/india/saas-seo-services/" },
];

// Why SaaS needs specialized SEO points
const specializedReasons = [
  {
    title: "Extended Buying Cycles & Multi-Stakeholder Decisions",
    desc: "Long B2B buying cycles involve multiple decision-makers—founders, CTOs, product managers, procurement—so one visit rarely converts.",
    icon: Users,
    tag: "B2B Dynamics",
  },
  {
    title: "Feature, Use Case & Comparison-Driven Searches",
    desc: "Software categories are competitive, and modern buyers search specifically by feature, workflow, use case, and head-to-head comparisons.",
    icon: Compass,
    tag: "Intent Nuance",
  },
  {
    title: "Educational & Solution-Focused Discovery",
    desc: "Software discovery often occurs through educational explainers, solution frameworks, and actionable templates long before branded vendor queries appear.",
    icon: BookOpen,
    tag: "Topical Authority",
  },
  {
    title: "JavaScript-Heavy Web Architectures",
    desc: "Modern SaaS websites built with React, Next.js, or Vue can accidentally hide critical copy from search engine crawlers if rendering is not properly resolved.",
    icon: Code2,
    tag: "Technical Crawlability",
  },
  {
    title: "Conversion Beyond Vanity Traffic",
    desc: "Organic visibility only creates value when it reliably connects to demo requests, trial signups, and sales conversations, not pageview counts.",
    icon: Target,
    tag: "Pipeline Focus",
  },
];

// 11 Core SaaS SEO Services Offered by DigLip7 (Section D specifications)
const saasServices = [
  {
    number: "01",
    title: "SaaS Keyword Research & Search Intent Mapping",
    desc: "We identify category, feature, industry, problem, integration, comparison and pricing queries, then map each group to an appropriate page and business objective. Demand and competition are validated before anything is promised. A project management tool, for example, may have very different keyword groups for its core category, its industry versions and its integrations, and each deserves its own page and goal.",
    icon: Target,
    badge: "Strategic Mapping",
    focus: "Category, Feature, Pricing, & Problem Queries",
  },
  {
    number: "02",
    title: "SaaS Website & Technical SEO",
    desc: "This covers crawlability, indexability, canonical tags, XML sitemaps, internal linking, duplicate URLs, rendering, redirects and relevant Core Web Vitals improvements, so search engines can reach and understand your public pages. Fixes are prioritised by evidence and implementation effort, not by the length of an audit tool's error list.",
    icon: Settings,
    badge: "Infrastructure Health",
    focus: "SSR, Hydration, Canonicalization, & Core Web Vitals",
  },
  {
    number: "03",
    title: "SaaS Product & Solution Page Optimization",
    desc: "Product, feature, industry, use-case and solution pages need specific messaging, clear structure, a defined search intent and useful calls to action. We refine these pages rather than leaving them as generic brochure copy, and make sure each one answers the question a buyer arrived with, whether that is what the product does, who it is for or how it fits existing tools.",
    icon: Laptop,
    badge: "Conversion Architecture",
    focus: "Use-Case Landing Pages & Bottom-of-Funnel Messaging",
  },
  {
    number: "04",
    title: "SaaS Content Strategy & Topical Authority",
    desc: "Educational guides, implementation articles, use-case content, templates and technical explainers are organised into topic clusters. Every asset has a defined audience and purpose, and our SaaS content marketing planning keeps it tied to product pages. The goal is helpful content that earns relevance, not a publishing schedule for its own sake.",
    icon: FileText,
    badge: "Topic Clusters",
    focus: "Hub-and-Spoke Silos Tied Directly to Product CTAs",
  },
  {
    number: "05",
    title: "SaaS Comparison & Alternative Pages",
    desc: "Evidence-based comparison pages help buyers evaluate options. They need factual feature comparisons, honest limitations and current information. We never invent competitor weaknesses or product capabilities.",
    icon: ScaleIconCustom,
    badge: "Commercial Intent",
    focus: "Factual Head-to-Head Comparisons & Alternative Hubs",
  },
  {
    number: "06",
    title: "SaaS Integration & Use-Case SEO",
    desc: "We optimise pages for genuine integrations, supported platforms, industry applications and specific workflows. An integration page is published only when it gives real information about a supported integration.",
    icon: Workflow,
    badge: "Ecosystem Expansion",
    focus: "Ecosystem Pages, Zapier/App Directory, & Native Connectors",
  },
  {
    number: "07",
    title: "SaaS Programmatic SEO",
    desc: "Structured page generation can help when a product has many legitimate use cases, integrations or industries. Each page must carry unique, useful information. Thin pages made by swapping city, industry or keyword names are not acceptable.",
    icon: Database,
    badge: "Scalable Templates",
    focus: "High-Utility Structured Data Pages Without Keyword Stuffing",
  },
  {
    number: "08",
    title: "SaaS Documentation & Help-Centre SEO",
    desc: "Public documentation, tutorials, setup guides and troubleshooting resources can answer search queries and support product discovery, particularly for people already evaluating how hard a product is to set up. These resources need clear internal links to related product pages. Private and customer-only documentation stays private.",
    icon: BookOpen,
    badge: "Technical Discovery",
    focus: "Public API Docs, Setup Walkthroughs, & Troubleshooting Guides",
  },
  {
    number: "09",
    title: "SaaS Link Building & Digital PR",
    desc: "We focus on editorial outreach, expert contributions, digital PR and genuinely useful research. We do not recommend paid links meant to manipulate rankings, link schemes or fabricated media coverage.",
    icon: Network,
    badge: "Earned Credibility",
    focus: "Original Research, Industry Studies, & Editorial Coverage",
  },
  {
    number: "10",
    title: "International & Multilingual SaaS SEO",
    desc: "For companies targeting other markets, this covers country-specific landing pages, language targeting, localised search intent, correct hreflang implementation and international site architecture. We assess each target market separately rather than assuming one approach fits all.",
    icon: Globe,
    badge: "Cross-Border Scale",
    focus: "US/UK/EU/MENA Localization, Subfolder Hygiene, & hreflang",
  },
  {
    number: "11",
    title: "SaaS Conversion & Organic Acquisition Measurement",
    desc: "We measure qualified demo requests, trial registrations, signup quality, assisted conversions and pipeline contribution alongside traffic and rankings. No particular conversion rate or revenue outcome is promised.",
    icon: BarChart3,
    badge: "Pipeline Attribution",
    focus: "Demo Requests, Trial Quality, & Sales-Assisted Conversions",
  },
];

function ScaleIconCustom(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="M7 21h10" />
      <path d="M12 3v18" />
      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
    </svg>
  );
}

// Buyer Journey Matrix Data
const buyerJourney = [
  {
    stage: "Problem discovery",
    intent: '"how to automate invoice processing"',
    asset: "Educational guide or explainer",
    objective: "Build awareness among people experiencing the underlying operational problem",
    badgeColor: "bg-blue-50 text-blue-800 border-blue-200",
  },
  {
    stage: "Solution research",
    intent: '"software to automate invoicing"',
    asset: "Solution or use-case page",
    objective: "Show how the software product directly resolves the business workflow",
    badgeColor: "bg-teal-50 text-teal-800 border-teal-200",
  },
  {
    stage: "Category evaluation",
    intent: '"CRM software for small businesses"',
    asset: "Category or industry landing page",
    objective: "Position the product clearly within its broader software classification",
    badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
  },
  {
    stage: "Feature & integration evaluation",
    intent: '"does [tool] integrate with [platform]"',
    asset: "Feature page or genuine integration page",
    objective: "Answer specific ecosystem, compatibility, and capability questions",
    badgeColor: "bg-indigo-50 text-indigo-800 border-indigo-200",
  },
  {
    stage: "Vendor comparison",
    intent: '"project management software comparison"',
    asset: "Evidence-based comparison or alternative page",
    objective: "Help buyers shortlist fairly with honest feature and pricing nuances",
    badgeColor: "bg-purple-50 text-purple-800 border-purple-200",
  },
  {
    stage: "Purchase or trial decision",
    intent: '"[product] pricing", "[product] free trial"',
    asset: "Pricing, demo, and self-serve trial pages",
    objective: "Convert high-intent interest into active product trials and demo bookings",
    badgeColor: "bg-amber-50 text-amber-900 border-amber-200",
  },
];

// 10-Step SaaS SEO Process
const processSteps = [
  {
    step: "01",
    title: "Discovery & Business Goal Alignment",
    detail: "We clarify your exact software product, target buyer personas, sales cycles, and ARR/lead targets.",
    deliverable: "Agreed business objectives, target personas, and priority geographic markets.",
  },
  {
    step: "02",
    title: "Website & Technical SEO Audit",
    detail: "We review client-side vs server-side rendering, crawl budgets, indexation coverage, and Core Web Vitals.",
    deliverable: "Prioritised technical issue list graded by commercial impact and development effort.",
  },
  {
    step: "03",
    title: "Keyword & Competitor Research",
    detail: "We analyze high-intent search themes, competitors' organic moats, and untapped keyword clusters.",
    deliverable: "Categorized keyword groups and documented competitor organic gap findings.",
  },
  {
    step: "04",
    title: "Search-Intent & Page Mapping",
    detail: "We map every keyword group directly to existing URLs or architect net-new landing pages.",
    deliverable: "Comprehensive keyword-to-page blueprint spanning problem, solution, and comparison queries.",
  },
  {
    step: "05",
    title: "Technical Fixes & Architecture Improvements",
    detail: "We collaborate with your engineering team to fix rendering blocks, sitemap issues, and URL structures.",
    deliverable: "Clear engineering specifications, code snippets, and post-deployment QA checks.",
  },
  {
    step: "06",
    title: "Product Page & Content Optimization",
    detail: "We rewrite and optimize core product, feature, and industry landing pages for conversion and search intent.",
    deliverable: "Fully optimized hero sections, feature grids, FAQ schema, and clear CTA placements.",
  },
  {
    step: "07",
    title: "Content Cluster & Internal-Link Development",
    detail: "We create topic hubs and contextual internal linking structures that channel authority to high-value pages.",
    deliverable: "Structured content calendar, topical clusters, and systematic internal-linking framework.",
  },
  {
    step: "08",
    title: "Authority-Building Activities",
    detail: "We execute honest editorial outreach, original research, and data-backed digital PR.",
    deliverable: "Ethical outreach pipeline and digital PR documentation with genuine editorial links.",
  },
  {
    step: "09",
    title: "Conversion Tracking & Reporting",
    detail: "We configure Google Analytics 4, Search Console, and CRM tracking to attribute demos and trials.",
    deliverable: "Validated conversion tracking setup and automated organic acquisition dashboard.",
  },
  {
    step: "10",
    title: "Ongoing Analysis & Prioritization",
    detail: "We review search performance data regularly to pivot efforts toward pages generating qualified pipeline.",
    deliverable: "Monthly commercial review reports and iteratively updated sprint roadmaps.",
  },
];

// SaaS SEO vs Paid Advertising Comparison Table
const channelComparison = [
  {
    factor: "Time to useful evidence",
    seo: "Gradual; depends on market competition, domain history, and authority.",
    paid: "Faster initial feedback once campaigns, bids, and ad copy run live.",
  },
  {
    factor: "Cost structure",
    seo: "Ongoing capital investment in strategy, technical engineering, and content.",
    paid: "Recurring media spend payable per click/impression plus management fees.",
  },
  {
    factor: "Long-term value",
    seo: "High-ranking pages, guides, and topical authority keep driving organic pipeline.",
    paid: "Ad visibility, traffic, and conversion volume generally cease the moment spend stops.",
  },
  {
    factor: "Control",
    seo: "Less direct control over ranking timing, SERP layout changes, and algorithms.",
    paid: "Precise control over ad copy, landing pages, target geography, and daily budget.",
  },
  {
    factor: "Intent capture",
    seo: "Captures in-depth research, comparison, and problem-solving intent organically.",
    paid: "Captures predefined search keywords and target audiences on immediate demand.",
  },
  {
    factor: "Measurement",
    seo: "Attribution can be indirect and multi-touch across extended buying journeys.",
    paid: "Direct, click-level attribution with defined ROAS/CAC within cookie windows.",
  },
  {
    factor: "Suitable uses",
    seo: "Building sustainable inbound discoverability, brand authority, and durable category presence.",
    paid: "Product launches, rapid value hypothesis testing, seasonal promos, and time-sensitive campaigns.",
  },
];

// 10 Common SaaS SEO Mistakes
const commonMistakes = [
  {
    title: "Publishing generic articles with no buyer relevance",
    desc: "Writing top-of-funnel listicles that attract casual readers who will never have the budget, authority, or need to buy software.",
  },
  {
    title: "Targeting search volume instead of business intent",
    desc: "Chasing 20,000-search-volume keywords that deliver zero demo requests while ignoring 150-search-volume terms with direct commercial intent.",
  },
  {
    title: "Ignoring product and solution pages",
    desc: "Dumping 95% of SEO energy into blog posts while leaving core product, feature, and integration pages thin, generic, and unoptimized.",
  },
  {
    title: "Creating near-duplicate programmatic landing pages",
    desc: "Spinning up hundreds of thin pages by blindly swapping city names or keywords, leading to indexation waste and algorithmic penalties.",
  },
  {
    title: "Publishing inaccurate competitor comparisons",
    desc: "Inventing artificial weaknesses for competitors or overstating features. Software buyers test products and quickly lose trust in misleading charts.",
  },
  {
    title: "Overlooking JavaScript rendering and indexation problems",
    desc: "Failing to verify whether Googlebot can render client-side code, leaving high-value landing pages blank in search engine indexes.",
  },
  {
    title: "Leaving public documentation poorly linked",
    desc: "Allowing detailed developer docs and setup guides to sit in an orphaned subdomain without contextual links pointing back to product sales pages.",
  },
  {
    title: "Measuring only sessions and rankings",
    desc: "Celebrating traffic graph spikes while failing to identify whether those visitors ever sign up for a trial or qualify for a sales conversation.",
  },
  {
    title: "Neglecting conversion tracking",
    desc: "Failing to set up custom conversion events in analytics, making it impossible to attribute demos and trials back to specific organic landing pages.",
  },
  {
    title: "Using unverified testimonials or unsupported claims",
    desc: "Publishing made-up 500% ROI claims or unverifiable awards that damage credibility with sophisticated technical B2B buyers.",
  },
];

// 12 Comprehensive FAQs
const faqs = [
  {
    q: "What are SaaS SEO services?",
    a: "SaaS SEO services combine keyword research, technical optimization, product and solution pages, content, internal linking, authority building and conversion measurement to help software companies reach qualified buyers through organic search.",
  },
  {
    q: "Why is SEO important for SaaS companies?",
    a: "Software buyers research problems, compare vendors and check features before they speak to sales. SEO helps your product appear at those moments, and it builds website assets that keep working beyond a single campaign.",
  },
  {
    q: "How are SaaS SEO services different from traditional SEO?",
    a: "SaaS SEO deals with longer buying cycles, feature and comparison searches, JavaScript-heavy sites and demo or trial goals. Success is judged by qualified signups and pipeline, not traffic alone.",
  },
  {
    q: "How much do SaaS SEO services cost in India?",
    a: "Fees depend on scope, competition, technical complexity, content requirements and target markets. DigLip7 does not publish fixed package prices here; a quote follows a review of your product and website.",
  },
  {
    q: "How long does SaaS SEO take to show results?",
    a: "There is no fixed timeline. Technical fixes may be reflected after recrawling, while broader visibility and pipeline impact depend on competition, authority, publishing capacity and your sales cycle.",
  },
  {
    q: "Can SEO generate SaaS demos and trial signups?",
    a: "It can bring relevant visitors to pages built to convert them, such as product, solution and comparison pages. Whether they request a demo or start a trial depends on page quality, product fit and tracking.",
  },
  {
    q: "What is B2B SaaS SEO?",
    a: "B2B SaaS SEO targets business buyers who often involve several decision-makers. It focuses on problem, category, integration and comparison searches, and measures demo requests and qualified leads.",
  },
  {
    q: "Does SaaS SEO include technical SEO?",
    a: "Yes. Crawlability, indexation, rendering, canonical tags, sitemaps, internal linking and performance determine whether search engines can access and understand your public marketing pages.",
  },
  {
    q: "How does keyword research work for SaaS products?",
    a: "It groups queries by category, feature, industry, problem, integration, comparison and pricing intent, then maps each group to the right page and business goal, validating demand before committing effort.",
  },
  {
    q: "What is programmatic SEO for SaaS?",
    a: "It is generating many pages from structured data, such as integrations or use cases. It works only when every page carries unique, useful information; swapped keywords create thin pages.",
  },
  {
    q: "Can Indian SaaS companies use SEO to reach international markets?",
    a: "Yes, with country-specific pages, localised search intent, correct hreflang and a sound international site structure where relevant. Each target market needs its own research.",
  },
  {
    q: "How can a SaaS business measure SEO performance?",
    a: "Track non-branded clicks, key query groups, visits to product pages, qualified demo and trial conversions, and pipeline where attribution is reliable. Validate analytics setup first.",
  },
];

const IndiaSaaSSEO = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const canonicalUrl = "https://diglip7.com/india/saas-seo-services/";

  // Particles for Hero background animation (memoized)
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 3.5 + Math.random() * 2.5,
        delay: Math.random() * 2,
      })),
    []
  );

  // Background animated circles for CTA section
  const ctaCircles = useMemo(
    () =>
      Array.from({ length: 14 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 4 + Math.random() * 2.5,
        delay: Math.random() * 2,
      })),
    []
  );

  // Block 2: Page-level structured data (WebPage, BreadcrumbList, Service, FAQPage)
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://diglip7.com/india/saas-seo-services/#webpage",
        url: "https://diglip7.com/india/saas-seo-services/",
        name: "SaaS SEO Services in India | DigLip7",
        description:
          "Grow qualified organic traffic for your software business with SaaS SEO Services in India from DigLip7. Explore technical SEO, content strategy and conversion-focused optimization.",
        "inLanguage": "en-IN",
        isPartOf: {
          "@id": "https://diglip7.com/#website",
        },
        publisher: {
          "@id": "https://diglip7.com/#organization",
        },
        about: {
          "@id": "https://diglip7.com/india/saas-seo-services/#service",
        },
        breadcrumb: {
          "@id": "https://diglip7.com/india/saas-seo-services/#breadcrumb",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://diglip7.com/india/saas-seo-services/#breadcrumb",
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
            name: "India SEO Services",
            item: "https://diglip7.com/india/seo-services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "SaaS SEO Services in India",
            item: "https://diglip7.com/india/saas-seo-services/",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://diglip7.com/india/saas-seo-services/#service",
        name: "SaaS SEO Services in India",
        serviceType: "SaaS search engine optimization",
        url: "https://diglip7.com/india/saas-seo-services/",
        description:
          "SEO services for SaaS and software companies in India, covering keyword research, technical SEO, product and solution pages, content strategy, link building, international SEO and conversion measurement.",
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        provider: {
          "@id": "https://diglip7.com/#organization",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://diglip7.com/india/saas-seo-services/#faq",
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
    <div className="w-full bg-white font-sans text-gray-800 antialiased selection:bg-teal-700 selection:text-white relative">
      {/* Top Scroll Reading Progress Indicator */}
      <ScrollProgress />

      {/* Floating Back To Top Button */}
      <BackToTop />

      <SEO
        title="SaaS SEO Services in India | DigLip7"
        exactTitle={true}
        description="Grow qualified organic traffic for your software business with SaaS SEO Services in India from DigLip7. Explore technical SEO, content strategy and conversion-focused optimization."
        canonical={canonicalUrl}
        ogType="website"
        ogTitle="SaaS SEO Services in India | DigLip7"
        ogDescription="Grow qualified organic traffic for your software business with SaaS SEO Services in India from DigLip7. Explore technical SEO, content strategy and conversion-focused optimization."
        ogImage="https://diglip7.com/images/india/saas-seo/saas-seo-services-india.webp"
        ogImageAlt="SaaS organic growth strategy for software companies in India"
        twitterCard="summary_large_image"
        twitterTitle="SaaS SEO Services in India | DigLip7"
        twitterDescription="Grow qualified organic traffic for your software business with SaaS SEO Services in India from DigLip7. Explore technical SEO, content strategy and conversion-focused optimization."
        twitterImage="https://diglip7.com/images/india/saas-seo/saas-seo-services-india.webp"
        twitterImageAlt="SaaS organic growth strategy for software companies in India"
        robots="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        keywords={null}
        schema={pageJsonLd}
      />

      {/* Breadcrumb Navigation */}
      <div className="pt-24 sm:pt-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-50 via-slate-50 to-emerald-50/40 border-b border-teal-100/60">
        <nav
          aria-label="Breadcrumb"
          className="max-w-7xl mx-auto flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-gray-600 pb-3"
        >
          {breadcrumbTrail.map((crumb, i) => (
            <span key={crumb.label} className="flex items-center gap-1.5">
              {i === 0 ? (
                <Home className="w-3.5 h-3.5 text-teal-700" />
              ) : (
                <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              )}
              {i === breadcrumbTrail.length - 1 ? (
                <span className="font-semibold text-teal-950">{crumb.label}</span>
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
      <div className="pt-8 sm:pt-12 pb-16 lg:pb-24 bg-gradient-to-r from-teal-50 via-slate-50 to-emerald-50/40 min-h-[85vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 xl:px-12 relative overflow-hidden">
        {/* Subtle Decorative Ambient Elements */}
        <motion.div
          className="absolute top-12 left-8 w-28 h-28 bg-teal-200/40 rounded-full blur-2xl pointer-events-none"
          animate={{ y: [0, 25, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-16 right-8 w-36 h-36 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating Particles in Hero */}
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-teal-600/15 rounded-full"
              style={{ left: `${p.left}%`, top: `${p.top}%` }}
              animate={{ y: [0, -100, 0], opacity: [0, 1, 0] }}
              transition={{ duration: p.duration, repeat: Infinity, delay: p.delay }}
            />
          ))}
        </div>

        <div className="flex flex-col lg:flex-row items-center w-full max-w-7xl mx-auto gap-10 lg:gap-14 relative z-10">
          {/* Left Column: Heading, Direct Intro, CTAs */}
          <motion.div
            className="w-full lg:w-[58%] text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Pill Badge */}
            <FloatingElement delay={0.2}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/90 backdrop-blur-md border border-teal-300/80 rounded-full text-teal-950 font-bold text-xs uppercase tracking-wider mb-5 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-teal-700" />
                <span>SaaS SEO Agency in India • Organic Growth &amp; Acquisition</span>
              </div>
            </FloatingElement>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] text-slate-900 tracking-tight mb-6">
              SaaS SEO Services in India for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-teal-800 to-emerald-700">
                Sustainable Organic Growth
              </span>
            </h1>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-5 font-normal">
              Software buyers rarely start with a vendor name. They search for a problem, compare approaches, check features and integrations, and only then look for specific products. A focused SEO strategy helps your software company become discoverable at each of those moments, with pages built to turn relevant interest into demo requests, trial signups and qualified conversations.
            </p>

            {/* Direct Honest Disclaimer Callout */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="p-4 sm:p-4.5 rounded-xl bg-teal-900/5 border border-teal-200/80 mb-7 text-left text-sm text-slate-800 flex items-start gap-3 shadow-xs"
            >
              <ShieldCheck className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong className="text-teal-950 font-semibold">Honest Performance Principle:</strong> It can help you earn qualified organic traffic, clearer product visibility and measurable acquisition. It cannot guarantee rankings or revenue, and we do not promise them.
              </p>
            </motion.div>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3.5 sm:gap-4">
              <Link to="/contact">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-7 sm:px-8 py-3.5 sm:py-4 bg-teal-900 hover:bg-teal-950 text-white text-sm sm:text-base font-bold rounded-full shadow-lg shadow-teal-950/20 hover:shadow-xl transition-all duration-300 flex items-center gap-2 cursor-pointer"
                >
                  <span>Discuss Your SaaS SEO Strategy</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 sm:px-7 py-3.5 sm:py-4 bg-white hover:bg-teal-50 text-teal-950 text-sm sm:text-base font-bold rounded-full border border-teal-300/80 shadow-xs hover:shadow-md transition-all duration-300 flex items-center gap-2 cursor-pointer"
                >
                  <span>Request an SEO Consultation</span>
                </motion.button>
              </Link>
              <motion.a
                href="https://wa.me/919650608788?text=Hello%20DigLip7%20Team%2C%20I%20would%20like%20to%20discuss%20SaaS%20SEO%20Services%20in%20India."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-sm font-semibold transition-transform duration-200 shadow-sm"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>WhatsApp</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual & Interactive 3D Feature Card */}
          <motion.div
            className="w-full lg:w-[42%] flex flex-col items-center gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card3D className="w-full">
              <div className="w-full rounded-2xl overflow-hidden border border-teal-200/90 shadow-2xl bg-slate-900 group relative aspect-video flex flex-col justify-end">
                <Img
                  image={saasImages.hero}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  fallbackIcon={Sparkles}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex flex-col gap-1 text-white text-xs px-3.5 py-2.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/10 z-10">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold flex items-center gap-1.5 text-teal-300">
                      <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                      SaaS Organic Growth Architecture
                    </span>
                    <span className="text-[11px] text-teal-200/90 font-mono">India &amp; Global Markets</span>
                  </div>
                </div>
              </div>
            </Card3D>

            <Card3D className="w-full max-w-md">
              <div className="bg-white/95 backdrop-blur-xl border border-teal-200/90 rounded-2xl p-6 sm:p-7 shadow-xl shadow-teal-950/10 space-y-5">
                <div className="flex items-center justify-between border-b border-teal-100 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-teal-800 text-white flex items-center justify-center font-bold text-sm">
                      D7
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-teal-950">SaaS Growth Engine</h4>
                      <p className="text-[11px] text-gray-500">Pipeline-First SEO Matrix</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                    Active Strategy
                  </span>
                </div>

                {/* Key Metric Highlights */}
                <div className="grid grid-cols-2 gap-3 text-left">
                  <div className="p-3 bg-teal-50/70 rounded-xl border border-teal-100">
                    <span className="text-[11px] text-teal-800 font-medium">Intent Focus</span>
                    <p className="text-sm font-bold text-teal-950 mt-0.5">Commercial &amp; Solution</p>
                  </div>
                  <div className="p-3 bg-teal-50/70 rounded-xl border border-teal-100">
                    <span className="text-[11px] text-teal-800 font-medium">Primary Goal</span>
                    <p className="text-sm font-bold text-teal-950 mt-0.5">Demos &amp; Trials</p>
                  </div>
                  <div className="p-3 bg-teal-50/70 rounded-xl border border-teal-100">
                    <span className="text-[11px] text-teal-800 font-medium">Target Reach</span>
                    <p className="text-sm font-bold text-teal-950 mt-0.5">Domestic &amp; Global</p>
                  </div>
                  <div className="p-3 bg-teal-50/70 rounded-xl border border-teal-100">
                    <span className="text-[11px] text-teal-800 font-medium">Promises</span>
                    <p className="text-sm font-bold text-teal-950 mt-0.5">Zero False Ranks</p>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs text-gray-600 pt-2 border-t border-teal-100">
                  <div className="flex items-center gap-2 text-teal-900 font-medium">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Search intent mapped to distinct buyer lifecycle stages</span>
                  </div>
                  <div className="flex items-center gap-2 text-teal-900 font-medium">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Technical rendering QA for client-side JavaScript apps</span>
                  </div>
                  <div className="flex items-center gap-2 text-teal-900 font-medium">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Evidence-based comparison hubs &amp; integration directories</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="w-full py-2.5 px-4 bg-teal-800 hover:bg-teal-900 text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Request Strategy Audit</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </Card3D>
          </motion.div>
        </div>
      </div>

      {/* Section: Why SaaS Businesses Need a Specialized SEO Strategy */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-gray-200/70">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FloatingElement>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-100/70 px-3 py-1 rounded-full border border-teal-200">
                The Software Landscape
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
                Why SaaS Businesses Need a Specialized SEO Strategy
              </h2>
            </FloatingElement>
            <p className="text-gray-600 text-sm sm:text-base mt-3 leading-relaxed">
              SaaS SEO differs from conventional website SEO in several ways:
            </p>
          </motion.div>

          {/* 5 Distinct Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {specializedReasons.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center group-hover:bg-teal-800 group-hover:text-white transition-colors duration-200">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-50/80 px-2.5 py-1 rounded-full border border-teal-100">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}

            {/* Sixth Contextual Callout Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-gradient-to-br from-teal-900 to-slate-900 p-6 sm:p-7 rounded-2xl border border-teal-800 text-white flex flex-col justify-between md:col-span-2 lg:col-span-1 shadow-sm"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/10 text-teal-300 flex items-center justify-center mb-4">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                  Traffic Alone Is a Poor Measure of Success
                </h3>
                <p className="text-xs sm:text-sm text-teal-100/90 leading-relaxed">
                  That is why traffic alone is a poor measure of success. Ten qualified visits to a product page can outweigh thousands of visits to an unrelated article. SEO for software companies in India also often has to serve two audiences at once: domestic buyers and overseas customers with different search habits.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-teal-800/80 flex items-center gap-2 text-xs text-teal-300 font-semibold">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Balanced domestic &amp; global targeting</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section: What Are SaaS SEO Services? */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FloatingElement>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                Definition &amp; Core Model
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
                What Are SaaS SEO Services?
              </h2>
            </FloatingElement>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-teal-900 via-teal-950 to-slate-900 text-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden"
          >
            <div className="relative z-10">
              <p className="text-base sm:text-lg md:text-xl text-teal-100/90 leading-relaxed font-normal">
                SaaS SEO services are a coordinated approach to helping software companies attract qualified organic traffic. They combine keyword research, technical optimization, product and solution pages, content development, internal linking, authority building and conversion measurement, so that search visibility connects to demo requests, trials and pipeline rather than traffic alone.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-8 border-t border-teal-800/80">
                <motion.div whileHover={{ y: -4 }} className="p-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 transition-transform duration-200">
                  <Target className="w-5 h-5 text-teal-300 mb-2" />
                  <h4 className="text-sm font-bold text-white">Intent Mapping</h4>
                  <p className="text-xs text-teal-200/80 mt-1">Connecting buyer pain points to dedicated solution URLs.</p>
                </motion.div>
                <motion.div whileHover={{ y: -4 }} className="p-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 transition-transform duration-200">
                  <Code2 className="w-5 h-5 text-teal-300 mb-2" />
                  <h4 className="text-sm font-bold text-white">Technical Hygiene</h4>
                  <p className="text-xs text-teal-200/80 mt-1">Rendering, canonical tags, speed, and crawl budget control.</p>
                </motion.div>
                <motion.div whileHover={{ y: -4 }} className="p-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 transition-transform duration-200">
                  <Layers className="w-5 h-5 text-teal-300 mb-2" />
                  <h4 className="text-sm font-bold text-white">Topic Clusters</h4>
                  <p className="text-xs text-teal-200/80 mt-1">Building topical authority tied back to product landing pages.</p>
                </motion.div>
                <motion.div whileHover={{ y: -4 }} className="p-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 transition-transform duration-200">
                  <BarChart3 className="w-5 h-5 text-teal-300 mb-2" />
                  <h4 className="text-sm font-bold text-white">Pipeline Measurement</h4>
                  <p className="text-xs text-teal-200/80 mt-1">Tracking qualified demo inquiries and verified trial signups.</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section: SaaS SEO Services Offered by DigLip7 (11 Offerings) */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-14"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FloatingElement>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                End-to-End Capabilities
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
                SaaS SEO Services Offered by DigLip7
              </h2>
            </FloatingElement>
            <p className="text-gray-600 text-sm sm:text-base mt-3 leading-relaxed">
              Every phase of our service is tailored specifically to software product discovery, engineering realities, and B2B pipeline conversion.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {saasServices.map((service, idx) => {
              const IconComp = service.icon;
              return (
                <motion.div
                  key={service.number}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200/90 hover:border-teal-400 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-teal-50/50 rounded-bl-full pointer-events-none group-hover:bg-teal-100/50 transition-colors" />

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center font-bold text-sm group-hover:bg-teal-800 group-hover:text-white transition-colors duration-200">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-extrabold text-teal-800">
                          {service.number}
                        </span>
                      </div>
                      <span className="text-[10px] font-semibold text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200">
                        {service.badge}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2.5 leading-snug">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal mb-4">
                      {service.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-100 mt-2">
                    <span className="text-[11px] font-medium text-teal-900 bg-teal-50/60 block px-2.5 py-1.5 rounded-lg border border-teal-100/80">
                      <strong>Focus:</strong> {service.focus}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section: SaaS SEO Across the Buyer Journey (Interactive Table) */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-gray-200/70">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FloatingElement>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-100/70 px-3 py-1 rounded-full border border-teal-200">
                Buyer Journey Alignment
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
                SaaS SEO Across the Buyer Journey
              </h2>
            </FloatingElement>
            <p className="text-gray-600 text-sm sm:text-base mt-3 leading-relaxed">
              SEO can serve every stage of software evaluation. Someone early in the journey may only be describing a pain point, while someone later is comparing named vendors. A single page rarely serves both, so each stage needs its own asset and its own measure of success. The queries below are illustrative, not verified high-volume keywords.
            </p>
          </motion.div>

          {/* Section 16:9 Visual Blueprint Slot */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto mb-10"
          >
            <Card3D>
              <div className="rounded-2xl overflow-hidden border border-gray-200/90 shadow-xl bg-slate-900 group aspect-video relative flex flex-col justify-end">
                <Img
                  image={saasImages.buyerJourney}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  fallbackIcon={Target}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />
                <div className="p-3.5 bg-slate-900/90 backdrop-blur-md text-xs text-teal-200/90 flex flex-wrap items-center justify-between gap-2 border-t border-slate-800 relative z-10">
                  <span className="font-semibold text-white flex items-center gap-1.5">
                    <Target className="w-4 h-4 text-teal-400" />
                    Staged Evaluation: Problem Discovery to Bottom-of-Funnel Conversion
                  </span>
                  <span className="text-teal-300 text-[11px] font-mono">
                    Awareness &bull; Consideration &bull; Decision
                  </span>
                </div>
              </div>
            </Card3D>
          </motion.div>

          {/* Interactive Matrix Table */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-teal-900 text-white border-b border-teal-950">
                    <th className="py-4 px-5 font-bold uppercase tracking-wider text-xs">Buyer stage</th>
                    <th className="py-4 px-5 font-bold uppercase tracking-wider text-xs">Example search intent</th>
                    <th className="py-4 px-5 font-bold uppercase tracking-wider text-xs">Recommended content asset</th>
                    <th className="py-4 px-5 font-bold uppercase tracking-wider text-xs">Business objective</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {buyerJourney.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-teal-50/50 transition-colors duration-150"
                    >
                      <td className="py-4 px-5 font-bold text-slate-900 align-top">
                        <span className={`inline-block px-2.5 py-1 rounded-lg border text-xs font-semibold ${row.badgeColor}`}>
                          {row.stage}
                        </span>
                      </td>
                      <td className="py-4 px-5 font-mono text-teal-900 bg-slate-50/50 align-top font-medium">
                        {row.intent}
                      </td>
                      <td className="py-4 px-5 text-slate-800 font-semibold align-top">
                        {row.asset}
                      </td>
                      <td className="py-4 px-5 text-gray-600 leading-relaxed align-top">
                        {row.objective}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-teal-50/40 border-t border-gray-200 text-xs text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-2">
              <p className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                <span>Each stage requires distinct intent matching and customized call-to-actions.</span>
              </p>
              <Link to="/contact" className="text-teal-800 font-bold hover:underline">
                Plan Your Funnel Strategy &rarr;
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section: Technical SEO for Modern SaaS Websites */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <motion.div
              className="lg:col-span-7 space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <FloatingElement>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                  Engineering &amp; Architecture
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mt-2">
                  Technical SEO for Modern SaaS Websites
                </h2>
              </FloatingElement>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Search engines must be able to reach meaningful content on your public pages. That means checking JavaScript rendering, and using server-rendered content where appropriate. It also means crawlable navigation, descriptive URLs, indexable product and feature pages, sensible canonicalization, an accurate XML sitemap, mobile usability and performance, and eligible structured data. Crawl errors and indexation should be monitored in Google Search Console. Where Google's documentation applies, such as for structured data, we follow it, and we never assume markup will produce a rich result. For software organizations seeking holistic consulting beyond product-led silos, see our{" "}
                <Link to="/digital-market/seoservices" className="text-teal-800 font-bold hover:underline">
                  broader SEO services
                </Link>
                , and explore our{" "}
                <Link to="/digital-market/Ai-powered-Digital-Marketing" className="text-teal-800 font-bold hover:underline">
                  AI-powered digital marketing
                </Link>{" "}
                capabilities for multi-channel discovery.
              </p>

              {/* Private vs Public Security Principle */}
              <div className="bg-amber-50/80 border border-amber-200 p-5 rounded-2xl">
                <div className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-amber-950">Public Marketing vs Logged-In Application Security</h4>
                    <p className="text-xs sm:text-sm text-amber-900/90 mt-1 leading-relaxed">
                      A public marketing website is different from a logged-in application. Authenticated areas should stay private, and confidential or customer-specific content must never be exposed for SEO.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>SSR, SSG, and hybrid hydration auditing for React &amp; Next.js</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Canonical tags and parameter handling for faceted features</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Core Web Vitals tuning (LCP, INP, CLS) on live mobile browsers</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Google Search Console indexing and coverage monitoring</span>
                </div>
              </div>
            </motion.div>

            {/* Right Side Visual Component & Architecture Diagram */}
            <motion.div
              className="lg:col-span-5 space-y-5"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Card3D>
                <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-xl bg-slate-950 group aspect-video relative flex flex-col justify-end">
                  <Img
                    image={saasImages.technical}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    fallbackIcon={Server}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />
                  <div className="p-3 bg-slate-900/90 backdrop-blur-md border-t border-slate-800 flex items-center justify-between text-xs relative z-10">
                    <span className="text-teal-400 font-mono font-medium flex items-center gap-1.5">
                      <Server className="w-3.5 h-3.5" />
                      Technical Architecture Blueprint
                    </span>
                    <span className="text-[11px] text-teal-200/90 font-mono truncate max-w-[240px]">
                      Discoverability, Crawlability, Indexing
                    </span>
                  </div>
                </div>
              </Card3D>

              <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <Server className="w-4 h-4 text-teal-400" />
                    <span className="text-xs font-mono font-bold text-teal-300">Technical Audit Checklist</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Production QA
                  </span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <motion.div whileHover={{ x: 4 }} className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/60 transition-transform">
                    <span className="text-gray-400 block text-[11px] mb-1">01. Rendering Pipeline</span>
                    <p className="text-teal-200">Server-Side Rendered (SSR) HTML verification for bots</p>
                  </motion.div>
                  <motion.div whileHover={{ x: 4 }} className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/60 transition-transform">
                    <span className="text-gray-400 block text-[11px] mb-1">02. App Shell Boundaries</span>
                    <p className="text-emerald-200">Authenticated app routes explicitly disallow crawlers</p>
                  </motion.div>
                  <motion.div whileHover={{ x: 4 }} className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/60 transition-transform">
                    <span className="text-gray-400 block text-[11px] mb-1">03. Documentation Linking</span>
                    <p className="text-cyan-200">Public API docs crawlable with reciprocal product links</p>
                  </motion.div>
                  <motion.div whileHover={{ x: 4 }} className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/60 transition-transform">
                    <span className="text-gray-400 block text-[11px] mb-1">04. Structured Data</span>
                    <p className="text-purple-200">WebPage, Service, FAQ, and Breadcrumb Schema</p>
                  </motion.div>
                </div>

                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="w-full py-2.5 px-4 bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <span>Request Technical Crawl Audit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section: SEO for SaaS Startups and Growing Software Companies in India */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-gray-200/70">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FloatingElement>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-100/70 px-3 py-1 rounded-full border border-teal-200">
                Company Archetypes
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
                SEO for SaaS Startups &amp; Growing Software Companies in India
              </h2>
            </FloatingElement>
            <p className="text-gray-600 text-sm sm:text-base mt-3 leading-relaxed">
              Needs differ. Early-stage startups, B2B software companies, enterprise providers, product-led businesses, vertical SaaS companies and Indian SaaS businesses targeting overseas customers each face different constraints. Priorities depend on product maturity, market positioning, resources, existing authority and competition.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-md transition-all duration-200"
            >
              <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-800 flex items-center justify-center font-bold mb-3 shadow-xs">
                <Rocket className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Early-Stage SaaS Startups</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                A startup may focus on a small set of high-intent, bottom-of-funnel comparison and solution pages first, capturing early evaluators before investing in broad informational content volume.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-md transition-all duration-200"
            >
              <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-800 flex items-center justify-center font-bold mb-3 shadow-xs">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">B2B Enterprise Providers</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                A larger enterprise company may need broader website architecture work, security-focused landing pages, compliance messaging, and topic clusters supporting complex sales cycles.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-md transition-all duration-200"
            >
              <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-800 flex items-center justify-center font-bold mb-3 shadow-xs">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Product-Led Growth (PLG)</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Prioritizes self-serve trial entry points, free utility calculators, template hubs, and workflow guides designed to drive direct product signup without sales touchpoints.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-md transition-all duration-200"
            >
              <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-800 flex items-center justify-center font-bold mb-3 shadow-xs">
                <Boxes className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Vertical SaaS</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Focuses deeply on niche industry workflows (e.g., healthcare clinic software, legal CRM) where domain terminology and hyper-specific compliance queries reign supreme.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-md transition-all duration-200 md:col-span-2 flex flex-col md:flex-row gap-6 items-center"
            >
              <div className="w-full md:w-1/2 rounded-xl overflow-hidden border border-teal-100 shadow-md bg-slate-950 group shrink-0 aspect-video relative flex flex-col justify-end">
                <Img
                  image={saasImages.international}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  fallbackIcon={Globe}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />
                <div className="p-3 bg-slate-900/90 backdrop-blur-md border-t border-slate-800 flex items-center justify-between text-xs relative z-10">
                  <span className="text-teal-300 font-mono font-medium flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-teal-400" />
                    Cross-Border Global SEO
                  </span>
                  <span className="text-[11px] text-teal-200/90 font-mono truncate">
                    Global Software Markets
                  </span>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-800 flex items-center justify-center font-bold mb-3 shadow-xs">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">Indian SaaS Selling to Overseas Customers</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Indian SaaS companies selling overseas should research each target market's search behaviour instead of assuming it matches the domestic market. Search vocabulary, competitive alternatives, and commercial decision habits in North America, the UK, or the UAE differ significantly from Indian domestic inquiries. We configure localized intent clusters, regional landing pages, and international hreflang architectures to capture overseas software buyers.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section: Our SaaS SEO Process (10 Phases) */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-14"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FloatingElement>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                Execution Roadmap
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
                Our SaaS SEO Process
              </h2>
            </FloatingElement>
            <p className="text-gray-600 text-sm sm:text-base mt-3 leading-relaxed">
              Timelines vary with scope and complexity, and no issue can be promised to be resolved in a set number of days. Here is our 10-phase structured methodology:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {processSteps.map((p, idx) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx % 2) * 0.1 }}
                whileHover={{ y: -4, borderColor: "rgb(20 184 166)" }}
                className="bg-slate-50/70 p-6 sm:p-7 rounded-2xl border border-gray-200/80 hover:bg-white hover:border-teal-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 rounded-lg bg-teal-900 text-white font-mono font-bold text-xs flex items-center justify-center shadow-xs">
                      {p.step}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                    {p.detail}
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-200/60 text-xs text-teal-950 font-medium">
                  <strong>Deliverable:</strong> {p.deliverable}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Performance Measurement & How Long It Takes */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-gray-200/70">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Box: Measurement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="bg-white p-7 sm:p-9 rounded-3xl border border-gray-200/80 shadow-xs flex flex-col justify-between transition-all"
            >
              <div>
                <Card3D className="mb-5">
                  <div className="w-full rounded-2xl overflow-hidden border border-teal-100/90 shadow-md bg-slate-900 group aspect-video relative flex flex-col justify-end">
                    <Img
                      image={saasImages.performance}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      fallbackIcon={BarChart3}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />
                    <div className="p-3 bg-slate-900/90 backdrop-blur-md border-t border-slate-800 flex items-center justify-between text-xs relative z-10">
                      <span className="text-teal-300 font-mono font-medium flex items-center gap-1.5">
                        <BarChart3 className="w-3.5 h-3.5 text-teal-400" />
                        Software Discovery Funnel
                      </span>
                      <span className="text-[11px] text-teal-200/90 font-mono truncate">
                        Discover &bull; Evaluate &bull; Choose
                      </span>
                    </div>
                  </div>
                </Card3D>
                <FloatingElement>
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                    Analytics &amp; Attribution
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-3 mb-4">
                    How SaaS SEO Performance Is Measured
                  </h3>
                </FloatingElement>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Useful measures include non-branded organic clicks and impressions, rankings for strategically selected query groups, organic visits to product and solution pages, qualified demo requests, trial and signup registrations, organic conversion rate, sales-qualified leads where tracking exists, and influenced pipeline or acquisition metrics where attribution is reliable. Indexation, crawlability and technical health matter too.
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Analytics configuration and attribution limits affect how reliable these figures are, so tracking should be validated before conclusions are drawn. A rise in sessions that brings no qualified signups is not a success, and a smaller set of well-matched visits can be.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-100 grid grid-cols-2 gap-3 text-xs text-teal-950 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Non-branded search clicks</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Demo &amp; trial signups</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Product page visits</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Influenced pipeline metrics</span>
                </div>
              </div>
            </motion.div>

            {/* Right Box: Timelines */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              whileHover={{ y: -4 }}
              className="bg-white p-7 sm:p-9 rounded-3xl border border-gray-200/80 shadow-xs flex flex-col justify-between transition-all"
            >
              <div>
                <FloatingElement>
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                    Realistic Expectations
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-3 mb-4">
                    How Long Does SaaS SEO Take?
                  </h3>
                </FloatingElement>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  SEO is ongoing, and timelines depend on competition, domain history, technical condition, content quality, authority, publishing capacity and your sales cycle.
                </p>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Early technical improvements, such as fixing rendering or canonical issues, may be reflected after recrawling; longer-term organic visibility and business outcomes take sustained work.
                </p>
                <div className="p-4 bg-teal-50/70 rounded-xl border border-teal-200 text-xs sm:text-sm text-teal-950 font-medium">
                  <strong>Transparent Commitment:</strong> We do not promise ranking dates, fixed lead volumes or results within 30 or 60 days. Software categories require deliberate compounding.
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-500">Need a realistic roadmap?</span>
                <Link to="/contact" className="text-xs font-bold text-teal-800 hover:underline">
                  Discuss Strategy Timelines &rarr;
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section: SaaS SEO vs Paid Advertising */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FloatingElement>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                Channel Strategy
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
                SaaS SEO vs Paid Advertising
              </h2>
            </FloatingElement>
            <p className="text-gray-600 text-sm sm:text-base mt-3 leading-relaxed">
              The channels complement each other. SEO is not free, and paid advertising is not always inefficient. Many software companies use paid campaigns for launches and testing while SEO builds lasting discoverability. See our{" "}
              <Link to="/digital-market/PPC-Advertising" className="text-teal-800 font-bold hover:underline">
                PPC advertising services
              </Link>{" "}
              for the paid side.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="py-4 px-5 font-bold uppercase tracking-wider text-xs w-1/4">Factor</th>
                    <th className="py-4 px-5 font-bold uppercase tracking-wider text-xs w-3/8 text-teal-300">SaaS SEO</th>
                    <th className="py-4 px-5 font-bold uppercase tracking-wider text-xs w-3/8 text-amber-300">Paid Advertising</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {channelComparison.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-4 px-5 font-bold text-slate-900 bg-slate-50/40 align-top">
                        {row.factor}
                      </td>
                      <td className="py-4 px-5 text-gray-700 leading-relaxed align-top">
                        {row.seo}
                      </td>
                      <td className="py-4 px-5 text-gray-700 leading-relaxed align-top">
                        {row.paid}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section: Common SaaS SEO Mistakes */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-gray-200/70">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FloatingElement>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100/70 px-3 py-1 rounded-full border border-amber-200">
                Pitfalls to Avoid
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
                Common SaaS SEO Mistakes
              </h2>
            </FloatingElement>
            <p className="text-gray-600 text-sm sm:text-base mt-3 leading-relaxed">
              Software companies frequently waste resources on misguided tactics. Here are the common errors we help you steer clear of:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {commonMistakes.map((m, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx % 2) * 0.08 }}
                whileHover={{ y: -3 }}
                className="p-5 rounded-2xl bg-white border border-gray-200/90 shadow-xs flex items-start gap-3.5 hover:shadow-md transition-all duration-200"
              >
                <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs shadow-xs">
                  <AlertTriangle className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1 leading-snug">
                    {m.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Why Consider DigLip7 for SaaS SEO? */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FloatingElement>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                Agency Philosophy
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 mb-6 tracking-tight">
                Why Consider DigLip7 for SaaS SEO?
              </h2>
            </FloatingElement>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-teal-50 via-slate-50 to-emerald-50/50 p-6 sm:p-10 rounded-3xl border border-teal-200 text-left space-y-4 shadow-sm"
          >
            <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
              DigLip7 approaches SaaS SEO through strategy, technical SEO, content planning, search-intent mapping and transparent measurement. The work is scoped around your software product, target customers, website architecture and commercial objectives, as part of our wider{" "}
              <Link to="/india/seo-services" className="text-teal-800 font-bold hover:underline">
                India SEO services
              </Link>
              . For a startup, that may mean a lean plan focused on a few high-intent pages; for an established vendor, deeper architecture and content work. If your organization seeks organic search consulting for wider enterprise initiatives, explore our{" "}
              <Link to="/digital-market/seoservices" className="text-teal-800 font-bold hover:underline">
                broader SEO services
              </Link>
              .
            </p>
            <p className="text-sm sm:text-base text-gray-800 leading-relaxed font-semibold text-teal-950">
              We do not claim guaranteed rankings or unverifiable results. You should always know what is changing, why, and how it is measured.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section: Frequently Asked Questions (12 FAQs Accordion) */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-gray-200/70">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FloatingElement>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-100/70 px-3 py-1 rounded-full border border-teal-200">
                Common Questions
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
                Frequently Asked Questions About SaaS SEO Services in India
              </h2>
            </FloatingElement>
            <p className="text-gray-600 text-sm sm:text-base mt-3 leading-relaxed">
              Clear, practical answers about how search engine optimization drives organic software growth.
            </p>
          </motion.div>

          <div className="space-y-3.5">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index % 4) * 0.05, duration: 0.4 }}
                  className="bg-white rounded-2xl border border-gray-200/90 shadow-xs overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      {faq.q}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="shrink-0"
                    >
                      <ChevronDown className="w-5 h-5 text-teal-700" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-gray-700 leading-relaxed border-t border-gray-100 font-normal">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section: Closing CTA Banner */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-900 via-teal-950 to-slate-950 text-white relative overflow-hidden">
        {/* Pulsing Decorative Ambient Rings */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          {ctaCircles.map((c, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 border border-white/20 rounded-full"
              style={{ left: `${c.left}%`, top: `${c.top}%` }}
              animate={{ scale: [1, 1.25, 1], opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: c.duration, repeat: Infinity, delay: c.delay }}
            />
          ))}
        </div>

        <motion.div
          className="max-w-4xl mx-auto text-center space-y-6 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <FloatingElement>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white/10 backdrop-blur-md border border-teal-400/30 rounded-full text-teal-200 font-bold text-xs uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-teal-300" />
              <span>Start With Honest Priorities</span>
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight mt-3">
              Talk to DigLip7 About Your SaaS SEO Strategy
            </h2>
          </FloatingElement>

          <p className="text-teal-100/90 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            If you would like a strategy tailored to your product, audience and growth objectives, DigLip7 can start with a review of your website, search visibility and goals. There are no guaranteed rankings, demos or returns, only a clear and realistic plan that you can review and challenge.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
            <Link to="/contact">
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white hover:bg-teal-50 text-teal-950 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer flex items-center gap-2 text-sm sm:text-base"
              >
                <span>Discuss Your SaaS SEO Strategy</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-teal-800/80 hover:bg-teal-800 text-white font-bold rounded-full border border-teal-600/60 transition-all duration-300 cursor-pointer text-sm sm:text-base"
              >
                <span>Contact DigLip7</span>
              </motion.button>
            </Link>
            <motion.a
              href="https://wa.me/919650608788?text=Hello%20DigLip7%20Team%2C%20I%20would%20like%20to%20discuss%20SaaS%20SEO%20Services%20in%20India."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-full transition-transform duration-200 flex items-center gap-2 text-sm sm:text-base"
            >
              <FaWhatsapp className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </motion.a>
          </div>

          <div className="pt-6 text-xs text-teal-300/80 flex flex-wrap justify-center gap-4 sm:gap-6 font-medium">
            <span>• No artificial ranking promises</span>
            <span>• Direct engineering &amp; product team QA</span>
            <span>• Transparent attribution reporting</span>
          </div>

          <div className="pt-2 text-xs text-teal-200/60">
            <span>
              Explore our full digital and engineering capabilities at{" "}
              <Link to="/" className="text-teal-300 font-semibold underline hover:text-white">
                DigLip7 home
              </Link>
              .
            </span>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default IndiaSaaSSEO;
