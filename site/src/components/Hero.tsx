import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20 min-h-screen flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-accent-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-2 h-2 bg-primary-300 rounded-full animate-float" style={{ left: '10%', top: '20%', animationDelay: '0s', animationDuration: '3s' }} />
        <div className="absolute w-2 h-2 bg-secondary-300 rounded-full animate-float" style={{ left: '80%', top: '30%', animationDelay: '1s', animationDuration: '4s' }} />
        <div className="absolute w-2 h-2 bg-accent-300 rounded-full animate-float" style={{ left: '60%', top: '70%', animationDelay: '2s', animationDuration: '3.5s' }} />
        <div className="absolute w-2 h-2 bg-primary-300 rounded-full animate-float" style={{ left: '20%', top: '80%', animationDelay: '0.5s', animationDuration: '4.5s' }} />
        <div className="absolute w-2 h-2 bg-secondary-300 rounded-full animate-float" style={{ left: '90%', top: '60%', animationDelay: '1.5s', animationDuration: '3s' }} />
        <div className="absolute w-2 h-2 bg-accent-300 rounded-full animate-float" style={{ left: '40%', top: '10%', animationDelay: '2.5s', animationDuration: '4s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main Hero Content */}
          <div className="mb-12">
            <div className="mb-8 relative">
              <div className="relative inline-block">
                <Image
                  src="/laika-bot-logo.svg"
                  alt="Laika Bot"
                  width={160}
                  height={160}
                  className="mx-auto mb-8 w-40 h-40 animate-float drop-shadow-2xl"
                  priority
                />
                {/* Glow effect */}
                <div className="absolute inset-0 w-40 h-40 bg-primary-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-display font-bold text-primary-900 mb-6 leading-tight">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent animate-pulse">
                Laika Media
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-700 mb-8 leading-relaxed max-w-4xl mx-auto font-light">
              Professional video production and media content that inspires, educates, and entertains. 
              Join our community of creators and learners.
            </p>

            {/* Animated Stats */}
            <div className="flex justify-center space-x-12 mb-12">
              <div className="text-center transform hover:scale-110 transition-transform duration-300">
                <div className="text-4xl font-display font-bold text-primary-600 mb-2">50+</div>
                <div className="text-primary-700 font-medium">Episodes</div>
              </div>
              <div className="text-center transform hover:scale-110 transition-transform duration-300">
                <div className="text-4xl font-display font-bold text-secondary-600 mb-2">10K+</div>
                <div className="text-primary-700 font-medium">Viewers</div>
              </div>
              <div className="text-center transform hover:scale-110 transition-transform duration-300">
                <div className="text-4xl font-display font-bold text-accent-600 mb-2">24/7</div>
                <div className="text-primary-700 font-medium">Support</div>
              </div>
            </div>
          </div>

          {/* Enhanced Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a
              href="#episodes"
              className="group bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold py-5 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <span className="flex items-center justify-center space-x-3">
                <svg className="w-6 h-6 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span className="text-lg">Watch Episodes</span>
              </span>
            </a>
            <a
              href="#subscribe"
              className="group border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold py-5 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span className="flex items-center justify-center space-x-3">
                <svg className="w-6 h-6 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                <span className="text-lg">Subscribe Now</span>
              </span>
            </a>
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className="animate-bounce">
            <div className="flex flex-col items-center space-y-2">
              <span className="text-primary-600 text-sm font-medium">Scroll to explore</span>
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 