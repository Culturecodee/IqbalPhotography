// src/components/sections/Hero.jsx
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[90vh] md:h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop" 
          className="h-full w-full object-cover scale-105"
          alt="Iqbal Photography Wedding"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 text-center text-white px-4"
      >
        <h1 className="font-serif text-5xl md:text-8xl mb-6 tracking-tight">
          Capturing Your <span className="italic font-light">Elegant Moments</span>
        </h1>
        <p className="font-sans text-lg md:text-xl mb-10 opacity-90 max-w-2xl mx-auto font-light tracking-wide">
          Wedding, Prewedding & Event Photography based in Malang.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#Contact">
            <button className="bg-brand-gold hover:bg-[#b3965d] text-white px-10 py-4 rounded-full text-sm uppercase tracking-widest transition-all transform hover:scale-105">
              Check Availability
            </button>
          </a>
          <a href="#AboutPreview">
            <button className="text-white border border-white/50 hover:bg-white/10 px-10 py-4 rounded-full text-sm uppercase tracking-widest transition-all">
              View Portfolio
            </button>
          </a>
        </div>
      </motion.div>
    </section>
  );
}