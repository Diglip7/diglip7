import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  BarChart3,
  Search,
  Handshake,
  DollarSign,
  RefreshCw,
  Eye,
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
  Code2,
  Layers,
  Layout,
  Smartphone,
  Shield,
  FileCheck,
  Compass,
  Cpu,
  MousePointerClick,
  Sparkle,
  Server,
  Database,
  Lock,
  Wrench,
} from "lucide-react";
import SEO from "../../../components/SEO";
import seo2 from "../../../images/pd1.png";
import webd1 from "../../../images/webd1.png";
import webd2 from "../../../images/webd2.png";
import webd3 from "../../../images/webd3.png";

// What a Development Service Includes
const devServiceIncludes = [
  {
    title: "Website development",
    description: "Business sites, landing pages, and content-driven websites.",
    icon: Globe,
  },
  {
    title: "Web application development",
    description: "Portals, dashboards, booking systems, and tools that run in the browser.",
    icon: Layout,
  },
  {
    title: "Mobile app development",
    description: "Apps for iOS and Android, either native or cross-platform.",
    icon: Smartphone,
  },
  {
    title: "E-commerce development",
    description: "Online stores, payment integration, inventory, and order management.",
    icon: ShoppingCart,
  },
  {
    title: "CMS development",
    description: "Content management systems your team can update without writing code.",
    icon: Layers,
  },
  {
    title: "Custom software development",
    description: "Systems built around your specific workflow, such as CRMs, internal tools, and automation.",
    icon: Code2,
  },
  {
    title: "API and third-party integration",
    description: "Connecting your software to payment gateways, CRMs, ERPs, email platforms, and other services.",
    icon: Link2,
  },
  {
    title: "Maintenance and support",
    description: "Updates, security patches, backups, monitoring, and bug fixes.",
    icon: Wrench,
  },
];

// Why Choosing the Right Development Service Matters
const whyDevMatters = [
  {
    title: "Speed affects revenue",
    description:
      "Slow pages lose visitors. People leave sites that take too long to load, and search engines take notice of that behavior.",
    icon: Zap,
  },
  {
    title: "Security protects trust",
    description:
      "Customer data, payments, and logins must be handled carefully. A single breach can cost far more than the project itself.",
    icon: Shield,
  },
  {
    title: "Scalability saves money later",
    description:
      "Software built without planning for growth often has to be replaced when the business succeeds. Building it well from the start avoids that.",
    icon: TrendingUp,
  },
  {
    title: "Search visibility depends on how a site is built",
    description:
      "Search engines need to read your content. If your pages depend heavily on scripts to show their main text, or if the structure is messy, rankings can suffer even when the content is excellent.",
    icon: Search,
  },
  {
    title: "Maintainability keeps you independent",
    description:
      "Clean, documented code lets you or any competent developer continue the work. Poorly written code traps you with whoever wrote it.",
    icon: FileCheck,
  },
];

