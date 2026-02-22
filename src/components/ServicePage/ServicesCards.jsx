import Reveal from '../sections/Reveal'; // Pakai komponen Reveal yang kita buat tadi

const extraServices = [
  {
    title: "Family Portrait",
    icon: "👨‍👩‍👧‍👦",
    desc: "Sesi foto keluarga hangat di studio atau outdoor untuk mengabadikan momen kebersamaan yang tak lekang oleh waktu.",
    tags: ["Studio", "Outdoor", "Digital Files"]
  },
  {
    title: "Graduation Session",
    icon: "🎓",
    desc: "Rayakan pencapaian akademik kamu dengan foto wisuda yang elegan dan cinematic di area Malang & sekitarnya.",
    tags: ["Individual", "Group", "Canvas Print"]
  },
  {
    title: "Product Photography",
    icon: "📸",
    desc: "Tingkatkan nilai brand kamu dengan foto produk profesional untuk katalog, website, atau media sosial.",
    tags: ["Commercial", "High Res", "Editing"]
  },
  {
    title: "Couple Session",
    icon: "💍",
    desc: "Abadikan chemistry kamu dan pasangan dalam sesi foto santai namun tetap terlihat mahal dan estetik.",
    tags: ["Lifestyle", "Candid", "Engagement"]
  }
];

export default function ServicesCards() {
  return (
    <section id='ServicesMore' className="py-20 bg-white px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {extraServices.map((service, index) => (
            <Reveal key={index} direction="up" delay={index * 0.1}>
              <div className="group p-8 rounded-[2rem] bg-brand-light border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-brand-gold/10 transition-all duration-500 h-full flex flex-col justify-between">
                <div>
                  <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-500">
                    {service.icon}
                  </div>
                  <h3 className="font-serif text-2xl mb-4 group-hover:text-brand-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-brand-gray leading-relaxed text-sm mb-6">
                    {service.desc}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-200/50">
                  {service.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] uppercase tracking-widest font-bold text-brand-gray/60 bg-gray-200/30 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}