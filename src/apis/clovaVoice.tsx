import axios, { AxiosInstance } from "axios";

const clovaApiURL = import.meta.env.VITE_CLOVA_VOICE_API_URL;

const clovaVoice: AxiosInstance = axios.create({
  baseURL: clovaApiURL,
});

export default clovaVoice;
