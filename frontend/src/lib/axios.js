import axios from "axios";

// Use relative `/api` base so Vite dev server proxy forwards requests to the backend.
// This makes requests same-origin in development which allows httpOnly cookies
// to be set and sent without requiring SameSite=None + Secure.
const BASE_URL = "https://streamify-tt74.onrender.com/api";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // send cookies with the request
});
