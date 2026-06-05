import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const tacticalCapabilities = [
    { id: "01", title: "Armed Security Gunman", desc: "Marksmen deployed under proper licensing modules to contain high-level dynamic asset perimeter vectors[cite: 20, 242]." },
    { id: "02", title: "Ex-Servicemen Guarding", desc: "Regiment forces sourced from Indian Army, BSF, and Paramilitary reserves for maximum defense execution[cite: 20, 38, 242]." },
    { id: "03", title: "Personal Close Protection (PSO)", desc: "Elite physical bodyguards and gunman configurations mapping premium individual safety loops[cite: 20, 242]." },
    { id: "04", title: "Private Crime Investigation", desc: "Background verification tracking, credential audits, and corporate intelligence filtering configurations[cite: 20, 36]." },
    { id: "05", title: "Heavy Force Bouncers", desc: "Tactical physical defense crowd line dynamic management deployed at high-volume venue entries[cite: 20, 242]." },
    { id: "06", title: "CCTV Telemetry & Alarms", desc: "Modern locking hardware mechanisms, alarm installation matrices, and network surveillance grid setups[cite: 89, 90, 91]." },
  ];

  const targetIndustries = [
    { label: "Industrial Parks & Mills", icon: "🏭", desc: "Complete asset mapping deployment for massive engineering zones and production plants[cite: 10, 109]." },
    { label: "Educational & School Grounds", icon: "🏫", desc: "Filtered protective cordons built for school campus sectors and institutional infrastructures[cite: 104, 106]." },
    { label: "Healthcare & Hospital Enclaves", icon: "🏥", desc: "24/7 strategic entry management nodes for clinical environments and trauma networks[cite: 104, 107]." },
    { label: "Malls, Hotels & Showrooms", icon: "🏢", desc: "Premium presentation customer-centric guards protecting high-worth consumer hubs[cite: 104, 110, 111]." },
    { label: "Apartments & Construction Complexes", icon: "🏗️", desc: "Strict logistic vehicle check layouts and residential dynamic security rounds[cite: 104, 112]." },
    { label: "Logistics & Warehousing Hubs", icon: "📦", desc: "Stock preservation controls and continuous terminal dispatch protective layers[cite: 104, 113]." }
  ];

  return (
    <div className="space-bg min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section 1: Services Grid */}
        <div className="mb-12 border-l-4 border-yellow-500 pl-4">
          <span className="text-yellow-500 uppercase font-black tracking-widest text-xs block">Operational Capabilities</span>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mt-1">Tactical Asset Solutions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-28">
          {tacticalCapabilities.map((srv) => (
            <div key={srv.id} className="tactical-card p-8 bg-[#061329]/90 border border-white/5 flex flex-col justify-between">
              <div>
                <span className="text-yellow-500 font-mono text-xs block mb-4">// FORCE_CAPS_{srv.id}</span>
                <h3 className="text-xl font-black text-white uppercase tracking-wide mb-3">{srv.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-6">{srv.desc}</p>
              </div>
              <div className="w-full h-[1px] bg-gradient-to-r from-yellow-500/50 to-transparent"></div>
            </div>
          ))}
        </div>

        {/* Section 2: Targeted Sector Sectors */}
        <div className="mb-12 border-l-4 border-yellow-500 pl-4">
          <span className="text-yellow-500 uppercase font-black tracking-widest text-xs block">Sectors Covered</span>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mt-1">Protected Industries</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {targetIndustries.map((ind, index) => (
            <div key={index} className="bg-[#040d1c] p-6 border border-white/5 rounded-sm hover:border-yellow-500/20 transition-all duration-300">
              <div className="text-4xl mb-4">{ind.icon}</div>
              <h4 className="text-white font-bold uppercase text-sm mb-2 tracking-wide">{ind.label}</h4>
              <p className="text-gray-400 text-xs leading-relaxed">{ind.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Services;