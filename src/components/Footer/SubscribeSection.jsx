import BgShadow from "../../assets/Bg Shadow.png";
import ButtonBg from "../../assets/Subscribe Bg.png";

const SubscribeSection = () => {
  return (
    <div className="relative top-[-170px] max-w-7xl mx-auto w-[97%] bg-[#ffffff26] border-1 border-white p-5 rounded-4xl">
      <div
        style={{ backgroundImage: `url(${BgShadow})` }}
        className="py-20 rounded-3xl bg-white text-black bg-center bg-cover space-y-7"
      >
        <h3 className="text-center text-3xl font-bold">
          Subscribe to our Newsletter
        </h3>
        <p className="text-center text-[#131313b3] text-xl">
          Get the latest updates and news right in your inbox!
        </p>
        <div className="flex justify-center gap-3.5">
          <input
            className="min-w-[350px] px-7 py-3.5 border-1 border-[#13131326] rounded-2xl focus:outline-0"
            type="email"
            placeholder="Enter Your Email"
            name=""
            id=""
          />
          <input
            style={{ backgroundImage: `url(${ButtonBg})` }}
            className="px-7 py-3.5 font-bold rounded-2xl cursor-pointer"
            type="submit"
            value="Subscribe"
          />
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;