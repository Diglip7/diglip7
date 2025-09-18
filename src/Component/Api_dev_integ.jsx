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
} from "lucide-react";
import seo2 from "../images/api.jpeg";
import seoImage from "../images/api1.png";
import seo4 from "../images/api2.png";
import aboutImg from "../images/api3.png";

// Mock images - replace with your actual images
// const seoImage =
//   "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop";
// // const seo2 = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop";
// const seo4 =
//   "https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&h=600&fit=crop";
// const aboutImg =
//   "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop";

const advantages = [
  {
    title: "Seamless Integration Between Platforms",
    description:
      "Connect CRMs, ERPs, payment gateways, or marketing tools to create a unified ecosystem that enhances productivity.",
    icon: TrendingUp,
  },
  {
    title: "Increased Efficiency and Automation:",
    description:
      "Automate repetitive tasks like data syncing or order processing, freeing your team to focus on growth.",
    icon: BarChart3,
  },
  {
    title: "Better Scalability and Flexibility",
    description:
      "Build APIs that grow with your business, supporting increased traffic, new features, or additional integrations.",
    icon: Search,
  },
  {
    title: "Enhanced User Experience and Performance",
    description:
      "Deliver faster, more responsive applications with APIs optimized for speed and reliability.",
    icon: Handshake,
  },
];

const solutions = [
  {
    title: "Fintech Apps",
    description:
      "Integrate payment gateways (Stripe, PayPal) and banking APIs for secure transactions, real-time balance checks, or fraud detection.",
    icon: ShoppingCart,
    points: [
      "API Product Pages: Keywords, descriptions, and CTAs.",
      "Stripe, PayPal Better search engine hierarchy.",
      "APIs for secure transactions Fast, mobile-friendly design.",
    ],
  },
  {
    title: "Healthcare Platforms",
    description:
      "Enable secure data exchange between EHR systems, telehealth apps, and wearables, ensuring HIPAA compliance and patient privacy.",
    icon: Building2,
    points: [
      "EHR systems In-depth research and optimization.",
      "ensuring HIPAA compliance Technical API for efficient indexing.",
      "Scalable Solutions: Systems that grow with your business.",
    ],
  },
  {
    title: "E-commerce Platforms",
    description:
      "Sync inventory, pricing, and shipping APIs (e.g., Shopify, FedEx) to streamline operations and enhance customer experiences.",
    icon: MapPin,
    points: [
      "shipping APIs: Easy discovery for locals.",
      "Shopify, FedEx: Consistent NAP and citations.",
      "E-commerce: Engage your local audience.",
    ],
  },
  {
    title: "SaaS Tools",
    description: "Connect CRMs (Salesforce, HubSpot), ERPs, or marketing platforms to create unified workflows for subscription-based services.",
    icon: Link2,
    points: [
      "CRMs (Salesforce, HubSpot): AI-targeted high-authority sites.",
      "marketing platforms: Earn natural links.",
      "Boosting Domain Authority: Improve rankings and trust.",
    ],
  },
  {
    title: "Real-Time Analytics Dashboards",
    description:
      "Pull data from multiple APIs (Google Analytics, social media) to deliver actionable insights for decision-makers.",
    icon: HelpCircle,
    points: [
      "Optimize Content Structure: Snippet-friendly formatting.",
      "FAQ & Structured Data: Boost zero-click search chances.",
      "Improve Visibility: Stand out in voice and AI searches.",
    ],
  },
  {
    title: "Full-Cycle Support",
    description:
      "From planning to post-launch maintenance, we offer end-to-end services, including upgrades and troubleshooting.",
    icon: Mic,
    points: [
      "end-to-end services,: Conversational queries.",
      "Content Reformatting: Long-tail, question-based content.",
      "Voice Assistant Compatibility: Optimized for Siri, Alexa.",
    ],
  },
];

const steps = [
  {
    number: "1",
    title: "Requirement Analysis and Planning",
    description:
      "We collaborate with you to understand your goals, systems, and integration needs, creating a detailed roadmap.",
    icon: Target,
  },
  {
    number: "2",
    title: "API Design",
    description:
      " Our team designs RESTful, GraphQL, or SOAP APIs, focusing on scalability, security, and alignment with your architecture.",
    icon: Search,
  },
  {
    number: "3",
    title: "Development and Integration",
    description:
      "Using agile methodologies, we code custom APIs and integrate third-party services, ensuring seamless connectivity.",
    icon: Zap,
  },
  {
    number: "4",
    title: "Testing and Documentation",
    description:
      "We conduct rigorous testing (unit, integration, load) and provide comprehensive documentation for developers and stakeholders.",
    icon: Globe,
  },
  {
    number: "5",
    title: "Launch and Ongoing Support",
    description:
      "After a smooth launch, we offer maintenance, performance monitoring, and scaling support to keep your APIs running flawlessly.",
    icon: BarChart3,
  },
  {
    number: "6",
    title: "Website & App UI Mockups",
    description:
      "Stunning digital design layouts that enhance user experience and align with your brand.",
    icon: Award,
  },
];

