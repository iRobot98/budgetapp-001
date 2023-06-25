import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Contract from "./pages/Contract";
import NoPage from "./pages/NoPage";
import { LogIn } from "./pages/auth";
// import AuthenticateRoutes, { AuthRoute  } from "./pages/auth/route_guard";
import { DevRoute } from "./pages/auth/route_guard";
import ForgotPassword from "./pages/auth/forgot_password";
export default function App() {
    let guarded_routes = [
        { component: <Home />, path: "home" },
        { component: <Contract />, path: "contract" },
        { component: <Search />, path: "search" },
    ];

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LogIn />} />
                {/* { guarded_routes.map(AuthenticateRoutes) } */}
                {guarded_routes.map(DevRoute)}

                <Route path="/forgot_password" element={<ForgotPassword />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </BrowserRouter>
    );
}
