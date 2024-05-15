import Navbar from "./Navbar";
import Spline from "@splinetool/react-spline";

const HeroSection = () => {
  return (
    <div className="h-full w-full flex flex-col items-center bg-[#00653C] rounded-b-3xl gap-12 ">
      <Navbar />
      <div className="flex flex-col w-fit items-center gap-5">
        <div className="flex flex-col items-center gap-2">
          <h1 className="font-Aptos font-black text-5xl text-[#B3FF0A]">
            BIBLIOTECHA,
          </h1>

          <h1 className="font-Aptos font-black md:text-5xl text-4xl text-white ">
            Reading-platform of the readers.
          </h1>
        </div>
        <div className="pb-7 flex flex-col items-center gap-10">
          <button className="h-f py-2 px-3 bg-primary rounded-xl">
            Get started now!
          </button>

          <Spline scene="https://prod.spline.design/1baJlNQeD1V4Er3r/scene.splinecode" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
