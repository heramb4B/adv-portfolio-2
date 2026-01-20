
import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a237e] text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">
          {/* Logo & Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Scale className="h-10 w-10 text-[#d4af37]" />
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl serif-font uppercase tracking-wider">Advocate</span>
                <span className="text-[#d4af37] text-sm">Shital S. Deshmukh</span>
              </div>
            </div>
            <p className="text-blue-100 text-sm italic">
              "Committed to justice, ethics, and client-focused legal practice at the District and Sessions Court, Buldhana."
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-[#d4af37] inline-block pb-1">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-blue-100 hover:text-[#d4af37] transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-blue-100 hover:text-[#d4af37] transition-colors text-sm">About Me</Link></li>
              <li><Link to="/contact" className="text-blue-100 hover:text-[#d4af37] transition-colors text-sm">Contact Me</Link></li>
            </ul>
          </div>

          {/* Contact Details placeholder */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-[#d4af37] inline-block pb-1">Court Residence</h4>
            <ul className="space-y-4 text-sm text-blue-100">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#d4af37] shrink-0" />
                <span>District and Sessions Court,<br />Buldhana, Maharashtra</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#d4af37] shrink-0" />
                <span>contact@advshitaldeshmukh.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-900 pt-6 text-center text-blue-300 text-xs">
          <p>© {new Date().getFullYear()} Adv. Shital S. Deshmukh. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
