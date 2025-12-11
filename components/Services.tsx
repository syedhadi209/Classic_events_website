import React from 'react';
import { motion } from 'framer-motion';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 1,
    title: "Wedding Events",
    description: "We provide complete planning and décor services for Mehndi, Mayon, Barat, and Walima events, ensuring every moment is beautifully organized and perfectly executed.",
    image: "https://images.unsplash.com/photo-1705058718118-80cadb3e9f4c?q=80&w=822&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Birthday Parties",
    description: "We offer complete planning and décor services for birthday parties, ensuring a fun, well-organized, and unforgettable event.",
    image: "https://plus.unsplash.com/premium_photo-1691688119444-e7d321e3087a?q=80&w=776&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Corporate Events",
    description: "We transform corporate events into meaningful experiences with smart setups, strategic planning, and professional execution.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Concerts",
    description: "We create high-energy concert experiences with powerful staging, seamless coordination, and impactful crowd engagement.",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Consultancy",
    description: "We provide expert event consultancy, guiding you with creative concepts, smart planning, and strategies that turn ideas into successful events.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Live Shows",
    description: "We bring live shows to life with creative concepts, vibrant setups, and flawless management for an unforgettable experience.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop"
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-900 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.h4 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-luxury-champagne text-sm uppercase tracking-[0.2em] mb-4"
            >
                Our Expertise
            </motion.h4>
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-serif text-slate-100"
            >
                Curated Services
            </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[500px] overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="w-12 h-[1px] bg-luxury-champagne mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="flex justify-between items-end">
                    <h3 className="text-3xl font-serif text-slate-100 mb-2 group-hover:text-luxury-champagne transition-colors">{service.title}</h3>
                    <span className="text-5xl font-serif text-white/5 font-bold absolute top-8 right-8 group-hover:text-white/10 transition-colors">0{service.id}</span>
                </div>
                <p className="text-slate-300 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {service.description}
                </p>
              </div>
              
              {/* Border Glow Effect */}
              <div className="absolute inset-4 border border-white/20 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};