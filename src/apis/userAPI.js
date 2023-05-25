import axiosClient from "./axiosClient";

export const apiLogin = async (values) => {
    const { data } = await axiosClient.post("/auth/signin", values);
    return data;
};

export const apiRegister = async (values) => {
    const payload = {...values, skill: [], certification: []}

    const { data } = await axiosClient.post("/auth/signup", payload);
    return data;
};

