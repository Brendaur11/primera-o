import { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";


export default function LoveQuiz() {
  const questions = [
    {
      question: "¿Dónde fue nuestro primer beso?",
      options: ["En tu casa", "En un baño", "En un boliche"],
      answer: 0,
    },
    {
      question: "¿Quién se fijo primera en la otra?",
      options: ["Vos (bren)", "Yo", "Ambas al mismo tiempo"],
      answer: 0,
    },
    {
      question: "¿Que comida solemos pedir siempre?",
      options: ["Hamburguesas", "Lomito", "Pizza"],
      answer: 1,
    },
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (index) => {
    if (index === questions[current].answer) {
      setScore(score + 1);
    }

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white/20 backdrop-blur-md rounded-2xl p-8 shadow-xl">
      {!finished ? (
        <>
          <h2 className="text-2xl font-bold mb-6">
            💖 ¿Cuánto sabes de nosotras?
          </h2>

          <p className="mb-6">{questions[current].question}</p>

          <div className="flex flex-col gap-4">
            {questions[current].options.map((option, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.03 }}
                onClick={() => handleAnswer(index)}
                className="bg-pink-400 text-white py-2 rounded-full"
              >
                {option}
              </motion.button>
            ))}
          </div>
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h2 className="text-2xl font-bold mb-4">
            Resultado 💕
          </h2>

          <p className="text-lg">
            {score === 3
              ? "¡Perfecto piojo! te amo ❤️"
              : score === 2
              ? "Casi perfecto... pero te amo igual 💙"
              : "Mmm... creo que necesitamos más citas 😏"}
          </p>

          <div className="mt-4 flex justify-center">
            <Heart className="text-pink-400 fill-pink-400 animate-pulse" />
          </div>
        </motion.div>
      )}
    </div>
  );
}
