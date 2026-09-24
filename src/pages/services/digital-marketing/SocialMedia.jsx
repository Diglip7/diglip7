import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "../../../components/SEO";
import {
  TrendingUp,
  BarChart3,
  Search,
  Handshake, DollarSign, RefreshCw, Eye,
  ShoppingCart, Star,
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

  PlayCircle, BarChart, Settings, FileText, Quote,
  Rocket, CheckCircle2
} from "lucide-react";
import seo2 from "../../../images/smm00.jpeg";
import seoImage from "../../../images/smm1.png";
import seo4 from "../../../images/smm2.png";
import aboutImg from "../../../images/smm3.png";

import ppc1 from "../../../images/smm001.jpeg";
import ppc2 from "../../../images/smm001.jpeg";
import ppc3 from "../../../images/smm001.jpeg";
import ppc4 from "../../../images/smm001.jpeg";

// Mock images - replace with your actual images
// const seoImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop";
// const seo2 = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop";
// const seo4 = "https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&h=600&fit=crop";
// const aboutImg = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop";

// added 

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    text: `“DigLip7 transformed our online presence completely. Our organic traffic increased by 250% in just 6 months, and we’re now ranking #1 for our main keywords. Their team is professional, responsive, and delivers real results.”`,
    link: "https://techstart.io",
  },
  {
    name: "Michael Chen",
    role: "EcomShop",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    text: `“Working with DigLip7 has been a game-changer for our e-commerce business. They improved our search rankings and boosted conversions significantly.”`,
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "HealthPlus Clinic",
    image: "https://randomuser.me/api/portraits/women/49.jpg",
    text: `“The local social media  work by DigLip7 did for our clinic was outstanding. We went from being invisible online to the top-rated healthcare provider in our area.”`,
  },
  {
    name: "David Thompson",
    role: "Thompson Law Firm",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
    text: `“I was skeptical about social media  at first, but DigLip7 proved me wrong. Their transparent reporting and consistent results made them an invaluable partner.”`,
  },
];

const stepss = [
  {
    id: 1,
    title: "Research",
    description:
      "Deep dive into your industry, competitors, and target keywords to uncover social media  opportunities.",
    icon: <Search className="w-8 h-8 text-blue-600" />,
  },
  {
    id: 2,
    title: "Strategy",
    description:
      "Develop a customized social media  strategy based on our research findings to maximize visibility and ROI.",
    icon: <Target className="w-8 h-8 text-blue-600" />,
  },
  {
    id: 3,
    title: "Implementation",
    description:
      "Execute on-page, off-page, and technical social media  improvements for measurable growth.",
    icon: <Settings className="w-8 h-8 text-blue-600" />,
  },
  {
    id: 4,
    title: "Monitoring",
    description:
      "Track rankings, traffic, and performance metrics continuously to ensure consistent progress.",
    icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
  },
  {
    id: 5,
    title: "Reporting",
    description:
      "Provide detailed monthly reports with actionable insights and recommendations.",
    icon: <FileText className="w-8 h-8 text-blue-600" />,
  },
];
const caseStudies = {
  "TechStart Inc.": {
    title: "TechStart Inc.",
    industry: "Technology • 6 months",
    description:
      "Transformed a struggling tech startup into an industry leader through comprehensive social media  strategy.",
    image:
      ppc1,
    alt: "Digital marketing graphic displaying audience engagement and online interaction visuals",
    stats: [
      { icon: <TrendingUp className="w-5 h-5 text-teal-600" />, label: "Traffic", value: "+250%" },
      { icon: <Eye className="w-5 h-5 text-blue-600" />, label: "Visibility", value: "+180%" },
      { icon: <Users className="w-5 h-5 text-purple-600" />, label: "Leads", value: "+320%" },
      { icon: <DollarSign className="w-5 h-5 text-orange-600" />, label: "Revenue", value: "+150%" },
    ],
  },
  "EcoShop": {
    title: "EcoShop",
    industry: "E-commerce • 8 months",
    description:
      "Boosted organic traffic and conversions for a sustainable online store through targeted keyword optimization.",
    image:
      ppc2,
    alt: "Creative visual concept of social media advertising and influencer engagement",
    stats: [
      { icon: <TrendingUp className="w-5 h-5 text-teal-600" />, label: "Traffic", value: "+300%" },
      { icon: <Eye className="w-5 h-5 text-blue-600" />, label: "Visibility", value: "+210%" },
      { icon: <Users className="w-5 h-5 text-purple-600" />, label: "Leads", value: "+270%" },
      { icon: <DollarSign className="w-5 h-5 text-orange-600" />, label: "Revenue", value: "+190%" },
    ],
  },
  "HealthPlus Clinic": {
    title: "HealthPlus Clinic",
    industry: "Healthcare • 5 months",
    description:
      "Improved patient acquisition and local social media  rankings for a healthcare provider using optimized content strategy.",
    image:
      ppc3,
    alt: "Digital marketing graphic displaying audience engagement and online interaction visuals",
    stats: [
      { icon: <TrendingUp className="w-5 h-5 text-teal-600" />, label: "Traffic", value: "+220%" },
      { icon: <Eye className="w-5 h-5 text-blue-600" />, label: "Visibility", value: "+200%" },
      { icon: <Users className="w-5 h-5 text-purple-600" />, label: "Leads", value: "+250%" },
      { icon: <DollarSign className="w-5 h-5 text-orange-600" />, label: "Revenue", value: "+170%" },
    ],
  },
};
// added end 

