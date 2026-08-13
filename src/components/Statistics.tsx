"use client";

import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';

const easing = [0.16, 1, 0.3, 1] as const;

const stats = [
  { label: "Gelar Liga", value: 15, suffix: "x" },
  { label: "Anggota Aktif", value: 50, suffix: "k+" },
  { label: "Kehadiran Stadion", value: 98, suffix: "%" },
  { label: "Tahun Sejarah", value: 75, suffix: "+" },
];

function AnimatedNumber({ value, suffix }: { value: number, suffix: string }) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  
  useEffect(() => {
    if (inView) {
      const controls = animate(motionValue, value, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, value, motionValue]);

  return (
    <span ref={ref} className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-highlight tracking-tighter mb-2 sm:mb-4 inline-block">
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  );
}

export default function Statistics() {
  return (
    <section className="w-full bg-background py-10 sm:py-12 md:py-16 relative border-b border-primary/20">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-border-subtle bg-primary/5">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: easing }}
              className={`flex flex-col items-center justify-center p-5 sm:p-6 md:p-8 lg:p-10 text-center hover:bg-primary/10 transition-colors duration-500 group
                ${index < 2 ? 'border-b md:border-b-0' : ''} 
                ${index % 2 === 0 ? 'border-r' : ''} 
                ${index < 3 ? 'md:border-r' : 'md:border-r-0'} 
                border-border-subtle
              `}
            >
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <span className="text-foreground/70 group-hover:text-foreground font-black uppercase tracking-wider sm:tracking-widest text-[10px] sm:text-xs md:text-sm transition-colors duration-500">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
