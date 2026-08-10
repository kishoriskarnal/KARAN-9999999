import { Leaf, Heart, WheatOff, Globe, Eye, Ban } from 'lucide-react';

export default function Ethos() {
  const features = [
    { icon: <Leaf size={48} />, title: 'PURE VEG', desc: '100% VEGETARIAN ENVIRONMENT. NO COMPROMISES.', color: 'bg-[#ff2a85]' },
    { icon: <Heart size={48} />, title: 'NO ONION/GARLIC', desc: 'SPECIAL OPTIONS BECAUSE WE CARE ABOUT YOUR PREFERENCES.', color: 'bg-[#00e5ff]' },
    { icon: <WheatOff size={48} />, title: 'GLUTEN FREE', desc: 'GLUTEN-FREE PASTA AVAILABLE. NO WHEAT, ALL THE VIBES.', color: 'bg-[#ffeb3b]' },
    { icon: <Globe size={48} />, title: 'IMPORTED RAW', desc: 'AUTHENTIC INGREDIENTS SOURCED DIRECTLY FROM ITALY.', color: 'bg-[#00ff00]' },
    { icon: <Eye size={48} />, title: 'OPEN KITCHEN', desc: 'WATCH THE MAGIC HAPPEN. COMPLETE TRANSPARENCY.', color: 'bg-[#ff7a00]' },
    { icon: <Ban size={48} />, title: 'ZERO MAYO', desc: 'WE USE REAL SAUCES. MISS US WITH THAT FAKE STUFF.', color: 'bg-[#b026ff]' },
  ];

  return (
    <section className="py-24 bg-[#00ff28] text-black border-b-8 border-black overflow-hidden relative">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-6xl md:text-8xl font-display uppercase tracking-tight text-black drop-shadow-[6px_6px_0px_rgba(255,42,133,1)] mb-6">PURE VEG. ALWAYS.</h2>
          <div className="inline-block relative">
            <p className="text-2xl font-bold uppercase tracking-wider mb-6 bg-[#ff2a85] text-white px-6 py-3 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,229,255,1)] transform -rotate-1 relative z-10">
              Kishori's is 100% pure-vegetarian.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className={`${feature.color} flex flex-col items-center text-center p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all`}>
              <div className="w-24 h-24 bg-white border-4 border-black rounded-full flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                {feature.icon}
              </div>
              <h3 className="text-3xl font-display uppercase tracking-wide mb-4">{feature.title}</h3>
              <p className="font-bold text-black/90">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
