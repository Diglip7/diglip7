import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "../../../components/SEO";
import {
  TrendingUp,
  BarChart3,
  Search,
  Handshake,
  DollarSign,
  ShoppingCart,
  Building2,
  MapPin,
  Link2,
  HelpCircle,
  Mic,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Target,
  Zap,
  Globe,
  Users,
  Award,
  ChevronDown,
  FileText,
  Bot,
  Cpu,
  ShieldCheck,
  Clock,
  Check,
  AlertCircle,
  PhoneCall,
  Share2,
  Mail,
  MessageSquare
} from "lucide-react";
import seo2 from "../../../images/seo01.png";
import seoImage from "../../../images/seo12.png";
import seo4 from "../../../images/seo11.png";
import aboutImg from "../../../images/seo13.png";

const coreChannels = [
  {
    title: "Search engine optimization (SEO)",
    description: "earning visibility in Google and other search engines without paying for every click.",
    icon: Search,
  },
  {
    title: "Pay-per-click advertising (PPC)",
    description: "paid placements on Google, Bing, and social platforms that bring immediate traffic.",
    icon: DollarSign,
  },
  {
    title: "Social media marketing",
    description: "building an audience and driving action on platforms like Instagram, Facebook, LinkedIn, and YouTube.",
    icon: Share2,
  },
  {
    title: "Content marketing",
    description: "blogs, guides, videos, and landing pages that answer real questions.",
    icon: FileText,
  },
  {
    title: "Local SEO",
    description: "helping nearby customers find you on Google Maps and in local results.",
    icon: MapPin,
  },
  {
    title: "Email and lead nurturing",
    description: "staying in touch with people who showed interest but were not ready to buy.",
    icon: Mail,
  },
  {
    title: "Analytics and reporting",
    description: "measuring what works so budget goes where it earns a return.",
    icon: BarChart3,
  },
];

const whyItMattersPoints = [
  {
    title: "Fewer clicks go to generic content.",
    description:
      "When a search page answers a simple question directly, only pages that offer real depth, original insight, or a clear next step earn the visit.",
    icon: Search,
  },
  {
    title: "Trust is built before the first click.",
    description:
      "Reviews, brand mentions, social presence, and consistent business details all shape whether someone chooses you over a competitor.",
    icon: ShieldCheck,
  },
  {
    title: "Speed and experience are part of ranking.",
    description:
      "A page that loads slowly on a phone loses visitors and, over time, visibility.",
    icon: Zap,
  },
  {
    title: "Google rewards helpful, people-first content.",
    description:
      "Google's guidance on quality, reinforced through its recent core and spam updates, is consistent: content written to genuinely help people does better than content written only to catch search engines. Thin, repetitive, or mass-produced pages carry growing risk.",
    icon: Award,
  },
];

