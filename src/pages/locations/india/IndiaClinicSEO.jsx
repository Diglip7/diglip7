import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../../../components/SEO";
import {
  CheckCircle,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Home,
  Target,
  BarChart3,
  Building2,
  FileText,
  Settings,
  Layers,
  MapPin,
  Network,
  Zap,
  ShieldCheck,
  Sparkles,
  Users,
  Globe,
  Database,
  Compass,
  AlertTriangle,
  TrendingUp,
  Stethoscope,
  HeartPulse,
  PhoneCall,
  Activity,
  Smile,
  Eye,
  Lock,
  Search,
  ExternalLink,
  Calendar,
  CheckCircle2,
  Clock,
  Check,
  MessageSquare,
  Award,
  Sparkle,
  Workflow,
  Scale,
  Crosshair,
  BadgeAlert,
  HelpCircle,
  FileSearch,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

// 3D Tilt Card Component for interactive depth
const Card3D = ({ children, className = "" }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateXValue = (y - centerY) / 14;
    const rotateYValue = (centerX - x) / 14;

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

// =========================================================================
// CUSTOM CLINIC IMAGES IMPORT SECTION
// You can import your custom images here at any time, for example:
// import clinicHeroImg from "../../../images/your-hero-image.webp";
// import localSeoImg from "../../../images/your-local-seo-image.webp";
// import websiteOptimizationImg from "../../../images/your-website-image.webp";
// import doctorProfileImg from "../../../images/your-doctor-profile.webp";
// import contentStrategyImg from "../../../images/your-content-image.webp";
// import patientJourneyImg from "../../../images/your-patient-journey.webp";
// import analyticsImg from "../../../images/your-analytics-image.webp";
// =========================================================================

// Reusable Clean Clinic SEO Image Div Component
// Preserves the image div container, aspect ratio, borders, badges, and exact alt text.
// When you import an image and assign it to src, the <img> tag will display inside this div automatically.
const ClinicSEOImage = ({
  src = "",
  alt = "",
  caption = "",
  width = 1600,
  height = 900,
  aspect = "aspect-[16/9]",
  priority = false,
  className = "",
  imgClassName = "w-full h-full object-cover object-center",
  icon: Icon = Stethoscope,
  badge = "Clinical SEO",
}) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [src]);

  const showPlaceholder = !src || hasError;

  return (
    <div
      className={`relative w-full rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-950/5 via-slate-900/5 to-teal-950/5 border border-cyan-200/90 shadow-md transition-all duration-300 hover:shadow-xl ${aspect} ${className}`}
    >
      {!showPlaceholder ? (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          onError={() => setHasError(true)}
          className={imgClassName}
        />
      ) : (
        <div className="p-6 sm:p-8 text-center select-none flex flex-col items-center justify-center gap-3 w-full h-full bg-gradient-to-br from-white via-cyan-50/50 to-teal-50/40">
          <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-cyan-800 flex items-center justify-center shadow-xs">
            <Icon className="w-6 h-6" />
          </div>
          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-cyan-800 bg-cyan-100/70 px-2.5 py-0.5 rounded-full border border-cyan-200">
            {badge}
          </span>
          <p className="max-w-md leading-relaxed font-semibold text-slate-800 text-xs sm:text-sm">
            {alt}
          </p>
        </div>
      )}
      {caption && (
        <div className="absolute bottom-0 inset-x-0 bg-slate-950/80 backdrop-blur-md px-3.5 py-2 text-[11px] text-cyan-100 font-medium border-t border-white/10 flex items-center justify-between">
          <span className="truncate pr-2">{caption}</span>
          <span className="text-[10px] text-cyan-300 font-mono shrink-0">DigLip7 India</span>
        </div>
      )}
    </div>
  );
};

// Image Configuration (Images removed; image div container is preserved)
// When you import your images above, simply set src: yourImportedImage
const clinicImages = {
  hero: {
    src: "", // Put imported hero image here e.g. clinicHeroImg || ""
    filename: "clinic-seo-services-india.webp",
    alt: "Clinic SEO strategy for local search visibility in India",
    caption: "Clinic SEO strategy for local search visibility & patient discovery in India",
    width: 1600,
    height: 900,
  },
  localSeo: {
    src: "", // Put imported image here e.g. localSeoImg || ""
    filename: "local-seo-for-clinics-india.webp",
    alt: "Local SEO and neighbourhood discovery for clinics",
    caption: "Local SEO and neighbourhood discovery for clinics",
    width: 1600,
    height: 900,
  },
  websiteOptimization: {
    src: "", // Put imported image here e.g. websiteOptimizationImg || ""
    filename: "clinic-website-optimization-india.webp",
    alt: "Clinic website optimization with responsive pages and clear navigation",
    caption: "Clinic website optimization with responsive pages and clear navigation",
    width: 1600,
    height: 900,
  },
  contentStrategy: {
    src: "", // Put imported image here e.g. contentStrategyImg || ""
    filename: "healthcare-content-strategy-india.webp",
    alt: "Healthcare content planning for clinic service pages and patient education",
    caption: "Healthcare content planning for clinic service pages and patient education",
    width: 1600,
    height: 900,
  },
  doctorProfile: {
    src: "", // Put imported image here e.g. doctorProfileImg || ""
    filename: "doctor-profile-seo-india.webp",
    alt: "Doctor and practitioner profile optimization for clinics",
    caption: "Doctor and practitioner profile optimization for clinics",
    width: 1600,
    height: 900,
  },
  analytics: {
    src: "", // Put imported image here e.g. analyticsImg || ""
    filename: "clinic-seo-analytics-india.webp",
    alt: "Clinic SEO performance and appointment inquiry measurement",
    caption: "Clinic SEO performance and appointment inquiry measurement",
    width: 1600,
    height: 900,
  },
  patientJourney: {
    src: "", // Put imported image here e.g. patientJourneyImg || ""
    filename: "patient-appointment-journey-seo.webp",
    alt: "Patient journey from local search to appointment contact",
    caption: "Patient journey from local search to appointment contact",
    width: 1600,
    height: 900,
  },
};

// Breadcrumb configuration matching Documentation Section A & Schema Block 2
const breadcrumbTrail = [
  { label: "Home", href: "/" },
  { label: "India SEO Services", href: "/india/seo-services" },
  { label: "Clinic SEO Services in India", href: "/india/clinic-seo-services/" },
];

// Why Clinics Need Specialized SEO (Exact User Document Points)
const whyClinicsNeedSpecialized = [
  {
    title: "Patients searching for specific services and nearby providers",
    desc: "Patients rarely search for generic terms; they search for immediate treatments ('root canal near me', 'pediatrician for infant fever') within close physical proximity.",
    icon: Compass,
    badge: "Service Search Intent",
  },
  {
    title: "Competition from other clinics in the same locality",
    desc: "Within any Indian metro catchment zone, dozens of practices compete for the top 3 Google Maps positions and primary organic results.",
    icon: Target,
    badge: "Catchment Competition",
  },
  {
    title: "Accurate contact details and operating hours",
    desc: "Inconsistent phone numbers, missing OPD timings, or incorrect addresses immediately break patient trust and send visitors to rival clinics.",
    icon: Clock,
    badge: "NAP & Hours Accuracy",
  },
  {
    title: "Doctor and practitioner profile information",
    desc: "Patients vet individual doctors before booking. Verified medical degrees, council registrations, and clinical focus areas establish genuine E-E-A-T.",
    icon: Stethoscope,
    badge: "Doctor Credentialing",
  },
  {
    title: "Service-page quality and medical content accuracy",
    desc: "Every procedure page must offer medically accurate, reviewed information with realistic expectations rather than unsubstantiated claims or copied text.",
    icon: ShieldCheck,
    badge: "Clinical Content E-E-A-T",
  },
  {
    title: "Mobile usability and easy appointment contact",
    desc: "Over 80% of local healthcare searches occur on smartphones. Direct tap-to-call, WhatsApp booking, and responsive navigation make consultation contact effortless.",
    icon: PhoneCall,
    badge: "Friction-Free Contact",
  },
];

