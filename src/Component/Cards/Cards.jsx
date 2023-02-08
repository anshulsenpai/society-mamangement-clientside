import React from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";
import {
  CardAction,
  CardContainer,
  CardImage,
  CardPrice,
  CardTitle,
} from "./Cards.styled";

const Cards = ({ image, title, desc, type, price, id }) => {
  const dispatch = useDispatch();

  const handleAddProduct = (item) => {
    if(item.type === 'product') {
      dispatch(addProduct(item));
      console.log(item);
    }
  };
  
  return (
    <CardContainer>
      <CardImage src={image} alt="image" />
      <CardTitle>{title}</CardTitle>
      {price && <CardPrice>Rs.{price}</CardPrice>}
      <CardAction type={type}>
        <button
          onClick={() =>
            handleAddProduct({ image, title, desc, type, price, id })
          }
        >
          {(type === "product") & (type !== "news")
            ? "Add to Card"
            : "Read more"}
        </button>
      </CardAction>
    </CardContainer>
  );
};

export default Cards;
