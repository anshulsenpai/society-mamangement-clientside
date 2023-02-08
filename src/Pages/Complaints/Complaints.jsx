import React, { useState } from "react";
import Layout from "../../Component/Layout/Layout";
import Navbar from "../../Component/Navbar/Navbar";
import {
  AllComplaints,
  ComplaintContainer,
  ComplaintDesc,
  ComplaintDetail,
  ComplaintWrapper,
  FileComplaintButton,
  FileComplaintIcon,
  TitleAction,
} from "./Complaints.styled";
import complaintIcon from "../../Assets/icons/complaint.png";
import { useSelector } from "react-redux";
// import { complaintsData } from "../../Assets/Data/Complaints.data";

const Complaints = () => {
  const [ShowComplaint, setShowComplaint] = useState(false);

  const complaintsData = useSelector(state => state.complaints.complaints)

  const handleReadMore = () => {
    setShowComplaint((prev) => !prev);
  };

  return (
    <>
      <Navbar />
      <Layout>
        <ComplaintContainer>
          <ComplaintWrapper>
            <h2>Complaints</h2>
            <FileComplaintButton to='/add-complaint'>
              <FileComplaintIcon>
                <img src={complaintIcon} alt="" />
              </FileComplaintIcon>
              <label>Add Complaint</label>
            </FileComplaintButton>
            <AllComplaints>
              {complaintsData?.map((complaint, id) => (
                <ComplaintDetail key={id}>
                  <TitleAction>
                    <p>{complaint.title}</p>
                    {/* <p>{complaint.name}</p> */}
                    <button onClick={handleReadMore}>Read More</button>
                  </TitleAction>
                  <ComplaintDesc>
                    {/* <img src={complaint.img} alt="" /> */}
                    <p className={!ShowComplaint ? "complaint--desc" : null}>
                      {complaint.desc}
                    </p>
                  </ComplaintDesc>
                </ComplaintDetail>
              ))}
            </AllComplaints>
          </ComplaintWrapper>
        </ComplaintContainer>
      </Layout>
    </>
  );
};

export default Complaints;
