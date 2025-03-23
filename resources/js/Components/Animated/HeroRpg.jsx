import React from 'react';
import { motion } from 'framer-motion';  // Importando o motion do Framer Motion

export default function HeroRpg(){
  return (
    <div className="hero-section">
      <motion.div
        animate={{
          y: [0, 20, 0],  // Move para 20px e depois volta para 0px
        }}
        transition={{
          duration: 2,  // Duração de 2 segundos para um ciclo completo
          repeat: Infinity,  // Faz a animação se repetir infinitamente
          repeatType: 'loop',  // Define que a animação é do tipo "loop" contínuo
          ease: 'easeInOut',  // Define a suavidade da animação
        }}
      >
        Flutuando na Hero Section
      </motion.div>
    </div>
  );
};
