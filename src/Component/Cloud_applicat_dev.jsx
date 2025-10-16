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
import seo2 from "../images/cloud5.png";
import seoImage from "../images/cad1.png";
import seo4 from "../images/cad2.png";
import aboutImg from "../images/cad3.png";

import ppc1 from "../images/cloud2.png";
import ppc2 from "../images/cloud3.png";
import ppc3 from "../images/cloud4.png";
import ppc4 from "../images/cloud1.jpeg";

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
    name: "Emily R., USA",
    role: "CEO, TechStart Inc.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    text: `“DigLip7 migrated our systems to the cloud seamlessly. Our operations are now faster, more secure, and highly scalable.”`,
    link: "https://techstart.io",
  },
  {
    name: "Michael T., USA",
    role: "EcomShop",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    text: `“The cloud solutions provided by DigLip7 enhanced our team collaboration and productivity. Their expertise is exceptional.”`,
  },
  {
    name: "Rajesh S., India",
    role: "HealthPlus Clinic",
    image: "https://randomuser.me/api/portraits/women/49.jpg",
    text: `“Thanks to DigLip7, our cloud applications run smoothly with improved performance and reliability. Support throughout the process was outstanding”`,
  },
  {
    name: "Sophia M., UK",
    role: "Thompson Law Firm",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
    text: `“DigLip7’s cloud development services transformed our business infrastructure. We’ve seen measurable growth and a competitive edge since implementation.”`,
  },
];

