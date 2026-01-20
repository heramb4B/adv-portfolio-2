
import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { EDUCATION_DATA } from '../constants';

const Education: React.FC = () => {
  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <GraduationCap className="h-12 w-12 text-[#1a237e] mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-[#1a237e] serif-font mb-4">Academic Credentials</h2>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto"></div>
        </div>

        <div className="space-y-10">
          {EDUCATION_DATA.map((edu, index) => (
            <div 
              key={index} 
              className="group relative bg-[#f8f9fa] p-8 rounded-lg border-l-4 border-[#1a237e] shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-2xl font-bold text-[#800000] serif-font">{edu.degree}</h3>
                  </div>
                  <p className="text-lg font-semibold text-[#1a237e] mb-2">{edu.college}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" /> {edu.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" /> {edu.year}
                    </span>
                    {edu.score && (
                      <span className="flex items-center gap-1 font-bold text-[#1a237e]">
                        <Award className="h-4 w-4" /> {edu.score}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="hidden md:block">
                  <GraduationCap className="h-16 w-16 text-gray-200 group-hover:text-[#1a237e] transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
