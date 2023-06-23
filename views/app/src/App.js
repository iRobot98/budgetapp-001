import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Contract from "./pages/Contract";
import NoPage from "./pages/NoPage";
import { LogIn, route_guard, hasJWT } from "./pages/auth";
import AuthenticateRoutes, { AuthRoute } from "./pages/auth/route_guard";

export default function App() {
    let routes_ = [
        { component: <Home />, path: "home" },
        { component: <Contract />, path: "contract" },
        { component: <Search />, path: "search" },
    ];

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LogIn />} />
               { routes_ 
            .map(AuthenticateRoutes)
          }
           
                <Route path="*" element={<NoPage />} />
            </Routes>
        </BrowserRouter>
    );
}
