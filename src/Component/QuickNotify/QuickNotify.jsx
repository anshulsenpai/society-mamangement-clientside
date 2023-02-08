import {
  ActionBtn,
  Heading,
  QuickNotifyContainer,
  VisitorActions,
  VisitorsInfo,
  VisitorsList,
} from "./QuickNotify.styled";
import { Notifics } from "../../Assets/Data/Notifcs";
import { useState } from "react";

const QuickNotify = () => {


  return (
    <QuickNotifyContainer>
      <Heading>Visitors</Heading>
      <VisitorsList>
        {/* API for visitors list will be here  */}
        {
          Notifics?.map(item => (
            <VisitorInfoComp item={item} key={item.id}/>
          ))
        }

      </VisitorsList>
    </QuickNotifyContainer>
  );
};

const VisitorInfoComp = (prop) => {

  const [accept, setAccept] = useState(false)
  const [decline, setDecline] = useState(false)

  const handleAccept = () => {
    setAccept(true)
  }

  const handleDecline = () => {
    setDecline(true)
  }

  return (
    <VisitorsInfo>
      <p>{prop.item.title}</p>
      <VisitorActions>
        {!decline && <ActionBtn colorType="blue" onClick={handleAccept}>{accept ? "Accepted" : "Accept"}</ActionBtn>}
        {!accept && <ActionBtn colorType="grey" onClick={handleDecline}>{decline ? "Declined" : "Decline"}</ActionBtn>}
      </VisitorActions>
    </VisitorsInfo>
  )
}

export default QuickNotify;
