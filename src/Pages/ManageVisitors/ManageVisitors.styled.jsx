import styled from "styled-components";

export const MngVisitorContainer = styled.div`
  flex: 4;
  width: 100%;
  min-height: 100vh;
  padding: 1em;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
  gap: 2em;
  @media screen and (max-width: 425px) {
    padding: 12px;
  }
`;

export const MngActions = styled.div`
  margin-top: 65px;
  width: 100%;
  /* border: 1px solid blue; */
  display: flex;
  /* justify-content: center; */
  align-items: center;
  gap: 1em;
  /* margin: 1em; */
  label {
    font-size: 15px;
    color: whitesmoke;
  }
`;

export const MngVisitorIcon = styled.div`
  width: fit-content;
  padding: 1em;
  border-radius: 6px;
  background-color: #083aa9;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #0051ff;
  }
`;
export const IconBtn = styled.img`
  width: 30px;
  display: block;
  /* height: 32px; */
`;

export const VisitorsContainer = styled.div`
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.25);
  min-height: 100%;
  padding: 1em;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 425px) {
    padding: 12px;
  }
`;

export const TableHeading = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 425px) {
    justify-content: space-between;
  }
`;
export const ColHead = styled.li`
  color: whitesmoke;
  font-weight: 600;
  font-size: 15px;
  width: 100%;
  /* border: 1px solid blueviolet; */

  @media screen and (max-width: 425px) {
    font-size: 12px;
  }
`;

export const TableRows = styled.div`
  margin: 1em 0;
  width: 100%;
`;

export const Row = styled.ul`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* gap: 15px; */
  @media screen and (max-width: 425px) {
    justify-content: space-between;
  }

  button {
    background-color: transparent;
    padding: 5px 8px;
    border: none;
    outline: none;
    color: #dddddd;
    cursor: pointer;
    width: 100%;
  }
`;

export const RowData = styled.li`
  color: #dddddd;
  /* font-weight: 600; */
  font-size: 15px;
  /* border: 1px solid green; */
  padding: 5px;
  width: 100%;

  @media screen and (max-width: 425px) {
    font-size: 12px;
  }
`;
