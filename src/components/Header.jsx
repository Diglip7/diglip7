import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Zap,
  Share2,
  FileText,
  Mail,
  Shield,
  MapPin,
  ShoppingCart,
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
  Wrench,
  ChevronDown,
  Menu,
  X,
  Users,
  TrendingUp,
  BarChart3
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
    { name: "Influencer Marketing", href: "/digital-market/influencer-marketing", icon: Users },
    { name: "Programmatic Advertising", href: "/digital-market/programmatic-advertising", icon: TrendingUp },
    { name: "Mobile Marketing", href: "/digital-market/Mobile-marketing", icon: Smartphone },
    { name: "Performance Marketing", href: "/digital-market/performance-marketing", icon: BarChart3 },
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
    { name: "Cloud Application Development", href: "/development/cloud-application-development", icon: Globe },
  ];

  const ServiceDropdown = ({
    services,
    isVisible,
    onMouseEnter,
    onMouseLeave,
    widthClass = "w-72"
  }) => (
    <div
      className={`absolute left-0 mt-2 ${widthClass} bg-teal-900/95 backdrop-blur-xl shadow-xl rounded-xl p-2 border border-teal-700/60 transition-all duration-200 ease-out z-50 ${isVisible
          ? "opacity-100 visible translate-y-0 scale-100 pointer-events-auto"
          : "opacity-0 invisible -translate-y-2 scale-95 pointer-events-none"
        }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="no-scrollbar max-h-72 overflow-y-auto flex flex-col space-y-0.5">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <Link
              key={index}
              to={service.href}
              onClick={() => setActiveDropdown(null)}
              className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-white/90 hover:text-white hover:bg-white/15 transition-all duration-150 group"
            >
              <div className="w-7 h-7 rounded-md bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-teal-400 group-hover:text-teal-950 transition-colors duration-150">
                <IconComponent className="w-3.5 h-3.5 text-teal-300 group-hover:text-teal-950 transition-colors" />
              </div>
              <span className="text-xs sm:text-sm font-medium leading-tight group-hover:translate-x-0.5 transition-transform duration-150 truncate">
                {service.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );

  const MobileServiceDropdown = ({ services, isVisible, onItemClick }) => (
    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out ${isVisible ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
    >
      <div className="ml-3 pl-3 border-l-2 border-teal-200 space-y-1 py-1 max-h-[360px] overflow-y-auto no-scrollbar">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <Link
              key={index}
              to={service.href}
              className="flex items-center gap-2.5 py-2 px-2 text-sm text-gray-700 hover:text-teal-700 hover:bg-teal-50/80 rounded-lg transition-colors duration-150 group"
              onClick={onItemClick}
            >
              <IconComponent className="w-4 h-4 text-teal-600 group-hover:scale-110 transition-transform" />
              <span className="font-medium text-xs sm:text-sm">{service.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );

  return (
    <nav className="fixed w-full top-0 z-50 bg-gradient-to-r from-purple-100 via-pink-100 to-white shadow-sm print:hidden">
      <div className="w-full mx-auto flex items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="flex items-center space-x-2 cursor-pointer"
        >
          <img
            src={logo}
            alt="DigLip7 Logo"
            className="w-12 h-12"
          />
          <div>
            <h1 className="text-xl font-bold text-teal-900">DigLip7</h1>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4 lg:space-x-10 xl:space-x-10 font-medium">
          <li>
            <Link to="/">
              <span className="text-teal-800 hover:text-black duration-200 flex items-center cursor-pointer text-sm lg:text-base xl:text-lg font-medium">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <span className="text-teal-800 hover:text-black duration-200 flex items-center cursor-pointer text-sm lg:text-base xl:text-lg font-medium">About</span>
            </Link>
          </li>

          {/* Digital Marketing Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => handleDropdownEnter("digital")}
            onMouseLeave={handleDropdownLeave}
          >
            <span
              className="text-teal-800 hover:text-black duration-200 flex items-center cursor-pointer text-sm lg:text-base xl:text-lg font-medium"
            >
              Digital Marketing
              <ChevronDown
                className={`w-4 h-4 ml-1 transition-transform duration-200 ${activeDropdown === "digital" ? "rotate-180 text-teal-600" : ""
                  }`}
              />
            </span>

            <ServiceDropdown
              services={digitalMarketingServices}
              isVisible={activeDropdown === "digital"}
              onMouseEnter={() => handleDropdownEnter("digital")}
              onMouseLeave={handleDropdownLeave}
              widthClass="w-80"
            />
          </li>

          {/* Design Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => handleDropdownEnter("design")}
            onMouseLeave={handleDropdownLeave}
          >
            <span
              className="text-teal-800 hover:text-black transition-colors duration-200 flex items-center cursor-pointer text-sm lg:text-base xl:text-lg font-medium"
            >
              Design
              <ChevronDown
                className={`w-4 h-4 ml-1 transition-transform duration-200 ${activeDropdown === "design" ? "rotate-180 text-teal-600" : ""
                  }`}
              />
            </span>

            <ServiceDropdown
              services={designServices}
              isVisible={activeDropdown === "design"}
              onMouseEnter={() => handleDropdownEnter("design")}
              onMouseLeave={handleDropdownLeave}
              widthClass="w-60"
            />
          </li>

          {/* Development Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => handleDropdownEnter("development")}
            onMouseLeave={handleDropdownLeave}
          >
            <span
              className="text-teal-800 hover:text-black transition-colors duration-200 flex items-center cursor-pointer text-sm lg:text-base xl:text-lg font-medium"
            >
              Development
              <ChevronDown
                className={`w-4 h-4 ml-1 transition-transform duration-200 ${activeDropdown === "development" ? "rotate-180 text-teal-600" : ""
                  }`}
              />
            </span>

            <ServiceDropdown
              services={developmentServices}
              isVisible={activeDropdown === "development"}
              onMouseEnter={() => handleDropdownEnter("development")}
              onMouseLeave={handleDropdownLeave}
              widthClass="w-72"
            />
          </li>

          <li>
            <Link to="/contact">
              <span className="text-teal-800 hover:text-black duration-200 flex items-center cursor-pointer text-sm lg:text-base xl:text-lg font-medium">Contact</span>
            </Link>
          </li>
          <li>
            <Link to="/blogview">
              <span className="pr-6 text-teal-800 hover:text-black duration-200 flex items-center cursor-pointer text-sm lg:text-base xl:text-lg font-medium">Blog</span>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-teal-900 p-2 rounded-lg hover:bg-black/5 transition-colors duration-200"
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-lg transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
      >
        <ul className="flex flex-col space-y-1 p-4 font-medium">
          <li>
            <Link
              to="/"
              className="block py-3 px-2 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors duration-200 text-base"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-black hover:text-teal-600">Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block py-3 px-2 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors duration-200 text-base"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-black hover:text-teal-600">About</span>
            </Link>
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
            <Link
              to="/contact"
              className="block py-3 px-2 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors duration-200 text-base"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-black hover:text-teal-600">Contact</span>
            </Link>
          </li>
          <li>
            <Link
              to="/blogview"
              className="block py-3 px-2 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors duration-200 text-base"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-black hover:text-teal-600">Blog</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
