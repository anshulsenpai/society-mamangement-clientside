import React from 'react'
import { QuickAccessContainer, QuickBox } from './QuickAccess.styled'
import icon1 from "../../Assets/icons/icon-1.png"
import icon2 from "../../Assets/icons/icon-2.png"
import icon3 from "../../Assets/icons/icon-3.png"
import icon4 from "../../Assets/icons/icon-4.png"
import icon5 from "../../Assets/icons/icon-5.png"


const QuickAccess = () => {
  return (
    <QuickAccessContainer>
        <QuickBox to='/bills'>
            <img src={icon1} alt="icon" />
            <label>Bills</label>
        </QuickBox>
        <QuickBox to='/add-visitors'>
            <img src={icon2} alt="icon" />
            <label>Visitors</label>
        </QuickBox>
        <QuickBox to='/meetings-events'>
            <img src={icon3} alt="icon" />
            <label>Meetings</label>
        </QuickBox>
        <QuickBox to='/marketplace'>
            <img src={icon5} alt="icon" />
            <label>Marketplace</label>
        </QuickBox>
        <QuickBox to='/meetings-events'>
            <img src={icon4} alt="icon" />
            <label>Events</label>
        </QuickBox>
    </QuickAccessContainer>
  )
}

export default QuickAccess