import { Link } from "react-router-dom";
import styled from "styled-components";

export const CartContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  flex: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CartWrapper = styled.div`
  margin-top: 65px;
  padding: 1em;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  /* border: 1px solid tomato; */
`;
export const Headings = styled.div`
  width: 100%;

  p {
    font-size: 16px;
    color: whitesmoke;
    font-weight: 700;
  }
`;
export const CartItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 1em;
  flex-direction: column;
  margin-top: 3em;
  width: 100%;
  height: 60vh;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }


`;

export const CartItem = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;

  img {
    flex: 1;
    width: 7em;
    height: 5em;
    object-fit: cover;
    object-position: center;
    border-radius: 10px;
  }

  p {
    flex: 2;
    font-size: 15px;
    color: whitesmoke;
    text-align: center;
  }

  label {
    flex: 1;
    color: whitesmoke;
    font-size: 15px;
    font-weight: 600;
  }

  button {
    flex: 0.5;
    padding: 10px;
    background-color: #083aa9;
    border: none;
    width: 5em;
    font-weight: 600;
    color: whitesmoke;
    font-size: 15px;
    border-radius: 10px;
  }

  @media screen and (max-width: 425px) {
    img {
        width: 50px;
        height: 50px;
    }

    p, label, button {
        font-size: 13px;
    }
  }
`;

export const OrderButton = styled(Link)`
    padding: 10px;
    background-color: #083aa9;
    border: none;
    font-weight: 600;
    color: whitesmoke;
    font-size: 15px;
    border-radius: 6px;
    margin-top: 1em;
`