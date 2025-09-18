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
import seo2 from "../images/ai.jpeg";
import seoImage from "../images/ai1.png";
import seo4 from "../images/ai2.png";
import aboutImg from "../images/ai3.png";

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
    title: "In-House AI Experts & Digital Strategists",
    description:
      "Our team combines technical mastery with marketing expertise to craft bespoke solutions.",
    icon: TrendingUp,
  },
  {
    title: "Proprietary Tools and Third-Party Integrations",
    description:
      "We use cutting-edge platforms and custom-built AI tools to stay ahead of the curve.",
    icon: BarChart3,
  },
  {
    title: "Transparent Reporting and Measurable KPIs",
    description:
      "You’ll always know how your campaigns are performing and why.",
    icon: Search,
  },
  {
    title: "Proven Results Across Industries",
    description:
      "From startups to enterprises, we’ve driven success for clients worldwide.",
    icon: Handshake,
  },
];

const solutions = [
  {
    title: "E-commerce",
    description:
      "Boost sales with personalized product recommendations and dynamic pricing.",
    icon: ShoppingCart,
    points: [
      "Ai powered endorsements experts act as your shield, suppressing",
      "harmful content and replacing it Ai powered with positive, authentic narratives.",
      "Ai powered: Fast, mobile-friendly design.",
    ],
  },
  {
    title: "SaaS & Technology",
    description:
      "Drive sign-ups and retention with targeted campaigns.",
    icon: Building2,
    points: [
      "Diglip7’s Ai powered we polish your online presence to exude reliability",
      "authority, winning over customers, clients, and peers.",
      "Ai powered: Systems that grow with your business.",
    ],
  },
  {
    title: "Healthcare",
    description: "Engage patients with tailored outreach and appointment reminders.",
    icon: MapPin,
    points: [
      "Healthcare Partnerships bury undesirable results",
      "Healthcare promotions that screams credibility—because visibility is power.",
      "Healthcare Engage your local audience.",
    ],
  },
  {
    title: "Real Estate",
    description:
      "Attract buyers and sellers with smart lead generation.",
    icon: Link2,
    points: [
      " Diglip7’s Real Estate ensures you outshine rivals ",
      "Real Estate stay top-of-mind for your audience.",
      "Boosting Real Estate: Improve rankings and trust.",
    ],
  },
  {
    title: "Finance",
    description:
      "Build trust with predictive insights and secure messaging.",
    icon: HelpCircle,
    points: [
      "Finance your services swoop in to contain the damage,",
      "restore your image, and keep your brand standing tall.",
      "Improve Visibility Finance: Stand out in voice and AI searches.",
    ],
  },
  {
    title: "Education",
    description:
      "Reach students and parents with customized content.",
    icon: Mic,
    points: [
      "Education that keeps your business relevant,",
      "respected, and thriving in a world where online perception is everything.",
      "Education Compatibility: Optimized for Siri, Alexa.",
    ],
  },
];

const steps = [
  {
    number: "1",
    title: "Data-Driven Decision-Making",
    description:
      "AI analyzes customer behavior, market trends, and campaign performance instantly, eliminating guesswork and empowering informed strategies.",
    icon: Target,
  },
  {
    number: "2",
    title: "Enhanced Customer Targeting",
    description:
      "With machine learning in marketing, you can identify high-value prospects and tailor campaigns to their unique needs.",
    icon: Search,
  },
  {
    number: "3",
    title: "Predictive Analytics",
    description: "Anticipate customer actions and market shifts before they occur, giving you a competitive edge.",
    icon: Zap,
  },
  {
    number: "4",
    title: "Real-Time Optimization",
    description:
      " Adjust ads, emails, and content on the fly to maximize engagement and conversions.",
    icon: Globe,
  },
  {
    number: "5",
    title: "Cost-Efficiency and Scalability",
    description: "Automate time-consuming tasks and scale campaigns effortlessly without inflating budgets.",
    icon: BarChart3,
  },
  {
    number: "6",
    title: "Personalized Customer Journeys",
    description:
      "Deliver bespoke experiences that build loyalty and boost lifetime value.",
    icon: Award,
  },
];

