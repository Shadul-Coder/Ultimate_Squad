const MenuTittle = ({ toggle, setToggle, selectedPlayers, buttonRef }) => {
  return (
    <div className="mt-20 flex justify-between items-center">
      <h1 className="text-[27px] font-bold">
        {toggle
          ? "Available Players"
          : `Selected Player (${selectedPlayers.length}/6)`}
      </h1>
      <div>
        <button
          ref={buttonRef}
          onClick={() => {
            setToggle(true);
          }}
          className={`border-1 border-[#1313131a] px-5 py-3 border-r-0 rounded-l-2xl cursor-pointer ${
            toggle && "bg-[#E7FE29] font-bold transition-all"
          } ${toggle || "text-[#13131399]"}`}
        >
          Available
        </button>
        <button
          onClick={() => {
            setToggle(false);
          }}
          className={`border-1 border-[#1313131a] px-5 py-3 border-l-0 rounded-r-2xl cursor-pointer ${
            toggle || "bg-[#E7FE29] font-bold transition-all"
          } ${toggle && "text-[#13131399]"}`}
        >
          Selected ({selectedPlayers.length})
        </button>
      </div>
    </div>
  );
};

export default MenuTittle;