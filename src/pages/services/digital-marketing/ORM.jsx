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
  Link2, Star,
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
import seo2 from "../../../images/orm00.jpeg";
import seoImage from "../../../images/orm.png";
import seo4 from "../../../images/orm2.png";
import aboutImg from "../../../images/orm3.png";

import ppc1 from "../../../images/orm001.jpeg";
import ppc2 from "../../../images/orm002.jpeg";
import ppc3 from "../../../images/orm003.jpeg";
import ppc4 from "../../../images/orm004.jpeg";

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
    text: `“The local orm work by DigLip7 did for our clinic was outstanding. We went from being invisible online to the top-rated healthcare provider in our area.”`,
  },
  {
    name: "David Thompson",
    role: "Thompson Law Firm",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
    text: `“I was skeptical about orm at first, but DigLip7 proved me wrong. Their transparent reporting and consistent results made them an invaluable partner.”`,
  },
];

const stepss = [
  {
    id: 1,
    title: "Research",
    description:
      "Deep dive into your industry, competitors, and target keywords to uncover orm opportunities.",
    icon: <Search className="w-8 h-8 text-blue-600" />,
  },
  {
    id: 2,
    title: "Strategy",
    description:
      "Develop a customized orm strategy based on our research findings to maximize visibility and ROI.",
    icon: <Target className="w-8 h-8 text-blue-600" />,
  },
  {
    id: 3,
    title: "Implementation",
    description:
      "Execute on-page, off-page, and technical orm improvements for measurable growth.",
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
      "Transformed a struggling tech startup into an industry leader through comprehensive orm strategy.",
    image:
      ppc1,
    alt: "Graphic showing people monitoring brand mentions and improving online image",
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
    alt: "Modern concept art of ORM with social media, reviews, and trust indicators",
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
      "Improved patient acquisition and local orm rankings for a healthcare provider using optimized content strategy.",
    image:
      ppc3,
    alt: "Visual of business reputation growth with analytics and positive review symbols",
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
    title: "Businesses",
    description:
      "From small startups to corporate titans—we fortify your brand to attract loyal customers and powerhouse partnerships.",
    icon: TrendingUp,
  },
  {
    title: "Professionals",
    description:
      "Doctors, lawyers, and consultants lean on our [ORM] to project expertise and professionalism online.",
    icon: BarChart3,
  },
  {
    title: "Public Figures",
    description:
      "Celebrities, influencers, and politicians trust Diglip7’s [ORM] to keep their public image flawless.",
    icon: Search,
  },
  {
    title: "Individuals",
    description:
      "Whether it’s a job hunt or a fresh start, our [ORM] cleans up your digital slate for a brighter tomorrow.",
    icon: Handshake,
  },
];

