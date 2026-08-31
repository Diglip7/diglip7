import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Users,
  HeartPulse,
  ChevronDown,
  ChevronRight,
  Sparkles,
  TrendingUp,
  Target,
  Award,
  Eye,
  MousePointer,
  BarChart3,
  Globe,
  Smartphone,
  Palette,
  Code,
  Search,
  Play,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Shield,
  Zap,
  ChevronLeft,
  Phone,
  X,
  ShieldCheck,
} from "lucide-react";

// Import images (these would be your actual image paths)
// import img1 from "../images/6.jpeg";
import aboutImage from "../images/2.png";
// import reachImg from "../images/3.png";
// import brandImg from "../images/4.png";
// import trustImg from "../images/5.png";
// import uiuxImage from "../images/29973.jpg";
// import d7 from "../images/D7.jpeg"
import f1 from "../images/formal1.jpg"
import f2 from "../images/formal2.jpg"
import f3 from "../images/formal3.jpg"

// {new2}
const caseStudies = [
  {
    id: 1,
    quote:
      "Working with DigLip7 was a game-changer. Their data-driven approach and transparent reporting gave us confidence in every decision. We've never seen such consistent growth month over month.",
    name: "Emily Watson",
    role: "Marketing Director, HealthPlus Medical",
    roi: 756,
    leads: 62,
    revenue: 1.8,
    duration: "6 Months",
  },
  {
    id: 2,
    quote:
      "DigLip7 transformed our campaigns. Clear insights, better targeting, and measurable growth made all the difference.",
    name: "James Parker",
    role: "CEO, FinEdge Solutions",
    roi: 890,
    leads: 74,
    revenue: 2.1,
    duration: "8 Months",
  },
  {
    id: 3,
    quote:
      "Our sales funnel improved drastically. The results speak for themselves – we achieved growth we didn’t think was possible.",
    name: "Sophia Lee",
    role: "Head of Marketing, TechNova",
    roi: 620,
    leads: 51,
    revenue: 1.4,
    duration: "5 Months",
  },
];

const faqs = [
  {
    question:
      "What is digital marketing, and why is it important for my business?",
    answer:
      "Digital marketing is the use of online channels to promote your products and services. It helps businesses increase visibility, attract potential customers, and boost sales through targeted strategies and measurable results.",
  },
  {
    question: "How can Diglip7 help grow my business?",
    answer:
      "We specialize in SEO, PPC, social media marketing, and local SEO to help expand your audience and connect with the right customers. Our data-driven approach ensures maximum ROI for your marketing investment.",
  },
  {
    question: "How long does it take to see results from digital marketing?",
    answer:
      "Typically, SEO results take 3-6 months, while PPC and social media campaigns can generate leads almost immediately. We provide regular reports to track progress and optimize strategies.",
  },
  {
    question: "What industries does Diglip7 specialize in?",
    answer:
      "We serve a wide range of industries including healthcare, e-commerce, education, real estate, technology, and more. Our team adapts strategies to meet industry-specific needs.",
  },
  {
    question:
      "Why should I hire a digital marketing agency instead of doing it myself?",
    answer:
      "An agency brings expertise, advanced tools, industry insights, and dedicated resources that save time and deliver better results than handling marketing alone. We stay updated with the latest trends and algorithm changes.",
  },
  {
    question: "What is SEO, and why does my business need it?",
    answer:
      "SEO (Search Engine Optimization) improves your website's visibility on search engines, driving organic traffic and increasing your chances of reaching customers who are actively searching for your services.",
  },
];

