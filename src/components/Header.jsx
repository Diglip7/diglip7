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
  ChevronRight,
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
  const [selectedLocation, setSelectedLocation] = useState("UAE");
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

  const locationData = [
    {
      name: "UAE",
      mainPage: {
        name: "SEO Services UAE",
        href: "/uae/seo-services",
        badge: "Country Main Page",
      },
      cities: [
        {
          name: "Dubai",
          mainPage: {
            name: "Dubai SEO Services",
            href: "/uae/dubai/seo-services",
            badge: "City Main Page",
          },
          subServices: [
            {
              name: "Local SEO Dubai",
              href: "/uae/dubai/local-seo",
            },
            {
              name: "E-commerce SEO Dubai",
              href: "/uae/dubai/ecommerce-seo",
            },
            {
              name: "Healthcare SEO Dubai",
              href: "/uae/dubai/healthcare-seo",
            },
            {
              name: "Real Estate SEO Dubai",
              href: "/uae/dubai/real-estate-seo",
            },
            {
              name: "Restaurant SEO Dubai",
              href: "/uae/dubai/restaurant-seo",
            },
          ],
        },
      ],
    },
    {
      name: "India",
      mainPage: {
        name: "SEO Services India",
        href: "/india/seo-services",
        badge: "Country Main Page",
      },
      cities: [],
    },
    {
      name: "Saudi Arabia",
      mainPage: {
        name: "SEO Services Saudi Arabia",
        href: "/saudi-arabia/seo-services",
        badge: "Country Main Page",
      },
      cities: [],
    },
    {
      name: "Qatar",
      mainPage: {
        name: "SEO Services Qatar",
        href: "/qatar/seo-services",
        badge: "Country Main Page",
      },
      cities: [],
    },
  ];

  const ServiceDropdown = ({
    services,
    isVisible,
    onMouseEnter,
    onMouseLeave,
    widthClass = "w-72"
  }) => (
    <div
      className={`absolute left-0 mt-2 ${widthClass} max-w-[calc(100vw-2rem)] bg-teal-900/95 backdrop-blur-xl shadow-xl rounded-xl p-2 border border-teal-700/60 transition-all duration-200 ease-out z-50 ${isVisible
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
            <Link
              to="/digital-market"
              className="text-teal-800 hover:text-black duration-200 flex items-center cursor-pointer text-sm lg:text-base xl:text-lg font-medium"
            >
              Digital Marketing
              <ChevronDown
                className={`w-4 h-4 ml-1 transition-transform duration-200 ${activeDropdown === "digital" ? "rotate-180 text-teal-600" : ""
                  }`}
              />
            </Link>

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
            <Link
              to="/design"
              className="text-teal-800 hover:text-black transition-colors duration-200 flex items-center cursor-pointer text-sm lg:text-base xl:text-lg font-medium"
            >
              Design
              <ChevronDown
                className={`w-4 h-4 ml-1 transition-transform duration-200 ${activeDropdown === "design" ? "rotate-180 text-teal-600" : ""
                  }`}
              />
            </Link>

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
            <Link
              to="/development"
              className="text-teal-800 hover:text-black transition-colors duration-200 flex items-center cursor-pointer text-sm lg:text-base xl:text-lg font-medium"
            >
              Development
              <ChevronDown
                className={`w-4 h-4 ml-1 transition-transform duration-200 ${activeDropdown === "development" ? "rotate-180 text-teal-600" : ""
                  }`}
              />
            </Link>

            <ServiceDropdown
              services={developmentServices}
              isVisible={activeDropdown === "development"}
              onMouseEnter={() => handleDropdownEnter("development")}
              onMouseLeave={handleDropdownLeave}
              widthClass="w-72"
            />
          </li>

          {/* Locations Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => handleDropdownEnter("locations")}
            onMouseLeave={handleDropdownLeave}
          >
            <div className="flex items-center text-teal-800 hover:text-black transition-colors duration-200 cursor-pointer text-sm lg:text-base xl:text-lg font-medium">
              <span>Locations</span>
              <ChevronDown
                className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                  activeDropdown === "locations" ? "rotate-180 text-teal-600" : ""
                }`}
              />
            </div>

            <div
              className={`absolute right-0 mt-2 w-[420px] max-w-[calc(100vw-2rem)] bg-teal-900/95 backdrop-blur-xl shadow-xl rounded-xl p-3 border border-teal-700/60 transition-all duration-200 ease-out z-50 origin-top-right ${
                activeDropdown === "locations"
                  ? "opacity-100 visible translate-y-0 scale-100 pointer-events-auto"
                  : "opacity-0 invisible -translate-y-2 scale-95 pointer-events-none"
              }`}
              onMouseEnter={() => handleDropdownEnter("locations")}
              onMouseLeave={handleDropdownLeave}
            >
              <div className="grid grid-cols-5 gap-2">
                {/* Left column: Countries */}
                <div className="col-span-2 border-r border-teal-800/80 pr-2 space-y-1">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-teal-300 px-2 py-1">
                    Countries
                  </div>
                  {locationData.map((loc) => (
                    <div
                      key={loc.name}
                      onMouseEnter={() => setSelectedLocation(loc.name)}
                      className={`flex items-center justify-between px-2.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition cursor-pointer ${
                        selectedLocation === loc.name
                          ? "bg-white/20 text-white font-semibold"
                          : "text-white/80 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      <Link
                        to={loc.mainPage.href}
                        onClick={() => setActiveDropdown(null)}
                        className="hover:underline flex-1"
                      >
                        {loc.name}
                      </Link>
                      <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                    </div>
                  ))}
                </div>

                {/* Right column: Country Main Page + Cities & Sub-services */}
                <div className="col-span-3 pl-1 space-y-2.5">
                  {(() => {
                    const currentLoc =
                      locationData.find((l) => l.name === selectedLocation) || locationData[0];
                    return (
                      <div>
                        {/* Country Main Page Banner */}
                        <div className="mb-2.5">
                          <div className="text-[10px] uppercase font-bold tracking-wider text-teal-300 px-1 mb-1">
                            {currentLoc.name} Main Page
                          </div>
                          <Link
                            to={currentLoc.mainPage.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-center justify-between p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition group border border-teal-700/50"
                          >
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-teal-400 group-hover:scale-125 transition-transform shrink-0" />
                              <span className="text-xs sm:text-sm font-semibold">{currentLoc.mainPage.name}</span>
                            </div>
                            <span className="text-[10px] text-teal-200 group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5 shrink-0">
                              Country Hub <ChevronRight className="w-3 h-3" />
                            </span>
                          </Link>
                        </div>

                        {/* Cities & Sub-services (e.g. Dubai) */}
                        {currentLoc.cities && currentLoc.cities.length > 0 && (
                          <div className="space-y-1.5">
                            <div className="text-[10px] uppercase font-bold tracking-wider text-teal-300 px-1">
                              Cities / Emirates
                            </div>
                            {currentLoc.cities.map((city) => (
                              <div key={city.name} className="space-y-1">
                                {/* City Main Page */}
                                <Link
                                  to={city.mainPage.href}
                                  onClick={() => setActiveDropdown(null)}
                                  className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-semibold text-white/95 hover:text-white hover:bg-white/15 transition group bg-white/5"
                                >
                                  <div className="flex items-center gap-1.5">
                                    <MapPin className="w-3.5 h-3.5 text-teal-300 shrink-0" />
                                    <span>{city.mainPage.name}</span>
                                  </div>
                                  <span className="text-[10px] text-teal-300 font-normal group-hover:translate-x-0.5 transition-transform shrink-0">
                                    Main Page →
                                  </span>
                                </Link>

                                {/* Sub-services under this city (e.g. Local SEO Dubai) */}
                                {city.subServices && city.subServices.length > 0 && (
                                  <div className="ml-3 pl-2.5 border-l-2 border-teal-700/60 space-y-1 py-0.5">
                                    <div className="text-[10px] text-teal-200/70 px-1 font-medium">
                                      {city.name} Services
                                    </div>
                                    {city.subServices.map((sub) => (
                                      <Link
                                        key={sub.name}
                                        to={sub.href}
                                        onClick={() => setActiveDropdown(null)}
                                        className="flex items-center gap-2 px-2 py-1 rounded-md text-xs text-white/85 hover:text-white hover:bg-white/15 transition group"
                                      >
                                        <Search className="w-3 h-3 text-teal-300 shrink-0 group-hover:scale-110 transition-transform" />
                                        <span className="truncate">{sub.name}</span>
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })()}
                </div>
              </div>
            </div>
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
            <div className="flex items-center justify-between">
              <Link
                to="/digital-market"
                onClick={() => setIsOpen(false)}
                className="flex-1 py-3 px-2 text-black hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors duration-200 text-base"
              >
                Digital Marketing
              </Link>
              <button
                type="button"
                onClick={() => toggleMobileDropdown("digital")}
                aria-label="Toggle Digital Marketing sub-menu"
                className="p-3 text-gray-500 hover:text-teal-600 focus:outline-none"
              >
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${mobileDropdown === "digital" ? "rotate-180 text-teal-600" : ""
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
            </div>
            <MobileServiceDropdown
              services={digitalMarketingServices}
              isVisible={mobileDropdown === "digital"}
              onItemClick={() => setIsOpen(false)}
            />
          </li>

          {/* Mobile Design Dropdown */}
          <li className="border-b border-gray-100 pb-2">
            <div className="flex items-center justify-between">
              <Link
                to="/design"
                onClick={() => setIsOpen(false)}
                className="flex-1 py-3 px-2 text-black hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors duration-200 text-base"
              >
                Design
              </Link>
              <button
                type="button"
                onClick={() => toggleMobileDropdown("design")}
                aria-label="Toggle Design sub-menu"
                className="p-3 text-gray-500 hover:text-teal-600 focus:outline-none"
              >
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${mobileDropdown === "design" ? "rotate-180 text-teal-600" : ""
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
            </div>
            <MobileServiceDropdown
              services={designServices}
              isVisible={mobileDropdown === "design"}
              onItemClick={() => setIsOpen(false)}
            />
          </li>

          {/* Mobile Development Dropdown */}
          <li className="border-b border-gray-100 pb-2">
            <div className="flex items-center justify-between">
              <Link
                to="/development"
                onClick={() => setIsOpen(false)}
                className="flex-1 py-3 px-2 text-black hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors duration-200 text-base"
              >
                Development
              </Link>
              <button
                type="button"
                onClick={() => toggleMobileDropdown("development")}
                aria-label="Toggle Development sub-menu"
                className="p-3 text-gray-500 hover:text-teal-600 focus:outline-none"
              >
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${mobileDropdown === "development" ? "rotate-180 text-teal-600" : ""
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
            </div>
            <MobileServiceDropdown
              services={developmentServices}
              isVisible={mobileDropdown === "development"}
              onItemClick={() => setIsOpen(false)}
            />
          </li>

          {/* Mobile Locations Dropdown */}
          <li className="border-b border-gray-100 pb-2">
            <div className="flex items-center justify-between">
              <span className="flex-1 py-3 px-2 text-black font-medium text-base">
                Locations
              </span>
              <button
                type="button"
                onClick={() => toggleMobileDropdown("locations")}
                aria-label="Toggle Locations sub-menu"
                className="p-3 text-gray-500 hover:text-teal-600 focus:outline-none"
              >
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileDropdown === "locations" ? "rotate-180 text-teal-600" : ""
                  }`}
                />
              </button>
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                mobileDropdown === "locations" ? "max-h-[600px] opacity-100 mt-1" : "max-h-0 opacity-0"
              }`}
            >
              <div className="ml-3 pl-3 border-l-2 border-teal-200 space-y-2 py-1 text-sm">
                {/* UAE */}
                <div className="space-y-1">
                  <div className="font-semibold text-teal-900 flex items-center justify-between pr-2">
                    <Link to="/uae/seo-services" onClick={() => setIsOpen(false)} className="hover:text-teal-700">
                      SEO Services UAE
                    </Link>
                    <span className="text-[10px] bg-teal-100 text-teal-800 px-1.5 py-0.5 rounded font-medium">UAE Main</span>
                  </div>
                  <div className="pl-3 border-l border-teal-100 space-y-1 text-xs">
                    <Link to="/uae/dubai/seo-services" onClick={() => setIsOpen(false)} className="block py-1 text-teal-800 hover:text-teal-900 font-semibold">
                      ↳ Dubai SEO Services (Main)
                    </Link>
                    <div className="pl-3 border-l border-teal-200/60 space-y-1">
                      <Link to="/uae/dubai/local-seo" onClick={() => setIsOpen(false)} className="block py-0.5 text-gray-600 hover:text-teal-700">
                        • Local SEO Dubai
                      </Link>
                      <Link to="/uae/dubai/ecommerce-seo" onClick={() => setIsOpen(false)} className="block py-0.5 text-gray-600 hover:text-teal-700">
                        • E-commerce SEO Dubai
                      </Link>
                      <Link to="/uae/dubai/healthcare-seo" onClick={() => setIsOpen(false)} className="block py-0.5 text-gray-600 hover:text-teal-700">
                        • Healthcare SEO Dubai
                      </Link>
                      <Link to="/uae/dubai/real-estate-seo" onClick={() => setIsOpen(false)} className="block py-0.5 text-gray-600 hover:text-teal-700">
                        • Real Estate SEO Dubai
                      </Link>
                      <Link to="/uae/dubai/restaurant-seo" onClick={() => setIsOpen(false)} className="block py-0.5 text-gray-600 hover:text-teal-700">
                        • Restaurant SEO Dubai
                      </Link>
                    </div>
                  </div>
                </div>

                {/* India */}
                <div className="space-y-1">
                  <Link to="/india/seo-services" onClick={() => setIsOpen(false)} className="font-semibold text-teal-900 block hover:text-teal-700">
                    SEO Services India
                  </Link>
                </div>

                {/* Saudi Arabia */}
                <div className="space-y-1">
                  <Link to="/saudi-arabia/seo-services" onClick={() => setIsOpen(false)} className="font-semibold text-teal-900 block hover:text-teal-700">
                    SEO Services Saudi Arabia
                  </Link>
                </div>

                {/* Qatar */}
                <div className="space-y-1">
                  <Link to="/qatar/seo-services" onClick={() => setIsOpen(false)} className="font-semibold text-teal-900 block hover:text-teal-700">
                    SEO Services Qatar
                  </Link>
                </div>
              </div>
            </div>
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
