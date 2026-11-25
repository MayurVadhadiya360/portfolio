export interface TItem { id: string; title: string; sub: string; period: string; bullets?: string[]; tags?: string[]; }
/** Shared by Experience and Education */
export function Timeline({ items }: { items: TItem[] }) {
  return (
    <ol className="tl">
      {items.map((i) => (
        <li key={i.id}>
          <time>{i.period}</time>
          <div>
            <h3>{i.title}</h3>
            <p className="sub">{i.sub}</p>
            {i.bullets && <ul>{i.bullets.map((b) => <li key={b}>{b}</li>)}</ul>}
            {i.tags && <p className="tags">{i.tags.map((t) => <span key={t}>{t}</span>)}</p>}
          </div>
        </li>
      ))}
    </ol>
  );
}
