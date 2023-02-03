import {
  ActionBtn,
  Heading,
  QuickNotifyContainer,
  VisitorActions,
  VisitorsInfo,
  VisitorsList,
} from "./QuickNotify.styled";
import { Notifics } from "../../Assets/Data/Notifcs";

const QuickNotify = () => {
  return (
    <QuickNotifyContainer>
      <Heading>Visitors</Heading>
      <VisitorsList>
        {/* API for visitors list will be here  */}
        {Notifics?.map((item) => (
          <VisitorsInfo key={item.id}>
            <p>{item.title}</p>
            <VisitorActions>
              <ActionBtn colorType="blue">Accept</ActionBtn>
              <ActionBtn colorType="grey">Decline</ActionBtn>
            </VisitorActions>
          </VisitorsInfo>
        ))}
      </VisitorsList>
    </QuickNotifyContainer>
  );
};

export default QuickNotify;
