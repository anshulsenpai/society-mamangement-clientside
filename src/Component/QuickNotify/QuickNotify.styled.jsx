import styled from "styled-components";

export const QuickNotifyContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const Heading = styled.p`
    color: whitesmoke;
    font-size: 15px;
    font-weight: 600;
    width: 100%;
`

export const VisitorsList = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`


export const VisitorsInfo = styled.li`

    display: flex;
    /* border: 1px solid green; */
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 10px;

    p {
        flex: 4;
        color: #bababa;
        padding: 10px;
        font-size: 15px;
        /* border: 1px solid blueviolet; */
        width: 100%;
        overflow: hidden;
    }

    @media screen and (max-width: 425px) {
        margin: 15px;
        p {
            font-size: 13px;
            padding: 5px;
        }
    }
`

export const VisitorActions = styled.div`
    flex: 1;
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    gap: 1em;
    @media screen and (max-width: 425px) {
        gap: 10px;
    }
`

export const ActionBtn = styled.button`
    /* height: 2em; */
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    background-color: ${(props) => (props.colorType === "blue" ? "#083AA9" : "#BABABA")};
    font-size: 13px;
    font-weight: 600;
    color: ${(props) => (props.colorType === "blue" ? "#FFF" : "#000")};
    transition: 0.3s all ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: ${(props) => (props.colorType === "blue" ? "#0051ff" : "#ffffff")};
    }

    @media screen and (max-width: 425px) {

    }
`


