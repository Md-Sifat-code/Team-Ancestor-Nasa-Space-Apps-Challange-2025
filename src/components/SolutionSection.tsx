const SolutionSection = () => {
  const processSteps = [
    {
      step: "01",
      title: "Waste Collection",
      description:
        "Automated collection of all organic and inorganic materials",
      icon: "📦",
    },
    {
      step: "02",
      title: "Sorting & Drying",
      description: "Intelligent separation and moisture removal",
      icon: "🔍",
    },
    {
      step: "03",
      title: "Conversion to CO₂",
      description: "Catalytic oxidation and plasma gasification process",
      icon: "🔥",
    },
    {
      step: "04",
      title: "Gas Purification",
      description: "Clean CO₂ extraction for biological systems",
      icon: "💨",
    },
    {
      step: "05",
      title: "CO₂ Storage",
      description: "Controlled storage for steady biological consumption",
      icon: "🗄️",
    },
    {
      step: "06",
      title: "Bioregeneration",
      description: "Algae, duckweed, and crops convert CO₂ to oxygen and food",
      icon: "🌱",
    },
    {
      step: "07",
      title: "Food Harvesting",
      description: "Automated collection of nutritious biomass",
      icon: "🍃",
    },
    {
      step: "08",
      title: "Metal & Glass Recycling",
      description: "Perchlorate-safe recovery of structural materials",
      icon: "♻️",
    },
    {
      step: "09",
      title: "Heat Recovery",
      description: "Thermal energy capture and redistribution",
      icon: "🌡️",
    },
    {
      step: "10",
      title: "Automation & Safety",
      description: "Continuous monitoring with minimal crew oversight",
      icon: "🤖",
    },
  ];

  return (
    <section
      id="solution"
      className="py-20 bg-gradient-to-b from-slate-900 to-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The <span className="text-green-400">Solution</span>: How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The Nature Capsule transforms waste into life through a
            revolutionary 10-stage closed-loop process. This isn&apos;t
            traditional recycling—it&apos;s biological regeneration.
          </p>
        </div>

        {/* Process Overview */}
        <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-2xl p-8 mb-16 border border-green-500/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-green-400 mb-4">
              Closed-Loop Design
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-4 text-lg">
              <span className="bg-red-500/20 px-4 py-2 rounded-full text-red-300">
                Waste In
              </span>
              <span className="text-orange-400">→</span>
              <span className="bg-blue-500/20 px-4 py-2 rounded-full text-blue-300">
                Processing
              </span>
              <span className="text-orange-400">→</span>
              <span className="bg-green-500/20 px-4 py-2 rounded-full text-green-300">
                Resources Out
              </span>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className="text-2xl mr-3">{step.icon}</div>
                <div className="text-sm font-bold text-green-400 bg-green-500/20 px-2 py-1 rounded">
                  STEP {step.step}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Key Technologies */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Revolutionary{" "}
              <span className="text-orange-400">Technologies</span>
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-2xl">🔥</div>
                <div>
                  <h4 className="text-lg font-semibold text-orange-400 mb-2">
                    Catalytic Oxidation
                  </h4>
                  <p className="text-gray-300">
                    Safely breaks down organic waste into CO₂ without harmful
                    emissions
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-2xl">⚡</div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-400 mb-2">
                    Plasma Gasification
                  </h4>
                  <p className="text-gray-300">
                    Ultra-high temperature processing for complete material
                    breakdown
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-2xl">🌱</div>
                <div>
                  <h4 className="text-lg font-semibold text-green-400 mb-2">
                    Bioregenerative Systems
                  </h4>
                  <p className="text-gray-300">
                    Microalgae, duckweed, and hydroponic farms turn CO₂ into
                    life
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-2xl">🛡️</div>
                <div>
                  <h4 className="text-lg font-semibold text-purple-400 mb-2">
                    Perchlorate Safety
                  </h4>
                  <p className="text-gray-300">
                    Iron oxide catalysts remove toxic Martian soil contaminants
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/30 rounded-2xl p-8 border border-orange-500/20">
            <h4 className="text-xl font-bold text-center text-orange-400 mb-6">
              System Efficiency
            </h4>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Daily Crew Time</span>
                <span className="text-green-400 font-semibold">
                  &lt; 30 minutes
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: "10%" }}
                ></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-300">Waste Recovery Rate</span>
                <span className="text-green-400 font-semibold">95%+</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: "95%" }}
                ></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-300">Energy Efficiency</span>
                <span className="text-green-400 font-semibold">90%+</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-900/50 to-blue-900/50 rounded-2xl p-8 border border-green-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              More than technology.{" "}
              <span className="text-green-400">
                It&apos;s how we build a future.
              </span>
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              On Mars, nothing is wasted. Every piece of trash becomes the
              foundation of survival.
            </p>
            <div className="text-3xl text-green-400 font-bold">
              From the trash up.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
