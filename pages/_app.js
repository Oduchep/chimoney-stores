import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '../styles/globals.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LayoutWrapper from '../layouts/Layout';

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <LayoutWrapper>
        <div>
          <Component {...pageProps} />
          <ToastContainer />
        </div>
      </LayoutWrapper>
    </QueryClientProvider>
  );
}
