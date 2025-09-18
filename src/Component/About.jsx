import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Users, HeartPulse,  Menu, 
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
  MapPin } from "lucide-react"; // icons
  import bgImage from "../images/aboutp.png"
  import d7 from "../images/D7.jpeg";

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
function About() {

    const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
       <section
            className="w-full h-screen bg-no-repeat bg-cover bg-right flex items-center"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            <div className="container  px-6 md:px-6">
              {/* Left Content */}
              <motion.div
                className="max-w-xl  p-6 rounded-2xl text-center md:text-left"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-5xl font-bold text-teal-700 mb-4">
                  Drive Growth with Expert Web & Marketing Solutions
                </h2>
                <p className="text-gray-700 text-lg md:text-xl mb-6">
                  Diglip7 help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers growing.
                </p>
      
                {/* Google Rating */}
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <img
                    src={d7}
                    alt="Google Logo"
                    className="w-6 h-6"
                  />
                  <span className="text-yellow-500 text-xl">★★★★★</span>
                  <span className="text-gray-700 text-lg">4.5</span>
                </div>
              </motion.div>
            </div>
          </section>

        {/* Feature Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Digital Marketing", icon: "📈", color: "blue", href:"/digital-market/seoservices" },
                  { title: "Web Development", icon: "💻", color: "green",href:"/development/web-development" },
                  { title: "UI/UX Design", icon: "🎨", color: "purple" ,href:"/design/UI-UX" },
                  { title: "Mobile Apps", icon: "📱", color: "pink" ,href:"/development/mobile-app-development" },
                  { title: "SEO Services", icon: "🔍", color: "yellow" ,href:"/digital-market/seoservices" },
                  { title: "Cloud Solutions", icon: "☁️", color: "indigo" ,href:"/development/cloud-application-development" }
                ].map((service, index) => (
                  <div key={index} className="bg-teal-700 text-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                      {service.icon}
                    </div>
                    <h3 className="font-bold text-xl text-white dark:text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-white dark:text-gray-300 mb-4">
                      Professional {service.title.toLowerCase()} services tailored to your business needs.
                    </p>
                    <a 
                      href={service.href} 
                      className="inline-flex items-center gap-2 text-[#c89d5a] hover:text-[#276562] dark:text-[#c89d5a] dark:hover:text-white font-medium transition-colors duration-200"
                    ><button className="text-black">Learn More</button>
                     
                      <ChevronRight className="h-4 w-4" />
                    </a>
                  </div>
                ))}
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
                className="w-full flex justify-between items-center  text-left text-lg font-semibold text-gray-800  hover:text-teal-700 transition"
              >
                {faq.question}
                <span
                  className={`transform transition-transform duration-300  ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </span>
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