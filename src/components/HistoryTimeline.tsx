"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const timelineEvents = [
  {
    year: "2019",
    title: "Awal Mula",
    description: "Klub didirikan sebagai wadah bagi talenta lokal Bekasi untuk menyalurkan bakat dan membangun komunitas sepak bola yang kuat."
  },
  {
    year: "2021",
    title: "Promosi Pertama",
    description: "Setelah perjuangan panjang, skuad utama berhasil meraih promosi ke liga regional, menandai dimulainya era profesional."
  },
  {
    year: "2023",
    title: "Juara Divisi",
    description: "Momen bersejarah ketika Adhyaksa FC Bekasi mengangkat trofi divisi untuk pertama kalinya di hadapan ribuan pendukung setia."
  },
  {
    year: "2026",
    title: "Menuju Puncak",
    description: "Kini, dengan visi baru dan dukungan penuh dari masyarakat Bekasi, kami siap menantang kasta tertinggi sepak bola nasional."
  }
];

export default function HistoryTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="w-full bg-afc-surface py-20 sm:py-28 relative overflow-hidden border-b border-afc-border">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-afc-green-glow rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-afc-gold-glow rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10">
        
        <div className="text-center mb-16 sm:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading text-afc-main uppercase tracking-widest mb-4"
          >
            Sejarah <span className="text-afc-gold">Klub</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-afc-main/60 max-w-2xl mx-auto font-body text-sm sm:text-base leading-relaxed"
          >
            Perjalanan panjang Adhyaksa FC Bekasi dari lapangan amatir menuju panggung profesional. Setiap langkah adalah sejarah.
          </motion.p>
        </div>

        <div className="relative">
          {/* Central Line Background */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-afc-border -translate-x-1/2 rounded-full" />
          
          {/* Central Line Animated */}
          <motion.div 
            className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-afc-green -translate-x-1/2 rounded-full origin-top"
            style={{ scaleY: lineHeight }}
          />

          <div className="space-y-16 sm:space-y-24">
            {timelineEvents.map((event, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={event.year} className="relative flex flex-col md:flex-row items-start md:items-center w-full group">
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-afc-base border-2 border-afc-gold -translate-x-1/2 mt-1.5 md:mt-0 z-10 group-hover:scale-150 group-hover:bg-afc-gold transition-all duration-300" />

                  {/* Content Container (Left or Right) */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: [0.21, 1.11, 0.81, 0.99] }} // Custom spring-like easing
                    className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:ml-auto md:text-left'}`}
                  >
                    <span className="inline-block text-afc-green font-heading text-4xl sm:text-5xl md:text-6xl tracking-widest opacity-20 group-hover:opacity-100 transition-opacity duration-300 absolute md:static top-0 right-4 -z-10 md:z-auto">
                      {event.year}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-heading uppercase text-afc-main tracking-widest mt-1 mb-2 sm:mb-3">
                      {event.title}
                    </h3>
                    <p className="text-afc-main/70 font-body text-sm sm:text-base leading-relaxed">
                      {event.description}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
