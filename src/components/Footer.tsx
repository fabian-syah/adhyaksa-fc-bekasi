"use client";

import React from 'react';
import { MapPin, Mail, Phone, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="w-full bg-background text-foreground border-t border-primary/40 relative overflow-hidden">
      {/* Background kinetic pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-12 relative z-10 max-w-7xl">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-0 border border-border-subtle mb-10 sm:mb-16 bg-surface">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 px-5 py-6 sm:px-6 sm:py-8 md:p-10 lg:p-12 border-b md:border-b lg:border-b-0 lg:border-r border-border-subtle flex flex-col justify-between">
            <div>
              <div className="flex items-stretch gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 flex items-center justify-center font-black text-primary text-lg sm:text-2xl border border-primary/40 shrink-0">
                  AFC
                </div>
                <div className="flex flex-col justify-center min-w-0">
                  <span className="text-foreground font-black text-2xl sm:text-3xl tracking-tighter uppercase leading-none">
                    Adhyaksa FC
                  </span>
                  <span className="text-highlight/80 font-bold text-xs sm:text-sm uppercase tracking-widest mt-1">
                    Bekasi
                  </span>
                </div>
              </div>
              <p className="text-foreground/50 font-bold uppercase tracking-wider sm:tracking-widest leading-relaxed max-w-sm mb-8 sm:mb-12 text-xs sm:text-sm">
                Kebanggaan kota Bekasi. Kami bukan sekadar klub sepak bola biasa, melainkan keluarga besar yang disatukan oleh kecintaan pada olahraga.
              </p>
            </div>
            
            <div className="flex gap-3 sm:gap-4">
              {[
                { 
                  name: 'IG',
                  url: 'https://www.instagram.com/adhyaksafc.bekasi/',
                  icon: <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> 
                }
              ].map((social) => (
                <motion.a 
                  key={social.name} 
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-background text-foreground/70 font-black flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors border border-border-subtle hover:border-primary/50"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-1 lg:col-span-3 px-5 py-6 sm:px-6 sm:py-8 md:p-10 lg:p-12 border-b md:border-b-0 md:border-r lg:border-r border-border-subtle">
            <h4 className="text-lg sm:text-xl font-black uppercase text-highlight/80 mb-6 sm:mb-8 pb-2 inline-block border-b border-primary/40">
              Menu Utama
            </h4>
            <ul className="space-y-4 sm:space-y-6">
              {['Tim Utama', 'Tiket Pertandingan', 'Info Stadion', 'Hubungi Kami'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-foreground/70 hover:text-primary transition-colors font-bold uppercase text-xs tracking-wider sm:tracking-widest flex items-center group">
                    <span className="w-0 h-[1px] bg-primary mr-0 group-hover:w-4 group-hover:mr-3 transition-all duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-1 lg:col-span-4 px-5 py-6 sm:px-6 sm:py-8 md:p-10 lg:p-12 flex flex-col justify-center">
            <h4 className="text-lg sm:text-xl font-black uppercase text-highlight/80 mb-3 sm:mb-4 pb-2 inline-block border-b border-primary/40 self-start">
              Info Terbaru
            </h4>
            <p className="text-xs font-bold uppercase tracking-wider sm:tracking-widest text-foreground/50 mb-6 sm:mb-8">
              Jangan sampai ketinggalan info. Dapatkan berita terbaru dan pemberitahuan tiket.
            </p>
            <form className="flex flex-col gap-3 sm:gap-4">
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="MASUKKAN EMAIL ANDA" 
                  className="w-full bg-background border border-border-subtle p-3 sm:p-4 text-foreground font-black tracking-wider sm:tracking-widest text-xs sm:text-sm outline-none focus:border-primary/50 transition-colors peer relative z-10"
                />
                <div className="absolute inset-0 bg-primary/5 translate-y-2 translate-x-2 -z-0 opacity-0 peer-focus:opacity-100 transition-opacity"></div>
              </div>
              <motion.button 
                type="submit" 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative w-full bg-highlight-subtle text-highlight font-black uppercase py-3 sm:py-4 flex items-center justify-center gap-2 sm:gap-3 border border-highlight/30 overflow-hidden hover:bg-highlight-subtle/80 transition-colors"
              >
                <span className="relative z-10 tracking-wider sm:tracking-widest text-xs sm:text-sm">Berlangganan</span>
                <ArrowRight className="relative z-10 transition-transform group-hover:translate-x-2" size={16} />
              </motion.button>
            </form>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-[10px] sm:text-xs text-foreground/30 font-black uppercase tracking-wider sm:tracking-widest border-t border-border-subtle gap-3 sm:gap-0">
          <p className="text-center sm:text-left">© {new Date().getFullYear()} Adhyaksa FC Bekasi. Hak Cipta Dilindungi.</p>
          <div className="flex gap-6 sm:gap-8">
            <a href="#" className="hover:text-highlight/80 transition-colors">Privasi</a>
            <a href="#" className="hover:text-highlight/80 transition-colors">Ketentuan</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
