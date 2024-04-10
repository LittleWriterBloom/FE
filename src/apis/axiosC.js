import axios from "axios";

const baseURL = import.meta.env.VITE_APP_BASE_URL;

const instance = axios.create({
  baseURL: baseURL,

  withCredentials: true,
  headers: {
    "Content-Type": "application/json"
  }
});

export default instance;
