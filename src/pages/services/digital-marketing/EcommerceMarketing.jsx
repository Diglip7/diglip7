import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "../../../components/SEO";
import {
  TrendingUp,
  BarChart3,
  Search,
  Handshake,
  DollarSign,
  RefreshCw,
  Eye,
  ShoppingCart,
  Building2,
  MapPin,
  Link2,
  HelpCircle, Star,
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
  PlayCircle,
  BarChart,
  Settings,
  FileText,
  Quote,
} from "lucide-react";
import seo2 from "../../../images/e-com00.jpeg";
import seoImage from "../../../images/e-cm1.png";
import seo4 from "../../../images/e-cm2.png";
import aboutImg from "../../../images/e-cm3.png";

import ppc1 from "../../../images/e-com003.png";
import ppc2 from "../../../images/e-com004.png";
import ppc3 from "../../../images/e-com002.jpeg";
import ppc4 from "../../../images/e-com001.jpeg";

// Mock images - replace with your actual images
// const seoImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop";
// const seo2 = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop";
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
    text: `“DigLip 7 helped our online store increase sales and improve user experience. Their team is professional, creative, and results-driven.”`,
    link: "https://techstart.io",
  },
  {
    name: "Michael Chen",
    role: "EcomShop",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    text: `“Thanks to DigLip 7, our e-commerce traffic doubled, and conversions improved significantly. Their strategies are data-driven and highly effective.”`,
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "HealthPlus Clinic",
    image: "https://randomuser.me/api/portraits/women/49.jpg",
    text: `“The DigLip 7 team optimized our online store perfectly. Our customers enjoy a seamless shopping experience, and our revenue has grown steadily.”`,
  },
  {
    name: "Sonia L., India",
    role: "Thompson Law Firm",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
    text: `“Working with DigLip 7 transformed our e-commerce business. Their solutions increased engagement, boosted sales, and delivered measurable ROI.”`,
  },
];

const stepss = [
  {
    id: 1,
    title: "Research",
    description:
      "Deep dive into your industry, competitors, and target keywords to uncover E-commerce opportunities.",
    icon: <Search className="w-8 h-8 text-blue-600" />,
  },
  {
    id: 2,
    title: "Strategy",
    description:
      "Develop a customized E-commerce strategy based on our research findings to maximize visibility and ROI.",
    icon: <Target className="w-8 h-8 text-blue-600" />,
  },
  {
    id: 3,
    title: "Implementation",
    description:
      "Execute on-page, off-page, and technical E-commerce improvements for measurable growth.",
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
    title: "Customer browsing online store on laptop and smartphone with secure checkout",
    industry: "Technology • 6 months",
    description:
      "Transformed a struggling tech startup into an industry leader through comprehensive E-commerce strategy.",
    image:
      ppc1,
    stats: [
      {
        icon: <TrendingUp className="w-5 h-5 text-teal-600" />,
        label: "Traffic",
        value: "+250%",
      },
      {
        icon: <Eye className="w-5 h-5 text-blue-600" />,
        label: "Visibility",
        value: "+180%",
      },
      {
        icon: <Users className="w-5 h-5 text-purple-600" />,
        label: "Leads",
        value: "+320%",
      },
      {
        icon: <DollarSign className="w-5 h-5 text-orange-600" />,
        label: "Revenue",
        value: "+150%",
      },
    ],
  },
  EcoShop: {
    title: "E-commerce business growth with product listings, orders, and revenue dashboard",
    industry: "E-commerce • 8 months",
    description:
      "Boosted organic traffic and conversions for a sustainable online store through targeted keyword optimization.",
    image:
      ppc2,
    stats: [
      {
        icon: <TrendingUp className="w-5 h-5 text-teal-600" />,
        label: "Traffic",
        value: "+300%",
      },
      {
        icon: <Eye className="w-5 h-5 text-blue-600" />,
        label: "Visibility",
        value: "+210%",
      },
      {
        icon: <Users className="w-5 h-5 text-purple-600" />,
        label: "Leads",
        value: "+270%",
      },
      {
        icon: <DollarSign className="w-5 h-5 text-orange-600" />,
        label: "Revenue",
        value: "+190%",
      },
    ],
  },
  "HealthPlus Clinic": {
    title: "Creative graphic of online shopping experience with delivery and payment icons",
    industry: "Healthcare • 5 months",
    description:
      "Improved patient acquisition and local E-commerce rankings for a healthcare provider using optimized content strategy.",
    image:
      ppc3,
    stats: [
      {
        icon: <TrendingUp className="w-5 h-5 text-teal-600" />,
        label: "Traffic",
        value: "+220%",
      },
      {
        icon: <Eye className="w-5 h-5 text-blue-600" />,
        label: "Visibility",
        value: "+200%",
      },
      {
        icon: <Users className="w-5 h-5 text-purple-600" />,
        label: "Leads",
        value: "+250%",
      },
      {
        icon: <DollarSign className="w-5 h-5 text-orange-600" />,
        label: "Revenue",
        value: "+170%",
      },
    ],
  },
};
// added end

