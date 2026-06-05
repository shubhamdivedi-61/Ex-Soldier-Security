import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className = '' }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={`bg-white/[0.03] backdrop-blur-md border border-white/10 p-6 shadow-2xl rounded-sm ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;