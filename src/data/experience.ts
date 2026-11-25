import type { Experience } from './types';
// Newest first
export const experience: Experience[] = [
  { id: 'current', company: 'Your Current Company', role: 'Software Engineer, AI/ML', location: 'India', start: 'Jul 2024', end: 'Present', // DUMMY
    bullets: ['Build and deploy Python-based AI/ML systems from prototype to production.', 'Design APIs and services around models, with logging, testing and monitoring.', 'Explore agentic workflows and LLM integrations to automate multi-step tasks.'],
    tech: ['Python', 'PyTorch', 'FastAPI', 'Docker', 'LLM APIs'] },
  { id: 'sciative', company: 'Sciative Solutions', role: 'Jr. Software Developer Intern', location: 'Mumbai', start: 'Jan 2024', end: 'Apr 2024',
    bullets: ['Developed backend features with Django and MySQL.', 'Built Scrapy crawlers for data collection.', 'Stored and queried scraped data in MongoDB.'], // DUMMY bullets
    tech: ['Django', 'Scrapy', 'MySQL', 'MongoDB'] },
];
