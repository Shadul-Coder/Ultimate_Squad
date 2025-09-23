import { toast } from "react-toastify";
import DeleteIcon from "../../assets/Delete.png";
import { removeFromLocal, setAmount } from "../../utils/LocalStorage";

const Selected = ({
  player,
  selectedPlayers,
  setSelectedPlayers,
  coin,
  setCoin,
}) => {
  const handleClick = () => {
    setSelectedPlayers(
      selectedPlayers.filter((selected) => selected.name !== player.name)
    );
    setCoin(coin + player.price);
    setAmount(coin + player.price);
    toast("Player Removed");
    removeFromLocal(player.name);
  };
  return (
    <div className="flex justify-between items-center border-1 border-[#1313131a] p-3 rounded-2xl">
      <div className="flex items-center gap-5">
        <img className="h-[75px] rounded-xl" src={player.img_link} alt="" />
        <div>
          <h3 className="text-2xl font-bold">{player.name}</h3>
          <h5 className="text-[#13131399]">{player.category}</h5>
        </div>
      </div>
      <img
        onClick={handleClick}
        className="mr-7 cursor-pointer"
        src={DeleteIcon}
        alt=""
      />
    </div>
  );
};

export default Selected;