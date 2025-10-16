import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  BarChart3,
  Search,
  Handshake, DollarSign, RefreshCw, Eye,
  ShoppingCart,
  Building2,
  MapPin,
  Link2,
  HelpCircle,
  Mic,
  CheckCircle, Star,
  ArrowRight,
  Sparkles,
  Target,
  Zap,
  Globe,
  Users,
  Award,
  ChevronDown,

  PlayCircle, BarChart, Settings, FileText, Quote
} from "lucide-react";
import seo2 from "../images/vim001.jpeg";
import seoImage from "../images/vso1.png";
import seo4 from "../images/vso2.png";
import aboutImg from "../images/vso3.png";

import ppc1 from "../images/vim002.jpeg";
import ppc2 from "../images/vim003.jpeg";
import ppc3 from "../images/vim004.jpeg";
import ppc4 from "../images/vim005.jpeg";

// Mock images - replace with your actual images
// const seoImage =
//   "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop";
// // const seo2 = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop";
// const seo4 =
//   "https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&h=600&fit=crop";
// const aboutImg =
//   "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop";

// added 

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    text: `“DigLip 7 optimized our website for voice search, and we saw a significant increase in local traffic. Highly professional and results-driven!”`,
    link: "https://techstart.io",
  },
  {
    name: "Michael Chen",
    role: "EcomShop",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    text: `“Thanks to DigLip 7, our business now ranks higher on voice searches. Their strategies helped us reach more customers effortlessly.”`,
  },
  {
    name: "Rajesh S., Delhi, India",
    role: "HealthPlus Clinic",
    image: "https://randomuser.me/api/portraits/women/49.jpg",
    text: `“The team at DigLip 7 improved our local visibility through voice search optimization. Our customer engagement and leads have grown remarkably.”`,
  },
  {
    name: "Sophia M., London, UK",
    role: "Thompson Law Firm",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
    text: `“Working with DigLip 7 boosted our voice search rankings and online presence. Their approach is data-driven and highly effective.”`,
  },
];

const stepss = [
  {
    id: 1,
    title: "Research",
    description:
      "Deep dive into your industry, competitors, and target keywords to uncover Voice Search Optimization opportunities.",
    icon: <Search className="w-8 h-8 text-blue-600" />,
  },
  {
    id: 2,
    title: "Strategy",
    description:
      "Develop a customized Voice Search Optimization strategy based on our research findings to maximize visibility and ROI.",
    icon: <Target className="w-8 h-8 text-blue-600" />,
  },
  {
    id: 3,
    title: "Implementation",
    description:
      "Execute on-page, off-page, and technical Voice Search Optimization improvements for measurable growth.",
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
    title: "Voice assistant technology improving local SEO rankings",
    industry: "Technology • 6 months",
    description:
      "Transformed a struggling tech startup into an industry leader through comprehensive Voice Search Optimization strategy.",
    image:
      ppc2,
    stats: [
      { icon: <TrendingUp className="w-5 h-5 text-teal-600" />, label: "Traffic", value: "+250%" },
      { icon: <Eye className="w-5 h-5 text-blue-600" />, label: "Visibility", value: "+180%" },
      { icon: <Users className="w-5 h-5 text-purple-600" />, label: "Leads", value: "+320%" },
      { icon: <DollarSign className="w-5 h-5 text-orange-600" />, label: "Revenue", value: "+150%" },
    ],
  },
  "EcoShop": {
    title: "Team analyzing voice search data and SEO performance",
    industry: "E-commerce • 8 months",
    description:
      "Boosted organic traffic and conversions for a sustainable online store through targeted keyword optimization.",
    image:
      ppc3,
    stats: [
      { icon: <TrendingUp className="w-5 h-5 text-teal-600" />, label: "Traffic", value: "+300%" },
      { icon: <Eye className="w-5 h-5 text-blue-600" />, label: "Visibility", value: "+210%" },
      { icon: <Users className="w-5 h-5 text-purple-600" />, label: "Leads", value: "+270%" },
      { icon: <DollarSign className="w-5 h-5 text-orange-600" />, label: "Revenue", value: "+190%" },
    ],
  },
  "HealthPlus Clinic": {
    title: "Voice search optimization tools and analytics dashboard",
    industry: "Healthcare • 5 months",
    description:
      "Improved patient acquisition and local Voice Search Optimization rankings for a healthcare provider using optimized content strategy.",
    image:
      ppc4,
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
    title: "AI-powered keyword Analyzers",
    description:
      "Tools like Ahrefs and SEMrush uncover conversational keywords and question-based phrases for precise targeting.",
    icon: TrendingUp,
  },
  {
    title: "Voice-Readability Testing Tools",
    description:
      "We ensure that content is clear and concise for voice assistants to read aloud naturally.",
    icon: BarChart3,
  },
  {
    title: "Mobile Responsiveness Checkers",
    description:
      "Platforms like Google’s Mobile-Friendly Test confirm your site performs flawlessly on smartphones.",
    icon: Search,
  },
  {
    title: "Structured Data Validators",
    description:
      "We use Google’s Structured Data Testing Tool to verify schema markup for voice search accuracy.",
    icon: Handshake,
  },
];

