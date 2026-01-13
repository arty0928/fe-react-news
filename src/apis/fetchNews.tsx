import mockData from '../../public/mockData/pressData.json';
import type { News } from '../types/news.ts';

const DELAY_SEC = 0;

export const fetchNews = (): Promise<News[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const mappedData: News[] = mockData.map((data) => ({
        press: data.press,
        mainTitle: data.mainTitle,
        id: data.press,
      }));

      resolve(mappedData);
    }, DELAY_SEC);
  });
};
