import { useEffect, useRef, type ComponentProps } from 'react';
import type { News } from '../../types/news';

type Props = Omit<News, 'id'> & ComponentProps<'div'>;

export const LatestNewsCard = ({ press, mainTitle, ...rest }: Props) => {
  const d = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!d.current) return;

    d.current.classList.add('animation');
  }, []);

  return (
    <article
      ref={d}
      {...rest}
      className="text-sm flex gap-4 items-center align-center border-none rounded-lg p-4 bg-gray-100"
    >
      <h3 className="font-bold text-sm">{press}</h3>
      <p className="truncate text-gray-700">{mainTitle}</p>
    </article>
  );
};
