import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Home,
  LineChart,
  Menu,
  Package,
  Book,
  ShoppingCart,
  Users,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="flex flex-col">
      <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col">
            <nav className="grid gap-2 text-lg font-medium">
              <NavLink
                to="/"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Book className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
              </NavLink>
              <NavLink
                to="/admin/dashboard"
                className={({ isActive }: { isActive: boolean }) =>
                  isActive
                    ? "mx-[-0.65rem] flex items-center gap-4 rounded-xl  bg-[#00633F] px-3 py-2 text-white hover:text-white hover:bg-[#174d38]"
                    : "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                }
              >
                <Home className="h-5 w-5" />
                Dashboard
              </NavLink>
              <NavLink
                to="/admin/books"
                className={({ isActive }: { isActive: boolean }) =>
                  isActive
                    ? "mx-[-0.65rem] flex items-center gap-4 rounded-xl  bg-[#00633F] px-3 py-2 text-white hover:text-white hover:bg-[#174d38]"
                    : "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                }
              >
                <ShoppingCart className="h-5 w-5" />
                Books
              </NavLink>
              <NavLink
                to="/admin/audiobooks"
                className={({ isActive }: { isActive: boolean }) =>
                  isActive
                    ? "mx-[-0.65rem] flex items-center gap-4 rounded-xl  bg-[#00633F] px-3 py-2 text-white hover:text-white hover:bg-[#174d38]"
                    : "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                }
              >
                <Package className="h-5 w-5" />
                Audiobooks
              </NavLink>
              <NavLink
                to="/admin/users"
                className={({ isActive }: { isActive: boolean }) =>
                  isActive
                    ? "mx-[-0.65rem] flex items-center gap-4 rounded-xl  bg-[#00633F] px-3 py-2 text-white hover:text-white hover:bg-[#174d38]"
                    : "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                }
              >
                <Users className="h-5 w-5" />
                Users
              </NavLink>
              <NavLink
                to="/admin/analytics"
                className={({ isActive }: { isActive: boolean }) =>
                  isActive
                    ? "mx-[-0.65rem] flex items-center gap-4 rounded-xl  bg-[#00633F] px-3 py-2 text-white hover:text-white hover:bg-[#174d38]"
                    : "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                }
              >
                <LineChart className="h-5 w-5" />
                Analytics
              </NavLink>
            </nav>
          </SheetContent>
        </Sheet>
      </header>
    </div>
  );
};

export default Topbar;
