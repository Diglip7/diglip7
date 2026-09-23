import React, { useState, } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "../components/SEO";
import {
  FileText, Users, HeartPulse, Menu,
  X,
  Search,
  ChevronDown,
  ChevronRight,
  Bell,
  User,
  ShoppingCart,
  Sun,
  Moon,
  Phone,
  Mail,
  MapPin, Award, Globe, Target, Eye, Heart, Star, TrendingUp,
  Code, Palette, Smartphone, Cloud, CheckCircle2, Sparkles, ArrowRight
} from "lucide-react"; // icons
// import bgImage from "../images/aboutp.png"
import d7 from "../images/about001.jpeg";
import d from "../images/1.png";
import f1 from "../images/formal1.jpg";
import f2 from "../images/formal2.jpg";
import f3 from "../images/formal3.jpg";

import t1 from "../images/rahulsir.jpeg";
import t2 from "../images/muskanmam.jpeg";
import t3 from "../images/atul.jpeg";
import t4 from "../images/satyam.jpeg";
import t5 from "../images/gulshan.jpeg";
import t6 from "../images/sarthak.jpeg";
import t7 from "../images/ankit.jpeg";
import t8 from "../images/arun.jpeg";

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
      "SEO improves your website’s visibility on search engines, driving organic traffic and increasing your chances of reaching customers."
  }
];

const aboutSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DigLip7",
    "url": "https://diglip7.com",
    "logo": "https://diglip7.com/favicon-32x32.png",
    "foundingDate": "2018",
    "founder": {
      "@type": "Person",
      "name": "Sarah Chen"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "A-55, A Block, Sector-2",
      "addressLocality": "Noida",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9650608788",
      "email": "hello@diglip7.com",
      "contactType": "customer service"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
];

