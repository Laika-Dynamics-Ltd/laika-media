import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeatureGrid from '@/components/FeatureGrid';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import YouTubeEmbed from '@/components/YouTubeEmbed';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeatureGrid />

      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-12 text-foreground">
            Featured Video
          </h2>
          <div className="max-w-4xl mx-auto">
            <YouTubeEmbed videoId="_y5_4_J_7_Y" title="Next.js 13 App Router Crash Course" />
          </div>
        </div>
      </section>

      <CallToAction />
      <Footer />
    </div>
  );
}