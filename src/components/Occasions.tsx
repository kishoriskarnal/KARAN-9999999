import { GlassWater, Gift, PartyPopper, Users, Coffee, Gamepad2 } from 'lucide-react';

export default function Occasions() {
  const occasions = [
    { icon: <GlassWater size={40} />, title: "LUXURY DATES", desc: "A QUIET, ROMANTIC, ELEGANT VIBE." },
    { icon: <Gift size={40} />, title: "BIRTHDAYS & ANNIVERSARIES", desc: "CELEBRATE WITH YOUR FAVOURITE PEOPLE." },
    { icon: <PartyPopper size={40} />, title: "PRIVATE PARTY HALL", desc: "BOOK OUR EXCLUSIVE SPACE." },
    { icon: <Users size={40} />, title: "FAMILY DINING", desc: "SPACIOUS TABLES & WARM WELCOMES." },
    { icon: <Coffee size={40} />, title: "GET-TOGETHERS", desc: "CATCH UP OVER GREAT FOOD." },
    { icon: <Gamepad2 size={40} />, title: "FOOD & GAMES", desc: "FUN, FLAVOR & MEMORIES." },
  ];

  return (
    <section className="py-24 bg-black text-white relative border-b-8 border-black">
      {/* Background checkerboard overlay */}
      <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #ff2a85 25%, transparent 25%, transparent 75%, #ff2a85 75%, #ff2a85), repeating-linear-gradient(45deg, #ff2a85 25%, transparent 25%, transparent 75%, #ff2a85 75%, #ff2a85)', backgroundPosition: '0 0, 20px 20px', backgroundSize: '40px 40px', backgroundColor: '#00ff28' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 bg-white text-black p-8 border-4 border-[#ff2a85] shadow-[12px_12px_0px_0px_rgba(255,42,133,1)] transform rotate-1 max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tight mb-4 text-black">PLAN SOMETHING EPIC?</h2>
          <p className="text-xl font-bold uppercase tracking-widest text-[#ff2a85]">
            From quiet dinners to lively parties. We got you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {occasions.map((occ, idx) => (
            <div
              key={idx}
              className="bg-zinc-900 p-8 border-4 border-white flex flex-col items-start hover:bg-[#ff2a85] hover:text-white group transition-colors shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]"
            >
              <div className="w-20 h-20 bg-[#00e5ff] text-black border-4 border-black rounded-full flex items-center justify-center mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:bg-white group-hover:scale-110 transition-transform">
                {occ.icon}
              </div>
              <h3 className="text-3xl font-display uppercase tracking-wider mb-2">{occ.title}</h3>
              <p className="font-bold opacity-80 uppercase">{occ.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
