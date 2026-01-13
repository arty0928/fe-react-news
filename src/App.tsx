import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Suspense } from 'react';
import { LatestNewsSection } from './latest-news/components/LatestNewsSection';
import { NewsStand } from './news-stand/components/NewsStand';
import { Header } from './shared/components/Header';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-7xl bg-white shadow-lg">
          <Header />

          <Suspense fallback={<div>loading</div>}>
            <LatestNewsSection />
          </Suspense>

          <Suspense fallback={<div>loading</div>}>
            <NewsStand />
          </Suspense>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
