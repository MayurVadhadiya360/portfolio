import type { Project } from './types';
const gh = 'https://github.com/MayurVadhadiya360/'; // repo names below are DUMMY
export const projects: Project[] = [
  // DUMMY agent projects below: replace with real ones (or delete) and remove the status badge when done.
  { id: 'agent-research', title: 'Agentic Research Assistant', date: '2026', status: 'In progress', summary: 'An LLM agent that plans a research task, searches the web, reads sources and writes a cited summary.', tech: ['Python', 'LangGraph', 'FastAPI', 'React'], tags: ['AI Agents', 'Full-Stack'], links: {} },
  { id: 'rag-chat', title: 'Chat With Your Docs (RAG)', date: '2026', status: 'In progress', summary: 'Ask questions about your own documents. Retrieval grounds every LLM answer with citations.', tech: ['Python', 'Vector DB', 'FastAPI', 'React'], tags: ['AI Agents', 'Full-Stack'], links: {} },
  { id: 'ttt', title: 'Tic-Tac-Toe: Infinity', date: 'Dec 2025', summary: 'A real-time multiplayer game that turns tic-tac-toe into a strategic duel with a shifting 3-move rule.', tech: ['React', 'TypeScript', 'FastAPI', 'WebSocket'], tags: ['Full-Stack', 'Real-time'], links: { live: 'https://tictactoe-infinity.onrender.com', repo: gh + 'tictactoe-infinity' } },
  { id: 'pm', title: 'Password Manager', date: 'Sep 2024', summary: 'A multi-platform password manager that gives you your passwords on Android, Windows and more.', tech: ['Flutter', 'Firebase Auth', 'Firestore'], tags: ['Mobile'], links: { repo: gh + 'password-manager' } },
  { id: 'et', title: 'Expense Tracker', date: 'May 2024 - Jul 2024', summary: 'Tracks a user\'s expenses with a responsive React interface and a Django backend.', tech: ['React', 'Django', 'AWS S3', 'MongoDB'], tags: ['Full-Stack'], links: { live: 'https://expense-tracker-v2-4vtr.onrender.com', repo: gh + 'expense-tracker' } },
  { id: 'af', title: 'ArtFusion', date: 'Jul 2023 - Nov 2023', summary: 'A social media website built with Django, with media stored on AWS S3.', tech: ['Django', 'AWS S3', 'SQLite'], tags: ['Full-Stack'], links: { repo: gh + 'ArtFusion' } },
  { id: 'quiz', title: 'Quiz Application', date: '2022', summary: 'An online quiz app with a tkinter interface and a real-time Firebase database.', tech: ['Python', 'tkinter', 'Firebase'], tags: ['Desktop'], links: { repo: gh + 'quiz-app' } },
];
