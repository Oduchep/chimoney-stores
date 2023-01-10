import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LayoutWrapper from '../layouts/Layout';
import '../styles/globals.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <LayoutWrapper>
        <>
          <Component {...pageProps} />
          <ToastContainer />
        </>
      </LayoutWrapper>
    </QueryClientProvider>
  );
}
