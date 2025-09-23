import User from "../../assets/User.png";
import Flag from "../../assets/Flag.png";
import { useState } from "react";
import { toast } from "react-toastify";
import { setAmount, setToLocal } from "../../utils/LocalStorage";

const Player = ({
  player,
  selectedPlayers,
  setSelectedPlayers,
  coin,
  setCoin,
}) => {
  const [selected, setSelected] = useState(false);
  const handleClick = () => {
    if (coin < player.price) {
      toast.error("Not Enough Coins");
      return;
    }
    if (selectedPlayers.length === 6) {
      toast.warning("Player limit reached");
      return;
    }
    setSelected(!selected);
    setCoin(coin - player.price);
    setSelectedPlayers([...selectedPlayers, player]);
    toast.success("Player Added");
    setAmount(coin - player.price);
    setToLocal(player);
  };
  return (
    <div className="p-5 border-1 border-[#1313131a] rounded-2xl space-y-6">
      <img className="w-full rounded-xl" src={player.img_link} alt="" />
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <img src={User} alt="" />
          <h3 className="text-xl font-semibold">{player.name}</h3>
        </div>
        <div className="flex justify-between items-center border-b-1 border-[#1313131a] py-3.5">
          <div className="flex items-center gap-2.5">
            <img src={Flag} alt="" />
            <h5>{player.nationality}</h5>
          </div>
          <h5 className="bg-[#1313130d] px-3 py-1.5 rounded-lg text-sm">
            {player.category}
          </h5>
        </div>
        <div className="flex justify-between">
          <p className="font-bold">Rating</p>
          <h5 className="text-[#131313b3]">{player.rating}</h5>
        </div>
        <div className="flex justify-between">
          <p className="font-bold">Batting-Hand</p>
          <h5 className="text-[#131313b3]">{player.hand}</h5>
        </div>
        <div className="flex justify-between items-center">
          <h3 className="font-bold">Price : ${player.price}</h3>
          <button
            onClick={handleClick}
            className={`transition-all px-3 py-2 text-black font-semibold border-1 border-[#1313131a] rounded-lg text-sm cursor-pointer ${
              selected
                ? "bg-[#E7FE29] outline-1 outline-[#E7FE29] outline-offset-3"
                : "bg-white"
            }`}
            disabled={selected}
          >
            {selected ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;