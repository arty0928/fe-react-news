import { memo, useEffect, useRef, type ComponentProps } from 'react';
import type { News } from '../../types/news';

type Props = ComponentProps<'div'> & {
  newsList: News[];
  first: number;
  second: number;
};

const LatestNewsCardComponent = ({ newsList, first, ...rest }: Props) => {
  const d = useRef<HTMLDivElement>(null);

  useEffect(() => {
    d.current?.classList.remove('animation');
    d.current?.classList.add('up');
  }, []);

  return (
    <article
      {...rest}
      className="text-sm flex gap-4 align-center border-none rounded-lg p-4 bg-gray-100"
    >
      <div className="overflow-hidden h-[20px] w-full">
        <div ref={d} key={first} className="flex flex-col space-between h-full animation">
          {newsList.map(({ press, mainTitle }, index) => (
            <div key={`${press}-${index}`} className="flex flex-row gap-4 h-full">
              <h3 className="font-bold text-sm">{press}</h3>
              <p className="truncate text-gray-700">{mainTitle}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export const LatestNewsCard = memo(LatestNewsCardComponent, (prevProps, nextProps) => {
  return prevProps.first === nextProps.first && prevProps.second === nextProps.second;
});
