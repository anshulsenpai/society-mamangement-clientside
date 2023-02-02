import styled from "styled-components";

export const MainContainer = styled.div`
    flex: 4;
    width: 100%;
    height: calc(100vh - 65px);
    margin-top: 65px;
    /* border: 1px solid blue; */
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
    padding: 1em;
    overflow-y: scroll;
    overflow-x: hidden;
    &::-webkit-scrollbar {
        display: none;
    }

    @media screen and (max-width: 425px) {
        overflow-y: visible;
        overflow-x: visible;
        height: fit-content;
    }
`

export const NewsCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 3em 0;
`

export const NewsContainerHeading = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    p {
        color: whitesmoke;
        font-size: 15px;
        font-weight: 600;
    }
`