const advantages = [
  {
    title: "Increased Brand Awareness",
    description:
      "Social media allows you to connect with a vast audience, increasing your brand’s reach and visibility. The more people engage with your content, the more exposure your business gets.",
    icon: TrendingUp,
  },
  {
    title: "Direct Engagement with Customers",
    description:
      "Social media platforms provide a unique opportunity to interact with your customers in real-time. Respond to inquiries, address concerns, and build a strong relationship with your audience.",
    icon: BarChart3,
  },
  {
    title: "Targeted Advertising",
    description:
      "Social media platforms offer sophisticated targeting options, allowing you to reach the right audience based on demographics, interests, behaviors, and location.",
    icon: Search,
  },
  {
    title: "Boosted Traffic & Sales",
    description:
      "By driving traffic to your website and offering special promotions, you can generate more leads, increase conversions, and ultimately, boost sales.",
    icon: Handshake,
  },
];

const solutions = [
  {
    title: "Social Media Strategy Development",
    description:
      "A well-crafted social media strategy is key to your success.",
    icon: ShoppingCart,
    points: [
      "Customized Planning: Aligned with your business goals and target audience.",
      "Platform Selection: Choose the best networks for your brand.",
      "Performance Benchmarks: Define clear goals and KPIs.",
    ],
  },
  {
    title: "Content Creation & Management",
    description:
      "Engaging content tailored to drive results and spark conversation.",
    icon: Building2,
    points: [
      "Creative Visuals: Custom graphics, videos, and infographics.",
      "Engaging Captions: Write posts that speak to your audience.",
      "Scheduling & Consistency: Maintain a reliable content calendar.",
    ],
  },
  {
    title: "Paid Social Media Advertising (SMM Ads)",
    description:
      "Drive leads and conversions with targeted ad campaigns.",
    icon: MapPin,
    points: [
      "Precise Targeting: Reach your ideal audience on Facebook, Instagram, LinkedIn, and more.",
      "Creative Ad Design: Eye-catching visuals and persuasive copy.",
      "Conversion Tracking: Monitor ROI with data-driven insights.",
    ],
  },
  {
    title: "Community Engagement & Management",
    description:
      "Build strong relationships and a loyal social following.",
    icon: Link2,
    points: [
      "Real-Time Interaction: Reply to comments and DMs.",
      "Audience Engagement: Foster trust and encourage conversation.",
      "Online Reputation: Proactive monitoring and support.",
    ],
  },
  {
    title: "Analytics & Reporting",
    description:
      "Stay informed with transparent and actionable reporting.",
    icon: HelpCircle,
    points: [
      "Campaign Insights: Detailed reports on reach, engagement, and conversions.",
      "Optimization Tips: Data-driven suggestions for better performance.",
      "Client Dashboards: Visual tools to monitor progress at a glance.",
    ],
  },
  {
    title: "(SMM) Services",
    description:
      "Visual tools to monitor progress at a glance.",
    icon: Mic,
    points: [
      "Analytics & Reporting Conversational queries.",
      "Real-Time Interaction: Long-tail, question-based content.",
      "Creative Ad Design: Optimized for Siri, Alexa.",
    ],
  },
];

