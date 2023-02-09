import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";
import { addVisitor, clearVisitor } from "../../redux/visitorSlice";
import {
  Actions,
  AddVisitorContainer,
  AddVisitorForm,
//   CloseBtn,
  InputField,
} from "./AddVisitor.styled";
// import CloseIcon from "@mui/icons-material/Close";

const AddVisitor = () => {

    const visitors = useSelector(state => state.visitors)
    // console.log(visitors)

    const [visitorData, setVisitorData] = useState({
      id : visitors.length + 1, 
      name : "",
      date : ""
    })

    // console.log(visitorData)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addVisitor(visitorData))
    navigate('/manage-visitors')
  };

  const  handleClear = (e) => {
    e.preventDefault();
    dispatch(clearVisitor())
    navigate('/manage-visitors')
  } 
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
            <input onChange={(e) => setVisitorData({...visitorData, name: e.target.value})} type="text" />
          </InputField>
          <InputField>
            <label>Date</label>
            <input onChange={(e) => setVisitorData({...visitorData, date: e.target.value})} type="date" />
          </InputField>
          <Actions>
            <button onClick={(e) => handleSubmit(e)}>Submit</button>
            <button onClick={(e) => handleClear(e)}>Clear</button>
            <Link to="/manage-visitors">Cancel</Link>
          </Actions>
        </AddVisitorForm>
      </AddVisitorContainer>
    </>
  );
};

export default AddVisitor;
