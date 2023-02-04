import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../Component/Layout/Layout";
import Navbar from "../../Component/Navbar/Navbar";
import { removeProduct } from "../../redux/cartSlice";
import {
  CartContainer,
  CartItem,
  CartItems,
  CartWrapper,
  Headings,
  OrderButton,
} from "./Cart.styled";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.products);

  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeProduct(id));
  };

  return (
    <>
      <Navbar />
      <Layout>
        <CartContainer>
          <CartWrapper>
            <Headings>
              <p>My Cart</p>
            </Headings>
            <CartItems>
              {cartItems?.map((product) => (
                <CartItem key={product.id}>
                  <img src={product.image} alt="product image" />
                  <p>{product.title}</p>
                  <label>Rs. {product.price}</label>
                  <label>Qty. {product.quantity}</label>
                  <button onClick={() => handleRemove(product)}>Remove</button>
                </CartItem>
              ))}
            </CartItems>

            {cartItems.length !== 0 ? <OrderButton to="/order-place">Order</OrderButton> : null}
          </CartWrapper>
        </CartContainer>
      </Layout>
    </>
  );
};

export default Cart;
