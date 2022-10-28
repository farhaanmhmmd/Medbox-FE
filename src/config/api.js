import axios from "axios";

export const API_URL = "http://localhost:8000";
// process.env.NEXT_PUBLIC_API || 'http://localhost:8000';

const axiosInstance = axios.create({
  baseURL: API_URL,
});

export default axiosInstance;
