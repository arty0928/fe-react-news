import { NewsScopeTab } from './NewsScopeTab';
import { NewsViewOptionTab } from './NewsViewOptionTab';

export const NewsStandTabs = () => {
  return (
    <div className="flex items-center justify-between px-6 py-3 border-b">
      <NewsScopeTab />
      <NewsViewOptionTab />
    </div>
  );
};
