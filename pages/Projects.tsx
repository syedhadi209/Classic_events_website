import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '../components/ui/Reveal';
import { ImageWithLoader } from '../components/ui/ImageWithLoader';

const allProjects = [
  { id: 1, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765639095/WhatsApp_Image_2025-12-05_at_09.51.04_2_tctcuh.jpg", title: "Royal Reception", category: "Wedding" },
  { id: 2, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765639093/WhatsApp_Image_2025-12-05_at_09.51.05_1_kloswz.jpg", title: "Grand Entrance", category: "Decor" },
  { id: 3, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765639093/WhatsApp_Image_2025-12-05_at_09.49.53_2_wbvdui.jpg", title: "Stage Design", category: "Stage" },
  { id: 4, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765639092/WhatsApp_Image_2025-12-05_at_09.51.04_1_s28vsn.jpg", title: "Floral Arches", category: "Decor" },
  { id: 5, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765639093/WhatsApp_Image_2025-12-05_at_09.51.04_nbu3aq.jpg", title: "Evening Gala", category: "Corporate" },
  { id: 6, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765639092/WhatsApp_Image_2025-12-05_at_09.49.52_5_u7iclq.jpg", title: "Lighting Ambiance", category: "Lighting" },
  { id: 7, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765639091/WhatsApp_Image_2025-12-05_at_09.49.52_qfdntx.jpg", title: "Table Setting", category: "Dining" },
  { id: 8, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765639091/WhatsApp_Image_2025-12-05_at_09.49.53_3_qbatfx.jpg", title: "Luxury Lounge", category: "Setup" },
  { id: 9, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765639091/WhatsApp_Image_2025-12-05_at_09.49.53_uo265g.jpg", title: "Wedding Hall", category: "Wedding" },
  { id: 10, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765639091/WhatsApp_Image_2025-12-05_at_09.56.08_d5knvi.jpg", title: "Outdoor Elegance", category: "Outdoor" },
  { id: 11, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765639090/WhatsApp_Image_2025-12-05_at_09.49.53_1_ad6f52.jpg", title: "Floral Masterpiece", category: "Decor" },
  { id: 12, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765639089/WhatsApp_Image_2025-12-05_at_09.56.01_vz4pma.jpg", title: "Night of Lights", category: "Event" },
  { id: 13, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765639088/WhatsApp_Image_2025-12-05_at_09.55.45_b2dgex.jpg", title: "Classic Setup", category: "Wedding" },
  { id: 14, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765639087/WhatsApp_Image_2025-12-05_at_09.49.52_4_o8ahoe.jpg", title: "Modern Stage", category: "Stage" },
  { id: 15, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765639088/WhatsApp_Image_2025-12-05_at_09.55.53_sdcgbm.jpg", title: "Golden Theme", category: "Decor" },
  { id: 16, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765639085/WhatsApp_Image_2025-12-05_at_09.48.05_x89dof.jpg", title: "Signature Event", category: "Signature" },
  { id: 17, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765639088/WhatsApp_Image_2025-12-05_at_09.49.52_2_bszc5a.jpg", title: "Velvet Lounge", category: "Setup" },
  { id: 18, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765639088/WhatsApp_Image_2025-12-05_at_09.49.52_3_zlal3e.jpg", title: "Crystal Decor", category: "Details" },
  { id: 19, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765639088/WhatsApp_Image_2025-12-05_at_09.49.52_1_vbvckl.jpg", title: "Walkway of Dreams", category: "Entrance" },
  { id: 20, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765639086/WhatsApp_Image_2025-12-05_at_09.51.05_4_ouy0th.jpg", title: "The Grand Stage", category: "Stage" },
  { id: 21, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765639086/WhatsApp_Image_2025-12-05_at_09.51.05_3_i9cjjk.jpg", title: "Intimate Dinner", category: "Dining" },
  { id: 22, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765639086/WhatsApp_Image_2025-12-05_at_09.51.05_cj7hx2.jpg", title: "Royal Seating", category: "Seating" },
  { id: 23, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765639086/WhatsApp_Image_2025-12-05_at_09.49.51_scgw5k.jpg", title: "Event Lighting", category: "Production" },
  { id: 24, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765639086/WhatsApp_Image_2025-12-05_at_09.49.50_mzkhg0.jpg", title: "Traditional Decor", category: "Wedding" },
  { id: 25, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765639086/WhatsApp_Image_2025-12-05_at_09.51.05_2_obmznb.jpg", title: "Guest Experience", category: "Ambience" },
  { id: 26, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765639085/WhatsApp_Image_2025-12-05_at_09.49.51_1_bxwhz3.jpg", title: "Floral Walkway", category: "Entrance" },
  { id: 27, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765639085/WhatsApp_Image_2025-12-05_at_09.48.06_eyxfvx.jpg", title: "Luxurious Backdrop", category: "Decor" },
  { id: 28, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1764781335/banner_yfbbvf.jpg", title: "Aerial View", category: "Overview" },
];

const categories = [
  "Highlights",
  "Mehndi",
  "Barat",
  "Walima",
  "Dance Floors",
  "Corporate Events"
];

export const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Highlights");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter logic: "Highlights" shows all, others show first 5 as placeholders
  const displayedProjects = activeTab === "Highlights" 
    ? allProjects 
    : allProjects.slice(0, 5);

  return (
    <section className="pt-32 pb-24 bg-slate-950 min-h-screen relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-slate-900 to-slate-950 z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Reveal>
            <h4 className="text-luxury-champagne text-sm uppercase tracking-[0.2em] mb-4">Our Portfolio</h4>
          </Reveal>
          <Reveal delay={0.2}>
            <h2 className="text-4xl md:text-6xl font-serif text-slate-100 mb-6">
              A Legacy of <span className="italic text-luxury-sand">Elegance</span>
            </h2>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-slate-400 font-light text-lg">
              Explore our curated collection of events, where every detail is meticulously crafted to create unforgettable moments.
            </p>
          </Reveal>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-16 px-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`text-sm uppercase tracking-widest pb-2 transition-all duration-300 border-b-2 ${
                activeTab === category
                  ? 'text-luxury-champagne border-luxury-champagne'
                  : 'text-slate-500 border-transparent hover:text-slate-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[500px]">
          {displayedProjects.map((project, idx) => (
            <motion.div
              key={`${activeTab}-${project.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (idx % 3) * 0.1, duration: 0.5 }}
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
        
        <div className="mt-20 text-center">
             <p className="text-slate-500 text-sm uppercase tracking-widest mb-4">Want to see more?</p>
             <a href="https://www.instagram.com/classic_events111" target="_blank" rel="noopener noreferrer" className="inline-block border border-luxury-champagne px-8 py-3 text-luxury-champagne uppercase tracking-widest text-xs hover:bg-luxury-champagne hover:text-slate-900 transition-all duration-300">
                Visit Our Instagram
             </a>
        </div>
      </div>
    </section>
  );
};