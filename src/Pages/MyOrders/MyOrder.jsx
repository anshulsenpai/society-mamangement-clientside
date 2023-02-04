import styled from "styled-components"
import Layout from "../../Component/Layout/Layout"
import Navbar from "../../Component/Navbar/Navbar"

const MyOrder = () => {
  return (
    <>
    <Navbar />
    <Layout>
        <MyOrderContainer>
            <MyOrderWrapper>
                <p>No Record</p>
            </MyOrderWrapper>
        </MyOrderContainer>
    </Layout>
    </>
  )
}

const MyOrderContainer = styled.div`
    flex: 4;
    width: 100%;
    min-height: 100vh;
`

const MyOrderWrapper = styled.div`
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


export default MyOrder