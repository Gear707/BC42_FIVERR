import axiosClient from "./axiosClient";

export const apiGetHiredJobs = async () => {
    const { data } = await axiosClient.get("/thue-cong-viec/lay-danh-sach-da-thue");
    return data;
};

export const apiDeleteHiredJob = async (jobId) => {
    const { data } = await axiosClient.delete(`/thue-cong-viec/${jobId}`);
    return data;
};