const expertiseData = [
  {
    id: 1,
    icon: <Target className="w-8 h-8" />,
    title: "Growth Accelerator",
    desc: "Perfect for small to medium businesses ready to scale",
    rate: "$2,000",
    rateyear: "Save $6,000/year",
    features: [
      "SEO & Content Marketing",
      "Google Ads Management",
      "Social Media Marketing",
      "Email Marketing Automation",
      "Monthly Performance Reports",
      "Dedicated Account Manager",
      "Landing Page Optimization",
      "Competitor Analysis",
    ],
  },
  {
    id: 2,
    icon: <Award className="w-8 h-8" />,
    title: "Market Dominator",
    desc: "Complete marketing ecosystem for ambitious companies",
    rate: "$3,600",
    rateyear: "Save $10,800/year",
    features: [
      "Everything in Growth Accelerator",
      "Advanced PPC Campaigns (All Platforms)",
      "Marketing Automation & CRM",
      "Custom Dashboard & Analytics",
      "A/B Testing & Conversion Optimization",
      "Influencer Outreach Campaigns",
      "Video Marketing & Creative",
      "Weekly Strategy Calls",

    ],
  },
  {
    id: 3,
    icon: <Shield className="w-8 h-8" />,
    title: "Enterprise Growth",
    desc: "Fully-managed solution for large organizations",
    rate: "$7,000",
    rateyear: "Save $18,000/year",
    features: [
      "Everything in Market Dominator",
      "Dedicated Growth Team (5+ Specialists)",
      "Custom Marketing Technology Stack",
      "Advanced Attribution Modeling",
      "Enterprise-level Integrations",
      "Brand Strategy & Positioning",
      "PR & Media Relations",
      "Executive Reporting & Insights",

    ],
  },
];

const stats = [
  {
    icon: <FileText className="w-10 h-10 mx-auto mb-3 text-white" />,
    title: "Successful Projects",
    value: "1500+",
    description: "Completed projects",
    color: "from-yellow-500 to-yellow-600",
  },
  {
    icon: <Users className="w-10 h-10 mx-auto mb-3 text-white" />,
    title: "Satisfied Customers",
    value: "250+",
    description: "Happy clients",
    color: "from-teal-700 to-teal-500",
  },
  {
    icon: <TrendingUp className="w-10 h-10 mx-auto mb-3 text-white" />,
    title: "Growth Rate",
    value: "300%",
    description: "Average growth",
    color: "from-purple-600 to-pink-600",
  },
];

const services = [
  {
    title: "Digital Marketing",
    icon: <TrendingUp className="w-8 h-8" />,
    color: "blue",
    description:
      "Comprehensive digital marketing strategies to boost your online presence",
    rm: "/digital-market",
    features: ["SEO Optimization", "Social Media", "Content Marketing"],
  },
  {
    title: "Web Development",
    icon: <Code className="w-8 h-8" />,
    color: "green",
    description: "Custom web solutions built with modern technologies",
    rm: "/development/web-development",
    features: ["Responsive Design", "Fast Loading", "SEO Friendly"],
  },
  {
    title: "UI/UX Design",
    icon: <Palette className="w-8 h-8" />,
    color: "purple",
    description: "User-centered design that converts visitors into customers",
    rm: "/design/UI-UX",
    features: ["User Research", "Wireframing", "Prototyping"],
  },
  {
    title: "Mobile Apps",
    icon: <Smartphone className="w-8 h-8" />,
    color: "pink",
    description: "Native and cross-platform mobile applications",
    rm: "/development/mobile-app-development",
    features: ["iOS & Android", "Cross-platform", "App Store Optimization"],
  },
  {
    title: "SEO Services",
    icon: <Search className="w-8 h-8" />,
    color: "yellow",
    description: "Improve your search engine rankings and organic traffic",
    rm: "/digital-market/seoservices",
    features: ["Keyword Research", "On-page SEO", "Link Building"],
  },
  {
    title: "Cloud Solutions",
    icon: <Globe className="w-8 h-8" />,
    color: "indigo",
    description: "Scalable cloud infrastructure and deployment solutions",
    rm: "/development/cloud-application-development",
    features: ["Cloud Migration", "DevOps", "Security"],
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechStart Inc.",
    text: "Diglip7 transformed our online presence completely. Our leads increased by 300% in just 6 months!",
    rating: 5,
    image:
      f1,
  },
  {
    name: "Michael Chen",
    company: "E-commerce Plus",
    text: "Their SEO strategies helped us rank #1 for our main keywords. Incredible results!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
  },
  {
    name: "Emily Davis",
    company: "Local Business Co.",
    text: "Professional team with exceptional results. Our ROI improved dramatically.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
  },
];

