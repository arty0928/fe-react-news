import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchNews } from '../../apis/fetchNews';
import { NewsStandTabs } from '../news-stand-tabs/NewsStandTabs';
import { NewsView } from '../news-view/NewsView';

export const NewsStand = () => {
  const { data } = useSuspenseQuery({ queryFn: fetchNews, queryKey: ['news'] });

  return (
    <>
      <NewsStandTabs />
      <NewsView newsList={data} />
    </>
  );
};