function About() {

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // next{2}
  const timeline = [
    {
      year: "2016",
      title: "Founded Diglip7",
      desc: "Sarah Chen started Diglip7 with a vision to help small businesses compete in the digital space. It first office in downtown tech district.",
    },
    {
      year: "2018",
      title: "First Major Client Win",
      desc: "Landed our first enterprise client and achieved 300% ROI in 90 days. This success became our proof of concept.",
    },
    {
      year: "2020",
      title: "Team Expansion",
      desc: "Grew from 5 to 15 team members during the pandemic, helping businesses pivot to digital-first strategies.",
    },
    {
      year: "2021",
      title: "Industry Recognition",
      desc: "Won Digital Marketing Agency of the Year and reached 100+ active clients milestone.",
    },
    {
      year: "2022",
      title: "International Expansion",
      desc: "Expanded services globally and established partnerships in Europe and Asia-Pacific markets.",
    },
    {
      year: "2024",
      title: "Innovation Leadership",
      desc: "Launched AI-powered marketing solutions and celebrated serving 250+ clients with industry-leading retention rates.",
    },
  ];

  // next3
  const team = [
    {
      name: "Rahul Kumar",
      role: "Digital Marketing Manager | 3.8 Years Experience",
      img: t1,
      desc: "Rahul Kumar is a skilled Digital Marketing Manager at DigLip 7 with 3.5 years of experience. He specializes in SEO, social media marketing, content strategy, and paid advertising, driving data-driven campaigns that boost brand visibility and engagement.",
      tags: ["Growth Strategy", "Leadership", "Business Scaling"],
    },
    {
      name: "Muskan Gupta",
      role: "Senior Software Developer | 2.2 Years Experience",
      img: t2,
      desc: "Muskan is a talented Full Stack Developer at DigLip7 with 2.2 years of experience. She specializes in building dynamic web applications using modern technologies across both front-end and back-end. With expertise in React, Node.js, Express, and MongoDB, Muskan develops scalable solutions that enhance user experience and performance.",
      tags: ["Growth Strategy", "Leadership", "Business Scaling"],
    },
    {
      name: "Atul Kumar",
      role: "Software developer | 1.8 Years Experience",
      img: t3,
      desc: "Atul is a skilled Full Stack Developer at DigLip7 with 2 years of experience. He specializes in building responsive and scalable web applications using React, Node.js, and MongoDB. Atul focuses on clean code, performance, and delivering seamless digital experiences that drive user satisfaction.",
      tags: ["Data Optimization", "Client Success", "ROI Focused"],
    },
     {
      name: "Sarthak Dwivedi",
      role: "Fullstack Developer | 1 Years Experiencer",
      img: t6,
      desc: "Sarthak is a Fullstack Developer with 1 year of experience. He specializes in building web applications, handling both frontend and backend development, and creating efficient, scalable solutions. He is passionate about clean code, problem-solving, and delivering high-quality software that meets client and user needs.",
      tags: ["Paid Media", "Analytics", "Automation"],
    },
    {
      name: "Satyam Gupta",
      role: "Fullstack Developer | 2.5 Years Experience",
      img: t4,
      desc: "Satyam is a proficient Full Stack Developer at DigLip7 with 2.5 years of experience. He excels in developing high-performance web applications using React, Node.js, and MongoDB. With strong technical expertise and problem-solving skills, Sytam builds scalable digital solutions that enhance user experience and business efficiency.",
      tags: ["Brand Design", "Digital Campaigns", "Creative Innovation"],
    },
    {
      name: "Gulshan Kumar",
      role: "Fullstack Developer | 1 Years Experience",
      img: t5,
      desc: "Gulshan Kumar is a Python Fullstack Developer with 1 year of experience. He specializes in developing web applications, working with both frontend and backend technologies, and building efficient, scalable solutions. He is passionate about clean code, problem-solving, and contributing to impactful software projects.",
      tags: ["Paid Media", "Analytics", "Automation"],
    },
    {
      name: "Ankit Tyagi",
      role: "Fullstack Developer | 1 Years Experience",
      img: t7,
      desc: "Ankit is a Fullstack Developer with 1 year of experience. He specializes in building web applications, handling both frontend and backend development, and delivering efficient, scalable solutions. He is passionate about clean code, problem-solving, and creating software that offers seamless user experiences and meets client requirements.",
      tags: ["Paid Media", "Analytics", "Automation"],
    },
    {
      name: "Arun Singh",
      role: "Fullstack Developer | 1 Years Experience",
      img: t8,
      desc: "Arun is a Fullstack Developer with 1 year of experience. He specializes in developing web applications, managing both frontend and backend tasks, and delivering efficient, scalable solutions. He is passionate about clean code, problem-solving, and creating software that provides value and seamless user experiences.",
      tags: ["Paid Media", "Analytics", "Automation"],
    },
  ];

  const testimonials = [
    {
      name: "Jessica Walsh",
      review:
        "Diglip7 didn’t just revamp our marketing — they transformed our entire business approach. The results were beyond expectations!",
      result: "350% increase in qualified leads, $200k additional revenue in 6 months.",
      rating: 5,
      img: f1,
    },
    {
      name: "Michael Tan",
      review:
        "Working with Diglip7 has been transformative. Their strategies gave us a competitive edge in a crowded market.",
      result: "300% increase in customer retention, $500k additional revenue stream.",
      rating: 5,
      img: f2,
    },
    {
      name: "Lisa Brown",
      review:
        "The level of expertise and strategic thinking Diglip7 provides is unmatched. They truly care about client success.",
      result: "500% increase in online conversions, record-breaking ROI in multiple markets.",
      rating: 5,
      img: f3,
    },
  ];
  //  {next4}
  const contacts = [
    {
      icon: <MapPin className="w-10 h-10 text-blue-600" />,
      title: "Headquarters",
      desc: "Address: A-55, A Block, Sector-2 Noida, Uttar Pradesh",
    },
    {
      icon: <Phone className="w-10 h-10 text-green-600" />,
      title: "Phone",
      desc: "+91 9650608788 Mon-Fri 10AM-6PM PST 24/7 Emergency Support",
    },
    {
      icon: <Mail className="w-10 h-10 text-yellow-600" />,
      title: "Email",
      desc: "hello@diglip7.com Response within 24 hours partnerships@diglip7.com",
    },
  ];


  return (
    <div className=" bg-white lg:pt-20">
      <SEO
        title="About DigLip7 | Digital Marketing Agency"
        description="Founded in 2016, DigLip7 has grown into a full-service digital marketing agency serving 250+ businesses worldwide. Meet our team and our story."
        canonical="https://diglip7.com/about"
        ogImage="https://diglip7.com/assets/about001-B_716R_d.jpeg"
        ogType="website"
        keywords="about DigLip7, digital marketing agency, digital marketing team, SEO agency story, Noida digital agency, Sarah Chen DigLip7"
        schema={aboutSchemas}
      />
      <section className="relative bg-gradient-to-r from-purple-100 via-pink-100 to-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between overflow-hidden">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 space-y-6"
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
            <Award size={16} className="text-yellow-600" /> Award-Winning Digital Marketing Agency
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            About DigLip7 —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Where Strategy Meets Creativity
            </span>
          </h1>

          {/* Paragraph */}
          <p className="text-lg text-gray-900">
            Founded in 2018, we've transformed from a passionate startup to the trusted growth partner for
            <span className="font-semibold text-teal-900"> 250+ businesses worldwide</span>.
            Our story is one of innovation, results, and relentless pursuit of client success.
          </p>

          {/* CTA Button */}<a href="/contact">
            <button className="gap-2 flex items-center px-4 py-6 group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-700 to-teal-900 text-white text-lg font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105">
              Start Your Growth Journey →
            </button></a>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mt-10 md:mt-0 md:w-1/2 flex justify-center"
        >
          {/* Image */}
          <img
            src={d7}
            alt="Team meeting"
            className="rounded-2xl shadow-2xl w-full max-w-lg object-cover"
          />

          {/* Floating Badge - Top */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute top-4 left-4 bg-white text-gray-800 px-4 py-2 rounded-xl shadow-lg font-medium flex items-center gap-2"
          >
            <Award size={18} className="text-yellow-500" /> Industry Leader
          </motion.div>

          {/* Floating Badge - Bottom */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute bottom-4 right-4 bg-white text-gray-800 px-4 py-2 rounded-xl shadow-lg font-semibold flex items-center gap-2"
          >
            <Users size={18} className="text-green-500" />
            <span className="text-green-600">250+</span> Happy Clients
          </motion.div>
        </motion.div>
      </section>


      {/* next */}
      <div className="min-h-screen bg-white text-gray-800 px-6 sm:px-12 lg:px-20 py-10">
        {/* Stats Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center mb-12">
          {[
            { value: "250+", label: "Global Clients" },
            { value: "340%", label: "Average ROI" },
            { value: "6", label: "Years of Excellence" },
            { value: "98%", label: "Client Retention" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-4 rounded-2xl shadow-md bg-gray-50"
            >
              <h2 className="text-3xl font-bold text-teal-900">{stat.value}</h2>
              <p className="text-gray-600 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Content Section */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Our Story: From Vision to Reality
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Diglip7 was born from a simple observation: most businesses were struggling to navigate the complex digital marketing landscape. Founded by Sarah Chen in 2016, our journey began in a small shared office space with a big dream—to democratize high-quality digital marketing for businesses of all sizes.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              What started as a one-person consultancy has evolved into a full-service digital marketing powerhouse. We’ve witnessed market changes, adapted to new technologies, and consistently delivered results that matter. Our nameDiglip7 is a testament to our commitment to digital excellence, helping our clients “level up” in the digital world. Today, Diglip7 symbolizes the perfect balance of strategy, creativity, and execution.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Today, we’re proud to be recognized as industry leaders, but we never forget our roots. Every client, big or small, receives the same level of attention and expertise that built our reputation.
            </p>

            {/* Highlights */}
            <div className="flex flex-col sm:flex-row gap-6 mb-6">
              <div className="flex items-center gap-3">
                <Award className="text-teal-900 w-8 h-8" />
                <span className="text-gray-700 font-medium">Award-Winning Industry recognition for excellence</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="text-teal-900 w-8 h-8" />
                <span className="text-gray-700 font-medium">Global Reach: Clients across 16+ countries</span>
              </div>
            </div>

            {/* Button */}
            <a href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="gap-2 flex items-center px-4 py-6 group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-600 to-teal-900 text-white text-lg font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Join Our Success Story
              </motion.button></a>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img
              src={d}
              alt="Team member working"
              className="rounded-2xl shadow-lg max-w-full h-auto"
            />
          </motion.div>
        </div>
      </div>

      {/* next2 */}

      <div className="min-h-screen bg-gray-50 text-gray-800 px-6 sm:px-12 lg:px-20 py-10">
        {/* Our Journey */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-teal-900">Our Journey</h2>
          <p className="text-gray-600 mt-2">
            Key milestones that shaped who we are today
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-4 border-teal-800 ml-4 sm:ml-10 mb-16">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="mb-10 ml-6"
            >
              <span className="absolute -left-4 sm:-left-6 flex items-center justify-center w-10 h-10 bg-teal-900 text-white rounded-full font-bold">
                {item.year}
              </span>
              <div className="p-4 bg-white shadow-md rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 mt-2 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* What Drives Us */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">What Drives Us</h2>
          <p className="text-gray-600 mt-2">
            Our core beliefs and principles that guide every decision we make
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[{
            icon: <Target className="w-10 h-10 text-teal-900" />, title: "Mission", desc: "To empower businesses with data-driven marketing solutions that enable measurable growth and sustainable competitiveness across an ever-evolving digital landscape."
          }, {
            icon: <Eye className="w-10 h-10 text-teal-900" />, title: "Vision", desc: "To be the world’s most trusted partner for business growth, recognized for our innovation, integrity, and ability to transform marketing investments into predictable revenue streams."
          }, {
            icon: <Heart className="w-10 h-10 text-teal-900" />, title: "Values", desc: "Transparency • Client-centricity • Innovation • Sustainable success • Continuous learning"
          }].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md text-center"
            >
              <div className="flex justify-center mb-4">{card.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">{card.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* next3 */}

      <div className="min-h-screen bg-gray-50 text-gray-800 px-6 sm:px-12 lg:px-20 py-10">
        {/* What Drives Us */}

        {/* Meet Our Expert Team */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Meet Our Expert Team</h2>
          <p className="text-gray-600 mt-2">
            The passionate professionals behind every successful campaign and growth story
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-6 text-center"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
              <p className="text-teal-900 text-sm font-medium mb-2">{member.role}</p>
              {/* <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.desc}</p> */}
              {/* <div className="flex flex-wrap justify-center gap-2">
                {member.tags.map((tag, t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div> */}
            </motion.div>
          ))}
        </div>

        <div className="text-center mb-16">
          <button className=" px-4 py-6 group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-700 to-teal-900 text-white text-lg font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105
        ">
            Meet the Full Team
          </button>
        </div>

        {/* Client Success Stories */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Client Success Stories</h2>
          <p className="text-gray-600 mt-2">Real results from real partnerships</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((test, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={test.img}
                  alt={test.name}
                  className="w-12 h-12 rounded-full object-cover shadow"
                />
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">{test.name}</h3>
                  <div className="flex">
                    {Array.from({ length: test.rating }).map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-sm mb-3 leading-relaxed">“{test.review}”</p>
              <p className="text-gray-600 text-xs">Result: {test.result}</p>
            </motion.div>
          ))}
        </div>
      </div>
      {/* next5 */}




      {/* Feature Cards */}
      <div className="bg-white text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Our Services</h2>
        <p className="text-gray-600 mt-2">
          Our core beliefs and principles that guide every decision we make
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: "Digital Marketing", icon: TrendingUp, href: "/digital-market/seoservices" },
          { title: "Web Development", icon: Code, href: "/development/web-development" },
          { title: "UI/UX Design", icon: Palette, href: "/design/UI-UX" },
          { title: "Mobile Apps", icon: Smartphone, href: "/development/mobile-app-development" },
          { title: "SEO Services", icon: Search, href: "/digital-market/seoservices" },
          { title: "Cloud Solutions", icon: Cloud, href: "/development/cloud-application-development" }
        ].map((service, index) => {
          const IconComponent = service.icon;
          return (
            <div key={index} className="bg-teal-700 text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                <IconComponent className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-xl text-white mb-2">
                {service.title}
              </h3>
              <p className="text-white mb-4">
                Professional {service.title.toLowerCase()} services tailored to your business needs.
              </p>
              <a
                href={service.href}
                className="inline-flex items-center gap-1.5 text-teal-200 hover:text-white font-medium transition-colors"
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          );
        })}
      </div>

      <section className="py-20 px-6 md:px-12 lg:px-20 text-center max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-3"
        >
          Industry Recognition
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 max-w-2xl mx-auto mb-12"
        >
          Awards and certifications that validate our expertise
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: Award, title: "Agency of the Year", desc: "Digital Marketing Awards 2021" },
            { icon: Globe, title: "Google Partner", desc: "Premier Certified Agency" },
            { icon: TrendingUp, title: "Top 1% ROI", desc: "Industry Performance Rankings" },
            { icon: Users, title: "Best Workplace", desc: "Tech Company Culture 2024" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white rounded-xl shadow p-6 flex flex-col items-center"
            >
              <item.icon className="w-10 h-10 text-blue-600 mb-4" />
              <h4 className="font-semibold text-lg text-gray-800 mb-1">{item.title}</h4>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* {next4} */}
      <div className="bg-gray-50 text-gray-800">
        {/* Contact Section */}
        <div className="px-6 sm:px-12 lg:px-20 py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Get in Touch</h2>
          <p className="text-gray-600 mb-12">
            Ready to start your growth journey? We’d love to hear from you.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {contacts.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md p-6 text-center"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative bg-gradient-to-r from-teal-700 via-teal-600 to-teal-500 text-white py-16 px-6 sm:px-12 lg:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs bg-white/20 rounded-full mb-4 font-medium backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-teal-200" />
              <span>Join 250+ Growing Businesses</span>
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-white/90 mb-8 text-sm sm:text-base leading-relaxed">
              Let’s discuss how Diglip7 can help you achieve the growth you’ve been looking for. Your success story starts with a simple conversation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3.5 bg-white text-teal-900 hover:bg-teal-50 text-base font-bold rounded-full shadow-xl transition-all duration-300"
                >
                  Start Your Growth Journey
                </motion.button>
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-white/90">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-200" />
                <span>Free consultation</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-200" />
                <span>Custom strategy</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-200" />
                <span>No commitment required</span>
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <section className="w-full bg-gray-50 py-16 px-6 md:px-6">
        <div className="w-full mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 py-6">
            Frequently Asked Questions (FAQs)
          </h2>
          <div className="space-y-4 ">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b  border-gray-300 pb-4"
              >
                {/* Question */}
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

                {/* Answer with animation */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="mt-3 text-gray-600 leading-relaxed  text-base"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About