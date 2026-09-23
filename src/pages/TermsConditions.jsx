import React, { useState, useMemo } from "react";
import SEO from "../components/SEO";
import {
  FileCheck,
  Briefcase,
  Layers,
  Copyright,
  ShieldAlert,
  HelpCircle,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
  Scale,
  Search,
  Copy,
  Check,
  ShieldCheck,
  AlertCircle,
  CreditCard,
  Lock,
  FileSignature,
  Printer,
  Download,
  Building,
  RefreshCw,
  Globe,
  DollarSign,
  UserCheck,
  SlidersHorizontal,
  ExternalLink,
} from "lucide-react";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://diglip7.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Terms & Conditions",
      "item": "https://diglip7.com/terms-and-conditions"
    }
  ]
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://diglip7.com/terms-and-conditions#webpage",
  "url": "https://diglip7.com/terms-and-conditions",
  "name": "Terms & Conditions | DigLip7 Tech",
  "description": "Terms & Conditions governing use of the DigLip7 Tech website and its digital marketing, web development, and design services.",
  "isPartOf": {
    "@id": "https://diglip7.com/#website"
  },
  "about": {
    "@id": "https://diglip7.com/#organization"
  },
  "dateModified": "2026-09-17",
  "inLanguage": "en-IN"
};

const termsSchemas = [breadcrumbSchema, webPageSchema];

