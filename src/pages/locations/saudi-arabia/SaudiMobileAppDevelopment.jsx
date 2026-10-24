import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../../../components/SEO";
import {
  Smartphone,
  Layers,
  Code2,
  Palette,
  ShoppingBag,
  Building2,
  ShieldCheck,
  Cpu,
  ArrowRight,
  CheckCircle,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  Home,
  Target,
  Sparkles,
  RefreshCw,
  Search,
  Languages,
  AlertTriangle,
  HelpCircle,
  Clock,
  Eye,
  PhoneCall,
  DollarSign,
  TrendingUp,
  MapPin,
  Lock,
  Compass,
  FileCheck,
  Activity,
  Check,
  Server,
  Wrench,
  Stethoscope,
  Truck,
  Briefcase,
  Rocket,
  CreditCard,
  Sliders,
  Send,
} from "lucide-react";
import { FaWhatsapp, FaApple, FaAndroid } from "react-icons/fa";

// Image Paths - Set to empty string so Image Section containers are shown without displaying actual image files
const heroImgSrc = "";
const devProcessImgSrc = "";
const securityQualityImgSrc = "";

// Image Section Container Component (Preserves layout, dimensions & styling without loading external images)
const AppImageSlot = ({
  src = "",
  alt = "",
  aspect = "aspect-[16/10]",
  className = "",
  fallbackIcon: FallbackIcon = Smartphone,
  badgeText = "",
}) => {
  return (
    <div
      className={`relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-50/70 via-white to-sky-50/60 border border-indigo-200/90 shadow-md flex items-center justify-center ${aspect} ${className}`}
    >
      <div className="p-6 sm:p-8 text-center text-sm font-medium text-slate-800 select-none flex flex-col items-center justify-center gap-3 w-full h-full bg-gradient-to-b from-white/95 via-indigo-50/40 to-sky-50/50 border-2 border-dashed border-indigo-300/80 rounded-2xl relative overflow-hidden">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-indigo-600 to-sky-600 text-white flex items-center justify-center shadow-md shadow-indigo-600/20 relative z-10">
          <FallbackIcon className="w-7 h-7 sm:w-8 sm:h-8" />
        </div>
        <div className="space-y-1.5 max-w-sm relative z-10">
          <span className="block leading-snug text-xs sm:text-sm font-bold text-slate-900">
            {alt}
          </span>
          {badgeText && (
            <span className="inline-block px-3 py-1 rounded-full bg-indigo-100/90 text-indigo-800 text-xs font-semibold border border-indigo-200">
              {badgeText}
            </span>
          )}
          <span className="text-[11px] text-slate-500 block pt-0.5 font-medium">
            Image Section &bull; Ready for Media
          </span>
        </div>
      </div>
    </div>
  );
};

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
    const rotateXValue = (y - centerY) / 18;
    const rotateYValue = (centerX - x) / 18;

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

// ---------------------------------------------------------------------------
// DATA STRUCTURES (Strictly Verbatim from Prompt)
// ---------------------------------------------------------------------------

const pageUrl = "https://diglip7.com/saudi-arabia/mobile-app-development/";
const verifiedContactUrl = "/contact";

const breadcrumbTrail = [
  { label: "Home", href: "/" },
  { label: "Saudi Arabia", href: "/saudi-arabia/seo-services" },
  { label: "Mobile App Development", href: pageUrl },
];