// Our Development Services (Cards)
const ourDevelopmentServices = [
  {
    title: "Website Development",
    paragraphs: [
      "Your website should be fast, secure, mobile-friendly, and easy to manage. We build sites that follow modern standards for performance and accessibility, with clean code and well-organized page structure.",
      "We pay close attention to how each page loads, how it behaves on small screens, and how it appears to search engines. Where it makes sense, we render key content on the server so it is available immediately to both visitors and crawlers.",
    ],
    linkText: "Explore our website development",
    linkUrl: "/development/web-development",
    icon: Globe,
  },
  {
    title: "Web Application Development",
    paragraphs: [
      "When your business needs more than a brochure site, a web application can automate work, serve customers, and centralize data. We build customer portals, booking and scheduling systems, admin dashboards, marketplaces, and internal tools.",
      "We start by mapping your workflow and identifying what to include first. That lets us launch a useful version quickly and expand it based on real feedback instead of guesses.",
    ],
    linkText: "See our web application development",
    linkUrl: "/development/cloud-application-development",
    icon: Layout,
  },
  {
    title: "Mobile App Development",
    paragraphs: [
      "Apps live on a very personal device, so expectations are high. We build mobile apps that feel smooth, load quickly, and respect battery and data use. Depending on your goals and budget, we can recommend native development for maximum performance or cross-platform development to reach both iOS and Android from a shared codebase.",
      "We also plan for app store requirements, testing on real devices, and post-launch updates.",
    ],
    linkText: "Learn about mobile app development",
    linkUrl: "/development/mobile-app-development",
    icon: Smartphone,
  },
  {
    title: "E-Commerce Development",
    paragraphs: [
      "Online stores need to do many things well at once: display products clearly, calculate prices and taxes, process payments securely, manage stock, and handle orders and returns. We build and customize stores on established platforms as well as fully custom solutions.",
      "We focus on the buying journey, so checkout is simple, pages load quickly, and product information is structured in a way that supports search visibility.",
    ],
    linkText: "Discover our e-commerce development",
    linkUrl: "/development/e-commerce-development",
    icon: ShoppingCart,
  },
  {
    title: "CMS and WordPress Development",
    paragraphs: [
      "If your team publishes content regularly, you need a system that makes editing easy. We set up and customize content management systems so non-technical staff can update pages, publish posts, and manage media without breaking the layout.",
      "We build custom themes and plugins only when needed, and we avoid heavy add-ons that slow a site down.",
    ],
    linkText: "See our CMS development",
    linkUrl: "/development/cms-development",
    icon: Layers,
  },
  {
    title: "Custom Software Development",
    paragraphs: [
      "Sometimes off-the-shelf tools cannot match how your business operates. Custom software fits your process exactly, whether that means a client management system, an inventory tool, a reporting dashboard, or an automation that removes repetitive manual work.",
      "We begin with a discovery phase to define requirements, users, and priorities, then build in stages so you can see and test progress regularly.",
    ],
    linkText: "Explore custom software development",
    linkUrl: "/development/custom-software_development",
    icon: Code2,
  },
  {
    title: "API and Third-Party Integration",
    paragraphs: [
      "Most businesses use several tools that should talk to each other. We connect your website or app with payment gateways, CRM platforms, accounting software, email tools, analytics, and shipping providers. Good integrations reduce manual entry, prevent errors, and give you a single view of your data.",
    ],
    linkText: "Learn about API integration",
    linkUrl: "/development/api-development&Integration",
    icon: Link2,
  },
  {
    title: "Website Maintenance and Support",
    paragraphs: [
      "Launching is not the finish line. Software needs updates, security patches, backups, and monitoring. Our maintenance plans keep your site or application healthy, fast, and secure, and give you a reliable team to call when something needs attention.",
    ],
    linkText: "See our maintenance and support plans",
    linkUrl: "/contact",
    icon: Wrench,
  },
];

// 7-Step Development Process
const devProcessSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We learn about your business, users, goals, budget, and any existing systems. We ask questions until the requirements are clear.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Planning and scoping",
    description:
      "We define features, priorities, and a realistic timeline. Large projects are divided into phases so you can launch sooner and improve continuously.",
    icon: Target,
  },
  {
    number: "03",
    title: "Design and prototyping",
    description:
      "We create wireframes and interface designs, so you can see and approve how the product will work before development begins.",
    icon: Layout,
  },
  {
    number: "04",
    title: "Development",
    description:
      "We build in short cycles and share progress regularly. You see working software early, not only at the end.",
    icon: Code2,
  },
  {
    number: "05",
    title: "Testing and quality assurance",
    description:
      "We test features, security, speed, and compatibility, then fix issues before release.",
    icon: FileCheck,
  },
  {
    number: "06",
    title: "Launch",
    description:
      "We deploy carefully, with backups, monitoring, and a rollback plan ready.",
    icon: Server,
  },
  {
    number: "07",
    title: "Support and growth",
    description:
      "After launch, we monitor performance, fix issues, and plan the next improvements based on real usage.",
    icon: TrendingUp,
  },
];

