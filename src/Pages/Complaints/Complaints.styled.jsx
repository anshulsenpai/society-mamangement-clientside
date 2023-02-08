import { Link } from "react-router-dom";
import styled from "styled-components";

export const ComplaintContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  flex: 4;
`;

export const ComplaintWrapper = styled.div`
  /* border: 1px solid green; */
  width: 100%;
  margin-top: 65px;
  padding: 15px;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-direction: column;

  h2 {
    width: 100%;
    font-size: 20px;
    color: whitesmoke;
  }

  @media screen and (max-width: 425px) {
    h2 {
      font-size: 16px;
    }
  }
`;

export const FileComplaintButton = styled(Link)`
  width: 100%;
  gap: 1em;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  /* border: 1px solid; */
  label {
    color: whitesmoke;
    font-size: 15px;
  }

  @media screen and (max-width: 425px) {
    label {
      font-size: 13px;
    }
  }
`;

export const FileComplaintIcon = styled.div`
  background-color: #083aa9;
  width: fit-content;
  /* border: 1px solid blue; */
  padding: 1em;
  border-radius: 6px;
  margin: 1em 0;
  transition: all 0.3s ease-in-out;

  img {
    width: 24px;
  }

  &:hover {
    background-color: #0051ff;
  }
`;

export const AllComplaints = styled.div`
  width: 100%;
  /* border: 1px solid green; */
  margin: 2em 0;

`;

export const ComplaintDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  flex-direction: column;


`;


export const TitleAction = styled.div`
width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1em 0;
  /* flex-direction: column; */
  p {
    color: #cccccc;
    font-size: 15px;
  }

  button {
    background-color: transparent;
    padding: 10px 15px;
    border: 1px solid #bababa;
    color: whitesmoke;
    &:hover {
      color: #303030;
      background-color: #cccccc;
    }
  }


  @media screen and (max-width: 425px) {
    padding: 0;
    p {
      font-size: 13px;
    }

    button {
      padding: 5px 10px;
      /* width: 5em;4 */
    }
  }
`

export const ComplaintDesc = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 1em;

    img {
      width: 6em;
      height: 10em;
      object-fit: cover;
      object-position: center;
    }
    p {
    margin: 1em 0;
    color: #bababa;
    font-size: 15px;
  }

`