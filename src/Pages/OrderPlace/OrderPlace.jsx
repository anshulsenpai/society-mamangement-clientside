import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Actions, InputField } from "../AddVisitor/AddVisitor.styled";

const OrderPlace = () => {

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        alert("order placed")
        navigate('/marketplace')
    }

  return (
    <OrderPlaceContainer>
      <OrderPlaceWrapper>
        <InputField>
          <label>Name</label>
          <input required="required" type="text" />
        </InputField>
        <InputField>
          <label>Address</label>
          <input required="required" type="text" />
        </InputField>
        <InputField>
          <label>Phone Number</label>
          <input required="required" type="number" />
        </InputField>
        <InputField>
          <label style={{"fontSize" : "13px", "color" : "#606060"}}>Only cash on delivery</label>
        </InputField>
        <Actions>
          <button onClick={(e) => handleSubmit(e)}>Submit</button>
          <Link to="/my-cart">Cancel</Link>
        </Actions>
      </OrderPlaceWrapper>
    </OrderPlaceContainer>
  );
};

const OrderPlaceContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OrderPlaceWrapper = styled.div`
  width: 450px;
  /* height: 60vh; */
  background-color: whitesmoke;
  border-radius: 1em;
  margin: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1em;

  button {
    font-size: 15px;
    padding: 15px 20px;
    background-color: #083aa9;
    color: #fff;
    border: none;
    border-radius: 6px;
    font-weight: 600;
  }
`;

export default OrderPlace;
