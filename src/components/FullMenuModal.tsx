import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { menuCategories } from '../data/fullMenu';

interface FullMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FullMenuModal({ isOpen, onClose }: FullMenuModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
      <div 
        className="absolute inset-0 bg-[#ff2a85]/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-6xl h-full bg-[#ffeb3b] border-8 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] flex flex-col animate-[fade-in_0.3s_ease-out]">
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 md:p-8 border-b-8 border-black bg-white">
          <div>
            <h2 className="text-4xl md:text-6xl font-display uppercase tracking-wider text-black">
              Full Menu
            </h2>
            <p className="text-[#ff2a85] font-bold text-lg md:text-xl uppercase tracking-widest mt-2">
              Kishori's Restaurant • Pure Veg
            </p>
          </div>
          <button 
            onClick={onClose}
            className="bg-[#00e5ff] text-black p-3 border-4 border-black hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all transform rotate-2 group"
          >
            <X size={32} strokeWidth={3} className="group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 scrollbar-hide" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '32px 32px' }}>
          
          <div className="columns-1 md:columns-2 xl:columns-3 gap-8 space-y-8 pb-12">
            {menuCategories.map((category, idx) => (
              <div 
                key={idx} 
                className="bg-white border-4 border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] break-inside-avoid relative"
              >
                {/* Category Header */}
                <div className="mb-8 border-b-4 border-black pb-4">
                  <h3 className="text-3xl font-display uppercase tracking-wide text-[#ff2a85]">
                    {category.category}
                  </h3>
                  {category.description && (
                    <p className="text-sm font-bold uppercase tracking-wider text-gray-500 mt-2">
                      {category.description}
                    </p>
                  )}
                </div>

                {/* Items */}
                <div className="space-y-6">
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="group">
                      <div className="flex justify-between items-baseline mb-1 gap-4">
                        <h4 className="text-lg md:text-xl font-bold uppercase tracking-wide group-hover:text-[#00ff28] transition-colors">
                          {item.name}
                        </h4>
                        <div className="border-b-2 border-dotted border-gray-400 flex-grow relative top-[-6px]"></div>
                        <span className="font-bold text-xl md:text-2xl font-display">
                          ₹{item.price}
                        </span>
                      </div>
                      {item.description && (
                        <p className="text-sm text-gray-700 italic">
                          {item.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer inside modal */}
          <div className="mt-12 text-center bg-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-2xl mx-auto transform -rotate-1">
            <h3 className="text-2xl font-bold uppercase tracking-widest text-[#ff2a85] mb-2">
              Allergies?
            </h3>
            <p className="text-black font-medium">
              Please advise your Vibe Dealer if you have any food allergy & ask about the ingredients used in your meal before placing your order.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
