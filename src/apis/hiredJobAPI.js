import axiosClient from "./axiosClient";

export const apiGetHiredJobs = async () => {
  const { data } = await axiosClient.get(
    "/thue-cong-viec/lay-danh-sach-da-thue"
  );
  return data;
};

export const apiDeleteHiredJob = async (jobId) => {
  const { data } = await axiosClient.delete(`/thue-cong-viec/${jobId}`);
  return data;
};

export const apiUpdateHiredJob = async (jobId, values) => {
  const payload = { ...values };
  const { data } = await axiosClient.put(`/thue-cong-viec/${jobId}`, payload);
  return data;
};

export const apiGetBookedJob = async () => {
  const { data } = await axiosClient.get("/thue-cong-viec");
  return data;
};
