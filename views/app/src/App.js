import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Contract from "./pages/Contract";
import NoPage from "./pages/NoPage";
import { LogIn, SignUp } from "./pages/auth";
// import AuthenticateRoutes, { AuthRoute  } from "./pages/auth/route_guard";
import { DevRoute } from "./pages/auth/route_guard";
import ForgotPassword from "./pages/auth/forgot_password";
import User from "./pages/User";
export default function App() {
    let guarded_routes = [
        { component: <Home />, path: "home" },
        { component: <Contract />, path: "contract" },
        { component: <Search />, path: "search" },
        { component: <User />, path: "user/:id" },
    ];

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LogIn />} />
                <Route path="/signup" element={<SignUp />} />
                {/* { guarded_routes.map(AuthenticateRoutes) } */}
                {guarded_routes.map(DevRoute)}

                <Route path="/forgot_password" element={<ForgotPassword />} />
                <Route path="/not_found" element={<NoPage />} />
                <Route
                    path="*"
                    element={<Navigate to="/not_found" replace />}
                />
            </Routes>
        </BrowserRouter>
    );
}
