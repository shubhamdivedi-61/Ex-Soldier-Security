import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../Components/UI/SectionHeader';
import GlassCard from '../Components/UI/GlassCard';
import Button from '../Components/UI/Button';

const Services = () => {
  const verifiedServices = [
    { title: "Armed Security Gunman", icon: "⚔️", desc: "Highly trained tactical marksmen with registered weapons for high-level perimeter threat containment." },
    { title: "Ex-Servicemen Guarding Squads", icon: "🎖️", desc: "Elite veterans sourced directly from Indian Army, BSF, and Paramilitary regiments for maximum operational discipline." },
    { title: "Personal Bodyguard / PSO", icon: "👤", desc: "Premium close-protection officers trained for VIP, politician, corporate leader, and high-net-worth asset defense loops." },
    { title: "Private Detective / Crime Investigator", icon: "🔍", desc: "Discreet corporate screening, intelligence gathering, background credential checks, and verification services." },
    { title: "Bouncers & Event Formations", icon: "🕴️", desc: "Heavy-force crowd management and entry filters deployed dynamically at large-scale venue points." },
    { title: "Site Security Supervisors", icon: "📋", desc: "Command personnel monitoring logbooks, enforcing safety parameters, and organizing deployment shifts." },
    { title: "Industrial Plant Protection", icon: "🏭", desc: "Comprehensive asset policing for heavy industries, mills, factories, and commercial warehouses." },
    { title: "Advanced Technical CCTV Installation", icon: "📹", desc: "Integration of modern locking devices, alarm telemetry infrastructure, and continuous tracking feeds." }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-16 max-w-7xl mx-auto px-6">
      <SectionHeader title="Authorized Capabilities" subtitle="Certified solutions mapped strictly under legal framework to safeguard critical commercial ecosystems." />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {verifiedServices.map((service, idx) => (
          <GlassCard key={idx} className="flex flex-col justify-between border-b border-b-gold/20">
            <div>
              <div className="text-3xl mb-4 text-gold">{service.icon}</div>
              <h3 className="text-lg font-bold uppercase tracking-wider text-white mb-2">{service.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-6">{service.desc}</p>
            </div>
            <Button to="/contact" variant="outlineGold" className="w-full text-xs py-2">Request Deployment</Button>
          </GlassCard>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;