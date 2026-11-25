import type { Profile } from './types';
export const profile: Profile = {
  name: 'Mayur Vadhadiya',
  headline: 'Building AI agents and LLM-powered applications',
  roles: ['Python Developer', 'AI Agents and LLM Engineer', 'Full-Stack Developer'], // DUMMY wording
  intro: 'I design agentic AI applications that plan, use tools and get real work done, backed by solid Python backends and clean interfaces.',
  agentTrace: ['Understand the goal', 'Plan the steps', 'Call tools: search, code, APIs', 'Check the result and retry', 'Deliver the answer'],
  about: [
    'Full-stack developer skilled in Python, Django, FastAPI, React and Flutter, with hands-on experience building scalable and real-time applications.',
    'I have developed and deployed multiple production-ready projects using AWS, Firebase and MongoDB. I care about clean architecture, problem-solving and end-to-end product development.',
    'My day job is applied AI/ML with Python. My focus now is agentic AI: LLM-powered agents, tool use, retrieval, and the backends that make them reliable.', // DUMMY: add real details
  ],
  location: 'Ahmedabad, Gujarat, India',
  email: 'mayurvadhadiya5@gmail.com',
  phone: '+91 63544 64807',
  resumeUrl: '/Mayur_Vadhadiya_Resume.pdf',
  availability: 'Open to AI agent and LLM engineering roles', // DUMMY
  stats: [ // DUMMY numbers
    { label: 'projects shipped', value: '5+' },
    { label: 'years of experience', value: '2+' },
    { label: 'technologies used', value: '15+' },
  ],
  socials: [
    { label: 'GitHub', url: 'https://github.com/MayurVadhadiya360' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/mayur-vadhadiya' },
  ],
};
