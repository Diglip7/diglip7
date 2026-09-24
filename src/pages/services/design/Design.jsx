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
  Palette,
  Layers,
  Layout,
  Smartphone,
  PenTool,
  Shield,
  FileCheck,
  Compass,
  Cpu,
  MousePointerClick,
  Sparkle,
  Paintbrush,
  Monitor,
} from "lucide-react";
import SEO from "../../../components/SEO";
import seo2 from "../../../images/uiux001.png";
import seoImage from "../../../images/uiux1.png";
import seo4 from "../../../images/uiux2.png";
import aboutImg from "../../../images/uiux3.png";

// What a Design Service Includes
const designServiceIncludes = [
  {
    title: "Web design",
    description: "The structure, layout, and visual style of your website.",
    icon: Monitor,
  },
  {
    title: "UI and UX design",
    description: "How a website or app feels to use, from navigation to buttons to forms.",
    icon: Layout,
  },
  {
    title: "Branding and logo design",
    description: "The identity that makes your business recognizable.",
    icon: Palette,
  },
  {
    title: "Graphic design",
    description: "Brochures, presentations, packaging, social graphics, and print materials.",
    icon: PenTool,
  },
  {
    title: "Landing page design",
    description: "Focused pages built to turn visitors into leads or buyers.",
    icon: MousePointerClick,
  },
  {
    title: "E-commerce design",
    description: "Product pages, category layouts, and checkout flows that make buying easy.",
    icon: ShoppingCart,
  },
  {
    title: "Ad and social media creative",
    description: "Visuals for campaigns that need to stop the scroll.",
    icon: Sparkles,
  },
];

// Why Professional Design Service Matters
const whyDesignMatters = [
  {
    title: "It builds trust",
    description:
      "A clean, consistent, modern look signals that a business is established and careful. Outdated or messy design does the opposite, even when the product is excellent.",
    icon: Shield,
  },
  {
    title: "It improves conversions",
    description:
      "Clear layouts, readable text, and obvious buttons remove friction. When people know exactly what to do next, more of them do it.",
    icon: TrendingUp,
  },
  {
    title: "It supports SEO",
    description:
      "Google evaluates real user experience, including how quickly pages load, how stable they are while loading, and how well they work on phones. Design decisions directly affect these signals. A page that is cluttered, slow, or hard to read also tends to lose visitors quickly, which sends the wrong message to search engines.",
    icon: Search,
  },
  {
    title: "It makes marketing work harder",
    description:
      "Ads, emails, and social posts perform better when the landing page and brand visuals match what people just clicked on.",
    icon: Target,
  },
  {
    title: "It saves money over time",
    description:
      "A well-planned design system means you stop rebuilding pages from scratch and stop paying for inconsistent one-off fixes.",
    icon: DollarSign,
  },
];

