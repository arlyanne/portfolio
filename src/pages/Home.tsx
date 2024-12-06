import { motion } from "framer-motion";
import React from "react";

import profile from "../../src/assets/profile.png";
import Avatar from "../components/Avatar/Avatar";

export default function Home() {
  // Variantes de animação para texto
  const textVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  // Variantes de animação para imagem
  const imageVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  // Variantes de animação para o fundo com gradiente animado
  const backgroundVariants = {
    hidden: { backgroundPosition: "0% 0%" },
    visible: { backgroundPosition: "100% 100%" },
  };

  return (
    <section className="min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white flex items-center justify-center pt-16 px-8">
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
        variants={backgroundVariants}
      />

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-x-6 relative z-10">
        <motion.div
          className="text-center md:text-left md:w-1/2 pl-8"
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, ease: "easeOut" }}
          variants={textVariants}
        >
          <h1 className="text-4xl md:text-6xl font-bold font-extrabold text-gray-300">
            Olá,{" "}
            <span role="img" aria-label="wave">
              👋
            </span>{" "}
            Me chamo Maria Arlyanne.
          </h1>
          <p className="text-lg md:text-2xl mt-4 font-semibold text-gray-300">
            Sou desenvolvedora web apaixonada por tecnologia.
          </p>
        </motion.div>

        <motion.div
          className="mt-6 md:mt-0 md:w-1/2 flex justify-center"
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          variants={imageVariants}
        >
          <motion.div
            className="avatar-container"
            whileHover={{ scale: 1.1, rotate: 10 }}
            transition={{ duration: 0.3 }}
          >
            <Avatar imageUrl={profile} altText="Foto Mª Arlyanne" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
