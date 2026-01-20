
import React from 'react';
import { Briefcase, Calendar, UserCheck, MapPin } from 'lucide-react';
import { INTERNSHIP_DATA } from '../constants';

const Internships: React.FC = () => {
  return (
    <div className="py-16 md:py-24 bg-[#f8f9fa]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Briefcase className="h-12 w-12 text-[#1a237e] mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-[#1a237e] serif-font mb-4">Professional Internships</h2>
          <p className="text-gray-600 italic">Timeline of courtroom exposure and mentorship</p>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mt-4"></div>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gray-200"></div>

          <div className="space-y-20">
            {INTERNSHIP_DATA.map((item, index) => (
              <div key={index} className="relative flex items-center justify-between">
                {/* Desktop layout: Alternate sides */}
                <div className={`w-[45%] ${index % 2 === 0 ? 'text-right' : 'order-last text-left'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-[#1a237e] transition-colors">
                    <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'justify-end' : ''}`}>
                       <Calendar className="h-4 w-4 text-[#d4af37]" />
                       <span className="text-sm font-bold text-[#d4af37]">{item.period}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#1a237e] serif-font mb-2">{item.mentor}</h3>
                    <p className="text-gray-600 flex items-center gap-2 justify-center md:justify-start">
                       <MapPin className="h-4 w-4 text-gray-400" /> {item.location}
                    </p>
                    <div className={`mt-4 flex items-center gap-2 text-[#800000] font-medium text-sm ${index % 2 === 0 ? 'justify-end' : ''}`}>
                       <UserCheck className="h-4 w-4" />
                       Internship Trainee
                    </div>
                  </div>
                </div>

                {/* Center Node - Fixed: Added absolute positioning and transform for exact centering */}
                <div className="absolute left-1/2 -translate-x-1/2 z-10 w-10 h-10 bg-[#1a237e] border-4 border-white rounded-full shadow-lg flex items-center justify-center">
                   <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>

                {/* Empty side for layout consistency */}
                <div className="w-[45%]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Internships;
