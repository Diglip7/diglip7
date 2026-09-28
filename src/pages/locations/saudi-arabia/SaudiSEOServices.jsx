import React from "react";
import { Link } from "react-router-dom";
import SEO from "../../../components/SEO";
import { Search, MapPin, CheckCircle2, ArrowRight } from "lucide-react";

const SaudiSEOServices = () => {
  return (
    <div className="overflow-x-hidden pt-24 sm:pt-28 pb-16 bg-gradient-to-b from-teal-50/40 to-white min-h-screen text-gray-800">
      <SEO
        title="SEO Services Saudi Arabia | Best SEO Agency in KSA | DigLip7"
        description="Grow your organic search presence in Saudi Arabia. DigLip7 delivers Arabic and English SEO services, local Google Maps optimization, and enterprise search strategies in KSA."
        canonical="https://diglip7.com/saudi-arabia/seo-services"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-teal-700 transition">Home</Link>
          <span>/</span>
          <Link to="/digital-market/seoservices" className="hover:text-teal-700 transition">SEO Services</Link>
          <span>/</span>
          <Link to="/saudi-arabia" className="hover:text-teal-700 transition">Saudi Arabia</Link>
          <span>/</span>
          <span className="text-teal-800 font-semibold">Saudi Arabia SEO Services</span>
        </nav>

        <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-teal-100/80 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-100 text-teal-800 text-xs sm:text-sm font-medium mb-4">
            <Search className="w-4 h-4" /> KSA Search Marketing
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-teal-900 mb-4 tracking-tight">
            SEO Services in Saudi Arabia (KSA)
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed mb-6">
            Dominating search engines in Riyadh, Jeddah, Dammam, and across the Kingdom with targeted Arabic & English SEO, high-authority link acquisitions, and technical performance.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-semibold transition-all shadow-md"
            >
              Get Free Saudi SEO Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaudiSEOServices;
