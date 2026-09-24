import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "../../../components/SEO";
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
  ArrowRight, Star,
  Sparkles,
  Target,
  Zap,
  Globe,
  Users,
  Award,
  ChevronDown,

  PlayCircle, BarChart, Settings, FileText, Quote
} from "lucide-react";
import seo2 from "../../../images/perm001.png";
import seoImage from "../../../images/pm1.png";
import seo4 from "../../../images/pm2.png";
import aboutImg from "../../../images/pm3.png";

import ppc1 from "../../../images/perm005.png";
import ppc2 from "../../../images/perm002.png";
import ppc3 from "../../../images/perm003.png";
import ppc4 from "../../../images/perm004.png";

// Mock images - replace with your actual images
// const seoImage =
//   "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop";
// // const seo2 = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop";
// const seo4 =
//   "https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&h=600&fit=crop";
// const aboutImg =
// "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop";


// added 

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    text: `“DigLip 7 completely transformed our ad performance! Their performance marketing strategy helped us double our conversions in just two months. Highly recommend their expertise!”`,
    link: "https://techstart.io",
  },
  {
    name: " Arjun P., India",
    role: "EcomShop",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    text: `“The team at DigLip 7 knows exactly how to make every penny count. Our ROI increased by 60%, and we finally understand where our ad spend goes. Excellent service!”`,
  },
  {
    name: "Emily R., USA",
    role: "HealthPlus Clinic",
    image: "https://randomuser.me/api/portraits/women/49.jpg",
    text: `“Professional, transparent, and truly results-oriented. Their performance marketing campaigns gave our e-commerce store consistent sales growth month after month.”`,
  },
  {
    name: "Ahmed K., UAE",
    role: "Thompson Law Firm",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
    text: `“I was skeptical about SEO at first, but DigLip7 proved me wrong. Their transparent reporting and consistent results made them an invaluable partner.”`,
  },
];

const stepss = [
  {
    id: 1,
    title: "Research",
    description:
      "Deep dive into your industry, competitors, and target keywords to uncover Performance Marketing opportunities.",
    icon: <Search className="w-8 h-8 text-blue-600" />,
  },
  {
    id: 2,
    title: "Strategy",
    description:
      "Develop a customized Performance Marketing strategy based on our research findings to maximize visibility and ROI.",
    icon: <Target className="w-8 h-8 text-blue-600" />,
  },
  {
    id: 3,
    title: "Implementation",
    description:
      "Execute on-page, off-page, and technical Performance Marketing improvements for measurable growth.",
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
    title: "Modern graphic of targeted ads, ROI charts, and digital marketing analytics.",
    industry: "Technology • 6 months",
    description:
      "Transformed a struggling tech startup into an industry leader through comprehensive Performance Marketing strategy.",
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
    title: "Conceptual illustration of data-driven marketing strategies with performance tracking visuals.",
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
    title: "Creative digital artwork showing performance marketing metrics, social media ads, and campaign results.",
    industry: "Healthcare • 5 months",
    description:
      "Improved patient acquisition and local Performance Marketing rankings for a healthcare provider using optimized content strategy.",
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
    title: "Measurable Results",
    description:
      "With data-driven campaigns, you can track every click, view, and conversion in real time. This transparency lets you see exactly what’s working. For example, a Diglip7 client in the e-commerce space saw a 300% increase in sales after optimizing their Performance Marketing campaigns with precise conversion tracking.",
    icon: TrendingUp,
  },
  {
    title: "Cost-Efficiency",
    description:
      "You only pay for results, making performance marketing services budget-friendly. Whether it’s a click, lead, or sale, your investment directly correlates with outcomes, unlike traditional ads where costs can pile up without guaranteed returns.",
    icon: BarChart3,
  },
  {
    title: "Flexibility",
    description:
      "you can tweak targeting, creatives, or budgets instantly. This agility is perfect for businesses navigating dynamic markets.",
    icon: Search,
  },
  {
    title: "Real-Time Tracking",
    description:
      "Tools like Google Analytics and affiliate dashboards provide instant insights. Diglip7 uses these to refine campaigns on the fly, ensuring your digital advertising efforts always hit the mark.",
    icon: Handshake,
  },
];

