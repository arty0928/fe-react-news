import type { News } from '../types/news.js';

export const LatestNewsCard = ({ press, title }: News) => {
  return (
    <article className="border rounded-lg p-4 bg-gray-50">
      <h3 className="font-bold text-sm mb-2">{press}</h3>
      <p className="text-sm text-gray-700">{title}</p>
    </article>
  );
};
