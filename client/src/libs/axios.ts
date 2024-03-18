import axios from "axios";
import { useAuthstore } from "../store/auth";

const authAPI = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
})

authAPI.interceptors.request.use(config => {
  const token = useAuthstore.getState().token
 
  config.headers.set('Authorization', `Bearer ${token}`)

  return config
  
})

export default authAPI