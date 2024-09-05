'use client';

import {
  isServer,
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';


let browserQueryClient: QueryClient | undefined = undefined;

type ProvidersProps = {
  children: React.ReactNode;
};

function makeQueryClient() {
return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1_000
      }
    }
  });
};

function getQueryClient() {
  if ( isServer ) {
    return makeQueryClient();
  } else  {
    if (!browserQueryClient) browserQueryClient= makeQueryClient();
    return browserQueryClient;
  };
};

export default function Providers({ children }: ProvidersProps) {

  // official code - 'advanced-ssr' in tanstack.com
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>

  );

};