// 12 Clinic SEO Services Offered by DigLip7 (Exact User Document List)
const clinicServices = [
  {
    number: "01",
    title: "Clinic Keyword Research",
    desc: "We identify searches based on specialty, treatment, location, patient questions and appointment intent, then map keywords to existing pages or new pages where a genuine need exists. Search demand is validated with current research before any estimate is shared. For example, a dental clinic may find that treatment-specific and neighbourhood searches matter differently from broad ones, and each needs its own page and purpose.",
    icon: Target,
    badge: "Intent Mapping",
    focus: "Specialty, Treatment, Location & Appointment Queries",
  },
  {
    number: "02",
    title: "Local SEO for Clinics",
    desc: "This covers location relevance, accurate business information, locally relevant website content, appropriate citations and local performance monitoring. We do not recommend fake addresses, virtual locations used to manipulate Maps, duplicate profiles or misleading location pages.",
    icon: MapPin,
    badge: "Local Authority",
    focus: "Local Catchment Area Prominence & Real Citations",
  },
  {
    number: "03",
    title: "Google Business Profile Optimization",
    desc: "We review business categories, services, address and phone details, opening hours, appointment links, photos and policy-compliant review responses. Optimization cannot guarantee a particular Google Maps position.",
    icon: Building2,
    badge: "GBP Hygiene",
    focus: "Categories, Booking Links, Hours & Review Responses",
  },
  {
    number: "04",
    title: "Clinic Website SEO",
    desc: "Page titles, headings, metadata, descriptive URLs, internal linking, crawlability, indexability, mobile usability and clear service navigation all affect how easily patients and search engines understand your site. Many clinic sites are small, so careful fixes to existing pages often matter more than adding new ones.",
    icon: Settings,
    badge: "On-Page & Architecture",
    focus: "Metadata, URL Hygiene, Crawlability & Mobile Usability",
  },
  {
    number: "05",
    title: "Healthcare Service Page Optimization",
    desc: "Each page should cover a real service, answer appropriate patient questions, include relevant practitioner information and location details, and suggest a suitable next step, such as calling or requesting an appointment. We avoid near-identical pages for multiple cities or treatments without meaningful differences.",
    icon: Layers,
    badge: "Service Silos",
    focus: "Unique Procedure Pages, Doctor Context & Clear CTAs",
  },
  {
    number: "06",
    title: "Doctor and Practitioner Profile SEO",
    desc: "Accurate qualifications, verified credentials, genuine experience and treatment expertise help patients trust a clinic. We never invent medical degrees, registrations, years of practice, specialties or affiliations.",
    icon: Stethoscope,
    badge: "Doctor Authority",
    focus: "Medical Degrees, Council Registration & OPD Hours",
  },
  {
    number: "07",
    title: "Healthcare Content Marketing",
    desc: "Educational content such as treatment explanations, preparation guidance, aftercare information and answers to common questions can support patients. It should be medically responsible and reviewed by a qualified professional where necessary. Our clinic content marketing avoids unverified diagnoses and treatment promises, and any medical statement should be traceable to a reliable source.",
    icon: FileText,
    badge: "Educational Content",
    focus: "Doctor-Reviewed Patient Guides & Traceable Sources",
  },
  {
    number: "08",
    title: "Technical SEO for Healthcare Websites",
    desc: "We look at indexing, canonical tags, XML sitemaps, redirects, structured navigation, performance, accessibility and JavaScript rendering where relevant. Patient records, appointment details and authenticated portals must never be exposed for indexing.",
    icon: Lock,
    badge: "Technical Security",
    focus: "Private Portal Safeguards, Canonicalization & Core Web Vitals",
  },
  {
    number: "09",
    title: "Clinic Reputation Management",
    desc: "This means ethical review collection, thoughtful responses, accurate public information and watching for recurring feedback themes. We do not support fake reviews, policy-violating incentives, review gating or misleading testimonials.",
    icon: HeartPulse,
    badge: "Reputation Ethics",
    focus: "Ethical Patient Feedback, Prompt Responses & Policy Compliance",
  },
  {
    number: "10",
    title: "Mobile SEO and Appointment Conversion",
    desc: "We look at mobile usability, tap-to-call, clear booking pathways, accessible forms, accurate contact details and appropriate WhatsApp or telephone options where offered. Marketing forms should not collect sensitive health information unnecessarily.",
    icon: PhoneCall,
    badge: "Mobile Conversion",
    focus: "Tap-to-Call, WhatsApp Booking & Minimal Form Friction",
  },
  {
    number: "11",
    title: "Multi-Location Clinic SEO",
    desc: "Healthcare groups with several genuine locations, such as a multispecialty group with branches in different parts of a city, need well-structured location pages, matching business profiles, consistent contact details and sensible internal links. Each location page must represent a real clinic with useful, location-specific information.",
    icon: Globe,
    badge: "Branch Architecture",
    focus: "Distinct Physical Clinic Pages, Separate GBPs & Regional NAP",
  },
  {
    number: "12",
    title: "Healthcare SEO Reporting",
    desc: "Reporting covers organic visibility, service-page traffic, local search performance, qualified inquiries, calls, booking actions and technical health. A tracked inquiry is not the same as a confirmed appointment or an actual patient visit, and reports should say so.",
    icon: BarChart3,
    badge: "Transparent Analytics",
    focus: "Qualified Inquiries, Call Actions & Inquiry-to-Visit Clarity",
  },
];

// Local SEO in Indian Cities (Exact User Document Section)
const indianCitiesLocalSEO = [
  {
    city: "Delhi NCR",
    specialtyFocus: "Dental Clinics & Eye Care",
    description: "Focuses on treatment-specific queries and neighbourhood searches across South Delhi, Rohini, Dwarka, and Noida, emphasizing emergency tooth pain and cosmetic smile makeovers.",
    badge: "Metro North",
  },
  {
    city: "Mumbai",
    specialtyFocus: "Physiotherapy & Orthopedic Rehabilitation",
    description: "Emphasises condition-based service pages (sports rehab, spine care, joint recovery) and verified practitioner profiles tailored to local sub-localities like Bandra, Andheri, and Thane.",
    badge: "Metro West",
  },
  {
    city: "Bengaluru",
    specialtyFocus: "Dermatology & Cosmetology Clinics",
    description: "Prioritizes clinical skin condition guides, aesthetic dermatology, and direct consultation booking in high-density tech hubs like Koramangala, Indiranagar, and Whitefield.",
    badge: "South Tech Corridor",
  },
  {
    city: "Hyderabad",
    specialtyFocus: "Multispecialty Healthcare Centers",
    description: "Focuses on departmental silo architecture across Gachibowli, Hitec City, and Banjara Hills, integrating multi-doctor directories and emergency care visibility.",
    badge: "Multi-Specialty Hub",
  },
  {
    city: "Pune",
    specialtyFocus: "Ayurvedic & Holistic Wellness Centers",
    description: "Focuses on authentic Panchakarma therapy explanations, lifestyle consultations, and verified BAMS practitioner credentials across Shivaji Nagar, Kothrud, and Baner.",
    badge: "Holistic & Traditional",
  },
];

