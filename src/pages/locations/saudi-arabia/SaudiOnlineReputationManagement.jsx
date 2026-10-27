import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../../../components/SEO";
import transparentSeoImg from "../../../images/transparent-seo.webp";
import transparentWorkflowImg from "../../../images/transparent-workflow.webp";
import clinicsMedicalImg from "../../../images/clinics-medical.webp";
import {
  ShieldCheck,
  ShieldAlert,
  Star,
  MessageSquare,
  Search,
  Eye,
  AlertTriangle,
  CheckCircle,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Home,
  Building2,
  Sparkles,
  Compass,
  FileCheck,
  RefreshCw,
  BarChart3,
  Users,
  Target,
  MessageCircle,
  Check,
  XCircle,
  Info,
  TrendingUp,
  Globe,
  ShoppingBag,
  Stethoscope,
  Layers,
  Languages,
  MapPin,
  SlidersHorizontal,
  Scale,
  Activity,
  Award,
} from "lucide-react";
import { FaWhatsapp, FaGoogle } from "react-icons/fa";

// Image Paths - Connected for sequence view
const heroImgSrc = transparentSeoImg;
const heroImgFallback = "/images/transparent-seo.webp";

const auditImgSrc = transparentWorkflowImg;
const auditImgFallback = "/images/transparent-workflow.webp";

const responseImgSrc = clinicsMedicalImg;
const responseImgFallback = "/images/clinics-medical.webp";

const reportingImgSrc = "";

