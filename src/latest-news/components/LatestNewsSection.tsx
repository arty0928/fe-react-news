import { useSuspenseQuery } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import { fetchNews } from '../../apis/fetchNews';
import { LatestNewsCard } from './LatestNewsCard';

const LATEST_NEWS_COUNT = 2;
const LATEST_NEWS_LEN = 5;
const GAP = 1000;
const ROLLING_INTERVAL = 5000;

export const LatestNewsSection = () => {
  const { data } = useSuspenseQuery({
    queryFn: () => fetchNews(null, LATEST_NEWS_COUNT * LATEST_NEWS_LEN, 'next'),
    queryKey: ['news'],
  });

  const [cursor, setCursor] = useState<number>(0);
  const [array, setArray] = useState<number[]>(
    Array.from({ length: LATEST_NEWS_COUNT }, (_, i) => i),
  );

  const isRollingRef = useRef(true);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isRollingRef.current) {
        return;
      }
      // 카드에 hover를 했을때 아래 cursor를 변경하는 부분을 무시하도록
      setCursor((prev) => prev + 1);
    }, ROLLING_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (cursor === 0) return;

    array.forEach((_, i) => {
      setTimeout(() => {
        if (!isRollingRef.current) {
          return;
        }
        setArray((prevArray) => {
          const newArray = [...prevArray];
          newArray[i] = (newArray[i] + LATEST_NEWS_COUNT) % (LATEST_NEWS_COUNT * LATEST_NEWS_LEN);
          return newArray;
        });
      }, i * GAP);
    });
  }, [cursor]);

  return (
    <div className="grid grid-cols-2 gap-4 px-6 py-4 border-b">
      {array.map((index) => (
        <LatestNewsCard
          key={index}
          {...data.data[index]}
          onMouseOver={() => {
            isRollingRef.current = false;
          }}
          onMouseLeave={() => {
            isRollingRef.current = true;
          }}
        />
      ))}
    </div>
  );
};
