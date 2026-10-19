import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../../../../components/SEO";
import dentalHeroImg from "../../../../images/dental-seo-dubai.webp";
import dentalClinicPageImg from "../../../../images/dental-clinic-page.webp";
import dentalMeasurementImg from "../../../../images/dental-seo-measurement.webp";
import {
  Search,
  MapPin,
  Building2,
  Sparkles,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Home,
  CheckCircle2,
  AlertTriangle,
  PhoneCall,
  Activity,
  Layers,
  Settings,
  Globe,
  Award,
  Clock,
  MessageSquare,
  FileText,
  Target,
  Smile,
  ShieldCheck,
  TrendingUp,
  Image as ImageIcon,
} from "lucide-react";

// Tooth SVG Icon for Dental Visual Theme
const ToothIcon = ({ className = "w-6 h-6" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 2C8.5 2 6 4 6 7.5C6 9.8 6.7 12 7.2 14.5C7.7 16.8 8.1 19.5 9 21.5C9.4 22.3 10.4 22.2 10.8 21.4C11.5 19.8 11.7 17.5 12 15.5C12.3 17.5 12.5 19.8 13.2 21.4C13.6 22.2 14.6 22.3 15 21.5C15.9 19.5 16.3 16.8 16.8 14.5C17.3 12 18 9.8 18 7.5C18 4 15.5 2 12 2ZM12 4C14.5 4 16 5.5 16 7.5C16 9.3 15.4 11.4 14.9 13.8C14.4 16 14.1 18.5 13.5 20.1C13.2 18.2 12.8 15.8 12.5 14C12.4 13.4 11.6 13.4 11.5 14C11.2 15.8 10.8 18.2 10.5 20.1C9.9 18.5 9.6 16 9.1 13.8C8.6 11.4 8 9.3 8 7.5C8 5.5 9.5 4 12 4Z" />
  </svg>
);

// 3D Perspective Card Component
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
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      transition={{ type: "spring", stiffness: 120, damping: 15 }}
    >
      {children}
    </motion.div>
  );
};

// Reusable Clean Dental SEO Image Component
// If no image is put (src is empty or fails to load), shows the placeholder with the alt name.
// When an image is provided and loads, only the image is displayed with no alt text shown on the UI.
const DentalSEOImage = ({
  src,
  alt,
  width = 1200,
  height = 630,
  aspect = "aspect-[16/9]",
  priority = false,
  className = "",
  imgClassName = "w-full h-full object-cover object-center",
}) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [src]);

  const showPlaceholder = !src || hasError;

  return (
    <div
      className={`relative w-full rounded-2xl overflow-hidden bg-gradient-to-br from-teal-50/40 via-white to-gray-50 border border-teal-100/80 shadow-md flex items-center justify-center ${aspect} ${className}`}
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
        <div className="p-8 text-center text-sm font-medium text-teal-900/70 select-none flex flex-col items-center justify-center gap-3 w-full h-full bg-gradient-to-b from-white/90 to-teal-50/50">
          <div className="w-12 h-12 rounded-full bg-teal-100/70 text-teal-700 flex items-center justify-center shadow-xs">
            <ToothIcon className="w-6 h-6" />
          </div>
          <span className="max-w-xs leading-relaxed font-semibold text-slate-700">{alt}</span>
        </div>
      )}
    </div>
  );
};

// Image assets configuration
// If src is empty (""), the placeholder with the alt name is displayed on the UI.
// When you put an image path, the image will display and the alt text will not be shown on the UI.
const dentalImages = {
  featured: {
    src: dentalHeroImg || "/images/dental-seo-dubai.webp",
    filename: "dental-seo-dubai.webp",
    alt: "Illustration of a dental SEO strategy for clinics in Dubai",
    width: 1200,
    height: 630,
  },
  supporting1: {
    src: dentalClinicPageImg || "/images/dental-clinic-page.webp",
    filename: "dental-clinic-page.webp",
    alt: "Diagram of treatment and branch page structure for a dental clinic website",
    width: 1200,
    height: 630,
  },
  supporting2: {
    src: dentalMeasurementImg || "/images/dental-seo-measurement.webp",
    filename: "dental-seo-measurement.webp",
    alt: "Checklist of dental SEO metrics including enquiries, calls, and impressions",
    width: 1200,
    height: 630,
  },
};

const breadcrumbTrail = [
  { label: "Home", href: "/" },
  { label: "Dubai SEO Services", href: "/uae/dubai/seo-services" },
  { label: "Dental SEO Dubai", href: "/uae/dubai/dental-seo" },
];

const patientSearchTypes = [
  'A dentist near their location, such as "dentist in Business Bay"',
  "A particular treatment, such as a root canal or crown",
  "A dental emergency, where speed and availability matter most",
  "Cosmetic dentistry, such as whitening or veneers",
  "Dental implants, usually a considered decision made after research",
  "Orthodontic treatment, such as braces or clear aligners",
  "A clinic's name or a specific practitioner",
];

const patientSearchScenarios = [
  "Researching implants: reading about candidacy, process, and consultations before contacting any clinic.",
  "A parent comparing pediatric services: wanting to know how a first visit works and what qualifications practitioners hold.",
  "Looking for an orthodontist near home: a family in Mirdif may prefer a nearby practice over a cross-city trip.",
  "Finding a clinic near work: someone in Business Bay or Deira may need hours that fit around the working day.",
];

