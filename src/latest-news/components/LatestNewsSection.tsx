import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchNews } from '../../apis/fetchNews';
import { LatestNewsCard } from './LatestNewsCard';

export const LatestNewsSection = () => {
  const { data } = useSuspenseQuery({ queryFn: fetchNews, queryKey: ['news'] });

  return (
    <div className="grid grid-cols-2 gap-4 px-6 py-4 border-b">
      {data.map((news) => (
        <LatestNewsCard key={news.id} press={news.press} mainTitle={news.mainTitle} />
      ))}
    </div>
  );
};
