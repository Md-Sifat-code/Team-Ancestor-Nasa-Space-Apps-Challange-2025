const SustainabilitySection = () => {
  const safetyFeatures = [
    {
      icon: "🚫",
      title: "Zero Incineration",
      description:
        "No open burning or harmful emissions. All processing is contained and controlled.",
    },
    {
      icon: "🧪",
      title: "No Microplastics",
      description:
        "Complete breakdown of plastic materials prevents environmental contamination.",
    },
    {
      icon: "⚠️",
      title: "No PFAS",
      description:
        "Elimination of forever chemicals that could contaminate the Martian environment.",
    },
    {
      icon: "🛡️",
      title: "Perchlorate Safety",
      description:
        "Iron oxide catalysts safely remove toxic salts from Mars soil and materials.",
    },
  ];

  const efficiencyMetrics = [
    { label: "Energy Recovery", value: 95, color: "bg-green-500" },
    { label: "Water Recycling", value: 98, color: "bg-blue-500" },
    { label: "Material Recovery", value: 92, color: "bg-orange-500" },
    { label: "CO₂ Utilization", value: 99, color: "bg-purple-500" },
  ];

  return (
    <section
      id="sustainability"
      className="py-20 bg-gradient-to-b from-red-900/20 to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-green-400">Sustainability</span> &{" "}
            <span className="text-blue-400">Safety</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The Nature Capsule prioritizes environmental protection and crew
            safety through innovative design and rigorous safety protocols.
            Every process is designed to minimize harm and maximize benefit.
          </p>
        </div>

        {/* Safety Features */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-white mb-8">
            Environmental Protection
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {safetyFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-green-500/20 hover:border-green-500/40 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{feature.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-green-400 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Efficiency Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              System <span className="text-blue-400">Efficiency</span>
            </h3>

            <div className="space-y-6">
              {efficiencyMetrics.map((metric, index) => (
                <div key={index} className="bg-slate-800/30 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 font-medium">
                      {metric.label}
                    </span>
                    <span className="text-white font-bold">
                      {metric.value}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div
                      className={`${metric.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${metric.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/30 rounded-2xl p-8 border border-blue-500/20">
            <h4 className="text-xl font-bold text-center text-blue-400 mb-6">
              Thermal Integration
            </h4>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Heat Recovery</span>
                <span className="text-green-400 font-semibold">90%+</span>
              </div>
              <div className="text-sm text-gray-400 text-center">
                Waste heat from processing is captured and redistributed
                throughout the habitat
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-300">Energy Storage</span>
                <span className="text-blue-400 font-semibold">24/7</span>
              </div>
              <div className="text-sm text-gray-400 text-center">
                Thermal batteries provide continuous energy for life support
                systems
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-300">Automation Level</span>
                <span className="text-orange-400 font-semibold">95%</span>
              </div>
              <div className="text-sm text-gray-400 text-center">
                Minimal crew intervention required for continuous operation
              </div>
            </div>
          </div>
        </div>

        {/* Water Management */}
        <div className="bg-gradient-to-r from-blue-900/30 to-green-900/30 rounded-2xl p-8 mb-16 border border-blue-500/20">
          <h3 className="text-2xl font-bold text-center text-blue-400 mb-6">
            Advanced Water Management
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">💧</div>
              <h4 className="text-lg font-semibold text-white mb-2">
                Condensation Recovery
              </h4>
              <p className="text-gray-300 text-sm">
                Capture water vapor from all biological processes
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">🔄</div>
              <h4 className="text-lg font-semibold text-white mb-2">
                Closed-Loop Recycling
              </h4>
              <p className="text-gray-300 text-sm">
                98% water recovery through advanced filtration
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">🧪</div>
              <h4 className="text-lg font-semibold text-white mb-2">
                Quality Assurance
              </h4>
              <p className="text-gray-300 text-sm">
                Continuous monitoring ensures potable water standards
              </p>
            </div>
          </div>
        </div>

        {/* Safety Protocols */}
        <div className="bg-slate-800/30 rounded-2xl p-8 border border-orange-500/20">
          <h3 className="text-2xl font-bold text-center text-orange-400 mb-6">
            Safety & Reliability
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Redundancy Systems
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>Multiple backup processing units</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>Independent life support systems</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>Emergency shutdown protocols</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>Real-time monitoring and alerts</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Environmental Compliance
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>Zero contamination protocols</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>Mars environmental protection standards</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>Biosecurity measures</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>Waste minimization principles</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
