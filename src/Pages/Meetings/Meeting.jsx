import {
  ButtonIcon,
  IconImg,
  LastMeetingContainer,
  ListHeading,
  MeetingAction,
  MeetingContainer,
  MeetingDetails,
  MeetingDetailsList,
  MeetingList,
  UpcomingMeetingsContainer,
} from "./Meeting.styled";
import MeetingIcon from "../../Assets/icons/meeting.png";
import { LastMeetings, MeetingsData } from "../../Assets/Data/MeetingsData";
import Layout from "../../Component/Layout/Layout";
import Navbar from "../../Component/Navbar/Navbar";

const Meeting = () => {
  return (
    <>
    <Navbar />
    <Layout>
      <MeetingContainer>
        <MeetingAction>
          {/* buttons  */}
          <ButtonIcon>
            <IconImg>
              <img src={MeetingIcon} alt="" />
            </IconImg>
            <label>New Meeting</label>
          </ButtonIcon>
        </MeetingAction>
        <UpcomingMeetingsContainer>
          {/* heading */}
          <p>Upcoming Meetings</p>
          {/* table  */}
          <MeetingList>
            <ListHeading>Date</ListHeading>
            <ListHeading>Time</ListHeading>
            <ListHeading>Subject</ListHeading>
            <ListHeading>Venu</ListHeading>
          </MeetingList>

          {MeetingsData?.map((meeting) => (
            <MeetingDetailsList key={meeting.id}>
              <MeetingDetails>{meeting.date}</MeetingDetails>
              <MeetingDetails>{meeting.time}</MeetingDetails>
              <MeetingDetails>{meeting.subject}</MeetingDetails>
              <MeetingDetails>{meeting.venu}</MeetingDetails>
            </MeetingDetailsList>
          ))}
        </UpcomingMeetingsContainer>
        <UpcomingMeetingsContainer>
          {/* heading */}
          <p>Last Meetings</p>
          {/* table  */}
          <MeetingList>
            <ListHeading>Date</ListHeading>
            <ListHeading>Time</ListHeading>
            <ListHeading>Subject</ListHeading>
            <ListHeading>Venu</ListHeading>
          </MeetingList>

          {LastMeetings?.map((meeting) => (
            <MeetingDetailsList key={meeting.id}>
              <MeetingDetails>{meeting.date}</MeetingDetails>
              <MeetingDetails>{meeting.time}</MeetingDetails>
              <MeetingDetails>{meeting.subject}</MeetingDetails>
              <MeetingDetails>{meeting.venu}</MeetingDetails>
            </MeetingDetailsList>
          ))}
        </UpcomingMeetingsContainer>
      </MeetingContainer>
    </Layout>
    </>
  );
};

export default Meeting;