const steps = [
  {
    number: "1",
    title: "Expertise Across Multiple Platforms",
    description:
      "We specialize in Facebook, Instagram, LinkedIn, Twitter, and TikTok, and know how to tailor content and strategies for each platform to achieve maximum impact.",
    icon: Target,
  },
  {
    number: "2",
    title: "Customized Approach",
    description:
      " We understand that every business is unique. Our SMM strategies are tailored to meet your specific needs, ensuring the best results for your business.",
    icon: Search,
  },
  {
    number: "3",
    title: "Results-Oriented",
    description:
      "We focus on delivering measurable results, whether that’s increased followers, higher engagement rates, or more leads and sales.",
    icon: Zap,
  },
  {
    number: "4",
    title: "Data-Driven Decisions",
    description:
      "We use analytics and data to guide our strategies and ensure that your campaigns are optimized for the best performance.",
    icon: Globe,
  },
  {
    number: "5",
    title: "End-to-End Social Media Management:",
    description:
      "From strategy development and content creation to community engagement and performance tracking, we offer comprehensive social media management services.",
    icon: BarChart3,
  },
  {
    number: "6",
    title: "Competitive Edge",
    description:
      "Effective social media marketing keeps you ahead of your competitors, helping you build a loyal community and keep customers engaged.",
    icon: Award,
  },
];