const advantages = [
  {
    title: "ROI-Driven Strategies",
    description:
      "We focus on results—more traffic, higher sales, better profits.",
    icon: TrendingUp,
  },
  {
    title: "Custom Solutions",
    description:
      "No cookie-cutter plans—your store gets a strategy built for you.",
    icon: BarChart3,
  },
  {
    title: "Transparent Reporting",
    description: "Monthly insights keep you in the loop on every win.",
    icon: Search,
  },
  {
    title: "Client-First Approach",
    description: "Your success is our priority, every step of the way.",
    icon: Handshake,
  },
];

const solutions = [
  {
    title: "E-commerce for E-Commerce Websites",
    description:
      "Ranking on Google is critical for online stores, not just blogs.",
    icon: ShoppingCart,
    points: [
      "Our e-commerce E-commerce optimizes product pages, categories,",
      "handmade candles online” to drive organic traffic.",
      "We analyze your market, pinpoint opportunities,",
    ],
  },
  {
    title: "Google & Social Media Ads for Online Stores",
    description:
      "We create laser-focused campaigns to promote your products and increase e-commerce sales.",
    icon: Building2,
    points: [
      "Need fast results? Our e-commerce E-commerce expertise spans",
      "Google Ads, Facebook, Instagram, and TikTok. ",
      "we ensure your GBP isn’t just visible—it’s irresistible. With DigLip7’s expertise",
    ],
  },
  {
    title: "Email & SMS Marketing Campaigns",
    description:
      "Turn one-time buyers into repeat customers with automated email flows",
    icon: MapPin,
    points: [
      "think welcome series, cart recovery, and personalized offers.",
      "SMS adds a direct touch for time-sensitive promotions.",
      "Targeted Content Strategies: Engage your local audience.",
    ],
  },
  {
    title: "Conversion Rate Optimization (CRO)",
    description: "Why settle for clicks when you can get sales?",
    icon: Link2,
    points: [
      "Our CRO tactics tweak your site’s design, copy, ",
      "checkout process to maximize conversions.",
      "DigLip7, your online reputation shines as bright as Marine Drive at night.",
    ],
  },
  {
    title: "Analytics and Performance Tracking",
    description: "Data drives decisions.",
    icon: HelpCircle,
    points: [
      "We track every metric—traffic, bounce rates, sales",
      "deliver clear reports to show how our DigLip7 e-commerce solutions are working.",
      "fixing broken links, and ensuring your site is crawlable by Google.",
    ],
  },
  {
    title: "Content Strategy & Creative Ads",
    description: "Great content sells.",
    icon: Mic,
    points: [
      "From blog posts that rank to eye-catching video ads",
      "we craft a content strategy that builds trust and drives action.",
      "These links tell Google your business is a Mumbai staple, boosting your rankings and credibility with our Local E-commerce services.",
    ],
  },
];

const steps = [
  {
    number: "1",
    title: "Beat the Competition",
    description:
      "Digital marketing for online stores helps you rank above competitors and capture market share.",
    icon: Target,
  },
  {
    number: "2",
    title: "Reach Ready-to-Buy Customers",
    description:
      "Targeted strategies like e-commerce E-commerce put your products in front of people searching right now.",
    icon: Search,
  },
  {
    number: "3",
    title: "Boost Brand Loyalty",
    description: "Email and content marketing keep customers coming back.",
    icon: Zap,
  },
  {
    number: "4",
    title: "Maximize ROI",
    description:
      "Conversion optimization for e-commerce ensures every dollar spent delivers results.",
    icon: Globe,
  },
  {
    number: "5",
    title: "Adapt to Trends",
    description:
      "With mobile shopping and voice search on the rise, a solid marketing plan keeps you ahead.",
    icon: BarChart3,
  },
  {
    number: "6",
    title: "Custom-Built Sites",
    description: "Unique platforms? No problem—we adapt.",
    icon: Award,
  },
];

