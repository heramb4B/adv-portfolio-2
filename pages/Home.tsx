
import React from 'react';
import { Link } from 'react-router-dom';
// Fixed: Replaced 'Balance' with 'Scale' as 'Balance' is not exported by lucide-react
import { Gavel, ChevronRight, ShieldCheck, Scale } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=2000" 
            alt="Law library" 
            className="w-full h-full object-cover brightness-[0.4]"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-2xl animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold serif-font mb-4 leading-tight">
              Legal Integrity & <br />
              <span className="text-[#d4af37]">Ethical Representation</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              Advocate Shital S. Deshmukh is a practicing advocate at the District and Sessions Court, Buldhana, committed to justice, ethics, and client-focused legal practice.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/about" 
                className="bg-[#1a237e] hover:bg-[#283593] text-white px-8 py-3 rounded-md font-semibold transition-all flex items-center gap-2 border border-[#1a237e]"
              >
                Know More <ChevronRight className="h-4 w-4" />
              </Link>
              <Link 
                to="/contact" 
                className="bg-transparent hover:bg-white hover:text-[#1a237e] text-white px-8 py-3 rounded-md font-semibold transition-all border border-white"
              >
                Contact Advocate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1a237e] mb-4 serif-font">Our Core Pillars</h2>
            <div className="w-20 h-1 bg-[#d4af37] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-8 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                {/* Fixed: Replaced Balance with Scale */}
                <Scale className="h-8 w-8 text-[#1a237e]" />
              </div>
              <h3 className="text-xl font-bold mb-4 serif-font">Unwavering Justice</h3>
              <p className="text-gray-600">A firm commitment to the rule of law and ensuring every client receives fair representation.</p>
            </div>
            
            <div className="p-8 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="h-8 w-8 text-[#1a237e]" />
              </div>
              <h3 className="text-xl font-bold mb-4 serif-font">Professional Integrity</h3>
              <p className="text-gray-600">Maintaining the highest standards of ethics and confidentiality in every legal matter handled.</p>
            </div>

            <div className="p-8 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Gavel className="h-8 w-8 text-[#1a237e]" />
              </div>
              <h3 className="text-xl font-bold mb-4 serif-font">Courtroom Diligence</h3>
              <p className="text-gray-600">Thorough preparation and precise advocacy within the District and Sessions Court, Buldhana.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
