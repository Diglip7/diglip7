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
  CheckCircle,
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
import seo2 from "../images/seo01.png";
import seoImage from "../images/seo12.png"
import seo4 from "../images/seo11.png";
import aboutImg from "../images/seo13.png";

// Mock images - replace with your actual images
// const seoImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop";
// const seo2 = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop";
// const seo4 = "https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&h=600&fit=crop";
// const aboutImg = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop";


// added 

const stepss = [
  {
    id: 1,
    title: "Research",
    description:
      "Deep dive into your industry, competitors, and target keywords to uncover SEO opportunities.",
    icon: <Search className="w-8 h-8 text-blue-600" />,
  },
  {
    id: 2,
    title: "Strategy",
    description:
      "Develop a customized SEO strategy based on our research findings to maximize visibility and ROI.",
    icon: <Target className="w-8 h-8 text-blue-600" />,
  },
  {
    id: 3,
    title: "Implementation",
    description:
      "Execute on-page, off-page, and technical SEO improvements for measurable growth.",
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
      "Transformed a struggling tech startup into an industry leader through comprehensive SEO strategy.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80",
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
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80",
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
      "Improved patient acquisition and local SEO rankings for a healthcare provider using optimized content strategy.",
    image:
      "https://images.unsplash.com/photo-1581091870622-3a64a9a67b5d?auto=format&fit=crop&w=1000&q=80",
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
    title: "Accelerated Results",
    description:
      "We focus on driving measurable outcomes in just five months. Our streamlined process means you don't have to wait long to see a substantial increase in traffic.",
    icon: TrendingUp,
  },
  {
    title: "Data-Driven Insights",
    description:
      "Every decision is backed by real data. We analyze trends, monitor keyword performance, and use analytics to ensure your website ranks higher and attracts the right audience.",
    icon: BarChart3,
  },
  {
    title: "User-Friendly Approach",
    description:
      "Digital Marketing Services can seem technical, but we keep it simple. We provide clear explanations and easy-to-understand updates, so you always know what's happening with your site.",
    icon: Search,
  },
  {
    title: "Proven Success",
    description:
      "With 1000 projects completed in just 2 years, diglip7 has built a reputation for reliability and outstanding results. Our track record demonstrates our commitment to helping businesses grow online.",
    icon: Handshake,
  },
];

const solutions = [
  {
    title: "E-Commerce Digital Marketing Services",
    description:
      "Amplify your online sales with enhanced visibility for your store.",
    icon: ShoppingCart,
    points: [
      "Optimizing Product Pages: Keywords, descriptions, and CTAs.",
      "Improving Category Listings: Better search engine hierarchy.",
      "Enhancing User Experience: Fast, mobile-friendly design.",
    ],
  },
  {
    title: "Enterprise Digital Marketing Services",
    description:
      "Scale success for large websites with robust solutions.",
    icon: Building2,
    points: [
      "Advanced Keyword Strategies: In-depth research and optimization.",
      "Improving Crawlability: Technical SEO for efficient indexing.",
      "Scalable Solutions: Systems that grow with your business.",
    ],
  },
  {
    title: "Local SEO",
    description:
      "Dominate your neighborhood with targeted local visibility.",
    icon: MapPin,
    points: [
      "Optimize Google Business Profile: Easy discovery for locals.",
      "Enhance Local Listings: Consistent NAP and citations.",
      "Targeted Content Strategies: Engage your local audience.",
    ],
  },
  {
    title: "Link Building",
    description:
      "Strengthen your site's authority with quality backlinks.",
    icon: Link2,
    points: [
      "Data-Driven Outreach: AI-targeted high-authority sites.",
      "Strategic Content Placement: Earn natural links.",
      "Boosting Domain Authority: Improve rankings and trust.",
    ],
  },
  {
    title: "Answer Engine Optimization (AEO)",
    description:
      "Capture featured snippets for instant visibility.",
    icon: HelpCircle,
    points: [
      "Optimize Content Structure: Snippet-friendly formatting.",
      "FAQ & Structured Data: Boost zero-click search chances.",
      "Improve Visibility: Stand out in voice and AI searches.",
    ],
  },
  {
    title: "Voice Search Optimization",
    description:
      "Stay ahead with voice search-ready content.",
    icon: Mic,
    points: [
      "Natural Language Processing: Conversational queries.",
      "Content Reformatting: Long-tail, question-based content.",
      "Voice Assistant Compatibility: Optimized for Siri, Alexa.",
    ],
  },
];

