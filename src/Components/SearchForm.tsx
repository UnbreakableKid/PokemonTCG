import axios from "axios";
import React, { Dispatch, useEffect } from "react";
import { card } from "./CardList";

import { Input, Button } from "@chakra-ui/react";
import PokeTypes, { Types } from "./PokeTypes";

interface SearchFormProps {
  setCards: Dispatch<card[]>;
}

const SearchForm: React.FC<SearchFormProps> = ({ setCards }) => {
  const handleOnSubmit = async (e: any) => {
    e.preventDefault();

    setCards([]);
    try {
      const { data } = await axios.get(
        `https://api.pokemontcg.io/v1/cards?name=${searchTerm}&types=${
          types.join(",") || ""
        }`
      );

      setCards(data.cards);
      setSearchTerm("");
    } catch (error) {
      console.error(error);
    }
  };

  const [searchTerm, setSearchTerm] = React.useState("");
  const [types, setTypes] = React.useState<Types[]>([]);

  const handleTypeChange = (e: any) => {
    const { value, checked } = e.target;

    if (checked) {
      setTypes((current) => [...current, value]);
    } else {
      setTypes(types.filter((type) => type !== value));
    }
  };

  useEffect(() => {
    const getInitialCards = async () => {
      try {
        const { data } = await axios.get(
          "https://api.pokemontcg.io/v1/cards?pageSize=50"
        );

        setCards(data.cards);
      } catch (err) {
        console.log(err);
      }
    };

    getInitialCards();
  }, [setCards]);
  return (
    <form className="flex flex-col items-center my-5" onSubmit={handleOnSubmit}>
      <div>
        <Input
          className="border border-grey-500 rounded shadow h-full flex-grow p-1"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></Input>
        <Button
          className="bg-blue-700 text-white border rounded shadow px-2 ml-2 h-full"
          type="submit"
        >
          Search
        </Button>
      </div>
      <PokeTypes onInputChange={handleTypeChange} />
    </form>
  );
};

export default SearchForm;