const solutions = [
  {
    title: "SEO Services That Build Lasting Visibility",
    description:
      "SEO is the backbone of most digital marketing strategies because its results compound. A well-optimized page keeps working long after the work is done.",
    sectionHeading: "Our SEO services include:",
    points: [
      "Technical SEO: crawlability, site speed, mobile usability, Core Web Vitals, structured data, and clean site architecture.",
      "Keyword and intent research: finding the phrases your buyers really use, and understanding whether they want to learn, compare, or buy.",
      "On-page optimization: titles, headings, internal links, images, and content structure that help both readers and search engines.",
      "Content optimization: improving existing pages so they answer questions more completely and clearly.",
      "Authority building: earning quality mentions and backlinks through useful content and outreach, never through shortcuts.",
    ],
    closing: "We focus on rankings that bring the right visitors, not just more visitors.",
    linkText: "Explore our SEO services.",
    linkUrl: "/digital-market/seoservices",
    icon: Search,
  },
  {
    title: "Local SEO for Neighborhood Visibility",
    description:
      "If your customers search \"near me,\" local SEO decides whether you appear. We optimize your Google Business Profile, clean up citations so your name, address, and phone number match everywhere, and create location-relevant content that reflects how people in your area actually search.",
    closing:
      "Local visibility is especially powerful for clinics, restaurants, service providers, retailers, and any business with a physical location or service area.",
    linkText: "Learn more about local SEO.",
    linkUrl: "/digital-market/local-SEO-services",
    icon: MapPin,
  },
  {
    title: "Social Media Marketing That Builds Community",
    description:
      "Social media works best when it feels human. We plan content calendars, design creative, manage communities, and run paid social campaigns that match your brand voice.",
    closing:
      "The goal is not vanity metrics. We track saves, shares, inquiries, and conversions, because a large audience that never buys is not a business result.",
    linkText: "See our social media marketing services.",
    linkUrl: "/digital-market/social-media-marketing",
    icon: Share2,
  },
  {
    title: "PPC and Paid Advertising for Faster Traffic",
    description:
      "SEO takes time. Paid advertising does not. Search ads, display, remarketing, and social ads can put your offer in front of ready-to-buy people quickly.",
    closing:
      "We set up tracking before spending a rupee, test multiple ad variations, and adjust bids and audiences weekly. Reports show cost per lead and return on ad spend, not just clicks.",
    linkText: "Discover our PPC services.",
    linkUrl: "/digital-market/PPC-Advertising",
    icon: DollarSign,
  },
  {
    title: "Content Marketing That Earns Trust",
    description:
      "Content is where expertise becomes visible. We create articles, guides, case studies, landing pages, and videos that answer questions your customers already have.",
    closing:
      "Every piece is planned around search intent, written for real people, and reviewed for accuracy. We also refresh older content, because updating a strong page often beats publishing a new one.",
    linkText: "Read about content marketing.",
    linkUrl: "/digital-market/content-marketing",
    icon: FileText,
  },
  {
    title: "Answer Engine Optimization and Voice Search",
    description:
      "More people now get answers directly from AI-powered search features and voice assistants. Answer engine optimization (AEO) prepares your content to be understood and cited in those places.",
    extraText:
      "That means clear definitions near the top of a page, question-based headings, concise and accurate answers, well-implemented structured data, and strong signals of who wrote the content and why they can be trusted. It also means conversational, long-tail phrasing that matches how people speak.",
    closing:
      "No one can guarantee inclusion in an AI-generated answer. What we can do is make your content the kind that these systems are most likely to trust and reference.",
    linkText: "Learn about AEO & Voice Search.",
    linkUrl: "/digital-market/voice-search-optimization",
    icon: HelpCircle,
  },
  {
    title: "E-Commerce Digital Marketing",
    description:
      "Online stores face a specific challenge: hundreds or thousands of pages competing for attention. We optimize product pages with unique descriptions and clear calls to action, improve category structure so search engines understand your catalog, and speed up the shopping experience on mobile. Paid shopping ads and remarketing then help recover visitors who left without buying.",
    linkText: "Explore E-commerce marketing.",
    linkUrl: "/digital-market/e-commerce-marketing",
    icon: ShoppingCart,
  },
  {
    title: "Link Building and Digital PR",
    description:
      "Backlinks remain a trust signal, but only when they are earned naturally. We focus on relevant, high-quality placements through helpful resources, partnerships, and outreach. We do not buy links or use private blog networks, because the risk is never worth the reward.",
    linkText: "Contact our link building team.",
    linkUrl: "/contact",
    icon: Link2,
  },
];

const steps = [
  {
    number: "1",
    title: "Understand your business.",
    description:
      "We start with a conversation about your goals, customers, competitors, and what has or has not worked before.",
    icon: Target,
  },
  {
    number: "2",
    title: "Audit your current presence.",
    description:
      "We review your website, search visibility, content, tracking, and competitors to find quick wins and long-term opportunities.",
    icon: Search,
  },
  {
    number: "3",
    title: "Build a strategy.",
    description:
      "You receive a step-by-step plan tied to your goals, with priorities, timelines, and clear success measures.",
    icon: Zap,
  },
  {
    number: "4",
    title: "Implement.",
    description:
      "We optimize pages, publish content, launch campaigns, and fix technical issues, keeping you informed as work goes live.",
    icon: Globe,
  },
  {
    number: "5",
    title: "Monitor and refine.",
    description:
      "We track performance in analytics and Search Console, then adjust based on data rather than opinion.",
    icon: BarChart3,
  },
  {
    number: "6",
    title: "Report in plain language.",
    description:
      "You get simple reports that show what we did, what changed, and what we recommend next.",
    icon: Award,
  },
];

