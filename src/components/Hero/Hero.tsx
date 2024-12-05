import { motion } from "framer-motion";
import React from "react";
import Avatar from "../Avatar/Avatar";
import profile from "../../assets/profile.png";

export default function Hero() {
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
    <section className="relative text-white p-6 min-h-screen flex items-center justify-center overflow-hidden">
     
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 bg-cover bg-fixed"
        initial="hidden"
        animate="visible"
        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
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
          <h1 className="text-4xl md:text-6xl font-bold font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
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

        {/* Avatar à direita */}
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