// Service Selection Matrix
const serviceMatrix = [
  {
    situation: "New business needing an online presence",
    service: "Website development",
    gain: "A fast, professional, search-friendly site",
  },
  {
    situation: "Outdated or slow website",
    service: "Redesign and rebuild",
    gain: "Better speed, security, and conversion",
  },
  {
    situation: "Want to sell products online",
    service: "E-commerce development",
    gain: "A complete, secure store",
  },
  {
    situation: "Manual processes slowing your team",
    service: "Custom software or web application",
    gain: "Automation and saved time",
  },
  {
    situation: "Customers want to use your service on their phones",
    service: "Mobile app development",
    gain: "A convenient, branded experience",
  },
  {
    situation: "Tools that do not talk to each other",
    service: "API and integration",
    gain: "Connected data, fewer errors",
  },
  {
    situation: "Site is live but neglected",
    service: "Maintenance and support",
    gain: "Security, stability, and peace of mind",
  },
];

// Why Businesses Choose DigLip7 for Development
const whyChooseUs = [
  {
    title: "Development connected to growth",
    description:
      "We are a digital marketing and design team as well as developers, so what we build is ready to attract visitors and convert them.",
    icon: Award,
  },
  {
    title: "Clear communication",
    description:
      "We speak plainly, avoid unnecessary jargon, and keep you informed at each stage.",
    icon: Users,
  },
  {
    title: "Quality you can verify",
    description:
      "We test thoroughly, document our work, and follow modern security and performance practices.",
    icon: Shield,
  },
  {
    title: "Flexible engagement",
    description:
      "Hire us for a single project or an ongoing partnership, without unnecessary lock-in.",
    icon: Handshake,
  },
  {
    title: "You own what we build",
    description:
      "Code, designs, and assets are handed over as agreed in your proposal, so you are never locked in.",
    icon: Sparkles,
  },
  {
    title: "Support after launch",
    description:
      "We remain available for improvements, fixes, and questions.",
    icon: CheckCircle,
  },
];

// How to Choose a Development Company Checklist
const companyChecks = [
  {
    title: "Ask for relevant examples",
    description: "Look at live projects similar to yours, and test them on your phone.",
  },
  {
    title: "Ask about process",
    description: "Good teams explain how they plan, build, test, and communicate.",
  },
  {
    title: "Clarify ownership",
    description: "You should own the code, or at least have clear rights to use and modify it.",
  },
  {
    title: "Check security practices",
    description: "Ask how they protect data, handle updates, and manage backups.",
  },
  {
    title: "Understand the technology choices",
    description: "A good partner explains why a tool fits your needs, rather than pushing whatever they already know.",
  },
  {
    title: "Discuss post-launch support",
    description: "Know who fixes issues and how quickly.",
  },
  {
    title: "Look for honest timelines",
    description: "Realistic estimates are a better sign than the fastest promise.",
  },
  {
    title: "Talk to past clients",
    description: "Real feedback tells you more than any sales page.",
  },
];

