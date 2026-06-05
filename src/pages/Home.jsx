import React from 'react';
import { motion } from 'framer-motion';
import Button from '../Components/UI/Button';
import SectionHeader from '../Components/UI/SectionHeader';

const Home = () => {
  const stats = [
    { value: "21+", label: "Major Corporate Clients" },
    { value: "185+", label: "Active Operational Staff" },
    { value: "7+ Yrs", label: "Tactical Experience" },
    { value: "100%", label: "ISO 9001:2015 Certified" },
  ];

  // Aapki saari rename ki hui team images ka layout array
  const teamShowcase = [
    { src: "/images/team2.jpeg", title: "VIP Ceremonial Guard Configuration" },
    { src: "/images/team3.jpeg", title: "Corporate Executive Transit Escort" },
    { src: "/images/team4.jpeg", title: "Industrial High-Risk Armed Lineup" },
    { src: "/images/team5.jpeg", title: "Atmosphere Perimeter Patrol Control" },
    { src: "/images/team6.jpeg", title: "Bouncer Support Squad Formations" },
    { src: "/images/team7.jpeg", title: "Armed Gunman Operational Drills" },
    { src: "/images/team8.jpeg", title: "Quick Reaction Force Team Assembly" },
    { src: "/images/team9.jpeg", title: "Tactical Close Protection Unit" }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      
      {/* Hero Unit Section - team1.jpeg Background me */}
      <section className="relative h-[90vh] flex items-center justify-center bg-cover bg-center overflow-hidden" 
               style={{ backgroundImage: `linear-gradient(to right, rgba(5,16,36,0.95), rgba(17,17,17,0.75)), url('/images/team1.jpeg')` }}>
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 text-left">
          <span className="text-gold font-bold uppercase tracking-widest text-sm bg-gold/10 px-4 py-1.5 border border-gold/30">
            Indian Army Department Veteran Owned
          </span>
          <h1 className="text-4xl md:text-7xl font-black tracking-tight uppercase text-white mt-4 mb-6 leading-none">
            EX. SOLDIER SECURITY <br /><span className="text-gold">GUARD SERVICES</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mb-8 font-normal leading-relaxed">
            Founded and engineered by combat veteran Shailendra Kumar Mishra. We deliver high-profile tactical defense layouts, armed gunman setups, industrial plant policing, and premium VIP security across Uttar Pradesh.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button to="/contact" variant="primary" className="px-8">Initiate Briefing</Button>
            <Button to="/services" variant="secondary" className="px-8">Force Capabilities</Button>
          </div>
        </div>
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-darkBg to-transparent"></div>
      </section>

      {/* Structured Team Images Showcase Grid (8 Images) */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <SectionHeader title="Deployment Showcase" subtitle="Real-time live deployment footage of our disciplined forces guarding critical parameters." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamShowcase.map((img, idx) => (
            <div key={idx} className="overflow-hidden border border-white/10 group rounded-sm bg-navy">
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-72 object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div className="p-4 bg-navy-dark border-t border-white/5">
                <h4 className="text-white font-bold uppercase text-xs tracking-wider">{img.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dynamic Counters Loop */}
      <section className="py-20 bg-gradient-to-r from-navy-dark via-darkBg to-navy-dark border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-4xl md:text-6xl font-black text-gold tracking-tight mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-400 tracking-widest uppercase font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Home;