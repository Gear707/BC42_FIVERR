import axiosClient from "./axiosClient";

// Authentication
export const apiLogin = async (values) => {
    const { data } = await axiosClient.post("/auth/signin", values);
    return data;
};

export const apiRegister = async (values) => {
    const { data } = await axiosClient.post("/auth/signup", values);
    return data;
};


// User-related
export const apiGetUser = async (userId) => {
    const { data } = await axiosClient.get(`/users/${userId}`);
    return data;
};

export const apiUpdateUser = async (userId, user, name, skill = [], certification = []) => {
    const payload = { ...user, name, skill, certification };

    const { data } = await axiosClient.put(`/users/${userId}`, payload);
    return data;
};

export const apiUploadAvatar = async (userAvatar) => {
    const formData = new FormData();
    formData.append("avatar", userAvatar);

    const data = await axiosClient.post("/users/upload-avatar", formData, {
        headers: { "Content-Type": "multipart/form-data" }
    });
    return data;
};