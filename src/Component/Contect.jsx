import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import bgImage from "../images/contact.png";
import axios from "axios";
import d7 from "../images/D7.jpeg";

function Contect() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
      `${import.meta.env.VITE_API_URL}/contact`,
      formData
    );
      setStatus(res.data.msg);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setStatus("Something went wrong!");
    }
  };

  return (
    <div className="w-full">
      {/* Top Section */}
      <section
        className="w-full h-screen bg-no-repeat bg-cover bg-right flex items-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
         <div className="container   md:px-16">
              {/* Left Content */}
              <motion.div
                className="max-w-xl  p-6 rounded-2xl text-center md:text-left"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-5xl font-bold text-teal-700 mb-4">
                  Drive Growth with Expert Web & Marketing Solutions
                </h2>
                <p className="text-gray-700 text-lg md:text-xl mb-6">
                  Diglip7 help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers growing.
                </p>
      
                {/* Google Rating */}
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <img
                    src={d7}
                    alt="Google Logo"
                    className="w-6 h-6"
                  />
                  <span className="text-yellow-500 text-xl">★★★★★</span>
                  <span className="text-gray-700 text-lg">4.5</span>
                </div>
              </motion.div>
            </div>
        {/* ...same as before */}
      </section>

      {/* Form Section */}
      <div className="w-full bg-teal-100 min-h-screen pt-24">
        <div className="w-full mx-auto px-4 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Section same as before */}
              {/* Left Side - Contact Info */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h2 className="text-orange-500 font-semibold uppercase tracking-wide">
            Contact Details
          </h2>
          <h1 className="text-4xl font-bold text-gray-900">Diglip7</h1>
          <p className="text-gray-600">
            Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days.
            We will be happy to answer your questions.
          </p>

          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-orange-500 text-xl mt-1" />
              <p className="text-gray-700">
                C117, C Block, Sector 2 Noida, Uttar Pradesh
              </p>
            </div>
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-orange-500 text-xl mt-1" />
              <p className="text-gray-700">Admin@diglip7.com</p>
            </div>
            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-orange-500 text-xl mt-1" />
              <p className="text-gray-700">+91 9650608788</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 pt-4">
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-orange-500 hover:text-white transition">
              <FaFacebook />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-orange-500 hover:text-white transition">
              <FaLinkedin />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-orange-500 hover:text-white transition">
              <FaInstagram />
            </a>
          </div>
        </motion.div>

            {/* Right Section - Form */}
            <motion.div
              initial={{ x: 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-white shadow-xl rounded-2xl p-8"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Send a Query
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5 bg-">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                  />
                </div>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write Your Message"
                  rows="4"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                ></textarea>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold py-3 rounded-lg shadow-lg transition"
                >
                  Send Message
                </motion.button>
              </form>
              {status && <p className="mt-4 text-center text-green-600">{status}</p>}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contect;