const faqs = [
  {
    question: "What is Social Media Marketing (SMM) and why is it important for my business?",
    answer:
      "Social Media Marketing (SMM) is the use of online channels to promote your products and services. It helps businesses increase visibility, attract potential customers, and boost sales."
  },
  {
    question: "How can Diglip7 help grow my business?",
    answer:
      "We specialize in social media , social media , social media marketing, and local social media  to help expand your audience and connect with the right customers."
  },
  {
    question: "How long does it take to see results from Social Media Marketing (SMM)?",
    answer:
      "Typically, social media  results take 3-6 months, Social Media Marketing (SMM) while Social Media Marketing and social media campaigns can generate leads almost immediately."
  },
  {
    question: "What industries does Diglip7 specialize in?",
    answer:
      "We serve a wide range of SOCIAL MEDIA MARKETING (SMM) industries including healthcare, e-commerce, education, real estate, and more."
  },
  {
    question: "Why should I hire a digital marketing agency instead of doing it myself?",
    answer:
      "An agency brings expertise, resources, and SOCIAL MEDIA MARKETING (SMM) tools that save time and deliver better results than handling marketing alone."
  },
  {
    question: "What is social media , and why does my business need it?",
    answer:
      "social media  improves your website's visibility on SOCIAL MEDIA MARKETING (SMM) search engines, driving organic traffic and increasing your chances of reaching customers."
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

function Socialmedia() {
  const [openIndex, setOpenIndex] = useState(null);
  const [isVisible, setIsVisible] = useState({});

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);


  // added
  const [seoStats, setSeoStats] = useState({ traffic: 0, visibility: 0, leads: 0, revenue: 0 });
  const seoLimits = { traffic: 250, visibility: 180, leads: 320, revenue: 150 };
  const seoDirections = { traffic: 1, visibility: 1, leads: 1, revenue: 1 };

  useEffect(() => {
    const interval = setInterval(() => {
      setSeoStats((prev) => {
        const newStats = { ...prev };
        for (let key in newStats) {
          const change = seoDirections[key] === 1 ? 1 : -1;
          newStats[key] += change;

          if (newStats[key] >= seoLimits[key]) seoDirections[key] = -1;
          if (newStats[key] <= 20) seoDirections[key] = 1;
        }
        return { ...newStats };
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  // social media  Packages
  const seoPackages = [
    {
      name: "Basic",
      price: "$799",
      duration: "/month",
      features: [
        "Social media account setup & optimization (2 platforms)",
        "12 posts per month (graphics + captions)",
        "Hashtag & trend research",
        "Monthly content calendar",
        "Basic engagement (likes, comments, shares)",
        "Monthly performance report",
        "Email support",
      ],
      button: "Get Started",
    },
    {
      name: "Pro",
      price: "$1,499",
      duration: "/month",
      popular: true,
      features: [
        "Full management of 3–4 platforms (Facebook, Instagram, LinkedIn, etc.)",
        "20+ posts per month (graphics, videos, captions)",
        "Ad campaign management (boosted posts / Meta Ads)",
        "Community engagement & response handling",
        "Influencer & collaboration outreach",
        "Bi-weekly performance reporting",
        "Priority support",
        "Custom content strategy",
      ],
      button: "Get Started",
    },
    {
      name: "Premium",
      price: "$2,999",
      duration: "/month",
      features: [
        "Complete social media management (all major platforms)",
        "Unlimited posts & stories per month",
        "Video content creation & reels strategy",
        "Ad campaign creation, tracking & optimization",
        "Weekly analytics & growth reports",
        "Dedicated social media manager",
        "Custom brand strategy & creative direction",
        "24/7 priority support",
      ],
      button: "Contact Sales",
    },
  ];

  // SOCIAL MEDIA MARKETING Services
  const ppcServices = [
    { icon: Search, title: "Social Media Strategy & Planning ", description: "Customized strategies to align with your business goals." },
    { icon: DollarSign, title: "Content Creation & Management", description: "Engaging posts, visuals, and videos to captivate your audience." },
    { icon: Settings, title: "Paid Social Media Advertising", description: "Targeted campaigns to increase reach, leads, and conversions." },
    { icon: FileText, title: "Community Managementn", description: " Build and nurture meaningful relationships with your followers." },
    { icon: Target, title: "Analytics & Reporting", description: "Track performance and optimize campaigns for maximum results." },
    { icon: RefreshCw, title: "Influencer & Partnership Marketing ", description: "Collaborate with influencers to expand brand visibility." },
  ];

  const [active, setActive] = useState("TechStart Inc.");
  const study = caseStudies[active];


  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % testimonials.length);
  const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);

  const testimonial = testimonials[index];

  // Dynamically generate schemas for SMM Service, Offer Catalog, and FAQs
  const smmSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Social Media Marketing (SMM)",
      provider: {
        "@type": "Organization",
        name: "DigLip7",
        url: "https://diglip7.com",
        logo: "https://diglip7.com/favicon-32x32.png",
      },
      areaServed: "Worldwide",
      description:
        "DigLip7 offers full-service social media marketing including strategy development, content creation, paid social advertising, community management, and analytics reporting across Facebook, Instagram, LinkedIn, and TikTok.",
      url: "https://diglip7.com/digital-market/social-media-marketing",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Social Media Marketing Packages",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Basic SMM Package" },
            price: "799",
            priceCurrency: "USD",
            priceSpecification: { "@type": "UnitPriceSpecification", billingDuration: "P1M" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Pro SMM Package" },
            price: "1499",
            priceCurrency: "USD",
            priceSpecification: { "@type": "UnitPriceSpecification", billingDuration: "P1M" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Premium SMM Package" },
            price: "2999",
            priceCurrency: "USD",
            priceSpecification: { "@type": "UnitPriceSpecification", billingDuration: "P1M" },
          },
        ],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.answer,
        },
      })),
    },
  ];

  return (
    <div className=" w-full bg-white ">
      <SEO
        title="Social Media Marketing Services That Grow Your Brand | DigLip7"
        description="Engage your audience and drive measurable growth with DigLip7's data-driven social media marketing. Strategy, content, ads & community management that convert."
        canonical="https://diglip7.com/digital-market/social-media-marketing"
        ogImage="https://diglip7.com/assets/smm00-Y_wVwoqh.jpeg"
        ogType="website"
        keywords="social media marketing services, SMM agency, Facebook ads, Instagram growth, LinkedIn marketing, TikTok advertising, DigLip7"
        schema={smmSchemas}
      />

      <div className="relative pt-20 bg-gradient-to-r from-purple-100 via-pink-100 to-white min-h-screen flex flex-col justify-center items-center px-6 md:px-16 overflow-hidden">
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

        <div className="relative z-10 flex flex-col md:flex-row items-center max-w-6xl gap-10">
          {/* Left Section */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-gray-900">Proven Social Media Marketing </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                Strategies to Grow Your Brand and Boost Engagement
              </span>
            </h1>
            <p className="text-gray-700 mb-6">
              At <span className="font-semibold text-blue-700">Engage your audience, </span> boost brand visibility, and drive measurable results with DigLip 7’s social media marketing services. Discover strategies that increase traffic, leads, and long-term business growth.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3 text-gray-800 text-sm mb-6">
              <div className="flex items-center gap-1.5"><Rocket className="w-4 h-4 text-teal-600 shrink-0" /><span>Boost organic traffic</span></div>
              <div className="flex items-center gap-1.5"><TrendingUp className="w-4 h-4 text-teal-600 shrink-0" /><span>Improve search ranking</span></div>
              <div className="flex items-center gap-1.5"><Target className="w-4 h-4 text-teal-600 shrink-0" /><span>Target right audience</span></div>
              <div className="flex items-center gap-1.5"><BarChart3 className="w-4 h-4 text-teal-600 shrink-0" /><span>Transparent reporting</span></div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href="/contact" className="inline-block">
                <motion.button
                  className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white text-lg font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105 cursor-pointer flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                  <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </a>
            </div>
          </div>

          {/* Right Section - Animated Chart */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src={seo2}
              alt="Professional social media marketing graphic showing brand engagement and analytics growth"
              className="rounded-2xl shadow-lg w-full"
            />
          </motion.div>
        </div>
        {/* Floating particles */}
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

      {/* addedd */}

      <div className="bg-gray-50">
        {/* social media  Section */}
        <div className="py-16 px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 mb-20">
            <motion.img
              src={ppc4}
              alt="Modern illustration of social media strategy with icons of Facebook, Instagram, and LinkedIn"
              className="rounded-2xl shadow-lg w-full md:w-1/2"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Social Media Marketing is the Best Investment for Your Business
              </h2>
              <p className="text-gray-700 mb-4">
                Social media marketing boosts brand visibility, engages your audience, and drives traffic. <span className="font-semibold text-blue-700">DigLip7</span>,
                With measurable results and real-time insights, it’s a cost-effective strategy for generating leads, increasing conversions, and achieving long-term business growth.


              </p>
              <ul className="text-gray-800 space-y-2 text-left mx-auto md:mx-0">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /><span>Immediate Results</span></li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /><span>Targeted Reach</span></li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /><span>Budget Control</span></li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /><span>Measurable ROI</span></li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /><span>Brand Exposure</span></li>
              </ul>
            </div>
          </div>

          <div className="bg-white py-16 px-6 md:px-12 lg:px-6 text-center">
            {/* Header */}
            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Proven Social Media Marketing Process
              </h2>
              <p className="text-gray-600 mt-3">
                DigLip 7’s social media marketing process ensures real results. We analyze your audience, craft compelling content, and launch targeted campaigns across key platforms. With constant monitoring and optimization, we maximize engagement, drive traffic, and boost your brand’s online growth.
              </p>
            </div>

            {/* Steps Section */}
            <div className="relative max-w-6xl mx-auto">
              {/* Blue Line (Desktop only) */}
              <div className="hidden md:block absolute top-10 left-0 w-full border-t-4 border-blue-100 z-0"></div>

              {/* Steps */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 relative z-10">
                {stepss.map((step, index) => (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center"
                  >
                    {/* Icon Circle */}
                    <div className="relative flex items-center justify-center w-16 h-16 rounded-full border-4 border-blue-300 bg-white shadow-md mb-4">
                      {step.icon}
                      <span className="absolute -top-2 -right-2 bg-teal-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full shadow">
                        {step.id}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-semibold text-gray-900 text-lg">{step.title}</h3>
                    {/* Description */}
                    <p className="text-gray-600 text-sm mt-2 leading-relaxed max-w-[200px]">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* social media  Services */}
          <div className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
            <div className="max-w-6xl mx-auto text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Proven Social Media Marketing Success Stories
              </h2>
              <p className="text-gray-600 mt-3">
                Real results from real businesses that trusted <span className="font-semibold text-teal-600">DigLip7</span> with their Social Media Marketing journey.
              </p>

              {/* Tabs */}
              <div className="flex justify-center gap-4 mt-8 flex-wrap">
                {Object.keys(caseStudies).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActive(key)}
                    className={`group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white text-lg font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105 ${active === key
                      ? "bg-teal-600 text-white shadow-md"
                      : "bg-white text-gray-700 hover:bg-teal-50"
                      }`}
                  >
                    {key}
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10"
            >
              {/* Left: Image & Info */}
              <div className="flex-1">
                <img
                  src={study.image}
                  alt={study.alt}
                  className="rounded-2xl shadow-md w-full object-cover"
                />

              </div>

              {/* Right: Stats */}
              <div className="flex-1 space-y-4">
                <h3 className="font-semibold text-gray-800 text-lg">TechStart Inc.</h3>
                <p className="text-sm text-gray-600">
                  Transformed a struggling tech startup into an industry leader through advanced Social Media Marketing.
                </p>
                <div className="grid grid-cols-2 gap-4 flex-1 w-full">


                  {study.stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl shadow-md p-5 flex flex-col justify-center items-start"
                    >

                      <div className="flex items-center gap-2">{stat.icon}</div>
                      <p className="text-2xl font-bold text-black mt-1">{stat.value}</p>
                      <p className="text-gray-500 text-sm">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* SOCIAL MEDIA MARKETING Services Section */}
        <div className="bg-white py-16 px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Social Media Marketing Services</h2>
            <p className="text-gray-600 mb-10">
              At DigLip 7, we offer comprehensive social media marketing services designed to grow your brand, engage your audience, and drive measurable results. Our expert team uses proven strategies to maximize your online presence and ROI.

            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ppcServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all cursor-pointer border border-gray-100"
                  whileHover={{ scale: 1.05 }}
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="flex justify-center mb-4">
                    <service.icon className="text-teal-600 w-10 h-10" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* social media  Pricing Section */}
        <div className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Social Media Marketing Packages Designed for Every Stage</h2>
            <p className="text-gray-600 mb-10">
              Choose the perfect Social Media Marketing package that fits your business needs and budget.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {seoPackages.map((pkg, index) => (
                <motion.div
                  key={index}
                  className={`rounded-2xl p-8 shadow-lg transition-all ${pkg.popular ? "border-4 border-blue-500 bg-white" : "bg-gray-50"}`}
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                >
                  <div className="mb-6">
                    <h3 className="text-2xl font-semibold text-gray-900">{pkg.name}</h3>
                    {pkg.popular && (
                      <span className="inline-flex items-center gap-1 text-sm bg-teal-100 text-teal-900 px-3 py-1 rounded-full font-medium">
                        <Sparkles className="w-3.5 h-3.5 text-teal-700" />
                        <span>Most Popular</span>
                      </span>
                    )}
                  </div>
                  <p className="text-4xl font-bold text-teal-900 mb-2">{pkg.price}</p>
                  <p className="text-gray-600 mb-6">{pkg.duration}</p>
                  <ul className="text-gray-700 text-sm space-y-2 mb-6 text-left">
                    {pkg.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="/contact">
                    <button
                      className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white text-lg font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105"
                    >
                      {pkg.button}
                    </button></a>
                </motion.div>
              ))}
            </div>

            <p className="mt-10 text-gray-500 text-sm">
              All plans include a 30-day money-back guarantee. Need a custom plan?{" "}
              <a href="/contact" className="text-blue-600 underline">Contact us</a>.
            </p>
          </div>
        </div>
      </div>
      {/* added  */}






      {/* About Section with 3D Cards */}
      <section id="about" className=" sm:py-16 lg: bg-white">
        <div className=" mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-6 px-4 sm:px-6 lg:px-8">
          {/* Left Image with 3D effect */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <Card3D className="w-full">
              <div className="relative overflow-hidden rounded-2xl ">
                <img
                  src={seoImage}
                  alt="social media  Service"
                  className="w-full h-full sm:h-full lg:h-full object-cover transform transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 "></div>
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
                Unlock Your Business Potential with {" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  AI-Powered Social Media Marketing
                </span>
              </h2>
            </FloatingElement>

            <div className="space-y-4 sm:space-y-6">
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                Elevate Your Brand Presence | Increase Engagement & Conversions In today's digital-first world, Social Media Marketing (SMM) is essential for brand growth. With **DigLip 7’s AI-driven SMM services**, we help you **expand your audience, boost engagement**, and drive measurable business results. Our data-driven strategies ensure your brand stands out in a crowded online space.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                Discover how **our AI-powered approach** can transform your social media presence and maximize ROI.
              </p>
            </div>

            <motion.div
              className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {[
                { icon: Users, text: "1000+ Projects" },
                { icon: Award, text: "2+ Years Experience" },
                { icon: Target, text: "5 Month Results" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-2 bg-gradient-to-r from-teal-50 to-[#c89d5a]/10 px-3 sm:px-4 py-2 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-teal-700" />
                  <span className="text-sm sm:text-base font-medium text-gray-700">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Difference Section */}
      <section className=" sm:py-16 lg: px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-6">
          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <FloatingElement delay={0.2}>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-teal-700 leading-tight mb-4 sm:mb-6">
                What is Social {" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  Media Marketing (SMM)?
                </span>
              </h2>
            </FloatingElement>

            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
              Social Media Marketing (SMM) is the use of social media platforms such as Facebook, Instagram, LinkedIn, Twitter, and TikTok to promote your business, connect with your audience, and achieve your marketing objectives.
              Effective SMM can increase brand visibility, build trust, drive traffic to your website, and ultimately, grow your business. At DigLip 7, we take a data-driven approach to create social media strategies that deliver measurable results. We leverage the power of targeted ads, engaging content, and community management to ensure your business thrives across all social platforms.
            </p>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {[
                { number: "500%", label: "Traffic Increase" },
                { number: "95%", label: "Client Satisfaction" },
                { number: "24/7", label: "Support Available" },
                { number: "50+", label: "Team Experts" }
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
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-teal-700">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
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
                  alt="social media  Service"
                  className="rounded-2xl  w-full h-full sm:h-full lg:h-full object-cover transform transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0  rounded-2xl"></div>
              </div>
            </Card3D>
          </motion.div>
        </div>
      </section>

      {/* Results Section with Custom Shape */}
      <section className="w-full  sm:py-16 lg: px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-6">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative w-full h-full sm:w-full sm:h-full lg:w-full lg:h-full">
              <Card3D className="w-full h-full">
                <img
                  src={aboutImg}
                  alt="About Diglip7"
                  className="w-full h-full object-cover  transition-transform duration-700 hover:scale-105"

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
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <FloatingElement delay={0.3}>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-teal-700 leading-tight mb-6">
                Driving Real Results with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-teal-600 to-[#c89d5a]">
                  Diglip7's Social Media Marketing
                </span>
              </h2>
            </FloatingElement>

            <div className="space-y-4 sm:space-y-6">
              <motion.div
                className="flex items-start gap-3 sm:gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
                  At <span className="font-semibold text-teal-700">Diglip7</span>, we specialize in
                  tailored Social Media Marketing strategies that deliver real results. Our
                  expertise spans multiple areas to ensure your business thrives online.
                </p>
              </motion.div>

              <motion.div
                className="flex items-start gap-3 sm:gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600 mt-1 flex-shrink-0" />
                <p className="text-teal-700 leading-relaxed text-sm sm:text-base lg:text-lg">
                  We help you expand your audience through{" "}
                  <span className="font-semibold text-[#c89d5a]">social media , social media , social media marketing, and local social media </span>,
                  ensuring your brand reaches the right customers at the right time.
                </p>
              </motion.div>

              <motion.div
                className="flex items-start gap-3 sm:gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
                  With customized marketing strategies, we give you full control over
                  your brand's online identity, ensuring consistency and a strong
                  digital presence.
                </p>
              </motion.div>
            </div>
          </motion.div>


        </div>
      </section>

      {/* Advantages Section with 3D Cards */}
      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <FloatingElement>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-700 mb-4 sm:mb-6">
              Why Social Media Marketing (SMM) is Essential for Your Business
            </h2>
          </FloatingElement>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
            With billions of people using social media daily, your business cannot afford to ignore these platforms. Here’s why SMM is crucial for your growth:
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {advantages.map((adv, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card3D className="h-full">
                <div className="bg-gradient-to-br from-teal-600 to-teal-900 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                  <FloatingElement delay={index * 0.1}>
                    <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4 mx-auto">
                      <adv.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                  </FloatingElement>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 text-center">
                    {adv.title}
                  </h3>
                  <p className="text-white/90 text-xs sm:text-sm leading-relaxed text-center flex-grow">
                    {adv.description}
                  </p>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Solutions Section */}
      <section className="bg-gradient-to-br from-gray-50 to-teal-50/30 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <FloatingElement>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-700 mb-4 sm:mb-6">
              Our Social Media Marketing(SMM) Services
            </h2>
          </FloatingElement>
          <p className="text-gray-600 max-w-4xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed">
            At DigLip 7, we offer comprehensive SMM services to help your business succeed in the digital world. Our tailored strategies are designed to increase your online presence, foster engagement, and generate leads.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card3D className="h-full">
                <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 h-full flex flex-col">
                  <FloatingElement delay={index * 0.1}>
                    <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-teal-100 to-[#c89d5a]/20 rounded-full mb-4">
                      <solution.icon className="w-6 h-6 sm:w-8 sm:h-8 text-teal-600" />
                    </div>
                  </FloatingElement>

                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-xs sm:text-sm flex-grow">
                    {solution.description}
                  </p>
                  <ul className="space-y-2">
                    {solution.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-700 mb-4">
                Why Choose DigLip 7 for Social Media Marketing (SMM)?
              </h2>
            </FloatingElement>
            <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
              When you partner with DigLip 7, you’re choosing a team of dedicated professionals committed to the success of your business. Here’s why we’re the best choice for your SOCIAL MEDIA MARKETING (SMM) needs:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card3D className="h-full">
                  <div className="bg-white shadow-lg rounded-xl p-4 sm:p-6 border border-gray-100 hover:shadow-2xl transition-all duration-500 h-full">
                    <div className="flex items-start gap-4 mb-4">
                      <motion.div
                        className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-teal-600 to-teal-900 text-white font-bold text-sm sm:text-base flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        {step.number}
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                          {step.title}
                        </h3>
                        <div className="flex items-center gap-2 mb-3">
                          <step.icon className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600" />
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-8 sm:mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6">
              This process is built for simplicity, effectiveness, and rapid growth.
            </p>
            <a href="/contact">
              <motion.button
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-600 to-teal-900 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Journey
                <ArrowRight className="inline-block ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>

      <div className="bg-gradient-to-b from-blue-50 to-white py-20 px-4 md:px-10 lg:px-20 text-center relative">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Trusted by Businesses Worldwide
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Don’t just take our word for it. See what our clients say about their social media  success with DigLip7.
        </p>

        <motion.div
          key={testimonial.name}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-white shadow-lg rounded-3xl p-8 md:p-10 relative overflow-hidden"
        >
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
            ))}
          </div>
          <p className="text-gray-700 text-lg md:text-xl italic mb-6">{testimonial.text}</p>
          <div className="flex flex-col items-center">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full object-cover mb-3 border-2 border-blue-500"
            />
            <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
            {testimonial.link && (
              <a
                href={testimonial.link}
                className="text-blue-500 text-sm mt-1 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {testimonial.role}
              </a>
            )}
          </div>
        </motion.div>

        <div className="flex justify-center items-center mt-8 gap-4">
          <button
            onClick={prev}
            className="w-3 h-3 rounded-full bg-gray-300 hover:bg-blue-400 transition-all"
          />
          {testimonials.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all ${index === i ? "bg-blue-500 w-6" : "bg-gray-300"
                }`}
            ></div>
          ))}
          <button
            onClick={next}
            className="w-3 h-3 rounded-full bg-gray-300 hover:bg-blue-400 transition-all"
          />
        </div>

        {/* Floating small cards */}
        <div className="hidden md:flex justify-center gap-6 mt-12 flex-wrap">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className={`bg-white shadow-md p-4 rounded-xl w-60 text-left border ${i === index ? "border-blue-500" : "border-gray-100"
                }`}
            >
              <div className="flex gap-3 items-center mb-3">
                <img src={t.image} className="w-10 h-10 rounded-full" alt="" />
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 line-clamp-3">{t.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <section className="w-full bg-gradient-to-br from-gray-50 to-teal-50/30 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto">
          <motion.div
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-700 mb-4">
                Frequently Asked Questions (FAQs)
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
                className="bg-white rounded-xl shadow-lg  overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left p-4 sm:p-6 hover:bg-gray-50 transition-colors duration-200 
                  group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-900 to-teal-700 text-white text-lg font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-102"
                >
                  <span className="text-sm sm:text-base lg:text-lg font-semibold  pr-4">
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

      {/* CTA Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-teal-700 to-[#c89d5a] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 border border-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-6">
                Get Started with Social
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white">
                  Media Marketing (SMM) Today!
                </span>
              </h2>
            </FloatingElement>

            <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and let’s discuss how we can create a customized SMM strategy that works for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/contact">
                <motion.button
                  className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-700 to-teal-900 text-white text-lg font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Free Consultation
                  <Sparkles className="inline-block ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>
              </a>

            </div>

            <motion.div
              className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-6 sm:gap-8 text-white/80"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-300" />
                <span className="text-xs sm:text-sm">Free Website Audit</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-300" />
                <span className="text-xs sm:text-sm">No Long-term Contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-300" />
                <span className="text-xs sm:text-sm">Results in 5 Months</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


export default Socialmedia