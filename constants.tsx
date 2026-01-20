
import { EducationEntry, InternshipEntry, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About Me', path: '/about' },
  { label: 'Education', path: '/education' },
  { label: 'Internships', path: '/internships' },
  { label: 'Volunteering', path: '/volunteering' },
  { label: 'Contact Me', path: '/contact' }
];

export const EDUCATION_DATA: EducationEntry[] = [
  {
    degree: 'Master of Social Work (MSW)',
    college: 'Mahatma Jyotiba Fule College of Social Science',
    location: 'Buldhana',
    year: '2026'
  },
  {
    degree: 'Bachelor of Laws (LL.B.)',
    college: 'D.E.S. Navalmal Firodia Law College (DES Law College)',
    location: 'Pune',
    score: '60%',
    year: '2025'
  },
  {
    degree: 'Bachelor of Arts (B.A.)',
    college: 'Late B.S. Arts, Prof. N.G. Science & A.G. Commerce College',
    location: 'Sakharkherda, District Buldhana',
    score: '78.7%',
    year: '2022'
  }
];

export const INTERNSHIP_DATA: InternshipEntry[] = [
  {
    period: 'June – July 2024',
    mentor: 'Adv. V. A. Wankhede',
    location: 'District & Sessions Court, Buldhana'
  },
  {
    period: 'May – June 2023',
    mentor: 'Adv. Rajesh N. Deshmukh',
    location: 'District & Sessions Court, Buldhana'
  }
];

export const COLORS = {
  navy: '#1a237e',
  maroon: '#800000',
  charcoal: '#333333',
  gold: '#d4af37',
  offWhite: '#f8f9fa'
};
