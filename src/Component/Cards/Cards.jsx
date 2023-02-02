import React from "react";
import {
  CardAction,
  CardContainer,
  CardImage,
  CardPrice,
  CardTitle,
} from "./Cards.styled";

const Cards = ({ image, title, desc, type, price }) => {
  return (
    <CardContainer>
      <CardImage src={image} alt="image" />
      <CardTitle>{title}</CardTitle>
      {price && <CardPrice>Rs.{price}</CardPrice>}
      <CardAction type={type}>
        <button>
          {(type === "product") & (type !== "news")
            ? "Add to Card"
            : "Read more"}
        </button>
      </CardAction>
    </CardContainer>
  );
};

export default Cards;
