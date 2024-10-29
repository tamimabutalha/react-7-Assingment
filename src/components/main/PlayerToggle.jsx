import { useState } from "react";

import Players from "../player/Players";
import SelectedPlayers from "../player/SelectedPlayers"; // Import the new component

function PlayerToggle({
  money,
  setMoney,
  selectedPlayers,
  setSelectedPlayers,
}) {
  const [selected, setSelected] = useState(false);
  const selectedCount = selectedPlayers.length; // Get count of selected players
  const totalPlayers = 6; // Replace with actual total player count

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 40px",
        }}>
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            margin: 0,
          }}>
          {selected
            ? `Selected Player (${selectedCount}/${totalPlayers})`
            : "Available Players"}
        </h2>
        <div
          style={{
            display: "flex",
            border: "1px solid #ddd",
            borderRadius: "20px",
            overflow: "hidden",
            backgroundColor: "#F8F8F8",
          }}>
          <button
            onClick={() => setSelected(false)}
            style={{
              backgroundColor: !selected ? "#FFFF00" : "transparent",
              color: !selected ? "#000" : "#888",
              padding: "5px 15px",
              border: "none",
              fontWeight: "bold",
              fontSize: "12px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
              borderRadius: !selected ? "20px" : "none",
            }}>
            Available
          </button>
          <button
            onClick={() => setSelected(true)}
            style={{
              backgroundColor: selected ? "#FFFF00" : "transparent",
              color: selected ? "#000" : "#888",
              padding: "10px 20px",
              border: "none",
              fontWeight: "bold",
              fontSize: "12px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
              borderRadius: selected ? "20px" : "none",
            }}>
            Selected ({selectedCount})
          </button>
        </div>
      </div>
      <div>
        {selected ? (
          <SelectedPlayers
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
            setMoney={setMoney} // Pass setMoney to SelectedPlayers
            setCount={setSelected}
          /> // Render selected players
        ) : (
          <Players
            money={money}
            setMoney={setMoney}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
          />
        )}
      </div>
    </div>
  );
}

export default PlayerToggle;
