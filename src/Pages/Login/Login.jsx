import React, { useState } from "react";
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
} from "./Login.styled";
import loginBgImg from "../../Assets/Images/background.png";
import { login } from "../../redux/ApiCalls";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  // const Navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    login(dispatch, userData)
    // Navigate('/')
  };

  return (
    <Container>
      <Left>
        <BgImg src={loginBgImg} />
        <BrandNTitle>
          <h1>
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
          <h2>
            Fly<span>High</span>
          </h2>
        </Branding>
        <LoginForm>
          <InputField>
            <label>Email</label>
            <input
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              className="input-field input-email"
              type="email"
              required="required"
            />
          </InputField>
          <InputField>
            <label>Password</label>
            <input
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
              className="input-field input-password"
              type="password"
              required="required"
            />
          </InputField>
          <Button onClick={handleLogin}>Log In</Button>
          <OtherFormActions>
            <p>Forgot Password?</p>
          </OtherFormActions>
          <Link style={{"color" : "#bababa"}} to='/register'>New here ? <span style={{"color" : "#083AA9"}}>Register</span></Link>
        </LoginForm>
      </Right>
    </Container>
  );
};

export default Login;
