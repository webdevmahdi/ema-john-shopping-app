import React, { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    let { user, loading } = useContext(AuthContext);
    
    if(loading){
        return <div>Hello</div>;
    }

    if(user){
        return children;
    }
  return <Navigate to='/login' state={{from: location}} replace ></Navigate>
}

export default PrivateRoute