// FAQs
const faqs = [
  {
    question: "What is a development service?",
    answer:
      "A development service is a professional service that designs, builds, tests, and maintains software for a business. It includes websites, web applications, mobile apps, e-commerce stores, and custom systems, along with the integration and support needed to keep them running well.",
  },
  {
    question: "How much does a development service cost?",
    answer:
      "Cost depends on the type of project, its features, design complexity, integrations, and timeline. A simple website costs far less than a custom application or a large online store. We provide a written proposal after a discovery conversation so you know what is included.",
  },
  {
    question: "How long does it take to build a website or app?",
    answer:
      "A simple website can take a few weeks. Larger websites and online stores usually take one to three months, while custom web or mobile applications can take several months. Timelines depend on scope and how quickly feedback and content are provided.",
  },
  {
    question: "Which technologies do you use?",
    answer:
      "We choose technology based on your project, not our habits. Depending on your needs, that may include a CMS such as WordPress, an e-commerce platform, modern JavaScript frameworks, or custom back-end systems. We explain the reasons for each recommendation.",
  },
  {
    question: "Will my website be good for SEO?",
    answer:
      "We build with SEO in mind, including fast loading, clean structure, mobile-first layouts, and proper technical setup. Rankings also depend on content, authority, and competition, so we recommend combining development with SEO services for the best results.",
  },
  {
    question: "Do I own the code and the final product?",
    answer:
      "Yes. Ownership and usage rights are defined in your proposal and handed over when the project is complete and paid for. We also provide documentation so your project can be maintained by others.",
  },
  {
    question: "Can you fix or improve my existing website or app?",
    answer:
      "Yes. We audit existing code and performance, recommend fixes, and either improve what you have or suggest a rebuild if that is the more sensible option. We protect existing search visibility during any migration.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. We offer maintenance and support plans covering updates, security patches, backups, monitoring, and fixes, and we can also handle new features as your needs evolve.",
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
    const rotateXValue = (y - centerY) / 12;
    const rotateYValue = (centerX - x) / 12;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      className={`transform-gpu ${className || ""}`}
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
    <div style={{ transform: `translateY(${offsetY * 0.4}px)` }}>
      {children}
    </div>
  );
};

