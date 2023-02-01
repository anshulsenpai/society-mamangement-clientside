import styled from "styled-components";

export const HomeContainer = styled.div`
    width: 100%;
    /* min-height: 100vh; */
    height: fit-content;
    /* background: linear-gradient(45deg, #131A31, #02000E); */
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        flex-direction: column-reverse;
    }
`

export const Main = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    
`

export const HomeLeft = styled.div`
    width: 100%;
    height: 100vh;
    flex: 2;
    /* border: 1px solid red; */
`

export const HomeCenter = styled.div`
    width: 100%;
    height: 100vh;
    flex: 5;
    /* border: 1px solid blue; */
    @media screen and (max-width: 425px){
        padding: 15px;
    }
`

export const HomeRight = styled.div`
    width: 100%;
    height: 100vh;
    flex: 2;
    margin: 1em;
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 10px;

    @media screen and (max-width: 768px) {
        display: none;
    }

`
// Home2 styling 

export const HContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
`