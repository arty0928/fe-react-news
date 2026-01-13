import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchNews } from '../../apis/fetchNews';
import { LatestNewsCard } from './LatestNewsCard';

const mock = [
  {
    press: '언론사1',
    title: '내용2',
  },
  {
    press: '언론사2',
    title: '내용2',
  },
];

export const LatestNewsSection = () => {
  const { data } = useSuspenseQuery({ queryFn: fetchNews, queryKey: ['news'] });

  return (
    <div className="grid grid-cols-2 gap-4 px-6 py-4 border-b">
      {mock.map((news, index) => (
        <LatestNewsCard key={index} press={news.press} title={news.title} />
      ))}
    </div>
  );
};
