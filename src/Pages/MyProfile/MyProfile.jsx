import React, { useState } from "react";
import Layout from "../../Component/Layout/Layout";
import Navbar from "../../Component/Navbar/Navbar";
import {
  Button,
  InfoField,
  MyProfileContainer,
  MyProfileWrapper,
  ProfileName,
  Save,
  UserDetails,
  UserInfoFields,
  UserProfilePic,
} from "./MyProfile.styled";
import profileAvatar from "../../Assets/icons/Avatar.png";

const MyProfile = () => {
  const [clickEdit, setSetClickEdit] = useState(false);
  const [userData, setUserData] = useState({
    name: "Kunal Shah",
    email: "kunalshah01@gmail.com",
    phoneNo: "+919561347845",
    address: "B Wing Flat 102",
    type: "Member"
  });

  const handleEdit = () => {
    setSetClickEdit((prev) => !prev);
  };
  const handleSave = () => {
    setSetClickEdit(false);
  };

  return (
    <>
      <Navbar />
      <Layout>
        <MyProfileContainer>
          <MyProfileWrapper>
            <h2>Profile</h2>
            <UserDetails>
              <UserProfilePic>
                <img src={profileAvatar} alt="profile picture" />
                <ProfileName>
                  <p>{userData.name}</p>
                  <label>{userData.type}</label>
                </ProfileName>
              </UserProfilePic>
              <UserInfoFields>
                <InfoField>
                  <label>Name</label>
                  <input
                    value={userData.name}
                    onChange={(e) =>
                      clickEdit &&
                      setUserData({ ...userData, name: e.target.value })
                    }
                    type="text"
                  />
                </InfoField>
                <InfoField>
                  <label>Email</label>
                  <input
                    value={userData.email}
                    onChange={(e) =>
                      clickEdit &&
                      setUserData({ ...userData, email: e.target.value })
                    }
                    type="email"
                  />
                </InfoField>
                <InfoField>
                  <label>Phone Number</label>
                  <input
                    value={userData.phoneNo}
                    onChange={(e) =>
                      clickEdit &&
                      setUserData({ ...userData, phoneNo: e.target.value })
                    }
                    type="text"
                  />
                </InfoField>
                <InfoField>
                  <label>Address (Wing & Flat number)</label>
                  <input
                    value={userData.address}
                    onChange={(e) =>
                      clickEdit &&
                      setUserData({ ...userData, address: e.target.value })
                    }
                    type="text"
                  />
                </InfoField>
              </UserInfoFields>
            </UserDetails>
            <Button onClick={handleEdit}>Edit</Button>
            {clickEdit && <Button onClick={handleSave}>Save</Button>}
          </MyProfileWrapper>
        </MyProfileContainer>
      </Layout>
    </>
  );
};

export default MyProfile;