function Home() {
  const [openIndex, setOpenIndex] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    // Google Tag Manager
    const script = document.createElement('script');
    script.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-K3KHW2JJ');
    `;
    document.head.prepend(script);

    // Google Site Verification
    const meta = document.createElement('meta');
    meta.name = 'google-site-verification';
    meta.content = 'WaLhKfxePCohSoCD9dR1n6C3_cX1H_Aqar3idXvMWn8';
    document.head.prepend(meta);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  // {increase}

  const START = {
    roi: 847,
    conversion: 12.4,
    cpl: 8.5,
    revenue: 124,
  };

  const [roi, setRoi] = useState(START.roi);
  const [conversion, setConversion] = useState(START.conversion);
  const [cpl, setCpl] = useState(START.cpl);
  const [revenue, setRevenue] = useState(START.revenue);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoi((prev) => (prev >= START.roi + 20 ? START.roi : prev + 1));
      setConversion((prev) =>
        prev >= START.conversion + 20
          ? START.conversion
          : parseFloat((prev + 1).toFixed(1))
      );
      setCpl((prev) =>
        prev >= START.cpl + 20 ? START.cpl : parseFloat((prev + 1).toFixed(2))
      );
      setRevenue((prev) =>
        prev >= START.revenue + 20 ? START.revenue : prev + 1
      );
    }, 100); // update speed (0.1s)

    return () => clearInterval(interval);
  }, []);

  // {new}

  // {new2}
  const [current, setCurrent] = useState(0);
  const [rois, setRois] = useState(START.roi);
  const [leads, setLeads] = useState(caseStudies[0].leads);
  const [revenues, setRevenues] = useState(caseStudies[0].revenue);

  // Continuous number increment effect (+20 each 2s)
  useEffect(() => {
    const interval = setInterval(() => {
      setRois((prev) => (prev >= START.roi + 20 ? START.roi : prev + 1));
      setLeads((prev) => prev + 20);
      setRevenues((prev) => parseFloat((prev + 0.02).toFixed(2)));
    }, 150);
    return () => clearInterval(interval);
  }, []);

  // Auto-slide every 7s
  useEffect(() => {
    const auto = setInterval(() => {
      setCurrent((prev) => (prev + 1) % caseStudies.length);
    }, 7000);
    return () => clearInterval(auto);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
  };

  const cs = caseStudies[current];

  // {main}
  const [timeLeft, setTimeLeft] = useState({
    hours: 22,
    minutes: 52,
    seconds: 4,
  });
  const [isVisible, setIsVisible] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowBanner(false);
      } else if (currentScrollY < lastScrollY) {
        setShowBanner(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="bg-teal-50 overflow-x-hidden w-full">
      {/* Google Tag Manager (noscript) */}
      <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K3KHW2JJ" height="0" width="0" style="display:none;visibility:hidden"></iframe>` }} />
      {/* End Google Tag Manager (noscript) */}
      {/* Hero Section */}

      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-r from-purple-100 via-pink-100 to-white">
        <div className="max-w-7xl mx-auto pt-32 px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
              #1 Rated Agency 2025
            </span>
            <span className="text-yellow-500 text-xl">★★★★★</span>
            <span className="text-gray-700 text-lg">4.5</span>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-gray-900">Digital Marketing </span>
              <br className="text-gray-600" />

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                Agency – AI-Powered
              </span>
              <br />
              <span className="text-red-500">SEO & PPC Experts</span>
            </h1>

            <p className="text-gray-600 max-w-xl">
              DigLip7 is the #1 digital marketing agency,
              <span className="text-purple-600 font-semibold">
                specializing in SEO, PPC, and custom website design.
              </span>{" "}
              We help brands grow faster with proven online marketing solutions.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg shadow hover:scale-105 transition"
              >
                <span className="text-white">Get Free $2,500 Audit</span>
              </a>

            </div>

            {/* Guarantees */}
            <div className="flex flex-wrap gap-4 pt-4 text-sm text-gray-700">
              <span className="flex items-center gap-2">
                ✅ Money-Back Guarantee
              </span>
              <span className="flex items-center gap-2">
                ✅ Results in 30 Days
              </span>
              <span className="flex items-center gap-2">
                ✅ No Long-term Contracts
              </span>
            </div>
          </motion.div>

          {/* Right Content: Performance Card */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className=" rounded-2xl p-6 space-y-6 relative"
          >
            <h2 className="text-lg font-semibold text-gray-800">
              Campaign Performance
            </h2>
            <p className="text-sm text-gray-500">Real-time results</p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium text-gray-500">ROI</p>
                <p className="text-green-600 font-bold">{roi}% ↑</p>
              </div>
              <div>
                <p className="font-medium text-gray-500">Conversion Rate</p>
                <p className="text-blue-600 font-bold">{conversion}% ↑</p>
              </div>
              <div>
                <p className="font-medium text-gray-500">Cost Per Lead</p>
                <p className="text-red-600 font-bold">${cpl} ↓</p>
              </div>
              <div>
                <p className="font-medium text-gray-500">Revenue</p>
                <p className="text-purple-600 font-bold">${revenue}K ↑</p>
              </div>
            </div>

            {/* Progress Bars */}
            <div className="space-y-4">
              {/* Google Ads */}
              <div>
                <p className="text-sm text-gray-600">Google Ads </p>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: "60%" }}
                    animate={{ width: ["60%", "92%", "60%"] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="bg-green-500 h-2 rounded-full"
                  />
                </div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [1, 0.6, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-green-600 font-bold"
                >
                  92%
                </motion.p>
              </div>

              {/* Facebook Ads */}
              <div>
                <p className="text-sm text-gray-600">Facebook Ads</p>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: "50%" }}
                    animate={{ width: ["50%", "87%", "50%"] }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="bg-blue-500 h-2 rounded-full"
                  />
                </div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [1, 0.6, 1] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                  className="text-blue-600 font-bold"
                >
                  87%
                </motion.p>
              </div>

              {/* SEO Ranking */}
              <div>
                <p className="text-sm text-gray-600">SEO Ranking</p>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: "40%" }}
                    animate={{ width: ["40%", "78%", "40%"] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="bg-purple-500 h-2 rounded-full"
                  />
                </div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [1, 0.6, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="text-purple-600 font-bold"
                >
                  78%
                </motion.p>
              </div>
            </div>

            {/* Floating Revenue Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute -top-6 right-6 bg-white shadow-md rounded-xl px-4 py-2 text-green-600 font-semibold"
            >
              +$12,847 Today
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="w-full bg-teal-50 py-12 lg:py-16">
        <div className=" mx-auto px-4 lg:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`bg-gradient-to-br ${stat.color} text-center p-6 lg:p-8 rounded-3xl shadow-2xl relative overflow-hidden group hover:scale-105 transition-all duration-300`}
                whileHover={{ y: -5 }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
                </div>

                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="relative z-10"
                >
                  {stat.icon}
                </motion.div>

                <h3 className="mt-6 text-lg lg:text-xl font-bold text-white relative z-10">
                  {stat.title}
                </h3>

                <motion.div
                  className="mt-4 relative z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1, type: "spring" }}
                >
                  <p className="text-3xl lg:text-4xl font-extrabold text-white">
                    {stat.value}
                  </p>
                  <p className="text-white/90 mt-2">{stat.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* {new2} */}
      <div className="flex flex-col items-center justify-center px-4 py-10 bg-gray-50">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
            Client Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-black">
            Real Results From <br />
            <span className="text-purple-600">Real Businesses</span>
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Don’t just take our word for it. See how we’ve helped businesses
            like yours achieve extraordinary growth and measurable ROI.
          </p>
        </div>

        {/* Slider */}
        <div className="relative w-full max-w-6xl">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row gap-8"
          >
            {/* Left side: Quote */}
            <div className="md:w-1/2">
              <div className="text-purple-600 text-4xl mb-4">❝</div>
              <p className="text-gray-700 text-lg mb-6 italic">{cs.quote}</p>
              <div className="flex items-center gap-3">

                <div>
                  {/* <p className="font-semibold">{cs.name}</p> */}
                  <p className="text-gray-500 text-sm">{cs.role}</p>
                </div>
              </div>
              {/* <a href="/contact">
              <button className="mt-6 flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-200 transition
              dark:border-gray-600 dark:text-white dark:hover:bg-gray-700 dark:hover:text-teal-300 dark:bg-teal-700">
                <Play size={16} /> Watch Full Case Study
              </button></a> */}

              <a href="/contact" className="gap-2 px-4 py-2">
                <motion.button

                  className="gap-2 flex items-center px-4 py-6 group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white text-lg font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >

                  Get Started
                  <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </a>
            </div>

            {/* Right side: Campaign Results */}
            <div className="md:w-1/2 grid gap-4">
              <div className="p-4 rounded-lg bg-green-50 flex justify-between">
                <span className="text-gray-900">ROI Increase</span>
                <span className="text-green-600 font-bold">{rois}% ↑</span>
              </div>
              <div className="p-4 rounded-lg bg-blue-50 flex justify-between">
                <span className="text-gray-900">Qualified Leads</span>
                <span className="text-blue-600 font-bold">{leads}</span>
              </div>
              <div className="p-4 rounded-lg bg-pink-50 flex justify-between">
                <span className="text-gray-900">Revenue Generated</span>
                <span className="text-pink-600 font-bold">${revenues}M</span>
              </div>
              <div className="p-4 rounded-lg bg-purple-50  ">
                <span className="text-gray-900">Campaign Duration</span>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: "40%" }}
                    animate={{ width: ["40%", "78%", "40%"] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="bg-purple-500 h-2 rounded-full"
                  />
                </div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [1, 0.6, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="text-purple-600 font-bold"
                >
                  <span className="text-purple-600 font-bold">
                    {cs.duration}
                  </span>
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* Slider Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -left-5 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-5 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Dots */}
        <div className="flex gap-2 mt-6">
          {caseStudies.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full cursor-pointer ${current === i ? "bg-purple-600" : "bg-gray-300"
                }`}
              onClick={() => setCurrent(i)}
            ></div>
          ))}
        </div>
      </div>

      {/* Trusted By Section */}
      <section className="py-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-xl text-black font-semibold mb-10"
        >
          Trusted by Industry Leaders
        </motion.h2>

        {/* Logo carousel */}
        {/* <div className="overflow-hidden relative">
          <div className="flex animate-scroll gap-12">
            {Array(4)
              .fill("")
              .map((_, i) => (
                <img
                  key={i}
                  src="https://dummyimage.com/120x60/cccccc/000000&text=Logo"
                  alt="partner logo"
                  className="h-16 w-auto grayscale hover:grayscale-0 transition"
                />
              ))}
          </div>
        </div> */}
      </section>

      {/* CTA Section */}
      <section className="py-6 px-6 md:px-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-3xl shadow-lg text-center p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-lg mb-8 text-purple-100 max-w-2xl mx-auto">
            Join 500+ businesses that have transformed their growth with our
            proven strategies. Get your free marketing audit today.
          </p><a href="/contact">
            <button className="flex items-center justify-center mx-auto gap-2 flex items-center px-4 py-6 group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white text-lg font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105">
              Start Your Success Story <ArrowRight size={18} />
            </button></a>
        </motion.div>
      </section>

      {/* About Diglip7 Section */}
      <section className="w-full py-12 lg:py-20 px-4 lg:px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-6 lg:space-y-8"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <motion.span
                className="inline-block px-4 py-2 bg-gradient-to-r from-teal-700/20 to-teal-500/20 rounded-full text-teal-700 font-semibold text-sm mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                ABOUT US
              </motion.span>

              <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 leading-tight">
                About Diglip7 – A Leading{" "}
                <span className="text-transparent bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text">
                  Digital Marketing Agency
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                At Diglip7, we help businesses grow online with smart digital
                strategies. We have successfully completed{" "}
                <span className="font-bold text-yellow-600">
                  1,500+ projects
                </span>{" "}
                for over{" "}
                <span className="font-bold text-yellow-600">250 brands</span>,
                delivering real results that matter.
              </p>

              <p>
                We offer a comprehensive suite of services, including website
                design, e-commerce solutions, ERP development, and Google Ads
                management. We also specialize in SEO, social media marketing,
                and local SEO.
              </p>

              <p>
                With a deep understanding of different industries, we create
                customized strategies that work. Our goal is to help brands
                grow, succeed, and stay ahead in the digital world.
              </p>
            </div>

            {/* Key Points */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: <Award className="w-6 h-6" />,
                  text: "Industry Expertise",
                },
                {
                  icon: <Target className="w-6 h-6" />,
                  text: "Results-Driven",
                },
                {
                  icon: <Clock className="w-6 h-6" />,
                  text: "Timely Delivery",
                },
                {
                  icon: <Shield className="w-6 h-6" />,
                  text: "Trusted Partner",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-yellow-600">{item.icon}</div>
                  <span className="font-medium text-gray-700 text-sm">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img
                src={aboutImage}
                alt="About Diglip7"
                className="rounded-3xl shadow-2xl w-full max-w-md lg:max-w-lg"
              />

              {/* Decorative Elements */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-yellow-500/30 to-yellow-400/30 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-teal-700/30 to-teal-500/30 rounded-full animate-pulse"></div>

              {/* Floating Stats */}
              <motion.div
                className="absolute top-8 -right-4 bg-white rounded-2xl p-4 shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600">98%</div>
                  <div className="text-xs text-gray-600">Success Rate</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>



      {/* Services Section */}
      <section className="w-full py-12 lg:py-20 px-4 lg:px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-yellow-400/20 rounded-full text-yellow-600 font-semibold text-sm mb-6">
              OUR SERVICES
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Complete Digital Marketing
              <span className="text-transparent bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text">
                Solutions That Scale
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              From strategy to execution, we provide everything you need to
              dominate your market. Our integrated approach ensures every
              channel works together for maximum impact.
            </p>
          </motion.div>
          <div className="p-4 rounded-lg bg-green-50 flex justify-between">
            <span className="text-gray-600">500+ Successful Campaigns ↑</span>
            <span className="text-green-600 font-bold">$47M+ Revenue Generated↑</span>
            <span className="text-green-600 font-bold">99.2% Client Retention↑</span>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-teal-500 to-teal-800 rounded-xl text-white group-hover:scale-110 transition-transform duration-200">
                    {service.icon}
                  </div>
                  <h3 className="font-bold text-xl text-gray-900">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <CheckCircle className="w-4 h-4 text-teal-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={service.rm}
                  className="inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-500 font-medium transition-colors duration-200 group"
                >
                  Learn More
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="w-full py-12 lg:py-20 px-4 lg:px-6 bg-gray-50">
        <div className="container mx-auto">
          {/* Heading */}
          <motion.div
            className="text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-teal-700/20 to-teal-500/20 rounded-full text-teal-700 font-semibold text-sm mb-6">
              OUR EXPERTISE
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-teal-700 mb-4">
              Invest in Growth,
              <span className="text-transparent bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text">
                See Real Returns
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your growth goals. All plans include our
              performance guarantee and can be customized to your specific
              needs.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {expertiseData.map((item, index) => (
              <motion.div
                key={item.id}
                className="bg-white rounded-2xl p-6 lg:p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-teal-700 to-teal-600 rounded-2xl text-white group-hover:scale-110 transition-transform duration-200">
                    {item.icon}
                  </div>
                </div>

                {/* <div className="flex justify-center mb-6">
                  <img
                    src={
                      item.id === 1
                        ? reachImg
                        : item.id === 2
                        ? brandImg
                        : trustImg
                    }
                    alt={item.title}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div> */}

                <h3 className="text-xl font-semibold text-teal-800 mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.desc}
                </p>
                <h2 className="text-xl font-bold text-teal-800 ">
                  {item.rate}
                  <span className="text-sm font-semibold">/month</span>
                </h2>
                <p className="text-teal-800 mb-6 leading-relaxed">
                  {item.rateyear}
                </p>

                <div className="space-y-2">
                  {item.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center text-base  gap-2 text-sm text-gray-600"
                    >
                      <CheckCircle className="w-4 h-4 text-base text-teal-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  <a href="/contact">
                    <button className="
    gap-2 flex items-center px-4 py-6 group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white text-lg font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105
  ">
                      <Phone className="w-4 h-4" />
                      <span>Schedule callback</span>
                    </button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* {main} */}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Title Section */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Enhanced Solutions
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Supercharge your growth with these additional services that
            complement any plan.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {[
            {
              icon: <BarChart3 className="w-8 h-8" />,
              title: "Website Development",
              price: "$4,500",
              description: "High-converting landing pages and full websites",
              color: "from-purple-500 to-purple-600",
              delay: "delay-100",
            },
            {
              icon: <Zap className="w-8 h-8" />,
              title: "Marketing Automation Setup",
              price: "$2,500",
              description: "Advanced workflows and lead nurturing sequences",
              color: "from-purple-600 to-pink-600",
              delay: "delay-300",
            },
            {
              icon: <Star className="w-8 h-8" />,
              title: "Brand Strategy & Design",
              price: "$3,500",
              description: "Complete brand identity and visual guidelines",
              color: "from-pink-500 to-pink-600",
              delay: "delay-500",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 ${service.delay
                } ${isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
                } cursor-pointer group`}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <div className="text-white">{service.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p
                className={`text-2xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent mb-4`}
              >
                From {service.price}
              </p>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Questions Section */}
        <div
          className={`bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            } mb-12`}
        >
          <div className="text-center text-white">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Still Have Questions?
            </h3>
            <p className="text-lg sm:text-xl mb-10 text-purple-100 max-w-3xl mx-auto">
              We're here to help you choose the perfect plan for your business
              goals. Get personalized recommendations from our growth experts.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <a href="/contact">
                <button className="group px-8 py-4 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-700 to-teal-900 text-white text-lg font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105">
                  {/* <Phone className="w-5 h-5" /> */}
                  <span>Schedule Free Consultation</span>
                </button></a>
              <a href="/contact">
                <button className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-700 to-teal-900 text-white text-lg font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105">
                  {/* <Users className="w-5 h-5" /> */}
                  <span>View Success Stories</span>
                </button></a>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                  <Clock className="w-8 h-8 text-teal-900" />
                </div>
                <h4 className="text-xl font-bold mb-2">Quick Setup</h4>
                <p className="text-purple-100">Launch in 7 days or less</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-bold mb-2">Risk-Free</h4>
                <p className="text-purple-100">Money-back guarantee</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                  <Users className="w-8 h-8 text-blue-400" />
                </div>
                <h4 className="text-xl font-bold mb-2">Expert Team</h4>
                <p className="text-purple-100">Dedicated specialists</p>
              </div>
            </div>
          </div>
        </div>

        {/* Add more content for scrolling demo */}
        <div className=""></div>
      </main>

      {/* Bottom Sticky Banner */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 transition-transform  ${showBanner ? "translate-y-0" : "translate-y-full"
          }`}
      >
        <div className="bg-gradient-to-r from-purple-400 via-purple-300 to-pink-400 shadow-2xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  sm:py-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              {/* Left Section - Timer and Title */}
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 flex-1">
                <div className="flex items-center space-x-2 shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center space-x-1 animate-pulse">
                    <svg
                      className="w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Limited Time</span>
                  </div>
                  <div className="hidden sm:block text-white text-sm">
                    Expires in:{" "}
                    <span className="font-mono font-bold">
                      {String(timeLeft.hours).padStart(2, "0")}:
                      {String(timeLeft.minutes).padStart(2, "0")}:
                      {String(timeLeft.seconds).padStart(2, "0")}
                    </span>
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="text-white text sm:text-xl lg:text ">
                    FREE $2,500 Marketing Audit
                  </h4>
                  <p className="text-purple-100 text-sm hidden md:block">
                    Discover exactly how to 10X your leads & revenue
                  </p>
                </div>
              </div>

              {/* Center Section - Features (Hidden on mobile) */}
              {/* <div className="hidden xl:flex items-center gap-6 text-white text-sm flex-1 justify-center">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>1 FREE consultation worth</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>500+ successful campaigns</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>99.2% client retention rate</span>
                </div>
              </div> */}

              {/* Right Section - Buttons */}
              <div className="flex items-center gap-3">
                <a href="/contact">
                  <button className="gap-2 flex items-center px-4 py-6 group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white text-lg font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105">
                    <span>Get Free Audit</span>
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button></a>
                <a href="/contact">
                  <button className="gap-2 flex items-center px-4 py-6 group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white text-lg font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105">
                    <Phone className="w-4 h-4" />
                    <span>Schedule callback</span>
                  </button></a>
                <button
                  onClick={() => setShowBanner(false)}
                  className="w-10 h-10 gap-2 flex items-center px-4 py-6 group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-700 to-teal-900 text-white text-lg font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  <X className="w-5 h-5 text-black-600 text-bold 
                  dark:border-gray-600 dark:text-white dark:hover:bg-gray-700 dark:hover:text-teal-300 dark:bg-teal-700" />
                </button>
              </div>
            </div>

            {/* Mobile Timer */}
            <div className="sm:hidden text-center text-white text-xs mt-3">
              Expires in:{" "}
              <span className="font-mono font-bold">
                {String(timeLeft.hours).padStart(2, "0")}:
                {String(timeLeft.minutes).padStart(2, "0")}:
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 px-6 md:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl bg-purple-600/30 shadow-md"
          >
            <TrendingUp className="w-10 h-10 mx-auto text-pink-400 mb-4" />
            <h3 className="text-lg font-bold mb-2">Guaranteed ROI</h3>
            <p className="text-gray-200">
              See 300%+ returns within 6 months or get your money back
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl bg-purple-600/30 shadow-md"
          >
            <Clock className="w-10 h-10 mx-auto text-pink-400 mb-4" />
            <h3 className="text-lg font-bold mb-2">Quick Results</h3>
            <p className="text-gray-200">
              Start seeing qualified leads within 30 days of launch
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl bg-purple-600/30 shadow-md"
          >
            <Users className="w-10 h-10 mx-auto text-pink-400 mb-4" />
            <h3 className="text-lg font-bold mb-2">Expert Team</h3>
            <p className="text-gray-200">
              Dedicated specialists with 10+ years of experience
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl bg-purple-600/30 shadow-md"
          >
            <ShieldCheck className="w-10 h-10 mx-auto text-pink-400 mb-4" />
            <h3 className="text-lg font-bold mb-2">Risk-Free</h3>
            <p className="text-gray-200">
              90-day money-back guarantee on all new campaigns
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full  lg:py-20 px-4 lg:px-6 bg-gradient-to-br from-teal-700 to-teal-600">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
              What Our <span className="text-yellow-400">Clients Say</span>
            </h2>
            <p className="text-lg lg:text-xl text-teal-100">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-6 lg:p-12 shadow-2xl"
            >
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 text-yellow-500 fill-current"
                    />
                  )
                )}
              </div>

              <blockquote className="text-lg lg:text-2xl text-gray-700 mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <div className="font-bold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Testimonial Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentTestimonial
                    ? "bg-yellow-400 scale-125"
                    : "bg-white/50 hover:bg-white/75"
                  }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-gray-50 py-12 lg:py-20 px-4 lg:px-6">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-yellow-400/20 rounded-full text-yellow-600 font-semibold text-sm mb-6">
              FAQ
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked{" "}
              <span className="text-transparent bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text">
                Questions
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600">
              Get answers to common questions about our services
            </p>
          </motion.div>

          <div className="space-y-4 dark:bg-white ">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-white hover:text-white rounded-2xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full  flex justify-between items-center text-left p-6 text-lg font-semibold text-gray-800 transition-colors duration-200 group 
                   group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-700 to-teal-900 text-white text-lg font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-102 hover:bg-teal-900"
                >
                  {faq.question}
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 ml-4"
                  >
                    <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-yellow-600" />
                  </motion.div>
                </button>

                {/* Answer with animation */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="px-6 pb-6"
                    >
                      <div className="text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
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

      {/* Call to Action Section */}

    </div>
  );
}

export default Home;