// Clinic SEO Across Different Specialties (Exact User Document Table)
const clinicSpecialtyTable = [
  {
    type: "Dental clinics",
    priorities: "Treatment and local searches, profile accuracy",
    content: "Treatment pages, practitioner details, patient FAQs",
    action: "Appointment request or call",
    badgeColor: "bg-teal-50 text-teal-900 border-teal-200",
  },
  {
    type: "Physiotherapy clinics",
    priorities: "Condition and service pages, local relevance",
    content: "Services, practitioner profiles, what to expect",
    action: "Booking form or call",
    badgeColor: "bg-emerald-50 text-emerald-900 border-emerald-200",
  },
  {
    type: "Dermatology clinics",
    priorities: "Service pages, careful claims, local searches",
    content: "Treatment explanations, consultation information",
    action: "Consultation request",
    badgeColor: "bg-rose-50 text-rose-900 border-rose-200",
  },
  {
    type: "Multispecialty clinics",
    priorities: "Clear architecture across specialties and locations",
    content: "Specialty pages, doctor directory, location pages",
    action: "Specialty-specific appointment request",
    badgeColor: "bg-blue-50 text-blue-900 border-blue-200",
  },
  {
    type: "Ayurvedic clinics",
    priorities: "Service clarity, practitioner credentials, accurate claims",
    content: "Therapy explanations, practitioner information",
    action: "Consultation inquiry",
    badgeColor: "bg-amber-50 text-amber-900 border-amber-200",
  },
  {
    type: "Eye clinics",
    priorities: "Service and local searches, trust signals",
    content: "Service pages, preparation and visit information",
    action: "Appointment request or call",
    badgeColor: "bg-cyan-50 text-cyan-900 border-cyan-200",
  },
  {
    type: "Orthopedic clinics",
    priorities: "Specialty and procedure pages, practitioner profiles",
    content: "Service pages, practitioner details, visit information",
    action: "Consultation request",
    badgeColor: "bg-indigo-50 text-indigo-900 border-indigo-200",
  },
  {
    type: "Diagnostic and outpatient clinics",
    priorities: "Test and service listings, opening hours, location",
    content: "Service lists, preparation guidance, hours and directions",
    action: "Call or booking action",
    badgeColor: "bg-purple-50 text-purple-900 border-purple-200",
  },
];

// 10-Step Clinic SEO Process (Exact User Document Process)
const clinicProcessSteps = [
  {
    step: "01",
    title: "Initial consultation and business goals",
    detail: "We learn your services, locations and goals.",
    outcome: "Shared priorities.",
  },
  {
    step: "02",
    title: "Website and technical SEO audit",
    detail: "We review crawling, indexing, speed and mobile use.",
    outcome: "A prioritised issue list.",
  },
  {
    step: "03",
    title: "Clinic and specialty keyword research",
    detail: "We study patient search themes.",
    outcome: "Keyword groups mapped to pages.",
  },
  {
    step: "04",
    title: "Local competitor and search-intent analysis",
    detail: "We analyze catchment area competition and query nuances.",
    outcome: "A clear view of the local landscape.",
  },
  {
    step: "05",
    title: "Google Business Profile review",
    detail: "We audit primary categories, consultation hours, and address pins.",
    outcome: "Corrected, complete profile information.",
  },
  {
    step: "06",
    title: "Website and service-page optimization",
    detail: "We restructure priority procedure pages for clarity and patient next steps.",
    outcome: "Clearer, more useful priority pages.",
  },
  {
    step: "07",
    title: "Healthcare content planning and review",
    detail: "We organize educational patient guides with clinical review protocols.",
    outcome: "A plan with qualified review built in.",
  },
  {
    step: "08",
    title: "Local authority and reputation improvements",
    detail: "We build verified healthcare citations and ethical feedback workflows.",
    outcome: "Ethical, policy-compliant improvements.",
  },
  {
    step: "09",
    title: "Appointment inquiry tracking",
    detail: "We configure click-to-call, WhatsApp click, and booking event tracking.",
    outcome: "Validated call and form tracking.",
  },
  {
    step: "10",
    title: "Ongoing reporting and refinement",
    detail: "We monitor Search Console, analytics, and inquiry trends regularly.",
    outcome: "Regular reviews that guide priorities.",
  },
];

// Clinic SEO vs Paid Advertising Comparison (Exact User Document Table)
const clinicVsPpcComparison = [
  {
    factor: "Visibility",
    seo: "Organic and local listings",
    paid: "Paid placements",
  },
  {
    factor: "Cost structure",
    seo: "Ongoing work on website, profile and content",
    paid: "Media spend plus management",
  },
  {
    factor: "Speed of activation",
    seo: "Gradual; depends on competition and condition",
    paid: "Campaigns can start sooner once approved",
  },
  {
    factor: "Long-term content value",
    seo: "Pages and profiles keep supporting discovery",
    paid: "Visibility generally stops when spend stops",
  },
  {
    factor: "Targeting and control",
    seo: "Less direct control of timing",
    paid: "More control of audience and budget",
  },
  {
    factor: "Measurement",
    seo: "Attribution can be indirect",
    paid: "Clearer click data, with its own limits",
  },
  {
    factor: "Suitable objectives",
    seo: "Sustained local presence",
    paid: "Time-limited promotions and testing",
  },
];

// 13 Common Clinic SEO Mistakes (Exact User Document List)
const clinicCommonMistakes = [
  {
    title: "Inaccurate clinic contact information",
    desc: "Patients cannot reach you when phone numbers or addresses are incorrect.",
  },
  {
    title: "Incorrect business categories",
    desc: "The profile shows for the wrong searches, attracting irrelevant queries.",
  },
  {
    title: "Duplicate or fake business profiles",
    desc: "They risk suspension from Google Maps and confuse prospective patients.",
  },
  {
    title: "Thin service and location pages",
    desc: "They give patients little reason to trust or contact your clinic.",
  },
  {
    title: "Unverified practitioner credentials",
    desc: "They damage patient trust and may breach medical advertising rules.",
  },
  {
    title: "Unsupported medical claims",
    desc: "They mislead patients and invite serious regulatory problems.",
  },
  {
    title: "Fake patient reviews",
    desc: "They violate platform policies and completely erode patient trust.",
  },
  {
    title: "Neglecting mobile visitors",
    desc: "Many patients will leave if making contact or calling is difficult.",
  },
  {
    title: "Poor internal linking",
    desc: "Useful treatment and doctor pages stay buried and hard to discover.",
  },
  {
    title: "Ignoring technical SEO",
    desc: "Good healthcare pages may not be indexed or crawled by search engines.",
  },
  {
    title: "Measuring traffic without relevant inquiries",
    desc: "You cannot tell what is genuinely working without tracking patient actions.",
  },
  {
    title: "Publishing medical content without review",
    desc: "Clinical errors can directly harm readers and trigger algorithm demotions.",
  },
  {
    title: "Exposing confidential patient information",
    desc: "This is a serious privacy failure under medical confidentiality and DPDPA 2023.",
  },
];

