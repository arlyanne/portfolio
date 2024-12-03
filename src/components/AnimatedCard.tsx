import { motion } from "framer-motion"
import React from 'react';


type ProjectCardProps = {
    title: string;
    description: string;
  };

export default function AnimatedCard({title, description}:ProjectCardProps) {
    return (
      <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="card"
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
    )
}