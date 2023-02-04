import { Button, Menu, MenuCenter, MenuItem, MenuTop, ProMenuContainer } from './ProfileMenu.styled'
import AvatarImg from "../../Assets/icons/Avatar.png"
import { logOut } from '../../redux/userSlice'
import { useDispatch, useSelector } from 'react-redux'

const ProfileMenu = () => {

  const dispatch = useDispatch()

  const handleLogOut = () => {
    dispatch(logOut())
  }

  const user = useSelector(state => state.user.currentUser.user)
  // console.log(user)

  return (
    <ProMenuContainer>
        <Menu>
            <MenuTop>
                <img src={AvatarImg} alt="avatar" />
                <label>{user.name}</label>
                <p>{user.user_type}</p>
            </MenuTop>
            <MenuCenter>
                <MenuItem to="/">My Orders</MenuItem>
                <MenuItem to="/my-profile">Manage Account</MenuItem>
                <MenuItem to="/">Payment History</MenuItem>
                <MenuItem to="/">Help</MenuItem>
                <Button onClick={handleLogOut} >Log out</Button>
            </MenuCenter>
        </Menu>
    </ProMenuContainer>
  )
}

export default ProfileMenu