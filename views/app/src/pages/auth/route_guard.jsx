import React from 'react';
import { redirect } from 'react-router-dom';

function hasJWT() {
    //check user has JWT token
    return localStorage.getItem("token") ? true : false
}
const route_guard = async () => {

    if (!hasJWT()) {
        return redirect("/login");
    }
    return null;
};

export default route_guard

