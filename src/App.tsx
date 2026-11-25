import { profile } from './data';
import { Hero } from './components/Hero';
import { About, Skills, Experience, Projects, Education, Contact } from './components/Sections';

// Remove a line here to remove a section. Nav links below must match.
const nav = ['about', 'skills', 'experience', 'projects', 'education', 'contact'];

export default function App() {
  return (
    <>
      <div className="aurora" aria-hidden="true"><span /><span /><span /></div>
      <div className="prog" aria-hidden="true" />
      <a className="skip" href="#main">Skip to content</a>
      <nav className="nav" aria-label="Main">
        <a href="#top" className="logo">MV</a>
        {nav.map((n) => <a key={n} href={`#${n}`}>{n[0].toUpperCase() + n.slice(1)}</a>)}
      </nav>
      <main id="main"><div id="top" />
        <Hero /><About /><Skills /><Experience /><Projects /><Education /><Contact />
      </main>
      <footer className="foot">{profile.name}, {new Date().getFullYear()}</footer>
    </>
  );
}
