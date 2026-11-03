"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SponsorLogo from './SponsorLogos';
import { ShieldCheck, Sparkle } from '@phosphor-icons/react';

type SponsorId = 'bale' | 'mandiri' | 'siloam' | 'pstore' | 'bri' | 'airalam' | 'emc' | 'calma';

interface SponsorItem {
  id: SponsorId;
  name: string;
  height: number;
  desc: string;
  isFeatured?: boolean;
}

export default function SponsorsShowcase() {
  const [hoveredLogo, setHoveredLogo] = useState<string | null>(null);

  const officialSponsorsTier1: SponsorItem[] = [
    { id: 'bale', name: 'bale', height: 64, desc: 'Official Banking & Digital Partner' },
    { id: 'mandiri', name: 'Bank Mandiri', height: 66, desc: 'Official Financial Partner' },
  ];

  const officialSponsorsTier2: SponsorItem[] = [
    { id: 'siloam', name: 'Siloam Hospitals', height: 58, desc: 'Official Healthcare Partner' },
    { id: 'pstore', name: 'PSTORE', height: 80, desc: 'Official Digital Partner' },
    { id: 'bri', name: 'Bank Rakyat Indonesia', height: 68, desc: 'Official National Banking Partner', isFeatured: true },
  ];

  const officialSponsorsTier3: SponsorItem[] = [
    { id: 'airalam', name: 'AirAlam', height: 56, desc: 'Official Mineral Water Partner' },
    { id: 'emc', name: 'RS EMC Pekayon', height: 56, desc: 'Official Medical & Hospital Partner' },
  ];

  return (
    <section id="sponsors" className="relative w-full py-24 sm:py-32 bg-gradient-to-b from-slate-100 via-white to-slate-100 dark:from-[#050b07] dark:via-[#09150e] dark:to-[#050b07] text-slate-900 dark:text-white border-t border-slate-200 dark:border-white/10 transition-colors overflow-hidden">
      
      {/* Dynamic Fluid Stadium Floodlight Beams */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-40 dark:opacity-75">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-emerald-500/20 via-amber-500/15 to-transparent blur-[120px] rounded-full animate-speed-pulse" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-slate-200/50 dark:from-black/60 to-transparent" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15 dark:opacity-25 filter contrast-125 transition-opacity"
          style={{ backgroundImage: "url('/images/stadium/stadium-seats.jpg')" }}
        />
      </div>

      <div className="container-default relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-extrabold uppercase tracking-wider mb-4 shadow-sm"
          >
            <ShieldCheck size={16} weight="fill" />
            <span>Kemitraan Resmi Klub Musim 2026/2027</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-heading uppercase tracking-wider text-slate-900 dark:text-white"
          >
            Mitra <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-500 dark:from-emerald-400 dark:via-emerald-300 dark:to-green-300">Kebanggaan</span>
          </motion.h2>

          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-4 leading-relaxed max-w-xl mx-auto">
            Bersama pilar industri terpercaya yang menyokong langkah Adhyaksa FC Bekasi mengawal kejayaan sepak bola di kasta nasional.
          </p>
        </div>

        {/* ORGANIC NON-BOXY VIP STADIUM SHOWCASE */}
        <div className="max-w-5xl mx-auto space-y-16">

          {/* 1. OFFICIAL SPONSOR ARENA */}
          <div className="relative">
            
            {/* Top Golden Crown Chevrons with Floating Light */}
            <div className="flex flex-col items-center justify-center mb-8">
              <motion.div 
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="flex items-center gap-3 drop-shadow-[0_4px_16px_rgba(245,158,11,0.6)]"
              >
                <svg viewBox="0 0 70 20" className="w-20 h-7 text-amber-500" fill="currentColor">
                  <polygon points="12,20 17,3 22,20 17,15" />
                  <polygon points="30,20 35,0 40,20 35,14" />
                  <polygon points="48,20 53,3 58,20 53,15" />
                </svg>
              </motion.div>

              <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl uppercase tracking-[0.25em] text-slate-900 dark:text-white text-center mt-3">
                Official Sponsor
              </h3>
              
              {/* Subtle Golden Beam Line Under Title */}
              <div className="w-36 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mt-3 rounded-full" />
            </div>

            {/* FLUID STAGE: Enlarged Logos Float Freely with High Visibility */}
            <div className="relative py-8 px-4 sm:px-8">
              
              {/* Tier 1: bale & Bank Mandiri (Enlarged) */}
              <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 md:gap-24 mb-12 sm:mb-14 pb-12 sm:pb-14 border-b border-slate-200/70 dark:border-white/10">
                {officialSponsorsTier1.map((sp) => (
                  <motion.div
                    key={sp.id}
                    onHoverStart={() => setHoveredLogo(sp.id)}
                    onHoverEnd={() => setHoveredLogo(null)}
                    whileHover={{ scale: 1.12, y: -4 }}
                    transition={{ type: "spring", stiffness: 350, damping: 20 }}
                    className="relative cursor-pointer group flex flex-col items-center"
                  >
                    <div className="absolute inset-0 bg-emerald-500/20 dark:bg-emerald-400/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    <SponsorLogo name={sp.id} height={sp.height} className="relative z-10 filter drop-shadow-sm group-hover:drop-shadow-lg transition-all" />
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {sp.desc}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Tier 2: Siloam, PSTORE (Significantly Enlarged!), BRI */}
              <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 md:gap-20 mb-12 sm:mb-14 pb-12 sm:pb-14 border-b border-slate-200/70 dark:border-white/10">
                {officialSponsorsTier2.map((sp) => (
                  <motion.div
                    key={sp.id}
                    onHoverStart={() => setHoveredLogo(sp.id)}
                    onHoverEnd={() => setHoveredLogo(null)}
                    whileHover={{ scale: 1.15, y: -5 }}
                    transition={{ type: "spring", stiffness: 350, damping: 20 }}
                    className={`relative cursor-pointer group flex flex-col items-center ${sp.isFeatured ? 'px-6 sm:px-8 py-3 rounded-3xl bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/30 shadow-[0_0_30px_rgba(0,180,71,0.25)]' : ''}`}
                  >
                    <div className="absolute inset-0 bg-amber-500/20 dark:bg-amber-400/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    <SponsorLogo name={sp.id} height={sp.height} className="relative z-10 filter drop-shadow-sm group-hover:drop-shadow-lg transition-all" />
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {sp.desc}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Tier 3: AirAlam & RS EMC Pekayon (Enlarged) */}
              <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 md:gap-24">
                {officialSponsorsTier3.map((sp) => (
                  <motion.div
                    key={sp.id}
                    onHoverStart={() => setHoveredLogo(sp.id)}
                    onHoverEnd={() => setHoveredLogo(null)}
                    whileHover={{ scale: 1.12, y: -4 }}
                    transition={{ type: "spring", stiffness: 350, damping: 20 }}
                    className="relative cursor-pointer group flex flex-col items-center"
                  >
                    <div className="absolute inset-0 bg-blue-500/20 dark:bg-blue-400/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    <SponsorLogo name={sp.id} height={sp.height} className="relative z-10 filter drop-shadow-sm group-hover:drop-shadow-lg transition-all" />
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {sp.desc}
                    </span>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>

          {/* 2. OFFICIAL APPAREL PLINTH (Sculpted Aerodynamic Arc Stage) */}
          <div className="relative pt-6">
            
            {/* Title Header with Golden Sparkle */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-extrabold uppercase tracking-wider mb-2">
                <Sparkle size={15} weight="fill" />
                <span>Penyedia Jersey & Perlengkapan Resmi</span>
              </div>
              <h3 className="font-heading text-3xl sm:text-4xl uppercase tracking-[0.25em] text-amber-500">
                Official Apparel
              </h3>
            </div>

            {/* Aerodynamic Stadium Spotlight Plinth for CALMA (Enlarged) */}
            <motion.div 
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-w-2xl mx-auto py-10 sm:py-12 px-10 rounded-[44px] bg-gradient-to-r from-amber-500/10 via-amber-500/20 to-amber-500/10 dark:from-amber-500/15 dark:via-amber-500/25 dark:to-amber-500/15 border-2 border-amber-500/40 shadow-[0_15px_45px_rgba(245,158,11,0.2)] backdrop-blur-xl flex flex-col items-center justify-center overflow-hidden group cursor-pointer"
            >
              {/* Dynamic Light Sweep Animation */}
              <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/30 dark:via-white/20 to-transparent -rotate-45 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out pointer-events-none" />
              
              {/* Golden Halo Behind CALMA */}
              <div className="absolute w-72 h-32 bg-amber-500/30 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500 pointer-events-none" />

              <SponsorLogo name="calma" height={74} className="relative z-10 filter drop-shadow-md group-hover:scale-108 transition-transform duration-300" />
              
              <div className="relative z-10 mt-4 text-center">
                <span className="text-xs font-extrabold uppercase tracking-widest text-amber-600 dark:text-amber-300 block">
                  CALMA Football Apparel • Indonesia
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                  Merancang jersey tanding kandang & tandang Adhyaksa FC Bekasi
                </span>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
