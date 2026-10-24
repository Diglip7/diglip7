import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../../../components/SEO";
import {
  Mail,
  Send,
  Inbox,
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
  Users,
  Briefcase,
  Store,
  Compass,
  MessageSquare,
  Lock,
  Search,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

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
const FloatingElement = ({ children, delay = 0 }) => (
  <motion.div
    animate={{
      y: [0, -10, 0],
    }}
    transition={{
      duration: 3.5,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay,
    }}
  >
    {children}
  </motion.div>
);

// Fallback / Styled Media Slot
const EmailMediaSlot = ({
  icon: Icon = Mail,
  badgeText = "",
  title = "",
  subtitle = "",
  className = "",
  aspect = "aspect-[4/3]",
}) => {
  return (
    <div
      className={`relative w-full rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-50/70 via-white to-sky-50/50 border border-indigo-100 shadow-sm flex items-center justify-center ${aspect} ${className}`}
    >
      <div className="p-6 sm:p-8 text-center flex flex-col items-center justify-center gap-3 w-full h-full bg-gradient-to-b from-white/90 to-indigo-50/40 border-2 border-dashed border-indigo-200/80 rounded-2xl">
        <div className="w-14 h-14 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center shadow-xs">
          <Icon className="w-7 h-7" />
        </div>
        <div className="space-y-1.5 max-w-sm">
          <span className="block leading-snug text-sm sm:text-base font-bold text-gray-800">
            {title}
          </span>
          {badgeText && (
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800 text-[11px] font-semibold">
              {badgeText}
            </span>
          )}
          {subtitle && (
            <span className="text-[12px] text-gray-500 block pt-0.5">
              {subtitle}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// Page Data Structures (Verbatim Content Aligned with Prompt)
// ---------------------------------------------------------------------------

const breadcrumbTrail = [
  { label: "Home", href: "/" },
  { label: "Saudi Arabia", href: "/saudi-arabia/" },
  { label: "Email Marketing Services in Saudi Arabia", href: "/saudi-arabia/email-marketing-services/" },
];

const coreServices = [
  {
    id: "strategy-planning",
    title: "Email Marketing Strategy and Planning",
    short: "Business objectives, customer journey, and scheduled campaigns",
    desc: "A practical strategy begins with understanding your business: your objectives, target audience, campaign purpose, customer journey, sending frequency, content plan, schedule, and how results will be measured. This planning helps you avoid irrelevant or repetitive messages and gives every campaign a reason to exist.",
    icon: Target,
    badge: "Foundational Strategy",
    features: [
      "Target audience definition and buyer journey mapping",
      "Campaign objective definition and clear success metrics",
      "Editorial calendar and optimal sending frequency rhythms",
      "Message architecture designed to eliminate repetition",
    ],
  },
  {
    id: "design-content",
    title: "Email Campaign Design and Content Creation",
    short: "Readable layouts, clear subject lines, and mobile-friendly design",
    desc: "Design and copy shape how your message is read. We focus on clear subject lines, relevant preview text, readable layouts, responsive design, brand consistency, useful content, clear calls to action, and mobile-friendly formatting. Good email design supports readability rather than adding visual complexity, and while it can improve the reading experience, no layout guarantees conversions.",
    icon: FileText,
    badge: "Creative & Copywriting",
    features: [
      "Engaging subject lines and intent-focused preview text",
      "Responsive, clean layouts optimized for mobile devices",
      "Brand consistency across fonts, tones, and visual assets",
      "Single, unambiguous primary calls to action (CTAs)",
    ],
  },
  {
    id: "list-segmentation",
    title: "Email List Segmentation",
    short: "Interest, behaviour, and lifecycle-based contact grouping",
    desc: "Segmentation lets you send more relevant emails by grouping contacts according to factors such as interests, previous interactions, purchase history (where appropriately collected), lifecycle stage, product category, business relationship, or subscription preferences. It must rely only on information collected appropriately and with permission. We do not recommend buying email lists or sending unsolicited bulk email.",
    icon: Filter,
    badge: "Audience Precision",
    features: [
      "Lifecycle stage and relationship status segmentation",
      "Purchase history and product interest categorization",
      "Strict reliance on permission-based, compliant data",
      "Zero tolerance for purchased lists or unsolicited spam",
    ],
  },
  {
    id: "automation",
    title: "Email Marketing Automation",
    short: "Welcome flows, onboarding, cart reminders, and re-engagement",
    desc: "Automation supports planned communication such as welcome emails, subscriber onboarding, enquiry follow-up, abandoned cart emails where appropriate, feedback requests, post-purchase messages, product updates, and re-engagement campaigns. Automated emails should be useful, properly configured, and respectful of customer preferences. They still need monitoring; automation does not replace ongoing review.",
    icon: Zap,
    badge: "Smart Workflows",
    features: [
      "New subscriber welcome and onboarding sequences",
      "Timely enquiry follow-ups and service updates",
      "Post-purchase communication and feedback collection",
      "Continuous trigger monitoring and flow hygiene checks",
    ],
  },
  {
    id: "promotional-campaigns",
    title: "Promotional Email Campaigns",
    short: "Product launches, seasonal offers, and timely business updates",
    desc: "Promotional emails can announce product launches, service news, seasonal campaigns, special offers, events, and business updates. Campaign quality depends on relevance, timing, audience selection, and clear messaging, so each promotion is planned around what your audience actually wants to know.",
    icon: Sparkles,
    badge: "Direct Impact",
    features: [
      "New product and service announcement broadcasts",
      "Seasonal and cultural campaign planning in the Kingdom",
      "Event invitations and high-priority company updates",
      "Audience-matched promotions with verified relevance",
    ],
  },
  {
    id: "b2b-email",
    title: "B2B Email Marketing",
    short: "Business newsletters, educational nurturing, and enquiry follow-ups",
    desc: "For B2B companies, email works well for business newsletters, educational content, lead nurturing, service announcements, industry updates, and enquiry follow-up. The emphasis should be on useful information and appropriate communication, not aggressive sales messages that damage trust.",
    icon: Building2,
    badge: "B2B Focus",
    features: [
      "Thought leadership newsletters and industry briefings",
      "Decision-maker lead nurturing sequences",
      "Professional service announcements and capability overviews",
      "Trust-building, consultative follow-up workflows",
    ],
  },
  {
    id: "ecommerce-email",
    title: "E-commerce Email Marketing",
    short: "Lifecycle messages, cart recovery, and repeat purchase loyalty",
    desc: "Online stores can use email for product announcements, recommendations, retention campaigns, abandoned cart reminders, relevant promotions, and post-purchase communication. It helps to separate promotional emails from transactional ones such as order confirmations. Marketing emails should only go to people who have given appropriate permission.",
    icon: ShoppingBag,
    badge: "E-Commerce",
    features: [
      "High-intent abandoned cart reminder workflows",
      "Post-purchase cross-sell and retention campaigns",
      "Separation of transactional receipts and marketing emails",
      "Permission-governed promotional product catalogs",
    ],
  },
  {
    id: "performance-tracking",
    title: "Email Marketing Performance Tracking",
    short: "Delivery, clicks, conversion tracking, and enquiry evaluation",
    desc: "We help you evaluate delivery, bounces, opens (where reliably measured), clicks, unsubscribes, conversion tracking, engagement, landing page performance, and email-generated enquiries. Open rates can be distorted by privacy features and tracking limits, so we do not treat them as a perfect measure of engagement.",
    icon: BarChart3,
    badge: "Measurement",
    features: [
      "Accurate click-through rate (CTR) and bounce tracking",
      "Conversion tracking linked to inquiries and orders",
      "Realistic interpretation of privacy-affected open rates",
      "Post-click landing page behavior and retention analytics",
    ],
  },
];

const businessSolutions = [
  {
    id: "ecommerce",
    title: "Email Marketing for E-commerce Businesses",
    tagline: "Drive repeat orders and nurture online shopper loyalty",
    desc: "Stores benefit from product update emails, retention campaigns, relevant promotions, and lifecycle messages that follow the customer from first purchase to repeat orders.",
    icon: ShoppingBag,
    color: "from-blue-600 to-indigo-700",
    highlights: [
      "Automated post-purchase care and product recommendation emails",
      "Cart abandonment reminders timed for highest consideration",
      "Seasonal sales campaigns tailored to retail calendar events",
      "Strict separation of transactional confirmations and promotional flows",
    ],
  },
  {
    id: "b2b",
    title: "Email Marketing for B2B Companies",
    tagline: "Build trust with decision-makers before sales conversations",
    desc: "B2B email centres on newsletters, lead nurturing, service information, and educational content that helps decision-makers understand what you offer before they speak to sales.",
    icon: Building2,
    color: "from-indigo-600 to-violet-700",
    highlights: [
      "Educational business newsletters with practical insights",
      "Multi-touch lead nurturing tailored to long sales cycles",
      "Whitepapers, case studies, and capability decks distribution",
      "Polite, non-intrusive sales enquiry follow-up sequences",
    ],
  },
  {
    id: "service",
    title: "Email Marketing for Service Businesses",
    tagline: "Nurture client relationships and maintain regular touchpoints",
    desc: "Service providers can use email for appointment-related communication, enquiry follow-ups, service updates, and ongoing customer relationship management.",
    icon: Briefcase,
    color: "from-sky-600 to-teal-700",
    highlights: [
      "Enquiry follow-ups that answer customer questions swiftly",
      "Appointment confirmations and renewal reminders",
      "Service scope updates, advisory notes, and company news",
      "Long-term client relationship management (CRM) integration",
    ],
  },
  {
    id: "startups",
    title: "Email Marketing for Startups and Small Businesses",
    tagline: "Start lean, build permitted audiences, and grow steadily",
    desc: "Smaller businesses can start simple: one clear objective, a manageable audience, consistent communication, and basic performance measurement. You can add segmentation and automation as the list grows.",
    icon: Store,
    color: "from-emerald-600 to-teal-700",
    highlights: [
      "Focused initial subscriber list acquisition setup",
      "Single-objective monthly or bi-weekly newsletters",
      "Basic automation triggers (welcome sequence & inquiry replies)",
      "Progressive segmentation added only when list size warrants it",
    ],
  },
  {
    id: "established",
    title: "Email Marketing for Established Brands",
    tagline: "Orchestrate multi-segment campaigns without message fatigue",
    desc: "Larger brands often need stronger segmentation, structured campaign planning, lifecycle communication, and coordination so that several campaigns do not compete for the same subscriber’s attention.",
    icon: Layers,
    color: "from-purple-600 to-indigo-800",
    highlights: [
      "Granular multi-tier segmentation across customer cohorts",
      "Cross-departmental campaign coordination and frequency caps",
      "Advanced lifecycle communication preventing subscriber fatigue",
      "Custom template design libraries aligned with global brand guidelines",
    ],
  },
];

const processSteps = [
  {
    step: "Step 1",
    title: "Understand Your Business Goals",
    desc: "We identify what the campaign should achieve, whether that is generating relevant enquiries, sharing product information, promoting an offer, improving customer communication, or supporting retention.",
    icon: Target,
  },
  {
    step: "Step 2",
    title: "Review the Existing Email Marketing Setup",
    desc: "We assess your email platform, subscriber collection methods, current campaigns, segmentation, templates, consent records, and tracking setup.",
    icon: Search,
  },
  {
    step: "Step 3",
    title: "Develop the Campaign Strategy",
    desc: "We define audience selection, campaign purpose, messaging, frequency, and content planning.",
    icon: Compass,
  },
  {
    step: "Step 4",
    title: "Create Email Content and Design",
    desc: "Subject lines, email copy, visual layouts, and calls to action are written and designed to match your brand and audience.",
    icon: FileText,
  },
  {
    step: "Step 5",
    title: "Configure and Test Campaigns",
    desc: "Before sending, we check email rendering, mobile responsiveness, links, personalisation, sender information, unsubscribe functionality, and tracking configuration.",
    icon: Settings,
  },
  {
    step: "Step 6",
    title: "Launch and Monitor",
    desc: "After launch, we review delivery and early performance so issues can be spotted and handled quickly.",
    icon: Send,
  },
  {
    step: "Step 7",
    title: "Analyse and Improve",
    desc: "Campaign data informs future messaging, segmentation, timing, and content decisions. We do not guarantee a specific result, but we aim to learn from every send.",
    icon: BarChart3,
  },
];

const cityLocations = [
  {
    city: "Riyadh",
    role: "Capital & Commercial Hub",
    desc: "Tailored for headquarters, government suppliers, corporate enterprise, and booming B2B technology ecosystems.",
    icon: Building2,
  },
  {
    city: "Jeddah",
    role: "Western Gateway & Retail Hub",
    desc: "Ideal for retail brands, consumer e-commerce, trade, hospitality, and fast-paced consumer goods.",
    icon: Store,
  },
  {
    city: "Dammam & Khobar",
    role: "Eastern Industrial & Energy Center",
    desc: "Crafted for industrial services, energy sector vendors, logistics operators, and technical contracting firms.",
    icon: Compass,
  },
  {
    city: "Makkah & Madinah",
    role: "Religious Tourism & Hospitality",
    desc: "Specialized for seasonal hospitality, transport providers, travel support, and regional retail operations.",
    icon: MapPin,
  },
];

const emailChallenges = [
  {
    challenge: "Low engagement",
    solution: "Review subject lines, content relevance, and send timing, and test changes one at a time.",
  },
  {
    challenge: "Irrelevant content",
    solution: "Tie every email to a defined audience need and objective.",
  },
  {
    challenge: "Poor segmentation",
    solution: "Group contacts by interests, behaviour, or lifecycle stage using permitted data.",
  },
  {
    challenge: "Excessive frequency",
    solution: "Set a sending rhythm and let subscribers manage their preferences.",
  },
  {
    challenge: "Unclear calls to action",
    solution: "Give each email one primary action.",
  },
  {
    challenge: "Invalid email addresses",
    solution: "Use proper sign-up forms and clean the list regularly.",
  },
  {
    challenge: "Deliverability problems",
    solution: "Implement permission-based collection, sender authentication (SPF/DKIM/DMARC), and bounce monitoring.",
  },
  {
    challenge: "Inconsistent branding",
    solution: "Use consistent templates, tone, and sender details.",
  },
  {
    challenge: "Weak tracking",
    solution: "Set up click, conversion, and enquiry tracking before launch.",
  },
  {
    challenge: "Unclear objectives",
    solution: "Define the goal and success measure first.",
  },
];

const performanceMetrics = [
  {
    name: "Emails Delivered",
    metric: "Delivery Rate",
    desc: "Percentage of sent emails successfully accepted by recipient mail servers without hard bounces.",
    icon: Send,
  },
  {
    name: "Bounce Rate",
    metric: "Hard & Soft Bounces",
    desc: "Monitoring address validity and mailbox capacity to safeguard sender domain reputation.",
    icon: AlertTriangle,
  },
  {
    name: "Click-Through Rate (CTR)",
    metric: "Engagement",
    desc: "Proportion of recipients who found content relevant enough to click through to your website.",
    icon: MousePointerClick,
  },
  {
    name: "Unsubscribe & Complaint Rates",
    metric: "List Hygiene",
    desc: "Direct feedback on message frequency and relevance, keeping list quality transparent and compliant.",
    icon: Users,
  },
  {
    name: "Conversion Tracking",
    metric: "Revenue & Orders",
    desc: "Tracking online purchases, form submissions, and direct commercial actions attributed to campaigns.",
    icon: CheckCircle2,
  },
  {
    name: "Qualified Enquiries",
    metric: "Pipeline Impact",
    desc: "Direct inbound enquiries and sales discussions initiated through targeted email sequences.",
    icon: MessageSquare,
  },
  {
    name: "Landing Page Activity",
    metric: "Post-Click Behavior",
    desc: "Evaluating bounce rate, time on page, and navigation paths for visitors arriving from email links.",
    icon: Activity,
  },
  {
    name: "Retention & Repeat Activity",
    metric: "Customer Lifetime Value",
    desc: "Measuring repeat transactions and recurring engagement among existing customers over time.",
    icon: RefreshCw,
  },
];

const whyDiglip7Pillars = [
  {
    title: "Business-Focused Campaign Planning",
    desc: "Every campaign is grounded in specific business objectives rather than arbitrary sending schedules.",
    icon: Target,
  },
  {
    title: "Audience Relevance & Segmentation",
    desc: "Messages are crafted for distinct groups using permitted data, ensuring communications remain useful and respected.",
    icon: Users,
  },
  {
    title: "Thoughtful Design & Persuasive Copy",
    desc: "Clean, readable mobile layouts and clear messaging that support readability instead of adding visual clutter.",
    icon: FileText,
  },
  {
    title: "Reliable Automation Architecture",
    desc: "Purposeful workflows for onboarding, enquiry follow-ups, and customer updates that run seamlessly in the background.",
    icon: Zap,
  },
  {
    title: "Rigorous Pre-Launch Campaign Testing",
    desc: "Thorough verification of rendering, mobile display, tracking links, personalization tags, and unsubscribe functions.",
    icon: Settings,
  },
  {
    title: "Objective Tracking & Honest Reporting",
    desc: "Transparent evaluation of clicks, enquiries, and conversions without misleading vanity metrics or false promises.",
    icon: BarChart3,
  },
  {
    title: "Continuous Refinement & Learning",
    desc: "Data-driven adjustments to timing, messaging, and segmentation to continuously improve future campaign performance.",
    icon: RefreshCw,
  },
  {
    title: "Holistic Digital Marketing Coordination",
    desc: "Where relevant, your email campaigns coordinate harmoniously with SEO, paid search, and social media initiatives.",
    icon: Layers,
  },
];

const faqs = [
  {
    q: "What are email marketing services in Saudi Arabia?",
    a: "Email marketing services help businesses in Saudi Arabia plan, design, send, and measure email communication. They typically include campaign strategy, email design and copywriting, audience segmentation, automation, and performance tracking.",
  },
  {
    q: "Why should businesses use email marketing?",
    a: "Email gives businesses a direct, permission-based channel to support customer communication, nurture enquiries, share product and service updates, and encourage repeat engagement.",
  },
  {
    q: "How much do email marketing services cost in Saudi Arabia?",
    a: "Cost depends on campaign volume, subscriber list size, platform requirements, content creation needs, automation complexity, and overall service scope. DigLip7 can provide a quote after reviewing your requirements.",
  },
  {
    q: "Can email marketing help generate business leads?",
    a: "Relevant campaigns and lead nurturing sequences can support enquiries, but results depend on audience quality, offer relevance, and campaign execution. No specific outcome can be guaranteed.",
  },
  {
    q: "Do you provide email marketing automation services?",
    a: "Yes. Automation can support welcome emails, enquiry follow-ups, customer updates, feedback requests, and re-engagement workflows, configured to suit your audience and email platform.",
  },
  {
    q: "Is email marketing suitable for small businesses in Saudi Arabia?",
    a: "Yes. Small businesses can start with a clear objective, permission-based subscriber collection, useful content, and basic performance measurement, then expand gradually.",
  },
  {
    q: "Can you create emails in Arabic and English?",
    a: "Language should follow your audience and business needs. Campaigns can be planned in English, Arabic, or both, depending on who you are communicating with and what they expect.",
  },
  {
    q: "How do I get started with DigLip7?",
    a: "Contact DigLip7 to discuss your goals, current email setup, and audience. We will review the information and suggest a practical way forward.",
  },
];

// ---------------------------------------------------------------------------
// Main Component: SaudiEmailMarketing
// ---------------------------------------------------------------------------

const SaudiEmailMarketing = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [faqSearch, setFaqSearch] = useState("");
  const [selectedSolution, setSelectedSolution] = useState(0);

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.q.toLowerCase().includes(faqSearch.toLowerCase()) ||
      faq.a.toLowerCase().includes(faqSearch.toLowerCase())
  );

  const pageUrl = "https://diglip7.com/saudi-arabia/email-marketing-services/";

  // Part 3: Schema Markup Code (JSON-LD @graph)
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://diglip7.com/#organization",
        name: "DigLip7 Tech Pvt Ltd",
        url: "https://diglip7.com/",
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
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Email Marketing Services in Saudi Arabia | DigLip7",
        description:
          "Grow customer engagement with Email Marketing Services in Saudi Arabia from DigLip7. Plan campaigns, automate emails, and improve marketing communication.",
        inLanguage: "en-SA",
        isPartOf: { "@id": "https://diglip7.com/#website" },
        breadcrumb: {
          "@id": `${pageUrl}#breadcrumb`,
        },
        about: {
          "@id": `${pageUrl}#service`,
        },
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
            item: "https://diglip7.com/saudi-arabia/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Email Marketing Services in Saudi Arabia",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Email Marketing Services in Saudi Arabia",
        serviceType: "Email Marketing",
        description:
          "Email marketing strategy, campaign design, audience segmentation, automation, and performance tracking for businesses in Saudi Arabia.",
        provider: { "@id": "https://diglip7.com/#organization" },
        areaServed: { "@type": "Country", "name": "Saudi Arabia" },
        url: pageUrl,
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

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-600 selection:text-white pt-20">
      {/* Part 1: SEO Metadata */}
      <SEO
        title="Email Marketing Services in Saudi Arabia | DigLip7"
        exactTitle={true}
        description="Grow customer engagement with Email Marketing Services in Saudi Arabia from DigLip7. Plan campaigns, automate emails, and improve marketing communication."
        canonical={pageUrl}
        robots="index, follow, max-snippet:-1, max-image-preview:large"
        hreflangs={[
          { hreflang: "en-sa", href: pageUrl },
          { hreflang: "x-default", href: pageUrl },
        ]}
        ogType="website"
        ogLocale="en_SA"
        ogTitle="Email Marketing Services in Saudi Arabia | DigLip7"
        ogDescription="Discover email marketing services for Saudi Arabian businesses. DigLip7 helps plan email campaigns, audience segmentation, automation, and performance measurement."
        ogImage="https://diglip7.com/images/Logo.jpg"
        ogImageAlt="Email Marketing Services in Saudi Arabia by DigLip7"
        twitterCard="summary_large_image"
        twitterTitle="Email Marketing Services in Saudi Arabia | DigLip7"
        twitterDescription="Explore email marketing services for businesses in Saudi Arabia, including campaign planning, automation, email design, and performance tracking."
        twitterImage="https://diglip7.com/images/Logo.jpg"
        twitterImageAlt="Email Marketing Services in Saudi Arabia by DigLip7"
        schema={structuredData}
      />

      {/* Breadcrumb Navigation */}
      <nav
        aria-label="Breadcrumb"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs sm:text-sm text-slate-500"
      >
        <ol className="flex items-center space-x-2 flex-wrap">
          {breadcrumbTrail.map((item, index) => (
            <li key={item.label} className="flex items-center space-x-2">
              {index > 0 && <ChevronRight className="w-3.5 h-3.5 text-slate-400" />}
              {index === breadcrumbTrail.length - 1 ? (
                <span className="font-semibold text-indigo-700">{item.label}</span>
              ) : (
                <Link
                  to={item.href}
                  className="hover:text-indigo-600 transition-colors flex items-center gap-1"
                >
                  {index === 0 && <Home className="w-3.5 h-3.5" />}
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* HERO SECTION */}
      <header className="relative overflow-hidden bg-gradient-to-b from-indigo-50/80 via-sky-50/40 to-white text-slate-900 py-16 sm:py-24 lg:py-28 border-b border-slate-200/80">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(99,102,241,0.08),rgba(255,255,255,0))] pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Heading & Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100/80 border border-indigo-200 text-indigo-900 text-xs sm:text-sm font-semibold shadow-xs">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span>Strategic Email Marketing & Automation in Saudi Arabia</span>
              </div>

              {/* Exact H1 from prompt */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Email Marketing Services in Saudi Arabia to Build Better Customer Relationships
              </h1>

              {/* Exact Hero Paragraphs */}
              <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
                <p>
                  Email is still one of the most direct ways to speak with people who have already
                  shown interest in your business. For companies across the Kingdom, it can carry
                  customer updates, product announcements, newsletters, promotions, and
                  follow-ups to new enquiries, all in a channel the business controls.
                </p>
                <p>
                  But email marketing is not about sending the same promotional message to
                  everyone on a list. It works when the right people receive relevant, useful
                  messages that they agreed to receive, and when the results are measured honestly.
                </p>
                <p className="text-slate-800 font-medium bg-indigo-50/80 border-l-4 border-indigo-600 p-3.5 rounded-r-xl">
                  DigLip7 offers email marketing services in Saudi Arabia for businesses that want
                  to plan, create, manage, and improve their email campaigns. Whether you are
                  running an online store, selling to other businesses, or building your first
                  subscriber list, we help you shape communication around your audience and your
                  goals.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="pt-2 flex flex-wrap gap-4">
                <Link to="/contact">
                  <motion.button
                    className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-700 hover:to-sky-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-600/20 flex items-center gap-2 cursor-pointer transition-all duration-200 text-sm sm:text-base"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Discuss Your Email Marketing Strategy</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>

                <a
                  href="https://wa.me/919650608788?text=Hello%20DigLip7%20Team%2C%20I%20would%20like%20to%20discuss%20our%20Email%20Marketing%20Strategy%20in%20Saudi%20Arabia."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    className="px-6 py-4 bg-white hover:bg-emerald-50 text-emerald-950 font-bold rounded-xl border-2 border-emerald-600 shadow-xs flex items-center gap-2 cursor-pointer transition-all duration-200 text-sm sm:text-base"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaWhatsapp className="w-5 h-5 text-emerald-600" />
                    <span>WhatsApp Consultation</span>
                  </motion.button>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-slate-200 grid grid-cols-3 gap-4 text-xs sm:text-sm text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Permission-Based</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>PDPL Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Bilingual Ready</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Visual Card */}
            <div className="lg:col-span-5">
              <Card3D className="relative">
                <div className="relative bg-white/95 border border-indigo-200/90 rounded-3xl p-6 sm:p-8 shadow-xl shadow-indigo-100/50 space-y-6">
                  {/* Card Header */}
                  <div className="flex items-center justify-between border-b border-indigo-100 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900">Campaign Architecture</div>
                        <div className="text-xs text-indigo-700 font-medium">Saudi Market Communications</div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
                      Active Rhythm
                    </span>
                  </div>

                  {/* Flow items */}
                  <div className="space-y-3">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Users className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">Permitted Audience Segmentation</div>
                        <div className="text-[11px] text-slate-600">
                          B2B decision-makers, e-commerce VIPs & regional city cohorts
                        </div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Languages className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">Bilingual Arabic & English Copy</div>
                        <div className="text-[11px] text-slate-600">
                          Tailored cultural nuances matching recipient communication preferences
                        </div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">Authentic Deliverability Protocol</div>
                        <div className="text-[11px] text-slate-600">
                          SPF, DKIM, DMARC records with active bounce & spam prevention
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Live Stats Preview */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3 rounded-xl bg-indigo-50/70 border border-indigo-100 text-center">
                      <div className="text-xl font-bold text-slate-900">100%</div>
                      <div className="text-[11px] text-indigo-900 font-medium">Opt-in Permission Focus</div>
                    </div>
                    <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-100 text-center">
                      <div className="text-xl font-bold text-emerald-700">Action-Driven</div>
                      <div className="text-[11px] text-emerald-900 font-medium">Enquiries & Retention KPIs</div>
                    </div>
                  </div>
                </div>
              </Card3D>
            </div>
          </div>
        </div>
      </header>

      {/* SECTION: WHAT ARE EMAIL MARKETING SERVICES? */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
              Clear Definition
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-4 mb-4">
              What Are Email Marketing Services?
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Email marketing services cover the planning, creation, delivery, and measurement of
              email communication. Businesses use email to stay in touch with existing customers,
              welcome new subscribers, follow up with prospects, and keep business contacts
              informed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-12">
            {/* Practical Channels */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-4">
                  <Inbox className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Scope of Practical Email Communication
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  In practice, that can include marketing newsletters, promotional campaigns,
                  product announcements, lead nurturing, automated customer messages, retention
                  campaigns, e-commerce emails, and general business updates.
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Marketing Newsletters</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Promotional Campaigns</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Product Announcements</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Lead Nurturing Flows</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Automated Customer Messages</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Retention & Loyalty Campaigns</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>E-commerce Lifecycle Emails</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>General Business Updates</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Strategic vs Unstructured */}
            <div className="bg-gradient-to-br from-indigo-50/90 via-sky-50/40 to-white text-slate-900 rounded-2xl p-6 sm:p-8 flex flex-col justify-between border-2 border-indigo-200/90 shadow-sm">
              <div>
                <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Strategic Execution vs. Unstructured Sends
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  There is a real difference between a planned strategy and occasional,
                  unstructured emails. A strategy starts with a clear objective, chooses the right
                  audience for each message, and decides in advance how success will be judged.
                  Without that, emails tend to become repetitive, irrelevant, or easy to ignore.
                </p>
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-white border border-indigo-100 shadow-xs flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                      Defined commercial objectives established before send
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-indigo-100 shadow-xs flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                      Accurate audience segment selection to preserve reader attention
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-indigo-100 shadow-xs flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                      Pre-determined criteria for assessing success and business impact
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: WHY BUSINESSES IN SAUDI ARABIA NEED EMAIL MARKETING */}
      <section className="py-16 sm:py-20 bg-slate-100/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
              Kingdom Nuances
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-4 mb-4">
              Why Businesses in Saudi Arabia Need Email Marketing
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Email helps businesses maintain regular contact with customers, share product and
              service information, support retention, nurture enquiries, promote relevant offers,
              reach B2B prospects, and keep online store customers informed. Over time, consistent
              communication also builds a recognisable brand voice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Regional Variation */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Audience Expectations Across Saudi Cities
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Audiences differ from one place to another. Customers and business contacts in
                Riyadh, Jeddah, Dammam, Khobar, and other Saudi cities may have different needs and
                expectations, so no two businesses should follow exactly the same email strategy.
                Good planning considers business type, audience preferences, sending frequency,
                language, and what customers expect from you.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                <span className="px-3 py-1 bg-slate-100 rounded-lg">Riyadh (Corporate & B2B)</span>
                <span className="px-3 py-1 bg-slate-100 rounded-lg">Jeddah (Retail & Trade)</span>
                <span className="px-3 py-1 bg-slate-100 rounded-lg">Eastern Province (Industrial)</span>
                <span className="px-3 py-1 bg-slate-100 rounded-lg">Makkah & Madinah (Hospitality)</span>
              </div>
            </div>

            {/* Language Strategy */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
                <Languages className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Linguistic Approach: Arabic, English & Bilingual
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Language deserves particular attention. Some audiences respond best to Arabic, some
                to English, and some to a bilingual approach. The right choice depends on who you
                are writing to and what your business requires, not on an assumption that everyone
                prefers the same language.
              </p>
              <div className="space-y-2 pt-2">
                <div className="p-2.5 rounded-lg bg-indigo-50/60 border border-indigo-100 text-xs sm:text-sm text-indigo-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span><strong>Arabic:</strong> High resonant value for local consumers and government stakeholders.</span>
                </div>
                <div className="p-2.5 rounded-lg bg-sky-50/60 border border-sky-100 text-xs sm:text-sm text-sky-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                  <span><strong>English:</strong> Standard for international expats, technical executives, and multinational B2B.</span>
                </div>
                <div className="p-2.5 rounded-lg bg-purple-50/60 border border-purple-100 text-xs sm:text-sm text-purple-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                  <span><strong>Bilingual:</strong> Parallel rendering guaranteeing effortless accessibility for mixed subscriber bases.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: OUR EMAIL MARKETING SERVICES IN SAUDI ARABIA */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
              End-to-End Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-4 mb-4">
              Our Email Marketing Services in Saudi Arabia
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Our services can be selected individually or combined, depending on your goals,
              existing email systems, audience size, and campaign requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {coreServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl border border-slate-200/90 hover:border-indigo-300 p-6 sm:p-8 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                        {service.badge}
                      </span>
                    </div>

                    <div>
                      {/* Exact H3 as requested */}
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                        {service.title}
                      </h3>
                      <div className="text-xs text-indigo-600 font-medium mt-1">
                        {service.short}
                      </div>
                    </div>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {service.desc}
                    </p>

                    <div className="pt-2 border-t border-slate-100 space-y-2">
                      {service.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-4 border-t border-slate-100">
                    <Link
                      to="/contact"
                      className="text-xs sm:text-sm font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 group"
                    >
                      <span>Inquire about {service.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION: EMAIL MARKETING SOLUTIONS FOR DIFFERENT BUSINESSES IN SAUDI ARABIA */}
      <section className="py-16 sm:py-24 bg-slate-100/80 text-slate-900 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
              Sector Specialization
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-4 mb-4">
              Email Marketing Solutions for Different Businesses in Saudi Arabia
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Tailoring email campaigns to your operational model ensures every send delivers
              practical value to recipients and tangible returns for your business.
            </p>
          </div>

          {/* Interactive Tab Switcher */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {businessSolutions.map((solution, index) => {
              const Icon = solution.icon;
              const isActive = selectedSolution === index;
              return (
                <button
                  key={solution.id}
                  onClick={() => setSelectedSolution(index)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/25"
                      : "bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200 shadow-xs"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{solution.title.replace("Email Marketing for ", "")}</span>
                </button>
              );
            })}
          </div>

          {/* Solution Detail Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSolution}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 text-indigo-800 border border-indigo-200 text-xs font-semibold">
                    {businessSolutions[selectedSolution].tagline}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    {businessSolutions[selectedSolution].title}
                  </h3>
                  <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                    {businessSolutions[selectedSolution].desc}
                  </p>
                  <div className="pt-2 space-y-2.5">
                    {businessSolutions[selectedSolution].highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Link to="/contact">
                      <motion.button
                        className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-xs sm:text-sm flex items-center gap-2 cursor-pointer shadow-md shadow-indigo-600/20"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <span>Request Custom Proposal</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-50/80 via-sky-50/40 to-white border border-indigo-200/80 space-y-4 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shadow-xs">
                        <Zap className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900">Recommended Flow Focus</div>
                        <div className="text-xs text-indigo-700 font-medium">Saudi Market Deployment</div>
                      </div>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Customized triggers and content formats aligned with the lifecycle of customers
                      in this specific sector across the Kingdom.
                    </p>
                    <div className="p-3.5 rounded-xl bg-white border border-indigo-100 text-xs text-indigo-950 font-mono shadow-xs space-y-1">
                      <div><strong className="text-slate-600 font-sans">Targeting:</strong> {businessSolutions[selectedSolution].title.replace("Email Marketing for ", "")}</div>
                      <div><strong className="text-slate-600 font-sans">Compliance:</strong> Opt-in Permission &amp; PDPL</div>
                      <div><strong className="text-slate-600 font-sans">Cadence:</strong> Scheduled &amp; Event-driven</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* SECTION: OUR EMAIL MARKETING PROCESS */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
              Systematic Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-4 mb-4">
              Our Email Marketing Process
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              A dependable, step-by-step workflow designed to evaluate your audience, configure
              flawless campaigns, and learn systematically from every send.
            </p>
          </div>

          <div className="relative">
            {/* Process Timeline Rail */}
            <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-0.5 bg-indigo-100 -translate-x-1/2" />

            <div className="space-y-8 sm:space-y-12">
              {processSteps.map((step, idx) => {
                const Icon = step.icon;
                const isEven = idx % 2 === 0;

                return (
                  <div
                    key={step.step}
                    className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                      isEven ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Content Box */}
                    <div className="w-full lg:w-1/2">
                      <div className="bg-slate-50 hover:bg-white border border-slate-200 hover:border-indigo-300 rounded-2xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-all duration-300">
                        <div className="flex items-center justify-between mb-3">
                          <span className="px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold">
                            {step.step}
                          </span>
                          <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                            <Icon className="w-4 h-4" />
                          </div>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>

                    {/* Step Node */}
                    <div className="hidden lg:flex w-10 h-10 rounded-full bg-indigo-600 text-white font-bold text-sm items-center justify-center shadow-lg shadow-indigo-600/30 z-10 shrink-0">
                      {idx + 1}
                    </div>

                    {/* Empty Half for Balance */}
                    <div className="hidden lg:block w-1/2" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: EMAIL MARKETING FOR BUSINESSES ACROSS SAUDI ARABIA */}
      <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
              National Reach
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-4 mb-4">
              Email Marketing for Businesses Across Saudi Arabia
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Email can serve businesses in Riyadh, Jeddah, Dammam, Khobar, Makkah, Madinah, and
              other locations. Location-based messaging makes sense only when it is relevant to the
              audience, to service availability, or to how your business operates. Mentioning a city
              for the sake of it adds nothing for the reader.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cityLocations.map((loc) => {
              const Icon = loc.icon;
              return (
                <div
                  key={loc.city}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{loc.city}</h3>
                  <div className="text-xs font-semibold text-indigo-600 mb-2">{loc.role}</div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {loc.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION: EMAIL MARKETING CHALLENGES AND HOW TO ADDRESS THEM */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
              Problem Solving
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-4 mb-4">
              Email Marketing Challenges and How to Address Them
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Email programs encounter predictable roadblocks. Addressing them systematically
              turns underperforming sends into durable customer relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12">
            {emailChallenges.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/90 rounded-2xl p-5 sm:p-6 hover:border-indigo-200 transition-colors"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                    <AlertTriangle className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-slate-900">
                      {item.challenge}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      <strong className="text-indigo-700 font-semibold">How to address: </strong>
                      {item.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Deep Dive on Deliverability */}
          <div className="bg-gradient-to-br from-indigo-50/90 via-sky-50/40 to-white text-slate-900 rounded-3xl p-6 sm:p-10 border-2 border-indigo-200/90 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-semibold border border-indigo-200">
                  <ShieldCheck className="w-4 h-4 text-indigo-600" />
                  <span>Technical & Behavioral Deliverability Protocol</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Realistic Deliverability & Inbox Placement
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  On deliverability, sound practice means permission-based subscriber collection,
                  accurate records, appropriate sender authentication, monitoring of bounces and
                  complaints, clear unsubscribe options, and following applicable email and privacy
                  requirements. No single technical setting can guarantee inbox placement.
                </p>
              </div>

              <div className="lg:col-span-4 bg-white border border-indigo-200 rounded-2xl p-5 space-y-3 shadow-xs">
                <div className="text-xs font-bold text-indigo-900 uppercase tracking-wider">
                  Deliverability Checklist
                </div>
                <div className="space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>SPF, DKIM & DMARC Authentication</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Double Opt-in Subscriber Collection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Automated Soft/Hard Bounce Cleaning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Visible Unsubscribe & Preference Links</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: EMAIL MARKETING COMPLIANCE AND RESPONSIBLE COMMUNICATION IN SAUDI ARABIA */}
      <section className="py-16 sm:py-20 bg-slate-100/80 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Regulatory Standards
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-4 mb-4">
              Email Marketing Compliance and Responsible Communication in Saudi Arabia
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                Responsible email marketing respects consent, privacy, and communication
                preferences. That means collecting subscribers with permission, identifying the
                sender clearly, keeping messages relevant and truthful, handling personal
                information appropriately, providing unsubscribe and preference management, and
                storing subscriber data securely.
              </p>
              <p>
                Saudi Arabia’s Personal Data Protection Law (PDPL) may be relevant to how a business
                collects and uses personal data. Requirements differ by situation, so businesses
                should review the rules that apply to their own communication practices and seek
                qualified legal advice where needed. We never suggest scraping addresses, buying
                lists, hiding sender identity, or ignoring unsubscribe requests.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Lock className="w-5 h-5 text-indigo-600" />
                <span>Our Responsible Marketing Commitment</span>
              </h3>
              <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% Permission-based contact lists only</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Zero scraped addresses or purchased email databases</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Clear sender identity with verified physical address</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>One-click unsubscribe & preference management headers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: HOW WE MEASURE EMAIL MARKETING PERFORMANCE */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
              Honest Analytics
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-4 mb-4">
              How We Measure Email Marketing Performance
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              We look at emails delivered, bounce rate, click-through rate, unsubscribe rate,
              complaint rate, conversion tracking, qualified enquiries, landing page activity,
              engagement, and retention activity where it can be measured.
            </p>
            <p className="text-slate-500 text-sm mt-3 leading-relaxed">
              The right metrics depend on the objective. A newsletter may be judged mainly on
              content engagement, a promotional campaign on relevant product activity, and a
              lead-nurturing sequence on qualified enquiries. We avoid generic benchmarks and make
              no promises of guaranteed improvement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {performanceMetrics.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 hover:border-indigo-300 transition-colors flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900">{item.name}</h3>
                      <div className="text-xs text-indigo-600 font-semibold">{item.metric}</div>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION: WHY CHOOSE DIGLIP7 FOR EMAIL MARKETING SERVICES IN SAUDI ARABIA? */}
      <section className="py-16 sm:py-24 bg-slate-100/70 border-y border-slate-200 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
              Agency Value
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-4 mb-4">
              Why Choose DigLip7 for Email Marketing Services in Saudi Arabia?
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              DigLip7 aims to be a practical digital marketing partner. Our approach combines
              business-focused campaign planning, audience relevance, email content and design,
              segmentation and automation, campaign testing, performance tracking, and continuous
              optimisation. Where it fits, email can also be coordinated with your wider digital
              marketing activity.
            </p>
            <p className="text-indigo-950 font-semibold text-sm sm:text-base mt-3">
              Every strategy is tailored to your audience, goals, and existing marketing setup
              rather than copied from a template.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyDiglip7Pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/90 rounded-2xl p-6 hover:border-indigo-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">{pillar.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION: FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
              Answers & Clarity
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-4 mb-4">
              Frequently Asked Questions About Email Marketing Services in Saudi Arabia
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Find transparent answers about campaign volume, language support, costs, and lead
              expectations.
            </p>

            {/* FAQ Search Filter */}
            <div className="mt-6 max-w-md mx-auto relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search FAQs by keyword..."
                value={faqSearch}
                onChange={(e) => setFaqSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500 bg-slate-50 focus:bg-white transition-colors"
              />
            </div>
          </div>

          <div className="space-y-3">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="border border-slate-200 rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                    className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 bg-white hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-900">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-indigo-600" : ""
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
                        <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 border-t border-slate-100 bg-slate-50/50 leading-relaxed">
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

      {/* CLOSING CTA SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-indigo-50/80 via-sky-50/30 to-white text-slate-900 border-t border-slate-200 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-800 text-xs sm:text-sm font-semibold mb-6">
            <Mail className="w-4 h-4 text-indigo-600" />
            <span>Direct Communication Channel</span>
          </span>

          {/* Exact Closing H2 */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight text-slate-900">
            Ready to Plan Your Email Marketing Services in Saudi Arabia?
          </h2>

          {/* Exact Closing Paragraph */}
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
            Tell us about your business, your audience, and what you want your emails to achieve.
            DigLip7 will help you build a clear, permission-based email marketing plan.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-700 hover:to-sky-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-600/20 flex items-center gap-2 cursor-pointer text-sm sm:text-base transition-all"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <span>Discuss Your Email Marketing Strategy</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>

            <a
              href="https://wa.me/919650608788?text=Hello%20DigLip7%20Team%2C%20I%20would%20like%20to%20plan%20our%20Email%20Marketing%20Strategy%20in%20Saudi%20Arabia."
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                className="px-8 py-4 bg-white hover:bg-emerald-50 text-emerald-950 font-bold rounded-xl border-2 border-emerald-600 shadow-xs flex items-center gap-2 cursor-pointer text-sm sm:text-base transition-all"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <FaWhatsapp className="w-5 h-5 text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </motion.button>
            </a>
          </div>

          {/* Related Cross-links within Saudi Arabia */}
          <div className="mt-16 pt-8 border-t border-slate-200 flex flex-wrap justify-center gap-6 text-xs sm:text-sm text-slate-700">
            <span className="font-semibold text-slate-900">Related Saudi Services:</span>
            <Link
              to="/saudi-arabia/seo-services"
              className="text-indigo-700 hover:text-indigo-900 hover:underline flex items-center gap-1"
            >
              SEO Services Saudi Arabia →
            </Link>
            <Link
              to="/saudi-arabia/ppc-services/"
              className="text-indigo-700 hover:text-indigo-900 hover:underline flex items-center gap-1"
            >
              PPC Services Saudi Arabia →
            </Link>
            <Link
              to="/saudi-arabia/web-design/"
              className="text-indigo-700 hover:text-indigo-900 hover:underline flex items-center gap-1"
            >
              Web Design Saudi Arabia →
            </Link>
            <Link
              to="/saudi-arabia/content-marketing-services/"
              className="text-indigo-700 hover:text-indigo-900 hover:underline flex items-center gap-1"
            >
              Content Marketing Saudi Arabia →
            </Link>
            <Link
              to="/saudi-arabia/social-media-marketing/"
              className="text-indigo-700 hover:text-indigo-900 hover:underline flex items-center gap-1"
            >
              Social Media Marketing Saudi Arabia →
            </Link>
            <Link
              to="/saudi-arabia/online-reputation-management/"
              className="text-indigo-700 hover:text-indigo-900 hover:underline flex items-center gap-1"
            >
              Reputation Management Saudi Arabia →
            </Link>
            <Link
              to="/saudi-arabia/mobile-app-development/"
              className="text-indigo-700 hover:text-indigo-900 hover:underline flex items-center gap-1"
            >
              Mobile App Development Saudi Arabia →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SaudiEmailMarketing;
