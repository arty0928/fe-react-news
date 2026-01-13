import { Header } from './components/Header';
import { LatestNewsSection } from './components/LatestNewsSection';
import { NewsStand } from './components/NewsStand';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-7xl bg-white shadow-lg">
        <Header />
        <LatestNewsSection />
        <NewsStand />
      </div>
    </div>
  );
}

export default App;
