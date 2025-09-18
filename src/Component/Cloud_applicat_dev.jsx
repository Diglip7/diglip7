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
import seo2 from "../images/cad.jpeg";
import seoImage from "../images/cad1.png";
import seo4 from "../images/cad2.png";
import aboutImg from "../images/cad3.png";

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
    title: "Cloud-Native Application Development",
    description:
      "Design and deploy scalable apps built for the cloud.",
    icon: TrendingUp,
  },
  {
    title: "Cloud Migration Services",
    description:
      "Move legacy applications and databases to the cloud securely.",
    icon: BarChart3,
  },
  {
    title: "Cloud Architecture & Design",
    description:
      "Robust cloud architecture that ensures performance and reliability.",
    icon: Search,
  },
  {
    title: "Multi-Cloud & Hybrid Cloud Solutions ",
    description:
      "Build solutions that leverage AWS, Azure, Google Cloud, or hybrid environments.",
    icon: Handshake,
  },
];

const solutions = [
  {
    title: "Discovery & Consultation ",
    description:
      " Understand business goals, challenges, and requirements.",
    icon: ShoppingCart,
    points: [
      "Amazon Web Services (AWS) – Scalable computing, AI, and cloud storage.",
      "Microsoft Azure – Enterprise cloud services with seamless Microsoft integration.",
      "Google Cloud Platform (GCP) – Data analytics, AI, and open-source flexibility.",
    ],
  },
  {
    title: "Cloud Strategy & Roadmap",
    description:
      " Define architecture, tech stack, and migration plan.",
    icon: Building2,
    points: [
      "IBM Cloud – Hybrid cloud and AI-driven solutions.",
      "Private Cloud Solutions – For businesses requiring enhanced security and compliance.",
      "Data-Intensive Startups using AI-driven cloud apps to scale fast.",
    ],
  },
  {
    title: "Design & Development",
    description:
      "Build customized cloud solutions with scalability in mind.",
    icon: MapPin,
    points: [
      "Retail Brands leveraging cloud platforms for customer personalization.",
      "Healthcare Systems storing and managing patient data with HIPAA compliance.",
      "Financial Services building fraud detection systems with real-time analytics.",
    ],
  },
  {
    title: "Testing & Security Audits",
    description:
      "Ensure performance, reliability, and compliance.",
    icon: Link2,
    points: [
      "Custom CMS Development AI-targeted high-authority sites.",
      "Strategic Content Placement: Earn natural links.",
      "Boosting Domain Authority: Improve rankings and trust.",
    ],
  },
  {
    title: "Deployment & Integration",
    description:
      "  Seamless rollout with minimal downtime.",
    icon: HelpCircle,
    points: [
      "Optimize Content Structure: Custom CMS Development.",
      "FAQ & Structured Data: Custom CMS Development search chances.",
      "Improve Visibility: Custom CMS Development and AI searches.",
    ],
  },
  {
    title: "Monitoring & Optimization",
    description:
      "Ongoing support and optimization for cost and efficiency.",
    icon: Mic,
    points: [
      "software and third-party tools Conversational queries.",
      "Content Reformatting: Custom CMS Development content.",
      "Custom CMS Development Optimized for Siri, Alexa.",
    ],
  },
];

const steps = [
  {
    number: "1",
    title: "Data-Intensive Startups ",
    description:
      "using AI-driven cloud apps to scale fast.",
    icon: Target,
  },
  {
    number: "2",
    title: "Retail Brands",
    description:
      " leveraging cloud platforms for customer personalization.",
    icon: Search,
  },
  {
    number: "3",
    title: "Healthcare Systems",
    description:
      " storing and managing patient data with HIPAA compliance.",
    icon: Zap,
  },
  {
    number: "4",
    title: "Financial Services",
    description:
      " building fraud detection systems with real-time analytics.",
    icon: Globe,
  },
  {
    number: "5",
    title: "Educational Institutes ",
    description:
      "offering global access to online learning.",
    icon: BarChart3,
  },
  {
    number: "6",
    title: "Enterprises",
    description:
      "Enterprises are migrating legacy ERP systems to cloud-based solutions.",
    icon: Award,
  },
];

