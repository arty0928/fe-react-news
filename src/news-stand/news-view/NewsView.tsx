import type { News } from '../../types/news';

type Props = {
  newsList: News[];
};

export const NewsView = ({ newsList }: Props) => {
  return (
    <div className="relative px-6 py-4">
      <button className="absolute left-0 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-100 rounded">
        🔚
      </button>
      <ul className="grid grid-cols-6 gap-4">
        {newsList.map((news, index) => (
          <li
            key={index}
            className="border rounded-lg p-6 flex items-center justify-center hover:bg-gray-50 cursor-pointer"
          >
            {news.press}
          </li>
        ))}
      </ul>
      <button className="absolute right-0 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-100 rounded">
        🔜
      </button>
    </div>
  );
};
