import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://fiverrnew.cybersoft.edu.vn/api",
  headers: {
    tokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0MiIsIkhldEhhblN0cmluZyI6IjEwLzEwLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5Njg5NjAwMDAwMCIsIm5iZiI6MTY2NzA2MjgwMCwiZXhwIjoxNjk3MDQzNjAwfQ.g_aUM-jnWQ1i_eCbjNfvNxudUdUPpfC36068g5o9Ung",
  },
});

axiosClient.interceptors.request.use((config) => {
  // config: chứa thông tin của request từ client gửi lên server

  // Thêm key token vào headers của request nếu user đã đăng nhập
  const user =
    JSON.parse(localStorage.getItem("userInfo")) ||
    JSON.parse(sessionStorage.getItem("userInfo"));
  if (user) {
    config.headers.token = user.token;
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
      sessionStorage.removeItem("userInfo");
      //   window.history.replaceState(null, null, "/login");
      window.location.href = "/login";
    }
  }
);

export default axiosClient;
