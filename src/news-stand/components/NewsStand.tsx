import { useSuspenseQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { fetchNews } from '../../apis/fetchNews';
import { NewsStandTabs } from '../news-stand-tabs/NewsStandTabs';
import { NewsView } from '../news-view/NewsView';

const PAGINATION_COUNT = 24;
export const NewsStand = () => {
  const [cursor, setCursor] = useState<string | null>(null);

  const { data } = useSuspenseQuery({
    queryFn: () => fetchNews(cursor, PAGINATION_COUNT, 'next'),
    queryKey: ['news', cursor],
  });

  const handlePreviousPage = () => {
    if (data.prevCursor) {
      setCursor(data.prevCursor);
    }
  };

  const handleNextPage = () => {
    if (data.nextCursor) {
      setCursor(data.nextCursor);
    }
  };

  return (
    <>
      <button
        onClick={handlePreviousPage}
        disabled={!data.prevCursor}
        className="absolute left-0 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-100 rounded"
      >
        🔚
      </button>
      <NewsStandTabs />
      <NewsView newsList={data.data} />
      <button
        onClick={handleNextPage}
        disabled={!data.nextCursor}
        className="absolute right-0 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-100 rounded"
      >
        🔚
      </button>
    </>
  );
};
