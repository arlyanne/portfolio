import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import React from 'react';

export default function Header() {
    return (
        <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="p-5 bg-gray-800 text-white"
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.h1
          className="text-3xl font-bold"
          whileHover={{ scale: 1.1, color: "#ff6347" }}
        >
          Meu Portfólio
        </motion.h1>
        <nav>
          <Link to="/" className="mr-5 hover:text-yellow-500 mt-5">
            Home
          </Link>
          <Link to="/projects" className="mb-5 hover:text-yellow-500">
            Projetos
          </Link>
        </nav>
      </div>
    </motion.header> 
    )
}