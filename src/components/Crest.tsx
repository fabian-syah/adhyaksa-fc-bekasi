"use client";

import React from 'react';

interface CrestProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export default function Crest({ className = "", size = 48, showText = false }: CrestProps) {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <div 
        className="relative shrink-0 flex items-center justify-center transition-transform duration-300 hover:scale-105"
        style={{ width: size, height: size }}
      >
        <img
          src="/images/club/logo.png"
          alt="Logo Resmi Adhyaksa FC Bekasi"
          width={size}
          height={size}
          className="w-full h-full object-contain drop-shadow-[0_4px_16px_rgba(0,147,61,0.35)] filter contrast-105"
          loading="eager"
        />
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <span className="font-heading text-lg sm:text-xl tracking-wider uppercase leading-none text-slate-900 dark:text-white">
            Adhyaksa FC
          </span>
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            Bekasi
          </span>
        </div>
      )}
    </div>
  );
}
