import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

const Contact = () => {
  const [formData, setFormData] = useState({ companyName: '', repName: '', service: 'Armed Security Gunman', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    // Direct database entry to Supabase
    const { error } = await supabase
      .from('customers')
      .insert([{ 
        company_name: formData.companyName, 
        representative_name: formData.repName, 
        service_required: formData.service, 
        message: formData.message 
      }]);

    setLoading(false);
    if (!error) {
      setSuccess(true);
      setFormData({ companyName: '', repName: '', service: 'Armed Security Gunman', message: '' });
    } else {
      alert("Transmission failed. System override active. Please contact HQ desks directly.");
    }
  };

  return (
    <div className="space-bg min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Page Header Matrix */}
        <div className="mb-12 border-l-4 border-yellow-500 pl-4">
          <span className="text-yellow-500 uppercase font-black tracking-widest text-xs block">Secure Communications</span>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mt-1">Contact Central HQ</h2>
        </div>

        {/* Emergency Response Ticker Line */}
        <div className="bg-red-950/40 border border-red-700/60 text-red-400 p-4 mb-12 rounded-sm text-center uppercase tracking-widest font-mono text-xs animate-pulse">
          ⚡ 24/7 Rapid Response Operational Desks: +91-8400431866, 8005332618
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Block: Full-Stack Secure Form Setup */}
          <div className="lg:col-span-7 bg-[#061329]/80 border border-white/5 p-8 tactical-card">
            <h3 className="text-lg font-black text-white uppercase tracking-wider mb-6">// DEPLOYMENT_BRIEFING_INPUT</h3>
            
            {success && (
              <div className="bg-green-950/30 border border-green-500/50 text-green-400 p-4 rounded-sm text-xs font-mono mb-6">
                ✓ SECURITY DATA TRANSMITTED SUCCESSFULLY. HQ CONTROL ROOM WILL AUDIT YOUR PROFILE ROUTINE.
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase text-gray-400 font-black tracking-wider mb-2">Corporate Entity / Society Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g., Vikrant Industries"
                    value={formData.companyName} 
                    onChange={(e) => setFormData({...formData, companyName: e.target.value})} 
                    className="w-full bg-[#030a16] border border-white/10 p-3.5 text-white focus:border-yellow-500 text-xs focus:outline-none transition-colors" 
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase text-gray-400 font-black tracking-wider mb-2">Authorized Representative Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Your Full Name"
                    value={formData.repName} 
                    onChange={(e) => setFormData({...formData, repName: e.target.value})} 
                    className="w-full bg-[#030a16] border border-white/10 p-3.5 text-white focus:border-yellow-500 text-xs focus:outline-none transition-colors" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase text-gray-400 font-black tracking-wider mb-2">Required Defense Category</label>
                <select 
                  value={formData.service} 
                  onChange={(e) => setFormData({...formData, service: e.target.value})} 
                  className="w-full bg-[#030a16] border border-white/10 p-3.5 text-white focus:border-yellow-500 text-xs focus:outline-none transition-colors cursor-pointer"
                >
                  <option>Armed Security Gunman</option>
                  <option>Ex-Servicemen Guarding Squads</option>
                  <option>Personal Security Officer (PSO)</option>
                  <option>Industrial Plant Protection Force</option>
                  <option>Event Bouncer Contingent</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] uppercase text-gray-400 font-black tracking-wider mb-2">Briefing Message / Area Risk Parameters</label>
                <textarea 
                  rows="4" 
                  required 
                  placeholder="Describe your asset density, shift timings, or perimeter vulnerabilities..."
                  value={formData.message} 
                  onChange={(e) => setFormData({...formData, message: e.target.value})} 
                  className="w-full bg-[#030a16] border border-white/10 p-3.5 text-white focus:border-yellow-500 text-xs focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={loading} 
                className="w-full bg-gradient-to-r from-yellow-600 to-yellow-400 text-black font-black uppercase tracking-widest text-xs py-4 hover:brightness-110 transition-all duration-300 shadow-lg shadow-yellow-500/10"
              >
                {loading ? "DATA ENCRYPTING..." : "TRANSMIT COMMAND PARAMS"}
              </button>
            </form>
          </div>

          {/* Right Block: Official Document Details & Branch Network */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Real Headquarters Data Node */}
            <div className="bg-[#040d1c] p-8 border border-white/5 rounded-sm">
              <h4 className="text-yellow-500 font-black uppercase tracking-widest text-xs mb-6"> CENTRAL_COMMAND_INTEL</h4>
              
              <div className="space-y-4 text-xs">
                <div className="flex items-start space-x-3">
                  <span className="text-yellow-500 text-sm mt-0.5">📍</span>
                  <p className="text-gray-300 leading-relaxed">
                    <span className="font-bold text-white block uppercase text-[10px] tracking-wider mb-1">Office Add:</span>
                    9/612, Near Central Academy School, Munshi Pulia, Indira Nagar, Lucknow (UP) - 226016[cite: 1]
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="text-yellow-500 text-sm mt-0.5">📞</span>
                  <div className="text-gray-300">
                    <span className="font-bold text-white block uppercase text-[10px] tracking-wider mb-1">Mobile Registers:</span>
                    <a href="tel:+918400431866" className="hover:text-yellow-500 block transition">+91-8400431866</a>[cite: 1]
                    <a href="tel:+918005332618" className="hover:text-yellow-500 block transition">+91-8005332618</a>
                    <a href="tel:+918960571255" className="hover:text-yellow-500 block transition">+91-7897149596</a>[cite: 1]
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="text-yellow-500 text-sm mt-0.5">✉️</span>
                  <div className="text-gray-300">
                    <span className="font-bold text-white block uppercase text-[10px] tracking-wider mb-1">E-Mail Terminals:</span>
                    <a href="mailto:exsoldier270@gmail.com" className="hover:text-yellow-500 block transition">exsoldier270@gmail.com</a>[cite: 1]
                    <a href="mailto:sk281063@gmail.com" className="hover:text-yellow-500 block transition">sk281063@gmail.com</a>[cite: 1]
                  </div>
                </div>
              </div>
            </div>

            {/* Official Legal Branch Infrastructure Tracker */}
            <div className="bg-[#040d1c] p-8 border border-white/5 rounded-sm">
              <h4 className="text-yellow-500 font-black uppercase tracking-widest text-xs mb-4"> REGIONAL_FORCE_UNITS</h4>
              <p className="text-gray-400 text-xs leading-relaxed mb-4">
                Our active deployment framework covers critical industrial hubs across these sub-command locations:
              </p>
              <ul className="space-y-2 text-xs font-mono text-gray-300 pl-2 border-l border-yellow-500/30">
                <li>• Lucknow, Indira Nagar, Vikas Nagar</li>
                <li>• Gomti Nagar, Cinhut, Aliganj</li>
                <li>• Saheed Path Road, Hazartganj, Maha Nagar</li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;