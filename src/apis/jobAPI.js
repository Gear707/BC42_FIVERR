import axiosClient from "./axioisClient";

export const apiJobList = async (keyword) => {
  const { data } = await axiosClient.get(
    `cong-viec/lay-danh-sach-cong-viec-theo-ten/${keyword}`
  );
  return data?.content;
};

export const apiCategoryList = async () => {
  const { data } = await axiosClient.get(`loai-cong-viec`);
  return data;
};
