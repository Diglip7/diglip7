import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  BarChart3,
  Search,
  Handshake, DollarSign, RefreshCw, Eye,
  ShoppingCart,
  Building2,
  MapPin, Star,
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
import seo2 from "../images/wd001.png";
import seoImage from "../images/webd1.png";
import seo4 from "../images/webd2.png";
import aboutImg from "../images/webd3.png";

import ppc1 from "../images/wd005.png";
import ppc2 from "../images/wd002.png";
import ppc3 from "../images/wd003.png";
import ppc4 from "../images/wd004.png";


// added 

const testimonials = [
  {
    name: "Emily R., USA",
    role: "CEO, TechStart Inc.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    text: `“DigLip7 built our custom website from scratch, and the results exceeded our expectations. The site is fast, mobile-friendly, and user-centric. Our traffic and conversions have noticeably improved.”`,
    link: "https://techstart.io",
  },
  {
    name: "Michael T., USA",
    role: "EcomShop",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    text: `“Thanks to DigLip7, our e-commerce store now provides a seamless shopping experience. Sales and customer satisfaction have increased significantly, and managing the backend is effortless.”`,
  },
  {
    name: "Rajesh S., India",
    role: "HealthPlus Clinic",
    image: "https://randomuser.me/api/portraits/women/49.jpg",
    text: `“The team at DigLip7 developed our web application with precision and attention to detail. The interface is intuitive, secure, and scalable. Our operations have become much more efficient.”`,
  },
  {
    name: "Sophia M., UK",
    role: "Thompson Law Firm",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
    text: `“DigLip7 redesigned our company website with a modern, responsive design. The improved user experience and speed have enhanced our online credibility and engagement with clients.”`,
  },
];

const stepss = [
  {
    id: 1,
    title: "Research",
    description:
      "Deep dive into your industry, competitors, and target keywords to uncover Web Development  opportunities.",
    icon: <Search className="w-8 h-8 text-blue-600" />,
  },
  {
    id: 2,
    title: "Strategy",
    description:
      "Develop a customized Web Development  strategy based on our research findings to maximize visibility and ROI.",
    icon: <Target className="w-8 h-8 text-blue-600" />,
  },
  {
    id: 3,
    title: "Implementation",
    description:
      "Execute on-page, off-page, and technical Web Development  improvements for measurable growth.",
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
    title: "Creative concept of mobile app development with icons, wireframes, and analytics visuals.",
    industry: "Technology • 6 months",
    description:
      "Transformed a struggling tech startup into an industry leader through comprehensive Web Development  strategy.",
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
    title: "Professional flat design illustration of app creation using coding languages and design tools.",
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
    title: "Vibrant digital scene of a team working on cross-platform mobile app development projects.",
    industry: "Healthcare • 5 months",
    description:
      "Improved patient acquisition and local Web Development  rankings for a healthcare provider using optimized content strategy.",
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
    title: "Enhanced User Experience (UX)",
    description:
      "An easy-to-navigate website keeps visitors engaged. Our designs prioritize intuitive layouts, fast load times, and clear calls to action to ensure users love their experience.",
    icon: TrendingUp,
  },
  {
    title: "Improved Web Development  Performance",
    description:
      "A technically sound website ranks higher on Google. We optimize for speed, mobile-friendliness, and proper coding practices to boost your visibility.",
    icon: BarChart3,
  },
  {
    title: "Stronger Branding and Credibility",
    description:
      "Your website reflects your brand. A polished, professional site builds trust and positions you as an industry leader.",
    icon: Search,
  },
  {
    title: "Higher Conversion Rates",
    description:
      "From lead forms to online sales, a well-designed website guides users toward taking action. We incorporate conversion-focused elements to maximize results.",
    icon: Handshake,
  },
];

