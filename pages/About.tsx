
import React from 'react';
import { User, Award, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-16 md:py-24 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden border-8 border-white shadow-xl relative z-10">
              <img 
                src="https://picsum.photos/id/64/800/1000" 
                alt="Advocate Shital S. Deshmukh" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decoration */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#d4af37] rounded-lg -z-0"></div>
          </div>

          {/* Content Side */}
          <div>
            <h4 className="text-[#800000] font-bold uppercase tracking-widest text-sm mb-2">Legal Professional</h4>
            <h2 className="text-4xl font-bold text-[#1a237e] serif-font mb-8">Adv. Shital Sanjabrao Deshmukh</h2>
            
            <div className="space-y-6 text-lg leading-relaxed text-[#333333]">
              <p>
                Advocate Shital Sanjabrao Deshmukh is a law graduate from Pune, originally hailing from Buldhana, Maharashtra. She completed her LL.B. in 2025 and is a qualified AIBE Advocate.
              </p>
              <p>
                She is currently practicing at the District and Sessions Court, Buldhana, handling matters with diligence, integrity, and a strong commitment to justice. Her legal journey reflects a balance of academic excellence, courtroom exposure, and grassroots engagement.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
              <div className="flex items-center gap-4 p-4 bg-white rounded shadow-sm">
                <Award className="text-[#d4af37] h-8 w-8" />
                <div>
                  <h5 className="font-bold text-[#1a237e]">AIBE Qualified</h5>
                  <p className="text-sm text-gray-500">Certified Legal Advocate</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded shadow-sm">
                <BookOpen className="text-[#d4af37] h-8 w-8" />
                <div>
                  <h5 className="font-bold text-[#1a237e]">Pune Graduate</h5>
                  <p className="text-sm text-gray-500">Academic Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
