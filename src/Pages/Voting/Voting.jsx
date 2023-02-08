import { useState } from "react";
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
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);

  const [isVoted, setIsVoted] = useState(false);


  const handleCheckboxChange = (event) => {
    setSelectedCheckbox(event.target.value);
  };

  const handleSubmit = () => {

    if (selectedCheckbox !== null) {
      setIsVoted(true)
    }else {
      alert("Please select the right box for vote")
    }
  }

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
                <Row><input value={candidate.name}
                  checked={selectedCheckbox === candidate.name}
                  onChange={handleCheckboxChange} type="checkbox" /></Row>
              </CandidateDetails>
            ))}
            <VoteActions>
              {!isVoted && <button onClick={handleSubmit}>Submit</button>}
              { isVoted && <p style={{"color" : "#bababa"}}>You've already voted</p>}
            </VoteActions>
          </VotingWrapper>
        </VotingContainer>
      </Layout>
    </>
  );
};

export default Voting;
