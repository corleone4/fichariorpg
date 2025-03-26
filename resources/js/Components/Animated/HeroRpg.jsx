import React from 'react';
import { motion } from 'framer-motion';  // Importando o motion do Framer Motion

export default function HeroRpg(){
  return (
    <div className="hero-section">
      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 2,  
          repeat: Infinity,
          repeatType: 'loop',  
          ease: 'easeInOut', 
        }}
      >
        Flutuando na Hero Section
      </motion.div>
    </div>
  );
};