// Our Design Services (Cards)
const ourDesignServices = [
  {
    title: "Web Design That Works as Hard as You Do",
    description:
      "Your website is your most important sales asset, and it works around the clock. Our web design service focuses on three things: clarity, speed, and conversion.",
    bullets: [
      "We plan the structure before opening any design tool, so visitors can find what they need in a few clicks.",
      "We design mobile-first, because most people will meet your site on a phone.",
      "We build with performance in mind, using optimized images, clean code, and layouts that remain stable as they load.",
      "Every page is designed to answer a visitor's questions and lead them toward action, whether that is calling, booking, requesting a quote, or buying.",
    ],
    linkText: "Explore our web design service",
    linkUrl: "/services/design/web-design",
    icon: Globe,
  },
  {
    title: "UI and UX Design for Easier Experiences",
    description:
      "UI design is the look of an interface. UX design is how it feels to use. We work on both.",
    bullets: [
      "Our process includes understanding your users, mapping their journey, sketching wireframes, and testing ideas before they become final.",
      "We look for the places where people hesitate, get lost, or drop off, and fix those first.",
      "The result is a website or app that feels natural, even to first-time visitors.",
    ],
    linkText: "Learn about UI and UX design",
    linkUrl: "/services/design/ui-ux",
    icon: Layout,
  },
  {
    title: "Landing Page Design That Turns Clicks Into Leads",
    description:
      "A landing page has one job. We design them with a single, clear message, persuasive but honest copy areas, trust signals such as testimonials and guarantees, and forms that are short and simple.",
    bullets: [
      "Because a landing page often receives paid traffic, small design improvements can lower your cost per lead noticeably.",
      "We also build pages so they can be tested and refined over time.",
    ],
    linkText: "See our landing page design",
    linkUrl: "/services/design/landing-page-design",
    icon: MousePointerClick,
  },
  {
    title: "Logo and Brand Identity Design",
    description:
      "A logo is only the beginning. A brand identity includes your colors, typography, imagery style, tone of voice, and rules for using them all consistently.",
    bullets: [
      "We start by learning what makes your business different, who you want to reach, and how you want people to feel.",
      "Then we create a logo and identity system that is distinctive, flexible across sizes and platforms, and built to last.",
      "You receive clear guidelines so anyone on your team can use the brand correctly.",
    ],
    linkText: "Discover our branding service",
    linkUrl: "/services/design/logo-branding",
    icon: Palette,
  },
  {
    title: "Graphic Design for Marketing and Print",
    description:
      "From brochures and presentations to packaging, menus, banners, and event materials, our graphic design service keeps your brand looking polished everywhere.",
    bullets: [
      "We prepare files correctly for both digital and print use, so you avoid blurry images, wrong colors, and last-minute surprises at the printer.",
    ],
    linkText: "View our graphic design work",
    linkUrl: "/services/design/graphic-design",
    icon: PenTool,
  },
  {
    title: "Social Media and Ad Creative",
    description:
      "Social platforms move fast, and attention is short. We design post templates, carousels, stories, and ad creatives that match your brand and stand out in a crowded feed.",
    bullets: [
      "We also create variations for testing, because the best-performing visual is often not the one anyone expected.",
    ],
    linkText: "Explore social media design",
    linkUrl: "/services/design/social-media-creative",
    icon: Sparkles,
  },
  {
    title: "E-Commerce Design",
    description:
      "Online shoppers judge stores quickly. We design product pages with clear images, benefits, and trust elements; category pages that make browsing simple; and checkout flows with as little friction as possible.",
    bullets: [
      "On mobile, every tap counts, so we test the full purchase path on real devices.",
    ],
    linkText: "See our e-commerce design service",
    linkUrl: "/services/design/ecommerce-design",
    icon: ShoppingCart,
  },
  {
    title: "Design for SEO and Accessibility",
    description:
      "We treat these as part of good design rather than extras.",
    bullets: [
      "Logical heading structure and readable font sizes.",
      "Sufficient color contrast and descriptive image alt text.",
      "Keyboard-friendly navigation and compressed images that load quickly.",
      "These choices help more people use your site and give search engines a clear, well-organized page to understand.",
    ],
    linkText: "Learn more about our accessible design",
    linkUrl: "/contact",
    icon: Eye,
  },
];

// 7-Step Design Process
const designProcessSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We learn about your business, audience, competitors, and goals. We also review any existing design and what has or has not worked.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Research and Strategy",
    description:
      "We study how your customers behave, what competitors are doing, and where design can make the biggest difference.",
    icon: Search,
  },
  {
    number: "03",
    title: "Concepts and Wireframes",
    description:
      "We sketch structure and direction first, so you can approve the foundation before we invest in polish.",
    icon: Layout,
  },
  {
    number: "04",
    title: "Design",
    description:
      "We create the full visuals, applying your brand, and show you the work with clear reasoning behind each decision.",
    icon: Paintbrush,
  },
  {
    number: "05",
    title: "Feedback and Refinement",
    description:
      "You review, we listen, and we adjust. We build in revision rounds so the final result feels right to you.",
    icon: RefreshCw,
  },
  {
    number: "06",
    title: "Development and Delivery",
    description:
      "For websites and apps, we build and test on real devices. For brand and graphic projects, we deliver organized files and guidelines.",
    icon: FileCheck,
  },
  {
    number: "07",
    title: "Launch and Improvement",
    description:
      "After launch, we check performance, gather data, and suggest improvements. Good design keeps evolving.",
    icon: TrendingUp,
  },
];

