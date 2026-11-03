"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CalendarBlank, 
  MapPin, 
  Trophy, 
  CheckCircle, 
  Clock, 
  Television, 
  Users, 
  SoccerBall, 
  ShieldCheck, 
  Lightning, 
  Gauge, 
  Sparkle,
  ArrowRight
} from '@phosphor-icons/react';
import Crest from './Crest';

// Target match: Java United FC vs Adhyaksa FC (Besok: Rabu, 4 Nov 2026 • 16:00 WIB)
const TARGET_MATCH_DATE = new Date('2026-11-04T16:00:00+07:00');

export const getClubLogo = (name: string): string => {
  if (name.includes('Adhyaksa') || name.includes('Bekasi')) return '/crest.png';
  if (name.includes('PSPS')) return '/images/clubs/psps.png';
  if (name.includes('PSMS')) return '/images/clubs/psms.png';
  if (name.includes('Persikad')) return '/images/clubs/persikad.png';
  if (name.includes('Semen Padang')) return '/images/clubs/semen-padang.png';
  if (name.includes('PSIS')) return '/images/clubs/psis.png';
  if (name.includes('Sumsel')) return '/images/clubs/sumsel-united.png';
  if (name.includes('Persiraja')) return '/images/clubs/persiraja.png';
  if (name.includes('PSGC')) return '/images/clubs/psgc.png';
  if (name.includes('Persiku')) return '/images/clubs/persiku.png';
  if (name.includes('Java United')) return '/images/clubs/java-united.png';
  if (name.includes('Persela')) return '/images/clubs/persela.png';
  if (name.includes('Barito')) return '/images/clubs/barito-putera.png';
  if (name.includes('Deltras')) return '/images/clubs/deltras.png';
  return '/crest.png';
};

