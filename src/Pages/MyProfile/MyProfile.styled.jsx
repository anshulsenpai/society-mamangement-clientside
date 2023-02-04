import styled from "styled-components";

export const MyProfileContainer = styled.div`
  flex: 4;
  width: 100%;
  min-height: 100vh;
`;

export const MyProfileWrapper = styled.div`
  margin-top: 65px;
  padding: 1em;

  h2 {
    font-size: 17px;
    color: whitesmoke;
  }
`;

export const UserDetails = styled.div`
  width: 100%;
`;

export const UserProfilePic = styled.div`
  width: 100%;
  /* border: 1px solid green; */
  /* margin: 1em 0; */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  padding: 1em 0;

  img {
    width: 6em;
  }
`;

export const ProfileName = styled.div`
  width: 100%;
  text-transform: capitalize;


  p {
    font-size: 15px;
    font-weight: 600;
    color: whitesmoke;
  }

  label {
    font-size: 12px;
    color: #bababa;
  }
`;

export const UserInfoFields = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const InfoField = styled.li`
  display: flex;
  flex-direction: column;
  /* gap: 2em; */
  text-transform: capitalize;

  input {
    margin-top: 10px;
    max-width: 20em;
    padding: 10px 20px;
    border-radius: 6px;
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(186, 186, 186, 0.25);
    font-size: 15px;
    color: #bababa;
    text-transform: capitalize;
  }

  label {
    margin-top: 1em;
    color: whitesmoke;
    font-size: 14px;
    text-transform: capitalize;
  }
`;


export const Button = styled.button`
  padding: 10px 20px;
  color: #fff;
  border: none;
  font-size: 15px;
  font-weight: 600;
  background-color: #083aa9;
  margin: 1.5em 0;
  border-radius: 6px;
  margin-left: 1em;
`;