// Service Selection Matrix
const serviceMatrix = [
  {
    situation: "New business with no identity",
    service: "Logo and brand identity",
    gain: "A consistent, recognizable brand",
  },
  {
    situation: "Website looks outdated or converts poorly",
    service: "Web design and UX review",
    gain: "Better trust, usability, and leads",
  },
  {
    situation: "Running paid ads with weak results",
    service: "Landing page design",
    gain: "Higher conversion and lower cost per lead",
  },
  {
    situation: "Online store with abandoned carts",
    service: "E-commerce design",
    gain: "Smoother buying experience",
  },
  {
    situation: "Inconsistent marketing materials",
    service: "Graphic design and brand guidelines",
    gain: "A unified look across channels",
  },
  {
    situation: "Active on social media, low engagement",
    service: "Social media and ad creative",
    gain: "More attention and interaction",
  },
  {
    situation: "Building an app or tool",
    service: "UI and UX design",
    gain: "Interfaces people find easy to use",
  },
];

// Why Businesses Choose DigLip7 for Design
const whyChooseUs = [
  {
    title: "Design connected to results",
    description:
      "We do not design in isolation. Our team understands SEO, advertising, and analytics, so what we create is built to perform.",
    icon: Award,
  },
  {
    title: "Clear communication",
    description:
      "You always know where your project stands, what we need from you, and what happens next. We explain decisions in plain language.",
    icon: Users,
  },
  {
    title: "Flexible engagement",
    description:
      "You can hire us for a single project or an ongoing partnership. We earn continued work through results, not long lock-in contracts.",
    icon: Handshake,
  },
  {
    title: "Original work",
    description:
      "We create custom designs for your business. We do not resell templates or recycle the same layout across clients.",
    icon: Sparkles,
  },
  {
    title: "Support after launch",
    description:
      "We remain available for updates, fixes, and improvements, so your design does not fall behind.",
    icon: CheckCircle,
  },
];

// Agency Checklist
const agencyChecks = [
  {
    title: "Review their portfolio closely",
    description: "Look for variety, quality, and work in industries similar to yours.",
  },
  {
    title: "Ask about process",
    description: "A good agency can explain how it moves from idea to final design.",
  },
  {
    title: "Ask how success is measured",
    description: "Beyond looks, ask about usability, speed, and conversion.",
  },
  {
    title: "Check who owns the work",
    description: "You should receive full rights and editable source files.",
  },
  {
    title: "Confirm revision terms",
    description: "Know how many rounds are included and how extra changes are handled.",
  },
  {
    title: "Look at communication",
    description: "Fast, clear, respectful replies before you sign are a good sign of what follows.",
  },
  {
    title: "Read real reviews and ask for references",
    description: "Talk to past clients when possible.",
  },
];

