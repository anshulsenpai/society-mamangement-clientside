import Navbar from "../../Component/Navbar/Navbar";
import { ProMenu } from "../../Component/ProfileMenu/ProfileMenu.styled";
import SideMenu from "../../Component/SideMenu/SideMenu";
import { HContainer } from "./Home.styled";

const Home = () => {
  return (
    <>
      <Navbar/>
      <HContainer>
        <SideMenu />
        <ProMenu />
      </HContainer>
    </>
  );
};

export default Home;
