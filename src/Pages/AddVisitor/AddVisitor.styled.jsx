import styled from "styled-components";

export const AddVisitorContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const AddVisitorForm = styled.form`
    width: 450px;
    /* height: 60vh; */
    background-color: whitesmoke;
    border-radius: 1em;
    margin: 10px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1em;

    button {
        font-size: 15px;
        padding: 15px 20px;
        background-color: #083AA9;
        color: #FFF;
        border: none;
        border-radius: 6px;
        font-weight: 600;
    }
`

export const Actions = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 1em;

    a {
        color: #505050;
        border: 1px solid #bababa;
        font-size: 15px;
        padding: 11px 20px;
        border-radius: 6px;
        font-weight: 600;
    }
`

export const InputField = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1em;
    gap: 10px;

    input {
        border: 1px solid #bababa;
        font-size: 15px;
        padding: 10px 15px;
        color: #505050;
        border-radius: 5px;
        outline: none;
    }

    label {
        font-size: 14px;
    }
`

// export const CloseBtn = styled.div`
//     position: absolute;
//     text-shadow: 2px 2px 2px #000;
//     z-index: 5;
//     top: -3em;
//     right: 0;
// `