const faqs = [
  {
      question:
        "What’s the difference between traditional and AI-powered digital marketing?",
      answer:
        "Traditional marketing relies on manual efforts and static plans, while an AI-powered digital Marketing Service uses machine learning in marketing to automate tasks, analyze data, and optimize in real time. DigLip7 leverages AI to deliver faster, more precise results—think smarter targeting and higher ROI.",
    },
    {
      question: "How secure is my customer data with AI tools?",
      answer:
        "Data security is non-negotiable at DigLip7. Our AI-powered digital Marketing Service uses encrypted systems and complies with standards like GDPR and CCPA. Whether we’re running smart targeting or personalized marketing with AI, your customer data stays safe and confidential.",
    },
    {
      question: "Can small businesses benefit from AI-powered marketing?",
      answer:
        "Yes! Our AI marketing strategy is scalable and budget-friendly, making it perfect for small businesses. From AI-powered SEO tools to cost-efficient smart paid advertising, DigLip7 helps startups and local companies compete with bigger players.",
    },
    {
      question:
        "How long does it take to see results from AI-powered strategies?",
      answer:
        "Results vary, but AI speeds up the process. Many DigLip7 clients see boosts in engagement or leads within 2–4 weeks, with significant ROI often emerging in 2–3 months. Our automated reporting dashboards keep you informed every step of the way.",
    },
    {
      question: "Do I need technical skills to use your AI marketing services?",
      answer:
        "Not at all. DigLip7 handles the complexity for you. Our in-house AI experts turn advanced tech—like predictive marketing analytics or conversational AI—into simple, effective strategies, so you can focus on your business.",
    },
    {
      question: "How does AI improve campaign performance?",
      answer:
        "AI enhances performance by analyzing data, predicting trends, and optimizing in real time. With smart marketing automation, DigLip7 reduces costs, boosts conversions, and personalizes customer experiences—delivering campaigns that hit your KPIs.",
    },
    {
      question: "Can you customize AI strategies for my industry?",
      answer:
        "Absolutely. Whether you’re in e-commerce, healthcare, or finance, DigLip7 tailors our AI-powered digital Marketing Service to your goals and industry needs. From AI content generation to chatbots for customer support, we build solutions that fit.",
    },
    {
      question: " Why choose DigLip7 over other agencies?",
      answer:
        "We stand out with our proprietary AI tools, transparent reporting, and proven results. DigLip7 combines technical expertise with marketing know-how to deliver an AI-powered digital Marketing Service that drives growth—trusted by businesses worldwide",
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

function Ai_powered() {
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
                    AI-powered Digital Marketing
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
                    alt="AI-powered digital marketing strategy with data-driven insights and automation"
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
                  alt="AI-powered digital marketing service for personalized campaigns, automation, and business growth"
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
                AI-Powered Digital Marketing Service{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  | DigLip7 Growth Solutions
                </span>
              </h2>
            </FloatingElement>
            {/* UI/UX Design Services | Diglip7 – Crafting Seamless Digital Experiences */}
            <div className="space-y-4 sm:space-y-6">
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                In today’s fast-paced digital landscape, staying ahead of the
                competition requires more than just creativity and intuition—it
                demands precision, adaptability, and innovation. That’s where an
                AI-powered digital Marketing Service comes in, revolutionizing
                how businesses connect with customers, optimize campaigns, and
                drive measurable growth. At DigLip7, we harness the
                transformative potential of artificial intelligence to deliver
                smarter, data-driven marketing solutions that maximize ROI and
                future-proof your business. Imagine a marketing strategy that
                learns from your audience in real time, predicts trends before
                they happen, and personalizes every customer interaction—all
                while reducing costs and boosting efficiency.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                With DigLip7’s AI-powered approach, this isn’t a vision of the
                future; it’s the reality we create for our clients today.
                Whether you’re a startup aiming to scale, a marketing manager
                seeking better performance, or an enterprise looking to dominate
                your industry, our AI-powered digital Marketing Service is your
                key to unlocking unparalleled success.
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
                What Is AI-Powered{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  Digital Marketing?
                </span>
              </h2>
            </FloatingElement>
            {/* What Are UI/UX Design Services? */}
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
              AI-powered digital marketing combines cutting-edge artificial
              intelligence with proven marketing strategies to create a smarter,
              more effective way to reach your audience. At its core, it
              leverages machine learning, predictive analytics, and automation
              to analyze vast amounts of data, uncover insights, and execute
              campaigns with precision. Unlike traditional marketing, which
              often relies on trial and error, an AI-powered digital Marketing
              Service transforms customer acquisition by automating repetitive
              tasks, personalizing content, and optimizing performance in real
              time. From AI-driven SEO tools to smart advertising platforms,
              this technology empowers businesses to deliver the right message
              to the right person at the right time—every time. At DigLip7, we
              simplify this complex technology for our clients, ensuring you
              don’t need to be a tech expert to benefit from AI in digital
              advertising. Our goal is to make AI work for you, driving results
              that matter: more leads, higher conversions, and sustainable
              growth.
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
                  alt="What is AI-powered technology explained with benefits, features, and real-world applications"
                  className="rounded-2xl  w-full h-full sm:h-full lg:h-full object-cover transform transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0  rounded-2xl"></div>
              </div>
            </Card3D>
          </motion.div>
        </div>
      </section>

      {/* Results Section with Custom Shape */}
      <section className="w-full sm:py-16 lg: px-4 sm:px-6 lg:px-8">
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
                  alt="How DigLip7 implements AI in real digital marketing campaigns for smarter targeting and higher ROI"
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
                How DigLip7 Implements AI in Real Campaigns:{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-teal-600 to-[#c89d5a]">
                  Turning Vision into Results
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
                  we don’t just talk about the potential of AI—we put it to work, delivering measurable outcomes for our clients. Our AI-powered digital Marketing Service transforms campaigns from concept to completion, leveraging advanced technology to optimize every detail. Here’s how we seamlessly integrate artificial intelligence into real-world marketing strategies to drive success:
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
                  End-to-End Campaign Automation{" "}
                  <span className="font-semibold text-[#c89d5a]">
                    From initial planning to final execution, our digital marketing automation takes the heavy lifting out of campaign management. By automating repetitive tasks like audience segmentation, content scheduling, and performance tracking, we save you time and resources, allowing your team to focus on strategy and creativity.
                  </span>
                  Intelligent A/B Testing and Ad Optimization
                  Why wait weeks to find the best-performing ad? With our AI in digital advertising, we test multiple variables—headlines, visuals, calls-to-action—simultaneously. AI analyzes the results in real time, identifying the winning combination faster and optimizing your ads for maximum impact.
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
                  Automated Reporting Dashboards
                  Say goodbye to manual data analysis. Our AI-Powered Digital Marketing Service provides real-time insights through intuitive, automated dashboards.
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
              Why Choose DigLip7 as Your AI Marketing Partner?
            </h2>
          </FloatingElement>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
            Partnering with DigLip7 means choosing a leader in AI-powered digital Marketing Services. Here’s what sets us apart:
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
              Industries That Benefit from AI-Powered Marketing
            </h2>
          </FloatingElement>
          <p className="text-gray-600 max-w-4xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed">
            Our AI-powered digital Marketing Service delivers value across diverse sectors:
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
                Benefits of AI-Powered Digital Marketing Services
              </h2>
            </FloatingElement>
            <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
             Why should your business invest in an AI-powered digital Marketing Service? The advantages are clear and transformative:
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
                Get Started with AI-Powered 
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white">
                  Digital Marketing Today
                </span>
              </h2>
            </FloatingElement>
            {/* Final Call-to-Action */}
            <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Ready to revolutionize your marketing and drive unprecedented growth? DigLip7 is here to make it happen. Our AI-powered digital Marketing Service empowers your business with the tools, insights, and strategies to succeed in a digital-first world.Schedule a free strategy session today, request a custom proposal, or contact us for a live demo of our AI tools in action
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

export default Ai_powered;
