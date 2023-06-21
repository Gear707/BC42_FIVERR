import axiosClient from "./axiosClient";

export const apiSellerComment = async (MaCongViec) => {
  const { data } = await axiosClient.get(
    `/binh-luan/lay-binh-luan-theo-cong-viec/${MaCongViec}`
  );
  return data;
};

export const apiPostComment = async (payload) => {
  const { data } = await axiosClient.post(`/binh-luan`, payload);
  return data;
};