// Image Section Component: Renders real <img> when src is present, with fallback placeholder
const ORMImageSlot = ({
  src = "",
  fallbackSrc = "",
  alt = "",
  width = 1200,
  height = 675,
  aspect = "aspect-[16/9]",
  className = "",
  priority = false,
  fallbackIcon = ShieldCheck,
  badgeText = "",
  objectFit = "object-cover",
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const Icon = fallbackIcon;

  // React to prop changes (e.g. dynamic sector switching or hot reload)
  React.useEffect(() => {
    setCurrentSrc(src);
    setFailed(false);
    setLoaded(false);
  }, [src]);

  const handleError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    } else {
      setFailed(true);
    }
  };

  const hasImage = Boolean(currentSrc) && !failed;

  return (
    <div
      className={`relative w-full rounded-2xl overflow-hidden bg-gradient-to-br from-teal-50/70 via-white to-indigo-50/60 border border-teal-200/90 shadow-md flex items-center justify-center ${aspect} ${className}`}
    >
      {hasImage ? (
        <>
          <img
            src={currentSrc}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
            decoding="async"
            onLoad={() => setLoaded(true)}
            onError={handleError}
            className={`w-full h-full ${objectFit} transition-opacity duration-300 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          />
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-100/60 backdrop-blur-xs">
              <div className="w-8 h-8 border-2 border-teal-500 border-t-transparent rounded-full animate-spin" />
            </div>
          )}
        </>
      ) : (
        <div className="p-6 sm:p-8 text-center text-sm font-medium text-slate-800 select-none flex flex-col items-center justify-center gap-3.5 w-full h-full bg-gradient-to-b from-white/95 via-teal-50/40 to-indigo-50/40 border-2 border-dashed border-teal-300/80 rounded-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-radial from-teal-100/30 to-transparent pointer-events-none" />
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-teal-600 to-indigo-600 text-white flex items-center justify-center shadow-lg relative z-10">
            <Icon className="w-8 h-8" />
          </div>
          <div className="space-y-1.5 max-w-sm relative z-10">
            <span className="block leading-snug text-xs sm:text-sm font-bold text-slate-900">
              {alt}
            </span>
            {badgeText && (
              <span className="inline-block px-3 py-1 rounded-full bg-teal-100/90 text-teal-800 text-xs font-semibold border border-teal-200">
                {badgeText}
              </span>
            )}
            <span className="text-[11px] text-slate-500 block pt-1 font-medium">
              Image Section &bull; Ready for Media
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

// ---------------------------------------------------------------------------
// DATA STRUCTURES (Verbatim from Draft & Requirements)
// ---------------------------------------------------------------------------

const breadcrumbTrail = [
  { label: "Home", href: "/" },
  { label: "Saudi Arabia", href: "/saudi-arabia/seo-services" },
  { label: "Online Reputation Management", href: "/saudi-arabia/online-reputation-management/" },
];

const ormDefinitionHabits = [
  {
    title: "Watching reviews and public mentions of your brand",
    desc: "Active monitoring across Google Business Profile, social networks, and industry-specific directories.",
    icon: Eye,
  },
  {
    title: "Replying to customers professionally",
    desc: "Crafting composed, respectful, and on-brand replies that de-escalate tension and acknowledge feedback.",
    icon: MessageSquare,
  },
  {
    title: "Noticing complaints that keep coming up",
    desc: "Identifying recurring service bottlenecks and operational pain points to fix root causes.",
    icon: AlertTriangle,
  },
  {
    title: "Keeping your business details correct across platforms",
    desc: "Ensuring your name, address, phone numbers, and opening hours remain 100% accurate everywhere.",
    icon: CheckCircle2,
  },
  {
    title: "Reviewing trends so you know whether things are improving",
    desc: "Measuring real sentiment trends and resolution times without relying on vanity metrics.",
    icon: TrendingUp,
  },
];

const whyMattersPoints = [
  {
    title: "Reviews are part of the decision",
    desc: "They sit alongside price, recommendations, and your website. Potential buyers compare experiences before contacting you.",
    icon: Star,
    badge: "Buyer Decision",
  },
  {
    title: "Wrong details cost you",
    desc: "A bad phone number or outdated opening hours sends the wrong message before you've said a single word.",
    icon: MapPin,
    badge: "Listing Accuracy",
  },
  {
    title: "People expect a reply",
    desc: "A prompt, respectful response shows someone is paying attention, cares about customers, and takes accountability.",
    icon: MessageCircle,
    badge: "Customer Care",
  },
  {
    title: "Language counts",
    desc: "Depending on your audience, feedback may arrive in Arabic, English, or both, and replies should fit culturally and tonally.",
    icon: Languages,
    badge: "Bilingual Context",
  },
  {
    title: "Branches need consistency",
    desc: "Each location in Riyadh, Jeddah, Dammam, or Al Khobar should meet the exact same verified standard of customer care.",
    icon: Building2,
    badge: "Multi-Location",
  },
  {
    title: "Reviews are free market research",
    desc: "They often show you real operational flaws, gaps, and customer desires that your internal reports easily miss.",
    icon: BarChart3,
    badge: "Business Intelligence",
  },
];

const ormServices = [
  {
    title: "Online Review Monitoring",
    desc: "We keep an eye on the platforms that matter to your business and flag new feedback quickly. The trick is ownership: every review needs someone responsible for it until it's resolved.",
    icon: Eye,
    tag: "Proactive Tracking",
  },
  {
    title: "Google Business Profile Review Management",
    desc: "This covers replying to eligible reviews, keeping profile details accurate, and spotting common themes. It won't guarantee a higher Google Maps ranking, and it can't promise that a negative review disappears.",
    icon: FaGoogle,
    tag: "GBP & Maps",
  },
  {
    title: "Review Response Strategy",
    desc: "We help you build a reply framework that sounds like your brand: professional, warm, and specific. It covers when to acknowledge a concern, when to move the conversation to a private channel, and when to post an update after an issue has been looked into.",
    icon: MessageSquare,
    tag: "Brand Tone",
  },
  {
    title: "Negative Review Management",
    desc: "Not every bad review is the same. Some describe a genuine problem, a few break platform rules. We help you tell them apart and respond calmly, without arguing, without sharing personal details, and without threats, review gating, or mass reporting.",
    icon: ShieldAlert,
    tag: "Crisis De-escalation",
  },
  {
    title: "Brand Mention Monitoring",
    desc: "Where suitable tools and access exist, we track public mentions of your brand. Repeated questions or complaints often point to something worth fixing.",
    icon: Search,
    tag: "Listening",
  },
  {
    title: "Business Listing Accuracy",
    desc: "We check names, addresses, phone numbers, opening hours, and website links across relevant directories. We can't promise control over listings your business has no access to.",
    icon: FileCheck,
    tag: "Data Consistency",
  },
  {
    title: "Social Media Reputation Monitoring",
    desc: "We watch public comments and messages so concerns get a response in the right place. Public replies, private support, and moderating content that genuinely breaks platform rules are three different jobs, and we keep them separate.",
    icon: Users,
    tag: "Social Channels",
  },
  {
    title: "Reputation Reporting and Insights",
    desc: "Reports cover review volume, response activity, rating trends, and recurring themes. They come from the platforms you give us access to, not from any proprietary dashboard.",
    icon: BarChart3,
    tag: "Transparent Data",
  },
];

const ormProcessSteps = [
  {
    step: "01",
    title: "Reputation Audit",
    desc: "We review your profiles, review platforms, brand mentions, listing accuracy, and how you currently respond.",
    icon: Search,
  },
  {
    step: "02",
    title: "Set Priorities",
    desc: "We decide which platforms, locations, and recurring issues need attention first.",
    icon: Target,
  },
  {
    step: "03",
    title: "Build a Response Framework",
    desc: "Guidelines reflect your tone, service standards, escalation route, and privacy requirements.",
    icon: Compass,
  },
  {
    step: "04",
    title: "Monitor and Respond",
    desc: "New feedback is reviewed, sorted, and handled within the agreed scope and permissions.",
    icon: MessageCircle,
  },
  {
    step: "05",
    title: "Spot Recurring Concerns",
    desc: "Patterns in feedback can suggest practical fixes in service, communication, or business information.",
    icon: AlertTriangle,
  },
  {
    step: "06",
    title: "Review and Refine",
    desc: "Regular reporting shows what's working, and we adjust. We don't promise a fixed timeline for changing ratings or public perception.",
    icon: RefreshCw,
  },
];

const negativeReviewHabits = [
  {
    habit: "Pause before replying",
    details: "A calm answer beats a fast one. Taking a few moments prevents defensive or impulsive reactions.",
  },
  {
    habit: "Acknowledge the concern without assuming who's right",
    details: "Validate that the customer had a frustrating experience without prematurely admitting legal liability or arguing.",
  },
  {
    habit: "Never reveal customer details or sensitive information",
    details: "Respect privacy and data protection requirements. Never share booking numbers, health records, or personal contacts publicly.",
  },
  {
    habit: "Say clearly what happens next",
    details: "Provide clear reassurance that the feedback has been logged with management and is actively being reviewed.",
  },
  {
    habit: "Take detailed discussions to a private channel",
    details: "Direct the customer to an official email or dedicated phone line where sensitive matters can be investigated thoroughly.",
  },
  {
    habit: "Investigate, then do what you said you'd do",
    details: "Follow up with staff or operations internally, resolve the problem, and provide the promised resolution.",
  },
  {
    habit: "Flag a review only if it genuinely breaks platform policy",
    details: "Submit platform removal requests solely for provable spam, hate speech, defamation, or competitor sabotage.",
  },
  {
    habit: "Never offer anything in exchange for changing or removing a review",
    details: "Incentivized review removal breaks Google and platform guidelines and severely compromises brand integrity.",
  },
];

const industrySectors = [
  {
    id: "clinics",
    name: "Clinics & Medical Centres",
    icon: Stethoscope,
    focus: "Patient Privacy & Clinical Care Respect",
    approach:
      "Respectful replies, accurate service information, and careful escalation of clinical concerns. Never mention patient identities or medical details in public.",
    tips: [
      "Strict compliance with Saudi Ministry of Health regulations & patient privacy",
      "De-escalate wait-time or appointment grievances calmly",
      "Route medical inquiries directly to confidential clinical support teams",
      "Maintain accurate opening hours, clinic locations, and emergency contacts",
    ],
  },
  {
    id: "realestate",
    name: "Real Estate",
    icon: Building2,
    focus: "Enquiry Responsiveness & Property Accuracy",
    approach:
      "Quick, accurate answers about enquiries, viewings, and property details.",
    tips: [
      "Provide prompt clarity on project completions, handover times, and amenities",
      "Correct outdated sales office locations and contact phone numbers",
      "Address tenant or buyer inspection feedback constructively",
      "Build trust around major financial investment commitments",
    ],
  },
  {
    id: "hospitality",
    name: "Hotels, Restaurants & Hospitality",
    icon: Sparkles,
    focus: "Guest Experience & Thoughtful Hospitality",
    approach:
      "Acknowledge the guest's experience on bookings, service, and cleanliness without making claims you can't back up.",
    tips: [
      "Acknowledge dining or room service feedback with warmth and humility",
      "Avoid false promises or exaggeration in public responses",
      "Highlight genuine improvements made to dining menus or guest amenities",
      "Foster repeat visits through genuine customer appreciation",
    ],
  },
  {
    id: "ecommerce",
    name: "E-Commerce",
    icon: ShoppingBag,
    focus: "Shipping, Returns & Product Expectations",
    approach:
      "Keep an eye on feedback about delivery, product information, returns, and order communication.",
    tips: [
      "Separate courier delivery issues from product quality concerns",
      "Clarify return and refund policies transparently",
      "Respond swiftly to public queries on social storefronts and marketplaces",
      "Use feedback to refine product descriptions, sizing, and packaging",
    ],
  },
  {
    id: "b2b",
    name: "Professional & B2B Services",
    icon: ShieldCheck,
    focus: "Corporate Credibility & Transparent Service",
    approach:
      "Trust grows from accurate company details, clear service descriptions, and consistent replies.",
    tips: [
      "Ensure corporate registration details and addresses match across directories",
      "Respond professionally to client disputes without public hostility",
      "Demonstrate structured governance and client confidentiality",
      "Support enterprise procurement and vendor due diligence evaluations",
    ],
  },
];

const ethicalRules = [
  {
    title: "Ask for honest feedback, never only positive feedback",
    desc: "Encouraging authentic feedback gives you true operational clarity and satisfies platform review guidelines.",
    icon: CheckCircle2,
  },
  {
    title: "Never buy fake reviews or invent testimonials",
    desc: "Manufactured reviews violate Google policies, breach Saudi consumer regulations, and destroy brand credibility.",
    icon: XCircle,
  },
  {
    title: "Respect privacy and data protection requirements",
    desc: "Never disclose customer identities, account balances, booking references, or medical histories in public responses.",
    icon: ShieldCheck,
  },
  {
    title: "Report only reviews that genuinely violate platform policy",
    desc: "Flag reviews strictly for hate speech, conflict of interest, or clear platform policy violations, not fair criticism.",
    icon: Scale,
  },
  {
    title: "Correct your own mistakes openly",
    desc: "When operational or service oversights happen, owning them sincerely earns significantly greater customer respect.",
    icon: RefreshCw,
  },
  {
    title: "Keep public claims backed by evidence",
    desc: "Ground every marketing and public assertion in verifiable facts without unsubstantiated guarantees.",
    icon: FileCheck,
  },
];

const faqs = [
  {
    q: "What is online reputation management?",
    a: "It's the ongoing work of monitoring reviews and public mentions, replying professionally, keeping business details accurate, and learning from what customers say. The aim is honest trust-building, not hiding criticism.",
  },
  {
    q: "What does an online reputation management service in Saudi Arabia include?",
    a: "Usually review monitoring, response guidelines, Google Business Profile support, listing accuracy checks, brand mention monitoring, and reporting. The exact scope is agreed with you after we understand your needs.",
  },
  {
    q: "How can online reputation management help a business?",
    a: "It helps you reply consistently, keep information accurate, and spot repeat complaints early. That can support customer confidence, though it can't guarantee sales or a particular rating.",
  },
  {
    q: "Can an agency remove negative Google reviews?",
    a: "No agency can promise removal. Reviews that break a platform's policies can be reported, and the platform makes the final call. Genuine criticism is better answered professionally.",
  },
  {
    q: "How should a business respond to a negative online review?",
    a: "Take a breath, acknowledge the concern, avoid sharing personal details, explain the next step, and move the detail to a private channel. Then follow through on whatever you promised.",
  },
  {
    q: "Does online reputation management improve Google Maps rankings?",
    a: "Reviews are one factor among many in local search, so replies alone won't guarantee a position. No honest agency can promise a ranking through reputation management alone.",
  },
  {
    q: "How much do reputation management services cost in Saudi Arabia?",
    a: "It depends on the number of locations, platforms, review volume, reporting, and language needs. We'd rather quote against your real requirements than publish figures that don't fit.",
  },
  {
    q: "How long does it take to improve an online reputation?",
    a: "There's no fixed timeline. Reputation follows real customer experiences over time, so progress depends on service quality as well as how feedback is handled.",
  },
  {
    q: "Can reputation management help businesses with multiple locations?",
    a: "Yes. A shared framework for monitoring, replies, and listing accuracy can be applied across branches, while each location's own priorities are considered separately.",
  },
  {
    q: "Why are genuine customer reviews important?",
    a: "They show real experiences, help future customers decide, and give you honest feedback. Fake or incentivised reviews risk breaking platform rules and damaging trust.",
  },
  {
    q: "Can online reputation management help clinics and healthcare businesses?",
    a: "It can support respectful replies and accurate information, as long as patient privacy is protected. Public responses should never reveal medical details or identities.",
  },
  {
    q: "How can I get started with DigLip7?",
    a: "Get in touch and tell us about your industry, locations, review platforms, and current challenges. We'll talk through an appropriate scope and next steps.",
  },
];

const SaudiOnlineReputationManagement = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [faqSearch, setFaqSearch] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("clinics");

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.q.toLowerCase().includes(faqSearch.toLowerCase()) ||
      faq.a.toLowerCase().includes(faqSearch.toLowerCase())
  );

  const pageUrl = "https://diglip7.com/saudi-arabia/online-reputation-management/";

  // Structured Data (JSON-LD) Schemas adhering to prompt and verified specifications
  // Unified @graph block linking Organization, WebSite, WebPage, Service, BreadcrumbList, and FAQPage
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
        name: "Online Reputation Management Services in Saudi Arabia",
        description:
          "Online reputation management services in Saudi Arabia from DigLip7: review monitoring, response guidelines, listing accuracy and feedback reporting.",
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
          url: "https://diglip7.com/images/transparent-workflow.webp",
          caption:
            "Online reputation management and customer review monitoring for businesses in Saudi Arabia",
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
        name: "Online Reputation Management Service in Saudi Arabia",
        serviceType: "Online reputation management",
        description:
          "Review monitoring, review response guidelines, Google Business Profile support, listing accuracy checks, brand mention monitoring and reputation reporting. Scope is agreed after a discussion of business needs.",
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
            name: "Online Reputation Management",
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

  const currentIndustry =
    industrySectors.find((item) => item.id === selectedIndustry) ||
    industrySectors[0];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-teal-500 selection:text-white pt-20">
      {/* Dynamic SEO Meta, Hreflang, Canonical, OpenGraph, Twitter, and Schema */}
      <SEO
        title="Online Reputation Management Saudi Arabia | DigLip7"
        exactTitle={true}
        description="Protect customer trust with online reputation management services in Saudi Arabia. Monitor reviews, manage feedback, and strengthen your brand presence with DigLip7."
        canonical={pageUrl}
        keywords="Online Reputation Management Service in Saudi Arabia, online reputation management services Saudi Arabia, ORM services Saudi Arabia, reputation management agency Saudi Arabia, Google review management Saudi Arabia, Google Business Profile review management, review response management, negative review management, local reputation management Saudi Arabia, brand reputation monitoring Saudi Arabia, business listing accuracy management, social media reputation management, reputation management for clinics in Saudi Arabia, e-commerce reputation management, reputation management reporting"
        robots="index, follow, max-image-preview:large"
        hreflangs={[
          { hreflang: "en-sa", href: pageUrl },
          { hreflang: "x-default", href: pageUrl },
        ]}
        ogType="website"
        ogLocale="en_SA"
        ogTitle="Online Reputation Management Saudi Arabia | DigLip7"
        ogDescription="Monitor reviews, manage feedback, and strengthen customer trust with DigLip7."
        ogUrl={pageUrl}
        ogImage="https://diglip7.com/images/transparent-workflow.webp"
        ogImageAlt="Online reputation management and customer review monitoring for businesses in Saudi Arabia"
        twitterCard="summary_large_image"
        twitterTitle="Online Reputation Management Saudi Arabia | DigLip7"
        twitterDescription="Monitor reviews, manage feedback, and strengthen customer trust with DigLip7."
        twitterImage="https://diglip7.com/images/transparent-workflow.webp"
        twitterImageAlt="Online reputation management and customer review monitoring for businesses in Saudi Arabia"
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
                <Home className="w-3.5 h-3.5 text-teal-700" />
              ) : (
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
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

      {/* Hero Header Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-teal-50/70 via-slate-50 to-indigo-50/60 border-b border-teal-100/80 py-16 sm:py-20 lg:py-24">
        {/* Decorative blur spheres */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading & Verbatim Text */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100/90 text-teal-900 border border-teal-200 text-xs sm:text-sm font-semibold tracking-wide">
                <ShieldCheck className="w-4 h-4 text-teal-700" />
                <span>Online Reputation Management &bull; Saudi Arabia</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 leading-tight">
                Online Reputation Management Services in Saudi Arabia{" "}
                <span className="block mt-2 bg-gradient-to-r from-teal-700 via-emerald-700 to-indigo-700 bg-clip-text text-transparent">
                  Protect Customer Trust & Strengthen Brand Presence
                </span>
              </h1>

              {/* Verbatim Intro Paragraphs */}
              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0 text-left">
                <p>
                  Think about the last time you picked a clinic, a hotel, or a contractor. You probably searched, skimmed a few reviews, checked the opening hours on Google Maps, and made up your mind before you ever picked up the phone. Your customers do exactly the same.
                </p>
                <p>
                  An <strong>Online Reputation Management Service in Saudi Arabia</strong> helps you join that conversation instead of watching it from the sidelines. <strong className="text-teal-900 font-semibold">DigLip7</strong> is a digital marketing company that can support you with review monitoring, response guidelines, business information checks, and feedback reporting, with the exact scope confirmed once we understand your business.
                </p>
                <p className="bg-teal-50/80 border-l-4 border-teal-600 p-3.5 rounded-r-xl text-slate-800 text-sm font-medium">
                  One thing we'll say plainly: reputation management isn't about deleting bad comments. It's about listening, replying with care, fixing what's genuinely broken, and being open about it.
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
                    className="group px-7 py-4 bg-teal-700 hover:bg-teal-800 text-white text-sm sm:text-base font-semibold rounded-full shadow-lg hover:shadow-teal-600/25 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Discuss Your Online Reputation Goals</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>

                <a
                  href="https://wa.me/919650608788?text=Hello%20DigLip7%20Team%2C%20I%20would%20like%20to%20discuss%20Online%20Reputation%20Management%20services%20in%20Saudi%20Arabia."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    className="px-6 py-4 bg-white text-teal-950 border-2 border-teal-600 text-sm sm:text-base font-semibold rounded-full shadow-xs hover:bg-teal-50 transition-all duration-300 flex items-center gap-2 cursor-pointer"
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
                Looking to protect customer trust and monitor public sentiment?{" "}
                <Link
                  to="/contact"
                  className="text-teal-700 underline font-semibold hover:text-teal-900 transition-colors"
                >
                  Contact DigLip7
                </Link>{" "}
                to discuss your online reputation goals.
              </div>
            </div>

            {/* Right Column: Hero Visual Container & Reputation Dashboard Mockup */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="w-full max-w-lg space-y-4">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white">
                  <ORMImageSlot
                    src={heroImgSrc}
                    fallbackSrc={heroImgFallback}
                    alt="Online reputation management and customer review monitoring for businesses in Saudi Arabia"
                    width={1200}
                    height={675}
                    aspect="aspect-[16/9]"
                    priority={true}
                    fallbackIcon={ShieldCheck}
                    badgeText="Reputation & Trust Hub"
                  />
                </div>

                {/* Micro Live Trust Overview Card */}
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 border border-slate-200/90 shadow-md space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Reputation Health Framework
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-100">
                      Saudi Arabia Verified
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center pt-1">
                    <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <div className="text-lg font-black text-teal-800">100%</div>
                      <div className="text-[10px] font-medium text-slate-500">Ethical Policy</div>
                    </div>
                    <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <div className="text-lg font-black text-indigo-800">Bi-Lingual</div>
                      <div className="text-[10px] font-medium text-slate-500">Arabic & English</div>
                    </div>
                    <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <div className="text-lg font-black text-emerald-700">Multi-Channel</div>
                      <div className="text-[10px] font-medium text-slate-500">GBP & Reviews</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Section 1: What Is Online Reputation Management? */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
              <Compass className="w-3.5 h-3.5 text-teal-600" />
              <span>Core Understanding</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
              What Is Online Reputation Management?
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              Online reputation management, or ORM, is simply the habit of paying attention to how your business appears online and responding sensibly. Day to day, that usually means:
            </p>
          </div>

          {/* 5 Day-to-Day Habits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ormDefinitionHabits.map((habit, idx) => {
              const Icon = habit.icon;
              return (
                <motion.div
                  key={habit.title}
                  className="bg-slate-50/70 hover:bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                  whileHover={{ y: -3 }}
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                        {habit.title}
                      </h3>
                      <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                        {habit.desc}
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-200/60 text-xs font-semibold text-teal-700 flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-teal-600" />
                    <span>Daily Operating Standard</span>
                  </div>
                </motion.div>
              );
            })}

            {/* The Line Worth Drawing Box */}
            <div className="md:col-span-2 lg:col-span-1 bg-gradient-to-br from-teal-900 via-slate-900 to-indigo-950 text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-lg">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold border border-teal-400/30">
                  <Scale className="w-3.5 h-3.5" />
                  <span>The Ethical Boundary</span>
                </div>
                <h3 className="text-xl font-bold leading-tight">
                  There's a Line Worth Drawing Here
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Reputation management builds on real customer experiences and accurate information. Reputation manipulation, such as fake reviews or burying fair criticism, doesn't belong in honest ORM, and we wouldn't recommend it.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-teal-300">
                <ShieldCheck className="w-4 h-4" />
                <span>Protected Trust & Authentic Perception</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Why Online Reputation Management Matters in Saudi Arabia */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-semibold">
              <Globe className="w-3.5 h-3.5 text-teal-600" />
              <span>Saudi Market Reality</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
              Why Online Reputation Management Matters in Saudi Arabia
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              Many people research a business before contacting it. We can't speak for every customer in the Kingdom, but a few things hold true for most businesses:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyMattersPoints.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
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

          {/* Bilingual Context Card */}
          <div className="bg-gradient-to-r from-teal-50 via-white to-indigo-50/50 rounded-2xl p-6 sm:p-8 border border-teal-200/90 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-teal-800 uppercase tracking-wider">
                <Languages className="w-4 h-4 text-teal-600" />
                <span>Saudi Audience Communication</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Arabic & English Tone Consistency
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Saudi consumers navigate digital channels in both Arabic and English. Maintaining courteous, respectful, and culturally appropriate phrasing in both languages ensures your brand feels attentive, credible, and welcoming.
              </p>
            </div>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-semibold text-sm whitespace-nowrap shadow-sm hover:shadow transition-all shrink-0"
            >
              Consult with Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3: Our Online Reputation Management Services in Saudi Arabia */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
              <Layers className="w-3.5 h-3.5 text-teal-600" />
              <span>Full Service Scope</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
              Our Online Reputation Management Services in Saudi Arabia
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              Here's what ORM support can look like. We confirm the final scope with you, based on your needs and the access you can give us.
            </p>
          </div>

          {/* 8 Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ormServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  className="bg-slate-50/60 hover:bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                  whileHover={{ y: -4 }}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-semibold text-teal-800 bg-teal-50 border border-teal-200/60 px-2 py-0.5 rounded-full">
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
                    <span>Scope Module 0{index + 1}</span>
                    <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Transparent Scope Note */}
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
              <p className="text-sm text-slate-700 leading-relaxed">
                <strong>Scope Commitment:</strong> We never promise overnight rating transformations or deletion of legitimate reviews. Our focus is consistent monitoring, prompt professional responses, verified business listings, and proactive feedback learning.
              </p>
            </div>
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-xl bg-white border border-teal-300 text-teal-900 text-xs font-semibold hover:bg-teal-50 transition-colors whitespace-nowrap"
            >
              Request Scope Proposal
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4: Our Online Reputation Management Process */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-semibold">
              <RefreshCw className="w-3.5 h-3.5 text-teal-600" />
              <span>Step-by-Step Flow</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
              Our Online Reputation Management Process
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              No mystery here. This is how the work usually flows:
            </p>
          </div>

          {/* 6 Step Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ormProcessSteps.map((stepItem) => {
              const Icon = stepItem.icon;
              return (
                <div
                  key={stepItem.title}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black text-teal-700 tracking-wider">
                        {stepItem.step}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
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
                    <Check className="w-3.5 h-3.5 text-teal-500" />
                    <span>Systematic Execution</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Process Supporting Visual Container */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-800 text-xs font-semibold">
                  <Activity className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Iterative Refinement</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 leading-tight">
                  Transparent Workflow, Real Ownership
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Every step is defined around clear permissions, defined escalation routes, and client review. When a recurring theme emerges—such as repeated billing inquiries, delivery confusion, or parking access questions—we document it so your team can resolve the root operational cause.
                </p>
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Audit and platform priority alignment</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Tailored tone of voice and escalation matrix</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Honest reporting based on platforms you provide access to</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <ORMImageSlot
                  src={auditImgSrc}
                  fallbackSrc={auditImgFallback}
                  alt="Six-step online reputation management audit and workflow process in Saudi Arabia"
                  aspect="aspect-[16/9]"
                  fallbackIcon={RefreshCw}
                  badgeText="Workflow & Process"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: How to Handle Negative Online Reviews Professionally */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-700" />
              <span>Best Practices & De-escalation</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
              How to Handle Negative Online Reviews Professionally
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              Whether or not you work with an agency, these habits help:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Habits List */}
            <div className="lg:col-span-7 space-y-3">
              {negativeReviewHabits.map((item, index) => (
                <div
                  key={item.habit}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-teal-50/40 hover:border-teal-200 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        {item.habit}
                      </h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {item.details}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Response Simulator / Verbatim Example Card */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-teal-950 text-white rounded-3xl p-6 sm:p-7 shadow-xl border border-slate-800 space-y-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-teal-400" />
                    <span className="text-xs font-bold uppercase tracking-wider text-teal-300">
                      Standard Reply Blueprint
                    </span>
                  </div>
                  <span className="text-[11px] bg-white/10 px-2 py-0.5 rounded text-slate-300">
                    General Example
                  </span>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-2">
                  <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider block">
                    Simulated Scenario: Unfavourable Review
                  </span>
                  <p className="text-xs text-slate-300 italic">
                    "Visited your branch yesterday and had an unsatisfactory experience with wait time and communication."
                  </p>
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-bold text-teal-300 uppercase tracking-wider block">
                    Professional Response (Verbatim Standard)
                  </span>
                  <blockquote className="bg-white text-slate-900 p-4 rounded-2xl text-xs sm:text-sm font-medium leading-relaxed border-l-4 border-teal-500 shadow-sm">
                    "Thank you for sharing your feedback. We're sorry to hear that your experience did not meet expectations. We would appreciate the opportunity to understand what happened and review your concerns. Please contact our team through the official contact channel so we can follow up appropriately."
                  </blockquote>
                </div>

                <div className="space-y-2 pt-2 border-t border-white/10 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Polite gratitude without defensiveness</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Empathy without premature admission of fault</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Protects privacy by directing details to private channel</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-teal-50/70 rounded-2xl border border-teal-200/80 text-xs text-slate-700 leading-relaxed">
                <strong>Need custom reply playbooks?</strong> We work with your communications team to write tailored templates for every common customer scenario in both Arabic and English.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Online Reputation Management for Different Industries in Saudi Arabia */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-semibold">
              <Building2 className="w-3.5 h-3.5 text-indigo-600" />
              <span>Sector-Specific Protocols</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
              Online Reputation Management for Different Industries in Saudi Arabia
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              Priorities shift from sector to sector. These are examples of approaches, not claims that DigLip7 has delivered projects in every industry listed.
            </p>
          </div>

          {/* Interactive Sector Switcher */}
          <div className="flex flex-wrap gap-2 border-b border-slate-200/80 pb-4">
            {industrySectors.map((sector) => {
              const Icon = sector.icon;
              const isSelected = selectedIndustry === sector.id;
              return (
                <button
                  key={sector.id}
                  onClick={() => setSelectedIndustry(sector.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                    isSelected
                      ? "bg-teal-700 text-white shadow-sm"
                      : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
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
              key={currentIndustry.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-sm"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                      Strategic Focus &bull; {currentIndustry.focus}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                      {currentIndustry.name}
                    </h3>
                  </div>

                  <blockquote className="p-4 rounded-2xl bg-teal-50/60 border-l-4 border-teal-600 text-slate-800 text-sm sm:text-base font-medium leading-relaxed">
                    {currentIndustry.approach}
                  </blockquote>

                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600">
                      Essential Operational Considerations
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {currentIndustry.tips.map((tip, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-xs text-slate-700 leading-snug"
                        >
                          <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                          <span>{tip}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <ORMImageSlot
                    src={responseImgSrc}
                    fallbackSrc={responseImgFallback}
                    alt={`Reputation management strategy for ${currentIndustry.name} in Saudi Arabia`}
                    aspect="aspect-[16/10] lg:aspect-[16/9]"
                    fallbackIcon={currentIndustry.icon}
                    badgeText={currentIndustry.name}
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Section 7: How Online Reputation Management Supports Local SEO */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
              <Search className="w-3.5 h-3.5 text-teal-600" />
              <span>Search & Visibility Synergy</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
              How Online Reputation Management Supports Local SEO
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              Reputation and local search overlap, but they aren't the same thing. Accurate Google Business Profile details, genuine reviews, thoughtful replies, consistent directory listings, and clear service and location pages all help. Coordinating your review workflows alongside professional{" "}
              <Link
                to="/saudi-arabia/seo-services"
                className="text-teal-700 underline font-semibold hover:text-teal-900 transition-colors"
              >
                local SEO services
              </Link>{" "}
              builds compounding regional visibility across the Kingdom. Still, review management is only one piece. Google Maps rankings depend on many factors, and no agency can guarantee a position through reputation work alone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
                <FaGoogle className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Google Business Profile</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Keeping accurate business categories, opening hours, verified photos, and localized service descriptions helps search engines understand your entity.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
                <Star className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Genuine Review Velocity</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Regular, authentic customer reviews create fresh user-generated content and signals of real-world activity that search algorithms monitor.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">NAP Directory Consistency</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Consistent Name, Address, and Phone numbers across regional Saudi directories reduce customer confusion and bolster local data authority.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Buyer Conversion Confidence</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                When local search users find your listing on Google Maps, professional replies and verified reviews turn casual impressions into phone calls and visits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Ethical Review Management and Brand Trust */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
              <span>Ethical Integrity</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
              Ethical Review Management and Brand Trust
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              Shortcuts erode trust faster than they build it. Our approach rests on a few simple rules:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ethicalRules.map((rule) => {
              const Icon = rule.icon;
              return (
                <div
                  key={rule.title}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      {rule.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {rule.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-6 sm:p-8 bg-gradient-to-r from-teal-900 to-slate-900 text-white rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-bold text-teal-300 uppercase tracking-wider">
                Long-Term Value Perspective
              </span>
              <p className="text-base sm:text-lg font-bold leading-snug">
                Handled well, even a critical review can show you exactly where to improve.
              </p>
              <p className="text-xs text-slate-300">
                Listening to customers, resolving process hitches, and responding openly creates genuine competitive resilience across Saudi Arabia.
              </p>
            </div>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-full bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-all shrink-0"
            >
              Discuss Ethical Strategy
            </Link>
          </div>
        </div>
      </section>

      {/* Section 9: How We Measure Online Reputation Management Performance */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
              <BarChart3 className="w-3.5 h-3.5 text-teal-600" />
              <span>Measurement & Reporting</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
              How We Measure Online Reputation Management Performance
            </h2>
            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
              <p>
                We focus on activity and insight, not promises. Depending on scope, that can include new reviews monitored, response rate and response time (where reliably tracked), rating and volume trends, recurring feedback topics, listing inconsistencies found and corrected, and issues passed to your support team.
              </p>
              <p className="text-sm sm:text-base text-slate-600">
                Ratings move up and down, customers expect different things, and real service experiences matter as much as the process. We don't publish invented case studies or percentage claims.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="text-xs font-bold text-teal-700 uppercase tracking-wider">Metrics Scope 01</div>
              <h3 className="text-base font-bold text-slate-900">Review Monitoring & Volume</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tracking new incoming feedback across platforms you grant access to, logged consistently by location and date.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="text-xs font-bold text-teal-700 uppercase tracking-wider">Metrics Scope 02</div>
              <h3 className="text-base font-bold text-slate-900">Response Rate & Timeliness</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Measuring operational responsiveness, ensuring eligible reviews receive timely, measured replies.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="text-xs font-bold text-teal-700 uppercase tracking-wider">Metrics Scope 03</div>
              <h3 className="text-base font-bold text-slate-900">Recurring Feedback Insights</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Cataloguing customer complaints and praise trends to help management address actionable root causes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="text-xs font-bold text-teal-700 uppercase tracking-wider">Metrics Scope 04</div>
              <h3 className="text-base font-bold text-slate-900">Listing Verification Health</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Auditing telephone numbers, opening hours, addresses, and website links across relevant directories.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="text-xs font-bold text-teal-700 uppercase tracking-wider">Metrics Scope 05</div>
              <h3 className="text-base font-bold text-slate-900">Escalation & Resolution Tracking</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Documenting urgent customer complaints passed smoothly to your internal customer care or clinical support teams.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="text-xs font-bold text-teal-700 uppercase tracking-wider">Metrics Scope 06</div>
              <h3 className="text-base font-bold text-slate-900">Transparent Platform Data</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Reports pulled directly from your authentic platforms, avoiding inflated proprietary dashboard scores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Why Choose DigLip7 for Online Reputation Management in Saudi Arabia? */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-semibold">
              <Award className="w-3.5 h-3.5 text-teal-600" />
              <span>DigLip7 Distinction</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
              Why Choose DigLip7 for Online Reputation Management in Saudi Arabia?
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              We offer a structured approach to monitoring, clear reply guidelines, attention to patterns in customer feedback, careful handling of business information, and reporting tied to your priorities. We work ethically, and where relevant we coordinate with your wider digital marketing.
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
                  <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Structured Monitoring Routines</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Defined checkpoints to ensure reviews and brand mentions are noticed and addressed.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Custom Reply Guidelines</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Tone frameworks built in harmony with your brand personality, privacy policies, and audience expectations.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Attention to Customer Patterns</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Highlighting the underlying reasons behind customer feedback so your team can make real operational improvements.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Multi-Channel Digital Coordination</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Aligning reputation activity with your local SEO, paid campaigns, web design, and{" "}
                      <Link
                        to="/saudi-arabia/social-media-marketing/"
                        className="text-teal-700 underline font-semibold hover:text-teal-900 transition-colors"
                      >
                        social media management
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* What You Won't Hear From Us Box */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-950 to-teal-950 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-5">
              <span className="text-xs font-bold text-rose-400 uppercase tracking-wider block">
                Honest Transparency
              </span>
              <h3 className="text-xl font-bold">
                What You Won't Hear From Us
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We believe realistic expectations build the strongest partnerships. That is why we never make exaggerated agency promises:
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-rose-200">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>No guaranteed five-star ratings</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-rose-200">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>No "we remove every bad review" claims</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-rose-200">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>No top-ranking Google Maps promises</span>
                </div>
              </div>
              <div className="pt-4 border-t border-white/10 text-[11px] text-slate-400">
                Ethical practices protect your business licence, platform standing, and genuine customer trust.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 11: Online Reputation Management Pricing and Service Options */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
              <SlidersHorizontal className="w-3.5 h-3.5 text-teal-600" />
              <span>Tailored Proposals</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
              Online Reputation Management Pricing and Service Options
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              Cost depends on the work involved: how many locations and platforms you have, review volume, reporting frequency, listing scope, brand monitoring needs, language requirements, and whether you want wider local SEO support too. The most useful next step is a proposal built around your real situation.
            </p>
          </div>

          <div className="bg-gradient-to-r from-teal-50/70 via-slate-50 to-indigo-50/60 rounded-3xl p-6 sm:p-8 lg:p-10 border border-teal-200/80">
            <h3 className="text-lg font-bold text-slate-900 mb-6">
              Key Factors Influencing Your Service Scope & Proposal
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">Factor 01</span>
                <h4 className="font-bold text-slate-900 text-sm">Location Count & Branches</h4>
                <p className="text-xs text-slate-600">Single business facility versus multi-city branches across Riyadh, Jeddah, Dammam, and beyond.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">Factor 02</span>
                <h4 className="font-bold text-slate-900 text-sm">Platform Diversity</h4>
                <p className="text-xs text-slate-600">Google Business Profile, TripAdvisor, social media channels, delivery apps, or niche directories.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">Factor 03</span>
                <h4 className="font-bold text-slate-900 text-sm">Review & Mention Volume</h4>
                <p className="text-xs text-slate-600">High-frequency customer traffic sectors versus lower-volume enterprise B2B inquiries.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">Factor 04</span>
                <h4 className="font-bold text-slate-900 text-sm">Language Scope</h4>
                <p className="text-xs text-slate-600">Bilingual Arabic and English reply crafting, tone adaptation, and moderation needs.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">Factor 05</span>
                <h4 className="font-bold text-slate-900 text-sm">Listing Audit Depth</h4>
                <p className="text-xs text-slate-600">Level of external citation checks, duplicate resolution, and NAP consistency maintenance.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">Factor 06</span>
                <h4 className="font-bold text-slate-900 text-sm">Wider Digital Integration</h4>
                <p className="text-xs text-slate-600">Coordination with local SEO services, paid search, or social media management.</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-teal-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-600 font-medium text-center sm:text-left">
                Every business has distinct needs. We never force rigid pre-packaged tiers that don't fit.
              </span>
              <Link
                to="/contact"
                className="px-6 py-3 rounded-full bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs sm:text-sm shadow-md transition-all shrink-0"
              >
                Request a Custom Scope Proposal
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 12: Frequently Asked Questions About Online Reputation Management in Saudi Arabia */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-semibold">
              <HelpCircle className="w-3.5 h-3.5 text-teal-600" />
              <span>Direct Answers</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
              Frequently Asked Questions About Online Reputation Management in Saudi Arabia
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
              Clear, straightforward answers about review monitoring, response standards, Google policies, and how ORM works for businesses in Saudi Arabia.
            </p>

            {/* Live Search Input */}
            <div className="max-w-md mx-auto pt-2">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={faqSearch}
                  onChange={(e) => setFaqSearch(e.target.value)}
                  placeholder="Search questions (e.g., negative reviews, cost, Google Maps)..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-full border border-slate-200 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-2xs"
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
                          isOpen ? "rotate-180 text-teal-600" : ""
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

      {/* Section 13: Discuss Your Online Reputation Goals with DigLip7 (Bottom CTA & Cross-Links) */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-teal-50/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100 text-teal-900 border border-teal-200 text-xs font-semibold">
            <Sparkles className="w-4 h-4 text-teal-700" />
            <span>Start Building Lasting Brand Trust</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight max-w-3xl mx-auto">
            Discuss Your Online Reputation Goals with DigLip7
          </h2>

          <div className="space-y-4 max-w-2xl mx-auto text-slate-700 text-sm sm:text-base leading-relaxed">
            <p>
              Good reputation management comes down to a few honest habits: monitor, reply with respect, communicate openly, and learn from real feedback.
            </p>
            <p>
              Tell us about your industry, locations, review platforms, and what's worrying you, and we'll talk through a sensible scope.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
            <Link to="/contact">
              <motion.button
                className="group px-8 py-4 bg-teal-700 hover:bg-teal-800 text-white text-base font-semibold rounded-full shadow-xl hover:shadow-teal-600/30 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>Request an ORM Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>

            <Link to="/contact">
              <motion.button
                className="px-8 py-4 bg-white text-slate-900 border-2 border-teal-600 text-base font-semibold rounded-full shadow-xs hover:bg-teal-50/50 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>Contact DigLip7</span>
              </motion.button>
            </Link>

            <a
              href="https://wa.me/919650608788?text=Hello%20DigLip7%20Team%2C%20I%20would%20like%20to%20discuss%20Online%20Reputation%20Management%20services%20in%20Saudi%20Arabia."
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                className="px-6 py-4 bg-emerald-600 hover:bg-emerald-700 text-white text-base font-semibold rounded-full shadow-md transition-all duration-300 flex items-center gap-2 cursor-pointer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <FaWhatsapp className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </motion.button>
            </a>
          </div>

          {/* Related Saudi Arabia Digital Services Interlinking */}
          <div className="pt-12 border-t border-slate-200/80">
            <span className="text-xs text-slate-600 font-semibold uppercase tracking-wider block mb-4">
              Explore More Saudi Arabia Digital Services
            </span>
            <div className="flex flex-wrap justify-center gap-3 text-xs sm:text-sm font-semibold">
              <Link
                to="/saudi-arabia/seo-services"
                className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 hover:text-teal-700 hover:border-teal-300 transition-colors shadow-2xs"
              >
                SEO Services Saudi Arabia
              </Link>
              <Link
                to="/saudi-arabia/ppc-services/"
                className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 hover:text-teal-700 hover:border-teal-300 transition-colors shadow-2xs"
              >
                PPC Services Saudi Arabia
              </Link>
              <Link
                to="/saudi-arabia/web-design/"
                className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 hover:text-teal-700 hover:border-teal-300 transition-colors shadow-2xs"
              >
                Web Design Saudi Arabia
              </Link>
              <Link
                to="/saudi-arabia/social-media-marketing/"
                className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 hover:text-teal-700 hover:border-teal-300 transition-colors shadow-2xs"
              >
                Social Media Marketing Saudi Arabia
              </Link>
              <Link
                to="/saudi-arabia/content-marketing-services/"
                className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 hover:text-teal-700 hover:border-teal-300 transition-colors shadow-2xs"
              >
                Content Marketing Saudi Arabia
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SaudiOnlineReputationManagement;
