import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../screens/Home/Home';

const basePath = import.meta.env.BASE_URL;

const router = createBrowserRouter([
  {
    path: `${basePath}/`,
    element: <Home />,
  },
]);

export { router };
