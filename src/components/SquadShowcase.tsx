"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const easing = [0.16, 1, 0.3, 1] as const;

const squad = [
  { id: 1, name: "Tatsuhide Shimizu", image: "/images/players/TATSUHIDE-SHIMIZU.jpeg" },
  { id: 2, name: "Artur Vieira", image: "/images/players/artur-vieira.jpeg" },
  { id: 3, name: "Irkham Mila", image: "/images/players/irkham-mila.jpeg" },
];

export default function SquadShowcase() {
  return (
    <section id="squad" className="w-full bg-afc-base section-padding border-b border-afc-green/20 overflow-hidden">
      <div className="container-default">
        
        <div className="mb-8 sm:mb-12 md:mb-16 flex flex-col md:flex-row justify-between items-start md:items-end border-b-subtle pb-4 gap-4">
          <h2 className="text-heading-xl text-afc-main">
            Tim <span className="text-afc-green">Utama</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {squad.map((player, index) => (
            <motion.div
              key={player.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: easing }}
              className="group relative overflow-hidden cursor-pointer aspect-[3/4]"
            >
              {/* Player Image */}
              <Image
                src={player.image}
                alt={player.name}
                fill
                className="object-cover object-top transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 33vw"
              />

              {/* Gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Player Info - always visible at bottom */}
              <div className="absolute bottom-0 left-0 w-full p-4 sm:p-5 md:p-6 z-10">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-heading text-white uppercase tracking-widest leading-tight drop-shadow-md">
                  {player.name}
                </h3>
              </div>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-afc-green scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[0.16,1,0.3,1] z-20" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