const treatmentItems = [
  {
    title: "Dental Implant SEO",
    icon: Target,
    text: "Implant searches are research-heavy. A strong page explains what the treatment involves, general candidacy considerations, how the consultation works, and recovery information reviewed by qualified clinicians, supported by relevant FAQs. It should not suggest every patient is suitable, since that is a clinical decision.",
  },
  {
    title: "Orthodontics and Braces SEO",
    icon: Activity,
    text: "Patients search for braces, clear aligners, consultations, and suitability. Pages can explain the appliances offered and how an initial assessment works. Separate pages for distinct services, backed by an educational article comparing options, usually help more than one page covering everything.",
  },
  {
    title: "Cosmetic Dentistry SEO",
    icon: Sparkles,
    text: "Whitening, veneers, and smile design pages should describe the service actually offered, who performs it, and how a consultation works. Exaggerated aesthetic promises are unhelpful and risky from a regulatory standpoint. Clear, honest descriptions build more trust.",
  },
  {
    title: "Pediatric Dentistry SEO",
    icon: Smile,
    text: "Parents want practical answers: what happens at a first visit, how preventive care is handled, and who treats children and with what qualifications. Plain answers and accurate practitioner details serve families better than a generic services list.",
  },
  {
    title: "Emergency Dental SEO",
    icon: Clock,
    text: "Accuracy matters most here. State genuine availability, current hours, direct contact details, and clear next steps. If the clinic does not offer after-hours care, say so. Telephone links should work properly on mobile.",
  },
];

const localSeoElements = [
  "Google Business Profile accuracy: complete, current, and consistent with the website.",
  "Name, address, phone number, and hours: consistent across the website, profile, and directories.",
  "Accurate categories and service information.",
  "Clinic-specific landing pages: one per real branch, with its own address, hours, practitioners, and services.",
  "Relevant local citations in credible directories.",
  "Genuine review management: encourage honest feedback and respond professionally, respecting patient privacy.",
  "Internal links between treatments and branches.",
  "Mobile-friendly contact options, such as tap-to-call and simple booking forms.",
];

const websiteArchitecturePoints = [
  "Service hubs: one overview page each for general dentistry, orthodontics, and implants.",
  "Treatment pages: detailed pages such as clear aligners or implant consultations, created only where there is substantive content.",
  "Branch pages: one per branch, with address, hours, directions, and available services.",
  "Practitioner profiles: verified qualifications, linked from relevant treatment and branch pages.",
  "Education articles: for example, preparing for an implant consultation, linking back to the treatment page.",
];

const technicalSeoAreas = [
  "Crawlability and indexation: important pages accessible and indexable, low-value pages kept out.",
  "Canonical URLs: signal the preferred version of similar pages.",
  "XML sitemaps: help search engines find treatment, branch, and article pages.",
  "Redirects: preserve value when URLs change.",
  "Mobile usability, page speed, and Core Web Vitals: many patients browse and call from phones.",
  "Image optimization: compressed, well-described images.",
  "Internal linking: logical paths between related pages.",
  "Structured data: accurate markup for clinic, location, and FAQ information that matches visible content.",
  "HTTPS security: important where patients submit enquiry details.",
  "Form and telephone-link functionality: a broken form or phone link quietly loses enquiries.",
];

const contentTopics = [
  "What to ask during an implant consultation",
  "Braces versus clear aligners",
  "How to prepare for a dental appointment",
  "Children's preventive dental care",
  "Questions to ask about cosmetic procedures",
  "General oral hygiene guidance, reviewed by a dental professional",
];

const multilingualConsiderations = [
  "Localized terminology that reflects real search behaviour.",
  "Separate language URLs.",
  "Appropriate hreflang implementation.",
  "Translated metadata and navigation.",
  "Native or qualified editorial review, especially for medical content.",
  "Consistent practitioner and branch details across languages.",
  "Language-specific internal links.",
];

const trustSignals = [
  "Genuine patient reviews, handled with respect for privacy",
  "Clear practitioner biographies reflecting actual experience",
  "Verified professional qualifications",
  "Transparent treatment descriptions",
  "Accurate clinic contact details",
  "Clinical review of educational content where appropriate",
  "Consistent information across the website and business profiles",
];

const performanceMeasures = [
  "Organic impressions, clicks, and click-through rate",
  "Non-brand search visibility and the queries driving visits",
  "Traffic to relevant landing pages",
  "Calls, form submissions, and appointment enquiries",
  "WhatsApp interactions, where tracking is correctly set up",
  "Qualified enquiries and organic conversion rate",
  "Technical health and Core Web Vitals",
];

const commonMistakes = [
  "Using the homepage for every treatment keyword: patients and search engines cannot find specific information.",
  "Creating thin treatment pages: short, repetitive pages add little value.",
  "Duplicating neighbourhood landing pages: swapping place names on identical text is unhelpful and misleading.",
  "Ignoring Google Business Profile information: wrong hours or phone numbers cost enquiries.",
  "Publishing unreviewed medical content: inaccuracies can harm patients and trust.",
  "Buying irrelevant backlinks: risky and rarely useful to patients.",
  "Using generic AI-generated articles without expert review.",
  "Ignoring mobile usability.",
  "Failing to track appointment enquiries.",
  "Making unsupported clinical or marketing claims.",
  "Neglecting redirects after a redesign: old treatment URLs that lead nowhere can erase hard-won visibility.",
];

