import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ImageWithLoader } from './ui/ImageWithLoader';

// Selection of 6 highlight projects for the home page
const featuredProjects = [
  { id: 1, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765639095/WhatsApp_Image_2025-12-05_at_09.51.04_2_tctcuh.jpg", title: "Royal Reception", category: "Wedding" },
  { id: 2, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765639093/WhatsApp_Image_2025-12-05_at_09.51.05_1_kloswz.jpg", title: "Grand Entrance", category: "Decor" },
  { id: 3, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765639093/WhatsApp_Image_2025-12-05_at_09.49.53_2_wbvdui.jpg", title: "Stage Design", category: "Stage" },
  { id: 4, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765639093/WhatsApp_Image_2025-12-05_at_09.51.04_nbu3aq.jpg", title: "Evening Gala", category: "Corporate" },
  { id: 5, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765639091/WhatsApp_Image_2025-12-05_at_09.49.52_qfdntx.jpg", title: "Table Setting", category: "Dining" },
  { id: 6, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765639091/WhatsApp_Image_2025-12-05_at_09.49.53_3_qbatfx.jpg", title: "Luxury Lounge", category: "Setup" },
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
          <Link to="/projects" className="hidden md:inline-block border-b border-luxury-champagne pb-1 text-luxury-champagne uppercase tracking-widest text-sm hover:text-white hover:border-white transition-colors mt-8 md:mt-0">
            View All Projects
          </Link>
        </div>

        {/* Updated Grid Layout to match Projects page */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative aspect-[4/5] overflow-hidden rounded-sm cursor-pointer bg-slate-900"
            >
              <ImageWithLoader 
                src={project.src} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/60 transition-all duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-luxury-champagne text-xs uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {project.category}
                </span>
                <h3 className="text-2xl font-serif text-white italic transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {project.title}
                </h3>
                <div className="mt-6 w-8 h-[1px] bg-luxury-champagne transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-150" />
              </div>

              {/* Border effect */}
              <div className="absolute inset-4 border border-white/20 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
             <Link to="/projects" className="inline-block border-b border-luxury-champagne pb-1 text-luxury-champagne uppercase tracking-widest text-sm">
                View All Projects
            </Link>
        </div>
      </div>
    </section>
  );
};