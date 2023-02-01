import styled from "styled-components";

export const NavbarContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    background: linear-gradient(45deg, rgba(0, 0, 0, 0.3), rgba(0, 102, 255, 0.05));
    position: relative;
    z-index: 50;
`

export const LeftNav = styled.div`
    width: 100%;
    flex: 1;
    display: flex;
    align-items: center;
`

// export const RightNav = styled.div`
//     width: 100%;
//     flex: 1;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     gap: 2.5em;
//     /* border: 1px solid blue; */
// `

export const SlideMenuBtn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    /* border: 1px solid green; */
    gap: 4px;
    padding: 5px;
    width: fit-content;
    height: fit-content;
    cursor: pointer;
    padding: 1.5em 2.5em;

    @media screen and (max-width: 768px) {
        padding: 1em;
    }
`

export const Bars = styled.div`
    width: ${(props) => (props.type === "small" ? "10px" : "22px")};
    background-color: #fff;
    height: 2px;
    border-radius: 1px;
`
export const NavBranding = styled.div`
    h1 {
        color: whitesmoke;
        font-size: 1.5em;
        span {
            color: #22C3F6;
        }
    }

    @media screen and (max-width: 425px) {
        h1 {
            font-size: 1.1em;
        }
    }
`

// export const Aside = styled.aside`
//     width: 18em;
//     height: calc(100vh - 70px);
//     background: linear-gradient(45deg, #131A31, #02000E);
//     position: absolute;
//     margin-top: 70px;
//     z-index: 0;
//     transition: 0.3s all ease-in-out;

//     ul {
//         display: flex;
//         flex-direction: column;
//         gap: 1.5em;
//         align-items: center;
//         margin-top: 3em;
//         margin-left: 2em;


//         li {
//             color: #FFFFFF;
//             width: 100%;
//             font-size: 16px;
//             padding: 15px;
//             padding-left: 1em;
//             border-radius: 50px 0 0 50px;
//             transition: 0.3s all ease-in;
//             cursor: pointer;

//             &:hover {
//                 /* background: linear-gradient(45deg, #131A31, rgba(255, 255, 255, 0.1)); */
//                 background: rgba(217, 217, 217, 0.15);
//             }
//         }
//     }

//     @media screen and (max-width: 768px){
//         width: 16em;
//         ul {
//             margin-top: 2em;

//             li {
//                 padding: 10px;
//                 font-size: 14px;
//             }
//         }
        
//     }
// `

export const ProfileAside = styled.aside`
    width: 18em;
    height: calc(100vh - 70px);
    background: linear-gradient(45deg, #131A31, #02000E);
    position: absolute;
    margin-top: 70px;
    transition: 0.3s all ease-in-out;
    right: 0;
`


// navbar-2 styling here

export const NavContainer = styled.div`
    width: 100%;
    height: 65px;
    background: linear-gradient(45deg, rgba(0, 0, 0, 0.3), rgba(0, 102, 255, 0.05));
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 50;
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

export const NavItem = styled.li`
    color: whitesmoke;
    font-size: 16px;
    width: 100%;
    /* border: 1px solid green; */
    padding: 20px;
`
