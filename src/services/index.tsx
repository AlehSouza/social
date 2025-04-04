import axios from "axios";

const baseURL = 'https://social-media-api-6dq3.onrender.com'

const api = axios.create({
    baseURL,
})

export default api