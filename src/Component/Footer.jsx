import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    
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
  );
};

export default Footer;
