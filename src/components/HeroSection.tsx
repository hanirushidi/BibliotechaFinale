import Vector from "../assets/navbar/Vector.svg";
import VectorBlack from "../assets/navbar/VectoBlack.svg";
import herosection from "../assets/herosection.svg";
const HeroSection = () => {
  return (
    <div className="h-full w-full flex flex-col bg-stone-200 rounded-b-3xl gap-12 mt-[-50px] py-32 font-Aptos items-center text-center">
      <div className="flex flex-col max-w-screen-sm lg:max-w-screen-xl h-full gap-20 justify-center items-center ">
        <div className="flex flex-col gap-6 basis-1/2 justify-end h-full ">
          <div className="flex flex-col max-w-2xl gap-6">
            <h1 className="text-black text-5xl font-semibold leading-snug">
              One Destination for Books <br />
              and Audiobooks.
            </h1>
            <p className="text-black text-base font-light">
              Open an account in minutes and start reading or listening to a
              vast collection of books and audiobooks, gaining more knowledge
              and insights every day with{" "}
              <span className="font-semibold">BIBLIOTECHA</span>
            </p>
            <div className="flex flex-row gap-3 items-center justify-center ">
              <div className="flex flex-row items-center">
                <button className="flex items-center flex-row gap-3 h-f py-2 px-4 bg-[#00633F] text-white group rounded-3xl font-extralight">
                  Create an account{" "}
                  <img
                    src={Vector}
                    width={15}
                    alt=""
                    className="select-none group-hover:rotate-180 transition-transform duration-500 ease-in-out"
                  />{" "}
                </button>
              </div>
              <div>
                <button className="flex items-center flex-row gap-3 h-f py-2 px-4 group bg-[#F5F5F4] text-black rounded-3xl font-extralight">
                  Log In{" "}
                  <img
                    src={VectorBlack}
                    width={15}
                    alt=""
                    className=" flex group-hover:rotate-180 transition-transform duration-500 ease-in-out justify-center items-center"
                  />{" "}
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-full items-center justify-end">
          <img src={herosection} alt="" className="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
