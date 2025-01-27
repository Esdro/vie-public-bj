import React from "react";
import CardComponent from "./card-component";

type CardListProps = {
  data: any[];
};

function CardList({ data }: CardListProps) {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-2 `}
    >
      {data.map((card, index) => (
        <CardComponent key={index} card={card} />
      ))}
    </div>
  );
}

export default CardList;
