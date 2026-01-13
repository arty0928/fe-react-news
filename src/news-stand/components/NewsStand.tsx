import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchNews } from '../../apis/fetchNews';
import { NewsStandTabs } from './NewsStandTabs';

export const NewsStand = () => {
  const { data } = useSuspenseQuery({ queryFn: fetchNews, queryKey: ['news'] });

  return (
    <>
      <NewsStandTabs />
      {/* <NewsView /> */}
    </>
  );
};
