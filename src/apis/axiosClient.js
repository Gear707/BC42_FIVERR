import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https://fiverrnew.cybersoft.edu.vn/api",
    headers: {
        TokenCybersoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0MiIsIkhldEhhblN0cmluZyI6IjMwLzA5LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5NjAzMjAwMDAwMCIsIm5iZiI6MTY2NzA2MjgwMCwiZXhwIjoxNjk2MTc5NjAwfQ.i6JqYnGkwyHl6dkDHnjFWbPfBEl2l4SXAp4r7h9Ecpw",
    },
});

axiosClient.interceptors.request.use((config) => {
    // config: chứa thông tin của request từ client gửi lên server

    // Thêm key Authorization vào headers của request nếu user đã đăng nhập
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (user) {
        config.headers.Authorization = `Bearer ${user.token}`;
    }

    return config;
});

axiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Xử lý những error chung

        // Lỗi 401: Trường hợp token hết hạn => Đăng xuất
        if (error.response.status === 401) {
            localStorage.removeItem("userInfo");
            //   window.history.replaceState(null, null, "/login");
            window.location.href = "/login";
        }
    }
);

export default axiosClient;