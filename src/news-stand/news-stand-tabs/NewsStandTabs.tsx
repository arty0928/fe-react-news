import { NewsScopeTab } from '../news-stand-tabs/NewsScopeTab';
import { NewsViewOptionTab } from '../news-view/NewsViewOptionTab';

export const NewsStandTabs = () => {
  return (
    <div className="flex items-center justify-between px-6 py-3 border-b">
      <NewsScopeTab />
      <NewsViewOptionTab />
    </div>
  );
};
