# ⚽ Adhyaksa FC Bekasi

Situs resmi klub sepak bola Adhyaksa FC Bekasi — profil tim, skuad, jadwal pertandingan, statistik, dan etalase merchandise. Dibangun dengan Next.js App Router dan Tailwind CSS v4, dengan dukungan mode gelap/terang.

---

## ✨ Fitur

- **Hero & identitas klub** — bagian pembuka dengan visual klub.
- **Match ticker** — bilah berjalan berisi jadwal/skor pertandingan terkini.
- **Statistik tim** — ringkasan performa dan angka penting klub.
- **Skuad (Squad Showcase)** — galeri pemain dengan kartu profil.
- **Etalase merchandise** — teaser produk resmi klub.
- **Mode gelap/terang** — tema bisa diganti pengguna, tersimpan sebagai preferensi.
- **Animasi halus** — transisi dan efek scroll memakai Framer Motion.
- **Responsif** — tata letak menyesuaikan ponsel, tablet, dan desktop.

## 🧰 Teknologi

| Lapisan | Teknologi |
|---|---|
| Framework | Next.js 16 (App Router), React 19, TypeScript |
| Styling | Tailwind CSS v4 dengan token design system kustom |
| Ikon | Phosphor Icons (`@phosphor-icons/react`) |
| Animasi | Framer Motion |
| Tema | `next-themes` |
| Lint | ESLint (`eslint-config-next`) |

## 🚀 Cara Menjalankan Lokal

```bash
# 1. Clone
git clone https://github.com/fabian-syah/adhyaksa-fc-bekasi.git
cd adhyaksa-fc-bekasi

# 2. Pasang dependensi
npm install

# 3. Jalankan server pengembangan
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

### Skrip tersedia

| Perintah | Fungsi |
|---|---|
| `npm run dev` | Server pengembangan |
| `npm run build` | Build produksi |
| `npm run start` | Menjalankan hasil build |
| `npm run lint` | Menjalankan ESLint |

## 📁 Struktur Proyek

| Lokasi | Isi |
|---|---|
| `src/app/` | Routing utama (`page.tsx`, `layout.tsx`) dan gaya global dengan token design system |
| `src/components/Hero.tsx` | Bagian pembuka halaman |
| `src/components/MatchTicker.tsx` | Bilah jadwal/skor pertandingan |
| `src/components/Ticker.tsx` | Komponen ticker generik |
| `src/components/Statistics.tsx` | Statistik tim |
| `src/components/SquadShowcase.tsx` | Galeri skuad pemain |
| `src/components/ShopTeaser.tsx` | Etalase merchandise |
| `src/components/Header.tsx` / `Footer.tsx` | Navigasi dan footer |
| `src/components/ThemeProvider.tsx` | Penyedia tema gelap/terang |
| `public/` | Aset statis (logo, gambar pemain, produk) |

## 🎨 Kustomisasi

Token desain (warna, tipografi, radius) didefinisikan di `src/app/globals.css` sebagai variabel CSS, sehingga tema klub bisa diubah dari satu tempat tanpa menyentuh komponen.

## 🗺️ Rencana Pengembangan

- [ ] Data pertandingan & skor dari sumber dinamis (CMS/API)
- [ ] Profil pemain lengkap dengan halaman detail
- [ ] Katalog merchandise dengan keranjang
- [ ] Berita & artikel klub
- [ ] Optimasi SEO (metadata per halaman, sitemap, Open Graph)

## 📄 Lisensi

MIT
