import React from "react";
import { card } from "./CardList";

interface CardListItemProps {
  card: card;
  imageURL: string;
}

const CardListItem: React.FC<CardListItemProps> = ({ card, imageURL }) => {
  const baseURL = `https://www.pokemon.com/us/pokemon-tcg/pokemon-cards/?cardName=${
    card.name || ""
  }&evolvesFrom=${card.evolvesFrom || ""}&particularArtist=${
    card.artist || ""
  }`;
  return (
    <li>
      <a
        className="block h-full"
        target="_blank"
        href={baseURL}
        rel="noopener noreferrer"
      >
        <img
          className="w-full h-auto"
          src={imageURL}
          alt={`${card.name} Pokémon Card`}
        />
      </a>
    </li>
  );
};

export default CardListItem;
