import styled from "styled-components";

export const CardContainer = styled.div`
    width: 14em;
    min-height: 16em;
    /* border: 1px solid greenyellow; */
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    border-radius: 6px;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.05);
    @media screen and (max-width: 425px) {
        width: 100%;
        height: 18em;
    }
`

export const CardImage = styled.img`
    width: 100%;
    height: 8em;
    object-fit: cover;
    object-position: center;
    display: block;
    @media screen and (max-width: 425px) {
        width: 100%;
        height: 11em;
    }
`

export const CardTitle = styled.p`
    width: 100%;
    font-size: 14px;
    color: #bababa;
    padding: 10px;

    @media screen and (max-width: 425px) {
        font-size: 13px;
    }
`

export const CardPrice = styled.p`
    width: 100%;
    font-size: 15px;
    color: #FFF;
    padding: 0 10px;
    font-weight: 600;

    @media screen and (max-width: 425px) {
        font-size: 13px;
    }
`

export const CardAction = styled.div`
    width: 100%;
    padding: 1em 0.5em;

    button {
        padding: ${(props) => (props.type === "product" ? "10px 15px" : "5px 8px")};
        border: none;
        border-radius: 6px;
        background-color: ${(props) => (props.type === "product" ? "#083AA9" : "transparent")};
        color: ${(props) => (props.type === "product" ? "#FFF" : "#22C3F6")};
        font-weight: 600;
        transition: 0.3s all ease-in-out;
        cursor: pointer;

        &:hover {
            background-color: ${(props) => (props.type === "product" ? "#2469ff" : null)};
        }
    }
`


