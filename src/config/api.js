import axios from "axios";

export const API_URL = "http://159.223.93.68:8000";
// process.env.NEXT_PUBLIC_API || 'http://159.223.93.68:8000';

const axiosInstance = axios.create({
  baseURL: API_URL,
});

export default axiosInstance;
