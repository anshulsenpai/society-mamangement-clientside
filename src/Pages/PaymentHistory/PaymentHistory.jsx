import styled from "styled-components"
import Layout from "../../Component/Layout/Layout"
import Navbar from "../../Component/Navbar/Navbar"

const MyPayment = () => {
  return (
    <>
    <Navbar />
    <Layout>
        <MyPaymentContainer>
            <MyPaymentWrapper>
                <p>No Record</p>
            </MyPaymentWrapper>
        </MyPaymentContainer>
    </Layout>
    </>
  )
}

const MyPaymentContainer = styled.div`
    flex: 4;
    width: 100%;
    min-height: 100vh;
`

const MyPaymentWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 65px;
    padding: 1em;

    p {
        font-size: 16px;
        color: #bababa;
    }
`


export default MyPayment