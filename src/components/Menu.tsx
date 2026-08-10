import React, { useState } from 'react';
import FullMenuModal from './FullMenuModal';

const menuItems = [
  {
    name: 'KC Garden Pizza',
    description: 'Pomodoro sauce, zucchini, sautéed mushrooms, colorful peppers, and feta cheese.',
    price: '₹349',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tag: 'Signature'
  },
  {
    name: 'Penne Alfredo',
    description: 'Penne with creamy cheese sauce, tangy tomato warmth, and parmesan.',
    price: '₹289',
    image: 'https://images.unsplash.com/photo-1621996311210-91136b69bfa3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Bruschetta',
    description: 'Toasted artisan bread with fresh tomatoes, herbs, olive oil, and garlic.',
    price: '₹199',
    image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'KC Special Salad',
    description: 'Mixed lettuce, walnut, gherkins, feta cheese, pomegranate with signature dressing.',
    price: '₹249',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tag: 'Healthy'
  },
  {
    name: 'Cheese Corn Balls',
    description: 'Crispy golden bites with sweet corn and molten cheese center.',
    price: '₹229',
    image: 'https://images.unsplash.com/photo-1528751014936-863e6e10af64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Tiramisu',
    description: 'Eggless dessert with coffee-soaked sponge, mascarpone cream, and cocoa finish.',
    price: '₹279',
    image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  }
];

export default function Menu() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="menu" className="py-24 bg-[#ffeb3b] relative border-b-8 border-black overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-display text-black uppercase stroke-white stroke-2 drop-shadow-[6px_6px_0px_rgba(255,255,255,1)] mb-6" style={{ WebkitTextStroke: '2px white' }}>
            Popular Dishes
          </h2>
          <div className="w-24 h-2 bg-[#ff2a85] mx-auto border-2 border-black mb-8 transform -rotate-2"></div>
          <p className="text-black font-bold text-xl uppercase tracking-widest bg-white inline-block px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
            Authentic Italian & More
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div key={index} className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col group overflow-hidden">
              <div className="relative h-56 border-b-4 border-black overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {item.tag && (
                  <div className="absolute top-4 right-4 bg-[#00ff28] text-black font-bold uppercase tracking-wider text-xs px-3 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transform rotate-2">
                    {item.tag}
                  </div>
                )}
                <div className="absolute bottom-4 left-4 bg-[#ff2a85] text-white font-bold text-xl px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-2">
                  {item.price}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold font-display uppercase tracking-wide mb-3">{item.name}</h3>
                <p className="text-gray-700 text-sm md:text-base flex-grow mb-4">{item.description}</p>
                <div className="mt-auto pt-4 border-t-2 border-black/10 flex justify-between items-center">
                   <button className="text-black font-bold uppercase tracking-widest text-sm hover:text-[#ff2a85] transition-colors flex items-center gap-2 group-hover:translate-x-1 duration-300">
                     Order Now <span>→</span>
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
           <button 
             onClick={() => setIsModalOpen(true)}
             className="bg-[#00e5ff] text-black px-10 py-5 font-bold uppercase tracking-widest text-lg md:text-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all transform -rotate-1"
           >
              View Full Menu
           </button>
        </div>
      </div>
      
      <FullMenuModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
