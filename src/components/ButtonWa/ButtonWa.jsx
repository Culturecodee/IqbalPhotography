import { motion } from 'framer-motion';

export default function FloatingWhatsApp() {
  const phoneNumber = "6281216681765";
  const message = encodeURIComponent("Halo Iqbal Photography! Saya tertarik untuk konsultasi jadwal dan konsep foto. Bisa bantu?");
  const waLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }} // Menggunakan whileInView agar lebih aman saat scroll
      transition={{ 
        duration: 0.5, 
        delay: 2, 
        type: "spring", 
        stiffness: 260, 
        damping: 20 
      }}
      className="fixed bottom-8 right-8 z-[999]"
    >
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center justify-center w-16 h-16 bg-green-100 rounded-full shadow-2xl hover:bg-white transition-all duration-300"
      >
        {/* Tooltip Gaya Premium */}
        <span className="absolute right-22 bg-white text-[#1A1A1A] px-4 py-2 rounded-xl text-xs font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Konsultasi Jadwal Gratis 👉
        </span>

        {/* Logo WhatsApp PNG */}
        <img 
          src="/Wa.png" 
          alt="WhatsApp Iqbal Photography" 
          className="w-10 h-10 object-contain" // Ukuran disesuaikan agar pas di dalam lingkaran
        />

        {/* Ping Animation (Efek Menarik Perhatian) */}
        <span className="absolute top-0 right-0 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-green-600"></span>
        </span>
      </a>
    </motion.div>
  );
}