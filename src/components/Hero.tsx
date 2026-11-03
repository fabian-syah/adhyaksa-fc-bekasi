"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { CalendarBlank, MapPin, Trophy, UsersThree, Lightning, ArrowRight, ShieldCheck, Sparkle } from '@phosphor-icons/react';
import Crest from './Crest';

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="overview" className="relative w-full pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-100 dark:from-slate-950 dark:via-[#07130c] dark:to-slate-950 text-slate-900 dark:text-white border-b border-slate-200 dark:border-white/10 transition-colors">
      
      {/* GRAPHIC BACKDROP: Modern Clean Stadium Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        {/* Authentic Stadium Panorama (Bright Open Sky & Turf, Zero Black Scoreboard Artifacts) */}
        <div 
          className="absolute inset-0 bg-cover bg-bottom opacity-15 dark:opacity-25 transition-opacity duration-700"
          style={{ backgroundImage: "url('/images/stadium/stadium-panorama.jpg')" }}
        />

        {/* Subtle Ambient Glows */}
        <div className="absolute top-0 left-0 w-80 sm:w-96 h-80 sm:h-96 bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-amber-500/10 dark:bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Soft Vignette Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-100 via-transparent to-slate-100/70 dark:from-slate-950 dark:via-transparent dark:to-slate-950/70" />
      </div>


      <div className="container-default relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          
          {/* Left Column: Graphic Headline & Club Narrative */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            
            {/* Animated Matchday Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/15 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border border-emerald-400/40 text-xs font-extrabold uppercase tracking-wider mb-6 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Pegadaian Championship & Cup 2026/2027</span>
            </motion.div>

            {/* Kinetic Sports Headline */}
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl md:text-7xl font-heading text-slate-900 dark:text-white uppercase tracking-wider leading-[0.98] mb-6">
              Kawal Kejayaan <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-500 dark:from-emerald-400 dark:via-emerald-300 dark:to-green-300">
                Laskar Patriot
              </span>{' '}
              Bekasi.
            </motion.h1>

            {/* Description */}
            <motion.p variants={itemVariants} className="text-slate-600 dark:text-slate-200 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed mb-8 font-normal">
              Skuad Adhyaksa FC Bekasi siap menatap pertarungan krusial memperebutkan puncak klasemen Pegadaian Championship di Stadion Patriot Candrabhaga.
            </motion.p>

            {/* Graphic Action Buttons (NO TICKET BUTTON) */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="#matches"
                className="btn-primary w-full sm:w-auto justify-center"
              >
                <CalendarBlank size={18} weight="bold" />
                <span>Jadwal & Hasil Laga</span>
                <ArrowRight size={14} weight="bold" />
              </a>
              <a
                href="#squad"
                className="btn-outline w-full sm:w-auto justify-center"
              >
                <UsersThree size={18} weight="bold" />
                <span>Skuad Tim Utama</span>
              </a>
            </motion.div>

            {/* Club Highlights Quick Strip */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 mt-10 pt-6 border-t border-slate-200/80 dark:border-white/10 text-xs">
              <div className="flex items-center gap-2 font-bold text-slate-700 dark:text-slate-300">
                <ShieldCheck size={18} weight="fill" className="text-emerald-500" />
                <span>Home Ground: Stadion Patriot Candrabhaga</span>
              </div>
              <div className="flex items-center gap-2 font-bold text-slate-700 dark:text-slate-300">
                <Sparkle size={18} weight="fill" className="text-amber-500" />
                <span>Official Kit Partner: CALMA</span>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: Broadcast Scoreboard Card (AC Milan & Man City Match Card Style) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 w-full"
          >
            <div className="relative rounded-3xl bg-gradient-to-b from-white via-white/95 to-slate-50 dark:from-[#11251c]/95 dark:via-[#0c1a13]/95 dark:to-[#07100b] border-2 border-emerald-500/30 p-7 sm:p-9 shadow-[0_20px_50px_rgba(0,147,61,0.15)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.7)] backdrop-blur-2xl overflow-hidden group">
              
              {/* Dynamic Shimmer Light Reflection on Top */}
              <div className="absolute -top-12 left-1/4 right-1/4 h-24 bg-emerald-500/20 rounded-full blur-2xl group-hover:bg-emerald-400/30 transition-all pointer-events-none" />

              {/* Match Header Tag */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200 dark:border-white/10 text-xs">
                <span className="font-extrabold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                  <Lightning size={16} weight="fill" className="text-amber-500" />
                  Laga Tandang Pekan 9 Liga
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Sabtu, 7 Nov 2026
                </span>
              </div>

              {/* Match Faceoff Arena (Fully Responsive) */}
              <div className="flex items-center justify-between gap-2 sm:gap-4 my-6 text-center w-full">
                
                {/* Home: Semen Padang */}
                <div className="flex-1 flex flex-col items-center min-w-0">
                  <div className="w-16 h-16 sm:w-24 sm:h-24 p-2.5 sm:p-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center mb-2 shadow-md transition-transform duration-300 group-hover:scale-105">
                    <img 
                      src="/images/clubs/semen-padang.png" 
                      alt="Semen Padang" 
                      className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                    />
                  </div>
                  <span className="font-heading text-sm sm:text-lg text-slate-900 dark:text-white uppercase tracking-wider leading-tight">
                    Semen Padang
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 font-bold uppercase mt-0.5">
                    Peringkat 4 (Home)
                  </span>
                </div>

                {/* VS Badge with Pulse */}
                <div className="shrink-0 flex flex-col items-center justify-center px-1 sm:px-2">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 text-slate-950 font-heading text-lg sm:text-xl flex items-center justify-center shadow-lg mb-1 select-none">
                    VS
                  </div>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 font-extrabold uppercase whitespace-nowrap">
                    19:00 WIB
                  </span>
                </div>

                {/* Away: Adhyaksa FC */}
                <div className="flex-1 flex flex-col items-center min-w-0">
                  <div className="w-16 h-16 sm:w-24 sm:h-24 p-2.5 sm:p-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center mb-2 shadow-md transition-transform duration-300 group-hover:scale-105">
                    <Crest size={60} />
                  </div>
                  <span className="font-heading text-sm sm:text-lg text-slate-900 dark:text-white uppercase tracking-wider leading-tight">
                    Adhyaksa FC
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-emerald-600 dark:text-emerald-400 font-bold uppercase mt-0.5">
                    Bekasi (Away)
                  </span>
                </div>

              </div>

              {/* Match Venue & Broadcast */}
              <div className="rounded-2xl bg-slate-50 dark:bg-black/40 p-4 border border-slate-200 dark:border-white/5 space-y-2 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2.5">
                  <CalendarBlank size={16} className="text-amber-500 shrink-0" />
                  <span className="font-medium">Sabtu, 7 November 2026 • 19:00 WIB</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin size={16} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span className="font-medium truncate">Stadion Gelora H. Agus Salim, Padang</span>
                </div>
                <div className="pt-2 border-t border-slate-200/60 dark:border-white/10 flex items-center justify-between text-[11px] text-emerald-700 dark:text-emerald-400 font-bold">
                  <span>🏆 I.League Cup: Besok (4 Nov • 16.00 WIB) vs Java United FC</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Horizontal Graphic Ticker Ribbon (Liverpool / Dewa United Style) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-slate-200 dark:border-white/15"
        >
          <div className="flex items-center gap-4 bg-white/80 dark:bg-[#101e17] p-5 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm backdrop-blur-md hover:border-emerald-500 transition-all">
            <div className="w-12 h-12 rounded-xl bg-amber-500/15 flex items-center justify-center text-amber-500 shrink-0">
              <Trophy size={24} weight="fill" />
            </div>
            <div>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider block">Posisi Klasemen</span>
              <span className="text-sm font-extrabold text-slate-800 dark:text-white">Peringkat 8 • 7 Poin (+1 Selisih Gol)</span>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white/80 dark:bg-[#101e17] p-5 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm backdrop-blur-md hover:border-emerald-500 transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
              <CalendarBlank size={24} weight="fill" />
            </div>
            <div>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider block">Hasil Pertandingan Terakhir</span>
              <span className="text-sm font-extrabold text-slate-800 dark:text-white">Adhyaksa FC 1 - 1 PSPS Pekanbaru</span>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white/80 dark:bg-[#101e17] p-5 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm backdrop-blur-md hover:border-emerald-500 transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-500/15 flex items-center justify-center text-blue-500 shrink-0">
              <MapPin size={24} weight="fill" />
            </div>
            <div>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider block">Home Ground</span>
              <span className="text-sm font-extrabold text-slate-800 dark:text-white">Stadion Patriot Candrabhaga, Bekasi</span>
            </div>
          </div>
        </motion.div>

      </div>

    </section>
  );
}
