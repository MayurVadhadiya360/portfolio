import { profile } from '../data';
import { AgentTrace } from './AgentTrace';
export function Hero() {
  return (
    <header className="hero">
      <div className="hero-copy">
        <p className="avail"><span />{profile.availability}</p>
        <h1>{profile.name}</h1>
        <p className="headline">{profile.headline}</p>
        <p className="roles">{profile.roles.map((r) => <span key={r}>{r}</span>)}</p>
        <p className="intro">{profile.intro}</p>
        <p className="cta">
          <a className="btn" href="#projects">See projects</a>
          <a className="btn ghost" href={profile.resumeUrl} download>Download resume</a>
        </p>
      </div>
      <AgentTrace steps={profile.agentTrace} />
    </header>
  );
}
