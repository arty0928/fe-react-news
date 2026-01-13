import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Header } from './components/Header';
import { LatestNewsSection } from './components/LatestNewsSection';
import { NewsStand } from './components/NewsStand';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-7xl bg-white shadow-lg">
          <Header />
          <LatestNewsSection />
          <NewsStand />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
