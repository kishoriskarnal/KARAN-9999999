import { Instagram, Facebook, Youtube, Twitter, Linkedin, Ghost, Utensils, UtensilsCrossed, Star } from 'lucide-react';

export default function Footer() {
  const socials = [
    { name: 'Instagram', icon: <Instagram size={24} color="#E1306C" />, href: 'https://www.instagram.com/kishoris.in/' },
    { name: 'Facebook', icon: <Facebook size={24} color="#1877F2" />, href: 'https://www.facebook.com/p/Kishoris-61590110572721/' },
    { name: 'YouTube', icon: <Youtube size={24} color="#FF0000" />, href: 'https://youtube.com/@kishoriskarnal?si=5Z1H4FlGynv0wcQP' },
    { name: 'X.com', icon: <Twitter size={24} color="#000000" />, href: 'https://x.com/kishorisin' },
    { name: 'LinkedIn', icon: <Linkedin size={24} color="#0A66C2" />, href: 'https://www.linkedin.com/company/kishoris/?viewAsMember=true' },
    { name: 'Snapchat', icon: <Ghost size={24} color="#000000" fill="#FFFC00" />, href: 'https://www.snapchat.com/add/kishoriskarnal' },
    { name: 'Zomato', icon: <Utensils size={24} color="#CB202D" />, href: 'https://link.zomato.com/xqzv/rshare?id=140560492305639d6' },
    { name: 'Swiggy', icon: <UtensilsCrossed size={24} color="#FC8019" />, href: 'https://www.swiggy.com/direct/brand/791119?source=swiggy-direct&subSource=generic' },
    { name: 'Review Us', icon: <Star size={24} color="#FABB05" fill="#FABB05" />, href: 'https://g.page/r/CZtFjqhqzpJ8EBE/review' },
  ];

  return (
    <footer className="bg-[#00ff28] py-16 text-center border-t-8 border-white overflow-hidden relative">
      {/* Marquee bottom */}
      <div className="absolute top-0 w-full overflow-hidden bg-[#ffeb3b] text-black py-2 border-b-4 border-white z-20">
        <div className="whitespace-nowrap animate-[marquee_15s_linear_infinite] text-lg font-bold uppercase tracking-widest flex gap-8">
          <span>KISHORI'S</span>
          <span>KISHORI'S</span>
          <span>KISHORI'S</span>
          <span>KISHORI'S</span>
          <span>KISHORI'S</span>
          <span>KISHORI'S</span>
          <span>KISHORI'S</span>
          <span>KISHORI'S</span>
          <span>KISHORI'S</span>
          <span>KISHORI'S</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 relative z-10">
        <h2 className="text-8xl md:text-[10rem] font-display text-white uppercase drop-shadow-[8px_8px_0px_rgba(255,42,133,1)] stroke-black stroke-2" style={{ WebkitTextStroke: '2px #ff2a85' }}>KISHORI'S</h2>
        <div className="w-32 h-2 bg-[#00e5ff] mx-auto mt-8 mb-12 border-2 border-black"></div>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
          {socials.map((social) => (
            <a 
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#fffc00] text-black w-24 h-24 p-2 border-4 border-[#ff2a85] shadow-[6px_6px_0px_0px_rgba(255,42,133,1)] hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(255,42,133,1)] transition-all flex flex-col items-center justify-center gap-2 group"
              aria-label={`Follow us on ${social.name}`}
              title={social.name}
            >
              <div className="group-hover:scale-110 transition-transform">
                {social.icon}
              </div>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">{social.name}</span>
            </a>
          ))}
        </div>

        <p className="text-white font-bold text-xl tracking-widest uppercase mb-4">
          PURE VEG • KARNAL
        </p>
        <p className="text-white/70 text-sm font-bold tracking-wide uppercase">
          &copy; {new Date().getFullYear()} KISHORI'S RESTAURANT. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
