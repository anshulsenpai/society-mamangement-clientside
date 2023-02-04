import { registerUser, loginUser, deleteUser } from "../API/auth";



import { loginFailure, loginStart, loginSuccess } from "./userSlice";
// import { publicRequest } from "../ReqMethods";


export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await loginUser(user)
        dispatch(loginSuccess(res.data));
        console.log(res)
    } catch (err) {
        dispatch(loginFailure());
    }
};

