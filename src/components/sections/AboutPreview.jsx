import Reveal from './Reveal'
// src/components/sections/AboutPreview.jsx
export default function AboutPreview() {
  return (
  <Reveal>
    <section id="AboutPreview" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-24 flex flex-col md:flex-row justify-center items-center gap-16">
        <div className="w-full md:w-1/2">
          <img 
            src="/masiqbal.webp" 
            className="rounded-xl shadow-2xl w-full h-[500px] object-cover"
            alt="Iqbal Photographer"
            />
        </div>
        <div className="w-full md:w-1/2 space-y-6">
          <span className="text-brand-gold uppercase tracking-[0.3em] text-sm font-semibold">The Soul Behind the Lens</span>
          <h2 className="font-serif text-4xl md:text-5xl text-brand-dark leading-tight">
            Capturing emotions, <br />not just poses.
          </h2>
          <p className="text-brand-gray leading-relaxed text-lg font-light">
            Halo, saya Iqbal. Berbasis di Malang, saya percaya bahwa setiap momen memiliki cerita uniknya sendiri. Fokus saya adalah menangkap esensi emosional dalam setiap jepretan dengan gaya yang modern dan clean.
          </p>
          <button className="border-b-2 border-brand-gold pb-1 text-brand-dark font-medium hover:text-brand-gold transition-colors">
            Learn More About Me
          </button>
        </div>
      </div>
    </section>
  </Reveal>
  );
}