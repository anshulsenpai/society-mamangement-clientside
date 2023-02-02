import {
  ColHead,
  IconBtn,
  MngActions,
  MngVisitorContainer,
  MngVisitorIcon,
  Row,
  RowData,
  TableHeading,
  TableRows,
  VisitorsContainer,
} from "./ManageVisitors.styled";
import AddVisitoIcon from "../../Assets/icons/add-visitor.png";
import { VisitorsData } from "../../Assets/Data/VisitosData";
import { Link } from "react-router-dom";

const ManageVisitors = () => {
  return (
    <MngVisitorContainer>
      <MngActions>
        <Link style={{"display" : "flex", "alignItems" : "center", "gap":"1em"}} to="/add-visitors">
          <MngVisitorIcon>
            <IconBtn src={AddVisitoIcon} alt="add visitor icon" />
          </MngVisitorIcon>
          <label>Add Visitor</label>
        </Link>
      </MngActions>
      <VisitorsContainer>
        <TableHeading>
          <ColHead>Sr.No</ColHead>
          <ColHead>Name</ColHead>
          <ColHead>Date</ColHead>
          <ColHead>Action</ColHead>
        </TableHeading>
        <TableRows>
          {VisitorsData?.map((visitor) => (
            <Row key={visitor.id}>
              <RowData>{visitor.id}</RowData>
              <RowData>{visitor.name}</RowData>
              <RowData>{visitor.date}</RowData>
              <button>Manage</button>
            </Row>
          ))}
        </TableRows>
      </VisitorsContainer>
    </MngVisitorContainer>
  );
};

export default ManageVisitors;
