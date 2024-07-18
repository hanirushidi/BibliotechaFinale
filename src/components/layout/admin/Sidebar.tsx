import {
  FileMusic,
  Book,
  Home,
  LineChart,
  LogOut,
  LibraryBig,
  Users,
} from "lucide-react";

import { Link, NavLink, Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="grid min-h-screen md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-muted/40 md:block">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
              <NavLink to="/" className="flex items-center gap-2 font-semibold">
                <Book className="h-6 w-6 text-[#00633F]" />
                <span className="font-black text-[#00633F]">Bibliotecha</span>
              </NavLink>
            </div>
            <div className="flex-1">
              <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                <NavLink
                  to="/admin/dashboard"
                  className={({ isActive }: { isActive: boolean }) =>
                    isActive
                      ? "flex items-center gap-3 rounded-lg bg-[#00633F] px-3 py-2 text-secondary transition-all hover:text-[#dcfff2]"
                      : "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  }
                >
                  <Home className="h-4 w-4" />
                  Dashboard
                </NavLink>
                <NavLink
                  to="/admin/books"
                  className={({ isActive }: { isActive: boolean }) =>
                    isActive
                      ? "flex items-center gap-3 rounded-lg bg-[#00633F] px-3 py-2 text-secondary transition-all hover:text-[#dcfff2]"
                      : "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  }
                >
                  <LibraryBig className="h-4 w-4" />
                  Books
                </NavLink>
                <NavLink
                  to="/admin/audiobooks"
                  className={({ isActive }: { isActive: boolean }) =>
                    isActive
                      ? "flex items-center gap-3 rounded-lg bg-[#00633F] px-3 py-2 text-secondary transition-all hover:text-[#dcfff2]"
                      : "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  }
                >
                  <FileMusic className="h-4 w-4" />
                  AudioBooks{" "}
                </NavLink>
                <NavLink
                  to="/admin/users"
                  className={({ isActive }: { isActive: boolean }) =>
                    isActive
                      ? "flex items-center gap-3 rounded-lg bg-[#00633F] px-3 py-2 text-secondary transition-all hover:text-[#dcfff2]"
                      : "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  }
                >
                  <Users className="h-4 w-4" />
                  Users
                </NavLink>
                <NavLink
                  to="/admin/analytics"
                  className={({ isActive }: { isActive: boolean }) =>
                    isActive
                      ? "flex items-center gap-3 rounded-lg bg-[#00633F] px-3 py-2 text-secondary transition-all hover:text-[#dcfff2]"
                      : "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  }
                >
                  <LineChart className="h-4 w-4" />
                  Analytics
                </NavLink>
              </nav>
            </div>
            <div className="mt-auto p-4">
              <Link
                to="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Link>
            </div>
          </div>
        </div>

        <Outlet />
      </div>
    </>
  );
};

export default Sidebar;
