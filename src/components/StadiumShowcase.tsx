"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Users, Lightning, Sparkle, ShieldCheck, Compass, Trophy } from '@phosphor-icons/react';

interface StadiumPhoto {
  id: string;
  title: string;
  subtitle: string;
  src: string;
  tag: string;
}

export default function StadiumShowcase() {
  const [activePhoto, setActivePhoto] = useState<number>(0);

  const photos: StadiumPhoto[] = [
    {
      id: 'panorama',
      title: 'Kemegahan Stadion Patriot Candrabhaga',
      subtitle: 'Stadion megah berkapasitas 30.000 penonton dengan arsitektur atap gelombang ikonik kebanggaan warga Bekasi.',
      src: '/images/stadium/stadium-panorama.jpg',
      tag: 'Panorama Utama',
    },
    {
      id: 'pitch',
      title: 'Sudut Pandang Lapangan & Garis Gawang',
      subtitle: 'Kualitas rumput alami terawat standar FIFA dan lintasan atletik siap menyajikan laga bertensi tinggi.',
      src: '/images/stadium/hero-stadium.jpg',
      tag: 'Pitch & Goal View',
    },
    {
      id: 'canopy',
      title: 'Arsitektur Kanopi & Tribun Melengkung',
      subtitle: 'Struktur atap baja melengkung modern yang memantulkan gemuruh chants suporter Laskar Patriot.',
      src: '/images/stadium/stadium-canopy.jpg',
      tag: 'Arsitektur Ikonik',
    },
    {
      id: 'seats',
      title: 'Tribun Penonton Single Seater',
      subtitle: 'Kenyamanan tempat duduk single seater berwarna tosca dan kuning dengan visibilitas optimal ke seluruh penjuru lapangan.',
      src: '/images/stadium/stadium-seats.jpg',
      tag: 'Tribun Suporter',
    },
    {
      id: 'aerial',
      title: 'Perspektif Tribun Atas',
      subtitle: 'Pemandangan menyeluruh dari tribun atas yang memberikan panorama taktis jalannya setiap pertandingan.',
      src: '/images/stadium/stadium-pitch.jpg',
      tag: 'Tactical View',
    },
  ];

  const specs = [
    {
      icon: Users,
      value: '30.000',
      label: 'Kapasitas Penonton',
      sub: 'Single Seater Kursi',
    },
    {
      icon: Trophy,
      value: 'Standar FIFA',
      label: 'Kualitas Rumput',
      sub: 'Natural Turf Lapangan',
    },
    {
      icon: Lightning,
      value: '2.000+ Lux',
      label: 'Pencahayaan Lampu',
      sub: 'Siaran HD & VAR Ready',
    },
    {
      icon: MapPin,
      value: 'Kota Bekasi',
      label: 'Lokasi Strategis',
      sub: 'Jl. Jend. Ahmad Yani No. 2',
    },
  ];

  return (
    <section id="stadium" className="relative w-full py-20 sm:py-28 bg-slate-900 text-white overflow-hidden border-b border-white/10 transition-colors">
      
      {/* Background Ambient Stadium Glow */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-30">
        <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[140px]" />
        <div className="absolute -bottom-40 right-1/4 w-[600px] h-[600px] bg-amber-500/15 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
      </div>

      <div className="container-default relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10 mb-10 sm:mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-extrabold uppercase tracking-wider mb-3 shadow-sm">
              <Compass size={16} weight="fill" />
              <span>Home Ground & Benteng Kebanggaan</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading uppercase tracking-wider text-white flex items-center gap-3">
              <span>Stadion Patriot</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-green-300">
                Candrabhaga
              </span>
            </h2>
          </div>

          <div className="flex flex-col sm:items-end gap-1.5">
            <div className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-bold uppercase tracking-wider">
              <ShieldCheck size={16} weight="bold" />
              <span>Markas Resmi Adhyaksa FC Bekasi</span>
            </div>
            <p className="text-xs text-slate-400 font-medium">
              Saksi bisu perjuangan dan sejarah kejayaan sepak bola di jantung Kota Bekasi
            </p>
          </div>
        </div>

        {/* Cinematic Main Stage Display (Zero-Overlap Responsive Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-12">
          
          {/* Main Visual Showcase (Col 8) */}
          <div className="lg:col-span-8 min-w-0 w-full rounded-3xl overflow-hidden border-2 border-white/15 bg-slate-950 relative min-h-[360px] sm:min-h-[460px] lg:min-h-[520px] shadow-[0_20px_50px_rgba(0,0,0,0.8)] group flex flex-col justify-between p-5 sm:p-8">
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0">
              <AnimatePresence mode="wait">
                <motion.img
                  key={photos[activePhoto].id}
                  src={photos[activePhoto].src}
                  alt={photos[activePhoto].title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="w-full h-full object-cover object-center"
                />
              </AnimatePresence>
              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />
            </div>

            {/* Top Badges */}
            <div className="relative z-10 flex flex-wrap items-center gap-2">
              <span className="px-3.5 py-1.5 rounded-full bg-emerald-600/90 backdrop-blur-md text-white font-extrabold text-[11px] uppercase tracking-wider shadow-md">
                {photos[activePhoto].tag}
              </span>
              <span className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-slate-300 font-bold text-[10px] uppercase tracking-wider border border-white/10">
                Foto {activePhoto + 1} dari {photos.length}
              </span>
            </div>

            {/* Bottom Caption */}
            <div className="relative z-10 pt-16">
              <h3 className="font-heading text-xl sm:text-3xl uppercase tracking-wider text-white mb-2 leading-tight drop-shadow-md">
                {photos[activePhoto].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl drop-shadow-sm">
                {photos[activePhoto].subtitle}
              </p>
            </div>
          </div>

          {/* Interactive Thumbnails Selector (Col 4) */}
          <div className="lg:col-span-4 min-w-0 w-full flex flex-col justify-between gap-3">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 block mb-2.5">
                Pilih Sudut Pandang Stadion
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
                {photos.map((item, idx) => {
                  const isSelected = activePhoto === idx;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActivePhoto(idx)}
                      className={`w-full text-left p-2.5 sm:p-3 rounded-2xl border transition-all duration-300 flex items-center gap-3 cursor-pointer ${
                        isSelected
                          ? 'bg-emerald-950/70 border-emerald-500 shadow-[0_0_20px_rgba(0,180,71,0.25)] translate-x-1 sm:translate-x-1.5'
                          : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="w-14 h-11 sm:w-16 sm:h-12 rounded-xl overflow-hidden shrink-0 bg-slate-900 border border-white/10">
                        <img
                          src={item.src}
                          alt={item.title}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className={`text-[10px] font-extrabold uppercase tracking-wider block truncate ${
                          isSelected ? 'text-emerald-400' : 'text-slate-400'
                        }`}>
                          {item.tag}
                        </span>
                        <span className="font-heading text-xs uppercase tracking-wider text-white block truncate">
                          {item.title}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Live Location Tag */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-300 flex items-center gap-3 mt-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <MapPin size={20} weight="fill" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Alamat Resmi Markas</span>
                <span className="font-semibold text-white truncate block">Jl. Jend. Ahmad Yani No. 2, Kota Bekasi</span>
              </div>
            </div>
          </div>

        </div>

        {/* Stadium Specifications Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/10">
          {specs.map((spec, i) => {
            const Icon = spec.icon;
            return (
              <div
                key={i}
                className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-colors flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <Icon size={24} weight="fill" />
                </div>
                <div>
                  <span className="font-heading text-xl sm:text-2xl text-white block leading-none mb-1">
                    {spec.value}
                  </span>
                  <span className="text-[11px] font-extrabold text-slate-300 uppercase tracking-wider block">
                    {spec.label}
                  </span>
                  <span className="text-[10px] text-slate-500 font-medium block">
                    {spec.sub}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
