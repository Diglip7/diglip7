import React, { useState, useMemo } from "react";
import SEO from "../components/SEO";
import {
  Shield,
  Lock,
  Eye,
  Database,
  Mail,
  Phone,
  MapPin,
  Clock,
  ChevronRight,
  Search,
  Copy,
  Check,
  HelpCircle,
  ShieldCheck,
  AlertCircle,
  Cookie,
  Globe,
  Share2,
  Scale,
  Building,
  UserCheck,
  Server,
  RefreshCw,
  Printer,
  Download,
} from "lucide-react";

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState("who-we-are");
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
      id: "who-we-are",
      title: "Who We Are",
      icon: Building,
      badge: "Entity Info",
    },
    {
      id: "information-we-collect",
      title: "Information We Collect",
      icon: Database,
      badge: "Data Categories",
    },
    {
      id: "how-we-use-information",
      title: "How We Use Your Information",
      icon: Eye,
      badge: "Purposes",
    },
    {
      id: "legal-basis",
      title: "Legal Basis for Processing",
      icon: Scale,
      badge: "Compliance",
    },
    {
      id: "cookies-tracking",
      title: "Cookies and Tracking Technologies",
      icon: Cookie,
      badge: "Tracking",
    },
    {
      id: "third-party-services",
      title: "Third-Party Services We Use",
      icon: Server,
      badge: "Partners",
    },
    {
      id: "how-we-share",
      title: "How We Share Information",
      icon: Share2,
      badge: "Disclosures",
    },
    {
      id: "data-retention",
      title: "Data Retention",
      icon: Clock,
      badge: "Retention",
    },
    {
      id: "your-rights",
      title: "Your Rights",
      icon: UserCheck,
      badge: "DPDP & GDPR",
    },
    {
      id: "data-security",
      title: "Data Security",
      icon: Lock,
      badge: "Protection",
    },
    {
      id: "children-privacy",
      title: "Children's Privacy",
      icon: Shield,
      badge: "Age Limit",
    },
    {
      id: "international-transfers",
      title: "International Data Transfers",
      icon: Globe,
      badge: "Cross-Border",
    },
    {
      id: "policy-changes",
      title: "Changes to This Policy",
      icon: RefreshCw,
      badge: "Revisions",
    },
    {
      id: "contact-grievance",
      title: "Contact and Grievance Officer",
      icon: Mail,
      badge: "Redressal",
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
        title="Privacy Policy – Data Protection & Security Practices"
        description="Review the official Privacy Policy of DigLip7 Technologies. Learn how we collect, safeguard, and process your data in compliance with global privacy standards."
        canonical="https://diglip7.com/privacy-policy"
        keywords="DigLip7 privacy policy, data protection, cookies policy, GDPR compliance"
      />
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-950 via-teal-900 to-emerald-950 text-white py-16 sm:py-20 px-6 sm:px-10 lg:px-20 border-b border-teal-800">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#2dd4bf_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-400/30 text-teal-300 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md">
            <ShieldCheck className="w-4 h-4 text-teal-400" />
            <span>DPDP Act 2023 &amp; GDPR Compliant • Plain Language Policy</span>
          </div>

          <p className="text-teal-400 font-bold uppercase tracking-widest text-sm mb-2">
            DIGLIP7 TECH
          </p>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 text-white">
            Privacy Policy
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
                  title="Print Policy"
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
                  placeholder="Search privacy topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:bg-white transition"
                />
              </div>
            </div>

            {/* Table of Contents Card */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm max-h-[70vh] overflow-y-auto no-scrollbar">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-900">
                  Quick Navigation
                </span>
                <span className="text-[11px] bg-teal-50 text-teal-700 font-semibold px-2 py-0.5 rounded-full">
                  14 Sections
                </span>
              </div>

              <nav className="space-y-1">
                {filteredSections.map((item, idx) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-xs sm:text-sm font-medium transition-all duration-150 group ${
                        isActive
                          ? "bg-teal-800 text-white shadow-md shadow-teal-900/10"
                          : "text-slate-600 hover:bg-teal-50 hover:text-teal-900"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <Icon
                          className={`w-4 h-4 shrink-0 transition-colors ${
                            isActive ? "text-teal-300" : "text-slate-400 group-hover:text-teal-700"
                          }`}
                        />
                        <span className="truncate">{idx + 1}. {item.title}</span>
                      </div>
                      <ChevronRight
                        className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                          isActive
                            ? "text-teal-300 translate-x-0.5"
                            : "text-slate-300 group-hover:translate-x-0.5"
                        }`}
                      />
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Quick Contact Assistance Card */}
            <div className="bg-gradient-to-br from-teal-900 to-emerald-950 text-white p-6 rounded-2xl shadow-lg border border-teal-800">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-teal-300 mb-4">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base mb-1 text-white">Have a Privacy Question?</h4>
              <p className="text-xs text-teal-100/80 mb-4 leading-relaxed">
                If something here is unclear or you want to request data deletion, contact our Grievance Officer.
              </p>
              <a
                href="mailto:Admin@diglip7.com"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-teal-500 hover:bg-teal-400 text-teal-950 font-bold text-xs sm:text-sm rounded-xl transition shadow-md"
              >
                <Mail className="w-4 h-4" />
                <span>Email Grievance Officer</span>
              </a>
            </div>
          </aside>

          {/* ================= RIGHT MAIN LEGAL DOCUMENT ================= */}
          <main className="lg:col-span-8 space-y-8 print:col-span-12 print:w-full print:space-y-6">
            {/* Introductory Text Blocks (Verbatim) */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                At DigLip7 Tech, we build websites, run marketing campaigns, and handle a fair amount of data along the way. Some of that data belongs to you. This Privacy Policy explains what we collect, why we collect it, who we share it with, and what control you have over it.
              </p>
              <p>
                We have tried to write this in plain language instead of the usual wall of legal text. If something here is unclear, email us at <a href="mailto:Admin@diglip7.com" className="font-bold text-teal-800 underline">Admin@diglip7.com</a> and we will explain it properly.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 bg-teal-50/70 border border-teal-200/80 p-4 rounded-2xl">
                This policy applies to <a href="https://diglip7.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-teal-900 underline">https://diglip7.com/</a>, any subdomains we operate, and the services we deliver to clients, including SEO, PPC advertising, social media marketing, content marketing, email marketing, web and app development, and design work.
              </p>
            </div>

            {/* ================= SECTION 1: WHO WE ARE ================= */}
            <section
              id="who-we-are"
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm transition-all hover:shadow-md hover:border-teal-300 space-y-4"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center font-bold">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase font-bold tracking-wider text-teal-700">Section 1</span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">Who We Are</h2>
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                DigLip7 Tech is a digital marketing and web development company based in Noida, Uttar Pradesh, India.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold mb-1">
                    <MapPin className="w-4 h-4 text-teal-700" />
                    <span>Registered Address</span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-slate-800">
                    A-55, A Block, Sector-2 Noida, Uttar Pradesh, India
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold mb-1">
                    <Mail className="w-4 h-4 text-teal-700" />
                    <span>Email</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <a href="mailto:Admin@diglip7.com" className="text-xs sm:text-sm font-bold text-teal-800 hover:underline">
                      Admin@diglip7.com
                    </a>
                    <button
                      onClick={() => handleCopy("Admin@diglip7.com", "email")}
                      className="p-1 text-slate-400 hover:text-teal-700 rounded-md transition"
                      title="Copy email"
                    >
                      {copiedField === "email" ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold mb-1">
                    <Phone className="w-4 h-4 text-teal-700" />
                    <span>Phone</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <a href="tel:+919650608788" className="text-xs sm:text-sm font-bold text-teal-800 hover:underline">
                      +91 9650608788
                    </a>
                    <button
                      onClick={() => handleCopy("+919650608788", "phone")}
                      className="p-1 text-slate-400 hover:text-teal-700 rounded-md transition"
                      title="Copy phone"
                    >
                      {copiedField === "phone" ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                For the purposes of Indian data protection law, DigLip7 Tech acts as a Data Fiduciary when we decide how and why your personal data is used. When we process data on behalf of a client, for example managing their ad accounts or CRM, we act as a Data Processor and follow that client's instructions.
              </p>
            </section>

            {/* ================= SECTION 2: INFORMATION WE COLLECT ================= */}
            <section
              id="information-we-collect"
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm transition-all hover:shadow-md hover:border-teal-300 space-y-6"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center font-bold">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase font-bold tracking-wider text-teal-700">Section 2</span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">Information We Collect</h2>
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                We collect information in three broad ways: what you give us directly, what we gather automatically when you browse, and what we receive from other services.
              </p>

              {/* Sub-section A */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3">
                <h3 className="text-base font-bold text-teal-950">Information You Give Us</h3>
                <p className="text-slate-700 text-sm">
                  Most of the data we hold comes straight from you. This includes:
                </p>
                <ul className="space-y-2.5 text-slate-700 text-sm">
                  <li className="flex items-start gap-2.5">
                    <span className="text-teal-700 font-bold text-base leading-none">•</span>
                    <span><strong>Contact form submissions.</strong> When you fill out the “Send a Query” form or request a free SEO audit, we collect your name, email address, phone number, and the message you write.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-teal-700 font-bold text-base leading-none">•</span>
                    <span><strong>Consultation and call bookings.</strong> If you schedule a call with us, we record your preferred time, timezone, and any background you share about your business.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-teal-700 font-bold text-base leading-none">•</span>
                    <span><strong>Client onboarding details.</strong> Once you become a client, we collect business information such as your company name, GST number, billing address, website credentials, and access to advertising or analytics accounts you authorise.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-teal-700 font-bold text-base leading-none">•</span>
                    <span><strong>Payment information.</strong> Invoices are processed through third-party payment gateways. We see the transaction record, the amount, and the status. We do not store your full card number or CVV on our servers.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-teal-700 font-bold text-base leading-none">•</span>
                    <span><strong>Job applications.</strong> If you apply for a role with us, we collect your CV, work history, and anything else you send.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-teal-700 font-bold text-base leading-none">•</span>
                    <span><strong>Newsletter signups.</strong> Your email address, and nothing more unless you volunteer it.</span>
                  </li>
                </ul>
              </div>

              {/* Sub-section B */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3">
                <h3 className="text-base font-bold text-teal-950">Information We Collect Automatically</h3>
                <p className="text-slate-700 text-sm">
                  When you visit our website, some data is recorded without you typing anything:
                </p>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex items-start gap-2.5">
                    <span className="text-teal-700 font-bold text-base leading-none">•</span>
                    <span>IP address and approximate location, usually accurate only to the city level</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-teal-700 font-bold text-base leading-none">•</span>
                    <span>Browser type and version, operating system, and device category</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-teal-700 font-bold text-base leading-none">•</span>
                    <span>Pages you visited, time spent on each page, and the path you took through the site</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-teal-700 font-bold text-base leading-none">•</span>
                    <span>The referring website or search query that brought you here</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-teal-700 font-bold text-base leading-none">•</span>
                    <span>Date and time of your visit</span>
                  </li>
                </ul>
                <p className="text-slate-700 text-sm pt-1">
                  This is standard web analytics data. We use it to understand which pages are working, which ones are not, and where visitors drop off.
                </p>
              </div>

              {/* Sub-section C */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3">
                <h3 className="text-base font-bold text-teal-950">Information From Third Parties</h3>
                <p className="text-slate-700 text-sm">
                  We sometimes receive data about you from:
                </p>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex items-start gap-2.5">
                    <span className="text-teal-700 font-bold text-base leading-none">•</span>
                    <span>Advertising platforms such as Google Ads and Meta, which report on conversions and audience segments</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-teal-700 font-bold text-base leading-none">•</span>
                    <span>Analytics providers that supply aggregated behaviour data</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-teal-700 font-bold text-base leading-none">•</span>
                    <span>Publicly available business directories, LinkedIn, and company websites, when we research prospects for outreach</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-teal-700 font-bold text-base leading-none">•</span>
                    <span>Clients who share their own customer lists with us so we can run campaigns on their behalf</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* ================= SECTION 3: HOW WE USE INFORMATION ================= */}
            <section
              id="how-we-use-information"
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm transition-all hover:shadow-md hover:border-teal-300 space-y-4"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center font-bold">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase font-bold tracking-wider text-teal-700">Section 3</span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">How We Use Your Information</h2>
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                We use personal data for specific, limited purposes. Here is the full list.
              </p>

              <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  <strong>To respond to your enquiries.</strong> If you ask for a quote or an SEO audit, we use your contact details to get back to you. This is the most common reason we hold anyone's data.
                </p>
                <p>
                  <strong>To deliver our services.</strong> Running a PPC campaign or building an e-commerce site requires access to accounts, content, and sometimes customer data. We use what we are given only to do the work that has been agreed.
                </p>
                <p>
                  <strong>To improve our website and marketing.</strong> Analytics tells us that a certain landing page converts at two percent while another converts at eight percent. We use that to fix the weaker page.
                </p>
                <p>
                  <strong>To send marketing communications.</strong> If you have opted in, we may send case studies, service updates, or offers. Every email has an unsubscribe link, and we honour unsubscribes promptly.
                </p>
                <p>
                  <strong>To process payments and maintain accounts.</strong> Invoicing, tax records, and financial reconciliation.
                </p>
                <p>
                  <strong>To meet legal obligations.</strong> Indian tax law requires us to retain certain financial records. We also comply with lawful requests from authorities.
                </p>
                <p>
                  <strong>To protect our business.</strong> Detecting fraud, preventing abuse of our forms, and securing our systems.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-teal-50 border border-teal-200 mt-4 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-teal-800 shrink-0 mt-0.5" />
                <p className="text-sm text-teal-950 font-medium leading-relaxed">
                  We do not sell your personal data. We have never done it and we do not plan to. We also do not share your data with unrelated third parties for their own marketing.
                </p>
              </div>
            </section>

            {/* ================= SECTION 4: LEGAL BASIS ================= */}
            <section
              id="legal-basis"
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm transition-all hover:shadow-md hover:border-teal-300 space-y-4"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center font-bold">
                  <Scale className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase font-bold tracking-wider text-teal-700">Section 4</span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">Legal Basis for Processing</h2>
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Where the law requires us to have a legal basis, we rely on one of the following:
              </p>

              <ul className="space-y-3 text-slate-700 text-sm sm:text-base">
                <li className="flex items-start gap-2.5">
                  <span className="text-teal-700 font-bold text-base leading-none">•</span>
                  <span><strong>Consent.</strong> You filled in a form, ticked a box, or accepted cookies.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-teal-700 font-bold text-base leading-none">•</span>
                  <span><strong>Contract.</strong> We need the data to deliver a service you have engaged us for.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-teal-700 font-bold text-base leading-none">•</span>
                  <span><strong>Legal obligation.</strong> Tax, accounting, and regulatory requirements.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-teal-700 font-bold text-base leading-none">•</span>
                  <span><strong>Legitimate interest.</strong> Running and securing our business, and modest B2B outreach where we believe our services are genuinely relevant to your company. You can object to this at any time.</span>
                </li>
              </ul>
            </section>

            {/* ================= SECTION 5: COOKIES ================= */}
            <section
              id="cookies-tracking"
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm transition-all hover:shadow-md hover:border-teal-300 space-y-4"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center font-bold">
                  <Cookie className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase font-bold tracking-wider text-teal-700">Section 5</span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">Cookies and Tracking Technologies</h2>
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Our website uses cookies, which are small text files stored in your browser. We use four categories.
              </p>

              <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  <strong>Essential cookies</strong> keep the site functioning. They remember your session and protect our forms from spam submissions. These cannot be turned off without breaking the site.
                </p>
                <p>
                  <strong>Analytics cookies</strong> come mainly from Google Analytics 4. They tell us how many people visited, which pages they read, and how long they stayed. The data is aggregated and we do not use it to identify individuals.
                </p>
                <p>
                  <strong>Advertising cookies</strong> are set by Google Ads, Meta Pixel, and LinkedIn Insight Tag. These allow us to show relevant ads to people who have visited our site and to measure whether those ads led to an enquiry. This is why you may see a DigLip7 ad after browsing our services page.
                </p>
                <p>
                  <strong>Functional cookies</strong> remember preferences such as language or whether you have dismissed a notification banner.
                </p>
                <p>
                  You can control cookies through your browser settings. Every major browser lets you block cookies, delete existing ones, or receive a warning before one is set. Blocking analytics and advertising cookies will not affect your ability to use the site. You can also opt out of Google Analytics using the browser add-on Google provides, and adjust ad personalisation in your Google account settings.
                </p>
              </div>
            </section>

            {/* ================= SECTION 6: THIRD-PARTY SERVICES ================= */}
            <section
              id="third-party-services"
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm transition-all hover:shadow-md hover:border-teal-300 space-y-4"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center font-bold">
                  <Server className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase font-bold tracking-wider text-teal-700">Section 6</span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">Third-Party Services We Use</h2>
                </div>
              </div>

              <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  Running a marketing agency means relying on a number of platforms. The main ones that may process your data include Google Analytics and Google Ads, Meta advertising tools, LinkedIn, email marketing platforms, cloud hosting and storage providers, CRM software, and payment gateways.
                </p>
                <p>
                  Each of these operates under its own privacy policy. We select vendors that maintain reasonable security standards, but we cannot control how they handle data once it reaches their systems. We encourage you to read the privacy policies of any platform you interact with.
                </p>
                <p>
                  Our website may also link to external sites. Once you click through, you are on someone else's property and this policy no longer applies.
                </p>
              </div>
            </section>

            {/* ================= SECTION 7: HOW WE SHARE INFORMATION ================= */}
            <section
              id="how-we-share"
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm transition-all hover:shadow-md hover:border-teal-300 space-y-4"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center font-bold">
                  <Share2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase font-bold tracking-wider text-teal-700">Section 7</span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">How We Share Information</h2>
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                We share personal data in a small number of situations:
              </p>

              <ul className="space-y-3 text-slate-700 text-sm sm:text-base">
                <li className="flex items-start gap-2.5">
                  <span className="text-teal-700 font-bold text-base leading-none">•</span>
                  <span>With service providers who help us operate, such as hosting companies, email platforms, and accounting software. They are given only the access they need.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-teal-700 font-bold text-base leading-none">•</span>
                  <span>With clients, where we are processing data on their behalf as part of a campaign.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-teal-700 font-bold text-base leading-none">•</span>
                  <span>With professional advisers such as lawyers or accountants, where necessary.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-teal-700 font-bold text-base leading-none">•</span>
                  <span>With authorities, when required by Indian law, a court order, or a valid legal request.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-teal-700 font-bold text-base leading-none">•</span>
                  <span>In a business transfer, if DigLip7 Tech is ever acquired or merged, data may pass to the new owner under the same protections.</span>
                </li>
              </ul>
            </section>

            {/* ================= SECTION 8: DATA RETENTION ================= */}
            <section
              id="data-retention"
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm transition-all hover:shadow-md hover:border-teal-300 space-y-4"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center font-bold">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase font-bold tracking-wider text-teal-700">Section 8</span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">Data Retention</h2>
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                We do not keep data indefinitely.
              </p>

              <ul className="space-y-3 text-slate-700 text-sm sm:text-base">
                <li className="flex items-start gap-2.5">
                  <span className="text-teal-700 font-bold text-base leading-none">•</span>
                  <span>Enquiry form submissions that do not convert are retained for up to 24 months, then deleted.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-teal-700 font-bold text-base leading-none">•</span>
                  <span>Client records and project files are kept for the duration of the engagement and for 3 years afterwards, in case of disputes or follow-up work.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-teal-700 font-bold text-base leading-none">•</span>
                  <span>Financial and tax records are held for 8 years, as required under Indian law.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-teal-700 font-bold text-base leading-none">•</span>
                  <span>Marketing email lists are retained until you unsubscribe, after which we keep a suppression record so we do not accidentally contact you again.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-teal-700 font-bold text-base leading-none">•</span>
                  <span>Job applications are kept for 12 months unless you ask us to remove them sooner.</span>
                </li>
              </ul>
            </section>

            {/* ================= SECTION 9: YOUR RIGHTS ================= */}
            <section
              id="your-rights"
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm transition-all hover:shadow-md hover:border-teal-300 space-y-4"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center font-bold">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase font-bold tracking-wider text-teal-700">Section 9</span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">Your Rights</h2>
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Under India's Digital Personal Data Protection Act, 2023, and comparable laws such as the GDPR for visitors in Europe, you have the following rights:
              </p>

              <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  <strong>Right to access.</strong> Ask us what personal data we hold about you and receive a copy.
                </p>
                <p>
                  <strong>Right to correction.</strong> Ask us to fix data that is wrong, incomplete, or out of date.
                </p>
                <p>
                  <strong>Right to erasure.</strong> Ask us to delete your data, unless we are legally required to keep it.
                </p>
                <p>
                  <strong>Right to withdraw consent.</strong> If you consented to something, you can change your mind. Withdrawal applies going forward, not retroactively.
                </p>
                <p>
                  <strong>Right to object.</strong> Tell us to stop processing your data for marketing or legitimate interest purposes.
                </p>
                <p>
                  <strong>Right to grievance redressal.</strong> Raise a complaint with us and receive a response. If you are not satisfied, you may escalate to the Data Protection Board of India.
                </p>
                <p>
                  <strong>Right to nominate.</strong> Under the DPDP Act, you may nominate another individual to exercise your rights in the event of death or incapacity.
                </p>
                <p className="pt-2">
                  To exercise any of these, email <a href="mailto:Admin@diglip7.com" className="font-bold text-teal-800 underline">Admin@diglip7.com</a> with your request. We will verify your identity before acting, and we aim to respond within 30 days. There is no charge for a reasonable request.
                </p>
              </div>
            </section>

            {/* ================= SECTION 10: DATA SECURITY ================= */}
            <section
              id="data-security"
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm transition-all hover:shadow-md hover:border-teal-300 space-y-4"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center font-bold">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase font-bold tracking-wider text-teal-700">Section 10</span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">Data Security</h2>
                </div>
              </div>

              <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  We take practical steps to protect the data we hold. Our website runs over HTTPS with an SSL certificate. Access to client accounts and internal systems is restricted to team members who need it, and protected with strong passwords and two-factor authentication. Our hosting providers maintain their own physical and network security controls, and we review access permissions periodically.
                </p>
                <p>
                  No system is completely secure, and we will not pretend otherwise. If a data breach occurs that is likely to affect you, we will notify you and the relevant authorities as required by law.
                </p>
              </div>
            </section>

            {/* ================= SECTION 11: CHILDREN'S PRIVACY ================= */}
            <section
              id="children-privacy"
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm transition-all hover:shadow-md hover:border-teal-300 space-y-4"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center font-bold">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase font-bold tracking-wider text-teal-700">Section 11</span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">Children's Privacy</h2>
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Our services are aimed at businesses, not individuals under 18. We do not knowingly collect personal data from children. If you believe a child has submitted information through our website, contact us and we will delete it.
              </p>
            </section>

            {/* ================= SECTION 12: INTERNATIONAL DATA TRANSFERS ================= */}
            <section
              id="international-transfers"
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm transition-all hover:shadow-md hover:border-teal-300 space-y-4"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center font-bold">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase font-bold tracking-wider text-teal-700">Section 12</span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">International Data Transfers</h2>
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                We are based in India, but some of the platforms we use store data on servers in other countries, including the United States and the European Union. When data moves across borders, we rely on the protections offered by those providers, such as standard contractual clauses, and we only work with vendors that commit to appropriate safeguards.
              </p>
            </section>

            {/* ================= SECTION 13: CHANGES TO THIS POLICY ================= */}
            <section
              id="policy-changes"
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm transition-all hover:shadow-md hover:border-teal-300 space-y-4"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center font-bold">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase font-bold tracking-wider text-teal-700">Section 13</span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">Changes to This Policy</h2>
                </div>
              </div>

              <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  We may update this Privacy Policy as our services change or as the law evolves. When we do, we will revise the “Last updated” date at the top. If the change is significant, for example a new category of data collection, we will make it obvious on our website or notify clients directly.
                </p>
                <p>
                  We recommend checking this page occasionally. Continued use of our website after an update means you accept the revised policy.
                </p>
              </div>
            </section>

            {/* ================= SECTION 14: CONTACT AND GRIEVANCE OFFICER ================= */}
            <section
              id="contact-grievance"
              className="bg-gradient-to-br from-teal-900 via-teal-950 to-emerald-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-teal-800 space-y-6"
            >
              <div className="flex items-center gap-3 pb-4 border-b border-teal-800/80">
                <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold text-xl border border-teal-400/30">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-teal-300">Section 14</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Contact and Grievance Officer</h2>
                </div>
              </div>

              <p className="text-teal-100/90 text-sm sm:text-base leading-relaxed">
                For any question, request, or complaint about privacy, reach out to us:
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

              <div className="space-y-2 text-teal-100/90 text-sm leading-relaxed border-t border-teal-800/80 pt-4">
                <p>
                  We endeavour to answer all enquiries within 24 hours on business days. Formal data requests are handled within 30 days.
                </p>
                <p>
                  If you are not satisfied with our response, you have the right to lodge a complaint with the Data Protection Board of India.
                </p>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
