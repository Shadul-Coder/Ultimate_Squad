import BgShadow from "../../assets/Bg Shadow.png";
import ButtonBg from "../../assets/Subscribe Bg.png";

const SubscribeSection = () => {
  return (
    <div className="relative top-[-170px] max-w-7xl mx-auto w-[97%] bg-[#ffffff26] border-1 border-white p-5 rounded-4xl max-sm:top-[-100px] max-sm:p-3">
      <div
        style={{ backgroundImage: `url(${BgShadow})` }}
        className="py-20 rounded-3xl bg-white text-black bg-center bg-cover space-y-7 max-sm:space-y-3 max-sm:py-10"
      >
        <h3 className="text-center text-3xl font-bold max-sm:text-base">
          Subscribe to our Newsletter
        </h3>
        <p className="text-center text-[#131313b3] text-xl max-sm:text-[13px] max-sm:w-[70%] max-sm:mx-auto">
          Get the latest updates and news right in your inbox!
        </p>
        <div className="flex justify-center gap-3.5 max-sm:gap-1 max-sm:w-[90%] max-sm:mx-auto">
          <input
            className="min-w-[350px] px-7 py-3.5 border-1 border-[#13131326] rounded-2xl focus:outline-0 max-sm:min-w-0 max-sm:px-3 max-sm:py-3 max-sm:text-sm"
            type="email"
            placeholder="Enter Your Email"
            name=""
            id=""
          />
          <input
            style={{ backgroundImage: `url(${ButtonBg})` }}
            className="px-7 py-3.5 font-bold rounded-2xl cursor-pointer max-sm:px-3 max-sm:py-3 max-sm:text-sm"
            type="submit"
            value="Subscribe"
          />
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;