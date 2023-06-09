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

export const apiUpdateUsername = async (userId, user, name) => {
    const payload = { ...user, name };

    const { data } = await axiosClient.put(`/users/${userId}`, payload);
    return data;
};

export const apiUpdateSkill = async (userId, user, skill) => {
    const payload = { ...user, skill };

    const { data } = await axiosClient.put(`/users/${userId}`, payload);
    return data;
};

export const apiUpdateCertification = async (userId, user, certification) => {
    const payload = { ...user, certification };

    const { data } = await axiosClient.put(`/users/${userId}`, payload);
    return data;
};

export const apiUploadAvatar = async (userAvatar) => {
    const formData = new FormData();
    formData.append("formFile", userAvatar);

    const response = await axiosClient.post("/users/upload-avatar", formData);
    return response?.data;
};