const agencyEvaluationPoints = [
  "How it researches dental search intent",
  "How it organizes treatment pages",
  "How it approaches local SEO",
  "How it handles technical audits",
  "How it reviews healthcare-related content",
  "How it measures relevant enquiries",
  "How it reports completed work and performance",
  "How it avoids risky link-building and unsupported claims",
];

const diglip7SupportScope = [
  "Website and technical SEO review: crawl, indexation, speed, mobile, and structural issues.",
  "Dental keyword and search-intent research.",
  "Treatment-page planning: which pages are needed and what each should cover.",
  "Local SEO and clinic-location optimization: profiles, branch pages, and citation consistency.",
  "On-page SEO and internal linking.",
  "Patient-focused content planning, with clinical review built in.",
  "Arabic and English SEO considerations: where bilingual content is justified.",
  "Conversion tracking and reporting.",
  "Ongoing review and prioritization as results, competition, and services change.",
];

const faqs = [
  {
    q: "What is dental SEO in Dubai?",
    a: "It is improving a dental clinic's website and online presence so relevant patients can find accurate information. It combines treatment pages, technical SEO, and local search optimization.",
  },
  {
    q: "Why does a dental clinic need SEO?",
    a: "Many patients use search engines to research treatments and find nearby clinics. SEO helps a clinic's services and locations become easier to discover organically.",
  },
  {
    q: "What is included in dental SEO services in Dubai?",
    a: "Typically technical optimization, search-intent research, treatment content, local SEO, internal linking, and measurement. Scope depends on the clinic's site, services, and goals.",
  },
  {
    q: "How long does dental SEO take to show progress?",
    a: "It varies with competition, website condition, content quality, implementation speed, and search demand. No one can promise fixed rankings or deadlines.",
  },
  {
    q: "Should every dental treatment have its own website page?",
    a: "Not necessarily. A separate page helps when there is enough distinct, useful information. Avoid thin, repetitive pages; closely related treatments may be better covered together.",
  },
  {
    q: "Is local SEO important for a dental clinic in Dubai?",
    a: "Yes, since many dental searches are location-driven. Accurate addresses, hours, and a well-maintained business profile support local discovery, without promising any map ranking.",
  },
  {
    q: "Should a Dubai dental clinic publish content in Arabic and English?",
    a: "It depends on patient audiences, search behaviour, and whether high-quality localized content can be maintained. A smaller set of well-written pages beats a large set of weak ones.",
  },
  {
    q: "How can a dental clinic measure SEO success?",
    a: "Look at search visibility, organic traffic to relevant pages, calls, form enquiries, and appointments where measurable, using reliable, tested analytics.",
  },
];

