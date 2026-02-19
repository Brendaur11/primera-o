import React from "react";
import { motion } from "framer-motion";
import { Heart, Star, Smile, Sparkles } from "lucide-react";

export default function AnniversaryPage() {
  return (
    <div className="scroll-smooth bg-gradient-to-b from-blue-200 via-blue-300 to-blue-400 min-h-screen text-white overflow-x-hidden">
      
      {/* ================= HERO SECTION ================= */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex items-center gap-3 mb-6"
        >
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <Heart className="w-10 h-10 text-pink-400 fill-pink-400" />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold">
            Feliz 1 Año Mi Amor ❤️
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
          className="max-w-xl text-lg md:text-xl text-gray-100 mb-8"
        >
          Un año de risas, abrazos, sueños compartidos y el comienzo de una
          historia que quiero que dure para siempre.
        </motion.p>

        <motion.a
          href="#historia"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
          whileHover={{ scale: 1.05 }}
          className="relative inline-block px-8 py-3 rounded-full bg-pink-400 text-white font-semibold overflow-hidden shadow-lg"
        >
          <span className="relative z-10">
            Desliza para ver nuestra historia
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
          {[1, 2, 3, 4].map((item, index) => (
            <motion.div
              key={item}
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
              {/* IMAGE PLACEHOLDER */}
              <div className="h-52 bg-gray-200 rounded-xl mb-5" />

              <h3 className="text-xl font-semibold mb-2">
                Momento Especial {item}
              </h3>

              <p className="text-gray-100 text-sm">
                Aquí irá un recuerdo hermoso de nuestra historia, uno de esos
                momentos que guardamos en el corazón y que quiero revivir cada
                día contigo.
              </p>
            </motion.div>
          ))}
        </div>
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
            { icon: Heart, text: "Porque haces que cada día sea especial." },
            { icon: Smile, text: "Porque tu sonrisa ilumina mi mundo." },
            { icon: Star, text: "Porque eres mi inspiración constante." },
            { icon: Sparkles, text: "Porque contigo todo es mágico." },
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
          Gracias por este primer año maravilloso 💖
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
