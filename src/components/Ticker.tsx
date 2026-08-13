"use client";

import React from 'react';

export default function Ticker() {
  const tickerItems = [
    "LAGA BERIKUTNYA: VS PERSIPASI BEKASI",
    "JUARA LIGA 2",
    "PRE-ORDER JERSEY KANDANG SEKARANG",
    "TIKET PERTANDINGAN SUDAH TERSEDIA",
    "SATU SEMANGAT, SATU KEBANGGAAN"
  ];

  // Duplicate items to ensure smooth infinite scroll
  const duplicatedItems = [...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <div className="w-full bg-primary border-y-2 border-secondary overflow-hidden relative flex items-center h-12">
      <div className="flex animate-marquee whitespace-nowrap">
        {duplicatedItems.map((item, index) => (
          <span 
            key={index} 
            className="text-foreground font-black uppercase tracking-widest text-sm md:text-base mx-4 md:mx-8 flex items-center gap-4 md:gap-8"
          >
            {item}
            {/* Geometric separator block */}
            <span className="w-3 h-3 bg-white rounded-full inline-block"></span>
          </span>
        ))}
      </div>
    </div>
  );
}
