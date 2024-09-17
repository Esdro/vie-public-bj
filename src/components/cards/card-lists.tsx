import React from "react";
import CardComponent from "./card-component";

type CardListProps = {
  data: any[];
};

function CardList({ data }: CardListProps) {
  return (
    <div
      className={
        "flex lg:flex-row flex-col basis-1/2 md:basis-2/5 !my-4 mb-3 pb-16 md:pb-4" +
        " gap-3" +
        " flex-wrap" +
        " justify-center" +
        " items-baseline"
      }
    >
      {data.map((card, index) => (
        <CardComponent key={index} card={card} />
      ))}
    </div>
  );
}

export default CardList;
