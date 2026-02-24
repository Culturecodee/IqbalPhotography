import { useState } from 'react';
import Reveal from './Reveal'

export default function FormContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    eventDate: '',
    venue: '',
    eventType: 'wedding',
    budget: '',
  });

  const PhoneNumber = {
    name: 'BOOK NOW',
    link: 'https://wa.me/6281216681765'
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Di sini nanti bisa disambungkan ke EmailJS atau Formspree
    console.log("Lead Collected:", formData);
    alert("Terima kasih! Iqbal akan segera menghubungi Anda.");
  };

  return (
    <Reveal>
    <section id="Contact" className="py-24 bg-white px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Bagian Kiri: Info Kontak & Copywriting */}
          <div className="lg:w-1/3 space-y-8">
            <div>
              <span className="text-brand-gold uppercase tracking-[0.3em] text-xs font-semibold">Contact Us</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-2">Let’s Create <br />Magic Together</h2>
            </div>
            
            <p className="text-brand-gray leading-relaxed font-light text-lg">
              Punya konsep impian atau ingin diskusi soal jadwal? Jangan ragu untuk menghubungi saya. Mari kita abadikan momen Anda di Malang dengan cara yang paling elegan.
            </p>

            <div className="space-y-4 pt-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-brand-light rounded-full flex items-center justify-center text-brand-gold">
                  <span className="text-sm">📍</span>
                </div>
                <p className="text-sm font-medium">Kepanjen, Malang, East Java</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-brand-light rounded-full flex items-center justify-center text-brand-gold">
                  <span className="text-sm">📧</span>
                </div>
                <p className="text-sm font-medium">hello@iqbalphotography.com</p>
              </div>
            </div>
          </div>

          {/* Bagian Kanan: Form Generate Leads */}
          <div className="lg:w-2/3 bg-brand-light p-8 md:p-12 rounded-[2rem] shadow-sm">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-brand-gray">Full Name</label>
                <input 
                  type="text" name="name" required
                  placeholder="Nama Lengkap"
                  className="p-4 rounded-xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-brand-gold outline-none transition-all bg-white"
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-brand-gray">WhatsApp Number</label>
                <input 
                  type="tel" name="whatsapp" required
                  placeholder="0812xxxx"
                  className="p-4 rounded-xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-brand-gold outline-none transition-all bg-white"
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-brand-gray">Event Date</label>
                <input 
                  type="date" name="eventDate" required
                  className="p-4 rounded-xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-brand-gold outline-none transition-all bg-white"
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-brand-gray">Event Location (Venue)</label>
                <input 
                  type="text" name="venue"
                  placeholder="Nama Hotel / Gedung / Lokasi"
                  className="p-4 rounded-xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-brand-gold outline-none transition-all bg-white"
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-brand-gray">Service Type</label>
                <select 
                  name="eventType"
                  className="p-4 rounded-xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-brand-gold outline-none transition-all bg-white"
                  onChange={handleChange}
                >
                  <option value="wedding">Wedding Documentation</option>
                  <option value="prewedding">Prewedding Session</option>
                  <option value="event">Event / Documentation</option>
                </select>
              </div>

              <div className="md:col-span-2 mt-4">
                <button 
                  type="submit"
                  className="w-full py-5 bg-brand-dark text-white rounded-xl uppercase tracking-[0.3em] font-bold text-xs hover:bg-brand-gold transition-all shadow-lg hover:shadow-brand-gold/20"
                >
                  Check My Date Availability
                </button>
                <p className="text-center text-[10px] text-brand-gray mt-4 italic">
                  *Limited bookings per month to maintain quality.
                </p>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
    </Reveal>
  );
}