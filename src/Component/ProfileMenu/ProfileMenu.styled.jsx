import styled from "styled-components";

export const ProMenuContainer = styled.div`
    flex: 1.6;
    width: 100%;
    height: calc(100vh - 65px);
    margin-top: 65px;
    /* border: 1px solid rgb(255, 255, 255, 0.25); */
    padding: 1em 1em 1em 0;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const Menu = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid rgb(255, 255, 255, 0.25);
    border-radius: 10px;
`

export const MenuTop = styled.div`
    /* border: 1px solid white; */
    padding: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
        width: 80px;
        height: 80px;
        cursor: pointer;
    }

    label {
        font-size: 16px;
        font-weight: 600;
        color: whitesmoke;
        margin-top: 10px;
        cursor: pointer;
    }
    p {
        font-size: 13px;
        cursor: pointer;
        color: #bababa
    }
`

export const MenuCenter = styled.ul`
    /* border: 1px solid green; */
    /* width: 100%; */
    display: flex;
    flex-direction: column;
    gap: 1em;
    margin: 1em;
`

export const MenuItem = styled.li`
    color: whitesmoke;
    font-size: 14px;
    padding: 10px;
    cursor: pointer;
    transition: 0.3s all ease-in-out;

    &:hover {
        font-weight: 600;
    }
`