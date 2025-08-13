import axios from "axios"

const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://pierre-gaillard.mds-vannes.yt/api"

const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
})

export default apiClient
