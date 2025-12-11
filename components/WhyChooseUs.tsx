import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Clock, ShieldCheck, Heart } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: Sparkles,
    title: "Visionary Design",
    description: "We don't follow trends; we set them. Our creative team pushes the boundaries of imagination."
  },
  {
    id: 2,
    icon: Clock,
    title: "Flawless Execution",
    description: "Precision planning ensuring every minute of your event flows effortlessly."
  },
  {
    id: 3,
    icon: ShieldCheck,
    title: "Privacy Assured",
    description: "Discrete service for high-profile clients who value confidentiality above all."
  },
  {
    id: 4,
    icon: Heart,
    title: "Personal Touch",
    description: "A boutique approach where you are our sole priority throughout the journey."
  }
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-serif text-slate-100">Why Classic Events?</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mb-6 group-hover:bg-luxury-champagne/10 transition-colors duration-300">
                <feature.icon className="text-luxury-champagne w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif text-slate-200 mb-3">{feature.title}</h3>
              <p className="text-slate-400 font-light text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};