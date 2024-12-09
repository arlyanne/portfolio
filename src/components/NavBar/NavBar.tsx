import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navbarVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
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
      <div className="lg:hidden">
        <button
          onClick={handleMenuToggle}
          className="text-3xl focus:outline-none"
        >
          <FaBars />
        </button>
      </div>

      <ul
        className={`${
          menuOpen ? "block" : "hidden"
        } lg:flex lg:space-x-8 lg:block`}
      >
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
            to="/experience"
            className="text-lg hover:text-teal-300 transition duration-300"
          >
            Experiências
          </Link>
        </li>
      </ul>
    </motion.nav>
  );
}
