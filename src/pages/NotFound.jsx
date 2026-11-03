import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search, ShieldAlert } from "lucide-react";
import SEO from "../components/SEO";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-gray-50 via-white to-gray-50 px-4 sm:px-6 lg:px-8 py-20">
      <SEO
        title="404 - Page Not Found | DigLip7"
        description="The page you are looking for does not exist or has been permanently removed."
        noindex={true}
        robots="noindex, nofollow, noarchive"
        exactTitle={true}
      />

      <div className="max-w-xl w-full text-center">
        {/* Animated 404 Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-teal-50 border border-teal-200 text-teal-700 mb-6 shadow-sm"
        >
          <ShieldAlert className="w-10 h-10" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-6xl sm:text-7xl font-extrabold text-gray-900 tracking-tight"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl sm:text-3xl font-bold text-gray-800 mt-3"
        >
          Page Not Found or Permanently Removed
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base text-gray-600 mt-4 leading-relaxed max-w-md mx-auto"
        >
          The page or resource you requested is unavailable, has been permanently removed, or never existed on DigLip7.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-semibold shadow-md transition-all duration-200"
          >
            <Home className="w-4 h-4" />
            <span>Go to Homepage</span>
          </Link>

          <Link
            to="/digital-market"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-gray-50 text-gray-700 font-semibold border border-gray-300 shadow-sm transition-all duration-200"
          >
            <Search className="w-4 h-4" />
            <span>Explore Services</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

