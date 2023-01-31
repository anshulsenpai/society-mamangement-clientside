import React from "react"
import { BgImg, Branding, BrandNTitle, Button, Container, InputField, Left, LoginForm, OtherFormActions, Right} from "./Login.styled"
import loginBgImg from "../../Assets/Images/background.png"

const Login = () => {
  return (
    <Container>
      <Left>
        <BgImg src={loginBgImg} />
        <BrandNTitle>
          <h1>Fly <span>High</span></h1>
          <p>One Community, One Solution: Streamlining Society Management for a Better Neighborhood</p>
        </BrandNTitle>
      </Left>
      <Right>
        <Branding>
          <h2>Fly <span>High</span></h2>
        </Branding>
        <LoginForm>
          <InputField>
            <label>Email</label>
            <input className="input-field input-email" type="email" required="required"/>
          </InputField>
          <InputField>
            <label>Password</label>
            <input className="input-field input-password" type="password" required="required"/>
          </InputField>
          <Button>Log In</Button>
          <OtherFormActions>
            <p>Forgot Password?</p>
          </OtherFormActions>
        </LoginForm>
      </Right>
    </Container>
  )
}

export default Login
