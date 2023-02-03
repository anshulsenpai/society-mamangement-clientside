import { CandidateData } from "../../Assets/Data/CandidateData";
import Layout from "../../Component/Layout/Layout";
import Navbar from "../../Component/Navbar/Navbar";
import {
  CandidateDetails,
  Row,
  VoteActions,
  VotingContainer,
  VotingWrapper,
} from "./Voting.styled";

const Voting = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <VotingContainer>
          <VotingWrapper>
            <CandidateDetails>
              <Row className="voting-table-head">Candidate Name</Row>
              <Row className="voting-table-head">Post</Row>
              <Row className="voting-table-head">Vote</Row>
            </CandidateDetails>
            {CandidateData?.map((candidate) => (
              <CandidateDetails key={candidate.id}>
                <Row>{candidate.name}</Row>
                <Row>{candidate.post}</Row>
                <Row><input type="checkbox"/></Row>
              </CandidateDetails>
            ))}
            <VoteActions>
              <button>Submit</button>
            </VoteActions>
          </VotingWrapper>
        </VotingContainer>
      </Layout>
    </>
  );
};

export default Voting;
