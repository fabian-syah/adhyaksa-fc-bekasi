"use client";

import React, { useState } from 'react';
import { Ticket, CheckCircle, ShoppingCart } from '@phosphor-icons/react';

export default function TicketSection() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [ticketCount, setTicketCount] = useState<number>(1);
  const [isBooked, setIsBooked] = useState<boolean>(false);

  const ticketTiers = [
    {
      id: 'vip-utama',
      name: 'VIP Utama Barat',
      price: 100000,
      formattedPrice: 'Rp 100.000',
      desc: 'Akses pintu utama barat, kursi empuk beratap, view sentral lapangan, dan snack box.',
      badge: 'Eksklusif',
    },
    {
      id: 'vip-sayap',
      name: 'VIP Sayap Barat',
      price: 75000,
      formattedPrice: 'Rp 75.000',
      desc: 'Tribun barat beratap dengan pandangan luas ke seluruh area pertandingan.',
      badge: 'Terpopuler',
    },
    {
      id: 'reguler-timur',
      name: 'Reguler Timur',
      price: 50000,
      formattedPrice: 'Rp 50.000',
      desc: 'Tribun timur terbuka dengan atmosfer dukungan suporter yang bergemuruh.',
      badge: 'Favorit',
    },
    {
      id: 'tribun-suporter',
      name: 'Tribun Suporter',
      price: 35000,
      formattedPrice: 'Rp 35.000',
      desc: 'Tribun utara & selatan khusus suporter fanatik dengan chants sepanjang 90 menit.',
      badge: 'Suporter',
    },
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTier) return;
    setIsBooked(true);
  };

  return (
    <section id="tickets" className="w-full bg-[#06100b] py-20 sm:py-24 border-b border-white/10 text-white relative">
      <div className="container-default">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
              <Ticket size={16} weight="fill" />
              Tiket Resmi Laga Kandang
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading text-white uppercase tracking-wider">
              Pesan <span className="text-emerald-400">Tiket Laga</span>
            </h2>
          </div>
          <div className="text-xs text-white/60">
            Adhyaksa FC vs Persiku Kudus • Stadion Patriot Candrabhaga
          </div>
        </div>

        {/* Ticket Tiers Grid (Rounded-3xl Modern Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {ticketTiers.map((tier) => (
            <div
              key={tier.id}
              className={`p-7 rounded-3xl border flex flex-col justify-between transition-all duration-300 ${
                selectedTier === tier.id
                  ? 'bg-gradient-to-b from-[#143423] to-[#0a1e14] border-amber-400 shadow-[0_12px_35px_rgba(245,158,11,0.25)] scale-[1.02]'
                  : 'bg-gradient-to-b from-[#0e2217]/80 to-[#06100b]/90 border-white/10 hover:border-emerald-400/50 shadow-xl'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-black/40 text-amber-400 border border-amber-400/30">
                    {tier.badge}
                  </span>
                  <Ticket size={20} className="text-white/40" />
                </div>

                <h3 className="font-heading text-xl uppercase tracking-wider text-white mb-2">
                  {tier.name}
                </h3>

                <div className="font-heading text-3xl text-emerald-400 mb-4 tabular-nums">
                  {tier.formattedPrice}
                </div>

                <p className="text-xs text-white/65 leading-relaxed mb-6">
                  {tier.desc}
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setSelectedTier(tier.id);
                  setIsBooked(false);
                }}
                className={`w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  selectedTier === tier.id
                    ? 'btn-gold'
                    : 'bg-white/10 hover:bg-emerald-600 text-white'
                }`}
              >
                {selectedTier === tier.id ? 'Kategori Terpilih' : 'Pilih Kategori'}
              </button>
            </div>
          ))}
        </div>

        {/* Booking Interactive Panel */}
        {selectedTier && (
          <div className="rounded-3xl bg-gradient-to-b from-[#10291d]/95 via-[#0b1c13]/95 to-[#050e09] border border-amber-400/50 p-8 sm:p-10 max-w-2xl mx-auto shadow-2xl backdrop-blur-2xl">
            {!isBooked ? (
              <form onSubmit={handleBooking} className="space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <span className="text-xs text-amber-400 font-bold uppercase tracking-wider block mb-1">
                      Kategori yang Dipilih
                    </span>
                    <h4 className="font-heading text-2xl sm:text-3xl text-white uppercase tracking-wider">
                      {ticketTiers.find((t) => t.id === selectedTier)?.name}
                    </h4>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-white/50 block mb-1">Harga Satuan</span>
                    <span className="font-heading text-2xl text-emerald-400 tabular-nums">
                      {ticketTiers.find((t) => t.id === selectedTier)?.formattedPrice}
                    </span>
                  </div>
                </div>

                {/* Quantity Pill Selector */}
                <div className="flex items-center justify-between">
                  <label htmlFor="ticket-quantity" className="text-xs font-bold uppercase tracking-wider text-white/80">
                    Jumlah Tiket:
                  </label>
                  <div className="flex items-center gap-3 bg-black/50 p-1.5 rounded-full border border-white/15">
                    <button
                      type="button"
                      id="ticket-quantity"
                      onClick={() => setTicketCount(Math.max(1, ticketCount - 1))}
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold flex items-center justify-center transition-colors cursor-pointer"
                    >
                      -
                    </button>
                    <span className="font-heading text-xl text-white w-8 text-center tabular-nums">
                      {ticketCount}
                    </span>
                    <button
                      type="button"
                      onClick={() => setTicketCount(Math.min(5, ticketCount + 1))}
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold flex items-center justify-center transition-colors cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Total */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-sm font-bold uppercase tracking-wider text-white/70">
                    Total Pembayaran:
                  </span>
                  <span className="font-heading text-3xl text-amber-400 tabular-nums">
                    Rp {((ticketTiers.find((t) => t.id === selectedTier)?.price ?? 0) * ticketCount).toLocaleString('id-ID')}
                  </span>
                </div>

                <button
                  type="submit"
                  className="btn-gold w-full text-center py-4 text-sm uppercase font-bold justify-center"
                >
                  <ShoppingCart size={18} weight="bold" />
                  <span>Konfirmasi & Lanjutkan Pembayaran</span>
                </button>
              </form>
            ) : (
              <div className="text-center py-6 space-y-4">
                <CheckCircle size={52} weight="fill" className="text-emerald-400 mx-auto drop-shadow-md" />
                <h4 className="font-heading text-2xl sm:text-3xl text-white uppercase tracking-wider">
                  Reservasi Tiket Berhasil Didaftarkan
                </h4>
                <p className="text-xs sm:text-sm text-white/70 max-w-md mx-auto leading-relaxed">
                  Pesanan untuk {ticketCount} tiket {ticketTiers.find((t) => t.id === selectedTier)?.name} telah tersimpan. Barcode e-ticket akan dikirimkan langsung ke kontak Anda.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsBooked(false);
                    setSelectedTier(null);
                  }}
                  className="btn-outline text-xs py-2.5 px-6 rounded-full"
                >
                  Pesan Kategori Lain
                </button>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
}