const solutions = [
  {
    title: "Experienced Team",
    description:
      "Our developers, designers, and strategists bring years of expertise across industries, ensuring your website is built to the highest standards.",
    icon: ShoppingCart,
    points: [
      "Web Development Pages: Keywords, descriptions, and CTAs.",
      "Improving Category Listings: Better search engine hierarchy.",
      "Enhancing User Experience: Fast, mobile-friendly design.",
    ],
  },
  {
    title: "Modern Tech Stack",
    description:
      "We stay ahead of trends, using cutting-edge tools",
    icon: Building2,
    points: [
      "like Next.js, Laravel, and Tailwind CSS.",
      "deliver fast, secure, and scalable websites.",
      "Scalable Solutions: Systems that grow with your business.",
    ],
  },
  {
    title: "Transparent Communication",
    description:
      "No jargon, no surprises. We keep you informed at every step,",
    icon: MapPin,
    points: [
      "Initial planning to post-launch support.",
      "Enhance Local Listings: Consistent NAP and citations.",
      "Targeted Content Strategies: Engage your local audience.",
    ],
  },
  {
    title: "Timely Delivery",
    description: "Deadlines matter. We pride ourselves on delivering projects on time without compromising quality.",
    icon: Link2,
    points: [
      "Data-Driven Outreach: AI-targeted high-authority sites.",
      "Strategic Content Placement: Earn natural links.",
      "Boosting Domain Authority: Improve rankings and trust.",
    ],
  },
  {
    title: "Client-Centric Approach",
    description:
      "Your goals drive our process. Whether you need a simple site or a complex platform, we tailor our Web Development Service to fit your vision.",
    icon: HelpCircle,
    points: [
      "web development Structure: Snippet-friendly formatting.",
      "FAQ & Structured Data: Boost zero-click search chances.",
      "Improve Visibility: Stand out in voice and AI searches.",
    ],
  },
  {
    title: "API Integrations",
    description:
      "Want to connect your website with third-party tools like CRMs, email platforms, or analytics? We handle seamless API integrations for enhanced functionality.",
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
    title: "Discovery and Strategy",
    description:
      "We start by understanding your business, audience, and goals. Through in-depth consultations, we create a roadmap for your website’s design, features, and performance.",
    icon: Target,
  },
  {
    number: "2",
    title: "Design and Development",
    description:
      "Our designers craft wireframes and mockups, while developers build the site’s front-end and back-end. We focus on creating a seamless blend of aesthetics and functionality.",
    icon: Search,
  },
  {
    number: "3",
    title: "Testing and Optimization",
    description:
      "Before launch, we rigorously test your website for speed, responsiveness, and compatibility across devices and browsers. We also optimize for Web Development  and user experience.",
    icon: Zap,
  },
  {
    number: "4",
    title: "Deployment and Post-Launch Support",
    description:
      "Once your site is live, we don’t disappear. We offer ongoing maintenance, updates, and support to keep your website running smoothly.",
    icon: Globe,
  },
  {
    number: "5",
    title: "Usability Testing",
    description:
      "Before launch, we conduct rigorous usability testing with real users to identify any friction points. This iterative process guarantees a flawless experience that delights your audience.",
    icon: BarChart3,
  },
  {
    number: "6",
    title: "Final Delivery & Optimization",
    description:
      "Once approved, we deliver development-ready design files optimized for seamless integration. We also offer post-launch support to refine your digital product design based on user feedback or evolving needs.",
    icon: Award,
  },
];

