import { motion } from 'framer-motion';

export default function Footer() {
  const socialLink = [
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/iqbal.photography_/'
    },
    {
      name: 'Facebook',
      link: 'https://www.facebook.com/iqbal.maulud.5'
    },
    {
      name: 'Tiktok',
      link: 'https://www.facebook.com/iqbal.maulud.5'
    }
  ]

  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Identity */}
          <div className="md:col-span-2 space-y-6">
            <h2 className="font-serif text-2xl font-bold tracking-tighter">
              IQBAL<span className="text-brand-gold">.PHOTO</span>
            </h2>
            <p className="text-brand-gray text-sm leading-relaxed max-w-sm">
              Capturing your most precious moments with an elegant and modern touch. 
              Based in Kepanjen, Malang, ready to travel for your stories.
            </p>
            <div className="flex gap-4">
              {/* Social Icons - Bisa diganti link sosmed Iqbal */}
              {socialLink.map((social) => (
                <a key={social.name} href={social.link} className="text-[10px] uppercase tracking-widest font-bold text-brand-dark hover:text-brand-gold transition-colors">
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-gray">Explore</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="/" className="hover:text-brand-gold transition-colors">Home</a></li>
              <li><a href="/services" className="hover:text-brand-gold transition-colors">Services</a></li>
              <li><a href="/portfolio" className="hover:text-brand-gold transition-colors">Portfolio</a></li>
              <li><a href="/contact" className="hover:text-brand-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services Quick Link */}
          <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-gray">Services</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="text-brand-gray/80">Wedding Documentation</li>
              <li className="text-brand-gray/80">Pre-Wedding Session</li>
              <li className="text-brand-gray/80">Event Photography</li>
              <li className="text-brand-gray/80">Family Portrait</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-brand-gray uppercase tracking-widest">
            © 2025 IQBAL PHOTOGRAPHY. ALL RIGHTS RESERVED.
          </p>
          
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-brand-gray uppercase tracking-widest">Powered by</span>
            <span className="text-[10px] font-bold tracking-tighter">CULTURECODE.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}