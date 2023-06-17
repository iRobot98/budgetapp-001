
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Contract from "./pages/Contract";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="contract" element={<Contract />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
