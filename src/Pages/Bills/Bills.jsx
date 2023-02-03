import Layout from "../../Component/Layout/Layout";
import Navbar from "../../Component/Navbar/Navbar";
import {
  BillsContainer,
  Button,
  TableContainer,
  TableData,
  TableHeading,
  TotalContainer,
} from "./Bills.styled";

const Bills = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <BillsContainer>
          <p>Bills</p>
          <TableContainer>
            <TableHeading>Details</TableHeading>
            <TableHeading>Due date</TableHeading>
            <TableHeading>Charges</TableHeading>
            <TableHeading>Option</TableHeading>
          </TableContainer>
          <TableContainer>
            <TableData>Maintenance Fees</TableData>
            <TableData>15-02-2023</TableData>
            <TableData>Rs.1800</TableData>
            <TableData>
              <Button>Pay</Button>
            </TableData>
          </TableContainer>

          <TableContainer>
            <TableData>Rental Fees</TableData>
            <TableData>15-02-2023</TableData>
            <TableData>Rs.15000</TableData>
            <TableData>
              <Button>Pay</Button>
            </TableData>
          </TableContainer>

          <TotalContainer>
            <p>Total</p>
            <p>Rs.16800</p>
          </TotalContainer>
        </BillsContainer>
      </Layout>
    </>
  );
};

export default Bills;
