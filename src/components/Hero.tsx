import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-red-900/20 to-slate-900">
        <div className="absolute inset-0 opacity-40">
          <div
            className="w-full h-full bg-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-white">Turning</span>{" "}
            <span className="text-red-400">Trash</span>{" "}
            <span className="text-white">into</span>{" "}
            <span className="text-green-400">Life</span>{" "}
            <span className="text-white">on</span>{" "}
            <span className="text-orange-400">Mars</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            The Nature Capsule: A revolutionary closed-loop bioregenerative life
            support system that transforms waste into oxygen, food, water, and
            materials for sustainable human habitation on Mars.
          </p>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-orange-500/20">
              <div className="text-3xl mb-3">🌱</div>
              <h3 className="text-lg font-semibold text-green-400 mb-2">
                Bioregenerative
              </h3>
              <p className="text-gray-300 text-sm">
                Organic waste becomes oxygen and food through photosynthesis
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-orange-500/20">
              <div className="text-3xl mb-3">♻️</div>
              <h3 className="text-lg font-semibold text-blue-400 mb-2">
                Closed-Loop
              </h3>
              <p className="text-gray-300 text-sm">
                Zero waste, maximum efficiency, sustainable resource cycling
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-orange-500/20">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-lg font-semibold text-orange-400 mb-2">
                Mars-Ready
              </h3>
              <p className="text-gray-300 text-sm">
                Designed for Jezero Crater, no Earth resupply needed
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Link
              href="#solution"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Explore the Technology
            </Link>
            <Link
              href="#impact"
              className="border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              See the Vision
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-orange-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-orange-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
