"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UsersThree, Shield, Lightning, Gauge, Clock, Trophy, SoccerBall } from '@phosphor-icons/react';

interface Player {
  id: number;
  name: string;
  number: number;
  position: 'Bek Tengah' | 'Gelandang Serang' | 'Sayap Kanan';
  category: 'Bek' | 'Gelandang' | 'Penyerang';
  roleTag: string;
  nationality: string;
  flag: string;
  image: string;
  apps: number;
  goals: number;
  assists: number;
  minutes: string;
  statHighlight: { label: string; value: string };
}

const squad: Player[] = [
  {
    id: 1,
    name: 'Tatsuhide Shimizu',
    number: 8,
    position: 'Gelandang Serang',
    category: 'Gelandang',
    roleTag: 'Playmaker & Top Scorer',
    nationality: 'Jepang',
    flag: '🇯🇵',
    image: '/images/players/TATSUHIDE-SHIMIZU.jpeg',
    apps: 8,
    goals: 4,
    assists: 0,
    minutes: "635'",
    statHighlight: { label: 'Rata-rata Menit per Gol', value: "159' / Gol" },
  },
  {
    id: 2,
    name: 'Artur Vieira',
    number: 4,
    position: 'Bek Tengah',
    category: 'Bek',
    roleTag: 'Benteng Kokoh Pertahanan',
    nationality: 'Brasil',
    flag: '🇧🇷',
    image: '/images/players/artur-vieira.jpeg',
    apps: 7,
    goals: 0,
    assists: 1,
    minutes: "630'",
    statHighlight: { label: 'Menit Bermain Kokoh', value: "630' (7 Laga)" },
  },
  {
    id: 3,
    name: 'Irkham Mila',
    number: 27,
    position: 'Sayap Kanan',
    category: 'Penyerang',
    roleTag: 'Akselerasi Sayap Cepat',
    nationality: 'Indonesia',
    flag: '🇮🇩',
    image: '/images/players/irkham-mila.jpeg',
    apps: 5,
    goals: 0,
    assists: 0,
    minutes: "180'",
    statHighlight: { label: 'Efektivitas Serangan Sayap', value: '33.8 km/h' },
  },
];

