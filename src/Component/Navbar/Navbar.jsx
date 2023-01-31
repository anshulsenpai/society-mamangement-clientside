import {
  Aside,
  Bars,
  LeftNav,
  NavbarContainer,
  NavBranding,
  RightNav,
  SlideMenuBtn,
} from "./Navbar.styled";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import { useState } from "react";

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

  return (
    <NavbarContainer>
      <LeftNav>
        <SlideMenuBtn onClick={toggleMenu}>
          <Bars type="top"></Bars>
          <Bars type="mid"></Bars>
          <Bars type="small"></Bars>
        </SlideMenuBtn>
        <NavBranding>
          <h1>Fly<span>High</span></h1>
        </NavBranding>
      </LeftNav>
      <RightNav>
        <Badge badgeContent={4} color="primary">
          <NotificationsNoneIcon className="mui--icons" />
        </Badge>
        <Badge color="primary" badgeContent={3}>
          <ShoppingCartIcon className="mui--icons" />
        </Badge>
      </RightNav>
      <Aside className={!isMenuOpen ? "active" : null}>
        <ul>
          <li>Home</li>
          <li>Manage Visitors</li>
          <li>Meetings & Events</li>
          <li>Billing & Maintenance</li>
          <li>Complaints</li>
          <li>Voting</li>
        </ul>
      </Aside>
    </NavbarContainer>
  );
};

export default Navbar;
