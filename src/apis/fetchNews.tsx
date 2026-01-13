import mockData from '../../public/mockData/pressData.json';
import type { News } from '../types/news.ts';

const DELAY_SEC = 0;

export const fetchNews = (): Promise<News[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData as News[]);
    }, DELAY_SEC);
  });
};
