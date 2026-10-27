import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../../../components/SEO";
import aiMarketingAnalyticsDashboardImg from "../../../images/ai-marketing-analytics-dashboard.webp";
import {
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Home,
  CheckCircle2,
  AlertTriangle,
  Zap,
  Users,
  Mail,
  Plug,
  Target,
  Sparkles,
  ShoppingCart,
  BarChart3,
  Layers,
  Globe,
  Clock,
  ShieldCheck,
  Settings,
  Search,
  Compass,
  HeartPulse,
  Building2,
  GraduationCap,
  Hotel,
  Cpu,
  Store,
  Briefcase,
  TrendingUp,
} from "lucide-react";

// Floating Element Animation (Consistent with DubaiLocalSEO.jsx & SaudiVideoMarketingAgency.jsx)
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

export default function AIMarketingAutomationSaudiArabia() {
  const [openFaq, setOpenFaq] = useState(null);

  const pageUrl = "https://diglip7.com/saudi-arabia/ai-marketing-automation/";
  const metaTitle = "AI Marketing Automation Agency Saudi Arabia | DigLip7";
  const metaDescription =
    "Explore AI marketing automation services in Saudi Arabia with DigLip7. Streamline marketing workflows, lead follow-ups, campaign management, and reporting.";
  const breadcrumbTrail = [
    { label: "Home", href: "/" },
    { label: "Saudi Arabia", href: "/saudi-arabia/seo-services" },
    { label: "AI Marketing Automation Agency Saudi Arabia", href: pageUrl },
  ];

  // ---------------------------------------------------------------------------
  // JSON-LD Schemas (Verbatim from Document Section 5)
  // ---------------------------------------------------------------------------
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://diglip7.com/saudi-arabia/ai-marketing-automation/#service",
      "name": "AI Marketing Automation Services in Saudi Arabia",
      "description":
        "AI-assisted marketing automation services for businesses in Saudi Arabia, covering workflow planning, lead follow-up processes, email and campaign automation, platform integration, testing, and reporting according to project requirements.",
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
      "serviceType": "AI Marketing Automation",
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
          "name": "AI Marketing Automation",
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
          "name": "What Is AI Marketing Automation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "AI marketing automation combines marketing automation software with AI-assisted features, such as content drafting support, audience grouping and reporting summaries. Rule-based automation follows fixed instructions you define, while AI assistance can help with suggestions or analysis that a person should review.",
          },
        },
        {
          "@type": "Question",
          "name": "What Does an AI Marketing Automation Agency in Saudi Arabia Do?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "An agency typically reviews your marketing processes, identifies suitable workflows, plans and configures them within the agreed scope, tests integrations and triggers, and sets up reporting. The exact responsibilities depend on the services agreed and the tools you use.",
          },
        },
        {
          "@type": "Question",
          "name": "Which Marketing Tasks Can Businesses Automate With AI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Examples include enquiry routing, follow-up emails, audience segmentation, abandoned-cart reminders, report preparation and content drafting support. Suitability depends on your tools, data quality and processes, and tasks needing judgment should keep human review.",
          },
        },
        {
          "@type": "Question",
          "name": "Can AI Marketing Automation Integrate With an Existing CRM?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Possibly. It depends on the CRM's compatibility, available APIs, access permissions, configuration needs and the project scope. Your existing setup should be reviewed before compatibility is confirmed.",
          },
        },
        {
          "@type": "Question",
          "name": "Is AI Marketing Automation Suitable for Small Businesses in Saudi Arabia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes, it can be. Small businesses often do best starting with one well-defined workflow, such as enquiry follow-up, instead of automating every marketing activity at once.",
          },
        },
        {
          "@type": "Question",
          "name": "Can Marketing Automation Support Arabic and English Campaigns?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "It can, where the selected platform supports the languages you need. Workflow design, translations and cultural context should be reviewed by people who understand the audience, including right-to-left display where relevant.",
          },
        },
        {
          "@type": "Question",
          "name": "How Long Does Marketing Automation Implementation Take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "It depends on workflow complexity, data readiness, integrations, testing and approval requirements. A realistic timeline can be given only after the scope is understood.",
          },
        },
        {
          "@type": "Question",
          "name": "How Can Businesses Measure AI Marketing Automation Performance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Start by recording baseline metrics before launch, set up reliable tracking, and review results over a suitable period against your goals. Relevant measures may include lead response time, qualified enquiries, email engagement and workflow error rates.",
          },
        },
      ],
    },
  ];

  // ---------------------------------------------------------------------------
  // Verbatim Document Data Arrays
  // ---------------------------------------------------------------------------

  const whatIsList = [
    "Organising and segmenting audiences.",
    "Triggering follow-up messages based on customer actions.",
    "Routing enquiries to the right team member.",
    "Assisting with campaign planning.",
    "Preparing marketing reports.",
    "Identifying bottlenecks in a workflow.",
  ];

  const whyList = [
    "Managing enquiries from different digital channels.",
    "Coordinating multiple marketing campaigns.",
    "Making lead follow-ups more consistent.",
    "Supporting Arabic and English communication where suitable.",
    "Reducing repetitive manual administration.",
    "Getting clearer visibility of campaign activity.",
    "Organising marketing data and reporting.",
  ];

  const services = [
    {
      icon: Zap,
      title: "Marketing Workflow Automation",
      text: "The starting point is mapping the repetitive tasks your team already does, then reviewing where work is handed from one person or tool to another. From there, suitable triggers can be configured so that routine steps happen automatically, while decisions that need judgment stay with people.",
      image: {
        src: "/images/marketing-workflow-automation-saudi-arabia.webp",
        alt: "Marketing specialist reviewing automated campaign workflows on a laptop",
      },
    },
    {
      icon: Users,
      title: "AI-Assisted Lead Management and Nurturing",
      text: "Enquiries can be collected in one place, routed to the right person, scored or qualified using criteria you define, and followed up through suitable workflows. A person should review cases that call for judgment, such as unusual requests, high-value opportunities or sensitive conversations.",
      image: {
        src: "/images/automated-lead-nurturing-workflow.webp",
        alt: "Marketing professional reviewing a structured lead follow-up process",
      },
    },
    {
      icon: Mail,
      title: "Email Marketing Automation",
      text: "Email automation can include audience segmentation, welcome sequences, scheduled campaigns, behaviour-based follow-ups, retention workflows and performance reporting, where your platform supports them. Messages should be relevant, sent with appropriate consent and include a working way to unsubscribe.",
      linkText: "email marketing",
      linkTo: "/saudi-arabia/email-marketing-services/",
    },
    {
      icon: Plug,
      title: "CRM and Marketing Platform Integration",
      text: "Compatible customer relationship management systems and marketing platforms may be able to exchange information, so that a form submission updates a contact record or a deal stage triggers a message. Compatibility varies, and no integration can be assumed to work with every tool. Specific platforms should be confirmed during planning.",
    },
    {
      icon: Target,
      title: "Customer Segmentation and Personalisation",
      text: "Appropriate customer data can support more relevant audience groups and tailored messages, such as different follow-ups for new enquiries and returning customers. Only collect and use personal data you have a valid reason to hold, and avoid sensitive information unless it is truly necessary and properly handled.",
    },
    {
      icon: Sparkles,
      title: "AI-Assisted Campaign Planning and Content Workflows",
      text: "AI tools can help with campaign briefs, content drafts, creative ideas and organising workflows. They can also be wrong. People should check facts, tone, brand consistency and cultural relevance before anything is published, particularly for Arabic and English content.",
      linkText: "content marketing",
      linkTo: "/saudi-arabia/content-marketing-services/",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Marketing Automation",
      text: "Online stores can use workflows such as abandoned-cart reminders, post-purchase messages, product recommendations and retention campaigns. These depend on compatible store and email systems, accurate data and the right permissions from customers.",
      image: {
        src: "/images/ecommerce-marketing-automation.webp",
        alt: "E-commerce team planning automated customer follow-up campaigns",
      },
    },
    {
      icon: BarChart3,
      title: "Marketing Analytics and Automated Reporting",
      text: "Automation can help gather campaign data into one place, prepare dashboards, summarise performance and make reporting more consistent. It does not guarantee higher revenue, conversions or efficiency. It makes the numbers easier to see and the reporting less manual.",
      linkText: "paid advertising campaigns",
      linkTo: "/saudi-arabia/ppc-services/",
      image: {
        src: aiMarketingAnalyticsDashboardImg || "/images/ai-marketing-analytics-dashboard.webp",
        alt: "Marketing team reviewing campaign performance and lead engagement data",
      },
    },
  ];

  const industries = [
    {
      icon: ShoppingCart,
      label: "E-commerce and retail:",
      text: "cart reminders, post-purchase follow-ups, product recommendations and retention messages.",
    },
    {
      icon: Briefcase,
      label: "Professional and B2B services:",
      text: "enquiry routing, follow-up sequences and reminders for longer sales cycles.",
    },
    {
      icon: Building2,
      label: "Real estate:",
      text: "responding to property enquiries and keeping prospects informed about relevant listings.",
    },
    {
      icon: GraduationCap,
      label: "Education and training:",
      text: "following up with course enquiries and sending reminders about intakes and events.",
    },
    {
      icon: Hotel,
      label: "Hospitality:",
      text: "booking-related communication and returning-guest campaigns.",
    },
    {
      icon: Cpu,
      label: "Technology and SaaS:",
      text: "onboarding sequences, trial follow-ups and lead scoring.",
    },
    {
      icon: HeartPulse,
      label: "Healthcare clinics:",
      text: "appointment-related communication, where suitable and subject to applicable privacy and sector requirements.",
    },
  ];

  const processSteps = [
    {
      icon: Search,
      step: "Step 1 — Business and Workflow Discovery",
      desc: "We review your business objectives, current marketing processes, existing software, repetitive tasks and operational challenges.",
    },
    {
      icon: Compass,
      step: "Step 2 — Automation Opportunity Assessment",
      desc: "We identify the workflows that may benefit from automation and separate practical opportunities from tasks that need human judgment.",
    },
    {
      icon: Layers,
      step: "Step 3 — Workflow and Platform Planning",
      desc: "The proposed workflow is defined, along with the data it needs, platform compatibility, access permissions, responsibilities and scope.",
    },
    {
      icon: Settings,
      step: "Step 4 — Setup and Integration",
      desc: "Configuration and integration are carried out within the agreed scope and the capabilities confirmed for the project.",
    },
    {
      icon: ShieldCheck,
      step: "Step 5 — Testing and Human Review",
      desc: "Triggers, message accuracy, lead routing, consent requirements, failure handling and reporting are tested before the workflow goes live.",
    },
    {
      icon: BarChart3,
      step: "Step 6 — Monitoring and Optimisation",
      desc: "We review available performance data, investigate errors and improve workflows based on evidence. No fixed implementation time can be promised without understanding the project's complexity.",
    },
  ];

  const benefits = [
    "More consistent follow-up processes.",
    "Less repetitive manual administration.",
    "Better-organised marketing workflows.",
    "More relevant customer communication.",
    "More consistent reporting.",
    "Better visibility into campaign activity.",
    "More time for strategic work.",
  ];

  const limitations = [
    "Poor data can produce poor recommendations.",
    "Incorrect triggers can send irrelevant messages.",
    "Integrations may need extra work and extra subscription costs.",
    "AI-generated content can contain errors.",
    "Customer consent and data retention need attention.",
    "Automated decisions may need human oversight.",
    "Automation does not guarantee better business results.",
  ];

  const whyDiglip = [
    "Understanding your marketing objectives.",
    "Choosing workflows based on actual business needs.",
    "Aligning automation with your existing marketing activity.",
    "Defining the scope before implementation.",
    "Considering integration requirements and data quality.",
    "Planning testing, reporting and human review.",
    "Making recommendations based on your tools and resources.",
  ];

  const faqs = [
    {
      q: "What Is AI Marketing Automation?",
      a: "AI marketing automation combines marketing automation software with AI-assisted features, such as content drafting support, audience grouping and reporting summaries. Rule-based automation follows fixed instructions you define, while AI assistance can help with suggestions or analysis that a person should review.",
    },
    {
      q: "What Does an AI Marketing Automation Agency in Saudi Arabia Do?",
      a: "An agency typically reviews your marketing processes, identifies suitable workflows, plans and configures them within the agreed scope, tests integrations and triggers, and sets up reporting. The exact responsibilities depend on the services agreed and the tools you use.",
    },
    {
      q: "Which Marketing Tasks Can Businesses Automate With AI?",
      a: "Examples include enquiry routing, follow-up emails, audience segmentation, abandoned-cart reminders, report preparation and content drafting support. Suitability depends on your tools, data quality and processes, and tasks needing judgment should keep human review.",
    },
    {
      q: "Can AI Marketing Automation Integrate With an Existing CRM?",
      a: "Possibly. It depends on the CRM's compatibility, available APIs, access permissions, configuration needs and the project scope. Your existing setup should be reviewed before compatibility is confirmed.",
    },
    {
      q: "Is AI Marketing Automation Suitable for Small Businesses in Saudi Arabia?",
      a: "Yes, it can be. Small businesses often do best starting with one well-defined workflow, such as enquiry follow-up, instead of automating every marketing activity at once.",
    },
    {
      q: "Can Marketing Automation Support Arabic and English Campaigns?",
      a: "It can, where the selected platform supports the languages you need. Workflow design, translations and cultural context should be reviewed by people who understand the audience, including right-to-left display where relevant.",
    },
    {
      q: "How Long Does Marketing Automation Implementation Take?",
      a: "It depends on workflow complexity, data readiness, integrations, testing and approval requirements. A realistic timeline can be given only after the scope is understood.",
    },
    {
      q: "How Can Businesses Measure AI Marketing Automation Performance?",
      a: "Start by recording baseline metrics before launch, set up reliable tracking, and review results over a suitable period against your goals. Relevant measures may include lead response time, qualified enquiries, email engagement and workflow error rates.",
    },
  ];

  return (
    <div className="overflow-x-hidden bg-white w-full font-sans antialiased text-gray-800">
      {/* SEO Integration */}
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
          BREADCRUMB (Identical light gradient to DubaiLocalSEO.jsx & SaudiVideoMarketingAgency.jsx)
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
                <span className="text-gray-900">AI Marketing Automation </span>
                <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                  Agency Saudi Arabia
                </span>
              </h1>

              {/* Exact Document Paragraph 1 */}
              <p className="text-gray-700 text-sm sm:text-base lg:text-lg mb-4 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Most marketing teams do not struggle for ideas. They struggle with the work around the ideas: enquiries arriving from several channels, follow-ups that happen late or not at all, campaigns that need the same data copied between tools, and reports assembled by hand each month. AI-assisted automation can take some of that load by organising workflows, triggering follow-ups, coordinating campaigns and helping review performance.
              </p>

              {/* Exact Document Paragraph 2 */}
              <p className="text-gray-700 text-sm sm:text-base lg:text-lg mb-4 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                It works best when it supports your strategy rather than replacing your judgment. Someone still needs to decide who your audience is, what you should say to them and when a conversation needs a human voice. For businesses in Saudi Arabia, that also means thinking about Arabic and English communication, customer consent and the tools your team already uses.
              </p>

              {/* Exact Document Paragraph 3 */}
              <p className="text-gray-700 text-sm sm:text-base lg:text-lg mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                This page explains what an AI marketing automation service from <span className="font-semibold text-blue-700">DigLip7</span> is, which tasks it can realistically cover, how an implementation works and where the limits are. We do not promise leads, sales or ROI, because results depend on your data, your offer and how well the workflows are designed and reviewed.
              </p>

              {/* CTA Button 1 */}
              <div className="flex justify-center lg:justify-start">
                <Link to="/contact" className="inline-block">
                  <motion.button
                    className="group px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-teal-700 to-teal-900 text-white text-base sm:text-lg font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Discuss Your Marketing Automation Needs
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
                    src="/images/ai-marketing-automation-agency-saudi-arabia.webp"
                    alt="Marketing professionals planning AI-assisted marketing automation workflows"
                    width="1200"
                    height="675"
                    decoding="async"
                    className="rounded-2xl shadow-xl w-full max-w-lg lg:max-w-none h-auto object-cover bg-gray-100"
                  />
                </Card3D>
              </motion.div>
            </motion.div>
          </div>

          {/* Floating particle dust */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(15)].map((_, i) => (
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
            SECTION 2: WHAT IS AI MARKETING AUTOMATION?
            ========================================================================= */}

        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <FloatingElement>
                {/* Exact H2 */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  What Is <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">AI Marketing Automation?</span>
                </h2>
              </FloatingElement>
              {/* Exact Document Paragraph 1 */}
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Marketing automation software runs tasks based on rules you set: send this email when someone signs up, assign this lead to that person, update this record when a form is submitted. AI adds assistance on top of those rules, such as suggesting audience groups, drafting content for review, summarising campaign performance or flagging where a workflow is slowing down.
              </p>
              {/* Exact Document Paragraph 2 */}
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mt-4">
                The pieces work together. Customer data feeds the system, campaign workflows decide what happens next, AI features help with analysis or drafting, and reporting shows what occurred. Practical examples include:
              </p>
            </div>

            {/* 6 Practical Examples Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto mb-8">
              {whatIsList.map((item, i) => (
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
              What is possible depends on the platform you use, the integration options, the quality of your data, user permissions and how everything is configured. Automation built on messy data tends to produce messy results.
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: WHY BUSINESSES IN SAUDI ARABIA CONSIDER AI MARKETING AUTOMATION
            ========================================================================= */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <FloatingElement>
                {/* Exact H2 */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Why Businesses in Saudi Arabia Consider <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">AI Marketing Automation</span>
                </h2>
              </FloatingElement>
              {/* Exact Document Paragraph 1 with Internal Link */}
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                The reasons are usually practical. Enquiries come in through the website,{" "}
                <Link
                  to="/saudi-arabia/social-media-marketing/"
                  className="text-teal-700 font-semibold underline hover:text-teal-900">
                  social media marketing
                </Link>
                , messaging apps and phone calls, and someone has to keep track of them. Several campaigns often run at once, follow-up quality varies from person to person, and a lot of staff time goes into repetitive administration.
              </p>
              <p className="text-gray-900 font-bold text-lg mt-6">Common needs include:</p>
            </div>

            {/* 7 Common Needs Grid in full max-w-7xl */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-10">
              {whyList.map((item, i) => (
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
              None of this requires a large budget or a complicated system. Many businesses start by fixing one slow or inconsistent process.
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: AI MARKETING AUTOMATION SERVICES IN SAUDI ARABIA
            ========================================================================= */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <FloatingElement>
                {/* Exact H2 */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  AI Marketing Automation <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">Services in Saudi Arabia</span>
                </h2>
              </FloatingElement>
              {/* Exact Document Lead Paragraph */}
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                The categories below describe what an automation project can include. Which ones apply depends on your tools, goals and budget, and the exact scope is agreed before work begins.
              </p>
            </div>

            {/* 8 Services Ordered with their exact Images from Document */}
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
                          {/* Exact Document Paragraph with Internal Link */}
                          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            {service.linkText ? (
                              <>
                                Automation can help gather campaign data into one place, prepare dashboards, summarise performance and make reporting more consistent. It does not guarantee higher revenue, conversions or efficiency. It makes the numbers easier to see and the reporting less manual. Explore related{" "}
                                <Link
                                  to={service.linkTo}
                                  className="text-teal-700 font-semibold underline hover:text-teal-900"
                                >
                                  {service.linkText}
                                </Link>{" "}
                                to align reporting across channels.
                              </>
                            ) : (
                              service.text
                            )}
                          </p>
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
                    {/* Exact Document Paragraph with Internal Link */}
                    <p className="text-gray-700 text-base leading-relaxed">
                      {service.linkText ? (
                        service.title === "Email Marketing Automation" ? (
                          <>
                            Email automation can include audience segmentation, welcome sequences, scheduled campaigns, behaviour-based follow-ups, retention workflows and performance reporting, where your platform supports them. Check our dedicated{" "}
                            <Link
                              to={service.linkTo}
                              className="text-teal-700 font-semibold underline hover:text-teal-900"
                            >
                              {service.linkText}
                            </Link>{" "}
                            solutions. Messages should be relevant, sent with appropriate consent and include a working way to unsubscribe.
                          </>
                        ) : (
                          <>
                            AI tools can help with campaign briefs, content drafts, creative ideas and organising workflows. They can also be wrong. People should check facts, tone, brand consistency and cultural relevance before anything is published, particularly for Arabic and English{" "}
                            <Link
                              to={service.linkTo}
                              className="text-teal-700 font-semibold underline hover:text-teal-900"
                            >
                              {service.linkText}
                            </Link>
                            .
                          </>
                        )
                      ) : (
                        service.text
                      )}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: INDUSTRIES THAT MAY BENEFIT FROM AI MARKETING AUTOMATION
            ========================================================================= */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <FloatingElement>
                {/* Exact H2 */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Industries That May Benefit From{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                    AI Marketing Automation
                  </span>
                </h2>
              </FloatingElement>
              {/* Exact Document Lead Paragraph */}
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Workflows look different from one industry to the next, depending on the sales cycle, customer expectations and the technology in use. The examples below show possible uses, not past projects.
              </p>
            </div>

            {/* 7 Industries Grid in full max-w-7xl */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {industries.map((ind, i) => {
                const IndIcon = ind.icon;
                return (
                  <div
                    key={ind.label}
                    className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
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
            SECTION 6: OUR AI MARKETING AUTOMATION IMPLEMENTATION PROCESS
            (Matching SocialMedia.jsx Process Section & User Screenshot)
            ========================================================================= */}
        <div className="bg-white py-16 px-6 md:px-12 lg:px-8 text-center border-t border-gray-100">
          {/* Header */}
          <div className="max-w-4xl mx-auto mb-12">
            <FloatingElement>
              {/* Exact H2 */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our AI Marketing Automation{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  Implementation Process
                </span>
              </h2>
            </FloatingElement>
            {/* Exact Document Paragraph */}
            <p className="text-gray-600 mt-3 text-base sm:text-lg">
              Every project is different, so steps and timelines vary.
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
            SECTION 7: AI MARKETING AUTOMATION FOR BUSINESSES ACROSS SAUDI ARABIA
            ========================================================================= */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-md">
              <div className="max-w-3xl mx-auto text-center mb-8">
                <FloatingElement>
                  {/* Exact H2 */}
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    AI Marketing Automation for Businesses{" "}
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
                    Requirements can differ for a business serving customers in Riyadh, Jeddah, Dammam or Khobar compared with one that operates nationally, so workflows should be planned around your actual audience and sales process. These cities are examples of possible markets, and DigLip7 is not claiming a physical office in any of them.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold mb-4">
                    <Globe className="w-5 h-5" />
                  </div>
                  {/* Exact Document Paragraph 2 with Internal Link */}
                  <p className="text-gray-700 text-base leading-relaxed">
                    Arabic and English workflows are possible where the selected tools support the languages you need and someone with the right language and cultural knowledge reviews the content. Language choices should follow your customers' preferences, not assumptions. Align your strategy with comprehensive{" "}
                    <Link
                      to="/saudi-arabia/seo-services"
                      className="text-teal-700 font-semibold underline hover:text-teal-900"
                    >
                      digital marketing in Saudi Arabia
                    </Link>{" "}
                    for full-funnel impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 8: BENEFITS AND LIMITATIONS OF AI MARKETING AUTOMATION
            ========================================================================= */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <FloatingElement>
                {/* Exact H2 */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Benefits and Limitations of{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                    AI Marketing Automation
                  </span>
                </h2>
              </FloatingElement>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto mb-8">
              {/* Potential Benefits */}
              <div className="rounded-3xl p-7 sm:p-8 bg-gradient-to-br from-teal-50/50 to-white border border-teal-100 shadow-sm">
                <p className="font-bold text-teal-800 text-lg mb-5 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-teal-600" />
                  Potential benefits:
                </p>
                <ul className="space-y-3.5">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-1" />
                      <span className="text-gray-800 text-sm sm:text-base leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Limitations and risks to weigh */}
              <div className="rounded-3xl p-7 sm:p-8 bg-gradient-to-br from-amber-50/40 to-white border border-amber-100 shadow-sm">
                <p className="font-bold text-amber-900 text-lg mb-5 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                  Limitations and risks to weigh:
                </p>
                <ul className="space-y-3.5">
                  {limitations.map((l) => (
                    <li key={l} className="flex items-start gap-3">
                      <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-1" />
                      <span className="text-gray-800 text-sm sm:text-base leading-relaxed">{l}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Exact Document Trailing Paragraph */}
            <div className="max-w-7xl mx-auto text-center text-gray-700 text-sm sm:text-base font-semibold bg-gray-50 p-5 rounded-xl border border-gray-100">
              A useful project weighs both lists honestly before anything is built.
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 9: HOW WE MEASURE MARKETING AUTOMATION PERFORMANCE
            ========================================================================= */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-md">
              <div className="max-w-3xl mx-auto text-center">
                <FloatingElement>
                  {/* Exact H2 */}
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    How We Measure{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                      Marketing Automation Performance
                    </span>
                  </h2>
                </FloatingElement>
                {/* Exact Document Paragraph 1 */}
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
                  The right measures depend on your goals. Useful ones include workflow completion and error rates, lead response time, qualified enquiries, email delivery and engagement, unsubscribe and complaint rates, conversion events, cost per qualified lead when reliable cost data exists, attribution and reporting completeness, and time spent on repetitive tasks.
                </p>
                {/* Exact Document Paragraph 2 */}
                <p className="text-gray-700 text-base leading-relaxed">
                  Start by recording a baseline before launch, then evaluate results over a suitable period. We do not publish invented benchmarks or claim results for DigLip7.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 10: WHY CONSIDER DIGLIP7 FOR AI MARKETING AUTOMATION?
            ========================================================================= */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <FloatingElement>
                {/* Exact H2 */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Why Consider DigLip7 for{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                    AI Marketing Automation?
                  </span>
                </h2>
              </FloatingElement>
              {/* Exact Document Lead Paragraph */}
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Our approach is built around your situation:
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
              We would rather explain what is realistic than overpromise. Ask any provider which services they deliver directly, which tools they work with and what evidence they can show. See how our automation integrates with wider{" "}
              <Link
                to="/saudi-arabia/seo-services"
                className="text-teal-700 font-semibold underline hover:text-teal-900"
              >
                SEO services
              </Link>{" "}
              for complete visibility.
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 11: FREQUENTLY ASKED QUESTIONS ABOUT AI MARKETING AUTOMATION
            (Matching SocialMedia.jsx & SaudiVideoMarketingAgency.jsx)
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
                    AI Marketing Automation
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
            SECTION 12: PLAN YOUR AI MARKETING AUTOMATION STRATEGY WITH DIGLIP7 (FINAL CTA)
            ========================================================================= */}
        <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 xl:px-12 w-full text-center relative overflow-hidden border-t border-gray-100">
          <div className="max-w-5xl mx-auto relative z-10">
            <FloatingElement>
              {/* Exact H2 */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight leading-tight">
                Plan Your AI Marketing Automation Strategy{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  With DigLip7
                </span>
              </h2>
            </FloatingElement>

            {/* Exact Document Paragraph */}
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
              If you are looking for an AI marketing automation agency in Saudi Arabia, start with what you already have: your business objectives, the tools your team uses and the workflow problems that cost you the most time. Share those with us and we can talk through what is realistic to automate first.
            </p>

            {/* Exact CTA Button 2 */}
            <div className="flex justify-center mb-10">
              <Link to="/contact">
                <motion.button
                  className="group px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-teal-700 to-teal-900 text-white text-base sm:text-lg font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Talk to DigLip7
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
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
