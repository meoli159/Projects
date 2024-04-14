import { axiosClient } from './axiosInstance';

export const getRevenues = async () => {
  const response = await axiosClient.get(`/api/v1/admin/dashboard`);
  return response.data;
};
