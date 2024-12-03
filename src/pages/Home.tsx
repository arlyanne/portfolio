import Header from "../components/Header";
import React from 'react';
import ProjectCard from "../components/AnimatedCard";
import Projects from "./Projects";
import { motion } from "framer-motion"

export default function Home() {
    return (
        <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1>Bem-vindo ao meu portfólio</h1>
      <p>Explore meus projetos e conheça mais sobre mim!</p>
    </motion.div>
    )
}