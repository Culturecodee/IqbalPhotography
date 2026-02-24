import Reveal from "./Reveal"

// src/components/sections/CTASection.jsx
export default function CTASection() {
  return (
    <Reveal>
      <section className="py-20 bg-brand-light px-6 lg:px-24">
        <div className="container mx-auto max-w-4xl text-center bg-white p-12 md:p-20 rounded-3xl shadow-sm border border-brand-gold/10">
          <h2 className="font-serif text-3xl md:text-5xl mb-6">
            Let’s Secure Your Date Before It’s Fully Booked.
          </h2>
          <p className="text-brand-gray mb-10 text-lg">
            Kami membatasi jumlah klien setiap bulannya untuk menjaga kualitas editing dan layanan yang personal.
          </p>
          <button className="bg-brand-dark text-white px-12 py-5 rounded-full text-sm uppercase tracking-[0.2em] hover:bg-brand-gold transition-all shadow-lg">
            Book Your Date Now
          </button>
        </div>
      </section>
    </Reveal>
  );
}