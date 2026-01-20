
export interface EducationEntry {
  degree: string;
  college: string;
  location: string;
  score?: string;
  year: string;
}

export interface InternshipEntry {
  period: string;
  mentor: string;
  location: string;
}

export interface NavLink {
  label: string;
  path: string;
}
