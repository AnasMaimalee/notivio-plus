// lib/api.ts
import axios from "axios";

const LOCAL_API = "http://localhost:8001/api";
const PROD_API = "https://maimalee-notivio.vercel.app/api";

// You can switch between local and production based on environment
const BASE_URL = PROD_API || LOCAL_API;

// Create Axios instance
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Automatically attach auth token if it exists
api.interceptors.request.use((config) => {
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  if (token && config.headers) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export default api;
