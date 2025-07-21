import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-secondary-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-accent-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Hero Content */}
          <div className="mb-12">
            <div className="mb-8">
              <Image
                src="/laika-bot.svg"
                alt="Laika Bot"
                width={140}
                height={140}
                className="mx-auto mb-8 w-35 h-35 animate-float"
                priority
              />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold text-primary-900 mb-6 leading-tight">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Laika Media
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-700 mb-8 leading-relaxed max-w-3xl mx-auto">
              Professional video production and media content that inspires, educates, and entertains. 
              Join our community of creators and learners.
            </p>

            {/* Stats */}
            <div className="flex justify-center space-x-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-primary-600">50+</div>
                <div className="text-primary-700">Episodes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-secondary-600">10K+</div>
                <div className="text-primary-700">Viewers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-accent-600">24/7</div>
                <div className="text-primary-700">Support</div>
              </div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#episodes"
              className="group bg-primary-600 hover:bg-primary-700 text-white font-medium py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span className="flex items-center justify-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>Watch Episodes</span>
              </span>
            </a>
            <a
              href="#subscribe"
              className="group border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-medium py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              <span className="flex items-center justify-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                <span>Subscribe Now</span>
              </span>
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-primary-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
} 