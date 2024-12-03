import { motion } from "framer-motion";
import React from "react";
import Avatar from "../Avatar/Avatar";

export default function Hero() {
  const textVariants = {
    hidden: { opacity: 0, y: -100 }, // movendo para cima inicialmente
    visible: { opacity: 1, y: 0 },   // posição final
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 100 }, // movendo para baixo inicialmente
    visible: { opacity: 1, y: 0 },  // posição final
  };

  return (
    <section className="bg-gray-900 text-white p-6 min-h-screen flex items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-x-6">
        {/* Descrição à esquerda */}
        <motion.div
          className="text-center md:text-left md:w-1/2"
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, ease: "easeOut" }}
          variants={textVariants}
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            Olá,{" "}
            <span role="img" aria-label="wave">
              👋
            </span>{" "}
            Me chamo Maria Arlyanne.
          </h1>
          <p className="text-lg md:text-2xl mt-4">
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
          <Avatar imageUrl="profile.jpg" altText="Foto de Maria Arlyanne" />
        </motion.div>
      </div>
    </section>
  );
}
