import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MatchTicker from '@/components/MatchTicker';
import SquadShowcase from '@/components/SquadShowcase';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Adhyaksa FC Bekasi | Official Website',
  description: 'The official home of Adhyaksa FC Bekasi. United by passion, driven by glory. Get the latest match updates, tickets, and official merchandise.',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />
      <Hero />
      <MatchTicker />
      <SquadShowcase />
      <Footer />
    </main>
  );
}