const TermsConditions = () => {
  const [activeSection, setActiveSection] = useState("who-these-terms-apply-to");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    window.print();
  };

  const sections = [
    {
      id: "who-these-terms-apply-to",
      title: "Who These Terms Apply To",
      icon: UserCheck,
      badge: "Applicability",
    },
    {
      id: "acceptance-of-terms",
      title: "Acceptance of Terms",
      icon: CheckCircle2,
      badge: "Agreement",
    },
    {
      id: "our-services",
      title: "Our Services",
      icon: Briefcase,
      badge: "Scope & Deliverables",
    },
    {
      id: "free-seo-audits",
      title: "Free SEO Audits and Consultations",
      icon: Sparkles,
      badge: "Discovery",
    },
    {
      id: "payment-terms",
      title: "Quotations, Proposals, and Payment Terms",
      icon: CreditCard,
      badge: "Billing & Fees",
    },
    {
      id: "client-responsibilities",
      title: "Client Responsibilities",
      icon: FileSignature,
      badge: "Cooperation",
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      icon: Copyright,
      badge: "Ownership & Code",
    },
    {
      id: "service-specific-terms",
      title: "Service-Specific Terms",
      icon: Layers,
      badge: "SEO, PPC & Dev",
    },
    {
      id: "revisions-changes",
      title: "Revisions and Project Changes",
      icon: RefreshCw,
      badge: "Revisions",
    },
    {
      id: "cancellations-refunds",
      title: "Cancellations, Pauses, and Refunds",
      icon: DollarSign,
      badge: "Refunds & Policy",
    },
    {
      id: "confidentiality",
      title: "Confidentiality",
      icon: Lock,
      badge: "Non-Disclosure",
    },
    {
      id: "limitation-of-liability",
      title: "Limitation of Liability",
      icon: ShieldAlert,
      badge: "Liability Cap",
    },
    {
      id: "third-party-platforms",
      title: "Third-Party Platforms and Tools",
      icon: Globe,
      badge: "Platforms",
    },
    {
      id: "website-use",
      title: "Website Use",
      icon: Building,
      badge: "Acceptable Use",
    },
    {
      id: "governing-law",
      title: "Governing Law and Dispute Resolution",
      icon: Scale,
      badge: "Jurisdiction",
    },
    {
      id: "force-majeure",
      title: "Force Majeure",
      icon: AlertTriangle,
      badge: "Unforeseen Events",
    },
    {
      id: "changes-to-terms",
      title: "Changes to These Terms",
      icon: RefreshCw,
      badge: "Updates",
    },
    {
      id: "severability",
      title: "Severability",
      icon: ShieldCheck,
      badge: "Validity",
    },
    {
      id: "contact-us",
      title: "Contact Us",
      icon: Mail,
      badge: "Support",
    },
  ];

  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return sections;
    return sections.filter((s) =>
      s.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pt-24 pb-20 font-sans text-slate-800">
      <SEO
        title="Terms & Conditions | DigLip7 Tech"
        description="Terms & Conditions governing use of the DigLip7 Tech website and its digital marketing, web development, and design services."
        canonical="https://diglip7.com/terms-and-conditions"
        ogType="website"
        ogImage="https://diglip7.com/favicon-32x32.png"
        keywords="Terms & Conditions, DigLip7 terms, service agreement, commercial terms, digital marketing terms"
        schema={termsSchemas}
      />
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-950 via-teal-900 to-emerald-950 text-white py-16 sm:py-20 px-6 sm:px-10 lg:px-20 border-b border-teal-800">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#2dd4bf_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-400/30 text-teal-300 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md">
            <Scale className="w-4 h-4 text-teal-400" />
            <span>Commercial Agreement • Plain Language Terms</span>
          </div>

          <p className="text-teal-400 font-bold uppercase tracking-widest text-sm mb-2">
            DIGLIP7 TECH
          </p>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 text-white">
            Terms &amp; Conditions
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-teal-200 mb-6">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-teal-400" />
              <span>Last updated: <strong>September 17, 2026</strong></span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Building className="w-4 h-4 text-teal-400" />
              <span>Noida, Uttar Pradesh, India</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-teal-400" />
              <span>Admin@diglip7.com</span>
            </span>
          </div>

          {/* Action Buttons (Hero) */}
          <div className="flex flex-wrap items-center justify-center gap-3 print:hidden">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-850 hover:bg-teal-800 text-white font-semibold text-xs sm:text-sm rounded-xl border border-teal-500/40 shadow-md backdrop-blur-sm transition hover:scale-105 cursor-pointer"
            >
              <Printer className="w-4 h-4 text-teal-300" />
              <span>Print</span>
            </button>
            <button
              onClick={handleDownloadPDF}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-xs sm:text-sm rounded-xl border border-emerald-400/40 shadow-md backdrop-blur-sm transition hover:scale-105 cursor-pointer"
            >
              <Download className="w-4 h-4 text-emerald-200" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT WRAPPER ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12 print:mt-0 print:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* ================= LEFT SIDEBAR (Sticky Navigation) ================= */}
          <aside className="lg:col-span-4 sticky top-28 space-y-4 print:hidden">
            {/* Quick Actions (Print, Download PDF & Search) */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-2.5">
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={handlePrint}
                  className="flex items-center justify-center gap-1.5 py-2 px-3 bg-teal-800 hover:bg-teal-900 text-white font-bold text-xs rounded-xl transition shadow-sm cursor-pointer"
                  title="Print Terms"
                >
                  <Printer className="w-3.5 h-3.5 text-teal-300" />
                  <span>Print</span>
                </button>
                <button
                  onClick={handleDownloadPDF}
                  className="flex items-center justify-center gap-1.5 py-2 px-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl transition shadow-sm cursor-pointer"
                  title="Download as PDF"
                >
                  <Download className="w-3.5 h-3.5 text-emerald-200" />
                  <span>Download PDF</span>
                </button>
              </div>

              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search terms, clauses, IP..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:bg-white transition"
                />
              </div>
            </div>

            {/* Table of Contents Card */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm max-h-[70vh] overflow-y-auto no-scrollbar">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Contents ({filteredSections.length})
                </h3>
              </div>

              <nav className="space-y-1">
                {filteredSections.map((sec) => {
                  const Icon = sec.icon;
                  const isActive = activeSection === sec.id;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => scrollToSection(sec.id)}
                      className={`w-full text-left flex items-center justify-between px-3 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all group cursor-pointer ${
                        isActive
                          ? "bg-teal-50 text-teal-900 font-bold border border-teal-200 shadow-xs"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0 pr-2">
                        <Icon
                          className={`w-4 h-4 shrink-0 transition ${
                            isActive ? "text-teal-700" : "text-slate-400 group-hover:text-teal-600"
                          }`}
                        />
                        <span className="truncate">{sec.title}</span>
                      </div>
                      <ChevronRight
                        className={`w-3.5 h-3.5 shrink-0 transition ${
                          isActive ? "text-teal-700" : "text-slate-300 opacity-0 group-hover:opacity-100"
                        }`}
                      />
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Quick Contact Box */}
            <div className="bg-gradient-to-br from-teal-900 to-emerald-900 text-white p-5 rounded-2xl border border-teal-700 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-teal-300 font-bold text-xs uppercase tracking-wider">
                <Mail className="w-4 h-4 text-teal-300" />
                <span>Contracts &amp; Legal Desk</span>
              </div>
              <p className="text-xs text-teal-100/90 leading-relaxed">
                Have questions about our terms, proposals, or service agreements? Contact us directly:
              </p>
              <div className="pt-2 border-t border-teal-800/80 space-y-1.5 text-xs">
                <p className="font-semibold text-white">DigLip7 Tech</p>
                <p className="text-teal-200">A-55, A Block, Sector-2 Noida, UP, India</p>
                <p>
                  <a href="mailto:Admin@diglip7.com" className="text-teal-300 hover:underline font-bold">
                    Admin@diglip7.com
                  </a>
                </p>
                <p>
                  <a href="tel:+919650608788" className="text-teal-300 hover:underline">
                    +91 9650608788
                  </a>
                </p>
              </div>
            </div>
          </aside>

          {/* ================= RIGHT MAIN CONTENT ================= */}
          <main className="lg:col-span-8 space-y-8">
            {/* Welcome & Introduction Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
                  <Scale className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    DIGLIP7 TECH Terms &amp; Conditions
                  </h2>
                  <p className="text-xs text-slate-400 font-medium">
                    Last updated: September 17, 2026
                  </p>
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Welcome to DigLip7 Tech. These Terms &amp; Conditions govern your use of our website at{" "}
                <a
                  href="https://diglip7.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-700 font-bold hover:underline"
                >
                  https://diglip7.com/
                </a>{" "}
                and any digital marketing, web development, or design services you purchase from us. By browsing our site, submitting an enquiry, or signing on as a client, you agree to the terms below.
              </p>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                We have kept the legal language to a minimum. If anything here feels unclear, email us at{" "}
                <a href="mailto:Admin@diglip7.com" className="text-teal-700 font-bold hover:underline">
                  Admin@diglip7.com
                </a>{" "}
                before you sign a contract with us, and we will walk you through it.
              </p>
            </div>

            {/* SECTION 1: Who These Terms Apply To */}
            <section
              id="who-these-terms-apply-to"
              className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-5 scroll-mt-28"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 text-teal-800 flex items-center justify-center font-bold">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  Who These Terms Apply To
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                These terms apply to anyone who visits our website, fills out a contact form, requests a free SEO audit, or engages DigLip7 Tech for services such as SEO, PPC advertising, social media marketing, content marketing, email marketing, online reputation management, web development, app development, e-commerce development, or UI/UX and graphic design.
              </p>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                If you are entering into an agreement with us on behalf of a company, you confirm that you have the authority to bind that company to these terms.
              </p>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1 text-xs sm:text-sm">
                <p className="font-bold text-slate-900">DigLip7 Tech</p>
                <p className="text-slate-600">A-55, A Block, Sector-2 Noida, Uttar Pradesh, India</p>
                <p className="text-slate-600">
                  Email:{" "}
                  <a href="mailto:Admin@diglip7.com" className="text-teal-800 font-bold hover:underline">
                    Admin@diglip7.com
                  </a>
                </p>
                <p className="text-slate-600">
                  Phone:{" "}
                  <a href="tel:+919650608788" className="text-teal-800 font-bold hover:underline">
                    +91 9650608788
                  </a>
                </p>
              </div>
            </section>

            {/* SECTION 2: Acceptance of Terms */}
            <section
              id="acceptance-of-terms"
              className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-5 scroll-mt-28"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 text-teal-800 flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  Acceptance of Terms
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                By using our website or engaging our services, you accept these Terms &amp; Conditions in full. If you disagree with any part of them, please do not use the website or proceed with a service order. We may update these terms from time to time, and the version in effect at the time you place an order or sign a proposal is the one that applies to that engagement.
              </p>
            </section>

            {/* SECTION 3: Our Services */}
            <section
              id="our-services"
              className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-5 scroll-mt-28"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 text-teal-800 flex items-center justify-center font-bold">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  Our Services
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                DigLip7 Tech provides digital marketing and web development services, including but not limited to:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-2">
                {[
                  "Search engine optimization (SEO) and local SEO",
                  "Pay-per-click (PPC) advertising management",
                  "Social media marketing and content marketing",
                  "Email marketing campaigns",
                  "Online reputation management",
                  "E-commerce marketing and development",
                  "Video and influencer marketing",
                  "AI-powered digital marketing and voice search optimization",
                  "Web development, mobile app development, and custom software development",
                  "CMS development, API development and integration, and cloud application development",
                  "UI/UX design and graphic design",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5 text-xs sm:text-sm text-slate-800"
                  >
                    <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                The exact scope, deliverables, timeline, and fees for any engagement will be set out in a separate proposal, quotation, or service agreement, which forms part of the contract between you and DigLip7 Tech alongside these terms. Where the two documents conflict, the specific proposal governs.
              </p>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                We aim to describe our services accurately on this website, but marketing pages are, by nature, general. Screenshots, case studies, and traffic figures reflect real client outcomes but are not a guarantee that your business will see identical results. Every website, market, and industry behaves differently.
              </p>
            </section>

            {/* SECTION 4: Free SEO Audits and Consultations */}
            <section
              id="free-seo-audits"
              className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-5 scroll-mt-28"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 text-teal-800 flex items-center justify-center font-bold">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  Free SEO Audits and Consultations
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                We occasionally offer a free SEO audit or a complimentary discovery call, as advertised on our homepage. These are provided at our discretion and are intended to help us understand your business and propose a suitable engagement. A free audit does not create a binding service contract; it is a preliminary assessment, not a substitute for a paid, in-depth audit conducted under a signed agreement.
              </p>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                We reserve the right to limit free audits to one per business, decline a request where we do not believe we are a good fit, or withdraw the offer at any time without notice.
              </p>
            </section>

            {/* SECTION 5: Quotations, Proposals, and Payment Terms */}
            <section
              id="payment-terms"
              className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-5 scroll-mt-28"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 text-teal-800 flex items-center justify-center font-bold">
                  <CreditCard className="w-5 h-5" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  Quotations, Proposals, and Payment Terms
                </h2>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Quotations</h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Any price we provide, verbally or in writing, is valid for the period stated in the quotation, typically 30 days, unless we confirm otherwise.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Payment schedule</h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Most engagements require an upfront deposit before work begins, with the balance payable according to milestones or on a monthly retainer basis, as specified in your service agreement.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Late payment</h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Invoices not paid by the due date may attract a late fee and may result in a pause of active work, including PPC campaigns, hosting, or content publishing, until the account is settled.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Third-party costs</h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Ad spend on platforms like Google Ads or Meta, domain registration, hosting fees, licensing costs for premium themes or plugins, and similar third-party charges are billed separately unless your agreement states they are included.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Taxes</h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    All fees are exclusive of applicable GST unless stated otherwise, and GST will be added to invoices as required under Indian law.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Currency</h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Unless agreed otherwise, invoices are issued in Indian Rupees (INR).
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 6: Client Responsibilities */}
            <section
              id="client-responsibilities"
              className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-5 scroll-mt-28"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 text-teal-800 flex items-center justify-center font-bold">
                  <FileSignature className="w-5 h-5" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  Client Responsibilities
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                For us to do good work, we need your cooperation. As a client, you agree to:
              </p>

              <div className="space-y-2.5">
                {[
                  "Provide accurate business information, brand assets, and access credentials required to deliver the service",
                  "Respond to requests for approvals, feedback, or content within a reasonable time, since delays on your end can push back agreed timelines",
                  "Ensure that any content, images, trademarks, or data you provide to us do not infringe on a third party's rights",
                  "Maintain ownership and proper licensing of any domain, hosting account, or third-party software you ask us to work with",
                  "Pay invoices on time, as outlined in your service agreement",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 text-xs sm:text-sm text-slate-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs sm:text-sm text-amber-900">
                <strong>Project Timelines:</strong> If your delay in providing materials or approvals affects a project deadline, DigLip7 Tech is not responsible for the resulting delay.
              </div>
            </section>

            {/* SECTION 7: Intellectual Property */}
            <section
              id="intellectual-property"
              className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-5 scroll-mt-28"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 text-teal-800 flex items-center justify-center font-bold">
                  <Copyright className="w-5 h-5" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  Intellectual Property
                </h2>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Deliverables</h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Once an invoice for a project is paid in full, ownership of the final deliverables, such as a completed website, designed graphics, or written content created specifically for you, transfers to you, except where third-party licensed material is involved.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Our tools and methods</h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    We retain ownership of our internal processes, frameworks, proprietary scripts, and any pre-existing tools, templates, or code libraries used to deliver the work. You receive a licence to use these as part of your deliverable, but you do not acquire ownership of the underlying tool itself.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Portfolio rights</h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Unless you request confidentiality in writing, we reserve the right to showcase completed work, including website screenshots, campaign results, and case studies, in our portfolio and marketing materials.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Third-party assets</h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Stock photos, fonts, plugins, and licensed software used in your project remain subject to their original licence terms, and it is your responsibility to maintain any ongoing licence fees after project handover, unless we have agreed to manage this for you.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Trademarks</h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    All DigLip7 Tech branding, logos, and the content of this website are our property or used under licence, and may not be copied or reused without written permission.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: Service-Specific Terms */}
            <section
              id="service-specific-terms"
              className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-5 scroll-mt-28"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 text-teal-800 flex items-center justify-center font-bold">
                  <Layers className="w-5 h-5" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  Service-Specific Terms
                </h2>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="text-sm font-bold text-slate-900 mb-1">SEO services</h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    SEO is a long-term process influenced by search engine algorithms, competitor activity, and market conditions outside our control. We do not guarantee specific rankings, traffic numbers, or timeframes, even where our marketing materials reference average results achieved across our client base. Rankings can also drop due to algorithm updates unrelated to our work.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="text-sm font-bold text-slate-900 mb-1">PPC advertising</h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    We manage campaigns using your approved budget on platforms such as Google Ads and Meta. Ad spend is controlled by you or billed through your account, and platform policies, auction dynamics, and market competition affect performance. We are not liable for ad account suspensions caused by a violation of the platform's own advertising policies, provided we followed standard practices.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Web and app development</h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Development projects follow the scope, milestones, and revision limits set out in your proposal. Requests beyond the agreed scope, sometimes called scope creep, will be quoted separately. We conduct reasonable testing before handover, but you are responsible for a final review and sign-off before a site or app goes live.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Hosting and maintenance</h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    If we provide hosting or maintenance as part of your package, service levels, backup frequency, and uptime commitments will be specified in that package. Where you host with a third party, we are not responsible for outages or issues caused by that provider.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: Revisions and Project Changes */}
            <section
              id="revisions-changes"
              className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-5 scroll-mt-28"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 text-teal-800 flex items-center justify-center font-bold">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  Revisions and Project Changes
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Each service package includes a defined number of revisions, as outlined in your proposal. Additional revision rounds, beyond what is included, are billed at our standard hourly or project rate. Significant changes to project scope after work has started, such as a request to rebuild a website in a different technology stack, will require a revised quotation and timeline.
              </p>
            </section>

            {/* SECTION 10: Cancellations, Pauses, and Refunds */}
            <section
              id="cancellations-refunds"
              className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-5 scroll-mt-28"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 text-teal-800 flex items-center justify-center font-bold">
                  <DollarSign className="w-5 h-5" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  Cancellations, Pauses, and Refunds
                </h2>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Cancellation by you</h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    You may cancel an ongoing service by providing written notice, subject to the notice period stated in your agreement, typically 30 days for retainer-based services. Work completed up to the cancellation date, and any non-refundable third-party costs already incurred, remain payable.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Cancellation by us</h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    We reserve the right to terminate an engagement, with notice, if payments are significantly overdue, if a client is abusive toward our team, or if we are asked to carry out work that we reasonably believe is unethical, illegal, or in breach of a platform's terms of service, such as black-hat SEO tactics or misleading advertising.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Money-back guarantee</h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Where we advertise a 30-day money-back guarantee for a specific service, the exact conditions, eligible services, and exclusions will be stated in your service agreement or on the relevant offer page. As a general rule, a refund request must be raised within 30 days of the service start date, and it does not apply to third-party costs already spent on your behalf, such as ad spend or domain purchases.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Pauses</h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    If you wish to pause a retainer service temporarily, let us know in writing, and we will confirm whether a pause fee or reduced scope applies, since some fixed costs, like software licences, continue during a pause.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: Confidentiality */}
            <section
              id="confidentiality"
              className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-5 scroll-mt-28"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 text-teal-800 flex items-center justify-center font-bold">
                  <Lock className="w-5 h-5" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  Confidentiality
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Both parties agree to keep confidential any non-public business information shared during the engagement, including strategy documents, financial data, login credentials, and customer information. This obligation continues even after the engagement ends, except where disclosure is required by law or where the information becomes public through no fault of either party.
              </p>
            </section>

            {/* SECTION 12: Limitation of Liability */}
            <section
              id="limitation-of-liability"
              className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-5 scroll-mt-28"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 text-teal-800 flex items-center justify-center font-bold">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  Limitation of Liability
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                DigLip7 Tech will perform services with reasonable skill and care, but we do not guarantee uninterrupted or error-free operation of any website, application, or campaign, nor specific business outcomes such as revenue growth or ranking positions.
              </p>

              <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-2">
                <div className="flex items-center gap-2 text-teal-300 font-bold text-xs uppercase">
                  <ShieldAlert className="w-4 h-4 text-teal-400" />
                  <span>Liability Cap</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  To the maximum extent permitted by law, our total liability for any claim arising from our services is limited to the amount you paid us for the specific service giving rise to the claim in the preceding three months. We are not liable for indirect or consequential losses, including loss of profits, loss of data, or business interruption, except where such liability cannot be excluded under Indian law.
                </p>
              </div>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Nothing in these terms limits liability for fraud, wilful misconduct, or any liability that cannot legally be excluded.
              </p>
            </section>

            {/* SECTION 13: Third-Party Platforms and Tools */}
            <section
              id="third-party-platforms"
              className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-5 scroll-mt-28"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 text-teal-800 flex items-center justify-center font-bold">
                  <Globe className="w-5 h-5" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  Third-Party Platforms and Tools
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Our services often rely on third-party platforms, such as Google, Meta, WordPress, Shopify, or various hosting and email marketing providers. We are not responsible for outages, policy changes, price increases, or account restrictions imposed by these third parties, though we will make reasonable efforts to help you navigate such issues where they affect your project.
              </p>
            </section>

            {/* SECTION 14: Website Use */}
            <section
              id="website-use"
              className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-5 scroll-mt-28"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 text-teal-800 flex items-center justify-center font-bold">
                  <Building className="w-5 h-5" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  Website Use
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                If you are simply browsing our website, you agree not to misuse it, such as by attempting to gain unauthorised access to our systems, scraping content without permission, transmitting malware, or using our contact forms to send spam. Content on this website, including text, graphics, and the underlying code, is protected by copyright and may not be reproduced without permission, other than for personal, non-commercial reference.
              </p>
            </section>

            {/* SECTION 15: Governing Law and Dispute Resolution */}
            <section
              id="governing-law"
              className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-5 scroll-mt-28"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 text-teal-800 flex items-center justify-center font-bold">
                  <Scale className="w-5 h-5" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  Governing Law and Dispute Resolution
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                These Terms &amp; Conditions are governed by the laws of India. Any dispute arising out of or relating to these terms or a service agreement with DigLip7 Tech will first be addressed through good-faith negotiation between the parties. If a resolution cannot be reached, the dispute will be subject to the exclusive jurisdiction of the courts of Noida, Uttar Pradesh.
              </p>
            </section>

            {/* SECTION 16: Force Majeure */}
            <section
              id="force-majeure"
              className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-5 scroll-mt-28"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 text-teal-800 flex items-center justify-center font-bold">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  Force Majeure
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Neither party will be held liable for a delay or failure to perform obligations caused by circumstances beyond reasonable control, including natural disasters, internet or platform-wide outages, government action, or other events of force majeure. The affected party will notify the other as soon as reasonably possible and both parties will work in good faith to resume the engagement once the circumstances pass.
              </p>
            </section>

            {/* SECTION 17: Changes to These Terms */}
            <section
              id="changes-to-terms"
              className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-5 scroll-mt-28"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 text-teal-800 flex items-center justify-center font-bold">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  Changes to These Terms
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                We may revise these Terms &amp; Conditions periodically to reflect changes in our services or in the law. The updated version will be posted on this page with a new “Last updated” date. For active clients, material changes affecting an ongoing agreement will be communicated directly, and continued use of our services after such notice constitutes acceptance of the revised terms.
              </p>
            </section>

            {/* SECTION 18: Severability */}
            <section
              id="severability"
              className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-5 scroll-mt-28"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 text-teal-800 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  Severability
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                If any provision of these terms is found to be invalid or unenforceable by a court, the remaining provisions will continue in full force and effect, and the invalid provision will be replaced with one that most closely reflects its original intent.
              </p>
            </section>

            {/* SECTION 19: Contact Us */}
            <section
              id="contact-us"
              className="bg-gradient-to-br from-teal-950 via-teal-900 to-emerald-950 text-white p-6 sm:p-8 rounded-3xl border border-teal-700 shadow-md space-y-6 scroll-mt-28"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-teal-800">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-teal-300 flex items-center justify-center font-bold">
                  <Mail className="w-5 h-5" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-white">
                  Contact Us
                </h2>
              </div>

              <p className="text-teal-100/90 text-sm sm:text-base leading-relaxed">
                If you have questions about these Terms &amp; Conditions or a service agreement with us, reach out:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/15">
                  <p className="text-white font-bold text-base mb-1">DigLip7 Tech</p>
                  <p className="text-xs sm:text-sm text-teal-100/90 leading-relaxed">
                    A-55, A Block, Sector-2 Noida, Uttar Pradesh, India
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/15 space-y-2">
                  <div>
                    <span className="text-xs font-semibold text-teal-300">Email: </span>
                    <a href="mailto:Admin@diglip7.com" className="text-white font-bold text-sm hover:text-teal-300 transition">
                      Admin@diglip7.com
                    </a>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-teal-300">Phone: </span>
                    <a href="tel:+919650608788" className="text-white font-bold text-sm hover:text-teal-300 transition">
                      +91 9650608788
                    </a>
                  </div>
                </div>
              </div>

              <div className="text-teal-100/90 text-sm leading-relaxed border-t border-teal-800/80 pt-4">
                <p>
                  We aim to respond to all enquiries within 24 hours on business days.
                </p>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
