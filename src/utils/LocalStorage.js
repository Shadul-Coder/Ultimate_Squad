const getFromLocal = () => {
  const localData = localStorage.getItem("selected-players");
  if (localData) {
    return JSON.parse(localData);
  }
  return [];
};

const setToLocal = (player) => {
  const data = getFromLocal();
  data.push(player);
  localStorage.setItem("selected-players", JSON.stringify(data));
};

const removeFromLocal = (name) => {
  const prevData = getFromLocal();
  const newData = prevData.filter((player) => player.name !== name);
  localStorage.setItem("selected-players", JSON.stringify(newData));
};

const getAmount = () => {
  const amount = localStorage.getItem("coin");
  if (amount) {
    return JSON.parse(amount);
  }
  return 0;
};

const setAmount = (amount) => {
  localStorage.setItem("coin", JSON.stringify(amount));
};

export { getFromLocal, setToLocal, removeFromLocal, getAmount, setAmount };