const solutions = [
  {
    title: "Defend Against Digital Damage",
    description:
      "Negative reviews, false accusations, or smear campaigns can strike without warning. Our [ORM] experts act as your shield, suppressing harmful content and replacing it with positive, authentic narratives.",
    icon: ShoppingCart,
    points: [
      "ORM your customers. Using data-driven insights,",
      "we craft a ORM Service strategy that’s built to succeed,",
      "whether you’re aiming for brand awareness, lead generation, or sales growth.",
    ],
  },
  {
    title: "Build Unshakable Trust",
    description:
      "Trust is the currency of the digital age. With Diglip7’s [ORM], we polish your online presence to exude reliability and authority, winning over customers, clients, and peers.",
    icon: Building2,
    points: [
      "producing ORM that’s as beautiful as it is effective..",
      "ORM Service blogs to videos, every piece",
      "our ORM Service is designed to captivate and convert.",
    ],
  },
  {
    title: "Dominant Search Engine Results",
    description:
      "What shows up on page one of Google defines you. Our [ORM] strategies bury undesirable results and elevate content that screams credibility—because visibility is power.",
    icon: MapPin,
    points: [
      "ORM Service keywords",
      " ORM Service to ensure your content ranks quickly",
      " reaches your ideal audience..",
    ],
  },
  {
    title: "Crush the Competition",
    description:
      "A flawless reputation isn’t just nice to have—it’s a competitive edge. Diglip7’s ORM ensures you outshine rivals and stay top-of-mind for your audience.",
    icon: Link2,
    points: [
      "We amplify your reach by promoting your work across social media, email,",
      "other platforms, maximizing the impact of our ORM Service.",
      "ORM Service Proactive monitoring and support.",
    ],
  },
  {
    title: "Navigate Crises Like a Pro",
    description:
      "When a reputation storm hits, every second counts. Our [ORM] services swoop in to contain the damage, restore your image, and keep your brand standing tall.",
    icon: HelpCircle,
    points: [
      "ORM analytics—tracking traffic, engagement",
      "conversions—so we can fine-tune your strategy for even better outcomes.",
      "Client Dashboards: Visual tools to monitor progress at a glance.",
    ],
  },
  {
    title: "A Must-Have for Every Business",
    description:
      "From corner shops to global giants, [ORM] is the lifeline that keeps your business relevant, respected, and thriving in a world where online perception is everything.",
    icon: Mic,
    points: [
      "Our ORM offers a cost-effective,",
      "sustainable way to grow your business, ",
      "delivering long-term value without breaking the bank.",
    ],
  },
];

const steps = [
  {
    number: "1",
    title: "Deep-Dive Reputation Audi",
    description:
      "We kick things off with a forensic analysis of your digital footprint. Our [ORM] team scours search engines, social platforms, review sites, and beyond to uncover every mention—good, bad, or buried—laying the groundwork for a winning strategy.",
    icon: Target,
  },
  {
    number: "2",
    title: "Content That Commands Attention",
    description:
      "Great [ORM] thrives on great content. We craft compelling, orm-charged blogs, articles, press releases, and profiles that spotlight your achievements and values, pushing negative noise to the shadows.",
    icon: Search,
  },
  {
    number: "3",
    title: "Review Management Magic",
    description:
      "Reviews can make or break you. Our [ORM] pros monitor platforms like Google, Yelp, and Trustpilot, responding to feedback with finesse, encouraging rave reviews, and turning detractors into advocates.",
    icon: Zap,
  },
  {
    number: "4",
    title: "Social Media Brilliance",
    description:
      "Social media is a reputation battlefield. Diglip7’s [ORM] tracks mentions, hashtags, and trends, ensuring your profiles radiate positivity and engagement—no matter the platform.",
    icon: Globe,
  },
  {
    number: "5",
    title: "Negative Content Burial",
    description:
      "Can’t you delete it? We’ll bury it. Our [ORM] leverages advanced orm tactics to flood the web with positive content, shoving unwanted results off the radar and into obscurity.",
    icon: BarChart3,
  },
  {
    number: "6",
    title: "Relentless Monitoring & Reporting",
    description:
      "Your reputation never sleeps, and neither do we. Our [ORM] services include 24/7 tracking and crystal-clear reports, so you always know where you stand—and how far you’ve come.",
    icon: Award,
  },
];

