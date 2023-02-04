import { Link } from "react-router-dom";
import styled from "styled-components";

// navbar-2 styling here

export const NavContainer = styled.div`
    max-width: 1500px;
    width: 100%;
    height: 65px;
    background: linear-gradient(45deg, #131A31, #02000E);
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    box-shadow: 2px 0 10px 0 rgba(0, 0, 0, 0.25);
    z-index: 900;
`

export const Branding = styled.div`
    flex: 1;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    /* border: 1px solid green; */
    height: 100%;
    width: 100%;
    padding: 1em 2em;

    h1 {
        font-size: 1.5em;
        color: whitesmoke;
        margin: 1em;
    }
    span {
        color: #22C3F6;
    }
`

export const RightNav = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    /* border: 1px solid green; */
    height: 100%;
    width: 100%;
    padding: 1em 2em;
    gap: 1em;
`

export const Aside = styled.aside`
    /* min-width: 100%; */
    width: 100%;
    height: 100vh;
    background: linear-gradient(45deg, #131A31, #02000E);
    position: absolute;
    left: 0;
    top: 0;
    /* border: 1px solid green; */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    transition: 0.3s all ease-in-out;
`

export const NavItems = styled.ul`
    width: 100%;
    height: 100%;
    margin: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const NavItem = styled(Link)`
    color: whitesmoke;
    font-size: 16px;
    width: 100%;
    /* border: 1px solid green; */
    padding: 20px;

`

export const Profile = styled.div`
    /* border: 1px solid green; */
    display: flex;
    align-items: center;
    gap: 1em;
`

export const ProfileDetails = styled.div`
    /* border: 1px solid blue; */
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    padding: 10px 10px;

    p {
        font-weight: 500;
        font-size: 1.4em;
        color: whitesmoke;
    }
    label {
        font-size: 13px;
        color: #bababa;
    }
`
