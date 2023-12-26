import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ProductsProvider } from './contexts/products.tsx';
import { UserProvider } from './contexts/user.tsx';
import { FilterProvider } from './contexts/filter.tsx';
import { CartProvider } from './contexts/cart.tsx';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <Auth0Provider
            domain={process.env.AUTH_DOMAIN as string}
            clientId={process.env.AUTH_CLIENT_ID as string}
            authorizationParams={{
              redirect_uri: window.location.origin,
            }}
            cacheLocation="localstorage"
          >
            <UserProvider>
              <App />
            </UserProvider>
          </Auth0Provider>
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>
  </React.StrictMode>,
);
