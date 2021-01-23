import React from "react";
import "./App.css";
import CardList, { card } from "./Components/CardList";
import SearchForm from "./Components/SearchForm";

function App() {
  const [cards, setCards] = React.useState<card[]>([]);
  return (
    <div className="flex flex-col">
      <div className="flex justify-center bg-red-700">
        <h1 className="text-3xl text-white py-2">Pokemon</h1>
      </div>
      <div className="flex flex-col">
        <SearchForm setCards={setCards} />
        <CardList cards={cards} />
      </div>
    </div>
  );
}

export default App;