export default function MatchCenter() {
  const [activeTab, setActiveTab] = useState<'last' | 'next' | 'results' | 'schedule'>('last');
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const update = () => {
      const now = new Date();
      const diff = TARGET_MATCH_DATE.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  // 8 Hasil Pertandingan Resmi Pegadaian Championship 2026/2027 (Transfermarkt)
  const matchResults = [
    {
      round: 'Pekan 8',
      date: 'Sabtu, 31 Okt 2026 • 15:30 WIB',
      home: 'Adhyaksa FC',
      away: 'PSPS Pekanbaru (1.)',
      homeScore: 1,
      awayScore: 1,
      venue: 'Stadion Patriot Candrabhaga',
      isHome: true,
      formation: '4-3-3 Defending',
      attendance: 313,
      result: 'D',
      scorers: ['Tatsuhide Shimizu 45+9\' (pen)', 'Antonio Gamaroni 65\'', 'Dimas Fani tepis penalti 90+5\''],
    },
    {
      round: 'Pekan 7',
      date: 'Sabtu, 24 Okt 2026 • 19:00 WIB',
      home: 'Adhyaksa FC',
      away: 'Sumsel United (5.)',
      homeScore: 1,
      awayScore: 1,
      venue: 'Stadion Patriot Candrabhaga',
      isHome: true,
      formation: '4-3-3 Defending',
      attendance: 903,
      result: 'D',
      scorers: ['Gol imbang sengit di kandang Patriot'],
    },
    {
      round: 'Pekan 6',
      date: 'Sabtu, 17 Okt 2026 • 20:30 WIB',
      home: 'Persiraja (9.)',
      away: 'Adhyaksa FC',
      homeScore: 0,
      awayScore: 0,
      venue: 'Stadion Harapan Bangsa, Banda Aceh',
      isHome: false,
      formation: '4-3-3 Defending',
      attendance: 3089,
      result: 'D',
      scorers: ['Clean sheet lini belakang tandang'],
    },
    {
      round: 'Pekan 5',
      date: 'Sabtu, 10 Okt 2026 • 15:30 WIB',
      home: 'Adhyaksa FC',
      away: 'PSGC Ciamis (6.)',
      homeScore: 4,
      awayScore: 0,
      venue: 'Stadion Patriot Candrabhaga',
      isHome: true,
      formation: '4-3-3 Attacking',
      attendance: 1013,
      result: 'W',
      scorers: ['Kemenangan telak pesta 4 gol di Patriot', 'Gol & Assist Zahaby Gholy'],
    },
    {
      round: 'Pekan 4',
      date: 'Sabtu, 3 Okt 2026 • 19:00 WIB',
      home: 'PSIS Semarang (3.)',
      away: 'Adhyaksa FC',
      homeScore: 1,
      awayScore: 0,
      venue: 'Stadion Jatidiri, Semarang',
      isHome: false,
      formation: '4-3-3 Defending',
      attendance: 10123,
      result: 'L',
      scorers: ['Duel ketat di hadapan 10 ribu suporter Jatidiri'],
    },
    {
      round: 'Pekan 3',
      date: 'Minggu, 27 Sep 2026 • 19:00 WIB',
      home: 'Adhyaksa FC',
      away: 'PSMS Medan (2.)',
      homeScore: 0,
      awayScore: 1,
      venue: 'Stadion Patriot Candrabhaga',
      isHome: true,
      formation: '3-4-3',
      attendance: 1333,
      result: 'L',
      scorers: ['Pertarungan taktikal 3-4-3 vs PSMS Medan'],
    },
    {
      round: 'Pekan 2',
      date: 'Jumat, 18 Sep 2026 • 19:00 WIB',
      home: 'Adhyaksa FC',
      away: 'Persikad (1.)',
      homeScore: 1,
      awayScore: 2,
      venue: 'Stadion Patriot Candrabhaga',
      isHome: true,
      formation: '4-3-3 Defending',
      attendance: 977,
      result: 'L',
      scorers: ['Laga sengit pekan ke-2 di Patriot Candrabhaga'],
    },
    {
      round: 'Pekan 1',
      date: 'Sabtu, 12 Sep 2026 • 19:00 WIB',
      home: 'Persiku Kudus (10.)',
      away: 'Adhyaksa FC',
      homeScore: 1,
      awayScore: 1,
      venue: 'Stadion Wergu Wetan, Kudus',
      isHome: false,
      formation: '4-3-3 Defending',
      attendance: 200,
      result: 'D',
      scorers: ['1 Poin pembuka musim dari kandang Persiku'],
    },
  ];

  // Jadwal Pertandingan Mendatang (Transfermarkt Resmi)
  const upcomingSchedule = [
    {
      competition: 'I.League Cup Grup D',
      round: 'Pekan 1 Cup',
      date: 'Rabu, 4 Nov 2026 • 16:00 WIB',
      home: 'Java United FC',
      away: 'Adhyaksa FC',
      venue: 'Stadion Gelora Bung Tomo / Away',
      isHome: false,
      broadcast: 'Vidio Live Streaming',
      highlight: 'Besok Sore',
    },
    {
      competition: 'Pegadaian Championship',
      round: 'Pekan 9',
      date: 'Minggu, 8 Nov 2026 • 19:00 WIB',
      home: 'Semen Padang (4.)',
      away: 'Adhyaksa FC (8.)',
      venue: 'Stadion Madya Gelora Bung Karno, Jakarta',
      isHome: false,
      broadcast: 'Indosiar & Vidio',
      highlight: 'Laga Tandang Liga',
    },
    {
      competition: 'Pegadaian Championship',
      round: 'Pekan 10',
      date: 'Minggu, 22 Nov 2026 • 19:00 WIB',
      home: 'Persikad (3.)',
      away: 'Adhyaksa FC (8.)',
      venue: 'Stadion H. Dimurthala / Away',
      isHome: false,
      broadcast: 'Vidio Live',
    },
    {
      competition: 'I.League Cup Grup D',
      round: 'Pekan 2 Cup',
      date: 'Rabu, 25 Nov 2026 • 19:00 WIB',
      home: 'Adhyaksa FC',
      away: 'PSIS Semarang',
      venue: 'Stadion Patriot Candrabhaga, Bekasi',
      isHome: true,
      broadcast: 'Indosiar & Vidio',
      highlight: 'Kandang Patriot',
    },
    {
      competition: 'Pegadaian Championship',
      round: 'Pekan 11',
      date: 'Senin, 30 Nov 2026 • 19:00 WIB',
      home: 'Adhyaksa FC',
      away: 'Semen Padang (4.)',
      venue: 'Stadion Patriot Candrabhaga, Bekasi',
      isHome: true,
      broadcast: 'Indosiar & Vidio',
      highlight: 'Big Match Kandang',
    },
    {
      competition: 'Pegadaian Championship',
      round: 'Pekan 12',
      date: 'Minggu, 6 Des 2026 • 15:30 WIB',
      home: 'PSMS Medan (2.)',
      away: 'Adhyaksa FC',
      venue: 'Stadion Teladan, Medan',
      isHome: false,
      broadcast: 'Vidio Live',
    },
    {
      competition: 'Pegadaian Championship',
      round: 'Pekan 13',
      date: 'Sabtu, 12 Des 2026 • 19:00 WIB',
      home: 'Sumsel United (6.)',
      away: 'Adhyaksa FC',
      venue: 'Stadion Gelora Sriwijaya, Palembang',
      isHome: false,
      broadcast: 'Vidio Live',
    },
    {
      competition: 'Pegadaian Championship',
      round: 'Pekan 14',
      date: 'Minggu, 20 Des 2026 • 19:00 WIB',
      home: 'Adhyaksa FC',
      away: 'PSIS Semarang (5.)',
      venue: 'Stadion Patriot Candrabhaga, Bekasi',
      isHome: true,
      broadcast: 'Indosiar & Vidio',
    },
    {
      competition: 'Pegadaian Championship',
      round: 'Pekan 15',
      date: 'Minggu, 10 Jan 2027 • 15:30 WIB',
      home: 'Adhyaksa FC',
      away: 'Persiraja (7.)',
      venue: 'Stadion Patriot Candrabhaga, Bekasi',
      isHome: true,
      broadcast: 'Indosiar & Vidio',
    },
    {
      competition: 'Pegadaian Championship',
      round: 'Pekan 16',
      date: 'Sabtu, 16 Jan 2027 • 19:00 WIB',
      home: 'PSPS Pekanbaru (1.)',
      away: 'Adhyaksa FC',
      venue: 'Stadion Kaharuddin Nasution, Riau',
      isHome: false,
      broadcast: 'Indosiar & Vidio',
    },
    {
      competition: 'Pegadaian Championship',
      round: 'Pekan 17',
      date: 'Sabtu, 23 Jan 2027 • 15:30 WIB',
      home: 'PSGC Ciamis (9.)',
      away: 'Adhyaksa FC',
      venue: 'Stadion Galuh, Ciamis',
      isHome: false,
      broadcast: 'Vidio Live',
    },
    {
      competition: 'Pegadaian Championship',
      round: 'Pekan 18',
      date: 'Jumat, 29 Jan 2027 • 19:00 WIB',
      home: 'Adhyaksa FC',
      away: 'Persiku Kudus (10.)',
      venue: 'Stadion Patriot Candrabhaga, Bekasi',
      isHome: true,
      broadcast: 'Indosiar & Vidio',
    },
  ];

  return (
    <section id="matches" className="relative w-full py-20 sm:py-28 bg-white dark:bg-[#09120c] text-slate-900 dark:text-white border-b border-slate-200 dark:border-white/10 transition-colors overflow-hidden">
      
      {/* Dynamic Graphic Beam Background */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-30 dark:opacity-50">
        <div className="absolute -top-40 right-1/4 w-[550px] h-[550px] bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-default relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200 dark:border-white/10 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-extrabold uppercase tracking-wider mb-3">
              <Trophy size={16} weight="fill" />
              <span>Pusat Pertandingan & Data Resmi Klub</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-3">
              <span>Match</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-500 dark:from-emerald-400 dark:via-emerald-300 dark:to-green-300">
                Center
              </span>
            </h2>
          </div>

          {/* Interactive Modern Broadcast Tabs (Responsive Grid on Mobile, Flex on Desktop) */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap bg-slate-100 dark:bg-white/5 p-1.5 rounded-2xl border border-slate-200 dark:border-white/10 w-full sm:w-auto backdrop-blur-md gap-1">
            {[
              { id: 'last', label: 'Match Terakhir' },
              { id: 'next', label: 'Laga Berikutnya' },
              { id: 'results', label: 'Semua Hasil' },
              { id: 'schedule', label: 'Jadwal Lengkap' },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as 'last' | 'next' | 'results' | 'schedule')}
                  className={`relative px-3 sm:px-5 py-2.5 rounded-xl text-[11px] sm:text-xs font-extrabold uppercase tracking-wider transition-all duration-200 cursor-pointer z-10 text-center flex items-center justify-center ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="matchTabPill"
                      className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-500 rounded-xl shadow-[0_4px_15px_rgba(0,180,71,0.4)] -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          
          {/* TAB 1: LAST MATCH (Pekan 8 Adhyaksa FC 1 - 1 PSPS Pekanbaru) */}
          {activeTab === 'last' && (
            <motion.div
              key="last"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="rounded-3xl bg-white dark:bg-[#112219] border-2 border-slate-200/80 dark:border-white/10 p-4 sm:p-8 lg:p-12 shadow-[0_15px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
            >
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-8 border-b border-slate-200/80 dark:border-white/10">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 text-xs font-extrabold uppercase tracking-wider">
                    <CheckCircle size={16} weight="fill" />
                    Pegadaian Championship • Pekan ke-8 (Hasil Resmi)
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-xs font-bold text-slate-700 dark:text-slate-300">
                    Sistem: 4-3-3 Defending
                  </span>
                  <span className="px-3 py-1 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400 text-xs font-bold flex items-center gap-1.5">
                    <Users size={14} weight="bold" />
                    313 Penonton
                  </span>
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                  Sabtu, 31 Oktober 2026 • 15:30 WIB
                </span>
              </div>

              {/* Main Scoreboard Display with REAL LOGOS (Fully Responsive) */}
              <div className="flex items-center justify-between gap-2 sm:gap-6 py-4 sm:py-6 text-center max-w-4xl mx-auto w-full">
                {/* Home: Adhyaksa FC */}
                <div className="flex-1 flex flex-col items-center min-w-0">
                  <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 p-2.5 sm:p-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center mb-2 shadow-sm hover:scale-105 transition-transform">
                    <Crest size={72} />
                  </div>
                  <span className="font-heading text-base sm:text-2xl md:text-3xl uppercase tracking-wider text-slate-900 dark:text-white leading-tight">
                    Adhyaksa FC
                  </span>
                  <span className="text-[10px] sm:text-xs font-extrabold text-emerald-600 dark:text-emerald-400 uppercase mt-0.5">
                    Bekasi (Tuan Rumah)
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 font-semibold mt-0.5">
                    Peringkat 8 Klasemen
                  </span>
                </div>

                {/* Score Container - Guaranteed 1-line no-break on all screens */}
                <div className="shrink-0 flex flex-col items-center justify-center px-2 sm:px-6">
                  <div className="font-heading text-4xl sm:text-6xl md:text-7xl text-slate-900 dark:text-white tracking-wider leading-none mb-1.5 sm:mb-2 whitespace-nowrap select-none">
                    1 - 1
                  </div>
                  <span className="text-[10px] sm:text-xs px-2.5 sm:px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400 uppercase font-extrabold tracking-wider whitespace-nowrap border border-amber-500/30">
                    Full Time (Seri)
                  </span>
                </div>

                {/* Away: PSPS Pekanbaru with OFFICIAL LOGO */}
                <div className="flex-1 flex flex-col items-center min-w-0">
                  <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 p-2.5 sm:p-3.5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center mb-2 shadow-sm hover:scale-105 transition-transform">
                    <img
                      src="/images/clubs/psps.png"
                      alt="PSPS Pekanbaru"
                      className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
                    />
                  </div>
                  <span className="font-heading text-base sm:text-2xl md:text-3xl uppercase tracking-wider text-slate-900 dark:text-white leading-tight">
                    PSPS Pekanbaru
                  </span>
                  <span className="text-[10px] sm:text-xs font-extrabold text-slate-500 dark:text-slate-400 uppercase mt-0.5">
                    Pemuncak Klasemen
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 font-semibold mt-0.5">
                    Askar Bertuah
                  </span>
                </div>
              </div>

              {/* Match Events Timeline */}
              <div className="mt-10 pt-8 border-t border-slate-100 dark:border-white/10 max-w-3xl mx-auto">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 text-center mb-6">
                  Garis Waktu Momen Penting Pertandingan (VAR & Penalti)
                </h4>
                
                <div className="space-y-3 text-xs">
                  {/* Gol Tatsuhide Shimizu */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 sm:p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-500/30">
                    <div className="flex items-center gap-2.5 text-emerald-700 dark:text-emerald-300 font-extrabold">
                      <SoccerBall size={18} weight="fill" className="text-emerald-500 shrink-0" />
                      <span>Tatsuhide Shimizu (45+9&apos; Penalti)</span>
                    </div>
                    <span className="text-[11px] font-extrabold uppercase text-emerald-600 dark:text-emerald-400">
                      Gol Keunggulan Babak I (Review VAR)
                    </span>
                  </div>

                  {/* Gol Gamaroni */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 sm:p-3.5 rounded-xl bg-slate-50 dark:bg-black/30 border border-slate-200/80 dark:border-white/5">
                    <span className="text-[11px] font-extrabold uppercase text-slate-400 order-2 sm:order-1">
                      Sundulan Penyeimbang
                    </span>
                    <div className="flex items-center gap-2.5 text-rose-600 dark:text-rose-400 font-bold order-1 sm:order-2">
                      <SoccerBall size={18} weight="fill" className="text-rose-500 shrink-0" />
                      <span>Antonio Gamaroni (65&apos;)</span>
                    </div>
                  </div>

                  {/* Heroic Save Dimas Fani */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 sm:p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-300/60 dark:border-amber-500/30">
                    <div className="flex items-center gap-2.5 text-amber-700 dark:text-amber-300 font-extrabold">
                      <ShieldCheck size={18} weight="fill" className="text-amber-500 shrink-0" />
                      <span>Dimas Fani Firmansyah (90+5&apos;)</span>
                    </div>
                    <span className="text-[11px] font-extrabold uppercase text-amber-600 dark:text-amber-400">
                      Aksi Heroik: Menepis Penalti Gamaroni di Masa Injury Time!
                    </span>
                  </div>
                </div>

                {/* Match Details Strip */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8 pt-6 border-t border-slate-100 dark:border-white/10 text-xs text-center text-slate-600 dark:text-slate-300">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5">
                    <span className="block text-[10px] text-slate-400 font-bold uppercase">Stadion</span>
                    <span className="font-bold">Patriot Candrabhaga, Bekasi</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5">
                    <span className="block text-[10px] text-slate-400 font-bold uppercase">Pelatih Kepala</span>
                    <span className="font-bold">Widyantoro</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5">
                    <span className="block text-[10px] text-slate-400 font-bold uppercase">Rekor Terkini</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">4 Laga Beruntun Tak Terkalahkan</span>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* TAB 2: NEXT MATCH (Broadcast Style with Java United FC Crest) */}
          {activeTab === 'next' && (
            <motion.div
              key="next"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
            >
              {/* Left Stage: Faceoff Scoreboard */}
              <div className="lg:col-span-8 rounded-3xl bg-gradient-to-b from-white via-slate-50 to-white dark:from-[#112219] dark:via-[#0c1812] dark:to-[#112219] border-2 border-slate-200/80 dark:border-white/10 p-4 sm:p-8 lg:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.6)] flex flex-col justify-between">
                <div>
                  
                  {/* Top Live Broadcast Tag */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-8 border-b border-slate-200/80 dark:border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                      </span>
                      <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                        I.League Cup 2026/2027 • Grup D (Pekan 1)
                      </span>
                    </div>

                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-xs font-bold text-slate-700 dark:text-slate-300">
                      <Television size={14} className="text-emerald-500" />
                      <span>Live Streaming Vidio</span>
                    </div>
                  </div>

                  {/* Faceoff Teams with Real Logos (Fully Responsive) */}
                  <div className="flex items-center justify-between gap-2 sm:gap-6 py-4 sm:py-6 text-center w-full">
                    
                    {/* Home: Java United FC */}
                    <div className="flex-1 flex flex-col items-center min-w-0">
                      <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 p-2.5 sm:p-3 rounded-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center mb-2 sm:mb-3 shadow-md hover:scale-105 transition-transform">
                        <img
                          src="/images/clubs/java-united.png"
                          alt="Java United FC"
                          className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
                        />
                      </div>
                      <span className="font-heading text-base sm:text-2xl md:text-3xl uppercase tracking-wider text-slate-900 dark:text-white leading-tight">
                        Java United FC
                      </span>
                      <span className="text-[10px] sm:text-xs font-extrabold text-slate-500 dark:text-slate-400 uppercase mt-0.5 sm:mt-1">
                        Tuan Rumah
                      </span>
                    </div>

                    {/* VS Energy Badge */}
                    <div className="shrink-0 flex flex-col items-center justify-center px-2 sm:px-4">
                      <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 text-slate-950 font-heading text-lg sm:text-2xl flex items-center justify-center shadow-lg transform -rotate-3 mb-1 select-none">
                        VS
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-extrabold text-slate-500 dark:text-slate-400 uppercase whitespace-nowrap">
                        16:00 WIB
                      </span>
                    </div>

                    {/* Away: Adhyaksa FC */}
                    <div className="flex-1 flex flex-col items-center min-w-0">
                      <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 p-2.5 sm:p-3 rounded-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center mb-2 sm:mb-3 shadow-md hover:scale-105 transition-transform">
                        <Crest size={72} />
                      </div>
                      <span className="font-heading text-base sm:text-2xl md:text-3xl uppercase tracking-wider text-slate-900 dark:text-white leading-tight">
                        Adhyaksa FC
                      </span>
                      <span className="text-[10px] sm:text-xs font-extrabold text-emerald-600 dark:text-emerald-400 uppercase mt-0.5 sm:mt-1">
                        Bekasi (Tim Tamu)
                      </span>
                    </div>

                  </div>
                </div>

                {/* Match Venue Footer */}
                <div className="pt-6 border-t border-slate-200/80 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6 text-xs text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-2 font-semibold">
                    <CalendarBlank size={18} className="text-amber-500 shrink-0" />
                    <span>Rabu, 4 November 2026 • Kick-off 16:00 WIB</span>
                  </div>
                  <div className="flex items-center gap-2 font-semibold">
                    <MapPin size={18} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>Laga Tandang Grup D</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-semibold text-emerald-600 dark:text-emerald-400">
                    <Lightning size={16} weight="fill" />
                    <span>Lanjutan Liga Pekan 9: Min, 8 Nov vs Semen Padang</span>
                  </div>
                </div>
              </div>

              {/* Right Stage: Digital Kick-Off Countdown Clock */}
              <div className="lg:col-span-4 rounded-3xl bg-gradient-to-b from-white via-slate-50 to-white dark:from-[#112219] dark:via-[#0c1812] dark:to-[#112219] border-2 border-slate-200/80 dark:border-white/10 p-7 sm:p-9 shadow-[0_15px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.6)] flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400 text-xs font-extrabold uppercase tracking-wider mb-3">
                    <Clock size={16} weight="bold" />
                    <span>Hitung Mundur Laga Besok</span>
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl uppercase tracking-wider text-slate-900 dark:text-white mb-6">
                    Waktu Menuju Laga
                  </h3>

                  {/* 4 Digital Metric Blocks */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {[
                      { label: 'Hari', val: timeLeft.days },
                      { label: 'Jam', val: timeLeft.hours },
                      { label: 'Menit', val: timeLeft.minutes },
                      { label: 'Detik', val: timeLeft.seconds },
                    ].map((unit) => (
                      <div key={unit.label} className="p-4 rounded-2xl bg-slate-100/90 dark:bg-black/40 border border-slate-200 dark:border-white/10 text-center shadow-inner">
                        <span className="font-heading text-4xl sm:text-5xl text-amber-500 tabular-nums block leading-none mb-1">
                          {mounted ? String(unit.val).padStart(2, '0') : '--'}
                        </span>
                        <span className="text-[10px] uppercase font-extrabold tracking-widest text-slate-500 dark:text-slate-400">
                          {unit.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-slate-700 dark:text-emerald-200 leading-relaxed">
                  <div className="flex items-center gap-2 font-extrabold text-emerald-700 dark:text-emerald-300 uppercase tracking-wider mb-1">
                    <ShieldCheck size={16} weight="fill" />
                    <span>Agenda Pekan Ini</span>
                  </div>
                  Setelah laga Cup melawan Java United FC (4 Nov), Laskar Patriot langsung bersiap menghadapi laga tandang krusial melawan Semen Padang di Stadion Madya Gelora Bung Karno (8 Nov).
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: SEMUA HASIL (Pekan 1 s/d 8) with REAL OPPONENT LOGOS */}
          {activeTab === 'results' && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {matchResults.map((m) => (
                  <div
                    key={m.round}
                    className="rounded-2xl bg-white dark:bg-[#112219] border-2 border-slate-200/80 dark:border-white/10 p-5 sm:p-6 shadow-sm hover:border-emerald-500 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Meta */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2">
                          <span className="px-3 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 text-xs font-extrabold uppercase tracking-wider">
                            {m.round}
                          </span>
                          <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
                            {m.isHome ? 'Kandang (H)' : 'Tandang (A)'}
                          </span>
                        </div>
                        
                        {/* Result Badge */}
                        <span
                          className={`w-7 h-7 rounded-lg flex items-center justify-center font-heading text-sm text-white shadow-xs ${
                            m.result === 'W'
                              ? 'bg-emerald-600'
                              : m.result === 'D'
                              ? 'bg-amber-500'
                              : 'bg-rose-600'
                          }`}
                        >
                          {m.result}
                        </span>
                      </div>

                      {/* Match Matchup & Score with OFFICIAL LOGOS (Responsive) */}
                      <div className="flex items-center justify-between gap-2 sm:gap-3 my-3 py-2 border-y border-slate-100 dark:border-white/5 font-heading text-sm sm:text-lg">
                        <div className="flex-1 flex items-center gap-1.5 sm:gap-2 min-w-0">
                          <img 
                            src={getClubLogo(m.home)} 
                            alt={m.home} 
                            className="w-5 h-5 sm:w-6 sm:h-6 object-contain shrink-0" 
                          />
                          <span className={`truncate ${m.home.includes('Adhyaksa') ? 'text-emerald-700 dark:text-emerald-400 font-bold' : 'text-slate-800 dark:text-white'}`}>
                            {m.home}
                          </span>
                        </div>

                        <span className="px-2.5 sm:px-3 py-1 rounded-xl bg-slate-100 dark:bg-black/40 text-slate-900 dark:text-white font-mono font-bold tracking-wider shrink-0 text-xs sm:text-sm whitespace-nowrap">
                          {m.homeScore} : {m.awayScore}
                        </span>

                        <div className="flex-1 flex items-center gap-1.5 sm:gap-2 justify-end min-w-0">
                          <span className={`truncate text-right ${m.away.includes('Adhyaksa') ? 'text-emerald-700 dark:text-emerald-400 font-bold' : 'text-slate-800 dark:text-white'}`}>
                            {m.away}
                          </span>
                          <img 
                            src={getClubLogo(m.away)} 
                            alt={m.away} 
                            className="w-5 h-5 sm:w-6 sm:h-6 object-contain shrink-0" 
                          />
                        </div>
                      </div>

                      {/* Details / Scorers */}
                      <p className="text-xs text-slate-600 dark:text-slate-300 mb-2">
                        {m.scorers.join(' • ')}
                      </p>
                    </div>

                    {/* Footer Info */}
                    <div className="pt-3 border-t border-slate-100 dark:border-white/5 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500 dark:text-slate-400">
                      <span>{m.date}</span>
                      <div className="flex items-center gap-3">
                        <span>Formasi: <strong>{m.formation}</strong></span>
                        <span>Penonton: <strong>{m.attendance.toLocaleString('id-ID')}</strong></span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* TAB 4: JADWAL LENGKAP with REAL LOGOS */}
          {activeTab === 'schedule' && (
            <motion.div
              key="schedule"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-3.5"
            >
              {upcomingSchedule.map((m, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white dark:bg-[#112219] border-2 border-slate-200/80 dark:border-white/10 p-5 sm:p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4 shadow-sm hover:border-emerald-500 transition-all duration-300"
                >
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-3.5 py-1 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 text-xs font-extrabold uppercase tracking-wider">
                      {m.round}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300 text-[11px] font-bold">
                      {m.competition}
                    </span>
                    {m.highlight && (
                      <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400 text-[10px] font-extrabold uppercase tracking-wider">
                        {m.highlight}
                      </span>
                    )}
                    <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 ml-1">
                      {m.date}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 font-heading text-base sm:text-xl text-slate-900 dark:text-white">
                    <div className="flex items-center gap-2">
                      <img 
                        src={getClubLogo(m.home)} 
                        alt={m.home} 
                        className="w-6 h-6 sm:w-7 sm:h-7 object-contain shrink-0" 
                      />
                      <span className={m.home.includes('Adhyaksa') ? 'text-emerald-600 dark:text-emerald-400 font-bold' : ''}>
                        {m.home}
                      </span>
                    </div>

                    <span className="text-amber-500 text-xs font-sans font-extrabold">VS</span>

                    <div className="flex items-center gap-2">
                      <span className={m.away.includes('Adhyaksa') ? 'text-emerald-600 dark:text-emerald-400 font-bold' : ''}>
                        {m.away}
                      </span>
                      <img 
                        src={getClubLogo(m.away)} 
                        alt={m.away} 
                        className="w-6 h-6 sm:w-7 sm:h-7 object-contain shrink-0" 
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1.5 font-medium">
                      <MapPin size={16} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>{m.venue}</span>
                    </div>
                    <div className="flex items-center gap-1 font-semibold text-emerald-600 dark:text-emerald-400">
                      <Television size={14} />
                      <span>{m.broadcast}</span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

        </AnimatePresence>

      </div>
    </section>
  );
}
