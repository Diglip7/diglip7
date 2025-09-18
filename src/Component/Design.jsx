import React from "react";
import { motion } from "framer-motion";
import video from "../images/videoframe_2436.png"
function Design() {
  return (
    <div>
        <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 bg-white">
      
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 text-center md:text-left space-y-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold leading-snug">
          DIGITAL MARKETING <br />
          <span className="text-yellow-600">AGENCY</span>
        </h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-lg">
          DigLip7: Drive more traffic & Grow faster! <br />
          Get your free Consultation today!
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-6 py-3 border-2 border-gray-800 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-gray-900 hover:text-white transition"
        >
          GET CONSULTATION
        </motion.button>
      </motion.div>

      {/* Right Video */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 flex justify-center mt-10 md:mt-0"
      >
        <video
          src={video} // 🔹 Put your video inside "public" folder
          autoPlay
          loop
          muted
          playsInline
          className="rounded-2xl shadow-xl w-[90%] md:w-[500px] lg:w-[600px] object-cover"
        />
      </motion.div>
    </section>
    </div>
  )
}

export default Design