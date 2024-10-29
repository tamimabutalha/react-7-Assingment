import { useState } from "react";
import "./App.css";
import NavBar from "./components/Header/NavBar";
import Hero from "./components/hero/Hero";
import PlayerToggle from "./components/main/PlayerToggle";
import Footer from "./components/footer/Footer";

function App() {
  const [money, setMoney] = useState(0); 
  const [selectedPlayers, setSelectedPlayers] = useState([]); 

  const addMoney = () => {
    setMoney(money + 100000);
  };

  return (
    <>
      <NavBar money={money} />
      <div className="container mx-auto">
        <Hero addMoney={addMoney} />
        <PlayerToggle
          money={money}
          setMoney={setMoney}
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
