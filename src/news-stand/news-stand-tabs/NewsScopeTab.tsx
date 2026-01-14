export const NewsScopeTab = () => {
  return (
    <div className="flex gap-2">
      <button className="px-4 py-2 font-bold border-b-2 border-black">전체 언론사</button>
      <button className="px-4 py-2 text-gray-500 flex items-center gap-1">
        내가 구독한 언론사<span className="w-5 h-5 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center">8</span>
      </button>
    </div>
  );
};
