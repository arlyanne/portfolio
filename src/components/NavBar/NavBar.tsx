import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const navbarVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      className="sticky top-0 z-50 bg-gray-800 text-white flex items-center justify-between px-6 py-4"
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8, ease: "easeOut" }}
      variants={navbarVariants}
    >
      <div className="text-2xl font-bold">Portfólio</div>
      <ul className="flex space-x-6">
        <li>
          <Link
            to="/"
            className="text-lg hover:text-orange-500 transition duration-300"
          >
            Início
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-lg hover:text-orange-500 transition duration-300"
          >
            Sobre
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className="text-lg hover:text-orange-500 transition duration-300"
          >
            Projetos
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="text-lg hover:text-orange-500 transition duration-300"
          >
            Contato
          </Link>
        </li>
      </ul>
    </motion.nav>
  );
}