const solutions = [
  {
    title: "E-commerce",
    description:
      "Shoppers ask, “What’s the best deal on wireless headphones?” We optimize product pages and FAQs to capture these queries, driving sales.",
    icon: ShoppingCart,
    points: [
      "What’s the best deal on wireless headphones",
      "E-commerce harmful content and replacing it with positive, authentic narratives.",
      " E-commerce Enhancing User Experience: Fast, mobile-friendly design.",
    ],
  },
  {
    title: "Healthcare",
    description: "Patients search for “What are symptoms of a cold?” Our voice Voice Search Optimization ensures that clinics and providers rank for health-related questions.",
    icon: Building2,
    points: [
      "Diglip7’s Hospitality, we polish your online presence to exude reliability",
      " Healthcare authority, winning over customers, clients, and peers.",
      "Healthcare Systems that grow with your business.",
    ],
  },
  {
    title: "Hospitality",
    description: "Travelers say, “Find hotels near Times Square.” We boost your visibility with local voice search and structured data for bookings.",
    icon: MapPin,
    points: [
      "voice search optimization bury undesirable results",
      " Hospitality elevate content that screams credibility—because visibility is power.",
      "Targeted Hospitality Strategies: Engage your local audience.",
    ],
  },
  {
    title: "Legal",
    description:
      "Clients ask, “How much does a divorce lawyer cost?” We create voice-friendly content to answer legal FAQs, generating leads.",
    icon: Link2,
    points: [
      " Diglip7’s voice search optimization ensures you outshine rivals ",
      "voice search optimization stay top-of-mind for your audience.",
      "Boosting Domain Authority: Improve rankings and trust.",
    ],
  },
  {
    title: "Real Estate",
    description: "Homebuyers search, “What are homes for sale near me?” Our Google Assistant Voice Search Optimization targets location-based queries to showcase listings.",
    icon: HelpCircle,
    points: [
      "voice search optimization services swoop in to contain the damage,",
      "restore your image, and voice search optimization keep your brand standing tall.",
      "voice search optimization Stand out in voice and AI searches.",
    ],
  },
  {
    title: "Scalable Solutions",
    description: "From startups to enterprises, our voice search optimization service grows with your business.",
    icon: Mic,
    points: [
      "voice search optimization that keeps your business relevant,",
      "respected, and thriving voice search optimization in a world where online perception is everything.",
      "Voice Assistant Compatibility: Optimized for Siri, Alexa.",
    ],
  },
];

const steps = [
  {
    number: "1",
    title: "Brand Story Videos",
    description: " Share your mission and values to connect emotionally.",
    icon: Target,
  },
  {
    number: "2",
    title: "Product Demonstrations",
    description: "Show off features and benefits to drive sales.",
    icon: Search,
  },
  {
    number: "3",
    title: "Tutorials & How-To Videos",
    description: "Educate your audience and position yourself as an expert.",
    icon: Zap,
  },
  {
    number: "4",
    title: "Customer Testimonials",
    description: "Let happy clients do the talking to build trust.",
    icon: Globe,
  },
  {
    number: "5",
    title: "Event Coverage",
    description: "Capture launches, conferences, or milestones with flair.",
    icon: BarChart3,
  },
  {
    number: "6",
    title: "Animated Explainer Videos",
    description: "Simplify complex offerings with fun visuals.",
    icon: Award,
  },
];

