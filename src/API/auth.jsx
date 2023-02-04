import API from "./API"

export const registerUser = (data) => API.post('/auth/register',data);
export const loginUser = (data) => API.post('/auth/login',data);
export const  deleteUser = (id) => API.delete(`/delete/${id}`);