import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ title, subtitle, centered = true }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}
    >
      <div className={`flex items-center gap-2 mb-2 ${centered ? 'justify-center' : ''}`}>
        <span className="h-[2px] w-8 bg-gold"></span>
        <span className="text-gold uppercase tracking-widest text-xs font-bold">Tactical Operation</span>
        <span className="h-[2px] w-8 bg-gold"></span>
      </div>
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4 uppercase">{title}</h2>
      {subtitle && <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">{subtitle}</p>}
    </motion.div>
  );
};

export default SectionHeader;