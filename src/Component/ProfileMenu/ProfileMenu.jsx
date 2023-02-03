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
                <MenuItem>My Orders</MenuItem>
                <MenuItem>Manage Account</MenuItem>
                <MenuItem>Payment History</MenuItem>
                <MenuItem>Help</MenuItem>
                <MenuItem>Log out</MenuItem>
            </MenuCenter>
        </Menu>
    </ProMenuContainer>
  )
}

export default ProfileMenu