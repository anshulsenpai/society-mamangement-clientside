import { Link } from "react-router-dom"
import styled from "styled-components"

export const QuickAccessContainer = styled.div`
  width: 100%;
  /* height: 150px; */
  border: 1px solid rgba(255, 255, 255, 0.25);
  margin: 1em;
  padding: 2em;
  border-radius: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    justify-content: center;
    padding: 1em;
    gap: 2em;
  }
`

export const QuickBox = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 5.1em;
  height: 5.1em;
  padding: 1em;
  /* border: 1px solid green; */
  border-radius: 10px;
  background-color: #083AA9;

  img {
    width: 27px;
    height: 27px;
  }

  label {
    font-size: 14px;
    color: whitesmoke;
  }

  &:hover {
    background-color: #0051ff;
  }

  @media screen and (max-width: 768px){
    width: 4.4em;
    height: 4.4em;
    /* gap: 2em; */
    
    img {
        width: 20px;
        height: 20px;
    }

    label {
        font-size: 11px;
    }
  }
`
