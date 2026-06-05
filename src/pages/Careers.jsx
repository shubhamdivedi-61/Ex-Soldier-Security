import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

const Careers = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', experience: '0-2 Years', background: 'Civilian Security' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleApply = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    // Data direct Supabase me send hoga
    const { error } = await supabase
      .from('applications')
      .insert([{ 
        candidate_name: formData.name, 
        phone_number: formData.phone, 
        experience_years: formData.experience, 
        previous_force: formData.background 
      }]);

    setLoading(false);
    if (!error) {
      setSuccess(true);
      setFormData({ name: '', phone: '', experience: '0-2 Years', background: 'Civilian Security' });
    } else {
      alert("Submission failed. Try contacting HQ directly.");
    }
  };

  return (
    <div className="space-bg min-h-screen pt-32 pb-16 max-w-4xl mx-auto px-6">
      <div className="mb-12 border-l-4 border-yellow-500 pl-4">
        <span className="text-yellow-500 uppercase font-black tracking-widest text-xs block">Recruitment Center</span>
        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mt-1">Join Our Force</h2>
      </div>

      {/* Mandatory Criteria from PDF */}
      <div className="bg-[#061329] border border-white/10 p-6 mb-8 rounded-sm text-sm">
        <h4 className="text-yellow-500 font-bold uppercase tracking-wider mb-3">⚠️ Mandatory Enrollment Criteria:</h4>
        <ul className="text-gray-400 space-y-2">
          <li>• **Age Group:** Strictly 25 to 50 years with minimum Class X education.</li>
          <li>• **Fitness:** Must be physically fit and medically certified.</li>
          <li>• **Preference:** Special weightage given to Ex-Servicemen (Discharge book copy required during interview).</li>
        </ul>
      </div>

      {/* Recruitment Form */}
      <div className="bg-[#061329] p-8 border border-white/5 tactical-card">
        {success && <p className="text-green-400 font-bold mb-6">✓ Application submitted. Our recruitment officer will contact you after credential checks.</p>}
        
        <form onSubmit={handleApply} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase text-gray-400 font-bold mb-2">Full Name (As in Aadhaar)</label>
              <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-[#030a16] border border-white/20 p-3 text-white focus:border-yellow-500 text-sm focus:outline-none" />
            </div>
            <div>
              <label className="block text-xs uppercase text-gray-400 font-bold mb-2">Active Mobile Number</label>
              <input type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full bg-[#030a16] border border-white/20 p-3 text-white focus:border-yellow-500 text-sm focus:outline-none" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase text-gray-400 font-bold mb-2">Security Experience</label>
              <select value={formData.experience} onChange={(e) => setFormData({...formData, experience: e.target.value})} className="w-full bg-[#030a16] border border-white/20 p-3 text-white focus:border-yellow-500 text-sm focus:outline-none">
                <option>Fresh / 0-2 Years</option>
                <option>2-5 Years</option>
                <option>5+ Years Experience</option>
              </select>
            </div>
            <div>
              <label className="block text-xs uppercase text-gray-400 font-bold mb-2">Previous Background Regiment</label>
              <select value={formData.background} onChange={(e) => setFormData({...formData, background: e.target.value})} className="w-full bg-[#030a16] border border-white/20 p-3 text-white focus:border-yellow-500 text-sm focus:outline-none">
                <option>Civilian Trained Security Guard</option>
                <option>Ex-Servicemen (Indian Army)</option>
                <option>Ex-Servicemen (BSF / Paramilitary)</option>
                <option>Ex-Police Force Staff</option>
              </select>
            </div>
          </div>

          <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-yellow-600 to-yellow-400 text-black font-bold uppercase tracking-wider text-xs py-4 hover:brightness-110 transition">
            {loading ? "Processing Credentials..." : "Submit Recruitment Application"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Careers;