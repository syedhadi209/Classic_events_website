import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

export const Footer: React.FC = () => (
  <footer className="bg-slate-950 py-12 border-t border-white/10 text-center md:text-left">
    <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
      <div className="mb-6 md:mb-0">
        <h2 className="text-2xl font-serif text-luxury-champagne tracking-widest font-bold mb-2 uppercase">Classic Events</h2>
        <p className="text-slate-500 text-xs uppercase tracking-widest">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
      
      <div className="flex space-x-6">
        <a href="https://www.instagram.com/classic_events111" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-luxury-champagne transition-colors"><Instagram size={20} /></a>
        <a href="#" className="text-slate-400 hover:text-luxury-champagne transition-colors"><Facebook size={20} /></a>
      </div>
    </div>
  </footer>
);