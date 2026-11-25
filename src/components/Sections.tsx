import { useState } from 'react';
import { profile, skillGroups, spokenLanguages, experience, education, projects } from '../data';
import { Section } from './Section';
import { Timeline } from './Timeline';

export const About = () => (
  <Section id="about" title="About">
    {profile.about.map((p) => <p key={p}>{p}</p>)}
    <dl className="stats">
      {profile.stats.map((s) => <div key={s.label}><dt>{s.value}</dt><dd>{s.label}</dd></div>)}
    </dl>
  </Section>
);

export const Skills = () => (
  <Section id="skills" title="Skills">
    <dl className="skills">
      {skillGroups.map((g) => (
        <div key={g.id}><dt>{g.title}</dt><dd>{g.skills.map((s) => <span key={s}>{s}</span>)}</dd></div>
      ))}
      <div><dt>Spoken languages</dt><dd>{spokenLanguages.map((s) => <span key={s}>{s}</span>)}</dd></div>
    </dl>
  </Section>
);

export const Experience = () => (
  <Section id="experience" title="Experience">
    <Timeline items={experience.map((e) => ({ id: e.id, title: e.role, sub: `${e.company}, ${e.location}`, period: `${e.start} - ${e.end}`, bullets: e.bullets, tags: e.tech }))} />
  </Section>
);

export const Education = () => (
  <Section id="education" title="Education">
    <Timeline items={education.map((e) => ({ id: e.id, title: e.degree, sub: `${e.institution}, ${e.location}${e.grade ? ' · ' + e.grade : ''}`, period: `${e.start} - ${e.end}` }))} />
  </Section>
);

const allTags = ['All', ...new Set(projects.flatMap((p) => p.tags))];
export function Projects() {
  const [tag, setTag] = useState('All');
  const shown = projects.filter((p) => tag === 'All' || p.tags.includes(tag));
  return (
    <Section id="projects" title="Projects">
      <div className="filters" role="group" aria-label="Filter projects">
        {allTags.map((t) => <button key={t} aria-pressed={t === tag} onClick={() => setTag(t)}>{t}</button>)}
      </div>
      <ul className="projects" key={tag}>
        {shown.map((p) => (
          <li key={p.id}>
            <div><h3>{p.title}</h3>{p.status && <span className="badge">{p.status}</span>}<p className="sub">{p.date}</p></div>
            <div>
              <p>{p.summary}</p>
              <p className="tags">{p.tech.map((t) => <span key={t}>{t}</span>)}</p>
              <p className="links">
                {p.links.live && <a href={p.links.live} target="_blank" rel="noreferrer">Live demo</a>}
                {p.links.repo && <a href={p.links.repo} target="_blank" rel="noreferrer">Source code</a>}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export const Contact = () => (
  <Section id="contact" title="Contact">
    <p>Have a project or role in mind? Send an email and I will reply soon.</p>
    <p className="big"><a href={`mailto:${profile.email}`}>{profile.email}</a></p>
    <p className="links">
      {profile.phone && <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>}
      {profile.socials.map((s) => <a key={s.label} href={s.url} target="_blank" rel="noreferrer">{s.label}</a>)}
    </p>
  </Section>
);
