import React from 'react';
import { Reveal } from './ui/Reveal';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-slate-950 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          
          {/* Image Side */}
          <div className="w-full md:w-1/2 relative group">
            <Reveal>
              <div className="relative aspect-[3/4] overflow-hidden">
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-all duration-500 z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop" 
                  alt="Elegant table setting" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              {/* Decorative Frame */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r border-b border-luxury-champagne/30 -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 border-l border-t border-luxury-champagne/30 -z-10" />
            </Reveal>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2">
            <Reveal delay={0.2}>
              <h4 className="text-luxury-champagne text-sm uppercase tracking-[0.2em] mb-4">Who We Are</h4>
            </Reveal>
            <Reveal delay={0.3}>
              <h2 className="text-4xl md:text-5xl font-serif text-slate-100 mb-8 leading-tight">
                Architects of <span className="italic text-luxury-sand">Unforgettable</span> Memories
              </h2>
            </Reveal>
            <Reveal delay={0.4}>
              <p className="text-slate-400 leading-relaxed mb-6 font-light text-lg">
                At Classic Events, we believe that an event is not just a gathering, but an art form. 
                With over a decade of experience serving the world's most discerning clientele, 
                we transform abstract dreams into breathtaking realities.
              </p>
            </Reveal>
            <Reveal delay={0.5}>
              <p className="text-slate-400 leading-relaxed mb-8 font-light text-lg">
                From intimate gatherings on the Amalfi Coast to grand galas in Manhattan, 
                our team approaches every project with precision, passion, and an unwavering commitment to excellence.
              </p>
            </Reveal>
            <Reveal delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-8 pt-4">
                {/* Arif Hussain */}
                <div className="flex items-center space-x-4">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200" 
                    alt="Arif Hussain" 
                    className="w-14 h-14 rounded-full object-cover border border-luxury-champagne/50"
                  />
                  <div>
                    <p className="text-slate-200 font-serif italic text-lg">Arif Hussain</p>
                    <p className="text-luxury-champagne text-[10px] uppercase tracking-widest font-medium">Operation Director</p>
                  </div>
                </div>

                {/* Abid Hussain */}
                <div className="flex items-center space-x-4">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" 
                    alt="Abid Hussain" 
                    className="w-14 h-14 rounded-full object-cover border border-luxury-champagne/50"
                  />
                  <div>
                    <p className="text-slate-200 font-serif italic text-lg">Abid Hussain</p>
                    <p className="text-luxury-champagne text-[10px] uppercase tracking-widest font-medium">Execution Director</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};