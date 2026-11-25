import { useEffect, useRef, useState, type ReactNode } from 'react';
/** Adds class 'in' once the section scrolls into view; CSS staggers the children. */
export function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) { setSeen(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <section id={id} ref={ref} className={`sec ${seen ? 'in' : 'pre'}`}>
      <h2>{title}</h2>
      <div className="sec-body">{children}</div>
    </section>
  );
}