const stepss = [
  {
    id: 1,
    title: "Research",
    description:
      "Deep dive into your industry, competitors, and target keywords to uncover Cloud Development opportunities.",
    icon: <Search className="w-8 h-8 text-blue-600" />,
  },
  {
    id: 2,
    title: "Strategy",
    description:
      "Develop a customized Cloud Development strategy based on our research findings to maximize visibility and ROI.",
    icon: <Target className="w-8 h-8 text-blue-600" />,
  },
  {
    id: 3,
    title: "Implementation",
    description:
      "Execute on-page, off-page, and technical Cloud Development improvements for measurable growth.",
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
    title: "Digital artwork representing Cloud Development infrastructure with real-time data synchronization and APIs.",
    industry: "Technology • 6 months",
    description:
      "Transformed a struggling tech startup into an industry leader through comprehensive Cloud Development strategy.",
    image:
      ppc1,
    stats: [
      { icon: <TrendingUp className="w-5 h-5 text-teal-600" />, label: "Traffic", value: "+250%" },
      { icon: <Eye className="w-5 h-5 text-blue-600" />, label: "Visibility", value: "+180%" },
      { icon: <Users className="w-5 h-5 text-purple-600" />, label: "Leads", value: "+320%" },
      { icon: <DollarSign className="w-5 h-5 text-orange-600" />, label: "Revenue", value: "+150%" },
    ],
  },
  "EcoShop": {
    title: "Professional flat design showing Cloud Development process including integration, scaling, and deployment.",
    industry: "E-commerce • 8 months",
    description:
      "Boosted organic traffic and conversions for a sustainable online store through targeted keyword optimization.",
    image:
      ppc2,
    stats: [
      { icon: <TrendingUp className="w-5 h-5 text-teal-600" />, label: "Traffic", value: "+300%" },
      { icon: <Eye className="w-5 h-5 text-blue-600" />, label: "Visibility", value: "+210%" },
      { icon: <Users className="w-5 h-5 text-purple-600" />, label: "Leads", value: "+270%" },
      { icon: <DollarSign className="w-5 h-5 text-orange-600" />, label: "Revenue", value: "+190%" },
    ],
  },
  "HealthPlus Clinic": {
    title: "Futuristic graphic of Cloud Development showcasing team collaboration, storage solutions, and DevOps tools.",
    industry: "Healthcare • 5 months",
    description:
      "Improved patient acquisition and local Cloud Development rankings for a healthcare provider using optimized content strategy.",
    image:
      ppc3,
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

  // Cloud Development Packages
  const seoPackages = [
    {
      name: "Basic",
      price: "$999",
      duration: "/month",
      features: [
        "Cloud architecture consultation",
        "Setup of cloud environment (AWS, Azure, or Google Cloud)",
        "Basic deployment & configuration",
        "Monthly performance & usage report",
        "Email support",
      ],
      button: "Get Started",
    },
    {
      name: "Pro",
      price: "$1,999",
      duration: "/month",
      popular: true,
      features: [
        "Custom cloud solutions & scalable architecture",
        "Deployment automation & CI/CD setup",
        "Security & access management",
        "Bi-weekly performance reporting",
        "Priority support",
        "Integration with existing applications",
      ],
      button: "Get Started",
    },
    {
      name: "Premium",
      price: "$3,999",
      duration: "/month",
      features: [
        "Full-scale cloud development & management",
        "Multi-cloud architecture & hybrid solutions",
        "Advanced security & compliance setup",
        "Weekly performance reporting & strategy calls",
        "Dedicated cloud development team",
        "Cloud monitoring, optimization & cost management",
        "Post-deployment support & maintenance",
      ],
      button: "Contact Sales",
    },
  ];

  // Cloud Development Services
  const ppcServices = [
    { icon: Search, title: "Cloud Application Development", description: "Custom cloud-based applications tailored to your business needs." },
    { icon: DollarSign, title: "Cloud Migration Services", description: "Seamless migration from on-premises systems to the cloud." },
    { icon: Settings, title: "Cloud Integration", description: "Connect multiple platforms and applications for streamlined operations." },
    { icon: FileText, title: "Cloud Security Solutions", description: "Protect data and ensure compliance with robust security measures." },
    { icon: Target, title: "DevOps & Cloud Automation", description: "Automate processes to enhance productivity and reduce manual efforts." },
    { icon: RefreshCw, title: "Maintenance & Support ", description: "Continuous monitoring, updates, and optimization for reliable cloud performance." },
  ];

  const [active, setActive] = useState("TechStart Inc.");
  const study = caseStudies[active];


  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % testimonials.length);
  const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);

  const testimonial = testimonials[index];


  return (
    <div className="bg-white">
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
              <span className="text-gray-900">Expert Cloud Development Services </span>


              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                to Boost Efficiency & Scalability

              </span>
              <br />

            </h1>
            <p className="text-gray-700 mb-6">
              At <span className="font-semibold text-blue-700">DigLip7</span>offers professional cloud development services to build secure, scalable, and high-performing solutions. From cloud applications and migration to integration and automation, our services enhance collaboration, streamline operations, and drive long-term business growth.
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
                    Get Free Cloud Development Audit <ArrowRight size={18} />
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
              alt="Cloud Development concept showing developers coding and deploying applications in a secure cloud environment."
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

      <div className="bg-gray-50">
        {/* Cloud Development Section */}
        <div className="py-16 px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 mb-20">
            <motion.img
              src={ppc4}
              alt="Modern illustration of Cloud Development architecture with servers, databases, and connected applications."
              className="rounded-2xl shadow-lg w-full md:w-1/2"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Cloud Development is the Best Investment for Your Business
              </h2>
              <p className="text-gray-700 mb-4">
                Cloud development enables businesses to scale quickly,<span className="font-semibold text-blue-700">DigLip7</span>,
                reduce infrastructure costs, and improve data accessibility. It enhances collaboration, security, and operational efficiency. Investing in professional cloud development services ensures long-term ROI, streamlined workflows, and a competitive edge in the digital marketplace.


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
                Our Proven Cloud Development Process
              </h2>
              <p className="text-gray-600 mt-3">
                At DigLip7, our cloud development process ensures secure, scalable, and high-performing solutions. We begin with requirement analysis and strategy planning, followed by architecture design, cloud deployment, and rigorous testing. Continuous monitoring and optimization guarantee seamless performance, enhanced collaboration, and reliable business operations.
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

          {/* Cloud Development Services */}
          <div className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
            <div className="max-w-6xl mx-auto text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Proven Cloud Development Success Stories
              </h2>
              <p className="text-gray-600 mt-3">
                Discover how<span className="font-semibold text-teal-600">DigLip7</span> cloud development solutions have transformed businesses. From scalable cloud applications to secure data management, our clients have experienced improved efficiency, enhanced collaboration, and measurable ROI. Our cloud solutions consistently deliver long-term growth and a competitive advantage in the digital landscape.
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
                  Transformed a struggling tech startup into an industry leader through advanced Cloud Development.
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

        {/* Cloud Development Services Section */}
        <div className="bg-white py-16 px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Cloud Development Services</h2>
            <p className="text-gray-600 mb-10">
              At DigLip7, we offer comprehensive cloud development services to help businesses build scalable, secure, and efficient cloud solutions. Our services include:

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

        {/* Cloud Development Pricing Section */}
        <div className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cloud Development Packages Designed for Every Stage</h2>
            <p className="text-gray-600 mb-10">
              Choose the perfect Cloud Development package that fits your business needs and budget.
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
      <section className=" sm:py-16 lg: bg-white">
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
      <section className="sm:py-16 lg: bg-white">
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
      <section className="sm:py-16 lg: bg-white">
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
      <section className="w-full bg-white  py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
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
                  className="w-full flex justify-between items-center text-left p-4 sm:p-6 hover:bg-gray-50 transition-colors duration-200 
                  group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-900 to-teal-700 text-white text-lg font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-102"
                >
                  <span className="text-sm sm:text-base lg:text-lg font-semibold text-white pr-4">
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
      group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-500 to-teal-900 text-white text-lg font-semibold  shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform ">
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
              <a href="/contact">
                <motion.button
                  className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-700 to-teal-900 text-white text-lg font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105"
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
