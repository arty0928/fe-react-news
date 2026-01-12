import type { News } from '../types/news.js';

export const LatestNewsCard = ({ press, title }: News) => {
  return (
    <article>
      <h3>{press}</h3>
      <p>{title}</p>
    </article>
  );
};
