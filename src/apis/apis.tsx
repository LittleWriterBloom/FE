import axios, { AxiosInstance } from "axios";

const baseURL = import.meta.env.VITE_REACT_APP_BASE_URL;

const apis: AxiosInstance = axios.create({
  baseURL: baseURL,

  withCredentials: true,
  headers: {
    "Content-Type": "application/json"
  }
});

export default apis;
