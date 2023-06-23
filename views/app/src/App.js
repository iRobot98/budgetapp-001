
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Contract from "./pages/Contract";
import NoPage from "./pages/NoPage";
import { Log_In, route_guard } from "./pages/auth";


export default function App() {
  return (
    <BrowserRouter >
      <Routes >
        <Route path="/login" element={<Log_In />} />
        <Route path="/" element={<Layout />}>
          {[
            { component: <Home />, path: "home" },
            { component: <Contract />, path: "contract" },
            { component: <Search />, path: "search" }]
            .map(({ path, component }) => <Route element={component} path={path} loader={route_guard} />)
          }
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
