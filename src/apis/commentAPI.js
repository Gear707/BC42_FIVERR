import axiosClient from "./axioisClient";

export const apiSellerComment = async (MaCongViec) => {
  const { data } = await axiosClient.get(
    `binh-luan/lay-binh-luan-theo-cong-viec/${MaCongViec}`
  );
  return data;
};

export const apiPostComment = async (payload) => {
  // const payload = {
  //   id: 0,
  //   maCongViec: 0,
  //   maNguoiBinhLuan: 0,
  //   ngayBinhLuan: ,
  //   noiDung: ,
  //   saoBinhLuan: 0
  // }
  // payload = [...payload];
  const { data } = await axiosClient.post(`binh-luan`, payload);
  return data;
};
