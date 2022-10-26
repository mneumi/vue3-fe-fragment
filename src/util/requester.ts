import axios from "axios"

const requester = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_PREFIX,
  timeout: 5000
})

requester.interceptors.request.use((config) => {
  if (!config.headers) {
    config.headers = {}
  }
  config.headers.icode = import.meta.env.VITE_TOKEN
  return config
})

requester.interceptors.response.use((response) => {
  const { success, message, data } = response.data
  if (success) {
    return data
  }

  return Promise.reject(new Error(message))
})

export { requester }