const serviceCategories = [
  {
    id: "custom-mobile",
    title: "Custom Mobile App Development",
    short: "Bespoke business logic, tailored user roles, and scalable architecture",
    desc: "Custom mobile app development means planning the application around your business instead of squeezing your processes into a generic template. The work starts with business requirements, user roles, essential features, workflows, integration needs and future scalability. Maintenance should be part of that early conversation too. Agreeing the scope in writing before development starts reduces misunderstandings and keeps the budget easier to manage.",
    icon: Code2,
    badge: "Tailored Architecture",
    highlights: [
      "Requirements aligned directly with business workflows",
      "Custom user roles, access control, and permissions",
      "Seamless integrations with internal backends and APIs",
      "Written scope agreement to maintain budget discipline",
    ],
  },
  {
    id: "android-dev",
    title: "Android App Development",
    short: "Device fragmentation mastery, native performance, and Google Play compliance",
    desc: "Android apps need to work across a wide range of devices, screen sizes and operating-system versions. Performance, permission requests, usability and testing on representative devices all matter. The features you need and the devices your users actually own should guide the technical choices.",
    icon: FaAndroid,
    badge: "Wide Ecosystem",
    highlights: [
      "Responsive UI tested across varied screen dimensions",
      "Fine-tuned memory and battery efficiency",
      "Careful Android runtime permission management",
      "Google Play Store publishing compliance",
    ],
  },
  {
    id: "ios-dev",
    title: "iOS App Development",
    short: "Refined user experience, Apple ecosystem alignment, and App Store review readiness",
    desc: "For Apple devices, the main considerations are user experience, device and operating-system compatibility, performance, privacy and permission handling, and thorough testing. Preparing an app for App Store submission also means meeting Apple's published requirements. Submission does not guarantee approval, because Apple makes the final decision.",
    icon: FaApple,
    badge: "Apple Standards",
    highlights: [
      "Intuitive iOS Human Interface Guidelines compliance",
      "Strict data privacy labels and transparent permission flows",
      "Smooth animations with native Swift / iOS frameworks",
      "Thorough pre-submission App Store review audits",
    ],
  },
  {
    id: "cross-platform",
    title: "Cross-Platform Mobile App Development",
    short: "Unified codebase efficiency across Android and iOS using modern frameworks",
    desc: "Cross-platform approaches let teams share part of the code between Android and iOS. That can reduce duplicated effort for some projects. The trade-offs include performance needs, access to device-specific features, integration requirements and overall complexity. Frameworks such as Flutter and React Native are examples of technologies that may be considered, and the right choice depends on what your project actually requires.",
    icon: Layers,
    badge: "Unified Codebase",
    highlights: [
      "Single shared codebase reducing redundant work",
      "Flutter and React Native modern technology stacks",
      "Balanced native feature bridging and performance",
      "Faster time-to-market across dual app stores",
    ],
  },
  {
    id: "ui-ux-design",
    title: "Mobile UI and UX Design",
    short: "Bilingual Arabic & English user journeys, RTL layouts, and accessible interfaces",
    desc: "Good design makes tasks easy to understand. The design stage can include user research, user journeys, wireframes, interactive prototypes, navigation, accessibility and form design. For Saudi audiences, many apps also need Arabic and English interfaces. Localisation is more than translating labels: it affects layout, spacing, icons, date and number formats, and right-to-left (RTL) behaviour, all of which should be tested on real screens.",
    icon: Palette,
    badge: "Bilingual RTL/LTR",
    highlights: [
      "True Arabic Right-to-Left (RTL) layout mirroring",
      "User research, journey maps, and wireframe prototypes",
      "Native Arabic typography, numeral, and date adaptations",
      "Accessible touch targets and friction-free form design",
    ],
  },
  {
    id: "ecommerce-apps",
    title: "E-commerce Mobile App Development",
    short: "Product discovery, payment gateways, shopping carts, and order updates",
    desc: "Online retailers and product-based businesses may want features such as product catalogues, search and filtering, customer accounts, shopping carts, checkout integration, order tracking, notifications and links to inventory or store systems. Payments, personal information and third-party integrations need careful implementation and testing. An app can support the shopping experience, but no one can promise a specific increase in sales.",
    icon: ShoppingBag,
    badge: "Mobile Commerce",
    highlights: [
      "Intuitive product catalogs, search, and smart filtering",
      "Secure checkout with local Saudi payment gateways",
      "Real-time order tracking and push notifications",
      "Inventory synchronization with ERP and backend stores",
    ],
  },
  {
    id: "enterprise-apps",
    title: "Business and Enterprise Applications",
    short: "Field-service workflows, staff portals, inventory tools, and operational security",
    desc: "Enterprise mobile application development often focuses on staff and operations: employee access, field-service workflows, inventory management, internal reporting, customer relationship tools, task management and connections to existing business systems. Access permissions, data security, reliability and integration requirements should be considered from the start rather than added later.",
    icon: Building2,
    badge: "Enterprise Grade",
    highlights: [
      "Field-service mobility and task management tools",
      "Role-based enterprise access control and encryption",
      "Enterprise CRM, ERP, and database connectivity",
      "Reliable offline modes and background data sync",
    ],
  },
  {
    id: "maintenance-support",
    title: "Mobile App Testing, Maintenance and Support",
    short: "QA testing, OS upgrades, bug fixes, security patches, and ongoing monitoring",
    desc: "An app needs attention after release. Testing covers functionality, device compatibility, performance and security. Afterwards, apps need bug fixes, updates for new operating-system versions, updates to third-party dependencies, plus monitoring and improvements based on feedback. The extent of ongoing maintenance should be written into the project agreement so expectations are clear.",
    icon: ShieldCheck,
    badge: "Lifecycle Care",
    highlights: [
      "Functional, device compatibility, and security QA",
      "New iOS and Android annual OS version updates",
      "Continuous third-party dependency and library patches",
      "Post-launch monitoring and iterative enhancements",
    ],
  },
];

