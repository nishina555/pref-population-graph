import axios from "axios";

const baseURL = `${process.env.NEXT_PUBLIC_HOST}/api/v1`;
const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: { "X-API-KEY": `${process.env.NEXT_PUBLIC_API_KEY}` },
});

export default axiosInstance;
