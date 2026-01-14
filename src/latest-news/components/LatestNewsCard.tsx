import type { ComponentProps } from 'react';
import type { News } from '../../types/news';

type Props = Omit<News, 'id'> & ComponentProps<'div'>;

export const LatestNewsCard = ({ press, mainTitle, ...rest }: Props) => {
  return (
    <article {...rest} className="text-sm flex gap-2 align-center border rounded-lg p-4 bg-gray-50">
      <h3 className="font-bold">{press}</h3>
      <p className="text-gray-700">{mainTitle}</p>
    </article>
  );
};
