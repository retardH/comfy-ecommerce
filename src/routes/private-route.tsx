import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

type PrivatRouteProps = {
  children: React.ReactNode;
};

const PrivateRoute: FC<PrivatRouteProps> = ({ children }) => {
  const { user } = useAuth0();
  return <>{user ? children : <Navigate to="/"></Navigate>}</>;
};

export default PrivateRoute;
