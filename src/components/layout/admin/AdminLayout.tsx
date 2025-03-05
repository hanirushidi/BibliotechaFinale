import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex w-full">
      <Sidebar />
      <div className="flex w-full flex-col h-full">
        <Topbar />
        <div className="p-10 md:pl-[320px] lg:pl-[380px]">{children}</div>
      </div>
    </main>
  );
};

export default AdminLayout;
