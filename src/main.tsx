import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ProductsProvider } from './contexts/products.tsx';
import { UserProvider } from './contexts/user.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserProvider>
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </UserProvider>
  </React.StrictMode>,
);