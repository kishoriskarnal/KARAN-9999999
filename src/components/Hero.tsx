import { motion } from 'motion/react';
import { MapPin, Menu as MenuIcon } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#ff2a85] text-black pt-20 lg:pt-0 pb-16 lg:pb-0">
      {/* Colorful Premium Background with Glowing Orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 opacity-60 pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-[#00ff28] blur-[120px] mix-blend-multiply opacity-40"></div>
          <div className="absolute top-[30%] -right-[20%] w-[60%] h-[60%] rounded-full bg-white blur-[130px] mix-blend-screen opacity-40"></div>
          <div className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] rounded-full bg-[#fffc00] blur-[120px] mix-blend-multiply opacity-30"></div>
        </div>
      </div>

      {/* Elegant top bar */}
      <div className="absolute top-0 w-full bg-black/10 backdrop-blur-md border-b border-black/20 z-30">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-center text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-black">
          <span className="hidden md:inline">Authentic Flavors &nbsp; • &nbsp; </span>
          <span className="text-[#fffc00] drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">100% Pure Vegetarian</span>
          <span className="hidden md:inline"> &nbsp; • &nbsp; No Onion, No Garlic</span>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full mt-12 lg:mt-0">
        {/* Left Column: Text & CTA */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-20">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-4 lg:mb-8 w-full max-w-[480px]"
          >
            <div className="w-full mx-auto h-auto flex flex-col items-center lg:items-start justify-center">
              {/* Kishori's Colorful Premium Logo */}
              <svg viewBox="0 10 490 110" className="w-full h-auto overflow-visible" fill="currentColor">
                <defs>
                  <style dangerouslySetInnerHTML={{__html: `
                    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;900&display=swap');
                    .logo-text { font-family: 'Cinzel', serif; font-size: 96px; letter-spacing: 2px; font-weight: 900; paint-order: stroke fill; }
                  `}} />
                </defs>
                
                {/* "Kish" */}
                <text x="4" y="104" className="logo-text" fill="black">Kish</text>
                <text x="0" y="100" className="logo-text" fill="#fffc00" stroke="black" strokeWidth="3">Kish</text>
                
                {/* Custom 'o' - colorful pizza slice */}
                <g transform="translate(275, 68)">
                  <path d="M 4 -30 A 34 34 0 1 0 38 4 Z" fill="black" />
                  <path d="M 0 0 L 0 -34 A 34 34 0 1 0 34 0 Z" fill="#00ff28" stroke="black" strokeWidth="3" />
                  <path d="M 4 -4 L 4 -34 A 34 34 0 0 1 34 -4 Z" fill="white" stroke="black" strokeWidth="3" />
                  <circle cx="-14" cy="-14" r="4" fill="black" />
                  <circle cx="-18" cy="14" r="4" fill="black" />
                  <circle cx="14" cy="16" r="4" fill="black" />
                  <circle cx="-4" cy="24" r="4" fill="black" />
                  <circle cx="-2" cy="-26" r="4" fill="black" />
                  <circle cx="18" cy="-16" r="4" fill="black" />
                </g>

                {/* "ri's" */}
                <text x="329" y="104" className="logo-text" fill="black">ri's</text>
                <text x="325" y="100" className="logo-text" fill="white" stroke="black" strokeWidth="3">ri's</text>
              </svg>
            </div>
          </motion.div>
          
          <h1 className="sr-only">Kishori's</h1>
          
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-3xl md:text-5xl xl:text-7xl font-black mt-6 mb-10 tracking-tight leading-tight uppercase font-display flex flex-col items-center lg:items-start gap-3"
          >
            <span className="bg-[#fffc00] text-black px-4 py-1 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-2 inline-block">A Premium</span>
            <span className="bg-white text-black px-4 py-1 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-1 inline-block"><span className="text-[#ff2a85] italic">Italian</span> Experience</span>
          </motion.h2>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-base md:text-lg lg:text-xl font-bold mb-10 max-w-lg text-black leading-relaxed bg-white p-4 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform -rotate-1"
          >
            Wood-fired pizzas, handmade gluten-free pastas, and authentic Italian flavors. Crafted purely vegetarian with no onion, garlic, or mayo.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
          >
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=Kishori's+Karnal&destination_place_id=ChIJWTPeMwBvDjkRm0WOqGrOknw"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#00ff28] text-black font-black uppercase tracking-widest text-sm md:text-base border-4 border-black hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-3"
            >
              <MapPin size={18} strokeWidth={3} />
              Get Directions
            </a>
            <a 
              href="#menu" 
              className="px-8 py-4 bg-white text-black font-black uppercase tracking-widest text-sm md:text-base border-4 border-black hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-3"
            >
              <MenuIcon size={18} strokeWidth={3} />
              Explore Menu
            </a>
          </motion.div>
        </div>

        {/* Right Column: Brutalist Image Display */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="relative h-[400px] lg:h-[600px] w-full hidden lg:block"
        >
          {/* Main featured image */}
          <div className="absolute top-1/2 right-10 transform -translate-y-1/2 w-[75%] h-[85%] border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] bg-[#00ff28] rotate-3 hover:rotate-0 transition-transform duration-300 z-10">
            <img 
              src="https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?q=80&w=1000&auto=format&fit=crop" 
              alt="Colorful Neapolitan Pizza" 
              className="w-full h-full object-cover border-4 border-black border-opacity-0 hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          {/* Secondary overlapping image */}
          <div className="absolute bottom-10 left-0 w-[55%] h-[45%] border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] bg-white -rotate-3 hover:rotate-0 transition-transform duration-300 z-20">
            <img 
              src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=800&auto=format&fit=crop" 
              alt="Artisanal Pasta" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          {/* Accent element */}
          <div className="absolute top-16 left-10 bg-[#fffc00] p-4 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] z-30 transform -rotate-6 hover:rotate-0 transition-transform">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center border-2 border-black bg-white text-black font-black text-xl rounded-full">
                ★
              </div>
              <div>
                <p className="text-black font-black uppercase tracking-widest leading-none">Top Rated</p>
                <p className="text-black font-bold uppercase text-xs mt-1">Pure Veg</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

