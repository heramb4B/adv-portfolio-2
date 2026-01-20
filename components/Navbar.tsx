
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Scale, Menu, X } from 'lucide-react';
import { NAV_LINKS, COLORS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b-2 border-[#d4af37]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo Section */}
          <div className="flex flex-col items-start">
            <Link to="/" className="flex items-center gap-2">
              <Scale className="h-8 w-8 text-[#1a237e]" />
              <div className="flex flex-col leading-tight">
                <span className="text-[#800000] font-bold text-lg leading-none">Advocate</span>
                <span className="text-[#1a237e] font-semibold text-sm leading-none serif-font">Adv. Shital S. Deshmukh</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-[#d4af37] ${
                  location.pathname === link.path ? 'text-[#1a237e] font-bold border-b-2 border-[#1a237e]' : 'text-[#333333]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#333333] hover:text-[#1a237e] p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-6 animate-fade-in">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-base font-medium text-[#333333] border-b border-gray-50 last:border-0"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
