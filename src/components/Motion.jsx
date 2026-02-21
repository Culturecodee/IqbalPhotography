// src/components/sections/PortfolioPreview.jsx
import { motion } from 'framer-motion';

const images = [
  { id: 1, src: '/images/wedding-1.webp', category: 'Wedding' },
  { id: 2, src: '/images/prewed-1.webp', category: 'Prewedding' },
  // ... data lainnya
];

export default function PortfolioPreview() {
  return (
    <section className="py-20 px-6">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl mb-4">Featured Work</h2>
        <div className="h-1 w-20 bg-brand-gold mx-auto"></div>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((img) => (
          <motion.div 
            key={img.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group overflow-hidden rounded-xl"
          >
            <img 
              src={img.src} 
              alt={img.category}
              className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <p className="text-white font-serif text-xl">{img.category}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}