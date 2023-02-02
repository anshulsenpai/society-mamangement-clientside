import styled from "styled-components";

export const MeetingContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
export const MeetingAction = styled.div`
  width: 100%;
`;
export const ButtonIcon = styled.div`
  padding: 15px;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  cursor: pointer;

  label {
    color: whitesmoke;
    font-size: 15px;
  }
`;

export const IconImg = styled.div`
  /* border: 1px solid green; */
  width: 4.5em;
  height: 4.5em;
  border-radius: 10px;
  background-color: #083aa9;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  img {
    display: block;
    width: 28px;
    /* border: 1px solid red; */
  }

  &:hover {
    background-color: #0051ff;
  }

  @media screen and (max-width: 425px) {
    width: 3.8em;
    height: 3.8em;
  }
`;

export const UpcomingMeetingsContainer = styled.div`
  width: 100%;
  /* height: 100%; */
  /* border: 1px solid red; */
  padding: 15px;
  p {
    color: white;
    font-size: 16px;
    font-weight: 600;
    width: 100%;
    /* border: 1px solid green; */
  }

  @media screen and (max-width: 425px) {
    p {
      font-size: 13px;
    }
  }
`;
export const LastMeetingContainer = styled.div`
  padding: 15px;
  p {
    color: white;
    font-size: 16px;
    font-weight: 600;
    width: 100%;
    /* border: 1px solid green; */
  }

  @media screen and (max-width: 425px) {
    p {
      font-size: 13px;
    }
  }
`;

export const MeetingList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;

export const ListHeading = styled.li`
  font-size: 14px;
  color: whitesmoke;
  width: 100%;
  text-align: center;

  @media screen and (max-width: 425px) {
    font-size: 12px;
  }
`;

export const MeetingDetailsList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MeetingDetails = styled.li`
  font-size: 14px;
  color: #bababa;
  width: 100%;
  text-align: center;
  margin: 10px 5px;

  @media screen and (max-width: 425px) {
    font-size: 12px;
  }
`;
