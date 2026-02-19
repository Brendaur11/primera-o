import React from "react";
import { motion } from "framer-motion";
import SecretLetter from "./SecretLetter";
import LoveQuiz from "./LoveQuiz";
import { Heart, Smile, Sparkles, House, Bird } from "lucide-react";
import moments from "../data/moments";

export default function AnniversaryPage() {
  return (
    <div className="scroll-smooth bg-gradient-to-b from-blue-300 via-blue-300 to-blue-400 min-h-screen text-white overflow-x-hidden">
      
      {/* ================= HERO SECTION ================= */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3 mb-6"
        >
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <Heart className="w-12 h-12 text-pink-400 fill-pink-400" />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold">
            Feliz 1 año Piojito
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
          className="max-w-xl text-lg md:text-xl text-gray-100 mb-8"
        >
          Nuestro primer año juntas, lleno de amor, viajes, malas rachas pero tambien con éxtios, proyectos y mucho compañerismo.
        </motion.p>

        <motion.a
          href="#historia"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
          whileHover={{ scale: 1.05 }}
          className="relative inline-block px-8 py-3 rounded-full bg-pink-300 text-white font-semibold overflow-hidden shadow-lg"
        >
          <span className="relative z-10">
            Seguí bajando para ver nuestra historia
          </span>
          <motion.div
            className="absolute inset-0 bg-white opacity-10"
            whileHover={{ opacity: 0.2 }}
            transition={{ duration: 0.3 }}
          />
        </motion.a>
      </section>

      {/* ================= NUESTRA HISTORIA ================= */}
      <section
        id="historia"
        className="py-20 px-6 max-w-6xl mx-auto text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-3xl md:text-4xl font-bold mb-14"
        >
          Nuestra Historia 💙
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {moments.map((moment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.2,
                duration: 0.8,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.03 }}
              className="bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-xl"
            >
              <div className="h-80 rounded-xl mb-5 overflow-hidden">
                <img
                  src={moment.image}
                  alt={moment.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl font-semibold mb-2">
                {moment.title}
              </h3>

              <p className="text-gray-100 text-sm">
                {moment.text}
              </p>
            </motion.div>
          ))}
        </div>

      </section>

      {/* ================= CARTA SECRETA ================= */}
      <section className="py-24 px-6 text-center relative">
        <SecretLetter />
      </section>


      {/* ================= RAZONES ================= */}
      <section className="py-20 px-6 text-center bg-white/10 backdrop-blur-sm">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          Razones por las que te amo ✨
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.3 }}
          className="flex flex-col gap-6 max-w-xl mx-auto"
        >
          {[
            { icon: Bird, text: "Porque me generas paz." },
            { icon: Smile, text: "Por tu compañerismo y madurez." },
            { icon: Heart, text: "Porque tenes el corazon mas grande del mundo." },
            { icon: Sparkles, text: "Porque haces que todo tenga sentido." },
            { icon: House, text: "Porque sos mi hogar." },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="flex items-center justify-center gap-4 bg-white/20 rounded-xl py-4 px-6 shadow-md"
            >
              <item.icon className="text-pink-400 w-6 h-6" />
              <p className="text-gray-100">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="py-24 px-6 text-center">
        <LoveQuiz />
      </section>


      {/* ================= FINAL SECTION ================= */}
      <section className="relative py-24 px-6 text-center overflow-hidden">
        
        {/* Subtle floating particles */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute top-10 left-10 w-24 h-24 bg-pink-300/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"
        />

        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          Gracias por este primer año hermoso 💖
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg text-gray-100 mb-8"
        >
          19 • 02 • 2026
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="px-10 py-4 rounded-full bg-pink-400 font-semibold shadow-xl relative overflow-hidden"
        >
          <span className="relative z-10">Te amo hoy y siempre</span>
          <motion.div
            className="absolute inset-0 bg-white opacity-10"
            whileHover={{ opacity: 0.2 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </section>
    </div>
  );
}
