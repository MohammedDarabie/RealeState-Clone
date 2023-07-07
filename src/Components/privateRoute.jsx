import React from "react";
import { Navigate, Outlet } from "react-router";
import {useAuthStatus} from '../Hooks/useAuthStatus'
const PrivateRoute = () => {
    const {loggedin , loading} = useAuthStatus();
    if(loading){
        return <h3>Loading...</h3>
    }
  return ( loggedin ? <Outlet /> : <Navigate to='/sign-in' />)
};

export default PrivateRoute;
