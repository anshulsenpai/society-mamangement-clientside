import { Aside, Branding, NavContainer, NavItem, NavItems, Profile, ProfileDetails, RightNav } from "./Navbar.styled";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import profileAvatar from "../../Assets/icons/Avatar.png"
import { useSelector } from "react-redux";

const Navbar = () => {

    const user = useSelector(state => state.user.currentUser.user)

    const [isNavActive, setIsNavActive] = useState(false)

    const toggleNav = () => {
        setIsNavActive(!isNavActive)
    }

  return (
    <NavContainer>
      <Branding>
        <MenuIcon onClick={toggleNav} className="mui--icons menu-toggle-icon"/>
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
      <Aside className={!isNavActive ? "active-nav" : null}>
        <NavItems>
          <NavItem to='/my-profile'>
            <Profile>
              <img src={profileAvatar} alt="profile picture" />
              <ProfileDetails>
                <p>{user.name}</p>
                <label>{user.user_type}</label>
              </ProfileDetails>
            </Profile>
          </NavItem>
            <NavItem to='/'>Home</NavItem>
            <NavItem to='/manage-visitors'>Manage Visitors</NavItem>
            <NavItem to='/meetings-events'>Meetings & Events</NavItem>
            <NavItem to='/bills'>Billing & Maintenance</NavItem>
            <NavItem to='/complaints'>Complaints</NavItem>
            <NavItem to='/voting'>Voting</NavItem>
        </NavItems>
      </Aside>
    </NavContainer>
  );
};

export default Navbar
