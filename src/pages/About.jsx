import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../Components/UI/SectionHeader';
import GlassCard from '../Components/UI/GlassCard';

const About = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-16 max-w-7xl mx-auto px-6">
      <SectionHeader title="Command Leadership & History" subtitle="Built on the rock-solid foundations of Indian Army discipline, ethics, and strategic planning." />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <span className="text-gold uppercase tracking-wider text-xs font-bold bg-gold/10 px-3 py-1 border border-gold/20">Proprietor Statement</span>
          <h3 className="text-3xl font-extrabold text-white uppercase mt-3 mb-6">Shailendra Kumar Mishra</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            As a graduate of the **Indian Army Department**, I structured Ex. Soldier Security Services with an obsession to rectify volatile risk vectors across India. Our entire operational grid mimics tactical combat preparedness.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            We operate with a core internal team comprising elite veterans from the **Indian Army, BSF, and Paramilitary Forces**. Our security personnel undergo comprehensive weapon proficiency and fire safety diagnostic modules.
          </p>
          <div className="bg-white/5 p-4 border-l-2 border-gold text-xs italic text-gray-400">
            "Safety is not an optional configuration; keeping security as our total obsession is our lifelong mission."
          </div>
        </div>
        <div className="border border-white/10 p-2 bg-navy-dark">
          <img src="/images/proprietor.jpeg" alt="Proprietor Shailendra Kumar Mishra Indian Army Graduate" className="w-full h-[450px] object-cover filter grayscale contrast-125" />
        </div>
      </div>

      {/* Infrastructure Facilities Track from PDF */}
      <div className="bg-navy p-8 border border-white/10 rounded-sm mb-24">
        <h3 className="text-xl font-bold uppercase tracking-wider text-gold mb-6 text-center">HQ Operational Infrastructure Parameters</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 bg-darkBg/50">
            <div className="text-2xl mb-1">🏢</div>
            <span className="text-white font-bold block">OWNED OFFICE PREMISES</span>
            <span className="text-gray-400 text-xs">HQ Infrastructure Control Room</span>
          </div>
          <div className="p-4 bg-darkBg/50">
            <div className="text-2xl mb-1">💻</div>
            <span className="text-white font-bold block">6x INTERNET COMPUTERS</span>
            <span className="text-gray-400 text-xs">24/7 Intel Feed Dispatch Units</span>
          </div>
          <div className="p-4 bg-darkBg/50">
            <div className="text-2xl mb-1">💻</div>
            <span className="text-white font-bold block">3x TACTICAL LAPTOPS</span>
            <span className="text-gray-400 text-xs">Mobile Field Operation Command</span>
          </div>
          <div className="p-4 bg-darkBg/50">
            <div className="text-2xl mb-1">🚘</div>
            <span className="text-white font-bold block">2x 4-WHEELER VEHICLES</span>
            <span className="text-gray-400 text-xs">Rapid Emergency Response Units</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;