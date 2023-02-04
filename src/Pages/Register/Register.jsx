import React, { useState } from "react";
import loginBgImg from "../../Assets/Images/background.png";
import { login, register } from "../../redux/ApiCalls";
import { useDispatch } from "react-redux";
import {
  BgImg,
  Branding,
  BrandNTitle,
  Button,
  Container,
  InputField,
  Left,
  LoginForm,
  OtherFormActions,
  Right,
} from "../Login/Login.styled";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    phone_no: "",
    address: "",
  });

  console.log(userData)
  const dispatch = useDispatch();

  // const Navigate = useNavigate()

  const handleSignUp = (e) => {
    e.preventDefault();
    // signup
    register(dispatch, userData)
  };

  return (
    <Container>
      <Left>
        <BgImg src={loginBgImg} />
        <BrandNTitle>
          <h1 >
            Fly<span>High</span>
          </h1>
          <p>
            One Community, One Solution: Streamlining Society Management for a
            Better Neighborhood
          </p>
        </BrandNTitle>
      </Left>
      <Right>
        <Branding>
          <h2 style={{"margin" : "20px"}}>
            Fly<span>High</span>
          </h2>
        </Branding>
        <LoginForm>
          <InputField >
            <label>Name</label>
            <input
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
              className="sign-up-field input-field input-email"
              type="email"
              required="required"
            />
          </InputField>
          <InputField >
            <label>Email</label>
            <input
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              className="sign-up-field input-field input-email"
              type="email"
              required="required"
            />
          </InputField>
          <InputField >
            <label>Password</label>
            <input
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
              className="sign-up-field input-field input-password"
              type="password"
              required="required"
            />
          </InputField>
          <InputField >
            <label>Phone no</label>
            <input
              onChange={(e) =>
                setUserData({ ...userData, phone_no: e.target.value })
              }
              className="sign-up-field input-field input-password"
              type="password"
              required="required"
            />
          </InputField>
          <InputField >
            <label>Address</label>
            <input
              onChange={(e) =>
                setUserData({ ...userData, address: e.target.value })
              }
              className="sign-up-field input-field input-password"
              type="password"
              required="required"
            />
          </InputField>
          <Button onClick={handleSignUp}>Sign Up</Button>
          <Link style={{"color" : "#bababa"}} to='/login'>Already have an account ? <span style={{"color" : "#083AA9"}}>Log in</span></Link>
        </LoginForm>
      </Right>
    </Container>
  );
};

export default Register;
