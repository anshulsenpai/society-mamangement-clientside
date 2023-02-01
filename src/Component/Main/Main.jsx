import QuickAccess from '../QuickAccess/QuickAccess'
import QuickNotify from '../QuickNotify/QuickNotify'
import { MainContainer } from './Main.styled'

const Main = () => {
  return (
    <MainContainer>
        <QuickAccess />
        <QuickNotify />
    </MainContainer>
  )
}

export default Main