const processSteps = [
  {
    step: "Step 1",
    title: "Step 1 — Discovery and Requirements",
    shortName: "Discovery & Requirements",
    desc: "We clarify business objectives, target users, essential features, constraints, integrations and how success will be judged.",
    icon: Search,
    phase: "Phase 01",
  },
  {
    step: "Step 2",
    title: "Step 2 — Project Scope and Planning",
    shortName: "Project Scope & Planning",
    desc: "Requirements are turned into priorities, milestones, deliverables and technical considerations. A key task here is separating the features needed for launch from those that can wait for a later release.",
    icon: Sliders,
    phase: "Phase 02",
  },
  {
    step: "Step 3",
    title: "Step 3 — UI/UX Design and Prototyping",
    shortName: "UI/UX Design & Prototyping",
    desc: "Wireframes and prototypes let you see and test the user journey before full development begins, which is usually cheaper than changing the finished product.",
    icon: Palette,
    phase: "Phase 03",
  },
  {
    step: "Step 4",
    title: "Step 4 — Development and Integration",
    shortName: "Development & Integration",
    desc: "The application is built against the agreed scope, platform requirements and technical design. Where relevant, this includes backend work, APIs and external integrations.",
    icon: Code2,
    phase: "Phase 04",
  },
  {
    step: "Step 5",
    title: "Step 5 — Testing and Quality Assurance",
    shortName: "Testing & Quality Assurance",
    desc: "Functional, usability, compatibility, performance and security testing help find problems before real users do.",
    icon: ShieldCheck,
    phase: "Phase 05",
  },
  {
    step: "Step 6",
    title: "Step 6 — Deployment and App Store Submission",
    shortName: "Deployment & Store Submission",
    desc: "This step covers preparing store assets, privacy information and release builds, and submitting to the relevant stores. Publication depends on each platform's review and approval process.",
    icon: Rocket,
    phase: "Phase 06",
  },
  {
    step: "Step 7",
    title: "Step 7 — Maintenance and Improvement",
    shortName: "Maintenance & Improvement",
    desc: "After launch, monitoring, user feedback and bug reports guide fixes and future updates.",
    icon: Wrench,
    phase: "Phase 07",
  },
];

const industrySolutions = [
  {
    title: "E-commerce and Retail",
    desc: "Shopping apps can support product discovery, ordering, customer accounts and order updates.",
    icon: ShoppingBag,
    tag: "Retail & Shopping",
    gradient: "from-amber-500/10 to-orange-500/10",
    border: "border-amber-200/80",
    iconBg: "bg-amber-100 text-amber-700",
  },
  {
    title: "Healthcare and Appointment-Based Businesses",
    desc: "Apps may offer appointment booking, service information, reminders and customer access to relevant information. Health-related apps can require additional privacy, security and regulatory review depending on what they do.",
    icon: Stethoscope,
    tag: "Healthcare & Clinics",
    gradient: "from-emerald-500/10 to-teal-500/10",
    border: "border-emerald-200/80",
    iconBg: "bg-emerald-100 text-emerald-700",
  },
  {
    title: "Logistics and Delivery",
    desc: "Typical features include delivery status, task assignment, location features and operational communication between dispatchers, drivers and customers.",
    icon: Truck,
    tag: "Delivery & Fleet",
    gradient: "from-blue-500/10 to-indigo-500/10",
    border: "border-blue-200/80",
    iconBg: "bg-blue-100 text-blue-700",
  },
  {
    title: "Professional and Service Businesses",
    desc: "Appointment scheduling, enquiry handling, customer portals and service management can all be handled on mobile.",
    icon: Briefcase,
    tag: "Corporate & Services",
    gradient: "from-purple-500/10 to-violet-500/10",
    border: "border-purple-200/80",
    iconBg: "bg-purple-100 text-purple-700",
  },
  {
    title: "Startups and New Digital Products",
    desc: "For startups, a focused minimum viable product (MVP) can test the essential functionality before a larger investment. Not every startup needs an app, and an MVP cannot guarantee product-market fit, but it can reduce risk by putting a real product in front of users sooner.",
    icon: Rocket,
    tag: "MVP & Ventures",
    gradient: "from-rose-500/10 to-pink-500/10",
    border: "border-rose-200/80",
    iconBg: "bg-rose-100 text-rose-700",
  },
];

const saudiRegionalPoints = [
  {
    text: "Arabic and English language support, where needed.",
    icon: Languages,
    detail: "Bilingual interfaces allowing seamless switching between Arabic and English text.",
  },
  {
    text: "Right-to-left interface design and testing.",
    icon: Compass,
    detail: "Complete RTL mirroring for layouts, typography hierarchy, margins, and directional icons.",
  },
  {
    text: "Local payment methods and third-party integrations.",
    icon: CreditCard,
    detail: "Integrations with popular regional payment solutions, delivery APIs, and local identity services.",
  },
  {
    text: "User privacy and data security.",
    icon: Lock,
    detail: "Robust security practices aligned with personal data protection principles.",
  },
  {
    text: "Workflows specific to your business.",
    icon: Sliders,
    detail: "Tailored customer journeys that mirror how transactions and services operate on the ground.",
  },
  {
    text: "Support and maintenance planning.",
    icon: Wrench,
    detail: "Clear post-launch operational schedules for updates, monitoring, and app store compliance.",
  },
];

