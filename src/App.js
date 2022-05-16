import { useState } from "react";
import DropDown from "./components/DropDown";

function App() {
  const [data, setData] = useState([
    { id: 1, label: "Bitcoin", value: "Bitcoin" },
    { id: 2, label: "Ethereum", value: "Ethereum" },
    { id: 3, label: "Cardano", value: "Cardano" },
    { id: 4, label: "Binanc", value: "Binanc" },
    { id: 5, label: "Atom", value: "Atom" },
    { id: 6, label: "Tether", value: "Tether" },
    { id: 7, label: "Shiba", value: "Shiba" },
    { id: 8, label: "DogCoin", value: "DogCoin" },
  ]);

  const [selected, setSelected] = useState([]);

  const deleteCoins = (id) => {
    setSelected(selected.filter((item) => item.id !== id));
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
        items={data}
        onDelete={deleteCoins}
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
}

export default App;
