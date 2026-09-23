import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { ArrowRight, Mail, Phone, MapPin, Sparkles, Briefcase, RotateCcw, CheckCircle2 } from "lucide-react";

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
    <div className="w-full font-sans print:hidden">
      {/* SEO Stats Section (Matching Luminous Pastel Mint/Aqua Gradient) */}
      <section className="bg-gradient-to-r from-[#d6f7f2] via-[#b7f0e6] to-[#cbf5ee] text-slate-800 py-16 sm:py-20 px-6 sm:px-10 lg:px-20 border-t border-teal-200 shadow-inner">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-white/70 backdrop-blur-md border border-teal-300/80 rounded-full text-teal-950 font-bold text-xs uppercase tracking-wider mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-teal-700" />
            <span>SEO &amp; Growth Acceleration</span>
          </span>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 tracking-tight text-teal-950 leading-tight">
            Ready to Boost Your SEO Performance?
          </h3>
          <p className="text-teal-900/80 max-w-2xl mx-auto mb-10 text-sm sm:text-base leading-relaxed font-medium">
            Let DigLip7 help you achieve your SEO goals and dominate search results in your industry with proven data-driven strategies.
          </p>

          {/* Animated Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-white/85 backdrop-blur-md p-6 rounded-2xl border border-white/90 shadow-md shadow-teal-950/5 transition-transform duration-300 hover:scale-105 hover:bg-white"
              >
                <h4 className="text-3xl sm:text-4xl font-extrabold text-teal-900 mb-1.5">
                  {s.value}{i === 2 ? "%" : "+"}
                </h4>
                <p className="text-teal-800 text-xs sm:text-sm font-semibold">{s.label}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link to="/contact">
              <button className="px-8 py-3.5 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white text-sm sm:text-base font-bold rounded-full shadow-lg shadow-orange-500/25 hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 cursor-pointer">
                <span>Request a Free SEO Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link to="/contact">
              <button className="px-8 py-3.5 bg-teal-900 hover:bg-teal-950 text-white text-sm sm:text-base font-bold rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer">
                Schedule a Call
              </button>
            </Link>
          </div>

          {/* Extra Info Badges */}
          <div className="mt-10 text-sm space-y-3">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-teal-300/70 text-teal-950 text-xs sm:text-sm font-semibold px-5 py-2 rounded-full shadow-xs">
              <Sparkles className="w-4 h-4 text-orange-500 shrink-0" />
              <span>Limited Time: Free SEO audit worth $500</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-teal-950 text-xs sm:text-sm pt-2 font-semibold">
              <span className="flex items-center gap-1.5">
                <Briefcase className="w-4 h-4 text-teal-800" />
                <span>No Long-term Contracts</span>
              </span>
              <span className="text-teal-400 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <RotateCcw className="w-4 h-4 text-teal-800" />
                <span>30-Day Money Back</span>
              </span>
              <span className="text-teal-400 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-800" />
                <span>Proven Results</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-teal-900 text-white px-6 py-12 lg:py-16 font-sans border-t border-teal-800">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {/* Company & Contact Column */}
          <div className="flex flex-col space-y-4">
            <div>
              <h2 className="text-2xl font-extrabold text-white tracking-tight">
                DigLip<span className="text-teal-300">7</span>
              </h2>
              <p className="text-teal-100 text-xs sm:text-sm mt-2 leading-relaxed">
                Empowering businesses worldwide with data-driven SEO, PPC, and custom full-stack digital solutions.
              </p>
            </div>

            {/* Quick Links under Company */}
            <div className="pt-2">
              <h3 className="text-sm font-bold text-teal-200 uppercase tracking-wider mb-3">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/about"
                    className="text-white hover:text-teal-300 transition-all duration-200 flex items-center gap-1.5 hover:translate-x-1"
                  >
                    <span>About Us</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-white hover:text-teal-300 transition-all duration-200 flex items-center gap-1.5 hover:translate-x-1"
                  >
                    <span>Contact Us</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy-policy"
                    className="text-white hover:text-teal-300 transition-all duration-200 flex items-center gap-1.5 hover:translate-x-1"
                  >
                    <span>Privacy Policy</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms-and-conditions"
                    className="text-white hover:text-teal-300 transition-all duration-200 flex items-center gap-1.5 hover:translate-x-1"
                  >
                    <span>Terms &amp; Conditions</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Icons */}
            <div className="pt-2">
              <h3 className="text-xs font-bold text-teal-200 uppercase tracking-wider mb-2.5">Follow Us</h3>
              <div className="flex gap-3 text-base">
                <a
                  href="https://www.facebook.com/DigLip7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-teal-800/80 hover:bg-white hover:text-teal-900 text-white flex items-center justify-center transition-all duration-200 shadow-sm"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-teal-800/80 hover:bg-white hover:text-teal-900 text-white flex items-center justify-center transition-all duration-200 shadow-sm"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.instagram.com/diglip7?stkn=a2RyNmU2ZDMzMHVt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-teal-800/80 hover:bg-white hover:text-teal-900 text-white flex items-center justify-center transition-all duration-200 shadow-sm"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/company/diglip7?originalSubdomain=in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-teal-800/80 hover:bg-white hover:text-teal-900 text-white flex items-center justify-center transition-all duration-200 shadow-sm"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>

            {/* Contact Details */}
            <div className="pt-2 text-xs sm:text-sm space-y-2 text-teal-100 border-t border-teal-800 pt-3">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-300 shrink-0" />
                <a href="mailto:Admin@diglip7.com" className="text-white hover:text-teal-300 transition-colors">
                  Admin@diglip7.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-300 shrink-0" />
                <a href="tel:+919650608788" className="text-white hover:text-teal-300 transition-colors">
                  +91 9650608788
                </a>
              </p>
              <p className="flex items-start gap-2 text-teal-200 text-xs">
                <MapPin className="w-4 h-4 text-teal-300 shrink-0 mt-0.5" />
                <span>A-55, A Block, Sector-2 Noida, Uttar Pradesh</span>
              </p>
            </div>

            {/* Map Embed */}
            <div className="relative w-full h-28 rounded-xl overflow-hidden border border-teal-700 shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30773064.05684503!2d61.04182762828652!3d19.69228278198373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3033cc37dae22c7%3A0xcbe7567481fa90ad!2sDiglip7!5e0!3m2!1sen!2sin!4v1789622130963!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="DigLip7 Location"
              >
              </iframe>
            </div>
          </div>

          {/* Digital Marketing Column */}
          <div className="flex flex-col">
            <h3 className="text-sm font-bold text-teal-200 uppercase tracking-wider mb-4 pb-2 border-b border-teal-800">
              Digital Marketing
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/digital-market/seoservices" className="text-white hover:text-teal-300 transition-all duration-200 flex items-center gap-1.5 hover:translate-x-1">
                  <span>SEO Services</span>
                </Link>
              </li>
              <li>
                <Link to="/digital-market/PPC-Advertising" className="text-white hover:text-teal-300 transition-all duration-200 flex items-center gap-1.5 hover:translate-x-1">
                  <span>PPC Advertising</span>
                </Link>
              </li>
              <li>
                <Link to="/digital-market/social-media-marketing" className="text-white hover:text-teal-300 transition-all duration-200 flex items-center gap-1.5 hover:translate-x-1">
                  <span>Social Media Marketing (SMM)</span>
                </Link>
              </li>
              <li>
                <Link to="/digital-market/content-marketing" className="text-white hover:text-teal-300 transition-all duration-200 flex items-center gap-1.5 hover:translate-x-1">
                  <span>Content Marketing</span>
                </Link>
              </li>
              <li>
                <Link to="/digital-market/email-marketing" className="text-white hover:text-teal-300 transition-all duration-200 flex items-center gap-1.5 hover:translate-x-1">
                  <span>Email Marketing</span>
                </Link>
              </li>
              <li>
                <Link to="/digital-market/online-repulation-management(ORM)" className="text-white hover:text-teal-300 transition-all duration-200 flex items-center gap-1.5 hover:translate-x-1">
                  <span>ORM Services</span>
                </Link>
              </li>
              <li>
                <Link to="/digital-market/local-SEO-services" className="text-white hover:text-teal-300 transition-all duration-200 flex items-center gap-1.5 hover:translate-x-1">
                  <span>Local SEO Services</span>
                </Link>
              </li>
              <li>
                <Link to="/digital-market/e-commerce-marketing" className="text-white hover:text-teal-300 transition-all duration-200 flex items-center gap-1.5 hover:translate-x-1">
                  <span>E-Commerce Marketing</span>
                </Link>
              </li>
              <li>
                <Link to="/digital-market/video-marketing" className="text-white hover:text-teal-300 transition-all duration-200 flex items-center gap-1.5 hover:translate-x-1">
                  <span>Video Marketing</span>
                </Link>
              </li>
              <li>
                <Link to="/digital-market/influencer-marketing" className="text-white hover:text-teal-300 transition-all duration-200 flex items-center gap-1.5 hover:translate-x-1">
                  <span>Influencer Marketing</span>
                </Link>
              </li>
              <li>
                <Link to="/digital-market/Ai-powered-Digital-Marketing" className="text-white hover:text-teal-300 transition-all duration-200 flex items-center gap-1.5 hover:translate-x-1">
                  <span>AI-Powered Digital Marketing</span>
                </Link>
              </li>
              <li>
                <Link to="/digital-market/voice-search-optimization" className="text-white hover:text-teal-300 transition-all duration-200 flex items-center gap-1.5 hover:translate-x-1">
                  <span>Voice Search Optimization</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Development Column */}
          <div className="flex flex-col">
            <h3 className="text-sm font-bold text-teal-200 uppercase tracking-wider mb-4 pb-2 border-b border-teal-800">
              Development
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/development/web-development" className="text-white hover:text-teal-300 transition-all duration-200 flex items-center gap-1.5 hover:translate-x-1">
                  <span>Web Development</span>
                </Link>
              </li>
              <li>
                <Link to="/development/mobile-app-development" className="text-white hover:text-teal-300 transition-all duration-200 flex items-center gap-1.5 hover:translate-x-1">
                  <span>Mobile App Development</span>
                </Link>
              </li>
              <li>
                <Link to="/development/e-commerce-development" className="text-white hover:text-teal-300 transition-all duration-200 flex items-center gap-1.5 hover:translate-x-1">
                  <span>E-Commerce Development</span>
                </Link>
              </li>
              <li>
                <Link to="/development/custom-software_development" className="text-white hover:text-teal-300 transition-all duration-200 flex items-center gap-1.5 hover:translate-x-1">
                  <span>Custom Software Development</span>
                </Link>
              </li>
              <li>
                <Link to="/development/cms-development" className="text-white hover:text-teal-300 transition-all duration-200 flex items-center gap-1.5 hover:translate-x-1">
                  <span>CMS Development</span>
                </Link>
              </li>
              <li>
                <Link to="/development/api-development&Integration" className="text-white hover:text-teal-300 transition-all duration-200 flex items-center gap-1.5 hover:translate-x-1">
                  <span>API Development &amp; Integration</span>
                </Link>
              </li>
              <li>
                <Link to="/development/cloud-application-development" className="text-white hover:text-teal-300 transition-all duration-200 flex items-center gap-1.5 hover:translate-x-1">
                  <span>Cloud Application Development</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Design & Quick Links Column */}
          <div className="flex flex-col">
            <h3 className="text-sm font-bold text-teal-200 uppercase tracking-wider mb-4 pb-2 border-b border-teal-800">
              Design &amp; Resources
            </h3>
            <ul className="space-y-2.5 text-sm mb-6">
              <li>
                <Link to="/design/UI-UX" className="text-white hover:text-teal-300 transition-all duration-200 flex items-center gap-1.5 hover:translate-x-1">
                  <span>UI/UX Design</span>
                </Link>
              </li>
              <li>
                <Link to="/design/graphic-design" className="text-white hover:text-teal-300 transition-all duration-200 flex items-center gap-1.5 hover:translate-x-1">
                  <span>Graphic Design</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white hover:text-teal-300 transition-all duration-200 flex items-center gap-1.5 hover:translate-x-1">
                  <span>About Our Agency</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white hover:text-teal-300 transition-all duration-200 flex items-center gap-1.5 hover:translate-x-1">
                  <span>Contact Support</span>
                </Link>
              </li>
              <li>
                <Link to="/blogview" className="text-white hover:text-teal-300 transition-all duration-200 flex items-center gap-1.5 hover:translate-x-1">
                  <span>Latest Marketing Blog</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-teal-800/80 flex flex-col sm:flex-row justify-between items-center text-xs text-teal-200 gap-4">
          <p className="font-medium text-white">&copy; {new Date().getFullYear()} DigLip7 Tech. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-teal-200 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="text-teal-200 hover:text-white transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