// 12 Comprehensive FAQs matching Section E Schema Word-for-Word
const clinicFaqs = [
  {
    q: "What are clinic SEO services?",
    a: "Clinic SEO services improve a healthcare website's discoverability through technical optimization, local SEO, service-page content, practitioner information, reputation management and measurement, so relevant patients can find the clinic and make contact.",
  },
  {
    q: "Why does a clinic need SEO?",
    a: "People often search for a service or a nearby provider before choosing a clinic. SEO helps your clinic appear for relevant searches with accurate information, though it cannot guarantee more patients.",
  },
  {
    q: "How much do clinic SEO services cost in India?",
    a: "Costs depend on scope, number of locations, competition, website condition, content needs and reporting requirements. DigLip7 does not publish fixed package prices here; a quote follows a review of your clinic and website.",
  },
  {
    q: "How long does clinic SEO take to show results?",
    a: "There is no fixed timeline. Technical and profile corrections may be reflected sooner, while stronger visibility depends on local competition, website condition, content quality and implementation speed.",
  },
  {
    q: "What is local SEO for clinics?",
    a: "It is the work of improving visibility for location-based searches through accurate business details, a well-managed Google Business Profile, locally relevant pages, honest reviews and consistent contact information.",
  },
  {
    q: "Can SEO help clinics receive more appointment inquiries?",
    a: "It can help relevant people find clear service pages with easy contact options. Whether they inquire depends on page quality, trust, availability and tracking, and no number of inquiries can be promised.",
  },
  {
    q: "How does Google Business Profile optimization help clinics?",
    a: "An accurate, complete profile helps people see correct categories, services, hours, contact details and booking links. It supports local discovery but cannot guarantee a particular Google Maps position.",
  },
  {
    q: "Is healthcare SEO different from general SEO?",
    a: "Yes in emphasis. Healthcare demands accurate medical information, verified credentials, careful claims, patient trust and privacy safeguards on top of standard technical and content work.",
  },
  {
    q: "Should every clinic specialty have its own service page?",
    a: "Where the clinic genuinely offers the service, a dedicated page usually serves patients better than one combined page. Each page should hold useful, accurate, distinct information rather than repeated text.",
  },
  {
    q: "Can SEO help a clinic with multiple locations?",
    a: "Yes, if each location is a real clinic. Separate location pages, matching business profiles and consistent contact details help; copied pages for places without a clinic do not.",
  },
  {
    q: "How can a clinic measure SEO performance?",
    a: "Track relevant clicks and impressions, service and location page visits, profile metrics, call and form events and qualified inquiries. Where reliably recorded, compare these with confirmed bookings.",
  },
  {
    q: "Is medical content review important for clinic SEO?",
    a: "Yes. Medical content should be accurate and, where needed, reviewed by an appropriately qualified healthcare professional before publishing. Avoid unverified diagnoses, treatment promises or unsupported clinical claims.",
  },
];

