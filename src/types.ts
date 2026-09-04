export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  year: string;
  featured: boolean;
  videoUrl: string;
  posterUrl: string;
  accentColor?: string;
  duration: string;
  services: string[];
  softwareUsed: string[];
  results: {
    label: string;
    value: string;
  }[];
  galleryImages: string[];
  awards?: string[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientTitle: string;
  company: string;
  avatarUrl: string;
  quote: string;
  rating: number;
  projectTag: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  budget: string;
  timeline?: string;
  message: string;
}

export type SectionId = 'home' | 'projects' | 'case-studies' | 'faq' | 'contact';
