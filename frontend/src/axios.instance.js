import axios from "axios";
let token = localStorage.getItem("auth");
const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_USER}`,
  headers: {
    Authorization: token && `Bearer ${token}`
  }
});
const aGet = (url) => axiosInstance.get(url);
const aPost = (url, data) => axiosInstance.post(url, data);
const aDelete = (url) => axiosInstance.delete(url);
const aPut = (url, data) => axiosInstance.put(url, data);
export { aGet, aPost, aDelete, aPut };
