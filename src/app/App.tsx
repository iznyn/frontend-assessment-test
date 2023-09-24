import { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { routesConfig } from './router';

// Create a react query client
const queryClient = new QueryClient();

// Router config
const router = createBrowserRouter(routesConfig);

const App = () => {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<>Loading...</>}>
          <RouterProvider router={router} />
        </Suspense>
      </QueryClientProvider>
    </div>
  );
}

export default App;