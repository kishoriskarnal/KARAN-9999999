import { motion } from 'motion/react';
import interiorImg from '../assets/images/kishori_interior_1786353173853.jpg';
import thaliImg from '../assets/images/signature_thali_1786353187525.jpg';
import paneerImg from '../assets/images/paneer_tikka_1786353199967.jpg';
import dessertImg from '../assets/images/dessert_gulab_jamun_1786353212883.jpg';
import diningImg from '../assets/images/dining_experience_1786353226437.jpg';

const images = [
  { src: diningImg, alt: 'A top-down view of our modern dining experience', className: 'md:col-span-2 md:row-span-2' },
  { src: thaliImg, alt: 'Signature Thali', className: 'md:col-span-1 md:row-span-1' },
  { src: paneerImg, alt: 'Sizzling Paneer Tikka', className: 'md:col-span-1 md:row-span-1' },
  { src: interiorImg, alt: 'Kishori\'s modern pure-vegetarian interior', className: 'md:col-span-2 md:row-span-1' },
  { src: dessertImg, alt: 'Delicious Gulab Jamun', className: 'md:col-span-1 md:row-span-1' },
];

export default function Gallery() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tight text-zinc-900 mb-6">
            A Feast for the Eyes
          </h2>
          <p className="text-zinc-600 max-w-2xl mx-auto text-lg md:text-xl">
            Experience the vibrant colors and inviting ambiance of Kishori's before you even take a seat.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[350px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl group ${img.className}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
