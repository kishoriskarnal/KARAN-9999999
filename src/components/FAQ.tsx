import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Do you have parking available?",
    answer: "While our menu playfully says 'NO PARKING', street parking is typically available near our location at ITI Chowk. We recommend arriving a bit early during peak hours to find a good spot!"
  },
  {
    question: "Do you take table reservations?",
    answer: "Yes! We recommend booking in advance, especially for weekends or special occasions. You can call us directly at 8950084841 to secure your table."
  },
  {
    question: "Is your restaurant 100% vegetarian?",
    answer: "Absolutely. Kishori's is a proud pure vegetarian establishment. We bring the authentic flavors of Italy and cafe classics to Karnal, completely meat-free."
  },
  {
    question: "Can you accommodate food allergies?",
    answer: "Please advise your 'Vibe Dealer' (our awesome staff) if you have any food allergies. Ask about the ingredients used in your meal before placing your order, and we will do our best to accommodate your needs."
  },
  {
    question: "How long does the food take to prepare?",
    answer: "Good things take time! Our sourdough pizzas, handcrafted pastas, and other dishes are made fresh to order from scratch. Your food may take 10-15 minutes. In the meantime, soak in the vibes, challenge your friends to board games or arcade games, and make yourself at home."
  },
  {
    question: "Do you deliver?",
    answer: "Yes, you can enjoy our food from the comfort of your home. We are available for delivery on both Zomato and Swiggy!"
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#00ff28] border-b-8 border-black">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-display text-white uppercase stroke-black stroke-2 drop-shadow-[6px_6px_0px_rgba(0,0,0,1)] mb-6" style={{ WebkitTextStroke: '2px black' }}>
            Got Questions?
          </h2>
          <div className="w-24 h-2 bg-[#ff2a85] mx-auto border-2 border-black mb-8 transform rotate-2"></div>
          <p className="text-black font-bold text-xl uppercase tracking-widest bg-white inline-block px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
            We've Got Answers
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`bg-white border-4 border-black transition-all duration-300 ${isOpen ? 'shadow-[8px_8px_0px_0px_rgba(255,42,133,1)] -translate-y-1' : 'shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]'}`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 md:p-8 flex justify-between items-center focus:outline-none group"
                >
                  <h3 className="text-xl md:text-2xl font-bold font-display uppercase tracking-wide pr-8 group-hover:text-[#ff2a85] transition-colors">
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-10 h-10 border-2 border-black flex items-center justify-center transition-colors ${isOpen ? 'bg-[#ff2a85] text-white' : 'bg-[#fffc00] text-black group-hover:bg-[#00e5ff]'}`}>
                    {isOpen ? <Minus size={24} strokeWidth={3} /> : <Plus size={24} strokeWidth={3} />}
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-6 md:p-8 pt-0 border-t-2 border-black/10 text-gray-800 text-lg md:text-xl font-medium mt-2">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