const IndiaClinicSEO = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const canonicalUrl = "https://diglip7.com/india/clinic-seo-services/";

  // Block 2: Page-level structured data (WebPage, BreadcrumbList, Service, FAQPage)
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://diglip7.com/india/clinic-seo-services/#webpage",
        url: "https://diglip7.com/india/clinic-seo-services/",
        name: "Clinic SEO Services in India | DigLip7",
        description:
          "Improve your clinic's search visibility with Clinic SEO Services in India by DigLip7. Local SEO, medical content, website optimization & inquiry tracking.",
        inLanguage: "en-IN",
        isPartOf: {
          "@id": "https://diglip7.com/#website",
        },
        publisher: {
          "@id": "https://diglip7.com/#organization",
        },
        about: {
          "@id": "https://diglip7.com/india/clinic-seo-services/#service",
        },
        breadcrumb: {
          "@id": "https://diglip7.com/india/clinic-seo-services/#breadcrumb",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://diglip7.com/india/clinic-seo-services/#breadcrumb",
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
            name: "India SEO Services",
            item: "https://diglip7.com/india/seo-services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Clinic SEO Services in India",
            item: "https://diglip7.com/india/clinic-seo-services/",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://diglip7.com/india/clinic-seo-services/#service",
        name: "Clinic SEO Services in India",
        serviceType: "Clinic search engine optimization",
        url: "https://diglip7.com/india/clinic-seo-services/",
        description:
          "SEO services for clinics in India, covering local SEO, Google Business Profile optimization, clinic website and service-page optimization, healthcare content planning and inquiry measurement.",
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        provider: {
          "@id": "https://diglip7.com/#organization",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://diglip7.com/india/clinic-seo-services/#faq",
        mainEntity: clinicFaqs.map((faq) => ({
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
    <div className="w-full bg-white font-sans text-gray-800 antialiased selection:bg-cyan-700 selection:text-white">
      {/* Dynamic SEO Meta & Schema Head Injection */}
      <SEO
        title="Clinic SEO Services in India | DigLip7"
        exactTitle={true}
        description="Improve your clinic's search visibility with Clinic SEO Services in India by DigLip7. Local SEO, medical content, website optimization & inquiry tracking."
        canonical={canonicalUrl}
        ogType="website"
        ogTitle="Clinic SEO Services in India | DigLip7"
        ogDescription="Improve your clinic's search visibility with Clinic SEO Services in India by DigLip7. Local SEO, medical content, website optimization & inquiry tracking."
        ogImage="https://diglip7.com/images/india/clinic-seo/clinic-seo-services-india.webp"
        ogImageAlt="Clinic SEO strategy for local search visibility in India"
        twitterCard="summary_large_image"
        twitterTitle="Clinic SEO Services in India | DigLip7"
        twitterDescription="Improve your clinic's search visibility with Clinic SEO Services in India by DigLip7. Local SEO, medical content, website optimization & inquiry tracking."
        twitterImage="https://diglip7.com/images/india/clinic-seo/clinic-seo-services-india.webp"
        twitterImageAlt="Clinic SEO strategy for local search visibility in India"
        robots="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        keywords={null}
        schema={pageJsonLd}
      />

      {/* Breadcrumb Navigation */}
      <div className="pt-24 sm:pt-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-50/70 via-slate-50 to-teal-50/50 border-b border-cyan-100/70">
        <nav
          aria-label="Breadcrumb"
          className="max-w-7xl mx-auto flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-gray-600 pb-3"
        >
          {breadcrumbTrail.map((crumb, i) => (
            <span key={crumb.label} className="flex items-center gap-1.5">
              {i === 0 ? (
                <Home className="w-3.5 h-3.5 text-cyan-800" />
              ) : (
                <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              )}
              {i === breadcrumbTrail.length - 1 ? (
                <span className="font-semibold text-cyan-950">
                  {crumb.label}
                </span>
              ) : (
                <Link
                  to={crumb.href}
                  className="hover:text-cyan-800 transition-colors"
                >
                  {crumb.label}
                </Link>
              )}
            </span>
          ))}
        </nav>
      </div>

      {/* Hero Section */}
      <div className="pt-8 sm:pt-12 pb-16 lg:pb-24 bg-gradient-to-r from-cyan-50/70 via-slate-50 to-teal-50/50 min-h-[85vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 xl:px-12 relative overflow-hidden">
        {/* Subtle Decorative Ambient Lighting */}
        <motion.div
          className="absolute top-10 left-8 w-32 h-32 bg-cyan-200/40 rounded-full blur-3xl pointer-events-none"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-12 right-10 w-40 h-40 bg-teal-200/40 rounded-full blur-3xl pointer-events-none"
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="flex flex-col lg:flex-row items-center w-full max-w-7xl mx-auto gap-10 lg:gap-14 relative z-10">
          {/* Left Column: Heading, Exact Intro Copy, Direct CTAs */}
          <div className="w-full lg:w-[58%] text-center lg:text-left">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/90 backdrop-blur-md border border-cyan-300/80 rounded-full text-cyan-950 font-bold text-xs uppercase tracking-wider mb-5 shadow-xs">
              <HeartPulse className="w-3.5 h-3.5 text-cyan-700" />
              <span>
                Healthcare &amp; Clinic SEO Agency in India • Local Search Visibility
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] text-slate-900 tracking-tight mb-6">
              Clinic SEO Services in India for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-800 via-teal-800 to-slate-900">
                Better Local Search Visibility
              </span>
            </h1>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 font-normal">
              When someone searches for a dentist, a physiotherapist, or a skin specialist near them, the clinics that appear are usually those with clear service pages, accurate details, and a well-managed local presence. Clinic SEO helps your practice become easier to find through local search visibility, clinic website optimization, Google Business Profile management, and service-specific landing pages.
            </p>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              The aim is relevant patient inquiries, backed by performance measurement that shows what is working. SEO supports discovery; results depend on competition, location, website condition and implementation, and nothing here promises rankings or patient numbers.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3.5 sm:gap-4">
              <Link to="/contact">
                <button
                  type="button"
                  className="px-7 sm:px-8 py-3.5 sm:py-4 bg-cyan-900 hover:bg-cyan-950 text-white text-sm sm:text-base font-bold rounded-full shadow-lg shadow-cyan-950/20 hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 cursor-pointer"
                >
                  <span>Discuss Your Clinic SEO Strategy</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link to="/contact">
                <button
                  type="button"
                  className="px-6 sm:px-7 py-3.5 sm:py-4 bg-white hover:bg-cyan-50 text-cyan-950 text-sm sm:text-base font-bold rounded-full border border-cyan-300/80 shadow-xs hover:shadow-md transition-all duration-300 transform hover:scale-105 flex items-center gap-2 cursor-pointer"
                >
                  <span>Request an SEO Consultation</span>
                </button>
              </Link>
              <a
                href="https://wa.me/919650608788"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-sm font-semibold transition-transform duration-200 hover:scale-105 shadow-sm"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive 3D Visual & Feature Card */}
          <div className="w-full lg:w-[42%] flex flex-col items-center">
            <Card3D className="w-full max-w-lg space-y-4">
              <ClinicSEOImage
                {...clinicImages.hero}
                priority={true}
                icon={Stethoscope}
                badge="Hero Overview"
                className="shadow-xl"
              />
              <div className="bg-white/95 backdrop-blur-xl border border-cyan-200/90 rounded-2xl p-6 sm:p-7 shadow-xl shadow-cyan-950/10 space-y-5">
                <div className="flex items-center justify-between border-b border-cyan-100 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-cyan-900 text-white flex items-center justify-center font-bold text-sm">
                      D7
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-cyan-950">
                        Clinic Discovery Engine
                      </h4>
                      <p className="text-[11px] text-gray-500">
                        Local SEO &amp; Patient Inquiries
                      </p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                    Clinical E-E-A-T
                  </span>
                </div>

                {/* Key Metric Highlights */}
                <div className="grid grid-cols-2 gap-3 text-left">
                  <div className="p-3 bg-cyan-50/70 rounded-xl border border-cyan-100">
                    <span className="text-[11px] text-cyan-800 font-medium">
                      Local Pack Focus
                    </span>
                    <p className="text-sm font-bold text-cyan-950 mt-0.5">
                      Catchment Area
                    </p>
                  </div>
                  <div className="p-3 bg-cyan-50/70 rounded-xl border border-cyan-100">
                    <span className="text-[11px] text-cyan-800 font-medium">
                      Primary Outcome
                    </span>
                    <p className="text-sm font-bold text-cyan-950 mt-0.5">
                      Qualified Inquiries
                    </p>
                  </div>
                  <div className="p-3 bg-cyan-50/70 rounded-xl border border-cyan-100">
                    <span className="text-[11px] text-cyan-800 font-medium">
                      Trust Architecture
                    </span>
                    <p className="text-sm font-bold text-cyan-950 mt-0.5">
                      Doctor Profiles
                    </p>
                  </div>
                  <div className="p-3 bg-cyan-50/70 rounded-xl border border-cyan-100">
                    <span className="text-[11px] text-cyan-800 font-medium">
                      Ethics Standard
                    </span>
                    <p className="text-sm font-bold text-cyan-950 mt-0.5">
                      Zero False Claims
                    </p>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs text-gray-600 pt-2 border-t border-cyan-100">
                  <div className="flex items-center gap-2 text-cyan-950 font-medium">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Google Business Profile &amp; Maps synchronization</span>
                  </div>
                  <div className="flex items-center gap-2 text-cyan-950 font-medium">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Dedicated pages for every medical specialty &amp; doctor</span>
                  </div>
                  <div className="flex items-center gap-2 text-cyan-950 font-medium">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>DPDPA 2023 compliant patient privacy safeguards</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="w-full py-2.5 px-4 bg-cyan-900 hover:bg-cyan-950 text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Discuss Clinic SEO Strategy</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </Card3D>
          </div>
        </div>
      </div>

      {/* Section: Why Clinics Need Specialized SEO */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-gray-200/70">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-800 bg-cyan-100/70 px-3 py-1 rounded-full border border-cyan-200">
              Healthcare Trust &amp; Local Proximity
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
              Why Clinics Need Specialized SEO
            </h2>
            <p className="text-gray-700 text-sm sm:text-base mt-3 leading-relaxed">
              Healthcare searches are local, and trust matters more than in most industries because people are choosing someone to look after their health. A clinic needs a strategy built around:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {whyClinicsNeedSpecialized.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200/90 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-800 flex items-center justify-center group-hover:bg-cyan-900 group-hover:text-white transition-colors duration-200">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-800 bg-cyan-50/80 px-2.5 py-1 rounded-full border border-cyan-100">
                        {item.badge}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Core Philosophy Callout Box */}
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-cyan-950 via-slate-900 to-teal-950 text-white rounded-2xl p-6 sm:p-8 shadow-md border border-cyan-800/80">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 text-cyan-300 flex items-center justify-center shrink-0 mt-0.5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-cyan-200 mb-1.5">
                  Accuracy and Clarity Decide Patient Contact
                </h4>
                <p className="text-xs sm:text-sm text-cyan-100/90 leading-relaxed">
                  Visibility only matters if it leads to real inquiries, and ranking higher does not automatically bring more patients. Accuracy and clarity decide whether a visitor makes contact. A patient who finds wrong opening hours or an unclear booking route will simply try the next clinic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: What Are Clinic SEO Services? (AEO Direct Answer) */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-800 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200">
              Definition &amp; Direct Model
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
              What Are Clinic SEO Services?
            </h2>
          </div>

          <div className="bg-gradient-to-br from-cyan-950 via-slate-900 to-teal-950 text-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-base sm:text-lg md:text-xl text-cyan-100/90 leading-relaxed font-normal">
                Clinic SEO services improve a healthcare website&apos;s discoverability through technical optimization, local SEO, service-page content, practitioner information, reputation management, and performance measurement. The goal is to help people searching for healthcare services find accurate clinic information and a clear way to make contact, without promising specific rankings or patient numbers.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-8 border-t border-cyan-800/80">
                <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15">
                  <MapPin className="w-5 h-5 text-cyan-300 mb-2" />
                  <h4 className="text-sm font-bold text-white">Local Map Packs</h4>
                  <p className="text-xs text-cyan-200/80 mt-1">
                    Google Business Profile, accurate NAP details, and neighbourhood discovery.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15">
                  <Stethoscope className="w-5 h-5 text-cyan-300 mb-2" />
                  <h4 className="text-sm font-bold text-white">Doctor Credentials</h4>
                  <p className="text-xs text-cyan-200/80 mt-1">
                    Verified qualifications, state council registration, and clinical focus areas.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15">
                  <Layers className="w-5 h-5 text-cyan-300 mb-2" />
                  <h4 className="text-sm font-bold text-white">Service Silos</h4>
                  <p className="text-xs text-cyan-200/80 mt-1">
                    Dedicated procedure pages answering patient treatment questions.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15">
                  <PhoneCall className="w-5 h-5 text-cyan-300 mb-2" />
                  <h4 className="text-sm font-bold text-white">Inquiry Attribution</h4>
                  <p className="text-xs text-cyan-200/80 mt-1">
                    Tracking tap-to-calls, WhatsApp triggers, and verified consultation forms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: 12 Clinic SEO Services Offered by DigLip7 */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-800 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200">
              End-to-End Clinical Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
              Clinic SEO Services Offered by DigLip7
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-3 leading-relaxed">
              We provide 12 comprehensive, ethically compliant healthcare SEO services tailored to modern dental, dermatology, multispecialty, physiotherapy, and wellness clinics across India:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {clinicServices.map((service, idx) => {
              const ServiceIcon = service.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-gray-200/90 p-6 sm:p-7 shadow-xs hover:shadow-xl hover:border-cyan-300 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-50 rounded-bl-full -z-0 transition-transform group-hover:scale-110" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-cyan-900 text-white flex items-center justify-center font-bold text-sm shadow-md shadow-cyan-950/20 group-hover:bg-cyan-800 transition-colors">
                        <ServiceIcon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-bold text-cyan-800 bg-cyan-50 px-2.5 py-1 rounded-full border border-cyan-200">
                        {service.number}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-cyan-900 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal mb-5">
                      {service.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex flex-col gap-2 relative z-10">
                    <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">
                      Technical Focus:
                    </span>
                    <span className="text-xs font-medium text-cyan-950 bg-cyan-50/60 p-2 rounded-lg border border-cyan-100">
                      {service.focus}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section: Clinical Search Architecture & Visual Spotlights (Services 2, 4, 6, 7, 10) */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-cyan-50/20 to-white border-b border-gray-200/70">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-800 bg-cyan-100/70 px-3 py-1 rounded-full border border-cyan-200">
              Visual Architecture Spotlights
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
              Clinical Search Architecture in Detail
            </h2>
            <p className="text-gray-700 text-sm sm:text-base mt-3 leading-relaxed">
              Explore how local search visibility, responsive clinic website structure, verified practitioner profiles, reviewed healthcare content, and mobile patient pathways work together:
            </p>
          </div>

          {/* Module 1: Service 2 - Local SEO and Neighbourhood Discovery (Image 2) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white p-6 sm:p-10 rounded-3xl border border-gray-200 shadow-sm">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-50 text-cyan-800 rounded-full text-xs font-bold border border-cyan-200">
                <MapPin className="w-3.5 h-3.5 text-cyan-700" />
                <span>Service 02 • Local Map Packs &amp; Catchment Discovery</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Local SEO &amp; Neighbourhood Discovery for Clinics
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                When patients need a nearby clinic, they search with immediate proximity in mind. We optimize Google Business Profiles with accurate primary categories, exact address verification, consultation hours, and real clinic imagery, helping clinics establish genuine relevance in their local neighbourhood.
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Google Business Profile synchronization &amp; category alignment</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Consistent Name, Address, and Phone (NAP) citations across healthcare registries</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Location-relevant clinic landing pages without spam doorway pages</span>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-6">
              <ClinicSEOImage
                {...clinicImages.localSeo}
                icon={MapPin}
                badge="Service 02: Local SEO"
                className="shadow-md"
              />
            </div>
          </div>

          {/* Module 2: Service 4 - Clinic Website Optimization (Image 3) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white p-6 sm:p-10 rounded-3xl border border-gray-200 shadow-sm">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <ClinicSEOImage
                {...clinicImages.websiteOptimization}
                icon={Globe}
                badge="Service 04: Website Architecture"
                className="shadow-md"
              />
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-50 text-cyan-800 rounded-full text-xs font-bold border border-cyan-200">
                <Globe className="w-3.5 h-3.5 text-cyan-700" />
                <span>Service 04 • Fast, Mobile-Ready Patient Experience</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Clinic Website Optimization with Responsive Pages &amp; Clear Navigation
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                A clinic website should be fast, accessible, and structured so patients can find answers within seconds. We design clear navigation silos that separate distinct procedures, display doctor schedules, and provide accessible appointment booking routes across all devices.
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Core Web Vitals optimization for swift mobile loading</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Condition-specific landing pages with distinct clinical intent</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Accessible font hierarchy, contrast compliance, and intuitive menus</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Module 3: Services 6 & 7 - Doctor Profiles & Healthcare Content Strategy (Images 4 & 5) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white p-6 sm:p-10 rounded-3xl border border-gray-200 shadow-sm">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-50 text-cyan-800 rounded-full text-xs font-bold border border-cyan-200">
                <Award className="w-3.5 h-3.5 text-cyan-700" />
                <span>Services 06 &amp; 07 • Medical Credentials &amp; Content Authority</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Doctor Profile Optimization &amp; Reviewed Medical Content Strategy
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Trust is fundamental in healthcare search. We build verified practitioner profiles highlighting verified degrees (MBBS, MD, BDS, MDS, BAMS), State Medical Council registration, and specialty focus areas. Combined with medically reviewed educational content, this establishes genuine clinical E-E-A-T.
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Verified doctor credentials, degrees, and council registration numbers</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Pre-publication review by qualified medical professionals</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Patient education articles answering common treatment questions honestly</span>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ClinicSEOImage
                {...clinicImages.doctorProfile}
                icon={Award}
                badge="Service 06: Profiles"
                className="shadow-md"
              />
              <ClinicSEOImage
                {...clinicImages.contentStrategy}
                icon={FileText}
                badge="Service 07: Content"
                className="shadow-md"
              />
            </div>
          </div>

          {/* Module 4: Service 10 - Mobile Patient Journey & Appointment Conversion (Image 7) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white p-6 sm:p-10 rounded-3xl border border-gray-200 shadow-sm">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <ClinicSEOImage
                {...clinicImages.patientJourney}
                icon={PhoneCall}
                badge="Service 10: Patient Journey"
                className="shadow-md"
              />
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-50 text-cyan-800 rounded-full text-xs font-bold border border-cyan-200">
                <PhoneCall className="w-3.5 h-3.5 text-cyan-700" />
                <span>Service 10 • Friction-Free Appointment Conversion</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Patient Journey from Local Search to Appointment Contact
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Most patients discover clinics on mobile devices while seeking immediate care. We optimize the entire mobile pathway—from Google Maps directions and tap-to-call buttons to streamlined WhatsApp booking triggers—ensuring patients can schedule consultations without frustration.
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Sticky mobile call-to-action bar with direct phone &amp; WhatsApp links</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Fast, minimal-field consultation inquiry forms respecting patient privacy</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Clear clinic location maps with transit and parking instructions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Local SEO for Clinics in Indian Cities */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-gray-200/70">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-800 bg-cyan-100/70 px-3 py-1 rounded-full border border-cyan-200">
              Location-Specific Relevance
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
              Local SEO for Clinics in Indian Cities
            </h2>
            <p className="text-gray-700 text-sm sm:text-base mt-3 leading-relaxed">
              Local SEO adapts to the city, neighbourhood or service area a clinic actually serves. These examples are illustrative, not verified clients or ranking results:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {indianCitiesLocalSEO.map((cityItem, idx) => (
              <div
                key={idx}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200/90 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-cyan-800 bg-cyan-50 px-2.5 py-1 rounded-full border border-cyan-200">
                      {cityItem.badge}
                    </span>
                    <MapPin className="w-4 h-4 text-cyan-700" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    {cityItem.city}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-900 mb-3">
                    Focus: {cityItem.specialtyFocus}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    {cityItem.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Sixth Callout: Doorway Pages Warning */}
            <div className="bg-gradient-to-br from-rose-950 to-slate-900 p-6 sm:p-7 rounded-2xl border border-rose-800 text-white flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/10 text-rose-300 flex items-center justify-center mb-4">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                  Zero Spam Doorway Pages
                </h3>
                <p className="text-xs sm:text-sm text-rose-100/90 leading-relaxed">
                  Genuine location-specific content describes a real clinic, its services, its practitioners and how patients reach it. A doorway page does the opposite: it repeats the same text with another place name to target more searches. Doorway pages offer patients nothing and should be avoided.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-rose-800/80 flex items-center gap-2 text-xs text-rose-300 font-semibold">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Strictly real physical clinic locations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Clinic SEO Across Different Specialties (Comparison Table) */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-800 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200">
              Specialty-Specific Focus
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
              Clinic SEO Across Different Specialties
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-3 leading-relaxed">
              Priorities differ by specialty. Healthcare claims, content requirements and professional credentials must reflect the actual specialty and applicable regulations:
            </p>
          </div>

          {/* Responsive Comparison Table */}
          <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-xs bg-white">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white border-b border-slate-800">
                    <th className="py-4 px-5 font-bold uppercase tracking-wider text-xs">
                      Clinic type
                    </th>
                    <th className="py-4 px-5 font-bold uppercase tracking-wider text-xs text-cyan-300">
                      Relevant SEO priorities
                    </th>
                    <th className="py-4 px-5 font-bold uppercase tracking-wider text-xs">
                      Useful website content
                    </th>
                    <th className="py-4 px-5 font-bold uppercase tracking-wider text-xs text-emerald-300">
                      Potential conversion action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {clinicSpecialtyTable.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-cyan-50/50 transition-colors duration-150"
                    >
                      <td className="py-4 px-5 font-bold text-slate-900 align-top">
                        <span
                          className={`inline-block px-2.5 py-1 rounded-lg border text-xs font-semibold ${row.badgeColor}`}
                        >
                          {row.type}
                        </span>
                      </td>
                      <td className="py-4 px-5 text-slate-800 font-medium align-top leading-relaxed">
                        {row.priorities}
                      </td>
                      <td className="py-4 px-5 text-gray-700 leading-relaxed align-top">
                        {row.content}
                      </td>
                      <td className="py-4 px-5 text-cyan-950 font-semibold align-top bg-cyan-50/30">
                        {row.action}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-cyan-50/40 border-t border-gray-200 text-xs text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-2">
              <p className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-700 shrink-0" />
                <span>
                  Each specialty page features verified practitioner details, clinical explanations, and direct booking routes.
                </span>
              </p>
              <Link
                to="/contact"
                className="text-cyan-800 font-bold hover:underline"
              >
                Plan Your Specialty SEO Strategy &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Our Clinic SEO Process (10 Steps) */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-gray-200/70">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-800 bg-cyan-100/70 px-3 py-1 rounded-full border border-cyan-200">
              Systematic Execution
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
              Our Clinic SEO Process
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-3 leading-relaxed">
              A structured 10-step methodology designed for sustainable clinic discoverability and patient trust:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8">
            {clinicProcessSteps.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs hover:border-cyan-300 transition-colors flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-900 text-white flex items-center justify-center font-bold text-sm shrink-0">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-2 leading-relaxed">
                    {item.detail}
                  </p>
                  <span className="inline-block text-xs font-semibold text-cyan-900 bg-cyan-50 px-2.5 py-1 rounded-md border border-cyan-100">
                    <strong>Outcome:</strong> {item.outcome}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-cyan-100/60 border border-cyan-200 text-center text-xs sm:text-sm text-slate-800 max-w-2xl mx-auto">
            <span className="font-semibold text-cyan-950">Timeline Notice:</span> No fixed timelines are promised, because scope and starting conditions vary.
          </div>
        </div>
      </section>

      {/* Section: How Clinic SEO Performance Is Measured */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-800 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200">
                Measurement &amp; Attribution
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                How Clinic SEO Performance Is Measured
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Useful measures include relevant organic clicks and impressions, visibility for specialty and local queries, Google Business Profile metrics where available, visits to service and location pages, click-to-call and appointment-form events, qualified inquiries and, when reliably recorded, confirmed bookings. Technical errors, indexation, mobile performance and usability matter too. A page that attracts many readers but no inquiries may be less valuable than a service page visited by people ready to make contact.
              </p>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Attribution depends on how analytics is configured. Patient information must be handled with appropriate privacy and security safeguards, and reporting should avoid collecting more health data than necessary.
              </p>

              {/* Patient Privacy Compliance Notice */}
              <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200">
                <div className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-amber-950">
                      Patient Privacy &amp; DPDPA 2023 Compliance
                    </h4>
                    <p className="text-xs sm:text-sm text-amber-900 mt-1 leading-relaxed">
                      We never transmit patient medical symptoms, diagnoses, or confidential health details into analytics URLs or advertising tracking pixels. All patient management systems and EHR portals remain strictly isolated behind secure authentication and are kept completely unindexed.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-800">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Click-to-call phone event tracking</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-800">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>WhatsApp inquiry conversion triggers</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-800">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Google Business Profile directions &amp; calls</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-800">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Validated GA4 generate_lead event fire</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5">
              <ClinicSEOImage
                {...clinicImages.analytics}
                icon={BarChart3}
                badge="Measurement &amp; Analytics"
                className="shadow-xl"
              />
              <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-mono font-bold text-cyan-300">
                      Clinical Tracking Matrix
                    </span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Validated GTM/GA4
                  </span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/60 flex items-center justify-between">
                    <div>
                      <span className="text-gray-400 block text-[11px] mb-0.5">
                        01. Primary Conversion Event
                      </span>
                      <p className="text-cyan-200">click_to_call (Mobile Header &amp; Sticky Bar)</p>
                    </div>
                    <span className="text-emerald-400 font-bold text-xs">Active</span>
                  </div>
                  <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/60 flex items-center justify-between">
                    <div>
                      <span className="text-gray-400 block text-[11px] mb-0.5">
                        02. Direct WhatsApp Trigger
                      </span>
                      <p className="text-emerald-200">whatsapp_click (Verified Reception OPD)</p>
                    </div>
                    <span className="text-emerald-400 font-bold text-xs">Active</span>
                  </div>
                  <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/60 flex items-center justify-between">
                    <div>
                      <span className="text-gray-400 block text-[11px] mb-0.5">
                        03. Consultation Form Lead
                      </span>
                      <p className="text-teal-200">generate_lead (Confirmed Success Only)</p>
                    </div>
                    <span className="text-emerald-400 font-bold text-xs">Validated</span>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-gray-400 border-t border-slate-800 flex items-center justify-between">
                  <span>Tracked Inquiries vs Verified Visits</span>
                  <span className="text-cyan-300">Transparent Attribution</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: How Long Does Clinic SEO Take? */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-gray-200/70">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-800 bg-cyan-100/70 px-3 py-1 rounded-full border border-cyan-200">
              Realistic Expectations
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
              How Long Does Clinic SEO Take?
            </h2>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-xs space-y-4">
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Progress depends on website history and technical condition, local competition, clinic location and specialty, the completeness of service pages, business profile accuracy, existing reputation and authority, and how quickly content and fixes are implemented. Some corrections, such as fixing wrong contact details, may be reflected sooner than broader gains in visibility. We do not guarantee ranking dates or immediate patient acquisition.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-100 text-left">
              <div className="p-4 bg-cyan-50/60 rounded-xl border border-cyan-100">
                <span className="text-xs font-bold text-cyan-900 uppercase tracking-wider block mb-1">
                  Phase 1 • Technical &amp; Profile
                </span>
                <p className="text-xs text-gray-600">
                  Corrections to Google Business Profile, NAP accuracy, and urgent crawl errors reflect earliest.
                </p>
              </div>
              <div className="p-4 bg-cyan-50/60 rounded-xl border border-cyan-100">
                <span className="text-xs font-bold text-cyan-900 uppercase tracking-wider block mb-1">
                  Phase 2 • Service Pages
                </span>
                <p className="text-xs text-gray-600">
                  Procedure page restructuring and practitioner bio optimizations build indexed relevance.
                </p>
              </div>
              <div className="p-4 bg-cyan-50/60 rounded-xl border border-cyan-100">
                <span className="text-xs font-bold text-cyan-900 uppercase tracking-wider block mb-1">
                  Phase 3 • Sustained Authority
                </span>
                <p className="text-xs text-gray-600">
                  Catchment area prominence, local reviews, and clinical content depth consolidate visibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Clinic SEO vs Paid Advertising */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-800 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200">
                Channel Comparison
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Clinic SEO vs Paid Advertising
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Many clinics use both, and the right mix depends on goals and budget. The two can complement each other. SEO builds lasting local presence, while paid campaigns suit time-limited promotions. Neither is always better, and our{" "}
                <Link
                  to="/digital-market/PPC-Advertising"
                  className="text-cyan-800 font-bold hover:underline"
                >
                  PPC advertising
                </Link>{" "}
                work can sit alongside organic efforts.
              </p>

              <div className="bg-cyan-50 border border-cyan-200 p-5 rounded-2xl">
                <div className="flex items-start gap-3">
                  <HeartPulse className="w-5 h-5 text-cyan-800 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-cyan-950">
                      Complementary Channel Strategy
                    </h4>
                    <p className="text-xs sm:text-sm text-cyan-900 mt-1 leading-relaxed">
                      While paid ads give instant search visibility during new clinic launches, SEO establishes permanent local prominence that continues working without per-click media fees.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-xs bg-white">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="py-3.5 px-4 font-bold uppercase tracking-wider text-xs">
                          Factor
                        </th>
                        <th className="py-3.5 px-4 font-bold uppercase tracking-wider text-xs text-cyan-300">
                          Clinic SEO
                        </th>
                        <th className="py-3.5 px-4 font-bold uppercase tracking-wider text-xs text-gray-300">
                          Paid advertising
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {clinicVsPpcComparison.map((row, idx) => (
                        <tr
                          key={idx}
                          className="hover:bg-slate-50 transition-colors"
                        >
                          <td className="py-3 px-4 font-bold text-slate-900 align-top">
                            {row.factor}
                          </td>
                          <td className="py-3 px-4 text-cyan-950 bg-cyan-50/40 align-top font-medium leading-relaxed">
                            {row.seo}
                          </td>
                          <td className="py-3 px-4 text-gray-600 align-top leading-relaxed">
                            {row.paid}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Common Clinic SEO Mistakes (13 Pitfalls) */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-gray-200/70">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-800 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
              Pitfalls to Avoid
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
              Common Clinic SEO Mistakes
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-3 leading-relaxed">
              Healthcare marketing carries unique ethical and legal responsibilities. Avoid these 13 frequent mistakes:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {clinicCommonMistakes.map((mistake, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl border border-gray-200 bg-white hover:shadow-md transition-all duration-200 flex items-start gap-3.5"
              >
                <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1 leading-snug">
                    {mistake.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed font-normal">
                    {mistake.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Why Consider DigLip7 for Clinic SEO? */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-800 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200">
              Agency Values &amp; Transparency
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
              Why Consider DigLip7 for Clinic SEO?
            </h2>
          </div>

          <div className="bg-slate-50 border border-gray-200 rounded-2xl p-6 sm:p-8 space-y-4 max-w-4xl mx-auto text-gray-700 text-sm sm:text-base leading-relaxed">
            <p>
              DigLip7 approaches clinic SEO through technical SEO, local search strategy, healthcare content planning, service-page optimization and transparent reporting. The scope can be tailored to your specialty, locations, website and business objectives, and sits within our wider{" "}
              <Link
                to="/india/seo-services"
                className="text-cyan-800 font-bold hover:underline"
              >
                India SEO services
              </Link>
              .
            </p>
            <p>
              We do not guarantee rankings or present unverifiable results. You should always know what is changing, why, and how it is measured. Clinic owners and practice managers also stay in control of what is published, which matters when medical accuracy and professional credentials are involved.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-200 text-left">
              <div className="p-3.5 bg-white rounded-xl border border-gray-200">
                <ShieldCheck className="w-5 h-5 text-cyan-800 mb-1.5" />
                <h4 className="text-xs font-bold text-slate-900">Clinical Control</h4>
                <p className="text-[11px] text-gray-600 mt-0.5">
                  Practice managers approve clinical content and credential representations.
                </p>
              </div>
              <div className="p-3.5 bg-white rounded-xl border border-gray-200">
                <MapPin className="w-5 h-5 text-cyan-800 mb-1.5" />
                <h4 className="text-xs font-bold text-slate-900">Catchment Depth</h4>
                <p className="text-[11px] text-gray-600 mt-0.5">
                  Deep hyper-local signals anchor clinics in their genuine patient neighborhoods.
                </p>
              </div>
              <div className="p-3.5 bg-white rounded-xl border border-gray-200">
                <BarChart3 className="w-5 h-5 text-cyan-800 mb-1.5" />
                <h4 className="text-xs font-bold text-slate-900">Transparent Inquiries</h4>
                <p className="text-[11px] text-gray-600 mt-0.5">
                  Clear separation between tracked inquiry leads and confirmed patient visits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Frequently Asked Questions (12 FAQs) */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-gray-200/70">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-800 bg-cyan-100/70 px-3 py-1 rounded-full border border-cyan-200">
              Clear Healthcare Answers
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
              Frequently Asked Questions About Clinic SEO Services in India
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-3 leading-relaxed">
              Direct, transparent answers regarding clinic search engine optimization in India:
            </p>
          </div>

          <div className="space-y-4">
            {clinicFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-200 bg-white hover:bg-slate-50/50"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-cyan-800 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-cyan-900" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 sm:p-6 pt-0 text-xs sm:text-sm text-gray-700 leading-relaxed border-t border-gray-100 bg-slate-50/40">
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

      {/* Final Section: Talk to DigLip7 About Your Clinic's Online Visibility */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-950 via-slate-900 to-teal-950 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-cyan-300 font-bold text-xs uppercase tracking-wider mb-2">
            <Sparkle className="w-3.5 h-3.5 text-cyan-400" />
            <span>Healthcare Discoverability Consultation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Talk to DigLip7 About Your Clinic&apos;s Online Visibility
          </h2>

          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            If you would like to discuss your online visibility and patient inquiry goals, DigLip7 can begin with a review of your website, local presence and priorities. There are no guarantees of top rankings, patient numbers or revenue, only a clear and realistic plan.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
            <Link to="/contact">
              <button
                type="button"
                className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-sm sm:text-base rounded-full shadow-lg shadow-cyan-500/25 transition-all transform hover:scale-105 cursor-pointer flex items-center gap-2"
              >
                <span>Discuss Your Clinic SEO Strategy</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>

            <Link to="/contact">
              <button
                type="button"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base rounded-full border border-white/20 transition-all transform hover:scale-105 cursor-pointer flex items-center gap-2"
              >
                <span>Contact DigLip7</span>
              </button>
            </Link>

            <a
              href="https://wa.me/919650608788"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base rounded-full transition-all transform hover:scale-105 flex items-center gap-2"
            >
              <FaWhatsapp className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="pt-6 text-xs text-cyan-200/70 flex items-center justify-center gap-2">
            <span>DigLip7 Tech Private Limited</span>
            <span>•</span>
            <Link to="/" className="hover:text-white underline">
              DigLip7 Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndiaClinicSEO;
