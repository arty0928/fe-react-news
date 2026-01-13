import mockData from '../../public/mockData/pressData.json';
import type { News } from '../types/news.ts';

export type PaginatedResponse<T> = {
  data: T[];
  nextCursor: string | null;
  prevCursor: string | null;
};

const DELAY_SEC = 0;

export const fetchNews = (
  cursor: string | null,
  limit: number,
  direction: 'next' | 'prev' = 'next',
): Promise<PaginatedResponse<News>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const allData: News[] = mockData.map((data, index) => ({
        press: data.press,
        mainTitle: data.mainTitle,
        id: String(index),
      }));

      let startIndex = 0;

      if (cursor) {
        const currentIndex = allData.findIndex((news) => news.id === cursor);
        if (direction === 'next') {
          startIndex = currentIndex + 1;
        } else {
          startIndex = Math.max(0, currentIndex - limit);
        }
      }

      const pagedData = allData.slice(startIndex, startIndex + limit);

      const firstItem = pagedData[0];
      const lastItem = pagedData[pagedData.length - 1];

      const firstItemIndex = allData.findIndex((item) => item.id === firstItem?.id);
      const lastItemIndex = allData.findIndex((item) => item.id === lastItem?.id);

      resolve({
        data: pagedData,
        prevCursor: firstItemIndex > 0 ? firstItem.id : null,
        nextCursor: lastItemIndex < allData.length - 1 ? lastItem.id : null,
      });
    }, DELAY_SEC);
  });
};
