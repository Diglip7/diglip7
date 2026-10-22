import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../../../components/SEO";
import {
  Share2,
  MessageCircle,
  TrendingUp,
  BarChart3,
  Users,
  Target,
  Sparkles,
  ArrowRight,
  CheckCircle,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  Home,
  Building2,
  ShoppingBag,
  Briefcase,
  GraduationCap,
  Store,
  Layers,
  FileCheck,
  Zap,
  ShieldCheck,
  Search,
  Languages,
  AlertTriangle,
  HelpCircle,
  Eye,
  Repeat,
  Compass,
  Palette,
  Check,
  Calendar,
  Camera,
  Megaphone,
  Radio,
  LineChart,
} from "lucide-react";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaSnapchatGhost,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";

// Image Paths - Set to empty string so Image Section containers are shown cleanly without displaying actual image files
const heroImgSrc = "";
const strategyImg = "";
const managementImg = "";
const contentCreationImg = "";
const adsCampaignsImg = "";
const communityImg = "";
const analyticsImg = "";
const platformImg = "";
const processImg = "";
const bilingualImg = "";

// Clean Fallback Image Container Component (Displays styled placeholder with icon, badge & alt text)
const SocialImageSlot = ({
  src = "",
  alt = "",
  width = 800,
  height = 600,
  aspect = "aspect-[4/3]",
  className = "",
  priority = false,
  fallbackIcon = Share2,
  badgeText = "",
}) => {
  const [hasError, setHasError] = useState(false);
  const Icon = fallbackIcon;

  return (
    <div
      className={`relative w-full rounded-2xl overflow-hidden bg-gradient-to-br from-pink-50/50 via-white to-purple-50/40 border border-purple-200/80 shadow-xs flex items-center justify-center ${aspect} ${className}`}
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
        <div className="p-6 sm:p-8 text-center text-sm font-medium text-slate-800 select-none flex flex-col items-center justify-center gap-3 w-full h-full bg-gradient-to-b from-white/95 to-pink-50/60 border-2 border-dashed border-purple-300/80 rounded-2xl">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-pink-100 to-purple-100 text-purple-700 flex items-center justify-center shadow-xs">
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
  { label: "Social Media Marketing", href: "/saudi-arabia/social-media-marketing/" },
];

const strategyBenefits = [
  {
    title: "Consistent, recognizable brand presence",
    desc: "Maintain visual cohesion and tone across all primary social channels your customers check.",
    icon: Palette,
  },
  {
    title: "Share useful information about products and services",
    desc: "Provide practical, educational explanations that help buyers understand your real value.",
    icon: Sparkles,
  },
  {
    title: "Talk with customers and answer genuine questions",
    desc: "Build active goodwill through prompt, truthful responses to real customer enquiries.",
    icon: MessageCircle,
  },
  {
    title: "Support product discovery and website visits",
    desc: "Guide interested viewers seamlessly from social feeds to dedicated landing and product pages.",
    icon: Store,
  },
  {
    title: "Promote launches, events, campaigns, and offers",
    desc: "Generate targeted momentum around new commercial milestones, seasonal initiatives, and events.",
    icon: Megaphone,
  },
  {
    title: "Generate enquiries through suitable content and advertising",
    desc: "Pair organic content with targeted paid campaigns to capture qualified commercial interest.",
    icon: Target,
  },
  {
    title: "Learn what your audience cares about through analytics",
    desc: "Analyze platform metrics to understand user preferences, questions, and conversion triggers.",
    icon: LineChart,
  },
];

const coreServices = [
  {
    id: "strategy-selection",
    title: "Social Media Strategy and Platform Selection",
    desc: "Strategy starts with your goals, audience, brand positioning, resources, and the role each platform should play. A B2B company may prioritize LinkedIn, while a visually led retailer may lean on Instagram. We assess suitability rather than assume it.",
    icon: Compass,
    highlights: [
      "Objective & KPI alignment",
      "Audience demographic profiling",
      "Competitive public landscape audit",
      "Channel priority matrix",
    ],
    imgSrc: strategyImg,
    imgAlt: "Marketing strategist planning social media strategy and channel mix for Saudi Arabia",
    badge: "Strategic Blueprint",
  },
  {
    id: "account-management",
    title: "Social Media Account Management",
    desc: "This covers profile optimization, publishing calendars, scheduling, account consistency, and managing approved content. Regular, purposeful communication beats posting without a goal.",
    icon: Calendar,
    highlights: [
      "Bio & profile asset optimization",
      "Monthly publishing editorial calendar",
      "Content scheduling & timing optimization",
      "Brand voice consistency guidelines",
    ],
    imgSrc: managementImg,
    imgAlt: "Social media content calendar for business account management",
    badge: "Publishing Operations",
  },
  {
    id: "content-creation",
    title: "Social Media Content Creation",
    desc: "We plan graphics, short-form videos, carousels, product showcases, educational posts, and brand stories. The aim is clear messaging, visual consistency, platform-appropriate formats, and content that's genuinely useful to your audience.",
    icon: Camera,
    highlights: [
      "Custom branded visual templates",
      "Short-form reels & vertical video concepts",
      "Multi-slide carousel breakdowns",
      "Culturally resonant Arabic & English copy",
    ],
    imgSrc: contentCreationImg,
    imgAlt: "Creative team designing bilingual social media carousels and reels",
    badge: "Creative Production",
  },
  {
    id: "paid-advertising",
    title: "Social Media Advertising and Paid Campaigns",
    desc: "Paid social can support awareness, website traffic, leads, or sales when the platform and campaign fit. It involves audience selection, creative testing, objectives, budget allocation, landing pages, and conversion tracking. It's separate from organic management and may need its own budget and scope.",
    icon: Target,
    highlights: [
      "Precise demographic & interest targeting",
      "A/B creative and copy variation testing",
      "Landing page alignment & CTA checks",
      "Pixel & conversion API tracking verification",
    ],
    imgSrc: adsCampaignsImg,
    imgAlt: "Paid social media campaign analytics and conversion reporting",
    badge: "Paid Acquisition",
  },
  {
    id: "community-management",
    title: "Community Management and Audience Engagement",
    desc: "We monitor comments and messages, reply appropriately, escalate customer service questions, and keep your brand voice consistent. Response responsibilities and service hours should be agreed in advance.",
    icon: Users,
    highlights: [
      "Comment moderation & response workflows",
      "Direct message triage & lead handover",
      "Pre-approved FAQ response frameworks",
      "Reputation protection & escalation protocols",
    ],
    imgSrc: communityImg,
    imgAlt: "Community manager responding to audience enquiries on social channels",
    badge: "Audience Care",
  },
  {
    id: "analytics-reporting",
    title: "Social Media Analytics and Reporting",
    desc: "We measure reach, engagement, website traffic, and qualified enquiries, then use the findings to spot content themes that work and improve decisions over time.",
    icon: BarChart3,
    highlights: [
      "Monthly performance breakdown reports",
      "Top-performing content theme analysis",
      "Channel attribution & traffic insights",
      "Actionable recommendations for next sprint",
    ],
    imgSrc: analyticsImg,
    imgAlt: "Digital marketing specialist reviewing social media campaign performance",
    badge: "Performance Intelligence",
  },
];

const industrySolutions = [
  {
    title: "Social Media Marketing for E-commerce Businesses",
    tagline: "Product Discovery & Purchase Motivation",
    desc: "Product demonstrations, category highlights, useful buying information, seasonal campaigns, and links to relevant product pages. Sales still depend on the offer, the audience, your website experience, and the purchase process.",
    icon: ShoppingBag,
    deliverables: [
      "Visual product showcases & catalog reels",
      "Seasonal sales & promotional campaigns",
      "Frictionless links to verified product pages",
      "Transparent pricing & delivery transparency",
    ],
  },
  {
    title: "Social Media Marketing for B2B Companies",
    tagline: "Professional Credibility & Qualified Enquiries",
    desc: "Educational content, professional insights, verified case studies, company updates, and LinkedIn campaigns where appropriate. Useful content can support credibility and business conversations without promising a set volume of leads.",
    icon: Briefcase,
    deliverables: [
      "LinkedIn thought leadership & industry insights",
      "Verified case studies & client milestone posts",
      "Company updates & corporate culture content",
      "Decision-maker focused discussion topics",
    ],
  },
  {
    title: "Social Media Marketing for Real Estate Businesses",
    tagline: "Authentic Property Showcases & Local Trust",
    desc: "Property showcases, accurate project information, neighborhood guides, virtual tours, and clear enquiry paths. No misleading property claims, made-up availability, or unsupported investment promises.",
    icon: Building2,
    deliverables: [
      "High-definition video tours & walk-throughs",
      "Accurate project specs, floorplans & amenities",
      "Neighborhood lifestyle & accessibility guides",
      "Clear, verified consultation booking paths",
    ],
  },
  {
    title: "Social Media Marketing for Healthcare and Education",
    tagline: "Compliant, Educational & Ethical Communication",
    desc: "Accurate informational content, clear service or course explanations, and simple enquiry options, all within applicable advertising rules, platform policies, privacy requirements, and restrictions on sensitive targeting.",
    icon: GraduationCap,
    deliverables: [
      "Evidence-based educational health/education tips",
      "Transparent practitioner/faculty credential highlights",
      "Strict adherence to regional advertising policies",
      "Patient & student privacy-safe communication",
    ],
  },
  {
    title: "Social Media Marketing for Local Businesses",
    tagline: "Community Relevance & Neighborhood Footfall",
    desc: "Location-relevant content, service demonstrations, answers to genuine customer questions, and campaigns built around where you actually serve.",
    icon: Store,
    deliverables: [
      "Localized geotagged posts & stories",
      "Behind-the-scenes service demonstrations",
      "Real customer question-and-answer series",
      "City-specific campaigns (Riyadh, Jeddah, Dammam)",
    ],
  },
];

const platformCards = [
  {
    name: "Instagram and Facebook Marketing",
    icon: FaInstagram,
    color: "from-pink-500 to-rose-600",
    bgLight: "bg-pink-50 border-pink-200",
    textLight: "text-pink-900",
    desc: "Visual storytelling, product and service content, community engagement, and paid campaign options where suitable.",
    bestFor: "E-commerce, lifestyle, hospitality, retail, and visual service brands.",
  },
  {
    name: "LinkedIn Marketing",
    icon: FaLinkedinIn,
    color: "from-blue-600 to-indigo-700",
    bgLight: "bg-blue-50 border-blue-200",
    textLight: "text-blue-900",
    desc: "Often relevant for B2B businesses, professional services, employer branding, and business-focused content.",
    bestFor: "Corporate firms, SaaS, consultants, industrial suppliers, and recruitment.",
  },
  {
    name: "TikTok and Snapchat Marketing",
    icon: FaTiktok,
    color: "from-slate-900 to-purple-800",
    bgLight: "bg-purple-50 border-purple-200",
    textLight: "text-purple-900",
    desc: "Short-form video and creative storytelling for audience-specific campaigns, where the platform fits your customers.",
    bestFor: "Gen-Z and millennial consumer audiences, viral trends, and creative demos.",
  },
  {
    name: "YouTube Marketing",
    icon: FaYoutube,
    color: "from-red-600 to-rose-700",
    bgLight: "bg-red-50 border-red-200",
    textLight: "text-red-900",
    desc: "Longer videos, demonstrations, tutorials, and educational content can help people understand your offer.",
    bestFor: "In-depth tutorials, product reviews, thought leadership, and brand podcasts.",
  },
];

const processSteps = [
  {
    step: "Step 01",
    title: "Business and Account Audit",
    desc: "We review your objectives, existing profiles, content, audience, messaging, available analytics, and competitors' public activity, looking for gaps without assuming every account has the same problems.",
    icon: Search,
  },
  {
    step: "Step 02",
    title: "Audience and Competitor Research",
    desc: "We learn about your audience, content themes, customer questions, and how competitors communicate, using that for insight, not to copy anyone's creative or messaging.",
    icon: Users,
  },
  {
    step: "Step 03",
    title: "Strategy and Content Planning",
    desc: "We set platform priorities, content themes, publishing frequency, formats, campaign objectives, and approval responsibilities, making sure the plan fits your resources and goals.",
    icon: Compass,
  },
  {
    step: "Step 04",
    title: "Content Creation and Campaign Setup",
    desc: "We develop approved creative, captions, publishing schedules, and paid campaign structures where included in scope, checking that messaging, landing pages, and calls to action line up.",
    icon: Camera,
  },
  {
    step: "Step 05",
    title: "Publishing, Engagement, and Optimization",
    desc: "We publish scheduled content, handle agreed engagement, review performance, and test creative or targeting changes, but only when the evidence supports them.",
    icon: Zap,
  },
  {
    step: "Step 06",
    title: "Reporting and Continuous Improvement",
    desc: "We review performance against agreed objectives, explain what we found, and set the next priorities.",
    icon: BarChart3,
  },
];

const commonProblems = [
  "Inconsistent posting",
  "Unclear brand positioning",
  "Content that doesn't match audience needs",
  "Repetitive creative and messaging",
  "Little interaction with genuine customer questions",
  "Ads that don't match their landing pages",
  "Campaigns without reliable conversion tracking",
  "Blurred lines between organic and paid goals",
  "Limited reporting on business outcomes",
  "Inconsistent messaging across platforms",
  "Weak calls to action",
  "Unclear approval and publishing responsibilities",
];

const performanceMetrics = [
  {
    title: "Reach and impressions",
    desc: "Measuring the size and frequency of your brand exposure across selected platforms.",
    icon: Eye,
  },
  {
    title: "Engagement rate and relevant interactions",
    desc: "Meaningful comments, shares, saves, and conversations rather than superficial vanity clicks.",
    icon: MessageCircle,
  },
  {
    title: "Video views and watch time",
    desc: "Tracking retention curves to assess whether audiences watch through key messaging points.",
    icon: Radio,
  },
  {
    title: "Website visits from social platforms",
    desc: "Direct traffic arriving at your designated landing pages and product catalogs via tagged URLs.",
    icon: ArrowRight,
  },
  {
    title: "Qualified enquiries and lead submissions",
    desc: "Form fills, consultation requests, and direct messages that meet your sales criteria.",
    icon: Target,
  },
  {
    title: "Purchases or bookings, where tracking is reliable",
    desc: "Verified checkouts and reservations directly linked to your social campaigns via pixel tracking.",
    icon: ShoppingBag,
  },
  {
    title: "Paid cost per result",
    desc: "Cost per lead, cost per acquisition, or cost per click measured against agreed advertising budgets.",
    icon: TrendingUp,
  },
  {
    title: "Conversion rate and return on ad spend",
    desc: "ROAS evaluated where accurate revenue and verified backend cost data genuinely exist.",
    icon: BarChart3,
  },
  {
    title: "Performance across content themes and formats",
    desc: "Identifying which creative types (reels, carousels, stories, posts) drive maximum interest.",
    icon: Layers,
  },
];

const whyChoosePillars = [
  {
    title: "Strategies tailored to your goals",
    desc: "No boilerplate templates. Everything aligns with your commercial objectives and industry norms.",
  },
  {
    title: "Audience and platform research",
    desc: "Deep analysis of Saudi audience behaviors and realistic platform priorities.",
  },
  {
    title: "Organized content planning",
    desc: "Structured editorial calendars so your team always knows what publishes and when.",
  },
  {
    title: "Brand-consistent creative",
    desc: "Polished visual assets that faithfully represent your brand standards and guidelines.",
  },
  {
    title: "Organic social media management",
    desc: "Dependable account operations, profile housekeeping, and regular publishing schedules.",
  },
  {
    title: "Paid social support where included",
    desc: "Targeted ad campaign structures with clean landing page integration and conversion verification.",
  },
  {
    title: "Measurement and reporting",
    desc: "Reports that explain the meaning behind the numbers, not just raw platform charts.",
  },
  {
    title: "Clear communication and practical recommendations",
    desc: "Direct feedback and practical next steps without confusing technical marketing jargon.",
  },
  {
    title: "Priorities set around your resources",
    desc: "Honest scopes built around what your internal team can realistically handle.",
  },
];

const faqs = [
  {
    q: "What is social media marketing in Saudi Arabia?",
    a: "Businesses use social platforms to publish content, communicate with audiences, promote relevant offerings, and support marketing objectives.",
  },
  {
    q: "How much do social media marketing services cost in Saudi Arabia?",
    a: "It varies. Fees depend on platforms, content volume, creative requirements, advertising management, and reporting scope. Advertising spend may be separate. We can discuss an approach once we understand your needs.",
  },
  {
    q: "Which social media platforms should my business use in Saudi Arabia?",
    a: "It depends on your audience, business model, content capabilities, and campaign objectives. Focus on the channels that fit your goals.",
  },
  {
    q: "Can social media marketing generate leads for my business?",
    a: "It can support lead generation through relevant content and campaigns, but lead volume and quality can't be guaranteed.",
  },
  {
    q: "Should I use Arabic or English in social media campaigns?",
    a: "It depends on your target audience, business, campaign purpose, and available content resources.",
  },
  {
    q: "What is included in social media management services?",
    a: "Depending on the agreed scope: strategy, content planning, scheduling, account management, engagement, and reporting.",
  },
  {
    q: "Is paid social media advertising different from social media management?",
    a: "Yes. Organic management focuses on content and account activity, while paid advertising involves campaign budgets, targeting, bidding, and paid distribution.",
  },
  {
    q: "How do I choose a social media marketing agency in Saudi Arabia?",
    a: "Review the proposed strategy, service scope, reporting methods, communication, and any evidence behind performance claims.",
  },
];

// ---------------------------------------------------------------------------
// MAIN COMPONENT
// ---------------------------------------------------------------------------

const SaudiSocialMediaMarketing = () => {
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

  const pageUrl = "https://diglip7.com/saudi-arabia/social-media-marketing/";

  // Structured Data (JSON-LD) Schemas adhering to prompt and verified specifications
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://diglip7.com/#organization",
      name: "DigLip7",
      url: "https://diglip7.com/",
      logo: "https://diglip7.com/logo.png",
      description:
        "DigLip7 is a digital marketing service provider offering social media marketing, SEO, paid advertising, web design, and related services.",
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
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Social Media Marketing Saudi Arabia | DigLip7",
      description:
        "Grow your brand's online presence with social media marketing services in Saudi Arabia from DigLip7. Explore content planning, account management, advertising, and reporting.",
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
      name: "Social Media Marketing Saudi Arabia",
      serviceType: "Social media marketing",
      description:
        "Social media strategy, content creation, account management, community management, paid social campaigns, and analytics reporting for businesses in Saudi Arabia, depending on the agreed scope.",
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
        name: "Social media marketing services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Social media strategy and platform selection",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Social media account management",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Social media content creation",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Social media advertising and paid campaigns",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Community management and audience engagement",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Social media analytics and reporting",
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
          name: "Social Media Marketing",
          item: pageUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is social media marketing in Saudi Arabia?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Businesses use social platforms to publish content, communicate with audiences, promote relevant offerings, and support marketing objectives.",
          },
        },
        {
          "@type": "Question",
          name: "How much do social media marketing services cost in Saudi Arabia?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "It varies. Fees depend on platforms, content volume, creative requirements, advertising management, and reporting scope. Advertising spend may be separate. We can discuss an approach once we understand your needs.",
          },
        },
        {
          "@type": "Question",
          name: "Which social media platforms should my business use in Saudi Arabia?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "It depends on your audience, business model, content capabilities, and campaign objectives. Focus on the channels that fit your goals.",
          },
        },
        {
          "@type": "Question",
          name: "Can social media marketing generate leads for my business?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "It can support lead generation through relevant content and campaigns, but lead volume and quality can't be guaranteed.",
          },
        },
        {
          "@type": "Question",
          name: "Should I use Arabic or English in social media campaigns?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "It depends on your target audience, business, campaign purpose, and available content resources.",
          },
        },
        {
          "@type": "Question",
          name: "What is included in social media management services?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Depending on the agreed scope: strategy, content planning, scheduling, account management, engagement, and reporting.",
          },
        },
        {
          "@type": "Question",
          name: "Is paid social media advertising different from social media management?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Organic management focuses on content and account activity, while paid advertising involves campaign budgets, targeting, bidding, and paid distribution.",
          },
        },
        {
          "@type": "Question",
          name: "How do I choose a social media marketing agency in Saudi Arabia?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Review the proposed strategy, service scope, reporting methods, communication, and any evidence behind performance claims.",
          },
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-purple-500 selection:text-white pt-20">
      {/* Dynamic SEO Meta, Hreflang, Canonical, OpenGraph, Twitter, and Schema */}
      <SEO
        title="Social Media Marketing Saudi Arabia | DigLip7"
        exactTitle={true}
        description="Grow your brand's online presence with social media marketing services in Saudi Arabia from DigLip7. Explore content planning, account management, advertising, and reporting."
        canonical={pageUrl}
        robots="index, follow, max-image-preview:large"
        hreflangs={[
          { hreflang: "en-sa", href: pageUrl },
          { hreflang: "x-default", href: pageUrl },
        ]}
        ogType="website"
        ogLocale="en_SA"
        ogTitle="Social Media Marketing Saudi Arabia | DigLip7"
        ogDescription="Content planning, account management, advertising, and reporting for businesses in Saudi Arabia."
        ogUrl={pageUrl}
        ogImage="https://diglip7.com/images/smm-saudi.jpg"
        ogImageAlt="Social media marketing strategy planning for businesses in Saudi Arabia"
        twitterCard="summary_large_image"
        twitterTitle="Social Media Marketing Saudi Arabia | DigLip7"
        twitterDescription="Content planning, account management, advertising, and reporting for businesses in Saudi Arabia."
        twitterImage="https://diglip7.com/images/smm-saudi.jpg"
        twitterImageAlt="Social media marketing strategy planning for businesses in Saudi Arabia"
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
      <header className="relative overflow-hidden bg-gradient-to-r from-pink-50/70 via-purple-50/50 to-indigo-50/60 border-b border-purple-100 py-16 sm:py-20 lg:py-24">
        {/* Subtle decorative background circles */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-800 border border-purple-200 text-xs sm:text-sm font-semibold tracking-wide">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span>Social Media Marketing &bull; Saudi Arabia</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 leading-tight">
                Social Media Marketing Saudi Arabia{" "}
                <span className="block mt-2 bg-gradient-to-r from-purple-700 via-pink-600 to-indigo-700 bg-clip-text text-transparent">
                  for Business Growth and Audience Engagement
                </span>
              </h1>

              {/* Verbatim Intro Paragraphs */}
              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0 text-left">
                <p>
                  Your customers are already scrolling, watching, and asking questions on social platforms. Social media marketing gives your business a way to join that conversation with useful content, a recognizable brand, and a clear path to an enquiry. That's the heart of <strong>Social Media Marketing Saudi Arabia</strong>: reaching relevant audiences where they spend their time, and giving them a reason to remember you.
                </p>
                <p>
                  But it takes more than the occasional post. You need a clear strategy, consistent messaging, creative content people actually want to see, the right platforms, and a way to measure what's working.
                </p>
                <p>
                  <strong className="text-purple-900 font-semibold">DigLip7</strong> is a digital marketing service provider that can help you plan and manage social media activity around your audience, industry, objectives, and resources. Depending on the agreed scope, that may include organic content, account management, creative development, community engagement, and paid social campaigns.
                </p>
                <p>
                  Every business needs a different approach. An e-commerce store may focus on product discovery and purchases, while a B2B company may care more about professional credibility and qualified enquiries. To talk through your goals,{" "}
                  <Link
                    to="/contact"
                    className="text-purple-700 font-semibold underline hover:text-purple-900 transition-colors"
                  >
                    request a consultation
                  </Link>
                  .
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
                    <span>Request a Consultation</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>

                <a
                  href="https://wa.me/919650608788?text=Hello%20DigLip7%20Team%2C%20I%20would%20like%20to%20discuss%20Social%20Media%20Marketing%20services%20for%20my%20business%20in%20Saudi%20Arabia."
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
                Looking to build a more effective social presence?{" "}
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
                  <SocialImageSlot
                    src={heroImgSrc}
                    alt="Social media marketing strategy planning for businesses in Saudi Arabia"
                    aspect="aspect-[4/3]"
                    priority={true}
                    fallbackIcon={Share2}
                    badgeText="Social Media Strategy Hub"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Section 1: Why Businesses in Saudi Arabia Need a Social Media Marketing Strategy */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <span className="px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-800 text-xs sm:text-sm font-semibold tracking-wide">
              Strategic Foundation
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Businesses in Saudi Arabia Need a Social Media Marketing Strategy
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Social media works best as one part of a wider digital marketing plan. Used well, it helps you:
            </p>
          </div>

          {/* 7 Benefit Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {strategyBenefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-gray-50 border border-gray-200 hover:border-purple-300 hover:bg-purple-50/30 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{benefit.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Verbatim Explanatory Context and Example Box */}
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="p-6 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-950 text-sm leading-relaxed space-y-3">
              <div className="flex items-center gap-2 font-bold text-amber-900 text-base">
                <Store className="w-5 h-5 text-amber-700" />
                <span>Hypothetical Industry Example</span>
              </div>
              <p>
                Opening accounts on every platform won't deliver results by itself. Each platform needs its own content approach, a realistic publishing schedule, and a clear purpose.
              </p>
              <p className="italic">
                Here's a hypothetical example, not a client project. A Riyadh-based furniture retailer posts short product demonstrations and practical buying advice, helping customers explore the range before they visit the website or showroom.
              </p>
              <p className="text-xs text-amber-800 font-semibold pt-1">
                Results still depend on audience relevance, content quality, offer clarity, customer service, and consistency.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-purple-50/60 border border-purple-200 text-slate-800 text-sm sm:text-base leading-relaxed space-y-3">
              <h4 className="font-bold text-purple-950 text-base flex items-center gap-2">
                <Compass className="w-5 h-5 text-purple-700" />
                <span>Starting with Questions Before Posting Anything</span>
              </h4>
              <p>
                That's why we start with questions before we post anything. Who are you trying to reach? What do you want them to do next? And what can your team realistically handle once messages and enquiries start arriving? A plan built on honest answers is far easier to run, and far easier to measure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Social Media Marketing Services in Saudi Arabia Offered by DigLip7 */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-800 text-xs sm:text-sm font-semibold tracking-wide">
              Complete Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Social Media Marketing Services in Saudi Arabia Offered by DigLip7
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Our social media marketing services in Saudi Arabia work together as one strategy. The final scope depends on your requirements and the objectives we agree, and not every service is included in every package.
            </p>
          </div>

          {/* 6 Core Service Cards with Clean Image Slots */}
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

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {service.desc}
                    </p>

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

                  {/* Clean Image Section Container (without actual raw image file) */}
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <SocialImageSlot
                      src={service.imgSrc}
                      alt={service.imgAlt}
                      aspect="aspect-[16/9]"
                      fallbackIcon={Icon}
                      badgeText={service.badge}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: Social Media Marketing Solutions for Different Industries */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-800 text-xs sm:text-sm font-semibold tracking-wide">
              Industry Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Social Media Marketing Solutions for Different Industries
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Strategy should reflect your business model, audience, and customer journey.
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
                        : "bg-gray-50 border-gray-200 text-slate-700 hover:bg-purple-50/50 hover:border-purple-200"
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
                          {ind.title.replace("Social Media Marketing for ", "")}
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
                  className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-white via-purple-50/30 to-pink-50/20 border border-purple-200 shadow-md space-y-6"
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

                  <div className="p-5 rounded-2xl bg-white border border-gray-200 text-slate-700 leading-relaxed text-base">
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

      {/* Section 4: Choosing the Right Social Media Platforms in Saudi Arabia */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-800 text-xs sm:text-sm font-semibold tracking-wide">
              Platform Matrix
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Choosing the Right Social Media Platforms in Saudi Arabia
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Platform choice should follow your audience, content format, business model, and objectives. You don't need every platform, only the ones that fit your goals.
            </p>
          </div>

          {/* 4 Platform Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {platformCards.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl p-6 sm:p-7 bg-white border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${p.color} text-white flex items-center justify-center shadow-xs`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{p.name}</h3>
                      <span className="text-xs text-purple-700 font-semibold">
                        Saudi Market Channel
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">{p.desc}</p>

                  <div className={`p-3.5 rounded-xl border ${p.bgLight} space-y-1`}>
                    <span className="text-[11px] font-bold uppercase tracking-wider block text-slate-700">
                      Primary Strategic Fit:
                    </span>
                    <span className={`text-xs font-semibold ${p.textLight}`}>{p.bestFor}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Platform Strategy Image Container */}
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-purple-200 text-center space-y-3 shadow-xs">
              <span className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold">
                Bilingual Content Relevance
              </span>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto">
                Arabic, English, or bilingual content should reflect your audience and your ability to produce accurate, useful material. We'll recommend focusing on the channels most relevant to your agreed goals.
              </p>
            </div>

            <SocialImageSlot
              src={platformImg}
              alt="Social media platform selection matrix for Saudi Arabia covering Instagram, LinkedIn, TikTok and YouTube"
              aspect="aspect-[21/9]"
              fallbackIcon={Layers}
              badgeText="Platform Strategy Framework"
            />
          </div>
        </div>
      </section>

      {/* Section 5: Our Social Media Marketing Process */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-800 text-xs sm:text-sm font-semibold tracking-wide">
              Structured Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Social Media Marketing Process
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Here's the workflow we typically follow. It isn't rigid, because a small local business and a large corporate team won't need the same depth at every stage. But the order stays the same: understand first, plan second, publish third, and learn from the results.
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
          <div className="max-w-4xl mx-auto">
            <SocialImageSlot
              src={processImg}
              alt="Six-step social media marketing workflow from audit and research to publishing and reporting"
              aspect="aspect-[21/9]"
              fallbackIcon={Repeat}
              badgeText="Process Workflow Container"
            />
          </div>
        </div>
      </section>

      {/* Section 6: Arabic and English Social Media Campaigns in Saudi Arabia (Clean Simple Image Div!) */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-pink-50/60 via-purple-50/40 to-white text-slate-900 border-b border-purple-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-800 border border-purple-200 text-xs sm:text-sm font-semibold tracking-wide">
                Cultural & Regional Intelligence
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-slate-900">
                Arabic and English Social Media Campaigns in Saudi Arabia
              </h2>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  Language shapes how your message lands. Some businesses communicate best in Arabic, some in English, and some in both. The choice should reflect your audience, industry, campaign purpose, and customer support capabilities, not assumptions about all customers.
                </p>
                <p>
                  Translating English content word for word rarely works. Accurate translation, natural phrasing, suitable creative assets, and consistent brand messaging across languages matter far more.
                </p>
                <p>
                  Before publishing, review creative assets, promotional terms, dates, and contact details in every language version.
                </p>
                <p>
                  For paid campaigns, audience settings, creative variations, and objectives should be tested and judged against relevant data and platform policies.
                </p>
              </div>

              {/* Hypothetical Example Card */}
              <div className="p-5 rounded-2xl bg-white border border-purple-200 shadow-xs space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-700 flex items-center gap-1.5">
                  <Languages className="w-4 h-4" />
                  <span>Hypothetical Testing Example</span>
                </span>
                <p className="text-sm text-slate-700 italic">
                  Here's another hypothetical example. A Jeddah-based retailer might publish one set of product demonstrations in Arabic and another in English, then compare how each performs before putting more budget behind either.
                </p>
              </div>

              {/* City Targets */}
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                <span className="px-3 py-1.5 rounded-lg bg-white border border-purple-200 shadow-xs">
                  Riyadh Corporate & Retail Audiences
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-white border border-purple-200 shadow-xs">
                  Jeddah Consumer & Lifestyle Markets
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
                  <SocialImageSlot
                    src={bilingualImg}
                    alt="Arabic and English social media creative planning for a Saudi business"
                    aspect="aspect-[4/3]"
                    fallbackIcon={Languages}
                    badgeText="Arabic & English Consistency"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Common Social Media Marketing Problems We Help Businesses Address */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <span className="px-3.5 py-1.5 rounded-full bg-rose-100 text-rose-800 text-xs sm:text-sm font-semibold tracking-wide">
              Account Health & Audit
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Common Social Media Marketing Problems We Help Businesses Address
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              A social media audit may uncover issues such as:
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
                  <span className="text-xs sm:text-sm font-medium">{prob}</span>
                  <div
                    className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 ml-3 transition-colors ${isChecked
                        ? "bg-rose-600 text-white"
                        : "border border-gray-300 bg-white text-transparent"
                      }`}
                  >
                    <Check className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="max-w-3xl mx-auto p-5 rounded-2xl bg-gray-50 border border-gray-200 text-center text-xs sm:text-sm text-slate-600 leading-relaxed">
            These are possibilities to investigate, not problems every business has. The goal is to find which ones matter most and build a practical plan to improve.
          </div>
        </div>
      </section>

      {/* Section 8: How We Measure Social Media Marketing Performance */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-800 text-xs sm:text-sm font-semibold tracking-wide">
              Data & Accountability
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              How We Measure Social Media Marketing Performance
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Social media should be measured against agreed business goals, not follower counts alone. Depending on your objectives, we may track:
            </p>
          </div>

          {/* 9 Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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

          {/* Analytical Honesty Note */}
          <div className="max-w-4xl mx-auto p-6 sm:p-7 rounded-3xl bg-white border border-purple-200 shadow-xs space-y-4 text-sm text-slate-700 leading-relaxed">
            <div className="flex items-center gap-2 font-bold text-purple-950 text-base">
              <ShieldCheck className="w-5 h-5 text-purple-700" />
              <span>Transparent Measurement & Realistic Principles</span>
            </div>
            <p>
              We use platform analytics, Google Analytics, and suitable advertising dashboards. Measurement depends on correct tracking, campaign setup, consent requirements, and data quality. Reach, engagement, leads, and sales can also shift with creative quality, competition, audience relevance, platform changes, and budget, so we don't promise follower growth, engagement rates, sales, or advertising returns.
            </p>
            <p className="font-medium text-slate-900">
              Numbers only help when someone explains them. So alongside any report, we aim to say what the figures mean for your business, what we'd change next, and what we'd leave alone.
            </p>
          </div>
        </div>
      </section>

      {/* Section 9: Why Choose DigLip7 for Social Media Marketing Saudi Arabia? */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-800 text-xs sm:text-sm font-semibold tracking-wide">
              Trust & Fit
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Choose DigLip7 for Social Media Marketing Saudi Arabia?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Choosing an agency comes down to trust and fit. We aim to bring:
            </p>
          </div>

          {/* 9 Pillars Grid */}
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

          {/* Honest Advice Callout */}
          <div className="max-w-3xl mx-auto p-6 rounded-2xl bg-purple-50/80 border border-purple-200 text-center space-y-3">
            <h4 className="font-bold text-purple-950 text-base">
              A First Conversation Centered on Truth
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              A first conversation can help you decide whether you need a new strategy, regular account management, creative support, paid campaigns, or better performance tracking.
            </p>
            <p className="text-xs sm:text-sm text-purple-900 font-semibold">
              We'd rather tell you what's realistic than promise viral growth. If social media isn't the best place for your next marketing budget, or if one platform deserves most of your attention, we'll say so.
            </p>
          </div>
        </div>
      </section>

      {/* Section 10: Frequently Asked Questions About Social Media Marketing Saudi Arabia */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <span className="px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-800 text-xs sm:text-sm font-semibold tracking-wide">
              Questions & Answers
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions About Social Media Marketing Saudi Arabia
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Clear, transparent answers to practical questions about our social media services.
            </p>
          </div>

          {/* Search Input for FAQs */}
          <div className="relative mb-8 max-w-xl mx-auto">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={faqSearch}
              onChange={(e) => setFaqSearch(e.target.value)}
              placeholder="Search social media marketing questions..."
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-sm text-slate-900 shadow-xs"
            />
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl bg-white border border-gray-200 overflow-hidden shadow-xs transition-colors hover:border-purple-200"
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
                      <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm text-slate-700 leading-relaxed border-t border-gray-100 pt-4">
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

      {/* Section 11: Get Started with Social Media Marketing Saudi Arabia (Final High-Contrast CTA) */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-purple-100 via-pink-50 to-indigo-100 border-t border-purple-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <span className="px-3.5 py-1.5 rounded-full bg-purple-200 text-purple-950 text-xs sm:text-sm font-semibold tracking-wide">
              Ready for Next Steps?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
              Get Started with Social Media Marketing Saudi Arabia
            </h2>
            <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed">
              The first step is understanding your business, target audience, current social media presence, marketing objectives, and available resources. Then we can talk about a practical way forward.
            </p>
            <p className="text-sm sm:text-base text-slate-700 max-w-2xl mx-auto leading-relaxed">
              Looking to build a more effective social media presence in Saudi Arabia?{" "}
              <Link
                to="/contact"
                className="text-purple-800 underline font-bold hover:text-purple-950"
              >
                Contact DigLip7
              </Link>{" "}
              to discuss your business goals, target audience, and current marketing activities. We can help you identify practical opportunities to improve content planning, strengthen brand communication, and develop a social media strategy aligned with your objectives.
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
                <span>Request a Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>

            <a
              href="https://wa.me/919650608788?text=Hello%20DigLip7%20Team%2C%20I%20would%20like%20to%20discuss%20Social%20Media%20Marketing%20Saudi%20Arabia."
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

          {/* Related Cross-Location Services Links */}
          <div className="pt-8 border-t border-purple-200/80">
            <span className="text-xs text-slate-600 font-semibold uppercase tracking-wider block mb-3">
              Explore More Saudi Arabia Digital Services
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
                to="/saudi-arabia/web-design/"
                className="px-4 py-2 rounded-xl bg-white border border-purple-200 text-purple-900 hover:bg-purple-50 transition-colors shadow-xs"
              >
                Web Design Saudi Arabia
              </Link>
              <Link
                to="/saudi-arabia/content-marketing-services/"
                className="px-4 py-2 rounded-xl bg-white border border-purple-200 text-purple-900 hover:bg-purple-50 transition-colors shadow-xs"
              >
                Content Marketing Saudi Arabia
              </Link>
              <Link
                to="/saudi-arabia/online-reputation-management/"
                className="px-4 py-2 rounded-xl bg-white border border-purple-200 text-purple-900 hover:bg-purple-50 transition-colors shadow-xs"
              >
                Reputation Management Saudi Arabia
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SaudiSocialMediaMarketing;
