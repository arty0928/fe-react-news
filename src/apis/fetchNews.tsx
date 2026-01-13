import mockData from '../../public/mockData/pressData.json';
import type { News } from '../types/news.ts';

export type PaginatedResponse<T> = {
  data: T[];
  nextCursor: string | null;
};
const DELAY_SEC = 0;

export const fetchNews = (
  cursor: string | null,
  limit: number,
): Promise<PaginatedResponse<News>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const allData: News[] = mockData.map((data) => ({
        press: data.press,
        mainTitle: data.mainTitle,
        id: data.press,
      }));

      const startIndex = cursor ? allData.findIndex((news) => news.id === cursor) + 1 : 0;
      const pagedData = allData.slice(startIndex, startIndex + limit);

      const lastItem = pagedData[pagedData.length - 1];
      const hasMore = startIndex + limit < allData.length;
      const nextCursor = hasMore && lastItem ? lastItem.id : null;

      resolve({
        data: pagedData,
        nextCursor,
      });
    }, DELAY_SEC);
  });
};