const serviceMatrix = [
  {
    goal: "Get leads quickly",
    services: "PPC, landing page optimization",
    timeline: "Days to weeks",
  },
  {
    goal: "Build long-term organic traffic",
    services: "SEO services, content marketing",
    timeline: "Several months",
  },
  {
    goal: "Attract nearby customers",
    services: "Local SEO, Google Business Profile",
    timeline: "Weeks to a few months",
  },
  {
    goal: "Grow brand awareness",
    services: "Social media marketing, content",
    timeline: "Ongoing, builds over time",
  },
  {
    goal: "Increase online store sales",
    services: "E-commerce SEO, shopping ads, remarketing",
    timeline: "Weeks to months",
  },
  {
    goal: "Improve conversion of existing traffic",
    services: "Website and landing page optimization, analytics",
    timeline: "Weeks",
  },
];

const whyChooseDiglip7 = [
  {
    title: "Experience across industries.",
    description:
      "With more than 1,000 projects delivered and a team of over 50 specialists, we have worked with online stores, service businesses, healthcare providers, and larger enterprises.",
    icon: Users,
  },
  {
    title: "Strategy built on data.",
    description:
      "We make decisions using analytics, search data, and testing rather than guesswork.",
    icon: BarChart3,
  },
  {
    title: "Clear communication.",
    description:
      "We explain technical topics in simple language and keep you updated without burying you in jargon.",
    icon: MessageSquare,
  },
  {
    title: "Flexible engagement.",
    description:
      "You are not locked into long contracts. We earn your continued business through results and service.",
    icon: Handshake,
  },
  {
    title: "Ongoing support.",
    description:
      "Questions do not wait for office hours, and our team is there when you need help.",
    icon: PhoneCall,
  },
];

const agencyChecks = [
  {
    title: "Ask how they measure success.",
    description: "Good agencies tie work to leads, sales, and revenue, not only rankings.",
    icon: Target,
  },
  {
    title: "Request examples and references.",
    description: "Look for real case studies with context, not just impressive percentages.",
    icon: FileText,
  },
  {
    title: "Watch for guarantees.",
    description: "Promises of \"#1 on Google\" or instant results are a warning sign.",
    icon: AlertCircle,
  },
  {
    title: "Check their content standards.",
    description: "Ask how they ensure originality, accuracy, and compliance with Google's guidelines.",
    icon: ShieldCheck,
  },
  {
    title: "Understand reporting.",
    description: "You should receive regular, readable updates and full access to your own data.",
    icon: BarChart3,
  },
  {
    title: "Confirm ownership.",
    description: "Your accounts, ad data, and content should belong to you.",
    icon: CheckCircle,
  },
  {
    title: "Look for a fit.",
    description: "The best partnership feels collaborative, not transactional.",
    icon: Handshake,
  },
];

const faqs = [
  {
    question: "What are digital marketing services?",
    answer:
      "Digital marketing services are online activities that promote a business and attract customers. They include SEO, pay-per-click advertising, social media marketing, content marketing, email marketing, and local SEO, along with the analytics needed to measure results."
  },
  {
    question: "How much do digital marketing services cost?",
    answer:
      "Cost depends on your goals, competition, and the channels involved. Small local campaigns cost far less than large e-commerce or national programs. We provide a clear proposal after understanding your needs, so you can see exactly what is included before committing."
  },
  {
    question: "How long does it take to see results from digital marketing?",
    answer:
      "Paid advertising can bring traffic within days. Local SEO often improves within a few months. Organic SEO usually takes three to six months to show meaningful growth, and competitive industries can take longer. Results build over time, so consistency matters."
  },
  {
    question: "Is SEO or PPC better for my business?",
    answer:
      "Neither is universally better. PPC gives fast, controllable traffic, while SEO builds lasting visibility at a lower cost per visit over time. Many businesses use both, with PPC for immediate leads and SEO for long-term growth."
  },
  {
    question: "Which industries do you work with?",
    answer:
      "We work with e-commerce brands, local and service businesses, healthcare and wellness providers, education, real estate, professional services, and enterprise organizations. Our strategy is always customized to the industry and audience."
  },
  {
    question: "Do I need a digital marketing agency, or can I do it myself?",
    answer:
      "You can handle the basics yourself, and many owners do at the start. An agency becomes valuable when you need specialist skills, more time, faster progress, or a consistent, measurable strategy across several channels."
  },
  {
    question: "Can digital marketing help my website appear in AI Overviews?",
    answer:
      "No one can guarantee placement in AI-generated results. However, content that is clear, accurate, well-structured, and backed by real expertise is more likely to be understood and referenced. We optimize for that through strong page structure, structured data, and helpful answers."
  },
  {
    question: "Do you require long-term contracts?",
    answer:
      "No. We prefer to earn your trust through results, and we keep our terms flexible."
  }
];