const faqs = [
  {
    question: "How do I get started with DigLip7’s e-commerce services?",
    answer:
      "Simple—reach out for a free consultation. We’ll audit your store and craft a custom plan.",
  },
  {
    question: "Can DigLip7 help a brand-new online store?",
    answer:
      "Absolutely! We specialize in launching startups with online store promotion that builds momentum fast.",
  },
  {
    question: "Do I need both E-commerce and paid ads?",
    answer:
      "They’re a perfect pair. E-commerce grows organic traffic over time, while ads deliver instant wins. We balance both for maximum impact.",
  },
  {
    question: "How soon can I see results?",
    answer:
      "Paid ads can show results in days, while e-commerce E-commerce and CRO take 3–6 months to peak. With DigLip7, you’ll see progress every step.",
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

function E_commerce() {
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
  const [seoStats, setSeoStats] = useState({
    traffic: 0,
    visibility: 0,
    leads: 0,
    revenue: 0,
  });
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

  // E-commerce Packages
  const seoPackages = [
    {
      name: "Basic",
      price: "$799",
      duration: "/month",
      features: [
        "Store audit & optimization (Shopify, WooCommerce, etc.)",
        "Product listing optimization (up to 25 products)",
        "Basic ad campaign setup (Google Shopping / Meta Ads)",
        "Email remarketing setup (abandoned cart recovery)",
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
        "Advanced store optimization & conversion tracking",
        "Product feed management (up to 100 products)",
        "Google, Meta & Instagram Ads campaigns",
        "Dynamic retargeting & upsell automation",
        "Bi-weekly performance reporting",
        "Priority support",
        "Competitor & market analysis",
        "Sales funnel optimization",
      ],
      button: "Get Started",
    },
    {
      name: "Premium",
      price: "$2,999",
      duration: "/month",
      features: [
        "Full-scale e-commerce growth strategy",
        "Multi-platform ad campaigns (Google, Meta, Amazon, TikTok)",
        "Unlimited product feed optimization",
        "Custom landing pages for seasonal campaigns",
        "Advanced automation & CRM integration",
        "Weekly strategy calls & reporting",
        "Dedicated e-commerce strategist",
        "Brand expansion & international scaling support",
      ],
      button: "Contact Sales",
    },
  ];

  // E-commerce Services
  const ppcServices = [
    {
      icon: Search,
      title: "Keyword Research & Targeting",
      description: "Find and target the best keywords to maximize ROI.",
    },
    {
      icon: DollarSign,
      title: "E-commerce Campaign Management",
      description:
        "Full management of Google Ads, Bing Ads, and social campaigns.",
    },
    {
      icon: Settings,
      title: "Bid Management & Optimization",
      description:
        "Optimize bids to get the most clicks and conversions within budget.",
    },
    {
      icon: FileText,
      title: "Ad Copywriting & Creative Design",
      description: "Engaging ads that capture attention and drive results.",
    },
    {
      icon: Target,
      title: "Audience & Demographic Targeting",
      description:
        "Reach the right audience based on location, interests, and demographics.",
    },
    {
      icon: RefreshCw,
      title: "Remarketing & Retargeting",
      description: "Re-engage visitors who didn’t convert the first time.",
    },
  ];

  const [active, setActive] = useState("TechStart Inc.");
  const study = caseStudies[active];


  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % testimonials.length);
  const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);

  const testimonial = testimonials[index];

  // Dynamically generate schemas for E-Commerce Marketing Service, Offer Catalog, and FAQs
  const ecommerceSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "E-Commerce Marketing",
      provider: {
        "@type": "Organization",
        name: "DigLip7",
        url: "https://diglip7.com",
        logo: "https://diglip7.com/favicon-32x32.png",
      },
      areaServed: "Worldwide",
      description:
        "DigLip7 offers full-service e-commerce marketing including store optimization, product feed management, paid advertising (Google, Meta, TikTok), email and SMS automation, and conversion rate optimization for online stores.",
      url: "https://diglip7.com/digital-market/e-commerce-marketing",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "E-Commerce Marketing Packages",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Basic E-Commerce Package" },
            price: "799",
            priceCurrency: "USD",
            priceSpecification: { "@type": "UnitPriceSpecification", billingDuration: "P1M" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Pro E-Commerce Package" },
            price: "1499",
            priceCurrency: "USD",
            priceSpecification: { "@type": "UnitPriceSpecification", billingDuration: "P1M" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Premium E-Commerce Package" },
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
    <div className="overflow-x-hidden bg-white w-full">
      <SEO
        title="E-Commerce Marketing Services That Drive Sales | DigLip7"
        description="Grow your online store with DigLip7's e-commerce marketing — SEO, paid ads, email/SMS automation & CRO built to increase traffic and conversions."
        canonical="https://diglip7.com/digital-market/e-commerce-marketing"
        ogImage="https://diglip7.com/assets/e-com00-CDcSddQ2.jpeg"
        ogType="website"
        keywords="e-commerce marketing, ecommerce SEO, online store advertising, Shopify marketing, WooCommerce marketing, product feed management, DigLip7"
        schema={ecommerceSchemas}
      />
      {/* Hero Section with Parallax */}
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
          {/* Left Content Section - Increased Width */}
          <div className="w-full lg:w-[58%] text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-gray-900">Proven E-Commerce Marketing Strategies </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                That Drive Sales and Business Growth
              </span>
            </h1>
            <p className="text-gray-700 text-sm sm:text-base lg:text-lg mt-4 mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              At <span className="font-semibold text-blue-700">DigLip7</span>, discover how our tailored e-commerce marketing solutions boost online sales, increase qualified website traffic, and enhance customer engagement with measurable ROI.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3 text-gray-800 text-xs sm:text-sm mb-6 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2">🚀 Boost organic traffic</div>
              <div className="flex items-center gap-2">📈 Improve search ranking</div>
              <div className="flex items-center gap-2">🎯 Target right audience</div>
              <div className="flex items-center gap-2">📊 Transparent reporting</div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a href="/contact" className="inline-block">
                <motion.button
                  className="group px-7 sm:px-9 py-3.5 sm:py-4 bg-gradient-to-r from-teal-700 to-teal-900 text-white text-base sm:text-lg font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </a>
            </div>
          </div>

          {/* Right Section - Animated Image */}
          <motion.div
            className="w-full lg:w-[42%] flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={seo2}
              alt="Modern e-commerce website dashboard with online sales analytics and growth charts"
              className="rounded-2xl shadow-xl w-full max-w-md lg:max-w-none h-auto object-cover"
            />
          </motion.div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full"
              style={{
                left: `${(i * 7) % 100}%`,
                top: `${(i * 13) % 100}%`,
              }}
              animate={{
                y: [0, -60, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + (i % 3),
                repeat: Infinity,
                delay: (i % 5) * 0.5,
              }}
            />
          ))}
        </div>
      </div>

      <div className="bg-white overflow-hidden">
        {/* Why E-commerce Section */}
        <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 lg:gap-12 mb-16 sm:mb-20">
            <div className="w-full md:w-1/2 flex justify-center overflow-hidden rounded-2xl">
              <motion.img
                src={ppc4}
                alt="Digital shopping cart and mobile commerce concept illustration"
                className="rounded-2xl shadow-lg w-full h-auto object-cover"
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
            <div className="w-full md:flex-1 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-snug">
                Why E-Commerce is the Best Investment for Your Business
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-5">
                E-commerce lets your business reach a global audience, operate 24/7, and consistently increase sales. With <span className="font-semibold text-blue-700">DigLip7</span>'s measurable insights and optimized campaigns, it delivers higher ROI, scalable growth, and long-term success.
              </p>
              <ul className="text-gray-800 space-y-2.5 text-left mx-auto md:mx-0 max-w-sm md:max-w-none text-sm sm:text-base">
                <li className="flex items-center gap-2">✅ Immediate Results & Fast Customer Reach</li>
                <li className="flex items-center gap-2">✅ Highly Targeted Audience Marketing</li>
                <li className="flex items-center gap-2">✅ Full Budget Control & Scalability</li>
                <li className="flex items-center gap-2">✅ Measurable ROI with Live Analytics</li>
                <li className="flex items-center gap-2">✅ Omnichannel Brand Exposure</li>
              </ul>
            </div>
          </div>

          {/* Process Section */}
          <div className="bg-gray-50/70 py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-16 text-center rounded-3xl shadow-sm border border-gray-100 overflow-hidden max-w-7xl mx-auto">
            {/* Header */}
            <div className="max-w-4xl mx-auto mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                Our Proven E-Commerce Process
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mt-3 leading-relaxed">
                At DigLip7, our e-commerce process is designed to drive sales and maximize ROI from product analysis to store optimization and scale.
              </p>
            </div>

            {/* Steps Section */}
            <div className="relative max-w-6xl mx-auto">
              {/* Blue Line (Desktop only) */}
              <div className="hidden md:block absolute top-10 left-0 w-full border-t-4 border-blue-100 z-0"></div>

              {/* Steps */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 relative z-10">
                {stepss.map((step, index) => (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center p-4 bg-white rounded-2xl shadow-sm md:shadow-none md:bg-transparent"
                  >
                    {/* Icon Circle */}
                    <div className="relative flex items-center justify-center w-16 h-16 rounded-full border-4 border-blue-300 bg-white shadow-md mb-4 flex-shrink-0">
                      {step.icon}
                      <span className="absolute -top-2 -right-2 bg-teal-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full shadow">
                        {step.id}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-semibold text-gray-900 text-base sm:text-lg">
                      {step.title}
                    </h3>
                    {/* Description */}
                    <p className="text-gray-600 text-xs sm:text-sm mt-2 leading-relaxed max-w-xs sm:max-w-[200px] mx-auto">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* E-commerce Success Stories */}
          <div className="py-12 sm:py-16 text-center max-w-7xl mx-auto overflow-hidden">
            <div className="max-w-4xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                Proven E-Commerce Success Stories
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mt-3">
                Discover how DigLip7’s e-commerce strategies helped online brands achieve higher revenue, sustainable conversions, and customer loyalty.
              </p>

              {/* Tabs */}
              <div className="flex justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 flex-wrap">
                {Object.keys(caseStudies).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActive(key)}
                    className={`px-5 sm:px-7 py-2.5 sm:py-3.5 text-sm sm:text-base font-semibold rounded-full shadow-md transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                      active === key
                        ? "bg-gradient-to-r from-teal-600 to-teal-700 text-white shadow-teal-500/30"
                        : "bg-white text-gray-700 hover:bg-teal-50 border border-gray-200"
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
              className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 lg:gap-10 text-left bg-gray-50/60 p-6 sm:p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm"
            >
              {/* Left: Image & Info */}
              <div className="w-full md:flex-1">
                <img
                  src={study.image}
                  alt={study.title}
                  className="rounded-2xl shadow-md w-full h-auto object-cover max-h-80 md:max-h-96"
                />
              </div>

              {/* Right: Stats */}
              <div className="w-full md:flex-1 space-y-4">
                <h3 className="font-semibold text-gray-900 text-xl sm:text-2xl">
                  {study.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {study.description}
                </p>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full pt-2">
                  {study.stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl border border-gray-100 p-4 flex flex-col justify-center items-start shadow-sm"
                    >
                      <div className="flex items-center gap-2">{stat.icon}</div>
                      <p className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">
                        {stat.value}
                      </p>
                      <p className="text-gray-500 text-xs sm:text-sm">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* E-commerce Services Section */}
        <div className="bg-gray-50/50 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 xl:px-12 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Our E-Commerce Services
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
              Comprehensive e-commerce marketing solutions designed to drive targeted traffic and maximize lifetime value.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-10">
              {ppcServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-xl p-6 transition-all duration-300 cursor-pointer border border-gray-100 flex flex-col items-center text-center"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex justify-center mb-4 w-14 h-14 rounded-full bg-teal-50 items-center">
                    <service.icon className="text-teal-600 w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* E-commerce Pricing Section */}
        <div className="bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 xl:px-12 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              E-Commerce Packages Designed for Every Stage
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto mb-10">
              Choose the perfect E-commerce package that fits your business needs and budget.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
              {seoPackages.map((pkg, index) => (
                <motion.div
                  key={index}
                  className={`rounded-2xl p-6 sm:p-8 shadow-lg transition-all flex flex-col justify-between ${
                    pkg.popular
                      ? "border-2 border-teal-500 bg-white ring-2 ring-teal-500/20"
                      : "bg-white border border-gray-100"
                  }`}
                  whileHover={{ y: -5 }}
                >
                  <div>
                    <div className="mb-4 flex justify-between items-center">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                        {pkg.name}
                      </h3>
                      {pkg.popular && (
                        <span className="text-xs bg-teal-100 text-teal-800 px-3 py-1 rounded-full font-semibold">
                          🌟 Most Popular
                        </span>
                      )}
                    </div>
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-3xl sm:text-4xl font-extrabold text-teal-800">
                        {pkg.price}
                      </span>
                      <span className="text-gray-500 text-sm">{pkg.duration}</span>
                    </div>
                    <ul className="text-gray-700 text-xs sm:text-sm space-y-2.5 mb-6 text-left">
                      {pkg.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-teal-600 flex-shrink-0">✓</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a href="/contact" className="w-full block mt-auto">
                    <button className="w-full py-3 px-6 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-semibold rounded-full shadow-md hover:shadow-teal-500/40 transition-all duration-300 text-sm sm:text-base cursor-pointer">
                      {pkg.button}
                    </button>
                  </a>
                </motion.div>
              ))}
            </div>

            <p className="mt-10 text-gray-500 text-xs sm:text-sm">
              All plans include a 30-day money-back guarantee. Need a custom plan?{" "}
              <a href="/contact" className="text-teal-600 font-semibold underline">
                Contact us
              </a>.
            </p>
          </div>
        </div>
      </div>

      {/* About Section with 3D Cards */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gray-50/50 overflow-hidden">
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12 px-4 sm:px-6 lg:px-8">
          {/* Left Image with 3D effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:flex-1"
          >
            <Card3D className="w-full">
              <div className="relative overflow-hidden rounded-2xl shadow-xl border border-gray-100">
                <img
                  src={seoImage}
                  alt="E-commerce Marketing DigLip7"
                  className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
                />
              </div>
            </Card3D>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:flex-1 text-left"
          >
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-700 mb-4 sm:mb-6 leading-snug">
                E-Commerce Marketing{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  Services by DigLip7
                </span>
              </h2>
            </FloatingElement>

            <div className="space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
              <p>
                Running an online store in 2025 is no small feat. With millions of e-commerce businesses vying for attention, how do you ensure your Shopify store, WooCommerce site, or D2C brand stands out?
              </p>
              <p>
                The answer lies in a tailored, data-driven E-Commerce Marketing Service—and that’s where DigLip7 comes in. We combine paid advertising, SEO, conversion rate optimization, and automated retargeting to maximize your store's performance.
              </p>
            </div>

            <motion.div
              className="mt-6 sm:mt-8 flex flex-wrap gap-2.5 sm:gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              {[
                { icon: Users, text: "1000+ Projects" },
                { icon: Award, text: "2+ Years Experience" },
                { icon: Target, text: "5 Month Results" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-2 bg-gradient-to-r from-teal-50 to-[#c89d5a]/10 px-3.5 py-2 rounded-full border border-teal-100"
                  whileHover={{ scale: 1.05 }}
                >
                  <item.icon className="w-4 h-4 text-teal-700" />
                  <span className="text-xs sm:text-sm font-medium text-gray-700">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Difference Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <motion.div
            className="w-full lg:flex-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <FloatingElement delay={0.2}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-teal-700 leading-tight mb-4 sm:mb-6">
                Boost Your Online{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  Store Sales
                </span>
              </h2>
            </FloatingElement>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              E-commerce marketing is all about driving traffic, boosting conversions, and growing your revenue through strategic digital tactics. Whether you’re selling handmade goods, fashion, electronics, or subscription products, DigLip7 crafts custom campaigns that scale your business.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-5">
              {[
                { number: "500%", label: "Traffic Increase" },
                { number: "95%", label: "Client Satisfaction" },
                { number: "24/7", label: "Support Available" },
                { number: "50+", label: "Team Experts" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="text-center p-3 sm:p-5 bg-gray-50/70 rounded-xl border border-gray-100 shadow-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-teal-700">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:flex-1 flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card3D className="w-full max-w-md lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                <img
                  src={seo4}
                  alt="E-commerce Marketing Solutions"
                  className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
                />
              </div>
            </Card3D>
          </motion.div>
        </div>
      </section>

      {/* Results Section with Custom Shape */}
      <section className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-[420px] aspect-[4/5] mx-auto">
              <Card3D className="w-full h-full">
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-teal-50">
                  <img
                    src={aboutImg}
                    alt="About DigLip7 E-commerce"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </Card3D>

              {/* Floating elements around the image */}
              <motion.div
                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-r from-teal-600 to-[#c89d5a] rounded-full flex items-center justify-center shadow-lg"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
              </motion.div>

              <motion.div
                className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-9 h-9 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center border border-teal-100"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <FloatingElement delay={0.3}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-teal-700 leading-tight mb-6">
                Why E-Commerce Businesses Need{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-teal-600 to-[#c89d5a]">
                  Marketing Services in 2025
                </span>
              </h2>
            </FloatingElement>

            <div className="space-y-4 sm:space-y-5">
              <motion.div
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                <CheckCircle className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  <strong className="text-teal-800">Beat the Competition:</strong> Digital marketing for online stores helps you rank above competitors, capture high-intent searchers, and expand market share.
                </p>
              </motion.div>

              <motion.div
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <CheckCircle className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  <strong className="text-teal-800">Reach Ready-to-Buy Customers:</strong> Targeted Google Shopping and Meta ad campaigns put your products in front of buyers actively searching right now.
                </p>
              </motion.div>

              <motion.div
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <CheckCircle className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  <strong className="text-teal-800">Maximize Lifetime ROI:</strong> Automated email flows, SMS retention, and conversion rate optimization ensure every ad dollar delivers repeat revenue.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Advantages Section with 3D Cards */}
      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <motion.div
          className="text-center mb-8 sm:mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <FloatingElement>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-700 mb-3 sm:mb-4">
              Why Choose DigLip7 for Your E-Commerce Marketing?
            </h2>
          </FloatingElement>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            When it comes to scaling online sales, experience and tactical precision matter. Here’s why we’re the trusted partner for e-commerce brands:
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 max-w-7xl mx-auto">
          {advantages.map((adv, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card3D className="h-full">
                <div className="bg-gradient-to-br from-teal-700 to-teal-900 p-5 sm:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col text-white">
                  <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-full mb-4 mx-auto">
                    <adv.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold mb-2.5 text-center">
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
      <section className="bg-gray-50/50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <motion.div
          className="text-center mb-8 sm:mb-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <FloatingElement>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-700 mb-3 sm:mb-4">
              Core E-Commerce Marketing Services Offered by DigLip7
            </h2>
          </FloatingElement>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Our full-funnel E-Commerce Marketing Service covers every angle of store growth, conversion, and retention.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-7xl mx-auto">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card3D className="h-full">
                <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-500 h-full flex flex-col">
                  <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-teal-100/70 rounded-full mb-4">
                    <solution.icon className="w-6 h-6 sm:w-7 sm:h-7 text-teal-700" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-xs sm:text-sm flex-grow leading-relaxed">
                    {solution.description}
                  </p>
                  <ul className="space-y-2 pt-2 border-t border-gray-200/60">
                    {solution.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs sm:text-sm text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
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
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 max-w-3xl mx-auto">
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-700 mb-3">
                Why E-Commerce Businesses Need Marketing Services in 2025
              </h2>
            </FloatingElement>
            <p className="text-xs sm:text-sm sm:text-base text-gray-600 leading-relaxed">
              With thousands of online storefronts launching weekly, a solid marketing partner ensures consistent store visibility, lower acquisition costs, and higher customer lifetime value.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card3D className="h-full">
                  <div className="bg-white shadow-md rounded-2xl p-5 sm:p-6 border border-gray-100 hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                    <div className="flex items-start gap-3.5 mb-3.5">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-teal-600 to-teal-900 text-white font-bold text-sm flex-shrink-0">
                        {step.number}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                          {step.title}
                        </h3>
                        <div className="flex items-center gap-2">
                          <step.icon className="w-4 h-4 text-teal-600" />
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed flex-grow">
                      {step.description}
                    </p>
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 sm:mt-12 text-center">
            <p className="text-sm sm:text-base text-gray-700 mb-4">
              This process is built for simplicity, effectiveness, and rapid store growth.
            </p>
            <a href="/contact" className="inline-block">
              <motion.button
                className="px-6 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-teal-600 to-teal-900 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Journey
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-20 text-center relative overflow-hidden">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Trusted by Businesses Worldwide
        </h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto mb-8 sm:mb-10">
          Don’t just take our word for it. See what our e-commerce clients say about scaling with DigLip7.
        </p>

        <motion.div
          key={testimonial.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 relative border border-gray-100"
        >
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="text-yellow-400 fill-yellow-400" size={18} />
            ))}
          </div>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl italic mb-6 leading-relaxed">{testimonial.text}</p>
          <div className="flex flex-col items-center">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover mb-3 border-2 border-teal-500"
            />
            <h3 className="font-semibold text-gray-900 text-base sm:text-lg">{testimonial.name}</h3>
            <p className="text-xs sm:text-sm text-gray-500">{testimonial.role}</p>
            {testimonial.link && (
              <a
                href={testimonial.link}
                className="text-teal-600 text-xs sm:text-sm mt-1 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {testimonial.role}
              </a>
            )}
          </div>
        </motion.div>

        <div className="flex justify-center items-center mt-6 sm:mt-8 gap-3">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="w-8 h-8 rounded-full bg-gray-200 hover:bg-teal-500 hover:text-white transition-all flex items-center justify-center text-gray-600 text-xs cursor-pointer"
          >
            ←
          </button>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 rounded-full cursor-pointer transition-all duration-300 ${
                index === i ? "bg-teal-600 w-6" : "bg-gray-300 w-2.5"
              }`}
            ></button>
          ))}
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="w-8 h-8 rounded-full bg-gray-200 hover:bg-teal-500 hover:text-white transition-all flex items-center justify-center text-gray-600 text-xs cursor-pointer"
          >
            →
          </button>
        </div>

        {/* Floating small cards */}
        <div className="hidden md:flex justify-center gap-4 lg:gap-6 mt-10 flex-wrap">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              onClick={() => setIndex(i)}
              className={`bg-white shadow-md p-4 rounded-xl w-60 text-left border cursor-pointer transition-all ${
                i === index ? "border-teal-500 ring-2 ring-teal-500/20" : "border-gray-100 opacity-70 hover:opacity-100"
              }`}
            >
              <div className="flex gap-3 items-center mb-2.5">
                <img src={t.image} className="w-9 h-9 rounded-full object-cover" alt={t.name} />
                <div className="overflow-hidden">
                  <p className="font-semibold text-xs sm:text-sm text-gray-900 truncate">{t.name}</p>
                  <p className="text-[11px] text-gray-500 truncate">{t.role}</p>
                </div>
              </div>
              <p className="text-xs text-gray-600 line-clamp-2">{t.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <section className="w-full bg-gradient-to-br from-gray-50 to-teal-50/30 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="w-full max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-700 mb-3">
                Frequently Asked Questions (FAQs)
              </h2>
            </FloatingElement>
            <p className="text-gray-600 text-xs sm:text-sm sm:text-base">
              Get answers to the most common questions about our e-commerce marketing services.
            </p>
          </motion.div>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left p-4 sm:p-5 bg-gradient-to-r from-teal-900 to-teal-700 text-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-teal-500/20 transition-all duration-300 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-semibold pr-3 sm:pr-4">
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
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-100"
                    >
                      <div className="p-4 sm:p-5 text-gray-600 leading-relaxed text-xs sm:text-sm sm:text-base">
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
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 border border-white/20 rounded-full"
              style={{
                left: `${(i * 11) % 100}%`,
                top: `${(i * 17) % 100}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 4 + (i % 3),
                repeat: Infinity,
                delay: (i % 4) * 0.5,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
                Ready to Grow Your E-Commerce Brand?
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white">
                  Partner with DigLip7 Today
                </span>
              </h2>
            </FloatingElement>

            <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              Your online store has untapped potential—and DigLip7 is here to unlock it. With our E-Commerce Marketing Service, you’ll increase sales, outshine competitors, and build a brand customers love.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/contact">
                <motion.button
                  className="px-6 sm:px-8 py-3.5 bg-white text-teal-700 font-semibold rounded-full shadow-xl hover:shadow-2xl hover:bg-gray-50 transition-all duration-300 text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Free Consultation
                  <Sparkles className="w-4 h-4 text-teal-600" />
                </motion.button>
              </a>
            </div>

            <motion.div
              className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-4 sm:gap-6 text-white/90"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-300 flex-shrink-0" />
                <span className="text-xs sm:text-sm">Free Website Audit</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-300 flex-shrink-0" />
                <span className="text-xs sm:text-sm">No Long-term Contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-300 flex-shrink-0" />
                <span className="text-xs sm:text-sm">Results in 5 Months</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default E_commerce;
