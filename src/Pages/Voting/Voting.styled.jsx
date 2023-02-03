import styled from "styled-components";

export const VotingContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    flex: 4;
`

export const VotingWrapper = styled.div`
    width: 100%;
    margin-top: 65px;
    padding: 10px;
    padding: 2em 1em;
    /* display: flex; */
    /* justify-content: center;
    align-items: center;
    flex-direction: column; */
`

export const CandidateDetails = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Row = styled.li`
    font-size: 15px;
    color: #cacaca;
    padding: 10px 5px;
    width: 100%;
    text-align: center;

    @media screen and (max-width: 425px) {
        font-size: 13px;
    }
`


export const VoteActions = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3em;

    button {
        color: whitesmoke;
        font-weight: 600;
        padding: 10px 20px;
        background-color: #083AA9;
        border: none;
        border-radius: 6px;
    }
`