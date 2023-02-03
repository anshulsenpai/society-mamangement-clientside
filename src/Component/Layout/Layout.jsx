import Navbar from "../Navbar/Navbar";
import SlideMenu from "../SlideMenu/SlideMenu";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import { LayoutContainer } from "./Layout.styled";

const Layout = ({ children }) => {
  return (
    <>
      {/* <Navbar /> */}
      <LayoutContainer>
        <SlideMenu />
        {children}
        <ProfileMenu />
      </LayoutContainer>
    </>
  );
};

export default Layout;
