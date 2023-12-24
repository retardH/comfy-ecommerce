import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ProductsProvider } from './contexts/products.tsx';
import { UserProvider } from './contexts/user.tsx';
import { FilterProvider } from './contexts/filter.tsx';
import { CartProvider } from './contexts/cart.tsx';
import { Auth0Provider } from '@auth0/auth0-react';

// domain dev-k4xjcmtksbk4u1ld.us.auth0.com
// client id oiO8Njg1SkNrA0VifVgV02QO8JEJBYyZ

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <Auth0Provider
            domain="dev-k4xjcmtksbk4u1ld.us.auth0.com"
            clientId="oiO8Njg1SkNrA0VifVgV02QO8JEJBYyZ"
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