const solutions = [
  {
    title: "Pay-per-click (Performance Marketing)",
    description:
      "Ads on platforms like Google Ads or Bing, where you pay for each click.",
    icon: ShoppingCart,
    points: [
      "With near-instant delivery and high open rates, ",
      "SMS campaigns are perfect for promotions,",
      "reminders, and personalized offers.",
    ],
  },
  {
    title: "Affiliate marketing",
    description:
      "Partnering with influencers or websites to promote your products for a commission.",
    icon: Building2,
    points: [
      "Affiliate marketing drive engagement by delivering timely updates, discounts, or alerts.",
      " we craft campaigns that resonate with viewers across devices.",
      "Affiliate marketing Campaigns Systems that grow with your business.",
    ],
  },
  {
    title: "Influencer marketing",
    description:
      "Collaborating with social media personalities to reach targeted audiences.",
    icon: MapPin,
    points: [
      "We optimize your Influencer marketing for speed, usability,",
      " Influencer marketing boosting engagement and click-through rates.",
      "Influencer marketing to ensure customers stay engaged and convert.",
    ],
  },
  {
    title: "Social media ads",
    description:
      "Running campaigns on platforms like Instagram, LinkedIn, or TikTok.",
    icon: Link2,
    points: [
      " Social media ads is highly targeted and effective for driving brand awareness. ",
      "Social media ads and Location-Based Marketing",
      "Social media ads or brand awareness.",
    ],
  },
  {
    title: "Native advertising",
    description: "Seamlessly blending ads into content for higher engagement.",
    icon: HelpCircle,
    points: [
      "It’s a powerful tool for driving foot traffic.",
      "Native advertising them closer to conversion.",
      "Cross-Device optimization Stand out in voice and AI searches.",
    ],
  },
  {
    title: "Cutting-Edge Tools",
    description:
      "We use industry-leading platforms like Google Ads, HubSpot, and SEMrush for precise conversion tracking and optimization.",
    icon: Mic,
    points: [
      "Our team stays ahead of trends to keep your campaigns competitive.",
      "Cutting-Edge Tools that resonate with younger audiences.",
      "Tap into the growing audio streaming market",
    ],
  },
];

const steps = [
  {
    number: "1",
    title: "Proven Track Record",
    description: "Ask for case studies or examples of past campaigns.",
    icon: Target,
  },
  {
    number: "2",
    title: "Transparency",
    description:
      "Ensure they provide clear reporting on metrics like clicks, conversions, and ROI.",
    icon: Search,
  },
  {
    number: "3",
    title: "Expertise in Your Industry",
    description:
      "An agency familiar with your niche can hit the ground running.",
    icon: Zap,
  },
  {
    number: "4",
    title: "Customized Approach",
    description:
      "Avoid one-size-fits-all solutions. Your business deserves tailored growth marketing strategies.",
    icon: Globe,
  },
  {
    number: "5",
    title: "Dedicated Support",
    description:
      " Our team acts as an extension of your business, providing hands-on guidance.",
    icon: BarChart3,
  },
  {
    number: "6",
    title: "Innovative Strategies",
    description:
      "From affiliate marketing to native ads, we stay ahead of the curve.",
    icon: Award,
  },
];

