
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Left Side - Logo & Tagline */}
          <div className="mb-8 md:mb-0">
            <div className="text-2xl font-bold mb-2">SprintFlow</div>
            <p className="text-gray-400 text-sm">Agile. Simple. Powerful.</p>
          </div>

          {/* Right Side - Links */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
              About
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
              Contact
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
              Terms
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 SprintFlow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
