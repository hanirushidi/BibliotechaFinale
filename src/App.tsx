import Navbar from "./components/layout/Navbar";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Auth from "./pages/Auth";
import AdminBooks from "./pages/admin/AdminBooks";
import AdminAudiobooks from "./pages/admin/AdminAudiobooks";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminAnalytics from "./pages/admin/AdminAnalytics";

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
            element={
              isAuthenticated ? <Navigate to="/admin/dashboard" /> : <Auth />
            }
          />
          <Route
            path="/admin/dashboard"
            element={
              isAuthenticated ? <AdminDashboard /> : <Navigate to="/auth" />
            }
          />
          <Route
            path="/admin/books"
            element={isAuthenticated ? <AdminBooks /> : <Navigate to="/auth" />}
          />
          <Route
            path="/admin/audiobooks"
            element={
              isAuthenticated ? <AdminAudiobooks /> : <Navigate to="/auth" />
            }
          />
          <Route
            path="/admin/users"
            element={isAuthenticated ? <AdminUsers /> : <Navigate to="/auth" />}
          />
          <Route
            path="/admin/analytics"
            element={
              isAuthenticated ? <AdminAnalytics /> : <Navigate to="/auth" />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