const digitalMarketingSchemas = [
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://diglip7.com/#organization",
        "name": "DigLip7",
        "legalName": "DigLip7 Tech Private Limited",
        "url": "https://diglip7.com/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://diglip7.com/favicon-32x32.png",
          "width": 512,
          "height": 512
        },
        "description": "DigLip7 is a digital marketing agency offering SEO, PPC, social media marketing, content marketing, and local SEO services.",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "telephone": "+91-9650608788",
          "email": "Admin@diglip7.com",
          "availableLanguage": ["English"]
        },
        "sameAs": [
          "https://www.facebook.com/DigLip7/",
          "https://www.instagram.com/diglip7",
          "https://www.linkedin.com/company/diglip7",
          "https://twitter.com/diglip7",
          "https://www.youtube.com/@diglip7"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://diglip7.com/#website",
        "url": "https://diglip7.com/",
        "name": "DigLip7",
        "publisher": { "@id": "https://diglip7.com/#organization" },
        "inLanguage": "en"
      },
      {
        "@type": "WebPage",
        "@id": "https://diglip7.com/digital-market#webpage",
        "url": "https://diglip7.com/digital-market",
        "name": "Digital Marketing Services | SEO, PPC & Social | DigLip7",
        "description": "Grow with DigLip7's digital marketing services: SEO, PPC, social media, content and local SEO. Clear reports, no long contracts. Get a free audit.",
        "isPartOf": { "@id": "https://diglip7.com/#website" },
        "about": { "@id": "https://diglip7.com/digital-market#service" },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://diglip7.com/images/digital-marketing-services-og.jpg"
        },
        "breadcrumb": { "@id": "https://diglip7.com/digital-market#breadcrumb" },
        "inLanguage": "en",
        "datePublished": "2026-09-24",
        "dateModified": "2026-09-24"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://diglip7.com/digital-market#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://diglip7.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Digital Marketing Services",
            "item": "https://diglip7.com/digital-market"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://diglip7.com/digital-market#service",
        "name": "Digital Marketing Services",
        "serviceType": "Digital Marketing",
        "description": "End-to-end digital marketing services including SEO, PPC advertising, social media marketing, content marketing, local SEO, answer engine optimization, and e-commerce marketing.",
        "provider": { "@id": "https://diglip7.com/#organization" },
        "areaServed": ["Worldwide", "India", "United States", "United Kingdom", "Canada", "Australia"],
        "url": "https://diglip7.com/digital-market",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Digital Marketing Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "SEO Services",
                "description": "Technical SEO, keyword research, on-page optimization, content optimization, and authority building."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Local SEO",
                "description": "Google Business Profile optimization, citation cleanup, and location-focused content."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Social Media Marketing",
                "description": "Content planning, community management, and paid social campaigns."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "PPC and Paid Advertising",
                "description": "Search, display, remarketing, and social ad campaigns with conversion tracking."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Content Marketing",
                "description": "Articles, guides, case studies, and landing pages built around search intent."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Answer Engine Optimization and Voice Search",
                "description": "Content structure and structured data that help answers appear in AI-powered and voice search."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "E-Commerce Digital Marketing",
                "description": "Product page optimization, category structure, shopping ads, and remarketing."
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://diglip7.com/digital-market#faq",
        "mainEntity": faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  }
];

// 3D Card Component
const Card3D = ({ children, className }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateXValue = (y - centerY) / 10;
    const rotateYValue = (centerX - x) / 10;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: rotateX,
        rotateY: rotateY,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ perspective: 1000 }}
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
      duration: 3,
      repeat: Infinity,
      delay: delay,
    }}
  >
    {children}
  </motion.div>
);

// Parallax Background Component
const ParallaxBg = ({ children }) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ transform: `translateY(${offsetY * 0.5}px)` }}>
      {children}
    </div>
  );
};

