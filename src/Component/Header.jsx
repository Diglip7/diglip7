import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Zap,
  Share2,
  FileText,
  Mail,
  Shield,
  MapPin,
  ShoppingCart,
  TrendingUp,
  Video,
  Brain,
  Mic,
  Palette,
  Layers,
  Code,
  Smartphone,
  Globe,
  Cpu,
  Settings,
  Wrench
} from "lucide-react";
import logo from "../images/logo1.jpeg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const timeoutRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Handle dropdown hover with delay to prevent flickering
  const handleDropdownEnter = (dropdownName) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(dropdownName);
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const toggleMobileDropdown = (dropdownName) => {
    setMobileDropdown(mobileDropdown === dropdownName ? null : dropdownName);
  };

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
        setMobileDropdown(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const digitalMarketingServices = [
    { name: "SEO Services", href: "/digital-market/seoservices", icon: Search },
    { name: "PPC Services", href: "/digital-market/PPC-Advertising", icon: Zap },
    { name: "Social Media Marketing (SMM)", href: "/digital-market/social-media-marketing", icon: Share2 },
    { name: "Content Marketing", href: "/digital-market/content-marketing", icon: FileText },
    { name: "Email Marketing", href: "/digital-market/email-marketing", icon: Mail },
    { name: "Online Reputation Management (ORM)", href: "/digital-market/online-repulation-management(ORM)", icon: Shield },
    { name: "Local SEO", href: "/digital-market/local-SEO-services", icon: MapPin },
    { name: "E-Commerce Marketing", href: "/digital-market/e-commerce-marketing", icon: ShoppingCart },
    { name: "Video Marketing", href: "/digital-market/video-marketing", icon: Video },
    { name: "AI-powered Digital Marketing", href: "/digital-market/Ai-powered-Digital-Marketing", icon: Brain },
    { name: "Voice Search Optimization", href: "/digital-market/voice-search-optimization", icon: Mic },
    { name: "Influencer Marketing", href: "/digital-market/influencer-marketing", icon: Mic },
    { name: "Programmatic Advertising", href: "/digital-market/programmatic-advertising", icon: Mic },
    { name: "Mobile Marketing", href: "/digital-market/Mobile-marketing", icon: Mic },
    { name: "Performance Marketing", href: "/digital-market/performance-marketing", icon: Mic },
  ];

  const designServices = [
    { name: "UI/UX Design", href: "/design/UI-UX", icon: Palette },
    { name: "Graphic Design", href: "/design/graphic-design", icon: Layers },
  ];

  const developmentServices = [
    { name: "Web Development", href: "/development/web-development", icon: Code },
    { name: "Mobile App Development", href: "/development/mobile-app-development", icon: Smartphone },
    { name: "E-commerce Development", href: "/development/e-commerce-development", icon: Globe },
    { name: "Custom Software", href: "/development/custom-software_development", icon: Cpu },
    { name: "API Development", href: "/development/api-development&Integration", icon: Settings },
    { name: "CMS Development", href: "/development/cms-development", icon: Wrench },
    { name: "Cloud Application Development", href: "/development/cloud-application-development", icon: Wrench },
  ];

  const ServiceDropdown = ({ services, isVisible, onMouseEnter, onMouseLeave, maxWidth = "w-72" }) => (
    <div
      className={`absolute left-0 mt-2 ${maxWidth} bg-teal-800 shadow-xl rounded-lg py-2 border border-gray-100 transition-all duration-200 z-50 ${isVisible
        ? "opacity-100 visible transform translate-y-0"
        : "opacity-0 invisible transform -translate-y-2"
        }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={services.length > 5 ? "max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-teal-800 scrollbar-track-teal-800" : ""}>
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <Link
              key={index}
              to={service.href}
              className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-900 transition-colors duration-200 group"
            >
              <IconComponent className="w-4 h-4 mr-3 text-white group-hover:text-teal-800 transition-colors duration-200" />
              <span className="flex-1 text-white group-hover:text-teal-900">{service.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );

  const MobileServiceDropdown = ({ services, isVisible, onItemClick }) => (
    <div
      className={`overflow-hidden transition-all duration-300 ${isVisible ? (services.length > 5 ? "max-h-80" : "max-h-96") : "max-h-0"
        }`}
    >
      <div className={`ml-4 mt-2 space-y-1 ${services.length > 5 ? "max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100" : ""}`}>
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <a
              key={index}
              href={service.href}
              className="flex items-center py-2 text-sm text-gray-600 hover:text-teal-900 transition-colors duration-200 group"
              onClick={onItemClick}
            >

              <IconComponent className="w-4 h-4 mr-3 text-gray-500 group-hover:text-teal-900 transition-colors duration-200" />
              <span>{service.name}</span>
            </a>
          );
        })}
      </div>
    </div>
  );

  return (
    <>
      <nav className="fixed w-full top-0 z-50 bg-gradient-to-r from-purple-100 via-pink-100 to-white ">
        <div className="w-full  mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          {/* <Link href="/">
            <div className="flex items-center pt-0 pb-0">
              <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
            </div>
          </Link> */}
          <Link
            to="/"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <img
              src={logo}
              alt="Logo"
              className="w-12 h-12 "
            />
            <div>
              <h1 className="text-xl font-bold text-teal-900">DigLip7</h1>

            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-4 lg:space-x-10 xl:space-x-10 font-medium">
            <li>
              <Link
                to="/"

              >
                <span className="text-teal-800 hover:text-black lg:text-bold duration-200 flex items-center cursor-pointer text-sm lg:text-base xl:text-lg font-medium">Home</span>

              </Link>
            </li>
            <li>
              <Link
                to="/about"

              >
                <span className="text-teal-800 hover:text-black lg:text-bold duration-200 flex items-center cursor-pointer text-sm lg:text-base xl:text-lg font-medium">About</span>

              </Link>
            </li>

            {/* Digital Marketing Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => handleDropdownEnter("digital")}
              onMouseLeave={handleDropdownLeave}
            >
              <span
                className="text-teal-800 hover:text-black lg:text-bold duration-200 flex items-center cursor-pointer text-sm lg:text-base xl:text-lg font-medium"
              >
                Digital Marketing
                <svg
                  className={`w-6 h-4 ml-1 transition-transform duration-200 ${activeDropdown === "digital" ? "rotate-180" : ""
                    }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 40"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>

              <ServiceDropdown
                services={digitalMarketingServices}
                isVisible={activeDropdown === "digital"}
                onMouseEnter={() => handleDropdownEnter("digital")}
                onMouseLeave={handleDropdownLeave}
                maxWidth="w-80"
              />
            </li>

            {/* Design Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => handleDropdownEnter("design")}
              onMouseLeave={handleDropdownLeave}
            >
              <span
                className="text-teal-800 hover:text-black lg:text-bold transition-colors duration-200 flex items-center cursor-pointer text-sm lg:text-base xl:text-lg font-medium"
              >
                Design
                <svg
                  className={`w-4 h-4 ml-1 transition-transform duration-200 ${activeDropdown === "design" ? "rotate-180" : ""
                    }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>

              <ServiceDropdown
                services={designServices}
                isVisible={activeDropdown === "design"}
                onMouseEnter={() => handleDropdownEnter("design")}
                onMouseLeave={handleDropdownLeave}
                maxWidth="w-56"
              />
            </li>

            {/* Development Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => handleDropdownEnter("development")}
              onMouseLeave={handleDropdownLeave}
            >
              <span
                className="text-teal-800 hover:text-black lg:text-bold transition-colors duration-200 flex items-center cursor-pointer text-sm lg:text-base xl:text-lg font-medium"
              >
                Development
                <svg
                  className={`w-4 h-4 ml-1 transition-transform duration-200 ${activeDropdown === "development" ? "rotate-180" : ""
                    }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>

              <ServiceDropdown
                services={developmentServices}
                isVisible={activeDropdown === "development"}
                onMouseEnter={() => handleDropdownEnter("development")}
                onMouseLeave={handleDropdownLeave}
                maxWidth="w-64"
              />
            </li>

            <li>
              <Link
                to="/contact"

              >
                <span className="text-teal-800 hover:text-black lg:text-bold duration-200 flex items-center cursor-pointer text-sm lg:text-base xl:text-lg font-medium">Contact</span>

              </Link>
            </li>
            <li>
              <Link
                to="/blogview"

              >
                <span className="pr-10 text-teal-800 hover:text-black lg:text-bold duration-200 flex items-center cursor-pointer text-sm lg:text-base xl:text-lg font-medium">Blog</span>

              </Link>
            </li>

          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-white shadow-lg transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
            }`}
        >
          <ul className="flex flex-col space-y-1 p-4 font-medium">
            <li>
              <a
                href="/"
                className="block py-3 px-2 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors duration-200 text-base"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-black hover:text-teal-600">Home</span>
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="block py-3 px-2 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors duration-200 text-base"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-black hover:text-teal-600">About</span>
              </a>
            </li>

            {/* Mobile Digital Marketing Dropdown */}
            <li className="border-b border-gray-100 pb-2">
              <button
                onClick={() => toggleMobileDropdown("digital")}
                className="w-full text-left py-3 px-2 text-black hover:text-teal-600 hover:bg-teal-50 rounded-lg flex justify-between items-center transition-colors duration-200 text-base"
              >
                Digital Marketing
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${mobileDropdown === "digital" ? "rotate-180" : ""
                    }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <MobileServiceDropdown
                services={digitalMarketingServices}
                isVisible={mobileDropdown === "digital"}
                onItemClick={() => setIsOpen(false)}
              />
            </li>

            {/* Mobile Design Dropdown */}
            <li className="border-b border-gray-100 pb-2">
              <button
                onClick={() => toggleMobileDropdown("design")}
                className="w-full text-left py-3 px-2 text-black hover:text-teal-600 hover:bg-teal-50 rounded-lg flex justify-between items-center transition-colors duration-200 text-base"
              >
                Design
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${mobileDropdown === "design" ? "rotate-180" : ""
                    }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <MobileServiceDropdown
                services={designServices}
                isVisible={mobileDropdown === "design"}
                onItemClick={() => setIsOpen(false)}
              />
            </li>

            {/* Mobile Development Dropdown */}
            <li className="border-b border-gray-100 pb-2">
              <button
                onClick={() => toggleMobileDropdown("development")}
                className="w-full text-left py-3 px-2 text-black hover:text-teal-600 hover:bg-teal-50 rounded-lg flex justify-between items-center transition-colors duration-200 text-base"
              >
                Development
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${mobileDropdown === "development" ? "rotate-180" : ""
                    }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <MobileServiceDropdown
                services={developmentServices}
                isVisible={mobileDropdown === "development"}
                onItemClick={() => setIsOpen(false)}
              />
            </li>

            <li>
              <a
                href="/contact"
                className="block py-3 px-2 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors duration-200 text-base"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-black hover:text-teal-600">Contact</span>
              </a>
            </li>
            <li>
              <a
                href="/blogview"
                className="block py-3 px-2 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors duration-200 text-base"
              >
                <span className="text-black hover:text-teal-600 ">Blog</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;


// import img1 from "../images/6.jpeg"
// import aboutImage from "../images/2.png"
// import reachImg from "../images/3.png"
// import brandImg from "../images/4.png"
// import trustImg from "../images/5.png"
// import uiuxImage from "../images/29973.jpg"
// import d7 from "../images/D7.jpeg"