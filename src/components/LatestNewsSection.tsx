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
  return (
    <>
      {mock.map((news) => (
        <LatestNewsCard press={news.press} title={news.title} />
      ))}
    </>
  );
};
