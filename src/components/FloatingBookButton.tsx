import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

export default function FloatingBookButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="flex flex-col gap-3 mb-4"
          >
            <a
              href="https://wa.me/918950084841"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#00ff00] text-black px-6 py-4 font-bold uppercase tracking-wider border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <MessageCircle size={24} />
              WhatsApp
            </a>
            <a
              href="tel:+918950084841"
              className="flex items-center gap-3 bg-[#ffeb3b] text-black px-6 py-4 font-bold uppercase tracking-wider border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <Phone size={24} />
              Call Us
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#ff2a85] text-white px-8 py-5 flex items-center gap-3 font-bold uppercase tracking-widest border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all text-xl"
      >
        <Calendar size={28} />
        {isOpen ? 'Close' : 'Contact Us'}
      </button>
    </div>
  );
}