const faqs = [
  {
    question: "What does a Web Development Service include?",
    answer:
      "A Web Development Service is about creating a website that reflects your brand and meets your business needs. At DigLip7, we design custom visuals that capture your unique identity, ensuring your site stands out in a crowded digital space. Our team handles front-end development for user-friendly interfaces and back-end development for secure, dynamic functionality. We integrate content management systems like WordPress or Shopify for easy updates, build responsive designs for all devices, and develop e-commerce platforms with secure payment systems. API connections enhance functionality by linking to tools like CRMs or analytics, delivering a tailored solution that grows with your business.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "The timeline for a Web Development Service depends on your project’s complexity and goals. A simple website, like a portfolio or small business page, typically takes 4 to 6 weeks from planning to launch, ensuring quality without rushing the process. More intricate sites, such as e-commerce platforms or custom applications with advanced features, may require 8 to 12 weeks to perfect every detail. During our initial consultation, we analyze your needs and provide a clear schedule, keeping you informed at every stage. Our efficient process balances speed and precision, delivering a website that’s ready to perform on time.",
  },
  {
    question: "Will my website work on mobile devices?",
    answer:
      "Yes, mobile compatibility is a core part of our Web Development Service. With most users browsing on smartphones, we ensure your website performs flawlessly across all devices, from phones to desktops. Our responsive designs adapt to any screen size, offering intuitive navigation and fast load times that keep visitors engaged. This approach not only enhances user experience but also improves your search engine rankings, as Google prioritizes mobile-friendly sites. We test rigorously to guarantee consistency across browsers like Chrome and Safari so your audience enjoys a seamless experience, whether they’re at home or on the go, building trust in your brand.",
  },
  {
    question: "How does your Web Development Service help with Web Development ?",
    answer:
      "Our Web Development Service prioritizes search engine optimization to boost your website’s visibility. We optimize for speed, ensuring fast load times that reduce bounce rates and improve rankings. Mobile-friendly designs align with Google’s standards, while clean, structured code makes it easy for search engines to crawl your site. We incorporate proper metadata, like title tags and descriptions, to attract clicks from search results. By building with Web Development  in mind, we help your site reach more customers organically, driving traffic and leads. For broader strategies, we can connect you with our marketing team to amplify your online presence further.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Absolutely. Our Web Development Service extends beyond launch to keep your website thriving. We offer ongoing maintenance to ensure your site stays secure, fast, and compatible with new technologies. Regular updates protect against vulnerabilities, while performance monitoring helps us suggest improvements over time. If you need to add content, like new pages or products, our team handles it efficiently. Technical support is always available via email or phone, addressing issues promptly to minimize downtime. Whether you’re a small business or a large enterprise, our flexible support plans ensure your website remains a reliable asset for your growth.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "The cost of a Web Development Service varies based on your project’s needs. A simple site with basic features is more affordable, while complex platforms like e-commerce stores or custom systems with integrations cost more due to added functionality. Design complexity and ongoing support also influence pricing. At DigLip7, we believe in clear pricing with no surprises. During a free consultation, we assess your goals and provide a detailed quote tailored to your vision. This ensures you get a high-quality website that delivers value without breaking your budget. Contact us today to explore your options.",
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

function Web_dev() {
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

  // Web Development  Packages
  const seoPackages = [
    {
      name: "Basic",
      price: "$999",
      duration: "/month",
      features: [
        "Custom website design & development (up to 5 pages)",
        "Responsive design for mobile & desktop",
        "Basic SEO setup",
        "CMS integration (WordPress, Wix, or similar)",
        "Monthly performance report",
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
        "Website development up to 15 pages",
        "Custom features & functionality",
        "eCommerce integration (Shopify, WooCommerce, etc.)",
        "Performance optimization & speed enhancements",
        "Bi-weekly progress updates",
        "Priority support",
        "API integration & custom forms",
      ],
      button: "Get Started",
    },
    {
      name: "Premium",
      price: "$3,999",
      duration: "/month",
      features: [
        "Full-scale custom website development",
        "Unlimited pages & custom functionality",
        "Enterprise-level eCommerce & web applications",
        "Advanced performance & security optimization",
        "Weekly progress reporting & strategy calls",
        "Dedicated web development team",
        "Custom integrations & automation",
        "Ongoing maintenance & support",
      ],
      button: "Contact Sales",
    },
  ];

  // Web Development  Services
  const ppcServices = [
    { icon: Search, title: "Custom Website Development", description: "Tailored websites that align with your brand and business goals." },
    { icon: DollarSign, title: "E-commerce Development ", description: "Feature-rich online stores that enhance user experience and increase sales." },
    { icon: Settings, title: "Responsive & Mobile-Friendly Design", description: "Websites optimized for all devices and screen sizes." },
    { icon: FileText, title: "CMS Development ", description: "Easy-to-manage websites using platforms like WordPress, Drupal, or Joomla." },
    { icon: Target, title: "Web Application Development ", description: "Scalable applications that improve efficiency and customer engagement." },
    { icon: RefreshCw, title: "Website Maintenance & Support", description: "Ongoing updates, security, and performance optimization." },
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
              <span className="text-gray-900">Professional Web Development Services</span>


              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                to Grow Your Business
              </span>
              <br />

            </h1>
            <p className="text-gray-700 mb-6">
              Build a fast, secure, and user-friendly website with <span className="font-semibold text-blue-700">DigLip7</span>web development services. From custom websites and e-commerce platforms to web applications and responsive designs, we deliver solutions that enhance user experience, boost conversions, and drive measurable business growth.

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
                    Get Free Web Development  Audit <ArrowRight size={18} />
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
              alt="Modern illustration of developers creating a mobile app interface on smartphones and tablets."
              className="rounded-2xl shadow-lg w-full"
            />
          </motion.div>
        </div>
        {/* Floating particles */}
        {/* <div className="absolute inset-0">
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
            >
              🌐

            </motion.div>
          ))}
        </div> */}
      </div>

      {/* addedd */}

      <div className="bg-white">
        {/* Web Development  Section */}
        <div className="py-16 px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 mb-20">
            <motion.img
              src={ppc4}
              alt="Digital artwork showing coding, UI/UX design, and app testing for mobile app development."
              className="rounded-2xl  w-full md:w-1/2"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Web Development Service is the Best Investment for Your Business
              </h2>
              <p className="text-gray-700 mb-4">
                Professional web development builds a fast, secure, and user-friendly<span className="font-semibold text-blue-700">website that boosts credibility, attracts customers, and increases conversions.</span>,
                It supports digital marketing efforts and delivers long-term ROI, making it a smart investment for business growth.


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
                Our Proven Web Development Service Process
              </h2>
              <p className="text-gray-600 mt-3">
                At DigLip7, our web development process ensures high-performing, user-friendly websites. We start with requirement analysis and planning, followed by design, coding, and responsive development. Rigorous testing and optimization guarantee speed, security, and seamless functionality. Continuous support and updates ensure your website delivers consistent performance, excellent user experience, and measurable business growth.

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

          {/* Web Development  Services */}
          <div className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
            <div className="max-w-6xl mx-auto text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Proven Web Development Service Success Stories
              </h2>
              <p className="text-gray-600 mt-3">
                Discover how <span className="font-semibold text-teal-600">web development services</span> have transformed businesses online. From creating responsive, high-performing websites to improving user experience and boosting conversions, our projects consistently deliver measurable results, increased engagement, and long-term digital growth for clients across industries.
                .
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
                  Transformed a struggling tech startup into an industry leader through advanced Web Development Service.
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

        {/* Web Development  Services Section */}
        <div className="bg-white py-16 px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Web Development Services</h2>
            <p className="text-gray-600 mb-10">
              At DigLip7, we provide comprehensive web development services designed to build fast, secure, and user-friendly websites that drive business growth. Our services include:
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

        {/* Web Development  Pricing Section */}
        <div className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Web Development  Packages Designed for Every Stage</h2>
            <p className="text-gray-600 mb-10">
              Choose the perfect Web Development Service package that fits your business needs and budget.
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
      <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className=" w-full flex flex-col lg:flex-row items-center gap-8 lg: px-4 sm:px-6 lg:gap-12">
          {/* Left Image with 3D effect */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <Card3D className="w-full">
              <div className="relative  rounded-2xl ">
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
                Web Development Service by |{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  DigLip7: Build Your Digital Success
                </span>
              </h2>
            </FloatingElement>
            {/* Web Development Service by DigLip7: Build Your Digital Success */}
            <div className="space-y-4 sm:space-y-6">
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                In today’s digital-first world, your website is often the first impression customers have of your brand. A strong online presence isn’t just a luxury—it’s a necessity for businesses of all sizes. Whether you’re a small business owner, a startup founder, or an enterprise leader, a professionally built website can set you apart from the competition. At DigLip7, our Web Development Service is designed to transform your vision into a powerful, user-friendly, and high-performing website.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                But what exactly does a Web Development Service entail? It’s more than just coding—it’s about creating a digital experience that engages visitors, drives conversions, and supports your business goals. From custom designs to seamless functionality, we craft websites that work for you.


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
                About DigLip 7 - {" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  Crafting Exceptional Web Experiences for Growth
                </span>
              </h2>
            </FloatingElement>
            {/* About DigLip 7 - Crafting Exceptional Web Experiences for Growth */}
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
              we don’t just code websites—we craft immersive digital experiences tailored to your brand and users. We believe true online engagement comes from intuitive design, seamless functionality, and a deep understanding of your audience.
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
      <section className="w-full  sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative w-72 h-full sm:w-full sm:h-full lg:w-full lg:h-full">
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
                Ready to Grow{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-teal-600 to-[#c89d5a]">
                  Your Business?
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
                  Partner with Diglip7 to unlock your digital potential. Contact us today for a free consultation!
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
                  Web development{" "}
                  <span className="font-semibold text-[#c89d5a]">
                    Our comprehensive web development services are integrated, user-centric, and always aligned with your specific needs and aspirations.
                  </span>
                  With DigLip 7, you don’t get off-the-shelf templates. You get a dedicated team, a bespoke build, and tangible outcomes that elevate your online success.
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
                  Every service we offer is built to captivate visitors, provide value, and convert traffic into meaningful interactions.
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
              Why Web Development Matters for Your Business
            </h2>
          </FloatingElement>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
            Investing in a professional Web Development Service is one of the smartest moves you can make for your business. Here’s why a well-developed website is critical to your success:


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
              Why Choose DigLip7 for Your Web Development Service?
            </h2>
          </FloatingElement>
          <p className="text-gray-600 max-w-4xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed">
            At DigLip7, we’re more than just a digital agency—we’re your partner in building a standout online presence. Here’s why businesses choose our Web Development Service:
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
                DigLip7’s Web Development Process
              </h2>
            </FloatingElement>
            <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
              Our Web Development Service follows a streamlined process to ensure your project runs smoothly and delivers exceptional results. Here’s how we bring your website to life:
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
                Final Call-
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white">
                  to-Action
                </span>
              </h2>
            </FloatingElement>
            {/* Final Call-to-Action */}
            <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Your users deserve a digital experience that’s intuitive,
              engaging, and conversion-focused. Diglip7’s UI/UX design services
              combine creativity, data, and technology to deliver just that.
              From wireframes and prototypes to polished user interface design,
              we’re here to make your product stand out.
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




export default Web_dev