const faqs = [
  {
    question:
      "How is voice search different from typed search?",
    answer:
      "Voice search uses natural, conversational language—like “What’s the best coffee shop near me?”—while typed searches are shorter and keyword-focused, such as “coffee shop.” Our voice Voice Search Optimization targets these conversational search queries to ensure your brand ranks in spoken results.",
  },
  {
    question:
      "Why is voice search optimization important for my business?",
    answer:
      "With over 50% of users relying on voice search daily (Statista, 2024), it’s a growing channel for discovery. A voice search optimization service boosts your visibility in local voice search, featured snippets, and mobile queries, keeping you competitive in 2025 and beyond.",
  },
  {
    question:
      "How long does it take to see results from voice optimization?",
    answer:
      "Results depend on your current Voice Search Optimization foundation, but most DigLip7 clients see ranking improvements or traffic boosts within 2–3 months. Our voice-enabled search strategy delivers steady progress, tracked with transparent reporting.",
  },
  {
    question:
      "Is voice optimization suitable for small businesses?",
    answer:
      "Yes! Small businesses thrive with voice search optimization services, especially for local voice search. We help you capture “near me” queries—like “Find a plumber nearby”—driving foot traffic and leads without a big budget.",
  },
  {
    question:
      "What platforms does your voice Voice Search Optimization target?",
    answer:
      "We optimize for major voice assistants, including Google Assistant Voice Search Optimization, Amazon Alexa, Apple Siri, and other emerging platforms, ensuring your brand reaches users across devices.",
  },
  {
    question:
      "Will voice optimization help me rank in “near me” searches?",
    answer:
      "Absolutely. Our voice search optimization service enhances your Google Business Profile, local citations, and location-specific content to dominate “near me” results—perfect for brick-and-mortar businesses.",
  },
  {
    question:
      "How does DigLip7 ensure my content is voice-friendly?",
    answer:
      "We use schema markup for voice search, craft long-tail and question-based content, and test readability for voice assistants. This ensures your site answers queries naturally and ranks in featured snippets optimization.",
  },
  {
    question:
      "Can voice search optimization improve my mobile Voice Search Optimization too?",
    answer:
      "Yes! Since most voice searches happen on mobile, our mobile-first SEO—including site speed and responsiveness—boosts both voice and mobile performance, creating a seamless user experience.",
  },
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

function Voice() {
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
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[id]").forEach((el) => observer.observe(el));
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

  // Voice Search Optimization Packages
  const seoPackages = [
    {
      name: "Basic",
      price: "$799",
      duration: "/month",
      features: [
        "Voice search audit & analysis",
        "Optimization of existing content for voice queries",
        "Basic FAQ & long-tail keyword integration",
        "Google My Business optimization for voice search",
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
        "Advanced voice search strategy & optimization",
        "Structured data & schema markup implementation",
        "Optimized content creation for natural language queries",
        "Local voice search & map integration",
        "Bi-weekly performance reporting",
        "Priority support",
        "Competitor voice search analysis",
      ],
      button: "Get Started",
    },
    {
      name: "Premium",
      price: "$2,999",
      duration: "/month",
      features: [
        "Full-scale voice search optimization management",
        "Custom content for featured snippets & rich answers",
        "Voice assistant integration strategy (Google, Alexa, Siri)",
        "Weekly performance reports & strategy calls",
        "Dedicated Voice Search Optimization & voice search strategist",
        "Advanced analytics & trend forecasting",
        "Enhanced local Voice Search Optimization & multi-location optimization",
      ],
      button: "Contact Sales",
    },
  ];

  // Voice Search Optimization Services
  const ppcServices = [
    { icon: Search, title: "Keyword Research & Targeting", description: "Find and target the best keywords to maximize ROI." },
    { icon: DollarSign, title: "Voice Search Optimization Campaign Management", description: "Full management of Google Ads, Bing Ads, and social campaigns." },
    { icon: Settings, title: "Bid Management & Optimization", description: "Optimize bids to get the most clicks and conversions within budget." },
    { icon: FileText, title: "Ad Copywriting & Creative Design", description: "Engaging ads that capture attention and drive results." },
    { icon: Target, title: "Audience & Demographic Targeting", description: "Reach the right audience based on location, interests, and demographics." },
    { icon: RefreshCw, title: "Remarketing & Retargeting", description: "Re-engage visitors who didn’t convert the first time." },
  ];

  const [active, setActive] = useState("TechStart Inc.");
  const study = caseStudies[active];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % testimonials.length);
  const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);

  const testimonial = testimonials[index];

  return (
    <div className=" bg-white sm:pt-18">
      {/* Hero Section with Parallax */}
      <div className=" pt-20 bg-gradient-to-r from-purple-100 via-pink-100 to-white min-h-screen flex flex-col justify-center items-center px-6  overflow-hidden">
        {/* Animated Floating Objects */}
        <motion.div
          className="absolute top-10 left-10 w-16 h-16 bg-white/20 rounded-full blur-xl"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-20 h-20 bg-white/20 rounded-full blur-xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        <div className="flex flex-col md:flex-row items-center max-w-6xl gap-10">
          {/* Left Section */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-gray-900"> Expert Voice Search Optimization Services
              </span>
              <br className="text-gray-600" />

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                to Boost Your Business
              </span>
              <br />

            </h1>
            <p className="text-gray-700 mb-6">
              Enhance your online presence with DigLip 7<span className="font-semibold text-blue-700">’s voice search optimization services.</span>Optimize for conversational queries, improve local SEO, and attract targeted traffic to drive engagement, increase visibility, and achieve measurable business growth.

            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3 text-gray-800 text-sm mb-6">
              <div>🚀 Boost organic traffic</div>
              <div>📈 Improve search ranking</div>
              <div>🎯 Target right audience</div>
              <div>📊 Transparent reporting</div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              {/* <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-md transition-transform hover:scale-105">
                          Get Free Voice Search Optimization Audit <ArrowRight size={18} />
                        </button> */}
              <a href="/contact">
                <motion.button

                  className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-700 to-teal-900 text-white text-lg font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105"
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
              alt="Voice search optimization strategy for businesses"
              className="rounded-2xl shadow-lg w-full"
            />
          </motion.div>
        </div>
        {/* Floating particles */}
        <div className="absolute inset-0">
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

      <div className="bg-white">
        {/* Voice Search Optimization Section */}
        <div className="py-16 px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 mb-20">
            <motion.img
              src={ppc1}
              alt="Digital marketer optimizing website for voice search results"
              className="rounded-2xl shadow-lg w-full md:w-1/2"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Voice Search Optimization is the Best Investment for Your Business
              </h2>
              <p className="text-gray-700 mb-4">
                Voice search optimization helps businesses attract targeted traffic,<span className="font-semibold text-blue-700">DigLip7</span>,
                improve local visibility, and engage users through conversational queries. Investing in it boosts search rankings, drives qualified leads, and gives your business a competitive edge in the growing voice-driven market.

              </p>
              <ul className="text-gray-800 space-y-2 text-left mx-auto md:mx-0">
                <li>✅ Immediate Results</li>
                <li>✅ Targeted Reach</li>
                <li>✅ Budget Control</li>
                <li>✅ Measurable ROI</li>
                <li>✅ Brand Exposure</li>
              </ul>
            </div>
          </div>

          <div className="bg-white py-16 px-6 md:px-12 lg:px-20 text-center">
            {/* Header */}
            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Proven Voice Search Optimization Process
              </h2>
              <p className="text-gray-600 mt-3">
                At DigLip 7, our voice search optimization process is designed to increase visibility and drive targeted traffic. We analyze user search behavior, optimize content for natural, conversational queries, and enhance local SEO. Continuous monitoring and refinement ensure higher rankings, improved engagement, and measurable business growth

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

          {/* Voice Search Optimization Services */}
          <div className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
            <div className="max-w-6xl mx-auto text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Proven Voice Search Optimization Success Stories
              </h2>
              <p className="text-gray-600 mt-3">
                Discover how DigLip 7’s voice search optimization strategies have helped businesses achieve higher local visibility and increased traffic.<span className="font-semibold text-teal-600">DigLip7</span> By optimizing for conversational queries and smart devices, our data-driven approach delivers measurable results, better engagement, and long-term digital growth.

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
                  alt={study.title}
                  className="rounded-2xl shadow-md w-full object-cover"
                />

              </div>

              {/* Right: Stats */}
              <div className="flex-1 space-y-4">
                <h3 className="font-semibold text-gray-800 text-lg">TechStart Inc.</h3>
                <p className="text-sm text-gray-600">
                  At DigLip 7, we offer comprehensive voice search optimization services to help your business stay ahead in the digital era. Our services include conversational keyword research, content optimization for voice queries, local SEO enhancement, smart device compatibility, and performance tracking. These strategies improve search visibility, attract targeted traffic, and boost engagement, delivering measurable results and sustainable business growth.

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

        {/* Voice Search Optimization Services Section */}
        <div className="bg-white py-16 px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Voice Search Optimization Services</h2>
            <p className="text-gray-600 mb-10">
              Voice Search Optimization services designed to maximize ROI and drive targeted traffic.
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

        {/* Voice Search Optimization Pricing Section */}
        <div className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Voice Search Optimization Packages Designed for Every Stage</h2>
            <p className="text-gray-600 mb-10">
              Choose the perfect Voice Search Optimization package that fits your business needs and budget.
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
                      <span className="text-sm bg-blue-100 text-teal-900 px-3 py-1 rounded-full font-medium">
                        🌟 Most Popular
                      </span>
                    )}
                  </div>
                  <p className="text-4xl font-bold text-teal-900 mb-2">{pkg.price}</p>
                  <p className="text-gray-600 mb-6">{pkg.duration}</p>
                  <ul className="text-gray-700 text-sm space-y-2 mb-6 text-left">
                    {pkg.features.map((feat, i) => (
                      <li key={i}>✅ {feat}</li>
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
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 lg: px-4 sm:px-6 lg:">
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
                  alt="ui/ux Service"
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
                Voice Search Optimization{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  Service | DigLip7 Voice Search Optimization Solutions
                </span>
              </h2>
            </FloatingElement>
            {/* UI/UX Design Services | Diglip7 – Crafting Seamless Digital Experiences */}
            <div className="space-y-4 sm:space-y-6">
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                In a world where “Hey, Siri” and “OK, Google” are part of daily
                life, voice search is reshaping how customers find businesses
                online. By 2025, voice-enabled devices and conversational
                queries are set to dominate digital interactions, making a voice
                search optimization service essential for staying competitive.
                At DigLip7, we specialize in helping brands rank higher in
                voice-first searches, ensuring your business is the answer when
                customers ask their devices for solutions. Whether you’re a
                local shop, an e-commerce giant, or a startup, our voice search
                optimization service unlocks new opportunities to connect with
                your audience—faster, smarter, and more effectively than ever
                before.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                Why settle for outdated Voice Search Optimization strategies when the future is
                voice-first? With DigLip7’s expertise, you’ll not only adapt to
                this seismic shift but lead the way, capturing the attention of
                voice search users across platforms like Google Assistant,
                Alexa, and Siri. Let’s dive into how our voice search
                optimization service can future-proof your brand and drive
                measurable growth
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
                { icon: Target, text: "5 Month Results" },
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

      {/* Difference Section */}
      <section className=" sm:py-16 lg: px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <FloatingElement delay={0.2}>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-teal-700 leading-tight mb-4 sm:mb-6">
                What Is Voice{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  Search Optimization?
                </span>
              </h2>
            </FloatingElement>
            {/* What Are UI/UX Design Services? */}
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
              Voice search optimization is the process of tailoring your website
              and digital presence to rank highly in results delivered by voice
              assistants like Google Assistant, Amazon Alexa, Apple Siri, and
              others. Unlike traditional typed searches, which often use short,
              keyword-heavy phrases, voice searches are conversational,
              question-based, and longer—think “What’s the best Italian
              restaurant near me?” instead of “Italian restaurant.” A voice
              search optimization service ensures that your business appears in
              these spoken results, especially in coveted “position zero”
              featured snippets.Over 50% of U.S. adults use voice search daily
              (Statista, 2024). 41% of voice search users say it feels like
              “talking to a friend” (Google, 2023). By 2025, nearly 75% of
              households in developed markets will own a smart speaker (Juniper
              Research).
            </p>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {[
                { number: "500%", label: "Traffic Increase" },
                { number: "95%", label: "Client Satisfaction" },
                { number: "24/7", label: "Support Available" },
                { number: "50+", label: "Team Experts" },
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
                  alt="ui/ux Service"
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
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative w-72 h-full sm:w-full sm:h-full lg:w-full lg:h-full">
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
                Why Choose DigLip7 for {" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-teal-600 to-[#c89d5a]">
                  Voice Search Optimization?
                </span>
              </h2>
            </FloatingElement>
            {/* Ready to Grow Your Business? */}
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
                  At{" "}
                  <span className="font-semibold text-teal-700">Diglip7</span>,
                  When it comes to voice search optimization services, DigLip7 stands out for all the right reasons:
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
                  Deep Voice Search Optimization Expertise{" "}
                  <span className="font-semibold text-[#c89d5a]">
                    Our team blends traditional Voice Search Optimization mastery with voice-first innovation to deliver results that last.
                  </span>
                  Customized Strategies
                  Whether you’re a local bakery or a global brand, we tailor our voice Voice Search Optimization to your niche and goals.
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
                  Data-Driven Approach
                  We use real-time analytics and transparent reporting to track progress and refine campaigns.
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
              Voice Search Optimization Tools & Techniques We Use
            </h2>
          </FloatingElement>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
            At DigLip7, we combine cutting-edge technology with proven strategies to deliver top-tier voice search optimization services. Our toolkit includes:
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
                <div className="bg-gradient-to-br from-teal-500 to-teal-900 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
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
              Our Voice Search Optimization Services at DigLip7
            </h2>
          </FloatingElement>
          <p className="text-gray-600 max-w-4xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed">
            At DigLip7, we offer a comprehensive voice search optimization service designed to make your business the first answer users hear. Here’s how we do it:
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
                    <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-teal-100 to-teal-50 rounded-full mb-4">
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
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs sm:text-sm text-gray-600"
                      >
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
                Types of Videos We Create at DigLip7
              </h2>
            </FloatingElement>
            <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
              Every business has a story, and we’ve got the perfect video to
              tell it. Here’s what our Video Marketing Service offers:
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
              This process is built for simplicity, effectiveness, and rapid
              growth.
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
          Don’t just take our word for it. See what our clients say about their SEO success with DigLip7.
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
                Ready to Optimize for the Future?
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white">
                  Contact DigLip7 Today
                </span>
              </h2>
            </FloatingElement>
            {/* Final Call-to-Action */}
            <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
              The voice search revolution is here, and your business can’t afford to be left behind. With DigLip7’s voice search optimization service, you’ll rank higher, reach more customers, and stay ahead of the competition in 2025 and beyond. Whether you’re targeting local shoppers or global audiences, we’ll craft a voice-enabled search strategy that delivers results.Schedule a free voice search audit today or contact us for a personalized consultation
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/contact">
                <motion.button
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-teal-700 font-semibold rounded-full shadow-xl hover:shadow-2xl hover:bg-gray-50 transition-all duration-300 text-sm sm:text-base"
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
                <span className="text-xs sm:text-sm">
                  No Long-term Contracts
                </span>
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

export default Voice;
