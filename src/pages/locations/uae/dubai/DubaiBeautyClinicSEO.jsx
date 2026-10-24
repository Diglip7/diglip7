import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../../../../components/SEO";
import beautyClinicHeroImg from "../../../../images/beauty-clinic-seo-dubai.webp";
import beautyTreatmentPageImg from "../../../../images/beauty-treatment-page-structure.webp";
import beautyReportingImg from "../../../../images/beauty-clinic-seo-reporting.webp";
import {
  Sparkles,
  MapPin,
  Building2,
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
  Flower2,
  Check,
  ExternalLink,
} from "lucide-react";

// Beauty SVG Icon for Aesthetic Visual Theme
const BeautyIcon = ({ className = "w-6 h-6" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 2C11.5 2 11 2.2 10.6 2.6L8.8 4.4C8 5.2 6.8 5.7 5.7 5.7H4C2.9 5.7 2 6.6 2 7.7V9.4C2 10.5 2.5 11.7 3.3 12.5L5.1 14.3C5.5 14.7 5.7 15.2 5.7 15.7V17.4C5.7 18.5 6.6 19.4 7.7 19.4H9.4C10.5 19.4 11.7 19.9 12.5 20.7L14.3 22.5C14.7 22.9 15.2 23.1 15.7 23.1C16.2 23.1 16.7 22.9 17.1 22.5L18.9 20.7C19.7 19.9 20.9 19.4 22 19.4H23.7C24.8 19.4 25.7 18.5 25.7 17.4V15.7C25.7 14.6 25.2 13.4 24.4 12.6L22.6 10.8C22.2 10.4 22 9.9 22 9.4V7.7C22 6.6 21.1 5.7 20 5.7H18.3C17.2 5.7 16 5.2 15.2 4.4L13.4 2.6C13 2.2 12.5 2 12 2Z" opacity="0.15" />
    <path d="M12 3C7 3 3 7 3 12C3 17 7 21 12 21C17 21 21 17 21 12C21 7 17 3 12 3ZM12 5C15.9 5 19 8.1 19 12C19 15.9 15.9 19 12 19C8.1 19 5 15.9 5 12C5 8.1 8.1 5 12 5ZM12 7C9.2 7 7 9.2 7 12C7 14.8 9.2 17 12 17C14.8 17 17 14.8 17 12C17 9.2 14.8 7 12 7Z" />
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

// Reusable Clean Beauty SEO Image Component
// If no image is put (src is empty or fails to load), shows the placeholder with the alt name.
// When an image is provided and loads, only the image is displayed with no alt text shown on the UI.
const BeautySEOImage = ({
  src,
  alt,
  width = 1200,
  height = 630,
  aspect = "aspect-[16/9]",
  priority = false,
  className = "",
  imgClassName = "w-full h-full object-cover",
}) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [src]);

  const showPlaceholder = !src || hasError;

  return (
    <div
      className={`relative w-full rounded-2xl overflow-hidden bg-gradient-to-br from-pink-50/60 via-white to-rose-50/40 border border-pink-100/90 shadow-md flex items-center justify-center ${showPlaceholder ? "aspect-[16/9]" : aspect} ${className}`}
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
        <div className="p-8 text-center text-sm font-medium text-pink-900/70 select-none flex flex-col items-center justify-center gap-3 w-full h-full bg-gradient-to-b from-white/90 to-pink-50/50">
          <div className="w-12 h-12 rounded-full bg-pink-100/80 text-pink-600 flex items-center justify-center shadow-xs">
            <Flower2 className="w-6 h-6" />
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
const beautyImages = {
  featured: {
    src: beautyClinicHeroImg || "/images/beauty-clinic-seo-dubai.webp",
    filename: "beauty-clinic-seo-dubai.webp",
    alt: "Illustration of SEO strategy for a beauty clinic in Dubai",
    width: 1200,
    height: 630,
  },
  supporting1: {
    src: beautyTreatmentPageImg || "/images/beauty-treatment-page-seo.webp",
    filename: "beauty-treatment-page-seo.webp",
    alt: "Diagram of treatment and location page structure for a beauty clinic website",
    width: 1200,
    height: 630,
  },
  supporting2: {
    src: beautyReportingImg || "/images/beauty-clinic-seo-reporting.webp",
    filename: "beauty-clinic-seo-reporting.webp",
    alt: "Dashboard-style illustration of organic clicks, impressions, and enquiries",
    width: 1200,
    height: 630,
  },
};

const breadcrumbTrail = [
  { label: "Home", href: "/" },
  { label: "Dubai SEO Services", href: "/uae/dubai/seo-services" },
  { label: "Beauty Clinic SEO Dubai", href: "/uae/dubai/beauty-clinic-seo" },
];

const seoBenefits = [
  {
    title: "Discoverability",
    desc: "Appearing in Google Search and Google Maps for relevant beauty and aesthetic queries.",
    icon: Sparkles,
  },
  {
    title: "Treatment-Specific Reach",
    desc: "Connecting with clients searching for specific services like hydrafacials or laser, not just generic terms.",
    icon: Target,
  },
  {
    title: "Trustworthy Online Presence",
    desc: "Accurate, useful treatment information and practitioner credentials that help visitors feel informed and confident.",
    icon: ShieldCheck,
  },
  {
    title: "Easier Next Steps",
    desc: "Clear treatment descriptions, transparent consultation guidance, and mobile-friendly appointment enquiry options.",
    icon: PhoneCall,
  },
  {
    title: "Long-Term Value",
    desc: "Organic search equity builds over time and sustainably complements paid ads rather than switching off when ad spend pauses.",
    icon: TrendingUp,
  },
];

const keywordExamples = [
  "Beauty clinic in Dubai",
  "Facial clinic Dubai",
  "Laser hair removal Dubai",
  "Skin rejuvenation clinic Dubai",
  "Aesthetic clinic Dubai",
];

const onPageElements = [
  "SEO titles and meta descriptions",
  "Heading structure and page organization",
  "Treatment-specific content",
  "Internal linking between related services",
  "Image optimization and descriptive alt text",
  "Clear contact details and appointment enquiry options",
];

const localSeoElements = [
  "Google Business Profile optimization",
  "Accurate business information",
  "Relevant service descriptions",
  "Genuine customer reviews and professional responses",
  "Consistent business details across appropriate directories",
  "Relevant local landing pages",
  "Attention to local search intent and proximity",
];

const treatmentCategories = [
  {
    name: "Facials & Skin Therapy",
    desc: "Hydrafacials, chemical peels, deep cleansing, microdermabrasion, and specialized dermatological facials.",
  },
  {
    name: "Laser Hair Removal",
    desc: "Full-body laser treatments, targeted facial sessions, pain-free cooling technology, and patch-test guidelines.",
  },
  {
    name: "Skin Rejuvenation",
    desc: "Microneedling, PRP therapy, skin tightening, collagen boosters, and non-surgical aesthetic enhancements.",
  },
  {
    name: "Cosmetic Procedures",
    desc: "Anti-ageing consultations, dermal contouring, lip enhancements, and doctor-administered aesthetic care.",
  },
  {
    name: "Body Contouring & Care",
    desc: "Non-invasive fat reduction, skin tightening, cellulite therapies, and wellness body treatments.",
  },
];

const technicalSeoPoints = [
  "Mobile-friendly design",
  "Website speed and Core Web Vitals",
  "Crawlability and indexation",
  "XML sitemaps",
  "Canonical tags and redirects",
  "Broken links and duplicate content",
  "HTTPS and website security",
  "Relevant structured datas",
  "Form usability and conversion tracking"
];

const businessTypeStrategies = [
  {
    title: "Beauty Clinics",
    desc: "A balanced mix of brand, general, and treatment-specific pages paired with robust local SEO and Google Maps optimization.",
    badge: "Beauty Clinic SEO Dubai",
  },
  {
    title: "Aesthetic Clinics",
    desc: "Careful, accurate treatment descriptions and consultation pathways, avoiding exaggerated promises about clinical results.",
    badge: "Aesthetic Clinic SEO Dubai",
  },
  {
    title: "Skincare Clinics",
    desc: "Concern-based content organized around skin needs (acne, pigmentation, ageing), supported by qualified dermatological review.",
    badge: "Skincare Clinic SEO Dubai",
  },
  {
    title: "Cosmetic Treatment Centres",
    desc: "Clear procedure outlines, practitioner qualification highlights, consultation details, and responsible medical wording.",
    badge: "Cosmetic Clinic SEO Dubai",
  },
  {
    title: "Beauty Salons with Treatments",
    desc: "Service menus, pricing transparency, convenient neighborhood locations, and swift mobile booking systems.",
    badge: "Beauty Salon SEO Dubai",
  },
];

const dubaiNeighbourhoods = [
  "Jumeirah",
  "Business Bay",
  "Dubai Marina",
  "Jumeirah Village Circle (JVC)",
  "Downtown Dubai",
  "Al Barsha",
  "Palm Jumeirah",
  "Mirdif",
];

const commonMistakes = [
  "Keyword stuffing: repeating phrases until copy sounds unnatural and off-putting to prospective clients.",
  "Duplicate treatment descriptions: copying identical text across multiple service pages with only a few words changed.",
  "Thin location pages: churning out near-identical neighborhood pages without real branch physical presence.",
  "Poor mobile usability: difficult navigation, unclickable phone numbers, or slow-loading booking forms.",
  "Neglecting Google Business Profile details: outdated business hours or incorrect categories causing lost enquiries.",
  "Unnatural link building: buying spammy directory links that violate search engine webmaster guidelines.",
  "Unsupported treatment claims: promising unrealistic aesthetic results that create medical compliance risks.",
  "Fake or incentivized reviews: violating Google platform policies and permanently eroding client trust.",
  "Ignoring enquiry tracking: failing to track phone calls and form submissions, leaving ROI unmeasured.",
  "Publishing unreviewed content: posting aesthetic or medical claims without review by certified clinicians.",
];

const agencySelectionCriteria = [
  "Proven experience with local SEO and appointment-driven healthcare or aesthetic businesses",
  "A structured technical audit process resolving crawl, mobile, and Core Web Vitals bottlenecks",
  "Keyword research and bespoke content planning tied to your actual clinic offerings",
  "Transparent, regular reporting showing completed tasks, search trends, and real enquiries",
  "Ethical, white-hat SEO practices with zero tolerance for fake reviews or toxic link schemes",
  "Realistic communication without empty guarantees of #1 rankings or fixed patient numbers",
  "Comprehensive conversion tracking covering website forms, tap-to-call, and WhatsApp clicks",
];

const diglip7ProcessSteps = [
  "Website audit and baseline organic visibility assessment",
  "Search intent research covering treatments and Dubai location nuances",
  "Identification of high-priority technical corrections and content gaps",
  "On-page optimization of priority treatment pages and logical internal linking",
  "Local SEO and Google Business Profile listing enhancement",
  "Original, medically reviewed content development answering client concerns",
  "Conversion tracking setup, monthly performance reporting, and ongoing optimization",
];

const faqs = [
  {
    q: "What is Beauty Clinic SEO Dubai?",
    a: "It is the process of improving a beauty clinic's website, treatment pages, technical setup, and local listings so relevant people in Dubai can find accurate information through search engines and Google Maps.",
  },
  {
    q: "How can SEO help a beauty clinic attract relevant visitors?",
    a: "By aligning pages with what people actually search for, such as specific treatments and locations, and making contact details and enquiry options easy to find. It improves the opportunity to appear in relevant searches; it does not guarantee visits or bookings.",
  },
  {
    q: "What do Beauty Clinic SEO Services Dubai include?",
    a: "Typically keyword research, on-page optimization, local SEO, treatment-page optimization, technical SEO, content development, and performance tracking. The scope depends on your website, services, and goals.",
  },
  {
    q: "How long does SEO take to show progress?",
    a: "Progress varies with competition, website condition, how quickly changes are implemented, content quality, and search demand. No one can promise a fixed timeline or ranking.",
  },
  {
    q: "Why is local SEO important for beauty clinics?",
    a: "Many beauty searches are tied to location and made on mobile. Accurate listings and local pages help people find a clinic that genuinely serves their area.",
  },
  {
    q: "Can SEO help an aesthetic clinic appear in Google Maps?",
    a: "SEO can support the chances by improving profile accuracy, categories, reviews, and local relevance. Positions depend on relevance, distance, and prominence, so none can be guaranteed.",
  },
  {
    q: "How much do beauty clinic SEO services cost in Dubai?",
    a: "Costs depend on scope, the number of services and locations, competition, and business goals. A fair quote follows a review of your website, so fixed prices are not stated here.",
  },
  {
    q: "How do I choose the right SEO agency for my beauty clinic?",
    a: "Ask how it handles audits, keyword research, treatment content, local SEO, reporting, and enquiry tracking. Be cautious of any guarantee of rankings, leads, or revenue.",
  },
];

function DubaiBeautyClinicSEO() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const pageUrl = "https://diglip7.com/uae/dubai/beauty-clinic-seo/";

  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://diglip7.com/#organization",
        name: "DigLip7",
        url: "https://diglip7.com/",
        logo: "https://diglip7.com/images/Logo.jpg",
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
        "@id": "https://diglip7.com/uae/dubai/beauty-clinic-seo/#webpage",
        url: "https://diglip7.com/uae/dubai/beauty-clinic-seo/",
        name: "Beauty Clinic SEO Dubai | SEO Services for Beauty Clinics",
        description:
          "Grow your beauty clinic's online visibility with Beauty Clinic SEO Dubai strategies, including local SEO, treatment page optimization, technical SEO and content marketing.",
        inLanguage: "en",
        isPartOf: { "@id": "https://diglip7.com/#website" },
        breadcrumb: { "@id": "https://diglip7.com/uae/dubai/beauty-clinic-seo/#breadcrumb" },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: "https://diglip7.com/images/beauty-clinic-seo-dubai.webp",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://diglip7.com/uae/dubai/beauty-clinic-seo/#breadcrumb",
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
            name: "Beauty Clinic SEO Dubai",
            item: "https://diglip7.com/uae/dubai/beauty-clinic-seo/",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://diglip7.com/uae/dubai/beauty-clinic-seo/#service",
        name: "Beauty Clinic SEO Dubai",
        serviceType: "Search engine optimization for beauty clinics",
        description:
          "SEO services for beauty clinics, aesthetic centres, and skincare providers in Dubai, including local SEO, treatment page optimization, technical SEO, content marketing, and performance reporting.",
        provider: { "@id": "https://diglip7.com/#organization" },
        areaServed: {
          "@type": "City",
          name: "Dubai",
        },
        url: "https://diglip7.com/uae/dubai/beauty-clinic-seo/",
      },
      {
        "@type": "FAQPage",
        "@id": "https://diglip7.com/uae/dubai/beauty-clinic-seo/#faq",
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
        title="Beauty Clinic SEO Dubai | SEO Services for Beauty Clinics"
        exactTitle={true}
        description="Grow your beauty clinic's online visibility with Beauty Clinic SEO Dubai strategies, including local SEO, treatment page optimization, technical SEO and content marketing."
        canonical="https://diglip7.com/uae/dubai/beauty-clinic-seo/"
        robots="index, follow, max-image-preview:large"
        ogType="website"
        ogLocale="en_AE"
        ogImage="https://diglip7.com/images/beauty-clinic-seo-dubai.webp"
        ogImageAlt="Illustration of SEO strategy for a beauty clinic in Dubai"
        twitterCard="summary_large_image"
        twitterSite="@diglip7"
        twitterCreator="@diglip7"
        twitterTitle="Beauty Clinic SEO Dubai | SEO Services for Beauty Clinics"
        twitterDescription="Grow your beauty clinic's online visibility with Beauty Clinic SEO Dubai strategies, including local SEO, treatment page optimization, technical SEO and content marketing."
        twitterImage="https://diglip7.com/images/beauty-clinic-seo-dubai.webp"
        twitterImageAlt="Illustration of SEO strategy for a beauty clinic in Dubai"
        hreflangs={[
          { hreflang: "en", href: "https://diglip7.com/uae/dubai/beauty-clinic-seo/" },
          { hreflang: "ar", href: "https://diglip7.com/ar/uae/dubai/beauty-clinic-seo/" },
          { hreflang: "x-default", href: "https://diglip7.com/uae/dubai/beauty-clinic-seo/" },
        ]}
        schema={jsonLdGraph}
      />

      {/* ================= BREADCRUMB ================= */}
      <div className="pt-24 sm:pt-28 px-4 sm:px-6 lg:px-8 xl:px-12 bg-gradient-to-r from-rose-50 via-pink-50 to-white border-b border-pink-100">
        <nav
          aria-label="Breadcrumb"
          className="max-w-6xl mx-auto flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600 pb-3"
        >
          {breadcrumbTrail.map((crumb, i) => (
            <span key={crumb.label} className="flex items-center gap-1.5 sm:gap-2">
              {i === 0 ? (
                <Home className="w-3.5 h-3.5 text-pink-600" />
              ) : (
                <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              )}
              {i === breadcrumbTrail.length - 1 ? (
                <span className="font-semibold text-pink-950">{crumb.label}</span>
              ) : (
                <Link to={crumb.href} className="hover:text-pink-600 transition-colors">
                  {crumb.label}
                </Link>
              )}
            </span>
          ))}
        </nav>
      </div>

      {/* ================= HERO / WHAT IS BEAUTY CLINIC SEO DUBAI? ================= */}
      <section className="pt-8 sm:pt-12 pb-16 lg:pb-20 bg-gradient-to-r from-rose-50 via-pink-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading, intro, and CTAs */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-pink-200 text-pink-900 text-xs sm:text-sm font-semibold mb-4 shadow-xs">
                <Flower2 className="w-4 h-4 text-pink-600" />
                <span>Beauty &amp; Aesthetic Clinic Visibility</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight mb-6">
                Beauty Clinic SEO Dubai:{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600">
                  Improve Local Search Visibility
                </span>
              </h1>

              <div className="bg-white/90 backdrop-blur-md rounded-2xl border-l-4 border-pink-500 border border-pink-100 p-6 sm:p-7 shadow-md mb-8">
                <h2 className="text-lg sm:text-xl font-bold text-pink-950 mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-pink-600 shrink-0" />
                  What is Beauty Clinic SEO Dubai?
                </h2>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
                  Beauty Clinic SEO Dubai is the work of making a clinic's website, treatment pages,
                  and local listings easier for search engines to understand and easier for potential
                  customers to use. People in Dubai search for beauty services in many ways: a broad query
                  such as <em>beauty clinic in Dubai</em>, a specific treatment such as <em>laser hair removal</em>, or a quick search on a phone to find somewhere nearby. Relevant organic visibility helps a clinic appear when those searches happen.
                </p>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Many clinics share the same obstacles: strong competition across neighbourhoods, treatment pages that say very little, weak local visibility, and a website that receives visits but few enquiries. A targeted SEO strategy tackles these in a sensible order, starting with what the clinic actually offers and where it genuinely operates. It cannot guarantee rankings or enquiries, but it builds a clearer, more useful online presence.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link to="/contact">
                  <button className="px-6 sm:px-7 py-3.5 bg-gradient-to-r from-pink-600 to-rose-700 hover:from-pink-700 hover:to-rose-800 text-white font-bold text-sm sm:text-base rounded-full shadow-lg shadow-pink-600/20 hover:scale-105 transition-all flex items-center gap-2 cursor-pointer">
                    <span>Discuss Your Beauty Clinic SEO Strategy</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="px-6 sm:px-7 py-3.5 bg-white hover:bg-slate-50 text-pink-950 font-bold text-sm sm:text-base rounded-full border border-pink-300 shadow-sm hover:scale-105 transition-all cursor-pointer">
                    Request an SEO Audit
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Column: Large Featured Image Slot with 3D Card */}
            <div className="lg:col-span-6 w-full flex justify-center">
              <Card3D className="w-full">
                <div className="bg-white p-2.5 sm:p-3.5 rounded-3xl border border-pink-200/90 shadow-2xl hover:shadow-pink-200/50 transition-all">
                  <BeautySEOImage
                    src={beautyImages.featured.src}
                    alt={beautyImages.featured.alt}
                    width={beautyImages.featured.width}
                    height={beautyImages.featured.height}
                    aspect="aspect-auto"
                    priority={true}
                    className="shadow-inner"
                    imgClassName="w-full h-auto block rounded-2xl"
                  />
                </div>
              </Card3D>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY BEAUTY CLINICS IN DUBAI NEED SEO ================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
            Why Beauty Clinics in Dubai Need SEO
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-8 leading-relaxed max-w-4xl">
            Most people check search results before choosing a clinic. SEO helps your business show up
            in that moment, and just as importantly, helps visitors find what they need once they arrive.
            Good SEO supports:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {seoBenefits.map((benefit, idx) => {
              const IconComp = benefit.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 hover:bg-pink-50/40 p-6 rounded-2xl border border-gray-200/80 hover:border-pink-200 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-pink-100 text-pink-700 flex items-center justify-center mb-4">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-pink-50/60 p-6 sm:p-8 rounded-2xl border border-pink-200/80 text-gray-800 text-sm sm:text-base leading-relaxed">
            DigLip7 provides SEO services in Dubai for service-based businesses, including beauty clinics, aesthetic centres, and skincare providers. This page explains what that work involves and how to judge whether it suits your clinic.
          </div>
        </div>
      </section>

      {/* ================= WHAT IS BEAUTY CLINIC SEO DUBAI? ================= */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-gray-200/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
            What Is Beauty Clinic SEO Dubai?
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed max-w-4xl">
            Beauty clinic SEO is the process of improving how a clinic's website and online listings
            perform in search engines. It combines keyword research, on-page optimization, technical
            SEO, local SEO, content development, website usability, and performance measurement.
          </p>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
            <p className="font-semibold text-pink-950">
              In plain terms, it answers three questions:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-gray-200">
                <span className="w-7 h-7 rounded-full bg-pink-100 text-pink-700 font-bold text-xs flex items-center justify-center mb-2">
                  1
                </span>
                <p className="text-sm font-medium text-gray-900">What are potential customers searching for?</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-gray-200">
                <span className="w-7 h-7 rounded-full bg-pink-100 text-pink-700 font-bold text-xs flex items-center justify-center mb-2">
                  2
                </span>
                <p className="text-sm font-medium text-gray-900">Does your website clearly answer it?</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-gray-200">
                <span className="w-7 h-7 rounded-full bg-pink-100 text-pink-700 font-bold text-xs flex items-center justify-center mb-2">
                  3
                </span>
                <p className="text-sm font-medium text-gray-900">Can search engines find and understand those pages?</p>
              </div>
            </div>
            <p className="pt-4 border-t border-gray-100 text-sm sm:text-base text-gray-600">
              SEO improves the opportunity to appear in relevant searches. It does not guarantee rankings or enquiries, because results depend on competition, website condition, and many other factors.
            </p>
          </div>
        </div>
      </section>

      {/* ================= OUR BEAUTY CLINIC SEO SERVICES IN DUBAI ================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
              Our Beauty Clinic SEO Services in Dubai
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              The scope of Beauty Clinic SEO Services Dubai businesses need varies with their website, services, and goals. The core services are outlined below.
            </p>
          </div>

          <div className="space-y-12">
            {/* Service 1: Keyword Research */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2.5">
                <Target className="w-5 h-5 text-pink-600" />
                Keyword Research for Beauty Clinics
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                Keyword research identifies the phrases your audience uses and matches them to your real services. It weighs search intent, location, competition, and business objectives. Starting points might include:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                {keywordExamples.map((kw, i) => (
                  <div key={i} className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-xs flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-pink-600 shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-gray-800">{kw}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 italic">
                These are illustrative examples, not validated terms. Actual priorities should come from proper research with current data, and only for treatments your clinic genuinely provides.
              </p>
            </div>

            {/* Service 2: On-Page SEO */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200 shadow-xs">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2.5">
                <FileText className="w-5 h-5 text-pink-600" />
                On-Page SEO Optimization
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                On-page work makes each page clear to both visitors and search engines. It covers:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {onPageElements.map((el, i) => (
                  <div key={i} className="flex items-start gap-2.5 bg-slate-50 p-3.5 rounded-xl border border-gray-200">
                    <Check className="w-4 h-4 text-pink-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-gray-800 font-medium">{el}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Service 3: Local SEO */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2.5">
                <MapPin className="w-5 h-5 text-pink-600" />
                Local SEO for Beauty Clinics
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                Local SEO for Beauty Clinics Dubai owners rely on helps nearby customers find real locations. It includes:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {localSeoElements.map((el, i) => (
                  <div key={i} className="flex items-start gap-2.5 bg-white p-3.5 rounded-xl border border-gray-200 shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-pink-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-gray-800 font-medium">{el}</span>
                  </div>
                ))}
              </div>
              <div className="p-4 rounded-xl bg-white border border-pink-200 text-sm text-gray-700 leading-relaxed">
                This work never involves fake reviews, fabricated locations, or misleading business information. Those practices harm customers and can put your listings at risk. For more on this service, see DigLip7's{" "}
                <Link to="/uae/dubai/local-seo" className="text-pink-600 font-bold hover:underline">
                  Local SEO Dubai
                </Link>{" "}
                page.
              </div>
            </div>

            {/* Service 4: Beauty Treatment Page SEO with Supporting Image 1 */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2.5">
                    <Layers className="w-5 h-5 text-pink-600" />
                    Beauty Treatment Page SEO
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                    Dedicated pages let a clinic target specific services such as facials, skincare treatments, laser hair removal, skin rejuvenation, cosmetic procedures, and body treatments. Strong treatment pages offer original descriptions, relevant FAQs, appropriate treatment information, and clear enquiry options. Include only treatments the business genuinely provides, and avoid copying the same text across pages with a few words swapped.
                  </p>
                  <p className="text-pink-900 font-semibold text-sm sm:text-base mb-6">
                    This is the heart of Beauty Treatment Website SEO Dubai: one useful page per meaningful service, rather than a single page trying to cover everything.
                  </p>
                  <div className="space-y-3">
                    {treatmentCategories.map((cat, i) => (
                      <div key={i} className="p-3.5 rounded-xl bg-slate-50 border border-gray-200">
                        <h4 className="text-sm font-bold text-gray-900">{cat.name}</h4>
                        <p className="text-xs text-gray-600 mt-1">{cat.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Supporting Image 1 Slot: Treatment Page Structure */}
                <div className="lg:col-span-5">
                  <Card3D className="w-full">
                    <div className="bg-white p-2.5 sm:p-3.5 rounded-3xl border border-pink-200 shadow-lg">
                      <BeautySEOImage
                        src={beautyImages.supporting1.src}
                        alt={beautyImages.supporting1.alt}
                        width={beautyImages.supporting1.width}
                        height={beautyImages.supporting1.height}
                        aspect="aspect-[16/9]"
                      />
                    </div>
                  </Card3D>
                </div>
              </div>
            </div>

            {/* Service 5: Technical SEO for Beauty Websites */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2.5">
                <Settings className="w-5 h-5 text-pink-600" />
                Technical SEO for Beauty Websites
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                Technical problems can quietly hold good content back. A technical review typically looks at:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {technicalSeoPoints.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5 bg-white p-3.5 rounded-xl border border-gray-200 shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-pink-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-gray-800 font-medium">{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Service 6: Content Marketing */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200 shadow-xs">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2.5">
                <MessageSquare className="w-5 h-5 text-pink-600" />
                Content Marketing for Beauty Clinics
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                Useful content answers questions before a customer books. Helpful topics include treatment preparation, aftercare, choosing appropriate services, frequently asked questions, and comparisons between treatments. Medical or clinical statements must be accurate and reviewed by qualified professionals where necessary.
              </p>
              <p className="text-sm font-medium text-gray-700 pt-3 border-t border-gray-100">
                DigLip7's{" "}
                <Link to="/digital-market/content-marketing" className="text-pink-600 font-bold hover:underline">
                  content marketing
                </Link>{" "}
                page covers this in more detail.
              </p>
            </div>

            {/* Service 7: Google Maps SEO */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2.5">
                <Globe className="w-5 h-5 text-pink-600" />
                Google Maps SEO for Beauty Clinics in Dubai
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Google Maps SEO for Beauty Clinics starts with accurate profile information, relevant categories, genuine reviews, local relevance, and a consistent online presence. Maps positions depend on several factors, including relevance, distance, and prominence, so no provider can promise a specific position.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SEO PERFORMANCE TRACKING AND REPORTING ================= */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-gray-200/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
              SEO Performance Tracking and Reporting
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              SEO should be measured against business-relevant outcomes. Using appropriate tools and properly configured analytics, DigLip7 can report on:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
            {/* Left: Metric List */}
            <div className="lg:col-span-6 space-y-3">
              {[
                "Organic clicks and impressions",
                "Search queries driving qualified traffic",
                "Landing-page performance for individual treatments",
                "Relevant enquiries and consultation bookings",
                "Click-to-call interactions and WhatsApp clicks",
                "Conversion rates, where tracking is available",
              ].map((m, i) => (
                <div key={i} className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-pink-600 shrink-0 mt-0.5" />
                  <span className="text-gray-800 text-sm sm:text-base font-medium">{m}</span>
                </div>
              ))}
            </div>

            {/* Right: Supporting Image 2 Slot: Reporting */}
            <div className="lg:col-span-6">
              <Card3D className="w-full">
                <div className="bg-white p-2.5 sm:p-3.5 rounded-3xl border border-pink-200 shadow-lg">
                  <BeautySEOImage
                    src={beautyImages.supporting2.src}
                    alt={beautyImages.supporting2.alt}
                    width={beautyImages.supporting2.width}
                    height={beautyImages.supporting2.height}
                    aspect="aspect-[16/9]"
                  />
                </div>
              </Card3D>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-pink-200 text-gray-700 text-sm sm:text-base leading-relaxed">
            Tracking should be tested before its numbers guide decisions, and an enquiry should not be mistaken for a confirmed booking.
          </div>
        </div>
      </section>

      {/* ================= SEO STRATEGIES FOR DIFFERENT BEAUTY BUSINESSES ================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
              SEO Strategies for Different Beauty Businesses
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Not every business needs the same approach. Keyword targeting, service pages, and local SEO should reflect each business's actual services and audience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessTypeStrategies.map((b, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-gray-200 flex flex-col justify-between">
                <div>
                  <span className="inline-block px-2.5 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-semibold mb-3">
                    {b.badge}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{b.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LOCAL SEO FOR BEAUTY CLINICS ACROSS DUBAI ================= */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-gray-200/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
            Local SEO for Beauty Clinics Across Dubai
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            A clinic can research location-specific opportunities across Dubai's most active commercial and residential areas:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {dubaiNeighbourhoods.map((area, i) => (
              <div key={i} className="bg-white p-3.5 rounded-xl border border-gray-200 text-center font-medium text-sm text-gray-800 shadow-xs">
                {area}
              </div>
            ))}
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
            <p>
              Customers often prefer somewhere close to home or work, so understanding where your audience searches is useful.
            </p>
            <p>
              However, a dedicated location page should exist only when it offers unique value and accurately reflects where the business operates. A clinic with one branch in Business Bay should not create separate pages for every neighbourhood it does not serve. Thin, repetitive doorway pages add little for visitors and risk problems with search engines. Where several real branches exist, each can have its own page with a genuine address, hours, available treatments, and directions.
            </p>
          </div>
        </div>
      </section>

      {/* ================= COMMON BEAUTY CLINIC SEO MISTAKES ================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6">
            Common Beauty Clinic SEO Mistakes
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

      {/* ================= DEDICATED VISUAL ASSETS & IMAGE FRAMEWORK ================= */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-white via-slate-50 to-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-200 text-pink-800 text-xs sm:text-sm font-semibold mb-3">
              <ImageIcon className="w-4 h-4 text-pink-600" />
              <span>Visual Media &amp; Search Architecture</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              Beauty Clinic SEO Visual Assets &amp; Image Framework
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Visual media plays an essential role in how search engines and prospective patients understand your beauty practice. Below is the framework of visual assets and healthcare compliance standards across our Beauty Clinic SEO Dubai strategy.
            </p>
          </div>

          {/* 3-Card Grid for Media Asset Sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Section 1: Featured Guide */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-4 flex flex-col">
              <BeautySEOImage
                src={beautyImages.featured.src}
                alt={beautyImages.featured.alt}
                width={beautyImages.featured.width}
                height={beautyImages.featured.height}
                aspect="aspect-[16/9]"
              />
              <h3 className="font-bold text-gray-900 text-base mt-4 text-center">
                Beauty Clinic SEO Dubai Strategy Guide
              </h3>
            </div>

            {/* Section 2: Page Structure Diagram */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-4 flex flex-col">
              <BeautySEOImage
                src={beautyImages.supporting1.src}
                alt={beautyImages.supporting1.alt}
                width={beautyImages.supporting1.width}
                height={beautyImages.supporting1.height}
                aspect="aspect-[16/9]"
              />
              <h3 className="font-bold text-gray-900 text-base mt-4 text-center">
                Treatment &amp; Location Page Structure
              </h3>
            </div>

            {/* Section 3: Measurement Checklist */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-4 flex flex-col">
              <BeautySEOImage
                src={beautyImages.supporting2.src}
                alt={beautyImages.supporting2.alt}
                width={beautyImages.supporting2.width}
                height={beautyImages.supporting2.height}
                aspect="aspect-[16/9]"
              />
              <h3 className="font-bold text-gray-900 text-base mt-4 text-center">
                Beauty Clinic SEO Reporting &amp; Analytics
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
                  <strong>Use original or licensed images only.</strong> Avoid before-and-after photos unless consent and advertising rules established by UAE health authorities (MOHAP and DHA) are strictly met.
                </p>
                <p className="text-amber-900/80 text-xs sm:text-sm leading-relaxed">
                  Have a qualified professional review any treatment-related statements, and check current UAE advertising and health-authority requirements before publishing clinical aesthetic claims.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOW TO CHOOSE A BEAUTY CLINIC SEO AGENCY IN DUBAI ================= */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-gray-200/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
            How to Choose a Beauty Clinic SEO Agency in Dubai
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            Choosing a Beauty Clinic SEO Agency Dubai businesses can trust means asking about process, not just promises. Look for:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-8">
            {agencySelectionCriteria.map((c, i) => (
              <div key={i} className="bg-white p-4 sm:p-5 rounded-xl border border-gray-200 shadow-xs flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-pink-600 shrink-0 mt-0.5" />
                <span className="text-gray-800 text-sm sm:text-base leading-relaxed">{c}</span>
              </div>
            ))}
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
            <p>
              A Beauty Clinic Marketing Agency Dubai may also offer paid search or social support, which can complement SEO. DigLip7's{" "}
              <Link to="/digital-market/PPC-Advertising" className="text-pink-600 font-bold hover:underline">
                PPC Advertising
              </Link>{" "}
              page explains one such option. Whichever agency you consider, ask for a clear explanation of what it will do and how it will report.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHY CONSIDER DIGLIP7 FOR BEAUTY CLINIC SEO? ================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
            Why Consider DigLip7 for Beauty Clinic SEO?
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            DigLip7 takes a practical, transparent approach that adapts to your clinic's situation:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-8">
            {diglip7ProcessSteps.map((step, i) => (
              <div key={i} className="bg-slate-50 p-4 sm:p-5 rounded-xl border border-gray-200 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-pink-100 text-pink-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span className="text-gray-800 text-sm sm:text-base leading-relaxed">{step}</span>
              </div>
            ))}
          </div>

          <div className="bg-pink-50/70 p-6 rounded-2xl border border-pink-200 text-pink-950 text-sm sm:text-base leading-relaxed space-y-2">
            <p>
              The right scope depends on your existing site, treatments, locations, and competition. DigLip7 does not guarantee rankings, fixed lead volumes, or specific revenue growth. The aim is to find realistic opportunities and prioritize them.
            </p>
            <p className="pt-2 border-t border-pink-200/60 font-medium">
              You can also explore DigLip7's wider{" "}
              <Link to="/digital-market/seoservices" className="text-pink-700 font-bold hover:underline">
                SEO services
              </Link>{" "}
              and{" "}
              <Link to="/uae/dubai/seo-services" className="text-pink-700 font-bold hover:underline">
                Dubai SEO Services
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ================= FREQUENTLY ASKED QUESTIONS ================= */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-gray-200/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-8 text-center">
            Frequently Asked Questions About Beauty Clinic SEO Dubai
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
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? "bg-pink-600 text-white rotate-180" : "bg-gray-100 text-gray-500"
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
                        <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-gray-700 leading-relaxed border-t border-gray-100 bg-pink-50/20">
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

      {/* ================= CTA: DISCUSS YOUR BEAUTY CLINIC SEO STRATEGY ================= */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-pink-50 via-white to-pink-50 text-pink-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6 leading-tight">
            Discuss Your Beauty Clinic SEO Strategy with DigLip7
          </h2>

          <p className="text-black-100/95 text-base sm:text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
            Relevant search visibility, well-optimized treatment pages, careful local SEO, useful content, and reliable measurement work best together. For a beauty clinic in Dubai, they help the right people find accurate information and take the next step with confidence.
          </p>

          <p className="text-black-200/90 text-sm sm:text-base leading-relaxed mb-10 max-w-3xl mx-auto">
            If you would like to review where your website stands and what Beauty Clinic SEO Dubai could mean for your business, DigLip7 is ready to talk through your goals. No rankings, enquiries, or revenue are promised, only a clear, practical plan.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact">
              <button className="px-8 sm:px-10 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-sm sm:text-base rounded-full shadow-2xl hover:scale-105 transition-all flex items-center gap-2 cursor-pointer">
                <span>Discuss Your Beauty Clinic SEO Strategy</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>

            <Link to="/contact">
              <button className="px-8 sm:px-10 py-4 bg-white/10 hover:bg-white/20 text-black border border-pink-300/40 font-bold text-sm sm:text-base rounded-full backdrop-blur-md shadow-lg hover:scale-105 transition-all flex items-center gap-2 cursor-pointer">
                <span>Request an SEO Audit</span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DubaiBeautyClinicSEO;
