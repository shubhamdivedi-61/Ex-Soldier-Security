   import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="space-bg min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16 border-l-4 border-yellow-500 pl-4">
          <span className="text-yellow-500 uppercase font-black tracking-widest text-xs block">Command Base & Intelligence</span>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mt-1">Enterprise Profile</h2>
        </div>

        {/* Leader Profile Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6">
            <span className="bg-yellow-500/10 border border-yellow-500/30 px-3 py-1 text-xs uppercase font-bold text-yellow-500 rounded-full">Proprietor Command Node</span>
            <h3 className="text-4xl font-black text-white uppercase">Shailendra Kumar Mishra</h3>
            <p className="text-gray-300 text-xs md:text-sm leading-relaxed font-normal">
              As a graduate of the **Indian Army Department**, I engineered Ex. Soldier Security Guard Services to inject structural defense matrices into the corporate and commercial landscapes[cite: 20]. Every rank of our force maps rigorous training protocols to defeat volatile vulnerabilities[cite: 11].
            </p>
            <p className="text-gray-300 text-xs md:text-sm leading-relaxed font-normal">
              Our infrastructure features a massive network spanning multiple branches including Farrukhabad, Hardoi, and Kanpur[cite: 22]. Our defense grid relies on strict operational ethics: zero tolerance for negligence and instant response deployment metrics[cite: 84, 87].
            </p>
            <div className="p-4 bg-[#061329] border-l-2 border-yellow-500 text-xs italic text-gray-400 font-mono">
              "Keeping security as our obsession is the core engine driving customer protection[cite: 39]."
            </div>
          </div>
          
          <div className="tactical-card p-2 bg-[#061329]">
            <img src="/images/proprietor.jpeg" alt="Commanding Officer Shailendra Kumar Mishra Indian Army Department" className="w-full h-96 object-cover" />
          </div>
        </div>

        {/* Infrastructure Nodes Component */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#040d1c] p-6 border border-white/5 text-center">
            <div className="text-3xl mb-2">🏢</div>
            <h5 className="text-white font-bold uppercase text-xs">Owned Facility</h5>
            <p className="text-gray-400 text-[10px] mt-1 uppercase tracking-wider">HQ Premises System Controlled [cite: 22]</p>
          </div>
          <div className="bg-[#040d1c] p-6 border border-white/5 text-center">
            <div className="text-3xl mb-2">💻</div>
            <h5 className="text-white font-bold uppercase text-xs">6x Terminal Arrays</h5>
            <p className="text-gray-400 text-[10px] mt-1 uppercase tracking-wider">Network Communication Nodes [cite: 22]</p>
          </div>
          <div className="bg-[#040d1c] p-6 border border-white/5 text-center">
            <div className="text-3xl mb-2">💻</div>
            <h5 className="text-white font-bold uppercase text-xs">3x Mobile Laptops</h5>
            <p className="text-gray-400 text-[10px] mt-1 uppercase tracking-wider">Field Command Stations [cite: 22]</p>
          </div>
          <div className="bg-[#040d1c] p-6 border border-white/5 text-center">
            <div className="text-3xl mb-2">🚘</div>
            <h5 className="text-white font-bold uppercase text-xs">2x 4-Wheeler Fleet</h5>
            <p className="text-gray-400 text-[10px] mt-1 uppercase tracking-wider">Rapid Tactical Response Units [cite: 22]</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;