import React from 'react';

const Industries = () => {
  const industrySectors = [
    {
      title: "Industrial & Factory Policing",
      icon: "🏭",
      blueprint: "IND-GRID // AREA_ALPHA",
      desc: "Hum factories, mills, aur industrial estates ko full security cover dete hain[cite: 1]. Isme shift rotation management, perimeter control, aur raw material gate-pass tracking shaamil hai.",
      features: ["Factories & Mills[cite: 1]", "Industrial Estates[cite: 1]", "Warehouses & Godowns[cite: 1]"]
    },
    {
      title: "Educational & School Campus Security",
      icon: "🏫",
      blueprint: "EDU-SAFE // AREA_BRAVO",
      desc: "Schools aur degree colleges ke liye disciplined security deployment[cite: 1]. Entry/exit gates par strict monitoring, identity checking, aur student safety parameters ko enforce kiya jata hai.",
      features: ["Primary & High Schools[cite: 1]", "Degree Colleges[cite: 1]", "Engineering Institutes[cite: 1]"]
    },
    {
      title: "Clinical & Hospital Enclaves",
      icon: "🏥",
      blueprint: "MED-LOCK // AREA_CHARLIE",
      desc: "Hospitals aur nursing homes ke liye sensitive 24/7 crowd-control control setup[cite: 1]. Emergency wards, parking zones, aur critical care units me zero-disturbance protection deployment.",
      features: ["Nursing Homes[cite: 1]", "Diagnostic Centers[cite: 1]", "Trauma Centers[cite: 1]"]
    },
    {
      title: "Corporate Malls & Showrooms",
      icon: "🏢",
      blueprint: "RETAIL-SHIELD // AREA_DELTA",
      desc: "Premium consumer spots, luxury hotels, aur automobile showrooms ke liye highly presentable guards aur bouncers deployment[cite: 1]. Threat detection aur asset protection loops ke sath.",
      features: ["Shopping Malls[cite: 1]", "Automobile Showrooms[cite: 1]", "Hotels & Restaurants[cite: 1]"]
    },
    {
      title: "VVIP Residences & Societies",
      icon: "🏗️",
      blueprint: "DOMESTIC-SHIELD // AREA_ECHO",
      desc: "High-profile IAS/IPS officers, judges, aur elite apartments ke liye access-control gate configuration[cite: 1]. CCTV monitoring aur vehicle logbook systems ke sath.",
      features: ["Apartment Buildings[cite: 1]", "VVIP Private Houses[cite: 1]", "Construction Sites[cite: 1]"]
    },
    {
      title: "Banquet Lawns & Event Security",
      icon: "🎪",
      blueprint: "EVENT-FORCE // AREA_ZETA",
      desc: "Marriage lawns, premium corporate events, aur large gatherings ke liye dynamic heavy-force bouncer squads deploy kiye jaate hain[cite: 1]. Entry filter locks aur quick-reaction capability ke sath.",
      features: ["Marriage Lawns[cite: 1]", "Corporate Banquets[cite: 1]", "VIP Public Events[cite: 1]"]
    }
  ];

  return (
    <div className="space-bg min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Page Header */}
        <div className="mb-16 border-l-4 border-yellow-500 pl-4">
          <span className="text-yellow-500 uppercase font-black tracking-widest text-xs block">Target Ecosystems</span>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mt-1">Sectors We Protect</h2>
        </div>

        {/* Tactical Asymmetric Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industrySectors.map((sector, idx) => (
            <div key={idx} className="tactical-card p-8 bg-[#061329]/90 border border-white/5 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-4xl">{sector.icon}</span>
                  <span className="text-yellow-500 font-mono text-[10px] tracking-widest">// {sector.blueprint}</span>
                </div>
                
                <h3 className="text-xl font-black text-white uppercase tracking-wide mb-3">{sector.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-6">{sector.desc}</p>
              </div>

              <div>
                <div className="w-full h-[1px] bg-gradient-to-r from-yellow-500/30 to-transparent mb-4"></div>
                <div className="flex flex-wrap gap-2">
                  {sector.features.map((feat, fIdx) => (
                    <span key={fIdx} className="bg-white/5 text-gray-300 text-[10px] uppercase font-mono px-2 py-1 border border-white/10">
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Industries;