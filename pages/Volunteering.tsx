
import React from 'react';
import { Heart, Users, Compass, Globe } from 'lucide-react';

const Volunteering: React.FC = () => {
  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <Heart className="h-12 w-12 text-[#800000] mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-[#1a237e] serif-font mb-4">Volunteering & Social Impact</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Bridging the gap in rural guidance and career counseling through dedicated grassroots engagement.</p>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-block bg-blue-50 px-4 py-1 rounded-full text-[#1a237e] font-bold text-sm mb-6 uppercase tracking-wider">
              Jijau Foundation
            </div>
            <h3 className="text-3xl font-bold text-[#333333] serif-font mb-6">Founder & Lead Volunteer</h3>
            
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                Advocate Shital S. Deshmukh actively leads <strong>Jijau Foundation</strong>, an initiative dedicated to career counselling and educational guidance for students from rural and remote areas of Buldhana, Chandrapur, and Akola districts.
              </p>
              <p>
                The foundation primarily supports students from 8th, 9th, 10th, and 12th standards, helping them gain clarity about career paths, academic planning, and future opportunities.
              </p>
              <p className="italic bg-gray-50 p-4 border-l-4 border-[#d4af37]">
                "This initiative is deeply inspired by personal life experiences and aims to bridge the guidance gap faced by rural students."
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="p-8 bg-[#f8f9fa] rounded-xl border border-gray-100 text-center">
              <Users className="h-10 w-10 text-[#1a237e] mx-auto mb-4" />
              <h4 className="font-bold mb-2">Target Groups</h4>
              <p className="text-sm text-gray-500">8th to 12th Standard Students</p>
            </div>
            <div className="p-8 bg-[#f8f9fa] rounded-xl border border-gray-100 text-center">
              <Compass className="h-10 w-10 text-[#1a237e] mx-auto mb-4" />
              <h4 className="font-bold mb-2">Focus Areas</h4>
              <p className="text-sm text-gray-500">Career Paths & Academic Clarity</p>
            </div>
            <div className="p-8 bg-[#f8f9fa] rounded-xl border border-gray-100 text-center">
              <Globe className="h-10 w-10 text-[#1a237e] mx-auto mb-4" />
              <h4 className="font-bold mb-2">Regions Covered</h4>
              <p className="text-sm text-gray-500">Buldhana, Chandrapur & Akola</p>
            </div>
            <div className="p-8 bg-[#f8f9fa] rounded-xl border border-gray-100 text-center">
              <Heart className="h-10 w-10 text-[#800000] mx-auto mb-4" />
              <h4 className="font-bold mb-2">Personal Mission</h4>
              <p className="text-sm text-gray-500">Inspired by Life Experiences</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteering;