export default function SquadShowcase() {
  const [activeFilter, setActiveFilter] = useState<string>('Semua');

  const filteredSquad = activeFilter === 'Semua'
    ? squad
    : squad.filter((p) => p.category === activeFilter || p.position === activeFilter);

  return (
    <section id="squad" className="relative w-full py-24 sm:py-32 bg-gradient-to-b from-slate-100 via-white to-slate-100 dark:from-[#08120c] dark:via-[#050b07] dark:to-[#08120c] text-slate-900 dark:text-white border-b border-slate-200 dark:border-white/10 transition-colors overflow-hidden">
      
      {/* Background Graphic Energy Slashes (Man City & Arsenal Kinetic Style) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none opacity-30 dark:opacity-50">
        <div className="absolute top-10 -left-32 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl transform -rotate-12" />
        <div className="absolute bottom-20 -right-32 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl transform rotate-12" />
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:28px_28px] opacity-20" />
      </div>

      <div className="container-default relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200 dark:border-white/10 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-extrabold uppercase tracking-wider mb-3">
              <UsersThree size={16} weight="fill" />
              <span>Skuad Resmi • Pegadaian Championship 2026/2027</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-3">
              <span>Bintang</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-500 dark:from-emerald-400 dark:via-emerald-300 dark:to-green-300">
                Laskar Patriot
              </span>
            </h2>
          </div>

          {/* Aerodynamic Position Filter Tabs */}
          <div className="flex flex-wrap gap-2 bg-slate-200/80 dark:bg-white/5 p-1.5 rounded-2xl border border-slate-300/80 dark:border-white/10 backdrop-blur-md">
            {['Semua', 'Bek', 'Gelandang', 'Penyerang'].map((pos) => (
              <button
                key={pos}
                onClick={() => setActiveFilter(pos)}
                className={`px-5 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeFilter === pos
                    ? 'bg-gradient-to-r from-emerald-600 to-green-500 text-white shadow-[0_4px_15px_rgba(0,180,71,0.4)] scale-105'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                {pos}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Graphic Player Cards Grid (EA FC & Man City Inspired) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          <AnimatePresence>
            {filteredSquad.map((player) => (
              <motion.div
                key={player.id}
                layout
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-3xl bg-white dark:bg-[#0e1c14] border-2 border-slate-200/80 dark:border-white/10 overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.06)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.7)] hover:border-emerald-500 dark:hover:border-emerald-400 hover:shadow-[0_25px_60px_rgba(0,180,71,0.3)] transition-all duration-500 flex flex-col"
              >
                
                {/* Holographic Foil Light Sweep on Hover */}
                <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/25 dark:via-white/15 to-transparent -rotate-45 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out pointer-events-none z-30" />

                {/* Top Position Strip Inside Card (NO KAPTEN BADGE) */}
                <div className="relative px-6 pt-5 pb-3 flex items-center justify-between border-b border-slate-100 dark:border-white/10 bg-slate-50/80 dark:bg-black/30 z-10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                      {player.position}
                    </span>
                  </div>

                  <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 bg-slate-200/60 dark:bg-white/10 px-2.5 py-0.5 rounded-full">
                    {player.roleTag}
                  </span>
                </div>

                {/* Player Photo Stage with Radial Halo */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-b from-slate-200 via-slate-100 to-slate-300 dark:from-slate-950 dark:via-[#0c1811] dark:to-[#08100b] flex items-center justify-center">
                  
                  {/* Giant Typography Squad Number Watermark */}
                  <div className="absolute right-2 -bottom-6 font-heading text-[140px] sm:text-[170px] leading-none text-slate-300/40 dark:text-white/[0.04] select-none pointer-events-none tracking-tighter">
                    #{player.number < 10 ? `0${player.number}` : player.number}
                  </div>

                  {/* Dynamic Glowing Radial Halo Behind Player */}
                  <div className="absolute top-1/3 w-64 h-64 rounded-full bg-gradient-to-tr from-emerald-500/20 to-amber-500/20 blur-3xl group-hover:scale-125 transition-transform duration-700 pointer-events-none" />

                  {/* Real Player Photo in Full Vibrant Color */}
                  <img
                    src={player.image}
                    alt={player.name}
                    className="relative z-10 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-108"
                  />

                  {/* Big Number Badge */}
                  <div className="absolute top-4 left-4 z-20 flex flex-col gap-1">
                    <span className="font-heading text-4xl text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]">
                      #{player.number}
                    </span>
                  </div>

                  {/* Gradient Legibility Vignette */}
                  <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent z-15" />

                  {/* Official Apparel Tag & Nationality Badge */}
                  <div className="absolute bottom-4 left-5 right-5 z-20 flex flex-col">
                    <div className="flex items-center gap-2 mb-1.5 text-xs text-slate-200">
                      <span className="text-base">{player.flag}</span>
                      <span className="font-bold tracking-wide">{player.nationality}</span>
                      <span className="text-white/40">•</span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-amber-400 uppercase tracking-wider">
                        <Shield size={13} weight="fill" />
                        CALMA Official Kit
                      </span>
                    </div>

                    <h3 className="font-heading text-2xl sm:text-3xl text-white uppercase tracking-wider leading-none drop-shadow-md">
                      {player.name}
                    </h3>
                  </div>

                </div>

                {/* Player Official Championship Performance Stats (Matched to Transfermarkt/LIB) */}
                <div className="p-5 bg-white dark:bg-[#0e1c14] border-t border-slate-100 dark:border-white/10 flex-1 flex flex-col justify-between">
                  <div className="grid grid-cols-3 gap-2.5 text-center mb-4">
                    
                    {/* Stat 1: Laga (Official Championship) */}
                    <div className="p-3 rounded-2xl bg-slate-50 dark:bg-black/30 border border-slate-200/80 dark:border-white/5">
                      <span className="font-heading text-2xl text-slate-900 dark:text-white tabular-nums block leading-none mb-1">
                        {player.apps}
                      </span>
                      <span className="text-[10px] uppercase font-extrabold text-slate-500 dark:text-slate-400 tracking-wider">
                        Main
                      </span>
                    </div>

                    {/* Stat 2: Gol (Official Championship) */}
                    <div className="p-3 rounded-2xl bg-slate-50 dark:bg-black/30 border border-slate-200/80 dark:border-white/5">
                      <span className="font-heading text-2xl text-emerald-600 dark:text-emerald-400 tabular-nums block leading-none mb-1">
                        {player.goals}
                      </span>
                      <span className="text-[10px] uppercase font-extrabold text-slate-500 dark:text-slate-400 tracking-wider">
                        Gol
                      </span>
                    </div>

                    {/* Stat 3: Menit Bermain */}
                    <div className="p-3 rounded-2xl bg-slate-50 dark:bg-black/30 border border-slate-200/80 dark:border-white/5">
                      <span className="font-heading text-xl text-amber-500 tabular-nums block leading-none mb-1">
                        {player.minutes}
                      </span>
                      <span className="text-[10px] uppercase font-extrabold text-slate-500 dark:text-slate-400 tracking-wider">
                        Menit
                      </span>
                    </div>

                  </div>

                  {/* Special Skill Metric Bar */}
                  <div className="p-3 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-500/20 flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                      <Gauge size={16} className="text-emerald-600 dark:text-emerald-400" />
                      {player.statHighlight.label}
                    </span>
                    <span className="font-heading text-base text-emerald-700 dark:text-emerald-300 tracking-wider">
                      {player.statHighlight.value}
                    </span>
                  </div>

                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Squad Footer Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-200/70 dark:bg-white/5 border border-slate-300/80 dark:border-white/10 text-xs text-slate-600 dark:text-slate-300 font-semibold backdrop-blur-md">
            <Lightning size={16} weight="fill" className="text-amber-500" />
            <span>Data statistik performa resmi Pegadaian Championship musim 2026/2027</span>
          </div>
        </div>

      </div>
    </section>
  );
}
