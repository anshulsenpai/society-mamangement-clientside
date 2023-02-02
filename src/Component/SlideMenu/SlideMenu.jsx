import { SMenuContainer, SMenuItem, SMenuItems } from "./SlideMenu.styled";


const SideMenu = () => {
  return (
    <SMenuContainer>
      <SMenuItems>
        <SMenuItem to='/'>Home</SMenuItem>
        <SMenuItem to='/manage-visitors'>Manage Visitors</SMenuItem>
        <SMenuItem to='/meetings-events'>Meetings & Events</SMenuItem>
        <SMenuItem to='/bills'>Billing & Maintenance</SMenuItem>
        <SMenuItem to='/complaints'>Complaints</SMenuItem>
        <SMenuItem to='/voting'>Voting</SMenuItem>
      </SMenuItems>
    </SMenuContainer>
  );
};

export default SideMenu;
