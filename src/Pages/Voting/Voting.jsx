import Layout from "../../Component/Layout/Layout";
import Navbar from "../../Component/Navbar/Navbar";
import { VotingContainer, VotingWrapper } from "./Voting.styled";


const Voting = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <VotingContainer>
          <VotingWrapper>
            <h1>Voting</h1>
          </VotingWrapper>
        </VotingContainer>
      </Layout>
    </>
  );
};

export default Voting;
