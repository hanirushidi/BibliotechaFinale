import RichCollection from "../assets/images/RichCollection.svg";
import DiscussPanel from "../assets/images/DiscussPanel.svg";
import DiverseGenre from "../assets/images/DiverseGenre.svg";
const WhyBibliotecha = () => {
  return (
    <>
      <div className="flex flex-col gap-8 font-Aptos items-center mt-28 ">
        <h1 className="font-light md:text-4xl text-2xl ">
          Why <span className="font-black text-green">BIBLIOTECHA</span>
        </h1>

        <div className="flex flex-col items-center justify-center max-w-screen-2xl">
          <div className="flex flex-row items-start">
            <div className="flex flex-col gap-5 bg-slate-200 items-center">
              <img src={RichCollection} className="w-[120px] h-[120px] " />
              <h2 className="font-semibold text-2xl">Rich Collection</h2>
              <p className="text-center max-w-sm">
                Explore a vast library of both audiobooks and books, covering a
                wide range of genres and topics.
              </p>
            </div>

            <div className="flex flex-col gap-5 bg-slate-300 items-center">
              <img src={DiverseGenre} alt="" className="w-[120px] h-[120px]" />
              <h2 className="font-semibold text-2xl ">Diverse Genres</h2>
              <p className=" text-center max-w-sm">
                Discover your favorite genres and with our diverse selection,
                including fiction, non-fiction, mystery, romance, self-help, and
                more.{" "}
              </p>
            </div>

            <div className="flex flex-col bg-slate-400  gap-5 items-center">
              <img src={DiscussPanel} alt="" className="w-[120px] h-[120px]" />
              <h2 className="font-semibold text-2xl">Discussion Panels</h2>
              <p className="text-center max-w-sm">
                Engage in lively discussions, share insights, and exchange
                recommendations with fellow readers and listeners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyBibliotecha;
