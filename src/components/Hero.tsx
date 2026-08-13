"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CaretRight, CalendarBlank } from '@phosphor-icons/react';

const easing = [0.16, 1, 0.3, 1] as const; // easeOutExpo

export default function Hero() {
  const headlineWords = "KEBANGGAAN BEKASI. BERSATU UNTUK BERJAYA.".split(" ");

  return (
    <section id="overview" className="relative w-full min-h-[100svh] flex items-center justify-center bg-afc-base overflow-hidden border-b border-afc-green/20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Patriot_Chandrabhaga_02.jpg/1280px-Patriot_Chandrabhaga_02.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
      </div>

      <div className="container-default z-10 pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="flex flex-col items-start justify-center">
          
          {/* Main Headline */}
          <div className="flex flex-wrap gap-x-2 sm:gap-x-3 md:gap-x-5 gap-y-0 mb-6 sm:mb-8">
            {headlineWords.map((word, i) => (
              <motion.span 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: easing }}
                className={`text-[12vw] sm:text-[8vw] md:text-7xl lg:text-8xl xl:text-9xl font-heading uppercase tracking-widest leading-[1] ${
                  word === 'BERJAYA.' ? 'text-afc-green drop-shadow-sm' : 'text-white'
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
            className="origin-left border-l-4 border-afc-green pl-4 sm:pl-6 mb-8 sm:mb-12"
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
              className="group btn-primary"
            >
              <span className="relative z-10 group-hover:text-afc-green transition-colors duration-300">Beli Tiket Laga</span>
              <CalendarBlank weight="fill" size={20} className="relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:text-afc-green sm:w-6 sm:h-6" />
              <div className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[0.16,1,0.3,1] z-0"></div>
            </a>
            <motion.a 
              href="#squad"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group btn-outline bg-black/20 backdrop-blur-sm"
            >
              <span className="relative z-10 transition-colors duration-300">Lihat Skuad</span>
              <CaretRight weight="bold" size={20} className="relative z-10 transition-colors duration-300 sm:w-6 sm:h-6" />
              <div className="absolute inset-0 bg-afc-green/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] z-0"></div>
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
