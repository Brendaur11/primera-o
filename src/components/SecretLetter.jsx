import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import { useState } from "react";

export default function SecretLetter() {
  const [open, setOpen] = useState(false);
  const [revealed, setRevealed] = useState(false);

  return (
    <>
      {!open && (
        <motion.button
          onClick={() => setOpen(true)}
          whileHover={{ scale: 1.05 }}
          className="px-8 py-4 bg-black rounded-full font-semibold shadow-lg flex items-center gap-2 mx-auto"
        >
          <Lock size={18} />
          Desbloquear carta secreta
        </motion.button>
      )}

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-6"
        >
          <motion.div
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="bg-white text-gray-800 rounded-2xl p-8 max-w-md w-full shadow-2xl text-center"
          >
            {!revealed ? (
              <>
                <motion.div
                  animate={{ rotate: [0, -3, 3, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="text-4xl mb-6"
                >
                  💌
                </motion.div>

                <button
                  onClick={() => setRevealed(true)}
                  className="px-6 py-2 bg-blue-400 text-white rounded-full"
                >
                  Abrir carta
                </button>
              </>
            ) : (
              <>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-lg leading-relaxed"
                >
                  Piojo,
                  <br /><br />
                  Feliz añito juntas! ❤️ Se que quizás para algunos un año no es nada, pero creeme que para mi es mucho.
                  Al menos creo que es un  gran logro para nosotras, porque no solo es un año de relación, sino un año de crecimiento, de aprendizaje y de amor.
                  Me pone mas que feliz este primer año, anhelo un monton que sean muchisimos mas, que sigamos creciendo, aprendiendo,
                  viajando y proyectando juntas. Gracias por ser esa compañera incondicondicional, por apañarme, cuidarme y enseñarme.
                  Gracias por cada esfuerzo y trabajo que hiciste para que hoy podamos estar aca. Prometo darte el mundo entero, porque 
                  por vos cruzo mar y tierra.
                  <br /><br />
                  Te amo para siempre.
                </motion.p>

                <button
                  onClick={() => {
                    setOpen(false);
                    setRevealed(false);
                  }}
                  className="mt-6 px-6 py-2 bg-blue-400 text-white rounded-full"
                >
                  Cerrar
                </button>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
