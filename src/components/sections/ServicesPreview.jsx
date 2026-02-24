import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from './Reveal';

const servicesData = [
  {
    id: 'wedding',
    tag: 'SERVICES',
    title: 'WEDDING PHOTOGRAPHY',
    description: 'Mengabadikan janji suci dengan pendekatan estetika modern dan emosional. Kami memastikan setiap detail kecil dari hari bahagia Anda tersimpan selamanya dalam kualitas premium.',
    highlights: [
      'FULL DAY DOCUMENTATION (8-12 HOURS)',
      'PREMIUM WEDDING ALBUM & WOODEN BOX',
      'CINEMATIC COLOR GRADING STYLE',
      'ONLINE GALLERY ACCESSIBLE FOR 1 YEAR'
    ],
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'prewedding',
    tag: 'SERVICES',
    title: 'PRE-WEDDING SESSION',
    description: 'Ceritakan perjalanan cinta Anda melalui bingkai estetika yang timeless. Kami memadukan keindahan alam Malang dan chemistry unik setiap pasangan untuk menciptakan kenangan visual yang mendalam sebelum hari bahagia Anda tiba.',
    highlights: [
      'FULL DAY SESSION IN MULTIPLE LOCATIONS AROUND MALANG & BATU',
      'ARTISTIC DIRECTION & CONCEPT CONSULTATION INCLUDED',
      'PROFESSIONAL COLOR GRADING FOR A CINEMATIC FINISH',
      'HIGH-RESOLUTION DIGITAL GALLERY & LARGE CANVAS PRINT'
    ],
    image: '/prewedding.webp'
  }
];

export default function ServicesSection() {
  const [index, setIndex] = useState(0);

  const nextService = () => setIndex((prev) => (prev + 1) % servicesData.length);
  const prevService = () => setIndex((prev) => (prev - 1 + servicesData.length) % servicesData.length);

  const current = servicesData[index];

  return (
    <Reveal>
    <section className="py-24 bg-white text-brand-dark px-6 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-24">
        
        {/* Header: Title & Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-2">
          <div>
            <span className="text-brand-gold tracking-[0.4em] text-xs font-bold">{current.tag}</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-2 tracking-tight">MY PHOTOGRAPHY SERVICES</h2>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <button onClick={prevService} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-brand-dark hover:text-white transition-all">
                ←
              </button>
              <button onClick={nextService} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-brand-dark hover:text-white transition-all">
                →
              </button>
            </div>
            <a href="/services#ServicesMore">
              <button className="bg-brand-dark text-white px-8 py-3 rounded-lg text-xs uppercase tracking-widest hover:bg-brand-gold transition-colors">
              View All Services →
              </button>
              </a>
          </div>
        </div>

        {/* Content Body */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={current.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col lg:flex-row gap-12 justify-center items-center"
            >
            {/* Left Side: Text */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="flex items-center gap-4">
                <h3 className="font-serif text-5xl tracking-tighter">{current.title.split(' ')[0]}</h3>
                <div className="bg-brand-gold p-3 rounded-full text-white transform -rotate-45">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                </div>
              </div>
              
              <p className="text-brand-gray leading-relaxed text-lg max-w-xl">
                {current.description}
              </p>

              <div className="space-y-4">
                <p className="font-bold text-xs tracking-widest text-brand-gold uppercase">Service Highlights</p>
                {current.highlights.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:bg-brand-light transition-colors">
                    <span className="text-brand-gold">✦</span>
                    <p className="text-xs font-semibold tracking-wider text-brand-dark">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Image */}
            <div className="w-full lg:w-1/2">
              <motion.div 
                whileHover={{ scale: 0.98 }}
                className="relative h-[500px] md:h-[600px] w-full rounded-[40px] overflow-hidden shadow-2xl"
                >
                <img 
                  src={current.image} 
                  alt={current.title}
                  className="w-full h-full object-cover"
                  />
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  </Reveal>
  );
}