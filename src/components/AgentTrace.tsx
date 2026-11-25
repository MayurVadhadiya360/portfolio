import type { CSSProperties } from 'react';
/** Decorative: an AI agent working through a task step by step (plays once). */
export function AgentTrace({ steps }: { steps: string[] }) {
  const t = (i: number) => ({ '--t': `${0.9 + i * 0.8}s` }) as CSSProperties;
  return (
    <aside className="trace" aria-label="Illustration of an AI agent completing a task">
      <div className="trace-top"><i /><i /><i /><span>agent run</span></div>
      <ol>{steps.map((s, i) => <li key={s} style={t(i)}><i /><span>{s}</span></li>)}</ol>
      <p className="done" style={t(steps.length)}>Task complete</p>
    </aside>
  );
}