// FAQs
const faqs = [
  {
    question: "What is a design service?",
    answer:
      "A design service is a professional service that creates visual and user-experience elements for a business, including websites, logos, brand identities, graphics, and app interfaces. The goal is to help a brand look credible and make it easy for customers to understand and engage with it.",
  },
  {
    question: "How much does a design service cost?",
    answer:
      "Price depends on the type of project, the number of pages or deliverables, the level of customization, and the time involved. A logo costs less than a full website or a complete brand identity. We provide a clear written proposal after a short discussion so you know exactly what you are paying for.",
  },
  {
    question: "How long does a design project take?",
    answer:
      "Simple projects like a logo or a set of social templates can take one to two weeks. Brand identities often take several weeks, and websites can take from a few weeks to a few months. Timelines depend on scope and how quickly feedback is shared.",
  },
  {
    question: "What is the difference between UI and UX design?",
    answer:
      "UI design is about the visual look of an interface, including colors, typography, buttons, and layout. UX design is about the overall experience, including how easy it is to find things, complete tasks, and feel satisfied. Great products need both.",
  },
  {
    question: "Will my website design help me rank on Google?",
    answer:
      "Design supports SEO but does not replace it. A fast, mobile-friendly, well-structured, accessible design helps search engines and visitors, while quality content and authority signals drive rankings. We combine both for stronger results.",
  },
  {
    question: "Do I own the design files and rights?",
    answer:
      "Yes. Once the project is complete and paid for, you receive the final files and usage rights as agreed in your proposal. We can also provide editable source files.",
  },
  {
    question: "Can you redesign my existing website or brand?",
    answer:
      "Yes. Many of our projects are redesigns. We review what is working, keep what is valuable, and improve what is holding you back, while protecting your existing search visibility during the transition.",
  },
  {
    question: "Do you offer ongoing design support?",
    answer:
      "Yes. Many clients work with us monthly for social creatives, ad designs, landing pages, and updates. You can also hire us for one-time projects.",
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

function Design() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Structured Data Schema for Design Services
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Design Services | UI/UX, Web & Branding",
    provider: {
      "@type": "Organization",
      name: "DigLip7",
      url: "https://diglip7.com",
    },
    description:
      "Professional design service creating high-converting websites, UI/UX, logos, brand identities, graphics, and app interfaces that turn brands into trusted market leaders.",
    areaServed: "Global",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Design Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Design",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "UI/UX Design",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Branding & Logo Design",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "E-Commerce & Landing Page Design",
          },
        },
      ],
    },
  };

  return (
    <div className="overflow-x-hidden pt-18 sm:pt-18 bg-white text-gray-800">
      <SEO
        title="Design Service That Turns Your Brand Into Something People Remember and Trust"
        description="Professional design services by DigLip7: Web design, UI/UX, logos, branding, graphics, and landing pages that build trust, engage users, and drive high conversions."
        keywords="design services, UI UX design agency, web design service, brand identity design, logo design company, landing page design, ecommerce design, graphic design"
        canonical="https://diglip7.com/services/design"
        schema={schema}
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
            Design Service That Turns Your Brand Into{" "}
            <span className="text-transparent bg-clip-text bg-[#c89d5a] to-teal-300">
              Something People Remember and Trust
            </span>
          </motion.h1>

          <motion.div
            className="space-y-4 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            <p className="text-teal-800">
              People decide whether they trust a business in a few seconds. They notice the layout, the colors, the clarity of the message, and how easy the page is to use, long before they read a single paragraph. <span className="font-semibold text-teal-900">Good design does not just make a business look nice. It makes people feel confident enough to act.</span>
            </p>
            <p className="text-teal-700">
              That is the job of our design service at <span className="font-bold text-teal-900">DigLip7</span>. We create websites, brand identities, marketing visuals, and user experiences that look sharp, load fast, and guide visitors toward a clear next step. Every project is built around one question: what will help your customers understand you quickly and choose you with confidence?
            </p>
            <p className="text-teal-800">
              <span className="font-semibold text-teal-900">If you want the short version first, here it is:</span> A design service is a professional service that plans and creates visual and user-experience elements for a business, such as websites, logos, brand identities, graphics, and app interfaces, so the brand looks credible and customers can easily engage with it. The rest of this page explains what that includes, how the process works, and how to choose the right support for your goals.
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
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white text-lg font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get a Free Design Consultation
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </a>
            <a href="/portfolio">
              <motion.button
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-teal-800 border-2 border-teal-700 text-lg font-semibold rounded-full shadow-md hover:bg-teal-50 transition-all duration-300"
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
              alt="Design Services by DigLip7"
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

      {/* Section 2: What Is a Design Service? */}
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
                  src={seoImage}
                  alt="What Is a Design Service"
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
                What Is a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  Design Service?
                </span>
              </h2>
            </FloatingElement>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-teal-800 leading-relaxed text-sm sm:text-base lg:text-lg">
                A design service brings creative skill and practical thinking together. A designer does not only decide how something looks. They decide how it works, what it communicates, and how it supports your business goals.
              </p>
              <p className="text-teal-800 leading-relaxed text-sm sm:text-base lg:text-lg">
                <span className="font-semibold text-teal-900">Businesses often need several of these at once.</span> The strongest results come when they all follow the same visual language, so customers see one consistent brand no matter where they meet you.
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
                { icon: Award, text: "50+ Specialists" },
                { icon: Target, text: "Human-Centered Design" },
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

      {/* What a Design Service Includes Grid */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-teal-50 to-[#c89d5a]/10 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-10">
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-teal-900 mb-4">
                Depending on your needs, a design service can{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  Include:
                </span>
              </h2>
            </FloatingElement>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {designServiceIncludes.map((item, idx) => (
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

      {/* Section 3: Why a Professional Design Service Matters (with seo4) */}
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
                Why a Professional{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  Design Service Matters
                </span>
              </h2>
            </FloatingElement>

            <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-6">
              Many owners treat design as decoration, something to worry about after the &ldquo;real&rdquo; work is done. In practice, design shapes almost every result you care about.
            </p>

            <div className="space-y-4">
              {whyDesignMatters.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 text-teal-700">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base">
                      {point.title}
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
                The point is simple: Design is not a finishing touch. It is part of how your business communicates, sells, and grows.
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
                  src={seo4}
                  alt="Why Design Matters"
                  className="rounded-2xl shadow-2xl w-full h-64 sm:h-80 lg:h-96 object-cover transform transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-[#c89d5a]/20 rounded-2xl"></div>
              </div>
            </Card3D>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Our Design Services Cards */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-teal-700 leading-tight mb-4 sm:mb-6">
                Our Strategic{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  Design Services
                </span>
              </h2>
            </FloatingElement>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg">
              We build each project around your audience and goals rather than fitting you into a template. Here is what we offer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ourDesignServices.map((service, idx) => (
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
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {service.bullets.map((bullet, bIdx) => (
                          <li
                            key={bIdx}
                            className="flex items-start gap-2 text-xs sm:text-sm text-gray-700"
                          >
                            <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
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

      {/* Section 5 & 6: SEO Connection & AI Synergy with aboutImg */}
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
                  src={aboutImg}
                  alt="How Design and SEO Work Together"
                  className="rounded-2xl shadow-xl w-full h-80 lg:h-[480px] object-cover"
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
                  How Design and SEO{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-teal-600 to-[#c89d5a]">
                    Work Together
                  </span>
                </h2>
              </FloatingElement>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                Many businesses treat design and SEO as separate projects, then wonder why a beautiful website does not rank. The two are closely connected.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 mt-1 flex-shrink-0" />
                  <span><strong>Clear hierarchy:</strong> Readers and search engines understand what matters most.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 mt-1 flex-shrink-0" />
                  <span><strong>Mobile speed & stability:</strong> Google measures loading, interactivity, and visual stability.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 mt-1 flex-shrink-0" />
                  <span><strong>Helpful content room:</strong> Text is readable instead of hidden inside images or heavy scripts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 mt-1 flex-shrink-0" />
                  <span><strong>Smart navigation:</strong> Internal links show how pages relate to each other.</span>
                </li>
              </ul>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed bg-teal-50/70 p-3 rounded-lg border border-teal-100">
                Google&apos;s recent core and spam updates have kept the same message: pages built for people, with genuine usefulness and a good experience, are more likely to earn lasting visibility. Design is one of the strongest ways to deliver that experience.
              </p>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-teal-900 mb-3">
                How We Use AI and{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  Where People Lead
                </span>
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                We use AI tools to speed up the parts of design that benefit from it, such as research, moodboards, layout exploration, image preparation, and testing variations. That means faster turnaround and more options for you to consider.
              </p>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Strategy, creative direction, brand judgment, and final quality checks stay with experienced designers. AI can suggest, but it does not understand your customers, your market, or your goals the way a thoughtful person does. We also make sure that what we deliver is original, properly licensed, and consistent with your brand rather than a generic output that looks like everyone else&apos;s.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 7: Our Design Process (7 Steps) */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-teal-50 to-[#c89d5a]/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-teal-700 leading-tight mb-4 sm:mb-6">
                Our Strategic{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  Design Process
                </span>
              </h2>
            </FloatingElement>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg">
              A clear process keeps projects on time and on target. This is how we work.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {designProcessSteps.map((step, idx) => (
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

      {/* Section 8: Which Design Service Do You Need? Matrix Table */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-teal-700 leading-tight mb-4 sm:mb-6">
                Which Design Service{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  Do You Need?
                </span>
              </h2>
            </FloatingElement>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Use this table as a starting point.
            </p>
          </div>

          <div className="overflow-x-auto shadow-xl rounded-2xl border border-gray-100 bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-teal-700 to-teal-800 text-white text-sm sm:text-base">
                  <th className="p-4 sm:p-5 font-semibold">Your situation</th>
                  <th className="p-4 sm:p-5 font-semibold">Best starting design service</th>
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
            Not sure where you fit? Start with a free consultation and we will point you to the most useful first step rather than selling everything at once.
          </p>
        </div>
      </section>

      {/* Section 9: Timeline & Cost Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-teal-50/30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-teal-700 leading-tight mb-4 sm:mb-6">
                How Long Does It Take,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  and What Does It Cost?
                </span>
              </h2>
            </FloatingElement>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-100">
              <h3 className="text-lg font-bold text-teal-900 mb-3 flex items-center gap-2">
                <Compass className="w-5 h-5 text-teal-600" />
                Project Timelines
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Honest answers depend on scope. A simple logo project may take a couple of weeks. A brand identity often takes several weeks. A business website can take anywhere from a few weeks to a few months, depending on the number of pages, features, and how quickly feedback comes in. Complex stores and custom applications take longer.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-100">
              <h3 className="text-lg font-bold text-teal-900 mb-3 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-teal-600" />
                Pricing & Transparency
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Cost follows the same logic. It depends on the number of pages or deliverables, the level of custom work, integrations, content needs, and revision rounds. We provide a written proposal after we understand your project, so you know what is included and what is not before you commit. No hidden extras appear later.
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-5 bg-teal-50 rounded-xl border border-teal-200 text-center">
            <p className="text-xs sm:text-sm text-teal-900 font-medium">
              ⚠️ Be careful with quotes that seem too cheap or promise a full website in a day. Design done properly needs research, thought, and testing, and cutting those steps usually costs more in the end.
            </p>
          </div>
        </div>
      </section>

      {/* Section 10: Why Businesses Choose DigLip7 for Design */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-teal-700 leading-tight mb-4 sm:mb-6">
                Why Businesses Choose{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  DigLip7 for Design
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
                        {item.title}
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

      {/* Section 11: How to Choose the Right Design Agency */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-teal-50 to-[#c89d5a]/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <FloatingElement>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-teal-700 leading-tight mb-4 sm:mb-6">
                How to Choose the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  Right Design Agency
                </span>
              </h2>
            </FloatingElement>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Whether you work with us or someone else, these checks will help you make a confident decision.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {agencyChecks.map((chk, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 bg-white rounded-xl shadow-sm border border-gray-100 flex items-start gap-3"
              >
                <div className="mt-1 w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 flex-shrink-0">
                  <CheckCircle className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base">
                    {chk.title}
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
                Frequently Asked{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-[#c89d5a]">
                  Questions (FAQs)
                </span>
              </h2>
            </FloatingElement>
            <p className="text-gray-600 text-sm sm:text-base">
              Get clear answers to the most common questions about design services, pricing, and ownership.
            </p>
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

      {/* Section 13: Final CTA Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-teal-700 to-[#c89d5a] overflow-hidden text-white">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 border border-white/20 rounded-full"
              style={{
                left: `${(i * 7.3) % 100}%`,
                top: `${(i * 6.5) % 100}%`,
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
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
                Ready to Upgrade Your{" "}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white">
                  Design Service Experience?
                </span>
              </h2>
            </FloatingElement>
            <p className="text-base sm:text-lg text-white/95 mb-4 max-w-2xl mx-auto">
              Your customers are forming an impression of your business right now, and design is a big part of it. If that impression does not match the quality of what you offer, it is worth fixing.
            </p>
            <p className="text-sm sm:text-base text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Tell us about your business and goals. We will review your current website or brand, share honest recommendations, and suggest the most useful next step, whether or not we end up working together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/contact">
                <motion.button
                  className="px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-teal-700 font-semibold rounded-full shadow-xl hover:shadow-2xl hover:bg-gray-50 transition-all duration-300 text-sm sm:text-base cursor-pointer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Request Your Free Design Consultation
                  <Sparkles className="inline-block ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>
              </a>
              <a href="/contact">
                <motion.button
                  className="px-6 sm:px-8 py-3.5 sm:py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full shadow-md hover:bg-white/10 transition-all duration-300 text-sm sm:text-base cursor-pointer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule a Call
                </motion.button>
              </a>
            </div>

            <motion.div
              className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-6 sm:gap-8 text-white/90"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-300" />
                <span className="text-xs sm:text-sm">Free Design Audit</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-300" />
                <span className="text-xs sm:text-sm">No Long-term Contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-300" />
                <span className="text-xs sm:text-sm">Original Custom Work</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Design;