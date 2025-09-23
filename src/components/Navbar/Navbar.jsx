import Logo from "../../assets/Logo.png";
import Dollar from "../../assets/Dollar.png";

const Navbar = ({ coin }) => {
  return (
    <nav className="max-w-7xl mx-auto my-5 w-[97%] flex justify-between items-center max-sm:w-[90%]">
      <img className="h-[70px] max-sm:h-[55px]" src={Logo} alt="" />
      <ul className="flex items-center gap-11 text-[#131313b3]">
        <li className="cursor-pointer max-sm:hidden">Home</li>
        <li className="cursor-pointer max-sm:hidden">Fixture</li>
        <li className="cursor-pointer max-sm:hidden">Teams</li>
        <li className="cursor-pointer max-sm:hidden">Schedules</li>
        <li>
          <div className="flex items-center gap-1.5 border-1 border-[#1313131a] px-3 py-1.5 rounded-xl">
            <h3 className="text-black font-bold">{coin}</h3>
            <div>
              <img src={Dollar} alt="" />
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;