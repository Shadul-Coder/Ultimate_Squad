import { toast } from "react-toastify";
import BannerLogo from "../../assets/Banner Logo.png";
import BgShadow from "../../assets/Bg Shadow.png";
import { setAmount } from "../../utils/LocalStorage";

const HeroSection = ({ setCoin }) => {
  return (
    <section
      className="max-w-7xl mx-auto w-[97%] px-10 py-17 rounded-3xl bg-black text-white space-y-7 bg-cover bg-center max-sm:w-[95%] max-sm:py-10 max-sm:space-y-5"
      style={{
        backgroundImage: `url(${BgShadow})`,
      }}
    >
      <img className="mx-auto max-sm:h-[100px]" src={BannerLogo} alt="" />
      <h1 className="mt-3 text-4xl font-bold text-center max-sm:text-lg">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h1>
      <p className="mt-1 text-2xl text-center max-sm:text-sm">
        Beyond Boundaries Beyond Limit
      </p>
      <button
        onClick={() => {
          setCoin(3000000);
          setAmount(3000000);
          toast.success("Success! Credits added!");
        }}
        className="btn mx-auto block text-black font-bold bg-[#E7FE29] border-none rounded-lg outline-1 outline-[#E7FE29] outline-offset-7 max-sm:outline-offset-5"
      >
        Claim Free Credit
      </button>
    </section>
  );
};

export default HeroSection;