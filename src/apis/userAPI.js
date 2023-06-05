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