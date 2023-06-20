import axiosClient from "./axiosClient";

export const apiJobCategory = async () => {
  const { data } = await axiosClient.get(`cong-viec/lay-menu-loai-cong-viec`);
  return data;
};

export const apiJobList = async (currentPage, keyword) => {
  const { data } = await axiosClient.get(`cong-viec/phan-trang-tim-kiem`, {
    params: {
      pageIndex: currentPage,
      pageSize: 8,
      keyword: keyword,
    },
  });
  return data?.content;
};

// cong-viec/phan-trang-tim-kiem?pageIndex=2&pageSize=1&keyword=${keyword}

export const apiJobCategoryDetail = async (MaLoaiCongViec) => {
  const { data } = await axiosClient.get(
    `cong-viec/lay-chi-tiet-loai-cong-viec/${MaLoaiCongViec}`
  );
  return data;
};

export const apiServiceInfo = async (MaCongViec) => {
  const { data } = await axiosClient.get(
    `cong-viec/lay-cong-viec-chi-tiet/${MaCongViec}`
  );
  return data;
};
