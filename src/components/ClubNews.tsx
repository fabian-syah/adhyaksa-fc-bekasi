"use client";

import React from 'react';
import { Newspaper, CalendarBlank, ArrowRight, Clock, ArrowSquareOut, ShieldCheck } from '@phosphor-icons/react';

interface NewsItem {
  id: number;
  category: string;
  badgeColor: string;
  source: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image?: string;
  url: string;
}

export default function ClubNews() {
  const newsItems: NewsItem[] = [
    {
      id: 1,
      category: 'Evaluasi & Taktik',
      badgeColor: 'bg-emerald-600',
      source: 'I.League Official',
      title: 'Widyantoro Soroti Penyelesaian Akhir Adhyaksa FC Usai Ditahan Imbang PSPS di Patriot',
      excerpt: 'Pelatih Kepala Widyantoro memberikan evaluasi mendalam usai laga sengit pekan ke-8 di Stadion Patriot Candrabhaga. Sektor finishing dan ketenangan penguasaan bola menjadi fokus pembenahan intensif jelang laga berikutnya.',
      date: '1 Nov 2026',
      readTime: '3 Menit Baca',
      image: '/images/news/news-widyantoro.jpg',
      url: 'https://ileague.id/news/detail/widyantoro-soroti-penyelesaian-akhir-adhyaksa-fc-usai-ditahan-imbang-psps',
    },
    {
      id: 2,
      category: 'Sorotan Laga',
      badgeColor: 'bg-amber-600',
      source: 'GoRiau Sports',
      title: 'Drama Menit Akhir di Patriot: Dimas Fani Tepis Penalti Krusial, Amankan 1 Poin Berharga',
      excerpt: 'Aksi heroik kiper Dimas Fani Firmansyah di menit 90+5 berhasil memblok eksekusi penalti Antonio Gamaroni setelah tinjauan VAR, memastikan skor 1-1 bertahan hingga peluit panjang.',
      date: '31 Okt 2026',
      readTime: '2 Menit Baca',
      image: '/images/news/news-match-psps.jpg',
      url: 'https://www.goriau.com/berita/baca/drama-menit-akhir-di-markas-adhyaksa-fc-penalti-gagal-bikin-psps-pekanbaru-bawa-pulang-satu-poin.html',
    },
    {
      id: 3,
      category: 'Laporan Pertandingan',
      badgeColor: 'bg-blue-600',
      source: 'Riau Pos (Jawa Pos)',
      title: 'Tatsuhide Shimizu Cetak Gol Penalti Dingin, Adhyaksa FC Kejutkan Pemuncak Klasemen',
      excerpt: 'Gelandang serang asal Jepang Tatsuhide Shimizu mengeksekusi penalti klinis di menit 45+9 membawa Laskar Patriot unggul babak pertama dalam pertarungan intens Pegadaian Championship.',
      date: '31 Okt 2026',
      readTime: '2 Menit Baca',
      image: '/images/players/TATSUHIDE-SHIMIZU.jpeg',
      url: 'https://riaupos.jawapos.com/olahraga/2610310037/nyaris-menang-di-bekasi-psps-pekanbaru-berbagi-poin-dengan-adhyaksa-fc',
    },
    {
      id: 4,
      category: 'Persiapan Tim',
      badgeColor: 'bg-emerald-700',
      source: 'Pegadaian Championship',
      title: 'Fokus Pemulihan Fisik & Latihan Taktikal: Skuad Adhyaksa FC Siap Hadapi Jadwal Padat',
      excerpt: 'Artur Vieira dan barisan pemain utama menggelar sesi latihan transisi cepat serta manajemen kebugaran di Bekasi guna menjaga ritme persaingan di papan klasemen.',
      date: '2 Nov 2026',
      readTime: '3 Menit Baca',
      image: '/images/players/artur-vieira.jpeg',
      url: 'https://ileague.id/fixtures/index/PEGADAIAN_CHAMPIONSHIP_2026-27',
    },
  ];

  return (
    <section id="news" className="relative w-full scroll-mt-24 py-20 sm:py-28 bg-white dark:bg-[#09120c] text-slate-900 dark:text-white border-b border-slate-200 dark:border-white/10 transition-colors overflow-hidden">
      
      {/* Background Graphic Energy Slashes */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-20 dark:opacity-40">
        <div className="absolute bottom-10 right-0 w-[550px] h-[550px] bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-default relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200 dark:border-white/10 mb-12 sm:mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-extrabold uppercase tracking-wider mb-3">
              <Newspaper size={16} weight="fill" />
              <span>Berita Terkini & Media Resmi</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-3">
              <span>Berita</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-500 dark:from-emerald-400 dark:via-emerald-300 dark:to-green-300">
                Adhyaksa FC
              </span>
            </h2>
          </div>

          <div className="flex flex-col sm:items-end gap-1.5">
            <div className="inline-flex items-center gap-1.5 text-xs text-emerald-700 dark:text-emerald-400 font-bold uppercase tracking-wider">
              <ShieldCheck size={16} weight="bold" />
              <span>Informasi Terverifikasi Seminggu Terakhir</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Laporan pertandingan, evaluasi tim, dan agenda dari Stadion Patriot Candrabhaga
            </p>
          </div>
        </div>

        {/* Dynamic Sports Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Featured Editorial Card (Left Column) */}
          <a
            href={newsItems[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="lg:col-span-7 group rounded-3xl bg-slate-50 dark:bg-[#112018] border-2 border-slate-200/80 dark:border-white/10 overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.06)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.6)] hover:border-emerald-500 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between cursor-pointer"
          >
            {/* Visual Cover Header */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-slate-900">
              <img
                src={newsItems[0].image}
                alt={newsItems[0].title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              {/* Badges on Visual */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <span className="px-3.5 py-1.5 rounded-full bg-emerald-600 text-white font-extrabold text-[11px] uppercase tracking-wider shadow-md">
                  {newsItems[0].category}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-300 font-bold text-[10px] uppercase tracking-wider border border-white/10">
                  {newsItems[0].source}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center gap-4 text-xs text-slate-300">
                <span className="flex items-center gap-1.5 font-semibold">
                  <CalendarBlank size={15} className="text-amber-400" />
                  {newsItems[0].date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 font-semibold">
                  <Clock size={15} className="text-emerald-400" />
                  {newsItems[0].readTime}
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-7 sm:p-9 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-heading text-2xl sm:text-3xl uppercase tracking-wider text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-tight mb-4">
                  {newsItems[0].title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {newsItems[0].excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                  <span>Liputan Utama Resmi</span>
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 group-hover:translate-x-1 transition-all">
                  <span>Buka Artikel Sumber</span>
                  <ArrowSquareOut size={15} weight="bold" />
                </span>
              </div>
            </div>
          </a>

          {/* Secondary Editorial Cards (Right Column) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {newsItems.slice(1).map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl bg-slate-50 dark:bg-[#112018] border-2 border-slate-200/80 dark:border-white/10 p-4 sm:p-5 hover:border-emerald-500 hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row gap-3.5 sm:gap-4 items-stretch cursor-pointer"
              >
                {/* Thumbnail if present */}
                {item.image && (
                  <div className="relative w-full h-40 sm:w-28 sm:h-auto flex-shrink-0 rounded-xl overflow-hidden bg-slate-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                  </div>
                )}

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-1.5">
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 text-[10px] font-extrabold uppercase tracking-wider">
                          {item.category}
                        </span>
                        <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase">
                          • {item.source}
                        </span>
                      </div>
                      <span className="text-slate-500 dark:text-slate-400 text-[11px] font-semibold flex items-center gap-1">
                        <Clock size={13} />
                        {item.readTime}
                      </span>
                    </div>

                    <h4 className="font-heading text-base sm:text-lg uppercase tracking-wider leading-snug text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors mb-2 line-clamp-2">
                      {item.title}
                    </h4>

                    <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed line-clamp-2 mb-3">
                      {item.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-200/60 dark:border-white/5 text-[11px] text-slate-500 dark:text-slate-400 font-semibold">
                    <span>{item.date}</span>
                    <span className="text-emerald-700 dark:text-emerald-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-bold">
                      <span>Baca Sumber</span>
                      <ArrowRight size={12} weight="bold" />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
