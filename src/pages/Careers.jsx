import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../Components/UI/SectionHeader';
import Button from '../Components/UI/Button';

const Careers = () => {
  const [formData, setFormData] = useState({ name: '', email: '', serviceHistory: '', file: null });

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-16 max-w-7xl mx-auto px-6">
      <SectionHeader title="Join Our Elite Cadre" subtitle="We recruit high-caliber individuals exclusively from verified veteran pools." />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold text-gold uppercase mb-4">Mandatory Requirements</h3>
          <ul className="space-y-4 text-gray-300 mb-8">
            <li className="flex items-start gap-2">✔ <span className="font-semibold text-white">Honorable Discharge:</span> Formal service documentation checks required.</li>
            <li className="flex items-start gap-2">✔ <span className="font-semibold text-white">Clean Background Matrix:</span> Zero felony historical telemetry.</li>
            <li className="flex items-start gap-2">✔ <span className="font-semibold text-white">Physical Diagnostics:</span> Ability to pass quarterly tactical fitness benchmarks.</li>
          </ul>
          
          <h3 className="text-2xl font-bold text-gold uppercase mb-4">Officer Benefits</h3>
          <p className="text-gray-400 leading-relaxed">
            Premium compensation tracks, corporate matching health packages, advanced ongoing weapon platforms certification modules, and unified vertical rank ascensions.
          </p>
        </div>

        {/* Application Form */}
        <div className="bg-navy-dark p-8 border border-white/10">
          <h4 className="text-xl font-bold uppercase tracking-wider mb-6 text-white border-b border-white/10 pb-2">Recruitment Manifest</h4>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-xs uppercase tracking-widest font-bold mb-2 text-gray-300">Full Name</label>
              <input type="text" className="w-full bg-darkBg border border-white/20 p-3 text-white focus:outline-none focus:border-gold text-sm" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest font-bold mb-2 text-gray-300">Military Branch & Rank</label>
              <input type="text" className="w-full bg-darkBg border border-white/20 p-3 text-white focus:outline-none focus:border-gold text-sm" placeholder="Army Infantry / Sergeant" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest font-bold mb-2 text-gray-300">Contact Email</label>
              <input type="email" className="w-full bg-darkBg border border-white/20 p-3 text-white focus:outline-none focus:border-gold text-sm" placeholder="john.doe@veteran.com" />
            </div>
            <Button variant="primary" className="w-full mt-4">Submit Deployment Request</Button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Careers;