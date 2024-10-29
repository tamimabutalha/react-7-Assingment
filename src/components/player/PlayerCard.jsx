import flag from "../../assets/flag.png";

const PlayerCard = ({
  name,
  country,
  role,
  rating,
  price,
  image,
  buttonText,
  onButtonClick = () => {}, // Default function
}) => (
  <div className="p-4 border rounded-lg shadow-md relative max-w-sm bg-white">
    
    <img
      src={image}
      alt={name}
      className="w-full h-64 object-cover rounded-t-lg"
    />

    
    <div className="p-4">
      <h3 className=" font-semibold">{name}</h3>

      
      <div className="flex items-center text-gray-500 text-xs mt-1">
        <img src={flag} alt="Country Flag" className="mr-2 w-4 h-4" />
        <span>{country}</span>
        <span className="ml-auto px-2 py-1 textarea-xs bg-gray-200 rounded-lg">
          {role}
        </span>
      </div>

      {/* Rating */}
      <div className="text-xs text-gray-700 mt-3">
        <span className="font-bold ">Rating:</span> {rating}
      </div>

      {/* Price */}
      <div className="text-xs text-gray-700 mt-1">
        <span className="font-bold">Price:</span> {price}
      </div>

      {/* Choose Player Button */}
      <button
        className="mt-4  bg-gray-200 hover:bg-yellow-500 text-gray-800 py-2 px-2 ml-36 rounded-md font-bold flex items-center textarea-xs border border-yellow-500 shadow-md"
        onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  </div>
);

export default PlayerCard;
