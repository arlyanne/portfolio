import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NavBar() {
  const navbarVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      className="sticky top-0 z-50 bg-gray-900 text-white flex items-center justify-between px-6 py-4 shadow-xl"
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8, ease: "easeOut" }}
      variants={navbarVariants}
    >
      <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">
        Portfólio
      </div>

      <ul className="flex space-x-8">
        <li>
          <Link
            to="/"
            className="text-lg hover:text-teal-300 transition duration-300"
          >
            Início
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-lg hover:text-teal-300 transition duration-300"
          >
            Sobre
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className="text-lg hover:text-teal-300 transition duration-300"
          >
            Projetos
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="text-lg hover:text-teal-300 transition duration-300"
          >
            Contato
          </Link>
        </li>
        <li>
          <Link
            to="/menu"
            className="text-lg hover:text-teal-300 transition duration-300"
          >
            Menu Experiências
          </Link>
        </li>
      </ul>
    </motion.nav>
  );
}
