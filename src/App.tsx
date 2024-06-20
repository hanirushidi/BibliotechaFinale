import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import Admin from "./pages/Admin";
import Auth from "./pages/Auth";

function App() {
  const isAuthenticated = useSelector(
    (state: any) => state.auth.isAuthenticated
  );
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/" element={<HomePage />} />

            <Route path="*" element={<NotFound />} />
          </Route>
          <Route
            path="/auth"
            element={isAuthenticated ? <Navigate to="/admin" /> : <Auth />}
          />
          <Route
            path="/admin"
            element={isAuthenticated ? <Admin /> : <Navigate to="/auth" />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
