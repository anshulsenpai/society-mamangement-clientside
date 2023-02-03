import React from "react";
import Footer from "../../Component/Footer/Footer";
import Main from "../../Component/Main/Main";
import Navbar from "../../Component/Navbar/Navbar";
import ProfileMenu from "../../Component/ProfileMenu/ProfileMenu";
import SlideMenu from "../../Component/SlideMenu/SlideMenu";
import { HContainer } from "./Home.styled";
import Layout from "../../Component/Layout/Layout";

const Home = () => {
  return (
    <>
      <Navbar />
      <HContainer>
        {/* <SlideMenu /> */}
        <Layout>
          <Main />
        </Layout>
        {/* <ProfileMenu /> */}
      </HContainer>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
