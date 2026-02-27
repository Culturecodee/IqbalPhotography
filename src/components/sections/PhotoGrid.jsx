import { motion } from 'framer-motion';
import Reveal from './Reveal';

const featuredPhotos = [
  { id: 1, src: '/page1.jpeg', size: 'large', title: 'Eternal Love', category: 'Wedding' },
  { id: 2, src: '/page2.webp', size: 'small', title: 'Golden Hour', category: 'Prewedding' },
  { id: 3, src: '/page3.heic', size: 'small', title: 'The Vows', category: 'Wedding' },
  { id: 4, src: '/page4.heic', size: 'small', title: 'City Lights', category: 'Event' },
  { id: 5, src: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8', size: 'medium', title: 'Classic Ballroom', category: 'Wedding' },
];

export default function PhotoGrid() {
  return (
    <section className="py-24 bg-white px-6">
      <div className="container mx-auto px-6 lg:px-24">
        <Reveal>
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-brand-gold uppercase tracking-[0.3em] text-xs font-semibold">Our Gallery</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-2">The Curated Gallery</h2>
          </div>
          <button className="hidden md:block border-b border-brand-dark pb-1 text-sm uppercase tracking-widest hover:text-brand-gold hover:border-brand-gold transition-all">
            Explore All
          </button>
        </div>
        </Reveal>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[1200px] md:h-[800px]">
          {featuredPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.5, ease: 'easeOut' }}
              viewport={{ once: true }}
              className={`relative group overflow-hidden rounded-xl bg-brand-light ${
                photo.size === 'large' ? 'md:col-span-2 md:row-span-2' : 
                photo.size === 'medium' ? 'md:col-span-2' : ''
              }`}
            >
              <img 
                src={photo.src} 
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <p className="text-white/70 text-xs uppercase tracking-[0.2em] mb-1">{photo.category}</p>
                <h3 className="text-white font-serif text-2xl">{photo.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile-only button */}
        <button className="w-full mt-8 md:hidden border border-brand-dark py-4 rounded-full text-sm uppercase tracking-widest">
          Explore All for The pictures
        </button>
      </div>
    </section>
  );
}