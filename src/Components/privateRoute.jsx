import React from "react";
import { Navigate, Outlet } from "react-router";
import { useAuthStatus } from "../Hooks/useAuthStatus";
import Spinner from "./Spinner";
const PrivateRoute = () => {
  const { loggedin, loading } = useAuthStatus();
  if (loading) {
    return <Spinner />;
  }
  return loggedin ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default PrivateRoute;
