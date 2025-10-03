const MarsSection = () => {
  const marsFacts = [
    {
      icon: "🏞️",
      title: "Ancient River Delta",
      description:
        "Jezero Crater was once home to a flowing river system, providing evidence of past water activity",
    },
    {
      icon: "🔍",
      title: "Perseverance Landing Site",
      description:
        "NASA's Mars 2020 mission chose Jezero for its scientific potential and exploration opportunities",
    },
    {
      icon: "🧬",
      title: "Potential for Life",
      description:
        "The delta environment may have preserved signs of ancient microbial life in Martian history",
    },
    {
      icon: "⚡",
      title: "Perchlorate Challenge",
      description:
        "Mars soil contains toxic perchlorate salts that require special handling and processing",
    },
  ];

  return (
    <section
      id="mars"
      className="py-20 bg-gradient-to-b from-slate-800 to-red-900/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why <span className="text-red-400">Mars</span>? Why{" "}
            <span className="text-orange-400">Jezero Crater</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The Nature Capsule is specifically designed for Mars, and Jezero
            Crater represents the perfect location for sustainable human
            habitation and scientific discovery.
          </p>
        </div>

        {/* Mars Facts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {marsFacts.map((fact, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-red-500/20 hover:border-red-500/40 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="text-3xl">{fact.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-red-400 mb-3">
                    {fact.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {fact.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Jezero Crater Focus */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              The <span className="text-orange-400">Perfect Location</span>
            </h3>

            <div className="space-y-6">
              <div className="bg-red-900/30 rounded-lg p-6 border border-red-500/30">
                <h4 className="text-lg font-semibold text-red-400 mb-3">
                  Scientific Significance
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Jezero Crater&apos;s ancient delta provides unparalleled
                  opportunities to study Mars&apos; watery past and search for
                  signs of ancient life. The Nature Capsule supports these
                  missions by providing sustainable life support without
                  compromising the pristine scientific environment.
                </p>
              </div>

              <div className="bg-orange-900/30 rounded-lg p-6 border border-orange-500/30">
                <h4 className="text-lg font-semibold text-orange-400 mb-3">
                  Strategic Positioning
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Located in the northern hemisphere, Jezero offers optimal
                  conditions for solar power generation and temperature
                  management. The crater&apos;s rim provides natural protection
                  from dust storms and radiation while maintaining access to
                  diverse geological formations.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/30 rounded-2xl p-8 border border-orange-500/20">
            <h4 className="text-xl font-bold text-center text-orange-400 mb-6">
              Mission Timeline
            </h4>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div>
                  <div className="text-white font-semibold">
                    2021 - Perseverance Arrives
                  </div>
                  <div className="text-gray-400 text-sm">
                    First robotic exploration of Jezero Crater
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <div>
                  <div className="text-white font-semibold">
                    2030s - Sample Return
                  </div>
                  <div className="text-gray-400 text-sm">
                    Mars Sample Return mission collects samples
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <div>
                  <div className="text-white font-semibold">
                    2040s - Human Landing
                  </div>
                  <div className="text-gray-400 text-sm">
                    First human mission with Nature Capsule
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <div>
                  <div className="text-white font-semibold">
                    2050s - Permanent Base
                  </div>
                  <div className="text-gray-400 text-sm">
                    Sustainable human settlement established
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Long-term Vision */}
        <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-2xl p-8 border border-red-500/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Enabling <span className="text-orange-400">Decades-Long</span>{" "}
              Scientific Missions
            </h3>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              The Nature Capsule transforms Jezero Crater from a temporary
              exploration site into a permanent research station. Scientists can
              conduct years-long studies of Martian geology, climate, and
              potential biosignatures without the constraints of limited life
              support resources. This enables breakthrough discoveries that
              would be impossible with traditional mission architectures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarsSection;
