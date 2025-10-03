const ProblemSection = () => {
  const challenges = [
    {
      icon: "📦",
      title: "No Return Trips",
      description:
        "Once on Mars, there's no sending waste back to Earth. Everything must be managed on-site.",
    },
    {
      icon: "🗑️",
      title: "No Landfills",
      description:
        "Mars has no infrastructure for waste disposal. Traditional waste management doesn't work.",
    },
    {
      icon: "🏠",
      title: "Cramped Habitats",
      description:
        "Accumulating trash creates clutter, health risks, and reduces living space in confined quarters.",
    },
    {
      icon: "💨",
      title: "Resource Scarcity",
      description:
        "Every gram of material is precious. Throwing away resources means throwing away survival.",
    },
  ];

  return (
    <section
      id="problem"
      className="py-20 bg-gradient-to-b from-slate-800 to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The <span className="text-red-400">Waste Crisis</span> on Mars
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Long-duration Mars missions face an unprecedented challenge: with no
            possibility of resupply from Earth, astronauts cannot afford to
            throw anything away. Every piece of packaging, every worn item,
            every scrap of material becomes a critical resource management
            problem.
          </p>
        </div>

        {/* Challenge Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-red-500/20 hover:border-red-500/40 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{challenge.icon}</div>
              <h3 className="text-xl font-semibold text-red-400 mb-3">
                {challenge.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>

        {/* Visual Representation */}
        <div className="bg-slate-800/30 rounded-2xl p-8 border border-orange-500/20">
          <h3 className="text-2xl font-bold text-center text-orange-400 mb-8">
            The Accumulation Problem
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-4 h-4 bg-red-500 rounded"></div>
                <span>Food packaging</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-4 h-4 bg-orange-500 rounded"></div>
                <span>Worn clothing & equipment</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                <span>Structural materials</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-4 h-4 bg-blue-500 rounded"></div>
                <span>Life support waste</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-4 h-4 bg-purple-500 rounded"></div>
                <span>Electronics & tools</span>
              </div>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-4">🏠</div>
              <div className="text-sm text-gray-400">Jezero Crater Habitat</div>
              <div className="mt-4 text-red-400 font-semibold">
                Result: Cluttered, inefficient, unsustainable
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-300 mb-6">
            But what if we could transform this challenge into our greatest
            advantage?
          </p>
          <div className="text-2xl text-green-400 font-bold">
            Waste In → Resources Out
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
