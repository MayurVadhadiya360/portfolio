export interface Profile { name: string; headline: string; roles: string[]; intro: string; about: string[]; location: string; email: string; phone?: string; resumeUrl: string; availability?: string; agentTrace: string[]; stats: { label: string; value: string }[]; socials: { label: string; url: string }[]; }
export interface SkillGroup { id: string; title: string; skills: string[]; }
export interface Experience { id: string; company: string; role: string; location: string; start: string; end: string; bullets: string[]; tech: string[]; }
export interface Education { id: string; institution: string; degree: string; location: string; start: string; end: string; grade?: string; }
export interface Project { id: string; title: string; date: string; summary: string; tech: string[]; tags: string[]; links: { live?: string; repo?: string }; status?: string; }
