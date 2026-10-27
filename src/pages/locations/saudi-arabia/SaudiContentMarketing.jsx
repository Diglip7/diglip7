import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../../../components/SEO";
import heroImgSrc from "../../../images/content-marketing-seo.webp";
import processImg from "../../../images/marketing-process.webp";
import bilingualImg from "../../../images/localized-content-marketing.webp";
import performanceImg from "../../../images/marketing-performance.webp";
import {
  FileText,
  PenTool,
  Search,
  BookOpen,
  Layout,
  Languages,
  Briefcase,
  ShoppingBag,
  Share2,
  FileCheck,
  RefreshCw,
  TrendingUp,
  Sparkles,
  ArrowRight,
  CheckCircle,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  Home,
  Building2,
  GraduationCap,
  Store,
  Layers,
  Zap,
  ShieldCheck,
  HelpCircle,
  Eye,
  Repeat,
  Compass,
  Palette,
  Check,
  Calendar,
  BarChart3,
  Users,
  Target,
  MessageCircle,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

// Optional secondary image placeholders
const strategyImg = "";
const seoWritingImg = "";
const blogArticleImg = "";
const webCopyImg = "";
const b2bContentImg = "";
const ecommerceContentImg = "";
const socialPlanningImg = "";
const caseStudyImg = "";
const refreshImg = "";

// Clean Fallback & Image Container Component
const ContentImageSlot = ({
  src = "",
  fallbackSrc = "",
  alt = "",
  width = 1200,
  height = 675,
  aspect = "aspect-[16/9]",
  className = "",
  priority = false,
  fallbackIcon = FileText,
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
      className={`relative w-full rounded-2xl overflow-hidden bg-gradient-to-br from-purple-50/50 via-white to-pink-50/40 border border-purple-200/80 shadow-md flex items-center justify-center ${aspect} ${className}`}
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
        <div className="p-6 sm:p-8 text-center text-sm font-medium text-slate-800 select-none flex flex-col items-center justify-center gap-3 w-full h-full bg-gradient-to-b from-white/95 to-purple-50/60 border-2 border-dashed border-purple-300/80 rounded-2xl">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-100 to-pink-100 text-purple-700 flex items-center justify-center shadow-xs">
            <Icon className="w-7 h-7" />
          </div>
          <div className="space-y-1.5 max-w-sm">
            <span className="block leading-snug text-xs sm:text-sm font-bold text-slate-900">
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
// DATA STRUCTURES (Strictly Verbatim from Prompt)
// ---------------------------------------------------------------------------

const breadcrumbTrail = [
  { label: "Home", href: "/" },
  { label: "Saudi Arabia", href: "/saudi-arabia/seo-services" },
  { label: "Content Marketing Services", href: "/saudi-arabia/content-marketing-services/" },
];

const whyContentMattersPoints = [
  {
    title: "Educates customers and supports their purchase decisions",
    desc: "Provides clear, unbiased answers to key buyer questions before they ever reach out to sales.",
    icon: BookOpen,
  },
  {
    title: "Builds familiarity and credibility",
    desc: "Establishes your business as an authentic, dependable authority within the Saudi market.",
    icon: ShieldCheck,
  },
  {
    title: "Helps search engines understand what your website covers",
    desc: "Creates topical depth, semantic authority, and logical keyword architecture that search algorithms index accurately.",
    icon: Search,
  },
  {
    title: "Feeds your social media, email, and sales conversations",
    desc: "Produces foundational insights that can be repurposed across newsletters, social posts, and sales decks.",
    icon: Share2,
  },
];

const coreServices = [
  {
    id: "strategy-planning",
    title: "Content Strategy and Planning",
    desc: "We start with audience research, goals, competitor content, keyword research, and topic selection, then organize it into an editorial calendar prioritized by business value.",
    icon: Compass,
    highlights: [
      "Audience persona & search-intent mapping",
      "Topic cluster & content hierarchy planning",
      "Prioritized monthly editorial calendar",
      "Commercial value prioritization matrix",
    ],
    imgSrc: strategyImg,
    imgAlt: "Marketing team reviewing an editorial calendar and SEO content data",
    badge: "Strategic Blueprint",
  },
  {
    id: "seo-writing",
    title: "SEO Content Writing Services",
    desc: "Pages and articles written around search intent: service pages, landing pages, and informational resources with clear structure and relevant internal links. Helpful beats clever.",
    icon: Search,
    highlights: [
      "Search-intent focused structure & outlines",
      "Clean semantic H1-H3 heading hierarchies",
      "Contextual, relevant internal linking",
      "Natural keyword integration without stuffing",
    ],
    imgSrc: seoWritingImg,
    imgAlt: "SEO content writing services planning and search intent research",
    badge: "Organic Search Focus",
  },
  {
    id: "blog-article",
    title: "Blog Writing and Article Creation",
    desc: "Informative posts that answer real customer questions, cover relevant industry topics, and build depth on the subjects you want to be known for.",
    icon: PenTool,
    highlights: [
      "Deep answers to authentic customer queries",
      "Thought-leadership & industry analysis",
      "Readable, scannable formatting & takeaways",
      "Regular publishing schedules for domain depth",
    ],
    imgSrc: blogArticleImg,
    imgAlt: "Blog writing and informative article creation for Saudi businesses",
    badge: "Authority & Depth",
  },
  {
    id: "web-copywriting",
    title: "Website Content and Landing Page Copywriting",
    desc: "Homepage copy, service descriptions, industry pages, and calls to action that help visitors understand an offer before they enquire.",
    icon: Layout,
    highlights: [
      "Value proposition clarity on key landing pages",
      "Service & solution page copywriting",
      "Action-driving, friction-reducing CTAs",
      "User-friendly visual hierarchy & readability",
    ],
    imgSrc: webCopyImg,
    imgAlt: "Website content and landing page copywriting for corporate brands",
    badge: "Conversion Copywriting",
  },
  {
    id: "bilingual-content",
    title: "Arabic and English Content Marketing",
    desc: "Language should follow your audience. We aim to adapt content for Arabic or English rather than translate it word for word, with language support confirmed when we agree the scope.",
    icon: Languages,
    highlights: [
      "Culturally nuanced Arabic copywriting",
      "Nuanced English messaging for multinationals",
      "Right-to-left layout awareness & terminology",
      "Consistent brand voice across both languages",
    ],
    imgSrc: bilingualImg,
    imgAlt: "Arabic and English content planning workflow on a shared document",
    badge: "Bilingual Adaptation",
  },
  {
    id: "b2b-content",
    title: "B2B Content Marketing",
    desc: "Educational articles, case studies, service explainers, white papers, and decision-stage content for businesses with longer sales cycles.",
    icon: Briefcase,
    highlights: [
      "Long-cycle procurement stage content",
      "Decision-maker focused explainers & guides",
      "Professional insights & technical depth",
      "Credibility-first B2B frameworks",
    ],
    imgSrc: b2bContentImg,
    imgAlt: "B2B content marketing resources and whitepapers for corporate buyers",
    badge: "Enterprise & B2B",
  },
  {
    id: "ecommerce-content",
    title: "E-commerce Content Marketing",
    desc: "Category descriptions, buying guides, product-related education, and FAQs that help shoppers compare their options.",
    icon: ShoppingBag,
    highlights: [
      "Search-optimized category descriptions",
      "Practical buying guides & comparison charts",
      "Product-related education & care instructions",
      "FAQ sections that address hesitation at checkout",
    ],
    imgSrc: ecommerceContentImg,
    imgAlt: "E-commerce category descriptions and buying guides for online stores",
    badge: "E-commerce & Retail",
  },
  {
    id: "social-planning",
    title: "Social Media Content Planning",
    desc: "Core content, such as an article, adapted into platform-appropriate social posts and planned together rather than created in isolation.",
    icon: Share2,
    highlights: [
      "Repurposing long-form content into carousels",
      "Platform-specific social hooks & captions",
      "Connected organic distribution plans",
      "Consistent multi-channel narrative planning",
    ],
    imgSrc: socialPlanningImg,
    imgAlt: "Social media content planning and long-form asset distribution",
    badge: "Multi-Channel Reach",
  },
  {
    id: "case-studies-guides",
    title: "Case Studies, Guides, and Educational Resources",
    desc: "Evidence-based case studies and downloadable guides, used only when accurate information and approved client evidence exist.",
    icon: FileCheck,
    highlights: [
      "Verified evidence-backed client summaries",
      "In-depth downloadable industry guides",
      "Transparent project challenges & outcomes",
      "Strict avoidance of unverified claims",
    ],
    imgSrc: caseStudyImg,
    imgAlt: "Evidence-based case studies and educational guides for businesses",
    badge: "Verified Proof",
  },
  {
    id: "content-refresh",
    title: "Content Refresh and Optimization",
    desc: "A content audit reviews your existing pages for outdated information, unclear explanations, overlapping topics, weak internal links, and shifting search intent, so you improve what you have before adding more.",
    icon: RefreshCw,
    highlights: [
      "Existing page performance & relevance audit",
      "Outdated information updates & revisions",
      "Internal linking architecture rehabilitation",
      "Search intent realignment for decaying pages",
    ],
    imgSrc: refreshImg,
    imgAlt: "Content refresh audit reviewing existing website pages and rankings",
    badge: "Content Audit & Refresh",
  },
];

const processSteps = [
  {
    step: "Step 01",
    title: "Understand Your Business and Audience",
    desc: "We review your objectives, customers, offerings, coverage area, brand voice, and the actions you want visitors to take.",
    icon: Users,
  },
  {
    step: "Step 02",
    title: "Research Keywords and Search Intent",
    desc: "We identify topics, information needs, and commercial searches. Search volume estimates are data to verify with suitable tools, not facts to assume.",
    icon: Search,
  },
  {
    step: "Step 03",
    title: "Develop a Content Strategy",
    desc: "We build a prioritized plan based on audience needs, existing website content, available resources, and your objectives.",
    icon: Compass,
  },
  {
    step: "Step 04",
    title: "Create and Review Content",
    desc: "Drafting, editing, fact-checking, brand alignment, and SEO review, plus subject-matter review where the topic needs it.",
    icon: PenTool,
  },
  {
    step: "Step 05",
    title: "Publish and Distribute",
    desc: "We publish on suitable channels and adapt content for distribution where relevant. The channels we manage are agreed in the scope.",
    icon: Share2,
  },
  {
    step: "Step 06",
    title: "Measure and Improve",
    desc: "We review relevant metrics and use what we learn to update future content. Outcomes depend on many factors and can take time.",
    icon: BarChart3,
  },
];

const industrySolutions = [
  {
    title: "Real Estate and Property Businesses",
    tagline: "Area Guides & Transparent Project Resources",
    desc: "Area guides, property buying information, project explainers, neighbourhood resources, and FAQs. Helping prospective buyers and investors evaluate developments with genuine, factual information.",
    icon: Building2,
    deliverables: [
      "Detailed city & neighbourhood guides",
      "Project explainers & construction timeline updates",
      "Buyer guidebooks explaining legal & purchase steps",
      "Authentic community amenity overviews",
    ],
  },
  {
    title: "Healthcare and Clinics",
    tagline: "Patient Education & Practitioner-Reviewed Guidance",
    desc: "Clear patient education and service explanations, with accurate information and qualified review where needed. No treatment guarantees or unsupported health claims.",
    icon: GraduationCap,
    deliverables: [
      "Plain-language condition & treatment overviews",
      "Qualified practitioner reviewed medical guides",
      "Transparent clinic visit preparation FAQs",
      "Strict compliance with Saudi healthcare advertising codes",
    ],
  },
  {
    title: "Technology and SaaS Companies",
    tagline: "Technical Clarity & Decision-Maker Use Cases",
    desc: "Product explainers, implementation guides, comparison resources, and use cases for decision-makers evaluating enterprise software.",
    icon: Zap,
    deliverables: [
      "Feature walkthroughs & workflow explainers",
      "Detailed implementation & security documentation",
      "Comparison tables against legacy workflows",
      "Clear use-case studies for IT & operations leaders",
    ],
  },
  {
    title: "E-commerce and Retail",
    tagline: "Informed Shopping & Category Guidance",
    desc: "Category guides, product education, seasonal content planning, and answers to the questions that shape purchases before checkout.",
    icon: ShoppingBag,
    deliverables: [
      "In-depth category shopping guides",
      "Material, sizing & compatibility explainers",
      "Seasonal buying calendars & holiday gift guides",
      "Checkout-assisting shipping & returns FAQs",
    ],
  },
  {
    title: "Professional and B2B Services",
    tagline: "Expertise-Led Insights & Verified Evidence",
    desc: "Expertise-led articles, service guides, and case studies backed by verified evidence, helping corporate buyers assess capability.",
    icon: Briefcase,
    deliverables: [
      "Regulatory & commercial advisory articles",
      "Corporate procurement service explainers",
      "Verified project case studies with concrete scope",
      "Authoritative industry whitepapers & commentary",
    ],
  },
];

const localizationPillars = [
  "Audience and customer research",
  "Arabic and English language choices",
  "Relevant Saudi business terminology",
  "Culturally appropriate messaging and imagery",
  "Industry-specific customer questions",
  "Accurate regional information and applicable regulations",
  "Search intent that differs by location and language",
];

const seoContentPillars = [
  {
    title: "Keyword and search-intent research",
    desc: "Aligning pages directly with the real problems, questions, and terminology users type into search engines.",
  },
  {
    title: "Helpful, original content",
    desc: "Writing unique, value-additive material that answers visitor intent better than generic search results.",
  },
  {
    title: "A logical heading structure",
    desc: "Organizing pages with clear H1, H2, and H3 tags so readers and search engine crawlers can scan easily.",
  },
  {
    title: "Descriptive titles and meta descriptions",
    desc: "Crafting accurate page snippets that set truthful expectations and improve click-through from search.",
  },
  {
    title: "Contextual internal links",
    desc: "Connecting related resources and service pages with descriptive anchor text to build logical site architecture.",
  },
  {
    title: "Relevant images with descriptive alt text",
    desc: "Enhancing content with meaningful visual aids paired with truthful, screen-reader friendly alt attributes.",
  },
  {
    title: "Updates based on evidence",
    desc: "Revisiting underperforming or outdated pages systematically using Google Search Console and analytics data.",
  },
  {
    title: "Technical accessibility and indexability",
    desc: "Ensuring pages load rapidly on mobile networks and present clean, indexable HTML to search engines.",
  },
];

const performanceMetrics = [
  {
    title: "Organic impressions and clicks",
    desc: "Tracking the growth of search visibility and organic visits over time via Google Search Console.",
    icon: Eye,
  },
  {
    title: "Relevant keyword visibility",
    desc: "Monitoring search rankings for primary commercial and informational queries that match your scope.",
    icon: Search,
  },
  {
    title: "Engagement with key landing pages",
    desc: "Observing scroll depth, time on page, and reader navigation paths through core content sections.",
    icon: BookOpen,
  },
  {
    title: "Organic visits to important pages",
    desc: "Measuring how effectively educational blog articles guide visitors toward dedicated service pages.",
    icon: ArrowRight,
  },
  {
    title: "Newsletter sign-ups or other meaningful conversions",
    desc: "Recording email list subscriptions, guide downloads, or resource access where tracking is active.",
    icon: FileText,
  },
  {
    title: "Qualified enquiries, where tracking is in place",
    desc: "Tracking consultation requests, contact form submissions, and direct sales calls from content readers.",
    icon: Target,
  },
  {
    title: "Assisted conversions, where attribution data is reliable",
    desc: "Evaluating content's role across multi-touch customer buying journeys using accurate analytics data.",
    icon: TrendingUp,
  },
  {
    title: "Content production and update progress",
    desc: "Measuring editorial calendar execution, publishing consistency, and content refresh milestones.",
    icon: Calendar,
  },
];

const whyChoosePillars = [
  {
    title: "Content aligned with your business objectives",
    desc: "Every article, landing page, and guide serves a clear commercial role in your customer acquisition journey.",
  },
  {
    title: "Audience-focused topic planning",
    desc: "We focus on topics your real customers actually search for and ask about, not generic filler copy.",
  },
  {
    title: "SEO-aware content structure",
    desc: "Technical SEO foundations, semantic markup, and crawlable architecture built into every draft.",
  },
  {
    title: "Clear communication and review processes",
    desc: "Transparent draft cycles, collaborative review, and direct feedback without confusing technical jargon.",
  },
  {
    title: "Content tailored to your industry and audience",
    desc: "Nuanced research into Saudi market terminology, industry regulations, and regional buyer expectations.",
  },
  {
    title: "Measurement and ongoing refinement",
    desc: "Systematic performance reviews to update existing pages and refine upcoming content topics based on evidence.",
  },
];

const packageEngagementOptions = [
  {
    title: "Content strategy and planning",
    desc: "Comprehensive audience research, competitor content analysis, keyword mapping, and a prioritized editorial calendar.",
    badge: "Foundation",
  },
  {
    title: "Monthly blog and article production",
    desc: "Scheduled creation of high-value, SEO-optimized articles answering core customer questions and building topical depth.",
    badge: "Ongoing Growth",
  },
  {
    title: "Website and landing page content",
    desc: "Complete copywriting for homepages, service pages, industry solutions, and conversion-focused landing pages.",
    badge: "Core Assets",
  },
  {
    title: "Content audits and optimization",
    desc: "Systematic review of existing website content to remove decay, eliminate overlap, and improve search rankings.",
    badge: "Site Health",
  },
  {
    title: "Ongoing planning and performance reviews",
    desc: "Regular monthly or quarterly reviews analyzing search console data, traffic trends, and next-quarter priorities.",
    badge: "Continuous Refinement",
  },
];

const faqs = [
  {
    q: "What is included in content marketing services in Saudi Arabia?",
    a: "Typically strategy, keyword research, content creation, optimization, publishing support, and reporting, depending on the agreed scope.",
  },
  {
    q: "How can content marketing help a business in Saudi Arabia?",
    a: "It can answer customer questions, build credibility, support organic visibility, and give sales conversations useful material. Results depend on audience, quality, competition, and consistency.",
  },
  {
    q: "How much do content marketing services cost in Saudi Arabia?",
    a: "It varies with content volume, complexity, research, language needs, and review cycles. We don't quote fixed prices without understanding your requirements.",
  },
  {
    q: "How long does content marketing take to show results?",
    a: "Content builds gradually. Timing depends on competition, existing website strength, and publishing consistency, so we can't promise a fixed timeline.",
  },
  {
    q: "What is the difference between content marketing and SEO?",
    a: "Content marketing creates useful content for audiences. SEO helps that content be found. They work best together.",
  },
  {
    q: "Can content marketing support lead generation for B2B businesses?",
    a: "It can support lead generation by educating buyers and demonstrating expertise, but lead volume and quality can't be guaranteed.",
  },
  {
    q: "Do Saudi businesses need Arabic and English content?",
    a: "Not always. It depends on your audience, your industry, and your ability to maintain accurate content in each language.",
  },
  {
    q: "What types of content work well for e-commerce companies?",
    a: "Category descriptions, buying guides, product education, and FAQs that help customers compare options.",
  },
  {
    q: "How often should a business publish new content?",
    a: "Consistency matters more than a fixed number. Frequency should fit your resources and goals, and quality shouldn't be sacrificed for volume.",
  },
  {
    q: "How do you measure content marketing performance?",
    a: "Against your original objective, using metrics such as organic clicks, key page engagement, and qualified enquiries where tracking exists.",
  },
  {
    q: "Can existing website content be improved instead of creating new pages?",
    a: "Yes. A content audit can reveal outdated, overlapping, or underperforming pages that are worth improving before you create new ones.",
  },
  {
    q: "How can a business get started with DigLip7?",
    a: "Contact DigLip7 to discuss your goals, audience, language needs, and current content, and we'll suggest a practical next step.",
  },
];

// ---------------------------------------------------------------------------
// MAIN COMPONENT
// ---------------------------------------------------------------------------

const SaudiContentMarketing = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [faqSearch, setFaqSearch] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState(0);

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.q.toLowerCase().includes(faqSearch.toLowerCase()) ||
      faq.a.toLowerCase().includes(faqSearch.toLowerCase())
  );

  const pageUrl = "https://diglip7.com/saudi-arabia/content-marketing-services/";

  // Structured Data (JSON-LD) Schemas adhering strictly to technical SEO specifications
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://diglip7.com/#organization",
      name: "DigLip7",
      legalName: "DigLip7 Tech Private Limited",
      url: "https://diglip7.com/",
      logo: "https://diglip7.com/logo.png",
      description:
        "DigLip7 is a digital marketing company offering SEO, content marketing, paid advertising, web design, and related services.",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "info@diglip7.com",
        telephone: "+919650608788",
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
      "@type": "WebSite",
      "@id": "https://diglip7.com/#website",
      name: "DigLip7",
      url: "https://diglip7.com/",
      publisher: {
        "@id": "https://diglip7.com/#organization",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Content Marketing Services in Saudi Arabia | DigLip7",
      description:
        "Explore content marketing services in Saudi Arabia with DigLip7. Plan useful, SEO-focused content to strengthen brand visibility and support business growth.",
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
      name: "Content Marketing Services in Saudi Arabia",
      serviceType: "Content marketing",
      description:
        "Content strategy, SEO content writing, blog and website copywriting, content audits, and performance measurement for businesses in Saudi Arabia, depending on the agreed scope.",
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
          "Small and medium-sized businesses, startups, B2B companies, e-commerce brands, real estate companies, healthcare businesses, technology companies, and enterprises",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Content marketing services",
        itemListElement: [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Content strategy and planning" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO content writing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Blog writing and article creation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website content and landing page copywriting" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Arabic and English content marketing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "B2B content marketing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "E-commerce content marketing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social media content planning" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Case studies, guides, and educational resources" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Content refresh and optimization" } },
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
          name: "Content Marketing Services",
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
    <div className="min-h-screen bg-white text-slate-900 selection:bg-purple-500 selection:text-white pt-20">
      {/* Dynamic SEO Meta, Hreflang, Canonical, OpenGraph, Twitter, and Schema */}
      <SEO
        title="Content Marketing Services in Saudi Arabia | DigLip7"
        exactTitle={true}
        description="Explore content marketing services in Saudi Arabia with DigLip7. Plan useful, SEO-focused content to strengthen brand visibility and support business growth."
        canonical={pageUrl}
        robots="index, follow, max-image-preview:large"
        hreflangs={[
          { hreflang: "en-sa", href: pageUrl },
          { hreflang: "x-default", href: pageUrl },
        ]}
        ogType="website"
        ogLocale="en_SA"
        ogTitle="Content Marketing Services in Saudi Arabia | DigLip7"
        ogDescription="Plan useful, SEO-focused content to strengthen brand visibility and support business growth in Saudi Arabia."
        ogUrl={pageUrl}
        ogImage="https://diglip7.com/images/content-marketing-services-saudi-arabia.webp"
        ogImageAlt="Content marketing strategy and SEO content planning for businesses in Saudi Arabia"
        twitterCard="summary_large_image"
        twitterTitle="Content Marketing Services in Saudi Arabia | DigLip7"
        twitterDescription="Plan useful, SEO-focused content to strengthen brand visibility and support business growth in Saudi Arabia."
        twitterImage="https://diglip7.com/images/content-marketing-services-saudi-arabia.webp"
        twitterImageAlt="Content marketing strategy and SEO content planning for businesses in Saudi Arabia"
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

      {/* Hero Section (Light Palette & Simple Image Section Div) */}
      <header className="relative overflow-hidden bg-gradient-to-r from-purple-50/60 via-pink-50/40 to-indigo-50/50 border-b border-purple-100 py-16 sm:py-20 lg:py-24">
        {/* Subtle decorative background blur shapes */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-800 border border-purple-200 text-xs sm:text-sm font-semibold tracking-wide">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span>Content Marketing Services &bull; Saudi Arabia</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 leading-tight">
                Content Marketing Services in Saudi Arabia{" "}
                <span className="block mt-2 bg-gradient-to-r from-purple-700 via-pink-600 to-indigo-700 bg-clip-text text-transparent">
                  for Business Growth
                </span>
              </h1>

              {/* Verbatim Intro Paragraphs */}
              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0 text-left">
                <p>
                  Most buyers do their homework before they ever speak to a salesperson. They search, compare, read, and quietly build a shortlist. The businesses that answer their questions clearly, in the right language and at the right moment, tend to make that shortlist. That's what a good <strong>Content Marketing Service in Saudi Arabia</strong> is for: turning what you know into resources people actually find useful.
                </p>
                <p>
                  <strong className="text-purple-950 font-semibold">DigLip7 Tech Private Limited</strong> is a digital marketing company that can help you plan, create, and improve content that supports your online visibility and your sales conversations. What you need will depend on your industry, audience, language, and goals. A real estate developer, a clinic, and a SaaS company won't publish the same things, and they shouldn't.
                </p>
                <p>
                  If you already have a content idea, or just a nagging sense that your website isn't doing enough,{" "}
                  <Link
                    to="/contact"
                    className="text-purple-700 font-semibold underline hover:text-purple-900 transition-colors"
                  >
                    Discuss Your Content Marketing Needs
                  </Link>{" "}
                  with our team.
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
                    className="group px-7 py-4 bg-purple-600 hover:bg-purple-700 text-white text-sm sm:text-base font-semibold rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Discuss Your Content Marketing Needs</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>

                <a
                  href="https://wa.me/919650608788?text=Hello%20DigLip7%20Team%2C%20I%20would%20like%20to%20discuss%20Content%20Marketing%20services%20in%20Saudi%20Arabia."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    className="px-6 py-4 bg-white text-purple-900 border-2 border-purple-600 text-sm sm:text-base font-semibold rounded-full shadow-sm hover:bg-purple-50 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaWhatsapp className="w-5 h-5 text-emerald-600" />
                    <span>WhatsApp Consultation</span>
                  </motion.button>
                </a>
              </motion.div>

              {/* Consultation Teaser */}
              <div className="text-xs text-gray-500 pt-1">
                Want to talk through what your content needs to accomplish?{" "}
                <Link
                  to="/contact"
                  className="text-purple-700 underline font-semibold hover:text-purple-900 transition-colors"
                >
                  Request a consultation
                </Link>
                .
              </div>
            </div>

            {/* Right Column: Clean Simple Image Section Div (No extra mockup clutter!) */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="w-full max-w-lg">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white">
                  <ContentImageSlot
                    src={heroImgSrc}
                    fallbackSrc="/images/content-marketing-seo.webp"
                    alt="Content marketing strategy and SEO content planning for businesses in Saudi Arabia"
                    aspect="aspect-[16/10]"
                    priority={true}
                    fallbackIcon={FileText}
                    badgeText="Content Strategy & Planning"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Section 1: What Is Content Marketing and Why Does It Matter in Saudi Arabia? */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <span className="px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-800 text-xs sm:text-sm font-semibold tracking-wide">
              Strategic Value
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              What Is Content Marketing and Why Does It Matter in Saudi Arabia?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Content marketing means creating and sharing useful, audience-focused material, such as articles, guides, service pages, videos, and case studies, so people understand your offer and trust you enough to act. It works over time, not overnight. Done well, it:
            </p>
          </div>

          {/* 4 Outcome Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {whyContentMattersPoints.map((point, idx) => {
              const Icon = point.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-gray-50 border border-gray-200 hover:border-purple-300 hover:bg-purple-50/20 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{point.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{point.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Hypothetical Example & Saudi Context Box */}
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="p-6 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-950 text-sm leading-relaxed space-y-3">
              <div className="flex items-center gap-2 font-bold text-amber-900 text-base">
                <GraduationCap className="w-5 h-5 text-amber-700" />
                <span>Hypothetical Healthcare Example</span>
              </div>
              <p className="italic">
                Here's a hypothetical example, not a client project. A Riyadh-based clinic publishes plain-language guides to common treatments, each reviewed by a qualified practitioner. Patients arrive better informed, ask better questions, and find it easier to choose.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-purple-50/60 border border-purple-200 text-slate-800 text-sm sm:text-base leading-relaxed space-y-3">
              <h4 className="font-bold text-purple-950 text-base flex items-center gap-2">
                <Languages className="w-5 h-5 text-purple-700" />
                <span>Context Matters in the Saudi Market</span>
              </h4>
              <p>
                In Saudi Arabia, context matters. Local terminology, cultural expectations, and language preferences all shape whether content feels relevant or generic. What counts is knowing who your customers are and how they talk about what you sell.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Content Marketing Services in Saudi Arabia */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-800 text-xs sm:text-sm font-semibold tracking-wide">
              Complete Scope
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Content Marketing Services in Saudi Arabia
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Here are the content marketing services we can plan around your needs. Scope is agreed project by project, and not every service suits every business.
            </p>
          </div>

          {/* 10 Core Services Grid with Clean Image Slots */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="rounded-3xl p-6 sm:p-7 bg-white border border-gray-200 shadow-xs flex flex-col justify-between hover:shadow-lg hover:border-purple-300 transition-all group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold text-purple-800 bg-purple-50 border border-purple-200/80 px-2.5 py-1 rounded-full">
                        {service.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">{service.desc}</p>

                    {/* Highlights */}
                    <div className="space-y-2 pt-2 border-t border-gray-100">
                      {service.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: Our Content Marketing Process */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-800 text-xs sm:text-sm font-semibold tracking-wide">
              Structured Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Content Marketing Process
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Here's how a typical project runs. The depth of each stage scales with your project, so a small business and a large enterprise won't follow identical paths.
            </p>
          </div>

          {/* 6 Sequential Steps Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl p-6 sm:p-7 bg-gray-50 border border-gray-200 relative flex flex-col justify-between hover:bg-white hover:border-purple-300 hover:shadow-lg transition-all"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black uppercase tracking-widest text-purple-700 bg-purple-100 px-3 py-1 rounded-full">
                        {step.step}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shadow-xs">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">{step.title}</h3>

                    <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-gray-200 text-xs text-slate-500 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Transparent Milestone Approval</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Process Workflow Image Container */}
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white">
              <ContentImageSlot
                src={processImg}
                fallbackSrc="/images/marketing-process.webp"
                alt="Content workflow from research and drafting to review, publishing, and optimization"
                aspect="aspect-[16/9]"
                fallbackIcon={Repeat}
                badgeText="Process Workflow Container"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Content Marketing for Different Industries in Saudi Arabia */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-800 text-xs sm:text-sm font-semibold tracking-wide">
              Industry Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Content Marketing for Different Industries in Saudi Arabia
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              A content plan should reflect the industry, the buying journey, and any regulations that apply. The examples below show how content can be applied, not claims about past projects.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Industry Selector Tabs */}
            <div className="lg:col-span-4 space-y-3">
              {industrySolutions.map((ind, idx) => {
                const Icon = ind.icon;
                const isSelected = selectedIndustry === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedIndustry(idx)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${isSelected
                      ? "bg-purple-600 text-white border-purple-600 shadow-md translate-x-1"
                      : "bg-white border-gray-200 text-slate-700 hover:bg-purple-50/50 hover:border-purple-200"
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${isSelected ? "bg-white/20 text-white" : "bg-purple-100 text-purple-700"
                          }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs sm:text-sm font-bold block leading-snug">
                          {ind.title}
                        </span>
                        <span
                          className={`text-[11px] block ${isSelected ? "text-purple-100" : "text-slate-500"
                            }`}
                        >
                          {ind.tagline}
                        </span>
                      </div>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? "text-white translate-x-1" : "text-gray-400"
                        }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right Column: Active Industry Details Card */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedIndustry}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-3xl p-6 sm:p-8 bg-white border border-purple-200 shadow-md space-y-6"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-gray-200">
                    <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold uppercase tracking-wider">
                      {industrySolutions[selectedIndustry].tagline}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      Tailored Approach &bull; Saudi Market
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    {industrySolutions[selectedIndustry].title}
                  </h3>

                  <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 text-slate-700 leading-relaxed text-base">
                    {industrySolutions[selectedIndustry].desc}
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="space-y-3 pt-2">
                    <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                      Recommended Focus & Deliverables:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {industrySolutions[selectedIndustry].deliverables.map((item, i) => (
                        <div
                          key={i}
                          className="p-3.5 rounded-xl bg-purple-50/70 border border-purple-100 flex items-center gap-2.5 text-xs text-slate-800 font-medium"
                        >
                          <CheckCircle className="w-4 h-4 text-purple-600 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-4">
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

      {/* Section 5: Why Businesses Need a Localized Content Marketing Strategy (Clean Simple Image Div!) */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-purple-50/70 via-pink-50/40 to-white text-slate-900 border-b border-purple-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-800 border border-purple-200 text-xs sm:text-sm font-semibold tracking-wide">
                Cultural & Regional Intelligence
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-slate-900">
                Why Businesses Need a Localized Content Marketing Strategy
              </h2>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Localization is more than adding the words Saudi Arabia to generic copy. It means paying attention to:
              </p>

              {/* 7 Localization Checklist Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {localizationPillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white border border-purple-200/90 shadow-xs flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-800"
                  >
                    <CheckCircle className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>{pillar}</span>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-2xl bg-white border border-purple-200 shadow-xs space-y-2 text-sm text-slate-700 leading-relaxed">
                <p>
                  Two businesses in the same city can need very different content, because their customers ask very different questions. Riyadh, Jeddah, Dammam, and other locations matter when they match the audience you're trying to reach, so we mention them only when they're relevant.
                </p>
              </div>

              {/* City Targets */}
              <div className="pt-1 flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                <span className="px-3 py-1.5 rounded-lg bg-white border border-purple-200 shadow-xs">
                  Riyadh Corporate & Financial Hubs
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-white border border-purple-200 shadow-xs">
                  Jeddah Commercial & Trade Port
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-white border border-purple-200 shadow-xs">
                  Dammam & Eastern Province Industrial
                </span>
              </div>
            </div>

            {/* Right Column: Clean Simple Image Section Div (No extra mockups or toggle buttons!) */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="w-full max-w-lg">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white">
                  <ContentImageSlot
                    src={bilingualImg}
                    fallbackSrc="/images/localized-content-marketing.webp"
                    alt="Localized content marketing architecture covering Riyadh, Jeddah, Dammam, and bilingual Arabic and English strategy"
                    aspect="aspect-[16/10]"
                    fallbackIcon={Languages}
                    badgeText="Saudi Localization Strategy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: How SEO and Content Marketing Work Together */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <span className="px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-800 text-xs sm:text-sm font-semibold tracking-wide">
              Shared Foundation
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              How SEO and Content Marketing Work Together
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              SEO and content marketing share the same foundation. Together they involve:
            </p>
          </div>

          {/* 8 Shared Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {seoContentPillars.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-gray-50 border border-gray-200 hover:border-purple-300 hover:bg-purple-50/20 transition-all space-y-2"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 shrink-0" />
                  <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Ranking Honesty Callout */}
          <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-amber-50/80 border border-amber-200 text-center text-sm text-amber-950 leading-relaxed space-y-2">
            <div className="flex items-center justify-center gap-2 font-bold text-amber-900">
              <ShieldCheck className="w-5 h-5 text-amber-700" />
              <span>Realistic Search Ranking Perspective</span>
            </div>
            <p>
              Publishing alone doesn't guarantee rankings. Visibility also depends on competition, website quality, technical factors, relevance, and authority.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7: How We Measure Content Marketing Performance */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-800 text-xs sm:text-sm font-semibold tracking-wide">
              Accountability & Data
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              How We Measure Content Marketing Performance
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Measurement should tie back to your original objective. Depending on your goals, we may review:
            </p>
          </div>

          {/* 8 Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {performanceMetrics.map((metric, idx) => {
              const Icon = metric.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-gray-200 shadow-xs hover:border-purple-300 hover:shadow-md transition-all space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{metric.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{metric.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Measurement Image Container & Analytical Honesty Note */}
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white">
              <ContentImageSlot
                src={performanceImg}
                fallbackSrc="/images/marketing-performance.webp"
                alt="DigLip7 content marketing performance dashboard showing organic impressions, visibility, conversions, and updates"
                aspect="aspect-[16/9]"
                fallbackIcon={BarChart3}
                badgeText="Performance & Analytics Reporting"
              />
            </div>

            <div className="p-6 rounded-2xl bg-white border border-purple-200 text-center space-y-2 shadow-xs">
              <h4 className="font-bold text-purple-950 text-base">
                Honest Attribution & Realistic Reporting
              </h4>
              <p className="text-sm text-slate-700 leading-relaxed">
                No single metric tells the whole story, and we won't quote results we haven't earned.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Why Choose DigLip7 for Content Marketing Services in Saudi Arabia? */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-800 text-xs sm:text-sm font-semibold tracking-wide">
              Trust & Fit
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Choose DigLip7 for Content Marketing Services in Saudi Arabia?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              We'd rather describe how we work than make big claims. Our approach centres on:
            </p>
          </div>

          {/* 6 Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {whyChoosePillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-gray-50 border border-gray-200 hover:border-purple-300 hover:bg-purple-50/20 transition-all space-y-2"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 shrink-0" />
                  <h3 className="text-base font-bold text-slate-900">{pillar.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-7">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Honest Fit Note */}
          <div className="max-w-3xl mx-auto p-6 rounded-2xl bg-purple-50/80 border border-purple-200 text-center space-y-2">
            <p className="text-sm font-medium text-purple-950 leading-relaxed">
              A first conversation will show whether we're the right fit, and we'll tell you if we aren't.
            </p>
          </div>
        </div>
      </section>

      {/* Section 9: Content Marketing Packages and Engagement Options */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-800 text-xs sm:text-sm font-semibold tracking-wide">
              Engagement Scopes
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Content Marketing Packages and Engagement Options
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              The right scope depends on content volume, complexity, research needs, language, review cycles, and publishing support. Options we can discuss include:
            </p>
          </div>

          {/* 5 Engagement Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {packageEngagementOptions.map((pkg, idx) => (
              <div
                key={idx}
                className="rounded-3xl p-6 sm:p-7 bg-white border border-gray-200 shadow-xs hover:border-purple-300 hover:shadow-lg transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-purple-800 bg-purple-50 border border-purple-200 px-2.5 py-1 rounded-full">
                    {pkg.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{pkg.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{pkg.desc}</p>
              </div>
            ))}
          </div>

          {/* Transparent Tailored Proposal Note */}
          <div className="max-w-3xl mx-auto p-6 rounded-2xl bg-white border border-purple-200 text-center space-y-2 shadow-xs">
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Because every project differs, we don't publish fixed prices or packages. Ask for a tailored proposal and we'll scope it around your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Section 10: Frequently Asked Questions About Content Marketing in Saudi Arabia */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <span className="px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-800 text-xs sm:text-sm font-semibold tracking-wide">
              Questions & Answers
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions About Content Marketing in Saudi Arabia
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Clear, transparent answers to practical questions about our content marketing services.
            </p>
          </div>

          {/* Search Input for FAQs */}
          <div className="relative mb-8 max-w-xl mx-auto">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={faqSearch}
              onChange={(e) => setFaqSearch(e.target.value)}
              placeholder="Search content marketing questions..."
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-sm text-slate-900 shadow-xs"
            />
          </div>

          {/* FAQ Accordion List (All 12 FAQs verbatim) */}
          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl bg-gray-50 border border-gray-200 overflow-hidden shadow-xs transition-colors hover:border-purple-200"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                      className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    >
                      <span className="text-base sm:text-lg font-bold text-slate-900">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-purple-600 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                          }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm text-slate-700 leading-relaxed border-t border-gray-200/80 pt-4 bg-white">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="text-center py-8 text-gray-500 text-sm">
                No matching questions found for "{faqSearch}".
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section 11: Discuss Your Content Marketing Goals with DigLip7 (Final High-Contrast CTA) */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-purple-100 via-pink-50 to-indigo-100 border-t border-purple-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <span className="px-3.5 py-1.5 rounded-full bg-purple-200 text-purple-950 text-xs sm:text-sm font-semibold tracking-wide">
              Ready for Next Steps?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
              Discuss Your Content Marketing Goals with DigLip7
            </h2>
            <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed">
              A planned approach to content helps you create genuinely useful resources, support organic discovery, and explain your services more clearly. The first step is a conversation about your goals, audience, preferred language, industry, and content needs.
            </p>
            <p className="text-sm sm:text-base text-slate-700 max-w-2xl mx-auto leading-relaxed">
              Looking for a Content Marketing Service in Saudi Arabia that starts with your business, not a template?{" "}
              <Link
                to="/contact"
                className="text-purple-800 underline font-bold hover:text-purple-950"
              >
                Request a Content Marketing Consultation
              </Link>{" "}
              and tell us what you'd like to achieve.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
            <Link to="/contact">
              <motion.button
                className="group px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white text-base font-semibold rounded-full shadow-xl hover:shadow-purple-600/30 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>Request a Content Marketing Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>

            <a
              href="https://wa.me/919650608788?text=Hello%20DigLip7%20Team%2C%20I%20would%20like%20to%20discuss%20Content%20Marketing%20Services%20in%20Saudi%20Arabia."
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                className="px-8 py-4 bg-white text-slate-900 border-2 border-emerald-600 text-base font-semibold rounded-full shadow-md hover:bg-emerald-50/50 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <FaWhatsapp className="w-5 h-5 text-emerald-600" />
                <span>WhatsApp Consultation</span>
              </motion.button>
            </a>
          </div>

          {/* Related Cross-Location & Core Digital Services Links */}
          <div className="pt-8 border-t border-purple-200/80">
            <span className="text-xs text-slate-600 font-semibold uppercase tracking-wider block mb-3">
              Explore More Saudi Arabia & Digital Marketing Services
            </span>
            <div className="flex flex-wrap justify-center gap-3 text-xs sm:text-sm font-semibold">
              <Link
                to="/saudi-arabia/seo-services"
                className="px-4 py-2 rounded-xl bg-white border border-purple-200 text-purple-900 hover:bg-purple-50 transition-colors shadow-xs"
              >
                SEO Services Saudi Arabia
              </Link>
              <Link
                to="/saudi-arabia/ppc-services/"
                className="px-4 py-2 rounded-xl bg-white border border-purple-200 text-purple-900 hover:bg-purple-50 transition-colors shadow-xs"
              >
                PPC Services Saudi Arabia
              </Link>
              <Link
                to="/saudi-arabia/social-media-marketing/"
                className="px-4 py-2 rounded-xl bg-white border border-purple-200 text-purple-900 hover:bg-purple-50 transition-colors shadow-xs"
              >
                Social Media Marketing Saudi Arabia
              </Link>
              <Link
                to="/saudi-arabia/web-design/"
                className="px-4 py-2 rounded-xl bg-white border border-purple-200 text-purple-900 hover:bg-purple-50 transition-colors shadow-xs"
              >
                Web Design Saudi Arabia
              </Link>
              <Link
                to="/digital-market"
                className="px-4 py-2 rounded-xl bg-white border border-purple-200 text-purple-900 hover:bg-purple-50 transition-colors shadow-xs"
              >
                Digital Marketing Services
              </Link>
              <Link
                to="/saudi-arabia/online-reputation-management/"
                className="px-4 py-2 rounded-xl bg-white border border-purple-200 text-purple-900 hover:bg-purple-50 transition-colors shadow-xs"
              >
                Reputation Management Saudi Arabia
              </Link>
              <Link
                to="/contact"
                className="px-4 py-2 rounded-xl bg-purple-600 text-white hover:bg-purple-700 transition-colors shadow-xs"
              >
                Contact Page
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SaudiContentMarketing;
