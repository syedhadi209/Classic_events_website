import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { motion } from 'framer-motion';
import { Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => (
  <footer className="bg-slate-950 py-12 border-t border-white/10 text-center md:text-left">
    <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
      <div className="mb-6 md:mb-0">
        <h2 className="text-2xl font-serif text-luxury-champagne tracking-widest font-bold mb-2 uppercase">Classic Events</h2>
        <p className="text-slate-500 text-xs uppercase tracking-widest">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
      
      <div className="flex space-x-6">
        <a href="https://www.instagram.com/classic_events111" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-luxury-champagne transition-colors"><Instagram size={20} /></a>
        <a href="#" className="text-slate-400 hover:text-luxury-champagne transition-colors"><Facebook size={20} /></a>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="antialiased bg-slate-950 min-h-screen text-slate-200 selection:bg-luxury-champagne selection:text-slate-900">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Gallery />
      <WhyChooseUs />
      <Testimonials />
      
      {/* Plan Your Event CTA */}
      <section className="py-20 bg-luxury-champagne flex flex-col items-center justify-center text-center px-6">
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-serif text-slate-900 mb-6"
        >
            Ready to Create Magic?
        </motion.h2>
        <motion.a 
            href="#contact"
            onClick={(e) => handleScrollTo(e, 'contact')}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block border border-slate-900 px-12 py-4 text-slate-900 uppercase tracking-widest font-bold text-sm hover:bg-slate-900 hover:text-luxury-champagne transition-colors duration-300 cursor-pointer"
        >
            Start Your Project
        </motion.a>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default App;