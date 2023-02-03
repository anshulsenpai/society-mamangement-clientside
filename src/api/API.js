import axios from 'axios'
// const token = JSON.parse(localStorage.getItem('token'))
// export const baseUrl = process.env.REACT_APP_SERVER
export const baseUrl ="https://society-manager.onrender.com/api"
// axios.defaults.headers.common['authorization'] = token;

const API = axios.create({ baseURL: baseUrl })
export default API