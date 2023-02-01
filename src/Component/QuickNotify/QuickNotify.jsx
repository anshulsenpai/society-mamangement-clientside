import { Heading, QuickNotifyContainer, VisitorsList } from "./QuickNotify.styled"

const QuickNotify = () => {
  return (
    <QuickNotifyContainer>
        <Heading>Visitors</Heading>
        <VisitorsList>
            {/* API for visitors list will be here  */}
        </VisitorsList>
    </QuickNotifyContainer>
  )
}

export default QuickNotify