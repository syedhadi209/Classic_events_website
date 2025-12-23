import React from 'react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Info */}
          <div className="lg:w-5/12">
            <h4 className="text-luxury-champagne text-sm uppercase tracking-[0.2em] mb-4">Inquiries</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-100 mb-8">Begin Your Journey</h2>
            <p className="text-slate-400 font-light mb-12 text-lg">
              We accept a limited number of commissions per year to ensure the highest level of dedication to our clients.
            </p>

            <div className="space-y-8">
              <div>
                <h6 className="text-white uppercase tracking-widest text-sm mb-3">Phone No# (WhatsApp)</h6>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                  <a 
                    href="https://wa.me/923228402007" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-400 font-light text-lg hover:text-luxury-champagne transition-colors"
                  >
                    +92 322-8402007
                  </a>
                  <div className="hidden sm:block w-px h-4 bg-slate-700" />
                  <a 
                    href="https://wa.me/923008402005" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-400 font-light text-lg hover:text-luxury-champagne transition-colors"
                  >
                    +92 300-8402005
                  </a>
                </div>
              </div>
              <div>
                <h6 className="text-white uppercase tracking-widest text-sm mb-2">Email</h6>
                <p className="text-slate-400 font-light text-lg">classic.ahussain@gmail.com</p>
              </div>
              <div>
                <h6 className="text-white uppercase tracking-widest text-sm mb-2">Instagram</h6>
                <a 
                  href="https://www.instagram.com/classic_events111" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 font-light text-lg hover:text-luxury-champagne transition-colors"
                >
                  @classic_events111
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-7/12 bg-white/5 p-8 md:p-12 border border-white/5"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-xs uppercase text-slate-500 tracking-widest">Name</label>
                    <input type="text" className="w-full bg-slate-950/50 border border-slate-700 p-4 text-slate-200 focus:outline-none focus:border-luxury-champagne transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                    <label className="text-xs uppercase text-slate-500 tracking-widest">Email</label>
                    <input type="email" className="w-full bg-slate-950/50 border border-slate-700 p-4 text-slate-200 focus:outline-none focus:border-luxury-champagne transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-xs uppercase text-slate-500 tracking-widest">Event Type</label>
                    <select className="w-full bg-slate-950/50 border border-slate-700 p-4 text-slate-200 focus:outline-none focus:border-luxury-champagne transition-colors">
                      <option>Wedding</option>
                      <option>Corporate Gala</option>
                      <option>Private Party</option>
                      <option>Other</option>
                    </select>
                </div>
                <div className="space-y-2">
                    <label className="text-xs uppercase text-slate-500 tracking-widest">Budget Estimate</label>
                    <select className="w-full bg-slate-950/50 border border-slate-700 p-4 text-slate-200 focus:outline-none focus:border-luxury-champagne transition-colors">
                      <option>PKR 500,000 - 1,000,000</option>
                      <option>PKR 1,000,000 - 2,500,000</option>
                      <option>PKR 2,500,000+</option>
                    </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase text-slate-500 tracking-widest">Details</label>
                <textarea rows={4} className="w-full bg-slate-950/50 border border-slate-700 p-4 text-slate-200 focus:outline-none focus:border-luxury-champagne transition-colors" placeholder="Tell us about your vision..."></textarea>
              </div>

              <button className="w-full bg-luxury-champagne text-slate-900 py-4 uppercase tracking-widest font-bold text-sm hover:bg-white transition-colors duration-300">
                Request Consultation
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};