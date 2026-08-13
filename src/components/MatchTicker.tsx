"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Trophy } from 'lucide-react';

const easing = [0.16, 1, 0.3, 1] as const;

const SEASON_START = new Date('2026-09-18T19:00:00+07:00');

function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
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
  }, [targetDate]);

  return timeLeft;
}

export default function MatchTicker() {
  const countdown = useCountdown(SEASON_START);

  return (
    <section id="matches" className="w-full bg-background py-12 sm:py-16 md:py-24 border-b border-border-subtle">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">

        {/* Section Header */}
        <div className="mb-8 sm:mb-12 border-b border-border-subtle pb-4 sm:pb-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-foreground uppercase tracking-tighter">
            Musim <span className="text-primary">2026/2027</span>
          </h2>
        </div>

        {/* Countdown Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easing }}
          className="bg-surface border border-border-subtle relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-48 sm:w-72 h-48 sm:h-72 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/15 transition-colors duration-700"></div>
          <div className="absolute bottom-0 left-0 w-32 sm:w-48 h-32 sm:h-48 bg-highlight/5 rounded-full blur-3xl"></div>

          <div className="relative z-10 p-6 sm:p-8 md:p-12 lg:p-16">
            
            {/* Badge */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              <span className="inline-flex items-center gap-1.5 text-primary font-black uppercase tracking-widest text-[10px] sm:text-xs border border-primary/30 px-2.5 sm:px-3 py-1">
                <Trophy size={12} className="shrink-0" />
                Championship 2026/2027
              </span>
              <span className="inline-flex items-center gap-1.5 text-highlight font-black uppercase tracking-widest text-[10px] sm:text-xs border border-highlight/30 px-2.5 sm:px-3 py-1">
                Kick-off
              </span>
            </div>

            {/* Title */}
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground uppercase tracking-tighter mb-2 sm:mb-3">
              Menuju Kick-Off
            </h3>
            <p className="text-foreground/50 font-bold uppercase tracking-wider text-xs sm:text-sm mb-8 sm:mb-10 md:mb-12 flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="inline-flex items-center gap-1.5">
                <Calendar size={13} className="text-primary shrink-0" />
                18 September 2026
              </span>
              <span className="text-foreground/20 hidden sm:inline">•</span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={13} className="text-primary shrink-0" />
                Patriot Candrabhaga, Bekasi
              </span>
            </p>

            {/* Countdown Grid */}
            <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4 max-w-md md:max-w-lg">
              {[
                { val: countdown.days, label: "Hari" },
                { val: countdown.hours, label: "Jam" },
                { val: countdown.minutes, label: "Menit" },
                { val: countdown.seconds, label: "Detik" },
              ].map((unit) => (
                <div key={unit.label} className="flex flex-col items-center">
                  <div className="w-full aspect-square max-w-[90px] bg-background border border-border-subtle flex items-center justify-center group-hover:border-primary/20 transition-colors duration-500">
                    <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-highlight tracking-tighter tabular-nums leading-none">
                      {String(unit.val).padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-foreground/40 font-bold uppercase tracking-widest text-[8px] sm:text-[10px] md:text-xs mt-2 sm:mt-3">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
