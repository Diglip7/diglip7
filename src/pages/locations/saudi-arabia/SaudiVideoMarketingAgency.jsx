import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../../../components/SEO";
import {
  Video,
  Play,
  Film,
  Sparkles,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Home,
  CheckCircle2,
  BarChart3,
  Globe,
  Users,
  Target,
  Compass,
  Tv,
  Smartphone,
  Eye,
  Clock,
  MessageSquare,
  HelpCircle,
  Lightbulb,
  Building,
  Building2,
  Store,
  Briefcase,
  Rocket,
  ShieldCheck,
  TrendingUp,
  Sliders,
  Layers,
  Share2,
  FileText,
  Megaphone,
  Check,
  Zap,
} from "lucide-react";

// 3D Interactive Card Component (Strictly matching APIDevelopment.jsx & site pattern)
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

// Floating Animation Component (Matching DubaiLocalSEO.jsx)
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

export default function SaudiVideoMarketingAgency() {
  const [openFaq, setOpenFaq] = useState(null);

  const pageUrl = "https://diglip7.com/saudi-arabia/video-marketing-agency/";

  const breadcrumbTrail = [
    { label: "Home", href: "/" },
    { label: "Saudi Arabia", href: "/saudi-arabia/seo-services" },
    { label: "Video Marketing Agency Saudi Arabia", href: "/saudi-arabia/video-marketing-agency/" },
  ];

  // ---------------------------------------------------------------------------
  // JSON-LD Schemas (Verbatim from Document Section 5, 6, 7 & 8)
  // ---------------------------------------------------------------------------
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Video Marketing Agency Saudi Arabia",
      "description":
        "Video marketing services for businesses in Saudi Arabia, including campaign strategy, video content planning, distribution, and performance measurement according to project requirements.",
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
      "serviceType": "Video Marketing",
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
          "name": "Video Marketing Agency Saudi Arabia",
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
          "name": "What does a video marketing agency in Saudi Arabia do?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "A video marketing agency may help businesses plan video content, define campaign objectives, distribute videos through relevant channels, and measure performance according to the services provided.",
          },
        },
        {
          "@type": "Question",
          "name": "How can video marketing help my business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Video marketing can help businesses explain products and services, educate audiences, support brand awareness, and contribute to campaign goals when the content and distribution are appropriate.",
          },
        },
        {
          "@type": "Question",
          "name": "How much do video marketing services cost in Saudi Arabia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "The cost depends on strategy, production requirements, editing, animation, campaign management, distribution, and project scope. A defined brief is needed before a reliable estimate can be given.",
          },
        },
        {
          "@type": "Question",
          "name": "Does video marketing include video production?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "They are related but different. Video marketing covers planning, distribution, and measurement, while video production covers creating the video itself. Whether production is included depends on the provider's actual service offering, so confirm this before you start.",
          },
        },
        {
          "@type": "Question",
          "name": "Which platforms are suitable for video marketing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "The choice depends on your target audience, content format, campaign objective, and budget. Options may include YouTube and relevant social networks.",
          },
        },
        {
          "@type": "Question",
          "name": "Can video marketing support B2B lead generation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "It can support B2B enquiries when useful videos are distributed to the right audience and linked to relevant landing pages with clear calls to action, but leads cannot be guaranteed.",
          },
        },
        {
          "@type": "Question",
          "name": "Should businesses in Saudi Arabia create Arabic video content?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "It depends on your audience and context. Arabic, English, subtitles, or a mix may be appropriate, so choose languages based on who you want to reach and what the campaign needs.",
          },
        },
        {
          "@type": "Question",
          "name": "How can I start video marketing with DigLip7?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "You can discuss your goals, audience, available content, distribution requirements, and campaign expectations with DigLip7 to decide on a suitable approach.",
          },
        },
      ],
    },
  ];

  // ---------------------------------------------------------------------------
  // Data for Structured Presentation (Verbatim Content)
  // ---------------------------------------------------------------------------
  const servicesList = [
    {
      title: "Video Marketing Strategy",
      desc: "A strategy defines business objectives, the target audience, the key message, content formats, distribution channels, campaign timing, calls to action and the indicators you will track. It should match what your audience needs and what the business is trying to achieve, rather than copying whatever format is currently popular.",
      icon: Target,
    },
    {
      title: "Promotional Video Marketing",
      desc: "Promotional videos communicate a product, service, offer, event or brand message. The strongest ones use concise messaging, a clear value proposition, relevant visuals and a suitable call to action. A promotional video does not automatically generate sales, so it needs the right audience and a sensible next step for viewers.",
      icon: Megaphone,
    },
    {
      title: "Corporate Video Marketing",
      desc: "Corporate videos can introduce a company, explain its services, show how it works and support B2B marketing. Typical uses include company introductions, service explainers, business presentations, recruitment communication, product demonstrations and internal or external business updates.",
      icon: Building,
    },
    {
      title: "Social Media Video Marketing",
      desc: "Each platform has its own audience behaviour, so video content is usually adapted rather than posted unchanged. That means short-form concepts, platform-appropriate aspect ratios, captions for accessibility and for viewers watching without sound, a strong opening message, a clear call to action, repurposing of longer content and consistent brand presentation. Organic reach and viral performance cannot be guaranteed.",
      icon: Smartphone,
    },
    {
      title: "Product and E-commerce Video Marketing",
      desc: "Video helps customers understand features, uses, materials and benefits before they buy. Common formats include product demonstrations, feature explanations, product-in-use videos, launch content, short clips for social platforms and videos placed on relevant landing pages. Product claims should always be accurate and demonstrations should not mislead.",
      icon: Store,
    },
    {
      title: "Explainer Video Marketing",
      desc: "Explainer videos make complex products, processes and services easier to understand. Good ones start from the questions the audience actually asks, use a simple story structure, clear narration, relevant visual examples and concise messaging. Animation or motion graphics are possible formats, and the right choice depends on the idea and the budget.",
      icon: Lightbulb,
    },
    {
      title: "YouTube Video Marketing",
      desc: "YouTube can be a useful part of a wider content strategy. Good practice includes relevant topics, descriptive titles, helpful descriptions, suitable thumbnails, captions, playlists, links to relevant landing pages and regular performance monitoring. Optimisation should focus on relevance and usefulness to viewers, not repeating keywords.",
      icon: Tv,
    },
    {
      title: "Video Advertising Campaigns",
      desc: "When it fits the objective and budget, video can be used in paid advertising. This involves audience targeting, creative variations, clear campaign objectives, landing pages that match the ad message, budget monitoring and conversion measurement. The right advertising platform depends on where your audience spends time.",
      icon: Zap,
    },
    {
      title: "Video Analytics and Campaign Optimisation",
      desc: "Useful analysis looks at views and reach, watch time, audience retention, click-throughs, landing page visits, engagement, and leads or conversions where they can be measured. Metrics differ between platforms, so they should be read against the campaign objective instead of in isolation.",
      icon: BarChart3,
    },
  ];

  const industriesList = [
    {
      title: "Video Marketing for E-commerce Businesses",
      desc: "Online stores can use video for product demonstrations, helping shoppers discover products, promotional campaigns and customer education such as sizing, care or usage guides.",
      icon: Store,
    },
    {
      title: "Video Marketing for B2B Companies",
      desc: "B2B buyers often need to understand a service before they speak to anyone. Service explainers, company introductions, educational videos, presentations and follow-up content can support the buying process and help nurture leads.",
      icon: Briefcase,
    },
    {
      title: "Video Marketing for Professional Service Businesses",
      desc: "Firms selling expertise can use video to introduce their services, answer common questions, show how their process works and set realistic expectations before a first conversation.",
      icon: Building2,
    },
    {
      title: "Video Marketing for Startups and Small Businesses",
      desc: "With limited resources, it is usually better to begin with one focused objective, a manageable content plan and production formats that suit the budget, then build from what the data shows.",
      icon: Rocket,
    },
    {
      title: "Video Marketing for Established Brands",
      desc: "Larger brands tend to need consistency across campaigns, repurposing of existing content, audience segmentation, and video activity that lines up with their wider marketing plans.",
      icon: ShieldCheck,
    },
  ];

  const processSteps = [
    {
      step: "Step 1 — Understand Your Business Goals",
      desc: "We identify your business objective and the audience you want to reach.",
      icon: Target,
    },
    {
      step: "Step 2 — Develop the Content Strategy",
      desc: "This covers messaging, formats, distribution channels and campaign planning.",
      icon: FileText,
    },
    {
      step: "Step 3 — Plan the Creative Direction",
      desc: "Concept development, script planning, visual references and calls to action are agreed where relevant.",
      icon: Compass,
    },
    {
      step: "Step 4 — Prepare and Publish the Content",
      desc: "This step covers production, editing, platform formatting and publishing, to the extent these are part of the agreed scope. Where video is produced by the client or an external team, the marketing strategy and distribution can be planned around those assets.",
      icon: Film,
    },
    {
      step: "Step 5 — Distribute and Promote",
      desc: "Content is shared through organic channels and, where appropriate, supported by paid promotion.",
      icon: Share2,
    },
    {
      step: "Step 6 — Measure Campaign Performance",
      desc: "Campaign metrics are reviewed against the original objective.",
      icon: BarChart3,
    },
    {
      step: "Step 7 — Refine the Strategy",
      desc: "Audience response, engagement and conversion data guide future content decisions. No fixed timeline or result can be promised.",
      icon: Sliders,
    },
  ];

  const saudiAttentionPoints = [
    "Arabic and English content options.",
    "Cultural and audience relevance.",
    "Subtitles and accessibility.",
    "Platform selection.",
    "Regional targeting where appropriate.",
    "Clear, accurate messaging.",
  ];

  const challengesList = [
    {
      problem: "No clear objective:",
      solution: "write down one goal per video before planning anything.",
      icon: Target,
    },
    {
      problem: "Unclear messaging:",
      solution: "reduce each video to a single main idea.",
      icon: MessageSquare,
    },
    {
      problem: "Weak opening seconds:",
      solution: "lead with the most relevant point, not a long intro.",
      icon: Clock,
    },
    {
      problem: "Poor platform formatting:",
      solution: "export versions with the right aspect ratio and length for each channel.",
      icon: Smartphone,
    },
    {
      problem: "Missing captions:",
      solution: "add accurate captions so the video works without sound.",
      icon: Eye,
    },
    {
      problem: "Inconsistent branding:",
      solution: "set simple visual and tone guidelines.",
      icon: Sparkles,
    },
    {
      problem: "Unclear calls to action:",
      solution: "tell viewers exactly what to do next.",
      icon: ArrowRight,
    },
    {
      problem: "Limited distribution:",
      solution: "plan where and how the video will be shared before it is made.",
      icon: Share2,
    },
    {
      problem: "Weak landing page alignment:",
      solution: "send viewers to a page that matches the video's message.",
      icon: Globe,
    },
    {
      problem: "Incomplete measurement:",
      solution: "set up tracking for the actions that matter before launch.",
      icon: BarChart3,
    },
  ];

  const whyChoosePoints = [
    "Campaign planning tied to your business goals.",
    "Messaging written for your audience.",
    "Alignment with your wider digital marketing.",
    "Content strategy suited to each platform.",
    "Clear campaign objectives.",
    "Performance monitoring.",
    "Data-informed optimisation.",
  ];

  const faqs = [
    {
      q: "What does a video marketing agency in Saudi Arabia do?",
      a: "A video marketing agency may help businesses plan video content, define campaign objectives, distribute videos through relevant channels, and measure performance according to the services provided.",
    },
    {
      q: "How can video marketing help my business?",
      a: "Video marketing can help businesses explain products and services, educate audiences, support brand awareness, and contribute to campaign goals when the content and distribution are appropriate.",
    },
    {
      q: "How much do video marketing services cost in Saudi Arabia?",
      a: "The cost depends on strategy, production requirements, editing, animation, campaign management, distribution, and project scope. A defined brief is needed before a reliable estimate can be given.",
    },
    {
      q: "Does video marketing include video production?",
      a: "They are related but different. Video marketing covers planning, distribution, and measurement, while video production covers creating the video itself. Whether production is included depends on the provider's actual service offering, so confirm this before you start.",
    },
    {
      q: "Which platforms are suitable for video marketing?",
      a: "The choice depends on your target audience, content format, campaign objective, and budget. Options may include YouTube and relevant social networks.",
    },
    {
      q: "Can video marketing support B2B lead generation?",
      a: "It can support B2B enquiries when useful videos are distributed to the right audience and linked to relevant landing pages with clear calls to action, but leads cannot be guaranteed.",
    },
    {
      q: "Should businesses in Saudi Arabia create Arabic video content?",
      a: "It depends on your audience and context. Arabic, English, subtitles, or a mix may be appropriate, so choose languages based on who you want to reach and what the campaign needs.",
    },
    {
      q: "How can I start video marketing with DigLip7?",
      a: "You can discuss your goals, audience, available content, distribution requirements, and campaign expectations with DigLip7 to decide on a suitable approach.",
    },
  ];

  return (
    <div className="overflow-x-hidden bg-white w-full font-sans antialiased text-gray-800">
      {/* Dynamic SEO Tag Integration */}
      <SEO
        title="Video Marketing Agency Saudi Arabia | DigLip7"
        description="Grow your brand with a video marketing agency in Saudi Arabia. DigLip7 helps businesses plan video content and campaigns to reach relevant audiences."
        canonical={pageUrl}
        ogType="website"
        ogTitle="Video Marketing Agency Saudi Arabia | DigLip7"
        ogDescription="Explore video marketing services for Saudi Arabian businesses, including video strategy, promotional content, social media videos, and campaign performance tracking."
        twitterCard="summary"
        twitterTitle="Video Marketing Agency Saudi Arabia | DigLip7"
        twitterDescription="Discover video marketing services for businesses in Saudi Arabia. Plan engaging video content and campaigns aligned with your marketing goals."
        robots="index, follow"
        exactTitle={true}
        schema={structuredData}
      />

      {/* =========================================================================
          BREADCRUMB (Identical light gradient to DubaiLocalSEO.jsx)
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

      {/* =========================================================================
          SECTION 1: HERO (Matching APIDevelopment.jsx)
          ========================================================================= */}
      <div className="pt-24 sm:pt-28 pb-16 lg:pb-20 bg-gradient-to-r from-purple-100 via-pink-100 to-white min-h-[90vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 xl:px-12 relative overflow-hidden">
        {/* Animated Floating Objects */}
        <motion.div
          className="absolute top-10 left-10 w-16 h-16 bg-white/20 rounded-full blur-xl pointer-events-none"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-20 h-20 bg-white/20 rounded-full blur-xl pointer-events-none"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        <div className="flex flex-col lg:flex-row items-center w-full max-w-7xl mx-auto gap-8 lg:gap-12 relative z-10">
          
          {/* Left Section */}
          <div className="w-full lg:w-[54%] text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-gray-900">Video Marketing Agency Saudi Arabia </span>
              <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                for Business Growth
              </span>
            </h1>

            {/* Exact Document Paragraph 1 */}
            <p className="text-gray-700 text-sm sm:text-base lg:text-lg mt-4 mb-3 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Video is one of the clearest ways to show what a business does. It can demonstrate a product, introduce your team, explain a service that is hard to describe in text, and keep your message consistent across your website, social channels and advertising. For many companies it supports brand awareness, product and service demonstrations, social media content, promotional campaigns, customer education, business presentations, lead generation and e-commerce product communication.
            </p>

            {/* Exact Document Paragraph 2 */}
            <p className="text-gray-700 text-sm sm:text-base lg:text-lg mb-4 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
              Video only works when it has a job to do. An effective strategy starts with your target audience, a campaign objective, the channels where those people will see the content and a clear message. It does not start with filming first and deciding what to do with the footage later.
            </p>

            {/* Exact Document Paragraph 3 with Internal Link */}
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl mx-auto lg:mx-0">
              <span className="font-semibold text-blue-700">DigLip7</span> is a{" "}
              <Link
                to="/digital-market"
                className="text-teal-700 font-semibold underline decoration-teal-400 hover:text-teal-900 transition-colors"
              >
                digital marketing provider
              </Link>
              . If you are looking for a video marketing agency in Saudi Arabia, this page explains how video marketing works, what a campaign can involve and what to think through before you commit budget. We do not promise views, viral reach, sales or conversions, because results depend on the message, the audience and how the content is distributed.
            </p>

            {/* CTA Button */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Link to="/contact" className="inline-block">
                <motion.button
                  className="group px-7 sm:px-9 py-3.5 sm:py-4 bg-gradient-to-r from-teal-700 to-teal-900 text-white text-base sm:text-lg font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Discuss Your Video Marketing Strategy
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </div>
          </div>

          {/* Right Section - Animated / Movable Hero Image */}
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
                  src="/images/video-marketing-strategy-planning-session.webp"
                  alt="A marketing team planning a video campaign and content calendar around a table in a modern office."
                  className="rounded-2xl shadow-xl w-full max-w-lg lg:max-w-none h-auto object-cover bg-gray-100"
                />
              </Card3D>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating particles (Matching APIDevelopment.jsx) */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
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
      </div>

      {/* =========================================================================
          SECTION 2: WHAT DOES A VIDEO MARKETING AGENCY DO?
          ========================================================================= */}
          
      <div className="bg-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 w-full">
        <div className="max-w-7xl mx-auto">
          
          <div className="max-w-3xl mx-auto text-center mb-10">
            <FloatingElement>
              {/* Exact H2 */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Does a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  Video Marketing Agency Do?
                </span>
              </h2>
            </FloatingElement>
            {/* Exact Document Paragraph 1 */}
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              A video marketing agency plans and supports campaigns where video is the main format. That usually starts with research into your audience and objectives, followed by content planning, creative concepts and messaging. From there the work can extend to coordinating production and editing, adapting content for different platforms, distributing it on social channels, running paid video advertising where it suits the goal, measuring performance and optimising the campaign.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-7 sm:p-8 border border-gray-100 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
                <Target className="w-6 h-6" />
              </div>
              {/* Exact Document Paragraph 2 */}
              <p className="text-gray-700 text-base leading-relaxed">
                It helps to separate video production from video marketing. Production is making the video. Marketing is making sure the right people see it, understand it and take a sensible next step. A beautifully made video still needs a suitable audience, a platform, a distribution plan and a clear purpose.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-7 sm:p-8 border border-gray-100 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              {/* Exact Document Paragraph 3 */}
              <p className="text-gray-700 text-base leading-relaxed">
                The parts of this work a provider covers vary. Before you start, ask which steps are handled directly and which rely on client-provided or third-party assets, so you know exactly what is in scope.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          SECTION 3: WHY BUSINESSES IN SAUDI ARABIA USE VIDEO MARKETING
          ========================================================================= */}
      <div className="bg-gray-50 py-14 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 w-full border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          
          <div className="max-w-3xl mx-auto text-center mb-10">
            <FloatingElement>
              {/* Exact H2 */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Businesses in Saudi Arabia Use{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  Video Marketing
                </span>
              </h2>
            </FloatingElement>
            {/* Exact Document Paragraph 1 */}
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Businesses use video to explain products and services, show how a product works, introduce the company or team, support product launches, share customer education content and promote events and campaigns. It is also useful for presenting complex services clearly, and one core video can often be cut into versions for social media and digital advertising.
            </p>
          </div>

          {/* Exact Document Paragraph 2 & 3 in two balanced panels in max-w-7xl */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
            <div className="bg-white p-7 sm:p-8 rounded-2xl border border-gray-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold mb-4">
                <Globe className="w-5 h-5" />
              </div>
              {/* Exact Document Paragraph 2 */}
              <p className="text-gray-700 text-base leading-relaxed">
                Audiences differ across the Kingdom. A business serving customers in Riyadh, Jeddah, Dammam or Khobar may face different competitors, languages and buying habits from one selling nationwide, so the message and channels should be chosen with the specific audience in mind.
              </p>
            </div>

            <div className="bg-white p-7 sm:p-8 rounded-2xl border border-gray-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold mb-4">
                <TrendingUp className="w-5 h-5" />
              </div>
              {/* Exact Document Paragraph 3 */}
              <p className="text-gray-700 text-base leading-relaxed">
                Performance depends on how relevant the message is, the quality of the creative, how well the audience is targeted, how the video is distributed and how closely the campaign supports the business objective. No format delivers results on its own.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* =========================================================================
          SECTION 4: OUR VIDEO MARKETING SERVICES IN SAUDI ARABIA
          ========================================================================= */}
      <div className="bg-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 w-full">
        <div className="max-w-7xl mx-auto">
          
          <div className="max-w-3xl mx-auto text-center mb-12">
            <FloatingElement>
              {/* Exact H2 */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Video Marketing{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  Services in Saudi Arabia
                </span>
              </h2>
            </FloatingElement>
            {/* Exact Document Lead Paragraph */}
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              The services below describe what a video marketing programme can include. Which parts apply depends on your goals, budget and the assets you already have, and the scope is agreed before work begins.
            </p>
          </div>

          {/* Section 9 Image 2: Content Creation in Card3D */}
          <div className="max-w-5xl mx-auto mb-16">
            <Card3D>
              <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-white">
                <img
                  src="/images/product-video-shoot-preparation.webp"
                  alt="A content creator setting up a camera and lighting to film a product video."
                  width="1200"
                  height="675"
                  loading="lazy"
                  className="w-full h-auto object-cover bg-gray-100"
                />
              </div>
            </Card3D>
          </div>

          {/* 9 Services Grid (Matching DubaiLocalSEO service card layout) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto text-left">
            {servicesList.map((service, index) => {
              const ServiceIcon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  className="bg-gray-50 rounded-2xl shadow-md p-6 sm:p-7 hover:shadow-xl transition-all cursor-pointer border border-gray-100 flex flex-col justify-between"
                  whileHover={{ scale: 1.02 }}
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-4 text-teal-700">
                      <ServiceIcon className="w-6 h-6" />
                    </div>

                    {/* Exact H3 */}
                    <h3 className="font-bold text-gray-900 text-lg mb-2">
                      {service.title}
                    </h3>

                    {/* Exact Document Paragraph with Internal Link */}
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.title === "Video Advertising Campaigns" ? (
                        <>
                          When it fits the objective and budget, video can be used in{" "}
                          <Link
                            to="/saudi-arabia/ppc-services/"
                            className="text-teal-700 font-semibold underline hover:text-teal-900"
                          >
                            paid advertising
                          </Link>
                          . This involves audience targeting, creative variations, clear campaign objectives, landing pages that match the ad message, budget monitoring and conversion measurement. The right advertising platform depends on where your audience spends time.
                        </>
                      ) : (
                        service.desc
                      )}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>

      {/* =========================================================================
          SECTION 5: VIDEO MARKETING SOLUTIONS FOR DIFFERENT INDUSTRIES
          ========================================================================= */}
      <div className="bg-gray-50 py-14 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 w-full border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          
          <div className="max-w-3xl mx-auto text-center mb-12">
            <FloatingElement>
              {/* Exact H2 */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Video Marketing Solutions for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  Different Industries
                </span>
              </h2>
            </FloatingElement>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {industriesList.map((item) => {
              const IndIcon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white p-7 rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mb-4">
                      <IndIcon className="w-6 h-6" />
                    </div>

                    {/* Exact H3 */}
                    <h3 className="font-bold text-gray-900 text-lg mb-2">
                      {item.title}
                    </h3>

                    {/* Exact Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* =========================================================================
          SECTION 6: OUR VIDEO MARKETING PROCESS (Matching SocialMedia.jsx UI)
          ========================================================================= */}
      <div className="bg-white py-16 px-6 md:px-12 lg:px-8 text-center border-t border-gray-100">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <FloatingElement>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Video Marketing{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                Process
              </span>
            </h2>
          </FloatingElement>
          <p className="text-gray-600 mt-3 text-base sm:text-lg">
            Every project is different, so steps and timelines vary.
          </p>
        </div>

        {/* Steps Section */}
        <div className="relative max-w-7xl mx-auto">
          {/* Blue Line (Desktop only) */}
          <div className="hidden lg:block absolute top-8 left-0 w-full border-t-4 border-blue-100 z-0"></div>

          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 relative z-10">
            {processSteps.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
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

                  {/* Title */}
                  <h3 className="font-semibold text-gray-900 text-base">{step.step}</h3>
                  {/* Description */}
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
          SECTION 7: VIDEO MARKETING FOR BUSINESSES ACROSS SAUDI ARABIA
          ========================================================================= */}
      <div className="bg-gray-50 py-14 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 w-full border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: Heading & Paragraphs */}
              <div className="lg:col-span-6 space-y-4">
                <FloatingElement>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Video Marketing for Businesses{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                      Across Saudi Arabia
                    </span>
                  </h2>
                </FloatingElement>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  Campaign needs depend on where your customers are and how they prefer to engage. Riyadh, Jeddah, Dammam and Khobar are examples of markets a business might target, and DigLip7 is not claiming a physical office in any of them.
                </p>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed pt-2">
                  Language and creative choices should reflect the people you are trying to reach. Not every customer has the same preferences. Explore integrated{" "}
                  <Link
                    to="/saudi-arabia/social-media-marketing/"
                    className="text-teal-700 font-semibold underline hover:text-teal-900"
                  >
                    social media marketing
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="/saudi-arabia/content-marketing-services/"
                    className="text-teal-700 font-semibold underline hover:text-teal-900"
                  >
                    content marketing
                  </Link>{" "}
                  to align video across all touchpoints.
                </p>
              </div>

              {/* Right Column: Points that usually need attention (6 points) */}
              <div className="lg:col-span-6 bg-gradient-to-br from-teal-50/50 to-white p-6 sm:p-8 rounded-2xl border border-teal-100">
                <p className="text-gray-900 font-bold text-lg mb-4 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-600"></span>
                  Points that usually need attention:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {saudiAttentionPoints.map((pt) => (
                    <div key={pt} className="flex items-start gap-2.5 bg-white p-3.5 rounded-xl border border-gray-100 shadow-2xs">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-800 font-medium">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          SECTION 8: COMMON VIDEO MARKETING CHALLENGES AND HOW TO ADDRESS THEM
          ========================================================================= */}
      <div className="bg-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 w-full border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          
          <div className="max-w-3xl mx-auto text-center mb-12">
            <FloatingElement>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Common Video Marketing Challenges and{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  How to Address Them
                </span>
              </h2>
            </FloatingElement>
          </div>

          {/* Grid of All 10 Challenges & Solutions in full max-w-7xl */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-7xl mx-auto mb-8">
            {challengesList.map((item) => (
              <div
                key={item.problem}
                className="bg-gray-50 p-5 rounded-xl border border-gray-100 shadow-xs flex items-start gap-3 hover:shadow-md transition-shadow"
              >
                <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <div className="text-sm">
                  <span className="font-bold text-gray-900 block mb-0.5">{item.problem}</span>
                  <span className="text-gray-600 leading-relaxed">{item.solution}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-7xl mx-auto p-5 rounded-xl bg-teal-50/40 border border-teal-100 text-center text-teal-950 text-sm sm:text-base font-semibold">
            A strong approach combines useful content, appropriate distribution and meaningful measurement.
          </div>

        </div>
      </div>

      {/* =========================================================================
          SECTION 9: HOW WE MEASURE VIDEO MARKETING PERFORMANCE
          ========================================================================= */}
      <div className="bg-gray-50 py-14 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 w-full border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 lg:gap-14">
          
          {/* Image 3 from Section 9 (Measurement / Analytics) */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card3D className="w-full max-w-lg">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-white bg-white">
                <img
                  src="/images/video-campaign-performance-review.webp"
                  alt="A marketing professional reviewing video campaign results on a computer screen."
                  width="1200"
                  height="675"
                  loading="lazy"
                  className="w-full h-auto object-cover bg-gray-100"
                />
              </div>
            </Card3D>
          </motion.div>

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <FloatingElement>
              {/* Exact H2 */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How We Measure{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  Video Marketing Performance
                </span>
              </h2>
            </FloatingElement>

            {/* Exact Document Paragraph */}
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              The relevant indicators include video views, reach and impressions, watch time, audience retention, engagement, click-through rate, website visits, qualified enquiries and conversions where tracking is available. Views alone do not prove business success. A video with modest views that brings in good enquiries can be worth more than one with high views and no follow-up. We do not use invented benchmarks, and which metrics matter depends on what the campaign is for.
            </p>
          </div>

        </div>
      </div>

      {/* =========================================================================
          SECTION 10: WHY CHOOSE DIGLIP7 FOR VIDEO MARKETING IN SAUDI ARABIA?
          ========================================================================= */}
      <div className="bg-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 w-full border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          
          <div className="max-w-3xl mx-auto text-center mb-12">
            <FloatingElement>
              {/* Exact H2 */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Why Choose DigLip7 for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  Video Marketing in Saudi Arabia?
                </span>
              </h2>
            </FloatingElement>
            {/* Exact Document Lead Paragraph */}
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              We focus on business-first planning:
            </p>
          </div>

          {/* 7 Points Grid in full max-w-7xl */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-10">
            {whyChoosePoints.map((pt, idx) => (
              <div
                key={pt}
                className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-xs flex items-start gap-3.5 hover:shadow-md transition-shadow"
              >
                <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-800 font-bold flex items-center justify-center shrink-0 text-sm">
                  {idx + 1}
                </div>
                <p className="text-gray-800 text-sm sm:text-base font-medium leading-relaxed">
                  {pt}
                </p>
              </div>
            ))}
          </div>

          {/* Exact Document Trailing Paragraph in full max-w-7xl */}
          <div className="max-w-7xl mx-auto bg-gradient-to-br from-gray-50 to-teal-50/20 p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-xs text-center text-gray-700 text-sm sm:text-base leading-relaxed">
            We would rather set realistic expectations than overpromise. Ask any provider you consider what they handle directly, what they outsource and what results they can actually evidence.
          </div>

        </div>
      </div>

      {/* =========================================================================
          SECTION 11: FREQUENTLY ASKED QUESTIONS ABOUT VIDEO MARKETING AGENCY SAUDI ARABIA
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
                  Video Marketing Agency Saudi Arabia
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
          SECTION 12: PLAN YOUR VIDEO MARKETING STRATEGY WITH DIGLIP7 (FINAL CTA)
          ========================================================================= */}
      <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 xl:px-12 w-full text-center relative overflow-hidden border-t border-gray-100">
        <div className="max-w-5xl mx-auto relative z-10">
          <FloatingElement>
            {/* Exact H2 */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight leading-tight">
              Plan Your Video Marketing Strategy{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                with DigLip7
              </span>
            </h2>
          </FloatingElement>

          {/* Exact Document Paragraph */}
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
            Good video marketing comes from a clear strategy, relevant creative content, appropriate distribution and performance tracking that tells you what is working. If you are looking for a video marketing agency in Saudi Arabia, tell us about your goals, your audience and the content you already have, and we can talk through the options.
          </p>

          {/* Exact CTA Button 2 */}
          <div className="flex justify-center mb-10">
            <Link to="/contact">
              <motion.button
                className="group px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-teal-700 to-teal-900 text-white text-base sm:text-lg font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Discuss Your Video Marketing Goals
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
          </div>
        </div>
      </div>

    </div>
  );
}