const costFactors = [
  "The number and complexity of features.",
  "Whether you need Android, iOS or cross-platform.",
  "UI/UX design needs.",
  "Backend development.",
  "Third-party integrations.",
  "Payment or location functionality.",
  "Security and compliance requirements.",
  "The scope of testing.",
  "Maintenance and support.",
];

const whyChoosePoints = [
  "Understanding your business requirements.",
  "Agreeing a clear project scope.",
  "User-focused design.",
  "Choosing technology to fit the project.",
  "Quality assurance.",
  "Planning integrations early.",
  "Transparent communication.",
  "Thinking about maintenance from the beginning.",
];

const faqs = [
  {
    q: "What does a mobile app development service include?",
    a: "A mobile app development project may include discovery, planning, design, development, testing, deployment, and maintenance, depending on the agreed scope.",
  },
  {
    q: "How much does mobile app development cost in Saudi Arabia?",
    a: "The cost depends on the required features, platforms, design, integrations, testing, and ongoing support. Defining the project requirements helps establish a more reliable estimate.",
  },
  {
    q: "How long does it take to develop a mobile application?",
    a: "Timelines vary with the scope, complexity, integrations, testing, and how quickly feedback is provided. A reliable timeline can only be given once the scope is defined.",
  },
  {
    q: "Should my business choose Android, iOS, or cross-platform development?",
    a: "The right choice depends on your target audience, required features, budget, performance requirements, and maintenance plans.",
  },
  {
    q: "Can you develop a mobile app for an existing business website?",
    a: "Possibly. It depends on the website's architecture, available APIs, backend capabilities, and the functionality you need. The existing system should be reviewed before compatibility is confirmed.",
  },
  {
    q: "Can a mobile application support Arabic and English?",
    a: "Yes, multilingual support can be included where required. It needs careful attention to translation, layout, right-to-left interfaces, and testing.",
  },
  {
    q: "Does mobile app development include ongoing maintenance?",
    a: "That depends on the project agreement. Maintenance may cover bug fixes, compatibility updates, monitoring, and improvements.",
  },
  {
    q: "How can I start a mobile app development project with DigLip7?",
    a: "The process begins with a discussion of your business objective, intended users, core features, platform requirements, integrations, and project constraints.",
  },
];

