import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MatchCenter from '@/components/MatchCenter';
import Standings from '@/components/Standings';
import SquadShowcase from '@/components/SquadShowcase';
import StadiumShowcase from '@/components/StadiumShowcase';
import ClubNews from '@/components/ClubNews';
import SponsorsShowcase from '@/components/SponsorsShowcase';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Adhyaksa FC Bekasi | Website Resmi Klub Sepak Bola',
  description: 'Website resmi Adhyaksa FC Bekasi. Berita terbaru, jadwal dan hasil pertandingan Pegadaian Championship, klasemen liga, profil skuad tim utama, markas Stadion Patriot Candrabhaga, dan sponsor resmi klub.',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-afc-base text-afc-main flex flex-col selection:bg-emerald-500 selection:text-white">
      <Header />
      <Hero />
      <MatchCenter />
      <Standings />
      <SquadShowcase />
      <StadiumShowcase />
      <ClubNews />
      <SponsorsShowcase />
      <Footer />
    </main>
  );
}