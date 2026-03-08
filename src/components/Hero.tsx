export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-20 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-red-700 opacity-95"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: 'url(https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.15
      }}></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl text-white">
          <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-lg mb-6 text-sm font-semibold">
            REAL ESTATE INVESTMENTS
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Building Wealth Through Strategic Investments
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed">
            Adim & Family Investment Ltd provides innovative financial solutions and investment opportunities in real estate, asset management, and business development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToContact}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition transform hover:scale-105"
            >
              Get Started
            </button>
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition"
            >
              Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
