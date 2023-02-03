import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";
import {
  Actions,
  AddVisitorContainer,
  AddVisitorForm,
//   CloseBtn,
  InputField,
} from "./AddVisitor.styled";
// import CloseIcon from "@mui/icons-material/Close";

const AddVisitor = () => {

    const [visitorData, setVisitorData] = useState()

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Navbar />
      <AddVisitorContainer>
        <AddVisitorForm>
          {/* <CloseBtn >
            <CloseIcon className="mui--icons" />
          </CloseBtn> */}
          <InputField>
            <label>Name</label>
            <input required="required" type="text" />
          </InputField>
          <InputField>
            <label>Date</label>
            <input required="required" type="date" />
          </InputField>
          <Actions>
            <button onClick={(e) => handleSubmit(e)}>Submit</button>
            <Link to="/manage-visitors">Cancel</Link>
          </Actions>
        </AddVisitorForm>
      </AddVisitorContainer>
    </>
  );
};

export default AddVisitor;
