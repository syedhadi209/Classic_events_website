import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';
import { Reveal } from './ui/Reveal';

export const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-luxury-champagne/20 to-transparent" />
      <div className="absolute -left-20 top-1/2 w-64 h-64 bg-luxury-champagne/5 rounded-full blur-[100px]" />
      <div className="absolute -right-20 bottom-1/2 w-64 h-64 bg-luxury-champagne/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Reveal>
            <h4 className="text-luxury-champagne text-sm uppercase tracking-[0.2em] mb-4">
              Cinematic Experience
            </h4>
          </Reveal>
          <Reveal delay={0.3}>
            <h2 className="text-3xl md:text-5xl font-serif text-slate-100 mb-6">
              Relive the <span className="italic text-luxury-sand">Magic</span>
            </h2>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="text-slate-400 font-light text-lg">
              Witness the artistry and emotion of our curated events through motion.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.5}>
          <div className="relative w-full max-w-5xl mx-auto aspect-video group">
            
            {/* Outer Glow/Border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-luxury-champagne/20 to-slate-800/50 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000"></div>
            
            <div className="relative w-full h-full rounded-lg overflow-hidden bg-slate-950 border border-white/10 shadow-2xl">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                controls={isPlaying}
                poster="https://images.unsplash.com/photo-1519225421980-715cb0202128?q=80&w=2000&auto=format&fit=crop"
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
              >
                {/* Dummy Stock Footage of a Wedding/Event */}
                <source src="https://videos.pexels.com/video-files/5533802/5533802-hd_1920_1080_25fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Custom Play Overlay */}
              <AnimatePresence>
                {!isPlaying && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px] flex flex-col items-center justify-center cursor-pointer group/btn"
                    onClick={handlePlay}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-luxury-champagne/50 flex items-center justify-center bg-luxury-champagne/10 backdrop-blur-md group-hover/btn:bg-luxury-champagne group-hover/btn:border-transparent transition-all duration-500"
                    >
                      <Play 
                        className="w-8 h-8 md:w-10 md:h-10 text-luxury-champagne group-hover/btn:text-slate-900 ml-1 transition-colors duration-500" 
                        fill="currentColor" 
                      />
                    </motion.div>
                    <h3 className="mt-6 text-xl font-serif text-slate-200 tracking-wider">Watch Highlights</h3>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};