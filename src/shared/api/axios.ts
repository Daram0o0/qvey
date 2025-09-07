import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL ?? '', // 실제 서버 주소로 바꿔야 합니다
    withCredentials: true,
})

export default axiosInstance
