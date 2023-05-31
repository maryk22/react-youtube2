import './scss/style.scss';
import { Outlet } from 'react-router-dom';
import SearchHeader from './component/SearchHeader';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { YoutubeApiProvider } from './context/YoutubeApiContext';
import { DarkModeProvider } from './context/DarkModeContext';

const queryClient = new QueryClient();

function App() {
  return (
    <DarkModeProvider>
      <SearchHeader />
      <main className='main'>
        <YoutubeApiProvider>
          <QueryClientProvider client={queryClient}>
            <Outlet />
          </QueryClientProvider>
        </YoutubeApiProvider>
      </main>
    </DarkModeProvider>
  );
}

export default App;
