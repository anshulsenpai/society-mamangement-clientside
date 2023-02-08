import { display } from "@mui/system";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { complaintsData } from "../../Assets/Data/Complaints.data";
import { addComplaint, clearComplaints } from "../../redux/complaintSlice";
import { Actions, InputField } from "../AddVisitor/AddVisitor.styled";

const AddComplaint = () => {

    const complaints = useSelector(state => state.complaints.complaints)
    // console.log(complaints)


    const [complaintData, setComplaintData] = useState({
      id: complaints.length,
      name : "",
      title: "",
      desc: "",
    })

    // console.log(complaintData)
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addComplaint(complaintData))
        navigate('/complaints')
    }

    const clearAll = (e) => {
      e.preventDefault()
        dispatch(clearComplaints(complaintData))
        navigate('/complaints')
    }

  return (
    <OrderPlaceContainer>
      <OrderPlaceWrapper>
        <InputField>
          <label>Name</label>
          <input onChange={(e) => setComplaintData({...complaintData, name : e.target.value})} required="required" type="text" />
        </InputField>
        <InputField>
          <label>Subject</label>
          <input onChange={(e) => setComplaintData({...complaintData, title : e.target.value})} required="required" type="text" />
        </InputField>
        <InputField>
          <label>Description</label>
          <input onChange={(e) => setComplaintData({...complaintData, desc : e.target.value})} required="required" type="text" />
        </InputField>
        <Actions>
          <button type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
          <button onClick={(e) => clearAll(e)}>clear all</button>
          <Link to="/complaints">Cancel</Link>
        </Actions>
      </OrderPlaceWrapper>
    </OrderPlaceContainer>
  );
};

const OrderPlaceContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OrderPlaceWrapper = styled.div`
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
    background-color: #083aa9;
    color: #fff;
    border: none;
    border-radius: 6px;
    font-weight: 600;
  }
`;

export default AddComplaint;
