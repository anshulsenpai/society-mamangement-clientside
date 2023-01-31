import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(45deg, #10162C, #02000E);
    transition: all 0.3s ease-in-out;

    @media screen and (max-width: 48em){
        flex-direction: column;
        height: 100%;
        min-height: 100vh;
    }
`

export const Left = styled.div`
    height: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    position: relative;
    flex-wrap: wrap;
    @media screen and (max-width: 48em){
        width: 100%;
    }
`

export const BrandNTitle = styled.div`
    width: 100%;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        color: white;
        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
        margin: 30px;
        font-size: 36px;
        font-weight: 700;

    span {
        color: #22C3F6;
    }
    }

    p {
        color: whitesmoke;
        font-size: 15px;
        width: 60%;
        text-align: center;
    }

    @media screen and (max-width: 48em){
        justify-content: center;
        h1 {
            font-size: 28px;
            margin: 15px;
        }
        p {
            font-size: 13px;
        }
    }
`

export const BgImg = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;

    @media screen and (max-width: 48em){
        object-fit: cover;
        object-position: center;
    }

`

export const Right = styled.div`
    height: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const Branding = styled.div`
    h2 {
        z-index: 1;
        color: white;
        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
        margin: 50px;
        font-size: 36px;
        font-weight: 700;

        span {
            color: #22C3F6;
        }
    }
    @media screen and (max-width: 48em){
        h2 {
            display: none;
        }
    }
`


export const LoginForm = styled.form`
    width: 100%;
    height: 100%;
    /* border: 1px solid blueviolet; */
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
`

export const InputField = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    /* border: 1px solid green; */
    min-width: 60%;
    width: 65%;

    label {
        color: #bababa;
        font-size: 15px;
        font-weight: 600;
    }
    @media screen and (max-width: 48em){
        width: 100%;
    }
`


export const Button = styled.button`
    font-size: 15px;
    font-weight: 600;
    padding: 10px 20px;
    border-radius: 6px;
    border: none;
    background-color: #083AA9;
    color: whitesmoke;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

&:hover {
    background-color: #2667f3;
}
`
export const OtherFormActions = styled.div`
    margin: 15px;
    padding: 10px;
    p {
        color: #bababa;
        font-size: 15px;
        cursor: pointer;
    }
`