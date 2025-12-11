import React from 'react';
import { motion } from 'framer-motion';

const images = [
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" },
  { src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop", span: "md:col-span-1 md:row-span-2" },
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" },
  { src: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?q=80&w=2070&auto=format&fit=crop", span: "md:col-span-2 md:row-span-1" },
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" },
];

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h4 className="text-luxury-champagne text-sm uppercase tracking-[0.2em] mb-4">Portfolio</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-100">Recent Masterpieces</h2>
          </div>
          <a href="#gallery" onClick={(e) => e.preventDefault()} className="hidden md:inline-block border-b border-luxury-champagne pb-1 text-luxury-champagne uppercase tracking-widest text-sm hover:text-white hover:border-white transition-colors mt-8 md:mt-0 cursor-default">
            View All Projects
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className={`relative group overflow-hidden ${img.span}`}
            >
              <img 
                src={img.src} 
                alt="Event gallery" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-serif italic text-2xl">View Details</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
             <a href="#gallery" onClick={(e) => e.preventDefault()} className="inline-block border-b border-luxury-champagne pb-1 text-luxury-champagne uppercase tracking-widest text-sm cursor-default">
                View All Projects
            </a>
        </div>
      </div>
    </section>
  );
};