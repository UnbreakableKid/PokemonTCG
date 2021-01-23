import { Checkbox, Input } from "@chakra-ui/react";
import axios from "axios";
import React from "react";

interface PokeTypesProps {
  onInputChange: (e: any) => void;
}

export interface Types {
  name: string;
}

const PokeTypes: React.FC<PokeTypesProps> = ({ onInputChange }) => {
  const [types, setTypes] = React.useState([]);

  React.useEffect(() => {
    const getTypes = async () => {
      try {
        const { data } = await axios.get("https://api.pokemontcg.io/v1/types");
        setTypes(data.types);
      } catch (error) {
        console.error(error);
      }
    };

    getTypes();
  }, []);

  return (
    <div className="w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 p-5">
      {types.map((type: string) => (
        <label
          className={`flex justify-between border rounded py-1 px-2 cursor-pointer text-${type.toLowerCase()} border-${type.toLowerCase()}`}
          key={type}
        >
          {" "}
          <span>{type}</span>
          <Checkbox name="pokemonType" value={type} onChange={onInputChange} />
        </label>
      ))}
    </div>
  );
};

export default PokeTypes;
