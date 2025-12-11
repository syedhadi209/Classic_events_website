import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "MR AND MRS SAAD",
    content: "Our mehndi décor was vibrant and beautifully done. Everything was managed smoothly and we enjoyed the event stress-free."
  },
  {
    id: 2,
    name: "HASSAN RAZA",
    content: "The musical night was arranged beautifully, from stage lighting to sound quality, everything felt premium and well-coordinated. The energy of the evening made it truly unforgettable."
  },
  {
    id: 3,
    name: "MARIA AHEMAD",
    content: "The barat setup looked elegant and well-balanced. Guests appreciated the décor and our photos turned out beautiful. Wonderful execution."
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-slate-900/50 -skew-x-12 transform translate-x-20" />

      <div className="container mx-auto px-6 relative z-10">
        <h4 className="text-luxury-champagne text-sm uppercase tracking-[0.2em] mb-4 text-center">Testimonials</h4>
        <h2 className="text-3xl md:text-5xl font-serif text-slate-100 mb-16 text-center">Kind Words</h2>

        <div className="flex flex-col lg:flex-row gap-8 justify-center">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm p-8 md:p-10 border border-white/5 flex-1 hover:border-luxury-champagne/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex text-luxury-gold mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" className="mr-1" />
                  ))}
                </div>
                <p className="text-slate-300 font-light italic text-lg mb-8 leading-relaxed">"{t.content}"</p>
              </div>
              
              <div className="mt-auto">
                <h5 className="text-luxury-champagne font-serif text-sm uppercase tracking-widest">{t.name}</h5>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};