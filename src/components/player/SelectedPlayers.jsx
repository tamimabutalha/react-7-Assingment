import deleteIcon from "../../assets/delete.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SelectedPlayers = ({
  selectedPlayers,
  setSelectedPlayers,
  setMoney,
  setCount,
}) => {
  const handleRemovePlayer = (player) => {
    setMoney((prevMoney) => prevMoney + Number(player.price));

   
    setSelectedPlayers((prevSelected) =>
      prevSelected.filter((p) => p.name !== player.name)
    );

   
    setTimeout(() => {
      toast.success(`${player.name}  removed from your team`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
       
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }, 0);
  };

  return (
    <div className="player-card">
      <ToastContainer />
      {selectedPlayers.map((player, index) => (
        <div
          key={index}
          className="player-info card my-2 p-4 shadow-lg rounded-md flex flex-col">
          <div className="flex flex-row items-center justify-between mb-2">
            <div className="flex flex-row items-center">
              <img
                src={player.image}
                className="w-12 h-12 rounded-full mr-4"
                alt={`${player.name}'s image`}
              />
              <div>
                <div className="player-name text-lg font-semibold">
                  {player.name}
                </div>
                <div className="batting-hand text-sm text-gray-600">
                  {player.role} ({player.country}) - Price: {player.price}
                </div>
              </div>
            </div>
            <button
              className="ml-auto"
              onClick={() => handleRemovePlayer(player)}>
              <img src={deleteIcon} className="w-8" alt="Delete Icon" />
            </button>
          </div>
        </div>
      ))}
      <button
        className="p-1 font-bold border-[#E7FE29] border rounded-lg"
        onClick={() => {
          setCount(false);
          console.log("Add more players clicked");
        }}>
        <div className="bg-[#eeff59] flex justify-center items-center text-center w-[150px] h-10 rounded-lg font-medium">
          Add More Players
        </div>
      </button>
    </div>
  );
};

export default SelectedPlayers;
