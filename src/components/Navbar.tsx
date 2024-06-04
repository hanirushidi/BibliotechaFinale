import logo from "../assets/navbar/Logo.svg";
import Vector from "../assets/navbar/Vector.svg";
import burger from "../assets/navbar/burgersvg.svg";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <>
      <div className="sticky top-5 flex justify-center w-full z-50">
        <Sheet>
          <div className="self-center select-none font-Aptos max-w-[1114px] w-full flex flex-1 rounded-[34px] backdrop-blur-md bg-opacity-85 bg-neutral-700 py-1">
            <div className="flex flex-row justify-between items-center w-full py-1 px-8 ">
              <div className="flex justify-center items-center gap-1 w-max">
                <img src={logo} width={40} alt="" />
                <h2 className="text-white font-black text-xl">BIBLIOTECHA</h2>
              </div>
              <div className=" flex-row justify-end items-center  gap-5 text-sm hidden md:flex">
                <div className="flex flex-row gap-8 text-white font-Aptos ">
                  <a href="/">Home</a>
                  <a href="">Contact</a>
                  <a href="">About Us</a>
                </div>
                <div className="flex flex-row gap-5 items-center group">
                  <button className="flex flex-row gap-3 h-f py-2 px-3 bg-[#00633F] text-white rounded-3xl font-extralight">
                    Sign In{" "}
                    <img
                      src={Vector}
                      width={15}
                      alt=""
                      className="group-hover:rotate-180 transition-transform duration-500 ease-in-out"
                    />
                  </button>
                </div>
              </div>
              <div className="md:hidden flex group">
                <SheetTrigger>
                  <img
                    src={burger}
                    className="w-10 group-hover:rotate-180 transition-transform duration-500 ease-in-out"
                  />
                </SheetTrigger>
              </div>
            </div>
          </div>

          <SheetContent>
            <SheetHeader className="mt-32 font-medium gap-3 text-3xl">
              <div>
                <ul className="flex flex-col gap-3 text-2xl font-Aptos ml-2">
                  <li>Home</li>
                  <li>Contact</li>
                  <li>About Us</li>
                  <li>AudioBooks</li>
                  <li>Books</li>
                </ul>
              </div>

              <div className="flex flex-row items-center">
                <button className="flex text-2xl items-center flex-row gap-3 h-fit py-2 px-4 bg-[#00633F] text-white group rounded-3xl font-extralight">
                  Create an account{" "}
                  <img
                    src={Vector}
                    width={15}
                    alt=""
                    className="select-none group-hover:rotate-180 transition-transform duration-500 ease-in-out"
                  />{" "}
                </button>
              </div>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default Navbar;
