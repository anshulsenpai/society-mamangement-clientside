import { Menu, MenuCenter, MenuItem, MenuTop, ProMenuContainer } from './ProfileMenu.styled'
import AvatarImg from "../../Assets/icons/Avatar.png"

const ProfileMenu = () => {
  return (
    <ProMenuContainer>
        <Menu>
            <MenuTop>
                <img src={AvatarImg} alt="avatar" />
                <label>Kunal Shah</label>
                <p>Member</p>
            </MenuTop>
            <MenuCenter>
                <MenuItem to="/">My Orders</MenuItem>
                <MenuItem to="/my-profile">Manage Account</MenuItem>
                <MenuItem to="/">Payment History</MenuItem>
                <MenuItem to="/">Help</MenuItem>
                <MenuItem to="/">Log out</MenuItem>
            </MenuCenter>
        </Menu>
    </ProMenuContainer>
  )
}

export default ProfileMenu