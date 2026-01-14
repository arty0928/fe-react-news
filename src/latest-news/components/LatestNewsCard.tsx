import type { ComponentProps } from 'react';
import type { News } from '../../types/news';

type Props = Omit<News, 'id'> & ComponentProps<'div'>;

export const LatestNewsCard = ({ press, mainTitle, ...rest }: Props) => {
  return (
    <article
      {...rest}
      className="text-sm flex gap-4 items-center align-center border-none rounded-lg p-4 bg-gray-100"
    >
      <h3 className="font-bold text-sm">{press}</h3>
      <p className="truncate text-gray-700">{mainTitle}</p>
    </article>
  );
};
