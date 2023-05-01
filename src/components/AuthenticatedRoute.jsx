import React, { useContext } from "react";
import { Navigate, Route } from "react-router-dom";
import Auth from "src/context/Auth";
import Login from "src/views/pages/login/Login";

function AuthenticatedRoute({path, component, name}){
    const { isAuthenticated} = useContext(Auth)

    return isAuthenticated ? (
        <Route path={path}  element={component} name={name} />
    ) : (
        <Route exact path="/login" name="Login Page" element={<Login />} />
    )
}

export default AuthenticatedRoute