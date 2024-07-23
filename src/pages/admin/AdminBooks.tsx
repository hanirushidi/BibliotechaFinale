import AdminLayout from "@/components/layout/admin/AdminLayout";
import Component from "@/components/ui/booksList";
import AddBookModal from "@/components/admin/AddBookModal";

const AdminBooks = () => {
  return (
    <AdminLayout>
      <div className="flex flex-col gap-5">
        <h1 className="font-Aptos font-black text-4xl">Book Shelf</h1>
      </div>

      <div className="flex flex-col gap-4 min-w-full items-end ">
        <AddBookModal />
        <Component />
      </div>
    </AdminLayout>
  );
};

export default AdminBooks;
