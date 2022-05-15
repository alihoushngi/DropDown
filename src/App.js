import { useState } from "react";
import DropDown from "./components/DropDown";

function App() {
  const [coin, setCoin] = useState([
    { id: 1, label: "Bitcoin", value: "Bitcoin" },
    { id: 2, label: "Ethereum", value: "Ethereum" },
    { id: 3, label: "Cardano", value: "Cardano" },
    { id: 4, label: "Binanc", value: "Binanc" },
    { id: 5, label: "Atom", value: "Atom" },
    { id: 6, label: "Tether", value: "Tether" },
    { id: 7, label: "Shiba", value: "Shiba" },
    { id: 8, label: "DogCoin", value: "DogCoin" },
  ]);

  const [data, setData] = useState([]);

  const deleteCoins = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div
      style={{
        width: "700px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <DropDown
        item={coin}
        onDelete={deleteCoins}
        data={data}
        onChange={setData}
      />
    </div>
  );
}

export default App;
