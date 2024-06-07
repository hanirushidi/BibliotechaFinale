import facebook from "@/assets/icon/facebook.svg";
import instagram from "@/assets/icon/instagram.svg";

const Footer = () => {
  return (
    <>
      <div className="bg-[#00633F] flex flex-col font-Aptos gap-7 justify-center items-center text-white ">
        <h1 className="text-3xl text-white font-black mt-14">BIBLIOTECHA</h1>
        <div>
          <ul className="flex flex-row text-md font-thin gap-4">
            <li>Contact</li>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Docs</li>
            <li>Sign In</li>
          </ul>
        </div>
        <div className="flex flex-row gap-3">
          <button>
            <img src={instagram} alt="" />
          </button>
          <button>
            <img src={facebook} alt="" />
          </button>
        </div>
        <p className="text-md font-thin pb-5">© 2025 Bibliotecha, Inc.</p>
      </div>
    </>
  );
};

export default Footer;
