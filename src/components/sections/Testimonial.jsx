import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from './Reveal';

const reviews = [
  {
    id: 1,
    name: "Icha & Rian",
    location: "Harris Hotel, Malang",
    text: "Mas Iqbal bener-bener bikin kita nyaman pas sesi foto. Awalnya kita kaku banget di depan kamera, tapi hasilnya malah natural dan cinematic banget. Highly recommended buat yang cari gaya modern!",
    image: "https://images.unsplash.com/photo-1623091427171-31dd28c941ee?q=80&w=200&h=200&fit=crop"
  },
  {
    id: 2,
    name: "Sarah & Dimas",
    location: "Lembah Indah, Malang",
    text: "Puas banget sama hasil prewed-nya! Editing warnanya mahal banget (clean & elegant). Mas Iqbal juga on-time dan komunikatif banget dari awal konsultasi sampai foto jadi.",
    image: "https://images.unsplash.com/photo-1583939411023-14782f7415b1?q=80&w=200&h=200&fit=crop"
  },
  {
    id: 3,
    name: "Vina & Kevin",
    location: "Pujon Kidul",
    text: "Gak salah pilih fotografer buat momen sekali seumur hidup. Mas Iqbal bisa nangkep momen-momen candid yang emosional banget. Album fisiknya juga dapet yang kualitas premium.",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=200&h=200&fit=crop"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));

  return (
    <Reveal>
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-gold uppercase tracking-[0.3em] text-xs font-semibold">What They Say</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-2">Client Stories</h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
              >
              <div className="mb-8 flex justify-center">
                <img 
                  src={reviews[current].image} 
                  alt={reviews[current].name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-brand-gold p-1"
                />
              </div>
              
              <p className="font-serif text-2xl md:text-3xl italic text-brand-dark leading-relaxed mb-8 px-4">
                "{reviews[current].text}"
              </p>
              
              <h4 className="font-sans font-bold text-lg text-brand-dark">{reviews[current].name}</h4>
              <p className="text-brand-gray text-sm uppercase tracking-widest">{reviews[current].location}</p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-6 mt-12">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-brand-dark hover:text-white transition-all"
              >
              ←
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-brand-dark hover:text-white transition-all"
              >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  </Reveal>
  );
}