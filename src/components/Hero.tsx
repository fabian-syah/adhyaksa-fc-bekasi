"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Calendar } from 'lucide-react';

const easing = [0.16, 1, 0.3, 1] as const; // easeOutExpo

export default function Hero() {
  const headlineWords = "KEBANGGAAN BEKASI. BERSATU UNTUK BERJAYA.".split(" ");

  return (
    <section id="overview" className="relative w-full min-h-[100svh] flex items-center justify-center bg-background overflow-hidden border-b border-primary/20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 z-10 pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="max-w-6xl mx-auto flex flex-col items-start justify-center">
          
          {/* Main Headline */}
          <div className="flex flex-wrap gap-x-2 sm:gap-x-3 md:gap-x-5 gap-y-0 mb-6 sm:mb-8">
            {headlineWords.map((word, i) => (
              <motion.span 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: easing }}
                className={`text-[12vw] sm:text-[8vw] md:text-7xl lg:text-8xl xl:text-9xl font-black uppercase tracking-tighter leading-[0.9] ${
                  word === 'BERJAYA.' ? 'text-primary drop-shadow-sm' : 'text-white'
                }`}
              >
                {word}
              </motion.span>
            ))}
          </div>

          {/* Subtext block */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: easing }}
            className="origin-left border-l-4 border-primary pl-4 sm:pl-6 mb-8 sm:mb-12"
          >
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6, ease: easing }}
              className="text-sm sm:text-base md:text-lg lg:text-2xl text-white/90 max-w-2xl font-bold uppercase tracking-wider sm:tracking-widest"
            >
              Rumah resmi Adhyaksa FC Bekasi. Ayo beri dukungan langsung dan jadilah bagian dari sejarah.
            </motion.p>
          </motion.div>

          {/* Dual CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: easing }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
          >
            <a 
              href="#tickets"
              className="group relative bg-primary text-white font-black px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 flex items-center justify-center gap-2 sm:gap-3 overflow-hidden rounded-full uppercase tracking-widest text-sm sm:text-base md:text-lg transition-colors"
            >
              <span className="relative z-10 group-hover:text-primary transition-colors duration-300">Beli Tiket Laga</span>
              <Calendar size={20} className="relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:text-primary sm:w-6 sm:h-6" />
              <div className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[0.16,1,0.3,1] z-0"></div>
            </a>
            <motion.a 
              href="#squad"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-transparent text-foreground font-black px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 flex items-center justify-center gap-2 sm:gap-3 overflow-hidden border border-primary/40 uppercase tracking-widest text-sm sm:text-base md:text-lg bg-background/50 backdrop-blur-sm"
            >
              <span className="relative z-10 transition-colors duration-300">Lihat Skuad</span>
              <ChevronRight size={20} className="relative z-10 transition-colors duration-300 sm:w-6 sm:h-6" />
              <div className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] z-0"></div>
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
