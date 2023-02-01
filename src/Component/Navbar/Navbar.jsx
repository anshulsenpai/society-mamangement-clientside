import { Aside, Branding, NavContainer, NavItem, NavItems, RightNav } from "./Navbar.styled";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";

const Navbar = () => {

    const [isNavActive, setIsNavActive] = useState(false)

    const toggleNav = () => {
        setIsNavActive(!isNavActive)
    }

  return (
    <NavContainer>
      <Branding>
        <MenuIcon onClick={toggleNav} className="mui--icons"/>
        <h1>
          Fly<span>High</span>
        </h1>
      </Branding>
      <RightNav>
        <Badge badgeContent={4} color="primary">
          <NotificationsNoneIcon className="mui--icons" />
        </Badge>
        <Badge color="primary" badgeContent={3}>
          <ShoppingCartIcon className="mui--icons" />
        </Badge>
      </RightNav>
      <Aside className={!isNavActive ? "active" : null}>
        <NavItems>
            <NavItem>Home</NavItem>
            <NavItem>Manage Visitors</NavItem>
            <NavItem>Meetings & Events</NavItem>
            <NavItem>Billing & Maintenance</NavItem>
            <NavItem>Complaints</NavItem>
            <NavItem>Voting</NavItem>
        </NavItems>
      </Aside>
    </NavContainer>
  );
};

export default Navbar
