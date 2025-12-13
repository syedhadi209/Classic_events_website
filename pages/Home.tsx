import React from 'react';
import { motion } from 'framer-motion';
import { Hero } from '../components/Hero';
import { Stats } from '../components/Stats';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Gallery } from '../components/Gallery';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { VideoSection } from '../components/VideoSection';
import { Testimonials } from '../components/Testimonials';
import { Contact } from '../components/Contact';

export const Home: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Services />
      <Gallery />
      <WhyChooseUs />
      <VideoSection />
      <Testimonials />
      
      {/* Plan Your Event CTA */}
      <section className="py-20 bg-luxury-champagne flex flex-col items-center justify-center text-center px-6">
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-serif text-slate-900 mb-6"
        >
            Ready to Create Magic?
        </motion.h2>
        <motion.a 
            href="#contact"
            onClick={(e) => handleScrollTo(e, 'contact')}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block border border-slate-900 px-12 py-4 text-slate-900 uppercase tracking-widest font-bold text-sm hover:bg-slate-900 hover:text-luxury-champagne transition-colors duration-300 cursor-pointer"
        >
            Start Your Project
        </motion.a>
      </section>

      <Contact />
    </>
  );
};