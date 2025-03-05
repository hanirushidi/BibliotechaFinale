import AdminLayout from "@/components/layout/admin/AdminLayout";
import DashboradCard from "@/components/layout/admin/DashboardCard";
import { Button } from "@/components/ui/button";
import GenreChart from "@/components/layout/admin/GenreChart";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { fetchBooks } from "@/store/booksSlice";

const AdminDashboard = () => {
  const dispatch: AppDispatch = useDispatch();
  const bookCount = useSelector((state: RootState) => state.books.count);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  return (
    <>
      <AdminLayout>
        <div className="flex flex-col gap-5 font-Aptos">
          <h1 className="font-Aptos font-black text-4xl">Dashboard</h1>
          <div className="flex flex-wrap gap-5 mt-10">
            <DashboradCard
              title="Total Users"
              value="834"
              percentage="+39.1%"
            />
            <DashboradCard
              title="Total Books"
              value={bookCount.toString()}
              percentage="+5.1%"
            />
            <DashboradCard
              title="Total Audiobooks"
              value="389"
              percentage="+12.1%"
            />
            <DashboradCard
              title="Books downloaded today"
              value="12"
              percentage="+39.1%"
            />
          </div>
          <div>
            <GenreChart />
          </div>
          <div className="flex flex-wrap gap-3">
            <NavLink to="/admin/books">
              <Button className="p-6">Add Book</Button>
            </NavLink>
            <NavLink to="/admin/audiobooks">
              <Button className="p-6">Add Audiobook</Button>
            </NavLink>
            <NavLink to="/admin/users">
              <Button className="p-6">Add User</Button>
            </NavLink>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default AdminDashboard;
