import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  // State untuk buka/tutup menu di HP (Hamburger Menu)
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-[100] border-b border-gray-100">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO */}
        <Link to="/" className="font-serif text-xl font-bold tracking-tighter">
          IQBAL<span className="text-brand-gold">.PHOTO</span>
        </Link>

        {/* DESKTOP MENU (Muncul di layar gede) */}
        <div className="hidden md:flex gap-8 items-center">
          {menuItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              className="text-sm uppercase tracking-widest hover:text-brand-gold transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Link to="/contact" className="bg-brand-dark text-white px-6 py-2 rounded-full text-xs">
            BOOK NOW
          </Link>
        </div>

        {/* MOBILE BUTTON (Hanya muncul di HP) */}
        <button 
          className="md:hidden text-brand-dark"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Icon garis tiga (hamburger) */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 flex flex-col p-6 gap-4">
          {menuItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              onClick={() => setIsOpen(false)} // Tutup menu setelah diklik
              className="text-lg font-serif border-b border-gray-50 pb-2"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}