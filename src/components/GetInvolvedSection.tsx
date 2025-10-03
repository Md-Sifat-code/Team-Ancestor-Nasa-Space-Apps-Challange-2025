const GetInvolvedSection = () => {
  const collaborationPartners = [
    {
      name: "NASA",
      description: "Marshall Space Flight Center research collaboration",
    },
    { name: "ISRO", description: "International space research partnerships" },
    {
      name: "SpaceX",
      description: "Mission architecture and launch vehicle integration",
    },
    {
      name: "Academic Partners",
      description: "University research and development programs",
    },
  ];

  const roles = [
    {
      icon: "🔬",
      title: "Scientists",
      description:
        "Contribute to bioregenerative research and Mars mission planning",
      skills: [
        "Biology",
        "Chemistry",
        "Planetary Science",
        "Environmental Engineering",
      ],
    },
    {
      icon: "⚙️",
      title: "Engineers",
      description: "Design and optimize closed-loop systems and automation",
      skills: [
        "Systems Engineering",
        "Mechanical Design",
        "Process Control",
        "Materials Science",
      ],
    },
    {
      icon: "🎨",
      title: "Designers",
      description: "Create user interfaces and habitat integration solutions",
      skills: [
        "UX/UI Design",
        "Industrial Design",
        "Human Factors",
        "Visual Communication",
      ],
    },
    {
      icon: "📚",
      title: "Educators",
      description:
        "Develop educational content and inspire the next generation",
      skills: [
        "Curriculum Development",
        "Science Communication",
        "Public Outreach",
        "Student Engagement",
      ],
    },
  ];

  const resources = [
    {
      title: "Technical Documentation",
      description: "Detailed system specifications and performance data",
      link: "#",
    },
    {
      title: "Research Papers",
      description: "Peer-reviewed publications on bioregenerative life support",
      link: "#",
    },
    {
      title: "Prototype Videos",
      description: "Demonstration videos of system components in action",
      link: "#",
    },
    {
      title: "Collaboration Portal",
      description: "Join our community and contribute to the project",
      link: "#",
    },
  ];

  return (
    <section
      id="involved"
      className="py-20 bg-gradient-to-b from-blue-900/20 to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get <span className="text-orange-400">Involved</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The Nature Capsule is an open collaboration project inspired by NASA
            research and developed through partnerships with leading space
            agencies and academic institutions worldwide.
          </p>
        </div>

        {/* Collaboration Partners */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-white mb-8">
            Collaboration Partners
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {collaborationPartners.map((partner, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 text-center"
              >
                <h4 className="text-lg font-semibold text-orange-400 mb-2">
                  {partner.name}
                </h4>
                <p className="text-gray-300 text-sm">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How to Contribute */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-white mb-8">
            How You Can Contribute
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {roles.map((role, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="text-3xl">{role.icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold text-blue-400 mb-2">
                      {role.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {role.description}
                    </p>
                  </div>
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-gray-400 mb-2">
                    Relevant Skills:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {role.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-white mb-8">
            Resources & Documentation
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-green-500/20 hover:border-green-500/40 transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-green-400 mb-2">
                  {resource.title}
                </h4>
                <p className="text-gray-300 mb-4">{resource.description}</p>
                <a
                  href={resource.link}
                  className="inline-flex items-center text-orange-400 hover:text-orange-300 font-medium transition-colors"
                >
                  Access Resource
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Research Foundation */}
        <div className="bg-gradient-to-r from-orange-900/30 to-blue-900/30 rounded-2xl p-8 mb-16 border border-orange-500/20">
          <h3 className="text-2xl font-bold text-center text-orange-400 mb-6">
            Research Foundation
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Based on NASA Research
              </h4>
              <p className="text-gray-300 leading-relaxed mb-4">
                The Nature Capsule builds upon groundbreaking work at
                NASA&apos;s Marshall Space Flight Center, particularly the
                research of Brady Kimbrel and the ISRU (In-Situ Resource
                Utilization) program.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <span className="text-orange-400">•</span>
                  <span>NTRS 20240004496: Advanced Life Support Systems</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-orange-400">•</span>
                  <span>ECLSS Integration Studies</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-orange-400">•</span>
                  <span>Additive Manufacturing Feedstock Recycling</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Open Source Development
              </h4>
              <p className="text-gray-300 leading-relaxed mb-4">
                We believe that sustainable space exploration requires global
                collaboration. The Nature Capsule project is developed as an
                open-source initiative, encouraging contributions from
                scientists, engineers, and innovators worldwide.
              </p>
              <div className="bg-slate-800/50 rounded-lg p-4 border border-blue-500/30">
                <div className="text-blue-400 font-semibold mb-2">
                  Join Our Community
                </div>
                <div className="text-gray-300 text-sm">
                  Connect with researchers, share ideas, and contribute to the
                  future of sustainable space exploration.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-900/50 to-orange-900/50 rounded-2xl p-8 border border-green-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Make a{" "}
              <span className="text-orange-400">Difference</span>?
            </h3>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              Whether you&apos;re a scientist, engineer, educator, or space
              enthusiast, there&apos;s a place for you in building the future of
              sustainable space exploration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Join the Project
              </a>
              <a
                href="#"
                className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Access Resources
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;