function Development() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Structured Data Schema Graph for Development Services
  const devSchemas = [
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://diglip7.com/#organization",
          "name": "DigLip7",
          "legalName": "DigLip7 Tech Private Limited",
          "url": "https://diglip7.com/",
          "logo": {
            "@type": "ImageObject",
            "url": "https://diglip7.com/favicon-32x32.png",
            "width": 512,
            "height": 512,
          },
          "description":
            "DigLip7 is a digital agency offering software development, web application development, mobile apps, e-commerce, SEO, and marketing services.",
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "telephone": "+91-9650608788",
            "email": "Admin@diglip7.com",
            "availableLanguage": ["English"],
          },
          "sameAs": [
            "https://www.facebook.com/DigLip7/",
            "https://www.instagram.com/diglip7",
            "https://www.linkedin.com/company/diglip7",
            "https://twitter.com/diglip7",
            "https://www.youtube.com/@diglip7",
          ],
        },
        {
          "@type": "WebSite",
          "@id": "https://diglip7.com/#website",
          "url": "https://diglip7.com/",
          "name": "DigLip7",
          "publisher": { "@id": "https://diglip7.com/#organization" },
          "inLanguage": "en",
        },
        {
          "@type": "WebPage",
          "@id": "https://diglip7.com/development#webpage",
          "url": "https://diglip7.com/development",
          "name": "Development Service | Web, App & Custom Software | DigLip7",
          "description":
            "Fast, secure, and scalable development services from DigLip7: websites, web apps, mobile apps, e-commerce, and custom software. Get a free consultation.",
          "isPartOf": { "@id": "https://diglip7.com/#website" },
          "about": { "@id": "https://diglip7.com/development#service" },
          "primaryImageOfPage": {
            "@type": "ImageObject",
            "url": "https://diglip7.com/images/development-service-og.jpg",
          },
          "breadcrumb": { "@id": "https://diglip7.com/development#breadcrumb" },
          "inLanguage": "en",
          "datePublished": "2026-09-24",
          "dateModified": "2026-09-24",
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://diglip7.com/development#breadcrumb",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://diglip7.com/",
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Development Service",
              "item": "https://diglip7.com/development",
            },
          ],
        },
        {
          "@type": "Service",
          "@id": "https://diglip7.com/development#service",
          "name": "Development Service",
          "serviceType": "Software and Web Development",
          "description":
            "Professional software development services including web development, web applications, mobile apps, e-commerce development, CMS development, custom software, API integration, and ongoing maintenance.",
          "provider": { "@id": "https://diglip7.com/#organization" },
          "areaServed": ["Worldwide", "India", "United States", "United Kingdom", "Canada", "Australia"],
          "url": "https://diglip7.com/development",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Software Development Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Website Development",
                  "description": "Fast, secure, and mobile-friendly website development.",
                },
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Web Application Development",
                  "description": "Portals, dashboards, booking systems, and browser-based software.",
                },
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Mobile App Development",
                  "description": "Native and cross-platform mobile apps for iOS and Android.",
                },
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "E-Commerce Development",
                  "description": "Online stores, payment integrations, inventory, and order management.",
                },
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "CMS and WordPress Development",
                  "description": "Content management systems that make publishing and managing content easy.",
                },
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Custom Software Development",
                  "description": "Tailored business software, CRMs, internal tools, and automation.",
                },
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "API and Third-Party Integration",
                  "description": "Connecting software to payment gateways, CRMs, ERPs, and email tools.",
                },
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Website Maintenance and Support",
                  "description": "Updates, security patches, backups, monitoring, and bug fixes.",
                },
              },
            ],
          },
        },
        {
          "@type": "FAQPage",
          "@id": "https://diglip7.com/development#faq",
          "mainEntity": faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer,
            },
          })),
        },
      ],
    },
  ];

  return (
    <div className="overflow-x-hidden pt-18 sm:pt-18 bg-white text-gray-800">
      <SEO
        title="Development Service | Web, App & Custom Software | DigLip7"
        description="Fast, secure, and scalable development services from DigLip7: websites, web apps, mobile apps, e-commerce, and custom software. Get a free consultation."
        keywords="Development service, web development service, custom software development, mobile app development, ecommerce development, CMS development, API integration, website maintenance, DigLip7"
        canonical="https://diglip7.com/development"
        ogImage="https://diglip7.com/images/development-service-og.jpg"
        ogImageAlt="DigLip7 development service: websites, web apps, mobile apps, and custom software"
        ogType="website"
        schema={devSchemas}
      />

      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex flex-col lg:flex-row items-center justify-center overflow-hidden py-12 lg:py-20 px-4 sm:px-6 md:px-12">
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring" }}
            className="mb-6"
          >
            <Sparkles className="w-16 h-16 sm:w-20 sm:h-20 text-[#c89d5a] mx-auto mb-4" />
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-teal-700 mb-4 sm:mb-6 leading-tight"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Development Service That Turns Your Idea Into{" "}
            <span className="text-transparent bg-clip-text bg-[#c89d5a] to-teal-300">
              Fast, Secure, and Scalable Software
            </span>
          </motion.h1>

          <motion.div
            className="space-y-4 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            <p className="text-teal-800">
              A great idea is only the starting point. What separates businesses that grow from businesses that stall is often what happens next: whether the website loads quickly, whether the app works on every phone, whether the system can handle ten times the traffic without breaking, and whether the person who built it is still around when something goes wrong.
            </p>
            <p className="text-teal-700">
              That is where a reliable development service makes the difference. At <span className="font-bold text-teal-900">DigLip7</span>, we build websites, web applications, mobile apps, online stores, and custom business software that work well today and can grow with you tomorrow. We write clean code, explain our decisions in plain language, and stay involved after launch.
            </p>
            <p className="text-teal-800">
              <span className="font-semibold text-teal-900">For anyone who wants the short answer, here it is.</span> A development service is a professional service that designs, builds, tests, and maintains software for a business, such as websites, web applications, mobile apps, e-commerce stores, and custom systems, so that the business can operate, sell, and serve customers online. Read on to see what that covers, how a project runs, and how to choose the right team.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a href="/contact">
              <motion.button
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white text-lg font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get a Free Project Consultation
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </a>
            <a href="/portfolio">
              <motion.button
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-teal-800 border-2 border-teal-700 text-lg font-semibold rounded-full shadow-md hover:bg-teal-50 transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Our Portfolio
              </motion.button>
            </a>
          </motion.div>
        </div>

        <ParallaxBg>
          <div className="p-6 inset-0 w-full h-full">
            <img
              src={seo2}
              alt="Development Service by DigLip7"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0"></div>
          </div>
        </ParallaxBg>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${(i * 5.2) % 100}%`,
                top: `${(i * 7.1) % 100}%`,
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

      {/* Section 2: What Does a Development Service Include? */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12 px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Left Image with 3D effect */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <Card3D className="w-full">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={webd1}
                  alt="What Does a Development Service Include"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover transform transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-teal-700/20 to-[#c89d5a]/20"></div>
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
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-teal-700 leading-tight mb-4 sm:mb-6">
                What Does a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  Development Service Include?
                </span>
              </h2>
            </FloatingElement>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-teal-800 leading-relaxed text-sm sm:text-base lg:text-lg">
                Software development is a broad field, so it helps to understand the main parts. Most businesses need some combination of the following:
              </p>
              <p className="text-teal-800 leading-relaxed text-sm sm:text-base lg:text-lg">
                <span className="font-semibold text-teal-900">You may need only one of these, or several working together.</span> A good development partner helps you choose what you actually need instead of selling everything at once.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What a Development Service Includes Grid */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-teal-50 to-[#c89d5a]/10 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {devServiceIncludes.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                viewport={{ once: true }}
              >
                <Card3D className="h-full">
                  <div className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/40 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center mb-4 text-teal-700">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Why Choosing the Right Development Service Matters */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <FloatingElement delay={0.2}>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-teal-700 leading-tight mb-4 sm:mb-6">
                Why Choosing the Right{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  Development Service Matters
                </span>
              </h2>
            </FloatingElement>

            <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-6">
              Software is expensive to build and even more expensive to rebuild. The choices made in the first few weeks affect your costs, speed, security, and search visibility for years.
            </p>

            <div className="space-y-4">
              {whyDevMatters.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 text-teal-700">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base">
                      {point.title}.
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-teal-50 rounded-xl border border-teal-100">
              <p className="text-teal-900 font-semibold text-sm sm:text-base">
                Development is not just a technical task. It is a business decision with long-term consequences.
              </p>
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
                  src={webd2}
                  alt="Why Development Matters"
                  className="rounded-2xl shadow-2xl w-full h-64 sm:h-80 lg:h-96 object-cover transform transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-[#c89d5a]/20 rounded-2xl"></div>
              </div>
            </Card3D>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Our Development Services Cards */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-teal-700 leading-tight mb-4 sm:mb-6">
                Our Development{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  Services
                </span>
              </h2>
            </FloatingElement>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg">
              We match the solution to the problem. Here is how we work across each area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ourDevelopmentServices.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                viewport={{ once: true }}
              >
                <Card3D className="h-full">
                  <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-100 to-[#c89d5a]/20 flex items-center justify-center text-teal-700 flex-shrink-0">
                          <service.icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                          {service.title}
                        </h3>
                      </div>
                      <div className="space-y-3 mb-6">
                        {service.paragraphs.map((p, pIdx) => (
                          <p key={pIdx} className="text-gray-600 text-sm leading-relaxed">
                            {p}
                          </p>
                        ))}
                      </div>
                    </div>
                    <a
                      href={service.linkUrl}
                      className="inline-flex items-center text-sm font-semibold text-teal-700 hover:text-teal-900 group"
                    >
                      {service.linkText}
                      <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 & 6: Development That Is Built for SEO & Security/AI */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card3D className="w-full">
              <div className="relative">
                <img
                  src={webd3}
                  alt="Development That Is Built for SEO"
                  className="rounded-2xl shadow-xl w-full h-80 lg:h-[520px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-teal-700/20 to-[#c89d5a]/20 rounded-2xl"></div>
              </div>
            </Card3D>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 space-y-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <FloatingElement delay={0.3}>
                <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-teal-700 leading-tight mb-4 sm:mb-6">
                  Development That Is{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-teal-600 to-[#c89d5a]">
                    Built for SEO
                  </span>
                </h2>
              </FloatingElement>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                Many businesses discover too late that their new website is hard for search engines to understand. We build with search visibility in mind from the first line of code.
              </p>
              <p className="text-gray-700 text-sm sm:text-base font-semibold mb-2">
                That includes:
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 mt-1 flex-shrink-0" />
                  <span>Clean, semantic HTML with a logical heading structure.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 mt-1 flex-shrink-0" />
                  <span>Fast loading through optimized images, efficient code, caching, and careful use of scripts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 mt-1 flex-shrink-0" />
                  <span>Server-side or pre-rendered content so important text is present in the page source rather than appearing only after scripts run.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 mt-1 flex-shrink-0" />
                  <span>Mobile-first layouts that work well on every screen size.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 mt-1 flex-shrink-0" />
                  <span>Proper technical setup, including canonical tags, XML sitemaps, robots directives, and clean URL structure.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 mt-1 flex-shrink-0" />
                  <span>Structured data so search engines can understand your business, services, and content.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 mt-1 flex-shrink-0" />
                  <span>Redirect planning during migrations, so existing rankings are protected.</span>
                </li>
              </ul>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed bg-teal-50/70 p-3 rounded-lg border border-teal-100">
                Because we also provide <a href="/digital-market/seoservices" className="text-teal-700 underline font-semibold hover:text-teal-900">SEO</a> and <a href="/digital-market" className="text-teal-700 underline font-semibold hover:text-teal-900">digital marketing</a>, our developers and marketers work from the same plan. You do not have to translate between separate teams.
              </p>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-teal-900 mb-3">
                Security, Performance, and{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  Quality Standards
                </span>
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                Good development is not only about features. It is also about the invisible qualities that keep software trustworthy.
              </p>
              <div className="space-y-2 text-xs sm:text-sm text-gray-600 mb-3">
                <p>
                  <strong>Security.</strong> We use HTTPS everywhere, validate and sanitize user input, protect against common attacks, apply secure authentication, and follow the principle of giving users only the access they need. Sensitive data is handled carefully and stored responsibly.
                </p>
                <p>
                  <strong>Performance.</strong> We measure real-world performance using tools such as Lighthouse and Core Web Vitals, and we fix bottlenecks before launch rather than after complaints.
                </p>
                <p>
                  <strong>Accessibility.</strong> We build with keyboard navigation, readable contrast, proper labels, and screen-reader support in mind, so more people can use what we build.
                </p>
                <p>
                  <strong>Testing.</strong> We test functionality, compatibility, and edge cases on real browsers and devices, not only in a development environment.
                </p>
                <p>
                  <strong>Documentation.</strong> We document code and setup so your project is not a black box.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-teal-900 mb-3">
                How We Use AI in Development, and{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  Where People Lead
                </span>
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                We use AI-assisted tools to speed up routine work such as boilerplate code, test generation, code review suggestions, and documentation drafts. This helps us move faster and catch issues earlier.
              </p>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Architecture, security decisions, and quality review stay with experienced engineers. Every line that goes into your product is reviewed by a person who understands the context. AI is a useful assistant, but accountability for your software belongs to our team.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 7: Our Development Process (7 Steps) */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-teal-50 to-[#c89d5a]/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-teal-700 leading-tight mb-4 sm:mb-6">
                Our Development{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  Process
                </span>
              </h2>
            </FloatingElement>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg">
              A clear process keeps projects predictable. This is how we work.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {devProcessSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                viewport={{ once: true }}
              >
                <Card3D className="h-full">
                  <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl border border-white/60 transition-all duration-300 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-[#c89d5a]">
                          {step.number}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-700">
                          <step.icon className="w-5 h-5" />
                        </div>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Which Development Service Do You Need? Matrix Table */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-teal-700 leading-tight mb-4 sm:mb-6">
                Which Development Service{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  Do You Need?
                </span>
              </h2>
            </FloatingElement>
          </div>

          <div className="overflow-x-auto shadow-xl rounded-2xl border border-gray-100 bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-teal-700 to-teal-800 text-white text-sm sm:text-base">
                  <th className="p-4 sm:p-5 font-semibold">Your situation</th>
                  <th className="p-4 sm:p-5 font-semibold">Best starting point</th>
                  <th className="p-4 sm:p-5 font-semibold">What you gain</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs sm:text-sm">
                {serviceMatrix.map((row, idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? "bg-white" : "bg-teal-50/30 hover:bg-teal-50/60 transition-colors"}
                  >
                    <td className="p-4 sm:p-5 font-medium text-gray-900">
                      {row.situation}
                    </td>
                    <td className="p-4 sm:p-5 text-teal-700 font-semibold">
                      {row.service}
                    </td>
                    <td className="p-4 sm:p-5 text-gray-600">
                      {row.gain}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-xs sm:text-sm text-gray-600 mt-6 max-w-2xl mx-auto">
            If you are not sure, describe your problem to us. We will suggest the simplest solution that solves it, even if that means a smaller project than you expected.
          </p>
        </div>
      </section>

      {/* Section 9: Timeline & Cost Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-teal-50/30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-teal-700 leading-tight mb-4 sm:mb-6">
                Timelines and Cost:{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  What to Expect
                </span>
              </h2>
            </FloatingElement>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-100">
              <p className="text-sm text-gray-600 leading-relaxed">
                We would rather be direct than vague. A simple business website can take a few weeks. A larger website or online store often takes one to three months. Custom web applications and mobile apps usually take several months, depending on features and complexity.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-100">
              <p className="text-sm text-gray-600 leading-relaxed">
                Cost depends on scope, number of features, design complexity, integrations, security needs, and timeline. After discovery, we provide a written proposal that lists what is included, the phases, and the estimated timeline, so you can make a confident decision.
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-5 bg-teal-50 rounded-xl border border-teal-200 text-center">
            <p className="text-xs sm:text-sm text-teal-900 font-medium">
              Be careful with quotes that are far below everyone else&apos;s or that promise a complex product in days. Software built on shortcuts often costs more to fix than it saved. It is better to start with a smaller, well-built first version and grow it.
            </p>
          </div>
        </div>
      </section>

      {/* Section 10: Why Businesses Choose DigLip7 for Development */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-teal-700 leading-tight mb-4 sm:mb-6">
                Why Businesses Choose{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  DigLip7 for Development
                </span>
              </h2>
            </FloatingElement>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card3D className="h-full">
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-teal-50/50 to-white border border-teal-100 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center text-teal-700 mb-4">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {item.title}.
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 11: How to Choose a Development Company */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-teal-50 to-[#c89d5a]/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-teal-700 leading-tight mb-4 sm:mb-6">
                How to Choose a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  Development Company
                </span>
              </h2>
            </FloatingElement>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Use these checks before you sign a contract.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {companyChecks.map((chk, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 bg-white rounded-xl shadow-sm border border-gray-100 flex items-start gap-3"
              >
                <div className="mt-1 w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 flex-shrink-0">
                  <CheckCircle className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base">
                    {chk.title}.
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">
                    {chk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 12: Frequently Asked Questions */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto max-w-4xl">
          <motion.div
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-teal-700 leading-tight mb-4 sm:mb-6">
                Frequently Asked Questions About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  Development Service
                </span>
              </h2>
            </FloatingElement>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gray-50/60 rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left p-4 sm:p-5 hover:bg-teal-50/40 transition-colors duration-200 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-semibold text-teal-800 pr-4">
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
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-100 bg-white"
                    >
                      <div className="p-4 sm:p-5 text-gray-600 leading-relaxed text-xs sm:text-sm">
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
    </div>
  );
}

export default Development;