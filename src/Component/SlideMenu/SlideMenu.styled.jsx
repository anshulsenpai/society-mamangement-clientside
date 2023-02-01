import styled from "styled-components";

export const SMenuContainer = styled.div`
    flex: 1.6;
    width: 100%;
    height: calc(100vh - 65px);
    margin-top: 65px;
    /* border: 1px solid red; */
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(45deg, #10162C, #10162C);

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const SMenuItems = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1.5em;
    /* border: 1px solid lemonchiffon; */
    padding: 1em 0;
    padding-left: 2em;
    width: 100%;
`

export const SMenuItem = styled.li`
    width: 100%;
    color: white;
    /* border: 1px solid green; */
    border-radius: 50px 0 0 50px;
    padding: 10px;
    padding-left: 1em;
    cursor: pointer;
    font-size: 14px;
    transition: 0.3s all ease-in-out;

    &:hover {
        background: rgba(217, 217, 217, 0.1);
    }   
`