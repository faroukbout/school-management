import axios from "axios"

export const axiosClient = axios.create({
    baseURL: "http://localhost:8000", // Change to your backend URL
    withCredentials: true, // ✅ Required to send cookies
});
axiosClient.interceptors.request.use((config) => {
    const xsrfToken = document.cookie
        .split("; ")
        .find(row => row.startsWith("XSRF-TOKEN"))
        ?.split("=")[1];

    if (xsrfToken) {
        config.headers["X-XSRF-TOKEN"] = decodeURIComponent(xsrfToken);
    }

    return config;
});