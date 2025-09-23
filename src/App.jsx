import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/Hero-Section/HeroSection";
import MenuTittle from "./components/Menu-Tittle/MenuTittle";
import Loading from "./components/Loading/Loading";
import AvailablePlayers from "./components/Available-Players/AvailablePlayers";
import SelectedPlayers from "./components/Selected-Players/SelectedPlayers";
import Footer from "./components/Footer/Footer";
import { Suspense, useRef, useState } from "react";
import { ToastContainer } from "react-toastify";
import { getAmount, getFromLocal } from "./utils/LocalStorage";

const getPromise = async () => {
  let res = await fetch("Players.json");
  return res.json();
};

const playersPromise = getPromise();

const App = () => {
  const buttonRef = useRef(null);
  const [toggle, setToggle] = useState(true);
  const [coin, setCoin] = useState(getAmount());
  const [selectedPlayers, setSelectedPlayers] = useState(getFromLocal());
  return (
    <>
      <header>
        <Navbar coin={coin}></Navbar>
        <HeroSection setCoin={setCoin}></HeroSection>
      </header>
      <main>
        <section className="max-w-7xl mx-auto w-[97%]">
          <MenuTittle
            selectedPlayers={selectedPlayers}
            toggle={toggle}
            setToggle={setToggle}
            buttonRef={buttonRef}
          ></MenuTittle>
          {toggle ? (
            <Suspense fallback={<Loading></Loading>}>
              <AvailablePlayers
                selectedPlayers={selectedPlayers}
                setSelectedPlayers={setSelectedPlayers}
                coin={coin}
                setCoin={setCoin}
                playersPromise={playersPromise}
              ></AvailablePlayers>
            </Suspense>
          ) : (
            <SelectedPlayers
              selectedPlayers={selectedPlayers}
              setSelectedPlayers={setSelectedPlayers}
              coin={coin}
              setCoin={setCoin}
              buttonRef={buttonRef}
            ></SelectedPlayers>
          )}
        </section>
        <ToastContainer />
      </main>
      <footer className="bg-black text-white mt-50">
        <Footer></Footer>
        <small className="block text-center text-[#ffffff99] border-t-1 border-[#ffffff26] py-6">
          &copy; 2025 Ultimate Squad. All Rights Reserved.
        </small>
      </footer>
    </>
  );
};

export default App;