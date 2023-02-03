import React from "react";
import Layout from "../../Component/Layout/Layout";
import Navbar from "../../Component/Navbar/Navbar";
import { ComplaintContainer, ComplaintWrapper } from "./Complaints.styled";

const Complaints = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <ComplaintContainer>
          <ComplaintWrapper>
            <h1>Complaints</h1>
          </ComplaintWrapper>
        </ComplaintContainer>
      </Layout>
    </>
  );
};

export default Complaints;
