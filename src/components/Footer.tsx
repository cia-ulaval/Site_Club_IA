import { Instagram, Facebook, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-black/60 border-t border-purple-500/20 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">
              Laval University Artificial Intelligence Club
            </h3>
            <p className="text-gray-400">
              Shape the unknown, code the impossible.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-purple-400 mb-4">
              Links
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-purple-400 mb-4">
              Resources
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-purple-400 mb-4">
              Connect
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/ciaulaval/"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/cia-ulaval/"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/people/Club-dintelligence-artificielle-de-lUniversité-Laval/100089798911416/?rdid=lgzUe6mitaRXBT9H&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AqQ3bCSQp"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-purple-500/20">
          <p className="text-gray-400">
            © 2025 Dereck Bélanger - All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
