import axios, { AxiosInstance } from "axios";

const clovaApiURL = import.meta.env.VITE_CLOVA_VOICE_API_URL;
const clovaApiKeyId = import.meta.env.VITE_CLOVA_VOICE_API_KEY_ID;
const clovaApiKey = import.meta.env.VITE_CLOVA_VOICE_API_KEY;

const clovaVoice: AxiosInstance = axios.create({
  baseURL: clovaApiURL,

  withCredentials: true,
  headers: {
    "X-NCP-APIGW-API-KEY-ID": clovaApiKeyId,
    "X-NCP-APIGW-API-KEY": clovaApiKey,
    "Content-Type": "application/x-www-form-urlencoded"
  }
});

export default clovaVoice;
