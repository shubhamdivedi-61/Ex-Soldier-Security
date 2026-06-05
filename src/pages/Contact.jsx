import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import Button from '../Components/UI/Button';

const Contact = () => {
  const [formData, setFormData] = useState({ companyName: '', repName: '', service: 'Armed Security Gunman', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

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
      alert("Transmission failed. Please use emergency contact lines.");
    }
  };

  return (
    <div className="py-16 max-w-7xl mx-auto px-6">
      <div className="bg-red-700/20 border-2 border-red-600 text-red-200 p-4 mb-12 text-center uppercase tracking-widest font-bold text-xs animate-pulse">
        🚨 EMERGENCY RESPONSE UNIT HOTLINE: +91-8400431866, 8005332618 (24/7 ACTIVE DESK)
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-navy p-8 border border-white/10">
          <h3 className="text-xl font-bold uppercase text-white mb-6 tracking-wide">Submit Tactical Briefing Request</h3>
          {success && <p className="text-green-400 font-bold mb-4">✓ File securely transmitted to HQ command database.</p>}
          
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase text-gray-400 font-bold mb-2">Corporate Entity / Society Name</label>
                <input type="text" required value={formData.companyName} onChange={(e) => setFormData({...formData, companyName: e.target.value})} className="w-full bg-darkBg border border-white/20 p-3 text-white focus:border-gold text-sm focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs uppercase text-gray-400 font-bold mb-2">Representative Name</label>
                <input type="text" required value={formData.repName} onChange={(e) => setFormData({...formData, repName: e.target.value})} className="w-full bg-darkBg border border-white/20 p-3 text-white focus:border-gold text-sm focus:outline-none" />
              </div>
            </div>
            <div>
              <label className="block text-xs uppercase text-gray-400 font-bold mb-2">Required Capabilities</label>
              <select value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})} className="w-full bg-darkBg border border-white/20 p-3 text-white focus:border-gold text-sm focus:outline-none">
                <option>Armed Security Gunman</option>
                <option>Ex-Servicemen Guarding Squads</option>
                <option>VIP Executive Bodyguard</option>
                <option>Industrial Factory Policing</option>
              </select>
            </div>
            <div>
              <label className="block text-xs uppercase text-gray-400 font-bold mb-2">Message</label>
              <textarea rows="4" required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full bg-darkBg border border-white/20 p-3 text-white focus:border-gold text-sm focus:outline-none"></textarea>
            </div>
            <Button variant="primary" className="w-full">{loading ? "Transmitting..." : "Transmit File"}</Button>
          </form>
        </div>

        {/* Real Address and Contact Nodes From Company Profile */}
        <div className="flex flex-col justify-between bg-navy-dark border border-white/10 p-8 text-sm">
          <div>
            <h3 className="text-gold font-bold uppercase tracking-widest text-lg mb-6">CENTRAL COMMAND HEADQUARTERS</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              📍 <span className="font-bold text-white">Office Address:</span> 9/612, Near Central Academy School, Munshi Pulia, Indira Nagar, Lucknow (UP) - 226016
            </p>
            <p className="text-gray-300 mb-4">
              📞 <span className="font-bold text-white">Mobile Desks:</span> +91-8400431866, 8005332618, 7897149596
            </p>
            <p className="text-gray-300">
              ✉️ <span className="font-bold text-white">Secure E-Mail:</span> exsoldier270@gmail.com, sk281063@gmail.com
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-white/10 text-xs text-gray-400">
            <p className="font-bold uppercase text-gold mb-2">Regional Operational Branches</p>
            <ul className="space-y-1">
              <li>• Panchal Ghat, Farrukhabad</li>
              <li>• Sandila, Hardoi</li>
              <li>• Shukla Ganj, Kidwai Nagar, Kanpur</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;