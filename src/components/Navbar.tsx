import Book from "../assets/navbar/book_svgrepo.com.png";

const Navbar = () => {
  return (
    <div className=" select-none font-Aptos border bg-white max-w-[1114px] w-full flex items-center rounded-[34px] justify-center mt-8">
      <div className="flex flex-row justify-between items-center w-full py-1 px-8 ">
        <div className="flex justify-center items-center gap-1 w-max ">
          <img src={Book} className=" size-full" alt="" />
          <h2 className="text-secondary font-black text-xl">BIBLIOTECHA</h2>
        </div>
        <div className="flex flex-row justify-end items-center w-1/2 gap-5 text-sm">
          <div className="flex flex-row gap-8 ">
            <a href="/">Home</a>
            <a href="">Contact</a>
            <a href="">About Us</a>
          </div>
          <div className="flex flex-row gap-5 items-center">
            <button className="h-f py-2 px-3 border-2 border-primary rounded-3xl ">
              LogIn
            </button>
            <button className="h-f py-2 px-3 bg-primary rounded-3xl">
              Try for free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
