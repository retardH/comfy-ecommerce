import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../components/layout';
import Home from '../pages/home.tsx';
import Cart from '../pages/cart.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        index: true,
        element: <Home />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
]);

export const RenderRoutes = () => {
  return <RouterProvider router={router} />;
};