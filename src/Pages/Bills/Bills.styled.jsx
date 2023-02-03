import styled from "styled-components";

export const BillsContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 15px;
  flex: 4;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  flex-direction: column;

  p {

    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    font-weight: 600;
    color: whitesmoke;
  }

  @media screen and (max-width: 425px) {
    font-size: 13px;
  }
`;

export const TableContainer = styled.ul`
  margin-top: 65px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const TableHeading = styled.li`
  width: 100%;
  text-align: center;
  /* border: 1px solid blue; */
  padding: 10px 0;
  font-size: 15px;
  font-weight: 600;
  color: whitesmoke;
  margin: 1em 0;
  @media screen and (max-width: 425px) {
    font-size: 13px;
  }
`;

export const TableData = styled.li`
  color: #bababa;
  width: 100%;
  /* border: 1px solid blue; */
  text-align: center;
  font-size: 15px;
  /* padding: 15px 0; */

  @media screen and (max-width: 425px) {
    font-size: 13px;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  /* width: 5em; */
  color: whitesmoke;
  font-size: 15px;
  background-color: #083aa9;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  transition: all 0.3s ease-in;

  &:hover {
    background-color: #0051ff;
  }
`;

export const TotalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2em;
  border: 1px solid rgb(255, 255, 255, 0.25);
  padding: 15px;
  border-radius: 10px;
  p {
    width: 100%;
    text-align: center;
    font-size: 15px;
  }

  @media screen and (max-width: 425px) {
    p {
      font-size: 13px;
    }
  }
`;
