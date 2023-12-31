import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../components/layout';
import Home from '../pages/home.tsx';
import Cart from '../pages/cart.tsx';
import About from '../pages/about.tsx';
import Products from '../pages/products.tsx';
import Error from '../pages/error.tsx';
import Checkout from '../pages/checkout.tsx';
import SingleProduct from '../pages/single-product.tsx';
import PrivateRoute from './private-route.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <Error />,
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
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/products/:id',
        element: <SingleProduct />,
      },
      {
        path: '/checkout',
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
      // {
      //   path: '*',
      //   element: <Error />,
      // },
    ],
  },
]);

export const RenderRoutes = () => {
  return <RouterProvider router={router} />;
};