const faqs = [
  {
    question: "What Are Performance Marketing Services?",
    answer:
      "Performance marketing services involve digital advertising strategies where you pay only for specific results, such as clicks, leads, or sales. These include pay-per-click (Performance Marketing), affiliate marketing, influencer campaigns, social media ads, and native ads. At Diglip7, we design data-driven campaigns to ensure measurable outcomes tailored to your business goals.",
  },
  {
    question: "How Do Performance Marketing Services Differ from Traditional Marketing?",
    answer:
      "Unlike traditional marketing, which often involves upfront costs for broad exposure, performance marketing services focus on ROI-driven marketing. You only pay when a desired action occurs, offering greater accountability and flexibility. For example, with Performance Marketing or affiliate marketing, you can track every dollar spent and adjust campaigns in real time for better results.",
  },
  {
    question: "Why Are Performance Marketing Services Essential for Businesses?",
    answer:
      "Performance marketing services are crucial because they deliver measurable results, maximize budgets, and allow precise targeting. Whether you're a startup or an established brand, result-oriented marketing ensures you get the most from your investment. Diglip7’s growth marketing strategies help businesses scale efficiently in today’s competitive digital landscape.",
  },
  {
    question: "What Types of Businesses Can Benefit from Performance Marketing Services?",
    answer:
      "Any business looking to grow online can benefit, including e-commerce stores, SaaS companies, local businesses, and global brands. Performance marketing services are versatile, making them ideal for startups needing quick wins or established firms aiming to optimize their digital advertising. Diglip7 customizes campaigns to fit your industry and goals.",
  },
  {
    question: "What Channels Are Used in Performance Marketing?",
    answer:
      "Key channels include: Pay-per-click (Performance Marketing): Ads on Google or Bing for instant visibility. Affiliate marketing: Partnerships with websites or influencers for commission-based promotions. Influencer marketing: Collaborations with social media personalities for authentic reach. Social media ads: Targeted campaigns on platforms like Instagram or LinkedIn. Native ads: Ads that blend seamlessly with content for higher engagement.",
  },
  {
    question: "How Does Diglip7 Ensure Success with Performance Marketing Services?",
    answer:
      "At Diglip7, we prioritize conversion tracking, advanced tools (like Google Analytics and SEMrush), and certified experts to deliver results. Our tailored growth marketing strategies focus on your unique needs, and we provide transparent reporting to track progress. For example, our clients have seen up to 300% increases in sales through optimized Performance Marketing campaigns.",
  },
  {
    question: "How Much Do Performance Marketing Services Cost?",
    answer:
      "Costs vary depending on your goals, channels, and campaign scale. Since performance marketing services are pay-for-performance, you only spend when results are achieved, making them cost-efficient. ",
  },
  {
    question: "How Can I Measure the Success of Performance Marketing Campaigns?",
    answer:
      "Success is measured through key metrics like click-through rates (CTR), conversion rates, cost-per-acquisition (CPA), and return on ad spend (ROAS). Diglip7 uses conversion tracking tools to provide real-time insights, ensuring your result-oriented marketing campaigns are always optimized for maximum impact.",
  },
  {
    question: "How Long Does It Take to See Results from Performance Marketing Services?",
    answer:
      "Results can start as early as a few days, especially with Performance Marketing or social media ads. However, sustained growth often takes 1-3 months as campaigns are refined. Diglip7’s data-driven campaigns are designed for quick wins and long-term success, depending on your objectives.",
  },

  {
    question: "Why Choose Diglip7 for Performance Marketing Services?",
    answer:
      "Diglip7 stands out for our customized ROI-driven marketing, industry expertise, and commitment to transparency. Our team uses cutting-edge tools and holds certifications in Google Ads and Meta Advertising. Clients trust us for measurable results, like the 50% lead increase we achieved for a SaaS client through targeted digital advertising.",
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

function Performance_markiting() {
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

  // Performance Marketing Packages
  const seoPackages = [
    {
      name: "Basic",
      price: "$899",
      duration: "/month",
      features: [
        "Performance audit & strategy consultation",
        "Setup of ROI-focused campaigns (1–2 channels)",
        "Basic conversion tracking & reporting",
        "Target audience segmentation",
        "Monthly performance dashboard",
        "Email support",
      ],
      button: "Get Started",
    },
    {
      name: "Pro",
      price: "$1,799",
      duration: "/month",
      popular: true,
      features: [
        "Multi-channel performance campaign management",
        "Advanced tracking & analytics setup",
        "A/B testing for ads & landing pages",
        "Budget optimization & bid management",
        "Bi-weekly performance reporting",
        "Priority support",
        "Competitor campaign analysis",
      ],
      button: "Get Started",
    },
    {
      name: "Premium",
      price: "$3,499",
      duration: "/month",
      features: [
        "Full-scale performance marketing management",
        "Cross-platform ROI-focused campaigns",
        "Real-time tracking & optimization using AI tools",
        "Advanced attribution modeling",
        "Weekly analytics, reporting & strategy calls",
        "Dedicated performance marketing strategist",
        "Custom growth & ROI maximization strategy",
      ],
      button: "Contact Sales",
    },
  ];

  // Performance Marketing Services
  const ppcServices = [
    { icon: Search, title: "Keyword Research & Targeting", description: "Find and target the best keywords to maximize ROI." },
    { icon: DollarSign, title: "Performance Marketing Campaign Management", description: "Full management of Google Ads, Bing Ads, and social campaigns." },
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

  // Dynamically generate schemas for Performance Marketing Service, Offer Catalog, and FAQs
  const performanceMarketingSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Performance Marketing",
      "provider": {
        "@type": "Organization",
        "name": "DigLip7",
        "url": "https://diglip7.com",
        "logo": "https://diglip7.com/favicon-32x32.png",
      },
      "areaServed": "Worldwide",
      "description":
        "DigLip7 offers performance marketing services including pay-per-click advertising, affiliate marketing, influencer marketing, social media ads, and native advertising, with real-time tracking and attribution to maximize measurable ROI.",
      "url": "https://diglip7.com/digital-market/performance-marketing",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Performance Marketing Packages",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", name: "Basic Performance Marketing Package" },
            "price": "899",
            "priceCurrency": "USD",
            "priceSpecification": { "@type": "UnitPriceSpecification", billingDuration: "P1M" },
          },
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", name: "Pro Performance Marketing Package" },
            "price": "1799",
            "priceCurrency": "USD",
            "priceSpecification": { "@type": "UnitPriceSpecification", billingDuration: "P1M" },
          },
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", name: "Premium Performance Marketing Package" },
            "price": "3499",
            "priceCurrency": "USD",
            "priceSpecification": { "@type": "UnitPriceSpecification", billingDuration: "P1M" },
          },
        ],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((f) => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.answer,
        },
      })),
    },
  ];

  return (
    <div className="overflow-x-hidden bg-white w-full">
      <SEO
        title="Performance Marketing Services | DigLip7"
        description="Grow leads, conversions, and ROI with DigLip7's performance marketing — PPC, affiliate, influencer, and social ads that deliver. Get a free audit today."
        canonical="https://diglip7.com/digital-market/performance-marketing"
        ogImage="https://diglip7.com/assets/perm001-Dbay7HFr.png"
        ogType="website"
        keywords="performance marketing services, ROI-driven marketing, PPC advertising, affiliate marketing, paid social campaigns, growth marketing, DigLip7"
        schema={performanceMarketingSchemas}
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
              <span className="text-gray-900">Performance Marketing Services </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                That Pay for Results, Not Promises
              </span>
            </h1>
            <p className="text-gray-700 text-sm sm:text-base lg:text-lg mt-4 mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Boost your business growth with <span className="font-semibold text-blue-700">DigLip7</span> performance marketing services. We craft data-driven campaigns that increase leads, conversions, and ROI. From PPC to social media ads, our experts ensure every click delivers measurable success.
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

          {/* Right Section - Animated Chart */}
          <motion.div
            className="w-full lg:w-[42%] flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={seo2}
              alt="Digital marketing concept showing a laptop with performance metrics, graphs, and ads."
              className="rounded-2xl shadow-xl w-full max-w-md lg:max-w-none h-auto object-cover"
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
        {/* Performance Marketing Section */}
        <div className="py-16 px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 mb-20">
            <motion.img
              src={ppc1}
              alt="Illustration of performance marketing with analytics dashboards, conversion tracking, and campaign optimization."
              className="rounded-2xl shadow-lg w-full md:w-1/2"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Performance Marketing Services is the Best Investment for Your Business
              </h2>
              <p className="text-gray-700 mb-4">
                Performance marketing delivers measurable results,<span className="font-semibold text-blue-700">DigLip7</span>,
                targeting the right audience to drive clicks, leads, and conversions. This cost-effective, data-driven approach boosts engagement, sales, and brand visibility, making it a smart investment for sustainable business growth.


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
                Our Proven Performance Marketing Services Process
              </h2>
              <p className="text-gray-600 mt-3">
                At DigLip 7, our performance marketing process focuses on delivering measurable results and maximizing ROI. We start with audience research and strategy planning, create targeted campaigns, implement data-driven ad placements, and continuously monitor performance.
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

          {/* Performance Marketing Services */}
          <div className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
            <div className="max-w-6xl mx-auto text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Proven Performance Marketing Services Success Stories
              </h2>
              <p className="text-gray-600 mt-3">
                Discover how<span className="font-semibold text-teal-600">DigLip7</span> performance marketing strategies have helped businesses achieve exceptional results. From increased leads and higher conversions to improved ROI and brand visibility, our data-driven campaigns deliver measurable success and sustainable growth for every client.

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
                  Transformed a struggling tech startup into an industry leader through advanced Performance Marketing Services.
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

        {/* Performance Marketing Services Section */}
        <div className="bg-white py-16 px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Performance Marketing Services</h2>
            <p className="text-gray-600 mb-10">
              Performance Marketing Services designed to maximize ROI and drive targeted traffic.
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

        {/* Performance Marketing Pricing Section */}
        <div className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Performance Marketing Services Packages Designed for Every Stage</h2>
            <p className="text-gray-600 mb-10">
              Choose the perfect Performance Marketing Services package that fits your business needs and budget.
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
      <section id="about" className="sm:py-16 lg: bg-white">
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
                Performance Marketing Services Are{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  Key for Business Growth
                </span>
              </h2>
            </FloatingElement>
            {/* UI/UX Design Services | Diglip7 – Crafting Seamless Digital Experiences */}
            <div className="space-y-4 sm:space-y-6">
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                In today’s fast-paced digital world, businesses need marketing
                strategies that deliver measurable results. Enter performance
                marketing services, a game-changer for brands looking to grow
                efficiently and effectively.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                Unlike traditional marketing, performance marketing focuses on
                outcomes—think clicks, conversions, and sales—making every
                dollar count. With consumers spending more time online,
                leveraging performance marketing services is no longer optional;
                it’s essential for staying competitive.
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
                How Diglip7 Excels in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  Performance Marketing Services
                </span>
              </h2>
            </FloatingElement>
            {/* What Are UI/UX Design Services? */}
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
              Customized Strategies:No two businesses are alike, so we craft
              bespoke campaigns. Whether you’re a startup needing Performance Marketing or an
              enterprise scaling with affiliate marketing, we align our approach
              with your goals. Cutting-Edge Tools:We use industry-leading
              platforms like Google Ads, HubSpot, and SEMrush for precise
              conversion tracking and optimization. Our team stays ahead of
              trends to keep your campaigns competitive.
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
                  className="rounded-2xl w-full h-full sm:h-full lg:h-full object-cover transform transition-transform duration-700 hover:scale-105"
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
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <FloatingElement delay={0.3}>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-teal-700 leading-tight mb-6">
                Why Businesses Trust{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-teal-600 to-[#c89d5a]">
                  Diglip7 for Growth
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
                  Businesses choose Diglip7 because we deliver results they can
                  trust. Our performance marketing services are built on
                  transparency, expertise, and a passion for growth. Here’s why
                  clients stick with us:
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
                  Consistent Results:{" "}
                  <span className="font-semibold text-[#c89d5a]">
                    We prioritize ROI-driven marketing to ensure your budget
                    works hard.
                  </span>
                  Dedicated Support: Our team acts as an extension of your
                  business, providing hands-on guidance.
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
                  Innovative Strategies: From affiliate marketing to native ads,
                  we stay ahead of the curve.
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
            <div className="relative w-full h-full sm:w-full sm:h-full lg:w-[420px] lg:h-[500px]">
              <Card3D className="w-full h-full">
                <img
                  src={aboutImg}
                  alt="About Diglip7"
                  className="w-full h-full object-cover  transition-transform duration-700 hover:scale-105"
                  style={{
                    clipPath:
                      "path('M 0 80 Q 200 -50 400 80 L 400 500 Q 200 600 0 500 Z')",
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
              Benefits of Using Performance Marketing Services
            </h2>
          </FloatingElement>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
            Why are performance marketing services so valuable? Let’s break it
            down:
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
              What Are Performance Marketing Services?
            </h2>
          </FloatingElement>
          <p className="text-gray-600 max-w-4xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed">
            Performance marketing services are all about driving measurable
            actions through targeted, data-driven campaigns. Instead of paying
            upfront for broad exposure, you only pay when specific goals—like
            clicks, leads, or sales—are achieved. This makes it a highly
            accountable and result-oriented marketing approach.
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
                Tips for Choosing the Right Performance Marketing Agency
              </h2>
            </FloatingElement>
            <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
              Not all agencies are created equal. Here’s what to look for when
              hiring for performance marketing services:
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
                Ready to Transform Your Business
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white">
                  with Performance Marketing?
                </span>
              </h2>
            </FloatingElement>
            {/* Final Call-to-Action */}
            <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
              In a world where every marketing dollar counts, performance
              marketing services offer businesses a smarter way to grow. With
              measurable results, cost-efficiency, and the flexibility to adapt,
              these services are essential for startups, growing brands, and
              established companies alike. By leveraging channels like Performance Marketing,
              affiliate marketing, and social media ads, performance marketing
              services deliver ROI-driven marketing that traditional methods
              can’t match.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/conact">
                <motion.button
                  className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white text-lg font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105"
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

export default Performance_markiting;
