import axios from "axios";

const token = typeof window !== "undefined" ? localStorage.getItem('token') : null;

const axiosInstance = axios.create({
    baseURL: "http://localhost:3000/api/",

    headers: {
        'Authorization': token ? `bearer ${token}` : null,
    }
})

export default axiosInstance;