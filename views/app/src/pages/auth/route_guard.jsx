import React from "react";
import { Navigate, Route, redirect } from "react-router-dom";

export function hasJWT() {
    //check user has JWT token
    return localStorage.getItem("token") ? true : false;
}
const route_guard = async () => {
    console.log("route_guard called");
    if (!hasJWT()) {
        return redirect("/login");
    }
    return true;
};

export function AuthRoute({ children }) {
    if (!hasJWT()) return <Navigate to="/login" replace />;
    return children;
}
export default function AuthenticateRoutes({ path, component }, i) {
    return <Route key={`route_${i}`} element={<AuthRoute> {component} </AuthRoute>} path={path} />;
}

export function DevRoute({ path, component }, i) {
    return <Route key={`route_${i}`} element={component}  path={path} />;
}


export { route_guard };