const faqs = [
 {
      question:
        "What is the difference between API development and API integration?",
      answer:
        "API development creates custom APIs tailored to your business needs, enabling unique functionality and data exchange. API integration connects existing APIs, custom or third-party, to your systems for seamless workflows. DigLip7 delivers both, designing robust APIs and integrating services like Stripe or Salesforce. Our solutions ensure scalability, security, and performance, streamlining operations and enhancing user experiences across industries like fintech, e-commerce, and healthcare.",
    },
    {
      question: "How secure are custom-built APIs?",
      answer:
        "DigLip7 prioritizes security in custom API development with end-to-end encryption, OAuth authentication, and rate limiting. We adhere to OWASP standards and conduct regular audits to safeguard data, ensuring compliance for sensitive sectors like healthcare (HIPAA) or fintech. Our APIs feature secure token management and robust error handling, minimizing vulnerabilities. Whether for startups or enterprises, we build APIs that protect your systems and user trust while maintaining high performance and reliability.",
    },
    {
      question: "Can I integrate multiple third-party APIs into one platform?",
      answer:
        "Yes, DigLip7 excels at integrating multiple third-party APIs into a unified platform. We connect services like PayPal, Google Maps, HubSpot, or Shopify, creating cohesive workflows. Our team ensures compatibility, optimizes data flow, and minimizes latency for smooth operation. This approach enhances productivity, automates tasks, and improves user experiences, making it ideal for SaaS, e-commerce, or analytics platforms seeking streamlined connectivity and scalability across diverse systems.",
    },
    {
      question: "How long does it take to build an API?",
      answer:
        "API development timelines vary by complexity. A simple RESTful API typically takes 3-5 weeks, including design, coding, and testing. Complex microservices or cloud-based APIs may require 8-12 weeks to ensure scalability and integration. DigLip7 provides a detailed roadmap during planning, aligning with your deadlines. Our agile process emphasizes transparency, delivering high-quality APIs on time, whether for startups needing quick solutions or enterprises building robust, long-term systems.",
    },
    {
      question: "Do you offer API maintenance and scaling support?",
      answer:
        "Absolutely. DigLip7 provides comprehensive post-launch support. We offer maintenance to ensure APIs run smoothly, including bug fixes, performance optimization, and security updates. Our scaling services handle increased traffic or new features, leveraging cloud platforms like AWS or Azure. We monitor API health, provide analytics, and troubleshoot issues proactively, ensuring reliability for businesses of all sizes, from SaaS providers to e-commerce platforms, keeping your systems future-proof.",
    },
    {
      question: "What types of APIs can DigLip7 develop?",
      answer:
        "DigLip7 develops a range of APIs, including RESTful APIs for flexible, modern applications, SOAP APIs for enterprise reliability, and GraphQL APIs for efficient data querying. We also build microservices-based APIs for modular scalability and WebSocket APIs for real-time communication. Tailored to your needs, our APIs support industries like fintech, healthcare, and e-commerce, ensuring compatibility, performance, and security with frameworks like Node.js, Python, or Java.",
    },
    {
      question: "How does DigLip7 ensure API performance optimization?",
      answer:
        "DigLip7 optimizes API performance through efficient coding, caching strategies, and load balancing. We use tools like Redis for caching, implement rate limiting, and design lightweight payloads to reduce latency. Our team conducts load testing to simulate high traffic and fine-tunes APIs for speed. By leveraging cloud platforms like AWS and monitoring tools, we ensure your APIs deliver fast, reliable responses, enhancing user satisfaction for applications in SaaS, analytics, or e-commerce.",
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

function Api_dev_integ() {
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

  return (
    <div className="overflow-x-hidden pt-18 sm:pt-18">
      {/* Hero Section with Parallax */}
      <section className="relative w-full  flex flex-col lg:flex-row items-center justify-center overflow-hidden">
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
                    Api Development & Integration
                  </span>
                </motion.h1>
      {/* Building Digital Experiences That Drive Success */}
                <motion.p
                  className="text-lg sm:text-xl md:text-2xl text-teal-700 max-w-2xl lg:max-w-4xl mx-auto mb-6 sm:mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 1 }}
                >
                  DigLip 7 expert team builds web solutions that combine performance, security, and stunning design—perfectly aligned with your brand and business goals.
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
              <div>
                <div className="p-6 inset-0 w-full h-full">
                  <img
                    src={seo2}
                    alt="API development and integration services for seamless connectivity and efficient business solutions"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 "></div>
                </div>
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
            </section>

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
                  alt="API development and integration services for scalable applications and seamless system connectivity"
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
                Introduction to |{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  API Development & Integration
                </span>
              </h2>
            </FloatingElement>
            {/* Introduction to API Development & Integration */}
            <div className="space-y-4 sm:space-y-6">
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                In today’s interconnected digital landscape, Application Programming Interfaces (APIs) are the backbone of modern systems, enabling applications to communicate, share data, and deliver seamless user experiences. From syncing e-commerce platforms with payment gateways to powering real-time analytics dashboards, APIs drive efficiency, automation, and innovation. At DigLip7, our API Development & Integration service empowers businesses, startups, SaaS providers, and enterprises to build robust, scalable, and secure API solutions tailored to their unique needs.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                They act as bridges between disparate systems—whether it’s a CRM syncing with marketing tools or a healthcare platform exchanging secure patient data. APIs fuel connectivity, streamline operations, and unlock new possibilities for growth. With DigLip7’s expertise in custom API development and third-party API integration, we help you harness the power of APIs to transform your digital infrastructure and stay ahead in a competitive market.
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
                What’s Included in {" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  API Development & Integration Services
                </span>
              </h2>
            </FloatingElement>

            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
              Our API Development & Integration service at DigLip7 is designed to deliver end-to-end solutions that enhance functionality and connectivity. We combine technical expertise with a client-focused approach to meet your business goals. Our core offerings include:
              Custom API Development
Build bespoke APIs tailored to your workflows, ensuring optimal performance and scalability using frameworks like Node.js, Python, or Java.
Third-Party API Integration
Seamlessly connect your systems with popular APIs, such as Stripe, PayPal, Salesforce, Google Maps, or social media platforms.
REST & SOAP API Services
Develop modern RESTful APIs for flexibility or robust SOAP APIs for enterprise-grade reliability based on your requirements.
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
                Why Choose DigLip7 {" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-teal-600 to-[#c89d5a]">
                  for API Development & Integration
                </span>
              </h2>
            </FloatingElement>
            {/* Why Graphic Design Matters for Businesses */}
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
                  Skilled Developers
Our team excels in multiple programming languages (Node.js, Python, PHP, Java, and more), delivering robust APIs for any use case.
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
                   Proven Track Record{" "}
                  <span className="font-semibold text-[#c89d5a]">
                   
We’ve built and integrated APIs for industries like e-commerce, fintech, healthcare, CRM, and ERP, delivering measurable results.
                  </span>
                  A polished logo or cohesive website signals professionalism,
                  fostering confidence. Memorable designs improve brand recall,
                  ensuring customers remember you.
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
                  At Diglip7, Scalable and Secure Architecture
Our APIs are designed to handle high loads and fortified with encryption, OAuth, and other security protocols.
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
              Benefits of Professional API Services
            </h2>
          </FloatingElement>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
           At Diglip7, By choosing DigLip7’s custom API development, you unlock a world of streamlined operations and superior digital experiences.
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
             Use Cases & Industries We Serve
            </h2>
          </FloatingElement>
          <p className="text-gray-600 max-w-4xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed">
            DigLip7’s API Development & Integration service powers innovation across diverse industries. Our solutions address specific use cases, delivering tangible value:
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
                Our API Development Process
              </h2>
            </FloatingElement>
            <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
              Diglip7 offers a comprehensive suite of graphic design services tailored to your unique needs. Our creative design services make your brand shine across platforms. Here’s what we provide:
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
              This process is built for simplicity, effectiveness, and rapid
              growth.
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
              Get answers to the most common questions about our digital
              marketing services.
            </p>
          </motion.div>

          <div className="space-y-4 sm:space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left p-4 sm:p-6 hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="text-sm sm:text-base lg:text-lg font-semibold text-teal-700 pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-teal-600" />
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
                Final Call-
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white">
                  to-Action
                </span>
              </h2>
            </FloatingElement>
            {/* Final Call-to-Action */}
            <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Ready to streamline your systems and unlock new possibilities with API Development & Integration service? At DigLip7, we craft custom APIs and integrations that empower your business to thrive in a connected world. Whether you’re a startup, SaaS provider, or enterprise, our expert team is here to deliver scalable, secure, and high-performance solutions.
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




export default Api_dev_integ