import Logo from "../../assets/Logo Footer.png";
import ButtonBg from "../../assets/Subscribe Bg.png";
import SubscribeSection from "./SubscribeSection";

const Footer = () => {
  return (
    <>
      <SubscribeSection></SubscribeSection>
      <div className="relative max-w-7xl top-[-75px] mx-auto w-[97%]">
        <img className="mx-auto mb-15" src={Logo} alt="" />
        <div className="flex justify-between items-start">
          <div className="max-w-[300px]">
            <h5 className="mb-3 text-lg font-semibold">About Us</h5>
            <p className="text-[#ffffff99]">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>
          <div>
            <h5 className="mb-3 text-lg font-semibold">Quick Links</h5>
            <ul className="text-[#ffffff99] list-disc pl-5 space-y-3">
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="max-w-[300px]  space-y-3">
              <h5 className="text-lg font-semibold">Subscribe</h5>
              <p className="text-[#ffffff99]">
                Subscribe to our newsletter for the latest updates.
              </p>
            </div>
            <input
              className="bg-white text-black px-6 py-3 rounded-l-2xl focus:outline-0"
              type="email"
              placeholder="your@email.com"
              name=""
              id=""
            />
            <input
              style={{ backgroundImage: `url(${ButtonBg})` }}
              className="bg-center text-black font-bold px-6 py-3 rounded-r-2xl cursor-pointer"
              type="submit"
              value="Subscribe"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;