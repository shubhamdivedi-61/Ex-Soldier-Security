import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../Components/UI/SectionHeader';

const Industries = () => {
  const sectors = [
    { name: "Corporate Headquarters", bg: "🏢" },
    { name: "Banking & Vault Infrastructures", bg: "🏦" },
    { name: "High-Footprint Retail Ecosystems", bg: "🛍️" },
    { name: "Healthcare Centers", bg: "🏥" },
    { name: "Critical Aerospace & Campus Zones", bg: "🏫" },
    { name: "Logistics Hubs & Warehousing", bg: "📦" },
    { name: "High-Risk Construction Zones", bg: "🏗️" },
    { name: "High-End Luxury Hospitality", bg: "🏨" },
    { name: "Federal & State Operations", bg: "🏛️" }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-16 max-w-7xl mx-auto px-6">
      <SectionHeader title="Sectors Secured" subtitle="We map specialized deployment matrices for highly distinct asset ecosystems." />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sectors.map((sector, i) => (
          <div key={i} className="relative bg-navy p-8 border border-white/10 group overflow-hidden transition-all duration-300 hover:border-gold">
            <div className="absolute right-4 bottom-2 text-6xl opacity-10 group-hover:opacity-20 transition-opacity">{sector.bg}</div>
            <h3 className="text-xl font-bold uppercase tracking-wider text-white group-hover:text-gold transition-colors">{sector.name}</h3>
            <p className="text-gray-400 text-xs mt-2 uppercase tracking-widest">Active Guard Zone</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Industries;