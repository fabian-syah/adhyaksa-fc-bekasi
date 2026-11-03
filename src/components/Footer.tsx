"use client";

import React, { useState } from 'react';
import { ArrowRight, CheckCircle, MapPin, InstagramLogo } from '@phosphor-icons/react';
import Crest from './Crest';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
  };

  return (
    <footer className="w-full bg-slate-900 text-white border-t border-slate-800 transition-colors">
      
      {/* Main Footer Content */}
      <div className="container-default pt-14 sm:pt-16 pb-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Club Brand Info */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Crest size={48} />
                <div className="flex flex-col">
                  <span className="font-heading text-2xl uppercase tracking-wider text-white">
                    Adhyaksa FC
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                    Bekasi • 2026/2027
                  </span>
                </div>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm mb-6">
                Klub sepak bola kebanggaan Kota Bekasi yang berkompetisi di Pegadaian Championship. Berjuang dengan sportivitas dan kehormatan di kancah sepak bola nasional.
              </p>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <MapPin size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>Stadion Patriot Candrabhaga, Jl. Jend. Ahmad Yani No. 2, Kota Bekasi</span>
                </div>
              </div>
            </div>

            {/* Social link */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/adhyaksafc.bekasi/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-emerald-600 text-xs font-bold uppercase tracking-wider text-white transition-all"
                aria-label="Instagram Resmi Adhyaksa FC"
              >
                <InstagramLogo size={16} weight="bold" />
                <span>@adhyaksafc.bekasi</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (No ticket link!) */}
          <div className="lg:col-span-3">
            <h4 className="font-heading text-lg text-amber-400 uppercase tracking-wider mb-5 pb-2 border-b border-white/10 inline-block">
              Navigasi
            </h4>
            <ul className="space-y-2.5 text-xs font-bold uppercase tracking-wider">
              {[
                { name: 'Beranda', href: '#overview' },
                { name: 'Pertandingan', href: '#matches' },
                { name: 'Klasemen Liga', href: '#standings' },
                { name: 'Tim Utama', href: '#squad' },
                { name: 'Stadion Candrabhaga', href: '#stadium' },
                { name: 'Berita Klub', href: '#news' },
                { name: 'Mitra & Sponsor', href: '#sponsors' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all"
                  >
                    <span className="text-emerald-400">›</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Newsletter */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <h4 className="font-heading text-lg text-amber-400 uppercase tracking-wider mb-2 pb-2 border-b border-white/10 inline-block">
                Buletin Suporter
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-5">
                Daftarkan email Anda untuk menerima informasi susunan pemain sebelum pertandingan dan berita terbaru klub.
              </p>

              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Masukkan alamat email Anda"
                      required
                      className="w-full bg-slate-950 border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-400 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary w-full text-center py-3 text-xs justify-center"
                  >
                    <span>Daftar Buletin</span>
                    <ArrowRight size={14} weight="bold" />
                  </button>
                </form>
              ) : (
                <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500 text-xs text-emerald-300 flex items-center gap-2">
                  <CheckCircle size={20} weight="fill" className="shrink-0" />
                  <span>Terima kasih! Email Anda telah terdaftar dalam buletin resmi klub.</span>
                </div>
              )}
            </div>

            <div className="text-[11px] text-slate-400 pt-4">
              Kompetisi Resmi: Pegadaian Liga 2 Indonesia 2026/2027
            </div>
          </div>

        </div>

        {/* Bottom Legal */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 font-medium gap-3">
          <div>
            © {new Date().getFullYear()} Adhyaksa FC Bekasi. Seluruh Hak Cipta Dilindungi.
          </div>
          <div className="flex items-center gap-5">
            <a href="#overview" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            <a href="#overview" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
            <a href="#sponsors" className="hover:text-white transition-colors">Mitra Resmi</a>
          </div>
        </div>

      </div>
    </footer>
  );
}