const faqs = [
  {
  question: "What is custom cloud development?",
  answer:
    "Custom cloud development is designing and building tailored cloud applications or platforms that meet unique business requirements, offering scalability, security, integration, and efficiency beyond standard off-the-shelf cloud services.",
},
{
  question: "How does custom cloud development benefit my business?",
  answer:
    "It enhances productivity, reduces costs, strengthens security, supports scalability, and integrates seamlessly with existing systems, ensuring long-term flexibility while aligning perfectly with your organization’s specific operational workflows and growth goals.",
},
{
  question: "Which industries can use custom cloud development?",
  answer:
    "Custom cloud development benefits industries like healthcare, finance, e-commerce, education, manufacturing, startups, and enterprises by delivering secure, scalable, and efficient cloud-based applications tailored for compliance, innovation, and digital transformation.",
},
{
  question: "What cloud platforms does DigLip7 support?",
  answer:
    "DigLip7 specializes in AWS, Microsoft Azure, Google Cloud, IBM Cloud, and hybrid or private cloud solutions, ensuring businesses receive tailored, future-ready cloud ecosystems aligned with their technical and operational needs.",
},
{
  question: "How secure is custom cloud development?",
  answer:
    "Security is prioritized with encryption, firewalls, access controls, multi-factor authentication, and compliance protocols, ensuring sensitive business data and applications are safeguarded against cyberattacks, breaches, and unauthorized access at every level.",
},
{
  question: "Can DigLip7 migrate my legacy system to the cloud?",
  answer:
    "Yes, DigLip7 provides seamless migration services, transferring legacy systems, applications, and data to secure cloud environments while minimizing downtime, ensuring performance, and optimizing systems for scalability and cost efficiency.",
},
{
  question: "How long does custom cloud development take?",
  answer:
    "Project timelines depend on complexity, features, and scale. On average, development can range from a few weeks for smaller apps to several months for enterprise-level cloud ecosystem solutions.",
},
{
  question: "Is custom cloud development cost-effective?",
  answer:
    "Yes, custom cloud development reduces operational costs by optimizing resource use, eliminating unnecessary licenses, and offering scalable infrastructure, allowing businesses to pay only for required cloud services while maximizing ROI.",
},
{
  question: "How does custom cloud development support scalability?",
  answer:
    "Custom cloud solutions scale dynamically, allowing businesses to handle increased workloads, traffic, or users without disruptions, while maintaining cost efficiency and performance through flexible cloud infrastructure and automated resource allocation.",
},
{
  question: "What makes DigLip7 different in custom cloud development?",
  answer:
    "DigLip7 offers tailored cloud strategies, expert multi-cloud development, agile processes, and continuous support, focusing on innovation and business-centric solutions that maximize efficiency, security, and long-term cloud ecosystem growth.",
},
{
  question: "Do you provide ongoing support after deployment?",
  answer:
    "Yes, DigLip7 offers 24/7 monitoring, maintenance, updates, and optimization services post-deployment, ensuring that your cloud systems remain secure, scalable, cost-efficient, and aligned with evolving business needs.",
},
{
  question: "How do I get started with DigLip7’s custom cloud development?",
  answer:
    "Simply contact DigLip7 for a consultation. Our experts will assess your requirements, design a tailored roadmap, and deliver scalable, secure, and future-ready custom cloud solutions aligned with business goals.",
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

function Cloud_applicat_dev() {
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
                    Cloud Application Development
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
                    alt="Digital Marketing Background"
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
                What is Custom{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  Cloud Development?
                </span>
              </h2>
            </FloatingElement>
            {/* UI/UX Design Services | Diglip7 – Crafting Seamless Digital Experiences */}
            <div className="space-y-4 sm:space-y-6">
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                Custom Cloud Development is the process of building cloud-based
                applications, platforms, or infrastructure solutions tailored
                specifically for a business. Unlike off-the-shelf cloud
                services, custom cloud solutions are designed around your
                workflow, security requirements, and long-term goals.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                Instead of adapting your business to generic tools, custom
                development allows you to shape the cloud around your
                processes—maximizing efficiency, productivity, and performance.
                At DigLip7, we deliver cloud solutions that go beyond storage
                and hosting. We focus on building cloud ecosystems that
                integrate AI, data analytics, security frameworks, and advanced
                automation—giving your business a competitive edge.
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
                What is Custom{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  Cloud Development?
                </span>
              </h2>
            </FloatingElement>
            {/* What Are UI/UX Design Services? */}
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
              In today’s digital-first world, businesses are rapidly shifting
              from traditional IT infrastructures to cloud-powered solutions.
              The cloud is no longer just about storage—it’s about scalability,
              security, flexibility, and business innovation. At DigLip7, we
              specialize in Custom Cloud Development tailored to your unique
              business needs. Whether you are a startup looking to build a
              cloud-native product or an enterprise migrating legacy systems to
              the cloud, our expert team designs and develops scalable cloud
              solutions that fuel growth and efficiency.
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
                Why Businesses Need {" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-teal-600 to-[#c89d5a]">
                  Custom Cloud Development
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
                  <span className="font-semibold text-teal-700">
                    The cloud is the backbone of modern digital transformation. But why choose custom cloud development over ready-made solutions?

                  </span>
                  , Scalability Without Limits – Scale resources instantly based on demand.
                  Tailored Security – Industry-specific compliance and custom security protocols.


Cost Efficiency – Pay only for what you use while avoiding unnecessary services.


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
                  Seamless Integration – 
{" "}
                  <span className="font-semibold text-[#c89d5a]">
                    Connect with existing systems, CRMs, ERPs, and APIs.
                  </span>
                  Future-Proof Solutions – Built to evolve with your business growth.

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
                  Enhanced User Experience – Personalized workflows and dashboards.

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
              Key Features of Custom Cloud Development at DigLip7

            </h2>
          </FloatingElement>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
            When you partner with DigLip7, you get more than just development—you get a strategic cloud partner. Our services include:

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
              Our Custom Cloud Development Process

            </h2>
          </FloatingElement>
          <p className="text-gray-600 max-w-4xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed">
            We believe in a structured, transparent, and collaborative approach to delivering cloud solutions.

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
                Custom Cloud Development Use Cases

              </h2>
            </FloatingElement>
            <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
             Here are some real-world scenarios where custom cloud solutions make an impact:

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
                Why DigLip7 is Your 

                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white">
                  Trusted Cloud Partner
                </span>
              </h2>
            </FloatingElement>
            {/* Final Call-to-Action */}
            <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
              At DigLip7, we don’t just deliver custom cloud development services—we build long-term partnerships. Our focus is not only on cutting-edge technology but also on ensuring that your business achieves measurable success in the cloud.
Whether you’re starting your cloud journey or optimizing existing solutions, we provide the expertise, innovation, and support you need.

            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="href">
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

export default Cloud_applicat_dev;
