import type { SkillGroup } from './types';
export const skillGroups: SkillGroup[] = [
  { id: 'agents', title: 'Agentic AI and LLMs', skills: ['LLM APIs', 'Prompt engineering', 'Tool calling', 'RAG', 'LangChain', 'LangGraph', 'MCP', 'Vector databases'] }, // DUMMY: keep only what you use
  { id: 'ml', title: 'AI/ML', skills: ['PyTorch', 'scikit-learn', 'NumPy', 'Pandas'] }, // DUMMY
  { id: 'lang', title: 'Languages', skills: ['Python', 'JavaScript', 'TypeScript', 'C/C++', 'HTML', 'CSS'] },
  { id: 'back', title: 'Backend', skills: ['FastAPI', 'Django', 'Node.js', 'Express.js', 'Scrapy', 'WebSockets'] },
  { id: 'front', title: 'Frontend', skills: ['React.js', 'Flutter'] },
  { id: 'db', title: 'Databases', skills: ['MongoDB', 'MySQL', 'Firestore', 'SQLite'] },
  { id: 'cloud', title: 'Cloud and tools', skills: ['AWS S3', 'Firebase', 'Docker', 'Git'] },
];
export const spokenLanguages = ['Gujarati', 'English', 'Hindi'];
