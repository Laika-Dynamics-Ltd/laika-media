import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative text-center py-20 md:py-40">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block relative mb-8">
            <Image
              src="/laika-bot.png"
              alt="Laika Bot"
              width={120}
              height={120}
              className="w-30 h-30"
              priority
            />
            <div 
              className="absolute inset-0 bg-primary-500 rounded-full blur-2xl opacity-30"
              style={{ animation: 'pulse 2s infinite' }}
            ></div>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
            Next-Generation Media Content
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 mb-10 max-w-2xl mx-auto">
            Experience video production and media that inspires, educates, and entertains. 
            Join our community of creators and learners.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#episodes" className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Explore Episodes
            </a>
            <a href="#subscribe" className="bg-neutral-800 hover:bg-neutral-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Subscribe
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 