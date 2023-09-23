import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import { routesConfig } from './router';

const router = createBrowserRouter(routesConfig);

const App = () => {
  return (
    <div className="App">
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </div>
  );
}

export default App;