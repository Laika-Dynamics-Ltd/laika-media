import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-900 mb-6">
              Why Choose Laika Media?
            </h2>
            <p className="text-xl text-primary-700 max-w-3xl mx-auto">
              We combine cutting-edge technology with creative storytelling to deliver content that matters.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl border border-primary-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-semibold text-primary-900 mb-4">
                High Quality Content
              </h3>
              <p className="text-primary-700 leading-relaxed">
                Professional-grade video production with cutting-edge technology and creative storytelling that captivates audiences.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-2xl border border-secondary-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-secondary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-semibold text-secondary-900 mb-4">
                Educational Value
              </h3>
              <p className="text-secondary-700 leading-relaxed">
                Content designed to educate and inspire, covering topics that matter to our community and drive meaningful conversations.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-accent-50 to-accent-100 rounded-2xl border border-accent-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-semibold text-accent-900 mb-4">
                Community Focus
              </h3>
              <p className="text-accent-700 leading-relaxed">
                Building a vibrant community around shared interests and meaningful conversations that bring people together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of viewers who are already learning and growing with Laika Media.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#episodes"
              className="bg-white text-primary-600 hover:bg-primary-50 font-medium py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Browse Episodes
            </a>
            <a
              href="#subscribe"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Subscribe Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
