import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { fetchNews } from '../../apis/fetchNews';
import { NewsStandTabs } from '../news-stand-tabs/NewsStandTabs';
import { NewsView } from '../news-view/NewsView';

const PAGINATION_COUNT = 24;
export const NewsStand = () => {
  const { data } = useSuspenseInfiniteQuery({
    queryFn: ({ pageParam }) => fetchNews(pageParam, PAGINATION_COUNT),
    queryKey: ['news'],
    initialPageParam: null as null | string,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });

  return (
    <>
      <NewsStandTabs />
      {data.pages.map((page) => (
        <NewsView newsList={page.data} />
      ))}
    </>
  );
};
