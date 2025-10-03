const ImpactSection = () => {
  const applications = [
    {
      icon: "🌙",
      title: "Lunar Bases",
      description:
        "Sustainable life support for long-term lunar settlements and mining operations",
    },
    {
      icon: "🛰️",
      title: "Space Stations",
      description:
        "Enhanced recycling systems for deep space habitats and orbital facilities",
    },
    {
      icon: "🌍",
      title: "Earth Applications",
      description:
        "Circular economy solutions for sustainable living and waste management on Earth",
    },
    {
      icon: "🚀",
      title: "Deep Space Missions",
      description:
        "Life support for multi-year missions to outer planets and interstellar travel",
    },
  ];

  const benefits = [
    {
      metric: "Decades-Long",
      label: "Mission Duration",
      description: "Enable missions lasting years without resupply from Earth",
    },
    {
      metric: "95%+",
      label: "Resource Recovery",
      description:
        "Transform nearly all waste into usable life support resources",
    },
    {
      metric: "Zero",
      label: "Environmental Impact",
      description:
        "No harmful emissions or contamination of planetary environments",
    },
    {
      metric: "Self-Sustaining",
      label: "Ecosystem",
      description:
        "Complete closed-loop system requiring minimal external inputs",
    },
  ];

  return (
    <section
      id="impact"
      className="py-20 bg-gradient-to-b from-slate-900 to-blue-900/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-green-400">Impact</span> &{" "}
            <span className="text-blue-400">Vision</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The Nature Capsule represents more than a Mars mission
            technology—it&apos;s a paradigm shift toward sustainable space
            exploration and a model for circular living that extends far beyond
            our planet.
          </p>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 text-center"
            >
              <div className="text-3xl font-bold text-green-400 mb-2">
                {benefit.metric}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {benefit.label}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Applications Beyond Mars */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-white mb-8">
            Applications Beyond Mars
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {applications.map((app, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{app.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-400 mb-2">
                      {app.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {app.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Statement */}
        <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-2xl p-8 mb-16 border border-green-500/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-6">
              A <span className="text-green-400">New Paradigm</span> for Space
              Exploration
            </h3>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6">
              The Nature Capsule challenges the traditional model of space
              exploration where every resource must be launched from Earth.
              Instead, it demonstrates how we can live sustainably in space by
              working with natural processes, not against them.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-green-400 mb-2">
                  Circular Economy
                </div>
                <div className="text-gray-300">
                  Waste becomes resources in an endless loop
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400 mb-2">
                  Bioregeneration
                </div>
                <div className="text-gray-300">
                  Living systems support human life
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-400 mb-2">
                  Self-Reliance
                </div>
                <div className="text-gray-300">
                  Independent of Earth resupply
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Future Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              The <span className="text-purple-400">Future</span> We&apos;re
              Building
            </h3>

            <div className="space-y-6">
              <div className="bg-purple-900/30 rounded-lg p-6 border border-purple-500/30">
                <h4 className="text-lg font-semibold text-purple-400 mb-3">
                  2030s: Proof of Concept
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Terrestrial prototypes demonstrate closed-loop life support
                  capabilities. International space station experiments validate
                  bioregenerative technologies.
                </p>
              </div>

              <div className="bg-blue-900/30 rounded-lg p-6 border border-blue-500/30">
                <h4 className="text-lg font-semibold text-blue-400 mb-3">
                  2040s: Mars Implementation
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  First human missions to Mars equipped with Nature Capsule
                  systems. Sustainable habitation at Jezero Crater enables
                  extended scientific missions.
                </p>
              </div>

              <div className="bg-green-900/30 rounded-lg p-6 border border-green-500/30">
                <h4 className="text-lg font-semibold text-green-400 mb-3">
                  2050s: Solar System Expansion
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Technology adapted for lunar bases, asteroid mining
                  operations, and deep space missions. Circular economy
                  principles revolutionize space exploration.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/30 rounded-2xl p-8 border border-purple-500/20">
            <h4 className="text-xl font-bold text-center text-purple-400 mb-6">
              Global Impact
            </h4>

            <div className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">
                  1 Billion+
                </div>
                <div className="text-gray-300">
                  People could benefit from Earth applications
                </div>
              </div>

              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  1000+
                </div>
                <div className="text-gray-300">
                  Scientists enabled for long-term Mars research
                </div>
              </div>

              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">∞</div>
                <div className="text-gray-300">
                  Possibilities for sustainable space exploration
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-900/50 to-blue-900/50 rounded-2xl p-8 border border-green-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Join the <span className="text-green-400">Revolution</span>
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              The future of sustainable space exploration starts with
              reimagining how we handle resources. The Nature Capsule proves
              that on Mars—and everywhere else—nothing is wasted.
            </p>
            <div className="text-2xl text-green-400 font-bold">
              From trash to triumph. From waste to wonder.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