const faqs = [
  {
    question: "How quickly can Diglip7’s ORM turn things around?",
    answer:
      "Results vary by case, but most clients see shifts within 30-90 days. Simple fixes—like boosting reviews—can show faster gains, while deep-rooted issues, like old articles, take a bit longer. Our [ORM] team moves fast to maximize impact, no matter the challenge.",
  },
  {
    question: "Can ORM erase all negative content?",
    answer:
      "Total removal depends on the source—some content needs legal action or site owner consent. But our [ORM] shines at suppression, using orm muscle to bury negatives under a tidal wave of positive, high-ranking content that steals the spotlight.",
  },
  {
    question: "Is ORM just for businesses, or can anyone use it?",
    answer:
      "[ORM] isn’t exclusive. Diglip7 serves businesses, professionals, public figures, and everyday people. Whether you’re a retailer avoiding bad press or a job seeker fixing old posts, our [ORM] adapts to your needs.",
  },
  {
    question: "How much does Diglip7’s ORM cost?",
    answer:
      "The cost depends on your goals. Basic monitoring is affordable, while crisis recovery or content campaigns are more expensive. Contact us for a free, no-obligation [ORM] quote tailored to your situation.",
  },
  {
    question: "How is ORM different from traditional PR?",
    answer:
      "Traditional PR casts a wide net through media and events, while [ORM] zeroes in on your digital world—search results, reviews, and social buzz. Diglip7’s [ORM] ensures your online identity syncs with your real-world rep, with laser-focused precision.",
  },
  {
    question: "Can ORM fix outdated or irrelevant online info?",
    answer:
      "Absolutely! Old bios, wrong addresses, or stale news can mislead your audience. Our [ORM] pushes fresh, accurate content to the top, sidelining outdated data and keeping your image current.",
  },
  {
    question: "Why should I invest in ORM instead of DIY fixes?",
    answer:
      "DIY can work for small tweaks, but [ORM] is a complex beast—SEO, content strategy, and crisis management need pro skills. Diglip7’s [ORM] saves you time, stress, and mistakes, delivering results that stick.",
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

function Online_rep_mana() {
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

  // orm Packages
  const seoPackages = [
    {
      name: "Basic",
      price: "$799",
      duration: "/month",
      features: [
        "Brand reputation audit & analysis",
        "Monitoring of Google reviews & social mentions",
        "Response management for negative reviews (up to 10/month)",
        "Basic brand sentiment tracking",
        "Monthly reputation report",
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
        "Comprehensive online monitoring (Google, social media, forums)",
        "Proactive review management (up to 30 reviews/month)",
        "Positive content creation & publication",
        "Crisis response strategy & management",
        "Bi-weekly reputation insights report",
        "Priority support",
        "Competitor reputation analysis",
        "Search result improvement strategy",
      ],
      button: "Get Started",
    },
    {
      name: "Premium",
      price: "$2,999",
      duration: "/month",
      features: [
        "Full-scale ORM strategy & management",
        "24/7 monitoring of brand mentions across all platforms",
        "Search result suppression for negative content",
        "Reputation repair & brand rebuilding campaigns",
        "Custom PR & content placement services",
        "Weekly progress reports & consultations",
        "Dedicated ORM manager & strategy team",
        "Brand trust & sentiment enhancement plan",
      ],
      button: "Contact Sales",
    },
  ];

  // orm Services
  const ppcServices = [
    { icon: Search, title: "Keyword Research & Targeting", description: "Find and target the best keywords to maximize ROI." },
    { icon: DollarSign, title: "orm Campaign Management", description: "Full management of Google Ads, Bing Ads, and social campaigns." },
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

  // Dynamically generate schemas for ORM Service, Offer Catalog, and FAQs
  const ormSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Online Reputation Management (ORM)",
      provider: {
        "@type": "Organization",
        name: "DigLip7",
        url: "https://diglip7.com",
        logo: "https://diglip7.com/favicon-32x32.png",
      },
      areaServed: "Worldwide",
      description:
        "DigLip7 offers full-service online reputation management including brand monitoring, review management, crisis response, negative content suppression, and positive content creation to protect and strengthen brand image.",
      url: "https://diglip7.com/digital-market/online-repulation-management(ORM)",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "ORM Packages",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Basic ORM Package" },
            price: "799",
            priceCurrency: "USD",
            priceSpecification: { "@type": "UnitPriceSpecification", billingDuration: "P1M" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Pro ORM Package" },
            price: "1499",
            priceCurrency: "USD",
            priceSpecification: { "@type": "UnitPriceSpecification", billingDuration: "P1M" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Premium ORM Package" },
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
    <div className="w-full bg-white overflow-x-hidden">
      <SEO
        title="Online Reputation Management (ORM) Services | DigLip7"
        description="Monitor, repair, and strengthen your brand's online image with DigLip7's ORM services — review management, crisis response & search result control."
        canonical="https://diglip7.com/digital-market/online-repulation-management(ORM)"
        ogImage="https://diglip7.com/assets/orm-CkBmvAX2.png"
        keywords="online reputation management, ORM services, brand reputation repair, review management, negative content suppression, DigLip7"
        schema={ormSchemas}
      />
      {/* Hero Section with Parallax */}
      <div className="relative pt-24 sm:pt-28 pb-16 bg-gradient-to-r from-purple-100 via-pink-100 to-white min-h-[90vh] flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 lg:px-16 overflow-hidden">
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

        <div className="relative z-10 flex flex-col md:flex-row items-center w-full max-w-6xl gap-8 md:gap-10">
          {/* Left Section */}
          <div className="w-full md:flex-1 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight break-words">
              <span className="text-gray-900">Protect and Elevate Your Brand with </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                Expert Online Reputation Management
              </span>
            </h1>
            <p className="text-gray-700 text-sm sm:text-base mt-4 mb-6 leading-relaxed">
              At <span className="font-semibold text-blue-700">DigLip7</span>, we monitor, repair, and strengthen your brand's digital presence with proven ORM strategies that protect credibility and drive customer trust.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 text-gray-800 text-xs sm:text-sm mb-6">
              <div className="flex items-center gap-1.5">🚀 Boost organic traffic</div>
              <div className="flex items-center gap-1.5">📈 Improve search ranking</div>
              <div className="flex items-center gap-1.5">🎯 Target right audience</div>
              <div className="flex items-center gap-1.5">📊 Transparent reporting</div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href="/contact" className="inline-block">
                <motion.button
                  className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-700 to-teal-900 text-white text-base sm:text-lg font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105 cursor-pointer flex items-center justify-center"
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
            className="w-full md:flex-1 flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={seo2}
              alt="Professional ORM concept showing customer reviews and brand reputation analysis"
              className="rounded-2xl shadow-lg w-full max-w-lg md:max-w-none h-auto object-cover"
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

      <div className="bg-gray-50 overflow-hidden">
        {/* Why ORM Section */}
        <div className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-10 mb-16 sm:mb-20">
            <div className="w-full md:w-1/2 flex justify-center overflow-hidden rounded-2xl">
              <motion.img
                src={ppc4}
                alt="Digital illustration of online reputation management with rating stars and feedback icons"
                className="rounded-2xl shadow-lg w-full h-auto object-cover"
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
            <div className="w-full md:flex-1 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
                Why ORM is the Best Investment for Your Business
              </h2>
              <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                ORM delivers instant visibility by placing your <span className="font-semibold text-blue-700">DigLip7</span> business at the top of search results. It drives targeted traffic, offers complete budget control, and provides measurable ROI, making it a fast, cost-effective strategy for growth and brand exposure.
              </p>
              <ul className="text-gray-800 space-y-2 text-left mx-auto md:mx-0 max-w-sm md:max-w-none text-sm sm:text-base">
                <li className="flex items-center gap-2">✅ Immediate Results</li>
                <li className="flex items-center gap-2">✅ Targeted Reach</li>
                <li className="flex items-center gap-2">✅ Budget Control</li>
                <li className="flex items-center gap-2">✅ Measurable ROI</li>
                <li className="flex items-center gap-2">✅ Brand Exposure</li>
              </ul>
            </div>
          </div>

          {/* Process Section */}
          <div className="bg-white py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-20 text-center rounded-2xl shadow-sm overflow-hidden">
            {/* Header */}
            <div className="max-w-4xl mx-auto mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                Our Proven ORM Process
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mt-3">
                A systematic approach that delivers consistent results for our clients
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
                    className="flex flex-col items-center text-center p-4 bg-gray-50/50 rounded-xl md:bg-transparent md:p-0"
                  >
                    {/* Icon Circle */}
                    <div className="relative flex items-center justify-center w-16 h-16 rounded-full border-4 border-blue-300 bg-white shadow-md mb-4 flex-shrink-0">
                      {step.icon}
                      <span className="absolute -top-2 -right-2 bg-teal-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full shadow">
                        {step.id}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-semibold text-gray-900 text-base sm:text-lg">{step.title}</h3>
                    {/* Description */}
                    <p className="text-gray-600 text-xs sm:text-sm mt-2 leading-relaxed max-w-xs sm:max-w-[200px] mx-auto">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* ORM Success Stories */}
          <div className="py-12 sm:py-16 text-center overflow-hidden">
            <div className="max-w-6xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                Proven ORM Success Stories
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mt-3">
                Real results from real businesses that trusted <span className="font-semibold text-teal-600">DigLip7</span> with their ORM journey.
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
              className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-10 text-left bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100"
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
                <h3 className="font-semibold text-gray-900 text-xl sm:text-2xl">{study.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {study.description}
                </p>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full pt-2">
                  {study.stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-50 rounded-xl border border-gray-100 p-4 flex flex-col justify-center items-start shadow-sm"
                    >
                      <div className="flex items-center gap-2">{stat.icon}</div>
                      <p className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                      <p className="text-gray-500 text-xs sm:text-sm">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ORM Services Section */}
        <div className="bg-white py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden">
          <div className="max-w-6xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">Our ORM Services</h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
              ORM services designed to maximize ROI and drive targeted traffic.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-10">
              {ppcServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-xl transition-all cursor-pointer border border-gray-100 flex flex-col items-center text-center"
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="flex justify-center mb-4 w-14 h-14 rounded-full bg-teal-50 items-center">
                    <service.icon className="text-teal-600 w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ORM Pricing Section */}
        <div className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">ORM Packages Designed for Every Stage</h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto mb-10">
              Choose the perfect ORM package that fits your business needs and budget.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
              {seoPackages.map((pkg, index) => (
                <motion.div
                  key={index}
                  className={`rounded-2xl p-6 sm:p-8 shadow-lg transition-all flex flex-col justify-between ${
                    pkg.popular ? "border-2 border-teal-500 bg-white ring-2 ring-teal-500/20" : "bg-white border border-gray-100"
                  }`}
                  whileHover={{ y: -5 }}
                >
                  <div>
                    <div className="mb-4 flex justify-between items-center">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{pkg.name}</h3>
                      {pkg.popular && (
                        <span className="text-xs bg-teal-100 text-teal-800 px-3 py-1 rounded-full font-semibold">
                          🌟 Popular
                        </span>
                      )}
                    </div>
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-3xl sm:text-4xl font-extrabold text-teal-800">{pkg.price}</span>
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
                    <button
                      className="w-full py-3 px-6 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-semibold rounded-full shadow-md hover:shadow-teal-500/40 transition-all duration-300 text-sm sm:text-base"
                    >
                      {pkg.button}
                    </button>
                  </a>
                </motion.div>
              ))}
            </div>

            <p className="mt-10 text-gray-500 text-xs sm:text-sm">
              All plans include a 30-day money-back guarantee. Need a custom plan?{" "}
              <a href="/contact" className="text-teal-600 font-semibold underline">Contact us</a>.
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12 px-4 sm:px-6 lg:px-8">
          {/* Left Image */}
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
                  alt="ORM Service DigLip7"
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
                Command Your Digital Destiny with Diglip7’s{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  Unmatched ORM Expertise
                </span>
              </h2>
            </FloatingElement>

            <div className="space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
              <p>
                In today’s hyper-connected world, your online reputation isn’t
                just a reflection of who you are—it’s the foundation of your
                success. One Google search can determine whether customers trust
                your business, employers hire you, or partners collaborate with
                you.
              </p>
              <p>
                At Diglip7, we’re masters of Online Reputation
                Management (ORM)—delivering cutting-edge solutions to shape, protect,
                and elevate your digital presence. Ready to turn your online
                image into your greatest asset? Our ORM services are your key
                to unlocking a world of opportunities.
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
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 overflow-hidden">
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
                What is ORM,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  and Why Does It Matter?
                </span>
              </h2>
            </FloatingElement>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              ORM, short for Online Reputation Management, is the strategic
              process of monitoring, enhancing, and maintaining how you or your
              brand appear across the digital landscape. From search engine
              results to social media chatter, customer reviews to blog
              mentions, ORM ensures that what people find online paints you in
              the best possible light. It’s not just about fixing problems—it’s
              about proactively building a reputation that opens doors. At
              Diglip7, we craft a digital story that showcases your strengths,
              drowns out negativity, and positions you as a leader in your
              space.
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
                  className="text-center p-3 sm:p-5 bg-white rounded-xl border border-gray-100 shadow-sm"
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
                  alt="ORM Service Solutions"
                  className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
                />
              </div>
            </Card3D>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <FloatingElement delay={0.3}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-teal-700 leading-tight mb-6">
                The Diglip7 Difference:{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-teal-600 to-[#c89d5a]">
                  Your ORM Advantage
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
                  At <span className="font-semibold text-teal-700">Diglip7</span>, we’re not just another agency—we’re your reputation’s fiercest ally, equipped with industry-leading strategies.
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
                  <strong className="text-teal-800">Battle-Tested Expertise:</strong> Our ORM team has conquered reputation challenges across industries, delivering bespoke solutions crafted specifically for your brand.
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
                  <strong className="text-teal-800">Transparency You Can Trust:</strong> We demystify ORM with detailed, easy-to-read monthly reports that keep you completely informed.
                </p>
              </motion.div>
            </div>
          </motion.div>

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
                    alt="About Diglip7"
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
        </div>
      </section>

      {/* Advantages Section with 3D Cards */}
      <section className="bg-gray-50/50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <motion.div
          className="text-center mb-8 sm:mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <FloatingElement>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-700 mb-3 sm:mb-4">
              Who Can Transform Their Future with Diglip7’s ORM?
            </h2>
          </FloatingElement>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Our ORM at Diglip7 is a game-changer for all walks of life:
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
                <div className="bg-gradient-to-br from-[#c89d5a] to-[#a87d3a] p-5 sm:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col text-white">
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
      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <motion.div
          className="text-center mb-8 sm:mb-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <FloatingElement>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-700 mb-3 sm:mb-4">
              Why You Need Diglip7’s ORM Services Today
            </h2>
          </FloatingElement>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Your online reputation is constantly evolving with every click, comment, and review. Studies reveal that 91% of consumers read online reviews before making a purchase, and 84% trust them as much as a friend’s recommendation. That’s where Diglip7’s ORM comes in.
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
                <div className="bg-gray-50/70 p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-500 h-full flex flex-col">
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
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-gray-50/50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 max-w-3xl mx-auto">
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-700 mb-3">
                How Diglip7 Redefines ORM Excellence
              </h2>
            </FloatingElement>
            <p className="text-xs sm:text-sm sm:text-base text-gray-600 leading-relaxed">
              At Diglip7, our ORM services are a powerhouse of innovation, precision, and passion, tailored to your unique needs. Here’s how we turn your reputation into a masterpiece:
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
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-teal-600 to-[#c89d5a] text-white font-bold text-sm flex-shrink-0">
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
              This process is built for simplicity, effectiveness, and rapid growth.
            </p>
            <a href="/contact" className="inline-block">
              <motion.button
                className="px-6 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-teal-600 to-[#c89d5a] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base flex items-center justify-center gap-2"
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
          Don’t just take our word for it. See what our clients say about their ORM success with DigLip7.
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
              Get answers to the most common questions about our online reputation management services.
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
                Your Reputation Is
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white">
                  Your Superpower—Unleash It
                </span>
              </h2>
            </FloatingElement>

            <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              Your online reputation isn’t just data—it’s your digital DNA, the
              first impression that shapes your future. At Diglip7, we’re
              obsessed with making it extraordinary through our unrivaled ORM
              services. Whether you’re erasing past blunders, building
              unshakable trust, or staying one step ahead, our ORM is your
              ticket to digital dominance.
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

export default Online_rep_mana;
