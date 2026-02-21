// src/components/sections/TrustBar.jsx
export default function TrustBar() {
  const stats = [
    { label: "Trusted Couples", value: "200+" },
    { label: "Years Experience", value: "5+" },
    { label: "Premium Quality", value: "4K" },
    { label: "Fast Delivery", value: "14 Days" },
  ];

  return (
    <section className="py-12 bg-white border-b border-brand-light">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <h3 className="text-brand-gold font-serif text-3xl mb-1">{stat.value}</h3>
              <p className="text-brand-gray text-xs uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}