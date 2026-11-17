import { Eye, Target } from 'lucide-react';
import './RoundStatementBook.css';

type Props = {
  kind: 'vision' | 'mission';
  title: string;
  tagline: string;
  statement: string;
};

export function RoundStatementBook({ kind, title, tagline, statement }: Props) {
  const Icon = kind === 'vision' ? Eye : Target;
  return (
    <div className={`round-book round-book--${kind}`}>
      <article className="round-book-shell" aria-label={`Our ${title.toLowerCase()}`}>
        <div className="round-book-page">
          <div className="round-book-heading">
            <Icon size={28} strokeWidth={1.5} aria-hidden="true" />
            <h2>{title}</h2>
          </div>
          <span className="round-book-rule" aria-hidden="true" />
          <h3>{tagline}</h3>
          <p>{statement}</p>
          <span className="round-book-page-number" aria-hidden="true">
            {kind === 'vision' ? '01' : '02'}
          </span>
        </div>
      </article>
    </div>
  );
}
