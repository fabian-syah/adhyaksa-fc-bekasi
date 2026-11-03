"use client";

import React, { useState } from 'react';
import { Trophy, TrendUp, ArrowUp, ArrowDown, Minus, ShieldCheck, Sparkle } from '@phosphor-icons/react';
import Crest from './Crest';

interface TeamStanding {
  pos: number;
  team: string;
  logo: string;
  p: number;
  w: number;
  d: number;
  l: number;
  gf: number;
  ga: number;
  gd: string;
  pts: number;
  form: ('W' | 'D' | 'L')[];
  isClub?: boolean;
}

export default function Standings() {
  const [activeGroup, setActiveGroup] = useState<'A' | 'B'>('A');

  // Flashscore Group A Standings (Official 2026/2027)
  const groupA: TeamStanding[] = [
    { pos: 1, team: 'PSPS Riau', logo: '/images/clubs/psps.png', p: 8, w: 6, d: 1, l: 1, gf: 16, ga: 9, gd: '+7', pts: 19, form: ['D', 'W', 'W', 'W', 'W'] },
    { pos: 2, team: 'PSMS Medan', logo: '/images/clubs/psms.png', p: 8, w: 5, d: 2, l: 1, gf: 19, ga: 7, gd: '+12', pts: 17, form: ['W', 'W', 'D', 'L', 'W'] },
    { pos: 3, team: 'Persikad Depok', logo: '/images/clubs/persikad.png', p: 8, w: 4, d: 1, l: 3, gf: 11, ga: 13, gd: '-2', pts: 13, form: ['D', 'L', 'L', 'W', 'L'] },
    { pos: 4, team: 'Semen Padang', logo: '/images/clubs/semen-padang.png', p: 8, w: 4, d: 2, l: 2, gf: 9, ga: 6, gd: '+3', pts: 13, form: ['W', 'W', 'D', 'L', 'L'] },
    { pos: 5, team: 'PSIS Semarang', logo: '/images/clubs/psis.png', p: 8, w: 3, d: 3, l: 2, gf: 9, ga: 7, gd: '+2', pts: 11, form: ['D', 'L', 'D', 'L', 'W'] },
    { pos: 6, team: 'Sumsel United', logo: '/images/clubs/sumsel-united.png', p: 8, w: 3, d: 2, l: 3, gf: 13, ga: 11, gd: '+2', pts: 10, form: ['L', 'D', 'W', 'W', 'W'] },
    { pos: 7, team: 'Persiraja Aceh', logo: '/images/clubs/persiraja.png', p: 8, w: 3, d: 1, l: 4, gf: 11, ga: 10, gd: '+1', pts: 9, form: ['W', 'W', 'D', 'W', 'L'] },
    { pos: 8, team: 'Adhyaksa FC Bekasi', logo: '/crest.png', p: 8, w: 1, d: 4, l: 3, gf: 8, ga: 7, gd: '+1', pts: 7, form: ['D', 'D', 'D', 'W', 'L'], isClub: true },
    { pos: 9, team: 'PSGC Ciamis', logo: '/images/clubs/psgc.png', p: 8, w: 2, d: 1, l: 5, gf: 7, ga: 13, gd: '-6', pts: 7, form: ['L', 'L', 'D', 'L', 'W'] },
    { pos: 10, team: 'Persiku Kudus', logo: '/images/clubs/persiku.png', p: 8, w: 0, d: 1, l: 7, gf: 6, ga: 26, gd: '-20', pts: -1, form: ['L', 'L', 'L', 'L', 'L'] },
  ];

  // Flashscore Group B Standings (Official 2026/2027)
  const groupB: TeamStanding[] = [
    { pos: 1, team: 'Persela Lamongan', logo: '/images/clubs/persela.png', p: 8, w: 5, d: 2, l: 1, gf: 16, ga: 5, gd: '+11', pts: 16, form: ['W', 'D', 'L', 'D', 'W'] },
    { pos: 2, team: 'Barito Putera', logo: '/images/clubs/barito-putera.png', p: 8, w: 5, d: 1, l: 2, gf: 16, ga: 9, gd: '+7', pts: 16, form: ['W', 'W', 'W', 'W', 'L'] },
    { pos: 3, team: 'Deltras Sidoarjo', logo: '/images/clubs/deltras.png', p: 8, w: 4, d: 3, l: 1, gf: 18, ga: 11, gd: '+7', pts: 15, form: ['L', 'D', 'D', 'D', 'W'] },
  ];

  const currentList = activeGroup === 'A' ? groupA : groupB;

  return (
    <section id="standings" className="relative w-full py-20 sm:py-28 bg-slate-50 dark:bg-[#070e0a] text-slate-900 dark:text-white border-b border-slate-200 dark:border-white/10 transition-colors overflow-hidden">
      
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-20 dark:opacity-35">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-default relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200 dark:border-white/10 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-extrabold uppercase tracking-wider mb-3">
              <Trophy size={16} weight="fill" />
              <span>Klasemen Resmi Pegadaian Championship 2026/2027</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-3">
              <span>Tabel</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-500 dark:from-emerald-400 dark:via-emerald-300 dark:to-green-300">
                Klasemen
              </span>
            </h2>
          </div>

          {/* Group Switcher Tabs */}
          <div className="flex items-center gap-3">
            <div className="flex bg-slate-200/80 dark:bg-white/5 p-1 rounded-2xl border border-slate-300/70 dark:border-white/10 backdrop-blur-md">
              <button
                onClick={() => setActiveGroup('A')}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeGroup === 'A'
                    ? 'bg-gradient-to-r from-emerald-600 to-green-500 text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Grup A (Grup Kita)
              </button>
              <button
                onClick={() => setActiveGroup('B')}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeGroup === 'B'
                    ? 'bg-gradient-to-r from-emerald-600 to-green-500 text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Grup B
              </button>
            </div>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium hidden sm:inline">
              Sumber: Flashscore & PT LIB
            </span>
          </div>
        </div>

        {/* Tournament Standings Card */}
        <div className="rounded-3xl bg-white dark:bg-[#112018] border-2 border-slate-200/80 dark:border-white/10 overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.06)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
          {/* Mobile swipe helper indicator */}
          <div className="sm:hidden px-4 py-2 bg-emerald-500/10 dark:bg-emerald-500/15 border-b border-emerald-500/20 text-[11px] text-emerald-700 dark:text-emerald-300 flex items-center justify-center gap-1 font-bold">
            <span>← Geser tabel ke kanan untuk statistik lengkap →</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[760px]">
              <thead>
                <tr className="bg-slate-100/90 dark:bg-black/40 border-b border-slate-200 dark:border-white/10 text-[11px] font-extrabold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                  <th className="py-4 px-4 sm:px-5 w-14 text-center">Pos</th>
                  <th className="py-4 px-5">Klub</th>
                  <th className="py-4 px-3 text-center">Main</th>
                  <th className="py-4 px-3 text-center">M</th>
                  <th className="py-4 px-3 text-center">S</th>
                  <th className="py-4 px-3 text-center">K</th>
                  <th className="py-4 px-3 text-center">Gol</th>
                  <th className="py-4 px-3 text-center">SG</th>
                  <th className="py-4 px-5 text-center font-heading text-sm text-emerald-600 dark:text-emerald-400">Poin</th>
                  <th className="py-4 px-5 text-center">5 Laga Terakhir</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-white/5 text-xs">
                {currentList.map((row) => (
                  <tr
                    key={row.team}
                    className={`transition-colors duration-200 ${
                      row.isClub
                        ? 'bg-emerald-500/10 dark:bg-emerald-950/50 font-bold border-l-4 border-l-emerald-500 shadow-sm'
                        : 'hover:bg-slate-50/80 dark:hover:bg-white/[0.02]'
                    }`}
                  >
                    {/* Position */}
                    <td className="py-4 px-4 sm:px-5 text-center">
                      <div className="flex items-center justify-center">
                        <span
                          className={`inline-flex items-center justify-center w-7 h-7 rounded-xl text-xs font-heading ${
                            row.pos <= 2
                              ? 'bg-gradient-to-br from-emerald-600 to-green-500 text-white shadow-sm'
                              : row.pos <= 4
                              ? 'bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/30'
                              : 'text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/5'
                          }`}
                        >
                          {row.pos}
                        </span>
                      </div>
                    </td>

                    {/* Team & Official Logo */}
                    <td className="py-4 px-5">
                      <div className="flex items-center gap-3">
                        {/* High-res transparent PNG crest */}
                        <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/5 p-1 flex items-center justify-center shrink-0 border border-slate-200 dark:border-white/10 shadow-xs">
                          <img
                            src={row.logo}
                            alt={row.team}
                            className="w-full h-full object-contain"
                            loading="lazy"
                          />
                        </div>

                        <span className={`text-sm tracking-wide ${row.isClub ? 'text-emerald-700 dark:text-emerald-300 font-extrabold' : 'text-slate-800 dark:text-white font-semibold'}`}>
                          {row.team}
                        </span>
                        
                        {row.isClub && (
                          <span className="px-2.5 py-0.5 rounded-full bg-emerald-600 text-white text-[9px] uppercase tracking-wider font-extrabold shadow-sm">
                            Klub Kita
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Stats */}
                    <td className="py-4 px-3 text-center text-slate-600 dark:text-slate-300 tabular-nums font-semibold">{row.p}</td>
                    <td className="py-4 px-3 text-center text-slate-600 dark:text-slate-300 tabular-nums font-semibold">{row.w}</td>
                    <td className="py-4 px-3 text-center text-slate-600 dark:text-slate-300 tabular-nums font-semibold">{row.d}</td>
                    <td className="py-4 px-3 text-center text-slate-600 dark:text-slate-300 tabular-nums font-semibold">{row.l}</td>
                    <td className="py-4 px-3 text-center text-slate-500 dark:text-slate-400 tabular-nums text-[11px] font-mono">
                      {row.gf}:{row.ga}
                    </td>
                    <td className="py-4 px-3 text-center font-mono font-bold text-slate-700 dark:text-slate-200 tabular-nums">{row.gd}</td>
                    <td className="py-4 px-5 text-center font-heading text-lg text-emerald-600 dark:text-emerald-400 tabular-nums font-bold">
                      {row.pts}
                    </td>

                    {/* Form Trend */}
                    <td className="py-4 px-5 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        {row.form.map((f, i) => (
                          <span
                            key={i}
                            className={`w-5 h-5 rounded-md flex items-center justify-center text-[9px] font-extrabold uppercase shadow-xs ${
                              f === 'W'
                                ? 'bg-emerald-600 text-white'
                                : f === 'D'
                                ? 'bg-amber-500 text-white'
                                : 'bg-rose-600 text-white'
                            }`}
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer */}
          <div className="bg-slate-50 dark:bg-black/30 p-5 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600 dark:text-slate-300">
            <div className="flex flex-wrap items-center gap-5">
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-md bg-emerald-600 inline-block shadow-xs" />
                <span className="font-bold">Posisi 1-2: Play-off Promosi Liga 1</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-md bg-amber-500 inline-block shadow-xs" />
                <span className="font-bold">Posisi 3-4: Papan Atas Championship</span>
              </div>
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
              *MP: Main | W: Menang | D: Seri | L: Kalah | GD: Selisih Gol | PTS: Poin | Catatan: Persiku mendapat pengurangan poin (-1)
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
