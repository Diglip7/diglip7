import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Lock, Users, Phone, Mail } from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {

  const [stats, setStats] = useState([
    { label: "Websites Optimized", value: 500 },
    { label: "Average Traffic Increase", value: 250 },
    { label: "Client Satisfaction Rate", value: 95 },
  ]);

  // Animate numbers (auto increase/decrease infinitely)
  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) =>
        prev.map((stat) => {
          const change = Math.random() > 0.5 ? 1 : -1;
          let newValue = stat.value + change;
          if (newValue > stat.value + 5) newValue = stat.value;
          if (newValue < stat.value - 5) newValue = stat.value;
          return { ...stat, value: newValue };
        })
      );
    }, 1500);
    return () => clearInterval(interval);
  }, []);


  return (
    <div>

    <section className="bg-gradient-to-r from-teal-700 via-teal-600 to-teal-700 text-white py-20 px-6 sm:px-10 lg:px-20">
      {/* 💬 Consultation Form Section */}
      {/* <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Text Section */}
        {/* <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Your Free Consultation
          </h2>
          <p className="text-white/90 mb-8 text-lg leading-relaxed">
            Ready to dominate search results? Let’s discuss how we can boost your online
            visibility and drive more qualified traffic to your website.
          </p>

          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-3">
              <Lock className="text-white w-5 h-5" /> Secure & Confidential
            </li>
            <li className="flex items-center gap-3">
              <Users className="text-white w-5 h-5" /> Trusted by 500+ Businesses
            </li>
          </ul> */}

          {/* <div className="space-y-2 text-white/90">
            <p className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-white" /> +1 (555) 123-4567
            </p>
            <p className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-white" /> hello@diglip7.com
            </p>
          </div>
        </motion.div> */}

        {/* Right Form Section */}
        {/* <motion.div
          className="bg-white text-gray-800 p-8 rounded-2xl shadow-2xl"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">
            Start Your Journey Today
          </h3>

          <form className="space-y-5">
            <div>
              <label className="text-sm font-semibold">Full Name *</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="text-sm font-semibold">Email Address *</label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold">Website URL</label>
                <input
                  type="url"
                  placeholder="www.yoursite.com"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-sm font-semibold">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+1 (555) 123 4567"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold">Interested Package</label>
              <select className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                <option>Select a package</option>
                <option>Basic SEO</option>
                <option>Advanced SEO</option>
                <option>Enterprise SEO</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-semibold">Tell us about your goals</label>
              <textarea
                placeholder="Describe your SEO goals and challenges..."
                rows={3}
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="w-full group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-700 to-teal-900 text-white text-lg font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Submit My Request
            </motion.button>
          </form>

          <p className="text-xs text-center text-gray-500 mt-4">
            By submitting this form, you agree to our privacy policy. We’ll never share your information.
          </p>
        </motion.div> */}
      {/* </div>  */}

      {/* 📈 SEO Stats Section */}
      <motion.div
        className="max-w-5xl mx-auto text-center mt-24"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Boost Your SEO Performance?
        </h3>
        <p className="text-white/90 mb-10 text-lg">
          Let DigiUp help you achieve your SEO goals and dominate search results in your industry.
        </p>

        {/* Animated Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-md"
            >
              <h4 className="text-4xl font-bold text-white mb-2">{s.value}+</h4>
              <p className="text-white/80">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/contact">
          <button className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-700 to-teal-900 text-white text-lg font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105">
            Request a Free SEO Audit
          </button></a>
          <a href="/contact">
          <button className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-700 to-teal-900 text-white text-lg font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105">
            Schedule a Call
          </button></a>
        </div>

        {/* Extra Info */}
        <div className="mt-10 text-sm text-white/90 space-y-2">
          <p className="bg-gradient-to-r from-teal-700 to-teal-900 text-white text-lg font-semibold rounded-full px-4 py-2 inline-block rounded-full text-white font-semibold shadow-md
          ">
            🎁 Limited Time: Free SEO audit worth $500
          </p>
          <p className="mt-4 text-white/80">
            💼 No Long-term Contracts &nbsp; | &nbsp; 🔄 30-Day Money Back &nbsp; | &nbsp; ✅ Proven Results
          </p>
        </div>
      </motion.div>
    </section>
    
    <footer className="bg-teal-700 text-white px-6 py-8 font-sans">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {/* About Section */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <a href="/about" className=" text-white hover:text-[#276562] transition-colors">
                <span className="text-black hover:text-white duration-200 flex items-center cursor-pointer text-sm lg:text-base xl:text-lg font-medium">About</span>
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#276562] transition-colors">

                <span className="text-black hover:text-white duration-200 flex items-center cursor-pointer text-sm lg:text-base xl:text-lg font-medium">Contact Us</span>
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="hover:text-[#276562] transition-colors">
                
                <span className="text-black hover:text-white duration-200 flex items-center cursor-pointer text-sm lg:text-base xl:text-lg font-medium">Privacy Policy</span>
              </a>
            </li>
            <li>
              <a href="/termsandconditions" className="hover:text-[#276562] transition-colors">
                
                <span className="text-black hover:text-white duration-200 flex items-center cursor-pointer text-sm lg:text-base xl:text-lg font-medium">Terms & Conditions</span>
              </a>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-xl">
            <a
              href="https://www.facebook.com/DigLip7"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#276562] transition-colors"
            >
              <FaFacebookF className=" text-white" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-white hover:text-[#276562] transition-colors"
            >
              <FaTwitter className=" text-white" />
            </a>
            <a
              href="https://www.instagram.com/diglip7/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#276562] transition-colors"
            >
              <FaInstagram className=" text-white" />
            </a>
            <a
              href="https://in.linkedin.com/company/diglip7"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#276562] transition-colors"
            >
              <FaLinkedinIn className=" text-white" />
            </a>
          </div>

          {/* Contact Info */}
          <p className="mt-4 text-sm">
            Email:{" "}
            <a
              href="mailto:Admin@diglip7.com"
              className="hover:text-[#276562] transition-colors"
            >
              <span className="text-black hover:text-white duration-200 flex items-center cursor-pointer text-sm lg:text-base xl:text-lg font-medium">Admin@diglip7.com</span>
              
            </a>
          </p>
          <p className="text-black  duration-200 flex items-center cursor-pointer text-sm lg:text-base xl:text-lg font-medium">
            Phone:{" "}
            <a
              href="tel:+919650608788"
              className="hover:text-[#276562] transition-colors"
            >
                              <span className="text-black hover:text-white duration-200 flex items-center cursor-pointer text-sm lg:text-base xl:text-lg font-medium">+91 9650608788</span>
              
            </a>
          </p>
          <p className=" text-whie text-sm">
            Address: C117, C Block, Sector 2 Noida, Uttar Pradesh
          </p>

          {/* Map */}
          <div className="relative w-full pt-[56.25%] mt-4 rounded-lg overflow-hidden">
            <iframe
              title="Diglip7 Google Map Location"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3503.521514259607!2d77.31254669084329!3d28.584127633377275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM1JzAyLjkiTiA3N8KwMTgnNTQuMyJF!5e0!3m2!1sen!2sin!4v1742367832751!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute top-0 left-0 w-full h-full border-0"
            ></iframe>
          </div>
        </div>

        {/* Digital Marketing */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-4">Digital Marketing</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/digital-market/seoservices" className="hover:text-[#276562]"><span className="text-black hover:text-white duration-200 flex items-center cursor-pointer text-sm lg:text-base xl:text-lg font-medium">SEO Services</span></a></li>
            <li><a href="/digital-market/PPC-Advertising" className="hover:text-[#276562]"><span className="text-black hover:text-white duration-200 flex items-center cursor-pointer text-sm lg:text-base xl:text-lg font-medium">PPC Advertising</span></a></li>
            <li><a href="/digital-market/social-media-marketing" className="hover:text-[#276562]"><span className="text-black hover:text-white duration-200 flex items-center cursor-pointer text-sm lg:text-base xl:text-lg font-medium">Social Media Marketing (SMM)</span></a></li>
            <li><a href="/digital-market/content-marketing" className="hover:text-[#276562]"><span className="text-black hover:text-white duration-200 flex items-center cursor-pointer text-sm lg:text-base xl:text-lg font-medium">Content Marketing</span></a></li>
            <li><a href="/digital-market/email-marketing" className="hover:text-[#276562]"><span className="text-black hover:text-white duration-200 flex items-center cursor-pointer text-sm lg:text-base xl:text-lg font-medium">Email Marketing</span></a></li>
            <li><a href="/digital-market/online-repulation-management(ORM)" className="hover:text-[#276562]"><span className="text-black hover:text-white duration-200 flex items-center cursor-pointer text-sm lg:text-base xl:text-lg font-medium">Online Reputation Management (ORM)</span></a></li>
            <li><a href="/digital-market/local-SEO-services" className="hover:text-[#276562]"><span className="text-black hover:text-white duration-200 flex items-center cursor-pointer text-sm lg:text-base xl:text-lg font-medium">Local SEO Services</span></a></li>
            <li><a href="/digital-market/e-commerce-marketing" className="hover:text-[#276562]"><span className="text-black hover:text-white duration-200 flex items-center cursor-pointer text-sm lg:text-base xl:text-lg font-medium">E-Commerce Marketing</span></a></li>
            
            <li><a href="/digital-market/video-marketing" className="hover:text-[#276562]"><span className="text-black hover:text-white duration-200 flex items-center cursor-pointer text-sm lg:text-base xl:text-lg font-medium">Video Marketing</span></a></li>
            <li><a href="/digital-market/influencer-marketing" className="hover:text-[#276562]"><span className="text-black hover:text-white duration-200 flex items-center cursor-pointer text-sm lg:text-base xl:text-lg font-medium">Influencer Marketing</span></a></li>
            <li><a href="/digital-market/Ai-powered-Digital-Marketing" className="hover:text-[#276562]"><span className="text-black hover:text-white duration-200 flex items-center cursor-pointer text-sm lg:text-base xl:text-lg font-medium">AI-Powered Digital Marketing</span></a></li>
            <li><a href="/digital-market/voice-search-optimization" className="hover:text-[#276562]"><span className="text-black hover:text-white duration-200 flex items-center cursor-pointer text-sm lg:text-base xl:text-lg font-medium">Voice Search Optimization</span></a></li>
          </ul>
        </div>

        {/* Development */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-4">Development</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/development/web-development" className="hover:text-[#276562]"><span className="text-black hover:text-white duration-200 flex items-center cursor-pointer text-sm lg:text-base xl:text-lg font-medium">Web Development</span></a></li>
            <li><a href="/development/mobile-app-development" className="hover:text-[#276562]"><span className="text-black hover:text-white duration-200 flex items-center cursor-pointer text-sm lg:text-base xl:text-lg font-medium">Mobile App Development</span></a></li>
            <li><a href="/development/e-commerce-development" className="hover:text-[#276562]"><span className="text-black hover:text-white duration-200 flex items-center cursor-pointer text-sm lg:text-base xl:text-lg font-medium">E-Commerce Development</span></a></li>
            <li><a href="/development/custom-software_development" className="hover:text-[#276562]"><span className="text-black hover:text-white duration-200 flex items-center cursor-pointer text-sm lg:text-base xl:text-lg font-medium">Custom Software Development</span></a></li>
            <li><a href="/development/cms-development" className="hover:text-[#276562]"><span className="text-black hover:text-white duration-200 flex items-center cursor-pointer text-sm lg:text-base xl:text-lg font-medium">CMS Development</span></a></li>
            <li><a href="/development/api-development&Integration" className="hover:text-[#276562]"><span className="text-black hover:text-white duration-200 flex items-center cursor-pointer text-sm lg:text-base xl:text-lg font-medium">API Development & Integration</span></a></li>
            <li><a href="/development/cloud-application-development" className="hover:text-[#276562]"><span className="text-black hover:text-white duration-200 flex items-center cursor-pointer text-sm lg:text-base xl:text-lg font-medium">Cloud Application Development</span></a></li>
            
          </ul>
        </div>

        {/* Design */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-4">Design</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/design/UI-UX" className="hover:text-[#276562]"><span className="text-black hover:text-white duration-200 flex items-center cursor-pointer text-sm lg:text-base xl:text-lg font-medium">UI/UX Design</span></a></li>
            <li><a href="/design/graphic-design" className="hover:text-[#276562]"><span className="text-black hover:text-white duration-200 flex items-center cursor-pointer text-sm lg:text-base xl:text-lg font-medium">Graphic Design</span></a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8 pt-4 border-t border-white/20 text-sm">
        <p className="xl:text-lg font-medium">&copy; {new Date().getFullYear()} DigLip7 Tech. All rights reserved.</p>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
