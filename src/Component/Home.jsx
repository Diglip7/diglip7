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
} from "lucide-react";

// Import images (these would be your actual image paths)
import img1 from "../images/6.jpeg";
import aboutImage from "../images/2.png";
import reachImg from "../images/3.png";
import brandImg from "../images/4.png";
import trustImg from "../images/5.png";
import uiuxImage from "../images/29973.jpg";
// import d7 from "../images/D7.jpeg"

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
    title: "Improved Customer Reach",
    desc: "We help you expand your audience through SEO, PPC, social media marketing, and local SEO, ensuring your brand reaches the right customers at the right time.",
    features: [
      "Multi-channel approach",
      "Targeted campaigns",
      "Local optimization",
    ],
  },
  {
    id: 2,
    icon: <Award className="w-8 h-8" />,
    title: "Complete Brand Control",
    desc: "With customized marketing strategies, we give you full control over your brand's online identity, ensuring consistency and a strong digital presence.",
    features: ["Brand consistency", "Custom strategies", "Digital identity"],
  },
  {
    id: 3,
    icon: <Shield className="w-8 h-8" />,
    title: "Enhanced Customer Trust",
    desc: "By improving your online visibility, reputation management, and content marketing efforts, we build credibility and trust, making your brand a preferred choice for customers.",
    features: ["Reputation management", "Trust building", "Credibility boost"],
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
      "https://images.unsplash.com/photo-1494790108755-2616b612345b?w=60&h=60&fit=crop&crop=face",
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

  return (
    <div className="bg-teal-50 overflow-x-hidden w-full">
      {/* Hero Section */}
      <section className="w-full bg-white py-12 lg:py-20 px-4 lg:px-6">
        <div className=" mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-3xl lg:text-6xl font-extrabold text-teal-700 mb-4 lg:mb-6 leading-tight"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              DigLip7 | #1 Digital Marketing Agency –{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">
                SEO & PPC Experts
              </span>
            </motion.h1>
            <p className="text-gray-700 text-lg lg:text-xl mb-6 leading-relaxed">
              DigLip7 is the #1 digital marketing agency, specializing in SEO,
              PPC, and custom website design. We help brands grow faster with
              proven online marketing solutions.
            </p>

            {/* Google Rating */}
            <div className="flex items-center justify-center lg:justify-start space-x-2">
              <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">D7</span>
              </div>
              <span className="text-yellow-500 text-xl">★★★★★</span>
              <span className="text-gray-700 text-lg">4.5</span>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full max-w-md lg:max-w-lg">
              <img
                src={uiuxImage}
                alt="Digital Marketing Illustration"
                className="w-full h-auto rounded-xl "
              />
            </div>
          </motion.div>
        </div>
      </section>

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

      {/* About Section */}
      <section className="w-full bg-white py-12 lg:py-20 px-4 lg:px-6">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left Side - Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative">
              <motion.img
                src={img1}
                alt="Digital Marketing Team"
                className="rounded-3xl shadow-2xl w-full max-w-md lg:max-w-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-500 to-yellow-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-teal-700 to-teal-500 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 text-gray-700 space-y-6 lg:space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-block"
              >
                <span className="px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-yellow-400/20 rounded-full text-yellow-600 font-semibold text-sm">
                  LEADING DIGITAL AGENCY
                </span>
              </motion.div>

              <motion.h1
                className="text-3xl lg:text-6xl font-extrabold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                DIGITAL MARKETING{" "}
                <span className="text-transparent bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text">
                  AGENCY
                </span>
              </motion.h1>

              <motion.p
                className="text-lg lg:text-2xl text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                DigiLip7: Drive more traffic & grow faster!{" "}
                <br className="hidden lg:block" />
                Get your free Consultation today!
              </motion.p>

              {/* Features List */}
              <motion.div
                className="grid grid-cols-2 gap-4 my-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {[
                  "Data-Driven Strategies",
                  "24/7 Support",
                  "ROI Focused",
                  "Expert Team",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium text-sm lg:text-base">
                      {feature}
                    </span>
                  </div>
                ))}
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-bold rounded-full shadow-2xl hover:shadow-yellow-500/30 transition-all duration-300 flex items-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                GET CONSULTATION
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </div>
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
              What We{" "}
              <span className="text-transparent bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text">
                Offer
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions to elevate your business and drive
              growth
            </p>
          </motion.div>

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
              Why Choose{" "}
              <span className="text-transparent bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text">
                Diglip7?
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              At Diglip7, we specialize in tailored digital marketing strategies
              that deliver real results. Our expertise spans multiple areas to
              ensure your business thrives online.
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

                <div className="flex justify-center mb-6">
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
                </div>

                <h3 className="text-xl font-semibold text-teal-800 mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.desc}
                </p>

                <div className="space-y-2">
                  {item.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center justify-center gap-2 text-sm text-gray-600"
                    >
                      <CheckCircle className="w-4 h-4 text-teal-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 lg:py-20 px-4 lg:px-6 bg-gradient-to-br from-teal-700 to-teal-600">
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
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentTestimonial
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

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white hover:text-white rounded-2xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full hover:bg-teal-800 flex justify-between items-center text-left p-6 text-lg font-semibold text-gray-800 transition-colors duration-200 group"
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
      <section className="w-full py-12 lg:py-20 px-4 lg:px-6 bg-gradient-to-r from-yellow-500 to-yellow-600">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Zap className="w-16 h-16 mx-auto text-white mb-6" />
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg lg:text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of successful businesses that have grown with
              Diglip7. Get your free consultation today and start your digital
              transformation journey.
            </p>

            <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">
              <a href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 lg:px-8 py-3 lg:py-4 bg-white text-yellow-600 font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Get Free Consultation
              </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;
