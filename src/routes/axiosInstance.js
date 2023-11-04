import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://todo-server-blue.vercel.app/',
});

export default axiosInstance;