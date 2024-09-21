import { RouterProvider } from 'react-router-dom';
import { router } from './routes/BrowserRouter';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
