import './scss/style.scss';
import { Outlet } from 'react-router-dom';
import SearchHeader from './component/SearchHeader';
import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { YoutubeApiProvider } from './context/YoutubeApiContext';
const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  return (
    <>
      <SearchHeader />
      <main className='main'>
        <YoutubeApiProvider>
          <QueryClientProvider client={queryClient}>
            <Outlet />
          </QueryClientProvider>
        </YoutubeApiProvider>
      </main>
    </>
  );
}

export default App;