const SaudiMobileAppDevelopment = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeStep, setActiveStep] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Structured Data (JSON-LD) exactly as requested in sections 3, 4, 5
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Mobile App Development Service in Saudi Arabia",
      description:
        "Mobile application development services for businesses in Saudi Arabia, covering project planning, user experience, application development, testing, deployment, and maintenance according to project requirements.",
      url: pageUrl,
      provider: {
        "@type": "Organization",
        name: "DigLip7 Tech Pvt Ltd",
        url: "https://diglip7.com/",
      },
      areaServed: {
        "@type": "Country",
        name: "Saudi Arabia",
      },
      serviceType: "Mobile Application Development",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
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
          name: "Mobile App Development",
          item: pageUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
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
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-600 selection:text-white pt-20">
      {/* 1. Meta Title, Meta Description, Meta Tags, and Schemas via SEO Component */}
      <SEO
        title="Mobile App Development Saudi Arabia | DigLip7"
        exactTitle={true}
        description="Build business-focused mobile applications with DigLip7. Explore mobile app development services in Saudi Arabia, from planning and design to testing and support."
        canonical={pageUrl}
        ogType="website"
        ogTitle="Mobile App Development Saudi Arabia | DigLip7"
        ogDescription="Explore mobile app development services for Saudi Arabian businesses, including application planning, user experience, development, testing, deployment, and maintenance."
        twitterCard="summary"
        twitterTitle="Mobile App Development Saudi Arabia | DigLip7"
        twitterDescription="Discover mobile application development services for businesses in Saudi Arabia. Plan, design, build, test, and maintain an app around your business needs."
        keywords={false}
        ogImage={null}
        twitterImage={null}
        twitterSite={null}
        twitterCreator={null}
        hreflangs={[
          { hreflang: "en-sa", href: pageUrl },
          { hreflang: "x-default", href: pageUrl },
        ]}
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

      {/* Semantic Main Content Container */}
      <main>
        {/* ========================================================================= */}
        {/* SECTION 1: HERO SECTION                                                   */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50/90 via-sky-50/50 to-white text-slate-900 py-16 sm:py-24 lg:py-28 border-b border-slate-200/80">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(99,102,241,0.1),rgba(255,255,255,0))] pointer-events-none" />
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Heading & Content */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100/80 border border-indigo-200 text-indigo-900 text-xs sm:text-sm font-semibold shadow-xs">
                  <Sparkles className="w-4 h-4 text-indigo-600" />
                  <span>Saudi Arabia Mobile Engineering</span>
                </div>

                {/* Exact H1 from prompt */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Mobile App Development Services in Saudi Arabia for Business Growth
                </h1>

                {/* Exact Hero Paragraphs */}
                <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
                  <p>
                    A mobile app can give customers a faster way to book, order, ask questions or
                    manage an account. It can also give your team a simpler way to handle daily work
                    from a phone. Common examples include customer-facing apps, e-commerce and
                    shopping apps, booking and appointment tools, customer portals, delivery and
                    logistics apps, employee and field-service apps, membership and loyalty
                    programmes, and internal business operations apps.
                  </p>
                  <p>
                    Not every idea turns into a useful product. A successful app starts with a clear
                    business problem and a realistic view of the users, the functionality, the budget
                    and the long-term maintenance it will need. Features come after those decisions,
                    not before.
                  </p>
                  <p className="text-slate-800 font-medium bg-indigo-50/80 border-l-4 border-indigo-600 p-4 rounded-r-xl">
                    DigLip7 is a technology and digital solutions company. If you are looking for a
                    Mobile App Development Service in Saudi Arabia, this page explains what a
                    project typically involves, which decisions shape it, and how to prepare for a
                    useful conversation with a development team. No app can guarantee downloads,
                    revenue or app store rankings, so we focus on building something clear, tested
                    and suited to your users.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link to={verifiedContactUrl}>
                    <motion.button
                      className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-700 hover:to-sky-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-600/20 flex items-center gap-2 cursor-pointer transition-all duration-200 text-sm sm:text-base"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Discuss Your Mobile App Project</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>

                  <a
                    href="https://wa.me/919650608788?text=Hello%20DigLip7%20Team%2C%20I%20would%20like%20to%20discuss%20our%20Mobile%20App%20Development%20Project%20in%20Saudi%20Arabia."
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
                    <span>Business-First Scope</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>iOS &amp; Android Ready</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Arabic RTL Support</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Image Section with Interactive 3D Frame & Floating Badges */}
              <div className="lg:col-span-5">
                <Card3D className="relative">
                  <div className="relative rounded-3xl overflow-hidden p-2.5 sm:p-3.5 bg-gradient-to-br from-indigo-500/15 via-sky-500/10 to-indigo-100/50 backdrop-blur-xl border border-indigo-200/90 shadow-2xl shadow-indigo-500/15">
                    {/* Primary Hero Image Section Container */}
                    <AppImageSlot
                      src={heroImgSrc}
                      alt="Mobile App Development in Saudi Arabia - iOS and Android Applications"
                      aspect="aspect-[4/3] sm:aspect-[1/1] lg:aspect-[4/3]"
                      badgeText="Saudi Enterprise Mobile App"
                      fallbackIcon={Smartphone}
                      className="rounded-2xl"
                    />

                    {/* Floating Native Badges Overlay */}
                    <div className="absolute top-6 right-6 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-indigo-100 shadow-lg text-slate-800 text-xs font-bold">
                      <FaApple className="w-4 h-4 text-slate-900" />
                      <FaAndroid className="w-4 h-4 text-emerald-600" />
                      <span>iOS &amp; Android Native</span>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6 z-20 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-indigo-100 shadow-xl flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-indigo-600 text-white flex items-center justify-center shrink-0">
                          <Languages className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900">Bilingual Arabic &amp; English</div>
                          <div className="text-[10px] text-indigo-700 font-medium">Native RTL / LTR Architecture</div>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                        Production Ready
                      </span>
                    </div>
                  </div>
                </Card3D>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: WHY BUSINESSES IN SAUDI ARABIA CONSIDER MOBILE APPS           */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
                <Target className="w-3.5 h-3.5 text-indigo-600" />
                <span>Strategic Rationale</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Why Businesses in Saudi Arabia Consider Mobile App Development
              </h2>
            </div>

            {/* Verbatim Paragraphs in styled prose */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
              <div className="lg:col-span-8 space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed">
                <p>
                  Businesses usually come to mobile apps with a specific goal in mind. Some want to
                  give customers convenient access to services. Others want to simplify booking or
                  ordering, improve how they communicate with customers, or support internal
                  workflows for staff who work away from a desk. Timely notifications, selected
                  digital service integrations and mobile-friendly access to business information
                  are also common reasons.
                </p>
                <p>
                  The strongest projects begin with one clear use case. If you can describe who will
                  use the app, what they need to accomplish and why a phone is the right place to do
                  it, you have a good foundation.
                </p>
                <p className="bg-amber-50/80 border-l-4 border-amber-500 p-4 rounded-r-xl text-slate-800 font-medium">
                  A mobile app is also not always the right answer. Depending on your users and
                  budget, a responsive website or a progressive web app may meet the need with less
                  effort. A good development partner should help you weigh these options honestly
                  before you commit to a build.
                </p>
              </div>

              {/* Quick Decision Guide Box */}
              <div className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-indigo-600" />
                  <span>Key Project Considerations</span>
                </h3>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 font-bold">•</span>
                    <span>
                      <strong>Customer Convenience:</strong> Simplified ordering, scheduling, and
                      self-service portals.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 font-bold">•</span>
                    <span>
                      <strong>Staff Productivity:</strong> Tools for field workers, dispatchers,
                      and mobile operations.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 font-bold">•</span>
                    <span>
                      <strong>Honest Feasibility:</strong> Confirming whether an app or responsive
                      web delivers the best return.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: OUR MOBILE APP DEVELOPMENT SERVICES IN SAUDI ARABIA           */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-24 lg:py-28 bg-slate-50 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-semibold uppercase tracking-wider mb-3">
                <Smartphone className="w-3.5 h-3.5 text-indigo-600" />
                <span>Comprehensive Services</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Our Mobile App Development Services in Saudi Arabia
              </h2>
              <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
                The areas below describe what a mobile application project can include. Which ones
                apply depends on your requirements, and the exact scope is agreed with you before
                work begins.
              </p>
            </div>

            {/* 8 Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {serviceCategories.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={service.id}
                    className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                          {service.badge}
                        </span>
                      </div>

                      {/* Exact H3 */}
                      <h3 className="text-xl font-bold text-slate-900 mb-3">
                        {service.title}
                      </h3>

                      {/* Exact Verbatim Paragraph */}
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                        {service.desc}
                      </p>
                    </div>

                    {/* Key Elements list */}
                    <div className="pt-4 border-t border-slate-100">
                      <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
                        Scope Considerations
                      </div>
                      <ul className="space-y-2">
                        {service.highlights.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                            <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* IMAGE SECTION 2: MOBILE ENGINEERING & ARCHITECTURE SHOWCASE              */}
        {/* ========================================================================= */}
        <section className="py-12 sm:py-16 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 rounded-3xl p-6 sm:p-10 lg:p-12 text-white overflow-hidden relative shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.25),transparent_70%)] pointer-events-none" />

              <div className="lg:col-span-6 space-y-5 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200 text-xs font-semibold uppercase tracking-wider">
                  <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Full-Cycle Mobile Engineering</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                  Engineered for Performance, Scalability &amp; Seamless Integrations
                </h3>
                <p className="text-indigo-100/90 text-sm sm:text-base leading-relaxed">
                  From custom API middleware and enterprise databases to payment gateways and real-time push engines, our mobile architectures are planned for resilience and growth in the Saudi digital market.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                    <div className="text-xl font-bold text-white">100%</div>
                    <div className="text-xs text-indigo-200">Custom Architecture</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                    <div className="text-xl font-bold text-white">Dual Store</div>
                    <div className="text-xs text-indigo-200">App Store &amp; Google Play</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 relative z-10">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 bg-slate-800">
                  <AppImageSlot
                    src={devProcessImgSrc}
                    alt="Mobile App Architecture and Development Lifecycle in Saudi Arabia"
                    aspect="aspect-[16/10]"
                    badgeText="Development &amp; QA Lifecycle"
                    fallbackIcon={Code2}
                    className="border-0 shadow-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: OUR MOBILE APP DEVELOPMENT PROCESS                             */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-24 lg:py-28 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
                <Sliders className="w-3.5 h-3.5 text-indigo-600" />
                <span>Workflow &amp; Milestones</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Our Mobile App Development Process
              </h2>
              <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
                Every project is different, so timelines and steps vary. A typical workflow looks
                like this.
              </p>
            </div>

            {/* Interactive Process Flow */}
            <div className="space-y-6">
              {processSteps.map((stepItem, idx) => {
                const StepIcon = stepItem.icon;
                const isSelected = activeStep === idx;
                return (
                  <motion.div
                    key={stepItem.step}
                    className={`rounded-2xl border transition-all duration-300 p-6 sm:p-7 ${
                      isSelected
                        ? "bg-indigo-50/60 border-indigo-300 shadow-sm"
                        : "bg-slate-50/80 border-slate-200/80 hover:bg-slate-100/60"
                    }`}
                    onClick={() => setActiveStep(idx)}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                      <div className="flex items-center gap-3 sm:block">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 ${
                            isSelected
                              ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                              : "bg-white border border-slate-200 text-slate-700"
                          }`}
                        >
                          <StepIcon className="w-5 h-5" />
                        </div>
                        <span className="sm:hidden font-mono text-xs font-semibold text-indigo-600">
                          {stepItem.phase}
                        </span>
                      </div>

                      <div className="space-y-2 flex-1">
                        <div className="flex items-center justify-between">
                          {/* Exact H3 as specified in prompt */}
                          <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                            {stepItem.title}
                          </h3>
                          <span className="hidden sm:inline-block font-mono text-xs font-bold px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-slate-600">
                            {stepItem.phase}
                          </span>
                        </div>
                        {/* Exact paragraph */}
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                          {stepItem.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: MOBILE APP DEVELOPMENT SOLUTIONS FOR DIFFERENT INDUSTRIES     */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-24 lg:py-28 bg-slate-50 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-semibold uppercase tracking-wider mb-3">
                <Building2 className="w-3.5 h-3.5 text-indigo-600" />
                <span>Sector Applications</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Mobile App Development Solutions for Different Industries
              </h2>
              <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
                The examples below show what apps in different sectors might include. They
                illustrate possibilities, not past projects.
              </p>
            </div>

            {/* 5 Industry Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industrySolutions.map((ind, idx) => {
                const IndIcon = ind.icon;
                return (
                  <div
                    key={idx}
                    className={`bg-white rounded-2xl border ${ind.border} p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 rounded-xl ${ind.iconBg} flex items-center justify-center`}>
                          <IndIcon className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                          {ind.tag}
                        </span>
                      </div>

                      {/* Exact H3 */}
                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        {ind.title}
                      </h3>

                      {/* Exact paragraph */}
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {ind.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: MOBILE APP DEVELOPMENT FOR BUSINESSES ACROSS SAUDI ARABIA     */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-24 lg:py-28 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
                <MapPin className="w-3.5 h-3.5 text-indigo-600" />
                <span>Kingdom-Wide Localization</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Mobile App Development for Businesses Across Saudi Arabia
              </h2>
              <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
                Requirements differ depending on your customers, operations and service area. A
                business serving customers in Riyadh, Jeddah, Dammam or Khobar may have different
                priorities from one that operates nationwide, and these cities are examples of
                possible target markets rather than a statement about where DigLip7 has offices.
              </p>
            </div>

            {/* Points that commonly need attention */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                Points that commonly need attention include:
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {saudiRegionalPoints.map((pt, idx) => {
                  const PtIcon = pt.icon;
                  return (
                    <li
                      key={idx}
                      className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between space-y-3"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
                          <PtIcon className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-bold text-slate-900 leading-snug">
                          {pt.text}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {pt.detail}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 7: MOBILE APP SECURITY, PRIVACY AND QUALITY                       */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-24 lg:py-28 bg-slate-50 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Safeguards &amp; Compliance</span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Mobile App Security, Privacy and Quality
                </h2>

                <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
                  <p>
                    Security and privacy work best when they are planned from the start. Depending
                    on the app, that can include secure authentication, role-based access controls,
                    appropriate data encryption, secure API communication, careful permission
                    management, protection of sensitive information, secure storage practices,
                    regular dependency updates, testing and monitoring. Collecting only the data you
                    need (data minimisation) also reduces risk.
                  </p>
                  <p className="bg-white border-l-4 border-indigo-600 p-4 rounded-r-xl shadow-xs text-slate-800 font-medium">
                    The right safeguards depend on the application and the data it handles. Where an
                    app processes personal data, Saudi Arabia's Personal Data Protection Law may be
                    relevant. Whether and how it applies depends on the project's circumstances, so
                    it should be assessed properly, ideally with legal advice. No application can be
                    promised to be completely secure.
                  </p>
                </div>
              </div>

              {/* Right Column: Image Section 3 (Security & Quality Testing) */}
              <div className="lg:col-span-5 space-y-5">
                <div className="relative rounded-3xl overflow-hidden p-2.5 sm:p-3 bg-white border border-slate-200 shadow-xl">
                  <AppImageSlot
                    src={securityQualityImgSrc}
                    alt="Mobile App Security, Privacy, and Quality Assurance Testing"
                    aspect="aspect-[16/10]"
                    badgeText="Security &amp; Compliance Testing"
                    fallbackIcon={ShieldCheck}
                    className="rounded-2xl"
                  />
                </div>

                {/* Security Pillars Cards */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
                    <Lock className="w-5 h-5 text-indigo-600 mb-1" />
                    <div className="text-xs font-bold text-slate-900">Data Minimisation</div>
                    <p className="text-[11px] text-slate-500">Essential data only</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
                    <Server className="w-5 h-5 text-emerald-600 mb-1" />
                    <div className="text-xs font-bold text-slate-900">Secure APIs</div>
                    <p className="text-[11px] text-slate-500">SSL token endpoints</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
                    <ShieldCheck className="w-5 h-5 text-sky-600 mb-1" />
                    <div className="text-xs font-bold text-slate-900">Saudi PDPL</div>
                    <p className="text-[11px] text-slate-500">Privacy alignment</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
                    <Activity className="w-5 h-5 text-purple-600 mb-1" />
                    <div className="text-xs font-bold text-slate-900">QA Monitoring</div>
                    <p className="text-[11px] text-slate-500">Continuous patches</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 8: HOW MUCH DOES MOBILE APP DEVELOPMENT COST IN SAUDI ARABIA?     */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-24 lg:py-28 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
                <DollarSign className="w-3.5 h-3.5 text-indigo-600" />
                <span>Scope-Driven Budgeting</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                How Much Does Mobile App Development Cost in Saudi Arabia?
              </h2>
              <p className="mt-4 text-slate-700 text-base sm:text-lg leading-relaxed">
                There is no single fixed price, because cost follows scope. The main factors are:
              </p>
            </div>

            {/* List of 9 Factors */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {costFactors.map((factor, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3"
                >
                  <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-sm font-semibold text-slate-800">{factor}</span>
                </div>
              ))}
            </div>

            {/* Follow-up paragraph */}
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed bg-indigo-50/70 border border-indigo-100 p-4 rounded-xl">
              A discovery phase helps define a realistic scope, which in turn supports a more
              reliable estimate.
            </p>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 9: WHY CHOOSE DIGLIP7 FOR MOBILE APP DEVELOPMENT?                 */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-24 lg:py-28 bg-slate-50 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-semibold uppercase tracking-wider mb-3">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
                <span>Our Principles</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Why Choose DigLip7 for Mobile App Development?
              </h2>
              <p className="mt-4 text-slate-700 text-base sm:text-lg leading-relaxed">
                A structured, business-focused process tends to produce better outcomes than
                starting with features and working backwards. The approach we describe on this page
                centres on:
              </p>
            </div>

            {/* List of 8 Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {whyChoosePoints.map((point, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200/90 p-5 shadow-2xs flex flex-col justify-between"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span className="text-sm font-bold text-slate-900">{point}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Follow-up paragraph */}
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed bg-white border border-slate-200 p-4 rounded-xl">
              We would rather explain what is realistic than overpromise, and we encourage you to
              ask any development partner for specifics about their experience before you decide.
            </p>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 10: FREQUENTLY ASKED QUESTIONS                                   */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-24 lg:py-28 bg-white border-b border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
                <HelpCircle className="w-3.5 h-3.5 text-indigo-600" />
                <span>Common Questions</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Frequently Asked Questions About Mobile App Development in Saudi Arabia
              </h2>
            </div>

            {/* Accordion List with full accessibility */}
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 bg-slate-50/50"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 bg-white hover:bg-slate-50/80 transition-colors cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      {/* Exact H3 as question */}
                      <h3 className="font-bold text-slate-900 text-base sm:text-lg pr-4">
                        {faq.q}
                      </h3>
                      <ChevronDown
                        className={`w-5 h-5 text-indigo-600 shrink-0 transition-transform duration-200 ${
                          isOpen ? "transform rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-6 pt-2 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 bg-white">
                            <p>{faq.a}</p>
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

        {/* ========================================================================= */}
        {/* SECTION 11: DISCUSS YOUR PROJECT (CLOSING CTA)                            */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-24 lg:py-28 bg-gradient-to-b from-indigo-50/60 via-white to-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 text-indigo-900 text-xs sm:text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>Start Your Journey</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Discuss Your Mobile App Development Project with DigLip7
            </h2>

            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Good apps come from clear requirements, suitable technology, useful design, thorough
              testing and a plan for support after launch. If you are considering a Mobile App
              Development Service in Saudi Arabia, tell us about your idea, your users and your
              constraints, and we can talk through the options.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link to={verifiedContactUrl}>
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-700 hover:to-sky-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-600/20 flex items-center gap-2 cursor-pointer text-sm sm:text-base transition-all"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <span>Let's Discuss Your Mobile App Project</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>

              <a
                href="https://wa.me/919650608788?text=Hello%20DigLip7%20Team%2C%20I%20would%20like%20to%20discuss%20our%20Mobile%20App%20Development%20Project%20in%20Saudi%20Arabia."
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
              <span className="font-semibold text-slate-900">Explore Other Saudi Services:</span>
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
                to="/saudi-arabia/ecommerce-seo-services/"
                className="text-indigo-700 hover:text-indigo-900 hover:underline flex items-center gap-1"
              >
                E-commerce SEO Saudi Arabia →
              </Link>
              <Link
                to="/saudi-arabia/email-marketing-services/"
                className="text-indigo-700 hover:text-indigo-900 hover:underline flex items-center gap-1"
              >
                Email Marketing Saudi Arabia →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SaudiMobileAppDevelopment;
