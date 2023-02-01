import { SMenuContainer, SMenuItem, SMenuItems } from "./SideMenu.styled";

const SideMenu = () => {
  return (
    <SMenuContainer>
      <SMenuItems>
        <SMenuItem>Home</SMenuItem>
        <SMenuItem>Manage Visitors</SMenuItem>
        <SMenuItem>Meetings & Events</SMenuItem>
        <SMenuItem>Billing & Maintenance</SMenuItem>
        <SMenuItem>Complaints</SMenuItem>
        <SMenuItem>Voting</SMenuItem>
      </SMenuItems>
    </SMenuContainer>
  );
};

export default SideMenu;
