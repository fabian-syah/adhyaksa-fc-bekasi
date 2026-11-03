"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { List, X, Sun, Moon, InstagramLogo, Shield, Lightning } from '@phosphor-icons/react';
import { useTheme } from 'next-themes';
import Crest from './Crest';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Beranda');
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  const navLinks = [
    { name: 'Beranda', href: '#overview' },
    { name: 'Pertandingan', href: '#matches' },
    { name: 'Klasemen', href: '#standings' },
    { name: 'Tim Utama', href: '#squad' },
    { name: 'Stadion', href: '#stadium' },
    { name: 'Berita', href: '#news' },
    { name: 'Mitra & Sponsor', href: '#sponsors' },
  ];

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDarkMode = mounted && resolvedTheme === 'dark';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      
      {/* Dynamic Graphic Top Ribbon (Man City / AC Milan Style) */}
      <div className="w-full bg-gradient-to-r from-slate-950 via-[#071d13] to-slate-950 text-slate-300 text-[11px] font-semibold py-1 px-4 hidden md:block border-b border-white/10 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[10px] font-extrabold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              Pegadaian Liga 2
            </span>
            <span className="text-white/80 font-medium">
              Stadion Patriot Candrabhaga • Kebanggaan Kota Bekasi
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a href="#sponsors" className="hover:text-amber-400 transition-colors inline-flex items-center gap-1 font-bold">
              <Shield size={12} weight="fill" className="text-amber-400" />
              Official Apparel: CALMA
            </a>
            <a 
              href="https://www.instagram.com/adhyaksafc.bekasi/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1 font-bold"
            >
              <InstagramLogo size={13} weight="bold" />
              @adhyaksafc.bekasi
            </a>
          </div>
        </div>
      </div>

      {/* Floating Aerodynamic Navigation Bar */}
      <div 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 dark:bg-[#08120d]/90 backdrop-blur-xl shadow-lg border-b border-slate-200/80 dark:border-white/10 py-2.5' 
            : 'bg-white/95 dark:bg-[#08120d]/95 border-b border-slate-200 dark:border-white/10 py-3 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Animated Club Crest & Brand Identity */}
          <a href="#overview" className="flex items-center gap-3 group">
            <Crest size={46} />
            <div className="flex flex-col text-left">
              <span className="font-heading text-xl sm:text-2xl tracking-wider uppercase text-slate-900 dark:text-white leading-none group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                Adhyaksa FC
              </span>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mt-0.5">
                Bekasi
              </span>
            </div>
          </a>

          {/* Desktop Nav Links with Sliding Liquid Indicator */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 dark:bg-white/[0.06] p-1.5 rounded-full border border-slate-200 dark:border-white/10 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeTab === link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveTab(link.name)}
                  className={`relative px-4 py-2 rounded-full font-bold uppercase tracking-wider text-xs transition-colors duration-200 z-10 ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-500 rounded-full shadow-[0_4px_15px_rgba(0,180,71,0.4)] -z-10"
                      transition={{ type: "spring", stiffness: 450, damping: 32 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Smooth Theme Toggle Button */}
            {mounted && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={() => setTheme(isDarkMode ? 'light' : 'dark')}
                aria-label="Ganti Tema Tampilan"
                className="flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider border border-slate-200 dark:border-white/15 bg-slate-100/80 dark:bg-white/10 text-slate-800 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-white/20 transition-all cursor-pointer shadow-sm"
              >
                {isDarkMode ? (
                  <>
                    <Sun weight="fill" size={16} className="text-amber-400 animate-spin-slow" />
                    <span className="hidden sm:inline">Light</span>
                  </>
                ) : (
                  <>
                    <Moon weight="fill" size={16} className="text-slate-800" />
                    <span className="hidden sm:inline">Dark</span>
                  </>
                )}
              </motion.button>
            )}

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Tutup Menu" : "Buka Menu"}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full text-slate-800 dark:text-white border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X weight="bold" size={20} /> : <List weight="bold" size={20} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white/95 dark:bg-[#0a150f]/98 backdrop-blur-2xl border-b border-slate-200 dark:border-white/10 shadow-2xl px-6 py-6"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveTab(link.name);
                    setMobileMenuOpen(false);
                  }}
                  className="px-4 py-3 rounded-2xl font-bold uppercase tracking-wider text-sm text-slate-800 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-white/10 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <Lightning size={14} className="text-emerald-500 opacity-60" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}