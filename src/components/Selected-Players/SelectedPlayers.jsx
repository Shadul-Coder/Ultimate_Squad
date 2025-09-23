import Selected from "./Selected";

const SelectedPlayers = ({
  selectedPlayers,
  setSelectedPlayers,
  coin,
  setCoin,
  buttonRef,
}) => {
  return (
    <div className="my-10 space-y-5">
      {selectedPlayers.map((player) => (
        <Selected
          key={player.id}
          player={player}
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
          coin={coin}
          setCoin={setCoin}
        ></Selected>
      ))}
      {selectedPlayers.length !== 0 ? (
        <button
          onClick={() => buttonRef.current.click()}
          className="mt-10 ml-2 btn text-black font-bold bg-[#E7FE29] border-none shadow-none rounded-lg outline-1 outline-[#1313131a] outline-offset-7"
        >
          Add More Player
        </button>
      ) : (
        <p className="py-20 text-center text-[#131313b3]">No Player Added</p>
      )}
    </div>
  );
};

export default SelectedPlayers;