function DubaiDentalSEO() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const pageUrl = "https://diglip7.com/uae/dubai/dental-seo/";

  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://diglip7.com/#organization",
        name: "DigLip7",
        url: "https://diglip7.com/",
        logo: "https://diglip7.com/favicon-32x32.png",
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
        "@id": "https://diglip7.com/uae/dubai/dental-seo/#webpage",
        url: "https://diglip7.com/uae/dubai/dental-seo/",
        name: "Dental SEO Dubai | SEO Services for Dental Clinics | DigLip7",
        description:
          "Explore Dental SEO Dubai strategies for clinics, including local SEO, treatment pages, technical optimization, and content designed around patient search intent.",
        inLanguage: "en",
        isPartOf: { "@id": "https://diglip7.com/#website" },
        breadcrumb: { "@id": "https://diglip7.com/uae/dubai/dental-seo/#breadcrumb" },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: "https://diglip7.com/images/dental-seo-dubai-guide.webp",
          caption: "Illustration of a dental SEO strategy for clinics in Dubai",
          width: 1200,
          height: 630,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://diglip7.com/uae/dubai/dental-seo/#breadcrumb",
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
            name: "Dubai SEO Services",
            item: "https://diglip7.com/uae/dubai/seo-services/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Dental SEO Dubai",
            item: "https://diglip7.com/uae/dubai/dental-seo/",
          },
        ],
      },
      {
        "@type": "Article",
        "@id": "https://diglip7.com/uae/dubai/dental-seo/#article",
        headline: "Dental SEO Dubai: A Practical Guide to Growing Dental Clinic Visibility",
        description:
          "Explore Dental SEO Dubai strategies for clinics, including local SEO, treatment pages, technical optimization, and content designed around patient search intent.",
        image: {
          "@type": "ImageObject",
          url: "https://diglip7.com/images/dental-seo-dubai-guide.webp",
          caption: "Illustration of a dental SEO strategy for clinics in Dubai",
          width: 1200,
          height: 630,
        },
        author: { "@id": "https://diglip7.com/#organization" },
        publisher: { "@id": "https://diglip7.com/#organization" },
        mainEntityOfPage: { "@id": "https://diglip7.com/uae/dubai/dental-seo/#webpage" },
        datePublished: "2026-10-16",
        dateModified: "2026-10-16",
        inLanguage: "en",
        about: "Dental SEO in Dubai",
      },
      {
        "@type": "FAQPage",
        "@id": "https://diglip7.com/uae/dubai/dental-seo/#faq",
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
    <div className="overflow-x-hidden bg-white w-full text-slate-800">
      <SEO
        title="Dental SEO Dubai | SEO Services for Dental Clinics | DigLip7"
        description="Explore Dental SEO Dubai strategies for clinics, including local SEO, treatment pages, technical optimization, and content designed around patient search intent."
        canonical="https://diglip7.com/uae/dubai/dental-seo/"
        robots="index, follow, max-image-preview:large"
        ogType="article"
        ogLocale="en_AE"
        ogImage="https://diglip7.com/images/dental-seo-dubai-guide.webp"
        ogImageAlt="Illustration of a dental SEO strategy for clinics in Dubai"
        twitterCard="summary_large_image"
        twitterSite="@diglip7"
        twitterCreator="@diglip7"
        twitterTitle="Dental SEO Dubai | SEO Services for Dental Clinics | DigLip7"
        twitterDescription="Explore Dental SEO Dubai strategies for clinics, including local SEO, treatment pages, technical optimization, and content designed around patient search intent."
        twitterImage="https://diglip7.com/images/dental-seo-dubai-guide.webp"
        twitterImageAlt="Illustration of a dental SEO strategy for clinics in Dubai"
        hreflangs={[
          { hreflang: "en", href: "https://diglip7.com/uae/dubai/dental-seo/" },
          { hreflang: "ar", href: "https://diglip7.com/ar/uae/dubai/dental-seo/" },
          { hreflang: "x-default", href: "https://diglip7.com/uae/dubai/dental-seo/" },
        ]}
        schema={jsonLdGraph}
      />

      {/* ================= BREADCRUMB ================= */}
      <div className="pt-24 sm:pt-28 px-4 sm:px-6 lg:px-8 xl:px-12 bg-gradient-to-r from-purple-100 via-pink-100 to-white border-b border-purple-200/50">
        <nav
          aria-label="Breadcrumb"
          className="max-w-6xl mx-auto flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600 pb-3"
        >
          {breadcrumbTrail.map((crumb, i) => (
            <span key={crumb.label} className="flex items-center gap-1.5 sm:gap-2">
              {i === 0 ? (
                <Home className="w-3.5 h-3.5 text-teal-700" />
              ) : (
                <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              )}
              {i === breadcrumbTrail.length - 1 ? (
                <span className="font-semibold text-teal-900">{crumb.label}</span>
              ) : (
                <Link to={crumb.href} className="hover:text-teal-700 transition-colors">
                  {crumb.label}
                </Link>
              )}
            </span>
          ))}
        </nav>
      </div>

      {/* ================= HERO / WHAT IS DENTAL SEO DUBAI? ================= */}
      <section className="pt-8 sm:pt-12 pb-16 lg:pb-20 bg-gradient-to-r from-purple-100 via-pink-100 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading, intro, and CTAs */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-teal-200 text-teal-900 text-xs sm:text-sm font-semibold mb-4 shadow-xs">
                <ToothIcon className="w-4 h-4 text-teal-700" />
                <span>Dental Clinic Visibility</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight mb-6">
                Dental SEO Dubai:{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-teal-800 to-emerald-600">
                  A Practical Guide to Growing Dental Clinic Visibility
                </span>
              </h1>

              <div className="bg-white/90 backdrop-blur-md rounded-2xl border-l-4 border-teal-600 border border-teal-100 p-6 sm:p-7 shadow-md mb-8">
                <h2 className="text-lg sm:text-xl font-bold text-teal-950 mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-teal-700 shrink-0" />
                  What is Dental SEO Dubai?
                </h2>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  It is the process of improving a dental practice's website, treatment information,
                  technical accessibility, local search presence, and relevance to patient queries in
                  Dubai. A well-planned strategy connects each search with the most appropriate page: a
                  general dentistry page for a family dentist search, a detailed treatment page for someone
                  comparing implants, or a branch page for a patient looking for the nearest clinic. Dental
                  SEO Dubai is less about chasing keywords and more about making accurate, useful clinic
                  information easy to find.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link to="/contact">
                  <button className="px-6 sm:px-7 py-3.5 bg-gradient-to-r from-teal-700 to-teal-900 hover:from-teal-800 hover:to-teal-950 text-white font-bold text-sm sm:text-base rounded-full shadow-lg shadow-teal-900/20 hover:scale-105 transition-all flex items-center gap-2 cursor-pointer">
                    <span>Request an SEO Audit</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="px-6 sm:px-7 py-3.5 bg-white hover:bg-slate-50 text-teal-950 font-bold text-sm sm:text-base rounded-full border border-teal-300 shadow-sm hover:scale-105 transition-all cursor-pointer">
                    Discuss Your Dental SEO Strategy
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Column: Featured Image with 3D Card */}
            <div className="lg:col-span-6 w-full flex justify-center">
              <Card3D className="w-full">
                <div className="bg-white p-2.5 sm:p-3.5 rounded-3xl border border-teal-200/90 shadow-2xl hover:shadow-teal-200/50 transition-all">
                  <DentalSEOImage
                    src={dentalImages.featured.src}
                    alt={dentalImages.featured.alt}
                    width={dentalImages.featured.width}
                    height={dentalImages.featured.height}
                    aspect="aspect-[16/10] min-h-[350px] sm:min-h-[420px] lg:min-h-[460px]"
                    priority={true}
                    className="shadow-inner w-full"
                    imgClassName="w-full h-full object-cover object-center"
                  />
                </div>
              </Card3D>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY DENTAL CLINICS IN DUBAI NEED A DEDICATED SEO STRATEGY ================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
            Why Dental Clinics in Dubai Need a Dedicated SEO Strategy
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            Dental searches are not one type of search. Patients look for:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-8">
            {patientSearchTypes.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 hover:bg-teal-50/50 p-4 rounded-xl border border-gray-200/80 hover:border-teal-300 transition-colors flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                <span className="text-gray-800 text-sm sm:text-base font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed bg-slate-50 p-6 sm:p-8 rounded-2xl border border-gray-200/70">
            <p>
              A single homepage cannot answer all of these well. A parent researching a child's first
              visit, an adult weighing implants, and someone with a broken tooth at night need different
              information. When one page tries to serve everyone, search engines struggle to tell what
              it is really about.
            </p>
            <p>
              This is why Dental Clinic SEO Dubai works best as a structured plan: which pages should
              exist, what each should say, and how they connect. With many clinics in the same
              neighbourhoods offering similar services, clear and trustworthy pages give a clinic a
              better chance of being understood and surfaced for the right searches. They do not
              guarantee it.
            </p>
          </div>
        </div>
      </section>

      {/* ================= HOW PATIENTS SEARCH FOR DENTAL SERVICES IN DUBAI ================= */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-gray-200/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
            How Patients Search for Dental Services in Dubai
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            Search behaviour varies with treatment need, urgency, location, language, and familiarity
            with the clinic. No single journey applies to everyone, but common scenarios include:
          </p>

          <div className="space-y-3 mb-8">
            {patientSearchScenarios.map((scenario, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs flex items-start gap-3.5"
              >
                <div className="w-7 h-7 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <p className="text-gray-800 text-sm sm:text-base leading-relaxed">{scenario}</p>
              </div>
            ))}
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-teal-200 shadow-sm">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              These map onto three types of intent. Informational searches seek to learn, such as the
              difference between braces and aligners. Commercial searches compare options. Local searches
              want a practical nearby option, with maps, hours, and contact details. A good strategy
              gives each intent the right type of page.
            </p>
          </div>
        </div>
      </section>

      {/* ================= TREATMENT-SPECIFIC SEO FOR DENTAL CLINICS ================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
            Treatment-Specific SEO for Dental Clinics
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-8 leading-relaxed">
            Individual treatments often deserve their own pages, provided the clinic has something
            genuinely useful to say. A page that only repeats the treatment name adds little. Treatment
            pages should be medically reviewed where appropriate and must never promise particular
            clinical outcomes.
          </p>

          <div className="space-y-6">
            {treatmentItems.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-slate-50 hover:bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 hover:border-teal-200 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed pl-0 sm:pl-13">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= LOCAL SEO FOR DENTAL CLINICS ACROSS DUBAI ================= */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-gray-200/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
            Local SEO for Dental Clinics Across Dubai
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            Local optimization helps patients discover real clinic locations. The main elements are:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-8">
            {localSeoElements.map((el, i) => (
              <div
                key={i}
                className="bg-white p-4 sm:p-5 rounded-xl border border-gray-200 shadow-xs flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                <span className="text-gray-800 text-sm sm:text-base leading-relaxed">{el}</span>
              </div>
            ))}
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
            <p>
              Neighbourhoods such as Dubai Marina, Jumeirah, Business Bay, Deira, Mirdif, and Al Barsha
              should appear only where relevant. A location page should exist only when the clinic
              genuinely serves that area and can provide useful, accurate information. Fake locations,
              misleading addresses, fabricated reviews, and duplicate pages that only swap neighbourhood
              names mislead patients and can create problems with search engines and platform policies.
            </p>
            <p className="pt-2 border-t border-gray-100 font-medium">
              For more, see DigLip7's{" "}
              <Link
                to="/uae/dubai/local-seo"
                className="text-teal-700 hover:text-teal-900 underline font-bold"
              >
                Local SEO Dubai
              </Link>{" "}
              page.
            </p>
          </div>
        </div>
      </section>

      {/* ================= BUILDING TREATMENT AND LOCATION PAGES THAT MATCH SEARCH INTENT ================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
              Building Treatment and Location Pages That Match Search Intent
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Website architecture should connect main services, treatment pages, practitioner profiles,
              clinic locations, patient education, and appointment pages, with each page having a clear
              purpose.
            </p>
          </div>

          {/* Architecture Points + Supporting Image 1 Visual Diagram */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
            {/* Left: 5 Architecture Points */}
            <div className="lg:col-span-6 space-y-4">
              <div className="bg-slate-50 p-6 sm:p-7 rounded-2xl border border-teal-100">
                <p className="text-gray-900 font-bold text-base sm:text-lg mb-4">
                  Take a clinic with two real branches, in Jumeirah and Al Barsha, offering general
                  dentistry, orthodontics, and implants:
                </p>
                <div className="space-y-3">
                  {websiteArchitecturePoints.map((point, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 bg-white p-3.5 sm:p-4 rounded-xl border border-gray-200 shadow-xs"
                    >
                      <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-gray-800 text-sm sm:text-base leading-relaxed">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Supporting Image 1 - Structure Diagram Card */}
            <div className="lg:col-span-6">
              <Card3D className="w-full">
                <div className="bg-white p-2.5 sm:p-3.5 rounded-3xl border border-teal-200 shadow-lg">
                  <DentalSEOImage
                    src={dentalImages.supporting1.src}
                    alt={dentalImages.supporting1.alt}
                    width={dentalImages.supporting1.width}
                    height={dentalImages.supporting1.height}
                    aspect="aspect-auto"
                    imgClassName="w-full h-auto block rounded-2xl"
                  />
                </div>
              </Card3D>
            </div>
          </div>

          <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed bg-white p-6 rounded-2xl border border-gray-200">
            <p>
              This avoids a separate URL for every treatment-and-branch combination. If both branches
              offer implants, one implant page can link to both. A combination page is justified only
              when the offering genuinely differs, such as a specialist available at one branch only.
            </p>
            <p className="font-semibold text-teal-950">
              This is what SEO for Dentists in Dubai looks like in practice: pages organized around how
              patients think, each earning its place.
            </p>
          </div>
        </div>
      </section>

      {/* ================= TECHNICAL SEO FOR DENTAL WEBSITES ================= */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-gray-200/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
            Technical SEO for Dental Websites
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            Technical foundations help search engines discover and understand a clinic's pages. Even
            excellent treatment content can underperform if technical problems get in the way. Key
            areas:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-8">
            {technicalSeoAreas.map((area, i) => (
              <div
                key={i}
                className="bg-white p-4 sm:p-5 rounded-xl border border-gray-200 shadow-xs flex items-start gap-3"
              >
                <Settings className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                <span className="text-gray-800 text-sm sm:text-base leading-relaxed">{area}</span>
              </div>
            ))}
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-teal-200 text-gray-700 text-sm sm:text-base leading-relaxed">
            <p className="mb-2">
              Technical work supports SEO but does not guarantee rankings. Its value lies in removing
              obstacles so good content can be properly evaluated.
            </p>
            <p className="font-medium">
              See DigLip7's{" "}
              <Link
                to="/digital-market/seoservices"
                className="text-teal-700 hover:text-teal-900 underline font-bold"
              >
                SEO services
              </Link>{" "}
              and{" "}
              <Link
                to="/uae/dubai/seo-services"
                className="text-teal-700 hover:text-teal-900 underline font-bold"
              >
                Dubai SEO Services
              </Link>{" "}
              pages.
            </p>
          </div>
        </div>
      </section>

      {/* ================= DENTAL CONTENT MARKETING AND PATIENT EDUCATION ================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
            Dental Content Marketing and Patient Education
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            Useful content answers common questions and supports treatment research. Suitable topics
            include:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
            {contentTopics.map((topic, i) => (
              <div
                key={i}
                className="bg-slate-50 p-4 rounded-xl border border-gray-200 flex items-start gap-3"
              >
                <FileText className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                <span className="text-gray-800 text-sm sm:text-base font-medium leading-relaxed">
                  {topic}
                </span>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-gray-200 text-gray-700 text-sm sm:text-base leading-relaxed space-y-3">
            <p>
              Educational articles should link to relevant treatment pages when helpful. They should
              not diagnose readers, give personalized medical advice, or present unverified claims.
              Readers with specific symptoms should be encouraged to consult a dentist, and clinical
              content should be reviewed by a qualified professional before publication.
            </p>
            <p className="font-medium pt-2 border-t border-gray-200">
              DigLip7's{" "}
              <Link
                to="/digital-market/content-marketing"
                className="text-teal-700 hover:text-teal-900 underline font-bold"
              >
                content marketing
              </Link>{" "}
              page has more detail.
            </p>
          </div>
        </div>
      </section>

      {/* ================= ARABIC AND ENGLISH SEO FOR DUBAI DENTAL PRACTICES ================= */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-gray-200/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
            Arabic and English SEO for Dubai Dental Practices
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            Many Dubai clinics serve multilingual audiences, but not every clinic needs every page in
            both languages. Where both are relevant, research keywords separately, because patients
            do not always search in Arabic the way an English phrase would literally translate.
            Consider:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-8">
            {multilingualConsiderations.map((item, i) => (
              <div
                key={i}
                className="bg-white p-4 sm:p-5 rounded-xl border border-gray-200 shadow-xs flex items-start gap-3"
              >
                <Globe className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                <span className="text-gray-800 text-sm sm:text-base leading-relaxed">{item}</span>
              </div>
            ))}
          </div>

          <div className="bg-amber-50/80 p-6 rounded-2xl border border-amber-200 text-amber-950 text-sm sm:text-base leading-relaxed">
            Avoid low-quality machine-translated medical content, which risks inaccuracy and weakens
            trust. Fewer, well-maintained pages in each language usually beat a large volume of weak
            ones.
          </div>
        </div>
      </section>

      {/* ================= ONLINE REPUTATION AND TRUST FOR DENTAL WEBSITES ================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
            Online Reputation and Trust for Dental Websites
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            Trust signals should be real and verifiable:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-8">
            {trustSignals.map((signal, i) => (
              <div
                key={i}
                className="bg-slate-50 p-4 sm:p-5 rounded-xl border border-gray-200 flex items-start gap-3"
              >
                <ShieldCheck className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                <span className="text-gray-800 text-sm sm:text-base leading-relaxed">{signal}</span>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-2xl space-y-3">
            <p className="text-sm sm:text-base leading-relaxed text-slate-200">
              Never invent credentials, awards, testimonials, or review counts. Dental advertising in
              Dubai and the UAE is subject to strict healthcare advertising requirements (MOHAP and DHA), so clinics should
              check current rules with the relevant authorities and their own compliance advisers.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed text-teal-300 font-medium pt-2 border-t border-slate-800">
              Regulatory Note: Use original or properly licensed images only. Avoid before-and-after patient photos unless you hold documented patient consent and meet healthcare advertising rules.
            </p>
          </div>
        </div>
      </section>

      {/* ================= HOW TO MEASURE DENTAL SEO PERFORMANCE ================= */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-gray-200/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
              How to Measure Dental SEO Performance
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Reporting should go beyond keyword rankings, which fluctuate and do not show business
              value alone. Useful measures include:
            </p>
          </div>

          {/* Performance Measures & Supporting Image 2 Checklist Diagram */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
            {/* Left: 7 Performance Measures */}
            <div className="lg:col-span-6">
              <div className="space-y-3">
                {performanceMeasures.map((measure, i) => (
                  <div
                    key={i}
                    className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs flex items-start gap-3 hover:border-teal-300 transition-colors"
                  >
                    <TrendingUp className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                    <span className="text-gray-800 text-sm sm:text-base leading-relaxed font-medium">
                      {measure}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Supporting Image 2 - Checklist Card */}
            <div className="lg:col-span-6">
              <Card3D className="w-full">
                <div className="bg-white p-2.5 sm:p-3.5 rounded-3xl border border-teal-200 shadow-lg">
                  <DentalSEOImage
                    src={dentalImages.supporting2.src}
                    alt={dentalImages.supporting2.alt}
                    width={dentalImages.supporting2.width}
                    height={dentalImages.supporting2.height}
                    aspect="aspect-auto"
                    imgClassName="w-full h-auto block rounded-2xl"
                  />
                </div>
              </Card3D>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-teal-200 shadow-xs text-gray-700 text-sm sm:text-base leading-relaxed">
            Configure and test analytics before using conversion data for decisions. A form that does
            not fire its event, or a call button counted twice, distorts the picture. Also distinguish
            website enquiries from confirmed appointments: an enquiry is not an appointment, and an
            organic visit is not a patient. Matching enquiry data with the clinic's booking records
            gives a more realistic view.
          </div>
        </div>
      </section>

      {/* ================= COMMON DENTAL SEO MISTAKES TO AVOID ================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6">
            Common Dental SEO Mistakes to Avoid
          </h2>

          <div className="space-y-3">
            {commonMistakes.map((mistake, i) => (
              <div
                key={i}
                className="bg-slate-50 p-4 sm:p-5 rounded-xl border border-gray-200 flex items-start gap-3.5"
              >
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <span className="text-gray-800 text-sm sm:text-base leading-relaxed">{mistake}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DENTAL SEO VISUAL ASSETS & IMAGE FRAMEWORK ================= */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-white via-slate-50 to-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs sm:text-sm font-semibold mb-3">
              <ImageIcon className="w-4 h-4 text-teal-700" />
              <span>Visual Media &amp; Search Architecture</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              Dental SEO Visual Assets &amp; Image Framework
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Visual media plays an essential role in how search engines and prospective patients understand your dental practice. Below is the framework of visual assets and healthcare compliance standards across our Dental SEO Dubai strategy.
            </p>
          </div>

          {/* 3-Card Grid for Media Asset Sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Section 1: Featured Guide */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-4 flex flex-col">
              <DentalSEOImage
                src={dentalImages.featured.src}
                alt={dentalImages.featured.alt}
                width={dentalImages.featured.width}
                height={dentalImages.featured.height}
                aspect="aspect-[16/9]"
              />
              <h3 className="font-bold text-gray-900 text-base mt-4 text-center">
                Dental SEO Dubai Strategy Guide
              </h3>
            </div>

            {/* Section 2: Page Structure Diagram */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-4 flex flex-col">
              <DentalSEOImage
                src={dentalImages.supporting1.src}
                alt={dentalImages.supporting1.alt}
                width={dentalImages.supporting1.width}
                height={dentalImages.supporting1.height}
                aspect="aspect-[16/9]"
              />
              <h3 className="font-bold text-gray-900 text-base mt-4 text-center">
                Treatment &amp; Branch Page Structure
              </h3>
            </div>

            {/* Section 3: Measurement Checklist */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-4 flex flex-col">
              <DentalSEOImage
                src={dentalImages.supporting2.src}
                alt={dentalImages.supporting2.alt}
                width={dentalImages.supporting2.width}
                height={dentalImages.supporting2.height}
                aspect="aspect-[16/9]"
              />
              <h3 className="font-bold text-gray-900 text-base mt-4 text-center">
                Dental SEO Measurement Checklist
              </h3>
            </div>
          </div>

          {/* Healthcare Advertising & Image Compliance Banner */}
          <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 border-l-4 border-amber-500 border border-amber-200/80 rounded-2xl p-6 sm:p-7 shadow-xs">
            <div className="flex items-start gap-3.5">
              <ShieldCheck className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
              <div className="space-y-2">
                <h4 className="font-bold text-amber-950 text-base sm:text-lg">
                  Healthcare Advertising &amp; Image Licensing Rules in Dubai
                </h4>
                <p className="text-amber-900/95 text-sm sm:text-base leading-relaxed">
                  <strong>Use original or properly licensed images only.</strong> Avoid before-and-after patient photos
                  unless you hold documented patient consent and meet healthcare advertising rules established by UAE health authorities (MOHAP and DHA).
                </p>
                <p className="text-amber-900/80 text-xs sm:text-sm leading-relaxed">
                  Dental marketing materials must always uphold clinical integrity, safeguard patient confidentiality, avoid exaggerated outcome promises, and verify that any practitioner qualifications displayed reflect authentic credentials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT TO LOOK FOR IN A DENTAL MARKETING AGENCY IN DUBAI ================= */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-gray-200/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
            What to Look for in a Dental Marketing Agency in Dubai
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            Choosing a Dental Marketing Agency Dubai clinics can rely on starts with how the agency
            works. It should be able to explain:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-8">
            {agencyEvaluationPoints.map((point, i) => (
              <div
                key={i}
                className="bg-white p-4 sm:p-5 rounded-xl border border-gray-200 shadow-xs flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                <span className="text-gray-800 text-sm sm:text-base leading-relaxed">{point}</span>
              </div>
            ))}
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
            <p>
              Be cautious of agencies that guarantee rankings, patient numbers, or revenue. Honest
              providers talk about process and priorities, not promises.
            </p>
            <p>
              DigLip7 can be considered as a potential partner based on the methodology below, and
              clinics should question it as they would any agency. Its{" "}
              <Link
                to="/uae/dubai/healthcare-seo"
                className="text-teal-700 hover:text-teal-900 underline font-bold"
              >
                Healthcare SEO Dubai
              </Link>{" "}
              and{" "}
              <Link
                to="/uae/dubai/beauty-clinic-seo"
                className="text-teal-700 hover:text-teal-900 underline font-bold"
              >
                Beauty Clinic SEO Dubai
              </Link>{" "}
              pages provide broader healthcare and aesthetic clinic context.
            </p>
          </div>
        </div>
      </section>

      {/* ================= HOW DIGLIP7 CAN SUPPORT DENTAL SEO IN DUBAI ================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
            How DigLip7 Can Support Dental SEO in Dubai
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            The right scope depends on a clinic's existing website, locations, services, competition,
            and goals. In practical terms, DigLip7's Dental SEO Services Dubai approach can include:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-8">
            {diglip7SupportScope.map((scope, i) => (
              <div
                key={i}
                className="bg-slate-50 p-4 sm:p-5 rounded-xl border border-gray-200 flex items-start gap-3"
              >
                <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span className="text-gray-800 text-sm sm:text-base leading-relaxed">{scope}</span>
              </div>
            ))}
          </div>

          <div className="bg-teal-50/70 p-6 rounded-2xl border border-teal-200 text-teal-950 text-sm sm:text-base leading-relaxed">
            None of this guarantees specific rankings, patient numbers, or revenue. It is a
            structured way to find and prioritize realistic opportunities.
          </div>
        </div>
      </section>

      {/* ================= FREQUENTLY ASKED QUESTIONS ABOUT DENTAL SEO DUBAI ================= */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-gray-200/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-8 text-center">
            Frequently Asked Questions About Dental SEO Dubai
          </h2>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-200 shadow-xs overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/60 transition-colors"
                  >
                    <span className="font-bold text-gray-900 text-sm sm:text-base leading-snug">
                      {index + 1}. {faq.q}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? "bg-teal-800 text-white rotate-180" : "bg-gray-100 text-gray-500"
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
                        <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-gray-700 leading-relaxed border-t border-gray-100 bg-teal-50/20">
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

      {/* ================= IMPROVE YOUR DENTAL CLINIC'S ORGANIC SEARCH STRATEGY ================= */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-teal-50 via-teal-150 to-slate-100 text-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6 leading-tight">
            Improve Your Dental Clinic's Organic Search Strategy
          </h2>

          <p className="text-teal-900/95 text-base sm:text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
            A practical first step is to look honestly at what your website offers today. Do treatment
            pages answer real patient questions? Does each branch have accurate information? Are technical
            issues limiting your pages, and is anyone tracking enquiries properly?
          </p>

          <p className="text-teal-900/90 text-sm sm:text-base leading-relaxed mb-10 max-w-3xl mx-auto">
            DigLip7 can review your website structure, existing treatment pages, local search visibility,
            clinic locations, technical issues, Arabic and English content needs, enquiry tracking, and
            content opportunities. The aim is to identify the priorities that matter most for your
            clinic, not to promise rankings, patient numbers, or revenue.
          </p>

          <p className="text-teal-900/90 text-base sm:text-lg font-medium mb-8">
            To explore where your clinic stands, Request an SEO Audit or Discuss Your Dental SEO Strategy
            with the team at DigLip7.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact">
              <button className="px-8 sm:px-10 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold text-sm sm:text-base rounded-full shadow-2xl hover:scale-105 transition-all flex items-center gap-2 cursor-pointer">
                <span>Request an SEO Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>

            <Link to="/contact">
              <button className="px-8 sm:px-10 py-4 bg-white/10 hover:bg-white/20 text-black border border-teal-300/40 font-bold text-sm sm:text-base rounded-full backdrop-blur-md shadow-lg hover:scale-105 transition-all flex items-center gap-2 cursor-pointer">
                <span>Discuss Your Dental SEO Strategy</span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DubaiDentalSEO;