const steps = [
  {
    number: "1",
    title: "Understand Your Business",
    description:
      "We begin with an in-depth consultation to learn about your goals, target audience, and current challenges.",
    icon: Target,
  },
  {
    number: "2",
    title: "Comprehensive Website Audit",
    description:
      "Our experts conduct a detailed analysis of your website to identify opportunities and areas for improvement.",
    icon: Search,
  },
  {
    number: "3",
    title: "Strategic Planning",
    description:
      "Using insights from our audit, we develop a customized, step-by-step SEO strategy that aligns with your business objectives.",
    icon: Zap,
  },
  {
    number: "4",
    title: "Implementation",
    description:
      "Our team gets to work—optimizing content, building links, and fine-tuning technical aspects to boost your search rankings.",
    icon: Globe,
  },
  {
    number: "5",
    title: "Continuous Monitoring",
    description:
      "We track performance using advanced analytics, providing regular updates and making adjustments as needed to ensure sustained growth.",
    icon: BarChart3,
  },
  {
    number: "6",
    title: "Transparent Reporting",
    description:
      "You receive clear, concise reports that explain our progress and the tangible results we're achieving for your business.",
    icon: Award,
  },
];

const faqs = [
  {
    question: "What is digital marketing, and why is it important for my business?",
    answer:
      "Digital marketing is the use of online channels to promote your products and services. It helps businesses increase visibility, attract potential customers, and boost sales."
  },
  {
    question: "How can Diglip7 help grow my business?",
    answer:
      "We specialize in SEO, content marketing, social media marketing, and local SEO to help expand your audience and connect with the right customers."
  },
  {
    question: "How long does it take to see results from digital marketing?",
    answer:
      "Typically, SEO results take 3-6 months, while content marketing and social media campaigns can generate leads almost immediately."
  },
  {
    question: "What industries does Diglip7 specialize in?",
    answer:
      "We serve a wide range of industries including healthcare, e-commerce, education, real estate, and more."
  },
  {
    question: "Why should I hire a digital marketing agency instead of doing it myself?",
    answer:
      "An agency brings expertise, resources, and tools that save time and deliver better results than handling marketing alone."
  },
  {
    question: "What is SEO, and why does my business need it?",
    answer:
      "SEO improves your website's visibility on search engines, driving organic traffic and increasing your chances of reaching customers."
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

function DigitalMarkit() {
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

  // SEO Packages
  const seoPackages = [
    {
      name: "Basic",
      price: "$799",
      duration: "/month",
      features: [
        "Keyword research (up to 20 keywords)",
        "On-page SEO optimization",
        "Monthly SEO audit",
        "Google My Business optimization",
        "Monthly reporting",
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
        "Keyword research (up to 50 keywords)",
        "On-page & Technical SEO",
        "Link building (5 high-quality links/month)",
        "Content optimization",
        "Local SEO optimization",
        "Bi-weekly reporting",
        "Priority support",
        "Competitor analysis",
      ],
      button: "Get Started",
    },
    {
      name: "Premium",
      price: "$2,999",
      duration: "/month",
      features: [
        "Unlimited keyword research",
        "Complete SEO optimization",
        "Comprehensive backlinks (10+/month)",
        "Custom dashboard & automation",
        "Weekly reporting & calls",
        "Dedicated SEO manager",
        "Custom strategy development",
      ],
      button: "Contact Sales",
    },
  ];

  // content marketing Services
  const ppcServices = [
    { icon: Search, title: "Keyword Research & Targeting", description: "Find and target the best keywords to maximize ROI." },
    { icon: DollarSign, title: "content marketing Campaign Management", description: "Full management of Google Ads, Bing Ads, and social campaigns." },
    { icon: Settings, title: "Bid Management & Optimization", description: "Optimize bids to get the most clicks and conversions within budget." },
    { icon: FileText, title: "Ad Copywriting & Creative Design", description: "Engaging ads that capture attention and drive results." },
    { icon: Target, title: "Audience & Demographic Targeting", description: "Reach the right audience based on location, interests, and demographics." },
    { icon: RefreshCw, title: "Remarketing & Retargeting", description: "Re-engage visitors who didn’t convert the first time." },
  ];

  const [active, setActive] = useState("TechStart Inc.");
  const study = caseStudies[active];




  return (
    <div className="overflow-x-hidden  w-full h-screen">
      {/* Hero Section with Parallax */}
      <section className="relative w-full h-screen flex flex-col lg:flex-row items-center justify-center overflow-hidden">

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

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 md:px-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring" }}
            className="mb-6"
          >
            <Sparkles className="w-16 h-16 sm:w-20 sm:h-20 text-[#c89d5a] mx-auto mb-4" />
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-teal-700 mb-4 sm:mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Grow Your Business with{" "}
            <span className="text-transparent bg-clip-text bg-[#c89d5a] to-teal-300">
              Digital Marketing Services
            </span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-teal-700 max-w-2xl lg:max-w-4xl mx-auto mb-6 sm:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            Smart strategies, impactful campaigns, and real results for your brand.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a href="/contact">
              <motion.button

                className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white text-lg font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >

                Get Started
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </a>
          </motion.div>
        </div>
        <ParallaxBg>
          <div className=" inset-0 w-full h-full pt-20">
            <img
              src={seo2}
              alt="Digital Marketing Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 "></div>
          </div>
        </ParallaxBg>
      </section>

      {/* About Section with 3D Cards */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12 px-4 sm:px-6 lg:px-8">
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
                  alt="SEO Service"
                  className="w-full h-full sm:h-80 lg:h-96 object-cover transform transition-transform duration-700 hover:scale-110"
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
                Boost Your Website's Traffic with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  AI-Powered Digital Marketing Services
                </span>
              </h2>
            </FloatingElement>

            <div className="space-y-4 sm:space-y-6">
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                Accelerate Your Growth in 5 Months | Triple Your Website Traffic In
                the competitive online landscape, every click matters. With Diglip7's
                AI-powered SEO service, you can elevate your website's performance,
                drive high-quality traffic, and secure top rankings—all in just five
                months.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                We leverage advanced artificial intelligence tools and proven,
                data-driven strategies to transform your website into a traffic
                magnet. Read on to discover how our simple, effective approach can
                revolutionize your digital presence.
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
      <section className="bg-gradient-to-br from-teal-50 to-[#c89d5a]/10 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
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
                The diglip7 Difference:{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  Why Our Digital Marketing Services
                </span>
              </h2>
            </FloatingElement>

            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
              At diglip7, we blend cutting-edge technology with practical expertise
              to create an SEO strategy that truly delivers results. Our
              AI-powered system continuously analyzes your website's performance,
              identifies the best opportunities for growth, and implements
              optimizations that make a difference.
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
            <Card3D className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-full lg:h-full">
              <div className="w-full h-full">
                <img
                  src={seo4}
                  alt="SEO Service"
                  className="rounded-2xl shadow-2xl w-full h-full sm:h-80 lg:h-full object-cover transform transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-[#c89d5a]/20 rounded-2xl"></div>
              </div>
            </Card3D>
          </motion.div>
        </div>
      </section>

      {/* Results Section with Custom Shape */}
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
                Driving Real Results with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-teal-600 to-[#c89d5a]">
                  Diglip7's Digital Marketing
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
                  tailored digital marketing strategies that deliver real results. Our
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
                  <span className="font-semibold text-[#c89d5a]">SEO, content marketing, social media marketing, and local SEO</span>,
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
                  alt="About Diglip7"
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
              What Sets Us Apart?
            </h2>
          </FloatingElement>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
            At Diglip7, we blend cutting-edge technology with practical expertise
            to create an SEO strategy that truly delivers results. Our AI-powered
            system continuously analyzes your website's performance, identifies
            the best opportunities for growth, and implements optimizations that
            make a real difference.
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
                <div className="bg-gradient-to-br from-[#c89d5a] to-[#c89d5a]/80 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
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
              Comprehensive Digital Marketing  Solutions
            </h2>
          </FloatingElement>
          <p className="text-gray-600 max-w-4xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed">
            Deep Dive Into Our Comprehensive SEO Solutions. Our suite of SEO services is designed to cater
            to various business needs, from online stores to large enterprises and local businesses.
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
                Our Proven Process: How We Achieve Success
              </h2>
            </FloatingElement>
            <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
              Our streamlined process is designed to deliver results efficiently and
              transparently. Here's how we work:
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
                        className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-teal-600 to-[#c89d5a] text-white font-bold text-sm sm:text-base flex-shrink-0"
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
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-600 to-[#c89d5a] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
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
                Ready to Transform Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white">
                  Digital Presence?
                </span>
              </h2>
            </FloatingElement>

            <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Join 1000+ businesses that have accelerated their growth with Diglip7.
              Let's create your success story together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-teal-700 font-semibold rounded-full shadow-xl hover:shadow-2xl hover:bg-gray-50 transition-all duration-300 text-sm sm:text-base"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Free Consultation
                <Sparkles className="inline-block ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>

              <motion.button
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-teal-700 transition-all duration-300 text-sm sm:text-base"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View Our Portfolio
                <ArrowRight className="inline-block ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
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


export default DigitalMarkit