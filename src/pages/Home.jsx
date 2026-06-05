import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const teamShowcase = [
    { src: "/images/team2.jpeg", title: "VIP Ceremonial Guard Setup", size: "md:col-span-2" },
    { src: "/images/team3.jpeg", title: "Executive Transit Escort", size: "md:col-span-1" },
    { src: "/images/team4.jpeg", title: "Industrial Risk Management", size: "md:col-span-1" },
    { src: "/images/team5.jpeg", title: "Perimeter Patrol Operations", size: "md:col-span-2" },
    { src: "/images/team6.jpeg", title: "Bouncer Force Formations", size: "md:col-span-1" },
    { src: "/images/team7.jpeg", title: "Armed Gunman Drill Squad", size: "md:col-span-1" },
    { src: "/images/team8.jpeg", title: "Quick Reaction Force Node", size: "md:col-span-1" },
    { src: "/images/team9.jpeg", title: "Tactical Close Protection Unit", size: "md:col-span-2" }
  ];

  return (
    <div className="space-bg min-h-screen pt-20"> {/* pt-20 added to prevent navbar overlap */}
      
      {/* Hero Header with Cyber Radial Overlay */}
      <section className="relative h-[85vh] flex items-center justify-center bg-cover bg-center" 
               style={{ backgroundImage: `linear-gradient(to bottom, rgba(3,10,22,0.8), rgba(2,7,18,0.95)), url('/images/team1.jpeg')` }}>
        <div className="max-w-7xl mx-auto px-6 text-center z-10">
          <span className="text-yellow-500 font-bold uppercase tracking-widest text-xs bg-yellow-500/10 px-4 py-1.5 border border-yellow-500/30 rounded-full">
            ⚔️ Indian Army Department Veteran Enterprise
          </span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white uppercase mt-6 mb-6 leading-none">
        EX. SOLDIER SECURITY
GUARD  <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-200">SERVICES</span>
          </h1>
          <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto mb-10 tracking-wide leading-relaxed">
            Engineered by combat veteran Shailendra Kumar Mishra. We dispatch premier armed forces, executive protection asset units, and industrial grid containment fields across Uttar Pradesh.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contact" className="bg-gradient-to-r from-yellow-600 to-yellow-400 text-black font-bold uppercase tracking-wider text-xs px-8 py-4 rounded-sm hover:brightness-110 transition">Initiate Briefing</Link>
            <Link to="/services" className="bg-white/5 border border-white/10 text-white font-bold uppercase tracking-wider text-xs px-8 py-4 rounded-sm hover:bg-white/10 transition">Capabilities</Link>
          </div>
        </div>
        <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-[#020712] to-transparent"></div>
      </section>

      {/* Dynamic Structural Grid Showcase */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="mb-16 border-l-4 border-yellow-500 pl-4">
          <span className="text-yellow-500 uppercase font-black tracking-widest text-xs block">Operational Blueprint</span>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mt-1">Deployment Grid</h2>
        </div>

        {/* Asymmetric layout with custom card cuts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamShowcase.map((img, idx) => (
            <div key={idx} className={`tactical-card group overflow-hidden bg-[#061329] ${img.size}`}>
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className="w-full h-full object-cover filter grayscale contrast-115 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020712] via-transparent to-transparent opacity-90"></div>
              </div>
              <div className="absolute bottom-0 left-0 p-6 w-full flex items-center justify-between border-t border-white/5 bg-[#030a16]/90 backdrop-blur-sm">
                <h4 className="text-white font-bold uppercase text-xs tracking-widest">{img.title}</h4>
                <span className="text-yellow-500 text-xs font-mono"> UNIT_0{idx+1}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;