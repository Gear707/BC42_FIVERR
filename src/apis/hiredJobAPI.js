import axiosClient from "./axiosClient";

export const apiGetHiredJobs = async () => {
    const { data } = await axiosClient.get("/thue-cong-viec/lay-danh-sach-da-thue");
    return data;
};