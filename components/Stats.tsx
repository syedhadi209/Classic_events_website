import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { 
    id: 1, 
    value: "1000+", 
    title: "Successful Events",
    description: "We have successfully delivered 1000 plus events reflecting our expertise and commitment to excellence." 
  },
  { 
    id: 2, 
    value: "90%", 
    title: "Client Referrals",
    description: "Clients referred by our satisfied guests." 
  },
  { 
    id: 3, 
    value: "15+ Years", 
    title: "Industry Experience",
    description: "We have proudly served as a successful event management company for the past 15 years." 
  },
];

export const Stats: React.FC = () => {
  return (
    <section className="bg-slate-900 border-b border-white/5 py-16 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex-1 text-center md:text-left w-full md:w-auto md:first:pl-0 md:border-r md:border-white/10 md:last:border-0 md:pr-8 last:pr-0"
            >
              <h3 className="text-4xl md:text-5xl font-serif text-luxury-champagne mb-2">{stat.value}</h3>
              <p className="text-slate-100 uppercase tracking-widest text-sm font-semibold mb-3">{stat.title}</p>
              <p className="text-slate-400 font-light text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};