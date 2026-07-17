
import heroImage from "../assets/heroImage.png";
import heroBg from "../assets/hero_background.png";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pb-16 pt-24 md:pb-24 md:pt-16">
      
      <div
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="absolute -left-20 top-10 z-0 h-72 w-72 rounded-full bg-blue-300/30 blur-3xl"></div>
      <div className="absolute -right-20 bottom-10 z-0 h-80 w-80 rounded-full bg-purple-300/30 blur-3xl"></div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-400 to-amber-400 px-4 py-2 text-sm font-bold text-slate-800 shadow-sm"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-slate-800"></span>
            #1 CRM Solution for Growing Businesses
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-4 text-5xl font-bold leading-tight text-gray-900 lg:text-6xl"
          >
            Transform Every
            <span className="mx-2 bg-gradient-to-r from-purple-600 via-blue-500 to-blue-950 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Lead Into a Loyal Customer
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 max-w-xl text-lg font-semibold leading-8 text-gray-600"
          >
            Manage leads, automate follow-ups, track your sales pipeline, and
            grow your business with one powerful CRM platform designed for
            modern teams.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <button className="group flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white shadow-lg shadow-blue-600/30 transition duration-300 hover:-translate-y-1 hover:bg-blue-700">
              Start Free Trial
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

            <button  className="flex items-center gap-2 rounded-xl border border-blue-600 px-7 py-3 font-semibold text-blue-600 transition duration-300 hover:bg-blue-600 hover:text-white">
              <PlayCircle size={18} />
              Book Demo
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <div className="rounded-2xl border border-gray-200 bg-white/70 px-5 py-3 backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-purple-600">10K+</h3>
              <p className="text-sm text-gray-600">Happy Customers</p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white/70 px-5 py-3 backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-emerald-600">99.9%</h3>
              <p className="text-sm text-gray-600">Uptime</p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white/70 px-5 py-3 backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-blue-600">
                4.9 <span className="text-yellow-400">★</span>
              </h3>
              <p className="text-sm text-gray-600">Customer Rating</p>
            </div>
          </motion.div>
        </div>

   
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-blue-400/30 via-purple-400/20 to-transparent blur-2xl"></div>
          <img
            src={heroImage}
            alt="CRM Dashboard"
            className="relative w-full max-w-2xl rounded-xl shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;