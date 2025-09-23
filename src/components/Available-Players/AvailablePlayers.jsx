import { use } from "react";
import Player from "./Player";

const AvailablePlayers = ({
  playersPromise,
  selectedPlayers,
  setSelectedPlayers,
  coin,
  setCoin,
}) => {
  const playersData = use(playersPromise);
  return (
    <div className="grid grid-cols-3 gap-5 my-10 max-sm:grid-cols-1 max-sm:my-5">
      {playersData.map((player) => (
        <Player
          key={player.id}
          player={player}
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
          coin={coin}
          setCoin={setCoin}
        ></Player>
      ))}
    </div>
  );
};

export default AvailablePlayers;