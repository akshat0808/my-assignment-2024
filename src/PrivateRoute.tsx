// src/PrivateRoute.tsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface PrivateRouteProps {
  authenticated: boolean;
  redirectPath: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ authenticated, redirectPath }) => {
  return authenticated ? (
    <Outlet/>
  ) : (
    <Navigate to={redirectPath} replace={true} />
  );
};

export default PrivateRoute;