function DigitalMarkit() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      <SEO
        title="Digital Marketing Services | SEO, PPC & Social | DigLip7"
        description="Grow with DigLip7's digital marketing services: SEO, PPC, social media, content and local SEO. Clear reports, no long contracts. Get a free audit."
        canonical="https://diglip7.com/digital-market"
        ogImage="https://diglip7.com/images/digital-marketing-services-og.jpg"
        ogImageAlt="DigLip7 digital marketing services: SEO, PPC, social media and content"
        ogType="website"
        keywords="Digital Marketing Services, digital marketing agency, SEO services, PPC advertising, social media marketing, content marketing, local SEO, answer engine optimization (AEO), voice search optimization, e-commerce digital marketing, AI-powered digital marketing, DigLip7"
        schema={digitalMarketingSchemas}
      />

      {/* Hero Section with Parallax */}
      <section className="relative w-full min-h-screen py-16 sm:py-20 flex flex-col lg:flex-row items-center justify-center overflow-hidden bg-gradient-to-br from-teal-50 via-white to-[#c89d5a]/10">
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 md:px-12 max-w-5xl mx-auto">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-teal-700 mb-4 sm:mb-6 leading-tight"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Digital Marketing Services That Help Your Business Get{" "}
            <span className="text-transparent bg-clip-text bg-[#c89d5a] to-teal-300">
              Found, Trusted, and Chosen
            </span>
          </motion.h1>

          <motion.div
            className="text-left space-y-4 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            <p className="text-teal-800">
              Most business owners do not lose customers because their product is weak. They lose them because the right people never find them, or find them and never feel sure enough to act. <span className="font-semibold text-teal-900">That gap is exactly what our digital marketing services are built to close.</span>
            </p>
            <p className="text-teal-700">
              At <span className="font-bold text-teal-900">DigLip7</span>, we help businesses of every size turn their online presence into a steady source of qualified leads and sales. We combine search engine optimization, paid advertising, social media, content, and smart use of AI tools with plain-spoken human strategy. You get a team that explains what it is doing, why it is doing it, and what the numbers say.
            </p>
            <p className="text-teal-800">
              <span className="font-semibold text-teal-900">If you want a quick answer first, here it is.</span> Digital marketing services are the set of online activities that help a business attract, engage, and convert customers through search engines, social platforms, websites, email, and paid ads. The rest of this page shows what that looks like in practice and how to pick the right mix for your goals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a href="/contact">
              <motion.button
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white text-base sm:text-lg font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get a Free Website Audit
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </a>
            <a href="/portfolio">
              <motion.button
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-teal-800 border-2 border-teal-700 text-base sm:text-lg font-semibold rounded-full shadow-md hover:bg-teal-50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See Our Portfolio
              </motion.button>
            </a>
          </motion.div>
        </div>

        <ParallaxBg>
          <div className="p-6 inset-0 w-full h-full">
            <img
              src={seo2}
              alt="Digital marketing services team reviewing campaign results"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0"></div>
          </div>
        </ParallaxBg>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${(i * 5.2) % 100}%`,
                top: `${(i * 7.1) % 100}%`,
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

      {/* About Section with 3D Cards & Image (seoImage) */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12 px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Left Image with 3D effect */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <Card3D className="w-full">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={seoImage}
                  alt="SEO services dashboard showing organic traffic growth"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover transform transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-teal-700/20 to-[#c89d5a]/20"></div>
              </div>
            </Card3D>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-700 mb-4 sm:mb-6">
                What Are Digital Marketing{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  Services?
                </span>
              </h2>
            </FloatingElement>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-teal-800 leading-relaxed text-sm sm:text-base lg:text-lg">
                Digital marketing services cover every channel where your customers spend time online. A good digital marketing agency does not simply &ldquo;run ads&rdquo; or &ldquo;do SEO.&rdquo; It looks at how people discover, compare, and buy in your industry, then builds a plan that meets them at each step.
              </p>
              <p className="text-teal-800 leading-relaxed text-sm sm:text-base lg:text-lg">
                <span className="font-semibold text-teal-900">No single channel does everything.</span> The value comes from using them together, in the right order, for your specific business.
              </p>
            </div>

            <motion.div
              className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {[
                { icon: Users, text: "1000+ Projects Delivered" },
                { icon: Award, text: "50+ Specialists" },
                { icon: Target, text: "Data-Driven Strategy" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-2 bg-gradient-to-r from-teal-50 to-[#c89d5a]/10 px-3 sm:px-4 py-2 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-teal-700" />
                  <span className="text-sm sm:text-base font-medium text-gray-700">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Channels Grid */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-teal-50 to-[#c89d5a]/10 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-teal-900">
              The core services usually include:
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {coreChannels.map((channel, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                viewport={{ once: true }}
              >
                <Card3D className="h-full">
                  <div className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/40 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-teal-700 text-white flex items-center justify-center mb-4 shadow-md">
                        <channel.icon className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg font-bold text-teal-900 mb-2">{channel.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{channel.description}</p>
                    </div>
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Difference Section with 3D Image (seo4) & Stats */}
      <section className="bg-gradient-to-br from-teal-50 to-[#c89d5a]/10 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-7xl">
          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <FloatingElement delay={0.2}>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-teal-700 leading-tight mb-4 sm:mb-6">
                Why Digital Marketing Services{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  Matter More Than Ever
                </span>
              </h2>
            </FloatingElement>

            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
              Search has changed more in the last two years than in the ten before. People still type queries into Google, but they also ask voice assistants, scroll AI-generated answers at the top of the results page, and check reviews and social proof before they ever visit a website.
            </p>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {[
                { number: "500%", label: "Organic Traffic Growth" },
                { number: "95%", label: "Client Retention Rate" },
                { number: "24/7", label: "Analytics & Monitoring" },
                { number: "50+", label: "Marketing Specialists" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="text-center p-3 sm:p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-teal-700">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="flex-1 flex justify-center w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card3D className="w-full max-w-md lg:max-w-none">
              <div className="relative">
                <img
                  src={seo4}
                  alt="PPC campaign performance report"
                  className="rounded-2xl shadow-2xl w-full h-64 sm:h-80 lg:h-96 object-cover transform transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-[#c89d5a]/20 rounded-2xl"></div>
              </div>
            </Card3D>
          </motion.div>
        </div>
      </section>

      {/* Results Section with Custom Shape Image (aboutImg) */}
      <section className="w-full bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <FloatingElement delay={0.3}>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-teal-700 leading-tight mb-6">
                Here Is What That{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-teal-600 to-[#c89d5a]">
                  Means for You
                </span>
              </h2>
            </FloatingElement>

            <div className="space-y-4 sm:space-y-6">
              {whyItMattersPoints.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start gap-3 sm:gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
                    <strong className="text-teal-800 font-semibold">{item.title}</strong>{" "}
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-teal-50 rounded-xl border border-teal-100">
              <p className="text-sm sm:text-base text-teal-900 font-medium leading-relaxed">
                <strong>The takeaway is simple.</strong> Digital marketing services are no longer about tricks. They are about being the most useful, credible answer wherever your customer is looking.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-[420px] lg:h-[500px]">
              <Card3D className="w-full h-full">
                <img
                  src={aboutImg}
                  alt="Six-step digital marketing process infographic"
                  className="w-full h-full object-cover shadow-2xl transition-transform duration-700 hover:scale-105"
                  style={{
                    clipPath: "path('M 0 80 Q 200 -50 400 80 L 400 500 Q 200 600 0 500 Z')",
                    borderRadius: "20px",
                  }}
                />
              </Card3D>

              {/* Floating elements around the image */}
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-teal-600 to-[#c89d5a] rounded-full flex items-center justify-center shadow-lg"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Digital Marketing Services */}
      <section className="bg-gradient-to-br from-teal-50 to-[#c89d5a]/10 py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-teal-900 mb-4">
                Our Digital Marketing Services
              </h2>
            </FloatingElement>
            <p className="text-gray-700 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
              Every business is different, so we build packages around your goals rather than forcing you into a fixed bundle. Here is what we offer.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
                viewport={{ once: true }}
              >
                <Card3D className="h-full">
                  <div className="bg-white p-6 sm:p-7 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 h-full flex flex-col justify-between">
                    <div>
                      <FloatingElement delay={(index % 3) * 0.1}>
                        <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-teal-700 to-[#c89d5a] text-white rounded-2xl mb-5 shadow-md">
                          <solution.icon className="w-7 h-7" />
                        </div>
                      </FloatingElement>

                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                        {solution.title}
                      </h3>
                      <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                        {solution.description}
                      </p>

                      {solution.sectionHeading && (
                        <p className="text-xs font-semibold text-teal-800 uppercase tracking-wider mb-2">
                          {solution.sectionHeading}
                        </p>
                      )}

                      {solution.points && (
                        <ul className="space-y-2.5 mb-4">
                          {solution.points.map((point, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 leading-relaxed">
                              <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {solution.extraText && (
                        <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                          {solution.extraText}
                        </p>
                      )}

                      {solution.closing && (
                        <p className="text-gray-700 text-sm leading-relaxed mb-3">
                          {solution.closing}
                        </p>
                      )}
                    </div>

                    {solution.linkText && (
                      <div className="pt-4 border-t border-gray-100 mt-auto">
                        <a
                          href={solution.linkUrl || "/contact"}
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-900 transition-colors"
                        >
                          {solution.linkText}
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    )}
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How AI Supports Our Work (and Where Humans Lead) */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="bg-gradient-to-br from-teal-50 via-white to-amber-50/50 p-8 sm:p-12 rounded-3xl border border-teal-100 shadow-xl">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 bg-teal-100/70 border border-teal-200 px-4 py-1.5 rounded-full text-teal-800 text-xs sm:text-sm font-semibold mb-4">
                <Bot className="w-4 h-4 text-teal-700" />
                <span>AI + Human Intelligence</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-teal-900 mb-4">
                How AI Supports Our Work (and Where Humans Lead)
              </h2>
            </div>

            <div className="space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed mb-8">
              <p>
                We use AI tools to speed up the parts of digital marketing that benefit from scale: analyzing large keyword sets, spotting technical issues, clustering topics, and identifying content gaps.
              </p>
              <p>
                Strategy, creative judgment, brand voice, and final quality checks stay with experienced people. AI is a fast assistant, not a replacement for expertise. Every piece of content we publish is edited, fact-checked, and shaped by someone who understands your business.
              </p>
              <p>
                This matters because search engines are increasingly good at spotting content that exists only to fill space. Our approach keeps the efficiency of AI while protecting the originality and care that readers and Google both reward.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-teal-100">
              <div className="p-5 bg-white rounded-2xl border border-teal-100 shadow-sm flex items-start gap-4">
                <Cpu className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Scale & Diagnostics (AI)</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Keyword clustering, topic gaps, technical issue detection, and trend analysis.</p>
                </div>
              </div>
              <div className="p-5 bg-white rounded-2xl border border-amber-200 shadow-sm flex items-start gap-4">
                <Users className="w-6 h-6 text-[#c89d5a] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Human Strategy & Editing</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Strategy, creative judgment, brand voice, and meticulous final quality checks.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Six-Step Process */}
      <section className="px-4 sm:px-6 lg:px-8 py-14 sm:py-20 bg-gradient-to-br from-teal-50 to-[#c89d5a]/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-teal-900 mb-4">
                Our Six-Step Process
              </h2>
            </FloatingElement>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              A clear process removes guesswork. This is how we work with every client.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card3D className="h-full">
                  <div className="bg-white shadow-md hover:shadow-2xl rounded-2xl p-6 border border-gray-100 transition-all duration-500 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-r from-teal-700 to-[#c89d5a] text-white font-bold text-lg shadow-md">
                          {step.number}
                        </div>
                        <step.icon className="w-6 h-6 text-teal-600" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Which Digital Marketing Services Do You Need? */}
      <section className="py-14 sm:py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-teal-900 mb-4">
                Which Digital Marketing Services Do You Need?
              </h2>
            </FloatingElement>
            <p className="text-gray-700 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              The right starting point depends on your situation. This table is a simple guide.
            </p>
          </div>

          <div className="overflow-x-auto shadow-xl rounded-2xl border border-teal-100 mb-8">
            <table className="w-full text-left border-collapse bg-white">
              <thead>
                <tr className="bg-gradient-to-r from-teal-800 to-teal-700 text-white text-sm sm:text-base">
                  <th className="p-4 sm:p-5 font-semibold">Your main goal</th>
                  <th className="p-4 sm:p-5 font-semibold">Best starting services</th>
                  <th className="p-4 sm:p-5 font-semibold">Typical timeline to see movement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm sm:text-base">
                {serviceMatrix.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-teal-50/50 transition-colors duration-200"
                  >
                    <td className="p-4 sm:p-5 font-semibold text-gray-900">
                      {row.goal}
                    </td>
                    <td className="p-4 sm:p-5 text-gray-700">
                      <span className="font-medium text-teal-800">{row.services}</span>
                    </td>
                    <td className="p-4 sm:p-5 text-gray-600">
                      <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs sm:text-sm font-medium text-gray-700">
                        {row.timeline}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-gray-700 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
            Most businesses do best with a blend, such as paid ads for early momentum while SEO and content build the foundation. We will recommend the mix that fits your budget instead of selling everything at once.
          </p>
        </div>
      </section>

      {/* What Results Can You Realistically Expect? */}
      <section className="py-14 sm:py-20 bg-gradient-to-br from-teal-50 via-white to-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-teal-900 mb-4">
                What Results Can You Realistically Expect?
              </h2>
            </FloatingElement>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-6">
              Honesty matters more than hype here. Be cautious of any agency that promises a specific ranking or guaranteed traffic multiplier, because search results depend on competition, your industry, your website's history, and factors no one controls.
            </p>
            <p className="text-teal-800 font-bold text-base sm:text-lg">
              Here is a realistic picture:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-2xl shadow-md border border-teal-100">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="w-5 h-5 text-teal-700" />
                <h3 className="font-bold text-gray-900">Paid Campaigns</h3>
              </div>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Paid campaigns can produce leads within days, then improve steadily as data accumulates.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md border border-teal-100">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="w-5 h-5 text-teal-700" />
                <h3 className="font-bold text-gray-900">Local SEO</h3>
              </div>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Local SEO often shows progress within the first few months.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md border border-teal-100">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-5 h-5 text-teal-700" />
                <h3 className="font-bold text-gray-900">Organic SEO</h3>
              </div>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Organic SEO typically takes three to six months to show meaningful gains, and often longer in competitive markets.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md border border-teal-100">
              <div className="flex items-center gap-3 mb-2">
                <Award className="w-5 h-5 text-teal-700" />
                <h3 className="font-bold text-gray-900">Content & Authority</h3>
              </div>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Content and authority compound. The results in year two are usually stronger than in year one.
              </p>
            </div>
          </div>

          <div className="p-6 bg-teal-900 text-white rounded-2xl text-center shadow-lg">
            <p className="text-base sm:text-lg leading-relaxed">
              What we do promise is transparency, consistent effort, and reporting you can understand. You will always know where your budget is going and what it is achieving.
            </p>
          </div>
        </div>
      </section>

      {/* Why Businesses Choose DigLip7 */}
      <section className="bg-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-teal-900 mb-4">
                Why Businesses Choose DigLip7
              </h2>
            </FloatingElement>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {whyChooseDiglip7.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card3D className="h-full">
                  <div className="bg-gradient-to-br from-teal-800 to-teal-700 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col text-white">
                    <div className="flex items-center justify-center w-12 h-12 bg-white/15 backdrop-blur-sm rounded-xl mb-4">
                      <item.icon className="w-6 h-6 text-[#c89d5a]" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-teal-100/90 text-sm sm:text-base leading-relaxed flex-grow">
                      {item.description}
                    </p>
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Choose the Right Digital Marketing Agency */}
      <section className="py-14 sm:py-20 bg-gradient-to-br from-teal-50 to-[#c89d5a]/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-teal-900 mb-4">
                How to Choose the Right Digital Marketing Agency
              </h2>
            </FloatingElement>
            <p className="text-gray-700 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              Whether you work with us or someone else, use these checks before you sign anything.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agencyChecks.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-teal-50 rounded-lg text-teal-700">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-base">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-gradient-to-br from-gray-50 to-teal-50/30 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-700 mb-4">
                Frequently Asked Questions About Digital Marketing Services
              </h2>
            </FloatingElement>
            <p className="text-gray-600 text-sm sm:text-base">
              Get answers to the most common questions about our digital marketing services.
            </p>
          </motion.div>

          <div className="space-y-4 sm:space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left p-4 sm:p-6 hover:bg-gray-50 transition-colors duration-200 group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-900 to-teal-700 text-white text-lg font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-102"
                >
                  <span className="text-sm sm:text-base lg:text-lg font-semibold pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-white" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="border-t border-gray-100"
                    >
                      <div className="p-4 sm:p-6 text-gray-600 leading-relaxed text-xs sm:text-sm lg:text-base">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default DigitalMarkit;