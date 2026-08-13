"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Beranda');
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const navLinks = [
    { name: 'Beranda', href: '#overview' },
    { name: 'Pertandingan', href: '#matches' },
    { name: 'Tim Utama', href: '#squad' },
  ];

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Floating Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none px-2 sm:px-4 pt-2 sm:pt-3">
        <header
          className={`w-full max-w-6xl pointer-events-auto flex items-center justify-between rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isScrolled
              ? 'bg-[#0a0f0d]/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-white/[0.08] px-3 sm:px-5 py-2'
              : 'bg-[#0a0f0d]/80 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.2)] border border-white/[0.05] px-3 sm:px-6 py-2.5 sm:py-3'
          }`}
        >

          {/* Logo */}
          <a href="#overview" className="flex items-center relative z-50 shrink-0 min-w-0">
            <span className="font-black tracking-tighter text-base sm:text-lg md:text-xl uppercase text-white whitespace-nowrap">
              Adhyaksa
            </span>
          </a>

          {/* Center Nav Links - hidden below md */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 mx-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveTab(link.name)}
                className={`relative px-3 lg:px-4 py-2 rounded-full font-semibold uppercase tracking-wider text-[11px] lg:text-xs transition-all duration-300 whitespace-nowrap ${
                  activeTab === link.name
                    ? 'text-white bg-white/10'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {activeTab === link.name && (
                  <motion.span
                    layoutId="navPill"
                    className="absolute inset-0 bg-white/10 rounded-full z-0"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-1 sm:gap-1.5 relative z-50 shrink-0">
            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
              </button>
            )}

            {/* CTA Button - hidden below sm */}
            <a
              href="#tickets"
              className="hidden sm:flex items-center gap-1.5 bg-primary text-white font-bold uppercase tracking-wider text-[10px] md:text-xs px-3 md:px-5 py-1.5 md:py-2.5 rounded-full hover:bg-[#00b34a] transition-all duration-300 whitespace-nowrap"
            >
              Beli Tiket <ArrowRight size={12} className="md:w-[14px] md:h-[14px]" />
            </a>

            {/* Mobile Menu Button - visible below md */}
            <button
              className="md:hidden w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Menu Fullscreen Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-[#0a0f0d]/98 backdrop-blur-2xl z-40 flex flex-col justify-center items-center gap-5 sm:gap-6 px-6"
          >
            {navLinks.map((link, i) => (
              <motion.a
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 + 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveTab(link.name);
                  setMobileMenuOpen(false);
                }}
                className={`text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter transition-colors ${
                  activeTab === link.name ? 'text-primary' : 'text-white/80 hover:text-white'
                }`}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              href="#tickets"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 sm:mt-6 bg-primary text-white font-black px-8 sm:px-10 py-3.5 sm:py-4 rounded-full uppercase tracking-widest text-sm sm:text-base hover:bg-[#00b34a] transition-colors"
            >
              Beli Tiket
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
