import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../../../../components/SEO";

import beginnerLessonsImg from "../../../../images/beginner-driving-lessons-seo-dubai.webp";
import multiLocationImg from "../../../../images/multi-location-driving-school-seo.webp";
import localGbpImg from "../../../../images/local-seo-driving-schools-dubai.webp";
import {
  Car,
  Compass,
  Search,
  Gauge,
  ShieldCheck,
  MapPin,
  TrendingUp,
  CheckCircle2,
  AlertTriangle,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Home,
  Clock,
  Sparkles,
  Smartphone,
  FileText,
  BookOpen,
  HelpCircle,
  Package,
  Settings,
  Key,
  Briefcase,
  Layers,
  BarChart3,
  PhoneCall,
  CheckSquare,
  Building2,
  Target,
  GraduationCap,
  Users,
  Award,
} from "lucide-react";

const drivingHeroImg = "/images/driving-school-seo-dubai-diglip7.webp";
const searchVisibilityImg = "/images/driving-school-search-visibility-dubai.webp";

// 3D Perspective Tilt Card Component
const Card3D = ({ children, className = "" }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateXValue = (y - centerY) / 25;
    const rotateYValue = (centerX - x) / 25;
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      className={`transform-gpu ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      style={{ perspective: 1000 }}
    >
      {children}
    </motion.div>
  );
};

// Image Component displaying image or container showing ONLY alt text
const DrivingImage = ({
  src,
  alt,
  width = 1200,
  height = 630,
  priority = false,
  aspect = "aspect-[16/10] sm:aspect-[16/9]",
  className = "",
  imgClassName = "w-full h-full object-cover",
}) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [src]);

  return (
    <div
      className={`overflow-hidden rounded-2xl border border-gray-200 bg-slate-100 flex items-center justify-center text-center ${!hasError && src ? aspect : "aspect-[16/9] p-6 sm:p-8"} ${className}`}
    >
      {!hasError && src ? (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onError={() => setHasError(true)}
          className={imgClassName}
        />
      ) : (
        <p className="text-sm sm:text-base font-semibold text-gray-700 leading-snug max-w-md p-6 sm:p-8">
          {alt}
        </p>
      )}
    </div>
  );
};

// Breadcrumb Trail configuration
const breadcrumbTrail = [
  { label: "Home", href: "/" },
  { label: "UAE", href: "/uae/seo-services" },
  { label: "Dubai", href: "/uae/dubai/seo-services" },
  { label: "Driving School SEO Dubai", href: "/uae/dubai/driving-school-seo/" },
];

// Core Driving School SEO Services
const drivingSchoolServices = [
  {
    title: "Driving School Keyword Research",
    desc: "Keyword research identifies the search terms that matter for your institute, based on the training you offer, the learners you want to reach, the areas you serve and the intent behind each search. There is a real difference between a broad search for driving lessons and a more specific one, such as automatic lessons, beginner training or a refresher course. Mapping those searches to the right pages helps each service reach the learners who want it, provided it is something you genuinely offer.",
    icon: Search,
    highlight: "Search Intent Mapping",
  },
  {
    title: "On-Page SEO for Driving School Websites",
    desc: "On-page optimisation covers page titles, meta descriptions, headings, service descriptions, course pages, internal links, images and calls to action. Each important course deserves its own useful, accurate information rather than a thin or repeated description. A learner should be able to understand what a course involves and what to do next without hunting for it.",
    icon: FileText,
    highlight: "High-Clarity Course Pages",
  },
  {
    title: "Technical SEO for Driving Institutes",
    desc: "Technical SEO looks at crawlability, indexability, mobile usability, loading performance, broken links, redirects, XML sitemaps, canonical URLs and navigation. When these are neglected, important pages can be hard for search engines and visitors to reach, however good the content is.",
    icon: Settings,
    highlight: "Fast & Mobile Friendly",
  },
  {
    title: "Local SEO for Driving Schools",
    desc: "Local SEO focuses on accurate Google Business Profile details, eligible business locations, relevant categories, genuine reviews where permitted, consistent contact information and useful location details. Keeping information consistent across online listings helps both learners and search engines trust it.",
    icon: MapPin,
    highlight: "Google Maps & Local Presence",
  },
  {
    title: "Content Marketing for Driving Schools",
    desc: "Helpful content might include driving lesson guides, course comparisons, learner preparation checklists and answers to common questions. Anything involving driving regulations, licence procedures or eligibility should be checked against authoritative UAE sources before publication.",
    icon: BookOpen,
    highlight: "Helpful Learner Guides",
  },
  {
    title: "SEO Analytics and Enquiry Tracking",
    desc: "We measure organic search performance alongside meaningful actions such as form submissions and trackable phone calls, so you can see what search visibility is actually contributing.",
    icon: BarChart3,
    highlight: "Enquiry & Call Tracking",
  },
];

// SEO Solutions for Different Driving School Training Types
const courseSolutions = [
  {
    title: "SEO for Beginner Driving Lessons",
    desc: "Beginners often have the most questions. Clear course pages, learner-focused information, verified course requirements and a simple enquiry path help them move from curiosity to contact.",
    icon: GraduationCap,
    points: [
      "Step-by-step training roadmaps from theory test to practical assessment",
      "Document requirements and age eligibility criteria clearly outlined",
      "Transparent lesson packages and instructor booking options",
      "Prominent enquiry forms tailored for first-time drivers",
    ],
    image: beginnerLessonsImg || "/images/beginner-driving-lessons-seo-dubai.webp",
    alt: "Beginner driving lessons course page optimised for search",
    titleAttr: "SEO for beginner driving lessons",
    badge: "Beginner lessons",
    type: "beginner",
  },
  {
    title: "SEO for Automatic and Manual Driving Lessons",
    desc: "Separate pages can help people understand the differences between genuine training options, provided each page carries useful and distinct information. Two pages that say nearly the same thing add little value.",
    icon: Car,
    points: [
      "Dedicated, distinct pages highlighting automatic vs. manual licence options",
      "Fleet details explaining vehicle safety features and training models",
      "Targeted queries for learners wanting immediate automatic test bookings",
      "Clear timelines for transition training between vehicle transmission types",
    ],
    image: "/images/automatic-manual-driving-lessons-seo.webp",
    alt: "Separate automatic and manual driving lesson pages on a driving school website",
    titleAttr: "SEO for automatic and manual lessons",
    badge: "Automatic and manual",
    type: "transmission",
  },
  {
    title: "SEO for Refresher and Advanced Training",
    desc: "Refresher and advanced courses should state who they are for, how the training is delivered and what it covers, where those courses are offered.",
    icon: ShieldCheck,
    points: [
      "Customised hourly packages for licensed drivers seeking highway confidence",
      "Parking mastery, night driving, and defensive driving modules",
      "Flexible schedule descriptions for working professionals",
      "Straightforward direct WhatsApp or phone consultation buttons",
    ],
    image: "/images/refresher-advanced-driving-lessons-seo.webp",
    alt: "Refresher driving lessons course page optimised for licensed drivers",
    titleAttr: "SEO for refresher and advanced lessons",
    badge: "Refresher & Advanced Training",
    type: "refresher",
  },
  {
    title: "SEO for Specialist Driving Courses",
    desc: "Institutes offering motorcycle, heavy vehicle or corporate driver training can optimise those pages around real services and verified requirements, so the right audience finds the right course.",
    icon: Key,
    points: [
      "Motorcycle licence (Category 1) course requirements and safety gear guides",
      "Heavy truck and bus commercial driver licence pathways",
      "Corporate fleet training and defensive driving compliance programs",
      "Accreditation badges matching UAE licensing framework guidelines",
    ],
    image: "/images/driving-school-seo-services-dubai.webp",
    alt: "Specialist motorcycle and commercial driver training pages",
    titleAttr: "Driving school SEO services",
    badge: "Specialist & Commercial Courses",
    type: "services",
  },
  {
    title: "SEO for Multi-Location Driving Institutes",
    desc: "Eligible businesses with several locations can create useful pages with accurate branch information, relevant services and clear contact details. We do not recommend duplicate pages that only swap the names of Dubai neighbourhoods.",
    icon: Building2,
    points: [
      "Individual branch landing pages for training centres across Dubai",
      "Dedicated Google Business Profiles for verified physical branches",
      "Accurate neighbourhood pick-up and drop-off route coverage details",
      "Zero doorway pages or duplicate neighborhood name-swapping",
    ],
    image: multiLocationImg || "/images/multi-location-driving-school-seo.webp",
    alt: "Driving school location pages with branch details and contact information",
    titleAttr: "SEO for multi-location driving institutes",
    badge: "Multi-location",
    type: "multilocation",
  },
];

// The 6-Step Driving School SEO Process
const processSteps = [
  {
    step: "01",
    title: "Website and SEO Audit",
    desc: "We review technical health, existing organic visibility, service pages, mobile experience, indexation, internal links and enquiry pathways.",
    icon: Search,
  },
  {
    step: "02",
    title: "Keyword and Competitor Research",
    desc: "We identify relevant search themes and review competing results to see how other driving schools organise their services and answer learners' questions. The goal is to spot opportunities, not to copy anyone's content.",
    icon: Compass,
  },
  {
    step: "03",
    title: "SEO Strategy and Page Planning",
    desc: "Improvements are prioritised by business goals, actual services, target locations, website condition and available resources.",
    icon: Target,
  },
  {
    step: "04",
    title: "On-Page and Technical Optimisation",
    desc: "We improve titles, headings, page content, internal linking, crawlability and overall user experience.",
    icon: Settings,
  },
  {
    step: "05",
    title: "Content and Local SEO Improvements",
    desc: "We develop useful service information and maintain accurate local business profiles and location details where applicable.",
    icon: Layers,
  },
  {
    step: "06",
    title: "Performance Review and Refinement",
    desc: "We monitor results, identify remaining issues and refine the strategy using evidence from search performance and enquiry tracking.",
    icon: TrendingUp,
  },
];

// 10 Common SEO Problems Driving Schools Should Address
const commonProblems = [
  "Course pages with little useful information",
  "Duplicate descriptions across training pages",
  "Missing or unclear page titles",
  "Poor mobile usability",
  "Slow page loading",
  "Broken links and redirect issues",
  "Important pages that are difficult to reach",
  "Inaccurate contact or location information",
  "Unclear enquiry forms or contact options",
  "No reliable measurement of website enquiries",
];

// Performance Measurement Metrics (8 Core Areas)
const measurementMetrics = [
  {
    title: "Organic Clicks & Impressions",
    desc: "Evaluating search visibility and clicks in Google Search Console to verify total prospective learner audience discovery.",
    icon: Search,
  },
  {
    title: "Relevant Search Queries",
    desc: "Monitoring queries for automatic lessons, manual courses, beginner training, and neighbourhood-specific terms.",
    icon: TrendingUp,
  },
  {
    title: "Performance of Course & Location Pages",
    desc: "Tracking engagement, bounce rates, and dwell time on key training packages and branch landing pages.",
    icon: FileText,
  },
  {
    title: "Organic Traffic to Important Landing Pages",
    desc: "Measuring qualified visitor volume arriving directly at priority beginner, refresher, and licence conversion pages.",
    icon: Compass,
  },
  {
    title: "Contact-Form Submissions",
    desc: "Measuring completed lesson enquiry forms, quotation requests, and student enrolment applications.",
    icon: CheckSquare,
  },
  {
    title: "Calls or Enquiries (with Reliable Tracking)",
    desc: "Tracking direct student calls from mobile tap-to-call buttons and Google Business Profile links where reliable tracking is available.",
    icon: PhoneCall,
  },
  {
    title: "Qualified Enquiries & Conversion Rate",
    desc: "Evaluating the proportion of organic visits that turn into genuine learner enquiries and bookings.",
    icon: Gauge,
  },
  {
    title: "Local Search Visibility",
    desc: "Tracking appearances in Google Maps 3-pack search results for motorists and students searching nearby.",
    icon: MapPin,
  },
];

// Why Choose DigLip7 (7 Core Pillars)
const whyChoosePoints = [
  {
    title: "A Strategy Aligned with Your Driving School's Actual Services",
    desc: "Every recommendation is built around what your driving institute genuinely offers, avoiding generic boilerplate content.",
  },
  {
    title: "Relevant Keyword & Competitor Research",
    desc: "Targeting high-intent student searches without copying competitor descriptions or creating thin, repetitive pages.",
  },
  {
    title: "Attention to Technical SEO & Website Structure",
    desc: "Ensuring crawlability, indexability, fast loading, and mobile usability so students can seamlessly browse courses.",
  },
  {
    title: "Useful, Accurate Course Content",
    desc: "Transparent curriculum, document requirements, and pricing breakdowns that give learners the answers they need.",
  },
  {
    title: "Local SEO Where It Applies",
    desc: "Verified Google Business Profile optimization reflecting authentic training locations and test routes.",
  },
  {
    title: "Transparent Performance Measurement",
    desc: "Actionable reporting tied to student enquiries and phone calls rather than vanity ranking metrics.",
  },
  {
    title: "Prioritisation Based on Your Business Objectives",
    desc: "Focusing effort on high-value course categories and areas with the greatest commercial potential.",
  },
];

// 8 Frequently Asked Questions
const faqs = [
  {
    q: "What is Driving School SEO Dubai?",
    a: "It is the process of improving how driving schools in Dubai appear in organic search results through better content, website structure, technical health and local visibility.",
  },
  {
    q: "How can SEO help a driving school in Dubai?",
    a: "It can help prospective learners find your courses and locations, understand your services and contact you more easily.",
  },
  {
    q: "Is local SEO important for driving institutes?",
    a: "Yes. Learners often search for training in or near a particular area, so accurate location details and a well-managed Google Business Profile matter.",
  },
  {
    q: "Can SEO help attract more driving lesson enquiries?",
    a: "It can improve your visibility to relevant learners and make it easier for them to enquire, but it cannot guarantee a specific number of enquiries.",
  },
  {
    q: "How long does driving school SEO take to show results?",
    a: "Timelines vary with competition, website condition and the work involved. SEO is generally a medium-to-long-term effort.",
  },
  {
    q: "What should a driving school SEO campaign include?",
    a: "Typically an audit, keyword and competitor research, on-page and technical work, local SEO, useful content and ongoing reporting. The scope depends on your needs.",
  },
  {
    q: "Can an SEO agency guarantee first-page rankings?",
    a: "No. Search results depend on many factors, and no ethical provider can guarantee a specific position.",
  },
  {
    q: "How can a driving school choose an SEO agency in Dubai?",
    a: "Look for clear explanations, realistic expectations, transparent reporting and an approach tailored to your services. Be cautious of guarantees.",
  },
];

export default function DubaiDrivingSchoolSEO() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Complete JSON-LD Schema combining Organization, WebPage, Service, BreadcrumbList, and FAQPage
  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://diglip7.com/#organization",
        name: "DigLip7",
        url: "https://diglip7.com/",
        logo: "https://diglip7.com/images/Logo.jpg",
        sameAs: [
          "https://www.linkedin.com/company/diglip7",
          "https://www.facebook.com/diglip7",
          "https://www.instagram.com/diglip7",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://diglip7.com/#website",
        url: "https://diglip7.com/",
        name: "DigLip7",
        publisher: { "@id": "https://diglip7.com/#organization" },
      },
      {
        "@type": "WebPage",
        "@id": "https://diglip7.com/uae/dubai/driving-school-seo/#webpage",
        url: "https://diglip7.com/uae/dubai/driving-school-seo/",
        name: "Driving School SEO Dubai | SEO Services for Driving Institutes",
        description:
          "Improve your driving institute's search visibility with Driving School SEO Dubai strategies focused on relevant traffic, local discovery, and learner enquiries.",
        inLanguage: "en-AE",
        isPartOf: { "@id": "https://diglip7.com/#website" },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: "https://diglip7.com/images/driving-school-seo-dubai-diglip7.webp",
        },
        breadcrumb: { "@id": "https://diglip7.com/uae/dubai/driving-school-seo/#breadcrumb" },
      },
      {
        "@type": "Service",
        "@id": "https://diglip7.com/uae/dubai/driving-school-seo/#service",
        name: "Driving School SEO Dubai",
        serviceType: "Driving School SEO Services",
        description:
          "Tailored SEO services for driving schools and driving institutes in Dubai, including keyword research, on-page SEO, technical SEO, local SEO, content marketing and enquiry tracking.",
        provider: { "@id": "https://diglip7.com/#organization" },
        areaServed: [
          { "@type": "City", name: "Dubai" },
          { "@type": "Country", name: "United Arab Emirates" },
        ],
        audience: {
          "@type": "BusinessAudience",
          audienceType: "Driving schools and driving institutes",
        },
        url: "https://diglip7.com/uae/dubai/driving-school-seo/",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://diglip7.com/uae/dubai/driving-school-seo/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://diglip7.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "UAE",
            item: "https://diglip7.com/uae/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Dubai",
            item: "https://diglip7.com/uae/dubai/",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Driving School SEO Dubai",
            item: "https://diglip7.com/uae/dubai/driving-school-seo/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://diglip7.com/uae/dubai/driving-school-seo/#faq",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    ],
  };

  return (
    <div className="overflow-x-hidden bg-white w-full text-slate-800 font-sans antialiased">
      {/* Comprehensive SEO Meta Management */}
      <SEO
        title="Driving School SEO Dubai | SEO Services for Driving Institutes"
        exactTitle={true}
        description="Improve your driving institute's search visibility with Driving School SEO Dubai strategies focused on relevant traffic, local discovery, and learner enquiries."
        canonical="https://diglip7.com/uae/dubai/driving-school-seo/"
        robots="index, follow, max-image-preview:large"
        ogType="website"
        ogLocale="en_AE"
        ogImage="https://diglip7.com/images/driving-school-seo-dubai-diglip7.webp"
        ogImageAlt="Driving School SEO Dubai services by DigLip7 for driving institutes"
        twitterCard="summary_large_image"
        twitterSite={null}
        twitterCreator={null}
        twitterTitle="Driving School SEO Dubai | SEO Services for Driving Institutes"
        twitterDescription="Improve your driving institute's search visibility with Driving School SEO Dubai strategies focused on relevant traffic, local discovery, and learner enquiries."
        twitterImage="https://diglip7.com/images/driving-school-seo-dubai-diglip7.webp"
        twitterImageAlt="Driving School SEO Dubai services by DigLip7 for driving institutes"
        hreflangs={[
          { hreflang: "en-ae", href: "https://diglip7.com/uae/dubai/driving-school-seo/" },
          { hreflang: "x-default", href: "https://diglip7.com/uae/dubai/driving-school-seo/" },
        ]}
        keywords={false}
        schema={jsonLdGraph}
      />

      {/* ================= BREADCRUMB NAVIGATION ================= */}
      <div className="pt-24 sm:pt-28 px-4 sm:px-6 lg:px-8 xl:px-12 bg-gradient-to-r from-blue-50/70 via-slate-50 to-white border-b border-blue-100/80">
        <nav
          aria-label="Breadcrumb"
          className="max-w-7xl mx-auto flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600 pb-3"
        >
          {breadcrumbTrail.map((crumb, i) => (
            <span key={crumb.label} className="flex items-center gap-1.5 sm:gap-2">
              {i === 0 ? (
                <Home className="w-3.5 h-3.5 text-blue-700" />
              ) : (
                <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              )}
              {i === breadcrumbTrail.length - 1 ? (
                <span className="font-semibold text-blue-950">{crumb.label}</span>
              ) : (
                <Link to={crumb.href} className="hover:text-blue-700 transition-colors">
                  {crumb.label}
                </Link>
              )}
            </span>
          ))}
        </nav>
      </div>

      {/* ================= HERO SECTION ================= */}
      <header className="pt-10 sm:pt-16 pb-16 lg:pb-24 bg-gradient-to-b from-blue-50/50 via-slate-50/80 to-white relative overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-blue-200 text-blue-900 text-xs sm:text-sm font-semibold shadow-xs">
                <GraduationCap className="w-4 h-4 text-blue-700" />
                <span>Driving Institute SEO Strategy &bull; Dubai Search Services</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl font-extrabold tracking-tight text-gray-900 leading-tight">
                Driving School SEO Dubai to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-800 to-slate-900">
                  Attract More Relevant Learner Enquiries
                </span>
              </h1>

              <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
                <p>
                  When someone types <em>"automatic driving lessons near me"</em> into Google, they are usually close to
                  making a decision. They may be a complete beginner, a resident converting a licence, or someone who
                  simply wants to feel confident behind the wheel again. Whatever the reason, they are comparing a
                  handful of driving institutes and will contact the one that seems clear, trustworthy and easy to reach.
                  Driving School SEO Dubai work exists to make sure your school is one of the options they find, and
                  that your website gives them what they need once they arrive.
                </p>
                <p className="text-gray-600 text-sm sm:text-base">
                  That means your courses, locations and contact options must be easy to find, whether a learner is
                  looking for beginner lessons, manual or automatic training, or an institute in a particular part of Dubai.
                </p>
                <p className="text-gray-600 text-sm sm:text-base">
                  DigLip7 is an SEO service provider that helps driving schools build a strategy around their actual
                  services, locations, website performance and business goals. We do not promise rankings, a set number
                  of enquiries or guaranteed enrolments. What we can do is identify where your website is missing
                  opportunities and focus effort where it is most likely to help.
                </p>
              </div>

              <div className="bg-white/95 rounded-2xl border-l-4 border-blue-600 border border-blue-100 p-5 sm:p-6 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-blue-900 font-bold text-sm sm:text-base">
                  <ShieldCheck className="w-5 h-5 text-blue-600" />
                  <span>Ethical, Realistic Approach</span>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  If you would like to talk about your website's visibility and your SEO priorities, get in touch with the
                  DigLip7 team for an initial discussion.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link to="/contact">
                  <button className="px-7 sm:px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold text-sm sm:text-base rounded-full shadow-lg shadow-blue-600/25 hover:scale-105 transition-all flex items-center gap-2 cursor-pointer">
                    <span>Discuss Driving School SEO</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </button>
                </Link>
                <Link to="/uae/dubai/seo-services">
                  <button className="px-7 sm:px-8 py-3.5 bg-white hover:bg-slate-50 text-blue-950 font-bold text-sm sm:text-base rounded-full border border-blue-200 shadow-xs hover:scale-105 transition-all cursor-pointer">
                    All Dubai SEO Services
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Media Column */}
            <div className="lg:col-span-6 w-full flex justify-center">
              <Card3D className="w-full">
                <div className="bg-white p-3 sm:p-4 rounded-3xl border border-blue-200/90 shadow-2xl hover:shadow-blue-200/40 transition-all">
                  <DrivingImage
                    src={drivingHeroImg || "/images/driving-school-seo-dubai-diglip7.webp"}
                    alt="Driving School SEO Dubai services by DigLip7 for driving institutes"
                    priority={true}
                    aspect="aspect-auto"
                    imgClassName="w-full h-auto block rounded-2xl object-cover shadow-xs"
                  />
                </div>
              </Card3D>
            </div>
          </div>
        </div>
      </header>

      {/* ================= SECTION 1: WHY DRIVING SCHOOLS NEED A DEDICATED SEO STRATEGY ================= */}
      <section className="py-16 sm:py-20 bg-slate-50/70 border-b border-gray-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Student Research & Intent</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
                Why Driving Schools in Dubai Need a Dedicated SEO Strategy
              </h2>
              <div className="space-y-4 text-gray-700 text-base leading-relaxed">
                <p>
                  A driving institute is not an ordinary business website. Learners tend to research before they call.
                  They look at what courses are offered, whether lessons are available in their area, how contact works
                  and whether the school looks credible. A generic SEO plan rarely addresses these questions.
                </p>
                <p>
                  Competition adds another layer. Many driving schools serve the same neighbourhoods, and several may
                  appear for the same search. Location matters enormously, because most people want training that is
                  convenient to reach. Someone looking for automatic driving lessons near their preferred area, or
                  comparing beginner options across a few schools, is making a different kind of search from someone
                  reading about what to expect from a first lesson. These are illustrative examples rather than research
                  findings, but they show why search intent matters. Informational searches need helpful guidance, while
                  searches with an intention to enrol need clear course details and an obvious way to enquire.
                </p>
                <p>
                  This is also why relevant traffic matters more than traffic alone. Hundreds of visitors who never
                  contact you are less useful than a smaller number who are genuinely looking for the services you offer.
                </p>
                <p className="p-4 rounded-xl bg-white border border-blue-200 text-blue-950 text-sm font-medium">
                  <strong>The Core Principle:</strong> SEO works best when visibility is backed by useful information,
                  a trustworthy website and a straightforward way to get in touch. Rankings alone will not fill your
                  calendar if the page a learner lands on is vague.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 w-full flex justify-center">
              <Card3D className="w-full">
                <div className="bg-white p-3 sm:p-4 rounded-3xl border border-blue-200 shadow-2xl hover:shadow-blue-200/40 transition-all">
                  <DrivingImage
                    src={searchVisibilityImg || "/images/driving-school-search-visibility-dubai.webp"}
                    alt="Prospective learner searching online for driving lessons in Dubai"
                    aspect="aspect-auto"
                    imgClassName="w-full h-auto block rounded-2xl object-cover shadow-xs"
                  />
                </div>
              </Card3D>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: SERVICES OFFERED ================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Coordinated Strategy</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              Driving School SEO Services in Dubai Offered by DigLip7
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              The services below are parts of a coordinated approach rather than a menu of unrelated tasks. The scope
              of any campaign depends on your school's needs, so not every service is automatically included in every package:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {drivingSchoolServices.map((service, idx) => {
              const IconComp = service.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50/80 hover:bg-white p-7 rounded-3xl border border-gray-200/90 hover:border-blue-300 transition-all duration-300 shadow-xs hover:shadow-lg flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-blue-800 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                        {service.highlight}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-blue-900 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= SECTION 3: SOLUTIONS FOR DIFFERENT TRAINING TYPES ================= */}
      <section className="py-16 sm:py-24 bg-slate-50/70 border-b border-gray-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold mb-3">
              <Target className="w-3.5 h-3.5" />
              <span>Tailored Training Modules</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              SEO Solutions for Different Driving School Services
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              The right approach depends on the training your school actually provides. Here is how that typically
              shapes the work:
            </p>
          </div>

          <div className="space-y-8">
            {courseSolutions.map((solution, idx) => {
              const IconComp = solution.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm hover:border-blue-300 transition-all"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-6 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                          {solution.title}
                        </h3>
                      </div>
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        {solution.desc}
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                        {solution.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="lg:col-span-6 w-full flex justify-center">
                      <Card3D className="w-full">
                        <div className="bg-white p-3 sm:p-4 rounded-3xl border border-blue-200 shadow-2xl hover:shadow-blue-200/40 transition-all">
                          <DrivingImage
                            src={solution.image}
                            alt={solution.alt}
                            aspect="aspect-auto"
                            imgClassName="w-full h-auto block rounded-2xl object-cover shadow-xs"
                          />
                        </div>
                      </Card3D>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: OUR 6-STEP PROCESS ================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Practical Delivery Workflow</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              Our Driving School SEO Process
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              This is a practical workflow DigLip7 can use to plan and manage a campaign, adapted to each school:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50/80 p-7 rounded-3xl border border-gray-200 hover:border-blue-300 transition-all shadow-xs flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-black text-blue-200 group-hover:text-blue-300">
                        {step.step}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      Step {idx + 1} — {step.title.replace(/^Step \d+ — /, "")}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= SECTION 5: LOCAL SEO ACROSS DUBAI ================= */}
      <section className="py-16 sm:py-20 bg-slate-50/70 border-b border-gray-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                <span>Local Learner Proximity</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
                How Local SEO Helps Driving Schools Across Dubai
              </h2>
              <div className="space-y-4 text-gray-700 text-base leading-relaxed">
                <p>
                  Most learners prefer training that is convenient to get to, so local visibility plays a large part
                  in how they choose. Local SEO helps nearby learners discover relevant driving institutes and
                  training services when they search.
                </p>
                <p>
                  Depending on where your school genuinely provides services, relevant areas might include{" "}
                  <strong>Al Qusais, Al Barsha, Deira, Al Quoz, Business Bay, Dubai Silicon Oasis,</strong> or{" "}
                  <strong>International City</strong>. We only reference areas that reflect real coverage, and we never
                  imply a branch exists somewhere unless that has been verified. Location pages should give learners
                  useful details instead of repeating keywords.
                </p>
                <p className="font-semibold text-gray-900">
                  On the business profile side, the work includes:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Accurate Google Business Profile info</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Correct categories and contact details</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Clear location and service information</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Legitimate local business citations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Genuine customer reviews where permitted</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Consistency across online listings</span>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-blue-950 text-xs sm:text-sm">
                  <strong>Realistic Advisory:</strong> Local rankings depend on many factors, and no agency can
                  guarantee a position. Explore DigLip7's dedicated{" "}
                  <Link to="/uae/dubai/local-seo" className="text-blue-700 font-bold hover:underline">
                    Local SEO Dubai
                  </Link>{" "}
                  services for additional insights.
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 w-full flex justify-center">
              <Card3D className="w-full">
                <div className="bg-white p-3 sm:p-4 rounded-3xl border border-blue-200 shadow-2xl hover:shadow-blue-200/40 transition-all">
                  <DrivingImage
                    src={localGbpImg || "/images/local-seo-driving-schools-dubai.webp"}
                    alt="Google Business Profile and local search listing for a Dubai driving institute"
                    aspect="aspect-auto"
                    imgClassName="w-full h-auto block rounded-2xl object-cover shadow-xs"
                  />
                </div>
              </Card3D>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 6: COMMON PROBLEMS WE ADDRESS ================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-semibold mb-3">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Common Roadblocks</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              Common SEO Problems Driving Schools Should Address
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              An audit may uncover issues such as:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {commonProblems.map((prob, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-gray-200 flex items-start gap-3.5 hover:border-red-300 transition-all"
              >
                <div className="w-7 h-7 rounded-lg bg-red-100 text-red-700 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                  {idx + 1}
                </div>
                <span className="text-sm sm:text-base font-semibold text-gray-800 leading-snug">
                  {prob}
                </span>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-200 text-sm sm:text-base text-gray-700 leading-relaxed">
            Not every driving school has all of these problems, which is why the first step is working out which ones
            affect your site. Fixing the right issues can make your website easier to use and better able to support
            your organic search goals. A school with strong course pages but no enquiry tracking needs a different plan
            from one whose pages are hard to find in the first place.
          </div>
        </div>
      </section>

      {/* ================= SECTION 7: HOW WE MEASURE PERFORMANCE ================= */}
      <section className="py-16 sm:py-20 bg-slate-50/70 border-b border-gray-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold mb-3">
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Evidence-Based Metrics</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              How We Measure Driving School SEO Performance
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              SEO success should be judged against business objectives, not rankings alone. A page can rank well
              and still bring no useful enquiries. Depending on your setup, we look at:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {measurementMetrics.map((metric, idx) => {
              const IconComp = metric.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-gray-200/90 hover:border-blue-300 transition-all shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-3.5">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-1.5">{metric.title}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{metric.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-6 rounded-2xl bg-white border border-gray-200 text-sm sm:text-base text-gray-700 space-y-3">
            <p>
              Google Search Console and Google Analytics are useful starting points for this reporting.
            </p>
            <p className="text-xs sm:text-sm text-gray-500 pt-2 border-t border-gray-100">
              <strong>Fluctuation Realities:</strong> Traffic and rankings can fluctuate, and results depend on
              competition, website condition, implementation, content quality and the services you offer. We do not
              promise guaranteed rankings, a fixed increase in traffic or a specific number of student enquiries.
            </p>
          </div>

        </div>
      </section>

      {/* ================= SECTION 8: WHY CHOOSE DIGLIP7 ================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Transparent Standards</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              Why Choose DigLip7 for Driving School SEO Dubai?
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              The value of working with DigLip7 lies in a tailored, transparent approach rather than big promises.
              In practice, that means:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoosePoints.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-gray-200 hover:border-blue-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs mb-3.5">
                    {idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-200 text-sm sm:text-base text-gray-700 leading-relaxed">
            A short discovery discussion is usually the best way to find the right starting point. We would like to
            understand your courses, target areas and current website before recommending what to tackle first,
            because a school with a new website faces different priorities from one with years of existing content.
          </div>
        </div>
      </section>

      {/* ================= SECTION 9: FREQUENTLY ASKED QUESTIONS ================= */}
      <section className="py-16 sm:py-24 bg-slate-50/70 border-b border-gray-200/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Learner & Institute FAQs</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Frequently Asked Questions About Driving School SEO Dubai
            </h2>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-200 shadow-xs overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left px-5 sm:px-6 py-4.5 sm:py-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-bold text-gray-900 text-sm sm:text-base leading-snug">
                      {faq.q}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? "bg-blue-600 text-white rotate-180" : "bg-gray-100 text-gray-500"
                        }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-gray-700 leading-relaxed border-t border-gray-100 bg-blue-50/20">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= SECTION 10: GET STARTED CTA ================= */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 via-slate-100 to-gray-50 text-slate-900 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-block text-xs font-bold tracking-wider uppercase text-blue-900 bg-blue-100 border border-blue-200 px-3.5 py-1 rounded-full">
            Ready to Build Sustainable Learner Growth?
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-gray-900">
            Get Started with Driving School SEO in Dubai
          </h2>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Want to improve your driving school's visibility in search results? Contact DigLip7 to discuss your
            website, training services, and target audience. We can help identify practical SEO opportunities and
            develop a strategy aligned with your business goals.
          </p>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            A useful first step is a review of your website, courses, target locations, existing search performance
            and enquiry process. From there, we can recommend where driving school SEO in Dubai could help your institute most.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link to="/contact">
              <button className="px-8 sm:px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-extrabold text-sm sm:text-base rounded-full shadow-xl hover:scale-105 transition-all flex items-center gap-2 cursor-pointer">
                <span>Request a Driving School SEO Consultation</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </Link>

            <Link to="/uae/dubai/seo-services">
              <button className="px-8 sm:px-10 py-4 bg-white hover:bg-slate-50 text-gray-900 border border-gray-300 font-bold text-sm sm:text-base rounded-full shadow-md hover:scale-105 transition-all flex items-center gap-2 cursor-pointer">
                <span>View All Dubai SEO Services</span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
