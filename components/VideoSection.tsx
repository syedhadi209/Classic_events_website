import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause } from 'lucide-react';
import { Reveal } from './ui/Reveal';

export const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-luxury-champagne/20 to-transparent" />
      <div className="absolute -left-20 top-1/2 w-64 h-64 bg-luxury-champagne/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -right-20 bottom-1/2 w-64 h-64 bg-luxury-champagne/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <Reveal>
              <h4 className="text-luxury-champagne text-sm uppercase tracking-[0.2em] mb-4">
                Client Stories
              </h4>
            </Reveal>
            <Reveal delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-serif text-slate-100 mb-6 leading-tight">
                Moments of <span className="italic text-luxury-sand">Joy</span>
              </h2>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-slate-400 font-light text-lg mb-8 leading-relaxed">
                Hear directly from our wonderful clients about their journey with Classic Events. 
                We take pride in turning visions into reality, ensuring every detail exceeds expectations 
                and creates memories that last a lifetime.
              </p>
            </Reveal>
            
            <Reveal delay={0.4}>
              <div className="flex items-center gap-6">
                 <button 
                    onClick={handlePlay}
                    className="group flex items-center gap-4 focus:outline-none"
                 >
                    <div className={`w-14 h-14 rounded-full border border-luxury-champagne flex items-center justify-center transition-all duration-300 ${isPlaying ? 'bg-luxury-champagne text-slate-900' : 'text-luxury-champagne group-hover:bg-luxury-champagne group-hover:text-slate-900'}`}>
                       {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" className="ml-1" />}
                    </div>
                    <span className="text-sm uppercase tracking-widest text-slate-300 group-hover:text-white transition-colors">
                      {isPlaying ? 'Pause Review' : 'Watch Review'}
                    </span>
                 </button>
              </div>
            </Reveal>
          </div>

          {/* Video Content */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center">
             <Reveal delay={0.2} width="fit-content">
                <div className="relative group">
                   {/* Decorative Frame */}
                   <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r border-b border-luxury-champagne/30 -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
                   <div className="absolute -top-6 -left-6 w-32 h-32 border-l border-t border-luxury-champagne/30 -z-10 transition-transform duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2" />
                   
                   {/* Video Container - Portrait Ratio (9:16) */}
                   <div className="relative w-[280px] sm:w-[320px] aspect-[9/16] bg-slate-950 overflow-hidden shadow-2xl border border-white/10">
                      <video
                        ref={videoRef}
                        className={`w-full h-full object-cover transition-all duration-700 ${isPlaying ? 'opacity-100 blur-0' : 'opacity-90 blur-sm group-hover:opacity-100'}`}
                        playsInline
                        loop
                        poster="https://res.cloudinary.com/drlfxmpin/video/upload/so_0/v1765885193/Client_Review_Video_wxqwq6.jpg"
                        onEnded={() => setIsPlaying(false)}
                      >
                         <source src="https://res.cloudinary.com/drlfxmpin/video/upload/v1765885193/Client_Review_Video_wxqwq6.mp4" type="video/mp4" />
                      </video>

                      {/* Video Overlay / Play Button */}
                      <AnimatePresence>
                        {!isPlaying && (
                          <motion.div
                             initial={{ opacity: 0 }}
                             animate={{ opacity: 1 }}
                             exit={{ opacity: 0 }}
                             className="absolute inset-0 bg-slate-950/40 backdrop-blur-[1px] flex items-center justify-center cursor-pointer"
                             onClick={handlePlay}
                          >
                             <motion.div 
                               whileHover={{ scale: 1.1 }}
                               whileTap={{ scale: 0.95 }}
                               className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg"
                             >
                                <Play size={32} className="text-white ml-1" fill="currentColor" />
                             </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                   </div>
                </div>
             </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};