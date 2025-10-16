import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  TrendingUp, 
  BarChart3, 
  Search, 
  Handshake, 
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
 PlayCircle,BarChart, Settings, FileText,Quote 
} from "lucide-react";
import seo2 from "../images/seon3.jpg";
import seoImage from "../images/seon.jpg"
import seo4 from "../images/seon5.jpeg";
import aboutImg from "../images/seo13.png";

import ppc1 from "../images/ppc001.png";
import ppc2 from "../images/ppc002.png";
import ppc3 from "../images/ppc003.png";
import ppc4 from "../images/ppc004.jpeg";

// news 
const testimonials = [
  {
    name: "Amit K., Business Owner",
    title: "CEO, TechStart Inc.",
    quote:
      "DigLip 7 transformed our online presence with their exceptional SEO services. Our website traffic increased significantly, and we now rank higher on Google. Truly a game-changer for our business!",
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Sara M., Marketing Manager",
    title: "Founder, EcoShop",
    quote:
      "Working with DigLip 7 was one of the best decisions we made. Their team is professional, detail-oriented, and delivers real results. Our brand visibility and lead generation have improved dramatically.",
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Jessica L., Marketing Director, New York, USA",
    title: "Director, HealthPlus Clinic",
    quote:
      "DigLip 7’s SEO expertise completely changed our online visibility. Within months, our website started ranking on the first page, and leads grew steadily. Highly recommend their services!",
    image: "https://i.pravatar.cc/100?img=3",
  },
  {
    name: "Michael R., Small Business Owner, California, USA",
    title: "Manager, BrightMedia",
    quote:
      "We hired DigLip 7 to improve our search rankings, and they exceeded expectations. Their professional approach and clear results make them the top SEO partner for any business.",
    image: "https://i.pravatar.cc/100?img=4",
  },
];




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
      "SEO can seem technical, but we keep it simple. We provide clear explanations and easy-to-understand updates, so you always know what's happening with your site.",
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
    title: "E-Commerce SEO",
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
    title: "Enterprise SEO",
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
      "We specialize in SEO, PPC, social media marketing, and local SEO to help expand your audience and connect with the right customers."
  },
  {
    question: "How long does it take to see results from digital marketing?",
    answer:
      "Typically, SEO results take 3-6 months, while PPC and social media campaigns can generate leads almost immediately."
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

function Sco() {
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



  // {new}
  // Counter animation (increasing & decreasing)
  const [stats, setStats] = useState({ traffic: 0, visibility: 0, leads: 0, revenue: 0 });
  const limits = { traffic: 250, visibility: 180, leads: 320, revenue: 150 };
  const directions = { traffic: 1, visibility: 1, leads: 1, revenue: 1 };

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => {
        const newStats = { ...prev };
        for (let key in newStats) {
          const change = directions[key] === 1 ? 1 : -1;
          newStats[key] += change;

          if (newStats[key] >= limits[key]) directions[key] = -1;
          if (newStats[key] <= 20) directions[key] = 1;
        }
        return { ...newStats };
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const packages = [
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

  // news 
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-change testimonial every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  

  return (
    <div className="  w-full bg-white ">
      {/* Hero Section with Parallax */}
       <div className=" pt-20 bg-gradient-to-r from-purple-100 via-pink-100 to-white min-h-screen flex flex-col justify-center items-center px-6 md:px-16 relative overflow-hidden">
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
                    <span className="text-gray-900">Unlock Success with SEO: The Smart Choice for</span>
                    <br className="text-gray-600" />
                  
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                      Your Business | DigLip 7
                    </span>
                    <br />
                    
                  </h1>
                <p className="text-gray-700 mb-6">
                  At <span className="font-semibold text-blue-700">DigLip7</span>Transform your business with powerful SEO. Increase online visibility, attract the right audience, and achieve sustainable growth with proven, results-driven SEO strategies.

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
                    Get Free SEO Audit <ArrowRight size={18} />
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
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img
                src={seo2}
                alt="About Diglip7"
                className="rounded-3xl shadow-2xl w-full max-w-md lg:max-w-lg"
              />

              {/* Decorative Elements */}
              {/* <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-yellow-500/30 to-yellow-400/30 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-teal-700/30 to-teal-500/30 rounded-full animate-pulse"></div> */}

              {/* Floating Stats */}
              <motion.div
                className="absolute top-0 -right-4 bg-white rounded-2xl p-4 shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600">+150%</div>
                  <div className="text-xs font-bold text-gray-600">Traffic Growth</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-80 -left-4 bg-white rounded-2xl p-4 shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600">#1 Ranking</div>
                  
                </div>
              </motion.div>
            </div>
          </motion.div>
            </div>
           
                    
          </div>
      

      {/* About Section with 3D Cards */}
      <section id="about" className=" sm:py-16 lg: bg-white">
        <div className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
      {/* WHY SEO SECTION */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 mb-20">
        {/* Left Image */}
        <motion.img
          src={seo4}
          alt="SEO Growth"
          className="rounded-2xl  w-full md:w-1/2"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Right Text */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
           Why SEO is the Best Investment for Your Business

          </h2>
          <p className="text-gray-700 mb-4">
            SEO is a powerful, long-term strategy that boosts <span className="font-semibold text-blue-700">DigLip7</span>,
            your website's visibility and drives organic traffic. Unlike paid ads, SEO works 24/7 to improve rankings, attract quality leads, and build lasting brand credibility for sustainable online growth.
          </p>
          <ul className="text-gray-800 space-y-2 text-left mx-auto md:mx-0">
            <li>✅ Cost-Effective Growth</li>
            <li>✅ Increased Visibility</li>
            <li>✅ Better User Experience</li>
            <li>✅ Higher ROI</li>
            <li>✅ Brand Trust</li>
            <li>✅ Sustainable Results</li>
          </ul>
        </div>
      </div>

      {/* OUR SEO SERVICES */}
      <div className="max-w-6xl mx-auto text-center mb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our SEO Services</h2>
        <p className="text-gray-600 mb-10">
          Comprehensive SEO solutions tailored to boost your online presence and drive results.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Search, title: "Keyword Research & Strategy" },
            { icon: FileText, title: "On-Page SEO" },
            { icon: Link2, title: "Off-Page SEO & Link Building" },
            { icon: Settings, title: "Technical SEO Audit" },
            { icon: Target, title: "Local SEO Optimization" },
            { icon: BarChart, title: "Content Optimization" },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all cursor-pointer border border-gray-100"
              whileHover={{ scale: 1.05 }}
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="flex justify-center mb-4">
                <service.icon className="text-blue-600 w-10 h-10" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive analysis and strategies designed to improve visibility and traffic.
              </p>
              <a
                href="/contact"
                className="inline-block mt-3 text-blue-700 font-medium text-sm hover:underline"
              >
                Learn More →
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* OUR PROVEN SEO PROCESS */}
      {/* <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Proven SEO Process</h2>
        <p className="text-gray-600 mb-10">
          A systematic approach that delivers measurable results for our clients.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {["Research", "Strategy", "Implementation", "Monitoring", "Reporting", "Improvement"].map(
            (step, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center bg-white p-4 rounded-xl shadow-md hover:shadow-lg"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
              >
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                  <BarChart className="text-blue-600 w-6 h-6" />
                </div>
                <h4 className="font-semibold text-gray-900 text-sm">{step}</h4>
              </motion.div>
            )
          )}
        </div>
      </div> */}
    </div>
      </section>

      {/* Results Section with Custom Shape */}
      <div className="bg-white py-16 px-6 md:px-12 lg:px-20">
      {/* SUCCESS STORIES */}
      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Proven SEO Success Stories</h2>
        <p className="text-center text-gray-600 mb-10">
          Real results from real businesses that trusted DigLip7 with their SEO journey.
        </p>

        <div className="bg-gray-50 rounded-2xl shadow-md p-6 flex flex-col md:flex-row gap-8 items-center">
          {/* Image */}
          <img
            src={seoImage}
            alt="SEO Results"
            className="rounded-xl w-full md:w-1/2 shadow-lg"
          />

          {/* Results */}
          <div className="flex-1 space-y-4">
            <h3 className="font-semibold text-gray-800 text-lg">TechStart Inc.</h3>
            <p className="text-sm text-gray-600">
              Transformed a struggling tech startup into an industry leader through advanced SEO.
            </p>
            <div className="grid grid-cols-2 gap-4 text-center">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="bg-white rounded-xl shadow-md p-4"
              >
                <p className="text-3xl font-bold text-blue-600">+{stats.traffic}%</p>
                <p className="text-sm text-gray-700">Traffic</p>
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="bg-white rounded-xl shadow-md p-4"
              >
                <p className="text-3xl font-bold text-blue-600">+{stats.visibility}%</p>
                <p className="text-sm text-gray-700">Visibility</p>
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="bg-white rounded-xl shadow-md p-4"
              >
                <p className="text-3xl font-bold text-blue-600">+{stats.leads}%</p>
                <p className="text-sm text-gray-700">Leads</p>
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="bg-white rounded-xl shadow-md p-4"
              >
                <p className="text-3xl font-bold text-blue-600">+{stats.revenue}%</p>
                <p className="text-sm text-gray-700">Revenue</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* PRICING SECTION */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          SEO Packages Designed for Every Stage
        </h2>
        <p className="text-gray-600 mb-10">
          Choose the perfect SEO package that fits your business needs and budget.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              className={`rounded-2xl p-8 shadow-lg transition-all ${
                pkg.popular ? "border-4 border-blue-500 bg-white" : "bg-gray-50"
              }`}
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
              <button
                className="group px-8 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-700 to-teal-900 text-white text-lg font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105"
              >
                {pkg.button}
              </button>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-gray-500 text-sm">
          All plans include a 30-day money-back guarantee. Need a custom plan?{" "}
          <a href="/contact" className="text-blue-600 underline">
            Contact us
          </a>
          .
        </p>
      </div>
    </div>


    {/* news  */}

    <section className="bg-gradient-to-r from-purple-50 via-purple-50 to-pink-50 py-20 px-4 sm:px-8">
      {/* 💬 Testimonials Section */}
      <div className="max-w-6xl mx-auto text-center mb-20">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-teal-900 mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Trusted by Businesses Worldwide
        </motion.h2>
        <p className="text-gray-500 dark:text-gray-900 mb-10">
          Don’t just take our word for it. See what our clients say about their SEO success with DigiUp.
        </p>

        {/* Main Highlighted Testimonial */}
        <motion.div
          key={activeIndex}
          className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 md:p-10 mx-auto max-w-3xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Quote className="text-teal-600 w-10 h-10 mx-auto mb-4" />
          <p className="text-gray-700 dark:text-gray-200 italic mb-6">{testimonials[activeIndex].quote}</p>
          <div className="flex items-center justify-center gap-4">
            <img
              src={testimonials[activeIndex].image}
              alt={testimonials[activeIndex].name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-bold text-gray-900 dark:text-white">{testimonials[activeIndex].name}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonials[activeIndex].title}</p>
            </div>
          </div>
        </motion.div>

        {/* Small Carousel Avatars */}
        <div className="flex justify-center mt-8 gap-4 flex-wrap">
          {testimonials.map((t, i) => (
            <motion.button
              key={i}
              className={`p-2 rounded-full border-2 ${
                activeIndex === i ? "border-blue-500 scale-110" : "border-gray-300"
              } transition-all duration-300`}
              onClick={() => setActiveIndex(i)}
              whileHover={{ scale: 1.1 }}
            >
              <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full" />
            </motion.button>
          ))}
        </div>
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
      <section className="bg-pink-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <FloatingElement>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-700 mb-4 sm:mb-6">
              Comprehensive SEO Solutions
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
                        className="flex items-center justify-center w-10 h-10 group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-700 to-teal-900 text-white text-lg font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105"
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
              className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-700 to-teal-900 text-white text-lg font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105"
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
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-teal-700 to-[#c89d5a] overflow-hidden 
      group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-500 to-teal-900 text-white text-lg font-semibold  shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105">
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

export default Sco;





// import seo2 from "../images/seo01.png";
// import seoImage from "../images/seo12.png"
// import seo4 from "../images/seo11.png";
// import aboutImg from "../images/seo13.png";
