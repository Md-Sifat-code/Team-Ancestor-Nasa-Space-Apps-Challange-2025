const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-orange-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Project Info */}
          <div>
            <h3 className="text-xl font-bold text-orange-400 mb-4">
              The Nature Capsule
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              A revolutionary closed-loop bioregenerative life support system
              for sustainable human habitation on Mars.
            </p>
            <div className="text-sm text-gray-400">
              Inspired by NASA research and ISRU principles
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#problem"
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  The Problem
                </a>
              </li>
              <li>
                <a
                  href="#solution"
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  The Solution
                </a>
              </li>
              <li>
                <a
                  href="#mars"
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  Why Mars?
                </a>
              </li>
              <li>
                <a
                  href="#sustainability"
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  Sustainability
                </a>
              </li>
              <li>
                <a
                  href="#impact"
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  Impact & Vision
                </a>
              </li>
              <li>
                <a
                  href="#involved"
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  Get Involved
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Resources */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  Technical Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  Research Papers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  Collaboration Portal
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  NASA Partnership
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 The Nature Capsule Project. Built for NASA Space Apps
              Challenge 2025.
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                Terms of Use
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
